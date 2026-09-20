# 同じ白色光なのに、なぜ物の色が違って見えるのか――分光分布と演色性

色彩検定では、3級で「照明と色の見え方」、2級で照明をより実践的に扱う。ここで重要なのは、照明の「白さ」や「明るさ」が同じでも、物体の色が同じに見えるとは限らないことである。

原因は、光源の色を1個の色度や色温度だけで表しても、光源が各波長にどれだけのエネルギーを持つかという分光分布までは一意に決まらないからである。

物体色の物理は、第一近似では次の積で決まる。

$$
\boxed{
\text{眼へ届くスペクトル}
\propto
\text{照明の分光分布}
\times
\text{物体の分光反射率}
}
$$

同じ白色光に見える2つの照明でも、分光分布が違えば、この積が変わる。その結果、同じ服、同じ絵、同じ肌でも色の見え方が変わる。

本記事では、この現象を分光分布、反射率、XYZ三刺激値、条件等色、演色評価まで数式でつなげる。

## 1　色彩検定との接続

色彩検定協会は3級で光の基礎や照明を扱い、2級では「色の見えに関わる照明を実践的に理解する」ことを学習内容として示している。また2級公式テキストではLEDなどの照明が扱われる。

試験対策では「照明によって物体色の見え方が変わる」と理解すればよいが、大学レベルではその因果関係を次の4段階に分解できる。

1. 光源は波長ごとに異なる強度をもつ。
2. 物体は波長ごとに異なる割合で光を反射する。
3. 反射されたスペクトルが眼へ届く。
4. そのスペクトルを等色関数で積分するとXYZ三刺激値が得られる。

つまり、照明と物体色の関係は「色名」ではなくスペクトルの積として扱うべき問題である。

## 2　光源の正体は「分光分布」である

光源が波長 $\lambda$ ごとにどれだけの放射を含むかを表す関数を、ここでは分光分布

$$
S(\lambda)
$$

と書く。

白熱電球、昼光、蛍光ランプ、白色LEDは、すべて白っぽく見えることがある。しかし $S(\lambda)$ の形は大きく異なる。

白熱電球は熱放射に近いため、可視域では長波長側へ向かって比較的なめらかに強くなる。一方、一般的な青色LED＋蛍光体方式の白色LEDでは、青色LED由来の比較的狭いピークと、蛍光体由来の広い発光帯が重なって白色を作る。

RGB型の白色光源なら

$$
S(\lambda)
=
a_R S_R(\lambda)
+a_G S_G(\lambda)
+a_B S_B(\lambda)
$$

のように、複数の狭帯域スペクトルの加算でも白を作れる。

したがって

$$
\boxed{
\text{白く見える} \not\Rightarrow \text{同じスペクトル}
}
$$

である。

## 3　色度が同じでもスペクトルは一意に決まらない

光源スペクトル $S(\lambda)$ からXYZ三刺激値は

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

色度は

$$
x=\frac{X}{X+Y+Z},\qquad
y=\frac{Y}{X+Y+Z}
$$

である。

ここで重要なのは、$S(\lambda)$ は数百個の波長サンプルを持つ高次元情報なのに、XYZは3個の数値、xy色度なら2個の数値しかないことである。

したがって、異なるスペクトル

$$
S_1(\lambda)\neq S_2(\lambda)
$$

であっても

$$
(X_1,Y_1,Z_1)=(X_2,Y_2,Z_2)
$$

となる場合がある。

これは条件等色、すなわちメタメリズムの一形態である。

つまり、2つの光源が直接見たときに同じ白色に見えても、内部のスペクトルは異なりうる。

## 4　物体は「反射率スペクトル」を持つ

不透明物体の色を考えるとき、その物体が波長ごとにどの割合の光を反射するかを分光反射率

$$
\rho(\lambda)
$$

で表す。

$0\leq\rho(\lambda)\leq1$ であり、赤い物体なら一般に長波長側の反射率が高く、青緑付近の反射率が低い。

照明の分光放射照度を $E_{e,\lambda}(\lambda)$ とすると、理想的なLambert拡散反射面の分光放射輝度は

$$
\boxed{
L_{e,\lambda}(\lambda)
=
\frac{\rho(\lambda)}{\pi}
E_{e,\lambda}(\lambda)
}
$$

となる。

形状や鏡面反射を無視して相対的な色だけを見るなら

$$
\boxed{
S_r(\lambda)
\propto
S_i(\lambda)\rho(\lambda)
}
$$

と考えればよい。

ここで $S_i(\lambda)$ は入射光、$S_r(\lambda)$ は反射光のスペクトルである。

この式が「照明で物体色が変わる」ことの物理的な本体である。

## 5　物体は、照明に存在しない波長を反射できない

たとえば赤い布の分光反射率を

$$
\rho_R(\lambda)
$$

とする。

この布が600〜700 nm付近をよく反射するとしても、照明自身がその波長をほとんど含んでいなければ

$$
S_i(\lambda)\approx0
$$

なので

$$
S_r(\lambda)
=
S_i(\lambda)\rho_R(\lambda)
\approx0
$$

となる。

