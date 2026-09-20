# 等色関数は何を表しているのか――スペクトルをXYZへ射影する3つの重み

分光測色計は、物体や光源のスペクトルを細かい波長ごとの数値として測る。しかし色彩検定で扱うXYZ表色系では、その大量のスペクトル情報を最終的に3個の三刺激値 $X,Y,Z$ へまとめる。

その変換の中心にあるのが、CIE等色関数（colour-matching functions）

$$
\bar{x}(\lambda),\qquad \bar{y}(\lambda),\qquad \bar{z}(\lambda)
$$

である。

等色関数を単に「人間の目の感度曲線」と覚えると、本質を取り違えやすい。等色関数は、特定の標準観察者について、各波長の単色光を3つの基準刺激で等色するときに必要な三刺激値を波長の関数として表した、測色系の重み関数である。

この記事では、色彩検定1級のXYZ表色系・標準観察者・測色を、等色実験、線形代数、分光積分、2°・10°標準観察者、錐体分光感度との違いまで接続して理解する。

## 1　色合わせは「3本のつまみ」でできる

正常色覚の明所視では、多くの色刺激について、独立な3つの基準刺激の量を調整すれば等色を作ることができる。

ある波長 $\lambda$ の単色光を試験光とし、3つの原刺激 $R,G,B$ の量を

$$
r(\lambda),\quad g(\lambda),\quad b(\lambda)
$$

とする。

観察者が

$$
C(\lambda)\equiv r(\lambda)R+g(\lambda)G+b(\lambda)B
$$

と等色したとき、波長ごとの $r,g,b$ を並べたものが、そのRGB測色系の等色関数になる。

重要なのは、これは光受容器を直接測定しているのではなく、観察者が「同じ色に見える」と判断するために必要な原刺激量を測っている点である。

つまり等色関数は

$$
\boxed{\text{心理物理学的な色合わせ実験から得る系の応答関数}}
$$

である。

## 2　なぜRGB等色関数には負の値が出るのか

実在する3原色を使った色合わせでは、すべてのスペクトル色を3原色の正の加算だけで作れるとは限らない。

ある試験色 $C$ に対し

$$
C+|r|R\equiv gG+bB
$$

のように、原色 $R$ を試験色側へ加えなければ等色できない場合がある。

この式を形式的に右辺へ移せば

$$
C\equiv -|r|R+gG+bB
$$

となる。

この $-|r|$ が「負の三刺激値」である。負の光を物理的に発生させているわけではなく、原色を等色場の反対側へ加えた操作を符号付き量で表現している。

WrightとGuildによる20世紀前半の等色実験は、この種の三刺激値データをCIE 1931測色系へまとめる基礎になった。

## 3　XYZ表色系はRGBを線形変換した座標系である

CIE 1931 XYZ表色系では、RGB系で扱いにくかった負の三刺激値を避けやすくし、測光量との接続も良くするため、仮想的な原刺激 $X,Y,Z$ が定義された。

RGB三刺激値ベクトルを

$$
\mathbf{c}_{RGB}=
\begin{bmatrix}
R\\G\\B
\end{bmatrix}
$$

XYZ三刺激値ベクトルを

$$
\mathbf{c}_{XYZ}=
\begin{bmatrix}
X\\Y\\Z
\end{bmatrix}
$$

とすると、両者は線形変換

$$
\mathbf{c}_{XYZ}=M\mathbf{c}_{RGB}
$$

で結ばれる。

したがって等色関数も同じ基底変換を受ける。

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

つまりXYZ等色関数は、人間の視覚に突然現れる3種類の「XYZ受容器」ではない。

$$
\boxed{\text{同じ等色関係を別の3次元座標で表したもの}}
$$

である。

## 4　スペクトルは等色関数との内積で3個の数になる

色刺激の分光分布を

$$
\Phi(\lambda)
$$

とする。

CIE 1931 2°標準観察者に対する三刺激値は、概念的には

$$
X=k\int \Phi(\lambda)\bar{x}(\lambda)\,d\lambda
$$

$$
Y=k\int \Phi(\lambda)\bar{y}(\lambda)\,d\lambda
$$

$$
Z=k\int \Phi(\lambda)\bar{z}(\lambda)\,d\lambda
$$

で求められる。

ここで $k$ は用途に応じた規格化係数である。

線形代数では、これはスペクトル関数 $\Phi$ と3つの重み関数との内積と見なせる。

$$
X=\langle \Phi,\bar{x}\rangle,
\qquad
Y=\langle \Phi,\bar{y}\rangle,
\qquad
Z=\langle \Phi,\bar{z}\rangle
$$

したがって測色とは、非常に高次元なスペクトルを、3つの測色軸へ射影する操作だと考えられる。

## 5　離散化すると分光測色計の計算になる

実際の測定では積分を無限に細かく行うのではなく、波長間隔 $\Delta\lambda$ で離散化する。

