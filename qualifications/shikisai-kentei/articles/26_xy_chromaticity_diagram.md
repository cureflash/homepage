# xy色度図は何を捨て、何を残すのか――XYZを2次元へ射影する

色彩検定1級では、XYZ表色系と均等色空間が重要範囲になる。色彩検定協会が2026年に案内している1級公式テキスト解説セミナーでも、公式テキストp.41〜52の「混色」「XYZ表色系と均等色空間」が対象として明示されている。

XYZ表色系を学ぶと、次に馬蹄形のxy色度図が出てくる。しかし、なぜ3個の三刺激値 $X,Y,Z$ を2個の座標 $x,y$ に減らしてよいのか、図上の直線や三角形が何を意味するのかを理解しないまま暗記すると、色域・補色・混色・白色点の関係がばらばらに見えてしまう。

本記事では、xy色度図を「XYZ空間から明るさ方向を取り除いた射影」として理解する。

## 1　XYZは3次元だが、色度だけなら2変数でよい

CIE 1931 XYZ表色系では、色刺激を三刺激値

$$
(X,Y,Z)
$$

で表す。

ここで三刺激値の総和を

$$
S=X+Y+Z
$$

と置き、各成分を総和で割る。

$$
x=\frac{X}{X+Y+Z}
$$

$$
y=\frac{Y}{X+Y+Z}
$$

$$
z=\frac{Z}{X+Y+Z}
$$

すると必ず

$$
x+y+z=1
$$

となる。

したがって3個すべてを独立に指定する必要はなく、通常は $x,y$ の2個だけを使う。

CIEの国際照明用語では、色度座標は「三刺激値をその和で割った比」と定義されており、3座標の和が1なので2座標で色度を定義できるとされている。

## 2　正規化すると「強さ」が消える

ある光のXYZが

$$
(X,Y,Z)=(20,30,10)
$$

だったとする。

同じスペクトル形状のまま光量だけを2倍にすると、理想的には

$$
(40,60,20)
$$

になる。

しかし色度座標はどちらも

$$
x=\frac{20}{60}=\frac13,
\qquad y=\frac{30}{60}=\frac12
$$

で同じである。

一般に正の定数 $k$ に対して

$$
(X,Y,Z)\rightarrow(kX,kY,kZ)
$$

としても

$$
x'=\frac{kX}{k(X+Y+Z)}=x
$$

となる。

つまりxy色度座標は、XYZベクトルを何倍したかというスケール情報を捨て、3成分の比だけを残している。

幾何学的には、XYZ空間の原点から同じ方向へ伸びる点群

$$
(kX,kY,kZ),\qquad k>0
$$

を、すべて同じ色度点 $(x,y)$ にまとめていると考えられる。

## 3　xyだけでは完全な色指定にならない

xy色度図には明るさの情報がない。

同じ $(x,y)$ を持っていても、三刺激値の大きさが異なれば光の明るさは異なる。

そこで実際の測色では、しばしば

$$
(x,y,Y)
$$

の組で色を指定する。

$x,y,Y$ が分かれば、$y\neq0$ の範囲でXYZへ戻せる。

$$
X=\frac{x}{y}Y
$$

$$
Z=\frac{1-x-y}{y}Y
$$

したがって、xy色度図はXYZの代用品ではない。

- $x,y$：色度
- $Y$：測光的な明るさに結びつく三刺激値

という役割分担である。

## 4　馬蹄形の外周は何を表すのか

CIEは1931標準測色観察者について、波長ごとの色度座標データを公開している。

単色光のXYZは、その波長 $\lambda$ に対する等色関数

$$
\bar x(\lambda),\quad\bar y(\lambda),\quad\bar z(\lambda)
$$

から得られるので、単色光の色度は

$$
x(\lambda)=\frac{\bar x(\lambda)}{\bar x(\lambda)+\bar y(\lambda)+\bar z(\lambda)}
$$

$$
y(\lambda)=\frac{\bar y(\lambda)}{\bar x(\lambda)+\bar y(\lambda)+\bar z(\lambda)}
$$

となる。

波長を連続的に変えながら $(x(\lambda),y(\lambda))$ を描いた軌跡が、xy色度図の曲線部分、すなわちスペクトル軌跡である。

ここにある点は単一波長の光で作れる。

