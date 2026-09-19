const pptxgen = require('pptxgenjs');
const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'OpenAI';
pptx.subject = 'Topic 25 N700S バッテリー自走のエネルギー設計';
pptx.title = 'Topic 25 N700S バッテリー自走のエネルギー設計';
pptx.company = 'cureflash/homepage';
pptx.lang = 'ja-JP';
pptx.theme = { headFontFace: 'Noto Sans CJK JP', bodyFontFace: 'Noto Sans CJK JP', lang: 'ja-JP' };
pptx.defineSlideMaster({
  title: 'MASTER', background: { color: 'F7F9FC' },
  objects: [
    { rect: { x:0, y:0, w:13.333, h:0.18, fill:{color:'1769AA'}, line:{color:'1769AA'} } },
    { text: { text:'電験二種 × 新幹線車両｜Topic 25', options:{x:0.45,y:7.12,w:5.5,h:0.2,fontFace:'Noto Sans CJK JP',fontSize:9,color:'5E6B78',margin:0} } },
    { text: { text:'N700S バッテリー自走のエネルギー設計', options:{x:7.0,y:7.12,w:5.85,h:0.2,fontFace:'Noto Sans CJK JP',fontSize:9,color:'5E6B78',margin:0,align:'right'} } }
  ],
  slideNumber: { x: 12.45, y: 0.28, w: 0.45, h: 0.22, color: '788896', fontFace:'Noto Sans CJK JP', fontSize: 10, align:'right' }
});
const C={navy:'17324D',blue:'1769AA',teal:'1B8A8F',orange:'D77B27',red:'B33A3A',green:'2F7D5B',gray:'5E6B78',light:'EAF0F6',pale:'F7F9FC',black:'17212B',white:'FFFFFF',gold:'B8872B'};
function title(s,t,sub=''){s.addText(t,{x:0.55,y:0.42,w:12.1,h:0.48,fontFace:'Noto Sans CJK JP',fontSize:24,bold:true,color:C.navy,margin:0,fit:'shrink'});if(sub)s.addText(sub,{x:0.58,y:0.95,w:12,h:0.28,fontFace:'Noto Sans CJK JP',fontSize:10.5,color:C.gray,margin:0,fit:'shrink'});}
function pill(s,x,y,w,t,fill=C.light,color=C.navy){s.addShape(pptx.ShapeType.roundRect,{x,y,w,h:0.38,rectRadius:0.06,fill:{color:fill},line:{color:fill}});s.addText(t,{x:x+0.06,y:y+0.07,w:w-0.12,h:0.2,fontFace:'Noto Sans CJK JP',fontSize:10.5,bold:true,color,align:'center',margin:0,fit:'shrink'});}
function card(s,x,y,w,h,header,body,accent=C.blue,fs=11.1){s.addShape(pptx.ShapeType.roundRect,{x,y,w,h,rectRadius:0.05,fill:{color:C.white},line:{color:'D6E0EA',width:1}});s.addShape(pptx.ShapeType.rect,{x,y,w:0.08,h,fill:{color:accent},line:{color:accent}});s.addText(header,{x:x+0.22,y:y+0.15,w:w-0.35,h:0.3,fontFace:'Noto Sans CJK JP',fontSize:14.5,bold:true,color:C.navy,margin:0,fit:'shrink'});s.addText(body,{x:x+0.22,y:y+0.53,w:w-0.38,h:h-0.65,fontFace:'Noto Sans CJK JP',fontSize:fs,color:C.black,margin:0.02,fit:'shrink',valign:'top',breakLine:false});}
function line(s,x1,y1,x2,y2,color='7E8C99',width=1,dash='solid'){s.addShape(pptx.ShapeType.line,{x:x1,y:y1,w:x2-x1,h:y2-y1,line:{color,width,dashType:dash}});}
function arrow(s,x1,y1,x2,y2,color=C.blue,width=2){s.addShape(pptx.ShapeType.line,{x:x1,y:y1,w:x2-x1,h:y2-y1,line:{color,width,endArrowType:'triangle'}});}
function text(s,txt,x,y,w,h,o={}){s.addText(txt,{x,y,w,h,fontFace:'Noto Sans CJK JP',fontSize:o.fontSize||11,color:o.color||C.black,bold:!!o.bold,align:o.align||'left',valign:o.valign||'mid',margin:o.margin===undefined?0:o.margin,fit:'shrink',breakLine:false,italic:!!o.italic,rotate:o.rotate||0});}
function dot(s,x,y,r,color){s.addShape(pptx.ShapeType.ellipse,{x:x-r,y:y-r,w:2*r,h:2*r,fill:{color},line:{color}});}

