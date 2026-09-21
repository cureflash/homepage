# 等色関数は何を表しているのか――スペクトルをXYZへ射影する3つの重み

色彩検定1級では「測色」が学習範囲に含まれ、XYZ表色系、標準測色観察者、三刺激値、均等色空間などを理解する必要がある。等色関数（colour-matching functions）は、その中心にある。

分光測色計が得るのは波長ごとの分光データである。一方、CIE XYZ表色系が扱うのは3個の三刺激値

$$
X,\quad Y,\quad Z
$$

である。その変換を担うのが

$$
\bar{x}(\lambda),\qquad
\bar{y}(\lambda),\qquad
\bar{z}(\lambda)
$$

という3本の等色関数である。

等色関数を「人間の目の赤・緑・青の感度曲線」と覚えるのは不正確である。等色関数は、標準化された色合わせ実験から得られる測色上の重み関数であり、L・M・S錐体の分光感度そのものではない。本記事では、等色実験からXYZ積分、線形代数、2°・10°標準観察者、分光測色の不確かさまでを一つの数学としてつなぐ。

## 1　色合わせは「3本のつまみ」でできる

正常色覚の明所視では、多くの色刺激について、独立な3つの原刺激の量を調整して等色を作ることができる。

波長 $\lambda$ の単色光を試験光とし、3原刺激 $R,G,B$ の量を

$$
r(\lambda),\quad g(\lambda),\quad b(\lambda)
$$

とする。観察者が

$$
C(\lambda)\equiv r(\lambda)R+g(\lambda)G+b(\lambda)B
$$

と判断したとき、波長ごとの $r,g,b$ を並べたものが、そのRGB測色系の等色関数になる。

ここで測っているのは光受容器の電気的応答ではない。「左右の色が同じに見える」という心理物理学的な等色条件を、原刺激量として数値化している。

$$
\boxed{\text{等色関数}=\text{色合わせ実験から得る標準化された応答関数}}
$$

## 2　なぜRGB等色関数には負の値が現れるのか

実在する3原色の正の加算だけでは、すべてのスペクトル色を等色できない。

例えば試験色 $C$ に赤原刺激を加えて

$$
C+|r|R\equiv gG+bB
$$

としなければ等色できない場合、形式的には

$$
C\equiv-|r|R+gG+bB
$$

と書ける。

この $-|r|$ が負の三刺激値である。物理的に「負の光」を出しているのではなく、原刺激を試験色側へ移した操作を符号付き量で表している。

WrightとGuildの等色実験は、CIE 1931測色系を構築する主要な実験的基礎になった。

## 3　XYZはRGB等色関係を別の座標へ移したもの

CIE 1931 XYZ表色系では、測色計算を扱いやすくするため仮想的な原刺激 $X,Y,Z$ が定義された。

RGB三刺激値とXYZ三刺激値を

$$
\mathbf c_{RGB}=
\begin{bmatrix}
R\\G\\B
\end{bmatrix},
\qquad
\mathbf c_{XYZ}=
\begin{bmatrix}
X\\Y\\Z
\end{bmatrix}
$$

とすると、両者は線形変換

$$
\mathbf c_{XYZ}=M\mathbf c_{RGB}
$$

で結ばれる。

等色関数も同じ基底変換を受け、

$$
\begin{bmatrix}
\bar{x}(\lambda)\\
\bar{y}(\lambda)\\
\bar{z}(\lambda)
\end{bmatrix}
=
M
\begin{bmatrix}
\bar{r}(\lambda)\\
\bar{g}(\lambda)\\
\bar{b}(\lambda)
\end{bmatrix}
$$

となる。

したがってXYZ等色関数は「XYZ受容器」の感度曲線ではない。同じ等色関係を、XYZという別の3次元座標で記述している。

## 4　スペクトルからXYZを求める

色刺激の分光分布を $\Phi(\lambda)$ とすると、CIE 1931 2°標準測色観察者に対する三刺激値は概念的に

