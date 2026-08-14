class SceneRenderer {
  constructor(canvas) {
    this.canvas=canvas; this.ctx=canvas.getContext('2d');
    this.images={};
    this.nearTravel=0; this.last=performance.now();
    this.trainVisible=false; this.trainEntered=false;
    this.parkedName=''; this.stationParked=false;
    this.intro=null; this.departure=null; this.passing=null; this.arrival=null;
  }
  async load() {
    const names=['far_bg_extended.webp','fuji.webp','sign727.webp','near1.webp','near2.webp','station.webp','train300.webp','infra_unit_clear.webp'];
    await Promise.all(names.map((name)=>new Promise((resolve)=>{
      const img=new Image(); img.onload=()=>{this.images[name]=img;resolve();}; img.onerror=resolve; const url=assetURL(name); if(url) img.src=url; else resolve();
    })));
  }
  clearRoute() {
    this.intro=null; this.departure=null; this.passing=null; this.arrival=null;
    this.stationParked=false; this.parkedName=''; this.trainVisible=false; this.trainEntered=false; this.nearTravel=0;
  }
  beginIntro(name) {
    const C=CONFIG.scene;
    const cruiseSpeed=270/C.maxGaugeSpeed*C.maxAnimationSpeed;
    const spawn=C.canvasWidth+C.stationWidth/2;
    const brakeDistance=Math.max(1,spawn-C.stationX);
    const brakeDuration=2*brakeDistance/cruiseSpeed;
    this.intro={ name, start:performance.now()+1000, launched:false, applied:0, cruiseSpeed, cruiseDuration:3000, brakeDuration:brakeDuration*1000 };
    this.departure=null; this.passing=null; this.arrival=null; this.stationParked=false; this.parkedName=''; this.trainVisible=false; this.trainEntered=false;
  }
  triggerPassing(name){ this.passing={name,startTravel:this.nearTravel}; }
  startArrival(name){ this.arrival={name}; }
  commitArrival(name){ this.parkedName=name; this.stationParked=true; this.arrival=null; this.departure=null; }
  update(nowMs, speed, stopActive) {
    const C=CONFIG.scene;
    const dt=clamp((nowMs-this.last)/1000,0,.1); this.last=nowMs;
    let delta=speed/C.maxGaugeSpeed*C.maxAnimationSpeed*dt;
    if(this.intro){
      const it=this.intro;
      if(nowMs<it.start) delta=0;
      else {
        if(!it.launched){ it.launched=true; it.trainStart=nowMs; this.trainVisible=true; }
        const elapsed=nowMs-it.start;
        let desired;
        if(elapsed<=it.cruiseDuration) desired=it.cruiseSpeed*(elapsed/1000);
        else {
          const bt=clamp(elapsed-it.cruiseDuration,0,it.brakeDuration)/1000;
          const T=it.brakeDuration/1000;
          desired=it.cruiseSpeed*(it.cruiseDuration/1000)+(it.cruiseSpeed*bt-.5*(it.cruiseSpeed/T)*bt*bt);
        }
        delta=Math.max(0,desired-it.applied); it.applied=desired;
        const enterP=clamp((nowMs-it.trainStart)/350,0,1); this.trainEntered=enterP;
        if(elapsed>=it.cruiseDuration+it.brakeDuration){
          this.parkedName=it.name; this.stationParked=true; this.intro=null; this.trainEntered=1;
        }
      }
    }
    this.nearTravel += delta;
    if(speed>.5 && this.stationParked && !stopActive && !this.intro && !this.departure){
      this.departure={name:this.parkedName,startTravel:this.nearTravel}; this.stationParked=false;
    }
    if(this.departure){
      const x=C.stationX-(this.nearTravel-this.departure.startTravel);
      if(x<=-C.stationWidth/2) this.departure=null;
    }
    if(this.passing){
      const x=C.canvasWidth+C.stationWidth/2-(this.nearTravel-this.passing.startTravel);
      if(x<=-C.stationWidth/2) this.passing=null;
    }
    if(this.nearTravel>1e7) this.nearTravel%=1e6;
  }
  draw(speed, remainingStopTravel) {
    const C=CONFIG.scene, ctx=this.ctx;
    ctx.clearRect(0,0,C.canvasWidth,C.canvasHeight);
    this.drawCover(this.images['far_bg_extended.webp'],0,0,C.canvasWidth,C.canvasHeight);
    ctx.save(); ctx.translate(C.offsetX,C.offsetY); ctx.scale(C.scale,C.scale);
    this.drawLoopObject('fuji.webp',this.nearTravel*.10,C.farY,C.farWidth,.92);
    this.drawLoopObject('sign727.webp',this.nearTravel*.50,C.midY,C.midWidth,.98);
    this.drawStrip('near2.webp',this.nearTravel,C.nearY,C.nearWidth,C.nearPhase,.98,false);
    this.drawStrip('near1.webp',this.nearTravel,C.nearY,C.nearWidth,0,.98,false);
    if(this.intro && performance.now()>=this.intro.start){
      const elapsed=performance.now()-this.intro.start;
      if(elapsed>=this.intro.cruiseDuration){
        const bt=clamp(elapsed-this.intro.cruiseDuration,0,this.intro.brakeDuration)/1000;
        const T=this.intro.brakeDuration/1000, v0=this.intro.cruiseSpeed;
        const braking=v0*bt-.5*(v0/T)*bt*bt;
        const x=C.canvasWidth+C.stationWidth/2-braking;
        this.drawStation(this.intro.name,x);
      }
    }
    if(this.stationParked && speed<=.5 && !this.intro && !this.arrival) this.drawStation(this.parkedName,C.stationX);
    if(this.departure) this.drawStation(this.departure.name,C.stationX-(this.nearTravel-this.departure.startTravel));
    if(this.passing) this.drawStation(this.passing.name,C.canvasWidth+C.stationWidth/2-(this.nearTravel-this.passing.startTravel));
    if(this.arrival) this.drawStation(this.arrival.name,C.stationX+Math.max(0,remainingStopTravel));
    if(this.trainVisible){
      const startX=-C.trainWidth*.55;
      const x=startX+(C.trainX-startX)*(typeof this.trainEntered==='number'?this.trainEntered:1);
      if(this.images['train300.webp']) this.drawCentered(this.images['train300.webp'],x,C.trainY,C.trainWidth,1,true); else this.drawProceduralTrain(x);
    }
    this.drawInfra();
    ctx.restore();
  }
  drawProceduralBase() {
    const C=CONFIG.scene, ctx=this.ctx;
    const sky=ctx.createLinearGradient(0,0,0,C.canvasHeight); sky.addColorStop(0,'#8ccdf4'); sky.addColorStop(.63,'#d9eff8'); sky.addColorStop(.64,'#8db267'); sky.addColorStop(1,'#597843');
    ctx.fillStyle=sky;ctx.fillRect(0,0,C.canvasWidth,C.canvasHeight);
    ctx.fillStyle='#789078';
    for(let i=-1;i<9;i++){const x=i*230-((this.nearTravel*.1)%230);ctx.beginPath();ctx.moveTo(x,650);ctx.lineTo(x+125,470);ctx.lineTo(x+280,650);ctx.fill();}
    ctx.fillStyle='#d6d3c8';ctx.fillRect(0,720,C.canvasWidth,60);ctx.fillStyle='#777';ctx.fillRect(0,760,C.canvasWidth,15);ctx.fillStyle='#d9d9d9';ctx.fillRect(0,820,C.canvasWidth,7);
  }
  drawProceduralTrain(x) {
    const C=CONFIG.scene,ctx=this.ctx,w=C.trainWidth,h=120;
    ctx.save();ctx.translate(x,C.trainY);ctx.fillStyle='#f3f3ed';ctx.beginPath();ctx.moveTo(-w*.5,22);ctx.quadraticCurveTo(-w*.47,-50,-w*.36,-55);ctx.lineTo(w*.42,-55);ctx.quadraticCurveTo(w*.5,-40,w*.5,18);ctx.lineTo(w*.46,42);ctx.lineTo(-w*.45,42);ctx.closePath();ctx.fill();
    ctx.fillStyle='#1a5885';ctx.fillRect(-w*.34,-33,w*.72,22);ctx.fillStyle='#2f91c4';ctx.fillRect(-w*.48,8,w*.96,10);ctx.fillStyle='#555';for(let i=0;i<5;i++){ctx.beginPath();ctx.arc(-w*.31+i*w*.155,44,18,0,Math.PI*2);ctx.fill();}ctx.restore();
  }
  drawProceduralStation(name,x) {
    const C=CONFIG.scene,ctx=this.ctx;ctx.save();ctx.translate(x,C.stationY);ctx.fillStyle='#b8b8b8';ctx.fillRect(-C.stationWidth/2,-110,C.stationWidth,115);ctx.fillStyle='#eee';ctx.fillRect(-C.stationWidth/2,-155,C.stationWidth,45);ctx.fillStyle='#2a7b56';ctx.fillRect(-220,-210,440,80);ctx.fillStyle='#fff';ctx.font='900 56px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(name,0,-170);ctx.restore();
  }
  drawCover(img,x,y,w,h){ if(!img){this.drawProceduralBase();return;} const r=Math.max(w/img.width,h/img.height), sw=img.width*r, sh=img.height*r; this.ctx.drawImage(img,x+(w-sw)/2,y+(h-sh)/2,sw,sh); }
  drawCentered(img,x,y,w,opacity=1,flip=false){ if(!img)return; const h=w*img.height/img.width; const ctx=this.ctx; ctx.save();ctx.globalAlpha=opacity;ctx.translate(x,y); if(flip)ctx.scale(-1,1);ctx.drawImage(img,-w/2,-h/2,w,h);ctx.restore(); }
  drawLoopObject(name,travel,y,w,opacity){ const C=CONFIG.scene,start=C.canvasWidth+w/2,end=-w/2,dist=Math.max(1,start-end),phase=((travel%dist)+dist)%dist; this.drawCentered(this.images[name],start-phase,y,w,opacity); }
  drawStrip(name,travel,y,w,phase,opacity){ const C=CONFIG.scene, offset=-(((travel%w)+w)%w), copies=Math.ceil(C.canvasWidth/w)+8; for(let i=-2;i<copies;i++)this.drawCentered(this.images[name],i*w+offset+phase+w/2,y,w,opacity); }
  drawInfra(){ const C=CONFIG.scene, w=C.infraWidth, cycle=w*2, offset=-(((this.nearTravel%cycle)+cycle)%cycle), copies=Math.ceil(C.canvasWidth/w)+8; for(let i=-2;i<copies;i++)this.drawCentered(this.images['infra_unit_clear.webp'],i*w+offset+w/2,C.infraY,w,1,i%2!==0); }
  drawStation(name,x){ const C=CONFIG.scene; if(!this.images['station.webp']){this.drawProceduralStation(name,x);return;} this.drawCentered(this.images['station.webp'],x,C.stationY,C.stationWidth); const ctx=this.ctx; ctx.save();ctx.fillStyle='#000';ctx.font=`900 ${C.stationTextSize}px sans-serif`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(name,x+C.stationTextOffsetX,C.stationY+C.stationTextOffsetY);ctx.restore(); }
}

