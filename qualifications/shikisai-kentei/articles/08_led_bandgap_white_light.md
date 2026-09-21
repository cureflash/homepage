# LEDはなぜ白く光るのか――半導体のバンドギャップと加法混色

色彩検定3級では「照明と色の見え方」「混色」「加法混色」を扱い、2級では「光の性質と色」「照明の表し方」「ランプの種類」「LED」を扱う。この記事では、LEDを単なる「省エネ照明」としてではなく、半導体中の電子と正孔が再結合して光子を放出する素子として捉え、発光波長、発光効率、白色化、分光分布、加法混色、測光までを物理学からつなげる。

大学レベルでは、LED照明を

$$
\text{電圧・電流}
\rightarrow
\text{キャリア注入}
\rightarrow
\text{再結合}
\rightarrow
\text{光子}
\rightarrow
\text{分光分布}
\rightarrow
\text{測色・測光}
\rightarrow
\text{色と明るさ}
$$

という因果関係として読む。

## 1　LEDは電気を直接、光へ変える

LEDは Light Emitting Diode、発光ダイオードである。基本構造はp型半導体とn型半導体を接合したpn接合である。

n型半導体では電子が多数キャリア、p型半導体では正孔が多数キャリアである。pn接合へ順方向電圧を加えると接合部の電位障壁が低くなり、n側から電子、p側から正孔が活性層へ注入される。

理想ダイオードの電流は

$$
I=I_s\left(\exp\frac{qV}{nk_{\rm B}T}-1\right)
$$

と表せる。

ここで

- $I_s$：逆方向飽和電流
- $q$：電気素量
- $V$：印加電圧
- $n$：理想係数
- $k_{\rm B}$：Boltzmann定数
- $T$：絶対温度

である。

順方向電圧を上げるとキャリア注入が急激に増え、活性層で電子と正孔が再結合する。LEDでは、その一部が光子放出を伴う放射再結合になる。

ただし「順方向電圧そのものが光子エネルギーになる」と考えるのは正確ではない。電圧はキャリアを注入するための電気化学ポテンシャル差を与え、実際の光子エネルギーは半導体のバンド構造と電子・正孔の状態で決まる。

## 2　光の色はバンドギャップで決まる

半導体では、電子が存在できるエネルギー帯として価電子帯と伝導帯があり、その間に禁制帯、すなわちバンドギャップ $E_g$ がある。

伝導帯の電子が価電子帯の正孔と放射再結合すると、エネルギー差に対応する光子が放出される。単純化すれば

$$
E_{\rm photon}\approx E_g
$$

である。

光子エネルギーは

$$
E_{\rm photon}=h\nu=\frac{hc}{\lambda}
$$

なので、

$$
\boxed{
\lambda\approx\frac{hc}{E_g}
}
$$

となる。

実用上は

$$
\boxed{
\lambda\,[\mathrm{nm}]\approx\frac{1240}{E_g\,[\mathrm{eV}]}
}
$$

と書ける。

例えば450 nm付近の青色光なら

$$
E_g\approx\frac{1240}{450}\approx2.76\ \mathrm{eV}
$$

である。

実際の発光スペクトルには有限の幅がある。電子・正孔は単一のエネルギーだけを占めるわけではなく、温度、量子井戸の状態密度、組成ゆらぎなどによって再結合エネルギーに分布が生じるからである。それでも発光ピークを決める第一のエネルギースケールが $E_g$ であることは変わらない。

## 3　なぜシリコンでは明るいLEDを作りにくいのか――直接遷移と間接遷移

結晶中の電子状態はエネルギー $E$ だけでなく結晶波数 $k$ でも区別される。光子の運動量は可視光の電子遷移で問題になる結晶運動量に比べて小さいため、光学遷移では電子の $k$ がほぼ保存される。

GaNやInGaNのような直接遷移型半導体では、伝導帯の底と価電子帯の頂上がほぼ同じ $k$ にある。そのため

