# 標準イルミナントは何を標準化しているのか――A・D65・D50を測色の演算子として理解する

色彩検定1級では、測色の前提として標準イルミナント、標準光源・常用光源、XYZ表色系、物理測色を扱う。色彩検定協会の公式テキスト1級編の訂正表でも、p.39〜40で標準イルミナントA・D65と光源の区別、p.67で測色時の標準光源A・常用光源D65・D50が明記されている。

ここで重要なのは、標準イルミナントが「特定のランプ」ではないことである。標準イルミナントは、測色計算で使う基準の相対分光分布

$$
S(\lambda)
$$

である。

同じ物体でも $S(\lambda)$ を変えるとXYZ値は変わる。つまり標準イルミナントは単なる照明の名前ではなく、分光反射率を三刺激値へ変換する演算そのものの一部である。

本記事では、標準イルミナントA・D65・D50を、黒体放射、昼光モデル、XYZ積分、白色点、線形代数、メタメリズムまでつないで理解する。

## 1　「光源」と「イルミナント」は同じではない

まず用語を分ける。

- 光源：実際に光を放射するランプ、LED、太陽などの物理的な装置・物体
- イルミナント：測色計算のために定義された分光分布

イルミナントは数学的な基準なので、必ずしもその分光分布を完全に再現する物理光源が存在する必要はない。

CIEは現在、測色用の標準イルミナントとしてA、D65、D50を規定している。Aは白熱電球に近いPlanck放射、D65は平均的な昼光、D50は約5000 Kの昼光を表す。

一方、色彩検定公式テキストの訂正表では、実際の観察に使う人工光源について「標準光源」と「常用光源」を区別している。特にD65については、標準イルミナントD65に対応する標準光源はなく、実用上はD65に近似する常用光源を用いるとされる。

したがって

$$
\text{標準イルミナントD65}\neq\text{特定のD65ランプ}
$$

である。

## 2　物体色は「照明×反射率」で決まる

不透明物体の分光反射率を

$$
R(\lambda)
$$

照明の相対分光分布を

$$
S(\lambda)
$$

とすると、眼へ向かう反射光の分光分布は、単純化すれば

$$
P(\lambda)=S(\lambda)R(\lambda)
$$

で表せる。

物体固有の性質は主に $R(\lambda)$ だが、実際に眼へ入る光は $S(\lambda)$ との積である。そのため同じ塗料でも、昼光と白熱電球では異なる色に見えうる。

この関係をXYZへ変換すると

$$
X=k\int S(\lambda)R(\lambda)\bar{x}(\lambda)\,d\lambda
$$

$$
Y=k\int S(\lambda)R(\lambda)\bar{y}(\lambda)\,d\lambda
$$

$$
Z=k\int S(\lambda)R(\lambda)\bar{z}(\lambda)\,d\lambda
$$

となる。

ここで $\bar{x},\bar{y},\bar{z}$ はCIE標準測色観察者の等色関数である。完全拡散反射面を $Y=100$ とする相対測色では

$$
k=\frac{100}{\int S(\lambda)\bar{y}(\lambda)\,d\lambda}
$$

と正規化する。

この式を見ると、XYZは物体の反射率だけでは決まらず、イルミナント $S(\lambda)$ が計算式の内部に直接入っていることが分かる。

## 3　標準イルミナントは「測色変換の重み」を決める

波長を離散化し、分光反射率をベクトル

$$
\mathbf r=(R_1,R_2,\ldots,R_n)^T
$$

イルミナントを

$$
\mathbf s=(S_1,S_2,\ldots,S_n)^T
$$

とする。

XYZへの変換は概略

$$
\begin{pmatrix}
X\\Y\\Z
\end{pmatrix}
=
\mathbf C\,\mathrm{diag}(\mathbf s)\,\mathbf r
$$

と書ける。

$\mathbf C$ は等色関数を並べた $3\times n$ 行列、$\mathrm{diag}(\mathbf s)$ はイルミナントの分光値を対角成分に持つ行列である。

