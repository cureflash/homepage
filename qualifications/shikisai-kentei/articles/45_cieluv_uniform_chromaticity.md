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

### 1960 UCSとの関係――v′はなぜ1.5倍なのか

CIE 1976 UCSの前には、CIE 1960 UCS $(u,v)$ が使われていた。共通の分母

$$
Q=X+15Y+3Z
$$

を使うと、1960 UCSは

$$
u=\frac{4X}{Q},\qquad
v=\frac{6Y}{Q}
$$

である。1976 UCSと比較すれば

$$
\boxed{u'=u},\qquad
\boxed{v'=\frac32v}
$$

となる。つまり1976 UCSは、1960 UCSから見ると $u$ 軸はそのまま、$v$ 軸だけを1.5倍した座標である。CIEも1976 UCSを1960 UCSの修正版として定義し、この関係を明記している。

行列で書けば

$$
\begin{pmatrix}u'\\v'\end{pmatrix}
=
\begin{pmatrix}1&0\\0&3/2\end{pmatrix}
\begin{pmatrix}u\\v\end{pmatrix}.
$$

したがって、2色の差について1976 UCS上のユークリッド距離は

$$
\Delta c_{76}^2
=(\Delta u')^2+(\Delta v')^2
=(\Delta u)^2+\frac94(\Delta v)^2
$$

となる。同じ色対でも、1960 UCSの $(u,v)$ と1976 UCSの $(u',v')$ では距離の数値が同じにはならない。これは単なる記号変更ではなく、色度平面の縦方向へ異方的な尺度変更を行ったためである。

この違いは相関色温度を読むときにも重要である。CIEは1960 UCSが相関色温度の決定に広く使われてきたことを明記しており、現在の定義では修正1976 UCS上でPlanck軌跡への近さを扱う。古い資料や実装では $(u,v)$、新しい色度図では $(u',v')$ が現れるため、特に

$$
v'=1.5v
$$

を確認せずに数値を混用してはいけない。

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

## 12　「均等」とは何か――MacAdam楕円と局所計量

色空間が完全に均等なら、ある色の周囲で「同じだけ違って見える」点は、座標上でほぼ同じ大きさの円として表せるはずである。しかしMacAdamの等色実験では、色合わせのばらつきはxy色度図上で位置ごとに大きさと向きの異なる楕円として現れる。これが、xy平面のユークリッド距離をそのまま知覚色差に使えないことの実験的な表現である。

前節までのJacobianを使うと、この「均等性」を局所計量として書ける。微小変化を

$$
d\boldsymbol{\xi}=\begin{pmatrix}dx\\dy\end{pmatrix},\qquad
d\boldsymbol{\eta}=\begin{pmatrix}du'\\dv'\end{pmatrix}
$$

とすると、

$$
d\boldsymbol{\eta}=J\,d\boldsymbol{\xi}
$$

である。u′v′平面で普通のユークリッド距離を使えば、

$$
ds_{uv}^2
=du'^2+dv'^2
=d\boldsymbol{\eta}^{\mathsf T}d\boldsymbol{\eta}
$$

だから、xy平面では

$$
ds_{uv}^2
=d\boldsymbol{\xi}^{\mathsf T}
\underbrace{(J^{\mathsf T}J)}_{G(x,y)}
 d\boldsymbol{\xi}
$$

となる。

この

$$
G(x,y)=J^{\mathsf T}J
$$

は、u′v′のユークリッド距離をxy平面へ引き戻した位置依存の計量テンソルである。一定の微小距離 $\varepsilon$ を満たす点は

$$
d\boldsymbol{\xi}^{\mathsf T}Gd\boldsymbol{\xi}=\varepsilon^2
$$

となり、一般にはxy平面上の楕円になる。

$G$ の固有値を $\lambda_1,\lambda_2$ とすれば、楕円の主軸方向は固有ベクトル、半径は

$$
a_i=\frac{\varepsilon}{\sqrt{\lambda_i}}
$$

で決まる。つまり「均等色度図を作る」とは、知覚的な弁別領域が場所によって激しく変形するxy図を、できるだけ大きさと形の揃った領域へ写すことだと解釈できる。

ただしCIE 1976 UCSはすべてのMacAdam楕円を完全な同じ円へ変換するわけではない。弁別閾は明るさ、順応状態、視野、観察者にも依存するため、単一の二次元座標変換だけで知覚を完全に平坦化することはできない。ここに「uniform」ではなく「approximately uniform」と考えるべき理由がある。

## 13　測定誤差はどう伝わるか――分光測色からu′v′・CIELUVへ

測定原理まで含めると、色空間の座標値には分光測定の不確かさも伝播する。

波長を離散化し、分光反射率を

$$
\mathbf r=(R_1,R_2,\ldots,R_n)^{\mathsf T}
$$

とする。イルミナント、等色関数、波長刻みをまとめた行列を $A$ と書けば、三刺激値は

$$
\mathbf t=
\begin{pmatrix}X\\Y\\Z\end{pmatrix}
=A\mathbf r
$$

という線形演算になる。たとえば第1行の各要素は

$$
A_{1i}=kS_i\bar{x}_i\Delta\lambda
$$

である。

反射率測定の共分散行列を $\Sigma_r$ とすると、XYZの共分散は一次近似で

$$
\Sigma_{XYZ}=A\Sigma_rA^{\mathsf T}
$$

となる。つまり、分光測色計の各波長でのノイズや相関は、XYZの誤差楕円へ線形に写される。

次に

$$
Q=X+15Y+3Z
$$

と置くと、u′v′のXYZに対するJacobianは

$$
J_{u'v'}
=
\frac{1}{Q^2}
\begin{pmatrix}
4(15Y+3Z) & -60X & -12X\\
-9Y & 9(X+3Z) & -27Y
\end{pmatrix}.
$$

したがって

$$
\Sigma_{u'v'}
\approx
J_{u'v'}\Sigma_{XYZ}J_{u'v'}^{\mathsf T}
$$

である。$Q$ が小さい、すなわち信号量が小さい領域ではJacobianの要素が大きくなりやすく、絶対的なセンサーノイズが一定なら色度の不確かさは増える。暗部で色度が不安定になりやすいことは、測定系と座標変換の両方から説明できる。

さらにCIELUVへの写像を

$$
F:(X,Y,Z)\mapsto(L^*,u^*,v^*)
$$

と書けば、

$$
\Sigma_{Luv}
\approx
J_F\Sigma_{XYZ}J_F^{\mathsf T}
$$

となる。基準白 $(X_n,Y_n,Z_n)$ 自体にも不確かさがあるなら、状態ベクトルを

$$
\mathbf q=(X,Y,Z,X_n,Y_n,Z_n)^{\mathsf T}
$$

へ拡張し、同じJacobianによる誤差伝播を行えばよい。

ここから分かる重要点は、L*u*v*の値が「測定値そのもの」ではないことである。分光測定、XYZ積分、基準白、非線形座標変換という複数段階を通るため、最終的な色差を評価するなら、どの段階の不確かさが支配的かまで考える必要がある。

## 14　色彩検定で押さえるところ

色彩検定1級の測色分野へつなげるなら、次の因果関係を理解しておく。

- XYZは三刺激値で、加法混色に対して線形である
- xyはXYZから強度方向を除いた色度座標である
- xy図の距離は知覚色差と一致しない
- u′v′はxyを射影変換して色度の均等性を改善する
- CIE 1960 UCSと1976 UCSは $u'=u,\ v'=1.5v$ の関係にあり、両者の数値を混用しない
- 射影変換なので混色直線は直線のまま保たれる
- Jacobianが場所によって変わるため、xy図は非一様に伸縮される
- u′v′のユークリッド距離をxyへ引き戻すと $G=J^{\mathsf T}J$ という位置依存の局所計量になる
- CIELUVでは基準白との差 $(u'-u_n',v'-v_n')$ を $13L^*$ で尺度化する
- $L^*$はCIELABと共通である
- $\Delta E_{uv}^*$ はL*u*v*空間でのユークリッド距離である
- 分光測定の不確かさは $\Sigma_{Luv}\approx J_F\Sigma_{XYZ}J_F^{\mathsf T}$ として最終座標へ伝播する
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
- CIE e-ILV 17-23-073, “CIE 1976 uniform-chromaticity-scale diagram”  
  https://cie.co.at/eilvterm/17-23-073
- CIE e-ILV 17-23-079, “CIE 1960 uniform-chromaticity-scale diagram”  
  https://cie.co.at/eilvterm/17-23-079
- CIE e-ILV 17-23-068, “correlated colour temperature”  
  https://cie.co.at/eilvterm/17-23-068
- CIE e-ILV 17-23-074, “CIE 1976 L*u*v* colour space”  
  https://cie.co.at/eilvterm/17-23-074
- CIE e-ILV 17-23-075, “CIE 1976 L*u*v* colour difference”  
  https://cie.co.at/eilvterm/17-23-075
- ISO/CIE 11664-5:2024, *Colorimetry — Part 5: CIE 1976 L*u*v* colour space and u′, v′ uniform chromaticity scale diagram*  
  https://www.iso.org/standard/86224.html
- CIE 015:2018, *Colorimetry, 4th Edition*  
  https://cie.co.at/publications/colorimetry-4th-edition
- D. L. MacAdam, “Visual Sensitivities to Color Differences in Daylight,” *Journal of the Optical Society of America*, 32(5), 247–274, 1942.  
  https://doi.org/10.1364/JOSA.32.000247
- JCGM 100:2008(E), *Evaluation of measurement data — Guide to the expression of uncertainty in measurement*.  
  https://doi.org/10.59161/JCGM100-2008E
- Konica Minolta「L*u*v*色空間（CIE 1976）」  
  https://www.konicaminolta.jp/instruments/knowledge/color/section5/5-14/
- H. S. M. Coxeter, *Projective Geometry*, 2nd ed., Springer, 1987.