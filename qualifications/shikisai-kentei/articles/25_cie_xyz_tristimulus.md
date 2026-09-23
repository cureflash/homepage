# XYZ表色系はなぜ作られたのか――色を3つの数値にする

虹のスペクトルは連続している。光源の分光分布も物体の分光反射率も、本来は波長ごとの値を持つ関数である。それでも測色では、色刺激を $X,Y,Z$ という3つの数値で表せる。

色彩検定協会の現行「各級の目安」では、1級の色彩学に「測色」が明記されている。XYZ表色系は、xy色度図、CIELAB、色差、分光測色、メタメリズムへ進むための基礎である。本記事では、等色実験からXYZが作られる理由を、線形代数・測定原理・誤差伝播まで含めて説明する。

## 1　スペクトルは高次元なのに、等色は3変数で記述できる

ある光の分光分布を $P(\lambda)$ とする。可視域を1 nm刻みで測れば、これは数百個の数値からなる高次元データになる。

一方、人間の明所視では、異なるスペクトルでも3種類の原色の量を調節して等色できる。色合わせ実験では、試験光と3原色の混合光を並べ、両者が同じ色に見える点を求める。

波長 $\lambda$ の単色光を3原色 $[R],[G],[B]$ で等色できるなら

$$
[C_\lambda]
\equiv
\bar r(\lambda)[R]
+\bar g(\lambda)[G]
+\bar b(\lambda)[B]
$$

と書ける。$\bar r,\bar g,\bar b$ が色合わせ関数である。

人間の網膜にL・M・Sの3種類の錐体があることは、この三色性の生理学的背景である。ただし、XYZはLMS錐体応答そのものではない。XYZは「標準観察者が等色する」という心理物理学的関係を数量化した表色系である。

## 2　実在RGB原色では負の色合わせ量が必要になる

実在する3原色を選んでも、可視域のすべての単色光を正の加法混色だけで等色できるわけではない。たとえば

$$
[C_\lambda]+a[R]
\equiv
b[G]+c[B]
$$

という操作が必要なら、代数的には

$$
[C_\lambda]
\equiv
-a[R]+b[G]+c[B]
$$

となる。

負の光が存在するわけではない。負号は、その原色を混合光側ではなく試験光側へ加えたことを表す。

CIE 1931 RGB色合わせ関数にはこの負値が現れる。CIE XYZ表色系は、同じ等色関係を保ったまま、計算上扱いやすい別の座標へ線形変換したものである。

## 3　XYZは「色の変更」ではなく基底変換である

RGB座標を

$$
\mathbf c_{RGB}=
\begin{bmatrix}R\\G\\B\end{bmatrix}
$$

XYZ座標を

$$
\mathbf c_{XYZ}=
\begin{bmatrix}X\\Y\\Z\end{bmatrix}
$$

とすると、両者は可逆な線形変換

$$
\mathbf c_{XYZ}=M\mathbf c_{RGB}
$$

で結ばれる。

したがってXYZは、RGBとは別の「色」を測っているのではない。同じ等色関係を別の基底で記述している。

CIE 1931 XYZでは、対応する等色関数

$$
\bar x(\lambda),\qquad
\bar y(\lambda),\qquad
\bar z(\lambda)
$$

が可視域で非負になるように定められ、さらに $\bar y(\lambda)$ はCIEの明所視分光視感効率 $V(\lambda)$ と一致するよう構成された。このため $Y$ は測光量の輝度と直接結びつく。

## 4　CIE RGBからXYZへの実際の変換をみる

「XYZは基底変換」という説明を具体化する。CIE 1931 RGB系からXYZ系への歴史的な変換は、規格値の表し方の一つとして

$$
\begin{bmatrix}
X\\Y\\Z
\end{bmatrix}
=
\frac{1}{0.17697}
\begin{bmatrix}
0.49&0.31&0.20\\
0.17697&0.81240&0.01063\\
0&0.01&0.99
\end{bmatrix}
\begin{bmatrix}
R\\G\\B
\end{bmatrix}
$$

と書ける。

特に第2行は

$$
Y
=R+4.5906\,G+0.0601\,B
$$

に相当し、CIE RGB原色の輝度寄与を組み合わせて測光量と整合する $Y$ を作っている。

この行列を波長ごとのRGB色合わせ関数へ適用すれば

$$
\begin{bmatrix}
\bar x(\lambda)\\
\bar y(\lambda)\\
\bar z(\lambda)
\end{bmatrix}
=
M
\begin{bmatrix}
\bar r(\lambda)\\
\bar g(\lambda)\\
\bar b(\lambda)
\end{bmatrix}
$$

となる。

ここで重要なのは、線形変換なのでGrassmannの加法性を壊さないことである。もし

