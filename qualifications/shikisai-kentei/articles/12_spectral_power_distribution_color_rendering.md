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

### 6.1　物体色の測色では、照明の明るさを正規化する

相対的な物体色を求めるとき、CIE測色では完全拡散反射面 $\rho(\lambda)=1$ の $Y$ が100になるように規格化する。標準イルミナントの相対分光分布を $S(\lambda)$ とすれば

$$
\boxed{
k=
\frac{100}{\int S(\lambda)\bar y(\lambda)\,d\lambda}
}
$$

と置き、

$$
X=k\int S(\lambda)\rho(\lambda)\bar x(\lambda)\,d\lambda,
$$

$$
Y=k\int S(\lambda)\rho(\lambda)\bar y(\lambda)\,d\lambda,
$$

$$
Z=k\int S(\lambda)\rho(\lambda)\bar z(\lambda)\,d\lambda
$$

とする。

この正規化によって、単に照明全体を2倍明るくしただけの変化と、スペクトル形状が変わったために物体色が変化する現象を分けて扱える。演色で重要なのは主として後者である。

### 6.2　「同じ白色なのに演色が違う」を線形代数で書く

波長を $n$ 個に離散化し、照明スペクトルを

$$
\mathbf{s}\in\mathbb{R}^n
$$

とする。各波長での等色関数を並べた行列を

$$
C=
\begin{pmatrix}
\bar x_1&\bar y_1&\bar z_1\\
\vdots&\vdots&\vdots\\
\bar x_n&\bar y_n&\bar z_n
\end{pmatrix}
$$

とすれば、光源の三刺激値は定数因子を除いて

$$
\mathbf{t}=C^{\mathsf T}\mathbf{s}\,\Delta\lambda
$$

である。

同じ明るさ・同じXYZに規格化した2つの白色光源 $\mathbf{s}_1,\mathbf{s}_2$ があるとする。差を

$$
\delta\mathbf{s}=\mathbf{s}_1-\mathbf{s}_2
$$

とすると、光源そのものは等色なので

$$
\boxed{
C^{\mathsf T}\delta\mathbf{s}=\mathbf{0}
}
$$

である。つまり $\delta\mathbf{s}$ は、XYZへの射影では見えなくなる零空間成分である。

ところが、物体の分光反射率を対角行列

$$
D_{\rho}=\operatorname{diag}(\rho_1,\rho_2,\ldots,\rho_n)
$$

で表すと、その物体から返る光のXYZ差は

$$
\boxed{
\Delta\mathbf{t}_{\rho}
=
C^{\mathsf T}D_{\rho}\delta\mathbf{s}\,\Delta\lambda
}
$$

となる。

一般には

$$
C^{\mathsf T}\delta\mathbf{s}=0
\quad\not\Rightarrow\quad
C^{\mathsf T}D_{\rho}\delta\mathbf{s}=0
$$

である。物体の反射率が波長ごとに照明差を選択的に重み付けするため、光源単体では見えなかったスペクトル差が、物体色の差として現れる。

これが「同じ白色点の照明でも演色が異なる」ことの数学的な核心である。

### 6.3　微小な分光変化が物体色へどう伝わるか――感度核

照明設計では「赤色域を少し増やしたら物体色がどちらへ動くか」のように、スペクトルの微小変化に対する色の感度を知りたいことがある。ここでは6.1の正規化を含めて、その関係を一次摂動として導く。

等色関数をベクトル

$$
\mathbf{c}(\lambda)=
\begin{pmatrix}
\bar x(\lambda)\\
\bar y(\lambda)\\
\bar z(\lambda)
\end{pmatrix}
$$

とし、

$$
Q=\int S(\lambda)\bar y(\lambda)\,d\lambda,
\qquad
\mathbf{A}_{\rho}=\int S(\lambda)\rho(\lambda)\mathbf{c}(\lambda)\,d\lambda
$$

と置くと、正規化された物体色の三刺激値は

$$
\mathbf{t}_{\rho}
=
\frac{100}{Q}\mathbf{A}_{\rho}
$$

である。照明を

$$
S(\lambda)\rightarrow S(\lambda)+\varepsilon\,\delta S(\lambda)
$$

だけ変化させる。さらに

$$
q=\int \delta S(\lambda)\bar y(\lambda)\,d\lambda,
\qquad
\mathbf{B}_{\rho}=\int \delta S(\lambda)\rho(\lambda)\mathbf{c}(\lambda)\,d\lambda
$$

