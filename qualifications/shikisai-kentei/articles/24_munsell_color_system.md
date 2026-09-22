# マンセル表色系は何を数値化しているのか――色相・明度・彩度を知覚尺度から考える

色彩検定2級では、色の表示（表色系）としてマンセル表色系を学ぶ。色彩検定協会の現行案内では2級を「3級の知識をベースに、より高度な配色技法やイメージ表現を習得する」級として位置づけ、公式の項目一覧ではマンセル表色系が出題範囲に含まれている。

マンセル表色系は、RGBやXYZのように光を三つの成分へ線形分解する表色系ではない。人が物体色を見たときの「色相 hue」「明るさ lightness」「鮮やかさ chroma」を、できるだけ知覚的に等しい段階で並べようとした色順序体系である。

この違いを理解すると、なぜマンセル色立体が完全な円柱にならないのか、なぜ明度5が反射率50%ではないのか、なぜマンセル値からXYZへ単純な一次変換ができないのかが分かる。

## 1　マンセル表記 H V/C は三つの知覚属性を分離する

マンセル表記は

$$
H\ V/C
$$

で書く。たとえば

$$
5R\ 4/12
$$

なら、$H=5R$ が色相、$V=4$ が明度、$C=12$ が彩度である。

色相は R, YR, Y, GY, G, BG, B, PB, P, RP の10色相領域を一周し、それぞれをさらに数値で細分する。無彩色は色相と彩度を持たず、$N5$ のように表す。

ここで重要なのは、$H,V,C$ が物理量そのものではないことだ。たとえば $V$ は反射率、$C$ はスペクトル純度ではない。いずれも観察者の知覚を基準に組み立てられた尺度である。

## 2　マンセルは「顕色系」であり、XYZとは出発点が違う

XYZ表色系では、分光分布 $P(\lambda)$ に等色関数を掛けて

$$
X=K\int P(\lambda)\bar x(\lambda)d\lambda,
\qquad
Y=K\int P(\lambda)\bar y(\lambda)d\lambda,
\qquad
Z=K\int P(\lambda)\bar z(\lambda)d\lambda
$$

と三刺激値を計算する。これは等色実験を基礎とする「混色系」で、スペクトルから三つの数値への写像は線形である。

一方、マンセル表色系は実際の色票を見比べ、知覚的な順序と間隔を整えるところから出発した「顕色系」である。

したがって概念的には

$$
\text{XYZ}:\quad P(\lambda)\xrightarrow{\text{線形写像}}(X,Y,Z)
$$

に対し、マンセルは

$$
\text{Munsell}:\quad \text{物体色の見え}\xrightarrow{\text{視感評価}}(H,V,C)
$$

である。

同じ「3変数で色を表す」体系でも、数学的性質は同じではない。

## 3　明度 V はなぜ反射率に比例しないのか

白い紙が黒い紙の2倍の光を反射したからといって、人が2倍明るく感じるわけではない。視覚の応答は物理刺激に対して非線形だからである。

マンセル明度 $V$ は、黒を0、理想的な白側を10とし、その間が視覚的にほぼ等間隔になるよう構成された。

1943年のMunsell renotationでは、明度 $V$ と測光的な反射率 $Y$ の関係を近似するため、歴史的に次の5次式が用いられた。

$$
Y
=1.2219V
-0.23111V^2
+0.23951V^3
-0.021009V^4
+0.0008404V^5
$$

この式の $Y$ は当時のMgO標準を100とした反射率尺度である。たとえば $V=5$ を代入すると

$$
Y\approx19.8
$$

となる。つまり「明度5」は「光を50%反射する灰色」ではない。

ここには心理物理学的な非線形性が表れている。後のCIELABでも明度 $L^*$ はXYZの $Y/Y_n$ をそのまま使わず、立方根型の非線形変換を行う。マンセル明度とCIELAB明度は同一ではないが、「物理的な光量をそのまま知覚尺度としない」という発想は共通している。

## 4　彩度 C は「中心からの距離」だが、単純な半径ではない

マンセル色立体では、中心軸に無彩色が並び、そこから外側へ離れるほど彩度 $C$ が高くなる。

模式的には、色相を角度 $\theta$、彩度を半径 $C$ とみなして

$$
u=C\cos\theta,
\qquad
v=C\sin\theta
$$

のような極座標を想像できる。

ただし、これは説明用の近似にすぎない。実際のマンセル色立体は円柱でも球でもない。

