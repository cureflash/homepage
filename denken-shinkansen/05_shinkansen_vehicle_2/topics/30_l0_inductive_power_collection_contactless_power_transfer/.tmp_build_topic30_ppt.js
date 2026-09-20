const pptxgen = require('pptxgenjs');

const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE'; // 13.333 x 7.5
pptx.author = 'cureflash / OpenAI';
pptx.subject = 'denken-shinkansen Topic 30';
pptx.title = 'L0系④ 誘導集電・非接触電力伝送';
pptx.company = 'denken-shinkansen';
pptx.lang = 'ja-JP';
pptx.theme = {
  headFontFace: 'Noto Sans CJK JP',
  bodyFontFace: 'Noto Sans CJK JP',
  lang: 'ja-JP'
};
pptx.defineSlideMaster({
  title: 'MASTER',
  background: { color: 'F7F9FB' },
  objects: [
    { rect: { x:0, y:0, w:13.333, h:0.16, fill:{color:'1C4B5A'}, line:{color:'1C4B5A'} } },
    { line: { x:0.5, y:7.10, w:12.33, h:0, line:{color:'D9E0E5', width:1} } },
    { text: { text:'電験二種 × 新幹線車両　Topic 30', options:{ x:0.55, y:7.14, w:5.8, h:0.20, fontFace:'Noto Sans CJK JP', fontSize:8.5, color:'64727A', margin:0 } } },
  ],
  slideNumber: { x:12.2, y:7.13, w:0.55, h:0.22, fontFace:'Noto Sans CJK JP', fontSize:8.5, color:'64727A', align:'right', margin:0 }
});

const C = {
  navy:'183B4E', teal:'287D8E', teal2:'4D9AAA', gold:'B98224', red:'B24B4B', green:'2C7A5B',
  ink:'1E2A31', mid:'51626C', light:'E8EFF3', lighter:'F4F7F9', white:'FFFFFF', gray:'C9D4DA',
  paleTeal:'E5F2F4', paleGold:'F7EEDC', paleRed:'F7E9E9', paleBlue:'E8F0F8'
};
const FONT='Noto Sans CJK JP';
function tx(slide, text, x,y,w,h, fs=18, color=C.ink, bold=false, opts={}) {
  slide.addText(text,{x,y,w,h,fontFace:FONT,fontSize:fs,color,bold,margin:0,breakLine:false,valign:opts.valign||'mid',align:opts.align||'left',fit:'shrink',...opts});
}
function title(slide, t, sub=''){
  tx(slide,t,0.62,0.35,12.05,0.55,27,C.navy,true,{valign:'mid'});
  if(sub) tx(slide,sub,0.64,0.93,12.0,0.34,11.5,C.mid,false,{valign:'mid'});
}
function box(slide,x,y,w,h,fill='FFFFFF',line=C.gray,r=0.08){
  slide.addShape(pptx.ShapeType.roundRect,{x,y,w,h,rectRadius:r,fill:{color:fill},line:{color:line,width:1}});
}
function label(slide,text,x,y,w,h,fill=C.teal,color=C.white,fs=12){
  slide.addShape(pptx.ShapeType.roundRect,{x,y,w,h,fill:{color:fill},line:{color:fill}});
  tx(slide,text,x+0.05,y,w-0.1,h,fs,color,true,{align:'center'});
}
function line(slide,x1,y1,x2,y2,color=C.mid,width=1.5,dash='solid'){
  slide.addShape(pptx.ShapeType.line,{x:x1,y:y1,w:x2-x1,h:y2-y1,line:{color,width,dash}});
}
function arrow(slide,x1,y1,x2,y2,color=C.teal,width=2){
  slide.addShape(pptx.ShapeType.line,{x:x1,y:y1,w:x2-x1,h:y2-y1,line:{color,width,beginArrowType:'none',endArrowType:'triangle'}});
}
function bulletLines(slide, items, x,y,w,h, fs=15, color=C.ink, gap=5){
  const runs=[];
  items.forEach((it,i)=>{
    runs.push({text:it,options:{bullet:{indent:16},hanging:4,breakLine:i<items.length-1}});
  });
  slide.addText(runs,{x,y,w,h,fontFace:FONT,fontSize:fs,color,margin:0.04,breakLine:false,valign:'top',paraSpaceAfterPt:gap,fit:'shrink'});
}

