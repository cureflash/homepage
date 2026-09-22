# L*a*b*はなぜXYZを曲げるのか――均等色空間と色差

色彩検定1級では「測色」が学習領域として明示されている。CIELABは、この測色を大学レベルで理解する際の中心概念の一つである。色彩検定協会のセミナーアーカイブでも2025年9月に「XYZ 表色系と均等色空間」が扱われており、XYZと均等色空間の接続は公式の学習支援でも取り上げられている。

XYZ表色系は、色刺激を三刺激値 $X,Y,Z$ で厳密に記述できる。しかしXYZ空間の距離は、人間が感じる「色の違いの大きさ」とは対応しない。そこでCIEは1976年、XYZを非線形変換したCIE 1976 L*a*b*色空間、すなわちCIELABを標準化した。

本記事では、L*a*b*を単なる座標の暗記ではなく、「XYZを基準白で正規化し、知覚に近づくよう非線形変換した空間」として理解する。

## 1　XYZでは、同じ距離でも同じ色差に見えない

XYZ表色系では色刺激を

$$
\mathbf{X}=(X,Y,Z)
$$

という3次元ベクトルで表す。

2色のXYZが

$$
\mathbf{X}_1=(X_1,Y_1,Z_1),\qquad
\mathbf{X}_2=(X_2,Y_2,Z_2)
$$

なら、数学的にはユークリッド距離

$$
D_{XYZ}
=
\sqrt{(X_2-X_1)^2+(Y_2-Y_1)^2+(Z_2-Z_1)^2}
$$

を計算できる。

しかし、この値をそのまま知覚的な色差として扱うことはできない。

人間の視覚は、物理刺激の変化量に対して一様に反応しない。同じXYZ差でも、色空間の場所によって「ほとんど同じに見える」場合もあれば「かなり違って見える」場合もある。

CIEも、XYZ空間、$(x,y,Y)$ 空間、xy色度図はいずれも視覚的に均等ではなく、等しい距離が等しい知覚差を表さないとしている。

したがって必要なのは、色刺激を正確に記述するXYZとは別に、座標差を人間の知覚差へ近づける変換である。

## 2　まずXYZを「基準白」で割る

CIELABでは、測定したXYZをそのまま使わない。

対象色の三刺激値を

$$
X,Y,Z
$$

とし、同じ観察条件での基準白の三刺激値を

$$
X_n,Y_n,Z_n
$$

とする。

まず

$$
x_r=\frac{X}{X_n},\qquad
y_r=\frac{Y}{Y_n},\qquad
z_r=\frac{Z}{Z_n}
$$

と正規化する。

ここで重要なのは、L*a*b*が絶対的なXYZ値だけでは決まらないことである。

同じ $(X,Y,Z)$ でも、基準白 $(X_n,Y_n,Z_n)$ が変わればL*a*b*値も変わる。

これは人間の色知覚が「何を白として順応しているか」に依存することを、測色系へ取り込んだ構造と考えられる。

## 3　XYZをそのまま使わず、非線形関数を通す

CIELABでは、正規化したXYZに次の関数 $f(t)$ を適用する。

$$
\delta=\frac{6}{29}
$$

とすると、

$$
f(t)=
\begin{cases}
t^{1/3} & (t>\delta^3)\\[4pt]
\dfrac{t}{3\delta^2}+\dfrac{4}{29} & (t\le\delta^3)
\end{cases}
$$

である。

数値では

$$
\delta^3=\left(\frac{6}{29}\right)^3\approx0.008856
$$

なので、通常の明るさ領域では立方根変換が中心になる。

### なぜ立方根なのか

XYZの変化をそのまま距離へ使うと、知覚の非線形性を反映できない。

立方根のような圧縮変換を行うと、大きい刺激値ほど座標変化が圧縮される。

たとえば

$$
f(t)=t^{1/3}
$$

なら微分は

$$
\frac{df}{dt}=\frac{1}{3t^{2/3}}
$$

であり、$t$ が大きいほど同じ物理変化 $dt$ に対する座標変化 $df$ は小さくなる。

これは、刺激量と知覚量の関係を線形ではなく圧縮して扱うという考え方である。

ただし $t^{1/3}$ をそのまま $t=0$ 近くまで使うと、微分が非常に大きくなる。そこでCIELABでは低刺激領域だけ線形式へ切り替える。

境界 $t=\delta^3$ では、立方根側の傾き

$$
\frac{1}{3\delta^2}
$$

と線形式の傾きが一致し、値も

