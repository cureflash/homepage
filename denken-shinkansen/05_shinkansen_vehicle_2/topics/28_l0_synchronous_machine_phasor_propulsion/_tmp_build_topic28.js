const pptxgen = require('pptxgenjs');
const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'OpenAI';
pptx.company = 'cureflash/homepage';
pptx.subject = 'Topic 28 L0系② 同期機のフェーザと推進力';
pptx.title = 'Topic 28 L0系② 同期機のフェーザと推進力';
pptx.lang = 'ja-JP';
pptx.theme = { headFontFace:'Noto Sans CJK JP', bodyFontFace:'Noto Sans CJK JP', lang:'ja-JP' };
const C={navy:'152A48',blue:'2D69AA',cyan:'3599BC',green:'37845F',orange:'D88134',red:'B44646',gray:'69717C',light:'F3F6F9',mid:'DBE2EA',dark:'2D3640',white:'FFFFFF',purple:'7758A6'};
pptx.defineSlideMaster({title:'MASTER',background:{color:C.white},objects:[{rect:{x:0.55,y:0.91,w:12.2,h:0.04,fill:{color:C.blue},line:{color:C.blue}}},{text:{text:'数値例は教材用仮定値。L0系の未確認実車 X_s・E・δ・P・Q・F・η を真値化しない。',options:{x:0.58,y:7.10,w:10.7,h:0.19,fontFace:'Noto Sans CJK JP',fontSize:7.8,color:C.gray,margin:0}}}],slideNumber:{x:12.1,y:0.28,w:0.55,h:0.22,fontFace:'Noto Sans CJK JP',fontSize:9,color:C.gray,align:'right'}});
function title(s,t,sub=''){s.addText(t,{x:0.55,y:0.28,w:11.6,h:0.48,fontFace:'Noto Sans CJK JP',fontSize:24.5,bold:true,color:C.navy,margin:0,fit:'shrink'});if(sub)s.addText(sub,{x:0.58,y:1.0,w:11.7,h:0.26,fontFace:'Noto Sans CJK JP',fontSize:10.5,color:C.gray,margin:0,fit:'shrink'});}
function text(s,t,x,y,w,h,o={}){s.addText(t,{x,y,w,h,fontFace:'Noto Sans CJK JP',fontSize:o.fontSize||12,color:o.color||C.dark,bold:!!o.bold,align:o.align||'left',valign:o.valign||'mid',margin:o.margin===undefined?0:o.margin,fit:'shrink',breakLine:false});}
function card(s,x,y,w,h,hdr,body,accent=C.blue,fs=12.2){s.addShape(pptx.ShapeType.roundRect,{x,y,w,h,rectRadius:0.05,fill:{color:C.light},line:{color:C.mid,width:1}});s.addShape(pptx.ShapeType.rect,{x,y,w:0.08,h,fill:{color:accent},line:{color:accent}});text(s,hdr,x+0.18,y+0.11,w-0.30,0.30,{fontSize:15.5,bold:true,color:C.navy});text(s,body,x+0.18,y+0.50,w-0.30,h-0.60,{fontSize:fs,valign:'top'});}
function line(s,x1,y1,x2,y2,color=C.gray,width=1,dash='solid',arrow=false){s.addShape(pptx.ShapeType.line,{x:x1,y:y1,w:x2-x1,h:y2-y1,line:{color,width,dashType:dash,endArrowType:arrow?'triangle':'none'}});}
function dot(s,x,y,r,color=C.blue){s.addShape(pptx.ShapeType.ellipse,{x:x-r,y:y-r,w:r*2,h:r*2,fill:{color},line:{color}});}
function axis(s,x,y,w,h,xlab,ylab){line(s,x,y+h,x+w,y+h,C.gray,1.1,true);line(s,x,y+h,x,y,C.gray,1.1,true);text(s,xlab,x+w-1.25,y+h+0.14,1.25,0.20,{fontSize:8.7,bold:true,align:'right'});text(s,ylab,x-0.05,y-0.27,1.2,0.20,{fontSize:8.7,bold:true});}
function pdeltaChart(s,x,y,w,h){const px=x+0.60,py=y+0.18,pw=w-0.85,ph=h-0.62;axis(s,px,py,pw,ph,'δ [°]','P [p.u.]');for(let d=-90;d<=90;d+=30){const xx=px+pw*(d+90)/180;line(s,xx,py,xx,py+ph,C.mid,0.5);text(s,String(d),xx-0.20,py+ph+0.04,0.42,0.16,{fontSize:7,color:C.gray,align:'center'});}for(let p=-2;p<=2;p+=1){const yy=py+ph-ph*(p+2)/4;line(s,px,yy,px+pw,yy,C.mid,0.5);text(s,String(p),x+0.05,yy-0.08,0.42,0.16,{fontSize:7,color:C.gray,align:'right'});}let prev=null;for(let d=-90;d<=90;d+=3){const p=2*Math.sin(d*Math.PI/180);const xx=px+pw*(d+90)/180;const yy=py+ph-ph*(p+2)/4;if(prev)line(s,prev[0],prev[1],xx,yy,C.blue,2);prev=[xx,yy];}const x90=px+pw;const y90=py+ph-ph*(2+2)/4;dot(s,x90,y90,0.04,C.red);text(s,'Pmax=2.0',x90-1.0,y90-0.34,0.95,0.20,{fontSize:8.6,bold:true,color:C.red,align:'right'});line(s,px+pw/2,py,px+pw/2,py+ph,C.gray,0.8,'dash');}
function phasorBox(s,x,y,w,h,isGen){s.addShape(pptx.ShapeType.roundRect,{x,y,w,h,fill:{color:C.light},line:{color:C.mid,width:1}});const ox=x+0.55,oy=y+h-0.55,scale=1.48;line(s,ox,oy,ox+w-0.75,oy,C.gray,0.7);line(s,ox,oy,ox,y+0.35,C.gray,0.7);line(s,ox,oy,ox+scale,oy,C.blue,2.3,'solid',true);text(s,'V',ox+scale+0.05,oy-0.13,0.25,0.18,{fontSize:10.5,bold:true,color:C.blue});const theta=-25*Math.PI/180;const ilen=1.05;const ix=ox+ilen*Math.cos(theta),iy=oy-ilen*Math.sin(theta);line(s,ox,oy,ix,iy,C.orange,2.0,'solid',true);text(s,'I',ix+0.03,iy-0.12,0.22,0.18,{fontSize:10,bold:true,color:C.orange});const jtheta=theta+Math.PI/2;const jlen=0.95;const jx=isGen?ox+scale+jlen*Math.cos(jtheta):ox+scale-jlen*Math.cos(jtheta);const jy=isGen?oy-jlen*Math.sin(jtheta):oy+jlen*Math.sin(jtheta);line(s,ox+scale,oy,jx,jy,C.green,2.0,'solid',true);line(s,ox,oy,jx,jy,C.purple,2.3,'solid',true);text(s,isGen?'+jXₛI':'−jXₛI',((ox+scale)+jx)/2-0.25,(oy+jy)/2-0.27,0.70,0.20,{fontSize:9,bold:true,color:C.green,align:'center'});text(s,'E',jx+0.03,jy-0.13,0.22,0.18,{fontSize:10.5,bold:true,color:C.purple});text(s,isGen?'発電機：E = V + jXₛI':'電動機：E = V − jXₛI',x+0.18,y+0.10,w-0.36,0.28,{fontSize:13,bold:true,color:C.navy,align:'center'});}
{
 const s=pptx.addSlide('MASTER');title(s,'Topic 28  L0系②：同期機のフェーザと推進力','電験二種「機械」：フェーザ → P・Q → 負荷角 → 電力角特性 → 推進力');
 const xs=[0.70,3.05,5.40,7.75,10.10],labs=['フェーザ','E・Xₛ','負荷角 δ','P・Q','推進力 F'],cols=[C.orange,C.blue,C.cyan,C.green,C.purple];xs.forEach((x,i)=>{s.addShape(pptx.ShapeType.roundRect,{x,y:1.60,w:1.70,h:0.82,fill:{color:C.light},line:{color:cols[i],width:1.5}});text(s,labs[i],x+0.05,1.84,1.60,0.24,{fontSize:13.1,bold:true,align:'center'});if(i<4)line(s,x+1.72,2.01,xs[i+1]-0.05,2.01,C.gray,1.4,false,true);});
 card(s,0.78,2.88,5.62,2.80,'L0系との接続','一次資料で確認済みなのは、ガイドウェイ推進コイルへ三相交流を供給し、移動磁界と車上超電導磁石の吸引・反発で推進する原理まで。\n\n実 Xₛ・E・δ・P・Q・F・η は公開一次資料で確認していないため、教材値を実車真値として扱わない。',C.blue,12.4);
 card(s,6.82,2.88,5.58,2.80,'このTopicの試験ゲート','固定過去問：5問\n一次：R4 機械 問1 — 5要素\n二次：R7 / R5 / H29 / H27 機械・制御 — 22要素\n合計：27答案要素\n\nSPEC必須8項目・指定3可視化を全件接続する。',C.green,12.7);
 text(s,'Topic 21 H26二次 問1(4)の 48.1 / 48.0 N·m は過去問固有丸め差。一般式 P=Tω、ω=2πN/60 は変更しない。',0.72,6.32,11.9,0.35,{fontSize:10.2,bold:true,color:C.red,align:'center'});
}
{
 const s=pptx.addSlide('MASTER');title(s,'1. 指定可視化：発電機と電動機のフェーザ','Vを基準に、Iを力率角で置き、jXₛIを90°回してからEを作る');
 phasorBox(s,0.62,1.38,5.95,3.95,true);phasorBox(s,6.76,1.38,5.95,3.95,false);
 card(s,0.70,5.60,3.80,0.95,'符号の起点','発電機：電流を機外へ正\n電動機：電流を機内へ正',C.orange,10.9);
 card(s,4.72,5.60,3.80,0.95,'負荷角 δ','VとEの位相差。発電機では通常Eが進み、電動機では遅れる。',C.cyan,10.8);
 card(s,8.74,5.60,3.80,0.95,'頻出ミス','発電機式を電動機へ流用しない。力率角とδを混同しない。',C.red,10.8);
}
{
 const s=pptx.addSlide('MASTER');title(s,'2. 有効電力 P と無効電力 Q を分ける','円筒形・定常・平衡三相・電機子抵抗無視の基本モデル');
 card(s,0.62,1.35,3.90,4.85,'基本式','発電機：E=V+jXₛI\n\nI=(E−V)/(jXₛ)\nS=3VI* = P+jQ\n\nP = 3VE/Xₛ · sinδ\nQ = 3[(VE/Xₛ)cosδ − V²/Xₛ]\n\np.u.：P=VE/Xₛ·sinδ',C.blue,14.0);
 card(s,4.72,1.35,3.85,4.85,'役割分離','有効電力 P\n・主に機械入力 / 機械負荷とδ\n・負荷角が増えると基本モデルではPが増える\n\n無効電力 Q\n・主に界磁 / Eと力率\n・過励磁 / 不足励磁の判別へ接続\n\n並行運転ではPとQを同じつまみで考えない。',C.green,12.6);
 card(s,8.77,1.35,3.90,4.85,'数値処理の順序','1 Vを0°基準に置く\n2 Iを力率角θで複素数化\n3 ±jXₛIを加減算\n4 |E| と arg(E)=δ を求める\n5 P・Qを計算\n6 力率 / 電圧変動率 / 安定余裕を検算\n\n固定R7・R5・H29二次型に直結。',C.purple,12.2);
 text(s,'Qの正負は電流方向・電力流入規約で変わる。式だけを切り離して暗記しない。',0.78,6.46,11.75,0.29,{fontSize:10.1,bold:true,color:C.red,align:'center'});
}
{
 const s=pptx.addSlide('MASTER');title(s,'3. 指定可視化：電力角特性と負荷角―出力','教材仮定：V=1.0 p.u., E=1.6 p.u., Xₛ=0.8 p.u. → Pmax=2.0 p.u.');
 pdeltaChart(s,0.55,1.42,7.10,4.95);
 card(s,7.92,1.42,4.78,2.35,'電力角特性','P = Pmax sinδ\nPmax = VE/Xₛ\n\nδ=30° → P=1.00 p.u.\nδ≈36.87° → P=1.20 p.u.\nδ=60° → P≈1.73 p.u.\nδ=90° → P=2.00 p.u.',C.blue,13.2);
 card(s,7.92,4.02,4.78,2.35,'安定限界の読み方','理想基本式では|δ|=90°付近が静的最大点。\n\nE↑ / V↑ → Pmax↑\nXₛ↑ → Pmax↓\n\n実機限界は過渡安定度・制御・電流・電圧・温度・保護でも制限される。90°をL0系実機許容角と解釈しない。',C.red,11.4);
}
{
 const s=pptx.addSlide('MASTER');title(s,'4. 固定5問・27答案要素への接続','一次5要素＋二次22要素。教材外知識で補わず解ける状態を作る');
 const rows=[['R4 一次 機械 問1','並行運転：位相・界磁・無効横流・同期化電流','5'],['R7 二次 機械・制御 問1','電動機フェーザ、E=V−jXₛI、負荷角、同期調相機','6'],['R5 二次 機械・制御 問1','発電機フェーザ、P=(VE/Xₛ)sinδ、安定限界','6'],['H29 二次 機械・制御 問1','電圧変動率、力率、Xₛ、E、δ、出力','6'],['H27 二次 機械・制御 問1','sinδ型出力、回路条件変更、端子電圧','4']];
 const y0=1.50;const rh=0.83;
 text(s,'過去問',0.72,1.18,3.2,0.24,{fontSize:11.2,bold:true,color:C.gray});text(s,'Topic 28で再利用する論点',4.32,1.18,6.9,0.24,{fontSize:11.2,bold:true,color:C.gray});text(s,'要素',11.60,1.18,0.75,0.24,{fontSize:11.2,bold:true,color:C.gray,align:'center'});
 rows.forEach((r,i)=>{const y=y0+i*rh;s.addShape(pptx.ShapeType.roundRect,{x:0.62,y,w:12.03,h:0.68,fill:{color:i%2?C.white:C.light},line:{color:C.mid,width:0.8}});text(s,r[0],0.78,y+0.10,3.25,0.47,{fontSize:10.7,bold:true,color:C.navy});text(s,r[1],4.32,y+0.10,7.0,0.47,{fontSize:10.5});text(s,r[2],11.70,y+0.10,0.55,0.47,{fontSize:13.0,bold:true,color:C.blue,align:'center'});});
 card(s,0.70,5.90,3.75,0.80,'答案要素','一次 5 / 5　　二次 22 / 22　　合計 27 / 27',C.green,11.2);
 card(s,4.70,5.90,3.75,0.80,'SPEC必須8項目','フェーザ / E / Xₛ / δ / P-δ / P / Q / 推進力',C.cyan,10.9);
 card(s,8.70,5.90,3.75,0.80,'指定3可視化','フェーザ図 / 電力角特性 / 負荷角―出力',C.purple,10.9);
}
{
 const s=pptx.addSlide('MASTER');title(s,'5. 回転同期機の電力をリニア推進力へ接続する','電気有効電力を無条件に推進力へ等置しない');
 card(s,0.62,1.38,3.86,4.95,'接続式','機械出力\nP_mech = Fv\n\nしたがって\nF = P_mech / v\n\n効率ηが与えられる教材モデルなら\nP_mech = ηP_e\nF = ηP_e / v\n\n損失無視と明示されたときだけη=1と置く。',C.blue,14.0);
 card(s,4.72,1.38,3.86,4.95,'教材用数値例','P_e = 24.3 MW\nη = 0.86\nv = 139 m/s\n\nP_mech = 0.86×24.3\n        ≈ 20.90 MW\n\nF = 20.90×10⁶ / 139\n  ≈ 1.50×10⁵ N\n  = 150 kN',C.green,14.0);
 card(s,8.82,1.38,3.86,4.95,'実車境界','L0系の公開一次資料で確認済みなのは「三相交流→移動磁界→超電導磁石との吸引・反発による推進」まで。\n\n本例のP_e・η・v・Fは教材仮定値。実車の推進効率・推力・負荷角を示すものではない。\n\nTopic 29の浮上・案内系は先取りしない。',C.red,12.2);
 text(s,'最終ゲート：固定5問・27答案要素を教材だけで clean blind 独立再解答し、公式解答と照合して初めて completed。',0.74,6.55,11.8,0.28,{fontSize:10.4,bold:true,color:C.navy,align:'center'});
}
const out=process.env.TOPIC28_OUT || '28_l0_synchronous_machine_phasor_propulsion_images.pptx';
pptx.writeFile({fileName:out});