とすれば、$\varepsilon$ の一次までで

$$
\boxed{
\delta\mathbf{t}_{\rho}
=
\frac{100}{Q}
\left(
\mathbf{B}_{\rho}
-
\frac{q}{Q}\mathbf{A}_{\rho}
\right)
}
$$

となる。第1項は追加・削減した波長成分が物体の反射率と等色関数を通して直接XYZを動かす効果、第2項は白色基準の $Y=100$ を保つための正規化補正である。

この式は積分核の形にも書ける。

$$
\boxed{
\delta\mathbf{t}_{\rho}
=
\int
\mathbf{K}_{\rho}(\lambda)\,
\delta S(\lambda)\,d\lambda
}
$$

ただし

$$
\boxed{
\mathbf{K}_{\rho}(\lambda)
=
\frac{100}{Q}
\left[
\rho(\lambda)\mathbf{c}(\lambda)
-
\frac{\mathbf{A}_{\rho}}{Q}\bar y(\lambda)
\right]
}
$$

である。この $\mathbf{K}_{\rho}(\lambda)$ を、照明スペクトルに対する物体色の感度核とみなせる。どの波長を変えたときXYZがどの方向へ動くかは、光源だけでなく物体の $\rho(\lambda)$ に依存する。

特に、照明全体を同じ割合だけ増やす

$$
\delta S(\lambda)=\alpha S(\lambda)
$$

という変化では

$$
\mathbf{B}_{\rho}=\alpha\mathbf{A}_{\rho},
\qquad
q=\alpha Q
$$

だから

$$
\boxed{
\delta\mathbf{t}_{\rho}=\mathbf{0}
}
$$

となる。つまり相対測色では、単なる光量の増減は色を変えず、スペクトルの「形」が変わったときに初めて色が動く。この結果は、演色性が照明の明るさそのものではなく分光構成に依存することを数式で示している。

さらにXYZからxy色度への変化は、$T=X+Y+Z$ と置けば

$$
\begin{pmatrix}
\delta x\\
\delta y
\end{pmatrix}
\approx
\frac{1}{T^2}
\begin{pmatrix}
Y+Z & -X & -X\\
-Y & X+Z & -Y
\end{pmatrix}
\begin{pmatrix}
\delta X\\
\delta Y\\
\delta Z
\end{pmatrix}
$$

と一次近似できる。したがって物理的な因果関係は

$$
\boxed{
\delta S(\lambda)
\rightarrow
\rho(\lambda)\delta S(\lambda)
\rightarrow
\delta XYZ
\rightarrow
\delta(x,y)
}
$$

と連続的に追跡できる。たとえば深赤色域の放射を増やしたとき、長波長反射率の高い赤い物体ではその影響が大きく、長波長をほとんど反射しない青い物体では小さい。これが「同じ照明変更でも物体ごとに色の動き方が違う」理由である。

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

従来のCIE一般演色評価数 $R_a$ は8個の低〜中彩度試験色の平均に依存するため、固体照明では色忠実度を十分に表さない場合がある。この問題を受け、CIEはCIE 224:2017で99個の試験色を用いる一般色忠実度指数 $R_f$ を定義した。

さらにCIEは2025年のPosition Statement CIE PS 002:2025で、$R_f$ の利用実績に反証となる問題が見つかっていないとして、照明分野で $R_f$ の採用を開始し、関連する規制・仕様・規格では将来的に $R_a$ を置き換えることを推奨した。移行期間は両者を並行して報告することが推奨されている。

したがって現在の大学レベルの理解としては

$$
\boxed{
R_a\text{ は歴史的に重要な指標だが、色忠実度評価は }R_f\text{ へ更新が進んでいる}
}
$$

と整理するとよい。ただし $R_f$ も「好ましさ」や「鮮やかさ」を含む総合的な色品質尺度ではなく、基準光に対する色忠実度を評価する尺度である。

### 9.1　$R_f$ は99色の「平均的なずれ」を評価する

CIE 224:2017では、従来の $R_a$ より広い色域を代表する99個の試験色を使い、試験光源と基準光源の下での色のずれを比較する。色差の計算には、知覚的な均等性を改善したCAM02-UCSが用いられる。

試験色 $i$ のCAM02-UCS座標を、試験光源下で

$$
\mathbf{p}_{t,i}
=
\begin{pmatrix}
J'_{t,i}\\
a'_{t,i}\\
b'_{t,i}
\end{pmatrix}
$$

