const pptxgen = require('pptxgenjs');
const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'cureflash';
pptx.subject = '電験×新幹線 Topic 32 ATC③';
pptx.title = 'ATC③ 新幹線をどう自動で減速させる？';
pptx.company = 'cureflash';
pptx.lang = 'ja-JP';
pptx.theme = {
  headFontFace: 'Noto Sans CJK JP', bodyFontFace: 'Noto Sans CJK JP', lang: 'ja-JP'
};
pptx.defineSlideMaster({
  title: 'MASTER',
  background: { color: 'F7F8FA' },
  objects: [
    { rect: { x:0, y:0, w:13.333, h:0.12, fill:{color:'223047'}, line:{color:'223047'} } },
    { text: { text:'電験×新幹線｜車両・三種 Topic 32', options:{x:0.45,y:7.15,w:5.0,h:0.18,fontFace:'Noto Sans CJK JP',fontSize:7.5,color:'697386',margin:0} } },
    { text: { text:'cureflash/homepage', options:{x:10.5,y:7.15,w:2.35,h:0.18,fontFace:'Noto Sans CJK JP',fontSize:7.5,color:'697386',align:'right',margin:0} } }
  ],
  slideNumber: { x:12.88, y:7.15, w:0.25, h:0.18, fontFace:'Noto Sans CJK JP', fontSize:7.5, color:'697386', align:'right' }
});

const C = {navy:'223047', blue:'2F6FED', cyan:'19A0AA', green:'31825B', amber:'D28B20', red:'B44A4A', gray:'697386', light:'E9EDF3', white:'FFFFFF', ink:'1C2430'};
function addTitle(slide, title, sub='') {
  slide.addText(title,{x:0.55,y:0.34,w:12.2,h:0.46,fontFace:'Noto Sans CJK JP',fontSize:23,bold:true,color:C.navy,margin:0,breakLine:false,fit:'shrink'});
  if(sub) slide.addText(sub,{x:0.57,y:0.84,w:12.0,h:0.26,fontFace:'Noto Sans CJK JP',fontSize:10.5,color:C.gray,margin:0,fit:'shrink'});
}
function footerSource(slide, text) {
  slide.addText(text,{x:0.55,y:6.83,w:12.1,h:0.22,fontFace:'Noto Sans CJK JP',fontSize:7.2,color:'5E6978',margin:0,fit:'shrink'});
}
function box(slide, x,y,w,h,text, fill='FFFFFF', line='C9D2DF', fs=14, opts={}) {
  slide.addShape(pptx.ShapeType.roundRect,{x,y,w,h,rectRadius:0.06,fill:{color:fill},line:{color:line,width:1}});
  slide.addText(text,{x:x+0.08,y:y+0.05,w:w-0.16,h:h-0.1,fontFace:'Noto Sans CJK JP',fontSize:fs,color:opts.color||C.ink,bold:opts.bold||false,align:opts.align||'center',valign:'mid',margin:0,fit:'shrink'});
}
function arrow(slide,x,y,w,h,color=C.blue) {
  slide.addShape(pptx.ShapeType.rightArrow,{x,y,w,h,fill:{color},line:{color},adjustPoint:0.65});
}
function label(slide,x,y,w,text,color=C.blue){
  slide.addText(text,{x,y,w,h:0.2,fontFace:'Noto Sans CJK JP',fontSize:8.5,bold:true,color,margin:0,fit:'shrink'});
}