{
 const s=pptx.addSlide('MASTER'); title(s,'自走設計は「Wh条件」と「A条件」を分けて解く','固定品質ゲート：第二種 一次4問＋二次1問＝5問・28答案要素');
 const xs=[0.65,2.95,5.25,7.55,9.85], labels=[['必要機械出力','Pₘₑcₕ'],['走行時間','t [h]'],['効率を逆算','÷ηₘ÷ηinv÷ηb'],['必要電力量','Ebat [Wh]'],['Ah＋Cレート','max条件']];
 xs.forEach((x,i)=>{s.addShape(pptx.ShapeType.roundRect,{x,y:1.62,w:1.95,h:1.05,rectRadius:0.05,fill:{color:i===4?'EEF6F1':'FFFFFF'},line:{color:i===4?C.green:'CBD7E2',width:1.1}});text(s,labels[i][0],x+0.1,1.83,1.75,0.26,{fontSize:13,bold:true,align:'center'});text(s,labels[i][1],x+0.1,2.18,1.75,0.24,{fontSize:10.5,color:C.gray,align:'center'});if(i<4)arrow(s,x+1.95,2.14,x+2.28,2.14,C.blue,2);});
 card(s,0.7,3.05,3.75,1.75,'N700Sで確認済み','東芝SCiB採用／JR東海とバッテリー自走システムを共同開発。長時間停電時に安全な場所まで自力走行を目指す。',C.green,10.7);
 card(s,4.62,3.05,3.72,1.75,'実車値として置かない','電池電圧・Ah・Wh・セル数・直並列・Cレート・実放電電流・各効率は一次資料未確認。教材数値は仮定値。',C.red,10.5);
 card(s,8.5,3.05,4.03,1.75,'試験での焦点','Ah≠Wh／1 Ah=3600 C／直列と並列／Cレート／内部抵抗／充放電符号／可逆チョッパ／効率逆算。',C.orange,10.6);
 pill(s,0.75,5.22,2.0,'SPEC必須 10項目');text(s,'電池電圧 / Ah / Wh / 直列・並列 / Cレート / 放電電流 / 電池効率 / インバータ効率 / モーター効率 / 必要容量',2.95,5.25,9.6,0.32,{fontSize:10.6,color:C.gray});
 pill(s,0.75,5.84,2.0,'指定可視化 3点','EAF6F7',C.teal);text(s,'走行時間―必要電力量 / 速度条件―必要電力 / 効率―必要電池容量',2.95,5.88,9.55,0.28,{fontSize:11,color:C.gray});
 text(s,'境界：Topic 25では未指定の走行抵抗モデルを追加しない。',0.78,6.48,11.7,0.28,{fontSize:10.5,bold:true,color:C.red});
}
{
 const s=pptx.addSlide('MASTER'); title(s,'一次試験の電池基礎｜Ah・Wh・直列並列・電池一般','固定一次4問の20答案要素へ接続する最小知識');
 card(s,0.72,1.38,3.7,2.05,'Ah と Wh','QAh = I t\n1 Ah = 3600 C\nEWh ≈ V × QAh\nP = VI,  E = Pt\n\nAhは電気量、Whはエネルギー。',C.blue,11.4);
 card(s,4.62,1.38,3.74,2.05,'直列・並列','直列：Vpack = Ns Vcell\n　　　Ahは1セル分\n並列：Qpack = Np Qcell\n　　　電圧は1セル分\nEpack ≈ NsNpVcellQcell',C.teal,11.2);
 card(s,8.56,1.38,3.77,2.05,'ファラデー換算','F ≈ 9.65×10⁴ C/mol\nF/3600 ≈ 26.8 Ah/mol\n\n200 Ah・2電子反応のPbO₂理論量 ≈ 893 g。',C.orange,10.9);
 card(s,0.72,3.72,5.65,2.12,'鉛蓄電池｜R8・R1','正極 PbO₂ / 負極 Pb / 電解液 硫酸水溶液\n放電で PbSO₄ 生成、硫酸濃度・比重は低下\n1セル公称電圧 ≈ 2.0 V\nPbO₂中のPb酸化数は +4\n活物質量はファラデー則で電気量→物質量へ換算',C.green,10.75);
 card(s,6.58,3.72,5.75,2.12,'リチウムイオン電池｜R4・R2','充放電可能な二次電池。代表例：負極炭素、正極リチウム遷移金属酸化物、有機電解液。\n放電：負極酸化／正極還元、Li⁺移動。\nR2設問条件の公称電圧 ≈ 3.7 V。大電流では内部抵抗等で端子電圧低下。Wh/kgから必要質量を逆算。',C.blue,10.5);
 text(s,'本試験型：平均3.5 V × 0.5 A × 10 h = 17.5 Wh → 175 Wh/kg なら 0.10 kg = 100 g',0.83,6.18,11.5,0.35,{fontSize:11,bold:true,color:C.navy,align:'center'});
}
{
 const s=pptx.addSlide('MASTER'); title(s,'二次試験の橋渡し｜Cレート・内部抵抗・可逆チョッパ','H23二次「機械・制御」問3の8答案要素へ接続');
 card(s,0.72,1.35,3.7,1.82,'Cレート','容量 CAh、rC放電なら\nI = r CAh\nt = 1/r [h]\n\n10 Ah・2C → 20 A、0.5 h。1C≠1 A。',C.blue,11.1);
 card(s,4.62,1.35,3.72,1.82,'内部抵抗','充電：Vterm = Ei + IRi\n放電：Vterm = Ei − IRi\n損失：PR = I²Ri\n\n端子電圧と内部起電力を分ける。',C.orange,11.1);
 card(s,8.55,1.35,3.77,1.82,'H23 数値橋渡し','10 Ah, Ri=0.005 Ω, Ei=3.6→3.8 V\n1C充電：3.65→3.85 V\n2C放電：3.70→3.50 V',C.green,10.7);
 const y=3.55;
 pill(s,0.9,y,1.35,'充電：降圧','EAF3FA',C.blue);text(s,'Ep1',0.88,y+0.75,0.75,0.3,{fontSize:14,bold:true,align:'center'});s.addShape(pptx.ShapeType.rect,{x:2.05,y:y+0.58,w:1.28,h:0.64,fill:{color:'FFFFFF'},line:{color:C.blue,width:1.5}});text(s,'S1 / D2',2.1,y+0.74,1.18,0.22,{fontSize:11,bold:true,align:'center'});arrow(s,1.55,y+0.9,2.0,y+0.9,C.blue,2);arrow(s,3.35,y+0.9,3.86,y+0.9,C.blue,2);text(s,'Eb1',3.9,y+0.75,0.75,0.3,{fontSize:14,bold:true,align:'center'});text(s,'D = Ton/(Ton+Toff)\nEb1 = D Ep1',1.3,y+1.35,3.1,0.72,{fontSize:12,bold:true,color:C.navy,align:'center'});
 pill(s,6.65,y,1.35,'放電：昇圧','EEF6F1',C.green);text(s,'Eb2',6.62,y+0.75,0.75,0.3,{fontSize:14,bold:true,align:'center'});s.addShape(pptx.ShapeType.rect,{x:7.82,y:y+0.58,w:1.28,h:0.64,fill:{color:'FFFFFF'},line:{color:C.green,width:1.5}});text(s,'S2 / D1',7.87,y+0.74,1.18,0.22,{fontSize:11,bold:true,align:'center'});arrow(s,7.33,y+0.9,7.77,y+0.9,C.green,2);arrow(s,9.12,y+0.9,9.63,y+0.9,C.green,2);text(s,'Ep2',9.68,y+0.75,0.75,0.3,{fontSize:14,bold:true,align:'center'});text(s,'Ep2 = Eb2/(1−D)\n= {(Ton+Toff)/Toff} Eb2',7.0,y+1.35,3.7,0.72,{fontSize:12,bold:true,color:C.navy,align:'center'});
 card(s,10.73,3.55,1.58,2.05,'損失判断','同じ充電エネルギーなら、大電流ほど I²R 損失が増える。',C.red,9.5);
}
{
 const s=pptx.addSlide('MASTER'); title(s,'可視化A｜走行時間―必要電力量','教材用仮定：Pmech=300 kW, ηm=0.93, ηinv=0.96, ηb=0.95 → ηtotal=0.84816');
 const x0=0.95,y0=5.82,w=6.65,h=4.0; const X=m=>x0+(m-1)/4*w, Y=e=>y0-e/32*h;
 line(s,x0,y0,x0+w,y0,C.black,1.2);line(s,x0,y0,x0,y0-h,C.black,1.2);
 [0,10,20,30].forEach(v=>{line(s,x0,Y(v),x0+w,Y(v),'DDE5ED',0.7);text(s,String(v),0.48,Y(v)-0.1,0.38,0.2,{fontSize:9,align:'right',color:C.gray});});
 [1,2,3,4,5].forEach(m=>{line(s,X(m),y0,X(m),y0-h,'EDF1F5',0.6);text(s,String(m),X(m)-0.15,y0+0.08,0.3,0.2,{fontSize:9,align:'center',color:C.gray});});
 const pts=[[1,5.90],[2,11.79],[3,17.69],[4,23.58],[5,29.48]];for(let i=1;i<pts.length;i++)line(s,X(pts[i-1][0]),Y(pts[i-1][1]),X(pts[i][0]),Y(pts[i][1]),C.blue,2.6);pts.forEach(p=>dot(s,X(p[0]),Y(p[1]),0.055,C.blue));
 text(s,'走行時間 [min]',5.95,6.18,1.55,0.22,{fontSize:10,bold:true,color:C.gray,align:'right'});text(s,'必要電池電力量 [kWh]',0.23,1.58,1.1,0.25,{fontSize:10,bold:true,color:C.gray});
 card(s,7.95,1.42,4.35,1.48,'エネルギー式','Ebat = Pmech t /(ηm ηinv ηb)\n5 min → 25/0.84816 = 29.48 kWh',C.blue,11.3);
 const fy=3.28; const bx=[8.05,9.35,10.65,11.95]; const labs=[['電池内部','÷ηb'],['端子/DC','÷ηinv'],['モータ','÷ηm'],['車輪側','Pmech']];
 labs.forEach((a,i)=>{s.addShape(pptx.ShapeType.roundRect,{x:bx[i],y:fy,w:1.05,h:0.92,rectRadius:0.04,fill:{color:i===3?'EEF6F1':'FFFFFF'},line:{color:i===3?C.green:'CBD7E2'}});text(s,a[0],bx[i]+0.08,fy+0.14,0.9,0.24,{fontSize:10.5,bold:true,align:'center'});text(s,a[1],bx[i]+0.08,fy+0.48,0.9,0.2,{fontSize:9.5,color:C.gray,align:'center'});if(i<3)arrow(s,bx[i]+1.05,fy+0.46,bx[i+1]-0.08,fy+0.46,C.teal,1.8);});
 card(s,7.95,4.56,4.35,1.45,'容量設計の分岐','エネルギー条件：Qenergy = Ebat/Vb\n電流条件：QCrate ≥ Ibat/rmax\n最終：Qdesign ≥ max(Qenergy, QCrate)',C.orange,10.8);
}
{
 const s=pptx.addSlide('MASTER'); title(s,'可視化B｜速度条件―必要電力','走行抵抗は追加しない。問題文で与えられた「速度条件と必要機械出力」の組を入力として比較する');
 const x0=0.95,y0=5.78,w=5.5,h=3.9, X=v=>x0+(v-10)/20*w, Y=p=>y0-(p-150)/300*h;
 line(s,x0,y0,x0+w,y0,C.black,1.2);line(s,x0,y0,x0,y0-h,C.black,1.2);
 [200,300,400].forEach(v=>{line(s,x0,Y(v),x0+w,Y(v),'DDE5ED',0.7);text(s,String(v),0.45,Y(v)-0.1,0.42,0.2,{fontSize:9,align:'right',color:C.gray});});[10,20,30].forEach(v=>{line(s,X(v),y0,X(v),y0-h,'EDF1F5',0.6);text(s,String(v),X(v)-0.18,y0+0.08,0.36,0.2,{fontSize:9,align:'center',color:C.gray});});
 const pts=[[10,200],[20,300],[30,400]];for(let i=1;i<pts.length;i++)line(s,X(pts[i-1][0]),Y(pts[i-1][1]),X(pts[i][0]),Y(pts[i][1]),C.teal,2.6);pts.forEach(p=>dot(s,X(p[0]),Y(p[1]),0.06,C.teal));
 text(s,'速度条件 [km/h]',4.72,6.15,1.72,0.22,{fontSize:10,bold:true,color:C.gray,align:'right'});text(s,'与件の必要機械出力 [kW]',0.18,1.58,1.25,0.25,{fontSize:10,bold:true,color:C.gray});
 card(s,6.78,1.35,5.55,1.35,'複合例題の条件','Pmech=300 kW, t=5 min, ηm=0.93, ηinv=0.96, ηb=0.95, Vb=600 V, 最大2C。すべて教材用仮定値。',C.blue,10.7);
 card(s,6.78,2.93,2.66,2.05,'Wh条件','Ebat = 29.48 kWh\nQenergy = 29.48×1000/600\n= 49.13 Ah',C.orange,11.2);
 card(s,9.65,2.93,2.68,2.05,'A / C-rate条件','Pterminal = 300/(0.93×0.96)\n= 336.0 kW\nI ≈ 560 A\nQCrate ≥ 560/2 = 280 Ah',C.red,10.7);
 card(s,6.78,5.2,5.55,0.95,'設計値','Qdesign ≥ max(49.13, 280) = 280 Ah　→ 短時間では電力量より出力電流条件が支配的',C.green,10.9);
}
{
 const s=pptx.addSlide('MASTER'); title(s,'可視化C｜効率―必要電池容量 ＋ 固定過去問対応','教材用仮定：Pmech=300 kW, 5 min, Vb=600 V。N700S実電池電圧ではない');
 const x0=0.82,y0=4.5,w=5.55,h=2.75, X=e=>x0+(e-0.70)/0.20*w, Y=q=>y0-(q-44)/18*h;
 line(s,x0,y0,x0+w,y0,C.black,1.1);line(s,x0,y0,x0,y0-h,C.black,1.1);
 [46,50,54,58,62].forEach(v=>{line(s,x0,Y(v),x0+w,Y(v),'DDE5ED',0.7);text(s,String(v),0.35,Y(v)-0.1,0.38,0.2,{fontSize:8.8,align:'right',color:C.gray});});[0.70,0.75,0.80,0.85,0.90].forEach(e=>{line(s,X(e),y0,X(e),y0-h,'EDF1F5',0.6);text(s,e.toFixed(2),X(e)-0.22,y0+0.08,0.44,0.2,{fontSize:8.5,align:'center',color:C.gray});});
 const pts=[[0.70,59.52],[0.75,55.56],[0.80,52.08],[0.85,49.02],[0.90,46.30]];for(let i=1;i<pts.length;i++)line(s,X(pts[i-1][0]),Y(pts[i-1][1]),X(pts[i][0]),Y(pts[i][1]),C.blue,2.5);pts.forEach(p=>dot(s,X(p[0]),Y(p[1]),0.052,C.blue));
 text(s,'総合効率 ηtotal [-]',4.72,4.86,1.55,0.22,{fontSize:9.5,bold:true,color:C.gray,align:'right'});text(s,'必要Ah容量',0.15,1.53,0.8,0.22,{fontSize:9.5,bold:true,color:C.gray});
 text(s,'Qrequired = 25×1000 /(600 ηtotal)',1.15,5.28,4.85,0.3,{fontSize:12,bold:true,color:C.navy,align:'center'});
 card(s,6.65,1.38,3.0,2.62,'固定過去問 5問','R8 一次 機械 問5：5要素\nR4 一次 機械 問6：5要素\nR2 一次 機械 問4：5要素\nR1 一次 機械 問4：5要素\nH23 二次 機械・制御 問3：8要素\n合計 28答案要素',C.green,10.8);
 card(s,9.85,1.38,2.48,2.62,'頻出ミス','AhとWh混同\nmin→h忘れ\n効率を掛ける\n直列でAh加算\n1C=1Aと誤解\n±IRの符号逆\n公称値=端子電圧\nWhだけで容量決定',C.red,9.9);
 card(s,6.65,4.27,5.68,1.56,'品質境界','固定EXAM_ALIGNMENTは変更しない。未確認N700S電池値を真値化しない。未指定の走行抵抗・余裕率・劣化率・SOC使用範囲を追加しない。\n完成後clean blind独立再解答は、このPPT完了後の別工程。',C.orange,10.35);
 pill(s,6.65,6.1,2.15,'PPT QA 対象','EAF0F6',C.navy);text(s,'内容 / 表示 / 固定28答案要素への接続 / SPEC必須10項目 / 指定3可視化',8.95,6.12,3.35,0.28,{fontSize:9.8,color:C.gray});
}

const out=process.env.TOPIC25_OUT || '/mnt/data/25_n700s_battery_self_propulsion_energy_design_images.pptx';
pptx.writeFile({ fileName: out });
