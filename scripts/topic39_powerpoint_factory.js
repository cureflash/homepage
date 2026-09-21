const pptxgen = require('pptxgenjs');
const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'cureflash / OpenAI';
pptx.subject = '電験×新幹線 Topic 39 COSMOS 統合監視・SCADA・信頼性';
pptx.title = '39 COSMOS 統合監視・SCADA・信頼性';
pptx.company = 'cureflash';
pptx.lang = 'ja-JP';
pptx.theme = {
  headFontFace: 'Noto Sans CJK JP',
  bodyFontFace: 'Noto Sans CJK JP',
  lang: 'ja-JP'
};
pptx.defineSlideMaster({
  title: 'MASTER',
  background: { color: 'F7F9FC' },
  objects: [
    { rect: { x:0, y:0, w:13.333, h:0.16, fill:{color:'184A63'}, line:{color:'184A63'} } },
    { text: { text:'電験×新幹線｜新幹線車両・電験二種', options:{x:0.45,y:7.13,w:7.2,h:0.20,fontFace:'Noto Sans CJK JP',fontSize:8,color:'59636E',margin:0} } },
    { text: { text:'Topic 39', options:{x:11.75,y:7.13,w:1.0,h:0.20,fontFace:'Noto Sans CJK JP',fontSize:8,color:'59636E',align:'right',margin:0} } }
  ],
  slideNumber: { x:12.82, y:7.13, color:'59636E', fontFace:'Noto Sans CJK JP', fontSize:8 }
});

const C = {
  navy:'184A63', teal:'147D83', blue:'316D8B', cyan:'DDEFF3', pale:'EEF5F7',
  orange:'E88B3A', red:'B44A4A', green:'3B7A57', gray:'59636E', dark:'17232B',
  light:'F7F9FC', white:'FFFFFF', border:'C8D3DA', yellow:'FFF4D6'
};
const FONT = 'Noto Sans CJK JP';
function title(slide, t, st){
  slide.addText(t,{x:0.48,y:0.34,w:9.8,h:0.52,fontFace:FONT,fontSize:25,bold:true,color:C.dark,margin:0,breakLine:false});
  if(st) slide.addText(st,{x:0.50,y:0.89,w:11.8,h:0.35,fontFace:FONT,fontSize:11.5,color:C.gray,margin:0});
}
function box(slide,x,y,w,h,head,body,opt={}){
  slide.addShape(pptx.ShapeType.roundRect,{x,y,w,h,rectRadius:0.06,fill:{color:opt.fill||C.white},line:{color:opt.line||C.border,width:1.1},radius:0.06});
  slide.addText(head,{x:x+0.18,y:y+0.12,w:w-0.36,h:0.34,fontFace:FONT,fontSize:opt.headSize||16,bold:true,color:opt.headColor||C.navy,margin:0});
  slide.addText(body,{x:x+0.18,y:y+0.52,w:w-0.36,h:h-0.64,fontFace:FONT,fontSize:opt.bodySize||11.5,color:opt.bodyColor||C.dark,margin:0.02,breakLine:false,fit:'shrink'});
}
function tag(slide,txt,x,y,w,color=C.navy){
  slide.addShape(pptx.ShapeType.roundRect,{x,y,w,h:0.32,fill:{color},line:{color},radius:0.08});
  slide.addText(txt,{x:x+0.06,y:y+0.055,w:w-0.12,h:0.18,fontFace:FONT,fontSize:8.5,bold:true,color:C.white,align:'center',margin:0});
}
function note(slide,txt,x,y,w,h,color=C.yellow){
  slide.addShape(pptx.ShapeType.roundRect,{x,y,w,h,fill:{color},line:{color:'E6D6A8',width:1},radius:0.05});
  slide.addText(txt,{x:x+0.12,y:y+0.10,w:w-0.24,h:h-0.20,fontFace:FONT,fontSize:10.2,color:C.dark,margin:0,fit:'shrink'});
}
function arrow(slide,x1,y1,x2,y2,color=C.gray,width=1.5){
  slide.addShape(pptx.ShapeType.line,{x:x1,y:y1,w:x2-x1,h:y2-y1,line:{color,width,beginArrowType:'none',endArrowType:'triangle'}});
}
function addFormula(slide,txt,x,y,w,h=0.45){
  slide.addShape(pptx.ShapeType.roundRect,{x,y,w,h,fill:{color:'EDF3F6'},line:{color:'B9CBD4'},radius:0.04});
  slide.addText(txt,{x:x+0.12,y:y+0.07,w:w-0.24,h:h-0.14,fontFace:'Consolas',fontSize:14,bold:true,color:C.dark,align:'center',margin:0,fit:'shrink'});
}
function smallSource(slide,txt){
  slide.addText(txt,{x:0.52,y:6.74,w:12.15,h:0.24,fontFace:FONT,fontSize:7.4,color:'6D7680',margin:0,fit:'shrink'});
}