理由は、物体として実現できる最大彩度が色相と明度によって違うからである。たとえば高明度の黄色では非常に高い彩度まで実現できる一方、同じ明度の別の色相ではそこまで外側へ伸びない。このため色立体の外殻は不規則になる。

つまり

$$
C_{\max}=C_{\max}(H,V)
$$

であり、最大彩度は色相 $H$ と明度 $V$ の関数である。

「彩度10」という値だけを取り出して、すべての色相で同じ物理的刺激量を意味すると考えてはいけない。

## 5　色相 H も波長そのものではない

色相を「光の波長」と同一視することもできない。

単色光には波長を割り当てられるが、紫やマゼンタのように単一波長では表せない色も存在する。また物体色は通常、多数の波長が混ざった反射スペクトルから生じる。

マンセル色相は、人が感じる色相の類似と差を基準に環状に配置した知覚尺度である。

したがって

$$
H\neq f(\lambda)
$$

というより、一般には単一の波長 $\lambda$ からマンセル色相を決める問題そのものが成立しない。

## 6　なぜ1943年に「renotation」が必要だったのか

初期のマンセル色票は、理想的には知覚的に等間隔で並ぶことを目指していた。しかし実際の色票を測定・観察すると、三属性の間隔にはばらつきがあった。

そこでOptical Society of Americaの小委員会は、多数の観察者による視感評価を用いて色票の位置関係を再検討した。Newhall, Nickerson, Juddによる1943年の最終報告が、いわゆるMunsell renotationの基礎である。

この作業では、知覚的に整えたマンセル座標をCIE 1931の測色値と対応させた。現在RITが公開しているrenotation dataには、各色について

$$
(H,V,C)\longleftrightarrow(x,y,Y)
$$

という対応が収録されている。公開データではCIE Illuminant C、CIE 1931 2°標準観察者の条件で $x,y,Y$ が与えられている。

ここが重要である。マンセルとCIE表色系の関係は、単純な3×3行列ではない。

XYZ内部の基底変換なら

$$
\mathbf c_2=M\mathbf c_1
$$

という線形変換で扱える場合がある。しかしマンセルは知覚的に整えられた非線形な色順序体系なので、実用上はrenotation dataと補間を使って対応を求める。

## 7　分光測色からマンセル値を求めるときは何が起きるか

物体の分光反射率を $R(\lambda)$、標準光源の分光分布を $S(\lambda)$ とすると、まず

$$
X=k\int S(\lambda)R(\lambda)\bar x(\lambda)d\lambda
$$

$$
Y=k\int S(\lambda)R(\lambda)\bar y(\lambda)d\lambda
$$

$$
Z=k\int S(\lambda)R(\lambda)\bar z(\lambda)d\lambda
$$

を計算する。

次に

$$
x=\frac{X}{X+Y+Z},
\qquad
y=\frac{Y}{X+Y+Z}
$$

を求め、renotation data上の $(x,y,Y)$ と照合・補間して $(H,V,C)$ を推定する。

したがって測定の流れは

$$
R(\lambda)
\rightarrow XYZ
\rightarrow xyY
\rightarrow \text{renotationの補間}
\rightarrow HVC
$$

となる。

逆方向も同様に、あるマンセル記号が一意の分光反射率を決めるわけではない。同じ測色値を与える異なるスペクトル、すなわちメタマーが存在するためである。

## 8　HVCの数値差をそのまま色差にしてはいけない

マンセル尺度は知覚的な等間隔性を目指しているが、$H,V,C$ を通常の直交座標とみなして

$$
\sqrt{(\Delta H)^2+(\Delta V)^2+(\Delta C)^2}
$$

と計算すれば厳密な知覚色差になる、という体系ではない。

第一に色相は循環量である。たとえば色相環の端と端は数値上離れていても知覚上は隣接する。第二に彩度方向の尺度と明度方向の尺度を単純に同じ単位として足せる保証はない。第三に色立体そのものが不規則である。

工業的な色差管理では、通常は分光測色からXYZを求め、CIELABなどへ変換し、$\Delta E$ 系の色差式を使う。

マンセルは「色を秩序立てて指定・比較する体系」、CIELABは「測色値から知覚色差を扱いやすくする空間」と役割を分けて考えるとよい。

## 9　renotationを「非線形写像」として見る

renotation dataによる対応を、数学的には

$$
\mathbf p=(h,V,C)^\mathsf T,
\qquad
\mathbf q=(x,y,Y)^\mathsf T
$$

として

$$
\mathbf q=F(\mathbf p)
$$