$$
\text{電子}+\text{正孔}
\rightarrow
\text{光子}
$$

という遷移だけでエネルギーと結晶運動量の保存条件を満たしやすい。

一方、Siのような間接遷移型半導体では、伝導帯の底と価電子帯の頂上の $k$ がずれている。再結合にはフォノンによる結晶運動量の受け渡しも必要になり、放射再結合の確率が低くなる。

したがって高効率LEDには、単に「半導体であること」ではなく、発光に適したバンド構造が必要になる。

## 4　青色LEDではGaN系半導体が重要だった

効率的な青色LEDにはGaN系材料が用いられる。GaNは広いバンドギャップを持ち、InGaNとの混晶によって発光波長を調整できる。

In$_x$Ga$_{1-x}$Nのバンドギャップは、概念的には

$$
E_g(x)
\approx
(1-x)E_g(\mathrm{GaN})
+xE_g(\mathrm{InN})
-bx(1-x)
$$

と表される。

$b$ はbowing parameterであり、混晶のバンドギャップが組成に対して単純な直線補間にならないことを表す。

In組成を変えると $E_g$ が変わり、

$$
E_g
\rightarrow
E_{\rm photon}
\rightarrow
\lambda
$$

の関係を通じて発光色が変わる。

実際の高輝度LEDではInGaN量子井戸を活性層として用い、電子と正孔を薄い領域へ閉じ込めて再結合確率を高める。

2014年のノーベル物理学賞は、赤崎勇・天野浩・中村修二に「高輝度で省エネルギーな白色光源を可能にした高効率青色LEDの発明」に対して授与された。青色が重要だったのは三原色の一つがそろったからだけではない。高エネルギーの青色光を、蛍光体によってより低エネルギーの緑・黄・赤成分へ変換できるようになり、実用的な白色光源を作れるようになったからである。

## 5　「電子と正孔が再結合する」だけでは効率は決まらない

注入された電子と正孔がすべて光になるわけではない。欠陥を介した非放射再結合や、高キャリア密度で増える非放射過程も競合する。

活性層で電子密度と正孔密度が同程度で $n\approx p$ とみなせる場合、再結合速度を近似的に

$$
R_{\rm tot}=An+Bn^2+Cn^3
$$

と書くABCモデルがよく使われる。

- $An$：欠陥準位を介したShockley–Read–Hall型の非放射再結合
- $Bn^2$：電子・正孔の放射再結合
- $Cn^3$：Auger再結合など高密度で強くなる損失をまとめた項

と解釈できる。

この単純化では内部量子効率は

$$
\boxed{
\eta_{\rm IQE}
=\frac{Bn^2}{An+Bn^2+Cn^3}
}
$$

である。

低い注入では $A$ 項、高い注入では $C$ 項やキャリア漏れなどが相対的に効きやすい。このためLEDの効率は電流を増やせば単調に上がるとは限らず、高電流密度で効率が低下する「efficiency droop」が起こりうる。実デバイスのdroopには複数の機構が関与するため、ABCモデルは有用な近似であって唯一の微視的説明ではない。

さらに、内部で生まれた光子がすべて外部へ出るわけでもない。外部量子効率は概念的に

$$
\boxed{
\eta_{\rm EQE}
=\eta_{\rm inj}\,\eta_{\rm IQE}\,\eta_{\rm ext}
}
$$

と分解できる。

ここで $\eta_{\rm inj}$ はキャリア注入効率、$\eta_{\rm ext}$ は光取り出し効率である。半導体は屈折率が高いため、全反射によって内部に光が閉じ込められやすい。表面加工、反射層、封止形状などの光学設計が重要になるのはこのためである。

## 6　「白色LED」という単一の白い発光物質があるわけではない

LEDは本来、比較的狭い波長域で発光する。一般照明に必要な白色は、複数波長の光を組み合わせて作る。

代表的な方式は