// Slide 1
{
  const s=pptx.addSlide('MASTER');
  title(s,'L0系④ 誘導集電・非接触電力伝送','相互インダクタンス → 結合回路 → 交流電力・効率 → 周波数特性');
  const y=2.0;
  box(s,0.8,y,2.25,1.35,C.paleBlue,C.teal);
  tx(s,'地上側コイル',1.0,y+0.22,1.85,0.32,19,C.navy,true,{align:'center'});
  tx(s,'交流電流 I₁',1.0,y+0.68,1.85,0.30,14,C.mid,false,{align:'center'});
  arrow(s,3.15,y+0.67,4.65,y+0.67,C.teal,2.5);
  tx(s,'変動磁界',3.34,y+0.28,1.1,0.30,13,C.teal,true,{align:'center'});
  tx(s,'M, k',3.50,y+0.80,0.75,0.25,12,C.mid,true,{align:'center'});
  box(s,4.75,y,2.25,1.35,C.paleTeal,C.teal);
  tx(s,'車上側コイル',4.95,y+0.22,1.85,0.32,19,C.navy,true,{align:'center'});
  tx(s,'誘導起電力 E₂',4.95,y+0.68,1.85,0.30,14,C.mid,false,{align:'center'});
  arrow(s,7.10,y+0.67,8.60,y+0.67,C.teal,2.5);
  box(s,8.70,y,2.10,1.35,C.paleGold,C.gold);
  tx(s,'負荷・補償回路',8.90,y+0.22,1.70,0.32,18,C.navy,true,{align:'center'});
  tx(s,'P, cosφ, η',8.90,y+0.68,1.70,0.30,14,C.mid,false,{align:'center'});
  arrow(s,10.90,y+0.67,12.25,y+0.67,C.gold,2.5);
  tx(s,'給電',11.20,y+0.25,0.75,0.32,13,C.gold,true,{align:'center'});
  box(s,0.85,4.00,5.95,2.18,'FFFFFF',C.gray);
  label(s,'本試験で問うこと',1.05,4.18,1.95,0.36,C.navy);
  bulletLines(s,[
    'e₂ = −M·di₁/dt と k = M/√(L₁L₂) を使う',
    '複素インピーダンスで I₂・P・力率・効率を求める',
    '共振・変圧器損失・最大効率まで二種水準で接続する'
  ],1.08,4.68,5.45,1.25,14.2,C.ink,3);
  box(s,7.08,4.00,5.40,2.18,C.lighter,C.gray);
  label(s,'実車事実と教材モデルを分離',7.28,4.18,2.55,0.36,C.teal);
  tx(s,'確認済み: L0系は電磁誘導を用いる誘導集電方式を採用。',7.35,4.68,4.83,0.45,13.5,C.ink,true);
  tx(s,'未確認の k・L・M・周波数・伝送電力・効率等は真値化しない。\n以降の数値・グラフはすべて「教材用仮定値」。',7.35,5.18,4.83,0.78,13.2,C.mid,false,{valign:'top'});
  label(s,'固定5問・25答案要素',0.88,6.40,2.25,0.34,C.green);
  tx(s,'一次 20/20 + 二次 5/5　｜　SPEC 7項目　｜　指定3可視化',3.25,6.40,8.9,0.34,13,C.mid,true);
}

