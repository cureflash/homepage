# 透明な物質に、なぜ色がつくのか

青いガラス、緑色の溶液、赤いインク。向こう側が見えるほど透明なのに、はっきり色がついている。

ここで最初に区別したいのが、「透明」と「無色」である。透明とは、光が物質を通過して向こう側の像を認識できることを指す。一方、無色とは可視域で波長による透過の偏りが小さいことを指す。したがって、特定波長だけを強く吸収しながら、残りの可視光を十分に通す物質は「有色透明」になれる。

色彩検定では、3級で光の基礎知識、2級で光の性質や照明による色の見えを扱う。本記事ではその「波長によって吸収・透過の割合が異なる」という説明を、Beer–Lambert則、吸収断面積、複素屈折率、CIE測色までつなげて物理的に掘り下げる。

## 1　白色光は一種類の光ではない

可視光は、波長の異なる電磁波の集まりである。光子1個のエネルギーは

$$
E=h\nu=\frac{hc}{\lambda}
$$

で表される。

ここで $h$ はPlanck定数、$\nu$ は振動数、$c$ は真空中の光速、$\lambda$ は真空波長である。波長が短いほど、1光子あたりのエネルギーは大きい。

物質中の電子や分子は、任意のエネルギーを連続的に取るのではなく、量子化されたエネルギー準位を持つ。二つの準位の差を

$$
\Delta E=E_2-E_1
$$

とすると、

$$
\Delta E=\frac{hc}{\lambda}
$$

を満たす光が、その遷移に許されている場合に吸収される。

したがって物質は、入ってきた白色光を一様に弱めるとは限らない。ある波長域を強く吸収し、別の波長域をよく通すことができる。この波長選択性が、物質の色の出発点になる。

## 2　色を決めるのは「どの波長を残したか」

入射光の分光強度を $I_0(\lambda)$、物質を通過した後を $I(\lambda)$ とする。

無色透明な理想物質なら、可視域でおおむね

$$
I(\lambda)\approx kI_0(\lambda)
$$

のように、どの波長も似た割合で弱くなる。

一方、有色透明物質では波長によって減衰率が違う。

$$
I(\lambda)\neq kI_0(\lambda)
$$

たとえば青付近の光を強く吸収すれば、透過光のスペクトルから青成分が相対的に減る。眼に届くのは「吸収された色」ではなく「吸収されずに残った光」である。

このため、物質の色を理解するときは単に「光を吸収する」と覚えるのでは不十分である。重要なのは、吸収率が波長によってどう変化するか、すなわち吸収スペクトルである。

## 3　Beer–Lambert則はなぜ指数関数になるのか

薄い色水に同じ色素を追加すると、色は濃くなる。この関係を定量化するのがBeer–Lambert則である。

光が微小距離 $dx$ だけ進む間に失われる強度 $dI$ が、その時点の光強度 $I$ に比例するとする。

$$
dI=-\alpha I\,dx
$$

ここで $\alpha$ は吸収係数である。変数分離すると

$$
\frac{dI}{I}=-\alpha\,dx
$$

なので、均質な試料について $0$ から $l$ まで積分すれば

$$
\ln\frac{I}{I_0}=-\alpha l
$$

すなわち

$$
I=I_0e^{-\alpha l}
$$

となる。

指数関数になる本質は、「一定距離ごとに一定量の光が失われる」のではなく、「その時点で残っている光の一定割合が失われる」ことにある。

透過率を

$$
T=\frac{I}{I_0}
$$

とすると、

$$
T=e^{-\alpha l}
$$

である。

分光分析では常用対数を用いた吸光度

$$
A=\log_{10}\left(\frac{I_0}{I}\right)=-\log_{10}T
$$

を使う。したがって

$$
A=\frac{\alpha l}{\ln 10}
$$

となる。

希薄溶液では吸収係数が濃度 $c$ に比例するので、これを

$$
A=\varepsilon cl
$$

と書く。$\varepsilon$ はモル吸光係数である。つまりBeer–Lambert則で濃度に対して線形なのは透過率 $T$ ではなく吸光度 $A$ である。

## 4　吸収係数を「光子が分子に当たる確率」から見る

Beer–Lambert則は、より微視的には吸収断面積から理解できる。

吸収体の数密度を $N$、1個の吸収体が光子を吸収する有効断面積を $\sigma$ とする。微小距離 $dx$ を進む間に光子が吸収される確率は、希薄で独立な吸収体なら

$$
N\sigma\,dx
$$

に比例する。したがって

$$
dI=-N\sigma I\,dx
$$

となり、巨視的な吸収係数は

$$
\alpha=N\sigma
$$

と書ける。

したがって

$$
I=I_0e^{-N\sigma l}
$$

である。吸光度は

$$
A=\frac{N\sigma l}{\ln 10}
$$

となる。

ここで $N$ がモル濃度に比例するため、$A=\varepsilon cl$ が得られる。つまり「濃度が高いほど色が濃くなる」という巨視的な経験則は、「単位体積あたりの吸収体が増え、光子が吸収される確率が増える」という統計的な過程として説明できる。