$$
\mathbf c_3=\mathbf c_1+\mathbf c_2
$$

なら

$$
M\mathbf c_3
=M\mathbf c_1+M\mathbf c_2
$$

であり、光を足したとき三刺激値も足されるという測色の線形構造はそのまま残る。

一方、XYZの基準刺激 $[X],[Y],[Z]$ は実在する3本の単色光ではない。可視域のスペクトル刺激を非負の三刺激値で表しやすくするために導入された数学的な基準刺激であり、「X=赤、Y=緑、Z=青」と読むのは誤りである。

この変換は単なる便利な数値変換ではない。

- 等色関係を保存する
- XYZ等色関数を非負にする
- $Y$ を測光量と対応させる
- 色度を $x,y$ の2変数で扱いやすくする

という設計条件を同時に満たす座標系を作っている。

## 5　スペクトルからXYZを計算する

分光分布 $P(\lambda)$ をもつ光の三刺激値は

$$
X=K\int P(\lambda)\bar x(\lambda)\,d\lambda
$$

$$
Y=K\int P(\lambda)\bar y(\lambda)\,d\lambda
$$

$$
Z=K\int P(\lambda)\bar z(\lambda)\,d\lambda
$$

で与えられる。

実測データは離散値なので、波長間隔を $\Delta\lambda$ とすれば

$$
X\approx K\sum_iP(\lambda_i)\bar x(\lambda_i)\Delta\lambda
$$

のような数値積分を行う。$Y,Z$ も同様である。

つまり測色は

$$
\text{スペクトル}
\xrightarrow{\text{3つの等色関数との内積}}
(X,Y,Z)
$$

という高次元から3次元への線形写像である。

## 6　物体色では「照明×反射率×標準観察者」を測る

反射物体では、眼へ届く光は物体だけで決まらない。照明の相対分光分布を $S(\lambda)$、物体の分光反射率を $R(\lambda)$ とすると

$$
P(\lambda)\propto S(\lambda)R(\lambda)
$$

である。

したがって

$$
X=k\int S(\lambda)R(\lambda)\bar x(\lambda)d\lambda
$$

$$
Y=k\int S(\lambda)R(\lambda)\bar y(\lambda)d\lambda
$$

$$
Z=k\int S(\lambda)R(\lambda)\bar z(\lambda)d\lambda
$$

となる。

完全拡散反射面を $Y=100$ に正規化する相対測色では

$$
k=
\frac{100}{\int S(\lambda)\bar y(\lambda)d\lambda}
$$

とする。

同じ試料でも $S(\lambda)$ が変わればXYZは変わる。したがって物体色の測色値は「物体固有の3数値」ではなく

$$
\text{照明条件}+\text{試料の分光特性}+\text{標準観察者}
$$

の組に対して定まる。

## 7　X・Y・Zは何を意味するのか

$Y$ には特別な意味がある。$\bar y(\lambda)$ が明所視の分光視感効率と一致するよう定義されているため、適切な定数を用いれば $Y$ は輝度に比例する。

一方、$X$ を「赤さ」、$Z$ を「青さ」と単独で解釈することはできない。XYZは錐体LMSの直接測定値でもない。

XYZの目的は、色刺激の等色関係を3つの線形座標で一意に記述することである。

## 8　xy色度座標は強度方向を取り除く射影である

XYZから

$$
x=\frac{X}{X+Y+Z},\qquad
y=\frac{Y}{X+Y+Z},\qquad
z=\frac{Z}{X+Y+Z}
$$

と定義すると

$$
x+y+z=1
$$

なので独立な変数は2つになる。

これは単なる変数削減ではない。$(X,Y,Z)$ と $\alpha(X,Y,Z)$ は、$\alpha>0$ なら同じ色度へ写る。

$$
(x,y,z)
=
\frac{1}{X+Y+Z}(X,Y,Z)
$$

はXYZ空間の原点から伸びる半直線を平面 $x+y+z=1$ へ射影する操作である。

そのためxy色度図には明るさの情報がない。完全な指定には通常 $(x,y,Y)$ のように輝度情報を別に持たせる。

## 9　メタメリズムは線形写像の零空間から生じる

二つのスペクトル $P_1,P_2$ が同じXYZを与える条件は、差

$$
D(\lambda)=P_1(\lambda)-P_2(\lambda)
$$

に対して

$$
\int D(\lambda)\bar x(\lambda)d\lambda=0
$$

$$
\int D(\lambda)\bar y(\lambda)d\lambda=0
$$

$$
\int D(\lambda)\bar z(\lambda)d\lambda=0
$$

である。

離散化して