// Slide 2
{
  const s=pptx.addSlide('MASTER');
  title(s,'相互インダクタンス M と結合係数 k','R7一次「理論」問2・H30一次「理論」問2への橋渡し');
  box(s,0.75,1.55,5.35,4.65,'FFFFFF',C.gray);
  label(s,'結合コイルの見方',0.98,1.75,1.85,0.35,C.navy);
  for(let i=0;i<5;i++){
    s.addShape(pptx.ShapeType.ellipse,{x:1.35+i*0.28,y:2.55,w:0.55,h:1.55,fill:{color:'FFFFFF',transparency:100},line:{color:C.teal,width:2}});
    s.addShape(pptx.ShapeType.ellipse,{x:4.02+i*0.28,y:2.55,w:0.55,h:1.55,fill:{color:'FFFFFF',transparency:100},line:{color:C.gold,width:2}});
  }
  tx(s,'coil 1',1.40,4.23,1.60,0.30,14,C.teal,true,{align:'center'});
  tx(s,'coil 2',4.03,4.23,1.60,0.30,14,C.gold,true,{align:'center'});
  arrow(s,2.93,3.30,4.00,3.30,C.mid,2.0);
  tx(s,'共通磁束 Φ₂₁',2.68,2.70,1.55,0.35,12,C.mid,true,{align:'center'});
  tx(s,'自己: L₁ = Ψ₁/i₁',1.10,4.72,2.25,0.34,13,C.ink,false,{align:'center'});
  tx(s,'相互: M = N₂Φ₂₁/i₁',3.35,4.72,2.25,0.34,13,C.ink,false,{align:'center'});
  tx(s,'全磁束 ≠ 相互磁束\n磁束分配を先に読む',1.35,5.27,4.20,0.62,13.2,C.red,true,{align:'center'});
  box(s,6.35,1.55,6.10,4.65,C.lighter,C.gray);
  label(s,'必須公式',6.58,1.75,1.55,0.35,C.teal);
  tx(s,'Ψ₁ = L₁i₁ + Mi₂\nΨ₂ = Mi₁ + L₂i₂',6.72,2.20,2.95,0.82,17,C.navy,true,{valign:'mid'});
  tx(s,'e₂ = −M·di₁/dt\n|E₂| = ωM|I₁|',9.28,2.20,2.55,0.82,17,C.navy,true,{valign:'mid'});
  line(s,6.72,3.20,12.00,3.20,C.gray,1);
  tx(s,'k = M / √(L₁L₂)',6.72,3.48,2.85,0.48,21,C.teal,true);
  tx(s,'M² ≤ L₁L₂  ⇒  0 ≤ k ≤ 1',9.20,3.48,2.72,0.48,17,C.teal,true,{align:'right'});
  tx(s,'根拠: 受動・線形二巻線系の磁気エネルギーが任意の電流で負にならないこと。',6.75,4.15,5.20,0.60,13.5,C.mid,false,{valign:'top'});
  box(s,6.70,4.95,5.35,0.82,C.paleGold,C.gold);
  tx(s,'ひっかけ:  k = M/(L₁L₂) ではない。\nMの大小は √(L₁L₂) で規格化して判断する。',6.95,5.07,4.85,0.54,13.4,C.ink,true,{align:'center'});
  label(s,'答案接続',0.82,6.42,1.10,0.32,C.green);
  tx(s,'R7一次 5要素 + H30一次理論 5要素 → 相互誘導・磁気エネルギー・磁束分配をカバー',2.04,6.40,10.3,0.36,12.8,C.mid,true);
}

// Slide 3
{
  const s=pptx.addSlide('MASTER');
  title(s,'結合回路をフェーザで解く','二次負荷は一次側にも反映される');
  box(s,0.72,1.48,7.42,4.95,'FFFFFF',C.gray);
  label(s,'教材用等価回路',0.96,1.70,1.70,0.34,C.navy);
  s.addShape(pptx.ShapeType.ellipse,{x:1.05,y:2.65,w:0.72,h:0.72,fill:{color:'FFFFFF'},line:{color:C.navy,width:2}});
  tx(s,'V₁',1.12,2.82,0.58,0.28,14,C.navy,true,{align:'center'});
  line(s,1.77,3.02,2.55,3.02,C.navy,2);
  box(s,2.55,2.58,1.90,0.86,C.paleBlue,C.teal);
  tx(s,'R₁ + jωL₁',2.72,2.82,1.55,0.30,16,C.navy,true,{align:'center'});
  arrow(s,4.45,3.02,5.20,3.02,C.teal,2.2);
  tx(s,'jωM',4.53,2.58,0.60,0.25,12,C.teal,true,{align:'center'});
  box(s,5.20,2.58,2.18,0.86,C.paleGold,C.gold);
  tx(s,'R₂ + jωL₂ + R_L',5.34,2.82,1.90,0.30,14.5,C.navy,true,{align:'center'});
  tx(s,'I₁',2.00,2.58,0.45,0.25,12.5,C.mid,true,{align:'center'});
  tx(s,'I₂',6.05,3.52,0.45,0.25,12.5,C.mid,true,{align:'center'});
  line(s,7.38,3.02,7.38,4.35,C.navy,2); line(s,7.38,4.35,1.40,4.35,C.navy,2); line(s,1.40,4.35,1.40,3.37,C.navy,2);
  tx(s,'Z₂ = R₂ + R_L + jωL₂',1.15,4.72,2.85,0.34,15,C.ink,true);
  tx(s,'I₂ = −jωM I₁ / Z₂',4.14,4.72,2.75,0.34,15,C.ink,true);
  tx(s,'Z_ref = (ωM)² / Z₂',1.15,5.22,2.85,0.34,15,C.ink,true);
  tx(s,'Z_in = R₁ + jωL₁ + Z_ref',4.14,5.22,3.25,0.34,15,C.ink,true);
  tx(s,'固定電源電圧では M が変わると I₁ も変わる。\n「Mが2倍 → 常にPが4倍」と一般化しない。',1.22,5.68,6.42,0.54,12.9,C.red,true,{align:'center'});
  box(s,8.42,1.48,4.12,4.95,C.lighter,C.gray);
  label(s,'交流電力・効率',8.66,1.70,1.75,0.34,C.teal);
  tx(s,'S = VI',8.78,2.27,1.55,0.35,18,C.navy,true);
  tx(s,'P = VI cosφ',8.78,2.72,2.25,0.35,18,C.navy,true);
  tx(s,'Q = VI sinφ',8.78,3.17,2.25,0.35,18,C.navy,true);
  line(s,8.72,3.72,12.10,3.72,C.gray,1);
  tx(s,'P_out = |I₂|²R_L',8.78,4.00,2.65,0.35,16,C.teal,true);
  tx(s,'P_cu1 = |I₁|²R₁',8.78,4.43,2.65,0.35,15,C.ink,false);
  tx(s,'P_cu2 = |I₂|²R₂',8.78,4.82,2.65,0.35,15,C.ink,false);
  tx(s,'η = P_out / (P_out + P_cu1 + P_cu2)',8.76,5.30,3.28,0.66,14.5,C.green,true,{valign:'mid'});
  tx(s,'※ 教材モデル: 損失はコイル抵抗のみ',8.78,6.02,3.05,0.25,10.8,C.mid,false);
  label(s,'答案接続',0.82,6.58,1.10,0.32,C.green);
  tx(s,'有効電力・力率・損失・効率を R2二次「機械・制御」へ接続',2.04,6.56,10.1,0.36,12.8,C.mid,true);
}

