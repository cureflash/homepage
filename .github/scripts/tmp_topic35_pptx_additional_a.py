from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE, MSO_CONNECTOR
from pptx.dml.color import RGBColor
from pptx.oxml.xmlchemy import OxmlElement
from pathlib import Path

base=Path('denken-shinkansen/05_shinkansen_vehicle_2/topics/35_atc_track_circuit_analysis')
out=base/'35_atc_track_circuit_analysis_images.pptx'
prs=Presentation(); prs.slide_width=Inches(13.333333); prs.slide_height=Inches(7.5); blank=prs.slide_layouts[6]
NAVY=RGBColor(20,35,58); BLUE=RGBColor(42,98,171); CYAN=RGBColor(63,157,190); TEAL=RGBColor(35,128,123); GREEN=RGBColor(67,145,91); ORANGE=RGBColor(221,132,54); RED=RGBColor(190,72,64); PURPLE=RGBColor(113,82,161); INK=RGBColor(31,41,55); GRAY=RGBColor(92,105,120); LIGHT=RGBColor(243,246,249); MID=RGBColor(220,226,233); WHITE=RGBColor(255,255,255); PALE_BLUE=RGBColor(231,240,250); PALE_CYAN=RGBColor(230,246,249); PALE_GREEN=RGBColor(234,246,238); PALE_ORANGE=RGBColor(252,241,229); PALE_RED=RGBColor(250,235,233); PALE_PURPLE=RGBColor(240,235,249)
FONT='Noto Sans CJK JP'; MONO='Noto Sans Mono CJK JP'

def bg(s,c=WHITE):
    f=s.background.fill; f.solid(); f.fore_color.rgb=c

def rect(s,x,y,w,h,fill=WHITE,line=MID,r=True,lw=1.2):
    q=s.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE if r else MSO_SHAPE.RECTANGLE,Inches(x),Inches(y),Inches(w),Inches(h)); q.fill.solid(); q.fill.fore_color.rgb=fill; q.line.color.rgb=line; q.line.width=Pt(lw); return q

def ellipse(s,x,y,w,h,fill=WHITE,line=MID,lw=1.2):
    q=s.shapes.add_shape(MSO_SHAPE.OVAL,Inches(x),Inches(y),Inches(w),Inches(h)); q.fill.solid(); q.fill.fore_color.rgb=fill; q.line.color.rgb=line; q.line.width=Pt(lw); return q

def ln(s,x1,y1,x2,y2,c=GRAY,lw=1.5,arrow=False,dash=False):
    q=s.shapes.add_connector(MSO_CONNECTOR.STRAIGHT,Inches(x1),Inches(y1),Inches(x2),Inches(y2)); q.line.color.rgb=c; q.line.width=Pt(lw)
    if dash:
        try: q.line.dash_style=1
        except Exception: pass
    if arrow:
        e=q._element.spPr.ln; h=OxmlElement('a:tailEnd'); h.set('type','triangle'); e.append(h)
    return q

def text(s,x,y,w,h,v,size=18,c=INK,b=False,align=PP_ALIGN.LEFT,font=FONT,valign=MSO_ANCHOR.MIDDLE,margin=.05):
    q=s.shapes.add_textbox(Inches(x),Inches(y),Inches(w),Inches(h)); tf=q.text_frame; tf.clear(); tf.word_wrap=True; tf.margin_left=tf.margin_right=tf.margin_top=tf.margin_bottom=Inches(margin); tf.vertical_anchor=valign; p=tf.paragraphs[0]; p.alignment=align; r=p.add_run(); r.text=v; r.font.name=font; r.font.size=Pt(size); r.font.bold=b; r.font.color.rgb=c; return q

