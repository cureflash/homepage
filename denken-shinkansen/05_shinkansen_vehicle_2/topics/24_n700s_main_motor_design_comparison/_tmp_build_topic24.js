const pptxgen = require('pptxgenjs');
const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'OpenAI';
pptx.subject = 'Topic 24 N700S 主電動機設計の比較';
pptx.title = 'Topic 24 N700S 主電動機設計の比較';
pptx.company = 'cureflash/homepage';
pptx.lang = 'ja-JP';
pptx.theme = { headFontFace: 'Noto Sans CJK JP', bodyFontFace: 'Noto Sans CJK JP', lang: 'ja-JP' };
pptx.defineSlideMaster({
  title: 'MASTER', background: { color: 'F7F9FC' },
  objects: [
    { rect: { x:0, y:0, w:13.333, h:0.18, fill:{color:'1769AA'}, line:{color:'1769AA'} } },
    { text: { text:'電験二種 × 新幹線車両｜Topic 24', options:{x:0.45,y:7.12,w:5.5,h:0.2,fontFace:'Noto Sans CJK JP',fontSize:9,color:'5E6B78',margin:0,breakLine:false} } },
    { text: { text:'N700S 主電動機設計の比較', options:{x:8.4,y:7.12,w:4.45,h:0.2,fontFace:'Noto Sans CJK JP',fontSize:9,color:'5E6B78',margin:0,align:'right'} } }
  ],
  slideNumber: { x: 12.45, y: 0.28, w: 0.45, h: 0.22, color: '788896', fontFace:'Noto Sans CJK JP', fontSize: 10, align:'right' }
});
const C={navy:'17324D',blue:'1769AA',teal:'1B8A8F',orange:'D77B27',red:'B33A3A',green:'2F7D5B',gray:'5E6B78',light:'EAF0F6',pale:'F7F9FC',black:'17212B',white:'FFFFFF',gold:'B8872B'};
function title(s,t,sub=''){s.addText(t,{x:0.55,y:0.42,w:12.1,h:0.48,fontFace:'Noto Sans CJK JP',fontSize:24,bold:true,color:C.navy,margin:0,fit:'shrink'});if(sub)s.addText(sub,{x:0.58,y:0.95,w:12,h:0.28,fontFace:'Noto Sans CJK JP',fontSize:10.5,color:C.gray,margin:0,fit:'shrink'});}
function pill(s,x,y,w,t,fill=C.light,color=C.navy){s.addShape(pptx.ShapeType.roundRect,{x,y,w,h:0.38,rectRadius:0.06,fill:{color:fill},line:{color:fill}});s.addText(t,{x:x+0.06,y:y+0.07,w:w-0.12,h:0.2,fontFace:'Noto Sans CJK JP',fontSize:10.5,bold:true,color,align:'center',margin:0,fit:'shrink'});}
function card(s,x,y,w,h,header,body,accent=C.blue){s.addShape(pptx.ShapeType.roundRect,{x,y,w,h,rectRadius:0.05,fill:{color:C.white},line:{color:'D6E0EA',width:1}});s.addShape(pptx.ShapeType.rect,{x,y,w:0.08,h,fill:{color:accent},line:{color:accent}});s.addText(header,{x:x+0.22,y:y+0.16,w:w-0.35,h:0.28,fontFace:'Noto Sans CJK JP',fontSize:15,bold:true,color:C.navy,margin:0,fit:'shrink'});s.addText(body,{x:x+0.22,y:y+0.55,w:w-0.38,h:h-0.7,fontFace:'Noto Sans CJK JP',fontSize:11.2,color:C.black,margin:0.02,breakLine:false,fit:'shrink',valign:'top'});}
function line(s,x1,y1,x2,y2,color='7E8C99',width=1,dash='solid'){s.addShape(pptx.ShapeType.line,{x:x1,y:y1,w:x2-x1,h:y2-y1,line:{color,width,dashType:dash,beginArrowType:'none',endArrowType:'none'}});}
function arrow(s,x1,y1,x2,y2,color=C.blue,width=2){s.addShape(pptx.ShapeType.line,{x:x1,y:y1,w:x2-x1,h:y2-y1,line:{color,width,endArrowType:'triangle'}});}
function text(s,txt,x,y,w,h,o={}){s.addText(txt,{x,y,w,h,fontFace:'Noto Sans CJK JP',fontSize:o.fontSize||11,color:o.color||C.black,bold:!!o.bold,align:o.align||'left',valign:o.valign||'mid',margin:o.margin===undefined?0:o.margin,fit:'shrink',breakLine:false,italic:!!o.italic});}
function dot(s,x,y,r,color){s.addShape(pptx.ShapeType.ellipse,{x:x-r,y:y-r,w:2*r,h:2*r,fill:{color},line:{color}});}
{
 const s=pptx.addSlide('MASTER'); title(s,'極数・周波数から「速度設計」を一気通貫で解く','固定品質ゲート：第二種 一次3問＋二次2問＝5問・17答案要素');
 const xs=[0.8,3.15,5.5,7.85,10.2], labels=[['極数 P / 周波数 f','nₛ = 120f / P'],['同期速度 nₛ','回転磁界の速度'],['すべり s','n=(1−s)nₛ'],['実回転速度 n','ω=2πn/60'],['トルク・出力','Pₘ=ωT']];
 xs.forEach((x,i)=>{s.addShape(pptx.ShapeType.roundRect,{x,y:2.0,w:2.0,h:1.12,rectRadius:0.06,fill:{color:i===0?'EAF3FA':'FFFFFF'},line:{color:i===0?C.blue:'C9D5E1',width:1.1}});text(s,labels[i][0],x+0.12,2.18,1.76,0.3,{fontSize:14,bold:true,align:'center'});text(s,labels[i][1],x+0.12,2.58,1.76,0.28,{fontSize:11,color:C.gray,align:'center'});if(i<4)arrow(s,x+2.0,2.55,x+2.27,2.55,C.blue,2);});
 card(s,0.78,3.65,4.0,1.95,'N700Sで確認済みの事実','・主電動機は6極化\n・SiC主変換装置＋6極化＋主変圧器冷却方式見直しを合わせ、駆動システム全体で約20%軽量化',C.green);
 card(s,4.95,3.65,3.55,1.95,'実車値として置かないもの','実運転周波数・実回転速度・実トルク・寸法・質量は一次資料未確認。教材用条件と実車値を分離する。',C.red);
 card(s,8.67,3.65,3.88,1.95,'試験での焦点','P と p=P/2、nₛ と n、%すべり、小型軽量化の帰属、kW→W、min⁻¹→rad/s を取り違えない。',C.orange);
 pill(s,0.78,6.0,2.2,'SPEC必須 8項目','EAF0F6',C.navy); text(s,'極数 / 同期速度 / すべり / 周波数 / 回転速度 / トルク / 電気角 / 小型軽量化',3.18,6.05,9.35,0.28,{fontSize:11,color:C.gray});
}
{
 const s=pptx.addSlide('MASTER'); title(s,'可視化A｜極数・周波数と同期速度','nₛ = 120f/P。周波数一定なら極数を増やすほど同期速度は低下する');
 const x0=0.95,y0=5.75,w=7.35,h=4.15, freqs=[20,40,60,80],poles=[4,6,8],colors=[C.blue,C.teal,C.orange]; const X=f=>x0+(f-20)/60*w, Y=v=>y0-v/2400*h;
 line(s,x0,y0,x0+w,y0,C.black,1.2);line(s,x0,y0,x0,y0-h,C.black,1.2);
 [0,600,1200,1800,2400].forEach(v=>{line(s,x0,Y(v),x0+w,Y(v),'DDE5ED',0.7);text(s,String(v),0.45,Y(v)-0.1,0.42,0.2,{fontSize:9,align:'right',color:C.gray});});
 freqs.forEach(f=>{line(s,X(f),y0,X(f),y0-h,'EDF1F5',0.6);text(s,String(f),X(f)-0.2,y0+0.08,0.4,0.2,{fontSize:9,align:'center',color:C.gray});});
 text(s,'f [Hz]',x0+w-0.5,y0+0.35,0.6,0.22,{fontSize:10,bold:true,color:C.gray,align:'right'});text(s,'nₛ [min⁻¹]',0.22,1.42,0.72,0.25,{fontSize:10,bold:true,color:C.gray});
 poles.forEach((P,idx)=>{let prev=null;freqs.forEach(f=>{const pt=[X(f),Y(120*f/P)];if(prev)line(s,prev[0],prev[1],pt[0],pt[1],colors[idx],2.4);dot(s,pt[0],pt[1],0.055,colors[idx]);prev=pt;});pill(s,6.65,1.45+idx*0.45,0.85,`${P}極`,'EEF3F7',colors[idx]);});
 card(s,8.7,1.38,3.65,1.38,'60 Hzで比較','4極: 1800 min⁻¹\n6極: 1200 min⁻¹\n8極: 900 min⁻¹',C.blue);card(s,8.7,2.95,3.65,1.55,'逆算も出る','f = Pnₛ/120\nP = 120f/nₛ\n極数を逆算したら「偶数極か」を検算する。',C.teal);card(s,8.7,4.73,3.65,1.25,'N700S境界','「6極」は確認済み。60 Hz等を使った値は教材条件で、実運転点ではない。',C.red);
}
{
 const s=pptx.addSlide('MASTER'); title(s,'可視化B｜すべり → 実回転速度 → トルク・出力','n=(1−s)nₛ。軸出力では同期速度ではなく実回転速度 n を使う');
 const x0=0.95,y0=5.8,w=6.1,h=3.9, Xs=p=>x0+p/5*w, Yn=n=>y0-(n-1120)/80*h; line(s,x0,y0,x0+w,y0,C.black,1.2);line(s,x0,y0,x0,y0-h,C.black,1.2);
 [0,1,2,3,4,5].forEach(p=>{line(s,Xs(p),y0,Xs(p),y0-h,'EDF1F5',0.6);text(s,String(p),Xs(p)-0.14,y0+0.08,0.28,0.2,{fontSize:9,align:'center',color:C.gray});});[1140,1160,1180,1200].forEach(n=>{line(s,x0,Yn(n),x0+w,Yn(n),'DDE5ED',0.7);text(s,String(n),0.45,Yn(n)-0.1,0.42,0.2,{fontSize:9,align:'right',color:C.gray});});
 const pts=[[0,1200],[1,1188],[2,1176],[3,1164],[4,1152],[5,1140]];for(let i=1;i<pts.length;i++)line(s,Xs(pts[i-1][0]),Yn(pts[i-1][1]),Xs(pts[i][0]),Yn(pts[i][1]),C.blue,2.6);pts.forEach(p=>dot(s,Xs(p[0]),Yn(p[1]),0.055,C.blue));
 text(s,'すべり s [%]',5.7,6.2,1.3,0.22,{fontSize:10,bold:true,color:C.gray,align:'right'});text(s,'n [min⁻¹]',0.25,1.57,0.7,0.22,{fontSize:10,bold:true,color:C.gray});
 card(s,7.4,1.45,2.43,1.45,'すべり','s=(nₛ−n)/nₛ\n3.5% → 0.035\n停止 s=1 / 同期 s=0',C.blue);card(s,9.98,1.45,2.42,1.45,'軸速度','ω=2πn/60\nmin⁻¹ → rad/s\n同期速度 nₛ と混同しない',C.teal);card(s,7.4,3.1,5.0,1.35,'トルク・機械出力','Pₘ=ωT　→　T=60Pₘ/(2πn)\nPₘはWで代入。kWなら×1000。',C.orange);card(s,7.4,4.68,5.0,1.22,'H26二次の丸め注記','48.1 N·m / 48.0 N·m差は π=3.14 相当の過去問固有丸め差。一般式は変更しない。',C.red);
}
{
 const s=pptx.addSlide('MASTER'); title(s,'固定過去問へ必要な最小橋渡し','Topic 10/12を再展開せず、Topic 24で必要な関係だけ再掲');
 card(s,0.75,1.35,5.95,2.35,'トルク―すべり（R7一次型）','L形近似：\nT(s)=3Vφ²(r₂′/s) / {ωₛ[(r₁+r₂′/s)²+X²]}\n\n低滑り域：T ∝ s\n最大トルク時：sₘ=r₂′/√(r₁²+X²)\nr₁≒0なら sₘ≒r₂′/X',C.blue);
 card(s,6.88,1.35,5.7,2.35,'V/f と磁束（R2一次型）','誘起電圧：E ∝ fΦ\n固定子電圧降下を無視できる範囲で V≈E\n→ Φ ∝ V/f\n\n周波数で速度を変えるとき、磁束を概ね一定に保つには V/f を概ね一定にする。',C.teal);
 const x0=1.05,y0=6.3,w=5.1,h=1.75,arr=[[0,0],[0.08,0.18],[0.18,0.42],[0.35,0.8],[0.5,1.0],[0.7,0.88],[1,0.58]],x=v=>x0+v*w,y=v=>y0-v*h;line(s,x0,y0,x0+w,y0,C.black,1);line(s,x0,y0,x0,y0-h,C.black,1);for(let i=1;i<arr.length;i++)line(s,x(arr[i-1][0]),y(arr[i-1][1]),x(arr[i][0]),y(arr[i][1]),C.blue,2.3);
 text(s,'T',0.78,4.45,0.2,0.2,{fontSize:10,bold:true,color:C.gray});text(s,'s',6.08,6.38,0.2,0.2,{fontSize:10,bold:true,color:C.gray});text(s,'低滑り域 ≈ 直線',1.18,5.63,1.55,0.24,{fontSize:10,color:C.blue,bold:true});pill(s,7.0,4.32,1.55,'比例推移','EAF3FA',C.blue);text(s,'同一トルク対応点：r₂a′/sₐ = r₂b′/s_b\n→ s_b/sₐ = r₂b′/r₂a′',7.0,4.82,5.15,0.75,{fontSize:12});pill(s,7.0,5.78,1.55,'注意','FBEDEE',C.red);text(s,'近似条件を外して「最大トルクも二次抵抗に比例する」と判断しない。',8.72,5.78,3.7,0.38,{fontSize:10.8,color:C.red,bold:true});
}
{
 const s=pptx.addSlide('MASTER'); title(s,'可視化C｜条件変更時の速度比較＋電気角','すべり3%固定の教材用比較。6極以外の周波数・すべりはN700S実値ではない');
 const cases=[['A','4極 / 60Hz',1746],['B','6極 / 60Hz',1164],['C','6極 / 75Hz',1455],['D','8極 / 75Hz',1091.25]],x0=0.95,y0=5.8,w=6.9,h=3.8;line(s,x0,y0,x0+w,y0,C.black,1.1);line(s,x0,y0,x0,y0-h,C.black,1.1);[0,600,1200,1800].forEach(v=>{const yy=y0-v/1800*h;line(s,x0,yy,x0+w,yy,'DDE5ED',0.7);text(s,String(v),0.42,yy-0.1,0.45,0.2,{fontSize:9,align:'right',color:C.gray});});
 const barW=0.78;cases.forEach((c,i)=>{const cx=x0+0.65+i*1.52,hh=c[2]/1800*h;s.addShape(pptx.ShapeType.rect,{x:cx,y:y0-hh,w:barW,h:hh,fill:{color:i===1?C.teal:C.blue},line:{color:i===1?C.teal:C.blue}});text(s,c[0],cx,y0+0.08,barW,0.2,{fontSize:10,bold:true,align:'center'});text(s,c[1],cx-0.15,y0+0.33,barW+0.3,0.35,{fontSize:9,align:'center',color:C.gray});text(s,String(c[2]),cx-0.08,y0-hh-0.3,barW+0.16,0.24,{fontSize:9.5,bold:true,align:'center',color:i===1?C.teal:C.blue});});
 text(s,'n [min⁻¹]',0.2,1.56,0.65,0.2,{fontSize:10,bold:true,color:C.gray});card(s,8.2,1.45,4.1,1.38,'電気角','p=P/2\nθₑ=pθₘ=(P/2)θₘ\n6極 → p=3。機械角20° → 電気角60°。',C.orange);card(s,8.2,3.05,4.1,1.35,'比較の読み方','A→B：同一fで極数↑ → 速度↓\nB→C：同一Pでf↑ → 速度↑\nC→D：同一fで極数↑ → 速度↓',C.blue);card(s,8.2,4.62,4.1,1.22,'軽量化の境界','約20%は駆動システム全体。主電動機単体・6極化単独の20%とはしない。',C.red);
}
{
 const s=pptx.addSlide('MASTER'); title(s,'本試験対応マップ｜5問・17答案要素をこの章だけで再現する','PowerPoint完成後にclean blind独立再解答へ進む');
 const rows=[['R7 一次 機械 問2','5','すべり / T–s / 比例推移'],['R4 一次 機械 問2 (3)〜(5)','3','極数 / 同期速度 / すべり'],['R2 一次 機械 問3 (1)(4)(5)','3','同期速度 / V/f / 磁束'],['R3 二次 機械・制御 問1 (3)(4)','2','速度 / Pₘ=ωT'],['R7 二次 機械・制御 問2 (1)(3)','4','同期速度→すべり→速度→出力']];
 s.addShape(pptx.ShapeType.roundRect,{x:0.68,y:1.35,w:6.6,h:4.48,rectRadius:0.05,fill:{color:C.white},line:{color:'D6E0EA'}});text(s,'固定過去問',0.92,1.55,3.1,0.3,{fontSize:14,bold:true,color:C.navy});text(s,'答案要素',4.55,1.55,0.85,0.3,{fontSize:11,bold:true,color:C.gray,align:'center'});text(s,'主に使う関係',5.48,1.55,1.55,0.3,{fontSize:11,bold:true,color:C.gray});
 let y=2.02;rows.forEach((r,i)=>{if(i>0)line(s,0.9,y-0.08,7.02,y-0.08,'E2E8EF',0.7);text(s,r[0],0.92,y,3.52,0.48,{fontSize:10.4,bold:i===4});text(s,r[1],4.7,y,0.46,0.34,{fontSize:13,bold:true,color:C.blue,align:'center'});text(s,r[2],5.38,y,1.58,0.48,{fontSize:9.7,color:C.gray});y+=0.72;});
 pill(s,0.92,5.96,1.7,'一次 11/11','EAF3FA',C.blue);pill(s,2.82,5.96,1.7,'二次 6/6','E8F4EF',C.green);pill(s,4.72,5.96,2.2,'合計 17/17','FFF2E7',C.orange);
 card(s,7.56,1.35,4.95,2.35,'解法アルゴリズム','1. P・f → nₛ\n2. %すべり → 小数 → n\n3. 必要なら ω=2πn/60\n4. Pₘ=ωT\n5. T–s は近似条件確認\n6. 磁束問題だけ V/f\n7. 一定条件を再確認\n8. 単位・P/p・nₛ/n を検算',C.blue);card(s,7.56,3.92,4.95,1.95,'3段階例題','基礎：6極60Hz→nₛ・s\n標準：R7二次型 22kW / 1158min⁻¹ → 50%トルク時のn・Pₘ\n複合：4極/6極の速度＋電気角',C.teal);pill(s,7.56,6.12,1.5,'次工程','FBEDEE',C.red);text(s,'保存済み正答を見ず、Topic 24教材だけで固定5問・17答案要素をclean blind再解答。',9.23,6.1,3.15,0.44,{fontSize:10.3,color:C.red,bold:true});
}
const out=process.env.TOPIC24_OUT || 'denken-shinkansen/05_shinkansen_vehicle_2/topics/24_n700s_main_motor_design_comparison/24_n700s_main_motor_design_comparison_images.pptx';
pptx.writeFile({fileName:out});