// Slide 4
{
  const s=pptx.addSlide('MASTER');
  title(s,'指定可視化 1・2','教材用仮定値で「結合」と「負荷」を分離して読む');
  box(s,0.70,1.42,5.98,4.95,'FFFFFF',C.gray);
  label(s,'① 結合係数 k — 伝送電力 P_L',0.92,1.62,2.65,0.34,C.teal);
  s.addChart(pptx.ChartType.line,[{name:'P_L [W]',labels:['0.10','0.20','0.30','0.40','0.50'],values:[25.62,102.49,230.59,409.94,640.54]}],{
    x:1.02,y:2.12,w:5.28,h:2.75,
    showLegend:false,showTitle:false,showValue:false,
    catAxisLabelFontFace:FONT,catAxisLabelFontSize:11,valAxisLabelFontFace:FONT,valAxisLabelFontSize:10,
    showCatName:false,showSerName:false,
    catAxisTitle:'k',valAxisTitle:'P_L [W]',showCatAxisTitle:true,showValAxisTitle:true,
    chartColors:[C.teal],lineSize:3,showMarker:true,markerSize:7,
    showValue:false,valGridLine:{color:'DCE4E8',width:1},showBorder:false
  });
  tx(s,'固定 I₁・共振という限定条件では P_L ∝ k²',1.02,5.08,5.22,0.36,14,C.navy,true,{align:'center'});
  tx(s,'L₁=2.0 mH, L₂=1.5 mH, f=1 kHz, I₁=10 A',1.04,5.55,5.18,0.32,11.2,C.mid,false,{align:'center'});
  box(s,6.88,1.42,5.75,4.95,'FFFFFF',C.gray);
  label(s,'② 負荷 R_L — 効率 η',7.10,1.62,2.10,0.34,C.gold);
  s.addChart(pptx.ChartType.line,[{name:'η [%]',labels:['0.5','1','2','4','8','16'],values:[60.68,73.35,80.05,80.10,73.49,60.91]}],{
    x:7.16,y:2.12,w:5.10,h:2.75,
    showLegend:false,showTitle:false,showValue:false,
    catAxisLabelFontFace:FONT,catAxisLabelFontSize:11,valAxisLabelFontFace:FONT,valAxisLabelFontSize:10,
    catAxisTitle:'R_L [Ω]',valAxisTitle:'η [%]',showCatAxisTitle:true,showValAxisTitle:true,
    chartColors:[C.gold],lineSize:3,showMarker:true,markerSize:7,
    valGridLine:{color:'E6E0D7',width:1},showBorder:false
  });
  tx(s,'中間負荷で効率最大。極端に小さい/大きい負荷で低下',7.18,5.08,5.00,0.42,13.5,C.navy,true,{align:'center'});
  tx(s,'R_L,opt = √(R₂² + B R₂/R₁) ≈ 2.84 Ω',7.18,5.55,5.00,0.32,12.5,C.mid,false,{align:'center'});
  box(s,0.82,6.46,11.70,0.43,C.paleRed,C.red);
  tx(s,'注意: 上の k・L・M・f・効率はL0系実車値ではなく、指定可視化用の教材仮定値。',1.00,6.50,11.32,0.32,12.2,C.red,true,{align:'center'});
}