$$
f(\delta^3)=\delta
$$

で一致する。

つまりこの区分関数は、暗部で不自然な急変を避けながら滑らかにつながるよう作られている。

## 4　L*、a*、b*はこう定義される

CIELAB座標は

$$
L^*=116f\left(\frac{Y}{Y_n}\right)-16
$$

$$
a^*=500\left[
f\left(\frac{X}{X_n}\right)
-f\left(\frac{Y}{Y_n}\right)
\right]
$$

$$
b^*=200\left[
f\left(\frac{Y}{Y_n}\right)
-f\left(\frac{Z}{Z_n}\right)
\right]
$$

で定義される。

それぞれの意味はおおよそ次のようになる。

- $L^*$：明度の指標
- $+a^*$：赤方向、$-a^*$：緑方向
- $+b^*$：黄方向、$-b^*$：青方向

通常の物体色では、基準白に対して $L^*=100$、理想的な黒に近づくほど $L^*=0$ に近づく。

ただし、$a^*$ と $b^*$ は「赤錐体」「緑錐体」の出力そのものではない。これらはXYZから計算される測色座標であり、神経生理学的な反対色チャネルを直接測った値ではない。

## 5　a*とb*が「差」で作られている理由

$a^*$ は

$$
f(X/X_n)-f(Y/Y_n)
$$

という差、$b^*$ は

$$
f(Y/Y_n)-f(Z/Z_n)
$$

という差から作られる。

もし基準白そのものを測れば

$$
X=X_n,\quad Y=Y_n,\quad Z=Z_n
$$

なので

$$
f(1)=1
$$

となり、

$$
a^*=500(1-1)=0
$$

$$
b^*=200(1-1)=0
$$

となる。

さらに

$$
L^*=116-16=100
$$

である。

つまり基準白は

$$
(L^*,a^*,b^*)=(100,0,0)
$$

へ写される。

L*a*b*空間では、無彩色軸が $a^*=b^*=0$ 付近に置かれ、そこから赤―緑方向と黄―青方向への偏りを数値化できる。

## 6　実際にXYZからL*a*b*を計算する

基準白に対する相対値が

$$
\frac{X}{X_n}=0.25,
\qquad
\frac{Y}{Y_n}=0.216,
\qquad
\frac{Z}{Z_n}=0.125
$$

だったとする。

いずれも $0.008856$ より大きいので立方根を使う。

$$
f(0.25)\approx0.62996
$$

$$
f(0.216)=0.6
$$

$$
f(0.125)=0.5
$$

したがって

$$
L^*=116(0.6)-16=53.6
$$

$$
a^*=500(0.62996-0.6)\approx14.98
$$

$$
b^*=200(0.6-0.5)=20.0
$$

となる。

この色は

$$
(L^*,a^*,b^*)\approx(53.6,15.0,20.0)
$$

と表される。

XYZでは3つの刺激量だったものが、L*a*b*では「明るさ」「赤緑方向」「黄青方向」という、知覚的に解釈しやすい座標へ変換されている。

### 発展：L*a*b*からXYZへ逆変換する

CIELABは、同じ基準白 $(X_n,Y_n,Z_n)$ を指定すればXYZへ逆変換できる。ISO/CIE 11664-4:2019では逆変換がAnnex Aに示されている。

まず

$$
f_Y=\frac{L^*+16}{116},
\qquad
f_X=f_Y+\frac{a^*}{500},
\qquad
f_Z=f_Y-\frac{b^*}{200}
$$

とする。順変換で用いた区分関数 $f$ の逆関数を

$$
g(u)=
\begin{cases}
u^3 & (u>\delta)\\[4pt]
3\delta^2\left(u-\dfrac{4}{29}\right) & (u\le\delta)
\end{cases},
\qquad
\delta=\frac{6}{29}
$$

と書けば、

$$
X=X_n g(f_X),
\qquad
Y=Y_n g(f_Y),
\qquad
Z=Z_n g(f_Z)
$$

で元の三刺激値へ戻る。

前節の

$$
(L^*,a^*,b^*)\approx(53.6,14.98,20.0)
$$

では

$$
f_Y=0.600,
\qquad
f_X\approx0.62996,
\qquad
f_Z=0.500
$$

なので、いずれも $\delta$ より大きい。したがって立方をとれば

$$
\frac{X}{X_n}\approx0.25,
\qquad
\frac{Y}{Y_n}=0.216,
\qquad
\frac{Z}{Z_n}=0.125
$$

となり、順変換前の値を回収できる。

