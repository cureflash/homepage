# 同じ色に見えるのにスペクトルが違うのはなぜか――メタメリズムを線形代数で考える

色見本と印刷物を店内では同じ色に合わせたのに、屋外へ持ち出すと片方だけ赤みが強く見えることがある。これは「測色が間違っていた」からとは限らない。2つの試料が、ある照明と観察者の条件では同じ三刺激値を持つ一方、分光反射率は異なっているときに起こり得る。

この現象が条件等色、すなわちメタメリズム（metamerism）である。CIEはmetameric colour stimuliを「分光的には異なるが、指定された測色系で同じ三刺激値をもつ色刺激」と定義している。

理系的に見ると、メタメリズムの本質は非常に明快である。

$$
\boxed{
\text{高次元のスペクトル情報}
\longrightarrow
\text{3個の三刺激値 }(X,Y,Z)
}
$$

という次元圧縮が行われるため、異なるスペクトルが同じ3次元座標へ写るのである。

この記事では、色彩検定1級で扱う測色・表色系の理解を、分光反射率、標準イルミナント、等色関数、線形代数の零空間、照明メタメリズム、観察者メタメリズムまで接続して考える。

## 1　まず「色」と「スペクトル」を分ける

物体色を測るとき、物体そのものが直接 $X,Y,Z$ を持っているわけではない。

物体の分光反射率を

$$
\rho(\lambda)
$$

照明の相対分光分布を

$$
S(\lambda)
$$

とすると、観察者へ届く色刺激の分光分布は、単純化すれば

$$
\phi(\lambda)=S(\lambda)\rho(\lambda)
$$

で表される。

CIEのInternational Lighting Vocabularyでも、物体色のcolour stimulus functionは、照明の相対分光分布と分光反射率・分光放射輝度率・分光透過率などの積として与えられる。

つまり同じ物体でも、照明 $S(\lambda)$ が変われば眼へ届くスペクトルは変わる。

## 2　スペクトルからXYZへ変換すると大量の情報が消える

CIE 1931 2°標準観察者を用いると、三刺激値は

$$
X=k\int S(\lambda)\rho(\lambda)\bar{x}(\lambda)\,d\lambda
$$

$$
Y=k\int S(\lambda)\rho(\lambda)\bar{y}(\lambda)\,d\lambda
$$

$$
Z=k\int S(\lambda)\rho(\lambda)\bar{z}(\lambda)\,d\lambda
$$

で計算できる。

ここで

- $\bar{x}(\lambda),\bar{y}(\lambda),\bar{z}(\lambda)$：CIE等色関数
- $S(\lambda)$：照明スペクトル
- $\rho(\lambda)$：試料の分光反射率
- $k$：規格化係数

である。

重要なのは、$\rho(\lambda)$ が波長ごとに値をもつ「関数」なのに、最終的には3個の数

$$
(X,Y,Z)
$$

だけになることである。

例えば400〜700 nmを1 nm刻みで表せば、反射率は約301個の数で表現される。それを3個の数へ圧縮するので、元のスペクトルをXYZだけから一意に復元することはできない。

$$
301\text{次元}
\rightarrow
3\text{次元}
$$

という写像には、必然的に多くの「違う入力なのに同じ出力」が生じる。

これがメタメリズムの数学的な出発点である。

## 3　離散化するとメタメリズムは行列で書ける

波長を

$$
\lambda_1,\lambda_2,\dots,\lambda_n
$$

に離散化し、分光反射率をベクトル

$$
\boldsymbol{\rho}=
\begin{bmatrix}
\rho_1\\
\rho_2\\
\vdots\\
\rho_n
\end{bmatrix}
$$

とする。

照明と等色関数をまとめた3×$n$行列を

$$
A_S=
\begin{bmatrix}
kS_1\bar{x}_1\Delta\lambda & \cdots & kS_n\bar{x}_n\Delta\lambda\\
kS_1\bar{y}_1\Delta\lambda & \cdots & kS_n\bar{y}_n\Delta\lambda\\
kS_1\bar{z}_1\Delta\lambda & \cdots & kS_n\bar{z}_n\Delta\lambda
\end{bmatrix}
$$

と置けば、三刺激値は