$$
X=k\int \Phi(\lambda)\bar{x}(\lambda)\,d\lambda
$$

$$
Y=k\int \Phi(\lambda)\bar{y}(\lambda)\,d\lambda
$$

$$
Z=k\int \Phi(\lambda)\bar{z}(\lambda)\,d\lambda
$$

で求める。$k$ は用途に応じた規格化係数である。

内積記号を使えば

$$
X=\langle\Phi,\bar{x}\rangle,\qquad
Y=\langle\Phi,\bar{y}\rangle,\qquad
Z=\langle\Phi,\bar{z}\rangle
$$

と書ける。

重要なのは、数百波長分の情報を持つスペクトルが、3つの重み付き積分によって3個の数へ圧縮されることである。

## 5　離散化すると分光測色計の計算になる

実際の装置では連続積分ではなく、波長間隔 $\Delta\lambda$ でサンプリングした値を使う。

$$
X\approx
k\sum_{i=1}^{n}
\Phi(\lambda_i)\bar{x}(\lambda_i)\Delta\lambda
$$

$Y,Z$ も同様である。まとめれば

$$
\mathbf t=A\boldsymbol{\Phi},
\qquad
\mathbf t=
\begin{bmatrix}
X\\Y\\Z
\end{bmatrix},
\qquad
\boldsymbol{\Phi}=
\begin{bmatrix}
\Phi_1\\
\Phi_2\\
\vdots\\
\Phi_n
\end{bmatrix}
$$

と書ける。$A$ は3×$n$行列で、各行に離散化した $\bar{x},\bar{y},\bar{z}$ と積分重みが入る。

つまり分光測色は

$$
\boxed{\mathbb{R}^n\xrightarrow{A}\mathbb{R}^3}
$$

という高次元から3次元への線形写像として表せる。

## 6　物体色では「照明×反射率×等色関数」

物体の分光反射率を $\rho(\lambda)$、照明の相対分光分布を $S(\lambda)$ とすると、眼へ届く反射光は

$$
\Phi(\lambda)=S(\lambda)\rho(\lambda)
$$

である。

したがって

$$
X=k\int S(\lambda)\rho(\lambda)\bar{x}(\lambda)\,d\lambda
$$

$$
Y=k\int S(\lambda)\rho(\lambda)\bar{y}(\lambda)\,d\lambda
$$

$$
Z=k\int S(\lambda)\rho(\lambda)\bar{z}(\lambda)\,d\lambda
$$

となる。

測色では

1. 照明の分光分布
2. 試料の分光反射率
3. 標準測色観察者の等色関数

を区別しなければならない。同じ試料でも照明を変えれば $S(\lambda)$ が変わり、XYZも変わる。

## 7　$\bar{y}(\lambda)$が特別な理由

CIE 1931 XYZ系は、$Y$ が明所視の測光量と接続するよう設計されている。

明所視標準分光視感効率を $V(\lambda)$ とすると、CIE 1931 2°標準測色観察者では

$$
\bar{y}(\lambda)=V(\lambda)
$$

となるよう定められている。

したがって適切に規格化した $Y$ は測光量と直接対応できる。

ただし、$\bar{x}$ を「赤感度」、$\bar{y}$ を「緑感度」、$\bar{z}$ を「青感度」と読むのは誤りである。XYZは測色座標であり、三つの生理学的受容器を直接表してはいない。

## 8　等色関数とL・M・S錐体感度は同じではない

L・M・S錐体の分光感度も3本なので、XYZ等色関数と混同しやすい。

LMS錐体基礎関数は光受容の生理学的基盤に近い表現である。一方、XYZ等色関数は、標準化された等色関係を測色計算へ使うための関数である。

適切な条件では両者を線形変換で関係づけられるが、

$$
\bar{x}=L,\qquad
\bar{y}=M,\qquad
\bar{z}=S
$$

ではない。

同じ3次元性を持つことと、各軸が同じ生理学的意味を持つことは別である。

## 9　2°標準測色観察者とは何か