def bullets(s,x,y,w,h,items,size=14,fill=WHITE,linec=MID,title=None,tc=NAVY):
    q=rect(s,x,y,w,h,fill,linec,True,1); tf=q.text_frame; tf.clear(); tf.word_wrap=True; tf.margin_left=Inches(.15); tf.margin_right=Inches(.11); tf.margin_top=Inches(.09); tf.margin_bottom=Inches(.07)
    p=tf.paragraphs[0]; p.text=title or ''; p.font.name=FONT; p.font.size=Pt(size+1); p.font.bold=True; p.font.color.rgb=tc; p.space_after=Pt(4)
    for it in items:
        p=tf.add_paragraph(); p.text='• '+it; p.font.name=FONT; p.font.size=Pt(size); p.font.color.rgb=INK; p.space_after=Pt(1.5)
    return q

def titlebar(s,n,t,sub=''):
    rect(s,.55,.23,.55,.44,BLUE,BLUE,True,0); text(s,.55,.23,.55,.44,f'{n:02d}',16,WHITE,True,PP_ALIGN.CENTER)
    text(s,1.2,.15,11.5,.58,t,24,NAVY,True); text(s,1.22,.71,11.25,.28,sub,10,GRAY) if sub else None; ln(s,.55,1.04,12.75,1.04,MID,1)

def pill(s,x,y,w,v,c,size=10): rect(s,x,y,w,.36,c,c,True,0); text(s,x,y,w,.36,v,size,WHITE,True,PP_ALIGN.CENTER)
def formula(s,x,y,w,h,v,fill=LIGHT,c=NAVY,size=20): rect(s,x,y,w,h,fill,fill,True,0); text(s,x+.08,y+.02,w-.16,h-.04,v,size,c,True,PP_ALIGN.CENTER,MONO)

def notes(s,urls):
    try: s.notes_slide.notes_text_frame.text='Sources:\n'+'\n'.join(urls)
    except Exception: pass

OFFICIAL='https://www.shiken.or.jp/chief/second/qa/'
JRTT='https://www.jrtt.go.jp/construction/technology/signal.html'
RTRI='https://www.rtri.or.jp/rd/division/rd47/rd4710/'
RTRI_TC='https://www.rtri.or.jp/rd/division/rd47/rd4710/rd47100201.html'
RTRI_SAFE='https://www.rtri.or.jp/rd/division/rd47/rd4710/rd47100115.html'
RTRI_CURRENT='https://www.rtri.or.jp/rd/division/rd45/rd4540/rd45400111.html'
DENO='https://denken-ou.com/'
ESYS='https://e-sysnet.com/'

s=prs.slides.add_slide(blank); bg(s); titlebar(s,1,'軌道回路を「一般交流回路」として解く','Topic 35｜ATC① 軌道回路の回路解析｜固定5問・25答案要素')
rect(s,.75,1.55,2.05,.9,PALE_BLUE,BLUE,True,1.5); text(s,.83,1.68,1.89,.6,'信号源\nVth, Zth',18,BLUE,True,PP_ALIGN.CENTER)
rect(s,10.55,1.55,2.05,.9,PALE_GREEN,GREEN,True,1.5); text(s,10.65,1.68,1.85,.6,'受信器\nZR',18,GREEN,True,PP_ALIGN.CENTER)
ln(s,2.8,1.92,10.55,1.92,NAVY,4); ln(s,2.8,2.95,10.55,2.95,NAVY,4)
text(s,5.15,1.27,3,.34,'レール等価インピーダンス Zr = Rr + jXr',13,NAVY,True,PP_ALIGN.CENTER)
ln(s,10.95,1.92,10.95,2.95,GREEN,4)
ellipse(s,6.05,2.25,.45,.45,PALE_RED,RED,1.6); ellipse(s,7.05,2.25,.45,.45,PALE_RED,RED,1.6); ln(s,6.27,2.48,7.27,2.48,RED,3); text(s,5.65,3.08,2.25,.42,'車輪・車軸短絡 Zs',13,RED,True,PP_ALIGN.CENTER)
ln(s,6.27,2.48,6.27,1.92,RED,2.2); ln(s,7.27,2.48,7.27,2.95,RED,2.2)
pill(s,.88,3.63,1.52,'回路状態',BLUE,10); pill(s,2.57,3.63,1.88,'複素Z',TEAL,10); pill(s,4.61,3.63,1.75,'解法選択',PURPLE,10); pill(s,6.52,3.63,2.05,'受信V / I',GREEN,10); pill(s,8.73,3.63,1.85,'増減比較',ORANGE,10); pill(s,10.74,3.63,1.63,'安全原則',RED,10)
for x1,x2 in [(2.4,2.56),(4.45,4.60),(6.36,6.51),(8.57,8.72),(10.58,10.73)]: ln(s,x1,3.81,x2,3.81,GRAY,1.5,True)
text(s,.78,4.35,2.3,.34,'SPEC固定7項目',13,NAVY,True)
x=.78
for lab,c,w in [('軌道回路',BLUE,1.28),('レールZ',TEAL,1.18),('車軸短絡',RED,1.28),('受信レベル',GREEN,1.42),('信号電流',PURPLE,1.28),('回路条件',ORANGE,1.28),('フェイルセーフ',NAVY,1.62)]:
    pill(s,x,4.76,w,lab,c,9); x+=w+.11
