from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, Image, PageBreak
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.cidfonts import UnicodeCIDFont
from reportlab.lib import colors
from reportlab.lib.units import mm
from reportlab.lib.enums import TA_CENTER
import matplotlib.pyplot as plt
import os

BASE=os.path.dirname(__file__)
OUT=os.path.join(BASE,'30_l0_inductive_power_collection_contactless_power_transfer_explanation.pdf')
CH=os.path.join(BASE,'_tmp_charts'); os.makedirs(CH,exist_ok=True)
pdfmetrics.registerFont(UnicodeCIDFont('HeiseiKakuGo-W5'))
FONT='HeiseiKakuGo-W5'
plt.rcParams['font.family']='Noto Sans CJK JP'

def chart(path,x,ys,xlabel,ylabel,title,labels=None):
    fig=plt.figure(figsize=(5.7,2.55)); ax=fig.add_subplot(111)
    if isinstance(ys[0],(list,tuple)):
        for i,y in enumerate(ys): ax.plot(x,y,marker='o',label=labels[i])
        ax.legend(fontsize=8)
    else: ax.plot(x,ys,marker='o')
    ax.set_xlabel(xlabel,fontsize=8); ax.set_ylabel(ylabel,fontsize=8); ax.set_title(title,fontsize=9)
    ax.grid(True,alpha=.25); ax.tick_params(labelsize=7); fig.tight_layout(pad=.7)
    fig.savefig(path,dpi=170,bbox_inches='tight'); plt.close(fig)

chart(os.path.join(CH,'k_power.png'),[.1,.2,.3,.4,.5],[25.62,102.49,230.59,409.94,640.54],'結合係数 k','負荷電力 P_L [W]','教材用仮定値: 結合係数 - 伝送電力')
chart(os.path.join(CH,'load_eff.png'),[.5,1,2,4,8,16],[60.68,73.35,80.05,80.10,73.49,60.91],'負荷 R_L [Ω]','効率 η [%]','教材用仮定値: 負荷条件 - 効率')
chart(os.path.join(CH,'freq.png'),[500,750,1000,1250,1500],[[4.88,49.23,230.59,182.63,119.65],[10.79,52.98,80.10,77.28,70.96]],'周波数 f [Hz]','相対スケール','教材用仮定値: 周波数特性',['P_L [W]','η [%]'])

base=ParagraphStyle('b',fontName=FONT,fontSize=8.2,leading=11.2,spaceAfter=3)
small=ParagraphStyle('s',parent=base,fontSize=7.4,leading=9.8,spaceAfter=2)
head=ParagraphStyle('h',fontName=FONT,fontSize=12,leading=15,spaceBefore=4,spaceAfter=5)
sub=ParagraphStyle('sh',fontName=FONT,fontSize=9.2,leading=12,spaceBefore=3,spaceAfter=3)
title=ParagraphStyle('t',fontName=FONT,fontSize=17,leading=22,alignment=TA_CENTER,spaceAfter=6)
mono=ParagraphStyle('m',parent=base,fontSize=8,leading=10.5,leftIndent=6*mm,backColor=colors.HexColor('#f5f5f5'),borderPadding=3)
callout=ParagraphStyle('c',parent=base,fontSize=7.8,leading=10.3,leftIndent=3*mm,rightIndent=3*mm,backColor=colors.HexColor('#f7f7f7'),borderPadding=4)
P=lambda x,st=base: Paragraph(x,st); H=lambda x: Paragraph(x,head); S=lambda x: Paragraph(x,sub); F=lambda x: Paragraph(x,mono)

def tbl(data,widths,fs=7.0):
    cs=ParagraphStyle('cell',fontName=FONT,fontSize=fs,leading=fs+2)
    t=Table([[Paragraph(str(c),cs) for c in r] for r in data],colWidths=widths,repeatRows=1,hAlign='LEFT')
    t.setStyle(TableStyle([('GRID',(0,0),(-1,-1),.35,colors.grey),('VALIGN',(0,0),(-1,-1),'MIDDLE'),('BACKGROUND',(0,0),(-1,0),colors.HexColor('#eeeeee')),('LEFTPADDING',(0,0),(-1,-1),3),('RIGHTPADDING',(0,0),(-1,-1),3),('TOPPADDING',(0,0),(-1,-1),2),('BOTTOMPADDING',(0,0),(-1,-1),2)])); return t

