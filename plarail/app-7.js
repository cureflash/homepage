function updateServiceStyle(){
  const service=state.service?SERVICES[state.service]:null; const label=$('serviceLabel');
  label.style.background=service?.bg||'#fff'; label.style.color=service?.fg||'#000';
  $('serviceTitle').textContent=service?.title||'種別'; $('serviceCode').textContent=service?.code||'SERVICE';
  const dest=destinationObj(); $('destinationTitle').textContent=dest?.title||'行先'; $('destinationCode').textContent=dest?.code||'DESTINATION';
}

function renderRouteMap(){
  let list=[...STATIONS]; if(state.direction==='down')list.reverse();
  const cur=currentStation(), next=nextStation(); const moving=['RUNNING','APPROACHING'].includes(state.phase);
  let html=''; list.forEach((s,i)=>{ const cls=(!moving&&cur?.key===s.key)?'current':(moving&&next?.key===s.key?'next':''); html+=`<div class="route-station ${cls}"><span class="dot"></span><span>${s.title.split('').join('<br>')}</span></div>`; if(i<list.length-1){ const a=list[i],b=list[i+1],active=moving&&((a.key===cur?.key&&b.key===next?.key)||(a.key===next?.key&&b.key===cur?.key)); html+=`<span class="route-connector ${active?'active':''}"></span>`; } }); $('routeMap').innerHTML=html;
}

function renderGauge(p){
  for(let i=0;i<7;i++) $('gseg'+i)?.classList.toggle('active',p.gauge>=i+1);
  for(let i=0;i<8;i++) $('gnode'+i)?.classList.toggle('active',i===0?p.speed<=.5:p.gauge>=i-.05);
  $('speedReadout').textContent=String(Math.round(p.speed)); $('notchReadout').textContent=state.selectedNotch;
}

function renderAll(){
  updateServiceStyle();
  const op=operationAvailable(); const allGreen=systemAllGreen();
  $('systemPanel').className=`subpanel system-panel ${allGreen?'green-state':'red-state'}`;
  $('systemStatus').textContent=allGreen?'SYSTEM ALL GREEN':'SYSTEM RED'; $('systemDetail').textContent=allGreen?'OPERATION ENABLED':'OPERATION LOCKED';
  $('linkBadge').textContent=state.debug?'DEBUG MODE 2 / READY':(state.connected?'LINKED':'OFFLINE'); $('linkBadge').style.color=state.debug?'var(--orange)':(state.connected?'var(--green)':'#777');
  $('bleLamp').className=`lamp ${state.debug||state.bleReady?'green':state.connected?'green':'orange'}`;
  $('bleStatus').textContent=state.debug?'SIM READY':state.bleReady?'接続':state.connected?'接続確認中':'未接続';
  $('connectButton').textContent=state.debug?'EXIT DEBUG':state.connected?'DISCONNECT':'CONNECT';
  $('debugButton').style.display=state.debug?'none':'';
  const battery=state.debug?7.4:state.battery; $('batteryText').textContent=battery==null?'--- V':`${battery.toFixed(1)} V`; $('batteryText').style.color=battery==null?'#777':battery<6.8?'var(--red)':battery<7.2?'var(--yellow)':'var(--green)'; $('batteryDetail').textContent=state.debug?'SIMULATED TELEMETRY / BLE SUPPRESSED':battery==null?(state.connected?'WAITING':'BLE OFFLINE'):'ADC TELEMETRY';
  $('trainStatus').textContent=(state.phase==='STOPPED'&&state.vehicleState==='READY')?'NOW BOARDING':state.vehicleState; $('trainStatus').style.color=allGreen?'var(--green)':'var(--red)'; $('motorStatus').textContent=state.driveState; $('motorStatus').style.color=state.driveState==='FAULT'?'var(--red)':op?'var(--green)':'#777';
  const cur=currentStation(), next=nextStation(); let routeText='経路未設定'; if(cur){ if(state.phase==='STOPPED')routeText=`${cur.title} 停車中`; else if(state.phase==='RUNNING'||state.phase==='APPROACHING')routeText=`${cur.title} → ${next?.title||''}`; else if(state.phase==='ARRIVED')routeText=`${cur.title} 到着`; else routeText=cur.title; }
  $('routeSectionText').textContent=routeText; $('directionText').textContent=state.direction==='up'?'上り':state.direction==='down'?'下り':'方向未設定'; $('routeDirection').textContent=state.direction==='up'?'上り':state.direction==='down'?'下り':'未設定'; $('routePhaseText').textContent=state.phase==='RUNNING'?'':({UNCONFIGURED:'経路未設定',STOPPED:'駅停車中',APPROACHING:'停車進入中',EMERGENCY_STOP:'区間内非常停止',ARRIVED:'終着駅到着'}[state.phase]||'');
  $('chimeTitle').textContent=(CHIMES[$('chimeSelect').value]||CHIMES.ambitious).title;
  $('driverStatus').textContent=op?(sequenceLocked()?'SEQUENCE ACTIVE':'READY'):'LOCKED'; $('driverStatus').style.color=op?'var(--green)':'var(--orange)'; $('app')?.querySelector('.operation-panel')?.classList.toggle('locked',!op);
  document.querySelectorAll('.notch').forEach((b)=>b.classList.toggle('selected',b.dataset.notch===state.selectedNotch));
  $('emergencyButton').textContent=state.emergency?'↻ 復帰':'! 非常停止'; $('emergencyButton').className=`action ${state.emergency?'orange':'red'}`;
  $('footerDriveState').textContent=state.driveState; renderRouteMap();
}

