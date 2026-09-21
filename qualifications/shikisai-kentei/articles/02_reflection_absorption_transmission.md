# 物体の色はどう決まるのか――反射・吸収・透過を物理で考える

色彩検定3級では光の基礎知識を学び、2級では光の性質を色の見えや照明へ応用する。本稿では、その入口となる「反射・吸収・透過」を、電磁気学・光学・測色学の式までつないで考える。

物体に波長 $\lambda$ の光が入射したとき、入射エネルギーは主に反射・透過・吸収へ分配される。分光反射率を $R(\lambda)$、分光透過率を $T(\lambda)$、分光吸収率を $A(\lambda)$ とすると、受動的な物体で、蛍光・燐光などによる波長変換を無視できる場合、

$$
R(\lambda)+T(\lambda)+A(\lambda)=1
$$

が成り立つ。

重要なのは、$R,T,A$ が一つの定数ではなく波長の関数だという点である。物体色は「光を何%反射するか」だけではなく、「どの波長をどれだけ反射・吸収・透過するか」で決まる。

## 1　反射は「光が壁で跳ね返る」現象ではない

透明なガラスでも表面で光の一部が反射する。原因は、光が屈折率の異なる媒質の境界へ到達すると、Maxwell方程式から要求される電場・磁場の境界条件を、入射波だけでは満たせないためである。境界条件を満たすために反射波と透過波が生じる。

垂直入射、非磁性・非吸収媒質を考え、屈折率を $n_1,n_2$ とする。電場振幅に対するFresnel係数は

$$
r=\frac{n_1-n_2}{n_1+n_2},\qquad
t=\frac{2n_1}{n_1+n_2}
$$

である。

ここで $r,t$ は「電場振幅」の比であり、エネルギー比そのものではない。反射率は

$$
R=|r|^2
$$

だが、透過率は媒質中のエネルギー流の違いを考慮して

$$
T=\frac{n_2}{n_1}|t|^2
$$

となる。吸収がなければ

$$
R+T=1
$$

である。

より一般には、光エネルギーの流れを表すPoyntingベクトル

$$
\mathbf S=\mathbf E\times\mathbf H
$$

の界面法線方向成分を使い、時間平均を $\langle\cdot\rangle$ とすれば

$$
R=-\frac{\langle\mathbf S_r\rangle\cdot\hat{\mathbf n}}
{\langle\mathbf S_i\rangle\cdot\hat{\mathbf n}},\qquad
T=\frac{\langle\mathbf S_t\rangle\cdot\hat{\mathbf n}}
{\langle\mathbf S_i\rangle\cdot\hat{\mathbf n}}
$$

と定義できる。ここで $i,r,t$ は入射・反射・透過を表す。つまり「反射率」「透過率」は電場振幅ではなく、最終的にはエネルギー流の比である。

空気 $n_1\approx1.00$ からガラス $n_2\approx1.50$ へ垂直入射すると、

$$
R=\left(\frac{1-1.5}{1+1.5}\right)^2\approx0.04
$$

となり、一つの境界面だけで約4%が反射する。一方、透過率は約96%である。

「透明」と「反射しない」は別の性質である。

## 2　なぜ屈折率が変わると反射するのか

平面電磁波では、電場 $E$ と磁場 $H$ の比を波動インピーダンス $Z$ として

$$
Z=\frac{E}{H}=\sqrt{\frac{\mu}{\varepsilon}}
$$

と表せる。非磁性・非吸収媒質では $\mu_r\approx1$ なので、

$$
n\approx\sqrt{\varepsilon_r},\qquad Z\approx\frac{Z_0}{n}
$$

となる。したがって屈折率が変わる境界は、同時に電磁波から見たインピーダンスが変わる境界でもある。

境界面では接線方向の電場・磁場が連続になる必要がある。二つの媒質の波動インピーダンスが異なると、入射波だけをそのまま透過させたのでは両方の境界条件を同時に満たせない。そこで反射波が生じる。

したがって反射は、粒子が機械的に跳ね返る現象というより、異なる媒質を電磁波がつなぐときに生じる「場の整合」の結果である。

斜め入射では反射率は偏光にも依存し、s偏光とp偏光でFresnel係数が異なる。p偏光ではBrewster角で反射が0になる。この偏光依存性は別稿「透明なプラスチックに虹色が出るのはなぜか――偏光・複屈折・位相差」で詳しく扱う。