st=[]
st += [P('30 L0系④ 誘導集電・非接触電力伝送',title),P('電験二種 - 相互インダクタンス / 結合回路 / 交流電力 / 効率 / 共振',ParagraphStyle('ct',parent=base,alignment=TA_CENTER,fontSize=9.3)),Spacer(1,3*mm),S('到達目標')]
for x in ['e_2=-M di_1/dt の意味・符号・単位を説明する。','k=M/√(L_1L_2)、0<=k<=1 を磁気エネルギー条件から説明する。','結合回路から I_2、反映インピーダンス、P/Q/S、力率、銅損、効率を求める。','RLC直列共振、無負荷・短絡試験、最大効率条件を固定過去問へ接続する。']: st.append(P('・'+x))
st += [Spacer(1,2*mm),S('L0系へ接続するときの事実境界'),P('JR東海の一次資料で確認できる実車事実は、超電導リニアが電磁誘導を応用した非接触の「誘導集電」を採用し、L0系改良型試験車では誘導集電方式を全面採用していること。以下の k、L、M、抵抗、周波数、伝送電力、効率、補償定数は実車真値ではなく教材用仮定値として扱う。'),P('実車真値として置かない: k / L_1,L_2 / M / コイル抵抗 / 給電周波数 / 伝送電力・効率 / ギャップ・コイル寸法 / 補償回路定数',callout),S('記号・単位'),tbl([['記号','意味','単位'],['Φ, Ψ','磁束 / 鎖交磁束','Wb / Wb・turn'],['L_1,L_2,M','自己 / 相互インダクタンス','H'],['k','結合係数','無次元'],['R_1,R_2,R_L','コイル / 負荷抵抗','Ω'],['ω=2πf','角周波数','rad/s'],['P,Q,S','有効 / 無効 / 皮相電力','W / var / VA'],['η','効率','無次元 / %']],[30*mm,75*mm,45*mm],7.2)]

st += [PageBreak(),H('1. 相互インダクタンス・結合係数・磁気回路'),S('1.1 誘導起電力'),F('Ψ_1=L_1i_1+Mi_2    Ψ_2=Mi_1+L_2i_2<br/>e_2=-d(Mi_1)/dt → M一定なら e_2=-M di_1/dt<br/>正弦定常状態: |E_2|=ωM|I_1|'),P('負号はレンツの法則による極性。大きさだけなら絶対値、極性・位相ならドット規約と電流方向を先に固定する。単位 [ωMI]=[1/s]×[H]×[A]=[V]。'),S('1.2 結合係数'),F('k=M/√(L_1L_2)<br/>W_m=1/2 L_1i_1² + 1/2 L_2i_2² + Mi_1i_2<br/>W_m>=0 → M²<=L_1L_2 → 0<=k<=1'),P('M単独では結合の強さを比較せず、√(L_1L_2) で規格化する。'),S('1.3 磁気回路から L と M を読む'),F('R_m=l/(μS)    Φ=NI/R_m<br/>L=Ψ/i=NΦ/i    M=N_2Φ_21/i_1'),P('相互Mでは全磁束でなく相手巻線へ鎖交する Φ_21 を使う。共通磁路と漏れ磁路を分ける。'),S('1.4 結合回路のフェーザ方程式'),F('V_1=(R_1+jωL_1)I_1+jωMI_2<br/>0=(R_2+R_L+jωL_2)I_2+jωMI_1<br/>Z_2=R_2+R_L+jωL_2<br/>I_2=-jωMI_1/Z_2<br/>Z_ref=(ωM)²/Z_2<br/>Z_in=R_1+jωL_1+Z_ref'),P('二次負荷は一次入力にも影響する。固定一次電流なら P∝M² が見える条件があるが、固定電源電圧へ無条件で一般化しない。')]

