# XYZ表色系はなぜ作られたのか――色を3つの数値にする

虹のスペクトルは連続している。光源の分光分布も、物体の分光反射率も、本来は波長ごとの値を持つ関数である。それなのに色彩学では、色を $X,Y,Z$ という3つの数値で表せる。

なぜ無限個に近い波長成分を、3個の数に圧縮してよいのか。ここを理解すると、XYZ表色系、xy色度図、L*a*b*、色差、測色、メタメリズムが一本につながる。

色彩検定協会の現行「各級の目安」では、1級の色彩学に「測色」が明記されている。公式テキストでは、「混色」のグラスマンの法則に続いて「XYZ表色系」、さらに「均等色空間とL*a*b*色空間」「測色」が配置されている。本記事では、その数学的な土台を大学レベルまで掘り下げる。

## 1　スペクトルは高次元なのに、色合わせは3変数でできる

ある光の分光分布を $P(\lambda)$ とする。可視域を1 nm刻みで記録すれば、数百個の値からなるデータになる。

しかし人間の明所視では、色合わせに必要な独立変数は基本的に3つで足りる。これは網膜にL・M・Sの3種類の錐体があり、入射スペクトルが最終的に3種類の受容器応答へ圧縮されることと関係している。

ただし重要なのは、XYZがL・M・S錐体の応答そのものではないという点である。XYZは、人間の「等色」という心理物理実験を基礎に定義された測色量である。

色合わせ実験では、観察者に試験光と、3種類の原色を混ぜた光を並べて見せる。観察者は3原色の量を調整し、両者が同じ色に見える点を探す。

ある単色光 $\lambda$ を3原色 $[R],[G],[B]$ で等色できるなら、記号的には

$$
[C_\lambda]
\equiv
\bar r(\lambda)[R]
+\bar g(\lambda)[G]
+\bar b(\lambda)[B]
$$

と書ける。

$\bar r(\lambda),\bar g(\lambda),\bar b(\lambda)$ が色合わせ関数である。波長ごとに「その単色光と同じ色を作るには、各原色をどれだけ混ぜればよいか」を表す。

## 2　なぜRGBの色合わせ関数には負の値が出るのか

実在する3原色を選んでも、可視域のすべての単色光を、その3原色の正の加法混色だけで作れるわけではない。

たとえば、ある試験光を合わせるために

$$
[C_\lambda]+a[R]
\equiv
b[G]+c[B]
$$

としなければならない場合がある。

左辺の試験光側へ赤原色を足した、という意味である。代数的に右辺へ移項すれば

$$
[C_\lambda]
\equiv
-a[R]+b[G]+c[B]
$$

となり、赤成分が負になる。

ここで「負の光」が実在するわけではない。負号は、色合わせ実験でその原色を混合側ではなく試験光側へ加えたことを表す。

この負値は計算上扱いにくい。そこでCIEは1931年、WrightとGuildらの色合わせ実験を基礎にしたCIE RGB系を線形変換し、$X,Y,Z$ という新しい3成分を定義した。

## 3　XYZは「色空間の基底変換」である

線形代数の言葉で考えると理解しやすい。

ある色をRGB座標で

$$
\mathbf{c}_{RGB}=
\begin{bmatrix}
R\\G\\B
\end{bmatrix}
$$

と表しているとする。同じ色を別の座標系で表すには、可逆な行列 $M$ を使って

$$
\mathbf{c}_{XYZ}
=
M\mathbf{c}_{RGB}
$$

と変換できる。

ここで

$$
\mathbf{c}_{XYZ}=
\begin{bmatrix}
X\\Y\\Z
\end{bmatrix}
$$

である。

つまりXYZ表色系は、「RGBとは別の色を測っている」のではなく、同じ等色関係を別の基底で記述したものと考えられる。

CIE 1931 XYZ系では、対応する色合わせ関数

$$
\bar x(\lambda),\quad
\bar y(\lambda),\quad
\bar z(\lambda)
$$