bullets(s,.78,5.48,11.65,1.15,['固定過去問は軌道回路そのものではなく、網目法・RLC・ブリッジ・漏れ・テブナン等価という一般回路理論を測る。','搬送周波数・変調・S/NはTopic 36、速度制御はTopic 37。未確認実設備値は使わない。'],12,LIGHT,MID)
notes(s,[OFFICIAL,JRTT,RTRI_TC])

s=prs.slides.add_slide(blank); bg(s); titlebar(s,2,'レールを複素インピーダンスで読む','R7一次「理論」問3・問4｜R+jX を途中で絶対値にしない')
formula(s,.72,1.22,3.15,.62,'Zr = Rr + jXr',PALE_BLUE,BLUE,21); formula(s,4.08,1.22,3.45,.62,'XL = jωL = j2πfL',PALE_CYAN,TEAL,18); formula(s,7.76,1.22,4.55,.62,'ZC = 1/(jωC) = −j/(ωC)',PALE_PURPLE,PURPLE,17)
x0,y0,w,h=1.25,5.85,4.65,3.25; ln(s,x0,y0,x0+w,y0,NAVY,1.5,True); ln(s,x0,y0,x0,y0-h,NAVY,1.5,True)
text(s,x0+w-.9,y0+.08,.9,.28,'Re',11,NAVY,True,PP_ALIGN.RIGHT); text(s,x0-.52,y0-h-.08,.45,.28,'jIm',11,NAVY,True,PP_ALIGN.CENTER)
xe=x0+3.1; ye=y0-2.35; ln(s,x0,y0,xe,ye,BLUE,3,True); ln(s,xe,ye,xe,y0,MID,1.2,False,True); ln(s,x0,ye,xe,ye,MID,1.2,False,True)
text(s,xe+.1,ye-.2,1.1,.32,'Z = 3+j4',12,BLUE,True); text(s,x0+1.18,y0+.06,1.05,.3,'R = 3',10,GRAY); text(s,x0-.78,ye-.12,.72,.3,'X = 4',10,GRAY,False,PP_ALIGN.RIGHT)
formula(s,.9,2.15,2.35,.58,'|Z| = √(R²+X²)',LIGHT,NAVY,15); formula(s,3.45,2.15,2.45,.58,'∠Z = atan(X/R)',LIGHT,NAVY,15)
bullets(s,6.35,2.15,5.9,1.65,['直列：Ztotal = ΣZk','並列：1/Zp = Σ(1/Zk)','電流：I = V/Z（フェーザ）','∠I = ∠V − ∠Z'],13,WHITE,TEAL,'計算規則',TEAL)
bullets(s,6.35,4.05,5.9,1.6,['位相を捨ててから合成しない','4+j5 を 9 Ω と置かない','受信電圧と受信電流を区別する'],13,PALE_RED,RED,'典型ミス',RED)
text(s,6.55,5.95,5.4,.42,'固定接続：R7一次 問3 / 問4 → 複素Z・位相・平衡条件',12,NAVY,True,PP_ALIGN.CENTER)
notes(s,[OFFICIAL,RTRI_CURRENT,ESYS,DENO])