st += [PageBreak(),H('2. 交流電力・効率・共振'),S('2.1 交流電力と力率'),F('S=VI    P=VI cosφ    Q=VI sinφ<br/>複素電力: V I*=P+jQ<br/>純抵抗負荷: P_L=|I_2|²R_L'),P('Pは平均して負荷・損失へ移る電力、Qはリアクタンスと往復する電力、Sは容量。一次力率は Z_in の位相で決まる。'),S('2.2 教材用結合回路の損失と効率'),F('P_cu1=|I_1|²R_1    P_cu2=|I_2|²R_2<br/>P_out=|I_2|²R_L<br/>P_in=P_out+P_cu1+P_cu2<br/>η=P_out/P_in'),P('コイル抵抗だけを損失とした教材モデルであり、L0系実機総合効率ではない。'),S('2.3 直列RLC共振'),F('Z=R+j(ωL-1/(ωC))<br/>ω_0=1/√(LC),  f_0=1/(2π√(LC))<br/>共振時 Z=R, I_0=V/R, 力率=1<br/>Q=ω_0L/R=1/(ω_0CR)<br/>V_L=V_C=QV'),P('共振時に0になるのは合成リアクタンスで、L/C各端子電圧ではない。'),S('2.4 二次側直列補償の教材モデル'),F('Z_2=R_2+R_L+j(ωL_2-1/(ωC_2))<br/>I_2=-jωMI_1/Z_2<br/>P_L=|I_2|²R_L'),P('ω=1/√(L_2C_2) では二次リアクタンスが0。固定一次電流・他条件固定なら P_L∝k²。'),S('解法アルゴリズム'),tbl([['手順','内容'],['1','L_1,L_2,M,k の与条件を確認'],['2','相互誘導なら e=-Mdi/dt または jωM'],['3','磁気回路は全磁束と相手巻線へ鎖交する磁束を分ける'],['4','Zを作り、共振なら ωL=1/(ωC) を確認'],['5','I_2→P_L→損失→η の順で計算'],['6','mH→H、μF→F、kHz→Hz'],['7','k<=1、0<η<=1、電力収支を検算']],[13*mm,145*mm],7.1)]

st += [PageBreak(),H('3. 指定3可視化 - すべて教材用仮定値'),P('共通条件: L_1=2.0 mH, L_2=1.5 mH, R_1=0.40 Ω, R_2=0.30 Ω, f=1.000 kHz, I_1=10.0 A rms。二次側は1 kHzで直列共振。C_2=16.8869 μF。実機値ではない。',callout),Image(os.path.join(CH,'k_power.png'),width=174*mm,height=72*mm),P('固定一次電流・共振では P_L∝k²。固定電源電圧へは一般化しない。',small),Image(os.path.join(CH,'load_eff.png'),width=174*mm,height=72*mm),P('k=0.30。負荷を極端に小さくしても大きくしても効率は低下し、中間に最大値がある。R_L,opt=約2.84 Ω。',small)]

st += [PageBreak(),H('4. 周波数特性・変圧器損失'),Image(os.path.join(CH,'freq.png'),width=174*mm,height=72*mm),P('k=0.30, R_L=4.0 Ω, I_1=10.0 A rms, C_2=16.8869 μF。この教材モデルでは1 kHz付近で二次リアクタンスが相殺される。実機給電周波数を意味しない。',small),S('4.1 無負荷・短絡試験'),F('無負荷試験: P_0≒P_i  （無負荷電流が小さく一次銅損を無視）<br/>短絡試験: P_sc≒P_c,n（低電圧で磁束が小さく鉄損を無視）'),S('4.2 負荷率と最大効率'),F('P_c(α)=α²P_c,n<br/>最大効率条件: P_i=α²P_c,n<br/>α_max=√(P_i/P_c,n)<br/>P_out=αS_n cosφ<br/>η=P_out/(P_out+P_i+α²P_c,n)'),P('銅損は負荷電流の二乗に比例。α をそのまま掛けない。'),S('4.3 周波数と鉄損'),P('磁束密度 B_m 一定では、ヒステリシス損 P_h∝f、渦電流損 P_e∝f²。電圧一定で周波数だけ変えると B_m も変わるので条件を先に読む。'),S('4.4 頻出ミス'),tbl([['誤り'],['M と k を同じ量とする'],['k=M/(L_1L_2) として平方根を落とす'],['ドット規約なしで相互項符号だけ暗記'],['二次負荷変更後も一次電流不変と無条件に仮定'],['P=VI として力率を落とす'],['ηの分母から一次銅損を落とす'],['銅損を α に比例させ α² を落とす'],['無負荷試験と短絡試験の損失を逆にする'],['教材用1 kHzや仮定kをL0系実機値とみなす']],[165*mm],7.0)]