{
  const s=pptx.addSlide('MASTER');
  addTitle(s,'ATC③ 新幹線をどう自動で減速させる？','試験論点：速度照査・フィードバック・論理判断・フェイルセーフ');
  s.addText('ATCの速度制御を「一般的な制御系」として読む',{x:0.62,y:1.24,w:7.3,h:0.28,fontFace:'Noto Sans CJK JP',fontSize:15,bold:true,color:C.ink,margin:0});
  const y=1.85, h=0.78;
  box(s,0.6,y,2.05,h,'許容速度\n速度パターン','EAF0FF','B8C9F7',15,{bold:true});
  arrow(s,2.78,y+0.21,0.55,0.34);
  box(s,3.45,y,1.65,h,'比較・照査','FFF3DF','E4C38D',15,{bold:true});
  arrow(s,5.25,y+0.21,0.55,0.34);
  box(s,5.9,y,1.75,h,'ブレーキ指令','FFEAEA','E3AFAF',15,{bold:true});
  arrow(s,7.82,y+0.21,0.55,0.34);
  box(s,8.48,y,1.75,h,'列車速度','EAF6F0','B9D8C9',15,{bold:true});
  arrow(s,10.39,y+0.21,0.55,0.34,C.cyan);
  box(s,11.05,y,1.7,h,'速度検出','E8F7F8','A6D8DC',15,{bold:true});
  s.addShape(pptx.ShapeType.line,{x:11.88,y:2.64,w:0,h:0.75,line:{color:C.cyan,width:2,beginArrowType:'none',endArrowType:'none'}});
  s.addShape(pptx.ShapeType.line,{x:11.88,y:3.39,w:-7.35,h:0,line:{color:C.cyan,width:2}});
  s.addShape(pptx.ShapeType.line,{x:4.53,y:3.39,w:0,h:-0.65,line:{color:C.cyan,width:2,endArrowType:'triangle'}});
  label(s,7.5,3.47,2.0,'検出値を戻す（負帰還）',C.cyan);
  s.addShape(pptx.ShapeType.line,{x:0.75,y:5.62,w:11.8,h:0,line:{color:'7E8795',width:2}});
  s.addShape(pptx.ShapeType.chevron,{x:1.0,y:4.28,w:2.4,h:0.85,fill:{color:'FFFFFF'},line:{color:C.navy,width:1.6}});
  s.addText('車上',{x:1.72,y:4.54,w:0.9,h:0.22,fontFace:'Noto Sans CJK JP',fontSize:13,bold:true,color:C.navy,align:'center',margin:0});
  s.addShape(pptx.ShapeType.line,{x:3.5,y:4.7,w:1.15,h:0,line:{color:C.gray,width:1.4,dash:'dash',endArrowType:'triangle'}});
  box(s,4.8,4.18,3.15,1.05,'地上側から受ける情報\nまたは先行列車位置情報','FFFFFF','BFC8D4',12,{bold:true});
  s.addShape(pptx.ShapeType.line,{x:8.05,y:4.7,w:1.05,h:0,line:{color:C.gray,width:1.4,dash:'dash',endArrowType:'triangle'}});
  box(s,9.25,4.18,2.85,1.05,'車上で速度照査\n必要なら自動ブレーキ','FFFFFF','BFC8D4',12,{bold:true});
  s.addText('世代差はJRTT公開範囲のみ。内部回路・しきい値・減速度は推定しない。',{x:0.75,y:5.88,w:11.7,h:0.28,fontFace:'Noto Sans CJK JP',fontSize:11.5,color:C.red,bold:true,margin:0,fit:'shrink'});
  footerSource(s,'根拠：JRTT「信号」／電気技術者試験センター 第三種過去問（R8上・R7下・R6上/下）');
}