$$
\mathbf t=A\mathbf p,
\qquad
\mathbf t=
\begin{bmatrix}X\\Y\\Z\end{bmatrix}
$$

と書けば、二つのスペクトルが等色する条件は

$$
A(\mathbf p_1-\mathbf p_2)=\mathbf0
$$

すなわち

$$
\mathbf p_1-\mathbf p_2\in\ker A
$$

である。

スペクトル空間は高次元だが出力は3次元なので、零空間には多数の自由度が残る。これが「スペクトルは違うのに同じ色に見える」メタメリズムの数学的な原因である。

## 10　測色的な「色」は商空間として表せる

離散スペクトル全体を $\mathbb R^n$、XYZ写像を

$$
T:\mathbb R^n\to\mathbb R^3,
\qquad T(\mathbf p)=A\mathbf p
$$

とする。

同じXYZになるスペクトルを同一視すれば

$$
\mathbf p\sim\mathbf q
\iff
\mathbf p-\mathbf q\in\ker A
$$

である。一つの測色的な色は

$$
[\mathbf p]=\mathbf p+\ker A
$$

という同値類に対応する。

したがって、線形代数的には

$$
\mathbb R^n/\ker A
\cong
\operatorname{im}A
$$

とみなせる。$A$ の階数が3なら

$$
\dim\ker A=n-3
$$

である。

たとえば401波長点で表したスペクトルなら、数学的には398次元の「XYZを変えない方向」が存在し得る。ただし発光スペクトルには $p_i\ge0$、反射率には $0\le r_i\le1$ という物理制約があるため、同値類のすべてが現実の光や物体として実現できるわけではない。

## 11　実在する光のXYZは凸錐をつくる

離散スペクトル $\mathbf p$ の各成分は放射パワーなので

$$
p_i\ge0
$$

である。$A$ の第 $i$ 列を $\mathbf a_i$ とすれば

$$
\mathbf t=A\mathbf p
=\sum_i p_i\mathbf a_i
$$

である。

したがって実在する光が作るXYZの集合は

$$
\mathcal C
=
\{A\mathbf p\mid\mathbf p\ge0\}
=
\operatorname{cone}(\mathbf a_1,\ldots,\mathbf a_n)
$$

という凸錐になる。

二つの実在光 $\mathbf t_1,\mathbf t_2\in\mathcal C$ と $\alpha,\beta\ge0$ に対して

$$
\alpha\mathbf t_1+\beta\mathbf t_2\in\mathcal C
$$

である。これは加法混色でXYZが加算されることの幾何学的表現である。

ただし $X,Y,Z\ge0$ なら第1象限のどこでも実在可能、という意味ではない。XYZの基準刺激自体が実在単色光ではないためである。

## 12　分光測色計と三刺激値直読式色彩計は何が違うか

分光測色計は、まず波長ごとの反射率や放射量を測定し、その後で標準イルミナントと等色関数を用いてXYZを計算する。

$$
\text{分光測色}:
P(\lambda)\to\text{スペクトル}\to XYZ
$$

三刺激値直読式色彩計は、検出器とフィルタの分光応答を $\bar x,\bar y,\bar z$ に近づけ、3チャンネルの出力から直接XYZ相当量を得る。

$$
\text{三刺激値測色}:
P(\lambda)\to XYZ
$$

分光測色では元のスペクトル情報を保持できるため、別のイルミナント下のXYZを再計算したり、メタメリズムを調べたりできる。三刺激値だけを得た場合、零空間方向の情報は既に失われているので、XYZから元スペクトルを一意には復元できない。

## 13　XYZ空間は知覚的に均等ではない

XYZは等色を記述する線形空間として非常に便利だが

$$
d=
\sqrt{(\Delta X)^2+(\Delta Y)^2+(\Delta Z)^2}
$$

をそのまま知覚色差として使うことはできない。

XYZ座標は、人が同じ大きさの座標差を同じ大きさの色差として感じるようには設計されていない。そのためCIELABやCIELUVなど、より知覚的な均等性を目指した非線形色空間が用いられる。

基本的な流れは

$$
\text{スペクトル}
\to XYZ
\to L^*a^*b^*
\to\Delta E
$$

である。XYZは色差計算の終点ではなく、測色体系の基礎座標である。

## 14　分光測定の誤差はXYZへどう伝わるか

離散スペクトルを $\mathbf p$、測定誤差を $\delta\mathbf p$ とすれば

$$
\mathbf t=A\mathbf p
$$

なので

$$
\delta\mathbf t=A\,\delta\mathbf p
$$

である。

スペクトル誤差の共分散行列を

$$
\Sigma_p
=E[\delta\mathbf p\,\delta\mathbf p^{\mathsf T}]
$$

とすると、XYZの共分散は

