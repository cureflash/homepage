const pptxgen = require('pptxgenjs');
const pptx = new pptxgen();
pptx.layout = 'LAYOUT_WIDE';
pptx.author = 'OpenAI';
pptx.subject = '電験二種 理論 Topic 20';
pptx.title = 'East iは走りながら何をどう測る？';
pptx.company = 'cureflash/homepage';
pptx.lang = 'ja-JP';
pptx.theme = { headFontFace: 'Noto Sans CJK JP', bodyFontFace: 'Noto Sans CJK JP', lang: 'ja-JP' };
pptx.defineSlideMaster({
  title: 'MASTER', background: { color: 'F7F9FC' },
  objects: [
    { rect: { x:0,y:0,w:13.333,h:0.14,fill:{color:'0F3D56'},line:{color:'0F3D56'} } },
    { text: { text:'電験二種 理論｜Topic 20', options:{x:0.45,y:7.15,w:3.2,h:0.2,fontFace:'Noto Sans CJK JP',fontSize:9,color:'6B7280',margin:0} } }
  ],
  slideNumber: { x:12.45,y:7.13,w:0.4,h:0.2,color:'6B7280',fontFace:'Noto Sans CJK JP',fontSize:9 }
});
const C={navy:'0F3D56',teal:'1B7F79',blue:'2878B5',cyan:'DDEFF7',mint:'E3F3EF',orange:'F59E0B',red:'B42318',green:'14804A',ink:'1F2937',gray:'6B7280',light:'F7F9FC',border:'D6DCE5',white:'FFFFFF',pale:'EEF3F8'};
function addTitle(s,t,sub=''){s.addText(t,{x:.55,y:.36,w:12.1,h:.46,fontFace:'Noto Sans CJK JP',fontSize:24,bold:true,color:C.navy,margin:0});if(sub)s.addText(sub,{x:.57,y:.86,w:11.9,h:.28,fontFace:'Noto Sans CJK JP',fontSize:11.5,color:C.gray,margin:0});}
function addFooter(s,t){s.addText(t,{x:.55,y:6.82,w:11.8,h:.22,fontFace:'Noto Sans CJK JP',fontSize:8.8,color:'707783',margin:0,fit:'shrink'});}
function box(s,x,y,w,h,title,body,fill='FFFFFF',accent=C.teal,bodySize=15){s.addShape(pptx.ShapeType.roundRect,{x,y,w,h,rectRadius:.08,fill:{color:fill},line:{color:C.border,width:1}});s.addShape(pptx.ShapeType.rect,{x:x+.02,y:y+.02,w:.08,h:h-.04,fill:{color:accent},line:{color:accent}});s.addText(title,{x:x+.18,y:y+.12,w:w-.28,h:.3,fontSize:16.5,bold:true,color:C.ink,margin:0,fontFace:'Noto Sans CJK JP',fit:'shrink'});s.addText(body,{x:x+.18,y:y+.5,w:w-.28,h:h-.62,fontSize:bodySize,color:C.ink,margin:.03,fontFace:'Noto Sans CJK JP',fit:'shrink',valign:'mid'});}
function pill(s,x,y,w,text,fill=C.pale,color=C.navy,fs=11){s.addShape(pptx.ShapeType.roundRect,{x,y,w,h:.34,fill:{color:fill},line:{color:fill},rectRadius:.08});s.addText(text,{x:x+.04,y:y+.055,w:w-.08,h:.2,fontSize:fs,bold:true,color,align:'center',margin:0,fontFace:'Noto Sans CJK JP',fit:'shrink'});}
function formula(s,x,y,w,text,label=''){s.addShape(pptx.ShapeType.roundRect,{x,y,w,h:.58,fill:{color:'F1F5F9'},line:{color:C.border},rectRadius:.05});if(label)s.addText(label,{x:x+.1,y:y+.08,w:1.55,h:.18,fontSize:9.5,bold:true,color:C.gray,margin:0,fontFace:'Noto Sans CJK JP'});s.addText(text,{x:x+(label?1.4:.1),y:y+.11,w:w-(label?1.5:.2),h:.3,fontSize:18,bold:true,color:C.navy,align:'center',margin:0,fontFace:'Noto Sans CJK JP',fit:'shrink'});}
function arrow(s,x,y,w,h,color=C.teal){s.addShape(pptx.ShapeType.chevron,{x,y,w,h,fill:{color},line:{color}});}
{
 const s=pptx.addSlide('MASTER');
 s.addText('East iは走りながら\n何をどう測る？',{x:.65,y:.62,w:6.7,h:1.05,fontSize:30,bold:true,color:C.navy,margin:0,fontFace:'Noto Sans CJK JP',fit:'shrink'});
 s.addText('電験二種「理論」｜電気・電子計測',{x:.68,y:1.74,w:5.7,h:.35,fontSize:18,color:C.teal,bold:true,margin:0,fontFace:'Noto Sans CJK JP'});
 box(s,.7,2.35,5.95,3.75,'この章で解けるようにする','測定誤差 → 零位法・ブリッジ → 計器の負荷効果 → 波形計測 → A/D・標本化までを、一つの「測る」流れとして扱う。\n\n固定品質ゲート：一次5問・25答案要素\nR8問4 / R7問4 / R6問6 / H24問7 / H20問6',C.white,C.teal,16);
 s.addShape(pptx.ShapeType.roundRect,{x:7.05,y:.78,w:5.55,h:5.55,fill:{color:'EEF5F8'},line:{color:'C8D6DE'},rectRadius:.08});
 s.addText('SPEC固定範囲 12 / 12',{x:7.35,y:1.05,w:4.9,h:.35,fontSize:18,bold:true,color:C.navy,margin:0,fontFace:'Noto Sans CJK JP'});
 const scopes=['測定誤差','絶対誤差','相対誤差','精度','有効数字','ブリッジ回路','波形計測','オシロスコープ','A/D変換','サンプリング','標本化','エイリアシング'];let k=0;
 for(let r=0;r<6;r++)for(let c=0;c<2;c++)pill(s,7.35+c*2.45,1.58+r*.66,2.22,scopes[k++],c===0?'DDEFF7':'E3F3EF',c===0?C.blue:C.teal,11.5);
 s.addText('新幹線は導入。試験で解けることを主目的にする。',{x:7.35,y:5.65,w:4.75,h:.38,fontSize:13.2,bold:true,color:C.red,margin:0,fontFace:'Noto Sans CJK JP',align:'center',fit:'shrink'});
 addFooter(s,'出典: MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 08_shinkansen_theory_2/SPEC.md / Topic 20 source');
}
{
 const s=pptx.addSlide('MASTER');addTitle(s,'1｜誤差を定義し、計器が回路を乱すことまで追う','H20 一次「理論」問6型：電圧計・電流計の内部抵抗による測定誤差');
 formula(s,.7,1.35,3.7,'e = xm − x','符号付き誤差');formula(s,.7,2.05,3.7,'Δ = |xm − x|','絶対誤差');formula(s,.7,2.75,3.7,'δ[%] = 100 e / x','相対誤差');
 box(s,.7,3.55,3.7,2.4,'精度と有効数字','・フルスケール% と 指示値% を区別\n・途中計算では丸めを遅らせる\n・表示桁数 ≠ 測定精度',C.white,C.orange,15);
 box(s,4.75,1.35,3.72,4.6,'接続A：電圧計電流が混ざる','電流計は「負荷電流＋電圧計電流」を読む。\n\nIm = Vm/R + Vm/Rp\nPm = Vm Im\nεa = R/Rp',C.white,C.blue,16);
 box(s,8.75,1.35,3.72,4.6,'接続B：電流計電圧降下が混ざる','電圧計は「負荷＋電流計内部抵抗」の電圧を読む。\n\nVm = Im(R+Rc)\nPm = Im²(R+Rc)\nεb = Rc/R',C.white,C.teal,16);
 s.addText('境界：R = √(Rc Rp) → 誤差が小さい接続を選ぶ',{x:5.45,y:6.08,w:6.8,h:.32,fontSize:15,bold:true,color:C.red,align:'center',margin:0,fontFace:'Noto Sans CJK JP'});
 addFooter(s,'過去問接続: H20一次 理論 問6｜答案要素: 内部抵抗 / 二接続法 / 指示値と真値 / 誤差率 / 接続選択');
}
{
 const s=pptx.addSlide('MASTER');addTitle(s,'2｜零位法：検出器が0になる条件から未知量を逆算する','R7問4・R8問4：校正／インピーダンス比較');
 s.addText('ブリッジ平衡',{x:.8,y:1.2,w:3.2,h:.35,fontSize:18,bold:true,color:C.navy,margin:0,fontFace:'Noto Sans CJK JP'});const cx=2.5,cy=3.15,pts=[[cx,1.75],[4.1,cy],[cx,4.55],[.9,cy]];
 for(const [x,y] of pts)s.addShape(pptx.ShapeType.ellipse,{x:x-.07,y:y-.07,w:.14,h:.14,fill:{color:C.navy},line:{color:C.navy}});[[pts[0],pts[1]],[pts[1],pts[2]],[pts[2],pts[3]],[pts[3],pts[0]]].forEach((p,i)=>s.addShape(pptx.ShapeType.line,{x:p[0][0],y:p[0][1],w:p[1][0]-p[0][0],h:p[1][1]-p[0][1],line:{color:i%2?C.teal:C.blue,width:2}}));
 s.addShape(pptx.ShapeType.line,{x:.9,y:cy,w:3.2,h:0,line:{color:C.orange,width:1.8,dash:'dash'}});s.addText('検出器\nI=0',{x:2,y:2.87,w:1,h:.55,fontSize:14,bold:true,color:C.orange,align:'center',margin:0,fontFace:'Noto Sans CJK JP'});
 s.addText('Z₁',{x:3.18,y:2.13,w:.45,h:.25,fontSize:15,bold:true,color:C.blue,margin:0,fontFace:'Noto Sans CJK JP'});s.addText('Z₂',{x:3.17,y:3.88,w:.45,h:.25,fontSize:15,bold:true,color:C.teal,margin:0,fontFace:'Noto Sans CJK JP'});s.addText('Z₃',{x:1.38,y:3.88,w:.45,h:.25,fontSize:15,bold:true,color:C.blue,margin:0,fontFace:'Noto Sans CJK JP'});s.addText('Z₄',{x:1.36,y:2.13,w:.45,h:.25,fontSize:15,bold:true,color:C.teal,margin:0,fontFace:'Noto Sans CJK JP'});formula(s,.72,5,3.85,'Z₁ Z₄ = Z₂ Z₃','平衡条件');
 box(s,4.85,1.35,3.55,4.25,'R7型：複素インピーダンス比','1. 誘導分圧器の比 k を読む\n2. 零位 → 枝電流が一致\n3. (1−k)E/Zs = kE/Zx\n4. Zx/Zs = k/(1−k)\n\n大きさだけでなく位相も条件になる。',C.white,C.blue,15.2);
 box(s,8.68,1.35,3.75,4.25,'R8型：静電容量の校正','1. 90°位相差の信号を使う\n2. 標準抵抗枝と容量枝を零位で一致\n3. nU/(8Rs) = ωCxU\n4. f = n/(16πRsCx)\n\n調整量の比から未知容量を逆算する。',C.white,C.teal,15.2);
 s.addText('共通：零位 → 関係式 → 比 → 未知量',{x:4.95,y:5.92,w:7.25,h:.36,fontSize:16,bold:true,color:C.red,align:'center',margin:0,fontFace:'Noto Sans CJK JP'});addFooter(s,'過去問接続: R7一次 理論 問4 / R8一次 理論 問4｜固定答案要素 10 / 10 を可視化');
}
{
 const s=pptx.addSlide('MASTER');addTitle(s,'3｜交流ブリッジでは寄生成分まで式に入れる','R6 一次「理論」問6型：寄生容量・補償・ガード・未知量算出');
 box(s,.75,1.35,4,4.9,'非理想要素があると何が起きる？','配線・端子と大地の間の寄生容量により、理想ブリッジにはない電流が流れる。\n\n理想平衡式だけで未知量を求めると誤差が入る。\n\n補償・ガードは、漏れ経路が測定結果へ入るのを抑える。',C.white,C.orange,16);
 formula(s,5.05,1.45,7.2,'Id/I2 = Z2 / {(A+1)Xd}','検出器側の影響');s.addText('A が十分大きい → 検出器側の影響を小さくできる',{x:5.15,y:2.1,w:6.95,h:.35,fontSize:15.5,bold:true,color:C.red,align:'center',margin:0,fontFace:'Noto Sans CJK JP'});
 box(s,5.05,2.75,3.45,2.75,'マクスウェル型','Z2 = R2/(1+jωC2R2)\n\nZx = (R1R3/R2)(1+jωC2R2)',C.white,C.blue,16);box(s,8.8,2.75,3.45,2.75,'未知量へ分離','Rx = R1R3/R2\n\nLx = C2R1R3\n\n複素式全体を満たす。',C.white,C.teal,16);
 s.addText('誤差を見る順序：寄生経路 → 追加電流 → 平衡条件のずれ → 算出値のずれ',{x:5.15,y:5.85,w:6.95,h:.38,fontSize:15.2,bold:true,color:C.navy,align:'center',margin:0,fontFace:'Noto Sans CJK JP'});addFooter(s,'過去問接続: R6一次 理論 問6｜答案要素: 平衡条件 / 寄生容量 / 誤差 / 補償・ガード / 未知量算出');
}
{
 const s=pptx.addSlide('MASTER');addTitle(s,'4｜波形は「縦軸」と「時間軸」を分けて読む','H24 一次「理論」問7：オシロスコープ入力と10:1プローブ補償');
 s.addShape(pptx.ShapeType.roundRect,{x:.75,y:1.35,w:5.3,h:3.3,fill:{color:'FFFFFF'},line:{color:C.border},rectRadius:.05});s.addShape(pptx.ShapeType.line,{x:1.15,y:3,w:4.35,h:0,line:{color:'94A3B8',width:1.2}});s.addShape(pptx.ShapeType.line,{x:1.4,y:1.7,w:0,h:2.55,line:{color:'94A3B8',width:1.2}});
 const pts=[];for(let i=0;i<=48;i++){const x=1.4+i*(3.85/48),y=3-.9*Math.sin(i/48*4*Math.PI);pts.push({x,y});}for(let i=0;i<pts.length-1;i++)s.addShape(pptx.ShapeType.line,{x:pts[i].x,y:pts[i].y,w:pts[i+1].x-pts[i].x,h:pts[i+1].y-pts[i].y,line:{color:C.blue,width:2}});
 s.addText('Vpp = Nv Sv Kp',{x:1,y:4.08,w:2.1,h:.28,fontSize:14.5,bold:true,color:C.navy,margin:0,fontFace:'Noto Sans CJK JP'});s.addText('T = Nt St,  f = 1/T',{x:3.2,y:4.08,w:2.45,h:.28,fontSize:14.5,bold:true,color:C.navy,margin:0,fontFace:'Noto Sans CJK JP'});s.addText('正弦波のみ：Vrms = Vp/√2',{x:1,y:4.82,w:4.7,h:.28,fontSize:14,bold:true,color:C.red,margin:0,fontFace:'Noto Sans CJK JP'});
 box(s,6.35,1.35,2.75,4.85,'直流の減衰比','10:1なら\n\nR2/(R1+R2)=1/10\n\n→ R1 = 9R2\n\n抵抗比だけでは高周波で波形が歪む。',C.white,C.blue,16);box(s,9.4,1.35,2.8,4.85,'周波数補償','R1,C1：プローブ側\nR2,C2+C3：入力側\n\nC1R1 = (C2+C3)R2\n\n時定数一致 → 減衰比を周波数非依存にする。',C.white,C.teal,15.6);
 s.addText('H24の5要素：入力R/C・減衰比・プローブR/C・時定数一致・周波数補償',{x:.85,y:5.98,w:11.4,h:.3,fontSize:14.7,bold:true,color:C.navy,align:'center',margin:0,fontFace:'Noto Sans CJK JP',fit:'shrink'});addFooter(s,'過去問接続: H24一次 理論 問7｜波形計測 / オシロスコープ / プローブ補償');
}
{
 const s=pptx.addSlide('MASTER');addTitle(s,'5｜A/D変換：時間を刻み、値を段階化し、ビット列にする','系列SPEC必須：A/D変換・サンプリング・標本化・エイリアシング');
 const xs=[.75,3.55,6.35,9.15],titles=['アナログ信号','標本化','量子化','符号化'],bodies=['連続時間・連続値','時間を離散化\nTs ↔ fs','振幅を有限段階へ\nq = Vspan/2^N','段階をビット列で表現'];for(let i=0;i<4;i++){box(s,xs[i],1.55,2.45,1.8,titles[i],bodies[i],i%2?'E3F3EF':'DDEFF7',i%2?C.teal:C.blue,14.5);if(i<3)arrow(s,xs[i]+2.48,2.15,.45,.42,C.orange);}
 formula(s,.85,3.8,3.65,'fs = 1/Ts','周期と周波数');formula(s,4.85,3.8,3.65,'fs > 2 fmax','標本化定理');formula(s,8.85,3.8,3.65,'falias = |f − k fs|','折り返し');
 s.addShape(pptx.ShapeType.roundRect,{x:.85,y:4.75,w:11.65,h:1.22,fill:{color:'FFF7E6'},line:{color:'F4C879'},rectRadius:.06});s.addText('例：fs = 10 kHz で f = 7.2 kHz を標本化 → falias = |7.2 − 10| = 2.8 kHz',{x:1.05,y:5.03,w:11.25,h:.38,fontSize:18,bold:true,color:'8A4B08',align:'center',margin:0,fontFace:'Noto Sans CJK JP',fit:'shrink'});s.addText('East iの実際のADC bit数・サンプリング周波数は、公開資料なしに実値化しない。',{x:1,y:6.18,w:11.2,h:.31,fontSize:14.2,bold:true,color:C.red,align:'center',margin:0,fontFace:'Noto Sans CJK JP'});addFooter(s,'注: A/D・サンプリング・エイリアシングは系列SPEC必須。直接対応する固定過去問を捏造せず教材・練習問題で補完。');
}
{
 const s=pptx.addSlide('MASTER');addTitle(s,'6｜East iは「計測の入口」に限定する','公開されている測定対象だけを使い、内部回路・未公開定数は推測しない');
 s.addShape(pptx.ShapeType.roundRect,{x:.85,y:1.55,w:5.45,h:1.4,fill:{color:'EAF2F7'},line:{color:C.navy,width:1.4},rectRadius:.15});s.addShape(pptx.ShapeType.chevron,{x:5.82,y:1.55,w:.48,h:1.4,fill:{color:'EAF2F7'},line:{color:C.navy,width:1.4}});for(let i=0;i<4;i++)s.addShape(pptx.ShapeType.ellipse,{x:1.25+i*1.22,y:2.8,w:.36,h:.36,fill:{color:'374151'},line:{color:'374151'}});s.addText('East i（E926形）',{x:1.15,y:1.95,w:4.55,h:.36,fontSize:21,bold:true,color:C.navy,align:'center',margin:0,fontFace:'Noto Sans CJK JP'});
 pill(s,.9,3.55,2,'トロリ線 摩耗','DDEFF7',C.blue,12);pill(s,3.05,3.55,2,'トロリ線 高さ','E3F3EF',C.teal,12);pill(s,5.2,3.55,2,'トロリ線 偏位','DDEFF7',C.blue,12);pill(s,2,4.15,4.2,'カメラ画像等の取得','FFF0D6','8A4B08',12);
 box(s,7.55,1.35,4.75,3.05,'公開情報から言えること','・走行しながら線路・架線等を検査・検測する\n・East-i搭載センサで摩耗・高さ・偏位を測る\n・カメラ画像等を取得する',C.white,C.green,16);box(s,7.55,4.7,4.75,1.62,'言わないこと','E926内部のブリッジ回路 / センサ方式 / ADC分解能 / サンプリング周波数を断定しない。',C.white,C.red,14.8);addFooter(s,'出典: JR東日本 2025-10-23「架線設備モニタリングの導入拡大について」 / JREメディア East i紹介');
}
{
 const s=pptx.addSlide('MASTER');addTitle(s,'7｜過去問対応マップ・共通解法・出典','固定一次5問・25答案要素を教材の見える場所へ接続');
 const rows=[['R8 問4','零位法 / 90°位相差 / 標準R・未知C / 零条件 / 周波数から校正'],['R7 問4','誘導分圧器 / 標準・未知枝電流 / 零条件 / 複素Z比 / 平衡式'],['R6 問6','交流ブリッジ / 寄生容量 / 誤差 / 補償・ガード / 未知量'],['H24 問7','入力R・C / 減衰比 / プローブR・C / 時定数一致 / 周波数補償'],['H20 問6','内部抵抗 / 二接続法 / 指示値と真値 / 誤差率 / 接続選択']];
 s.addShape(pptx.ShapeType.roundRect,{x:.65,y:1.25,w:7.35,h:4.72,fill:{color:'FFFFFF'},line:{color:C.border},rectRadius:.05});s.addText('固定5問 × 5答案要素 = 25 / 25',{x:.95,y:1.48,w:6.7,h:.32,fontSize:17,bold:true,color:C.navy,margin:0,fontFace:'Noto Sans CJK JP'});rows.forEach((r,i)=>{const y=1.98+i*.72;s.addShape(pptx.ShapeType.roundRect,{x:.95,y,w:1,h:.42,fill:{color:i%2?'E3F3EF':'DDEFF7'},line:{color:'C9D7E2'},rectRadius:.04});s.addText(r[0],{x:1.02,y:y+.09,w:.85,h:.2,fontSize:11.2,bold:true,color:C.navy,align:'center',margin:0,fontFace:'Noto Sans CJK JP'});s.addText(r[1],{x:2.08,y:y+.02,w:5.55,h:.42,fontSize:11.4,color:C.ink,margin:.02,fontFace:'Noto Sans CJK JP',fit:'shrink',valign:'mid'});});
 box(s,8.25,1.25,4.35,2.6,'共通解法 8ステップ','1 測定量・基準量\n2 等価回路\n3 基準条件\n4 非理想要素\n5 指示値・未知量\n6 誤差率\n7 Ts・fs・alias\n8 単位・位相・桁を検算',C.white,C.teal,13.6);
 s.addShape(pptx.ShapeType.roundRect,{x:8.25,y:4.05,w:4.35,h:1.92,fill:{color:'F9FAFB'},line:{color:C.border},rectRadius:.05});s.addText('主な出典',{x:8.5,y:4.26,w:2.2,h:.26,fontSize:15.5,bold:true,color:C.navy,margin:0,fontFace:'Noto Sans CJK JP'});s.addText('・電気技術者試験センター 二種 過去問題・解答\n・JR東日本 2025-10-23資料\n・JREメディア East i紹介\n・e-sysnet 電気計測 / 周波数測定\n・オーム社「計測情報の評価」等\n・H20問6: 電験王転記で復元し二次照合',{x:8.5,y:4.62,w:3.78,h:1.12,fontSize:10.4,color:C.ink,margin:0,fontFace:'Noto Sans CJK JP',fit:'shrink'});s.addText('二次採用0問・数合わせ0件 / 固定範囲外追加0件 / East i内部回路推測0件',{x:.9,y:6.26,w:11.4,h:.3,fontSize:13.5,bold:true,color:C.red,align:'center',margin:0,fontFace:'Noto Sans CJK JP',fit:'shrink'});addFooter(s,'公式: https://www.shiken.or.jp/chief/second/qa/  JR東日本: https://www.jreast.co.jp/press/2025/20251023_ho02.pdf  JRE: https://media.jreast.co.jp/articles/1653');
}
const out=process.argv[2]||'20_east_i_measurement_images.pptx';
pptx.writeFile({fileName:out});