1. 青色LED＋蛍光体による波長変換
2. 赤・緑・青など複数LEDの加法混色
3. 波長変換型LEDと単色LEDを組み合わせるハイブリッド方式

である。

一般照明では、青色LEDに蛍光体を組み合わせるphosphor-converted LED、pc-LEDが広く使われる。

## 7　青色LED＋蛍光体で白色になる仕組み

青色LEDから出た光の一部を蛍光体が吸収すると、蛍光体中の電子が高いエネルギー状態へ励起される。その後、格子振動などへ一部のエネルギーを渡してから光を再放出する。

したがって一般に

$$
E_{\rm emitted}<E_{\rm absorbed}
$$

であり、波長では

$$
\lambda_{\rm emitted}>\lambda_{\rm absorbed}
$$

となる。この長波長側へのずれをStokes shiftという。

蛍光体の量子収率を $\eta_q$、励起波長を $\lambda_{\rm exc}$、平均発光波長を $\lambda_{\rm em}$ とする。吸収された1光子から最大1光子が出る単純な場合、光パワー変換の上限は

$$
\frac{P_{\rm em}}{P_{\rm abs}}
\lesssim
\eta_q
\frac{h\nu_{\rm em}}{h\nu_{\rm exc}}
=
\eta_q
\frac{\lambda_{\rm exc}}{\lambda_{\rm em}}
$$

となる。

$\lambda_{\rm em}>\lambda_{\rm exc}$ なので、量子収率が1でもエネルギーの一部は熱などへ移る。これが波長変換に必然的に伴うStokes損失である。

白色LEDの分光分布は概念的に

$$
S_{\rm white}(\lambda)
=
aS_{\rm blue}(\lambda)
+bS_{\rm phosphor}(\lambda)
$$

と表せる。

青色LEDの比較的鋭いピークと、蛍光体の黄～赤側へ広がる発光帯を足し合わせ、人間の三色型色覚に対して白色となる三刺激値を作る。

人間はスペクトルそのものを直接見ているわけではない。異なるスペクトルでも三刺激値が一致すれば同じ色に見えることがある。これはメタメリズムである。

つまり白色LEDは「太陽光と同じスペクトルだから白い」のではなく、人間の色覚に対して白と等色するように分光分布を設計した光源である。

## 8　加法混色は「独立な光の分光パワーを足す」こと

赤、緑、青のLEDを同じ場所に重ねて照射すると、互いに非干渉な通常の光源では時間平均した分光放射は

$$
S(\lambda)
=
aS_R(\lambda)+bS_G(\lambda)+cS_B(\lambda)
$$

となる。

ここで $a,b,c$ は各LEDの強度である。

CIE XYZ三刺激値は分光分布に対して線形なので、

$$
\begin{pmatrix}
X\\Y\\Z
\end{pmatrix}
=
a
\begin{pmatrix}
X_R\\Y_R\\Z_R
\end{pmatrix}
+b
\begin{pmatrix}
X_G\\Y_G\\Z_G
\end{pmatrix}
+c
\begin{pmatrix}
X_B\\Y_B\\Z_B
\end{pmatrix}
$$

と書ける。

色彩検定で学ぶ「赤＋緑＝黄」「緑＋青＝シアン」「青＋赤＝マゼンタ」「赤＋緑＋青＝白」は、適切に選んだ三原色を一定条件で加えたときの知覚的な関係である。その背後には

$$
\text{分光分布の線形結合}
\rightarrow
\text{三刺激値の線形結合}
\rightarrow
\text{色知覚}
$$

という数学的構造がある。

## 9　RGBの3本だけでも白に見えるが、物体色の見え方は同じとは限らない

RGB LEDを調整すれば白色点を作ることはできる。しかし、光源そのものが白く見えることと、その光で照らした物体が自然に見えることは別問題である。

ある物体の分光反射率を $R(\lambda)$、照明の分光分布を $S(\lambda)$ とすると、眼へ届く反射光は