つまりイルミナントを変えるとは、単に画面上の白色点を変えるだけではない。

$$
\mathbf T_S=\mathbf C\,\mathrm{diag}(\mathbf s)
$$

という「スペクトルからXYZへ写す線形作用素」そのものを変えることになる。

これが測色で照明条件を固定しなければならない数学的理由である。

### 発展：イルミナントの分光誤差はXYZへどう伝播するか

実際の測色用光源は、理想的な標準イルミナントの分光分布を完全には再現しない。そこで、イルミナントのわずかな分光誤差がXYZへどのように伝わるかを微分で調べる。

離散化した等色関数と波長刻みを $\mathbf C$ に含め、$\mathbf C$ の第2行を $\mathbf c_y^T$ とする。完全拡散反射面の $Y$ を100へ正規化した物体色XYZは

$$
\mathbf t(\mathbf s,\mathbf r)
=
100\,
\frac{\mathbf C\,\mathrm{diag}(\mathbf r)\mathbf s}
{\mathbf c_y^T\mathbf s}
$$

と書ける。

分子を

$$
\mathbf u=\mathbf C\,\mathrm{diag}(\mathbf r)\mathbf s
$$

分母を

$$
d=\mathbf c_y^T\mathbf s
$$

とおく。イルミナントに微小な変化 $\delta\mathbf s$ が生じたとき、商の微分から

$$
\delta\mathbf t
\approx
J_s\,\delta\mathbf s
$$

となり、ヤコビ行列は

$$
\boxed{
J_s
=
\frac{100}{d}
\left[
\mathbf C\,\mathrm{diag}(\mathbf r)
-
\frac{\mathbf u}{d}\mathbf c_y^T
\right]
}
$$

である。

この式には二つの効果が同時に入っている。第1項は各波長の照明変化が試料反射率と等色関数を通じてXYZへ入る効果、第2項は基準白の $Y=100$ 正規化そのものがイルミナント変化で動く効果である。

もしイルミナントの分光値に共分散行列

$$
\Sigma_s
$$

で表される不確かさがあるなら、一次近似ではGUMの不確かさ伝播と同じ形で

$$
\boxed{
\Sigma_{XYZ}
\approx
J_s\Sigma_sJ_s^{\mathsf T}
}
$$

と評価できる。

ここから重要な結論が出る。同じ分光誤差 $\delta\mathbf s$ でも、$J_s$ には試料の $\mathbf r$ が含まれるため、XYZの誤差は試料ごとに異なる。したがって「光源の白色点が標準イルミナントとほぼ一致した」だけでは、あらゆる色票が標準条件と同じXYZになるとは保証できない。

特に白色試料ではほぼ相殺されるような分光差でも、特定波長だけを強く反射する有彩色試料では差が増幅されうる。実用の昼光シミュレータの品質評価で、単なる白色点一致ではなく分光的な一致やメタメリズムを評価する必要があるのはこのためである。

### 発展：相対測色ではイルミナントの絶対強度は消える

標準イルミナントが「相対」分光分布でよい理由は、正規化式から直接示せる。イルミナント全体を正の定数 $\alpha$ 倍して

$$
\mathbf s'=\alpha\mathbf s
$$

とする。このとき