一方、馬蹄形の下側を結ぶ直線部分は紫軌跡、またはpurple boundaryと呼ばれる。紫は単一波長ではなく、スペクトル両端付近の短波長光と長波長光の加法混色によって生じるため、この部分には対応する単一波長が存在しない。

## 5　なぜ2色を混ぜると色度図上で直線になるのか

XYZ表色系は加法混色に対して線形である。

2つの色刺激を

$$
\mathbf C_1=(X_1,Y_1,Z_1)
$$

$$
\mathbf C_2=(X_2,Y_2,Z_2)
$$

とし、それぞれを係数 $a,b\ge0$ で混ぜると

$$
\mathbf C=a\mathbf C_1+b\mathbf C_2
$$

となる。

各刺激について

$$
S_i=X_i+Y_i+Z_i
$$

と置けば、

$$
X_i=S_ix_i,\qquad Y_i=S_iy_i
$$

なので、混合後の $x$ 座標は

$$
x=\frac{aS_1x_1+bS_2x_2}{aS_1+bS_2}
$$

となる。同様に

$$
y=\frac{aS_1y_1+bS_2y_2}{aS_1+bS_2}
$$

である。

ここで

$$
t=\frac{bS_2}{aS_1+bS_2},\qquad 0\le t\le1
$$

と置けば、

$$
(x,y)=(1-t)(x_1,y_1)+t(x_2,y_2)
$$

となる。これは2点の凸結合である。したがって混合色の色度は必ず $(x_1,y_1)$ と $(x_2,y_2)$ を結ぶ線分上に来る。

この式は、色度図上の位置が単なる図形上の経験則ではなく、XYZの線形加算と正規化から必然的に生じることを示している。

また、図上の中点 $t=1/2$ になる条件は

$$
aS_1=bS_2
$$

である。したがって $a=b$、つまり2つの光源を同じ倍率で足しただけでは、一般には色度図上の中点にはならない。三刺激値総和 $S_1,S_2$ が異なるからである。

## 6　三原色の色域が三角形になる理由

ディスプレイの赤・緑・青の三原色を

$$
\mathbf R,\quad\mathbf G,\quad\mathbf B
$$

とする。

非負の係数で加法混色すると

$$
\mathbf C=r\mathbf R+g\mathbf G+b\mathbf B,
\qquad r,g,b\ge0
$$

となる。

それぞれの三刺激値総和を $S_R,S_G,S_B$ とし、

$$
w_R=\frac{rS_R}{rS_R+gS_G+bS_B},
$$

$$
w_G=\frac{gS_G}{rS_R+gS_G+bS_B},
$$

$$
w_B=\frac{bS_B}{rS_R+gS_G+bS_B}
$$

と置くと、

$$
w_R+w_G+w_B=1,\qquad w_R,w_G,w_B\ge0
$$

であり、混合色の色度は

$$
(x,y)=w_R(x_R,y_R)+w_G(x_G,y_G)+w_B(x_B,y_B)
$$

となる。

これは3頂点に対する重心座標、すなわち3点の凸結合である。したがって三原色から作れる色度の集合は、xy色度図上で三原色の色度点を頂点とする三角形の内部になる。

三角形の外側の色度をその3原色だけで作ろうとすると、少なくとも1つの重みを負にしなければならない。実際の加法混色では「負の光」は出せないため、その色は色域外となる。

これはXYZ表色系の記事で扱った「色合わせで負のRGB係数が必要になる」問題と同じ線形代数で説明できる。

## 7　白色点から伸ばす直線は何を意味するのか

xy色度図では、ある白色点を基準にして色の方向を考えることがある。

指定した無彩色点 $N$ と、対象色 $C$ を結ぶ直線を延長し、スペクトル軌跡と交わる点を $D$ とする。このとき $D$ に対応する波長を、その条件での主波長として扱える場合がある。

CIEは、色度図上の無彩色点・対象色・スペクトル軌跡上の点の距離比を使って刺激純度を定義している。

重要なのは、主波長や純度が「色そのものに永久に貼り付いた値」ではなく、基準とする無彩色点との関係で決まる量だということである。

紫領域では、直線を延ばした先がスペクトル軌跡の反対側へ向かうため、補色主波長を用いる。

## 8　補色は「反対側の色相」というだけではない

加法混色で考えると、2つの色刺激 $C_1,C_2$ を適切な比率で混ぜた結果が指定した無彩色点 $N$ になるとき、この2刺激はその基準に対して補色関係にある。

