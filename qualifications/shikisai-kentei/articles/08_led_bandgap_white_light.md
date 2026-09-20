# LEDはなぜ白く光るのか――半導体のバンドギャップと加法混色

色彩検定3級では「照明と色の見え方」「混色」「加法混色」を扱い、2級では「照明」「ランプの種類」「LED」を扱う。この記事では、LEDを単なる「省エネ照明」としてではなく、半導体中の電子と正孔が再結合して光子を放出する素子として捉え、発光波長、白色化、分光分布、加法混色までを物理学からつなげる。

色彩検定の範囲では「LEDは発光ダイオードである」「白色LEDには青色LEDと蛍光体を使う方式がある」といった理解が中心になる。大学レベルでは、その背後に

$$
\text{電流}
\rightarrow
\text{電子・正孔の注入}
\rightarrow
\text{再結合}
\rightarrow
\text{光子}
\rightarrow
\text{分光分布}
\rightarrow
\text{色}
$$

という因果関係がある。

## 1　LEDは電気を直接、光へ変える

LEDは Light Emitting Diode、発光ダイオードである。ダイオードなので基本構造はp型半導体とn型半導体を接合したpn接合である。

n型半導体では伝導帯に電子が供給されやすく、p型半導体では価電子帯に正孔が存在する。pn接合へ順方向電圧を加えると、接合部の電位障壁が下がり、n側から電子、p側から正孔が活性層へ注入される。

ダイオード電流は理想化すると

$$
I=I_s\left(\exp\frac{qV}{nk_{\rm B}T}-1\right)
$$

で表せる。

ここで

- $I_s$：逆方向飽和電流
- $q$：電気素量
- $V$：印加電圧
- $n$：理想係数
- $k_{\rm B}$：Boltzmann定数
- $T$：絶対温度

である。

順方向電圧を上げるとキャリア注入が急激に増え、電子と正孔が同じ領域に存在する確率が高くなる。LEDでは、その再結合の一部が光子放出として起こる。

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

したがってLEDの色は「電気を流すと何となく色がつく」のではなく、半導体の電子状態に含まれるエネルギースケールが光子の波長へ写像された結果である。

## 3　なぜシリコンでは明るいLEDを作りにくいのか――直接遷移と間接遷移

光子はエネルギーだけでなく運動量も持つ。半導体中の電子遷移では、エネルギー保存と結晶運動量保存を同時に満たす必要がある。

GaNやInGaNのような直接遷移型半導体では、伝導帯の底と価電子帯の頂上がほぼ同じ波数 $k$ にある。そのため

$$
\text{電子}+\text{正孔}
\rightarrow
\text{光子}
$$

という再結合が比較的起こりやすい。

一方、Siのような間接遷移型半導体では、伝導帯の底と価電子帯の頂上の $k$ がずれている。光子だけでは運動量保存を満たしにくく、フォノンも同時に関与する必要があるため、放射再結合の確率が低い。

したがって高効率LEDには、単に「半導体なら何でもよい」のではなく、発光に適したバンド構造が必要になる。

## 4　青色LEDではGaN系半導体が重要だった

効率的な青色LEDにはGaN系材料が用いられる。GaNは広いバンドギャップを持ち、InGaNとの混晶によって発光波長を調整できる。

In$_x$Ga$_{1-x}$Nのバンドギャップは、単純な線形補間ではなく、概念的には

$$
E_g(x)
\approx
(1-x)E_g(\mathrm{GaN})
+xE_g(\mathrm{InN})
-bx(1-x)
$$

と表される。

$b$ はbowing parameterであり、混晶のバンドギャップが組成に対して直線的に変化しないことを表す。

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

2014年のノーベル物理学賞は、赤崎勇・天野浩・中村修二に「高輝度で省エネルギーな白色光源を可能にした高効率青色LEDの発明」に対して授与された。青色が重要だったのは、三原色の一つがそろったというだけではない。高エネルギーの青色光を、より低エネルギーの緑・黄・赤成分へ変換できるようになり、実用的な白色光源を作れるようになったからである。