という非線形写像と考えられる。ここで $h$ は色相を円周上の連続座標へ展開したものとする。

ある色 $\mathbf p_0$ のごく近傍だけを見れば、多変数関数は一次近似できる。

$$
\delta\mathbf q
\approx
J_F(\mathbf p_0)\,\delta\mathbf p
$$

ここで

$$
J_F=
\begin{pmatrix}
\partial x/\partial h & \partial x/\partial V & \partial x/\partial C\\
\partial y/\partial h & \partial y/\partial V & \partial y/\partial C\\
\partial Y/\partial h & \partial Y/\partial V & \partial Y/\partial C
\end{pmatrix}
$$

はヤコビ行列である。

この式は「マンセルとxyYの間には何の数学的関係もない」という意味ではないことを示す。近い色だけなら局所的には線形近似できる。ただし $J_F$ は色立体上の位置によって変わるので、全域を一つの固定行列で変換することはできない。

局所的に逆写像が存在し、$J_F$ が正則なら

$$
\delta\mathbf p
\approx
J_F^{-1}\delta\mathbf q
$$

と書ける。測色値の共分散行列を $\Sigma_q$ とすれば、一次近似ではマンセル座標側の不確かさは

$$
\Sigma_p
\approx
J_F^{-1}\Sigma_q(J_F^{-1})^\mathsf T
$$

へ伝播する。

つまり分光測色計の誤差が一定でも、マンセル値へ換算したときの不確かさは色立体上の場所によって変わりうる。

### 無彩色軸では色相が特異になる

さらに $C\to0$ では色相 $H$ の意味が失われる。これは極座標で半径 $r=0$ のとき角度 $\theta$ が定まらないのと同じ構造である。

模式的に

$$
u=C\cos\theta,
\qquad
v=C\sin\theta
$$

と置けば、$C=0$ ではどの $\theta$ を選んでも

$$
(u,v)=(0,0)
$$

になる。したがって無彩色に近づくほど、微小な測定差から推定される色相が大きく振れやすい。

これは単なる測定器の性能不足ではなく、色相を「角度」として持つ座標系そのものの特異性である。

## 10　マンセル・PCCS・NCS・XYZは同じ種類の体系ではない

色彩検定では複数の表色体系が登場するが、分類を混同しないことが重要である。

- マンセル：色相・明度・彩度を知覚的に配列した顕色系
- PCCS：色相とトーンを中心に配色へ使いやすく構成した体系
- NCS：赤・黄・緑・青・白・黒という要素への知覚的類似性から色を記述する体系
- XYZ：等色実験を基礎にした測色用の三刺激値表色系
- CIELAB：XYZから非線形変換して、知覚的均等性を改善した色空間

したがって「どれが最も正確か」という一列の優劣ではなく、何を記述するために作られた体系かを見る必要がある。

## 11　最大彩度はどこで止まるのか――物体色立体とMacAdam限界

マンセル色立体の外殻が不規則になる理由は、知覚尺度だけでなく物体色の物理的制約からも理解できる。非蛍光で受動的な反射物体を理想化すると、各波長の分光反射率は

$$
0\le R(\lambda)\le1
$$

を満たす。

標準イルミナントの分光分布を $S(\lambda)$ とし、標準観察者を固定すれば、物体色のXYZは

$$
\mathbf X[R]
=
k\int S(\lambda)R(\lambda)
\begin{pmatrix}
\bar x(\lambda)\\
\bar y(\lambda)\\
\bar z(\lambda)
\end{pmatrix}d\lambda
$$

で与えられる。

波長を離散化して、各波長帯の反射率をベクトル

$$
\mathbf r=(r_1,r_2,\ldots,r_n)^\mathsf T,
\qquad 0\le r_i\le1
$$

と書けば、測色は

$$
\mathbf X=A\mathbf r
$$

という線形写像になる。許される $\mathbf r$ の集合は $n$ 次元の単位超立方体 $[0,1]^n$ であるため、その線形像として得られるXYZの実現可能集合は凸集合になる。これが固定照明・固定観察者のもとでの「物体色立体」を考える一つの数学的見方である。

固定した明度 $Y$ の断面を取り、ある色相方向へ外側へ進むと、やがて $0\le R(\lambda)\le1$ を満たす反射スペクトルではそれ以上の色度へ到達できなくなる。この物理的境界が、マンセルで

$$
C_{\max}=C_{\max}(H,V)
$$

