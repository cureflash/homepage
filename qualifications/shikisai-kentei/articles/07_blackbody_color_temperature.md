# 色温度はなぜ「温度」なのか――黒体放射とPlanckの法則

色彩検定協会の現行案内では、3級で「光の基礎知識」、2級で「光の性質」と「色の見えに関わる照明」を学び、2級ではLEDなどの照明も扱う。ここでは、その背景にある熱放射を大学物理の水準まで掘り下げる。

色温度は単なる「暖色・寒色の番号」ではない。理想的な熱放射体では、温度を決めると分光放射分布が決まり、そのスペクトルをCIE等色関数で積分すると色度が決まる。

$$
T
\rightarrow
B_\lambda(\lambda,T)
\rightarrow
(X,Y,Z)
\rightarrow
(x,y)
\rightarrow
\text{色温度}
$$

という物理量から測色量への連鎖がある。

## 1　黒体は「黒く見える物体」ではない

黒体（Planckian radiator）は、入射する放射を波長・入射方向・偏光によらず完全に吸収する理想的な熱放射体である。

$$
\alpha_\lambda=1
$$

ここで $\alpha_\lambda$ は分光吸収率である。

熱平衡ではKirchhoffの放射法則により、同じ波長・方向について放射率と吸収率が等しい。

$$
\varepsilon_\lambda=\alpha_\lambda
$$

したがって完全吸収体は同じ温度の熱放射体の中で最大の放射を行う。黒体が「色温度の基準」になるのは、材料固有の反射色ではなく、温度だけでスペクトルを一意に決められるからである。

### 1.1　なぜ「よく吸収する物体ほど、よく放射する」のか

Kirchhoffの法則は単なる経験則ではなく、熱平衡で正味のエネルギー移動が消えるという詳細釣り合いから理解できる。

温度 $T$ の黒体空洞の中へ、同じ温度 $T$ の小さな物体を置く。ある波長 $\lambda$・方向・偏光成分について、空洞壁から物体へ入射する放射輝度は黒体放射

$$
B_\lambda(\lambda,T)
$$

である。物体がそのうち割合 $\alpha_\lambda$ を吸収するなら、単位面積・単位立体角・単位波長あたりに物体が受け取るエネルギーは比例関係として

$$
P_{\rm abs,\lambda}
\propto
\alpha_\lambda B_\lambda
$$

と書ける。一方、同じ物体自身の熱放射を

$$
P_{\rm emit,\lambda}
\propto
\varepsilon_\lambda B_\lambda
$$

と書く。

熱平衡なのに $\alpha_\lambda\neq\varepsilon_\lambda$ であれば、その波長・方向だけで物体が一方的にエネルギーを受け取るか失うことになり、平衡を維持できない。したがって各成分について

$$
P_{\rm abs,\lambda}=P_{\rm emit,\lambda}
$$

でなければならず、

$$
\boxed{\varepsilon_\lambda=\alpha_\lambda}
$$

を得る。

この結果は、鏡面性の高い金属が一般に「吸収しにくく、同じ波長では放射もしにくい」こととも整合する。逆に黒体は $\alpha_\lambda=1$ なので $\varepsilon_\lambda=1$ となり、その温度で許される最大の熱放射を出す。

ただし「可視光で黒く見える」ことと「赤外線でも放射率が高い」ことは同義ではない。$\alpha_\lambda$ と $\varepsilon_\lambda$ は波長依存量なので、可視域では強く吸収して黒く見えても、熱赤外域では低放射率という材料もあり得る。

$$
\boxed{
\text{熱平衡}
\rightarrow
\text{波長・方向ごとの詳細釣り合い}
\rightarrow
\alpha_\lambda=\varepsilon_\lambda
\rightarrow
\text{黒体は最大放射体}
}
$$

この関係によって、「吸収」「放射」「色温度」は別々の概念ではなく、同じ電磁放射と物質の相互作用としてつながる。

## 2　Planckの法則

温度 $T$ の黒体の、波長あたりの分光放射輝度は

$$
\boxed{
B_\lambda(\lambda,T)
=
\frac{2hc^2}{\lambda^5}
\frac{1}{\exp\!\left(\frac{hc}{\lambda k_{\rm B}T}\right)-1}
}
$$

である。

- $h$：Planck定数
- $c$：真空中の光速
- $k_{\rm B}$：Boltzmann定数
- $\lambda$：真空波長
- $T$：熱力学温度