{
  const s=pptx.addSlide('MASTER');
  s.background={color:'F7F9FC'};
  s.addShape(pptx.ShapeType.rect,{x:0,y:0.16,w:13.333,h:6.93,fill:{color:'F7F9FC'},line:{color:'F7F9FC'}});
  s.addShape(pptx.ShapeType.rect,{x:0,y:0.16,w:4.05,h:6.93,fill:{color:C.navy},line:{color:C.navy}});
  s.addText('39',{x:0.62,y:0.95,w:2.2,h:1.2,fontFace:FONT,fontSize:58,bold:true,color:'FFFFFF',margin:0});
  s.addText('COSMOS\n統合監視・SCADA・信頼性',{x:4.65,y:1.20,w:7.7,h:1.7,fontFace:FONT,fontSize:30,bold:true,color:C.dark,margin:0,breakLine:false});
  s.addText('電験二種｜一次「機械」＋二次「電力・管理」',{x:4.68,y:3.22,w:7.0,h:0.43,fontFace:FONT,fontSize:16,color:C.teal,bold:true,margin:0});
  s.addText('試験で問われる「計測 → デジタル化 → 通信 → 監視・制御 → 信頼性」を、一般SCADAモデルで一続きに理解する。',{x:4.68,y:3.92,w:7.75,h:1.0,fontFace:FONT,fontSize:17,color:C.gray,margin:0,fit:'shrink'});
  note(s,'境界：一般SCADAモデルと教材用の信頼性計算を扱う。COSMOSの未公開内部構成・通信仕様・故障率・MTBF/MTTR等は推測しない。',4.68,5.25,7.75,0.92,'FFF4D6');
  tag(s,'一次 4問 / 20答案要素',0.62,5.30,2.75,C.teal);
  tag(s,'二次 1問 / 5答案要素',0.62,5.78,2.75,C.orange);
}

