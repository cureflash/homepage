async function departure(requestedNotch='P3'){
  if(!operationAvailable()||sequenceLocked()) return;
  if(state.currentIndex==null||state.phase!=='STOPPED') return;
  const token=++state.sequenceToken;
  state.vehicleState='DEPARTURE_SEQUENCE'; state.driveState='STABLE'; state.selectedNotch=requestedNotch; speedometer.reset(0); updateMarquee(''); renderAll();
  const rid=nextRunID();
  try {
    if(!state.debug) await sendCommand(`AUDIO,STOP,${rid}`);
    let first=CONFIG.audio.defaultDepartureFirst;
    const cur=currentStation();
    if(state.direction==='down'&&cur?.key==='tokyo') first=CONFIG.audio.tokyoDownboundFirst;
    await maybePlay(first,rid); if(token!==state.sequenceToken)return;
    await sleep(1000); await maybePlay(CONFIG.audio.otome,rid); if(token!==state.sequenceToken)return;
    await sleep(1000); if(token!==state.sequenceToken)return;
    state.phase='RUNNING'; state.vehicleState='RUNNING'; state.driveState='PROGRESS';
    const target=CONFIG.motor.notch[requestedNotch].duty;
    speedometer.reset(0);
    if(state.debug){ speedometer.startSlew(CONFIG.motor.startupFirstDuty,CONFIG.motor.startupFirstDuration); await sleep(CONFIG.motor.startupFirstDuration*1000); if(token!==state.sequenceToken)return; speedometer.startSlew(CONFIG.motor.startupSecondDuty,CONFIG.motor.startupSecondDuration); if(target>CONFIG.motor.startupSecondDuty){ await sleep(CONFIG.motor.startupSecondDuration*1000); if(token!==state.sequenceToken)return; speedometer.startSlew(target); } }
    else { await setDutyDevice(requestedNotch,rid); speedometer.startSlew(target); }
    state.driveState='STABLE'; updateRunningMarquee(); schedulePassing(); renderAll();
  } catch(e){ state.vehicleState='READY'; state.driveState='STOP'; setTx(`ERROR : ${e.message}`); renderAll(); }
}

async function setDutyDevice(notch, suppliedRunID=null){
  const rid=suppliedRunID??nextRunID(); const duty=CONFIG.motor.notch[notch].duty;
  await sendCommand(`MOTOR,SET_DUTY,${rid},${duty}`);
  return rid;
}

async function setNotch(notch){
  if(!operationAvailable()||sequenceLocked()) return;
  if(state.phase==='STOPPED'&&notch!=='N'){ departure(notch); return; }
  state.selectedNotch=notch; renderAll();
  const token=state.sequenceToken;
  try { await maybePlay(CONFIG.audio.atc,nextRunID()); if(token!==state.sequenceToken)return; const duty=CONFIG.motor.notch[notch].duty; if(state.debug)speedometer.startSlew(duty); else await setDutyDevice(notch); speedometer.startSlew(duty); } catch(e){ setTx(`ERROR : ${e.message}`); }
}

async function stopAtNext(){
  if(!operationAvailable()||sequenceLocked()||state.phase!=='RUNNING'||!nextStation()) return;
  const token=++state.sequenceToken; const target=nextStation(); state.pendingArrival=target.key; state.phase='APPROACHING'; state.vehicleState='STOP_SEQUENCE'; state.stopSequence='blanking'; state.selectedNotch='N'; updateMarquee(''); renderAll();
  const rid=nextRunID();
  try {
    const p=speedometer.presentation();
    let prePromise=Promise.resolve();
    if(p.speed>CONFIG.stop.preTargetSpeed+.1){ speedometer.startSlew(CONFIG.stop.preTargetDuty,CONFIG.stop.preDuration); prePromise=sleep(CONFIG.stop.preDuration*1000); }
    const chimePromise=(async()=>{ if(p.speed>CONFIG.stop.preTargetSpeed+.1) await sleep(1000); await maybePlay(selectedChimeTrack(),rid); const code=routeCode(true); const approach=CONFIG.audio.arrivalApproach[code]; if(token!==state.sequenceToken)return; await maybePlay(approach,rid); })();
    await Promise.all([prePromise,chimePromise]); if(token!==state.sequenceToken)return;
    await sleep(CONFIG.stop.finalBrakeDelay*1000); if(token!==state.sequenceToken)return;
    state.stopSequence='braking'; scene.startArrival(target.title); speedometer.startSlew(0,CONFIG.stop.finalBrakeDuration); if(!state.debug) await sendCommand(`MOTOR,STOP_PROFILE,${rid}`);
    await sleep(CONFIG.stop.finalBrakeDuration*1000+500); if(token!==state.sequenceToken)return;
    state.currentIndex=stationIndex(target.key); state.pendingArrival=null; state.stopSequence='none'; state.selectedNotch='N'; speedometer.reset(0); scene.commitArrival(target.title);
    const dest=destinationObj(); if(dest&&target.key===dest.terminal){ state.phase='ARRIVED';state.vehicleState='ARRIVED';state.driveState='STOP';updateMarquee(`${target.title}に到着しました。`,'static'); }
    else { state.phase='STOPPED';state.vehicleState='READY';state.driveState='STOP';updatePreDepartureMarquee(); }
    const arrTrack=CONFIG.audio.arrivalStation[target.key]; if(arrTrack) maybePlay(arrTrack,nextRunID());
    renderAll();
  } catch(e){ setTx(`STOP ERROR : ${e.message}`); state.stopSequence='none';state.vehicleState='RUNNING';state.phase='RUNNING';renderAll(); }
}

async function horn(){ if(!operationAvailable())return; try{await maybePlay(CONFIG.audio.horn,nextRunID());}catch(e){setTx(`ERROR : ${e.message}`);} }

async function emergencyToggle(){
  if(!operationAvailable())return;
  if(!state.emergency){ ++state.sequenceToken; state.emergency=true; state.vehicleState='EMERGENCY_STOPPED'; state.phase='EMERGENCY_STOP'; state.driveState='STOP'; state.stopSequence='none'; state.selectedNotch='N'; speedometer.startSlew(0,1.5); updateMarquee('非常停止','static'); if(!state.debug) try{await sendCommand(`MOTOR,EMERGENCY_STOP,${nextRunID()}`);}catch(_){} }
  else { state.emergency=false; if(!state.debug) try{await sendCommand(`MOTOR,EMERGENCY_RESET,${nextRunID()}`);}catch(_){} await sleep(1200); state.vehicleState='READY'; state.phase=state.currentIndex==null?'UNCONFIGURED':'STOPPED'; state.driveState='STOP'; speedometer.reset(0); if(currentStation())scene.commitArrival(currentStation().title); updatePreDepartureMarquee(); }
  renderAll();
}

function updateRunningMarquee(){ const cur=currentStation(), next=nextStation(); if(cur&&next)updateMarquee(`${cur.title}　→　${next.title}`,'static'); }
function schedulePassing(){ const cur=currentStation(),next=nextStation(); const list=cur&&next?PASSING[`${cur.key}>${next.key}`]||[]:[]; state.passingIndex=0; state.nextPassingAt=performance.now()+10000; state.passingList=list; }
function updatePassing(now){ if(state.phase!=='RUNNING'||!state.passingList?.length||now<state.nextPassingAt)return; const name=state.passingList[state.passingIndex++%state.passingList.length]; scene.triggerPassing(name); updateMarquee(`ただいま　${name}駅を通過`); state.nextPassingAt=now+12000; }