CIE 1931標準測色観察者はISO/CIE 11664-1で標準化されている。

「2°」は試料の物理サイズではなく視角である。対象の大きさを $d$、観察距離を $L$ とし、小角近似できるなら

$$
\theta\approx\frac{d}{L}
$$

である。

例えば50 cm離れた位置から直径約1.75 cmの色票を見ると、視角はおよそ2°になる。

CIE 1931標準測色観察者は、明所視の小視野に対する標準的な等色特性を表す。

## 10　なぜ10°標準測色観察者もあるのか

視野が大きくなると、刺激される網膜領域が変わる。中心窩とその周辺では、錐体分布や黄斑色素などの影響が同一ではない。

そのため大視野用としてCIE 1964標準測色観察者が定義され、

$$
\bar{x}_{10}(\lambda),\quad
\bar{y}_{10}(\lambda),\quad
\bar{z}_{10}(\lambda)
$$

を用いる。

同じスペクトル $\Phi(\lambda)$ でも

$$
(X,Y,Z)\ne(X_{10},Y_{10},Z_{10})
$$

となり得る。測色値を比較するときは、標準観察者の条件も一致させる必要がある。

## 11　標準観察者は「平均的な人そのもの」ではない

標準測色観察者とは、人間一人を表すモデルではなく、標準化された等色関数の組である。

実在する観察者間には、錐体分光感度、黄斑色素、水晶体透過率などの個人差がある。したがって標準観察者で同じXYZになる刺激が、すべての人に完全に同じ色として見えることを保証するものではない。

測色値が表しているのは

$$
\boxed{\text{指定した標準測色観察者のもとでの標準化された色一致}}
$$

である。

## 12　なぜ異なるスペクトルが同じXYZになるのか

離散化して

$$
\mathbf t=A\boldsymbol{\Phi}
$$

とする。$A$ は3×$n$行列で、通常 $n>3$ である。

線形代数の階数・退化次元定理より、$A$ の階数が3なら

$$
\dim\ker A=n-3
$$

である。したがって

$$
A\Delta\boldsymbol{\Phi}=\mathbf0
$$

を満たすゼロでないスペクトル差 $\Delta\boldsymbol{\Phi}$ が多数存在する。

よって

$$
\boldsymbol{\Phi}_2
=
\boldsymbol{\Phi}_1+\Delta\boldsymbol{\Phi}
$$

としても

$$
A\boldsymbol{\Phi}_2=A\boldsymbol{\Phi}_1
$$

となり得る。これがメタメリズムの線形代数的な核心である。

XYZ化は高次元スペクトルの全情報を保存する変換ではない。

## 13　「射影」を数学的に厳密に言うと、等色関数は線形汎関数である

色彩学では「スペクトルをXYZへ射影する」という説明が便利である。しかし大学レベルでは、「直交射影」と「一般の線形写像」を区別した方が正確である。

スペクトル関数の空間を $V$ とする。各等色関数は

$$
\ell_x[\Phi]
=
k\int\Phi(\lambda)\bar{x}(\lambda)\,d\lambda
$$

$$
\ell_y[\Phi]
=
k\int\Phi(\lambda)\bar{y}(\lambda)\,d\lambda
$$

$$
\ell_z[\Phi]
=
k\int\Phi(\lambda)\bar{z}(\lambda)\,d\lambda
$$

という、関数を1個の実数へ写す線形汎関数を定める。

したがって測色写像は

$$
T:V\rightarrow\mathbb{R}^3,
\qquad
T[\Phi]
=
\begin{bmatrix}
\ell_x[\Phi]\\
\ell_y[\Phi]\\
\ell_z[\Phi]
\end{bmatrix}
$$

と書ける。

つまり等色関数は、スペクトル空間の「基底ベクトル」というより、スペクトルを評価して座標値を返す三つの線形測定器として捉える方が数学的に正確である。

### なぜ普通の直交射影とは違うのか

$\bar{x},\bar{y},\bar{z}$ を関数空間中の3本のベクトルとみなし、