さらに実際には

$$
\sigma=\sigma(\lambda)
$$

であり、分子は波長ごとに異なる吸収確率を持つ。この波長依存性が吸収スペクトルである。

## 5　吸収は複素屈折率の虚部としても表せる

古典電磁気学では、吸収を複素屈折率

$$
\tilde n(\lambda)=n(\lambda)+i\kappa(\lambda)
$$

で表せる。$n$ は通常の屈折率、$\kappa$ は消衰係数である。

真空波数を

$$
k_0=\frac{2\pi}{\lambda_0}
$$

とし、物質中を $z$ 方向へ進む平面波を

$$
E(z,t)=\Re\left\{E_0\exp\left[i\left(k_0\tilde n z-\omega t\right)\right]\right\}
$$

と書くと、複素屈折率の虚部によって電場振幅は

$$
|E(z)|=|E_0|e^{-k_0\kappa z}
$$

と減衰する。

光強度は電場振幅の二乗に比例するので、

$$
I(z)=I_0e^{-2k_0\kappa z}
$$

となる。Beer–Lambert形

$$
I(z)=I_0e^{-\alpha z}
$$

と比較すれば、

$$
\boxed{\alpha(\lambda)=\frac{4\pi\kappa(\lambda)}{\lambda_0}}
$$

が得られる。

したがって、Beer–Lambert則は分光分析だけの経験式ではない。電磁波が吸収性媒質を伝播するときの場の減衰と直接つながっている。

また、$n(\lambda)$ と $\kappa(\lambda)$ は完全に独立ではなく、因果律からKramers–Kronig関係で結び付く。強い吸収帯の近傍では屈折率の波長依存、すなわち分散も大きく変化する。この意味で「吸収」と「屈折」は別々の現象ではなく、同じ物質応答の実部と虚部として扱える。

## 6　実際の透過率には「表面反射」も入る

Beer–Lambert則が記述するのは、主として媒質内部を進む間の減衰である。しかし実物のガラス板やセルでは、空気と試料の境界でも光が反射する。

垂直入射で、入射側の屈折率を $n_1$、試料の複素屈折率を $\tilde n_2$ とすると、Fresnel反射率は

$$
R=\left|\frac{n_1-\tilde n_2}{n_1+\tilde n_2}\right|^2
$$

で与えられる。

したがって、内部多重反射や干渉を無視できる厚い試料なら、測定される透過率は概念的に

$$
T_{\mathrm{meas}}(\lambda)
\approx
T_{12}(\lambda)
T_{23}(\lambda)
e^{-\alpha(\lambda)l}
$$

と分けて考えられる。$T_{12}$ と $T_{23}$ は入口・出口界面での透過率である。

つまり「透過光が減った量」の全部が吸収とは限らない。反射や散乱で検出器に届かなかった光まで含めてしまうと、吸収を過大評価する。このため分光測定では、空セルや溶媒を用いたブランク補正、反射補正、積分球などが重要になる。

## 7　色を扱うなら、吸収係数も波長の関数になる

Beer–Lambert則を色の問題に使うとき最も重要なのは、

$$
\varepsilon=\varepsilon(\lambda),\qquad
\alpha=\alpha(\lambda)
$$

である点だ。

したがって、波長ごとの透過光は

$$
I(\lambda)
=
I_0(\lambda)
10^{-\varepsilon(\lambda)cl}
$$

または

$$
I(\lambda)=I_0(\lambda)e^{-\alpha(\lambda)l}
$$

と書ける。

この式は、物質の色を決める三つの要因を一度に示している。

1. 光源がどんなスペクトルを持つか：$I_0(\lambda)$
2. 物質がどの波長を吸収するか：$\alpha(\lambda)$ または $\varepsilon(\lambda)$
3. どれだけ長い距離を通るか：$l$、溶液ならさらに濃度 $c$

「物体には固有の色が貼り付いている」のではない。光源、物質、厚さ、濃度が変われば、眼に届くスペクトルも変わる。

## 8　分光透過率からXYZへ――物理量が「色」になるまで

透過率を

$$
\tau(\lambda)=\frac{I(\lambda)}{I_0(\lambda)}
$$

とすれば、透過後の分光分布は

$$
S_t(\lambda)=S_0(\lambda)\tau(\lambda)
$$

である。

CIE 1931標準測色系では、これを等色関数 $\bar x(\lambda),\bar y(\lambda),\bar z(\lambda)$ で積分して三刺激値を求める。

$$
X=k\int S_t(\lambda)\bar x(\lambda)\,d\lambda
$$

$$
Y=k\int S_t(\lambda)\bar y(\lambda)\,d\lambda
$$

$$
Z=k\int S_t(\lambda)\bar z(\lambda)\,d\lambda
$$

したがって、透明物体の色は

$$
\alpha(\lambda)
\rightarrow
\tau(\lambda)
\rightarrow
S_t(\lambda)
\rightarrow
(X,Y,Z)
$$

という写像として扱える。