s=prs.slides.add_slide(blank); bg(s); titlebar(s,3,'テブナン等価で「受信端だけ」を取り出す','R5一次「理論」問4｜列車なし時の最小モデル')
rect(s,.78,1.42,1.55,.82,PALE_BLUE,BLUE,True,1.4); text(s,.82,1.53,1.47,.58,'Vth',20,BLUE,True,PP_ALIGN.CENTER)
for x,lab,c in [(2.72,'Zth',PURPLE),(5.12,'Zr',TEAL),(7.52,'ZR',GREEN)]:
    rect(s,x,1.50,1.55,.66,WHITE,c,True,1.5); text(s,x,1.50,1.55,.66,lab,17,c,True,PP_ALIGN.CENTER)
ln(s,2.33,1.83,2.72,1.83,GRAY,1.8,True); ln(s,4.27,1.83,5.12,1.83,GRAY,1.8,True); ln(s,6.67,1.83,7.52,1.83,GRAY,1.8,True); ln(s,9.07,1.83,10.22,1.83,GRAY,1.8,True)
text(s,10.15,1.58,1.95,.5,'受信端 VR',14,GREEN,True,PP_ALIGN.CENTER)
formula(s,.86,2.62,5.35,.65,'I = Vth / (Zth + Zr + ZR)',PALE_BLUE,BLUE,18); formula(s,6.48,2.62,5.35,.65,'VR = Vth·ZR / (Zth + Zr + ZR)',PALE_GREEN,GREEN,17)
bullets(s,.82,3.62,5.65,2.58,['Vth = 12 V','Zth = 2 Ω, Zr = 4 Ω, ZR = 18 Ω','Ztotal = 24 Ω','I = 12/24 = 0.500 A','VR = 0.500×18 = 9.00 V'],13,WHITE,BLUE,'基礎例題：列車なし',BLUE)
bullets(s,6.72,3.62,5.55,2.58,['① 負荷を外し、開放端電圧 Vth','② 独立電圧源→短絡、独立電流源→開放で Zth','③ ZR / Zs / 漏れ枝を接続','④ I = Vth/(Zth+ZL)','⑤ 端子電圧・枝路電流を戻す'],13,WHITE,PURPLE,'再利用できる解法',PURPLE)
text(s,.82,6.45,11.45,.45,'検算：2I + 4I + 18I = 12 V。未確認の実設備値は導入しない。',12,NAVY,True,PP_ALIGN.CENTER)
notes(s,[OFFICIAL,RTRI_TC,ESYS,DENO])