となる背景の一つである。最大彩度がすべての色相・明度で同じなら色立体は円柱状に近づくが、実際には物体色の到達可能領域そのものが方向によって異なる。

さらに、XYZ空間である方向の値を最大化する問題は、離散化すれば

$$
\max_{0\le\mathbf r\le1}\ \mathbf c^\mathsf T A\mathbf r
$$

という線形計画問題として書ける。線形目的関数の極値は超立方体の頂点で達成できるため、境界を与える理想化反射率は各波長帯で $r_i=0$ または $1$ をとるスペクトルへ結びつく。これはMacAdamらが扱った「実現可能な物体色の限界」や optimal color の考え方と対応する。

RITが公開するMunsell renotation dataでも、補間用の外挿色の一部は物理的に実在せず、MacAdam limitsの外側にあると明記されている。逆に real.dat はその限界内にある実在色として整理されている。

したがってマンセル色立体は、単なる「歪んだ円柱」ではない。知覚的な等歩度化と、分光反射率が満たす物理的制約の両方が重なって、不規則な外殻を持つ色立体になる。

## 12　「1マンセル差」はどこでも同じ距離か――局所計量で考える

マンセルは知覚的な等歩度を目指した体系だが、HVC座標の差をそのままユークリッド距離として扱えるわけではない。この点を、CIELABへの局所写像を使って定量化できる。

固定した照明・標準観察者のもとで、renotationとXYZ→CIELAB変換をまとめて

$$
\boldsymbol{\ell}=G(\mathbf p),
\qquad
\mathbf p=(h,V,C)^\mathsf T,
\qquad
\boldsymbol{\ell}=(L^*,a^*,b^*)^\mathsf T
$$

と書く。ある色 $\mathbf p_0$ の近傍では

$$
\delta\boldsymbol{\ell}
\approx
J_G(\mathbf p_0)\,\delta\mathbf p
$$

である。CIELABの1976色差を局所的な距離として使うと

$$
(\Delta E^*_{ab})^2
\approx
\delta\boldsymbol{\ell}^{\mathsf T}\delta\boldsymbol{\ell}
=
\delta\mathbf p^{\mathsf T}
\underbrace{J_G^{\mathsf T}J_G}_{M(\mathbf p_0)}
\delta\mathbf p
$$

となる。

$$
\boxed{M(\mathbf p)=J_G(\mathbf p)^{\mathsf T}J_G(\mathbf p)}
$$

は、CIELAB側の距離をマンセル座標へ引き戻した局所的な計量行列とみなせる。$M$ が色立体のどこでも一定の単位行列の定数倍なら、H・V・Cの同じ数値差は場所によらず同じ色差を意味する。しかし実際には $J_G$ が位置によって変わるため、$M$ も変化する。

対角成分は各座標方向へ少し動いたときの色差感度、非対角成分は色相・明度・彩度方向がCIELAB上で完全には直交しないことを表す。さらに $M$ の固有値と固有ベクトルを求めれば、その色の近傍で「最も色差が大きく増える方向」「最も増えにくい方向」を定量化できる。

この見方は、前節の無彩色軸の特異性ともつながる。$C\to0$ では色相 $h$ を変えても色そのものはほとんど動かなくなるため、$\partial\boldsymbol{\ell}/\partial h$ は小さくなり、計量行列は色相方向で特異または悪条件になっていく。無彩色で色相が定義できないことが、微分幾何学的にも現れる。

なおCIELAB自体も完全な均等色空間ではない。CIEDE2000のような局所的な色差モデルを二次形式

$$
(\Delta E_{00})^2
\approx
\delta\boldsymbol{\ell}^{\mathsf T}
W(\boldsymbol{\ell})
\delta\boldsymbol{\ell}
$$

として近似するなら、マンセル側では

$$
M_{00}(\mathbf p)
=
J_G^{\mathsf T}WJ_G
$$

となる。重要なのは、どの色差尺度を採用しても「HVCの固定した数値差＝どこでも同じ知覚距離」とは一般に言えないことである。

## 13　色彩検定で押さえるところ

色彩検定2級では、まず次を確実にする。

- マンセル表色系は色相・明度・彩度の三属性で色を表す
- 表記は $H\ V/C$
- 無彩色は $N$ と明度で表す
- 色相は環状、明度は上下、彩度は無彩色軸から外側へ配置される
- 色立体は完全な円柱や球ではなく、最大彩度が色相・明度によって異なる
- マンセル値は反射率・波長・XYZそのものではない