が可視域で負にならないように設計されている。また $\bar y(\lambda)$ は明所視の分光視感効率 $V(\lambda)$ と一致するように定められているため、$Y$ は測光量の明るさ側と直接つながる。

CIEの国際規格では、1931標準測色観察者はおおむね視角1°〜4°の中心視野に対応する色合わせ関数として規定されている。

## 4　スペクトルからXYZを計算する

分光分布 $P(\lambda)$ をもつ光源の三刺激値は、連続波長なら

$$
X=K\int P(\lambda)\bar x(\lambda)\,d\lambda
$$

$$
Y=K\int P(\lambda)\bar y(\lambda)\,d\lambda
$$

$$
Z=K\int P(\lambda)\bar z(\lambda)\,d\lambda
$$

と表せる。

実際の測定データは離散値なので、コンピュータでは

$$
X\approx K\sum_i P(\lambda_i)\bar x(\lambda_i)\Delta\lambda
$$

のような数値積分を行う。$Y,Z$ も同様である。

式の意味は単純である。

1. 各波長にどれだけ光があるかを測る
2. その波長に対する標準観察者の色合わせ関数を掛ける
3. 可視域全体で足し合わせる

分光器で測った物理量を、人間の等色特性で重み付けして3数値へ圧縮している。

## 5　物体色では「照明×反射率×標準観察者」になる

物体色の場合、眼に入るスペクトルは物体だけでは決まらない。

照明の分光分布を $S(\lambda)$、物体の分光反射率を $R(\lambda)$ とすれば、観察方向へ届く光のスペクトルは理想化して

$$
P(\lambda)\propto S(\lambda)R(\lambda)
$$

となる。

したがって反射物体のXYZは

$$
X=k\int S(\lambda)R(\lambda)\bar x(\lambda)\,d\lambda
$$

$$
Y=k\int S(\lambda)R(\lambda)\bar y(\lambda)\,d\lambda
$$

$$
Z=k\int S(\lambda)R(\lambda)\bar z(\lambda)\,d\lambda
$$

で求められる。

完全拡散反射体の $Y$ を100に正規化する場合は、一般に

$$
k=
\frac{100}
{\int S(\lambda)\bar y(\lambda)\,d\lambda}
$$

とする。

ここから重要な事実が出る。

同じ物体でも、照明 $S(\lambda)$ が変わればXYZも変わる。つまり物体の「色」は分光反射率だけの固有値ではない。

$$
\text{照明}
\times
\text{物体の分光特性}
\times
\text{標準観察者}
\rightarrow
XYZ
$$

という系全体で決まる。

## 6　X・Y・Zは何を意味しているのか

$X,Y,Z$ を「赤・緑・青」と覚えるのは誤りである。

XYZの基準刺激は、実在するRGBディスプレイの三原色ではない。数学的に定義された基準であり、$X,Y,Z$ は標準観察者に対する三刺激値である。

特に $Y$ には特別な意味がある。$\bar y(\lambda)$ は明所視の分光視感効率と一致するため、適切な定数を用いれば $Y$ は測光量の輝度と比例関係をもつ。

一方で $X$ と $Z$ を単独で「赤さ」「青さ」と読むことはできない。

またXYZは錐体応答そのものでもない。LMS錐体空間とXYZ空間の間には線形変換関係を設定できるが、両者は目的も定義も異なる。

## 7　xy色度座標は、XYZから大きさを取り除く

XYZは3次元量だが、同じ色みの光を強くしただけなら、3成分はほぼ同じ比率で大きくなる。

そこで

$$
x=\frac{X}{X+Y+Z}
$$

$$
y=\frac{Y}{X+Y+Z}
$$

$$
z=\frac{Z}{X+Y+Z}
$$

と正規化する。

すると

$$
x+y+z=1
$$

なので、独立な座標は2つでよい。通常は $x,y$ を使う。

これは3次元ベクトル $(X,Y,Z)$ の「大きさ」に相当する情報を捨て、成分比だけを残す操作である。

ただしxy色度図には明るさの情報が含まれない。完全な色指定には、通常 $x,y$ に加えて $Y$ などの明るさ情報が必要になる。

