const state = {
  debug:false, connected:false, bleReady:false, blePhase:'idle',
  battery:null, vehicleState:'UNKNOWN', driveState:'DISCONNECTED',
  service:null, destination:null, origin:null, direction:null, currentIndex:null,
  phase:'UNCONFIGURED', selectedNotch:'N', stopSequence:'none', pendingArrival:null,
  emergency:false, runID:0, sequenceToken:0, passingIndex:0, nextPassingAt:0,
  marqueeMessage:'', marqueeMode:'scroll', marqueeStart:performance.now(),
  tx:'---', rx:'---', systemTime:new Date(),
};

const speedometer = new SpeedometerModel();
const audioManager = new AudioManager();
const scene = new SceneRenderer($('sceneCanvas'));
const ble = new BLEClient(handleBLELine);

function nextRunID(){ state.runID=(state.runID>=65535?1:state.runID+1); return state.runID; }
function operationAvailable(){ return state.debug || (state.connected && state.bleReady); }
function currentStation(){ return state.currentIndex==null?null:STATIONS[state.currentIndex]; }
function nextStation(){ if(state.currentIndex==null||!state.direction)return null; const idx=state.currentIndex+(state.direction==='up'?1:-1); return STATIONS[idx]||null; }
function destinationObj(){ return state.destination?DESTINATIONS[state.destination]:null; }
function isTerminalNext(){ const n=nextStation(), d=destinationObj(); return !!(n&&d&&n.key===d.terminal); }
function routeCode(forArrival=true){ const st=forArrival?nextStation():currentStation(); if(!st||!state.direction)return null; return `${state.direction==='up'?'u':'d'}${st.code}`; }
function selectedChimeTrack(){ const c=CHIMES[$('chimeSelect').value]||CHIMES.ambitious; return isTerminalNext()?c.terminal:c.intermediate; }
function systemAllGreen(){ return operationAvailable() && (state.debug || state.battery==null || state.battery>=6.6) && state.driveState!=='FAULT'; }
function sequenceLocked(){ return ['DEPARTURE_SEQUENCE','STOP_SEQUENCE'].includes(state.vehicleState) || state.stopSequence!=='none'; }

function setTx(text){ state.tx=text; $('txLog').textContent=text; }
function setRx(text){ state.rx=text; $('rxLog').textContent=text; }
async function sendCommand(line){
  setTx(line.startsWith('AUTH,')&&line!=='AUTH,REQUEST'?'AUTH,********':line);
  if(state.debug) return;
  if(!state.connected) throw new Error('BLE OFFLINE');
  await ble.send(line);
}

function populateSelects(){
  $('serviceSelect').innerHTML='<option value="">種別</option>'+Object.entries(SERVICES).map(([k,v])=>`<option value="${k}">${v.title}</option>`).join('');
  $('destinationSelect').innerHTML='<option value="">行先</option>'+Object.entries(DESTINATIONS).map(([k,v])=>`<option value="${k}">${v.title}</option>`).join('');
  $('originSelect').innerHTML='<option value="">始発駅</option>'+STATIONS.map((s)=>`<option value="${s.key}">${s.title}</option>`).join('');
  $('chimeSelect').innerHTML=Object.entries(CHIMES).map(([k,v])=>`<option value="${k}">${v.title}</option>`).join('');
  $('chimeSelect').value='ambitious';
  $('audioLibrary').innerHTML=AUDIO_LIBRARY.map(([id,title])=>`<button type="button" data-track="${id}">${String(id).padStart(4,'0')}　${title}</button>`).join('');
  const notches=['N','P1','P2','P3','P4','P5','P6'];
  $('notchButtons').innerHTML=notches.map((n)=>`<button type="button" class="notch" data-notch="${n}">${n}</button>`).join('');
}