// Slide 5
{
  const s=pptx.addSlide('MASTER');
  title(s,'指定可視化 3：周波数特性','R8一次「理論」問5の直列共振を、結合回路へ接続する');
  box(s,0.72,1.45,7.25,4.90,'FFFFFF',C.gray);
  label(s,'③ 周波数 — 伝送電力 / 効率',0.94,1.66,2.55,0.34,C.teal);
  s.addChart(pptx.ChartType.line,[{name:'P_L [W]',labels:['500','750','1000','1250','1500'],values:[4.88,49.23,230.59,182.63,119.65]}],{
    x:1.02,y:2.13,w:6.48,h:2.15,showLegend:false,showTitle:false,
    catAxisLabelFontFace:FONT,catAxisLabelFontSize:10,valAxisLabelFontFace:FONT,valAxisLabelFontSize:10,
    catAxisTitle:'f [Hz]',valAxisTitle:'P_L [W]',showCatAxisTitle:true,showValAxisTitle:true,
    chartColors:[C.teal],lineSize:3,showMarker:true,markerSize:6,valGridLine:{color:'DCE4E8',width:1},showBorder:false
  });
  s.addChart(pptx.ChartType.line,[{name:'η [%]',labels:['500','750','1000','1250','1500'],values:[10.79,52.98,80.10,77.28,70.96]}],{
    x:1.02,y:4.42,w:6.48,h:1.55,showLegend:false,showTitle:false,
    catAxisLabelFontFace:FONT,catAxisLabelFontSize:9,valAxisLabelFontFace:FONT,valAxisLabelFontSize:9,
    catAxisTitle:'f [Hz]',valAxisTitle:'η [%]',showCatAxisTitle:true,showValAxisTitle:true,
    chartColors:[C.gold],lineSize:2.5,showMarker:true,markerSize:5,valGridLine:{color:'E6E0D7',width:1},showBorder:false
  });
  box(s,8.20,1.45,4.34,4.90,C.lighter,C.gray);
  label(s,'直列RLC共振',8.43,1.66,1.70,0.34,C.navy);
  tx(s,'Z = R + j(ωL − 1/ωC)',8.55,2.16,3.50,0.42,16,C.navy,true,{align:'center'});
  tx(s,'ω₀ = 1/√(LC)',8.55,2.80,3.50,0.42,20,C.teal,true,{align:'center'});
  tx(s,'f₀ = 1/(2π√(LC))',8.55,3.34,3.50,0.42,18,C.teal,true,{align:'center'});
  tx(s,'Q = ω₀L/R',8.55,3.88,3.50,0.42,18,C.gold,true,{align:'center'});
  tx(s,'共振時: X_L = X_C\n合成リアクタンス 0 → 力率 1',8.55,4.48,3.50,0.72,14,C.ink,true,{align:'center'});
  box(s,8.55,5.35,3.50,0.65,C.paleRed,C.red);
  tx(s,'1 kHzのピークは教材条件。\nL0系実周波数ではない。',8.72,5.42,3.15,0.50,12.5,C.red,true,{align:'center'});
  tx(s,'R8一次 5要素: 共振条件・電流・Q・L/C端子電圧・条件判定',0.88,6.55,11.68,0.34,12.7,C.mid,true,{align:'center'});
}