$$
\mathbf{t}=A_S\boldsymbol{\rho}
$$

ただし

$$
\mathbf{t}=
\begin{bmatrix}
X\\Y\\Z
\end{bmatrix}
$$

と書ける。

ここで2つの試料

$$
\boldsymbol{\rho}_1,\quad \boldsymbol{\rho}_2
$$

が同じXYZを持つ条件は

$$
A_S\boldsymbol{\rho}_1=A_S\boldsymbol{\rho}_2
$$

である。

差を

$$
\Delta\boldsymbol{\rho}
=\boldsymbol{\rho}_1-\boldsymbol{\rho}_2
$$

と置くと

$$
A_S\Delta\boldsymbol{\rho}=\mathbf{0}
$$

となる。

つまり2つのスペクトルの差が、行列 $A_S$ の零空間（null space）に入ればよい。

$$
\boxed{
\Delta\boldsymbol{\rho}\in\ker(A_S)
}
$$

これがメタメリズムを線形代数で表した式である。

## 4　なぜ零空間が大きいのか

$A_S$ は3×$n$行列である。通常、独立な行は最大でも3本なので

$$
\operatorname{rank}(A_S)\le3
$$

である。

rank-nullity theoremから

$$
\dim\ker(A_S)
=n-\operatorname{rank}(A_S)
$$

となる。

例えば$n=31$の波長サンプルなら、rankが3のとき

$$
\dim\ker(A_S)=31-3=28
$$

である。

つまりXYZを変えないスペクトル方向が28次元も存在する。

もちろん実在する反射率には

$$
0\le\rho(\lambda)\le1
$$

という制約があり、どんな零空間ベクトルでもそのまま物理的な試料にできるわけではない。それでも、異なる分光反射率が同じXYZを作れる自由度が非常に大きいことは変わらない。

### 4.1　同じXYZを作るスペクトルは「基本成分＋メタメリックブラック」に分解できる

零空間を使うと、「同じXYZを持つスペクトルが無数にある」という事実を、さらに具体的な形で書ける。

目標三刺激値を $\mathbf{t}$ とし、測色行列 $A_S$ のMoore–Penrose擬似逆行列を $A_S^+$ とする。$\mathbf{t}$ が $A_S$ の値域にあるとき、最小ノルム解の一つは

$$
\boldsymbol{\rho}_f=A_S^+\mathbf{t}
$$

で与えられる。この $\boldsymbol{\rho}_f$ に、零空間の任意のベクトル $\mathbf{n}$ を加えて

$$
\boldsymbol{\rho}=\boldsymbol{\rho}_f+\mathbf{n},
\qquad
\mathbf{n}\in\ker(A_S)
$$

としても、

$$
A_S\boldsymbol{\rho}
=A_SA_S^+\mathbf{t}+A_S\mathbf{n}
=\mathbf{t}
$$

となり、XYZは変わらない。

この「XYZへ寄与しないスペクトル成分」が、古典的な色彩科学でいう metameric black である。任意のベクトル $\mathbf{q}$ から零空間成分を作る射影行列は

$$
P_{\mathrm{null}}=I-A_S^+A_S
$$

なので、

$$
\mathbf{n}=P_{\mathrm{null}}\mathbf{q}
$$

と書ける。したがって、同じ三刺激値を与えるスペクトル全体は

$$
\boxed{
\boldsymbol{\rho}
=A_S^+\mathbf{t}
+(I-A_S^+A_S)\mathbf{q}
}
$$

というアフィン部分空間として表せる。

CohenとKappaufは、色刺激を三刺激値を決める fundamental metamer と、測色値へ寄与しない metameric black に分解する考え方を整理している。ここで重要なのは、metameric black が「黒い光」や「黒い顔料」を意味するわけではないことだ。指定した測色系に対する三刺激値がゼロになるスペクトル方向、という線形代数上の名称である。

ただし、$A_S^+\mathbf{t}$ や任意の零空間成分がそのまま実在する物体の分光反射率になるとは限らない。物体色には

$$
0\le\rho_i\le1
$$

という物理制約があるため、実在可能なメタマーは、このアフィン部分空間と反射率の許容領域 $[0,1]^n$ の交わりとして考える必要がある。