{
  const s=pptx.addSlide('MASTER');
  title(s,'試験論点の全体像','固定13項目を、一般SCADAの機能連鎖へ配置する');
  const xs=[0.50,2.05,3.60,5.15,6.70,8.25,9.80,11.35];
  const labels=[['計測対象','状態量'],['CT/VT・\nセンサ','変成・絶縁'],['信号調整','計測前段'],['A/D・\nデータ収集','標本化・量子化'],['通信','LAN・変調'],['監視表示・\n状態判定','SCADA'],['操作指令','遠隔制御'],['制御対象','設備']];
  labels.forEach((a,i)=>{
    s.addShape(pptx.ShapeType.roundRect,{x:xs[i],y:2.05,w:1.40,h:1.02,fill:{color:i===3||i===5?C.cyan:C.white},line:{color:i===3||i===5?C.teal:C.border,width:1.2},radius:0.04});
    s.addText(a[0],{x:xs[i]+0.08,y:2.22,w:1.24,h:0.38,fontFace:FONT,fontSize:12,bold:true,color:C.navy,align:'center',margin:0,fit:'shrink'});
    s.addText(a[1],{x:xs[i]+0.08,y:2.65,w:1.24,h:0.22,fontFace:FONT,fontSize:8.5,color:C.gray,align:'center',margin:0});
    if(i<labels.length-1) arrow(s,xs[i]+1.40,2.56,xs[i+1]-0.06,2.56,C.gray,1.2);
  });
  box(s,0.60,3.65,3.75,1.52,'分散システム','複数地点・装置を通信で結ぶ。通信断、状態不一致、時刻情報、共通原因故障を考える。',{fill:'FFFFFF'});
  box(s,4.78,3.65,3.75,1.52,'遠隔計測 / 遠隔制御','計測は「取得→変成→デジタル化→伝送」。制御は対象状態・保護条件・安全側動作まで含めて指令妥当性を考える。',{fill:'FFFFFF'});
  box(s,8.95,3.65,3.75,1.52,'信頼性 / 可用性','故障率 λ、信頼度 R(t)、冗長系、MTBF/MTTRから「壊れにくさ」と「使える割合」を分けて評価する。',{fill:'FFFFFF'});
  note(s,'この図は一般教材モデルであり、COSMOSの公開済み内部構成図ではない。',2.10,5.66,9.10,0.62);
  smallSource(s,'対応：系列SPEC Topic 39 固定13項目 / EXAM_ALIGNMENT 固定5問');
}

{
  const s=pptx.addSlide('MASTER');
  title(s,'計器用変成器：CT / VT','変成・絶縁・誤差・安全を一体で押さえる');
  box(s,0.55,1.45,3.55,2.02,'CT（変流器）','大電流を計測・保護用の扱いやすい電流へ変成。二次側負担・励磁電流・励磁インピーダンスが変成誤差に関係する。',{fill:'F4F9FA'});
  box(s,4.38,1.45,3.55,2.02,'VT（計器用変圧器）','高電圧を計測・保護用の扱いやすい電圧へ変成。主回路と計測・保護回路を絶縁する。',{fill:'F8F7F2'});
  box(s,8.21,1.45,4.55,2.02,'安全上の対比','CT：一次通電中に二次側を開放しない\nVT：二次側を短絡しない\n\nこの2点を逆にしない。',{fill:'FFF7F0',line:'E6B98E',headColor:C.orange});
  addFormula(s,'ε = (K_n − K) / K × 100 [%]',1.15,4.15,4.55,0.64);
  s.addText('例：K_n=400, K=398',{x:1.15,y:5.03,w:3.9,h:0.32,fontFace:FONT,fontSize:14,bold:true,color:C.dark,margin:0});
  s.addText('(400−398)/398×100 = +0.5025… % ≈ +0.503 %',{x:1.15,y:5.45,w:5.25,h:0.45,fontFace:'Consolas',fontSize:13,color:C.teal,bold:true,margin:0,fit:'shrink'});
  s.addShape(pptx.ShapeType.line,{x:7.06,y:4.02,w:0,h:1.90,line:{color:C.border,width:1.2}});
  s.addText('過去問接続',{x:7.52,y:4.18,w:2.3,h:0.35,fontFace:FONT,fontSize:16,bold:true,color:C.navy,margin:0});
  tag(s,'R4 一次「機械」問3',7.52,4.72,2.30,C.teal);
  tag(s,'R2 二次「電力・管理」問2',7.52,5.20,2.75,C.orange);
  s.addText('負担 / 励磁 / 比誤差 / CT二次開放 / CT・VTの目的',{x:10.02,y:4.68,w:2.45,h:1.05,fontFace:FONT,fontSize:10.5,color:C.gray,margin:0,fit:'shrink'});
  smallSource(s,'固定答案要素：R4一次 5 / 5、R2二次の計器用変成器・比誤差へ接続');
}