波長を

$$
\lambda_1,\lambda_2,\dots,\lambda_n
$$

とすると、例えば $X$ は

$$
X\approx k\sum_{i=1}^{n}
\Phi(\lambda_i)\bar{x}(\lambda_i)\Delta\lambda
$$

となる。

3成分をまとめれば

$$
\begin{bmatrix}
X\\Y\\Z
\end{bmatrix}
=
A
\begin{bmatrix}
\Phi_1\\
\Phi_2\\
\vdots\\
\Phi_n
\end{bmatrix}
$$

と書ける。

行列 $A$ は3×$n$で、各行には $\bar{x},\bar{y},\bar{z}$ の離散値が入る。

このため、分光測色計で得た数十〜数百個の波長データからXYZを計算する処理は、本質的には

$$
\boxed{\text{高次元ベクトルに3本の重みベクトルを掛ける線形変換}}
$$

である。

## 6　物体色では照明と反射率を先に掛ける

物体色では、試料の分光反射率 $\rho(\lambda)$ だけからXYZは決まらない。

照明の相対分光分布を $S(\lambda)$ とすると、眼へ届く分光刺激は

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

ここから、同じ試料でも照明を変えるとXYZが変わる理由が分かる。

測色では

1. 光源の分光分布
2. 試料の分光反射率
3. 標準観察者の等色関数

の3者を区別する必要がある。

## 7　$\bar{y}(\lambda)$だけ少し特別な理由

CIE 1931 XYZ系では、$Y$ が測光量と接続するように設計されている。

明所視の標準分光視感効率を

$$
V(\lambda)
$$

とすると、CIE 1931 2°標準観察者では

$$
\bar{y}(\lambda)=V(\lambda)
$$

となるよう定義されている。

したがって、適切に規格化した $Y$ は測光的な明るさの量と直接対応できる。

一方で、$\bar{x}$ と $\bar{z}$ は単独で「赤感度」「青感度」を意味するわけではない。

XYZは測色計算のための座標系であり、3本の等色関数をそのままL・M・S錐体の分光感度と同一視してはいけない。

## 8　等色関数とL・M・S錐体感度は何が違うのか

L・M・S錐体の分光感度も3本なので、XYZ等色関数と同じものに見えやすい。しかし両者の意味は異なる。

LMS錐体基礎関数は、錐体光受容の生理学的基盤へ近い表現である。対してXYZ等色関数は、標準化された等色実験を測色計算へ使うための3つの関数である。

両者はどちらも三色型色覚という同じ3次元性を背景に持ち、適切な条件では線形変換で関係づけられるが、各曲線を1本ずつ対応させて

$$
\bar{x}=L,\qquad \bar{y}=M,\qquad \bar{z}=S
$$

と考えるのは誤りである。

この区別は、XYZを理解するときに非常に重要である。

## 9　2°標準観察者とは何か

CIE 1931標準測色観察者は、現在のISO/CIE 11664-1:2019で標準化されている。

CIEによれば、この等色関数は、明所視条件で視角がおよそ1°〜4°の視野について、正常色覚観察者の等色特性を代表する。

測色では慣用的に「2°標準観察者」と呼ばれる。

視角 $\theta$ は、対象の大きさ $d$ と観察距離 $L$ が十分小角なら

$$
\theta\approx\frac{d}{L}
$$

で表せる。

例えば観察距離50 cmで直径約1.75 cmの色票は、およそ2°の視角を占める。

つまり「2°」は物理的な試料サイズそのものではなく、眼から見た角度である。

## 10　なぜ10°標準観察者も必要なのか

小視野と大視野では、網膜上で使われる領域が異なる。特に中心窩付近とその周辺では、錐体分布や黄斑色素などの影響が同じではない。

そのため、大きな色面を扱う測色にはCIE 1964標準測色観察者が定義されている。

現在のISO/CIE 11664-1:2019では、CIE 1964等色関数は、視角が約4°を超える視野における正常色覚観察者の等色特性を代表するものとして規定されている。

10°系の三刺激値は

$$
X_{10},\qquad Y_{10},\qquad Z_{10}
$$

等色関数は

$$
\bar{x}_{10}(\lambda),\qquad
\bar{y}_{10}(\lambda),\qquad
\bar{z}_{10}(\lambda)
$$

と書く。

したがって同じスペクトルでも

$$
(X,Y,Z)\ne(X_{10},Y_{10},Z_{10})
$$

となり得る。

測色値を比較するときは、2°か10°かを揃えなければならない。

## 11　標準観察者は「平均的な人そのもの」ではない

標準観察者という言葉から、架空の平均的人物を想像しやすい。しかし実際には、標準化された等色関数の組を指す。

個人の眼には、錐体分光感度、黄斑色素、加齢による水晶体透過率などの差がある。