重要なのは、$T$ が指数関数の中に入っていることである。温度を上げても単に全波長が同じ倍率で強くなるのではない。短波長側が相対的に大きく増えるので、スペクトルの形そのものが変わる。

### 2.1　温度を上げると短波長側が「より速く」増える

この性質はPlanckの式を温度で微分すると定量化できる。

$$
x=\frac{hc}{\lambda k_{\rm B}T}
$$

とおく。波長を固定したとき、分光放射輝度の温度に対する対数感度は

$$
\boxed{
\frac{\partial\ln B_\lambda}{\partial\ln T}
=
\frac{x}{1-e^{-x}}
}
$$

となる。これは「温度を1%変えたとき、その波長の放射輝度がおよそ何%変わるか」を表す無次元量である。

長波長・高温側の $x\ll1$ では

$$
\frac{x}{1-e^{-x}}\approx1
$$

なので、Rayleigh–Jeans極限の $B_\lambda\propto T$ に近づく。一方、短波長側の $x\gg1$ では

$$
\frac{x}{1-e^{-x}}\approx x
$$

となり、温度変化への感度が大きい。

例えば $T=3000\ \mathrm K$ では、450 nmで $x\approx10.66$、650 nmで $x\approx7.38$ である。微小な温度上昇に対する相対増加率は450 nm側のほうが大きい。したがって温度を上げると、単に全体が明るくなるだけでなく、青側／赤側の比も増える。

$$
\boxed{
\text{温度上昇}
\rightarrow
\text{短波長成分の相対増加がより大きい}
\rightarrow
\text{黒体色度が青側へ移動}
}
$$

Wienの変位則はピーク位置の移動を示すが、この微分式はスペクトル各点がどの程度の速さで変化するかを直接示している。

## 3　Planckの式はどこから出るのか

大学物理では、黒体放射を「空洞内の電磁波モード」と「光子の量子統計」に分けて考えると構造が見える。

### 3.1　空洞には高周波ほど多くの電磁波モードがある

一辺が十分大きい空洞を考えると、電磁波の許される波数はほぼ連続とみなせる。2つの偏光を含めた単位体積・単位周波数あたりのモード密度は

$$
\boxed{
g(\nu)=\frac{8\pi\nu^2}{c^3}}
$$

となる。

つまり周波数が高いほど、利用できる電磁波モード数は $\nu^2$ に比例して増える。

### 3.2　1モードの平均エネルギーは量子化される

周波数 $\nu$ の光子1個のエネルギーは

$$
E=h\nu
$$

である。熱平衡での光子数はBose–Einstein統計に従い、化学ポテンシャルは0なので、1モードあたりの平均光子数は

$$
\langle n\rangle
=
\frac{1}{\exp(h\nu/k_{\rm B}T)-1}
$$

となる。

したがって熱放射に寄与する1モードあたりの平均エネルギーは

$$
\langle E\rangle
=
\frac{h\nu}{\exp(h\nu/k_{\rm B}T)-1}
$$

である。

### 3.3　モード数×1モードのエネルギー

周波数あたりのエネルギー密度は

$$
u_\nu(\nu,T)
=
g(\nu)\langle E\rangle
=
\frac{8\pi h\nu^3}{c^3}
\frac{1}{\exp(h\nu/k_{\rm B}T)-1}
$$

となる。

等方的な放射場では

$$
B_\nu=\frac{c}{4\pi}u_\nu
$$

なので、

$$
B_\nu(\nu,T)
=
\frac{2h\nu^3}{c^2}
\frac{1}{\exp(h\nu/k_{\rm B}T)-1}
$$

を得る。

さらに

$$
\nu=\frac{c}{\lambda},\qquad
\left|\frac{d\nu}{d\lambda}\right|=\frac{c}{\lambda^2}
$$

より

$$
B_\lambda
=
B_\nu\left|\frac{d\nu}{d\lambda}\right|
$$

と変数変換すると、最初のPlanck式になる。

つまり黒体放射の形は

$$
\boxed{
\text{電磁波のモード密度}
\times
\text{光子の量子統計}
}
$$

から決まる。

## 4　なぜ古典物理では失敗するのか

もし各電磁波モードに古典統計力学の等分配則を適用し、平均エネルギーを

$$
\langle E\rangle=k_{\rm B}T
$$