## 5　「同じXYZ」でもスペクトルは同じとは限らない

2つの試料A、Bがあるとする。

試料Aの反射率が滑らかに変化し、試料Bの反射率がいくつかの波長帯で大きく上下していたとしても、積分の結果が

$$
X_A=X_B
$$

$$
Y_A=Y_B
$$

$$
Z_A=Z_B
$$

になれば、指定した標準観察者・照明条件では測色的に一致する。

このとき

$$
\rho_A(\lambda)\ne\rho_B(\lambda)
$$

であるにもかかわらず

$$
\mathbf{t}_A=\mathbf{t}_B
$$

となる。

CIEの定義でいうmetamersはまさにこの関係である。

したがって

$$
\boxed{
\text{同じXYZ}
\not\Rightarrow
\text{同じスペクトル}
}
$$

である。

## 6　照明を変えると、なぜ色差が現れるのか

基準照明 $S_0(\lambda)$ では2試料が条件等色していたとする。

$$
A_{S_0}\Delta\boldsymbol{\rho}=\mathbf{0}
$$

ところが照明を $S_1(\lambda)$ に変えると、測色行列そのものが

$$
A_{S_0}\rightarrow A_{S_1}
$$

と変化する。

すると一般には

$$
A_{S_1}\Delta\boldsymbol{\rho}\ne\mathbf{0}
$$

となる。

つまり

$$
\Delta X\ne0,\qquad
\Delta Y\ne0,\qquad
\Delta Z\ne0
$$

が発生し、2試料の色差が表面化する。

これが照明メタメリズム（illuminant metamerism）の基本原理である。

重要なのは、「照明が変わったから両方の色が同じ方向に変化する」とは限らないことである。2試料はそもそも異なる反射率スペクトルを持つため、新しい照明の波長成分を異なる比率で反射する。

## 7　D65とLEDで一致が崩れることがある理由

CIE標準イルミナントD65は、約6500 Kの相関色温度をもつ代表的な昼光の相対分光分布として定義されている。

一方、白色LEDは同じような白色点を持っていても、分光分布がD65と同一とは限らない。例えば青色LED＋蛍光体型白色LEDでは、青の比較的狭いピークと、蛍光体による広い長波長側発光が組み合わされる。

したがって2光源の色度が近くても

$$
S_{\mathrm{D65}}(\lambda)
\ne
S_{\mathrm{LED}}(\lambda)
$$

であり得る。

メタマー対に対しては、このスペクトル差が

$$
A_{\mathrm{D65}}\Delta\boldsymbol{\rho}=0
$$

だった関係を

$$
A_{\mathrm{LED}}\Delta\boldsymbol{\rho}\ne0
$$

へ変える可能性がある。

そのため「光源の白色点が近い」だけでは、すべての物体色が同じに見える保証にはならない。

### 7.1　照明変化を「測色演算子の摂動」として定量化する

照明が少し変わったとき、メタマー対の一致がどの程度崩れるかは、線形代数では演算子の摂動として書ける。

基準条件の測色行列を $A_0$、試験条件を

$$
A_1=A_0+\Delta A
$$

とする。基準条件で2試料が完全に条件等色しているなら

$$
A_0\Delta\boldsymbol{\rho}=\mathbf 0
$$

である。試験条件で生じる三刺激値差は

$$
\Delta\mathbf t_1
=A_1\Delta\boldsymbol{\rho}
=(A_0+\Delta A)\Delta\boldsymbol{\rho}
=\Delta A\,\Delta\boldsymbol{\rho}
$$

となる。

この式は、照明変更後の不一致が「照明の変化」だけでも「試料の分光差」だけでも決まらず、その両者の作用で決まることを示している。2ノルムを使えば

$$
\lVert\Delta\mathbf t_1\rVert_2
\le
\lVert\Delta A\rVert_2
\lVert\Delta\boldsymbol{\rho}\rVert_2
$$

なので、基準条件では見えなかった大きな分光差ほど、測色演算子が変わったときに大きな不一致を生む余地がある。ただし、同じ大きさの分光差でも方向によって影響は異なる。

その方向依存性は特異値分解で調べられる。基準条件の零空間への直交射影を