xy色度図そのものは次の記事で詳しく扱う。

## 8　メタメリズムは「3次元への線形写像」で理解できる

XYZ表色系の本質が最もよく見えるのがメタメリズムである。

異なる2つのスペクトルを $P_1(\lambda),P_2(\lambda)$ とする。スペクトル形状が全く違っていても、

$$
\int P_1(\lambda)\bar x(\lambda)d\lambda
=
\int P_2(\lambda)\bar x(\lambda)d\lambda
$$

$$
\int P_1(\lambda)\bar y(\lambda)d\lambda
=
\int P_2(\lambda)\bar y(\lambda)d\lambda
$$

$$
\int P_1(\lambda)\bar z(\lambda)d\lambda
=
\int P_2(\lambda)\bar z(\lambda)d\lambda
$$

を満たせば、標準観察者に対して同じXYZになる。

差

$$
D(\lambda)=P_1(\lambda)-P_2(\lambda)
$$

を使えば、条件は

$$
\int D(\lambda)\bar x(\lambda)d\lambda=0
$$

$$
\int D(\lambda)\bar y(\lambda)d\lambda=0
$$

$$
\int D(\lambda)\bar z(\lambda)d\lambda=0
$$

となる。

線形代数的には、高次元なスペクトル空間を3次元のXYZ空間へ写す線形写像であるため、異なるスペクトルが同じ点へ写されることがある。この「情報の圧縮」がメタマーを生む。

したがって「XYZが同じ」ことは「スペクトルが同じ」ことを意味しない。

## 9　分光測色計と三刺激値直読式色彩計の違い

XYZを得る代表的な方法は2つある。

分光測色計は、まず波長ごとの反射率や放射量を測定する。その後、標準光源と色合わせ関数を使って数値積分し、XYZを計算する。

一方、三刺激値直読式の色彩計は、検出器とフィルタの分光応答を $\bar x,\bar y,\bar z$ に近づけ、3チャンネルの出力から直接XYZ相当量を得る。

概念的には

$$
\text{分光測色}
:
P(\lambda)\rightarrow \text{スペクトル}\rightarrow XYZ
$$

$$
\text{三刺激値測色}
:
P(\lambda)\rightarrow XYZ
$$

という違いになる。

分光測色では元のスペクトル情報が残るため、別の標準光源下での色を計算したり、メタメリズムを検討したりできる。一方、XYZだけを測った場合、失われたスペクトル情報を一意に復元することはできない。

## 10　XYZ空間は「知覚的に均等」ではない

XYZには大きな利点があるが、座標間のユークリッド距離

$$
d=\sqrt{(\Delta X)^2+(\Delta Y)^2+(\Delta Z)^2}
$$

を、そのまま人間が感じる色差とみなすことはできない。

XYZ空間は等色を数量化するための基礎空間であり、知覚的な距離が均等になるようには設計されていない。

この問題を改善するため、CIEは後にCIELABやCIELUVなどの「より均等な色空間」を標準化した。CIELABではXYZを非線形変換し、色差を座標距離として扱いやすくする。

したがって流れは

$$
\text{スペクトル}
\rightarrow
XYZ
\rightarrow
L^*a^*b^*
\rightarrow
\Delta E
$$

となる。

XYZは終点ではなく、現代測色の基礎座標である。

## 11　物理的に存在できるXYZは「凸錐」をつくる

XYZの線形性をさらに一段、幾何学的に見る。可視域を $n$ 個の波長に離散化し、分光分布を

$$
\mathbf p=
\begin{bmatrix}
p_1&p_2&\cdots&p_n
\end{bmatrix}^{\mathsf T}
$$

とする。放射パワーなので、物理的な光では各成分は

$$
p_i\ge 0
$$

である。

色合わせ関数を行に並べた $3\times n$ 行列

$$
A=K\Delta\lambda
\begin{bmatrix}
\bar x_1&\bar x_2&\cdots&\bar x_n\\
\bar y_1&\bar y_2&\cdots&\bar y_n\\
\bar z_1&\bar z_2&\cdots&\bar z_n
\end{bmatrix}
$$