{
  const s=pptx.addSlide('MASTER');
  addTitle(s,'負帰還とブロック線図','R8上 機械 問13：内部信号を書いて C/R を導出する');
  s.addText('基本形',{x:0.65,y:1.25,w:1.2,h:0.25,fontFace:'Noto Sans CJK JP',fontSize:15,bold:true,color:C.ink,margin:0});
  s.addText('R',{x:0.72,y:2.05,w:0.3,h:0.25,fontFace:'Noto Sans CJK JP',fontSize:16,bold:true,color:C.ink,margin:0});
  s.addShape(pptx.ShapeType.ellipse,{x:1.2,y:1.9,w:0.55,h:0.55,fill:{color:'FFFFFF'},line:{color:C.navy,width:1.5}});
  s.addText('+',{x:1.27,y:1.92,w:0.13,h:0.18,fontFace:'Noto Sans CJK JP',fontSize:13,bold:true,color:C.green,margin:0});
  s.addText('−',{x:1.50,y:2.16,w:0.13,h:0.18,fontFace:'Noto Sans CJK JP',fontSize:13,bold:true,color:C.red,margin:0});
  s.addShape(pptx.ShapeType.line,{x:0.98,y:2.17,w:0.22,h:0,line:{color:C.navy,width:1.6,endArrowType:'triangle'}});
  s.addShape(pptx.ShapeType.line,{x:1.75,y:2.17,w:0.62,h:0,line:{color:C.navy,width:1.6,endArrowType:'triangle'}});
  box(s,2.42,1.75,1.45,0.82,'G','EAF0FF','B8C9F7',20,{bold:true});
  s.addShape(pptx.ShapeType.line,{x:3.88,y:2.17,w:0.85,h:0,line:{color:C.navy,width:1.6,endArrowType:'triangle'}});
  s.addText('C',{x:4.8,y:2.05,w:0.3,h:0.25,fontFace:'Noto Sans CJK JP',fontSize:16,bold:true,color:C.ink,margin:0});
  box(s,2.42,3.15,1.45,0.72,'H','E8F7F8','A6D8DC',18,{bold:true});
  s.addShape(pptx.ShapeType.line,{x:4.55,y:2.4,w:0,h:1.1,line:{color:C.cyan,width:1.5}});
  s.addShape(pptx.ShapeType.line,{x:4.55,y:3.5,w:-0.68,h:0,line:{color:C.cyan,width:1.5,endArrowType:'triangle'}});
  s.addShape(pptx.ShapeType.line,{x:2.42,y:3.5,w:-0.95,h:0,line:{color:C.cyan,width:1.5}});
  s.addShape(pptx.ShapeType.line,{x:1.47,y:3.5,w:0,h:-1.05,line:{color:C.cyan,width:1.5,endArrowType:'triangle'}});
  box(s,0.75,4.25,4.55,1.06,'E = R − HC\nC = GE  ⇒  C/R = G/(1+GH)','FFFFFF','C9D2DF',16,{bold:true});
  s.addText('固定過去問型',{x:6.05,y:1.25,w:2.0,h:0.25,fontFace:'Noto Sans CJK JP',fontSize:15,bold:true,color:C.ink,margin:0});
  box(s,6.05,1.72,6.55,0.65,'e = R − x　　x = e/(jωT₂)　　C = x + (T₁/T₂)e','FFFFFF','C9D2DF',15,{bold:true});
  s.addText('1  e と x の関係を連立',{x:6.15,y:2.66,w:2.4,h:0.24,fontFace:'Noto Sans CJK JP',fontSize:13,bold:true,color:C.blue,margin:0});
  s.addText('e/R = jωT₂/(1+jωT₂)\nx/R = 1/(1+jωT₂)',{x:6.35,y:2.98,w:2.7,h:0.86,fontFace:'Noto Sans CJK JP',fontSize:16,color:C.ink,margin:0,fit:'shrink'});
  s.addText('2  C/R へ代入',{x:9.25,y:2.66,w:2.0,h:0.24,fontFace:'Noto Sans CJK JP',fontSize:13,bold:true,color:C.blue,margin:0});
  s.addText('C/R = x/R + (T₁/T₂)(e/R)',{x:9.28,y:2.98,w:3.1,h:0.55,fontFace:'Noto Sans CJK JP',fontSize:15,color:C.ink,margin:0,fit:'shrink'});
  s.addShape(pptx.ShapeType.downArrow,{x:8.85,y:3.95,w:0.65,h:0.65,fill:{color:C.blue},line:{color:C.blue}});
  box(s,7.2,4.72,4.3,0.9,'C/R = (1 + jωT₁) / (1 + jωT₂)','EAF0FF','AFC2F1',19,{bold:true,color:C.navy});
  s.addText('試験手順：図を暗算しない → 内部信号を置く → 加え合わせ点の符号を式にする',{x:6.05,y:5.95,w:6.55,h:0.45,fontFace:'Noto Sans CJK JP',fontSize:12,bold:true,color:C.red,margin:0,fit:'shrink'});
  footerSource(s,'根拠：電気技術者試験センター R8上 機械 問13／Topic 32 source §3〜§5・§12・§14');
}