{
  const s=pptx.addSlide('MASTER');
  title(s,'A/D変換：標本化・量子化・コード化','「時間方向」と「振幅方向」の離散化を分ける');
  const xs=[0.75,3.13,5.51,7.89];
  const heads=['入力信号','サンプルホールド','量子化','デジタルコード'];
  const bodies=['連続時間・連続振幅','変換中の入力をほぼ一定に保持','有限個のレベルへ丸める','2進数。MSBは最大重み'];
  xs.forEach((x,i)=>{box(s,x,1.50,1.90,1.42,heads[i],bodies[i],{fill:i===2?C.cyan:C.white,headSize:13,bodySize:9.8}); if(i<3) arrow(s,x+1.90,2.18,xs[i+1]-0.10,2.18,C.gray,1.4);});
  box(s,10.22,1.50,2.35,1.42,'代表方式','並列比較形：高速 / 比較器多数\n逐次比較形：MSBから判定\n積分形：積分時間を要する',{fill:'F8F7F2',headSize:13,bodySize:9.3});
  addFormula(s,'段数 = 2^n',0.78,3.55,2.35,0.55);
  addFormula(s,'q = V_FS / 2^n',3.37,3.55,2.60,0.55);
  addFormula(s,'|e_q| ≤ q / 2',6.20,3.55,2.55,0.55);
  addFormula(s,'f_s > 2 f_max',8.98,3.55,2.55,0.55);
  s.addShape(pptx.ShapeType.roundRect,{x:1.15,y:4.55,w:5.35,h:1.18,fill:{color:'F4F9FA'},line:{color:C.teal,width:1.3},radius:0.05});
  s.addText('10 bit・0〜8 V の例',{x:1.38,y:4.78,w:2.8,h:0.30,fontFace:FONT,fontSize:15,bold:true,color:C.navy,margin:0});
  s.addText('2^10 = 1024 段\nq = 8 / 1024 = 7.8125 mV',{x:3.72,y:4.66,w:2.40,h:0.62,fontFace:'Consolas',fontSize:13,bold:true,color:C.teal,margin:0,fit:'shrink'});
  box(s,7.12,4.50,5.08,1.30,'ひっかけ','標本化不足→エイリアシング。量子化誤差とは別。有限変換時間があるなら入力保持の役割も確認する。',{fill:'FFF7F0',line:'E6B98E',headColor:C.orange,bodySize:10.5});
  tag(s,'R3 一次「機械」問8',9.15,6.05,2.25,C.teal);
  smallSource(s,'固定答案要素：2進数 / 量子化誤差 / 変換時間 / MSB / サンプルホールド');
}

{
  const s=pptx.addSlide('MASTER');
  title(s,'情報伝送：LANと変調','機器の役割・層と、搬送波の変え方を混同しない');
  box(s,0.55,1.43,5.95,4.72,'LAN側','リピータ　物理層で信号再生・中継\n\nブリッジ　データリンク層でMACアドレスを利用して中継\n\nMAC　データリンク層の識別\nIP　ネットワーク層の論理アドレス\n\nWi-Fi　IEEE 802.11系の無線LAN技術\nDHCP　IPアドレス等の設定を自動配布',{fill:'F4F9FA',headSize:18,bodySize:13});
  box(s,6.82,1.43,5.95,4.72,'変調側','搬送波　情報を伝送路へ載せる基準となる波\n復調　受信側で搬送された情報を取り出す\n\nアナログ：AM / FM / PM\nデジタル：ASK / FSK / PSK / QAM\n\nQAMは直交2成分を用い、振幅と位相の組合せで多値シンボルを表す。',{fill:'F8F7F2',headSize:18,bodySize:13});
  tag(s,'H30 一次「機械」問8',1.35,6.28,2.35,C.teal);
  tag(s,'H25 一次「機械」問8',8.00,6.28,2.35,C.teal);
  smallSource(s,'一次20答案要素のうち：LAN 5要素 + 変調 5要素をこのスライドへ接続');
}