async function enableDebug(){
  if(state.connected&&!state.debug) ble.disconnect();
  state.debug=true;state.connected=true;state.bleReady=true;state.blePhase='ready';state.battery=7.4;state.vehicleState=state.currentIndex==null?'READY':'READY';state.driveState=state.currentIndex==null?'STOP':'STOP'; setTx('DEBUG MODE 2 ENABLED');setRx('APP-ONLY / BLE WRITE SUPPRESSED'); renderAll();
}

function disableDebug(){ state.debug=false;state.connected=false;state.bleReady=false;state.battery=null;state.vehicleState='UNKNOWN';state.driveState='DISCONNECTED'; speedometer.reset(0); setTx('DEBUG MODE 2 DISABLED'); setRx('---'); renderAll(); }

async function toggleConnection(){
  if(state.debug){disableDebug();return;}
  if(state.connected){ble.disconnect();state.connected=false;state.bleReady=false;state.vehicleState='UNKNOWN';state.driveState='DISCONNECTED';renderAll();return;}
  try{ state.blePhase='connecting';$('bleStatus').textContent='接続中'; await ble.connect(); state.connected=true;renderAll(); }
  catch(e){state.connected=false;state.bleReady=false;setTx(`BLE ERROR : ${e.message}`);alert(e.message);renderAll();}
}

function parseTelemetry(line){
  const p=line.split(',');
  if(line==='AUTH,REQUIRED')return{type:'authRequired'};
  if(line==='AUTH,OK')return{type:'authOK'};
  if(line==='AUTH,FAIL')return{type:'authFail'};
  if(p[0]==='STATE'&&p.length>=4)return{type:p[2].toLowerCase(),runID:+p[1],state:p[3],parts:p.slice(4)};
  if(p[0]==='AUDIO'&&p.length>=4)return{type:'audio',runID:+p[1],phase:p[2],track:+p[3],parts:p.slice(4)};
  if(p[0]==='POWER'&&p[2]==='VOLTAGE_MV')return{type:'power',runID:+p[1],mv:+p[3]};
  if(p[0]==='COMMAND'&&p.length>=4)return{type:'command',runID:+p[1],phase:p[2],command:p[3],parts:p.slice(4)};
  return{type:'unknown',line};
}