{
  const s=pptx.addSlide('MASTER');
  addTitle(s,'一次遅れの周波数応答とP・I・D','R7下 機械 問18(a)(b)／R6下 機械 問13');
  s.addText('一次遅れ  W(jω)=K/(1+jωT)',{x:0.65,y:1.27,w:4.3,h:0.3,fontFace:'Noto Sans CJK JP',fontSize:15,bold:true,color:C.ink,margin:0});
  const gx=0.9, gy=2.0, gw=5.15, gh=3.45;
  s.addShape(pptx.ShapeType.line,{x:gx,y:gy+gh,w:gw,h:0,line:{color:C.navy,width:1.2,endArrowType:'triangle'}});
  s.addShape(pptx.ShapeType.line,{x:gx,y:gy+gh,w:0,h:-gh,line:{color:C.navy,width:1.2,endArrowType:'triangle'}});
  s.addText('log ω',{x:gx+gw-0.5,y:gy+gh+0.12,w:0.55,h:0.2,fontFace:'Noto Sans CJK JP',fontSize:9,color:C.gray,margin:0});
  s.addText('利得[dB]',{x:gx-0.18,y:gy-0.27,w:0.9,h:0.2,fontFace:'Noto Sans CJK JP',fontSize:9,color:C.gray,margin:0});
  const y20=gy+0.85;
  s.addShape(pptx.ShapeType.line,{x:gx,y:y20,w:2.2,h:0,line:{color:C.blue,width:2.4}});
  s.addShape(pptx.ShapeType.line,{x:gx+2.2,y:y20,w:2.55,h:1.75,line:{color:C.blue,width:2.4}});
  s.addShape(pptx.ShapeType.line,{x:gx+2.2,y:gy+0.25,w:0,h:3.2,line:{color:'9AA4B2',width:1,dash:'dash'}});
  s.addText('20log₁₀K',{x:gx+0.4,y:y20-0.35,w:1.15,h:0.25,fontFace:'Noto Sans CJK JP',fontSize:11,bold:true,color:C.blue,margin:0});
  s.addText('ωc = 1/T',{x:gx+1.75,y:gy+3.2,w:1.25,h:0.25,fontFace:'Noto Sans CJK JP',fontSize:11,bold:true,color:C.ink,margin:0});
  s.addText('−20 dB/dec',{x:gx+3.5,y:gy+1.85,w:1.4,h:0.25,fontFace:'Noto Sans CJK JP',fontSize:11,bold:true,color:C.blue,rotation: -16,margin:0});
  box(s,0.8,5.72,5.45,0.72,'K=10, T=0.2 s → 低周波利得 20 dB、折点 5 rad/s','FFFFFF','C9D2DF',13,{bold:true});
  s.addText('P・I・Dの試験上の結び付け',{x:6.65,y:1.27,w:4.8,h:0.3,fontFace:'Noto Sans CJK JP',fontSize:15,bold:true,color:C.ink,margin:0});
  const cols=[6.65,7.95,10.05], widths=[1.2,2.0,2.55];
  ['動作','見ている量','固定過去問での要点'].forEach((t,i)=>box(s,cols[i],1.82,widths[i],0.6,t,'E9EDF3','C9D2DF',11,{bold:true}));
  const rows=[['P','現在の偏差','定常・過渡の両方へ影響'],['I','偏差の積分','定常特性を改善'],['D','偏差の変化速度','過渡特性を改善']];
  rows.forEach((r,ri)=>{
    const yy=2.48+ri*0.78;
    box(s,cols[0],yy,widths[0],0.68,r[0],ri===1?'EAF6F0':(ri===2?'FFF3DF':'FFFFFF'),'C9D2DF',18,{bold:true});
    box(s,cols[1],yy,widths[1],0.68,r[1],'FFFFFF','C9D2DF',12,{bold:true});
    box(s,cols[2],yy,widths[2],0.68,r[2],'FFFFFF','C9D2DF',12,{bold:true});
  });
  box(s,6.65,5.15,5.95,1.25,'試験の読み順\n① K → 低周波利得　② T → 折点　③ 一次遅れ → 折点後 −20 dB/dec\nPIDは「I=定常、D=過渡」をまず固定','EAF0FF','AFC2F1',12,{bold:true,color:C.navy});
  footerSource(s,'根拠：電気技術者試験センター R7下 機械 問18(a)(b)、R6下 機械 問13／Topic 32 source §6・§7・§12・§13');
}