## 3　吸収は、光エネルギーが物質側へ移る過程である

光子一個のエネルギーは

$$
E=h\nu=\frac{hc}{\lambda}
$$

である。

物質が光を吸収すると、このエネルギーは電子励起、分子振動、格子振動などへ移る。励起状態から非放射緩和が起これば、最終的には熱へ変換される。つまり吸収は「光のエネルギーが消える」ことではなく、電磁場から物質自由度へのエネルギー移動である。

吸収性媒質では屈折率を複素数

$$
\tilde n=n+i\kappa
$$

で表す。時間依存を $e^{-i\omega t}$ とし、真空中の波数を $k_0=2\pi/\lambda_0$ とすると、媒質中の電場は

$$
E(z,t)=E_0e^{i(k_0\tilde n z-\omega t)}
=E_0e^{i(k_0nz-\omega t)}e^{-k_0\kappa z}
$$

となる。

電場振幅は $e^{-k_0\kappa z}$ で減少する。強度は電場振幅の二乗に比例するため、

$$
I(z)=I_0e^{-2k_0\kappa z}
=I_0e^{-\alpha z}
$$

であり、

$$
\alpha=2k_0\kappa=\frac{4\pi\kappa}{\lambda_0}
$$

を得る。

つまり、複素屈折率の虚部 $\kappa$ は「電磁波が物質中でどれだけ速く減衰するか」を表す。

### 3.1　Poyntingの定理で見る「吸収」の正体

電磁場の局所的なエネルギー保存則はPoyntingの定理

$$
\frac{\partial u_{\mathrm{em}}}{\partial t}
+\nabla\cdot\mathbf S
=-\mathbf J\cdot\mathbf E
$$

で表される。$u_{\mathrm{em}}$ は電磁場のエネルギー密度、$\mathbf S$ はPoyntingベクトル、$\mathbf J\cdot\mathbf E$ は電磁場から物質へ単位時間・単位体積あたりに渡される仕事である。

線形で等方的な吸収媒質を、複素比誘電率

$$
\tilde\varepsilon_r=\varepsilon'+i\varepsilon''
$$

で表す。非磁性媒質では

$$
\tilde n^2\approx\tilde\varepsilon_r
$$

なので、

$$
\varepsilon'=n^2-\kappa^2,\qquad
\varepsilon''=2n\kappa
$$

となる。調和電場 $\mathbf E(t)=\mathrm{Re}[\mathbf E_0e^{-i\omega t}]$ に対し、媒質が一周期平均で受け取る電力密度は

$$
\langle p_{\mathrm{abs}}\rangle
=\frac{1}{2}\omega\varepsilon_0\varepsilon''|\mathbf E_0|^2
$$

である。

したがって $\kappa>0$、すなわち $\varepsilon''>0$ ということは、単に「式の中で振幅が減る」という記述ではない。物質の分極が電場に完全には追随せず位相遅れを持つため、一周期ごとに電磁場から物質へ正味のエネルギーが渡ることを意味する。これが巨視的な吸収の物理的因果関係である。

### 3.2　吸収と屈折は独立ではない

物質の応答は因果律を満たすため、誘電率の実部 $\varepsilon'$ と虚部 $\varepsilon''$ は独立に好きな形を取れない。Kramers–Kronig関係の一つは

$$
\varepsilon'(\omega)-1
=\frac{2}{\pi}\,\mathcal P
\int_0^\infty
\frac{\Omega\varepsilon''(\Omega)}{\Omega^2-\omega^2}
\,d\Omega
$$

と書ける。$\mathcal P$ はCauchyの主値である。

つまり、ある周波数帯に強い吸収があると、その周辺では屈折率 $n(\omega)$ の分散も変化する。色材の吸収スペクトルと、ガラスや結晶の屈折率分散が全く別の現象なのではなく、同じ電磁応答の実部と虚部として結び付いている。分散そのものは別稿「なぜプリズムで白い光が虹色に分かれるのか」で詳しく扱う。

## 4　厚さが増えると透過光が減る理由

均一な吸収媒質内部だけを考えれば、厚さ $d$ を通過した光強度は

$$
I(d)=I_0e^{-\alpha d}
$$

となる。吸収係数 $\alpha$ が同じでも、厚さが2倍になれば光が吸収される機会も増える。