$$
\mathbf c_1=\bar{x},\quad
\mathbf c_2=\bar{y},\quad
\mathbf c_3=\bar{z}
$$

とする。

これらが互いに正規直交しているなら、内積

$$
b_i=\langle\Phi,\mathbf c_i\rangle
$$

は、そのまま直交射影の展開係数になる。

しかし一般には

$$
\langle\mathbf c_i,\mathbf c_j\rangle\ne\delta_{ij}
$$

である。Gram行列

$$
G_{ij}=\langle\mathbf c_i,\mathbf c_j\rangle
$$

を作ると、$\mathrm{span}\{\mathbf c_1,\mathbf c_2,\mathbf c_3\}$ への通常の直交射影係数 $\mathbf a$ は

$$
G\mathbf a=\mathbf b,
\qquad
\mathbf a=G^{-1}\mathbf b
$$

で求める。

一方、XYZ測色で使う三刺激値は

$$
\mathbf b=
\begin{bmatrix}
\langle\Phi,\bar{x}\rangle\\
\langle\Phi,\bar{y}\rangle\\
\langle\Phi,\bar{z}\rangle
\end{bmatrix}
$$

そのものである。

したがってXYZへの変換を「射影」と呼ぶ場合、それは広い意味での次元圧縮・線形写像であり、ユークリッド空間でいう正規直交射影そのものではない。

この区別を押さえると、「XYZはスペクトルの3次元近似形そのもの」ではなく、

$$
\boxed{\text{標準化された3つの線形測定値}}
$$

だと理解できる。

## 14　分光帯域幅は「真のスペクトル」をぼかす

分光器は無限に狭い波長幅を測定できない。

真のスペクトルを $\Phi(\lambda)$、装置の正規化された分光応答を $h(\lambda)$ とすると、測定値は近似的に