// Slide 6
{
  const s=pptx.addSlide('MASTER');
  title(s,'損失・最大効率と過去問対応品質ゲート','H30一次「機械」問5 + R2二次「機械・制御」問2');
  box(s,0.72,1.42,5.45,4.98,'FFFFFF',C.gray);
  label(s,'変圧器試験 → 損失分離',0.96,1.64,2.25,0.34,C.navy);
  box(s,1.03,2.14,2.12,1.20,C.paleBlue,C.teal);
  tx(s,'無負荷試験',1.17,2.30,1.84,0.30,16,C.navy,true,{align:'center'});
  tx(s,'P₀ ≈ P_i（鉄損）',1.17,2.73,1.84,0.30,14,C.ink,true,{align:'center'});
  box(s,3.52,2.14,2.12,1.20,C.paleGold,C.gold);
  tx(s,'短絡試験',3.66,2.30,1.84,0.30,16,C.navy,true,{align:'center'});
  tx(s,'P_sc ≈ P_c,n（銅損）',3.66,2.73,1.84,0.30,13.5,C.ink,true,{align:'center'});
  tx(s,'P_c(α) = α²P_c,n',1.10,3.72,4.40,0.38,18,C.teal,true,{align:'center'});
  tx(s,'最大効率条件:  P_i = α²P_c,n',1.10,4.28,4.40,0.38,16,C.navy,true,{align:'center'});
  tx(s,'α_max = √(P_i / P_c,n)',1.10,4.80,4.40,0.38,19,C.green,true,{align:'center'});
  tx(s,'η = αS_n cosφ / (αS_n cosφ + P_i + α²P_c,n)',1.04,5.34,4.55,0.54,13.5,C.ink,true,{align:'center'});
  tx(s,'周波数依存は条件確認: B_m一定なら P_h∝f, P_e∝f²',1.04,5.92,4.55,0.28,10.8,C.mid,false,{align:'center'});
  box(s,6.43,1.42,6.10,4.98,C.lighter,C.gray);
  label(s,'固定EXAM_ALIGNMENT',6.66,1.64,2.00,0.34,C.teal);
  const rows=[
    ['R8 一次 理論 問5','RLC共振','5'],
    ['R7 一次 理論 問2','相互誘導・M²≤L₁L₂','5'],
    ['H30 一次 理論 問2','磁気回路・L/M','5'],
    ['H30 一次 機械 問5','試験・損失・効率','5'],
    ['R2 二次 機械制御 問2','最大効率・力率','5']
  ];
  s.addShape(pptx.ShapeType.rect,{x:6.73,y:2.15,w:5.50,h:0.42,fill:{color:C.navy},line:{color:C.navy}});
  tx(s,'固定過去問',6.84,2.19,2.18,0.28,11.5,C.white,true,{align:'center'});
  tx(s,'主論点',9.05,2.19,2.30,0.28,11.5,C.white,true,{align:'center'});
  tx(s,'要素',11.42,2.19,0.63,0.28,11.5,C.white,true,{align:'center'});
  let yy=2.58;
  rows.forEach((r,i)=>{
    const fill=i%2===0?'FFFFFF':'EEF3F6';
    s.addShape(pptx.ShapeType.rect,{x:6.73,y:yy,w:5.50,h:0.54,fill:{color:fill},line:{color:'D6E0E5',width:0.8}});
    tx(s,r[0],6.84,yy+0.08,2.18,0.32,10.6,C.ink,false,{align:'center'});
    tx(s,r[1],9.05,yy+0.08,2.30,0.32,10.6,C.ink,false,{align:'center'});
    tx(s,r[2],11.42,yy+0.08,0.63,0.32,11.2,C.navy,true,{align:'center'});
    yy+=0.54;
  });
  tx(s,'一次 20/20　＋　二次 5/5　＝　25/25 connected',6.83,5.48,5.23,0.38,13.2,C.green,true,{align:'center'});
  tx(s,'SPEC 7/7　｜　指定可視化 3/3　｜　未確認実車値の真値化 0',6.83,5.91,5.23,0.30,11.2,C.mid,true,{align:'center'});
  box(s,0.85,6.52,11.65,0.37,C.paleRed,C.red);
  tx(s,'Topic 21 H26二次 48.1/48.0 N·m は π=3.14相当の過去問固有丸め差。一般式 P=Tω, ω=2πN/60 は変更しない。',1.00,6.55,11.35,0.30,10.7,C.red,true,{align:'center'});
}

pptx.writeFile({ fileName: 'denken-shinkansen/05_shinkansen_vehicle_2/topics/30_l0_inductive_power_collection_contactless_power_transfer/30_l0_inductive_power_collection_contactless_power_transfer_images.pptx' });