とすると、Rayleigh–Jeans則

$$
B_\nu^{\rm RJ}
=
\frac{2\nu^2k_{\rm B}T}{c^2}
$$

が得られる。

しかしこれは $\nu\to\infty$ で発散し、短波長側の放射エネルギーが無限大になる。これがいわゆる紫外破綻である。

Planck分布では、高周波領域で

$$
\exp\!\left(\frac{h\nu}{k_{\rm B}T}\right)
$$

が急増するため、高周波モードの熱励起が強く抑えられる。量子化が短波長側の発散を止める。

## 5　Wienの変位則――高温ほど短波長側へ移る

$B_\lambda$ を $\lambda$ で微分し、極大条件

$$
\frac{\partial B_\lambda}{\partial\lambda}=0
$$

を課す。

$$
x=\frac{hc}{\lambda k_{\rm B}T}
$$

とおくと、極大条件は

$$
5(1-e^{-x})=x
$$

となり、その数値解は

$$
x\approx4.9651
$$

である。したがって

$$
\boxed{\lambda_{\max}T=b}
$$

$$
b\approx2.898\times10^{-3}\ \mathrm{m\,K}
$$

を得る。

2700 Kなら

$$
\lambda_{\max}\approx1.07\ \mu\mathrm{m}
$$

で、ピークは近赤外にある。6500 Kなら

$$
\lambda_{\max}\approx446\ \mathrm{nm}
$$

となる。

ただし「ピーク波長＝その光の色」ではない。色覚は可視域全体の分光分布を積分して決まるからである。

## 6　波長表示と周波数表示ではピークが違う

黒体放射は $B_\lambda$ でも $B_\nu$ でも表せるが、

$$
B_\nu\,d\nu
=
B_\lambda\,|d\lambda|
$$

であり、

$$
\nu=\frac{c}{\lambda}
$$

は非線形変換である。

したがって一般に

$$
\nu_{\max}\neq\frac{c}{\lambda_{\max}}
$$

である。スペクトルの「最大位置」は横軸の取り方に依存する。

これは、色をピーク1点ではなく分光分布全体で扱うべき理由の一つでもある。

## 7　Stefan–Boltzmann則――総放射量は $T^4$

黒体の半球方向への分光放射発散度は

$$
M_\lambda=\pi B_\lambda
$$

であり、全波長で積分すると

$$
M
=
\int_0^\infty M_\lambda\,d\lambda
=
\sigma T^4
$$

となる。

$$
\boxed{M=\sigma T^4}
$$

これがStefan–Boltzmann則である。

### 7.1　なぜ $T^4$ になるのか

Planckの法則をそのまま全波長で積分し、

$$
x=\frac{hc}{\lambda k_{\rm B}T}
$$

と変数変換すると、

$$
M(T)
=
\frac{2\pi k_{\rm B}^4T^4}{h^3c^2}
\int_0^\infty
\frac{x^3}{e^x-1}\,dx
$$

となる。ここで

$$
\int_0^\infty\frac{x^3}{e^x-1}\,dx
=\frac{\pi^4}{15}
$$

だから、

$$
\boxed{
\sigma
=
\frac{2\pi^5k_{\rm B}^4}{15h^3c^2}
}
$$

を得る。したがって $T^4$ は経験的な近似ではなく、Planck分布を全波長で積分した結果である。量子定数 $h$、熱力学の $k_{\rm B}$、電磁波の速度 $c$ がStefan–Boltzmann定数の中で結びついている。

温度が2倍なら、総放射量は

$$
2^4=16
$$

倍になる。

### 7.2　「放射エネルギー」と「明るさ」は同じではない

照明では、放射されたワット数のすべてが人間に同じ明るさとして感じられるわけではない。明所視の分光視感効率 $V(\lambda)$ を使うと、黒体の放射発散度から測光量に対応する量は

$$
M_v(T)
=
K_m\int_0^\infty
M_\lambda(\lambda,T)V(\lambda)\,d\lambda
$$

と書ける。ここで $K_m\approx683\ \mathrm{lm\,W^{-1}}$ は明所視における最大視感効果度である。

放射の視感効率を

$$
K(T)
=
\frac{M_v(T)}{M(T)}
=
K_m
\frac{\int M_\lambda(\lambda,T)V(\lambda)\,d\lambda}
{\int M_\lambda(\lambda,T)\,d\lambda}
$$