s=prs.slides.add_slide(blank); bg(s); titlebar(s,4,'車軸短絡で「全電流↑・受信電流↓」が同時に起こる','車軸短絡は受信器と並列の低インピーダンス枝として扱う')
formula(s,.72,1.20,4.05,.62,'Zp = ZR·Zs / (ZR + Zs)',PALE_RED,RED,18); formula(s,5.0,1.20,4.05,.62,'Vp = Vth·Zp / (Zth + Zr + Zp)',PALE_GREEN,GREEN,16); formula(s,9.28,1.20,3.1,.62,'IR = Vp / ZR',PALE_BLUE,BLUE,17)
bullets(s,.75,2.10,3.6,3.6,['Vth=10 V','Zth=2 Ω, Zr=4 Ω, ZR=20 Ω','I0 = 0.3846 A','VR0 = 7.692 V'],13,PALE_BLUE,BLUE,'列車なし',BLUE)
bullets(s,4.62,2.10,4.08,3.6,['Zs = 0.5 Ω（仮定値）','Zp = 0.4878 Ω','I = 1.541 A','VR = 0.7519 V','IR = 0.03759 A','Is = 1.504 A'],13,PALE_RED,RED,'車軸短絡あり',RED)
rect(s,9.0,2.10,3.35,1.15,PALE_GREEN,GREEN,True,1.4); text(s,9.12,2.22,3.11,.40,'kV = 0.7519 / 7.692',15,GREEN,True,PP_ALIGN.CENTER); text(s,9.12,2.64,3.11,.42,'= 0.09775 ≈ 9.78 %',19,GREEN,True,PP_ALIGN.CENTER)
rect(s,9.0,3.55,3.35,.82,LIGHT,MID,True,1); text(s,9.1,3.68,3.15,.55,'全回路電流\n0.3846 → 1.541 A  ↑',13,ORANGE,True,PP_ALIGN.CENTER)
rect(s,9.0,4.55,3.35,.82,LIGHT,MID,True,1); text(s,9.1,4.68,3.15,.55,'受信器電流\n0.3846 → 0.03759 A  ↓',13,BLUE,True,PP_ALIGN.CENTER)
text(s,.85,6.06,11.35,.42,'短絡だから「電流がゼロ」ではない。短絡枝へ分流するため、受信器に現れる電圧・電流が低下する。',13,NAVY,True,PP_ALIGN.CENTER)
text(s,.85,6.55,11.35,.34,'受信しきい値の実値は一次資料未確認のため数値化しない。',11,RED,True,PP_ALIGN.CENTER)
notes(s,[JRTT,RTRI_TC,RTRI_CURRENT])

s=prs.slides.add_slide(blank); bg(s); titlebar(s,5,'枝路が増えたら、網目法・ブリッジ・漏れで整理する','R8一次 問3 / R7一次 問4 / R6一次 問6')
text(s,.75,1.25,3.55,.36,'A. 網目電流法：共有枝は差電流',14,NAVY,True)
rect(s,.9,1.85,2.15,1.45,WHITE,BLUE,False,1.6); rect(s,3.05,1.85,2.15,1.45,WHITE,PURPLE,False,1.6); ln(s,3.05,1.85,3.05,3.3,RED,3)
text(s,1.35,2.25,1.1,.38,'I₁ ↻',18,BLUE,True,PP_ALIGN.CENTER); text(s,3.65,2.25,1.1,.38,'↺ I₂',18,PURPLE,True,PP_ALIGN.CENTER); text(s,2.72,3.45,.72,.32,'Zc',12,RED,True,PP_ALIGN.CENTER)
formula(s,.78,4.05,4.65,.56,'共有枝：Zc(I₁ − I₂)',PALE_RED,RED,16)
text(s,5.72,1.25,2.95,.36,'B. ブリッジ平衡',14,NAVY,True)
ln(s,7.13,1.75,6.05,2.75,BLUE,2); ln(s,7.13,1.75,8.21,2.75,TEAL,2); ln(s,6.05,2.75,7.13,3.75,ORANGE,2); ln(s,8.21,2.75,7.13,3.75,PURPLE,2); ln(s,6.05,2.75,8.21,2.75,GRAY,1.2)
text(s,6.2,1.95,.9,.3,'Z1',11,BLUE,True); text(s,7.45,1.95,.9,.3,'Z2',11,TEAL,True); text(s,6.2,3.12,.9,.3,'Z3',11,ORANGE,True); text(s,7.45,3.12,.9,.3,'Z4',11,PURPLE,True)
formula(s,5.58,4.05,3.28,.56,'平衡：Z1·Z3 = Z2·Z4',PALE_CYAN,TEAL,14)
text(s,9.05,1.25,3.1,.36,'C. 漏れ枝：未知の並列経路',14,NAVY,True)
rect(s,9.45,1.83,2.2,.66,WHITE,GREEN,True,1.5); text(s,9.45,1.83,2.2,.66,'ZR',16,GREEN,True,PP_ALIGN.CENTER)
ln(s,9.1,2.16,9.45,2.16,GRAY,1.6); ln(s,11.65,2.16,12.0,2.16,GRAY,1.6)
ln(s,9.35,2.72,11.75,2.72,ORANGE,2); rect(s,10.0,2.46,1.12,.52,PALE_ORANGE,ORANGE,True,1.3); text(s,10.0,2.46,1.12,.52,'Zleak',12,ORANGE,True,PP_ALIGN.CENTER)
ln(s,9.35,2.16,9.35,2.72,GRAY,1.4); ln(s,11.75,2.16,11.75,2.72,GRAY,1.4)
formula(s,9.05,3.45,3.0,.56,'Zp = ZR || Zleak',PALE_ORANGE,ORANGE,15)
bullets(s,.75,5.05,11.35,1.25,['枝が少ない→直並列／ループ明瞭→網目法／接続点明瞭→節点法／受信端だけ→テブナン。','漏れ・浮遊容量は「本来ない枝路が測定結果を変える」と読む。漏れインピーダンスは仮定値であり、実設備値ではない。'],12,LIGHT,MID)
notes(s,[OFFICIAL,RTRI_SAFE,ESYS,DENO])