実際の板状試料では、内部吸収だけでなく入口と出口のFresnel反射もある。両面の反射率を同じ $R$ とし、多重反射をいったん無視すれば、直接透過する成分は概算で

$$
T_{\mathrm{direct}}\approx(1-R)^2e^{-\alpha d}
$$

となる。

さらに内部で何度も反射してから出てくる光まで足し合わせると、干渉を平均化できる厚い試料では幾何級数から

$$
T_{\mathrm{total}}
=\frac{(1-R)^2e^{-\alpha d}}
{1-R^2e^{-2\alpha d}}
$$

となる。

したがって透過率は「吸収係数だけ」で決まるわけではなく、表面反射、厚さ、多重反射にも依存する。

ここで用語を区別しておく。吸収率（absorptance）$A$ は入射エネルギーのうち吸収された割合であり、

$$
A=1-R-T
$$

である。一方、分光分析で使う吸光度（absorbance）は、ここでは記号 $D$ を用いると

$$
D=-\log_{10}T
$$

で定義される。表面反射を除いた内部透過率 $\tau=e^{-\alpha d}$ を用いるなら

$$
D=-\log_{10}\tau
=\frac{\alpha d}{\ln 10}
$$

となる。吸収率 $A$ と吸光度 $D$ は別の物理量であり、同じ「吸収」という語から混同しないことが重要である。

## 5　波長によって吸収率が違うと色が生まれる

白色光には多数の波長成分が含まれる。可視域のすべてをほぼ同じ割合で反射する物体では、反射光のスペクトル形状は大きく変わらず、主に明るさが変化する。

一方、波長によって $R(\lambda)$ や $A(\lambda)$ が異なれば、眼へ届くスペクトル形状そのものが変わる。

照明の分光分布を $S(\lambda)$、物体の分光反射率を $R(\lambda)$ とすると、不透明な拡散反射物体から出る光の分光分布は概念的に

$$
L(\lambda)\propto S(\lambda)R(\lambda)
$$

と書ける。

たとえば長波長側で $R(\lambda)$ が高く、短波長・中波長側で低い物体には、長波長成分が相対的に多い反射光が生じる。その反射光が視覚系へ入ることで「赤い」と知覚されやすくなる。

ここから、同じ物体でも照明 $S(\lambda)$ が変われば見える色が変わり得ることが分かる。物体色は物体だけの属性ではなく、少なくとも「照明×物体×観察者」の組合せで決まる。

## 6　分光反射率からXYZ値へ

物理量としての $R(\lambda)$ を、そのまま「色」と呼ぶことはできない。人間の標準的な色知覚へ対応づけるには、CIE 1931等色関数 $\bar x(\lambda),\bar y(\lambda),\bar z(\lambda)$ を用いる。

反射物体の三刺激値は、規格化定数を $k$ として

$$
X=k\int S(\lambda)R(\lambda)\bar x(\lambda)\,d\lambda
$$

$$
Y=k\int S(\lambda)R(\lambda)\bar y(\lambda)\,d\lambda
$$

$$
Z=k\int S(\lambda)R(\lambda)\bar z(\lambda)\,d\lambda
$$

で求められる。

この式は、物体の「赤さ」や「青さ」が単一波長だけで決まるのではなく、照明スペクトルと分光反射率の積を、視覚系に対応する重み関数で可視域全体にわたって積分した結果であることを示す。

異なる分光反射率を持つ二つの物体でも、ある照明下で $X,Y,Z$ が一致すれば同じ色に見え得る。これはメタメリズムにつながる。

## 7　白・黒・鏡・透明体は何が違うのか

反射・吸収・透過に加えて、反射光が「どの方向へ出るか」を考えると見え方を整理できる。

### 白い物体

可視域の広い範囲で反射率が高く、微細構造による散乱によって多方向へ光を返す。スペクトル的には比較的平坦で、方向的には拡散性が強い。

### 黒い物体

可視域の広い範囲で吸収率が高く、眼へ戻る光が少ない。

### 鏡

高い反射率に加え、表面が十分滑らかで、入射方向と幾何学的に対応した方向へ光を返す。これが鏡面反射である。

### 透明体

透過率が高い。ただし境界面ではFresnel反射が起こり、内部で波長選択的吸収があれば色付き透明体になる。