$$
\Phi_{\mathrm{meas}}(\lambda)
=
\int
h(\lambda-\lambda')
\Phi(\lambda')
\,d\lambda'
$$

である。

これは畳み込みである。分光帯域幅が広いほど、狭い発光ピークや急峻な吸収端は平滑化される。白熱光のような滑らかなスペクトルより、LEDやレーザーのような狭帯域成分で影響が大きくなりやすい。

## 15　測定誤差はXYZへ線形に伝播する

離散測色式

$$
\mathbf t=A\boldsymbol{\Phi}
$$

で、スペクトル測定誤差を $\delta\boldsymbol{\Phi}$ とすると

$$
\delta\mathbf t
=
A\,\delta\boldsymbol{\Phi}
$$

である。

さらにスペクトル測定値の共分散行列を $\Sigma_\Phi$ とすれば、

$$
\boxed{
\Sigma_{XYZ}
=
A\Sigma_\Phi A^{\mathsf T}
}
$$

となる。

これは、波長ごとの誤差が独立とは限らないことも含めて、XYZの不確かさを計算できることを意味する。

等色関数の重みが大きい波長域の誤差は、対応する三刺激値へ強く効く。隣接波長の誤差が相関していれば、その相関もXYZ側へ伝わる。

## 16　波長校正のずれも三刺激値を変える

測定波長が微小量 $\delta\lambda_i$ だけずれたとする。単純化して等色関数側のずれだけを見ると、

$$
\delta X
\approx
k\sum_i
\Phi_i
\left.
\frac{d\bar{x}}{d\lambda}
\right|_{\lambda_i}
\delta\lambda_i
\Delta\lambda
$$

となり、$Y,Z$ も同様である。

実際には試料スペクトル自身の波長方向勾配も効くため、急峻な発光線や吸収端では波長校正誤差の影響が大きくなる。

したがって

- 波長校正
- 分光帯域幅
- サンプリング間隔
- 補間
- 迷光

は単なる装置仕様ではなく、最終XYZの測定不確かさを決める要因である。

## 17　色彩検定で押さえる因果関係

まず次の流れを一つの系として理解する。

$$
\text{等色実験}
\rightarrow
\text{RGB等色関数}
\rightarrow
\text{線形変換}
\rightarrow
\text{XYZ等色関数}
\rightarrow
\text{分光積分}
\rightarrow
(X,Y,Z)
$$

物体色ならさらに

$$
\boxed{
S(\lambda)
\times
\rho(\lambda)
\times
\{\bar{x},\bar{y},\bar{z}\}
\rightarrow
X,Y,Z
}
$$

となる。

色彩検定で「標準測色観察者」「等色関数」「XYZ表色系」「三刺激値」「分光測色」が別々の用語として現れても、数学的には同じ測色演算の異なる部分を指している。

## 18　まとめ

等色関数の本質は、

$$
\bar{x}(\lambda),\quad
\bar{y}(\lambda),\quad
\bar{z}(\lambda)
$$

という3本の標準化された重み関数を使い、高次元のスペクトルを三刺激値へ変換することにある。

連続系では

$$
T[\Phi]
=
\begin{bmatrix}
\langle\Phi,\bar{x}\rangle\\
\langle\Phi,\bar{y}\rangle\\
\langle\Phi,\bar{z}\rangle
\end{bmatrix},
$$

離散系では

$$
\mathbf t=A\boldsymbol{\Phi}
$$

である。

この見方をすると、XYZ表色系、標準測色観察者、メタメリズム、分光測色、測定不確かさがすべて同じ線形代数でつながる。

さらに厳密には、等色関数はスペクトル空間を評価する線形汎関数として働く。XYZ化は通常の意味の直交射影ではなく、CIEが標準化した3つの線形測定値への写像である。この数学的意味を押さえると、「なぜスペクトル情報が3数に圧縮できるのか」と「なぜその過程で情報が失われるのか」を同時に理解できる。

## 参考資料

1. 公益社団法人 色彩検定協会「色彩検定とは―各級の目安」（1級の色彩学に「測色」を明記）  
   https://www.aft.or.jp/pages/feature/level
2. CIE, ISO/CIE 11664-1:2019(E), *Colorimetry — Part 1: CIE standard colorimetric observers*.  
   https://www.cie.co.at/publications/colorimetry-part-1-cie-standard-colorimetric-observers-0
3. CIE, CIE 015:2018, *Colorimetry, 4th Edition*.  
   https://www.cie.co.at/publications/colorimetry-4th-edition
4. CIE, *CIE 1931 colour-matching functions, 2 degree observer*, DOI: 10.25039/CIE.DS.xvudnb9b.  
   https://cie.co.at/datatable/cie-1931-colour-matching-functions-2-degree-observer
5. CIE, *CIE 1964 colour-matching functions, 10 degree observer*, DOI: 10.25039/CIE.DS.sqksu2n5.  
   https://cie.co.at/datatable/cie-1964-colour-matching-functions-10-degree-observer
6. W. D. Wright, “A re-determination of the trichromatic coefficients of the spectral colours,” *Transactions of the Optical Society*, 30(4), 141–164, 1929. DOI: 10.1088/1475-4878/30/4/301.
7. J. Guild, “The colorimetric properties of the spectrum,” *Philosophical Transactions of the Royal Society of London, Series A*, 230, 149–187, 1931/1932. DOI: 10.1098/rsta.1932.0005.
8. H. S. Fairman, M. H. Brill, H. Hemmendinger, “How the CIE 1931 color-matching functions were derived from Wright-Guild data,” *Color Research & Application*, 22(1), 11–23, 1997.
9. JCGM, *Evaluation of measurement data — Guide to the expression of uncertainty in measurement*, JCGM 100:2008. DOI: 10.59161/JCGM100-2008E.  
   https://www.bipm.org/en/doi/10.59161/jcgm100-2008e
10. G. Strang, MIT OpenCourseWare, *Linear Algebra: Orthogonal Vectors and Subspaces / Orthogonal Matrices and Gram-Schmidt*.  
    https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/
