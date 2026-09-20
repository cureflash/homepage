const pptxgen = require('pptxgenjs');
const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'OpenAI';
pptx.subject = 'Topic 27 L0系① リニア同期モータ';
pptx.title = 'Topic 27 L0系① リニア同期モータ';
pptx.company = 'cureflash/homepage';
pptx.lang = 'ja-JP';
pptx.theme = { headFontFace:'Noto Sans CJK JP', bodyFontFace:'Noto Sans CJK JP', lang:'ja-JP' };
const C={navy:'152A48',blue:'2D69AA',cyan:'3599BC',green:'37845F',orange:'D88134',red:'B44646',gray:'69717C',light:'F3F6F9',mid:'DBE2EA',dark:'2D3640',white:'FFFFFF',purple:'7758A6'};
pptx.defineSlideMaster({title:'MASTER',background:{color:C.white},objects:[{rect:{x:0.55,y:0.91,w:12.2,h:0.04,fill:{color:C.blue},line:{color:C.blue}}},{text:{text:'数値例は教材用仮定値。L0系の未確認実車値を真値化しない。',options:{x:0.58,y:7.12,w:9.2,h:0.18,fontFace:'Noto Sans CJK JP',fontSize:8,color:C.gray,margin:0}}}],slideNumber:{x:12.1,y:0.28,w:0.55,h:0.22,fontFace:'Noto Sans CJK JP',fontSize:9,color:C.gray,align:'right'}});
function title(s,t,sub=''){s.addText(t,{x:0.55,y:0.28,w:11.6,h:0.48,fontFace:'Noto Sans CJK JP',fontSize:25,bold:true,color:C.navy,margin:0,fit:'shrink'});if(sub)s.addText(sub,{x:0.58,y:1.0,w:11.7,h:0.26,fontFace:'Noto Sans CJK JP',fontSize:10.5,color:C.gray,margin:0,fit:'shrink'});}
function text(s,t,x,y,w,h,o={}){s.addText(t,{x,y,w,h,fontFace:'Noto Sans CJK JP',fontSize:o.fontSize||12,color:o.color||C.dark,bold:!!o.bold,align:o.align||'left',valign:o.valign||'mid',margin:o.margin===undefined?0:o.margin,fit:'shrink',breakLine:false});}
function card(s,x,y,w,h,hdr,body,accent=C.blue,fs=12.5){s.addShape(pptx.ShapeType.roundRect,{x,y,w,h,rectRadius:0.05,fill:{color:C.light},line:{color:C.mid,width:1}});s.addShape(pptx.ShapeType.rect,{x,y,w:0.08,h,fill:{color:accent},line:{color:accent}});text(s,hdr,x+0.18,y+0.12,w-0.30,0.30,{fontSize:16,bold:true,color:C.navy});text(s,body,x+0.18,y+0.53,w-0.30,h-0.63,{fontSize:fs,valign:'top'});}
function line(s,x1,y1,x2,y2,color=C.gray,width=1,dash='solid'){s.addShape(pptx.ShapeType.line,{x:x1,y:y1,w:x2-x1,h:y2-y1,line:{color,width,dashType:dash}});}
function dot(s,x,y,r,color=C.blue){s.addShape(pptx.ShapeType.ellipse,{x:x-r,y:y-r,w:r*2,h:r*2,fill:{color},line:{color}});}
function chart(s,x,y,w,h,xv,yv,xmin,xmax,ymin,ymax,xlab,ylab,accent=C.blue){const px=x+0.65,py=y+0.18,pw=w-0.86,ph=h-0.77;line(s,px,py+ph,px+pw,py+ph,C.gray,1.1);line(s,px,py,px,py+ph,C.gray,1.1);for(let j=0;j<=4;j++){const yy=py+ph-ph*j/4;line(s,px,yy,px+pw,yy,C.mid,0.6);text(s,String(Math.round(ymin+(ymax-ymin)*j/4)),x+0.00,yy-0.10,0.54,0.20,{fontSize:7.3,color:C.gray,align:'right'});}for(let j=0;j<=4;j++){const xv0=xmin+(xmax-xmin)*j/4;const xx=px+pw*j/4;text(s,(Math.abs(xv0-Math.round(xv0))<1e-6?String(Math.round(xv0)):xv0.toFixed(1)),xx-0.20,py+ph+0.03,0.42,0.18,{fontSize:7.3,color:C.gray,align:'center'});}const pts=xv.map((v,i)=>[px+pw*(v-xmin)/(xmax-xmin),py+ph-ph*(yv[i]-ymin)/(ymax-ymin)]);for(let i=0;i<pts.length-1;i++)line(s,pts[i][0],pts[i][1],pts[i+1][0],pts[i+1][1],accent,2);pts.forEach(p=>dot(s,p[0],p[1],0.035,accent));text(s,xlab,px+pw/2-1.0,py+ph+0.29,2.0,0.24,{fontSize:9.2,bold:true,align:'center'});text(s,ylab,x+0.00,py-0.02,1.25,0.22,{fontSize:8.8,bold:true});}
{
 const s=pptx.addSlide('MASTER');title(s,'Topic 27  L0系①：リニア同期モータ','電験二種「機械」：同期速度・電機子反作用・同期リアクタンス・短絡比まで');
 const xs=[0.70,3.05,5.40,7.75,10.10],labs=['三相交流','移動磁界','同期速度','同期リアクタンス','短絡比'],cols=[C.orange,C.blue,C.cyan,C.green,C.purple];xs.forEach((x,i)=>{s.addShape(pptx.ShapeType.roundRect,{x,y:1.65,w:1.70,h:0.85,rectRadius:0.05,fill:{color:C.light},line:{color:cols[i],width:1.6}});text(s,labs[i],x+0.05,1.86,1.60,0.28,{fontSize:13.5,bold:true,align:'center'});if(i<4)line(s,x+1.72,2.08,xs[i+1]-0.05,2.08,C.gray,1.5);});
 card(s,0.78,3.10,5.60,2.70,'L0系との接続','一次資料で確認するのは、ガイドウェイ推進コイルへ三相交流を供給し、移動磁界と車上超電導磁石の吸引・反発で推進する原理まで。\n\n実極ピッチ・実推進周波数・実同期リアクタンス・実推力は、本Topicの確認範囲では真値化しない。',C.blue,12.5);
 card(s,6.80,3.10,5.60,2.70,'このTopicで解くもの','・回転機：N_s = 120f/P\n・リニア機：v_s = 2τf\n・電機子反作用：交差磁化 / 増磁 / 減磁\n・X_s = X_a + X_l\n・無負荷飽和曲線 / 三相短絡特性 / 短絡比',C.green,13.0);
 text(s,'負荷角δ・本格フェーザ出力解析・推力式はTopic 28へ送る。',0.82,6.25,11.4,0.32,{fontSize:11.2,bold:true,color:C.red,align:'center'});
}
{
 const s=pptx.addSlide('MASTER');title(s,'1. 回転同期機を直線へ展開すると何が変わるか','同期の本質は「界磁が三相交流の作る磁界速度に追従する」こと');
 card(s,0.65,1.40,3.85,4.90,'三相交流 → 磁界','三相巻線を空間的に120°ずらし、時間的にも120°位相差の三相交流を流す。\n\n回転機：合成磁界は円周方向へ回転\nリニア機：展開した一次側を直線方向へ移動\n\n同期機の界磁は、その磁界速度と同期して運動する。',C.orange,13.0);
 card(s,4.74,1.40,3.70,4.90,'回転同期機','極数 P、周波数 f [Hz]\n\nN_s = 120f / P [min^-1]\n\n逆算\nf = PN_s / 120\nP = 120f / N_s\n\n注意：Pは極対数ではなく極数。',C.blue,13.6);
 card(s,8.68,1.40,3.98,4.90,'リニア同期機','極ピッチ τ [m]\n空間1周期 λ = 2τ\n\nv_s = fλ = 2τf [m/s]\n\n逆算\nf = v_s / (2τ)\nτ = v_s / (2f)\n\nτを空間1周期と誤認しない。',C.cyan,13.4);
 text(s,'単位ゲート：回転機は min^-1、リニア機は m/s。同じ「同期速度」でも単位を交換しない。',0.70,6.53,11.9,0.32,{fontSize:10.5,bold:true,color:C.red,align:'center'});
}
{
 const s=pptx.addSlide('MASTER');title(s,'2. 指定可視化：同期速度は周波数・極ピッチに比例する','すべて教材用仮定値。L0系の実極ピッチ・実推進周波数ではない');
 const f=[0,20,40,60,80,100],vs1=f.map(q=>2*1.0*q);chart(s,0.55,1.50,6.10,4.80,f,vs1,0,100,0,200,'周波数 f [Hz]','v_s [m/s]',C.blue);
 const tau=[0,0.4,0.8,1.2,1.6,2.0],vs2=tau.map(q=>2*q*50);chart(s,6.75,1.50,6.00,4.80,tau,vs2,0,2.0,0,200,'極ピッチ τ [m]','v_s [m/s]',C.green);
 text(s,'左：τ=1.00 m → v_s=2f',1.45,6.15,4.25,0.30,{fontSize:11.0,bold:true,color:C.blue,align:'center'});text(s,'右：f=50 Hz → v_s=100τ',7.70,6.15,4.25,0.30,{fontSize:11.0,bold:true,color:C.green,align:'center'});
 text(s,'例：τ=1.20 m、f=50 Hz → v_s=120 m/s（432 km/h換算）。この数値はL0系実運転条件ではない。',0.75,6.60,11.8,0.28,{fontSize:9.8,color:C.gray,align:'center'});
}
{
 const s=pptx.addSlide('MASTER');title(s,'3. 電機子反作用をリアクタンスとして扱う','一次試験では「作用の向き」と「X_a / X_l / X_s の役割」を分けて覚える');
 card(s,0.62,1.42,4.00,4.95,'電機子反作用','電機子電流 I_a が作る磁界が界磁磁束へ作用する現象。\n\n力率1付近：主に交差磁化\n遅れ力率：減磁成分を持つ\n進み力率：増磁成分を持つ\n\n磁束が弱まれば内部誘導起電力は低下、強まれば上昇。',C.orange,13.0);
 card(s,4.80,1.42,3.55,4.95,'等価リアクタンス','発電機の標準表現\n\nE = E_0 − jX_a I_a\n\nX_a：電機子反作用リアクタンス\nX_l：漏れリアクタンス\n\nX_s = X_a + X_l\n\n抵抗無視では jX_s I_a を主なリアクタンス降下として扱う。',C.blue,13.2);
 card(s,8.55,1.42,4.10,4.95,'本試験標準例','6極、50 Hz\nX_a=1.8 Ω/相、X_l=0.2 Ω/相\n\nN_s = 120×50/6\n    = 1000 min^-1\n\nX_s = 1.8+0.2\n    = 2.0 Ω/相\n\nI_a=100 Aなら X_s I_a=200 V/相',C.green,13.0);
 text(s,'負荷角δを導入して出力・推力を求める解析は、ここでは追加しない。',0.72,6.58,11.8,0.28,{fontSize:10.2,bold:true,color:C.red,align:'center'});
}
{
 const s=pptx.addSlide('MASTER');title(s,'4. 二次試験：試験手順 → 短絡比 → 同期インピーダンス','R6二次「機械・制御」問1に対応する記述＋計算手順');
 card(s,0.62,1.36,3.50,3.35,'無負荷飽和曲線','1  電機子端子を開放\n2  定格速度で回転\n3  界磁電流 I_f を変化\n4  無負荷端子電圧を測定\n5  I_f―端子電圧を作図\n\n高界磁側では磁気飽和で増加が鈍る。',C.orange,12.4);
 card(s,4.30,1.36,3.50,3.35,'三相短絡特性','1  三相端子を短絡\n2  定格速度で回転\n3  界磁電流 I_f を変化\n4  持続短絡電流 I_sc を測定\n5  I_f―I_sc を作図\n\n標準問題ではほぼ直線として扱う。',C.blue,12.4);
 card(s,7.98,1.36,4.70,3.35,'短絡比からΩ値へ','K = I_f0 / I_fsc = I_sc0 / I_n\nZ_s(p.u.) = 1 / K\nZ_base = V_n² / S_n\nZ_s[Ω] = Z_s(p.u.) × Z_base\n\nR_aがあれば\nX_s = sqrt(Z_s² − R_a²)',C.green,13.2);
 card(s,0.62,4.92,12.06,1.36,'複合例題','V_n=6.6 kV、S_n=5.0 MVA、I_f0=220 A、I_fsc=200 A、R_a=0.80 Ω/相 → K=1.10、Z_s=0.909 p.u.、Z_base=8.712 Ω、Z_s=7.92 Ω/相、X_s≈7.88 Ω/相',C.purple,12.4);
 text(s,'pu と Ω、線間電圧と三相容量の基準を混同しない。',0.72,6.54,11.8,0.26,{fontSize:10.2,bold:true,color:C.red,align:'center'});
}
{
 const s=pptx.addSlide('MASTER');title(s,'5. 過去問対応と品質ゲート','固定EXAM_ALIGNMENTを変えず、一次18＋二次5＝23答案要素へ接続');
 const rows=[['R7 一次「機械」問1','界磁 / 電機子反作用 / 内部誘導起電力 / 漏れリアクタンス','5要素'],['R6 一次「機械」問1','交差磁化 / 増磁 / 減磁 / 誘導起電力変化','5要素'],['H29 一次「機械」問1','極数 / 周波数 / 同期速度 / 電機子反作用','3要素'],['H21 一次「機械」問5','E=E0−jXaIa / Xa / Xl / Xs','5要素'],['R6 二次「機械・制御」問1','無負荷飽和 / 三相短絡 / 短絡比 / 同期インピーダンス','5要素']];
 let y=1.45;rows.forEach((r,i)=>{s.addShape(pptx.ShapeType.roundRect,{x:0.65,y,w:8.30,h:0.80,rectRadius:0.04,fill:{color:i%2?C.light:C.white},line:{color:C.mid,width:1}});text(s,r[0],0.88,y+0.10,2.72,0.30,{fontSize:12.2,bold:true,color:C.navy});text(s,r[1],3.52,y+0.10,4.60,0.35,{fontSize:10.4});text(s,r[2],8.15,y+0.10,0.55,0.28,{fontSize:10.4,bold:true,color:C.blue,align:'right'});y+=0.88;});
 card(s,9.22,1.45,3.38,2.28,'ゲート接続','固定5問：5/5\n一次：18/18\n二次：5/5\n合計：23/23',C.green,14.0);card(s,9.22,3.98,3.38,2.28,'SPEC / 境界','必須7項目：7/7\n指定可視化：2/2\nTopic 28先取り：0\n未確認実車値真値化：0',C.blue,12.8);
 text(s,'次工程：完成後clean blind独立再解答。PowerPoint完成だけではTopic 27をcompletedにしない。',0.72,6.12,8.15,0.32,{fontSize:10.4,bold:true,color:C.red});
 text(s,'Topic 21の48.0 / 48.1 N·mは過去問固有丸め差。一般式 P=Tω、ω=2πN/60 は変更しない。',0.72,6.53,11.8,0.28,{fontSize:9.6,color:C.gray});
}
const out=process.env.TOPIC27_OUT || '27_l0_linear_synchronous_motor_images.pptx';
pptx.writeFile({fileName:out});