$$
P_0=I-A_0^+A_0
$$

とすると、基準条件でXYZを変えない任意のスペクトル差は

$$
\mathbf n=P_0\mathbf q
$$

と書ける。試験条件での不一致は

$$
\Delta\mathbf t_1
=A_1P_0\mathbf q
$$

であり、しかも $A_0P_0=0$ だから

$$
A_1P_0=\Delta A\,P_0
$$

である。

ここで

$$
A_1P_0=U\Sigma V^{\mathsf T}
$$

と特異値分解すると、最大特異値 $\sigma_{\max}$ は、基準条件で完全に隠れていた単位ノルムのスペクトル差のうち、試験条件で最も大きなXYZ不一致を作る方向の増幅率を与える。

$$
\max_{\mathbf n\in\ker A_0,\ \lVert\mathbf n\rVert_2=1}
\lVert A_1\mathbf n\rVert_2
=
\sigma_{\max}(A_1P_0)
$$

逆に小さい特異値に対応する方向は、その特定の照明変更に対して比較的頑健なメタメリックブラックである。

ただし特異値の絶対値は、波長刻み $\Delta\lambda$、XYZの規格化、スペクトルベクトルの尺度に依存する。したがって普遍的な「メタメリズム指数」そのものではなく、指定した離散化・測色条件のもとで、どのスペクトル差が条件変更に敏感かを分析する道具として解釈する。

## 8　メタメリズム指数は何を数値化しているのか

CIEでは、基準条件でメタマーとなる色対について、照明または観察者を変更したときに生じる色の不一致を色差として評価する考え方がある。

概念的には、基準条件で

$$
\Delta E_{\mathrm{ref}}\approx0
$$

だった2試料に対して、試験条件で

$$
\Delta E_{\mathrm{test}}>0
$$

になったとき、その不一致の大きさを評価する。

CIE International Lighting Vocabularyはmetamerism indexを、基準照明または基準観察者を別の照明・観察者へ置き換えたことで生じる色の不一致を、CIE色差式で計算した量として定義している。

どの色差式を使ったかは明示する必要がある。

例えばCIELAB上の単純な1976色差なら

$$
\Delta E^*_{ab}
=
\sqrt{(\Delta L^*)^2+(\Delta a^*)^2+(\Delta b^*)^2}
$$

で表せる。

実務ではより知覚均等性を改善したCIEDE2000などが用いられる場合もあるが、メタメリズム指数は「どの条件変更で、どの色差式を用いたか」まで含めて解釈する必要がある。

## 9　観察者が変わっても条件等色は崩れる

ここまで照明だけを変えたが、観察者側も同じ問題を持つ。

標準観察者1の等色関数を使う行列を

$$
A_{O_1}
$$

とし、標準観察者2または実際の別の観察者に対応する感度で

$$
A_{O_2}
$$

とする。

基準観察者では

$$
A_{O_1}\Delta\boldsymbol{\rho}=0
$$

でも、観察者が変われば

$$
A_{O_2}\Delta\boldsymbol{\rho}\ne0
$$

となり得る。

これが観察者メタメリズム（observer metamerism）である。

CIE 080:1989は、基準観察者に対して条件等色する試料対が、別の正常色覚観察者ではどの程度不一致になるかを評価する方法を扱っている。

人の錐体分光感度は完全に同一ではないため、標準観察者で一致するからといって、すべての人が完全に同じ色として判断するとは限らない。

## 10　2°標準観察者と10°標準観察者はなぜ分かれているのか

ISO/CIE 11664-1:2019では、CIE 1931標準観察者とCIE 1964標準観察者の2組の等色関数が規定されている。

CIE 1931 2°標準観察者は、およそ1°〜4°の視野に対応する測色に用いられる。一方、CIE 1964 10°標準観察者は、より大きな視野での色合わせ特性を表す。

したがって同じ分光刺激でも

$$
(X,Y,Z)_{2^\circ}
$$

と

$$
(X_{10},Y_{10},Z_{10})_{10^\circ}
$$

は必ずしも同じ対応関係を作らない。

「観察条件を指定して測色する」というのは単なる形式ではなく、条件等色の成立そのものが観察者モデルに依存するからである。