とすれば、値を決めるのは「黒体スペクトルの形」と「人間の視感度」の重なりである。

2700～3000 K程度の熱放射では放射エネルギーの大きな部分が赤外域にあり、そこは $V(\lambda)$ でほぼ重み付けされない。白熱ランプが多量の熱を出す割に照明として高効率ではないことは、Planck分布と視感度関数の積から説明できる。

## 8　黒体スペクトルをXYZへ変換すると「色」になる

物理学が直接与えるのは分光放射分布であり、それ自体はまだ測色学的な「色」ではない。

黒体スペクトル $B_\lambda(\lambda,T)$ をCIE 1931等色関数 $\bar{x}(\lambda)$、$\bar{y}(\lambda)$、$\bar{z}(\lambda)$ で積分すると

$$
X(T)=k\int B_\lambda(\lambda,T)\bar{x}(\lambda)\,d\lambda
$$

$$
Y(T)=k\int B_\lambda(\lambda,T)\bar{y}(\lambda)\,d\lambda
$$

$$
Z(T)=k\int B_\lambda(\lambda,T)\bar{z}(\lambda)\,d\lambda
$$

となる。

色度座標は

$$
x=\frac{X}{X+Y+Z},\qquad
y=\frac{Y}{X+Y+Z}
$$

である。

温度を変えながらこの計算を繰り返すと、色度図上に黒体の色度が連続的に並ぶ。この軌跡が黒体軌跡（Planckian locus）である。

$$
\boxed{
\text{Planck分布}
+\text{CIE等色関数}
\rightarrow
\text{黒体軌跡}
}
$$

したがって黒体軌跡は経験的な色見本の並びではなく、熱放射の式と標準観測者から計算される。

## 9　色温度は「同じ色度をもつ黒体の温度」

CIEでいう色温度 $T_c$ は、与えられた光と同じ色度をもつPlanckian radiatorの温度である。

$$
\boxed{
\mathbf c_{\rm source}
=
\mathbf c_{\rm P}(T_c)
}
$$

光源の色度が黒体軌跡上にある場合に、この定義をそのまま使える。

低温の黒体では可視域の長波長成分が相対的に強く、黄赤みのある白に見える。温度を上げると短波長成分が増え、色度は青白い方向へ移動する。

このため照明では

- 低色温度：暖色系
- 高色温度：寒色系

となる。物理的な温度と心理的な「暖かい／冷たい」という表現の方向が逆に感じられる点に注意する。

## 10　相関色温度は「黒体軌跡に最も近い温度」

LEDや蛍光ランプのスペクトルはPlanck分布ではないので、その色度は一般に黒体軌跡上にはない。

そこでCIEは相関色温度（CCT）を、与えられた分光分布の色度に最も近い黒体放射体の温度として定義している。現行のCIE定義では、黒体軌跡との近さは修正された1976 UCS上で扱われる。

概念的には

$$
T_{cp}
=
\operatorname*{arg\,min}_{T}
 d_{\rm CIE}
\!\left(
\mathbf c_{\rm source},
\mathbf c_{\rm P}(T)
\right)
$$

である。

ここで重要なのは

$$
\boxed{
\text{CCTが同じ}
\not\Rightarrow
\text{分光分布が同じ}
}
$$

ということである。

白熱ランプ、蛍光ランプ、青色LED＋蛍光体、RGB混色LEDが、いずれも約3000 KのCCTをもつことはありうる。しかし各光源の $S(\lambda)$ は大きく異なる。

CCTはスペクトル全体を1個の数値へ圧縮した指標であり、演色性を表す量ではない。

## 11　白熱ランプでは色温度と実温度が比較的近い

白熱ランプはタングステンフィラメントを高温に加熱し、熱放射を利用する。

実在物体は完全黒体ではなく、波長依存の放射率

$$
\varepsilon(\lambda,T)
$$

をもつので、実際の放射は

$$
L_\lambda(\lambda,T)
=
\varepsilon(\lambda,T)B_\lambda(\lambda,T)
$$

と表せる。

それでも白熱ランプは熱放射が支配的で、連続スペクトルをもつ。そのため色温度は発光体の熱力学的温度と比較的直接に結びつく。

CIE標準イルミナントAは、約2856 KのPlanckian radiationを基礎とする標準イルミナントである。