$$
\boxed{
\Sigma_{XYZ}=A\Sigma_pA^{\mathsf T}
}
$$

となる。

各波長の誤差が独立で

$$
\Sigma_p
=\operatorname{diag}(\sigma_1^2,\ldots,\sigma_n^2)
$$

なら

$$
\operatorname{Var}(X)
=\sum_i a_{Xi}^2\sigma_i^2
$$

である。一方、同じ分光データを3つの等色関数で重み付けするため、出力された $X,Y,Z$ は一般に互いに相関する。

xyやCIELABはXYZの非線形関数なので、一般に

$$
\mathbf q=f(\mathbf t)
$$

に対して、小さな誤差ならヤコビ行列

$$
J=\frac{\partial f}{\partial\mathbf t}
$$

を用い

$$
\Sigma_q
\approx
J\Sigma_{XYZ}J^{\mathsf T}
$$

と伝播させる。

たとえば

$$
x=\frac{X}{T},\qquad
y=\frac{Y}{T},\qquad T=X+Y+Z
$$

では

$$
J_{xy}
=\frac{1}{T^2}
\begin{bmatrix}
Y+Z&-X&-X\\
-Y&X+Z&-Y
\end{bmatrix}
$$

である。$T$ が小さい低信号域ほど同じXYZ絶対誤差が色度座標上で大きく増幅されやすいことが分かる。

## 15　色彩検定で押さえるところ

試験対策では、まず次を区別する。

- XYZ表色系はCIEが1931年に定めた表色系である。
- 標準観察者の $\bar x,\bar y,\bar z$ を用いて三刺激値を求める。
- XYZはCIE RGBの等色関係を保存する線形変換として構成されている。
- $Y$ は明所視の測光量と対応する。
- $X,Y,Z$ は実在RGB原色やLMS錐体応答そのものではない。
- $x,y,z$ はXYZを総和で正規化した色度座標で、$x+y+z=1$ である。
- 同じXYZでも異なるスペクトルが存在できる。これがメタメリズムである。
- XYZ空間は知覚的均等色空間ではない。

大学レベルでは、XYZを

$$
T:\text{スペクトル空間}\to\mathbb R^3
$$

という線形写像として理解する。すると、基底変換、加法混色、メタメリズム、分光測色、xy色度図、測定不確かさが同じ数学でつながる。

## 参考資料

- 色彩検定協会「色彩検定とは・各級の目安」https://www.aft.or.jp/pages/feature/level
- 色彩検定協会「公式テキスト1級 目次」https://www.aft.or.jp/images/text_of-1st-grade_mokuji.pdf
- CIE, *Colorimetry, 4th Edition*, CIE 015:2018. https://cie.co.at/publications/colorimetry-4th-edition
- ISO/CIE 11664-1:2019, *Colorimetry — Part 1: CIE standard colorimetric observers*. https://www.cie.co.at/publications/colorimetry-part-1-cie-standard-colorimetric-observers-0
- ISO/CIE 11664-3:2019, *Colorimetry — Part 3: CIE tristimulus values*. https://www.cie.co.at/publications/colorimetry-part-3-cie-tristimulus-values-2
- CIE e-ILV, “CIE 1931 standard colorimetric system [X, Y, Z]”. https://cie.co.at/eilv/150
- CIE, “CIE 1931 colour-matching functions, 2 degree observer”, official dataset, DOI: 10.25039/CIE.DS.xvudnb9b. https://cie.co.at/datatable/cie-1931-colour-matching-functions-2-degree-observer
- Y. Ohno, “CIE Fundamentals for Color Measurements”, NIST, 2000. https://www.nist.gov/publications/cie-fundamentals-color-measurements-0
- H. S. Fairman, M. H. Brill, H. Hemmendinger, “How the CIE 1931 color-matching functions were derived from Wright-Guild data”, *Color Research & Application*, 22, 11–23 (1997). https://doi.org/10.1002/(SICI)1520-6378(199702)22:1%3C11::AID-COL4%3E3.0.CO;2-7
- E. A. Early, M. E. Nadal, “Uncertainty Analysis for Reflectance Colorimetry”, NIST, 2004. https://www.nist.gov/publications/uncertainty-analysis-reflectance-colorimetry-1
- Y. Ohno, “A Numerical Method for Color Uncertainty”, NIST, 2001. https://www.nist.gov/publications/numerical-method-color-uncertainty-0
- JCGM 100:2008, *Evaluation of measurement data — Guide to the expression of uncertainty in measurement*. https://www.bipm.org/en/committees/jc/jcgm/publications
- S. Boyd, L. Vandenberghe, *Convex Optimization*, Cambridge University Press. https://web.stanford.edu/~boyd/cvxbook/