つまり、物体が「赤を持っている」わけではない。物体は入射した光のうち特定の波長を選択的に反射しているだけである。

赤成分の乏しい照明の下では、赤い物体は本来の鮮やかな赤として見えにくい。

逆に、ある波長域が強い照明では、その波長をよく反射する物体の色が強調される。

## 6　照明が変わるとXYZも変わる

物体から眼へ届くスペクトルを

$$
S_r(\lambda)
=S_i(\lambda)\rho(\lambda)
$$

とすれば、物体色のXYZは

$$
X=k\int S_i(\lambda)\rho(\lambda)\bar{x}(\lambda)\,d\lambda
$$

$$
Y=k\int S_i(\lambda)\rho(\lambda)\bar{y}(\lambda)\,d\lambda
$$

$$
Z=k\int S_i(\lambda)\rho(\lambda)\bar{z}(\lambda)\,d\lambda
$$

となる。

物体の反射率 $\rho(\lambda)$ が同じでも、照明 $S_i(\lambda)$ が変われば積分値 $X,Y,Z$ は変わる。

したがって

$$
\boxed{
\rho(\lambda)\text{ が同じ}
\not\Rightarrow
(X,Y,Z)\text{ が同じ}
}
$$

である。

「物体固有の色」という言い方は日常的には便利だが、測色学では物体の分光反射率と照明条件を分けて考える必要がある。

## 7　同じ色温度でも演色は同じではない

色温度や相関色温度は、光源の白色点が黒体軌跡のどこに近いかを表す指標である。

しかし、色温度は分光分布そのものではない。

2つの光源がともに

$$
T_{\mathrm{CCT}}\approx5000\ \mathrm{K}
$$

であっても、分光分布は大きく異なりうる。

したがって

$$
\boxed{
\text{同じCCT}
\not\Rightarrow
\text{同じ演色}
}
$$

である。

色温度は主として光源そのものの色みを表し、演色性はその光源で照らされた物体の色がどのように見えるかを評価する概念である。

この2つを混同しないことが重要である。

## 8　演色性は「基準光と比べて物体色がどれだけずれるか」を測る

CIEの色再現評価では、試験光源と基準光源で同じ試験色を照らし、その色のずれを比較する。

CIE 13.3の一般演色評価数では、試験色 $i$ の色差を $\Delta E_i$ とすると、特殊演色評価数は

$$
\boxed{
R_i=100-4.6\Delta E_i
}
$$

として定義される。

一般演色評価数 $R_a$ は最初の8試験色について

$$
\boxed{
R_a
=
\frac{1}{8}\sum_{i=1}^{8}R_i
}
$$

で平均する。

概念的には

$$
\text{試験光源}
\rightarrow
\text{試験色の見え}
$$

と

$$
\text{基準光源}
\rightarrow
\text{試験色の見え}
$$

の差が小さいほど、$R_i$ や $R_a$ が高くなる。

CIE 13.3は14個の試験色データを定め、そのうち最初の8色を一般演色評価数に使う。

ただし $R_a$ は色の見えを完全に表す尺度ではない。8色の平均なので、特定の色の大きなずれが平均の中に埋もれることがある。

## 9　LEDでRaだけを見ると不十分な場合がある

白熱電球のような比較的なめらかなスペクトルに対し、LEDは設計によってスペクトル形状を大きく変えられる。

そのため、同じ $R_a$ を持つ2つのLEDでも、特定の波長域の強弱が異なり、赤・緑・青などの物体色の再現が異なる場合がある。

NISTは、従来のCRIが8個の低〜中彩度試験色の平均に依存するため、ピークの多い固体照明では視覚評価と一致しにくい場合があることを指摘している。

CIEもこの限界を認め、2017年にはより科学的な色忠実度評価のためCIE 224:2017を公表している。

したがって大学レベルでは

$$
\boxed{
R_a\text{ は有用だが、光源スペクトルの完全な要約ではない}
}
$$

と理解すべきである。

## 10　「白色点」と「物体色再現」を分ける

照明を考えるときは、少なくとも次の3段階を区別する必要がある。

### 10.1 光源そのものの色

光源を直接測色して得られる

$$
(x,y),\quad T_{\mathrm{CCT}}
$$

などで表す。

### 10.2 光源のスペクトル

$$
S_i(\lambda)
$$

で表す。

### 10.3 物体を照らした結果

$$
S_r(\lambda)
=
S_i(\lambda)\rho(\lambda)
$$

をXYZへ積分して決まる。

光源の白色点が同じでも、2が違えば3は変わりうる。

つまり、照明の色を評価する問題と、照明が物体色をどう再現するかという問題は別である。

## 11　色恒常性とは別の問題である

人間の視覚には、照明が変化しても物体色をある程度一定に知覚する色恒常性がある。

しかし色恒常性が働くからといって、物理的な反射スペクトルが変わらないわけではない。

物理的には

$$
S_r(\lambda)
=S_i(\lambda)\rho(\lambda)
$$

なので、照明が変われば眼へ届くスペクトルは変わる。

その変化を視覚系がどこまで補正するかが色恒常性である。

したがって