s=prs.slides.add_slide(blank); bg(s); titlebar(s,6,'本試験では「状態→Z→解法→受信量→検算」で処理する','固定5問・25答案要素を6枚へ接続／Topic 36・37は先取りしない')
steps=[('1 状態',BLUE),('2 複素Z',TEAL),('3 解法選択',PURPLE),('4 V・I',GREEN),('5 比較',ORANGE),('6 検算',RED)]
x=.72
for i,(lab,c) in enumerate(steps):
    rect(s,x,1.28,1.73,.64,c,c,True,0); text(s,x,1.28,1.73,.64,lab,13,WHITE,True,PP_ALIGN.CENTER)
    if i<len(steps)-1: ln(s,x+1.73,1.60,x+1.91,1.60,GRAY,1.6,True)
    x+=1.93
text(s,.74,2.20,5.75,.34,'固定過去問 → このPowerPointの接続先',14,NAVY,True)
rows=[('R8一次 理論 問3','網目法・共有枝','slide 5'),('R7一次 理論 問3','RLC・位相','slide 2'),('R7一次 理論 問4','ブリッジ平衡','slides 2 / 5'),('R6一次 理論 問6','浮遊容量・漏れ','slide 5'),('R5一次 理論 問4','テブナン等価','slide 3')]
y=2.65
for a,b,c in rows:
    rect(s,.78,y,5.62,.56,WHITE,MID,True,.8); text(s,.92,y+.05,1.98,.46,a,11,NAVY,True); text(s,2.95,y+.05,2.15,.46,b,11,INK); text(s,5.18,y+.05,1.05,.46,c,10,GRAY,True,PP_ALIGN.RIGHT); y+=.64
bullets(s,6.72,2.20,5.52,2.95,['回路解析：故障・短絡・断線・漏れで V / I がどう変わるか。','フェイルセーフ：故障時も危険側へ進まないよう設計する原則。','「受信電圧が下がれば必ず安全」「全故障で列車あり判定」は未確認実装への一般化なので書かない。'],12,PALE_RED,RED,'フェイルセーフの境界',RED)
text(s,6.85,5.40,5.22,.38,'SPEC固定7項目：7 / 7収録',13,GREEN,True,PP_ALIGN.CENTER)
text(s,6.85,5.86,5.22,.38,'固定5問・25答案要素：25 / 25 connected',13,BLUE,True,PP_ALIGN.CENTER)
text(s,.78,6.52,11.45,.30,'Topic 21：P=Tω、ω=2πN/60 は変更なし。H26二次の48.1/48.0 N·m差はπ=3.14相当の過去問固有丸め差。',10,GRAY,False,PP_ALIGN.CENTER)
notes(s,[OFFICIAL,JRTT,RTRI,RTRI_SAFE,DENO])

prs.save(out)
print(out)