## 5　「白色LED」という単一の白い発光物質があるわけではない

LEDは本来、比較的狭い波長域で発光する。一般照明に必要な白色は、複数波長の光を組み合わせて作る。

代表的な方法は次の2つである。

1. 青色LED＋蛍光体による波長変換
2. 赤・緑・青など複数LEDの加法混色

現在の白色照明では、青色LEDに蛍光体を組み合わせる方式が広く使われている。

## 6　青色LED＋蛍光体で白色になる仕組み

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

白色LEDの分光分布は概念的に

$$
S_{\rm white}(\lambda)
=
aS_{\rm blue}(\lambda)
+bS_{\rm phosphor}(\lambda)
$$

と表せる。

青色LEDの鋭いピークと、蛍光体の黄～赤側へ広がる発光帯を足し合わせることで、L・M・S錐体を適度な比率で刺激する分光分布を作る。

人間はスペクトルそのものを直接見ているわけではない。異なるスペクトルでも三刺激値が一致すれば、同じ白に見えることがある。これはメタメリズムである。

つまり白色LEDは

$$
\text{太陽光と同じスペクトル}
$$

だから白く見えるのではなく、

$$
\text{人間の三色型色覚に対して白と等色する}
$$

ように分光分布を設計している。

## 7　加法混色は「光パワーの足し算」である

赤、緑、青のLEDを同じ場所に重ねて照射すると、観察者へ届く分光放射は

$$
S(\lambda)
=
aS_R(\lambda)+bS_G(\lambda)+cS_B(\lambda)
$$

となる。

ここで $a,b,c$ は各LEDの強度である。

CIE XYZ三刺激値も分光分布に対して線形なので、

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

これが加法混色を線形代数として表した式である。

色彩検定で学ぶ「赤＋緑＝黄」「緑＋青＝シアン」「青＋赤＝マゼンタ」「赤＋緑＋青＝白」は、三原色を一定条件で加えたときの知覚的な関係である。大学レベルでは、その背後に

$$
\text{分光分布の線形結合}
\rightarrow
\text{三刺激値の線形結合}
\rightarrow
\text{色知覚}
$$

という構造がある。

## 8　RGBの3本だけでも白に見えるが、物体色の見え方は同じとは限らない

RGB LEDを調整すれば白色点を作ることはできる。しかし、白く見えることと、照らされた物体が自然に見えることは別問題である。

ある物体の分光反射率を $R(\lambda)$、照明の分光分布を $S(\lambda)$ とすると、眼へ届く反射光は

$$
L(\lambda)=S(\lambda)R(\lambda)
$$

で決まる。

RGBの狭帯域光源では、$S(\lambda)$ が存在しない波長域が多い。その波長域で反射率に特徴を持つ物体は、昼光や連続スペクトル光源の下とは異なる色に見える可能性がある。

したがって照明には

- 光源そのものが何色に見えるか
- その光源で照らした物体がどう見えるか

という2つの問題がある。

白色LEDでは、蛍光体の発光帯を広げたり、赤色成分を追加したりして、色再現性と効率のバランスを取る。

## 9　LEDの分光分布からXYZを計算できる

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

## 10　LEDの明るさは人間の視感度を通して評価される

放射パワーが同じでも、人間が感じる明るさは波長によって異なる。明所視の標準分光視感効率 $V(\lambda)$ を使うと、分光放射束から光束は

$$
\Phi_v
=683\ \mathrm{lm/W}
\int \Phi_{e,\lambda}(\lambda)V(\lambda)\,d\lambda
$$

で求められる。

ここで683 lm/Wは555 nmの単色光に対する最大視感効率である。

LED照明の総合的な発光効率を考えるときは、

$$
\text{電気入力}
\rightarrow
\text{半導体内部の光子生成}
\rightarrow
\text{光取り出し}
\rightarrow
\text{可視光の分光分布}
\rightarrow
\text{人間の視感度}
$$