- 本記事：照明スペクトルと物体反射率が反射光をどう決めるか
- 色恒常性：変化した入力を視覚系がどう補正するか

という別の階層の問題である。

## 12　数値例――赤成分が半分になるとどうなるか

単純化のため、可視光を青・緑・赤の3帯域だけで考える。

物体の反射率を

$$
\boldsymbol{\rho}
=
\begin{pmatrix}
0.1\\
0.2\\
0.8
\end{pmatrix}
$$

とする。赤をよく反射する物体である。

照明Aを

$$
\mathbf{S}_A
=
\begin{pmatrix}
1\\
1\\
1
\end{pmatrix}
$$

とすると、反射光は成分ごとの積

$$
\mathbf{S}_{r,A}
=
\mathbf{S}_A\odot\boldsymbol{\rho}
=
\begin{pmatrix}
0.1\\
0.2\\
0.8
\end{pmatrix}
$$

となる。

赤成分の弱い照明Bを

$$
\mathbf{S}_B
=
\begin{pmatrix}
1\\
1\\
0.5
\end{pmatrix}
$$

とすると

$$
\mathbf{S}_{r,B}
=
\begin{pmatrix}
0.1\\
0.2\\
0.4
\end{pmatrix}
$$

となる。

物体そのものは変わっていないのに、眼へ届く赤成分は半分になる。

現実の光は3帯域ではなく連続スペクトルだが、計算原理は同じである。

## 13　色彩検定の表現を大学物理へ翻訳する

| 色彩検定での理解 | 物理・測色学での意味 |
|---|---|
| 照明によって色の見え方が変わる | $S_r(\lambda)=S_i(\lambda)\rho(\lambda)$ が変化する |
| 同じ白色光でも見え方が違う | 同じ色度でも $S_i(\lambda)$ は一意ではない |
| 色温度 | 光源色の黒体軌跡への近さを表す指標 |
| 演色性 | 基準光に対する物体色の再現の近さ |
| 高演色 | 複数の試験色で基準光との色差が小さい |
| LEDで色の見えが変わる | 発光スペクトルのピーク・谷が物体反射率との積に現れる |

試験で覚える用語は、すべて

$$
\boxed{
S_i(\lambda)
\rightarrow
S_i(\lambda)\rho(\lambda)
\rightarrow
(X,Y,Z)
}
$$

という一本の物理過程にまとめられる。

## 14　まとめ

物体色は、物体だけでは決まらない。

照明スペクトルを $S_i(\lambda)$、物体の分光反射率を $\rho(\lambda)$ とすれば

$$
\boxed{
S_r(\lambda)
=
S_i(\lambda)\rho(\lambda)
}
$$

が眼へ届く光を決める。

その反射光から

$$
X=k\int S_r(\lambda)\bar{x}(\lambda)d\lambda
$$

$$
Y=k\int S_r(\lambda)\bar{y}(\lambda)d\lambda
$$

$$
Z=k\int S_r(\lambda)\bar{z}(\lambda)d\lambda
$$

として色刺激が決まる。

したがって、光源が同じ白色点や色温度を持っていても、分光分布が異なれば物体色は異なって見えうる。

色彩検定でいう「照明と色の見え方」を大学レベルで理解する核心は、

$$
\boxed{
\text{照明}\times\text{反射率}\rightarrow\text{スペクトル}\rightarrow\text{色}
}
$$

という因果関係を理解することである。

## 参考資料

- 公益社団法人 色彩検定協会, 「色彩検定とは」. https://www.aft.or.jp/pages/feature/level
- 公益社団法人 色彩検定協会, 「公式テキスト」. https://www.aft.or.jp/pages/official-product-orders
- Commission Internationale de l'Éclairage (CIE), CIE 013.3-1995, *Method of Measuring and Specifying Colour Rendering Properties of Light Sources*. https://cie.co.at/publications/method-measuring-and-specifying-colour-rendering-properties-light-sources
- CIE, *Spectral radiance factors of 14 test samples for the CIE colour rendering index calculation*. DOI: 10.25039/CIE.DS.wuiuu9cz. https://cie.co.at/datatable/spectral-radiance-factors-14-test-samples-cie-colour-rendering-index-calculation
- CIE, ISO/CIE 11664-2:2022, *Colorimetry — Part 2: CIE Standard Illuminants*. https://www.cie.co.at/publications/colorimetry-part-2-cie-standard-illuminants-0
- CIE, CIE 224:2017, *CIE 2017 Colour Fidelity Index for accurate scientific use*. https://www.cie.co.at/publications/cie-2017-colour-fidelity-index-accurate-scientific-use
- National Institute of Standards and Technology (NIST), Davis, W. L. & Ohno, Y., “Toward an Improved Color Rendering Metric,” 2005. https://www.nist.gov/publications/toward-improved-color-rendering-metric
- U.S. Department of Energy, “Color and Spectrum.” https://www.energy.gov/cmei/ssl/color-and-spectrum
- U.S. Department of Energy, *LED Color Characteristics* fact sheet. https://www.energy.gov/sites/prod/files/2016/08/f33/led-color-characteristics-factsheet.pdf
