# u′v′とL*u*v*は何を均等にしたのか――CIELUVを射影変換と色差から理解する

色彩検定1級では「色彩学」の中で測色を扱う。色彩検定協会の現行案内でも1級の学習内容に「測色」が明記されており、XYZ表色系と均等色空間はその中心にある。

CIE 1976 u′v′色度図とCIE 1976 L*u*v*色空間（CIELUV）は、XYZを単に別名で表したものではない。xy色度図の強い非均等性を改善し、色度差や三次元色差を人間の知覚差に近づけるために作られた座標系である。

本記事では

$$
XYZ\rightarrow xy\rightarrow u'v'\rightarrow L^*u^*v^*
$$

という変換を、測色学・射影幾何・微分・逆変換まで含めて理解する。

## 1　出発点はXYZとxy色度図

CIE 1931 XYZ表色系では、色刺激を三刺激値

$$
(X,Y,Z)
$$

で表す。色度だけを取り出すと

$$
x=\frac{X}{X+Y+Z},\qquad
y=\frac{Y}{X+Y+Z}
$$

となる。

XYZを正の定数 $k$ 倍しても

$$
(kX,kY,kZ)
$$

は同じ $(x,y)$ を与えるので、xy色度座標は強度方向を捨てた座標である。

xy色度図は加法混色、色域、白色点、主波長などを見るには便利だが、図上のユークリッド距離

$$
\Delta d_{xy}=\sqrt{(\Delta x)^2+(\Delta y)^2}
$$

は知覚色差に対応しない。同じ長さだけ移動しても、場所によって見える色の変化量が大きく異なる。

## 2　CIE 1976 u′v′色度座標

CIE 1976 UCS色度座標はXYZから

$$
u'=\frac{4X}{X+15Y+3Z}
$$

$$
v'=\frac{9Y}{X+15Y+3Z}
$$

で定義される。

xyから直接書けば

$$
u'=\frac{4x}{-2x+12y+3}
$$

$$
v'=\frac{9y}{-2x+12y+3}
$$

である。

逆変換は