$$
L(\lambda)=S(\lambda)R(\lambda)
$$

で決まる。

RGBの狭帯域光源では、光エネルギーがほとんど存在しない波長域が生じる。その波長域で反射率に特徴を持つ物体は、昼光や広帯域光源の下とは異なる色に見える可能性がある。

したがって照明には

- 光源そのものの色
- その光源で照らした物体の色再現

という別の問題がある。

白色LEDでは、蛍光体の発光帯を広げたり赤色成分を加えたりして、色再現性と効率のバランスを取る。

## 10　LEDの分光分布からXYZを計算できる

LED光源の分光分布を $S(\lambda)$ とすると、三刺激値は

$$
X=k\int S(\lambda)\bar{x}(\lambda)\,d\lambda
$$

$$
Y=k\int S(\lambda)\bar{y}(\lambda)\,d\lambda
$$

$$
Z=k\int S(\lambda)\bar{z}(\lambda)\,d\lambda
$$

で求められる。

さらに

$$
x=\frac{X}{X+Y+Z},\qquad
y=\frac{Y}{X+Y+Z}
$$

とすれば色度座標が得られる。

同じ「5000 Kの白色LED」であっても分光分布が同じとは限らない。色度が近ければ同程度の相関色温度を持てるが、青ピークの高さ、蛍光体帯域の形、赤成分などは製品ごとに異なりうる。

したがって相関色温度だけでは光源の分光特性を完全には記述できない。

## 11　「効率」には量子効率・電力効率・視覚効率がある

LEDでは「効率」という言葉を一つにまとめると混乱する。

まず、電気入力に対してどれだけ光パワーが外へ出たかを示すwall-plug efficiencyは

$$
\boxed{
\eta_{\rm WPE}=\frac{P_{\rm opt}}{VI}
}
$$

である。

ほぼ単色のLEDで、1秒あたりに注入される電子数が $I/q$、そのうち外部へ出る光子の割合が $\eta_{\rm EQE}$ なら

$$
P_{\rm opt}
\approx
\eta_{\rm EQE}\frac{I}{q}h\nu
$$

なので、

$$
\boxed{
\eta_{\rm WPE}
\approx
\eta_{\rm EQE}\frac{h\nu}{qV}
}
$$

となる。

この式は、量子効率が高いだけでなく、注入に必要な電圧と光子エネルギーの関係も電力効率を左右することを示している。

次に、人間が感じる明るさまで含めると測光になる。明所視の標準分光視感効率 $V(\lambda)$ を使うと、分光放射束から光束は

$$
\Phi_v
=683\ \mathrm{lm/W}
\int \Phi_{e,\lambda}(\lambda)V(\lambda)\,d\lambda
$$

で求められる。

光源の総放射パワーを $P_{\rm opt}$ とすると、放射の視感効率は

$$
K_{\rm r}
=
683
\frac{\int \Phi_{e,\lambda}(\lambda)V(\lambda)\,d\lambda}
{\int \Phi_{e,\lambda}(\lambda)\,d\lambda}
\quad [\mathrm{lm/W_{opt}}]
$$

である。

したがってLEDの電気入力1 Wあたりの光束、すなわち発光効率は概念的に

$$
\boxed{
\frac{\Phi_v}{P_{\rm elec}}
=
\eta_{\rm WPE}\,K_{\rm r}
}
$$

と分解できる。

ここで重要なのは、電気を光へ変える効率と、その光が人間の眼にどれだけ明るく見えるかは別であるという点である。青や深赤に電力が偏れば、同じ光パワーでもlm/Wは低くなりやすい。一方で視感効率だけを追求してスペクトルを極端に狭くすると、物体色の再現性や白色光としての品質を損なう。

## 12　なぜ青色LEDが白色照明の鍵だったのか

青色光子は赤色光子よりエネルギーが高い。

例えば

$$
E_{450}\approx\frac{1240}{450}\approx2.76\ \mathrm{eV}
$$