$$
\mathbf t(\mathbf s',\mathbf r)
=
100\,
\frac{\mathbf C\,\mathrm{diag}(\mathbf r)(\alpha\mathbf s)}
{\mathbf c_y^T(\alpha\mathbf s)}
$$

であり、分子と分母の $\alpha$ は相殺される。

$$
\boxed{
\mathbf t(\alpha\mathbf s,\mathbf r)
=
\mathbf t(\mathbf s,\mathbf r)
}
$$

つまり、完全拡散反射面を $Y=100$ にそろえる相対測色では、イルミナントの総量を2倍、10倍にしても相対XYZは変わらない。効くのは各波長の比率、すなわちスペクトルの「形」である。

線形代数的には、$\mathbf s$ と $\alpha\mathbf s$ はスペクトル空間内で同じ半直線上にあり、相対測色はそのスカラー倍を同一視している。したがって標準イルミナントの表が特定波長を100として規格化されていても、その100という絶対値自体に物理的な照度の意味はない。

ただし、放射輝度・輝度・照度などの絶対量を測る場合はこの相殺は使えない。相対物体色の測色と、光源の絶対的な明るさの測定は別問題である。

## 4　標準イルミナントAはPlanck放射を基準にする

標準イルミナントAは、典型的なタングステン電球に近い光を表すための基準である。現在のISO/CIE 11664-2では、約2855.5 KのPlanck放射を基礎として定義されている。

黒体の分光放射輝度はPlanckの法則

$$
B_\lambda(T)=
\frac{2hc^2}{\lambda^5}
\frac{1}{\exp\left(\frac{hc}{\lambda k_B T}\right)-1}
$$

で与えられる。

標準イルミナントAの相対分光分布は、この形を基礎に560 nmで100となるよう正規化したものと考えればよい。

$$
S_A(\lambda)
=
100\,
\frac{B_\lambda(T_A)}{B_{560\,\mathrm{nm}}(T_A)}
$$

ここで

$$
T_A\approx2855.5\ \mathrm{K}
$$

である。

低温の黒体では長波長側の放射が相対的に大きいため、AはD65より赤〜黄側の成分が強い。

したがって青色反射率の高い試料と赤色反射率の高い試料を比べると、D65とAではXYZの相対関係が変わりうる。

## 5　D65は「6500 Kの黒体」ではない

D65は平均的な昼光を表す標準イルミナントであり、相関色温度は約6500 Kである。

しかし

$$
S_{D65}(\lambda)\neq B_\lambda(6500\ \mathrm{K})
$$

である。

昼光には太陽の直接光だけでなく、大気によるRayleigh散乱、エアロゾル散乱、オゾン吸収などが関与する。そのため昼光の分光形状は単純な黒体放射とは一致しない。

「色温度が約6500 K」というのは、色度がPlanck軌跡の約6500 K付近に対応するという意味であって、スペクトルが6500 K黒体と同一という意味ではない。

これは測色で非常に重要である。二つの光がほぼ同じ白に見えても、分光分布が異なれば物体色のXYZは異なることがある。

## 6　昼光D系列は3つの基底スペクトルで表せる

CIEのD系列昼光は、観測された昼光スペクトルを少数の基底成分で表すモデルである。

相対分光分布は

$$
S_D(\lambda)
=
S_0(\lambda)
+M_1S_1(\lambda)
+M_2S_2(\lambda)
$$

と書ける。

$S_0$ は平均的な昼光成分、$S_1,S_2$ は昼光スペクトルの主要な変動を表す基底関数である。色度 $(x_D,y_D)$ が決まれば

$$
M=0.0241+0.2562x_D-0.7341y_D
$$

$$
M_1=
\frac{-1.3515-1.7703x_D+5.9114y_D}{M}
$$

$$
M_2=
\frac{0.0300-31.4424x_D+30.0717y_D}{M}
$$

として昼光スペクトルを再構成できる。

昼光軌跡の色度は近似的に

$$
y_D=-3x_D^2+2.87x_D-0.275
$$

で表される。

この構造は、自然昼光のスペクトル変動が完全に無秩序ではなく、低次元の主要成分でかなり表現できることを意味する。線形代数的には、多数の波長成分を持つ昼光スペクトルが、主として3本の基底ベクトルの張る部分空間上に近似されている。

D65やD50は、このD系列の中から実用上重要な昼光条件を標準化したものである。

## 7　D50とD65は何が違うのか

D65は約6500 Kの平均的な昼光、D50は約5000 Kの昼光を表す。

D50はD65より長波長側の比率が相対的に大きく、見かけとしてはより暖色寄りの白になる。

ただし「暖色」「寒色」という言葉だけでは測色条件として不十分である。必要なのは波長ごとの重み

$$
S_{D50}(\lambda),\qquad S_{D65}(\lambda)
$$

である。

同じ試料 $R(\lambda)$ でも

$$
\mathbf T_{D50}\mathbf r
\neq
\mathbf T_{D65}\mathbf r
$$

となるのが普通である。

印刷・グラフィックアーツではD50が重要であり、ディスプレイ系ではD65が基準白として広く使われる。またICCカラーマネジメントのPCSではD50基準が使われるため、D65系RGBからPCSへ移すときには色順応変換が関係する。

## 8　白色点はイルミナントから計算される

完全拡散反射面

$$
R(\lambda)=1
$$

を考える。

このときXYZは基準白の三刺激値

$$
(X_n,Y_n,Z_n)
$$

になる。

$$
X_n=k\int S(\lambda)\bar{x}(\lambda)\,d\lambda
$$

$$
Y_n=k\int S(\lambda)\bar{y}(\lambda)\,d\lambda=100
$$

$$
Z_n=k\int S(\lambda)\bar{z}(\lambda)\,d\lambda
$$

である。

したがって「白色点」は単なるRGB設定値ではなく、

$$
\text{イルミナントのSPD}
+\text{標準観察者}
$$

から計算される測色量である。

CIELABではこの基準白を使って

$$
\frac{X}{X_n},\qquad
\frac{Y}{Y_n},\qquad
\frac{Z}{Z_n}
$$

を作る。よって同じXYZ値でも、基準白が違えばL*a*b*値は変わる。

## 9　メタメリズムはイルミナントを変えると崩れる

二つの分光反射率を

$$
\mathbf r_1,\qquad\mathbf r_2
$$

とする。

あるイルミナント $S_1$ の下で

$$
\mathbf T_{S_1}(\mathbf r_1-\mathbf r_2)=\mathbf 0
$$

なら、二つは同じXYZとなり、条件等色する。

しかしイルミナントを $S_2$ に変えたとき

$$
\mathbf T_{S_2}(\mathbf r_1-\mathbf r_2)\neq\mathbf 0
$$

なら、等色は崩れる。

これが照明メタメリズムである。

ここで重要なのは、メタメリズムが「人間の眼が3種類の錐体しか持たない」ことだけではなく、測色写像

$$
\mathbf T_S
$$

の零空間がイルミナントによって変わる現象だと理解できることである。

標準イルミナントを固定するのは、どの零空間を基準に色を比較するかを固定することでもある。

## 10　同じ色温度なら同じ測色結果になる、は誤り

二つの白色光源が同じ相関色温度を持っていても、分光分布が同じとは限らない。

たとえば蛍光体LEDと昼光は、どちらも約6500 Kに調整できる。しかしLEDには青色励起ピークと蛍光体の広帯域発光があり、自然昼光とはスペクトル形状が違う。

色度が近いということは

$$
(x_1,y_1)\approx(x_2,y_2)
$$

を意味するだけであり、

$$
S_1(\lambda)\approx S_2(\lambda)
$$

を保証しない。

したがって白い紙だけを見れば似た照明でも、色票や布を置くと色差が現れることがある。

色温度は「白色光の色度を1次元的に要約した量」、イルミナントは「波長ごとの完全な重み関数」と区別すると理解しやすい。

## 11　蛍光試料では単純な $S(\lambda)R(\lambda)$ では足りない

蛍光増白剤を含む紙や蛍光顔料では、短波長光を吸収して、別の長波長で再放射する。

通常の反射だけなら

$$
P_{\mathrm{out}}(\lambda)=S(\lambda)R(\lambda)
$$

でよいが、蛍光がある場合は概念的に

$$
P_{\mathrm{out}}(\lambda)
=
S(\lambda)R(\lambda)
+
\int K(\lambda,\lambda')S(\lambda')\,d\lambda'
$$

と書ける。

$K(\lambda,\lambda')$ は、励起波長 $\lambda'$ の光が放射波長 $\lambda$ へ変換される効率を表す。

この場合、測定装置内の実際の照明スペクトル、特に紫外域の量が結果へ強く影響する。標準イルミナントを計算で指定するだけでなく、物理測定時の照明条件も揃える必要がある理由である。

## 12　測色条件は「イルミナント」だけではない

再現可能な測色には、少なくとも次の条件を指定する必要がある。

1. イルミナント：A、D65、D50など
2. 標準測色観察者：CIE 1931 2°またはCIE 1964 10°など
3. 測定幾何：45/0、0/45、d/8など
4. 鏡面反射成分：SCIまたはSCE
5. 波長範囲・測定間隔・分光帯域幅

同じ試料でも、これらのどれかが変われば測色値は変わりうる。

特に

$$
\text{試料}+\text{イルミナント}+\text{観察者}+\text{幾何条件}
$$

まで含めて、初めて測色値の意味が定まると考えるべきである。

## 13　色彩検定で押さえるべき点

試験対策としては、まず次を区別できればよい。

- 標準イルミナントは測色計算に用いる基準の分光分布である。
- Aは白熱電球に近い約2856 KのPlanck放射を表す。
- D65は約6500 Kの平均的な昼光を表すが、6500 K黒体そのものではない。
- D50は約5000 Kの昼光を表し、印刷・カラーマネジメントで重要である。
- イルミナントと実際の光源は同一概念ではない。
- 物体色のXYZは $S(\lambda)R(\lambda)$ を等色関数で積分して求める。
- イルミナントを変えると白色点だけでなく、物体色のXYZやメタメリズムの条件も変わる。
- 相対測色ではイルミナント全体の倍率は正規化で消え、相対分光分布の形が測色結果を決める。

大学レベルでは、さらに標準イルミナントを

$$
\mathbf T_S=\mathbf C\,\mathrm{diag}(\mathbf s)
$$

という線形作用素の一部として理解すると、XYZ、標準観察者、分光測色、メタメリズム、CIELAB、カラーマネジメントが一つの体系につながる。

## 参考資料

- 色彩検定協会「色彩検定 公式テキスト 1級編（初版1刷）訂正表」2025年12月19日現在。https://www.aft.or.jp/images/text_of-1st-grade_teisei-f01.pdf
- 色彩検定協会「色彩検定とは」1級：色彩学に測色・世界の色彩調和論等を含む。https://www.aft.or.jp/pages/feature/level
- CIE, *Colorimetry, 4th Edition*, CIE 015:2018. https://cie.co.at/publications/colorimetry-4th-edition
- ISO/CIE 11664-2:2022, *Colorimetry — Part 2: CIE Standard Illuminants*. https://www.cie.co.at/publications/colorimetry-part-2-cie-standard-illuminants-0
- ISO/CIE 11664-3:2019, *Colorimetry — Part 3: CIE tristimulus values*. https://www.cie.co.at/publications/colorimetry-part-3-cie-tristimulus-values-2
- ISO/CIE 23603:2024, *Standard method of assessing the spectral quality of daylight simulators for visual appraisal and measurement of colour*. https://cie.co.at/publications/standard-method-assessing-spectral-quality-daylight-simulators-visual-appraisal-and-1
- CIE, “CIE standard illuminant D65” dataset, DOI: 10.25039/CIE.DS.hjfjmt59. https://www.cie.co.at/datatable/cie-standard-illuminant-d65
- CIE, “CIE standard illuminant A - 1 nm” dataset, DOI: 10.25039/CIE.DS.8jsxjrsn. https://cie.co.at/datatable/cie-standard-illuminant-1-nm
- JCGM 100:2008, *Evaluation of measurement data — Guide to the expression of uncertainty in measurement*. https://www.bipm.org/en/doi/10.59161/jcgm100-2008e
- D. B. Judd, D. L. MacAdam, G. Wyszecki et al., “Spectral Distribution of Typical Daylight as a Function of Correlated Color Temperature,” *Journal of the Optical Society of America*, 54, 1031–1040 (1964).
- G. Wyszecki and W. S. Stiles, *Color Science: Concepts and Methods, Quantitative Data and Formulae*, 2nd ed., Wiley, 1982.