ここから二つの点が分かる。第一に、CIELABはXYZの情報をさらに圧縮する変換ではなく、指定した基準白のもとでは基本的に可逆な非線形座標変換である。スペクトルからXYZへ落とす段階ではメタメリズムによって情報が失われるが、XYZとCIELABの間の座標変換そのものが新たにスペクトル情報を捨てているわけではない。

第二に、L*a*b*値だけを受け取っても基準白が分からなければXYZは一意に定まらない。CIELAB座標は $(L^*,a^*,b^*)$ だけで完結せず、どの $(X_n,Y_n,Z_n)$ に対して定義した値かという測色条件を含めて初めて物理的な三刺激値へ戻せる。

## 7　色相と彩度に近い量も計算できる

L*a*b*の $a^*,b^*$ 平面を極座標として考えると、原点からの距離をCIE 1976 a,bクロマ

$$
C_{ab}^*=\sqrt{a^{*2}+b^{*2}}
$$

として表せる。

また色相角は

$$
h_{ab}=\operatorname{atan2}(b^*,a^*)
$$

で定義できる。

先ほどの例では

$$
C_{ab}^*
=
\sqrt{14.98^2+20.0^2}
\approx25.0
$$

となる。

色相角は約

$$
h_{ab}\approx53^\circ
$$

である。

ここで $C_{ab}^*$ はPCCSの「彩度」と同じ量ではない。どちらも色みの強さに関係するが、定義する表色体系が異なる。

## 8　色差ΔE*abは3次元距離として定義できる

2色を

$$
(L_1^*,a_1^*,b_1^*)
$$

$$
(L_2^*,a_2^*,b_2^*)
$$

とする。

差を

$$
\Delta L^*=L_2^*-L_1^*
$$

$$
\Delta a^*=a_2^*-a_1^*
$$

$$
\Delta b^*=b_2^*-b_1^*
$$

とすれば、CIE 1976 L*a*b*色差は

$$
\Delta E_{ab}^*
=
\sqrt{
(\Delta L^*)^2
+(\Delta a^*)^2
+(\Delta b^*)^2
}
$$

である。

これはL*a*b*空間での普通のユークリッド距離である。

たとえば

$$
(L_1^*,a_1^*,b_1^*)=(53.6,14.98,20.0)
$$

$$
(L_2^*,a_2^*,b_2^*)=(55.0,12.0,23.0)
$$

なら

$$
\Delta L^*=1.4,
\quad
\Delta a^*=-2.98,
\quad
\Delta b^*=3.0
$$

なので

$$
\Delta E_{ab}^*
\approx
\sqrt{1.4^2+(-2.98)^2+3.0^2}
\approx4.45
$$

となる。

この数値によって「どちらの色が赤いか」ではなく、2色が総合的にどれだけ離れているかを1つの値で表せる。

## 9　ΔE=1なら、どこでも同じ見え方なのか

ここがL*a*b*の最も重要な注意点である。

CIELABは「均等色空間」と呼ばれるが、完全に均等ではない。

CIE自身もCIELABを approximately uniform、つまり近似的に均等な色空間として定義している。

したがって

$$
\Delta E_{ab}^*=1
$$

という2組の色差が、色空間のどこでも完全に同じ知覚差を生むわけではない。

特に、色差知覚は明度、クロマ、色相の領域によって変わる。

この非均等性を補正するため、後にCIE94やCIEDE2000のような改良色差式が作られた。

## 10　CIEDE2000は何を補正するのか

現在のCIE標準には、CIEDE2000色差式がISO/CIE 11664-6:2022として定められている。

構造を概略的に書けば、

