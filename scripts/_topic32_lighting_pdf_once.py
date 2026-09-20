from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.cidfonts import UnicodeCIDFont
from reportlab.lib.colors import HexColor

OUT='denken-shinkansen/05_shinkansen_vehicle_2/topics/32_lighting_design/32_lighting_design_explanation.pdf'
pdfmetrics.registerFont(UnicodeCIDFont('HeiseiKakuGo-W5'))
pdfmetrics.registerFont(UnicodeCIDFont('HeiseiMin-W3'))
PAGE_W, PAGE_H=A4

def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont('HeiseiKakuGo-W5', 7.5)
    canvas.setFillColor(colors.grey)
    canvas.drawString(16*mm, 10*mm, '電験二種 × 新幹線車両  Topic 32 照明設計')
    canvas.drawRightString(PAGE_W-16*mm, 10*mm, f'{doc.page}')
    canvas.restoreState()

doc=SimpleDocTemplate(OUT,pagesize=A4,rightMargin=16*mm,leftMargin=16*mm,topMargin=15*mm,bottomMargin=16*mm,title='Topic 32 照明設計',author='cureflash/homepage')
base='HeiseiKakuGo-W5'; serif='HeiseiMin-W3'
styles=getSampleStyleSheet()
styles.add(ParagraphStyle(name='JPTitle',fontName=base,fontSize=18,leading=24,spaceAfter=8,alignment=TA_LEFT,textColor=HexColor('#111111')))
styles.add(ParagraphStyle(name='JPSub',fontName=base,fontSize=11,leading=16,spaceAfter=8,textColor=HexColor('#444444')))
styles.add(ParagraphStyle(name='H1JP',fontName=base,fontSize=14,leading=19,spaceBefore=5,spaceAfter=7,textColor=HexColor('#111111')))
styles.add(ParagraphStyle(name='H2JP',fontName=base,fontSize=11.5,leading=16,spaceBefore=4,spaceAfter=4,textColor=HexColor('#222222')))
styles.add(ParagraphStyle(name='BodyJP',fontName=serif,fontSize=9.2,leading=14.0,spaceAfter=4.5,textColor=HexColor('#111111')))
styles.add(ParagraphStyle(name='Formula',fontName=base,fontSize=10,leading=14,spaceBefore=3,spaceAfter=5,leftIndent=7*mm,backColor=HexColor('#f3f3f3'),borderPadding=4))
styles.add(ParagraphStyle(name='Callout',fontName=base,fontSize=8.8,leading=13,spaceBefore=4,spaceAfter=5,leftIndent=4*mm,rightIndent=4*mm,backColor=HexColor('#f7f7f7'),borderColor=HexColor('#999999'),borderWidth=0.5,borderPadding=5))
P=lambda txt,sty='BodyJP': Paragraph(txt,styles[sty]); F=lambda txt: Paragraph(txt,styles['Formula']); H1=lambda txt: Paragraph(txt,styles['H1JP']); H2=lambda txt: Paragraph(txt,styles['H2JP']); C=lambda txt: Paragraph(txt,styles['Callout'])
def bullet(txt): return P('・'+txt,'BodyJP')
def tbl(rows,widths=None,fs=7.6):
    rr=[]
    for r in rows:
        rr.append([Paragraph(str(c),ParagraphStyle(name=f't{len(rr)}{i}',fontName=base,fontSize=fs,leading=fs*1.45,textColor=colors.black)) for i,c in enumerate(r)])
    t=Table(rr,colWidths=widths,repeatRows=1,hAlign='LEFT')
    t.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),HexColor('#e8e8e8')),('GRID',(0,0),(-1,-1),0.35,HexColor('#999999')),('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),4),('RIGHTPADDING',(0,0),(-1,-1),4),('TOPPADDING',(0,0),(-1,-1),3),('BOTTOMPADDING',(0,0),(-1,-1),3)]))
    return t

story=[]
story += [P('Topic 32  照明設計','JPTitle'),P('第二種電気主任技術者試験・一次「機械」対応','JPSub')]
story += [C('固定EXAM_ALIGNMENT: R8 問7 / R7 問7 / R6 問6 / R4 問5 / R3 問6。一次5問・30答案要素。二次「機械・制御」は公式試験範囲に照明を含まないため対象外。')]
story += [H1('1. 何を区別すれば解けるか')]
for x in ['光束 Phi [lm]: 光として評価した総量。','光度 I [cd]: ある方向への、単位立体角当たりの光束。','照度 E [lx]: 面へ入射する、単位面積当たりの光束。1 lx = 1 lm/m2。','配光: I(theta) の方向分布。','照明率 U: 光源・器具の光束のうち被照面へ有効に届く割合。','保守率 M: 経時的な光束低下・汚れを設計へ織り込む係数。','所要灯数 N: 光束法で求め、要求照度を下回らないよう切り上げる。','エネルギー消費効率: 全光束/消費電力 [lm/W]。無次元効率や照明率Uとは別。']:
    story.append(bullet(x))
story += [H1('2. 測光量と基本式'),F('I = dPhi/dOmega    /    E = dPhi/dA'),P('等方点光源では全立体角が 4pi sr なので I = Phi/(4pi)。点光源から距離 r の面へ、面法線との角度 theta で入射する場合は E = I cos(theta) / r^2。直下なら cos(theta)=1。')]
story += [C('R8問7は、光束・光度・照度に加え、光束発散度 M [lm/m2] と輝度 L [cd/m2] の定義・単位も区別する。均等拡散面では M = pi L。')]
story.append(PageBreak())

story += [H1('3. 配光から光束・照度へ'),P('軸対称配光を I(theta) とすると、微小立体角は dOmega = 2pi sin(theta)dtheta。したがって全光束は次式で求める。'),F('Phi = 2pi ∫ I(theta) sin(theta) dtheta'),P('積分範囲は実際の配光範囲に合わせる。光度 [cd] をそのまま光束 [lm] とみなさないこと、積分で sin(theta) を落とさないことが重要。')]
story += [H2('水平面照度'),P('光源高さ H、水平距離 D の点では r = sqrt(H^2 + D^2)、cos(theta)=H/r。'),F('E_h = H I / (H^2 + D^2)^(3/2)')]
story += [H2('固定過去問ブリッジ: R3グローブ'),P('入射光束 Fp、内面反射率 rho、透過率 tau の簡略モデルで多重反射が幾何級数になるとき'),F('Fs = tau Fp / (1-rho)'),P('外面から全方向へ一様に放射する仮定なら I=Fs/(4pi)。半径 rg の球面で光束発散度が一様なら M=Fs/(4pi rg^2)、均等拡散面なら L=M/pi。これはR3固定問題の条件に限定して使う。'),C('頻出ミス: Hを斜距離rの代わりに使う / cdとlmを混同する / 余弦則を落とす / 等方でない光源へ I=Phi/(4pi) を使う。')]
story.append(PageBreak())

story += [H1('4. 光束法 - 平均照度から所要灯数を求める'),F('E = Phi N U M / A    <=>    N = E A / (Phi U M)')]
story += [tbl([['記号','意味','単位・注意'],['E','平均照度','lx'],['Phi','1光源または1器具の光束','lm。問題文の定義を確認'],['N','光源数または器具数','Phiの定義と対応'],['U','照明率','無次元。配光・室形状・反射率等の影響'],['M','保守率','無次元。経時低下を反映'],['A','被照面積','m2']],[22*mm,86*mm,66*mm],7.7),Spacer(1,4*mm),P('照明率Uは「どれだけ有効に届くか」、保守率Mは「経時後にどれだけ維持されるか」。意味を入れ替えない。Nが整数でなければ不足しない側へ切り上げる。器具1台に複数光源が入る場合は、光源数と器具数の換算を最後に確認する。'),H2('R4一次「機械」問5型'),P('7 m×14 mの室、1器具2灯・各3500 lm、U=0.55、M=0.74、目標750 lxなら、A=98 m2、1器具当たり光束は7000 lm。'),F('N = 750×98 / (7000×0.55×0.74) = 25.798... -> 26 器具'),C('「切り上げ」は丸め規則ではなく、要求照度以上という設計条件から決まる。')]
story.append(PageBreak())

story += [H1('5. 消費電力と lm/W'),P('照明でR7問7が問うエネルギー消費効率は、全光束を消費電力で割った値。'),F('eta_e = Phi / P   [lm/W]'),P('R7のLEDランプは Phi=810 lm、P=7.3 W なので 810/7.3 = 110.96... -> 111 lm/W。lm/Wは無次元の変換効率ではなく、光束法の照明率Uとも別の量である。'),H2('R7固定問題で必要な最小周辺知識'),bullet('色温度: 光源と等しい光色をもつ黒体の絶対温度 [K]。黒体軌跡から外れる場合は相関色温度。'),bullet('定格ランプ寿命: 問題文の定義では、定格光束の70%以上を維持している期間。'),bullet('直下照度: 配光図から鉛直下向きの光度を読み、E=I/r^2。R7では約16.6 lx。'),H1('6. 3段階例題 1 - 等方点光源'),P('全光束800 lmの等方点光源。光度と、直下2.0 mの水平面照度を求める。'),F('I = 800/(4pi) = 63.66 cd'),F('E = 63.66 / 2.0^2 = 15.92 lx'),P('検算: 距離を2倍にすると照度は1/4。照度の最終単位は lx = lm/m2。')]
story.append(PageBreak())

story += [H1('7. 3段階例題 2 - 光束法'),P('面積40 m2、目標平均照度500 lx、1光源3200 lm、U=0.60、M=0.80、1器具2光源。数値は教材用仮定値。'),F('N = 500×40 / (3200×0.60×0.80) = 13.02...'),P('必要光源数は14本へ切り上げ。1器具2光源なので必要器具数は7台。13本へ切り下げると要求照度を満たせない。'),H1('8. 3段階例題 3 - 配光・全光束・効率・照度'),P('下半球だけへ光を出す軸対称光源 I(theta)=300 cos(theta) [cd] (0<=theta<=pi/2)、消費電力10 W。数値は教材用仮定モデル。'),F('Phi = 2pi ∫[0..pi/2] 300 cos(theta) sin(theta) dtheta = 300pi = 942.48 lm'),F('eta_e = 942.48/10 = 94.25 lm/W'),F('直下3.0 m: E = I(0)/3.0^2 = 300/9 = 33.33 lx'),C('配光積分では sin(theta) を落とさない。lm/Wと照明率Uを混同しない。')]
story.append(PageBreak())

story += [H1('9. 固定5問・30答案要素への接続')]
story += [tbl([['固定過去問','答案要素','教材接続'],['R8 一次「機械」問7','10','光束・光度・照度、光束発散度、輝度の定義と単位'],['R7 一次「機械」問7','5','lm/W、配光積分、黒体、70%寿命基準、直下照度'],['R6 一次「機械」問6','5','標準比視感度、I=Phi/(4pi)、逆二乗則、余弦則'],['R4 一次「機械」問5','5','光束法、照明率、保守率、必要器具数'],['R3 一次「機械」問6','5','多重反射、光度、光束発散度、水平面照度、輝度']],[41*mm,20*mm,113*mm],7.3),Spacer(1,4*mm),C('一次 30/30 connected。二次「機械・制御」は公式試験範囲上、照明を含まないため対象外。件数合わせで二次問題を流用しない。'),H1('10. SPEC固定9項目')]
story += [tbl([['項目','対応内容'],['光束','lm、測光量、配光積分・光束法'],['光度','cd、単位立体角、等方点光源'],['照度','lx、逆二乗則・余弦則'],['配光','I(theta)、軸対称積分'],['照明率','U、有効到達割合'],['保守率','M、経時低下'],['所要灯数','光束法、切り上げ'],['消費電力','P [W]'],['効率','Phi/P [lm/W]']],[35*mm,139*mm],7.6)]
story.append(PageBreak())

story += [H1('11. 解法チェックリスト')]
for x in ['求める量と単位を先に確認する: lm / cd / lx / lm/W。','点光源・面光源・配光の仮定を確認する。','点光源照度は E=I cos(theta)/r^2 を使える条件か確認する。','配光から全光束を出すなら立体角積分を使う。','平均照度・所要灯数なら光束法 E=PhiNUM/A。','UとMの意味を区別する。','Nが光源数か器具数かを確認し、不足側へ丸めない。','消費電力が与えられたら Phi/P [lm/W] を確認する。','実車の器具方式・灯数・定格・照度・消費電力・効率は一次資料なしに真値化しない。']:
    story.append(bullet(x))
story += [H1('12. Topic 21 H26二次 問1(4)の継承注記'),P('48.1 N・m / 48.0 N・m の差は、公式標準解答が pi=3.14 相当の数値処理を用いたことによる過去問固有の丸め差として扱う。一般式 P=T omega、omega=2pi N/60 は変更しない。本Topicからこの一般式へ変更を加えない。'),H1('13. 範囲境界'),P('R7の色温度・寿命、R8の光束発散度・輝度、R3の多重反射は固定過去問を30答案要素すべて解くための最小ブリッジであり、Topic 32のSPEC固定9項目を増やさない。'),P('出典: 一般財団法人 電気技術者試験センター 第二種電気主任技術者試験 公式過去問題・公式解答（固定EXAM_ALIGNMENT「32_lighting_design.md」にURLを集約）。'),C('QA対象: 固定5問30答案要素 / SPEC 9項目 / 3段階例題 / 数式・数値 / ページ端・文字化け。')]

doc.build(story,onFirstPage=footer,onLaterPages=footer)
print(OUT)
