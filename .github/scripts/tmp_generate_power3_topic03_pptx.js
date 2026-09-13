const pptxgen = require('pptxgenjs');
const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'OpenAI';
pptx.subject = '電験三種 電力 - 火力発電';
pptx.title = 'JR東日本はなぜ火力発電所まで持っている？';
pptx.company = 'cureflash/homepage';
pptx.lang = 'ja-JP';
pptx.theme = { headFontFace: 'Aptos Display', bodyFontFace: 'Aptos', lang: 'ja-JP' };
pptx.defineSlideMaster({
  title: 'MASTER', background: { color: 'F7F8FA' },
  objects: [
    { rect: { x:0, y:0, w:13.333, h:0.16, fill:{color:'1F4E79'}, line:{color:'1F4E79'} } },
    { text: { text:'電験三種｜電力｜Topic 03 火力発電', options:{ x:0.45,y:7.10,w:7.2,h:0.22,fontFace:'Aptos',fontSize:9,color:'667085',margin:0 } } },
    { text: { text:'cureflash/homepage', options:{ x:10.6,y:7.10,w:2.25,h:0.22,fontFace:'Aptos',fontSize:9,color:'98A2B3',align:'right',margin:0 } } }
  ],
  slideNumber: { x:12.88, y:7.10, w:0.22, h:0.22, color:'98A2B3', fontSize:9, align:'right' }
});
const C={navy:'17365D',blue:'2E75B6',pale:'EAF2F8',text:'101828',sub:'475467',line:'D0D5DD',orange:'D97706',paleOrange:'FFF3E0',green:'287A5B',paleGreen:'E9F6F0',red:'B42318',paleRed:'FEE4E2',white:'FFFFFF',gray:'F2F4F7'};
function title(slide,t,st){slide.addText(t,{x:0.55,y:0.35,w:12.2,h:0.48,fontFace:'Aptos Display',fontSize:25,bold:true,color:C.navy,margin:0,fit:'shrink'});if(st)slide.addText(st,{x:0.57,y:0.87,w:12.0,h:0.28,fontSize:11.5,color:C.sub,margin:0,fit:'shrink'});}
function box(slide,x,y,w,h,head,body,fill='FFFFFF',accent=C.blue){slide.addShape(pptx.ShapeType.roundRect,{x,y,w,h,rectRadius:0.06,fill:{color:fill},line:{color:C.line,width:1}});slide.addShape(pptx.ShapeType.rect,{x,y,w:0.07,h,fill:{color:accent},line:{color:accent}});slide.addText(head,{x:x+0.2,y:y+0.16,w:w-0.35,h:0.32,fontSize:15,bold:true,color:C.text,margin:0,fit:'shrink'});slide.addText(body,{x:x+0.2,y:y+0.55,w:w-0.35,h:h-0.67,fontSize:11.5,color:C.sub,margin:0.03,breakLine:false,valign:'mid',fit:'shrink'});}
function arrow(slide,x,y,w,h,color=C.blue){slide.addShape(pptx.ShapeType.rightArrow,{x,y,w,h,fill:{color},line:{color},adjustPoint:0.55});}
function node(slide,x,y,w,h,label,fill=C.pale,stroke=C.blue,fs=14){slide.addShape(pptx.ShapeType.roundRect,{x,y,w,h,fill:{color:fill},line:{color:stroke,width:1.4},radius:0.05});slide.addText(label,{x:x+0.08,y:y+0.05,w:w-0.16,h:h-0.1,align:'center',valign:'mid',fontSize:fs,bold:true,color:C.text,margin:0,fit:'shrink'});}
function formula(slide,x,y,w,h,txt,accent=C.blue){slide.addShape(pptx.ShapeType.roundRect,{x,y,w,h,fill:{color:'FFFFFF'},line:{color:accent,width:1.6}});slide.addText(txt,{x:x+0.12,y:y+0.08,w:w-0.24,h:h-0.16,align:'center',valign:'mid',fontFace:'Aptos',fontSize:21,bold:true,color:accent,margin:0,fit:'shrink'});}
function tag(slide,x,y,w,txt,fill=C.pale,color=C.navy){slide.addShape(pptx.ShapeType.roundRect,{x,y,w,h:0.34,fill:{color:fill},line:{color:fill}});slide.addText(txt,{x:x+0.06,y:y+0.05,w:w-0.12,h:0.22,fontSize:10.5,bold:true,color,align:'center',margin:0,fit:'shrink'});}
{
 let s=pptx.addSlide('MASTER');title(s,'JR東日本はなぜ火力発電所まで持っている？','新幹線を入口に、電験三種「火力発電」の計算と判断をつなぐ');
 s.addText('電験で問われること',{x:0.65,y:1.35,w:3.2,h:0.35,fontSize:18,bold:true,color:C.text,margin:0});
 box(s,0.65,1.82,3.65,1.35,'熱効率・熱消費率','投入した熱量に対して、何kWhを発電できたか。単位換算と効率の逆算が中心。',C.white,C.orange);
 box(s,0.65,3.34,3.65,1.35,'蒸気タービン・復水器','比エンタルピー差、タービン効率、使用蒸気量。復水器の真空度と効率の因果関係。',C.white,C.blue);
 box(s,0.65,4.86,3.65,1.35,'所内率・コンバインド','発電端と送電端を区別。ガスタービン排熱を蒸気側で再利用する流れを判断。',C.white,C.green);
 s.addShape(pptx.ShapeType.roundRect,{x:4.75,y:1.36,w:7.86,h:4.95,fill:{color:'FFFFFF'},line:{color:C.line,width:1.1}});
 s.addText('JR東日本・川崎発電所を入口にする',{x:5.08,y:1.67,w:6.9,h:0.38,fontSize:20,bold:true,color:C.navy,margin:0});
 tag(s,5.08,2.23,1.62,'総出力 80.9万kW',C.paleOrange,C.orange);tag(s,6.88,2.23,1.50,'発電機 4台');tag(s,8.56,2.23,1.65,'都市ガス・天然ガス');tag(s,10.40,2.23,1.62,'複合サイクル',C.paleGreen,C.green);
 node(s,5.15,3.16,1.42,0.72,'燃料');arrow(s,6.68,3.34,0.56,0.34);node(s,7.34,3.16,1.65,0.72,'ガスタービン');arrow(s,9.09,3.34,0.56,0.34);node(s,9.76,3.16,1.55,0.72,'発電機');
 s.addShape(pptx.ShapeType.downArrow,{x:8.03,y:4.05,w:0.36,h:0.65,fill:{color:C.orange},line:{color:C.orange}});s.addText('排熱',{x:8.42,y:4.22,w:0.7,h:0.22,fontSize:11,bold:true,color:C.orange,margin:0});
 node(s,6.85,4.86,1.52,0.72,'蒸気');arrow(s,8.48,5.04,0.56,0.34);node(s,9.14,4.86,1.74,0.72,'蒸気タービン');arrow(s,10.99,5.04,0.56,0.34);node(s,11.65,4.86,0.75,0.72,'発電',C.paleGreen,C.green,12);
 s.addText('目的は設備暗記ではなく、一般化した電験問題を解けること。',{x:5.08,y:5.92,w:6.9,h:0.28,fontSize:13,bold:true,color:C.text,margin:0});
 s.addText('出典: JR東日本公式（川崎発電所／カーボンニュートラル／発電所更新）',{x:0.67,y:6.58,w:11.9,h:0.22,fontSize:9.5,color:C.sub,margin:0});
}
{
 let s=pptx.addSlide('MASTER');title(s,'汽力発電と復水器','機器名ではなく「何が入り、何が出るか」で覚える');
 node(s,0.75,1.55,1.38,0.82,'燃料の熱',C.paleOrange,C.orange);arrow(s,2.24,1.79,0.55,0.34,C.orange);node(s,2.90,1.55,1.42,0.82,'ボイラ');arrow(s,4.43,1.79,0.55,0.34);node(s,5.09,1.55,1.42,0.82,'蒸気');arrow(s,6.62,1.79,0.55,0.34);node(s,7.28,1.55,1.85,0.82,'蒸気タービン');arrow(s,9.24,1.79,0.55,0.34);node(s,9.90,1.55,1.42,0.82,'発電機');arrow(s,11.43,1.79,0.55,0.34);node(s,12.04,1.55,0.78,0.82,'電力',C.paleGreen,C.green,12);
 s.addShape(pptx.ShapeType.downArrow,{x:7.98,y:2.48,w:0.38,h:0.63,fill:{color:C.blue},line:{color:C.blue}});node(s,7.18,3.22,2.05,0.82,'復水器',C.pale,C.blue);s.addShape(pptx.ShapeType.leftArrow,{x:4.70,y:3.46,w:2.35,h:0.34,fill:{color:C.blue},line:{color:C.blue}});s.addText('水へ戻す',{x:5.24,y:3.81,w:1.15,h:0.22,fontSize:11,color:C.sub,align:'center',margin:0});
 box(s,0.76,3.10,3.40,2.32,'復水器の役割','排気蒸気を凝縮 → 復水器内を低圧に保つ → タービン出口圧力が下がる → 利用できる熱落差が増える → 取り出せる仕事が増える',C.white,C.blue);
 s.addText('因果関係',{x:4.60,y:4.38,w:1.2,h:0.26,fontSize:15,bold:true,color:C.text,margin:0});
 const labels=['真空度が高い','絶対圧力は低い','タービン効率↑'];labels.forEach((v,i)=>{node(s,5.86+i*2.17,4.68,1.72,0.66,v,i===2?C.paleGreen:C.gray,i===2?C.green:C.line,12);if(i<2)arrow(s,7.66+i*2.17,4.84,0.33,0.28,i===1?C.green:C.blue);});
 s.addText('ひっかけ: 「真空度が高い」≠「絶対圧力が高い」',{x:5.86,y:5.72,w:5.5,h:0.35,fontSize:14,bold:true,color:C.red,margin:0});tag(s,5.86,6.25,2.00,'R8上 電力 問3',C.paleRed,C.red);
}
{
 let s=pptx.addSlide('MASTER');title(s,'蒸気タービンの出力と使用蒸気量','比エンタルピー差 × 蒸気流量 × タービン効率');
 formula(s,0.78,1.45,5.70,0.82,'P = ηt · ṁ · (h1 − h2)');formula(s,0.78,2.52,5.70,0.82,'ṁ = P / {ηt (h1 − h2)}',C.orange);
 box(s,0.78,3.63,5.70,1.92,'単位がそのまま kW につながる','(kJ/kg) × (kg/s) = kJ/s = kW\n\nkg/s → t/h は 3.6 倍。必要蒸気量の逆算では、効率を含む実効熱落差で割る。',C.white,C.blue);
 s.addShape(pptx.ShapeType.roundRect,{x:6.90,y:1.45,w:5.65,h:4.75,fill:{color:'FFFFFF'},line:{color:C.line,width:1.1}});s.addText('本試験標準例題',{x:7.22,y:1.76,w:2.2,h:0.30,fontSize:17,bold:true,color:C.navy,margin:0});
 s.addText('P = 150 MW,  h1 = 3200 kJ/kg,  h2 = 1600 kJ/kg,  ηt = 0.90',{x:7.22,y:2.28,w:4.78,h:0.42,fontSize:12.5,color:C.text,margin:0,fit:'shrink'});s.addText('① Δh = 3200 − 1600 = 1600 kJ/kg',{x:7.22,y:2.95,w:4.75,h:0.34,fontSize:15,color:C.text,margin:0});s.addText('② 150 MW = 150000 kW',{x:7.22,y:3.46,w:4.75,h:0.34,fontSize:15,color:C.text,margin:0});s.addText('③ ṁ = 150000 / (0.90 × 1600)',{x:7.22,y:3.97,w:4.75,h:0.34,fontSize:15,color:C.text,margin:0});s.addText('= 104.17 kg/s',{x:7.58,y:4.42,w:3.9,h:0.34,fontSize:16,bold:true,color:C.blue,margin:0});s.addText('④ 104.17 × 3.6 = 375 t/h',{x:7.22,y:5.05,w:4.75,h:0.42,fontSize:18,bold:true,color:C.orange,margin:0});tag(s,7.22,5.66,2.00,'R7上 電力 問2');
}
{
 let s=pptx.addSlide('MASTER');title(s,'熱効率と熱消費率','「出た電気」と「入れた熱」を同じエネルギー単位で比べる');
 formula(s,0.74,1.43,3.75,0.82,'Qin = mf · Hf');formula(s,4.78,1.43,3.75,0.82,'Eout = 3600 · Wg');formula(s,8.82,1.43,3.75,0.82,'ηg = Eout / Qin',C.green);
 box(s,0.74,2.59,3.75,1.65,'単位換算','1 kWh = 3600 kJ\n1 MWh = 3.6×10^6 kJ\n1 MW = 1000 kW',C.white,C.blue);box(s,4.78,2.59,3.75,1.65,'熱消費率 q','1 kWhを得るための投入熱量。\nη = 3600 / q\n効率が高いほど q は小さい。',C.white,C.orange);box(s,8.82,2.59,3.75,1.65,'簡略復水器熱収支','その他の損失を無視する条件で\nqP = 3600P + Qc\nP = Qc / (q − 3600)',C.white,C.green);
 s.addShape(pptx.ShapeType.roundRect,{x:0.74,y:4.66,w:11.83,h:1.42,fill:{color:C.paleOrange},line:{color:'F6C56D',width:1}});s.addText('例: Qin = 50 GJ, Wg = 5.0 MWh',{x:1.02,y:4.96,w:3.2,h:0.28,fontSize:16,bold:true,color:C.text,margin:0});s.addText('Eout = 5000 × 3600 = 18,000,000 kJ',{x:4.10,y:4.96,w:3.45,h:0.28,fontSize:14,color:C.text,margin:0});s.addText('ηg = 36%',{x:7.72,y:4.88,w:1.65,h:0.42,fontSize:22,bold:true,color:C.green,margin:0,align:'center'});s.addText('q = 10,000 kJ/kWh',{x:9.28,y:4.96,w:2.75,h:0.28,fontSize:16,bold:true,color:C.orange,margin:0,align:'center'});tag(s,0.96,6.31,2.45,'R7下 問15(a)');tag(s,3.62,6.31,2.15,'R1 問15(a)');
}
{
 let s=pptx.addSlide('MASTER');title(s,'発電端・送電端・所内率','発電所の中で使う電力を引いてから、外へ送る');
 node(s,0.86,1.55,2.35,0.88,'発電端 Pg / Wg',C.pale,C.blue,15);arrow(s,3.39,1.82,0.72,0.34);node(s,4.31,1.55,2.15,0.88,'所内消費 PgL',C.paleOrange,C.orange,14);arrow(s,6.66,1.82,0.72,0.34);node(s,7.58,1.55,2.50,0.88,'送電端 Ps / Ws',C.paleGreen,C.green,15);
 formula(s,0.86,2.82,4.28,0.75,'Ps = Pg(1 − L)');formula(s,5.39,2.82,4.28,0.75,'Ws = Wg(1 − L)',C.green);formula(s,9.92,2.82,2.35,0.75,'Pg = Ps/(1−L)',C.orange);
 box(s,0.86,3.93,5.55,1.72,'変動出力の電力量','出力が時間で変わるときは、各時間帯の P×t を足す。\nWg = Σ(Pi ti)\nMW×h = MWh',C.white,C.blue);box(s,6.72,3.93,5.55,1.72,'頻出ミス','発電端 → 送電端では (1−L) を掛ける。\n送電端 → 発電端では (1−L) で割る。\n発電端熱効率には、発電端電力量を使う。',C.white,C.orange);
 s.addText('複合例題の結果',{x:0.88,y:6.00,w:1.65,h:0.25,fontSize:14,bold:true,color:C.text,margin:0});tag(s,2.53,5.92,2.18,'Wg = 5100 MWh');tag(s,4.88,5.92,2.30,'Ws = 4972.5 MWh',C.paleGreen,C.green);tag(s,7.36,5.92,2.12,'ηg = 36.72%',C.paleOrange,C.orange);tag(s,9.66,5.92,2.15,'R3 問15(a)(b)');
}
{
 let s=pptx.addSlide('MASTER');title(s,'ガスタービンとコンバインドサイクル','排熱をもう一段使って、熱効率を高める');
 s.addText('単純ガスタービン',{x:0.70,y:1.35,w:2.4,h:0.28,fontSize:17,bold:true,color:C.navy,margin:0});node(s,0.72,1.83,1.48,0.75,'燃料・空気',C.paleOrange,C.orange,13);arrow(s,2.31,2.03,0.42,0.28,C.orange);node(s,2.84,1.83,1.55,0.75,'燃焼ガス',C.paleOrange,C.orange,13);arrow(s,4.50,2.03,0.42,0.28);node(s,5.03,1.83,1.70,0.75,'ガスタービン');arrow(s,6.84,2.03,0.42,0.28);node(s,7.37,1.83,1.35,0.75,'発電機');
 s.addText('コンバインドサイクル',{x:0.70,y:3.00,w:2.8,h:0.28,fontSize:17,bold:true,color:C.navy,margin:0});node(s,0.72,3.48,1.60,0.75,'ガスタービン');arrow(s,2.43,3.68,0.42,0.28);node(s,2.96,3.48,1.25,0.75,'発電');s.addShape(pptx.ShapeType.downArrow,{x:1.28,y:4.34,w:0.40,h:0.58,fill:{color:C.orange},line:{color:C.orange}});s.addText('排熱',{x:1.75,y:4.50,w:0.7,h:0.22,fontSize:11,bold:true,color:C.orange,margin:0});node(s,0.72,5.12,1.60,0.75,'蒸気');arrow(s,2.43,5.32,0.42,0.28);node(s,2.96,5.12,1.78,0.75,'蒸気タービン');arrow(s,4.85,5.32,0.42,0.28);node(s,5.38,5.12,1.25,0.75,'発電');arrow(s,6.74,5.32,0.42,0.28);node(s,7.27,5.12,1.45,0.75,'復水器');
 s.addShape(pptx.ShapeType.roundRect,{x:9.15,y:1.46,w:3.47,h:4.75,fill:{color:'FFFFFF'},line:{color:C.line,width:1}});s.addText('本試験での比較ポイント',{x:9.45,y:1.75,w:2.82,h:0.35,fontSize:18,bold:true,color:C.text,margin:0});const bullets=[['起動・停止','ガスタービン部は速い'],['負荷追従','変化へ追従しやすい'],['熱効率','排熱利用で高めやすい'],['外気温','高温時は最大出力↓'],['温排水','蒸気系があるので生じる']];bullets.forEach((b,i)=>{let y=2.35+i*0.70;s.addText(b[0],{x:9.44,y,w:0.95,h:0.27,fontSize:12.5,bold:true,color:C.navy,margin:0});s.addText(b[1],{x:10.48,y,w:1.80,h:0.27,fontSize:12.5,color:C.text,margin:0,fit:'shrink'});});tag(s,9.45,5.75,2.15,'R6上 電力 問3',C.paleRed,C.red);
}
{
 let s=pptx.addSlide('MASTER');title(s,'解法アルゴリズムと頻出ミス','火力発電問題は「単位 → 熱量 → 発電端 → 所内率」の順に整理する');
 const steps=['1  既知量を P, W, mf, Hf, η, q, L, h1, h2 に整理','2  MW/kW, MWh/kWh, kWh/kJ, kg/s/t/h をそろえる','3  燃料なら Qin = mfHf、変動出力なら Wg = Σ(Piti)','4  発電端熱効率 ηg = 3600Wg / Qin','5  所内率があれば Ps, Ws = 発電端 × (1−L)','6  蒸気量なら P = ηt ṁ(h1−h2)、熱消費率なら η = 3600/q','7  効率0〜1、送電端≦発電端、要求単位を検算'];steps.forEach((v,i)=>{let y=1.38+i*0.65;s.addShape(pptx.ShapeType.roundRect,{x:0.68,y,w:7.45,h:0.50,fill:{color:i%2===0?'FFFFFF':C.gray},line:{color:C.line,width:0.7}});s.addText(v,{x:0.88,y:y+0.10,w:7.05,h:0.28,fontSize:12.5,color:C.text,margin:0,fit:'shrink'});});
 s.addShape(pptx.ShapeType.roundRect,{x:8.52,y:1.38,w:4.08,h:4.67,fill:{color:'FFFFFF'},line:{color:C.line,width:1}});s.addText('頻出ミス',{x:8.84,y:1.70,w:1.5,h:0.32,fontSize:18,bold:true,color:C.red,margin:0});const miss=['MW と MWh の混同','1 MWh = 3.6×10^6 kJ を落とす','真空度↑を絶対圧力↑と誤解','蒸気量逆算で ηt を掛けてしまう','送電端→発電端で (1−L) を掛ける','発電端熱効率に送電端電力量を使う','外気温影響を「小さい」と誤認'];miss.forEach((v,i)=>s.addText('• '+v,{x:8.85,y:2.18+i*0.46,w:3.32,h:0.28,fontSize:11.5,color:C.text,margin:0,fit:'shrink'}));
 s.addText('過去問対応',{x:0.72,y:6.18,w:1.2,h:0.25,fontSize:14,bold:true,color:C.text,margin:0});['R8上 問3','R7下 問15(a)','R7上 問2','R6上 問3','R3 問15(a)(b)','R1 問15(a)'].forEach((v,i)=>tag(s,1.95+i*1.70,6.08,1.52,v,i===5?C.paleOrange:C.pale,i===5?C.orange:C.navy));
}
pptx.writeFile({ fileName:'denken-shinkansen/02_shinkansen_power_3/topics/03_thermal_power/03_thermal_power_images.pptx' });