### 11.1　灰色体なら「暗くなっても色度は変わらない」

ここで、実在物体の放射率が可視域で波長に依存せず、一定値 $\varepsilon_0$ をとる理想化を考える。このような放射体を灰色体（grey body）として扱うと、

$$
L_\lambda(\lambda,T)
=
\varepsilon_0 B_\lambda(\lambda,T)
$$

である。するとXYZ三刺激値もすべて同じ倍率だけ小さくなる。

$$
X_{\rm g}=\varepsilon_0 X_{\rm b},\qquad
Y_{\rm g}=\varepsilon_0 Y_{\rm b},\qquad
Z_{\rm g}=\varepsilon_0 Z_{\rm b}
$$

ところが色度座標では共通因子が消える。

$$
x_{\rm g}
=
\frac{\varepsilon_0 X_{\rm b}}
{\varepsilon_0(X_{\rm b}+Y_{\rm b}+Z_{\rm b})}
=x_{\rm b}
$$

$$
y_{\rm g}=y_{\rm b}
$$

したがって、同じ温度の理想灰色体は黒体より放射輝度が低くても、分光分布の形が同じなので色度は黒体と一致する。

$$
\boxed{
\text{波長に依存しない放射率}
\rightarrow
\text{スペクトル全体を同倍率で縮小}
\rightarrow
\text{色度不変}
}
$$

これは色温度が「光の絶対的な強さ」ではなく「可視域におけるスペクトル形状」から決まることを、数式で示している。反対に、実在のタングステンのように $\varepsilon(\lambda,T)$ が波長依存性をもつ選択放射体では、Planck分布の形そのものが変形するため、色温度と実温度は厳密には一致しない。

## 12　LEDの3000 Kはチップ温度ではない

代表的な白色LEDは、青色LEDの発光と蛍光体による波長変換を組み合わせる。

概念的には

$$
S_{\rm white}(\lambda)
=
S_{\rm blue}(\lambda)
+
S_{\rm phosphor}(\lambda)
$$

である。

したがって「3000 KのLED」と表示されていても、LEDチップが3000 Kに熱せられて黒体放射しているわけではない。3000 Kは主として色度を黒体軌跡に対応づけた相関色温度である。

発光の因果関係は

$$
\text{電子・正孔の再結合}
\rightarrow
\text{青色光}
\rightarrow
\text{蛍光体励起}
\rightarrow
\text{広帯域発光}
\rightarrow
\text{白色光}
$$

となる。

LEDの発光機構そのものは別記事「LEDはなぜ白く光るのか」で詳しく扱う。

## 13　D65は「6500 Kの黒体」ではない

CIE標準イルミナントD65は、相関色温度がおよそ6500 Kの昼光を代表する標準イルミナントである。

しかしD65は6500 Kの黒体スペクトルそのものではない。昼光には太陽放射に加えて、大気による吸収や散乱が関与するためである。

したがって

$$
\boxed{
\text{D65}
\neq
\text{6500 K黒体の分光分布}
}
$$

である。

色度が近くてもスペクトルが異なるという事実は、色温度・CCTが「スペクトルの形」ではなく「色度を温度に対応づけた値」であることを示している。

## 14　2700 Kはピークが赤外なのに、なぜ白く見えるのか

2700 K黒体の $B_\lambda$ のピークは約1.07 µmで、可視域外にある。それでも白熱ランプは赤一色には見えない。

理由は、黒体放射がピーク波長だけで発光するのではなく、非常に広い連続スペクトルをもつからである。2700 Kでも可視域の赤から青まで放射が存在し、単に長波長成分の比率が高い。

色は

$$
\text{ピーク波長}
$$

ではなく

$$
\int S(\lambda)\bar{x}(\lambda)d\lambda,
\quad
\int S(\lambda)\bar{y}(\lambda)d\lambda,
\quad
\int S(\lambda)\bar{z}(\lambda)d\lambda
$$

という可視域全体の積分で決まる。

## 15　色彩検定の知識を物理的因果関係へつなぐ

色彩検定で扱う照明の知識は、物理では次のようにつながる。

白熱ランプでは

$$
\text{フィラメント加熱}
\rightarrow
T
\rightarrow
\text{Planck型の連続スペクトル}
\rightarrow
XYZ
\rightarrow
\text{色温度}
$$

LEDでは