ここで重要なのは、吸収スペクトルそのものが色ではないことである。同じ $\tau(\lambda)$ を持つフィルターでも、光源 $S_0(\lambda)$ が変わればXYZも変わる。また異なる透過スペクトルが同じXYZを与える場合もあり、これはメタメリズムにつながる。

## 9　厚いガラスほど色が濃く見える

Beer–Lambert則には濃度だけでなく光路長 $l$ も含まれている。

$$
A=\varepsilon cl
$$

同じ材質でも、薄い部分より厚い部分のほうが光が長距離を通る。その結果、弱い吸収でも積み重なり、厚い部分では色が目立つようになる。

厚いガラスの断面が緑がかって見えたり、深い液体ほど色が濃く見えたりする現象は、「材質そのものが途中から別の色になる」のではない。光路長が増えたため、特定波長の透過率が指数関数的に低下した結果である。

## 10　では、なぜ特定波長だけを吸収できるのか

ここから先は電子構造の問題になる。

物質の吸収帯は、電子のエネルギー準位によって決まる。代表的なものには、

- 有機色素に多い $\pi\rightarrow\pi^*$ 遷移
- 遷移金属イオンで現れる $d\rightarrow d$ 遷移
- 金属と配位子の間で電子密度が移る電荷移動遷移
- 結晶格子の欠陥に由来する吸収

などがある。

ただし、$\Delta E=hc/\lambda$ を満たすだけで必ず強く吸収されるわけではない。遷移確率は、量子力学的な選択則や遷移双極子モーメントにも依存する。そのため、ほぼ同じエネルギー差を持つ遷移でも吸収強度は大きく異なることがある。

物質の色は次の因果関係でつながる。

> 原子・分子・結晶構造  
> → 電子状態と遷移確率  
> → $\sigma(\lambda)$・$\alpha(\lambda)$  
> → 透過スペクトル  
> → XYZなどの測色値  
> → 色知覚

色彩検定では主に後半の「光が物体に当たり、特定波長が吸収・反射・透過されて色が見える」という部分を扱う。本教材では、その原因を電子状態と電磁波の伝播までさかのぼる。

## 11　Beer–Lambert則がそのまま使えない場合

Beer–Lambert則は万能ではない。単純な形が成立するには、吸収体が独立に振る舞い、試料が均質で、測定光の条件も適切である必要がある。

実際の試料では、

- 高濃度で分子間相互作用が無視できない
- 粒子による散乱が起こる
- 化学平衡によって吸収種自体が変わる
- 蛍光など別の光学過程が起こる
- 入射光の帯域幅が広すぎる
- 表面反射を吸収として数えてしまう
- 強い光で飽和吸収や非線形光学効果が起こる

といった理由で単純な比例関係からずれる。

顔料を混ぜた塗料のように散乱が強い物体色では、Beer–Lambert則だけでは足りない。そこでは吸収と散乱を同時に扱うKubelka–Munk理論や放射輸送方程式が必要になる。

## 12　色彩検定で押さえるところ

検定対策としては、まず次を押さえればよい。

- 色が見えるには光源・物体・眼が関係する
- 物体は波長によって光を反射・吸収・透過する割合が異なる
- 透明物体でも、波長選択的な吸収があれば色を持つ
- 光源の分光分布が変われば、同じ物体でも見え方が変わる

大学レベルでは、これを

$$
I(\lambda)=I_0(\lambda)e^{-\alpha(\lambda)l}
$$

$$
\alpha(\lambda)=N\sigma(\lambda)
$$

$$
\alpha(\lambda)=\frac{4\pi\kappa(\lambda)}{\lambda_0}
$$

と三つの異なる視点で理解できる。

最初の式は巨視的な減衰、二つ目は吸収体との確率的相互作用、三つ目は電磁波の伝播を表す。これらは同じ吸収現象を、分光分析・粒子像・電磁気学から見たものである。

## 参考資料

- [色彩検定協会「各級の目安」](https://www.aft.or.jp/pages/feature/level)
- [色彩検定協会「公式テキスト3級目次」](https://www.aft.or.jp/images/text_of-3st-grade_mokuji.pdf)
- [IUPAC Gold Book: Beer–Lambert law](https://goldbook.iupac.org/terms/view/B00626)
- [IUPAC Gold Book: absorption pathlength](https://goldbook.iupac.org/terms/view/A00042)
- [The Feynman Lectures on Physics, Vol. I, Ch. 31: The Origin of the Refractive Index](https://www.feynmanlectures.caltech.edu/I_31.html)
- [California State University, Fullerton, Physics 227 Lab: Spectroscopy II](https://physics.fullerton.edu/department/lab-schedules/lab_pages/modern/227_10_spectroscopy2/227L_10_Spectro2AbsNBeers_v042522a.pdf)
- [HyperPhysics: Fresnel's Equations](https://hyperphysics.phy-astr.gsu.edu/hbase/phyopt/freseq.html)
- [CIE 015:2018 Colorimetry, 4th Edition](https://www.cie.co.at/publications/colorimetry-4th-edition)
- [CIE 1931 colour-matching functions, 2 degree observer](https://cie.co.at/datatable/cie-1931-colour-matching-functions-2-degree-observer)