基準光源下で

$$
\mathbf{p}_{r,i}
=
\begin{pmatrix}
J'_{r,i}\\
a'_{r,i}\\
b'_{r,i}
\end{pmatrix}
$$

と書けば、各試験色の色差はユークリッド距離

$$
\boxed{
\Delta E'_i
=
\left\|\mathbf{p}_{t,i}-\mathbf{p}_{r,i}\right\|_2
=
\sqrt{
(J'_{t,i}-J'_{r,i})^2
+(a'_{t,i}-a'_{r,i})^2
+(b'_{t,i}-b'_{r,i})^2
}
}
$$

として扱える。99色について

$$
\boxed{
\overline{\Delta E'}
=
\frac{1}{99}
\sum_{i=1}^{99}\Delta E'_i
}
$$

を求め、その平均色差をCIE 224で規定されたスケーリングによって忠実度指数 $R_f$ に変換する。全試験色が基準光と一致すれば $\overline{\Delta E'}=0$ となり、$R_f=100$ である。平均色差が大きくなるほど $R_f$ は低下する。

物理過程まで戻せば、試験光源と基準光源の分光分布差 $\delta S(\lambda)$ が各試験色の反射率 $\rho_i(\lambda)$ によって異なる重みを受け、

$$
\delta S(\lambda)
\rightarrow
\rho_i(\lambda)\delta S(\lambda)
\rightarrow
\Delta XYZ_i
\rightarrow
\Delta E'_i
\rightarrow
R_f
$$

と伝播する。したがって演色評価は、単に光源スペクトル同士を比較するのではなく、「多数の物体を通したときに色刺激がどれだけ変わるか」を統計的に要約する操作である。

ただし $R_f$ は平均値なので、同じ $R_f$ でも色相ごとの誤差分布は異なりうる。特定の赤だけが大きくずれる光源と、全色が少しずつずれる光源が同じ総合値になる可能性がある。このため、単一の忠実度指数だけで照明の色品質すべてを表すことはできない。

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
- Commission Internationale de l'Éclairage (CIE), CIE 015:2018, *Colorimetry, 4th Edition*. https://cie.co.at/publications/colorimetry-4th-edition
- CIE, CIE 013.3-1995, *Method of Measuring and Specifying Colour Rendering Properties of Light Sources*. https://cie.co.at/publications/method-measuring-and-specifying-colour-rendering-properties-light-sources
- CIE, *Spectral radiance factors of 14 test samples for the CIE colour rendering index calculation*. DOI: 10.25039/CIE.DS.wuiuu9cz. https://cie.co.at/datatable/spectral-radiance-factors-14-test-samples-cie-colour-rendering-index-calculation
- CIE, ISO/CIE 11664-2:2022, *Colorimetry — Part 2: CIE Standard Illuminants*. https://www.cie.co.at/publications/colorimetry-part-2-cie-standard-illuminants-0
- CIE, CIE 224:2017, *CIE 2017 Colour Fidelity Index for accurate scientific use*. https://www.cie.co.at/publications/cie-2017-colour-fidelity-index-accurate-scientific-use
- CIE, *Spectral radiance factors of 99 test samples for the CIE colour fidelity index calculation*. DOI: 10.25039/CIE.DS.wi5idbqu. https://cie.co.at/datatable/spectral-radiance-factors-99-test-samples-cie-colour-fidelity-index-calculation
- CIE, CIE PS 002:2025, *CIE Position Statement on Colour Quality Metrics, 2nd Edition*. https://cie.co.at/publications/cie-ps-0022025-cie-position-statement-colour-quality-metrics-2nd-edition
- Illuminating Engineering Society (IES), *PS-11-18: IES Position on TM-30-18, IES Method for Evaluating Light Source Color Rendition*. https://ies.org/advocacy/ps-11-18/
- National Institute of Standards and Technology (NIST), Davis, W. L. & Ohno, Y., “Toward an Improved Color Rendering Metric,” 2005. https://www.nist.gov/publications/toward-improved-color-rendering-metric
- U.S. Department of Energy, “Color and Spectrum.” https://www.energy.gov/cmei/ssl/color-and-spectrum
- U.S. Department of Energy, *LED Color Characteristics* fact sheet. https://www.energy.gov/sites/prod/files/2016/08/f33/led-color-characteristics-factsheet.pdf