## 11　分光測色をすると、メタマーを見抜ける

XYZ測色だけでは

$$
\mathbf{t}_A=\mathbf{t}_B
$$

しか分からない。

一方、分光測色計で

$$
\rho_A(\lambda),\qquad\rho_B(\lambda)
$$

を記録すれば、両者のスペクトルが違うことを直接確認できる。

スペクトル差を

$$
\Delta\rho(\lambda)
=
\rho_A(\lambda)-\rho_B(\lambda)
$$

とすれば、基準照明下でXYZ差がほぼ0でも、$\Delta\rho(\lambda)$ が大きければ、照明変更によって条件等色が崩れる可能性を持つ。

したがって分光測色の価値は、単にXYZを高精度に計算することだけではない。

$$
\boxed{
\text{スペクトルを保存する}
\Rightarrow
\text{別の照明・観察者条件を後から計算できる}
}
$$

という点にある。

## 12　色合わせで「色差0」だけを追うと危険な理由

製品Aの色と製品Bの色を合わせるとき、基準照明下の

$$
\Delta E\approx0
$$

だけを最適化したとする。

これは3次元の測色空間では非常に良い一致である。しかしスペクトル空間では、まだ

$$
\Delta\boldsymbol{\rho}
$$

が大きいかもしれない。

つまり最適化問題としては

$$
\min \Delta E
$$

だけでは不十分な場合がある。

照明変化への頑健性まで求めるなら、例えば複数照明 $S_1,S_2,\dots,S_m$ に対して

$$
\min
\sum_{j=1}^{m}
w_j\Delta E_j^2
$$

のように複数条件を同時に評価する考え方が必要になる。

さらに分光差自体へ重みを置くなら

$$
\min
\left[
\sum_j w_j\Delta E_j^2
+
\lambda\lVert\boldsymbol{\rho}_1-\boldsymbol{\rho}_2\rVert^2
\right]
$$

のような正則化付き最適化として捉えることもできる。

実務上の色合わせが「ひとつの照明下で同じに見せれば終わり」ではない理由を、数理的に表した形である。

## 13　昼光シミュレータの品質評価にもメタマー対が使われる

ISO/CIE 23603:2024は、色の目視評価や測定に使う昼光シミュレータの分光品質を評価する規格である。

ここではCIE昼光イルミナントのもとで条件等色する仮想試料対を用い、試験する昼光シミュレータへ照明を置き換えたときに生じる色の不一致を評価する。

これは重要な考え方である。

白色点だけを測れば、光源そのものが「同じ白に見えるか」は評価できる。しかし、その光源の下で多様な物体色が基準昼光と同じ関係を保つかどうかは、白色点だけでは決まらない。

そこで

$$
\text{基準光源では一致するメタマー対}
$$

をあえて使い、試験光源のスペクトル差を敏感に検出する。

メタメリズムは「困った現象」であると同時に、照明の分光品質を調べる測定原理にもなる。

## 14　カメラと人間の色が一致しない問題にも似た構造がある

カメラのRGBセンサは、人間のCIE等色関数と同じ分光感度を持つわけではない。

カメラ応答を

$$
\mathbf{c}
=
A_{\mathrm{camera}}\boldsymbol{\phi}
$$

人間のXYZを

$$
\mathbf{t}
=
A_{\mathrm{human}}\boldsymbol{\phi}
$$

とすると、一般には

$$
A_{\mathrm{camera}}
\ne
A_{\mathrm{human}}
$$

である。

そのため2つのスペクトルが人間には同じ色に見えても、カメラRGBでは異なる値になったり、その逆が起こったりする。

これは厳密にはCIEの「観察者メタメリズム」と同一概念として扱うべきではないが、異なる3チャネル分光感度へ高次元スペクトルを射影するという数学構造は共通している。

カラーマネジメントで機器特性を測定・補正する必要がある理由の一部も、ここにある。

## 15　条件等色と色恒常性は別の現象である

混同しやすい概念として色恒常性がある。

メタメリズムは

$$
\text{異なるスペクトル}
\rightarrow
\text{同じ測色値になることがある}
$$

という関係である。

一方、色恒常性は