function buildGauge(){
  const pts=[[90,336],[165,296],[265,242],[370,187],[500,130],[650,130],[790,130],[940,130]];
  const labels=['×','20','70','100','180','230','270','300'];
  const seg=$('gaugeSegments'), nodes=$('gaugeNodes'); seg.innerHTML=''; nodes.innerHTML='';
  for(let i=0;i<pts.length-1;i++){
    const [x1,y1]=pts[i],[x2,y2]=pts[i+1];
    seg.insertAdjacentHTML('beforeend',`<line id="gseg${i}" class="gauge-line" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`);
  }
  pts.forEach(([x,y],i)=>nodes.insertAdjacentHTML('beforeend',`<circle id="gnode${i}" class="gauge-node ${i===0?'stop':''}" cx="${x}" cy="${y}" r="${i===0?22:24}"/><text class="gauge-node-label" x="${x}" y="${y}">${labels[i]}</text>`));
}

function configureRoute({resetScene=true}={}){
  if(!state.destination){ state.direction=null;state.currentIndex=null;state.phase='UNCONFIGURED';state.vehicleState=operationAvailable()?'READY':'UNKNOWN';state.driveState=operationAvailable()?'STOP':'DISCONNECTED'; scene.clearRoute(); updateMarquee(''); return; }
  const dest=DESTINATIONS[state.destination];
  if(!state.origin){ state.origin=dest.defaultOrigin; $('originSelect').value=state.origin; }
  const oi=stationIndex(state.origin), ti=stationIndex(dest.terminal);
  state.currentIndex=oi;
  state.direction=oi<ti?'up':(oi>ti?'down':null);
  if(!state.direction){ state.phase='UNCONFIGURED'; updateMarquee('始発駅と行先が同じです。'); return; }
  state.phase='STOPPED'; state.pendingArrival=null; state.stopSequence='none'; state.selectedNotch='N'; speedometer.reset(0);
  state.vehicleState=operationAvailable()?'READY':'UNKNOWN'; state.driveState=operationAvailable()?'STOP':'DISCONNECTED';
  if(resetScene) scene.beginIntro(stationByKey(state.origin).title);
  updatePreDepartureMarquee();
  renderAll();
}

function updatePreDepartureMarquee(){
  if(!state.service||!state.destination||state.currentIndex==null){ updateMarquee(''); return; }
  const service=SERVICES[state.service], dest=DESTINATIONS[state.destination];
  const remaining=[]; let i=state.currentIndex+(state.direction==='up'?1:-1), ti=stationIndex(dest.terminal);
  while(i>=0&&i<STATIONS.length){ remaining.push(STATIONS[i]); if(i===ti)break; i+=(state.direction==='up'?1:-1); }
  const intermediate=remaining.slice(0,-1).map(s=>s.title);
  const jp=`今日も新幹線をご利用くださいまして、ありがとうございます。この電車は${service.title}号 ${dest.title}ゆきです。${intermediate.length?`途中の停車駅は、${intermediate.join('、')}です。`:'途中の停車駅はありません。'}`;
  updateMarquee(jp);
}

function updateMarquee(message, mode='scroll'){
  state.marqueeMessage=message; state.marqueeMode=mode; state.marqueeStart=performance.now();
  const el=$('marqueeText'); el.textContent=message; el.style.transform='translateX(0px)';
}

function updateMarqueeAnimation(now){
  const el=$('marqueeText'); if(!state.marqueeMessage)return;
  const board=el.parentElement;
  if(state.marqueeMode==='static'){ el.style.left='8px'; el.style.transform='translateX(0)'; return; }
  const speed=76.5; const elapsed=(now-state.marqueeStart)/1000; const start=board.clientWidth+24; const width=el.scrollWidth; const distance=start+width+48; let x=start-(elapsed*speed)%Math.max(distance,1); el.style.left='0'; el.style.transform=`translateX(${x}px)`;
}

async function maybePlay(track, runID=null){
  if(!track)return;
  if(state.debug){ setTx(`AUDIO,PLAY,${runID??state.runID},${track}`); await audioManager.playLocal(track); return; }
  if(!state.connected||!state.bleReady) return;
  const rid=runID??nextRunID();
  await sendCommand(`AUDIO,PLAY,${rid},${track},MIN_BUSY_MS,${track>=100&&track<=999?1000:250}`);
  await audioManager.waitForDevice(rid,track);
}

async function confirmRouteAudio(){ if(operationAvailable()&&state.service&&state.destination){ const rid=nextRunID(); try{ await maybePlay(CONFIG.audio.horn,rid); }catch(e){ console.warn(e); } } }