st += [PageBreak(),H('5. 3段階例題'),S('5.1 基礎: M・k・誘導起電力'),P('教材用: L_1=8.0 mH, L_2=18 mH, M=6.0 mH。'),F('k=6.0/√(8.0×18)=0.500<br/>50 Hz, I_1=2.0 A rms なら |E_2|=2π×50×0.006×2.0=3.77 V'),P('M=6 mH < √(8×18) mH=12 mH なので k=0.5 は成立範囲内。'),S('5.2 本試験標準: 結合回路の出力・効率'),P('教材用: L_1=2.0 mH, L_2=1.5 mH, R_1=0.40 Ω, R_2=0.30 Ω, R_L=4.0 Ω, f=1.000 kHz, k=0.30, I_1=10.0 A rms。二次を直列共振。'),F('M=0.5196 mH    C_2=16.8869 μF<br/>Z_2=4.30 Ω<br/>|I_2|=ωMI_1/(R_2+R_L)=7.593 A<br/>P_L=230.59 W<br/>P_cu1=40.00 W, P_cu2=17.29 W<br/>η=230.59/(230.59+40.00+17.29)=0.801 (80.1%)'),S('5.3 複合・二次接続: 変圧器の最大効率'),P('教材用: S_n=100 kVA, P_i=500 W, P_c,n=800 W。'),F('α_max=√(500/800)=0.7906<br/>α=0.60, cosφ=0.80:<br/>P_out=0.60×100 kVA×0.80=48.0 kW<br/>P_c=0.60²×800=288 W<br/>η=48000/(48000+500+288)=0.98385 (98.4%)'),P('二次試験では「鉄損一定」「銅損は負荷電流二乗」を文章から抜き、最大効率条件を式で示してから代入する。')]

st += [PageBreak(),H('6. 過去問接続・公式まとめ'),tbl([['固定過去問','答案要素','接続'],['R8 一次「理論」問5','5','直列共振 / 共振電流 / Q / L,C端子電圧 / 共振条件'],['R7 一次「理論」問2','5','相互M / 誘導起電力 / 磁気エネルギー / M²<=L_1L_2'],['H30 一次「理論」問2','5','磁気回路 / 自己・相互L / 磁束分配'],['H30 一次「機械」問5','5','無負荷・短絡試験 / 鉄損 / 銅損 / 周波数依存 / 効率'],['R2 二次「機械・制御」問2','5','P=VIcosφ / 負荷率 / 損失 / 最大効率 / 効率計算']],[46*mm,20*mm,101*mm],6.8),P('接続数: 25 / 25。固定過去問の数値・正答は再掲せず、同じ解法を教材用数値で再構成している。',callout),S('公式まとめ'),tbl([['式'],['e_2=-M di_1/dt'],['|E_2|=ωM|I_1|'],['k=M/√(L_1L_2)'],['M²<=L_1L_2'],['I_2=-jωMI_1/Z_2'],['Z_ref=(ωM)²/Z_2'],['P=VIcosφ'],['Q=VIsinφ'],['P_L=|I_2|²R_L'],['η=P_out/P_in'],['ω_0=1/√(LC)'],['Q=ω_0L/R'],['P_c(α)=α²P_c,n'],['α_max=√(P_i/P_c,n)']],[160*mm],7.4),Spacer(1,2*mm),S('範囲境界'),P('固定EXAM_ALIGNMENT変更0件。未確認L0系実車値の真値化0件。Topic 21 H26二次問1(4)の 48.1 / 48.0 N・m は π=3.14 相当の過去問固有丸め差として維持し、一般式 P=Tω、ω=2πN/60 は変更しない。',callout)]

def footer(c,d):
    c.saveState(); c.setFont(FONT,6.7); c.drawString(14*mm,8*mm,'Topic 30 L0系④ 誘導集電・非接触電力伝送 - source準拠'); c.drawRightString(A4[0]-14*mm,8*mm,str(d.page)); c.restoreState()

SimpleDocTemplate(OUT,pagesize=A4,leftMargin=14*mm,rightMargin=14*mm,topMargin=12*mm,bottomMargin=13*mm,title='Topic 30 L0系④ 誘導集電・非接触電力伝送').build(st,onFirstPage=footer,onLaterPages=footer)
print(OUT)
