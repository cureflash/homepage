const pptxgen = require('pptxgenjs');
const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'OpenAI';
pptx.company = 'cureflash/homepage';
pptx.subject = 'Topic 29 L0系③ 超電導磁気浮上の電磁力';
pptx.title = 'Topic 29 L0系③ 超電導磁気浮上の電磁力';
pptx.lang = 'ja-JP';
pptx.theme = { headFontFace:'Noto Sans CJK JP', bodyFontFace:'Noto Sans CJK JP', lang:'ja-JP' };
const C={navy:'152A48',blue:'2D69AA',cyan:'3599BC',green:'37845F',orange:'D88134',red:'B44646',gray:'69717C',light:'F3F6F9',mid:'DBE2EA',dark:'2D3640',white:'FFFFFF',purple:'7758A6',teal:'2A8C82',yellow:'D9A329'};
pptx.defineSlideMaster({title:'MASTER',background:{color:C.white},objects:[
  {rect:{x:0.55,y:0.91,w:12.2,h:0.04,fill:{color:C.blue},line:{color:C.blue}}},
  {text:{text:'数値例・グラフは教材用仮定値。L0系の未確認実車 B・I・R/L/M・寸法・浮上力・案内力・速度しきい値を真値化しない。',options:{x:0.58,y:7.10,w:11.2,h:0.19,fontFace:'Noto Sans CJK JP',fontSize:7.5,color:C.gray,margin:0,fit:'shrink'}}}
],slideNumber:{x:12.1,y:0.28,w:0.55,h:0.22,fontFace:'Noto Sans CJK JP',fontSize:9,color:C.gray,align:'right'}});
function title(s,t,sub=''){s.addText(t,{x:0.55,y:0.28,w:11.55,h:0.48,fontFace:'Noto Sans CJK JP',fontSize:24,bold:true,color:C.navy,margin:0,fit:'shrink'});if(sub)s.addText(sub,{x:0.58,y:1.0,w:11.7,h:0.26,fontFace:'Noto Sans CJK JP',fontSize:10.3,color:C.gray,margin:0,fit:'shrink'});}
function text(s,t,x,y,w,h,o={}){s.addText(t,{x,y,w,h,fontFace:'Noto Sans CJK JP',fontSize:o.fontSize||12,color:o.color||C.dark,bold:!!o.bold,align:o.align||'left',valign:o.valign||'mid',margin:o.margin===undefined?0:o.margin,fit:'shrink',breakLine:false});}
function card(s,x,y,w,h,hdr,body,accent=C.blue,fs=12){s.addShape(pptx.ShapeType.roundRect,{x,y,w,h,rectRadius:0.05,fill:{color:C.light},line:{color:C.mid,width:1}});s.addShape(pptx.ShapeType.rect,{x,y,w:0.08,h,fill:{color:accent},line:{color:accent}});text(s,hdr,x+0.18,y+0.10,w-0.30,0.32,{fontSize:15,bold:true,color:C.navy});text(s,body,x+0.18,y+0.50,w-0.30,h-0.60,{fontSize:fs,valign:'top'});}
function line(s,x1,y1,x2,y2,color=C.gray,width=1,dash='solid',arrow=false){s.addShape(pptx.ShapeType.line,{x:x1,y:y1,w:x2-x1,h:y2-y1,line:{color,width,dashType:dash,endArrowType:arrow?'triangle':'none'}});}
function dot(s,x,y,r,color=C.blue){s.addShape(pptx.ShapeType.ellipse,{x:x-r,y:y-r,w:r*2,h:r*2,fill:{color},line:{color}});}
function axis(s,x,y,w,h,xlab,ylab){line(s,x,y+h,x+w,y+h,C.gray,1.1,'solid',true);line(s,x,y+h,x,y,C.gray,1.1,'solid',true);text(s,xlab,x+w-1.35,y+h+0.13,1.35,0.20,{fontSize:8.5,bold:true,align:'right'});text(s,ylab,x-0.02,y-0.25,1.5,0.20,{fontSize:8.5,bold:true});}
function fluxEmfChart(s,x,y,w,h){const px=x+0.56,py=y+0.18,pw=w-0.78,ph=h-0.58;axis(s,px,py,pw,ph,'t [ms]','normalized');for(let ms=0;ms<=20;ms+=5){const xx=px+pw*ms/20;line(s,xx,py,xx,py+ph,C.mid,0.45);text(s,String(ms),xx-0.18,py+ph+0.04,0.36,0.16,{fontSize:7,color:C.gray,align:'center'});}for(let v=-1;v<=1;v+=1){const yy=py+ph*(1-(v+1)/2);line(s,px,yy,px+pw,yy,C.mid,0.45);text(s,String(v),x+0.04,yy-0.08,0.34,0.16,{fontSize:7,color:C.gray,align:'right'});}let p1=null,p2=null;for(let i=0;i<=120;i++){const t=0.02*i/120;const psi=Math.cos(2*Math.PI*50*t);const e=Math.sin(2*Math.PI*50*t);const xx=px+pw*i/120;const y1=py+ph*(1-(psi+1)/2);const y2=py+ph*(1-(e+1)/2);if(p1)line(s,p1[0],p1[1],xx,y1,C.blue,1.8);if(p2)line(s,p2[0],p2[1],xx,y2,C.orange,1.8);p1=[xx,y1];p2=[xx,y2];}
text(s,'Ψ / Ψ̂',x+w-1.82,y+0.18,0.70,0.18,{fontSize:8.7,bold:true,color:C.blue});line(s,x+w-2.08,y+0.27,x+w-1.86,y+0.27,C.blue,2);
text(s,'e / Ê',x+w-0.90,y+0.18,0.66,0.18,{fontSize:8.7,bold:true,color:C.orange});line(s,x+w-1.16,y+0.27,x+w-0.94,y+0.27,C.orange,2);
}
function speedCurrentChart(s,x,y,w,h){const px=x+0.60,py=y+0.18,pw=w-0.82,ph=h-0.62;axis(s,px,py,pw,ph,'v [m/s]','Iᵣₘₛ [A]');for(let v=0;v<=100;v+=20){const xx=px+pw*v/100;line(s,xx,py,xx,py+ph,C.mid,0.45);text(s,String(v),xx-0.20,py+ph+0.04,0.40,0.16,{fontSize:7,color:C.gray,align:'center'});}for(let I=0;I<=3;I+=1){const yy=py+ph*(1-I/3);line(s,px,yy,px+pw,yy,C.mid,0.45);text(s,String(I),x+0.07,yy-0.08,0.34,0.16,{fontSize:7,color:C.gray,align:'right'});}let prev=null;for(let v=0;v<=100;v+=2){const I=(4*0.08*v/Math.sqrt(2))/Math.sqrt(0.6**2+(4*0.02*v)**2);const xx=px+pw*v/100;const yy=py+ph*(1-I/3);if(prev)line(s,prev[0],prev[1],xx,yy,C.teal,2.0);prev=[xx,yy];}for(const [v,I] of [[10,2.26],[30,2.74],[60,2.81]]){const xx=px+pw*v/100,yy=py+ph*(1-I/3);dot(s,xx,yy,0.04,C.red);text(s,`${v}: ${I.toFixed(2)} A`,xx+0.06,yy-0.17,0.88,0.18,{fontSize:7.5,bold:true,color:C.red});}}
function speedForceChart(s,x,y,w,h){const px=x+0.60,py=y+0.18,pw=w-0.82,ph=h-0.62;axis(s,px,py,pw,ph,'v [m/s]','Fmodel [N]');for(let v=0;v<=100;v+=20){const xx=px+pw*v/100;line(s,xx,py,xx,py+ph,C.mid,0.45);text(s,String(v),xx-0.20,py+ph+0.04,0.40,0.16,{fontSize:7,color:C.gray,align:'center'});}for(let F=0;F<=120;F+=40){const yy=py+ph*(1-F/120);line(s,px,yy,px+pw,yy,C.mid,0.45);text(s,String(F),x+0.02,yy-0.08,0.40,0.16,{fontSize:7,color:C.gray,align:'right'});}let prev=null;for(let v=0;v<=100;v+=2){const I=(4*0.08*v/Math.sqrt(2))/Math.sqrt(0.6**2+(4*0.02*v)**2);const F=40*I;const xx=px+pw*v/100;const yy=py+ph*(1-F/120);if(prev)line(s,prev[0],prev[1],xx,yy,C.purple,2.0);prev=[xx,yy];}for(const [v,F] of [[10,90.5],[30,110],[60,112]]){const xx=px+pw*v/100,yy=py+ph*(1-F/120);dot(s,xx,yy,0.04,C.red);text(s,`${v}: ${F.toFixed(1)} N`,xx+0.05,yy-0.17,0.92,0.18,{fontSize:7.5,bold:true,color:C.red});}}
function maglevSchematic(s,x,y,w,h){s.addShape(pptx.ShapeType.roundRect,{x:x+w*0.32,y:y+h*0.18,w:w*0.36,h:h*0.34,fill:{color:'E8EEF6'},line:{color:C.navy,width:1.2}});text(s,'車体\n超電導磁石',x+w*0.34,y+h*0.24,w*0.32,h*0.20,{fontSize:11.5,bold:true,align:'center'});
for(const side of [0,1]){const cx=side===0?x+w*0.10:x+w*0.74;const col=side===0?C.blue:C.cyan;s.addShape(pptx.ShapeType.ellipse,{x:cx,y:y+h*0.18,w:w*0.16,h:h*0.24,fill:{color:C.white,transparency:100},line:{color:col,width:2.2}});s.addShape(pptx.ShapeType.ellipse,{x:cx,y:y+h*0.42,w:w*0.16,h:h*0.24,fill:{color:C.white,transparency:100},line:{color:col,width:2.2}});line(s,cx+w*0.08,y+h*0.40,cx+w*0.08,y+h*0.44,col,2.2);}
line(s,x+w*0.18,y+h*0.34,x+w*0.31,y+h*0.34,C.red,2,'solid',true);line(s,x+w*0.82,y+h*0.34,x+w*0.69,y+h*0.34,C.red,2,'solid',true);text(s,'案内力 Fy',x+w*0.36,y+h*0.03,w*0.28,0.24,{fontSize:10.5,bold:true,color:C.red,align:'center'});line(s,x+w*0.50,y+h*0.53,x+w*0.50,y+h*0.78,C.green,2.4,'solid',true);text(s,'浮上力 Fz',x+w*0.39,y+h*0.79,w*0.22,0.22,{fontSize:10.5,bold:true,color:C.green,align:'center'});text(s,'浮上・案内コイル',x+w*0.03,y+h*0.69,w*0.94,0.22,{fontSize:9.5,color:C.gray,align:'center'});}
{
 const s=pptx.addSlide('MASTER');title(s,'Topic 29  L0系③：超電導磁気浮上の電磁力','電験二種：磁束変化 → 誘導起電力 → 誘導電流 → 磁気エネルギー → 浮上・案内');
 const xs=[0.65,2.90,5.15,7.40,9.65],labs=['磁束変化','e = −dΨ/dt','誘導電流 i','磁気エネルギー','電磁力 F'],cols=[C.blue,C.orange,C.teal,C.purple,C.green];
 xs.forEach((x,i)=>{s.addShape(pptx.ShapeType.roundRect,{x,y:1.55,w:1.70,h:0.78,fill:{color:C.light},line:{color:cols[i],width:1.4}});text(s,labs[i],x+0.05,1.79,1.60,0.24,{fontSize:12.5,bold:true,align:'center'});if(i<4)line(s,x+1.72,1.94,xs[i+1]-0.05,1.94,C.gray,1.4,'solid',true);});
 card(s,0.72,2.76,5.78,2.86,'L0系への事実接続','鉄道総研・JR東海の一次資料で確認するのは、車上の超電導磁石が浮上・案内コイルを高速通過すると誘導電流が生じ、反発・吸引で浮上し、左右偏位に対して中央へ戻す案内力が働く原理まで。\n\n実磁界・コイル電流・R/L/M・寸法・浮上力・案内力・速度しきい値は本Topicで真値化しない。',C.blue,11.8);
 card(s,6.78,2.76,5.58,2.86,'試験ゲート','固定過去問：5問 / 24答案要素\nR8・R7・R4・R2 一次「理論」：20要素\nH23 二次「機械・制御」：4要素\n\nSPEC必須8項目・指定3可視化を全件接続。Topic 30「誘導集電・非接触電力伝送」は先取りしない。',C.green,12.2);
 text(s,'Topic 21 H26二次 問1(4)の 48.1 / 48.0 N·m は過去問固有丸め差。一般式 P=Tω、ω=2πN/60 は変更しない。',0.78,6.25,11.75,0.34,{fontSize:9.9,bold:true,color:C.red,align:'center'});
}
{
 const s=pptx.addSlide('MASTER');title(s,'1. ファラデーの法則・相互誘導','位置変化を時間変化へ変換すると、速度が誘導起電力へ入る');
 card(s,0.62,1.34,4.08,2.14,'基本式','Ψ=NΦ\ne=−dΨ/dt\nΨ=Ψ(x), v=dx/dt\n→ e=−v·dΨ/dx\n\n相互誘導：Ψ₁=L₁i₁+Mi₂\ne₁=−d(Mi₂)/dt',C.blue,14.1);
 card(s,0.62,3.72,4.08,2.38,'試験での処理','1 何が磁束を変えるか特定\n2 Φ / Ψ を選ぶ\n3 時間微分または e=−v dΨ/dx\n4 レンツの法則で向きを確認\n5 電流が必要なら回路インピーダンスへ',C.orange,12.1);
 s.addShape(pptx.ShapeType.roundRect,{x:4.96,y:1.34,w:7.72,h:4.76,fill:{color:C.white},line:{color:C.mid,width:1}});text(s,'指定可視化①  磁束変化―誘導起電力',5.18,1.52,4.4,0.28,{fontSize:15,bold:true,color:C.navy});fluxEmfChart(s,5.10,1.93,7.30,3.60);
 text(s,'Ψ(t)=0.12 cos(2π50t) Wb・turn → Ê=0.12×2π50=37.7 V、Erms=26.7 V',5.24,5.58,7.10,0.28,{fontSize:10.1,bold:true,color:C.dark,align:'center'});
}
{
 const s=pptx.addSlide('MASTER');title(s,'2. 誘導電流：RだけでなくLを見る','速度で起電力が増えても、ωLが増えるためIは単純比例とは限らない');
 card(s,0.62,1.34,4.28,2.26,'R-L 1コイル教材モデル','Z=R+jωL\n|I|=|E|/√(R²+(ωL)²)\nω=kv\nErms=kΨ̂v/√2\n\nIrms(v)= [kΨ̂v/√2] / √[R²+(kLv)²]',C.teal,13.5);
 card(s,0.62,3.86,4.28,2.17,'成立条件と読み方','教材用仮定値：Ψ̂=0.08 Wb・turn, k=4 rad/m, R=0.60 Ω, L=20 mH。\n\n低速：R支配で I∝v\n高速：kLv が支配し I は飽和傾向\n\nL0系実機コイル網の等価回路ではない。',C.orange,11.5);
 s.addShape(pptx.ShapeType.roundRect,{x:5.16,y:1.34,w:7.50,h:4.69,fill:{color:C.white},line:{color:C.mid,width:1}});text(s,'指定可視化②  速度―誘導電流',5.38,1.52,4.1,0.28,{fontSize:15,bold:true,color:C.navy});speedCurrentChart(s,5.28,1.95,7.08,3.58);
 text(s,'代表値：10 m/s → 2.26 A、30 → 2.74 A、60 → 2.81 A',5.42,5.59,6.9,0.28,{fontSize:10.2,bold:true,color:C.teal,align:'center'});
}
{
 const s=pptx.addSlide('MASTER');title(s,'3. 磁気エネルギーから電磁力へ','同じ 1/2Li² でも「何を一定にして微分するか」を間違えない');
 card(s,0.62,1.34,3.74,2.20,'電流一定','W′m(i,x)=∫₀ⁱ Ψ(i′,x)di′\n線形：W′m=1/2 L(x)i²\n\nF=(∂W′m/∂x)ᵢ\n→ F=1/2 i² dL/dx',C.green,13.0);
 card(s,0.62,3.78,3.74,2.20,'鎖交磁束一定','Wm(Ψ,x) を用いる\n\nF=−(∂Wm/∂x)Ψ\n\nR2一次型の理想短絡などでは、電流一定公式をそのまま使わない。',C.purple,12.7);
 card(s,4.62,1.34,3.42,4.64,'相互インダクタンス','W′m=1/2L₁i₁² + 1/2L₂i₂² + M(x)i₁i₂\n\n自己Lの位置依存を無視できれば\nF=i₁i₂ dM/dx\n\n回転なら\nT=i₁i₂ dM/dθ\n\nM=M₀cosθ → T=−M₀i₁i₂sinθ\n\nR7一次型：M → エネルギー → 微分 → 力 / トルク。',C.blue,12.0);
 s.addShape(pptx.ShapeType.roundRect,{x:8.30,y:1.34,w:4.36,h:4.64,fill:{color:C.white},line:{color:C.mid,width:1}});text(s,'浮上力と案内力',8.55,1.52,3.86,0.28,{fontSize:15,bold:true,color:C.navy,align:'center'});maglevSchematic(s,8.56,1.98,3.84,2.58);text(s,'Fy：左右偏位に対する復元成分\nFz：車重を支える鉛直成分\n\n電流が磁界から受ける基本式：F=BIl sinα\n実車の力は空間分布を積分するため、この単純式だけで実車値を算定しない。',8.58,4.58,3.82,1.20,{fontSize:10.3,valign:'top'});
}
{
 const s=pptx.addSlide('MASTER');title(s,'4. 指定可視化：速度―電磁力','因果は v → dΨ/dt → e → i → F。実車へ F∝v / v² と一般化しない');
 s.addShape(pptx.ShapeType.roundRect,{x:0.62,y:1.34,w:7.33,h:4.77,fill:{color:C.white},line:{color:C.mid,width:1}});text(s,'指定可視化③  速度―電磁力',0.86,1.52,4.1,0.28,{fontSize:15,bold:true,color:C.navy});speedForceChart(s,0.76,1.95,6.86,3.62);text(s,'Fmodel(v)=KF Irms(v),  KF=40 N/A（教材用仮定値）',1.05,5.60,6.46,0.26,{fontSize:10.2,bold:true,color:C.purple,align:'center'});
 card(s,8.22,1.34,4.44,2.14,'複合例題','v=30 m/s → ω=kv=120 rad/s\nErms=6.79 V\nωL=2.40 Ω\nIrms=2.74 A\nFmodel=40×2.74≈110 N\n\n110 N は実車浮上力ではない。',C.purple,12.1);
 card(s,8.22,3.73,4.44,2.38,'解法アルゴリズム','1 相対速度 / すべり\n2 誘導周波数 / 磁束変化率\n3 誘導起電力\n4 インピーダンス → 誘導電流\n5 BIl / エネルギー法 / 指定式 → 力・トルク\n6 レンツの法則と単位で検算',C.green,11.6);
}
{
 const s=pptx.addSlide('MASTER');title(s,'5. 過去問への接続と最終チェック','固定5問・24答案要素を、教材内の一般解法へ接続する');
 card(s,0.62,1.34,4.02,4.86,'固定EXAM_ALIGNMENT','R8 一次「理論」問2：5要素\n  ファラデー・磁気回路\nR7 一次「理論」問2：5要素\n  相互誘導・磁気エネルギー・トルク\nR4 一次「理論」問2：5要素\n  H/B/Φ・磁気回路・積分\nR2 一次「理論」問2：5要素\n  鎖交磁束一定・エネルギー法\nH23 二次「機械・制御」問1：4要素\n  相対速度→誘導電流→電磁トルク\n\n合計：24 / 24 connected',C.blue,11.5);
 card(s,4.86,1.34,3.63,4.86,'SPEC必須8項目','ファラデーの法則\n相互誘導\n誘導電流\n磁気エネルギー\n電磁力\n超電導磁石\n浮上力\n案内力\n\n指定3可視化\n①磁束変化―誘導起電力\n②速度―誘導電流\n③速度―電磁力',C.green,12.0);
 card(s,8.73,1.34,3.93,4.86,'頻出ミス・境界','Φ と Ψ=NΦ を混同しない\ne=−dΨ/dt の負号を向き確認に使う\n位置微分で v を掛け忘れない\n常に I=E/R としない\nWm / W′m の保持量を確認\n浮上力 Fz と案内力 Fy を混同しない\n教材モデルをL0系実車特性へ一般化しない\n\nH23橋渡し最小限：s=(Ns−N)/Ns, f2=sf1, 逆相制動 sp=2−s\nTopic 30は先取りしない。',C.red,10.7);
 text(s,'PowerPoint完成後もテーマは未完了。次は clean blind 独立再解答 → 公式照合 → 最終QA。',0.82,6.46,11.65,0.30,{fontSize:10.5,bold:true,color:C.navy,align:'center'});
}
const out=process.env.TOPIC29_OUT || '/mnt/data/29_l0_superconducting_magnetic_levitation_force_images.pptx';
pptx.writeFile({ fileName: out });