{
  const s=pptx.addSlide('MASTER');
  title(s,'信頼度―時間','一定故障率モデルでは R(t)=exp(−λt)');
  const gx=0.92, gy=1.55, gw=7.15, gh=4.42;
  s.addShape(pptx.ShapeType.line,{x:gx,y:gy+gh,w:gw,h:0,line:{color:C.gray,width:1.3,endArrowType:'triangle'}});
  s.addShape(pptx.ShapeType.line,{x:gx,y:gy+gh,w:0,h:-gh,line:{color:C.gray,width:1.3,endArrowType:'triangle'}});
  [0,0.25,0.5,0.75,1.0].forEach(v=>{const yy=gy+gh-(v*gh); s.addShape(pptx.ShapeType.line,{x:gx,y:yy,w:gw,h:0,line:{color:'E3E8EC',width:0.7}}); s.addText(v.toFixed(2),{x:0.32,y:yy-0.10,w:0.48,h:0.2,fontFace:FONT,fontSize:8.5,color:C.gray,align:'right',margin:0});});
  [0,1000,2000,3000,4000,5000].forEach(t=>{const xx=gx+(t/5000)*gw; s.addShape(pptx.ShapeType.line,{x:xx,y:gy+gh,w:0,h:0.08,line:{color:C.gray,width:1}}); s.addText(String(t),{x:xx-0.30,y:gy+gh+0.14,w:0.60,h:0.22,fontFace:FONT,fontSize:8,color:C.gray,align:'center',margin:0});});
  s.addText('時間 t [h]',{x:3.65,y:6.28,w:1.55,h:0.28,fontFace:FONT,fontSize:10,color:C.gray,align:'center',margin:0});
  s.addText('R(t)',{x:0.18,y:1.29,w:0.55,h:0.26,fontFace:FONT,fontSize:10,color:C.gray,margin:0});
  let prev=null; const lam=2e-4;
  for(let t=0;t<=5000;t+=100){ const R=Math.exp(-lam*t); const p={x:gx+(t/5000)*gw,y:gy+gh-R*gh}; if(prev) s.addShape(pptx.ShapeType.line,{x:prev.x,y:prev.y,w:p.x-prev.x,h:p.y-prev.y,line:{color:C.teal,width:2.4}}); prev=p; }
  const t2=2000, r2=Math.exp(-lam*t2), px=gx+(t2/5000)*gw, py=gy+gh-r2*gh;
  s.addShape(pptx.ShapeType.ellipse,{x:px-0.06,y:py-0.06,w:0.12,h:0.12,fill:{color:C.orange},line:{color:C.orange}});
  s.addShape(pptx.ShapeType.line,{x:px,y:py,w:0,h:gy+gh-py,line:{color:C.orange,width:1,dash:'dash'}});
  s.addText('2000 h → 0.670',{x:px+0.12,y:py-0.18,w:1.48,h:0.30,fontFace:FONT,fontSize:11,bold:true,color:C.orange,margin:0});
  box(s,8.55,1.60,4.05,1.74,'計算例','λ=2.0×10^-4 1/h\nλt=0.4\nR(2000)=exp(−0.4)=0.6703',{fill:'F4F9FA',headSize:16,bodySize:12});
  box(s,8.55,3.72,4.05,2.05,'成立条件','故障率一定の指数分布モデル。初期故障期・摩耗故障期まで同じλとみなすとは限らない。教材用仮定値でありCOSMOS実値ではない。',{fill:'FFF7F0',line:'E6B98E',headColor:C.orange,headSize:16,bodySize:11});
  smallSource(s,'系列SPEC計算・グラフ 1/3：信頼度―時間');
}