を分けて考える必要がある。

電気から放射へ変える効率が高くても、人間の感度が低い波長ばかり出していれば、照明としてのlm/Wは高くならない。

## 11　なぜ青色LEDが白色照明の鍵だったのか

青色光子は赤色光子よりエネルギーが高い。

例えば

$$
E_{450}\approx\frac{1240}{450}\approx2.76\ \mathrm{eV}
$$

$$
E_{620}\approx\frac{1240}{620}\approx2.00\ \mathrm{eV}
$$

である。

蛍光体では高エネルギー光子を吸収し、損失を伴いながら低エネルギー光子へ変換することができる。そのため青色LEDを励起源にすれば、緑・黄・赤側へ広い発光を作れる。

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

## 12　色彩検定で押さえる内容と、大学レベルで追加して理解する内容

色彩検定3級では、照明によって色の見え方が変化すること、加法混色では光を加えるほど明るくなり、RGBの組合せで多様な色を作れることを押さえる。

2級では、照明の表し方やランプの種類の中でLEDを扱う。公式テキスト目次にも「照明」「ランプの種類」「LED」が明示されている。

そこへ物理を追加すると、次の対応になる。

| 色彩検定 | 物理学での意味 |
|---|---|
| LED | pn接合の電気発光 |
| 発光色 | バンドギャップと光子エネルギー |
| 青色LED | GaN/InGaN系の直接遷移とバンドギャップ工学 |
| 白色LED | 青色励起＋蛍光体、または複数LEDの加法混色 |
| 加法混色 | 分光分布とXYZ三刺激値の線形結合 |
| 光源色 | 分光分布を等色関数で積分した結果 |
| 色の見え方 | 光源分光分布×物体の分光反射率×視覚系 |

LEDを理解するには、「LEDは白く光る装置」と覚えるより、

$$
\boxed{
\text{半導体のバンド構造}
\rightarrow
\text{発光スペクトル}
\rightarrow
\text{混色}
\rightarrow
\text{人間の色覚}
}
$$

という階層で理解した方がよい。

## まとめ

LEDの発光は、pn接合へ順方向電圧を加え、注入された電子と正孔が放射再結合することで起こる。光子エネルギーはおおむね半導体のバンドギャップで決まり、

$$
\lambda\approx\frac{hc}{E_g}
$$

によって発光波長と結びつく。

白色LEDでは単一の「白い波長」を出しているわけではない。青色LEDと蛍光体、あるいは複数色LEDの加法混色によって分光分布を作り、その光が人間の三色型色覚に白として知覚される。

つまりLED照明の色は

$$
\boxed{
\text{量子力学・半導体物理}
\rightarrow
\text{分光放射}
\rightarrow
\text{測色}
\rightarrow
\text{色知覚}
}
$$

という連鎖の結果である。

## 参考資料

- 公益社団法人 色彩検定協会「公式テキスト3級目次」https://www.aft.or.jp/images/text_of-3st-grade_mokuji.pdf
- 公益社団法人 色彩検定協会「公式テキスト2級目次」https://www.aft.or.jp/images/text_of-2st-grade_mokuji.pdf
- U.S. Department of Energy, “LED Basics.” https://www.energy.gov/cmei/ssl/led-basics
- The Royal Swedish Academy of Sciences, “The Nobel Prize in Physics 2014: Efficient blue light-emitting diodes leading to bright and energy-saving white light sources.” https://www.nobelprize.org/prizes/physics/2014/advanced-information/
- International Commission on Illumination, CIE 015:2018, *Colorimetry, 4th Edition*.
- International Commission on Illumination, CIE 251:2023, *LED Reference Spectrum for Photometer Calibration*.
- E. Fred Schubert, *Light-Emitting Diodes*, 3rd ed., Cambridge University Press, 2018.
- S. M. Sze and Kwok K. Ng, *Physics of Semiconductor Devices*, 3rd ed., Wiley, 2007.
