class AudioManager {
  constructor() {
    this.audio = new Audio();
    this.audio.preload='auto';
    this.deviceWaiters = new Map();
  }
  file(track) { return assetURL(`${String(track).padStart(4,'0')}.mp3`); }
  async playLocal(track) {
    if (!track) return;
    if (!AVAILABLE_AUDIO.has(track)) { await sleep(1200); return; }
    this.audio.pause();
    this.audio.currentTime=0;
    const src=this.file(track); if(!src){ await this.beep(track===CONFIG.audio.horn?440:660, track===CONFIG.audio.horn?.55:.14); return; } this.audio.src=src;
    try {
      await this.audio.play();
      await new Promise((resolve) => {
        let done=false;
        const finish=()=>{ if(done)return; done=true; cleanup(); resolve(); };
        const cleanup=()=>{ clearTimeout(timer); this.audio.removeEventListener('ended',finish); this.audio.removeEventListener('error',finish); };
        const timer=setTimeout(finish,18000);
        this.audio.addEventListener('ended',finish,{once:true});
        this.audio.addEventListener('error',finish,{once:true});
      });
    } catch (_) {
      await sleep(1200);
    }
  }
  async beep(freq=660,duration=.14){ try{const Ctx=window.AudioContext||window.webkitAudioContext; if(!Ctx){await sleep(duration*1000);return;} const ac=new Ctx(),o=ac.createOscillator(),g=ac.createGain();o.frequency.value=freq;g.gain.setValueAtTime(.08,ac.currentTime);g.gain.exponentialRampToValueAtTime(.001,ac.currentTime+duration);o.connect(g);g.connect(ac.destination);o.start();o.stop(ac.currentTime+duration);await sleep(duration*1000);await ac.close();}catch(_){await sleep(duration*1000);} }
  waitForDevice(runID, track) {
    const key=`${runID}:${track}`;
    return new Promise((resolve)=>{
      const timer=setTimeout(()=>{ this.deviceWaiters.delete(key); resolve(false); },20000);
      this.deviceWaiters.set(key,(ok)=>{ clearTimeout(timer); this.deviceWaiters.delete(key); resolve(ok); });
    });
  }
  settleDevice(runID, track, ok=true) {
    const fn=this.deviceWaiters.get(`${runID}:${track}`);
    if(fn) fn(ok);
  }
}

class BLEClient {
  constructor(onLine) {
    this.onLine=onLine;
    this.device=null; this.server=null; this.command=null; this.telemetry=null; this.buffer='';
  }
  get supported() { return !!navigator.bluetooth; }
  async connect() {
    if (!this.supported) throw new Error('このブラウザはWeb Bluetoothに対応していません。');
    this.device=await navigator.bluetooth.requestDevice({
      filters:[{ name:CONFIG.ble.name }], optionalServices:[CONFIG.ble.service]
    });
    this.device.addEventListener('gattserverdisconnected',()=>this.onLine('DISCONNECTED'));
    this.server=await this.device.gatt.connect();
    const service=await this.server.getPrimaryService(CONFIG.ble.service);
    this.command=await service.getCharacteristic(CONFIG.ble.command);
    this.telemetry=await service.getCharacteristic(CONFIG.ble.telemetry);
    await this.telemetry.startNotifications();
    this.telemetry.addEventListener('characteristicvaluechanged',(e)=>{
      const text=new TextDecoder().decode(e.target.value);
      this.buffer+=text;
      let idx;
      while((idx=this.buffer.indexOf('\n'))>=0){
        const line=this.buffer.slice(0,idx).trim(); this.buffer=this.buffer.slice(idx+1);
        if(line) this.onLine(line);
      }
    });
    await this.send('AUTH,REQUEST');
  }
  async send(line) {
    if(!this.command) throw new Error('BLE command characteristic unavailable');
    const data=new TextEncoder().encode(line+'\n');
    await this.command.writeValueWithResponse(data);
  }
  disconnect() { if(this.device?.gatt?.connected) this.device.gatt.disconnect(); this.command=null; this.telemetry=null; }
}