async function handleBLELine(line){
  if(line==='DISCONNECTED'){state.connected=false;state.bleReady=false;state.vehicleState='UNKNOWN';state.driveState='DISCONNECTED';setRx('DISCONNECTED');renderAll();return;}
  setRx(line); const t=parseTelemetry(line);
  if(t.type==='authRequired'){ $('passwordDialog').showModal(); setTimeout(()=>$('passwordInput').focus(),50); }
  else if(t.type==='authOK'){ state.connected=true;state.blePhase='awaitingReady'; }
  else if(t.type==='authFail'){ state.bleReady=false;alert('BLEパスワードが違います。'); }
  else if(t.type==='connection'&&t.state==='READY'){ state.connected=true;state.bleReady=true;state.vehicleState='READY';state.driveState=state.currentIndex==null?'STOP':'STOP'; }
  else if(t.type==='power'){ state.battery=t.mv/1000; }
  else if(t.type==='vehicle'){ state.vehicleState=t.state; }
  else if(t.type==='motor'){
    state.driveState=t.state;
    const di=t.parts.indexOf('DUTY'); if(di>=0&&t.parts[di+1]) speedometer.startSlew(+t.parts[di+1]);
  }
  else if(t.type==='audio'){
    if(t.phase==='FINISHED')audioManager.settleDevice(t.runID,t.track,true);
    if(t.phase==='ERROR')audioManager.settleDevice(t.runID,t.track,false);
  }
  else if(t.type==='command'&&t.command==='SET_DUTY'&&t.phase==='RECEIVED'){
    try{await sendCommand(`COMMAND,${t.runID},EXECUTE`);}catch(_){}
  }
  else if(t.type==='command'&&t.command==='SET_DUTY'&&t.phase==='APPLIED'){
    const duty=+t.parts[0]; if(Number.isFinite(duty))speedometer.startSlew(duty);
  }
  renderAll();
}

function bindEvents(){
  $('serviceSelect').addEventListener('change',async(e)=>{ state.service=e.target.value||null; if(state.destination)configureRoute(); renderAll(); await confirmRouteAudio(); });
  $('destinationSelect').addEventListener('change',async(e)=>{ state.destination=e.target.value||null; if(state.destination&&!state.origin){state.origin=DESTINATIONS[state.destination].defaultOrigin;$('originSelect').value=state.origin;} configureRoute(); renderAll(); await confirmRouteAudio(); });
  $('originSelect').addEventListener('change',(e)=>{state.origin=e.target.value||null;if(state.destination)configureRoute();renderAll();});
  $('chimeSelect').addEventListener('change',renderAll);
  $('debugButton').addEventListener('click',enableDebug); $('connectButton').addEventListener('click',toggleConnection);
  $('departureButton').addEventListener('click',()=>departure('P3')); $('stopButton').addEventListener('click',stopAtNext); $('hornButton').addEventListener('click',horn); $('emergencyButton').addEventListener('click',emergencyToggle);
  $('notchButtons').addEventListener('click',(e)=>{const b=e.target.closest('[data-notch]');if(b)setNotch(b.dataset.notch);});
  $('audioLibraryButton').addEventListener('click',()=>$('audioDialog').showModal());
  $('audioLibrary').addEventListener('click',(e)=>{const b=e.target.closest('[data-track]');if(b&&operationAvailable())maybePlay(+b.dataset.track,nextRunID());});
  $('passwordForm').addEventListener('submit',async(e)=>{ e.preventDefault(); const pw=$('passwordInput').value; $('passwordDialog').close(); try{await sendCommand(`AUTH,${pw}`);}catch(err){alert(err.message);} $('passwordInput').value=''; });
}

function animate(now){
  state.systemTime=new Date(); $('systemTime').textContent=state.systemTime.toLocaleTimeString('ja-JP',{hour12:false});
  const p=speedometer.presentation(now/1000); scene.update(now,p.speed,state.stopSequence!=='none'); scene.draw(p.speed,speedometer.remainingStopTravel(now/1000)); renderGauge(p); updateMarqueeAnimation(now); updatePassing(now);
  requestAnimationFrame(animate);
}

async function init(){
  populateSelects(); buildGauge(); bindEvents(); await loadAssetBundle(); await scene.load(); renderAll(); requestAnimationFrame(animate);
}

init();