$$
\text{照明スペクトルが変わる}
\rightarrow
\text{網膜入力が変わっても物体色が比較的安定して知覚される}
$$

という視覚系の働きである。

前者は測色空間への多対一写像の問題、後者は視覚系による照明推定・順応・文脈処理の問題である。

実際の観察では両者が同時に関与するが、原理は分けて理解する必要がある。

## 16　色彩検定の知識とどうつながるのか

色彩検定協会は1級の学習領域として「測色」を明示している。メタメリズムは、測色で扱う次の概念をまとめて理解する題材になる。

- 分光分布
- 物体の分光反射率
- 標準イルミナント
- 標準観察者
- XYZ三刺激値
- CIELABと色差
- 分光測色
- 照明条件による色の見えの変化

特に重要なのは、XYZを「色そのものを完全に保存したデータ」と考えないことである。

XYZは、指定された測色条件で色刺激を3つの数へ要約した値である。

$$
\boxed{
\text{スペクトルは高次元}
\quad\rightarrow\quad
XYZは3次元
}
$$

したがって測色値が一致しても、スペクトル一致までは保証しない。

この一点を理解すると、分光測色、標準光源、標準観察者、色差、カラーマネジメントが別々の暗記事項ではなく、同じ測色系の中でつながって見える。

## 17　まとめ

メタメリズムは「たまたま色が変に見える現象」ではない。

本質は、高次元のスペクトルを3次元の三刺激値へ写像することで情報が失われることにある。

2試料の分光反射率差を $\Delta\boldsymbol{\rho}$ とすると、ある照明・観察者条件で

$$
A\Delta\boldsymbol{\rho}=0
$$

なら、その条件では同じXYZを持つ。

しかし照明や観察者が変わって写像行列が $A'$ になると

$$
A'\Delta\boldsymbol{\rho}\ne0
$$

となり、色差が現れることがある。

したがって実務上の色合わせでは

$$
\text{三刺激値の一致}
\neq
\text{分光反射率の一致}
$$

を常に意識する必要がある。

メタメリズムは、XYZ表色系の限界というより、三刺激値測色が何を保存し、何を捨てているかを最も明確に示す現象である。

---

## 参考資料

- 公益社団法人 色彩検定協会「色彩検定とは・各級の目安」 https://www.aft.or.jp/pages/feature/level
- CIE, *Colorimetry, 4th Edition*, CIE 015:2018, DOI: 10.25039/TR.015.2018. https://www.cie.co.at/publications/colorimetry-4th-edition
- CIE, *CIE 1931 colour-matching functions, 2 degree observer*, DOI: 10.25039/CIE.DS.xvudnb9b. https://cie.co.at/datatable/cie-1931-colour-matching-functions-2-degree-observer
- ISO/CIE 11664-1:2019(E), *Colorimetry — Part 1: CIE standard colorimetric observers*. https://www.cie.co.at/publications/colorimetry-part-1-cie-standard-colorimetric-observers-0
- CIE S 017:2020 e-ILV, “metameric colour stimuli”. https://cie.co.at/eilvterm/17-23-008
- CIE S 017:2020 e-ILV, “metamerism index”. https://cie.co.at/eilvterm/17-23-007
- CIE 080:1989, *Special metamerism index: Change in observer*. https://www.cie.co.at/publications/special-metamerism-index-change-observer
- ISO/CIE 23603:2024, *Standard method of assessing the spectral quality of daylight simulators for visual appraisal and measurement of colour*. https://www.cie.co.at/publications/standard-method-assessing-spectral-quality-daylight-simulators-visual-appraisal-and-1
- CIE, *CIE standard illuminant D65* data set, DOI: 10.25039/CIE.DS.hjfjmt59. https://www.cie.co.at/datatable/cie-standard-illuminant-d65
- J. B. Cohen and W. E. Kappauf, “Metameric Color Stimuli, Fundamental Metamers, and Wyszecki's Metameric Blacks,” *The American Journal of Psychology*, 95(4), 537–564 (1982). DOI: 10.2307/1422186.
- G. H. Golub and C. F. Van Loan, *Matrix Computations*, 4th ed., Johns Hopkins University Press, 2013.