$$
x=\frac{9u'}{6u'-16v'+12}
$$

$$
y=\frac{4v'}{6u'-16v'+12}
$$

となる。

したがってu′v′は、新しい物理量を測って得る座標ではない。同じXYZの色度情報を、知覚的な距離関係がxyより改善するよう別の幾何学へ写し直したものである。

## 3　xy→u′v′は射影変換である

$$
D=-2x+12y+3
$$

と置けば

$$
u'=\frac{4x}{D},\qquad v'=\frac{9y}{D}
$$

である。分母に座標自身が入るので、この変換は通常の線形変換

$$
\mathbf y=A\mathbf x
$$

ではない。

しかし同次座標を使うと、射影変換として一つの行列で表せる。xy平面の点を

$$
\tilde{\mathbf x}=
\begin{pmatrix}
x\\y\\1
\end{pmatrix}
$$

とし、

$$
H=
\begin{pmatrix}
4&0&0\\
0&9&0\\
-2&12&3
\end{pmatrix}
$$

を作用させると、

$$
\begin{pmatrix}
U\\V\\W
\end{pmatrix}
=H\tilde{\mathbf x}
=
\begin{pmatrix}
4x\\9y\\-2x+12y+3
\end{pmatrix}.
$$

通常座標へ戻すと

$$
u'=\frac UW,\qquad v'=\frac VW
$$

となり、u′v′の定義式が得られる。

さらに

$$
\det H=108\neq0
$$

なので、これは退化していない射影変換である。

### なぜ混色直線が直線のまま残るのか

射影変換は直線を直線へ写す。xy平面上の直線を

$$
\mathbf l^{\mathsf T}\tilde{\mathbf x}=0
$$

と書けば、変換後の直線係数は

$$
\mathbf l'=H^{-\mathsf T}\mathbf l
$$

で与えられる。

したがってxy色度図で2色を結ぶ加法混色線は、u′v′色度図でも曲線にならない。三原色の色域も三角形のまま保たれる。

ただし射影変換は距離や線分上の比を一般には保存しない。「同じ直線上にある」ことと「同じ距離比をもつ」ことは別である。

## 4　どこをどれだけ伸ばすのか――Jacobianで見る

射影変換がxy図を場所ごとにどれだけ伸縮するかはJacobianで分かる。

$$
J=
\frac{\partial(u',v')}{\partial(x,y)}
$$

を計算すると、

$$
J=
\frac{1}{D^2}
\begin{pmatrix}
48y+12 & -48x\\
18y & 27-18x
\end{pmatrix}.
$$

微小な色度変化

$$
d\mathbf x=
\begin{pmatrix}dx\\dy\end{pmatrix}
$$

は

$$
d\mathbf u=J\,d\mathbf x
$$

へ写る。

ここで $J$ は $(x,y)$ に依存する。つまり同じ $dx,dy$ でも、色度図の場所によってu′v′上の移動量が異なる。

さらに面積の局所倍率はJacobianの行列式で

$$
\det J
=\frac{108}{D^3}
=\frac{108}{(-2x+12y+3)^3}
$$

となる。

これはxy色度図の各領域が一様に拡大されるのではなく、位置によって異なる倍率で伸縮されることを示す。u′v′がxyより均等になるのは、「軸の目盛りを一定倍率で変えた」からではなく、色度図そのものを非一様に変形しているからである。

ただしCIEが定義するu′v′およびCIELUVも完全な知覚空間ではなく、近似的な均等性を持つにすぎない。

## 5　u′v′だけでは明るさを持たない

XYZを

$$
(X,Y,Z)\rightarrow(kX,kY,kZ)
$$

と変えても

$$
u'\rightarrow u',\qquad v'\rightarrow v'
$$

である。

したがって同じu′v′を持つ暗い刺激と明るい刺激が存在する。三次元の色空間にするには、明るさ方向を復活させる必要がある。

そこでCIELUVではCIELABと同じ明度座標 $L^*$ を使う。

基準白を

$$
(X_n,Y_n,Z_n)
$$

とし、

$$
\delta=\frac{6}{29}
$$

$$
f(t)=
\begin{cases}
t^{1/3} & (t>\delta^3)\\[4pt]
\dfrac{t}{3\delta^2}+\dfrac{4}{29} & (t\le\delta^3)
\end{cases}
$$

とすれば、

$$
L^*=116f\left(\frac{Y}{Y_n}\right)-16
$$

である。

## 6　基準白との差をu*・v*にする

基準白の色度を

$$
u_n'=\frac{4X_n}{X_n+15Y_n+3Z_n}
$$

$$
v_n'=\frac{9Y_n}{X_n+15Y_n+3Z_n}
$$

とする。

CIELUVでは

$$
u^*=13L^*(u'-u_n')
$$

$$
v^*=13L^*(v'-v_n')
$$

と定義する。

基準白自身では

$$
u'=u_n',\qquad v'=v_n'
$$

なので

$$
u^*=v^*=0
$$

となる。

CIELUVは単に $(L^*,u',v')$ を並べた空間ではない。白色点からの色度差

$$
(u'-u_n',\ v'-v_n')
$$

を $13L^*$ で尺度化することで三次元座標を作っている。

## 7　逆変換すると、CIELUVの数学的な特異点が見える

$L^*>0$ なら、定義式から

$$
u'=u_n'+\frac{u^*}{13L^*}
$$

$$
v'=v_n'+\frac{v^*}{13L^*}
$$

と色度を復元できる。

次に $L^*$ から $Y$ を戻す。CIELABと同じ逆変換なので、

$$
\frac{Y}{Y_n}
=
\begin{cases}
\left(\dfrac{L^*+16}{116}\right)^3 & (L^*>8)\\[8pt]
\dfrac{L^*}{\kappa} & (L^*\le8)
\end{cases}
$$

$$
\kappa=\frac{24389}{27}\approx903.2963
$$

である。

さらにu′v′の定義から

$$
D=X+15Y+3Z=\frac{9Y}{v'}
$$

なので、

$$
X=\frac{9u'Y}{4v'}
$$

$$
Z=Y\frac{12-3u'-20v'}{4v'}
$$

となる。

したがって通常の非黒色刺激では

$$
(L^*,u^*,v^*)
\rightarrow
(u',v',Y)
\rightarrow
(X,Y,Z)
$$

と元の三刺激値へ戻せる。

### $L^*=0$ では何が起きるか

CIELUVの定義を見ると、

$$
L^*=0
$$

なら

$$
u^*=13\cdot0\cdot(u'-u_n')=0
$$

$$
v^*=13\cdot0\cdot(v'-v_n')=0
$$

である。

つまり黒点では、どの色度方向も

$$
(L^*,u^*,v^*)=(0,0,0)
$$

へ潰れる。逆変換式にも $1/L^*$ が現れるため、$L^*=0$ ではu′v′を復元できない。

これはバグではなく座標系の特異性である。極座標で半径 $r=0$ のとき角度 $\theta$ が意味を失うのと同様に、光がない極限では色度方向の自由度も失われる。

さらに

$$
\frac{\partial u'}{\partial u^*}
=\frac{1}{13L^*},\qquad
\frac{\partial v'}{\partial v^*}
=\frac{1}{13L^*}
$$

なので、$L^*$ が小さくなるほどCIELUV上の小さな測定誤差がu′v′へ大きく拡大される。非常に暗い色で色相・クロマの数値が不安定になりやすいことを、座標変換の条件の悪化として理解できる。

## 8　数値例：XYZからCIELUVへ

CIE 1931 2°標準測色観察者、D65基準白を想定し、

$$
(X_n,Y_n,Z_n)\approx(95.047,100,108.883)
$$

とする。対象色を

$$
(X,Y,Z)=(20,30,10)
$$

とする。

まず

$$
X+15Y+3Z=500
$$

なので

$$
u'=\frac{80}{500}=0.160
$$

$$
v'=\frac{270}{500}=0.540.
$$

D65基準白ではおよそ

$$
u_n'\approx0.19784,
\qquad
v_n'\approx0.46834.
$$

また

$$
Y/Y_n=0.30
$$

より

$$
L^*\approx61.65.
$$

したがって

$$
u^*
=13(61.65)(0.160-0.19784)
\approx-30.33
$$

$$
v^*
=13(61.65)(0.540-0.46834)
\approx57.44.
$$

よって

$$
(L^*,u^*,v^*)
\approx(61.65,-30.33,57.44)
$$

となる。

## 9　クロマ・色相角・色差

CIELUVのu*–v*平面を極座標として見ると、CIE 1976 u,vクロマは

$$
C_{uv}^*=\sqrt{u^{*2}+v^{*2}}
$$

色相角は

$$
h_{uv}=\operatorname{atan2}(v^*,u^*)
$$

である。

また

$$
\frac{C_{uv}^*}{L^*}
=13\sqrt{(u'-u_n')^2+(v'-v_n')^2}
$$

なので、CIELUVのクロマとu′v′図での白色点からの距離が直接つながっている。

2色の差については

$$
\Delta E_{uv}^*
=
\sqrt{
(\Delta L^*)^2
+(\Delta u^*)^2
+(\Delta v^*)^2
}
$$

とユークリッド距離で定義できる。

均等色空間を作る目的は、まさに「座標上の普通の距離」を知覚色差の近似として使えるようにすることにある。ただしCIELUVも完全には均等ではないため、同じ $\Delta E_{uv}^*$ があらゆる領域で完全に同じ知覚差を意味するわけではない。

## 10　CIELABとの違い

CIELABとCIELUVはいずれも1976年にCIEが導入した近似的均等色空間である。

共通して

- XYZから計算する
- 基準白を必要とする
- 同じ $L^*$ を使う
- 三次元の距離として色差を扱える

という特徴を持つ。

一方、色度方向の作り方が異なる。

CIELABでは

$$
a^*=500[f(X/X_n)-f(Y/Y_n)]
$$

$$
b^*=200[f(Y/Y_n)-f(Z/Z_n)]
$$

とXYZ各成分の非線形差から座標を作る。

CIELUVでは

$$
u^*=13L^*(u'-u_n')
$$

$$
v^*=13L^*(v'-v_n')
$$

として、均等化した色度図上で基準白からの偏差を使う。

CIELABは物体色・印刷・品質管理・ICCカラーマネジメントで広く使われる。一方、u′v′色度図は照明、ディスプレイ、白色点、色度差の議論でも重要である。

ISO/CIE 11664-5:2024は、CIELUV座標、明度・クロマ・彩度・色相の相関量、色差、およびu′v′均等色度図の計算法を規定している。規格全体のCIELUVは主として反射・透過物体として知覚される刺激を対象とし、一次光源として見える発光刺激ではu′v′色度図など適用される部分が限定される点にも注意が必要である。

## 11　分光測色からCIELUVまで

分光測色計がL*u*v*を直接測るわけではない。

反射物の分光反射率を $R(\lambda)$、イルミナントを $S(\lambda)$、等色関数を $\bar x,\bar y,\bar z$ とすると、まず

$$
X=k\int S(\lambda)R(\lambda)\bar{x}(\lambda)\,d\lambda
$$

$$
Y=k\int S(\lambda)R(\lambda)\bar{y}(\lambda)\,d\lambda
$$

$$
Z=k\int S(\lambda)R(\lambda)\bar{z}(\lambda)\,d\lambda
$$

を計算する。

その後

$$
R(\lambda)
\rightarrow
XYZ
\rightarrow
u',v'
\rightarrow
L^*,u^*,v^*
$$

と座標変換する。

したがってCIELUVは「センサーが直接読む物理量」ではなく、分光測定、標準測色観察者による三刺激値化、基準白を含む知覚的座標変換を重ねた結果である。

## 12　色彩検定で押さえるところ

色彩検定1級の測色分野へつなげるなら、次の因果関係を理解しておく。

- XYZは三刺激値で、加法混色に対して線形である
- xyはXYZから強度方向を除いた色度座標である
- xy図の距離は知覚色差と一致しない
- u′v′はxyを射影変換して色度の均等性を改善する
- 射影変換なので混色直線は直線のまま保たれる
- Jacobianが場所によって変わるため、xy図は非一様に伸縮される
- CIELUVでは基準白との差 $(u'-u_n',v'-v_n')$ を $13L^*$ で尺度化する
- $L^*$はCIELABと共通である
- $\Delta E_{uv}^*$ はL*u*v*空間でのユークリッド距離である
- $L^*=0$ では色度方向が一点へ縮退し、逆変換が特異になる
- CIELUVも完全な均等色空間ではない

式を個別に暗記するより、

$$
\text{分光分布}
\rightarrow XYZ
\rightarrow \text{色度}
\rightarrow \text{均等化}
\rightarrow \text{色差}
$$

という測色の階層として理解すると、XYZ、xy色度図、均等色空間、色差、分光測色が一つの体系としてつながる。

## 参考資料

- 公益社団法人 色彩検定協会「色彩検定とは・各級の目安」―1級「色彩学」に測色を明記  
  https://www.aft.or.jp/pages/feature/level
- CIE e-ILV 17-23-074, “CIE 1976 L*u*v* colour space”  
  https://cie.co.at/eilvterm/17-23-074
- CIE e-ILV 17-23-075, “CIE 1976 L*u*v* colour difference”  
  https://cie.co.at/eilvterm/17-23-075
- ISO/CIE 11664-5:2024, *Colorimetry — Part 5: CIE 1976 L*u*v* colour space and u′, v′ uniform chromaticity scale diagram*  
  https://www.iso.org/standard/86224.html
- CIE 015:2018, *Colorimetry, 4th Edition*  
  https://cie.co.at/publications/colorimetry-4th-edition
- Konica Minolta「L*u*v*色空間（CIE 1976）」  
  https://www.konicaminolta.jp/instruments/knowledge/color/section5/5-14/
- H. S. M. Coxeter, *Projective Geometry*, 2nd ed., Springer, 1987.