{
  const s=pptx.addSlide('MASTER');
  title(s,'単一系と冗長系','理想2並列は「両方故障」の確率を引く');
  addFormula(s,'R_parallel = 1 − (1 − R)^2',0.72,1.46,4.35,0.62);
  s.addText('例：1台の信頼度 R=0.80',{x:0.75,y:2.38,w:3.8,h:0.36,fontFace:FONT,fontSize:16,bold:true,color:C.dark,margin:0});
  const bx=1.08, baseY=5.70, scale=3.2;
  const h1=0.80*scale, h2=0.96*scale;
  s.addShape(pptx.ShapeType.rect,{x:bx,y:baseY-h1,w:1.15,h:h1,fill:{color:C.blue},line:{color:C.blue}});
  s.addShape(pptx.ShapeType.rect,{x:bx+2.15,y:baseY-h2,w:1.15,h:h2,fill:{color:C.teal},line:{color:C.teal}});
  s.addText('0.80',{x:bx,y:baseY-h1-0.42,w:1.15,h:0.30,fontFace:FONT,fontSize:15,bold:true,color:C.blue,align:'center',margin:0});
  s.addText('0.96',{x:bx+2.15,y:baseY-h2-0.42,w:1.15,h:0.30,fontFace:FONT,fontSize:15,bold:true,color:C.teal,align:'center',margin:0});
  s.addText('単一系',{x:bx,y:baseY+0.12,w:1.15,h:0.30,fontFace:FONT,fontSize:12,color:C.gray,align:'center',margin:0});
  s.addText('理想2並列',{x:bx+2.00,y:baseY+0.12,w:1.45,h:0.30,fontFace:FONT,fontSize:12,color:C.gray,align:'center',margin:0});
  box(s,6.05,1.45,6.20,1.62,'考え方','1台の故障確率は 0.20。2台とも故障する確率は 0.20²=0.04。よって少なくとも1台正常の確率は 1−0.04=0.96。',{fill:'F4F9FA',bodySize:12.5});
  box(s,6.05,3.47,6.20,2.05,'実設備へ使う前に確認','独立故障 / 完全切替 / 負荷分担による故障率変化なし、を仮定。共通電源・共通ソフトウェア・共通環境などの共通原因故障があると改善量は小さくなる。',{fill:'FFF7F0',line:'E6B98E',headColor:C.orange,bodySize:11.5});
  note(s,'直列系：R_series = ΠR_i。必要要素が増えるほど、各要素の信頼度が1未満なら系信頼度は低下する。',6.05,5.83,6.20,0.70,'EEF5F7');
  smallSource(s,'系列SPEC計算・グラフ 2/3：単一系・冗長系比較');
}