大学レベルではさらに、マンセル表色系を

$$
\text{物理刺激}
\rightarrow
\text{測色値}
\rightarrow
\text{知覚的色順序}
$$

という階層のうち「知覚的色順序を組織化する体系」として位置づける。

そうすると、後に学ぶXYZ、CIELAB、色差、分光測色との役割分担が明確になる。

## 14　測定したYからマンセル明度Vをどう逆算するか――逆問題と誤差伝播

第3節では、マンセル明度 $V$ から反射率尺度 $Y$ への写像を5次式で表した。実際の測色では逆に、測定で得た $Y$ から $V$ を求めたい。このとき問題は

$$
Y_m=F(V)
$$

を満たす $V$ を求める1変数の逆問題になる。ここで

$$
F(V)=1.2219V-0.23111V^2+0.23951V^3-0.021009V^4+0.0008404V^5
$$

である。$f(V)=F(V)-Y_m$ と置けば、Newton法では

$$
V_{n+1}=V_n-\frac{f(V_n)}{f'(V_n)}
$$

と反復する。導関数は

$$
f'(V)=1.2219-0.46222V+0.71853V^2-0.084036V^3+0.004202V^4
$$

である。たとえば $Y_m=19.77$ なら、$V_0=5$ を初期値に取れば $V\approx5.00$ へ収束する。実装ではマンセル明度の定義域に合わせて $0\le V\le10$ を保ち、必要なら二分法などの区間法と組み合わせれば安定に逆算できる。

この逆変換は測定不確かさも非線形に変換する。$Y=F(V)$ を微分すると

$$
\delta Y\approx F'(V)\,\delta V
$$

なので、局所的には

$$
\boxed{\delta V\approx\frac{\delta Y}{F'(V)}}
$$

となる。標準不確かさで書けば

$$
u_V\approx\frac{u_Y}{|F'(V)|}
$$

である。$V=5$ では

$$
F'(5)\approx8.996
$$

だから、$Y$ の標準不確かさが0.10なら

$$
u_V\approx\frac{0.10}{8.996}\approx0.011
$$

となる。一方、$V=1$ では $F'(1)\approx1.398$ なので、同じ $u_Y=0.10$ でも

$$
u_V\approx0.072
$$

まで大きくなる。

これは「測定器の誤差が同じならマンセル明度の誤差も同じ」ではないことを示す。非線形な座標変換では、測定誤差はその点での傾き、すなわちJacobianによって伸縮する。第9節で扱った多変数の不確かさ伝播

$$
\Sigma_p\approx J_F^{-1}\Sigma_q(J_F^{-1})^\mathsf T
$$

の1次元版が、まさにこの式である。

## 参考資料

- [色彩検定協会「色彩検定とは―各級の目安」](https://www.aft.or.jp/pages/feature/level)
- [色彩検定協会「色彩検定2級 新旧公式テキスト項目一覧」](https://www.aft.or.jp/images/%282%E7%B4%9A%29%E6%96%B0%E6%97%A7%E5%85%AC%E5%BC%8F%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E9%A0%85%E7%9B%AE%E6%AF%94%E8%BC%83%E8%A1%A8.pdf)
- [ASTM D1535-14(2023), Standard Practice for Specifying Color by the Munsell System](https://store.astm.org/d1535-14r23.html)
- [Rochester Institute of Technology, Munsell Color Science Lab Educational Resources / Munsell Renotation Data](https://www.rit.edu/science/munsell-color-science-lab-educational-resources)
- [Newhall, S. M., Nickerson, D., & Judd, D. B. (1943), “Final Report of the O.S.A. Subcommittee on the Spacing of the Munsell Colors,” Journal of the Optical Society of America, 33, 385–418](https://doi.org/10.1364/JOSA.33.000385)
- [MacAdam, D. L. (1935), “The Theory of the Maximum Visual Efficiency of Colored Materials,” Journal of the Optical Society of America, 25, 249–252](https://doi.org/10.1364/JOSA.25.000249)
- G. Wyszecki & W. S. Stiles, *Color Science: Concepts and Methods, Quantitative Data and Formulae*, 2nd ed., Wiley, 1982.
- [CIE 015:2018, Colorimetry, 4th Edition](https://www.cie.co.at/publications/colorimetry-4th-edition)
- [ISO/CIE 11664-4:2019, Colorimetry — Part 4: CIE 1976 L*a*b* colour space](https://www.cie.co.at/publications/colorimetry-part-4-cie-1976-lab-colour-space-1)