を作れば、三刺激値は

$$
\mathbf t=
\begin{bmatrix}X\\Y\\Z\end{bmatrix}
=A\mathbf p
$$

と一行で書ける。

ここで $A$ の第 $i$ 列を

$$
\mathbf a_i
=K\Delta\lambda
\begin{bmatrix}
\bar x_i\\\bar y_i\\\bar z_i
\end{bmatrix}
$$

とおけば、

$$
\mathbf t
=\sum_{i=1}^{n}p_i\mathbf a_i
$$

である。係数 $p_i$ は非負なので、物理的な光が作るXYZの集合は

$$
\mathcal C
=\{A\mathbf p\mid \mathbf p\ge 0\}
=\operatorname{cone}(\mathbf a_1,\ldots,\mathbf a_n)
$$

という凸錐（convex cone）になる。

この表現から、加法混色の幾何学が直接出る。2つの実在光のXYZを $\mathbf t_1,\mathbf t_2\in\mathcal C$ とすると、$\alpha,\beta\ge0$ に対して

$$
\alpha\mathbf t_1+\beta\mathbf t_2\in\mathcal C
$$

である。つまり「光を足せばXYZも足される」というGrassmannの加法則は、物理的な色の集合が凸錐になることと同じ構造を持つ。

一方、$X,Y,Z\ge0$ だからといって、第1象限のすべての点が実在スペクトルから作れるわけではない。XYZの基準刺激は実在の三原色ではなく、色合わせ関数を非負にするために導入された数学的な基準である。したがってXYZの座標軸そのものを、実在する単色光の「赤・緑・青」と解釈してはいけない。

さらに、$X+Y+Z>0$ の各点を

$$
(x,y,z)
=\frac{1}{X+Y+Z}(X,Y,Z)
$$

と正規化する操作は、3次元の凸錐に含まれる各「光量方向」の半直線を、平面

$$
x+y+z=1
$$

へ射影することに相当する。xy色度図が2次元になるのは、単に式の変数を1つ減らしたからではなく、XYZ空間の錐から強度方向を除いて色度だけを残しているからである。

この見方をすると、XYZの線形性、加法混色、xy色度図の混色直線が同じ線形代数と凸幾何でつながる。

## 12　「色」はスペクトル空間の商空間として理解できる

ここまでの「高次元のスペクトルを3数値へ圧縮する」という説明を、線形代数でもう一段厳密にする。

離散化したスペクトル全体を $\mathbb R^n$ とし、XYZを与える写像を

$$
T:\mathbb R^n\rightarrow\mathbb R^3,
\qquad
T(\mathbf p)=A\mathbf p
$$

とする。2つのスペクトル $\mathbf p,\mathbf q$ が同じXYZを与える条件は

$$
\mathbf p\sim\mathbf q
\iff
A\mathbf p=A\mathbf q
\iff
\mathbf p-\mathbf q\in\ker A
$$

である。

つまり、測色的に一つの「色」に対応するのは一つのスペクトルではない。ある代表スペクトル $\mathbf p$ に対し、

$$
[\mathbf p]
=\mathbf p+\ker A
$$

という同値類全体が同じXYZを与える。この意味で、XYZが記述している色の空間は、スペクトル空間から「XYZに影響しない差」を同一視した商空間

$$
\mathbb R^n/\ker A
$$

として捉えられる。線形写像の基本定理から

$$
\mathbb R^n/\ker A
\cong
\operatorname{im}A
$$

であり、$A$ の階数が3なら階数・退化次数定理より

$$
\dim\ker A
=n-\operatorname{rank}(A)
=n-3
$$

となる。

たとえば可視域を401点に離散化すれば、数学的には398次元もの「XYZを変えない方向」が残り得る。これが、異なるスペクトルなのに同じ色に見えるメタメリズムを生む自由度である。