したがって白い紙と鏡は、どちらも多くの光を反射し得るが、角度分布が大きく異なる。

## 8　紙・布・塗料では「内部散乱」が支配的になる

紙、布、塗料、肌などでは、光は表面で一度反射して終わるとは限らない。物体内部へ入り、粒子・繊維・気孔などの屈折率不均一によって何度も散乱され、その一部が再び外へ出る。

このとき観測される反射光は、

- 表面でのFresnel反射
- 内部での吸収
- 粒子や構造による散乱
- 内部界面での多重反射

の合成結果である。

透明な染料溶液ならBeer–Lambert型の吸収モデルが有効だが、不透明な顔料層では散乱を無視できない。そのため顔料塗膜では、吸収係数 $K$ と散乱係数 $S$ を扱うKubelka–Munk理論などが使われる。

これは「透明な色材」と「不透明な色材」が同じ式だけでは扱えない理由である。

## 9　金属が強く反射する理由

金属には自由電子が多く、可視光の電場によって電子集団が駆動される。電子の応答は誘電率を大きく変化させ、金属内部では光が強く減衰する。

空気から、複素屈折率

$$
\tilde n=n+i\kappa
$$

を持つ金属へ垂直入射すると、反射率は

$$
R=\left|\frac{1-\tilde n}{1+\tilde n}\right|^2
=\frac{(n-1)^2+\kappa^2}{(n+1)^2+\kappa^2}
$$

となる。

$\kappa$ が大きい金属では反射率が高くなりやすい。ただし $n$ と $\kappa$ は波長依存するため、金属の反射率も

$$
R=R(\lambda)
$$

である。

銀は可視域で比較的高く平坦な反射率を持つため無彩色に近く見える。一方、金や銅では可視域内で電子遷移の影響が現れ、反射スペクトルに強い波長依存性が生じるため固有の色が見える。

## 10　測定では「何を反射率と呼ぶか」を決める必要がある

現実の表面では、鏡面反射と拡散反射が混在する。そのため分光反射率を測るときは、どの方向の光を集めるかによって結果が変わる。

たとえば積分球を使えば、広い角度へ散らばった反射光をまとめて測定できる。逆に、鏡面反射成分を含めるか除くかで、得られるスペクトルと計算される色値は変化する。

色の測定では、単に「反射率を測った」と言うだけでなく、照明・受光の幾何条件まで指定する必要がある。

### 10.1　反射は「入射方向」と「観察方向」の二方向で決まる

より厳密には、表面がどの方向へどれだけ光を返すかは、双方向反射率分布関数（BRDF）で表す。波長 $\lambda$、入射方向 $\omega_i$、反射方向 $\omega_r$ に対して、BRDFを

$$
f_r(\lambda,\omega_i,\omega_r)
=\frac{dL_r(\lambda,\omega_r)}{dE_i(\lambda,\omega_i)}
$$

と定義する。$L_r$ は反射放射輝度、$E_i$ は入射放射照度で、$f_r$ の単位は $\mathrm{sr}^{-1}$ である。つまり通常の分光反射率 $R(\lambda)$ が「波長ごとの総量」を主に表すのに対し、BRDFはそこへ方向情報を加えた量である。

任意の方向から光が入射する場合、観察方向 $\omega_r$ へ出る放射輝度は

$$
L_r(\lambda,\omega_r)
=\int_{\Omega^+}
f_r(\lambda,\omega_i,\omega_r)
L_i(\lambda,\omega_i)
\cos\theta_i\,d\omega_i
$$

で表される。$L_i$ は入射放射輝度、$\theta_i$ は表面法線と入射方向の角度である。$\cos\theta_i$ が入るのは、斜めから同じ放射輝度の光を受けても、表面へ投影される面積あたりの入射エネルギーが小さくなるためである。

理想的なLambert反射面ではBRDFは方向によらず、分光反射率を $\rho(\lambda)$ とすると

$$
f_r(\lambda)=\frac{\rho(\lambda)}{\pi}
$$

である。半球について

$$
\int_{\Omega^+}\cos\theta\,d\omega=\pi
$$

だから、方向半球反射率は

$$
\int_{\Omega^+}f_r\cos\theta_r\,d\omega_r
=\rho
$$

となる。この $1/\pi$ は単なる慣習ではなく、半球へエネルギーを分配しつつエネルギー保存を満たすために必要な係数である。