$$
\Delta E_{00}
=
\sqrt{
\left(\frac{\Delta L'}{k_LS_L}\right)^2
+
\left(\frac{\Delta C'}{k_CS_C}\right)^2
+
\left(\frac{\Delta H'}{k_HS_H}\right)^2
+
R_T
\left(\frac{\Delta C'}{k_CS_C}\right)
\left(\frac{\Delta H'}{k_HS_H}\right)
}
$$

となる。

単純なユークリッド距離との違いは、明度差、クロマ差、色相差を同じ重みで扱わず、色領域による知覚感度の違いを補正している点にある。

- $S_L$：明度差に対する重み
- $S_C$：クロマ差に対する重み
- $S_H$：色相差に対する重み
- $R_T$：クロマ差と色相差の相互作用補正
- $k_L,k_C,k_H$：観察条件に関する係数

CIEは、CIEDE2000をCIELAB色差式の拡張として位置づけ、明度・クロマ・色相およびクロマ―色相相互作用による色差知覚の変化を補正する式としている。

色彩検定でCIELABの基本を理解するときは、まず

$$
\Delta E_{ab}^*=\sqrt{\Delta L^{*2}+\Delta a^{*2}+\Delta b^{*2}}
$$

を理解し、その後に「実際の知覚は完全なユークリッド空間ではないため改良式が必要になる」と進むとよい。

## 11　基準白が違うL*a*b*値を直接比較してはいけない

L*a*b*は

$$
X/X_n,\quad Y/Y_n,\quad Z/Z_n
$$

を使って計算する。

したがって、基準白が異なる2つのL*a*b*値を、そのまま同じ空間の座標として比較することはできない。

たとえばD50基準で計算したL*a*b*とD65基準で計算したL*a*b*では、正規化に使う

$$
(X_n,Y_n,Z_n)
$$

が異なる。

異なる照明白色点の間で色を比較する場合には、必要に応じて色順応変換を行い、共通の基準白へ揃えてから比較する。

これは「色恒常性とvon Kries順応」の記事で扱った考え方と直接つながる。

## 12　分光測色からL*a*b*までの流れ

物体色を測る場合、最終的なL*a*b*値だけを見ると、どこから数値が出てきたのか分かりにくい。

実際の流れは概念的には次のようになる。

物体の分光反射率を

$$
R(\lambda)
$$

照明の分光分布を

$$
S(\lambda)
$$

標準測色観察者の等色関数を

$$
\bar x(\lambda),\quad\bar y(\lambda),\quad\bar z(\lambda)
$$

とする。

まず

$$
X=k\int S(\lambda)R(\lambda)\bar x(\lambda)\,d\lambda
$$

$$
Y=k\int S(\lambda)R(\lambda)\bar y(\lambda)\,d\lambda
$$

$$
Z=k\int S(\lambda)R(\lambda)\bar z(\lambda)\,d\lambda
$$

としてXYZを求める。

その後、同じ照明・観察条件での基準白

$$
X_n,Y_n,Z_n
$$

を使い、非線形変換してL*a*b*を得る。

したがって全体は

$$
\text{分光反射率}
\rightarrow
XYZ
\rightarrow
L^*a^*b^*
\rightarrow
\Delta E
$$

という階層になっている。

L*a*b*は分光情報そのものではなく、標準観察者と照明条件を通して3変数へ圧縮されたXYZを、さらに知覚差へ近づくよう座標変換した表色値である。

## 13　L*a*b*が同じなら、分光反射率も同じなのか

同じとは限らない。

異なる分光反射率

$$
R_1(\lambda)\neq R_2(\lambda)
$$

でも、ある照明と標準観察者の条件で同じXYZを生じれば、同じL*a*b*になる。

これはメタメリズムである。

L*a*b*は3次元なので、数百点の波長ごとに定義される分光反射率の情報を保持していない。

そのため、L*a*b*値だけでは「なぜその色になったか」や「別の照明でも同じ色に見えるか」までは決められない。

これは別記事の分光測色・メタメリズムにつながる。

## 14　L*a*b*はXYZ空間に「場所によって変わる物差し」を入れる

CIELABの数学的意味を、微小な色差についてさらに一段深く見る。

XYZからL*a*b*への変換を

$$
\mathbf{l}=F(\mathbf{X}),\qquad
\mathbf{X}=\begin{bmatrix}X\\Y\\Z\end{bmatrix},\quad
\mathbf{l}=\begin{bmatrix}L^*\\a^*\\b^*\end{bmatrix}
$$

と書く。XYZが微小量 $d\mathbf{X}$ だけ変化したとき、一次近似では

$$
d\mathbf{l}=J\,d\mathbf{X}
$$

となる。ここで $J$ はヤコビ行列

$$
J=\frac{\partial(L^*,a^*,b^*)}{\partial(X,Y,Z)}
$$

である。

$f_X'=f'(X/X_n)$、$f_Y'=f'(Y/Y_n)$、$f_Z'=f'(Z/Z_n)$ と置けば、

$$
J=
\begin{bmatrix}
0 & \dfrac{116f_Y'}{Y_n} & 0\\[8pt]
\dfrac{500f_X'}{X_n} & -\dfrac{500f_Y'}{Y_n} & 0\\[8pt]
0 & \dfrac{200f_Y'}{Y_n} & -\dfrac{200f_Z'}{Z_n}
\end{bmatrix}.
$$

立方根領域では

$$
f'(t)=\frac{1}{3t^{2/3}}
$$

なので、$J$ の各要素は色の位置によって変わる。つまり、同じ $dX,dY,dZ$ でも、暗い色と明るい色、無彩色付近と高彩度色付近ではL*a*b*上の移動量が同じにならない。

L*a*b*上の微小色差は

$$
dE_{ab}^{*2}=d\mathbf{l}^{\mathsf T}d\mathbf{l}
$$

だから、XYZで書き直すと

$$
dE_{ab}^{*2}
=d\mathbf{X}^{\mathsf T}J^{\mathsf T}Jd\mathbf{X}.
$$

ここで

$$
G(\mathbf{X})=J^{\mathsf T}J
$$

と置けば、$G$ はXYZ空間上で「どの方向の変化をどれだけ大きな色差として数えるか」を決める局所的な計量になる。$G$ が位置によって変化することが、CIELABを「XYZを非線形に曲げた空間」とみなせる数学的理由である。

この式は測定誤差にもそのまま使える。分光測色から得たXYZの誤差共分散行列を $\Sigma_{XYZ}$ とすれば、一次の誤差伝播では

$$
\Sigma_{Lab}\approx J\Sigma_{XYZ}J^{\mathsf T}
$$

となる。

したがって「XYZを何桁まで正確に測れたか」だけではL*a*b*や色差の不確かさは決まらない。測定した色の位置と基準白を通じてヤコビ行列が変わるため、同じXYZ誤差でもL*a*b*上の誤差は場所によって異なる。

## 15　CIEDE2000は「球」を色領域依存の楕円体へ変える

$\Delta E_{ab}^*$ で一定の許容色差 $r$ を置くと、

$$
(\Delta L^*)^2+(\Delta a^*)^2+(\Delta b^*)^2=r^2
$$

であり、L*a*b*空間では等色差面は球になる。これは三方向の感度を同じとみなす等方的な距離である。

CIEDE2000では、式を

$$
u=\frac{\Delta L'}{k_LS_L},\qquad
v=\frac{\Delta C'}{k_CS_C},\qquad
w=\frac{\Delta H'}{k_HS_H}
$$

と正規化すると、

$$
\Delta E_{00}^2=u^2+v^2+w^2+R_Tvw
$$

と書ける。さらに

$$
\mathbf d=
\begin{bmatrix}u\\v\\w\end{bmatrix},\qquad
M=
\begin{bmatrix}
1&0&0\\
0&1&R_T/2\\
0&R_T/2&1
\end{bmatrix}
$$

と置けば、

$$
\boxed{\Delta E_{00}^2=\mathbf d^{\mathsf T}M\mathbf d}
$$

という二次形式になる。交差項は $2M_{23}vw=R_Tvw$ である。

係数を局所的に固定して考えると、$\Delta E_{00}=r$ の等色差面は球ではなく楕円体になる。特にクロマ―色相部分

$$
\begin{bmatrix}
1&R_T/2\\
R_T/2&1
\end{bmatrix}
$$

の固有値は

$$
\lambda_{\pm}=1\pm\frac{R_T}{2}
$$

で、固有ベクトルは $(1,\pm1)/\sqrt2$ である。したがって $R_T\neq0$ なら、許容差の主軸は単純なクロマ軸・色相軸から回転する。

CIEDE2000の回転項は

$$
R_T=-R_C\sin(2\Delta\theta)
$$

$$
R_C=2\sqrt{\frac{\bar C'^7}{\bar C'^7+25^7}}
$$

$$
\Delta\theta
=30^\circ\exp\left[-\left(\frac{\bar h'-275^\circ}{25^\circ}\right)^2\right]
$$

と定義される。このためクロマ―色相の結合補正は、とくに平均色相が青領域の約 $275^\circ$ 付近で効きやすい。

ただし、これは空間全体を一つの楕円体で表すという意味ではない。$S_L,S_C,S_H,R_T$ は色対の平均明度・平均クロマ・平均色相に依存するため、許容差の大きさと向きは色空間内の位置によって変わる。CIEDE2000は、CIELABの残る非均等性を色領域依存の重みとクロマ―色相結合で補正していると理解できる。

この見方は品質管理にも直結する。同じ $\Delta L^*,\Delta a^*,\Delta b^*$ の数値差でも、基準色が違えば $\Delta E_{00}$ の評価は変わりうる。色差許容を単純な各座標の独立上限として扱えない理由である。

## 16　色彩検定で混同しやすい点

### XYZとL*a*b*は目的が違う

XYZは等色に基づいて色刺激を記述する基礎表色系である。L*a*b*はXYZから計算される、より知覚的な色差を扱いやすくした空間である。

### xy色度図とL*a*b*空間は違う

xy色度図は主として色度と混色関係を見る2次元図であり、明るさを直接持たない。L*a*b*は明度を含む3次元空間である。

### L*a*b*はRGBではない

RGB値から直接L*a*b*が決まるわけではない。RGB色空間の原色、白色点、伝達関数を使って一度XYZへ変換し、その後にL*a*b*へ変換する必要がある。

### ΔEは絶対的な「人間の感覚単位」ではない

$\Delta E_{ab}^*$ は知覚差に近づけるための指標だが、完全な均等性はない。用途によってCIEDE2000などが使われる。

## 17　まとめ

CIELABの本質は、XYZへ単に別名を付けたことではない。

まずXYZを基準白で

$$
X/X_n,\quad Y/Y_n,\quad Z/Z_n
$$

と正規化し、さらに非線形関数

$$
f(t)
$$

で圧縮する。

そこから

$$
L^*=116f(Y/Y_n)-16
$$

$$
a^*=500[f(X/X_n)-f(Y/Y_n)]
$$

$$
b^*=200[f(Y/Y_n)-f(Z/Z_n)]
$$

を作ることで、明度、赤緑方向、黄青方向を持つ近似的な均等色空間になる。

そして2色間の距離

$$
\Delta E_{ab}^*
=
\sqrt{\Delta L^{*2}+\Delta a^{*2}+\Delta b^{*2}}
$$

によって色差を数値化できる。

ただしCIELABは完全に均等ではない。そのため実務では、必要に応じてCIEDE2000のような改良色差式が使われる。

さらに微小変化では、XYZ→L*a*b*変換のヤコビ行列 $J$ により

$$
dE_{ab}^{*2}=d\mathbf{X}^{\mathsf T}J^{\mathsf T}Jd\mathbf{X}
$$

と書ける。L*a*b*がXYZに対して場所ごとに異なる「物差し」を与えることが、均等色空間の数学的意味である。

CIEDE2000については、正規化した明度差・クロマ差・色相差に対する二次形式として見ると、等色差面は球ではなく色領域依存の楕円体になる。つまり「色差1」という同じ数値でも、許容される変化の方向と大きさは基準色によって変わる。

色彩検定では「L*は明度、a*は赤―緑、b*は黄―青」と覚えるだけでなく、

$$
\text{分光分布}
\rightarrow XYZ
\rightarrow L^*a^*b^*
\rightarrow \Delta E
$$

という測色の因果関係まで理解しておくと、XYZ表色系、均等色空間、色差、分光測色、カラーマネジメントが一つの体系としてつながる。

## 参考資料

- 色彩検定協会「色彩検定とは―各級の目安」  
  https://www.aft.or.jp/pages/feature/level
- 色彩検定協会「過去開催のセミナー・講座一覧」2025年9月「XYZ 表色系と均等色空間」  
  https://www.aft.or.jp/pages/event-seminar/seminar-archive
- CIE, e-ILV 17-23-076, “CIE 1976 L*a*b* colour space”  
  https://cie.co.at/eilvterm/17-23-076
- CIE, e-ILV 17-23-077, “CIE 1976 L*a*b* colour difference”  
  https://cie.co.at/eilvterm/17-23-077
- ISO/CIE 11664-4:2019(E), “Colorimetry — Part 4: CIE 1976 L*a*b* colour space”  
  https://www.cie.co.at/publications/colorimetry-part-4-cie-1976-lab-colour-space-1
- ISO/CIE 11664-6:2022(E), “Colorimetry — Part 6: CIEDE2000 Colour-Difference Formula”  
  https://www.cie.co.at/publications/colorimetry-part-6-ciede2000-colour-difference-formula-1
- CIE 230:2019, “Validity of Formulae for Predicting Small Colour Differences”  
  https://www.cie.co.at/publications/validity-formulae-predicting-small-colour-differences
- Sharma, G., Wu, W., Dalal, E. N. (2005), “The CIEDE2000 color-difference formula: Implementation notes, supplementary test data, and mathematical observations”, Color Research & Application 30(1), 21–30.  
  https://doi.org/10.1002/col.20070
- CIE 015:2018, “Colorimetry, 4th Edition”  
  https://www.cie.co.at/publications/colorimetry-4th-edition