xy色度図上では、$C_1$ と $C_2$ を結ぶ線分が $N$ を通る。

したがって「色度図で白色点をはさんで反対側にある」という幾何学的関係は、XYZの加法性から出ている。

ただし、どの白色を無彩色基準にするかによって幾何学的な関係は変わる。D65、Aなど照明条件が変われば白色点も変わるため、補色を厳密に扱うときは基準条件を指定する必要がある。

## 9　xy色度図の距離は「色の違いの大きさ」ではない

xy色度図を見ると、2点間の距離をそのまま色差だと思いたくなる。

しかしCIE 1931 xy色度図は知覚的に均等な空間ではない。

図上で同じ長さだけ移動しても、人間が感じる色の変化量は場所によって異なる。

この問題を改善するため、CIEは後にUCS色度図を導入した。CIE 1976 UCSでは

$$
u'=\frac{4X}{X+15Y+3Z}=\frac{4x}{-2x+12y+3}
$$

$$
v'=\frac{9Y}{X+15Y+3Z}=\frac{9y}{-2x+12y+3}
$$

を使う。

2点の色度差は、この平面上で

$$
\Delta c=\sqrt{(\Delta u')^2+(\Delta v')^2}
$$

と表せる。ただし $u'v'$ は色度だけを扱う2次元座標であり、明度差まで含む完全な知覚色差ではない。物体色の3次元的な色差にはCIELABやCIELUVなどを用いる。

CIE 1976 UCSはCIE 1960 UCSを改良したもので、CIEの定義では

$$
u'=u,\qquad v'=1.5v
$$

という関係にある。

xy色度図が「混色関係を理解する図」として非常に便利なのに対し、知覚的な色差を扱う目的では、さらにL*a*b*などの均等色空間が必要になる。

## 10　xy色度図は3次元色空間の「断面」ではない

よくある誤解は、xy色度図を「XYZ空間を上から見た図」と考えることだ。

厳密には単純な直交投影ではない。

$$
(x,y,z)=\frac{1}{X+Y+Z}(X,Y,Z)
$$

という正規化によって、XYZ空間の各半直線を

$$
x+y+z=1
$$

という平面上へ写している。

その後、$z=1-x-y$ なので2変数だけを描いている。

したがって数学的には、XYZ空間のスケールを取り除いた射影座標と考えるとよい。

## 11　色度を「射影空間の点」として考える

大学レベルでは、色度の数学的意味をさらに明確にできる。

正の倍率 $k$ による

$$
(X,Y,Z)\sim(kX,kY,kZ),\qquad k>0
$$

を「同じ色度を表す」という同値関係だと考える。すると1つの色度は、XYZ空間の1点ではなく、原点から同じ方向へ伸びる半直線全体に対応する。

これを斉次座標で

$$
[X:Y:Z]
$$

と書けば、

$$
[X:Y:Z]=[kX:kY:kZ]
$$

である。

xy色度座標は、この同値類から

$$
X+Y+Z=1
$$

となる代表点を1つ選び、

$$
(x,y,z)=\left(\frac{X}{X+Y+Z},\frac{Y}{X+Y+Z},\frac{Z}{X+Y+Z}\right)
$$

と表したものだと解釈できる。

物理的に実現する通常の色刺激では $X,Y,Z\ge0$ なので、扱うのは射影空間全体ではなく、その正の領域である。この見方をすると、「明るさを捨てる」「2色混合が直線になる」「三原色色域が凸包になる」という性質が、すべて同じ幾何学から理解できる。

## 12　射影のヤコビ行列――何の変化が失われるのか

射影

$$
f(X,Y,Z)=\left(\frac{X}{S},\frac{Y}{S}\right),\qquad S=X+Y+Z
$$

を微分すると、XYZの微小変化をxyの微小変化へ写すヤコビ行列は

$$
J=\frac{\partial(x,y)}{\partial(X,Y,Z)}
=\frac{1}{S^2}
\begin{pmatrix}
Y+Z & -X & -X\\
-Y & X+Z & -Y
\end{pmatrix}
$$

となる。したがって十分小さな測定変動 $\delta\mathbf X=(\delta X,\delta Y,\delta Z)^\mathsf T$ に対して

$$
\begin{pmatrix}
\delta x\\
\delta y
\end{pmatrix}
\approx J\,\delta\mathbf X
$$