$$
E_{620}\approx\frac{1240}{620}\approx2.00\ \mathrm{eV}
$$

である。

蛍光体では高エネルギー光子を吸収し、損失を伴いながら低エネルギー光子へ変換できる。そのため青色LEDを励起源にすれば、緑・黄・赤側へ広い発光を作れる。

逆に、赤色光子だけから通常の蛍光体で青色光子を大量に作るにはエネルギーが不足する。

したがって高効率青色LEDは

$$
\text{青}
\rightarrow
\text{より長波長側へ変換}
\rightarrow
\text{可視域を広く覆う}
\rightarrow
\text{白色照明}
$$

という実用的な経路を可能にした。

## 13　LEDの色は温度でずれる――バンドギャップの温度依存

LEDでは、投入した電力のすべてが光になるわけではない。非放射再結合、直列抵抗、蛍光体でのStokes損失などは熱へ回り、活性層の接合温度 $T_j$ を上げる。この温度上昇は効率だけでなく発光スペクトルにも影響する。

多くの半導体では、温度上昇に伴う格子膨張と電子‐格子相互作用によってバンドギャップが小さくなる。その経験式としてVarshni式がよく用いられる。

$$
\boxed{
E_g(T)=E_g(0)-\frac{\alpha T^2}{T+\beta}
}
$$

ここで $\alpha,\beta$ は材料に依存する定数である。微分すると

$$
\frac{dE_g}{dT}
=-\alpha\frac{T(T+2\beta)}{(T+\beta)^2}
$$

となり、通常の温度範囲では $dE_g/dT<0$ である。

発光ピークを単純に

$$
\lambda_p\approx\frac{hc}{E_g}
$$

と近似すれば、

$$
\frac{d\lambda_p}{dT}
\approx
-\frac{hc}{E_g^2}\frac{dE_g}{dT}
=
\frac{hc\alpha}{E_g^2}
\frac{T(T+2\beta)}{(T+\beta)^2}
>0
$$

となる。つまり単純なバンド端発光では、接合温度の上昇によりバンドギャップが縮み、発光ピークは長波長側へ移る。

この変化は測色にもつながる。LEDの分光分布を $S(\lambda,T)$ と書けば、XYZは

$$
X(T)=k\int S(\lambda,T)\bar{x}(\lambda)\,d\lambda
$$

などで決まるため、温度によるピーク波長・スペクトル幅・強度比の変化は、そのまま色度変化になる。白色pc-LEDでは青色チップだけでなく蛍光体の変換効率や発光帯も温度依存性を持つため、接合温度管理は光束維持だけでなく色安定性にも重要である。

ただしInGaN量子井戸の発光ピークは、Varshni式だけでは完全には記述できない。組成ゆらぎによるキャリア局在、band-tail states、量子閉じ込めStark効果、注入電流による電場遮蔽などが重なり、温度上昇に対して一時的な青方偏移やS字型の変化が現れる場合がある。したがってVarshni式は「基礎となるバンドギャップの温度依存」を示す第一近似であり、実際のInGaN LEDの発光色は量子井戸内のキャリア状態まで含めて考える必要がある。

## 14　色彩検定で押さえる内容と、大学レベルで追加して理解する内容

色彩検定3級の公式テキスト目次では、「光とは何だろう」「光の性質と色」「照明と色の見え方」「混色」「加法混色」が範囲に入る。2級では「光の性質と色」「照明の表し方」「ランプの種類」に続いて「LED」が独立項目として示されている。

そこへ物理を追加すると、次の対応になる。