{
  const s=pptx.addSlide('MASTER');
  addTitle(s,'論理判断と安全側制御','R6下 機械 問14／R6上 機械 問13：AND・OR・NOT、シーケンス、インタロック');
  s.addText('論理式は制御入力 C で場合分けする',{x:0.65,y:1.25,w:5.0,h:0.28,fontFace:'Noto Sans CJK JP',fontSize:15,bold:true,color:C.ink,margin:0});
  box(s,0.65,1.72,5.35,0.78,'X = A·C + B·NOT(C)','EAF0FF','AFC2F1',21,{bold:true,color:C.navy});
  box(s,0.8,2.85,2.15,0.9,'C = 0\nX = B','FFFFFF','C9D2DF',17,{bold:true});
  box(s,3.65,2.85,2.15,0.9,'C = 1\nX = A','FFFFFF','C9D2DF',17,{bold:true});
  s.addShape(pptx.ShapeType.downArrow,{x:2.88,y:2.50,w:0.32,h:0.28,fill:{color:C.blue},line:{color:C.blue}});
  s.addText('タイムチャートは入力変化点ごとに区切る',{x:0.65,y:4.02,w:5.4,h:0.26,fontFace:'Noto Sans CJK JP',fontSize:13,bold:true,color:C.ink,margin:0});
  const tx=0.75, ty=4.55, cw=1.25;
  ['区間','A','B','C','X'].forEach((t,i)=>box(s,tx+i*cw,ty,cw,0.52,t,'E9EDF3','C9D2DF',11,{bold:true}));
  const dat=[['1','1','0','0','0'],['2','0','1','0','1'],['3','1','0','1','1']];
  dat.forEach((r,ri)=>r.forEach((t,i)=>box(s,tx+i*cw,ty+0.52+ri*0.48,cw,0.48,t,'FFFFFF','C9D2DF',11,{bold:i===4})));
  s.addText('安全側へ倒す一般原則',{x:6.6,y:1.25,w:4.0,h:0.28,fontFace:'Noto Sans CJK JP',fontSize:15,bold:true,color:C.ink,margin:0});
  box(s,6.6,1.75,2.75,1.05,'シーケンス制御\n条件・順序で動作','FFFFFF','C9D2DF',13,{bold:true});
  box(s,9.72,1.75,2.75,1.05,'フィードバック制御\n出力を検出して戻す','FFFFFF','C9D2DF',13,{bold:true});
  box(s,6.6,3.12,2.75,1.05,'インタロック\n危険な同時成立を防ぐ','FFF3DF','E4C38D',13,{bold:true});
  box(s,9.72,3.12,2.75,1.05,'フェイルセーフ\n故障時も危険側へ移行させない','FFEAEA','E3AFAF',13,{bold:true});
  s.addText('注意：この論理式やPID式を「実際の新幹線ATC内部回路」とは扱わない。',{x:6.6,y:4.55,w:5.85,h:0.6,fontFace:'Noto Sans CJK JP',fontSize:13,bold:true,color:C.red,margin:0,fit:'shrink'});
  s.addText('固定EXAM_ALIGNMENT可視化 6/6',{x:8.25,y:5.45,w:2.9,h:0.34,fontFace:'Noto Sans CJK JP',fontSize:16,bold:true,color:C.green,align:'center',margin:0});
  s.addText('出典一覧：\n・電気技術者試験センター 第三種電気主任技術者試験 R8上／R7下／R6上・下\n・JRTT「信号」 https://www.jrtt.go.jp/construction/technology/signal.html\n・RTRI 信号システム研究室／鉄道信号の安全性・信頼性技術 公開情報\n・参考：e-sysnet、電験三種まとめました、電験王3（参照日 2026-09-15）',{x:6.6,y:5.88,w:5.8,h:0.82,fontFace:'Noto Sans CJK JP',fontSize:8.2,color:C.gray,margin:0,fit:'shrink'});
  footerSource(s,'固定範囲外追加 0件／未確認ATC実車値追加 0件');
}

pptx.writeFile({ fileName:'denken-shinkansen/01_shinkansen_vehicle_3/topics/32_atc_speed_brake_control/32_atc_speed_brake_control_images.pptx' });
