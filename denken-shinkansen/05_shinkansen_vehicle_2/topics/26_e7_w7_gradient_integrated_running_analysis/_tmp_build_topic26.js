const pptxgen = require('pptxgenjs');
const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'OpenAI';
pptx.subject = 'Topic 26 E7・W7系 勾配条件を含む総合走行解析';
pptx.title = 'Topic 26 E7・W7系 勾配条件を含む総合走行解析';
pptx.company = 'cureflash/homepage';
pptx.lang = 'ja-JP';
pptx.theme = { headFontFace:'Noto Sans CJK JP', bodyFontFace:'Noto Sans CJK JP', lang:'ja-JP' };
const C={navy:'152A48',blue:'2D69AA',cyan:'3599BC',green:'37845F',orange:'D88134',red:'B44646',gray:'69717C',light:'F3F6F9',mid:'DBE2EA',dark:'2D3640',white:'FFFFFF'};
pptx.defineSlideMaster({title:'MASTER',background:{color:C.white},objects:[{rect:{x:0.55,y:0.91,w:12.2,h:0.04,fill:{color:C.blue},line:{color:C.blue}}},{text:{text:'教材用仮定値はE7・W7系の実車仕様ではない',options:{x:0.58,y:7.12,w:8.8,h:0.18,fontFace:'Noto Sans CJK JP',fontSize:8,color:C.gray,margin:0}}}],slideNumber:{x:12.1,y:0.28,w:0.55,h:0.22,fontFace:'Noto Sans CJK JP',fontSize:9,color:C.gray,align:'right'}});
function title(s,t,sub=''){s.addText(t,{x:0.55,y:0.28,w:11.6,h:0.48,fontFace:'Noto Sans CJK JP',fontSize:25,bold:true,color:C.navy,margin:0,fit:'shrink'});if(sub)s.addText(sub,{x:0.58,y:1.0,w:11.6,h:0.26,fontFace:'Noto Sans CJK JP',fontSize:10.5,color:C.gray,margin:0,fit:'shrink'});}
function text(s,t,x,y,w,h,o={}){s.addText(t,{x,y,w,h,fontFace:'Noto Sans CJK JP',fontSize:o.fontSize||12,color:o.color||C.dark,bold:!!o.bold,align:o.align||'left',valign:o.valign||'mid',margin:o.margin===undefined?0:o.margin,fit:'shrink',breakLine:false});}
function card(s,x,y,w,h,hdr,body,accent=C.blue,fs=12.5){s.addShape(pptx.ShapeType.roundRect,{x,y,w,h,rectRadius:0.05,fill:{color:C.light},line:{color:C.mid,width:1}});s.addShape(pptx.ShapeType.rect,{x,y,w:0.08,h,fill:{color:accent},line:{color:accent}});text(s,hdr,x+0.18,y+0.12,w-0.30,0.30,{fontSize:16,bold:true,color:C.navy});text(s,body,x+0.18,y+0.53,w-0.30,h-0.63,{fontSize:fs,valign:'top'});}
function line(s,x1,y1,x2,y2,color=C.gray,width=1,dash='solid'){s.addShape(pptx.ShapeType.line,{x:x1,y:y1,w:x2-x1,h:y2-y1,line:{color,width,dashType:dash}});}
function dot(s,x,y,r,color=C.blue){s.addShape(pptx.ShapeType.ellipse,{x:x-r,y:y-r,w:r*2,h:r*2,fill:{color},line:{color}});}
function chart(s,x,y,w,h,xv,yv,xmin,xmax,ymin,ymax,xlab,ylab,limit=null){const px=x+0.72,py=y+0.18,pw=w-0.95,ph=h-0.76;line(s,px,py+ph,px+pw,py+ph,C.gray,1.1);line(s,px,py,px,py+ph,C.gray,1.1);for(let j=0;j<=5;j++){const yy=py+ph-ph*j/5;line(s,px,yy,px+pw,yy,C.mid,0.6);text(s,String(Math.round(ymin+(ymax-ymin)*j/5)),x+0.03,yy-0.10,0.58,0.20,{fontSize:7.5,color:C.gray,align:'right'});}const step=Math.max(1,Math.floor(xv.length/6));for(let j=0;j<xv.length;j+=step){const xx=px+pw*(xv[j]-xmin)/(xmax-xmin);text(s,String(Math.round(xv[j])),xx-0.20,py+ph+0.03,0.42,0.18,{fontSize:7.5,color:C.gray,align:'center'});}const pts=xv.map((v,i)=>[px+pw*(v-xmin)/(xmax-xmin),py+ph-ph*(yv[i]-ymin)/(ymax-ymin)]);for(let i=0;i<pts.length-1;i++)line(s,pts[i][0],pts[i][1],pts[i+1][0],pts[i+1][1],C.blue,2);pts.forEach(p=>dot(s,p[0],p[1],0.035,C.blue));if(limit!==null){const yy=py+ph-ph*(limit-ymin)/(ymax-ymin);line(s,px,yy,px+pw,yy,C.red,1.5,'dash');}text(s,xlab,px+pw/2-1.15,py+ph+0.29,2.3,0.24,{fontSize:10,bold:true,align:'center'});text(s,ylab,x+0.03,py-0.02,1.15,0.22,{fontSize:9,bold:true});}
{
 const s=pptx.addSlide('MASTER'); title(s,'Topic 26  E7・W7系：勾配条件を含む総合走行解析','電験二種「機械」：走行抵抗・必要けん引力・出力・回生・誘導機を一つの解法へ');
 const xs=[0.75,3.05,5.35,7.65,9.95],ls=['勾配・速度','走行抵抗','必要けん引力','必要出力','力行 / 回生'],cs=[C.orange,C.blue,C.cyan,C.green,C.red];xs.forEach((x,i)=>{s.addShape(pptx.ShapeType.roundRect,{x,y:2.0,w:1.75,h:0.85,rectRadius:0.05,fill:{color:C.light},line:{color:cs[i],width:1.6}});text(s,ls[i],x+0.05,2.20,1.65,0.30,{fontSize:14,bold:true,align:'center'});if(i<4)line(s,x+1.78,2.43,xs[i+1]-0.05,2.43,C.gray,1.5);});
 card(s,0.78,3.45,5.65,2.45,'試験で解けるようにすること','・R_g≈mgi と R_run(v) を合成する\n・F_req と P=Fv を同時に判定する\n・下りでは制動・回生条件へ符号をつなぐ\n・誘導機の滑り・トルク・損失へ接続する',C.blue,13.5);
 card(s,6.80,3.45,5.65,2.45,'実車接続の境界','確認済み：北陸新幹線の30‰急勾配と、E7系のブレーキ性能向上。\n\n質量・走行抵抗式・効率・利用可能出力/けん引力は教材用条件。未公表値を実車値として扱わない。',C.orange,13.3);
}
{
 const s=pptx.addSlide('MASTER'); title(s,'1. 走行側と電動機側を同じ電力式でつなぐ','まず符号と単位を固定し、力 → 電力 → 電動機の順に解く');
 card(s,0.62,1.40,4.0,4.95,'走行側','勾配抵抗\nR_g = mg sinθ ≈ mgi\n\n必要けん引力\nF_req = R_run(v) + R_g\n\n車輪側必要出力\nP_w = F_req v\n\n定速条件\nF_req ≤ F_av かつ P_req ≤ P_av',C.blue,14.4);
 card(s,4.76,1.40,3.82,4.95,'回転機側','回転出力\nP = Tω\nω = 2πN / 60\n\n同期速度\nN_s = 120f / p\n\n滑り\ns = (N_s − N) / N_s\n\n二次銅損\nP_cu2 = s/(1−s) · P_m',C.green,14.2);
 card(s,8.72,1.40,3.98,4.95,'解法アルゴリズム','1  km/h → m/s、‰ → 小数\n2  勾配の符号を決める\n3  R_run + R_g を計算\n4  F_reqの符号で力行/制動判定\n5  P=Fv と効率を適用\n6  F_av と P_av を両方確認\n7  回生は架線側受電条件も確認',C.orange,13.0);
 text(s,'Topic 21：48.0 / 48.1 N·m は過去問固有の丸め差。P=Tω、ω=2πN/60 は変更しない。',0.66,6.57,11.8,0.30,{fontSize:9.8,color:C.red});
}
{
 const s=pptx.addSlide('MASTER'); title(s,'2. 可視化① 勾配が必要けん引力を直線的に動かす','教材用条件：m=4.00×10⁵ kg、v=80 m/s、R_run=30+0.008v² [kN]');
 const g=[-30,-20,-10,0,10,20,30],f=g.map(q=>81.2+400000*9.8*(q/1000)/1000);chart(s,0.65,1.55,8.25,4.80,g,f,-30,30,-50,200,'勾配 [‰]','必要けん引力 [kN]');
 card(s,9.22,1.72,3.35,2.05,'+30‰ 上り','R_g = +117.6 kN\nF_req = 198.8 kN\n→ 力行側',C.orange,13.5);card(s,9.22,4.05,3.35,2.05,'−30‰ 下り','R_g = −117.6 kN\nF_req = −36.4 kN\n→ 制動側',C.cyan,13.5);text(s,'F_req < 0 なら B_req = −F_req の制動力が必要。',0.78,6.48,8.0,0.30,{fontSize:10.5,color:C.red});
}
{
 const s=pptx.addSlide('MASTER'); title(s,'3. 可視化② 高速域では出力制限が先に効くことがある','教材用条件：+20‰、R_run(v)=30+0.008v² [kN]、F_av=150 kN、P_av=10.5 MW');
 const ms=[0,10,20,30,40,50,60,70,70.7393,75,80],km=ms.map(v=>v*3.6),pw=ms.map(v=>(108.4+0.008*v*v)*1000*v/1e6);chart(s,0.65,1.55,8.38,4.80,km,pw,0,288,0,14,'速度 [km/h]','車輪側出力 [MW]',10.5);
 card(s,9.30,1.72,3.28,2.00,'出力側の境界','P_req = 10.5 MW\n→ 70.74 m/s\n→ 254.7 km/h',C.red,13.5);card(s,9.30,4.05,3.28,2.00,'けん引力側の境界','F_req = 150 kN\n→ 259.6 km/h\n254.7 km/hで F_req≈148.43 kN',C.green,12.4);text(s,'この教材モデルでは出力制限が先。254.7 km/hはE7・W7系の実性能値ではない。',0.78,6.49,8.1,0.30,{fontSize:10.2,color:C.red});
}
{
 const s=pptx.addSlide('MASTER'); title(s,'4. 可視化③ +30‰ と −30‰ では電力フローが反転する','同じ v=80 m/s・同じ走行抵抗モデルで勾配だけを反転');
 card(s,0.70,1.48,5.55,4.95,'+30‰：力行','R_run = 81.2 kN\n\nR_g = +117.6 kN\n\nF_req = 198.8 kN\n\nP_w = Fv = 15.904 MW',C.orange,15.3);text(s,'電気 → 機械',3.85,5.72,1.65,0.28,{fontSize:12,bold:true,color:C.orange,align:'center'});
 card(s,6.70,1.48,5.90,4.95,'−30‰：制動・回生候補','R_run = 81.2 kN\n\nR_g = −117.6 kN\n\nF_req = −36.4 kN\nB_req = 36.4 kN   P_brake = 2.912 MW\n\nη_reg=0.85 なら P_return ≤ 2.48 MW',C.cyan,14.2);text(s,'機械 → 電気',10.50,5.72,1.65,0.28,{fontSize:12,bold:true,color:C.cyan,align:'center'});text(s,'回生には ①車両側が回生可能 ②架線側が受電可能 の両方が必要。受電先がなければ回生失効が起こり得る。',0.78,6.57,11.7,0.30,{fontSize:9.8,color:C.red});
}
{
 const s=pptx.addSlide('MASTER'); title(s,'5. 過去問対応と品質ゲート','固定EXAM_ALIGNMENTを変えず、一次10＋二次6＝16答案要素へ接続');
 const rows=[['R7 二次「機械・制御」問2','滑り / トルク / 二次銅損 / 固定損 / 負荷変化','6要素'],['H26 一次「機械」問5','始動トルク / 定加速域 / 定出力域','3要素'],['H25 一次「機械」問3','P=Tω','1要素'],['R5 一次「機械」問2','制動エネルギー / 回生 / 鉄道への接続','3要素'],['H27 一次「機械」問3','逆変換 / 回生電力消費 / 回生失効','3要素']];let y=1.52;rows.forEach((r,i)=>{s.addShape(pptx.ShapeType.roundRect,{x:0.68,y,w:8.25,h:0.78,rectRadius:0.04,fill:{color:i%2?C.light:C.white},line:{color:C.mid,width:1}});text(s,r[0],0.91,y+0.10,2.85,0.28,{fontSize:12.5,bold:true,color:C.navy});text(s,r[1],3.70,y+0.10,4.20,0.34,{fontSize:10.5});text(s,r[2],8.03,y+0.10,0.60,0.28,{fontSize:10.5,bold:true,color:C.blue,align:'right'});y+=0.88;});
 card(s,9.25,1.52,3.35,2.25,'ゲート結果','固定5問：5/5\n一次：10/10\n二次：6/6\n合計：16/16',C.green,14.5);card(s,9.25,4.00,3.35,2.25,'SPEC','必須7項目：7/7\n指定可視化：3/3\n実車値境界違反：0\nexact blocker：0',C.blue,13.8);text(s,'次工程：完成後clean blind独立再解答。PowerPoint完成だけではTopic 26をcompletedにしない。',0.72,6.34,8.2,0.30,{fontSize:10.6,bold:true,color:C.red});text(s,'Topic 21の48.0 / 48.1 N·m注記を維持し、一般式は変更しない。',0.72,6.75,8.2,0.25,{fontSize:9.7,color:C.gray});
}
const out=process.env.TOPIC26_OUT || '26_e7_w7_gradient_integrated_running_analysis_images.pptx';
pptx.writeFile({fileName:out});