| 色彩検定 | 物理学での意味 |
|---|---|
| LED | pn接合へのキャリア注入と電気発光 |
| 発光色 | バンドギャップと光子エネルギー |
| 青色LED | GaN/InGaN系の直接遷移とバンドギャップ工学 |
| 発光効率 | 放射・非放射再結合、内部量子効率、光取り出し |
| 白色LED | 青色励起＋蛍光体、複数LEDの加法混色、ハイブリッド |
| 加法混色 | 分光分布とXYZ三刺激値の線形結合 |
| 光源色 | 分光分布を等色関数で積分した結果 |
| lm/W | 電気→光の効率 × 視感度による重み付け |
| 温度による色ずれ | バンドギャップ・量子井戸状態・蛍光体特性の温度依存 |
| 色の見え方 | 光源分光分布×物体の分光反射率×視覚系 |

LEDを理解するには、「LEDは白く光る装置」と覚えるより、

$$
\boxed{
\text{半導体のバンド構造}
\rightarrow
\text{再結合と量子効率}
\rightarrow
\text{発光スペクトル}
\rightarrow
\text{混色・測色・測光}
\rightarrow
\text{人間の知覚}
}
$$

という階層で理解した方がよい。

## まとめ

LEDの発光は、pn接合へ順方向電圧を加え、注入された電子と正孔が放射再結合することで起こる。光子エネルギーはおおむね半導体のバンドギャップで決まり、

$$
\lambda\approx\frac{hc}{E_g}
$$

によって発光波長と結びつく。

一方、明るいLEDを作るには発光波長だけでなく、非放射再結合を抑え、内部で生まれた光を外へ取り出す必要がある。白色LEDではさらに、青色光の一部を蛍光体で長波長側へ変換するか、複数色LEDを加法混色して、人間の色覚に対して白となる分光分布を作る。

さらに実際のLEDでは接合温度がバンドギャップや量子井戸内のキャリア状態を変えるため、発光スペクトルと色度も温度依存になる。つまりLED照明の色と効率は

$$
\boxed{
\text{半導体物理}
\rightarrow
\text{量子効率・温度}
\rightarrow
\text{分光放射}
\rightarrow
\text{測色・測光}
\rightarrow
\text{色知覚}
}
$$

という連鎖の結果である。

## 参考資料

- 公益社団法人 色彩検定協会「公式テキスト3級目次」https://www.aft.or.jp/images/text_of-3st-grade_mokuji.pdf
- 公益社団法人 色彩検定協会「公式テキスト2級目次」https://www.aft.or.jp/images/text_of-2st-grade_mokuji.pdf
- 公益社団法人 色彩検定協会「色彩検定とは」https://www.aft.or.jp/pages/feature/level
- U.S. Department of Energy, “LED Basics.” https://www.energy.gov/cmei/ssl/led-basics
- U.S. Department of Energy, *2019 Solid-State Lighting R&D Opportunities*, 2020.
- National Institute of Standards and Technology, Yoshihiro Ohno and Wendy L. Davis, “Color Quality and Spectra,” 2008. https://www.nist.gov/publications/color-quality-and-spectra
- The Royal Swedish Academy of Sciences, “The Nobel Prize in Physics 2014: Efficient blue light-emitting diodes leading to bright and energy-saving white light sources.” https://www.nobelprize.org/prizes/physics/2014/advanced-information/
- International Commission on Illumination, CIE 015:2018, *Colorimetry, 4th Edition*.
- International Commission on Illumination, CIE 251:2023, *LED Reference Spectrum for Photometer Calibration*.
- E. Fred Schubert, *Light-Emitting Diodes*, 3rd ed., Cambridge University Press, 2018.
- S. M. Sze and Kwok K. Ng, *Physics of Semiconductor Devices*, 3rd ed., Wiley, 2007.
- Y. P. Varshni, “Temperature dependence of the energy gap in semiconductors,” *Physica* 34(1), 149–154 (1967). https://doi.org/10.1016/0031-8914(67)90062-6
- P. G. Eliseev, P. Perlin, J. Lee, and M. Osiński, “Blue temperature-induced shift and band-tail emission in InGaN-based light sources,” *Applied Physics Letters* 71(5), 569–571 (1997). https://doi.org/10.1063/1.119797