この式は測定原理の違いも説明する。分光測色計は $\mathbf p$ や分光反射率 $\mathbf r$ を先に測るため、あとから別のイルミナントや標準観察者を使って再計算できる。一方、三刺激値直読式の色彩計は $A\mathbf p$ という3成分を直接得るので、$\ker A$ 方向の情報は測定時点で失われる。XYZから元のスペクトルを一意に復元できないのは、単なる装置性能の不足ではなく、写像そのものが多対一だからである。

ただし、同値類のすべてが物理的に実現可能なわけではない。発光スペクトルなら各成分に $p_i\ge0$ が必要なので、実在するメタマーは

$$
[\mathbf p]\cap\mathbb R_{\ge0}^n
$$

に限られる。反射率ならさらに

$$
0\le r_i\le1
$$

という制約がある。したがって「数学的な同値類」と「現実に作れるメタマー集合」は区別しなければならない。

XYZ表色系の数学的意味は、スペクトルを単に3変数へ近似することではない。等色という観測で区別できないスペクトル差を捨て、同じ等色関係を持つものを一つの点として表現することにある。

## 13　色彩検定で押さえるところ

色彩検定1級では、まず次の骨格を押さえる。

- XYZ表色系はCIEが1931年に定めた表色系である
- 標準観察者の色合わせ関数 $\bar x,\bar y,\bar z$ を使って三刺激値を求める
- $Y$ は明るさ側の測光量と結びつく
- $x,y,z$ はXYZを総和で正規化した色度座標で、$x+y+z=1$
- XYZ空間やxy色度図は知覚的に均等な空間ではない
- XYZはCIELAB、色差、測色へ進むための基礎になる

大学レベルでは、さらに

$$
\text{スペクトル関数}
\xrightarrow{\text{3つの色合わせ関数との内積}}
(X,Y,Z)
$$

という線形写像として理解するとよい。より厳密には、測色的な色は

$$
\mathbb R^n/\ker A
\cong
\operatorname{im}A
$$

という商空間で表される。

この見方をすると、「なぜ3数値で色を表せるのか」「なぜメタマーが存在するのか」「なぜXYZからスペクトルへ戻れないのか」が同じ数学で説明できる。

## 14　測定誤差はXYZへどう伝わるか――共分散行列で見る

分光測色では、各波長の測定値には必ず不確かさがある。ここでもXYZが線形写像であることを使うと、スペクトルの測定誤差が三刺激値へどう伝播するかを行列で表せる。

離散化したスペクトルを $\mathbf p$、その測定誤差を $\delta\mathbf p$ とし、

$$
\mathbf t=A\mathbf p,
\qquad
\mathbf t=\begin{bmatrix}X\\Y\\Z\end{bmatrix}
$$

とする。測定値が $\mathbf p+\delta\mathbf p$ になれば、XYZの誤差は

$$
\delta\mathbf t=A\,\delta\mathbf p
$$

である。スペクトル誤差の共分散行列を

$$
\Sigma_p
=E[\delta\mathbf p\,\delta\mathbf p^{\mathsf T}]
$$

とすると、XYZの共分散行列は

$$
\Sigma_{XYZ}
=A\Sigma_pA^{\mathsf T}
$$

となる。これは近似ではなく、XYZ計算が線形である限りそのまま成り立つ。

もし各波長の誤差が互いに独立で、分散が $\sigma_i^2$ なら、

$$
\Sigma_p
=\operatorname{diag}(\sigma_1^2,\ldots,\sigma_n^2)
$$

である。このとき例えば

$$
\operatorname{Var}(X)
=\sum_i a_{Xi}^2\sigma_i^2
$$

$$
\operatorname{Cov}(X,Y)
=\sum_i a_{Xi}a_{Yi}\sigma_i^2
$$

となる。入力側で各波長の誤差が独立でも、同じ分光データを $\bar x,\bar y,\bar z$ で重み付けしているため、出力された $X,Y,Z$ は一般に互いに相関する。

反射物体なら、照明スペクトルと色合わせ関数を含めた行列を $A_r$ として

$$
\mathbf t=A_r\mathbf r
$$

と書けば、分光反射率 $\mathbf r$ の不確かさについても