{
  const s=pptx.addSlide('MASTER');
  title(s,'可用性：修理を含め「必要時に使えるか」','信頼度と可用性を同じ式で扱わない');
  addFormula(s,'A = MTBF / (MTBF + MTTR)',0.75,1.43,4.45,0.62);
  box(s,0.75,2.35,4.45,1.72,'単一系の例','MTBF=2000 h, MTTR=4 h\nA=2000/2004=0.998004\n= 99.8004 %',{fill:'F4F9FA',bodySize:13});
  box(s,0.75,4.46,4.45,1.50,'理想2並列','A_parallel=1−(1−A)^2\n= 99.9996 %',{fill:'F8F7F2',bodySize:13});
  const barW=5.65;
  s.addText('可用性の比較',{x:6.20,y:1.55,w:2.6,h:0.36,fontFace:FONT,fontSize:18,bold:true,color:C.navy,margin:0});
  s.addText('単一系',{x:6.25,y:2.42,w:1.10,h:0.28,fontFace:FONT,fontSize:12,color:C.gray,margin:0});
  s.addShape(pptx.ShapeType.rect,{x:7.42,y:2.38,w:barW,h:0.38,fill:{color:'DFE8ED'},line:{color:'DFE8ED'}});
  s.addShape(pptx.ShapeType.rect,{x:7.42,y:2.38,w:barW*0.998004,h:0.38,fill:{color:C.blue},line:{color:C.blue}});
  s.addText('99.8004 %',{x:9.98,y:2.18,w:2.0,h:0.30,fontFace:FONT,fontSize:13,bold:true,color:C.blue,align:'right',margin:0});
  s.addText('理想2並列',{x:6.25,y:3.45,w:1.10,h:0.28,fontFace:FONT,fontSize:12,color:C.gray,margin:0});
  s.addShape(pptx.ShapeType.rect,{x:7.42,y:3.41,w:barW,h:0.38,fill:{color:'DFE8ED'},line:{color:'DFE8ED'}});
  s.addShape(pptx.ShapeType.rect,{x:7.42,y:3.41,w:barW*0.999996,h:0.38,fill:{color:C.teal},line:{color:C.teal}});
  s.addText('99.9996 %',{x:9.98,y:3.21,w:2.0,h:0.30,fontFace:FONT,fontSize:13,bold:true,color:C.teal,align:'right',margin:0});
  box(s,6.22,4.42,6.08,1.60,'区別','信頼度：一定時間、連続して故障しない確率。\n可用性：修復を含め、必要な時に使用可能である度合い。',{fill:'FFF7F0',line:'E6B98E',headColor:C.orange,bodySize:12.5});
  smallSource(s,'系列SPEC計算・グラフ 3/3：可用性比較。数値は教材用仮定でありCOSMOS実設備値ではない。');
}

{
  const s=pptx.addSlide('MASTER');
  title(s,'遠隔計測・遠隔制御と保護','二次試験では「理由まで書ける」状態を作る');
  box(s,0.55,1.42,3.65,2.02,'遠隔計測','現場量 → センサ/CT/VT → A/D → 通信 → 監視側。\n誤差・異常・通信品質も評価対象。',{fill:'F4F9FA'});
  box(s,4.52,1.42,3.65,2.02,'遠隔制御','対象状態・保護条件・通信異常時の扱いを確認し、安全側動作を含めて指令妥当性を判断。',{fill:'F8F7F2'});
  box(s,8.49,1.42,4.28,2.02,'保護リレーの信頼性','正動作：区間内事故で確実に動作\n正不動作：区間外事故・正常時に不要動作しない\n改善：点検 / 自動監視 / 低故障率 / 必要箇所の冗長化',{fill:'F4F9FA',bodySize:10.8});
  s.addShape(pptx.ShapeType.line,{x:0.82,y:4.20,w:11.25,h:0,line:{color:C.border,width:1.3}});
  s.addText('R2 二次「電力・管理」問2 への5答案要素',{x:0.75,y:4.43,w:5.1,h:0.38,fontFace:FONT,fontSize:18,bold:true,color:C.navy,margin:0});
  const items=[
    '① 計器用変成器：絶縁・変成、CT / VT',
    '② 比誤差：定義式・符号・百分率',
    '③ 正動作 / 正不動作 + 信頼性向上策',
    '④ 77/66 kV級：5又は3サイクル、トリップコイル',
    '⑤ トリップフリー：投入より引外しを優先'
  ];
  items.forEach((t,i)=>{
    const x=i<3?0.78:7.02, y=5.00+(i<3?i: i-3)*0.50, w=i<3?5.85:5.10;
    s.addShape(pptx.ShapeType.ellipse,{x,y:y+0.03,w:0.22,h:0.22,fill:{color:i<3?C.teal:C.orange},line:{color:i<3?C.teal:C.orange}});
    s.addText(t,{x:x+0.34,y,w:w-0.34,h:0.30,fontFace:FONT,fontSize:10.8,color:C.dark,margin:0,fit:'shrink'});
  });
  note(s,'トリップフリー：投入指令が残っていても、事故除去の引外し指令を優先して開放状態へ導く。',7.02,6.05,5.15,0.63,'FFF4D6');
  smallSource(s,'二次問題の件数合わせ 0件。主題に直接対応するR2二次「電力・管理」問2のみ採用。');
}