したがって実在する観察者AとBが、標準観察者では完全に同じXYZとなる2つの刺激を、必ず完全に同じ色と判断するとは限らない。

これは前の記事で扱った観察者メタメリズムにつながる。

測色値は

$$
\boxed{\text{指定した標準観察者のもとでの標準化された色一致}}
$$

を表しているのであり、全人類の知覚を完全に保証する値ではない。

## 12　なぜ異なるスペクトルが同じXYZになるのか

等色関数を使うと、スペクトルは3個の内積へ圧縮される。

離散化して

$$
\mathbf{t}=A\boldsymbol{\Phi}
$$

と書けば、$A$ は3×$n$行列である。

$n>3$なら一般に、

$$
A\Delta\boldsymbol{\Phi}=\mathbf{0}
$$

を満たすゼロでない $\Delta\boldsymbol{\Phi}$ が多数存在する。

したがって

$$
A\boldsymbol{\Phi}_1=A\boldsymbol{\Phi}_2
$$

でも

$$
\boldsymbol{\Phi}_1\ne\boldsymbol{\Phi}_2
$$

が起こる。

これがメタメリズムの線形代数的な理由である。

つまり、等色関数はスペクトルを色へ変換する一方、スペクトルの情報を大量に捨てている。

## 13　測定波長間隔と等色関数のサンプリング

分光測色では、等色関数の値も波長ごとの表として扱う。

CIEはCIE 1931 2°およびCIE 1964 10°の等色関数データを1 nm間隔で公開している。

数値積分では、試料スペクトル、照明スペクトル、等色関数を同じ波長グリッドへそろえる必要がある。

例えば

$$
380,381,382,\dots,780\ \mathrm{nm}
$$

のような1 nmグリッドを使うなら、各データも同じ波長位置へ補間または再サンプリングしてから積和を取る。

波長位置をずらしたまま掛け算すると、数学的には計算できても、物理的には異なる波長同士を掛ける誤った処理になる。

計測工学としては

- 波長校正
- 分光帯域幅
- サンプリング間隔
- 補間法
- 迷光

なども最終XYZの不確かさへ影響する。

## 14　色彩検定で押さえるべき因果関係

暗記ではなく、次の順序でつなげると理解しやすい。

$$
\text{色合わせ実験}
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

さらに物体色なら

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

色彩検定で「標準観察者」「等色関数」「XYZ表色系」「三刺激値」「分光測色」が別々の用語として出てきても、実際にはこの1本の計算経路の異なる部分を指している。

## 15　まとめ

等色関数の本質は、各波長の色刺激をXYZ三刺激値へ変換するための3本の標準化された重み関数である。

$$
\boxed{
\bar{x}(\lambda),\bar{y}(\lambda),\bar{z}(\lambda)
}
$$

は錐体そのものの感度曲線ではなく、等色実験に基づく標準観察者の測色特性をXYZ座標で表したものだと考える必要がある。

そして

$$
X=k\int\Phi\bar{x}\,d\lambda,
\qquad
Y=k\int\Phi\bar{y}\,d\lambda,
\qquad
Z=k\int\Phi\bar{z}\,d\lambda
$$

という3つの内積によって、高次元のスペクトルが3個の三刺激値へ圧縮される。

この構造が分かれば、XYZ表色系、標準観察者、分光測色、メタメリズム、2°と10°の違いを同じ数学の上で理解できる。

## 参考資料

1. CIE, ISO/CIE 11664-1:2019(E), *Colorimetry — Part 1: CIE standard colorimetric observers*. https://www.cie.co.at/publications/colorimetry-part-1-cie-standard-colorimetric-observers-0
2. CIE, CIE 015:2018, *Colorimetry, 4th Edition*. https://www.cie.co.at/publications/colorimetry-4th-edition
3. CIE, *CIE 1931 colour-matching functions, 2 degree observer*, DOI: 10.25039/CIE.DS.xvudnb9b. https://cie.co.at/datatable/cie-1931-colour-matching-functions-2-degree-observer
4. CIE, *CIE 1964 colour-matching functions, 10 degree observer*, DOI: 10.25039/CIE.DS.sqksu2n5. https://cie.co.at/datatable/cie-1964-colour-matching-functions-10-degree-observer
5. W. D. Wright, “A re-determination of the trichromatic coefficients of the spectral colours,” *Transactions of the Optical Society*, 30(4), 141–164, 1929. DOI: 10.1088/1475-4878/30/4/301.
6. J. Guild, “The colorimetric properties of the spectrum,” *Philosophical Transactions of the Royal Society of London, Series A*, 230, 149–187, 1931/1932. DOI: 10.1098/rsta.1932.0005.
7. H. S. Fairman, M. H. Brill, H. Hemmendinger, “How the CIE 1931 color-matching functions were derived from Wright-Guild data,” *Color Research & Application*, 22(1), 11–23, 1997.