$$
\Sigma_{XYZ}=A_r\Sigma_rA_r^{\mathsf T}
$$

と同じ形になる。実際の分光測定では、迷光補正、波長校正、基準白板、平滑化などの影響で異なる波長間の誤差が相関することがある。その場合、$\Sigma_r$ の非対角成分を無視すると最終的な色の不確かさを過小評価または過大評価し得る。

一方、xy色度座標やCIELABはXYZの非線形関数である。一般に

$$
\mathbf q=f(\mathbf t)
$$

なら、十分小さい誤差に対してヤコビ行列

$$
J=\frac{\partial f}{\partial\mathbf t}
$$

を使い、一次近似で

$$
\Sigma_q
\approx
J\Sigma_{XYZ}J^{\mathsf T}
$$

と伝播させられる。

例えば

$$
x=\frac{X}{T},\qquad
y=\frac{Y}{T},\qquad T=X+Y+Z
$$

に対するヤコビ行列は

$$
J_{xy}
=\frac{1}{T^2}
\begin{bmatrix}
Y+Z&-X&-X\\
-Y&X+Z&-Y
\end{bmatrix}
$$

である。$T$ が小さくなるほど $1/T^2$ が大きくなるため、低信号域では同じXYZの絶対誤差でも色度座標の不確かさが大きくなりやすい。

この考え方は、「測定値には誤差がある」という一般論より一歩進んでいる。分光測定の誤差構造と、XYZ・xy・L*a*b*という色空間変換の数学をつなぐことで、最終的な色差の信頼性まで定量的に追跡できる。NISTの反射測色の不確かさ解析でも、測定方程式と波長間の相関を明示的に扱う重要性が指摘されている。

## 参考資料

- [色彩検定協会「受検案内・検定内容」](https://www.aft.or.jp/exam-orders)
- [色彩検定協会「公式テキスト1級 目次」](https://www.aft.or.jp/images/text_of-1st-grade_mokuji.pdf)
- [色彩検定協会「各級の目安」](https://www.aft.or.jp/pages/feature/level)
- [CIE / ISO 11664-1:2019, Colorimetry — Part 1: CIE standard colorimetric observers](https://www.cie.co.at/publications/colorimetry-part-1-cie-standard-colorimetric-observers-0)
- [ISO/CIE 11664-3:2019(E), Colorimetry — Part 3: CIE tristimulus values](https://www.cie.co.at/publications/colorimetry-part-3-cie-tristimulus-values-2)
- [CIE e-ILV: CIE 1931 standard colorimetric system](https://cie.co.at/eilvterm/17-23-045)
- [CIE 1931 colour-matching functions, 2 degree observer, official dataset](https://cie.co.at/datatable/cie-1931-colour-matching-functions-2-degree-observer)
- [NIST, Y. Ohno, CIE Fundamentals for Color Measurements](https://www.nist.gov/publications/cie-fundamentals-color-measurements-0)
- [NIST, E. A. Early & M. E. Nadal, Uncertainty Analysis for Reflectance Colorimetry, 2004](https://www.nist.gov/publications/uncertainty-analysis-reflectance-colorimetry-1)
- [NIST, Y. Ohno, A Numerical Method for Color Uncertainty, 2001](https://www.nist.gov/publications/numerical-method-color-uncertainty-0)
- [JCGM 100:2008, Evaluation of measurement data — Guide to the expression of uncertainty in measurement](https://www.bipm.org/en/committees/jc/jcgm/publications)
- [Fairman, Brill & Hemmendinger, How the CIE 1931 color-matching functions were derived from Wright-Guild data, Color Research & Application, 1997](https://onlinelibrary.wiley.com/doi/abs/10.1002/%28SICI%291520-6378%28199702%2922%3A1%3C11%3A%3AAID-COL4%3E3.0.CO%3B2-7)
- [Boyd & Vandenberghe, Convex Optimization, Cambridge University Press](https://web.stanford.edu/~boyd/cvxbook/)
- [MIT OpenCourseWare, 18.06SC Linear Algebra](https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/)