{
  const s=pptx.addSlide('MASTER');
  title(s,'過去問対応ゲート','PowerPointでも固定25答案要素・SPEC固定項目を落とさない');
  const rows=[
    ['R4 一次「機械」問3','5','CT/VT・負担・励磁・比誤差・CT二次開放','Slide 3'],
    ['R3 一次「機械」問8','5','A/D・2進数・量子化・MSB・S/H','Slide 4'],
    ['H30 一次「機械」問8','5','LAN・リピータ・ブリッジ・MAC・Wi-Fi・DHCP','Slide 5'],
    ['H25 一次「機械」問8','5','搬送波・復調・AM・QAM・ASK','Slide 5'],
    ['R2 二次「電力・管理」問2','5','計器用変成器・比誤差・保護信頼性・遮断器','Slide 3 / 9']
  ];
  const cols=[0.55,3.25,4.05,10.55], widths=[2.55,0.65,6.30,1.70];
  const headers=['固定公式過去問','答案要素','PowerPoint接続内容','位置'];
  headers.forEach((h,i)=>{s.addShape(pptx.ShapeType.rect,{x:cols[i],y:1.38,w:widths[i],h:0.45,fill:{color:C.navy},line:{color:C.navy}});s.addText(h,{x:cols[i]+0.08,y:1.49,w:widths[i]-0.16,h:0.20,fontFace:FONT,fontSize:10,bold:true,color:C.white,margin:0,align:i===1?'center':'left'});});
  rows.forEach((r,ri)=>{const y=1.83+ri*0.63; r.forEach((v,i)=>{s.addShape(pptx.ShapeType.rect,{x:cols[i],y,w:widths[i],h:0.63,fill:{color:ri%2===0?'FFFFFF':'F2F5F7'},line:{color:C.border,width:0.7}});s.addText(v,{x:cols[i]+0.08,y:y+0.12,w:widths[i]-0.16,h:0.36,fontFace:FONT,fontSize:i===2?9.2:9.6,color:C.dark,margin:0,fit:'shrink',align:i===1?'center':'left'});});});
  tag(s,'一次 20 / 20',0.75,5.31,1.78,C.teal);
  tag(s,'二次 5 / 5',2.72,5.31,1.60,C.orange);
  tag(s,'合計 25 / 25',4.53,5.31,1.80,C.navy);
  tag(s,'SPEC 13 / 13',6.56,5.31,1.80,C.green);
  tag(s,'グラフ 3 / 3',8.60,5.31,1.80,C.blue);
  tag(s,'推測実値 0件',10.64,5.31,1.80,C.red);
  s.addText('主な正本・出典',{x:0.62,y:5.93,w:2.2,h:0.30,fontFace:FONT,fontSize:14,bold:true,color:C.navy,margin:0});
  s.addText('・一般財団法人 電気技術者試験センター「第二種電気主任技術者試験 過去問題」 https://www.shiken.or.jp/chief/second/qa/\n・denken-shinkansen/MASTER_SPEC.md / EXAM_ALIGNMENT_SPEC.md / 05_shinkansen_vehicle_2/SPEC.md\n・Topic 39 EXAM_ALIGNMENT / explanation source / practice source（GitHub正本、2026-09-21）',{x:2.58,y:5.83,w:9.65,h:0.80,fontFace:FONT,fontSize:8.6,color:C.gray,margin:0,fit:'shrink'});
  smallSource(s,'このPowerPointは試験論点の理解支援資料。独立clean blind最終ゲートは別fresh workerで実施する。');
}

pptx.writeFile({ fileName:'/mnt/data/39_cosmos_integrated_monitoring_scada_reliability_powerpoint.pptx' });