一方、鏡面では反射エネルギーが正反射方向近傍へ集中するため、BRDFは鋭いピークを持つ。紙、塗膜、肌、金属フレーク塗装などの実在表面は、多くの場合Lambert拡散成分・鏡面成分・中間的なヘイズ成分を併せ持つ。このため、同じ分光反射率を持つ試料でも、観察角度や照明角度が変われば見かけの明るさや色が変化し得る。

受動的な表面では、各入射方向について反射側へ出るエネルギーが入射エネルギーを超えないので、

$$
\int_{\Omega^+}
f_r(\lambda,\omega_i,\omega_r)
\cos\theta_r\,d\omega_r\le1
$$

を満たす必要がある。また磁気光学効果などで相反性が破れない通常の材料では、Helmholtzの相反則として概念的に

$$
f_r(\lambda,\omega_i,\omega_r)
=f_r(\lambda,\omega_r,\omega_i)
$$

が成り立つ。

したがって「白い紙はどの角度から見てもほぼ同じに見える」「光沢紙は角度を変えると白く飛ぶ」といった違いは、単なる感覚的な光沢差ではなく、反射光の角度分布 $f_r$ の違いとして記述できる。色の測定で照明・受光条件を指定する必要があるのも、この方向依存性を制御するためである。

## 11　色彩検定で押さえる部分と大学レベルの接続

色彩検定では、まず次を押さえる。

- 光が物体に当たると反射・吸収・透過が起こる
- その割合は波長によって異なる
- 眼へ届く光のスペクトルが変わることで物体色が生じる
- 同じ物体でも照明が変われば見える色は変化し得る

大学レベルでは、その背後を

$$
R(\lambda)+T(\lambda)+A(\lambda)=1
$$

というエネルギー保存、Fresnel係数、Poyntingベクトル、複素屈折率、複素誘電率、吸収係数、散乱、BRDF、そして

$$
(X,Y,Z)=\int S(\lambda)R(\lambda)(\bar x,\bar y,\bar z)\,d\lambda
$$

という測色積分で連続的に記述できる。

「赤い物体だから赤い光を出している」のではない。照明から来た光が、物質の電磁応答によって波長ごとに反射・吸収・透過へ振り分けられ、そのうち眼へ届いたスペクトルを視覚系が色として知覚しているのである。

## 参考資料

- [色彩検定協会「色彩検定とは・各級の目安」](https://www.aft.or.jp/pages/feature/level)
- [色彩検定協会「公式テキスト3級目次」](https://www.aft.or.jp/images/text_of-3st-grade_mokuji.pdf)
- [MIT OpenCourseWare, 6.013 Electromagnetics and Applications, Lecture 8: Transverse Electromagnetic Waves](https://ocw.mit.edu/courses/6-013-electromagnetics-and-applications-fall-2005/resources/lec8/)
- RP Photonics Encyclopedia, "Fresnel Reflections", Dr. Rüdiger Paschotta, https://www.rp-photonics.com/fresnel_reflections.html
- RP Photonics Encyclopedia, "Absorption Coefficient", Dr. Rüdiger Paschotta, https://www.rp-photonics.com/absorption_coefficient.html
- RP Photonics Encyclopedia, "Refractive Index", Dr. Rüdiger Paschotta, https://www.rp-photonics.com/refractive_index.html
- RP Photonics Encyclopedia, "Kramers–Kronig Relations", Dr. Rüdiger Paschotta, https://www.rp-photonics.com/kramers_kronig_relations.html
- [CIE, CIE 1931 colour-matching functions, 2 degree observer](https://cie.co.at/datatable/cie-1931-colour-matching-functions-2-degree-observer)
- [OpenStax, College Physics 2e, 24.3 The Electromagnetic Spectrum](https://openstax.org/books/college-physics-2e/pages/24-3-the-electromagnetic-spectrum)
- [NIST, Bidirectional optical scattering facility](https://www.nist.gov/laboratories/tools-instruments/bidirectional-optical-scattering-facility)
- [NIST, Theoretical Concepts in Spectrophotometric Measurements](https://www.nist.gov/publications/theoretical-concepts-spectrophotometric-measurements)
- [NIST SP 250-101, Ultraviolet to Short-wave Infrared Spectral Reflectance](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.250-101.pdf)