と一次近似できる。

ここで重要なのは

$$
J
\begin{pmatrix}
X\\Y\\Z
\end{pmatrix}
=
\begin{pmatrix}
0\\0
\end{pmatrix}
$$

である。XYZベクトル自身の方向、すなわち $(X,Y,Z)\rightarrow(1+\varepsilon)(X,Y,Z)$ という「光量だけを変える方向」はヤコビ行列の零空間に入る。これが、xyへの射影が強度情報を局所的にも完全に捨てることの微分幾何学的な表現である。

逆に、XYZの誤差共分散行列を $\Sigma_{XYZ}$ とすると、一次の誤差伝播では

$$
\Sigma_{xy}\approx J\Sigma_{XYZ}J^\mathsf T
$$

となる。$J$ は概ね $1/S$ に比例するため、三刺激値総和 $S$ が小さくなるほど同じ絶対XYZ誤差が大きな色度誤差へ増幅されやすい。完全な黒では $X=Y=Z=0$ となり $S=0$ なので、そもそも色度座標は定義できない。

つまり「暗い試料ではxyが不安定になりやすい」という測色上の問題も、正規化の分母とヤコビ行列から直接説明できる。xy色度図は単に3次元を2次元へ縮めた図ではなく、強度方向を意図的に商として取り除く非線形写像である。

## 13　色彩検定で押さえるところ

検定対策としては、次の関係をまとめて理解するとよい。

- $x=X/(X+Y+Z)$、$y=Y/(X+Y+Z)$
- $x+y+z=1$ なので2座標で色度を表せる
- xy色度座標だけでは明るさは表せない
- スペクトル軌跡は単色光の色度を結んだもの
- 紫軌跡には対応する単一波長がない
- 2色の加法混色は2点を結ぶ線分上に現れる
- 三原色の色域は3点を結ぶ三角形、数学的には凸包になる
- xy図上の距離は知覚的色差に比例しない
- CIE 1976 UCSでは $u',v'$ を用いて色度の均等性を改善する

最も重要なのは、xy色度図を「色を並べた地図」として暗記しないことである。

$$
(X,Y,Z)\rightarrow\left(\frac{X}{X+Y+Z},\frac{Y}{X+Y+Z}\right)
$$

という正規化の結果として理解すれば、色度、混色直線、色域、白色点、補色、均等色空間への流れを同じ数学で説明できる。

## 参考資料

- [色彩検定協会「セミナー・イベント」― 2026年『XYZ 表色系と均等色空間』](https://www.aft.or.jp/pages/event-seminar)
- [色彩検定協会「色彩検定とは・各級の目安」](https://www.aft.or.jp/pages/feature/level)
- [CIE e-ILV: chromaticity coordinates](https://cie.co.at/eilvterm/17-23-053)
- [CIE e-ILV: chromaticity diagram](https://cie.co.at/eilvterm/17-23-054)
- [CIE e-ILV: spectral chromaticity coordinates](https://cie.co.at/eilvterm/17-23-055)
- [CIE e-ILV: purple boundary](https://cie.co.at/eilvterm/17-23-058)
- [CIE e-ILV: excitation purity](https://cie.co.at/eilvterm/17-23-066)
- [CIE e-ILV: CIE 1976 uniform-chromaticity-scale diagram](https://cie.co.at/eilvterm/17-23-073)
- [CIE Datasets: CIE 1931 chromaticity coordinates of spectrum loci / colour-matching functions](https://www.cie.co.at/data-tables)
- [ISO/CIE 11664-1:2019 Colorimetry — Part 1: CIE standard colorimetric observers](https://www.cie.co.at/publications/colorimetry-part-1-cie-standard-colorimetric-observers-0)
- [ISO/CIE 11664-5:2016 Colorimetry — Part 5: CIE 1976 L*u*v* Colour Space and u', v' Uniform Chromaticity Scale Diagram](https://www.cie.co.at/publications/colorimetry-part-5-cie-1976-luv-colour-space-and-u-v-uniform-chromaticity-scale)
- [CIE 015:2018 Colorimetry, 4th Edition](https://www.cie.co.at/publications/colorimetry-4th-edition)
- [JCGM 100:2008(E) — Evaluation of measurement data — Guide to the expression of uncertainty in measurement](https://doi.org/10.59161/JCGM100-2008E)