$$
\text{半導体発光・蛍光体変換}
\rightarrow
S(\lambda)
\rightarrow
XYZ
\rightarrow
\text{色度}
\rightarrow
\text{CCT}
$$

となる。

同じ「3000 K」でも、前者は熱放射の温度と深く結びつき、後者は主として色度を黒体へ対応づけた値である。

## まとめ

黒体放射は、空洞中の電磁波モード密度

$$
g(\nu)=\frac{8\pi\nu^2}{c^3}
$$

と、光子の平均エネルギー

$$
\langle E\rangle
=
\frac{h\nu}{e^{h\nu/k_{\rm B}T}-1}
$$

を組み合わせることで導かれる。

その結果がPlanckの法則

$$
B_\lambda(\lambda,T)
=
\frac{2hc^2}{\lambda^5}
\frac{1}{e^{hc/(\lambda k_{\rm B}T)}-1}
$$

である。

温度上昇により、Wienの変位則

$$
\lambda_{\max}T=b
$$

に従って短波長側の比率が増え、総放射量は

$$
M=\sigma T^4
$$

で増える。さらに、照明としての有効性はPlanck分布そのものではなく、分光視感効率 $V(\lambda)$ との重なりで決まる。

このスペクトルをCIE等色関数で積分すると色度が得られ、温度を変えたときの色度の軌跡が黒体軌跡になる。黒体軌跡上では色温度、近傍の非熱放射源では相関色温度を用いる。

したがって色温度とは、照明の印象を便宜的に数値化しただけの量ではなく、熱放射の量子論とCIE測色系を結びつけた量である。

## 参考資料

- 公益社団法人 色彩検定協会「色彩検定とは」。3級では光の基礎知識、2級ではLEDなどの照明を扱う。https://www.aft.or.jp/pages/feature/level
- 公益社団法人 色彩検定協会「公式テキスト3級目次」。「光と色―照明と色の見え方」。https://www.aft.or.jp/images/text_of-3st-grade_mokuji.pdf
- 公益社団法人 色彩検定協会「公式テキスト2級目次」。「光と色―照明の表し方」「白熱ランプ」「LED」。https://www.aft.or.jp/images/text_of-2st-grade_mokuji.pdf
- CIE, *International Lighting Vocabulary*, 17-24-004 “Planckian radiator”. https://cie.co.at/eilvterm/17-24-004
- CIE, *International Lighting Vocabulary*, 17-24-005 “Planck's law”. https://cie.co.at/eilvterm/17-24-005
- CIE, *International Lighting Vocabulary*, 17-24-007 “Stefan–Boltzmann's law”. https://cie.co.at/eilvterm/17-24-007
- CIE, *International Lighting Vocabulary*, 17-24-009 “emissivity”. https://cie.co.at/eilvterm/17-24-009
- CIE, *International Lighting Vocabulary*, 17-23-059 “Planckian locus”. https://cie.co.at/eilvterm/17-23-059
- CIE, *International Lighting Vocabulary*, 17-23-067 “colour temperature”. https://cie.co.at/eilvterm/17-23-067
- CIE, *International Lighting Vocabulary*, 17-23-068 “correlated colour temperature”. https://cie.co.at/eilvterm/17-23-068
- CIE, *International Lighting Vocabulary*, 17-21-090 “luminous efficacy of radiation”. https://cie.co.at/eilvterm/17-21-090
- CIE, “CIE spectral luminous efficiency for photopic vision”, data set based on CIE 018:2019. https://cie.co.at/datatable/cie-spectral-luminous-efficiency-photopic-vision
- CIE, *Colorimetry — Part 2: CIE Standard Illuminants*. CIE standard illuminant A is based on a Planckian radiator at approximately 2856 K; D65 represents daylight of approximately 6500 K CCT. https://www.cie.co.at/publications/colorimetry-part-2-cie-standard-illuminants-0
- NIST, Watanabe, H. et al., “Spectral Emissivity Measurements”, 2014. https://www.nist.gov/publications/spectral-emissivity-measurements
- OpenStax, *University Physics Volume 3*, §6.1 “Blackbody Radiation”. https://openstax.org/books/university-physics-volume-3/pages/6-1-blackbody-radiation
- U.S. Department of Energy, “LED Basics”. https://www.energy.gov/cmei/ssl/led-basics
- Eugene Hecht, *Optics*, 5th ed., Pearson, 2017.