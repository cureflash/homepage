# 空はなぜ青く、夕焼けはなぜ赤いのか――散乱を電磁気学から考える

色彩検定3級の公式テキストでは「光と色」の中に「光の性質と色」があり、2級でも「光と色」の章で「光の性質と色」を扱う。検定では、光が物質に当たると反射・吸収・透過・散乱などが起こり、それによって眼に届く光のスペクトルが変わることを理解する。

この記事では、そのうち「散乱」を大学物理まで掘り下げる。空が青い理由、夕焼けが赤い理由、雲が白い理由は、すべて「どの波長の光が、どの方向へ、どれだけ再分配されるか」という問題として整理できる。

## 1　散乱とは何か

散乱とは、光が物質と相互作用した結果、進行方向が変わる現象である。

鏡面反射も方向を変える現象だが、散乱では一般に、入射した細い光束が多くの方向へ再分配される。

Rayleigh散乱では、散乱前後で光の振動数はほぼ変わらない。これは弾性散乱である。したがって、青い光が散乱されて赤い光に変わるわけではない。

変わるのは主として「方向」である。

一方、蛍光やRaman散乱のように、物質とのエネルギー交換によって光の振動数が変わる現象は別に扱う必要がある。

## 2　空気分子は、光を受けると小さなアンテナになる

光は電磁波なので、時間的に振動する電場を持つ。

単純化して、入射光の電場を

$$
E(t)=E_0\cos\omega t
$$

とする。

空気分子中の電子は、この電場から力を受ける。電子雲と原子核の重心がわずかにずれると、分子には誘起双極子モーメントが生じる。

線形応答の範囲では、

$$
p(t)=\alpha E(t)
$$

と書ける。

ここで $p$ は双極子モーメント、$\alpha$ は分極率である。

つまり、入射光の電場が振動すると、誘起双極子も同じ角振動数 $\omega$ で振動する。

加速度運動する電荷は電磁波を放射する。そのため、光によって揺さぶられた分子自身が、二次的な電磁波を周囲へ放射する。

これがRayleigh散乱を理解する基本像である。

## 3　なぜ短波長ほど強く散乱されるのか

振動する電気双極子が放射する電力は、概略

$$
P_{\mathrm{rad}}\propto \omega^4 p_0^2
$$

となる。

誘起双極子の振幅は

$$
p_0=\alpha E_0
$$

なので、分極率 $\alpha$ の波長依存性が小さい範囲では、

$$
P_{\mathrm{rad}}\propto \omega^4
$$

とみなせる。

光について

$$
\omega=2\pi\nu=\frac{2\pi c}{\lambda}
$$

だから、

$$
P_{\mathrm{rad}}\propto \frac{1}{\lambda^4}
$$

となる。

これがRayleigh散乱の有名な

$$
\boxed{I_{\mathrm{sca}}\propto \lambda^{-4}}
$$

という波長依存性である。

この関係は、散乱断面積を使うとさらに明確になる。SI単位系で、等方的な小さな散乱体の分極率を $\alpha$、真空中の波数を

$$
k=\frac{2\pi}{\lambda}
$$

とすると、電気双極子近似での全Rayleigh散乱断面積は

$$
\boxed{
\sigma_{\mathrm{R}}=
\frac{k^4|\alpha|^2}{6\pi\varepsilon_0^2}
}
$$

となる。したがって、$\alpha$ の波長依存性を無視できる範囲では

$$
\sigma_{\mathrm{R}}\propto k^4\propto \lambda^{-4}
$$

である。

「短波長ほど散乱される」という経験則は、分子が電場で分極し、その誘起双極子が放射するというMaxwell電磁気学から出てくる。

厳密には分子の分極率、屈折率、分子の非等方性なども効くので、実際の大気の散乱断面積は単純な $\lambda^{-4}$ だけではない。しかし、可視域の基本的な色依存性を理解するにはこの近似が非常に重要である。

## 4　青と赤では、どのくらい差があるのか

青を $450\,\mathrm{nm}$、赤を $650\,\mathrm{nm}$ と単純化する。

Rayleigh散乱の強さの比は、

$$
\frac{I_{450}}{I_{650}}
\approx
\left(\frac{650}{450}\right)^4
\approx 4.35
$$

となる。

同じ強さで大気へ入ったと仮定すれば、450 nm付近の光は650 nm付近の光より数倍強く散乱される。

この大きな差が、空の色を作る。

## 5　空が青いのは「青い光が大気中で作られる」からではない

太陽から来た光には、可視域の多くの波長が含まれている。

その光が大気へ入ると、窒素や酸素などの分子によってRayleigh散乱を受ける。短波長ほど散乱が強いため、青から紫にかけての光は、赤い光よりも強く進行方向を変えられる。

昼間、太陽そのものではない方向の空を見ると、眼へ届く光の多くは「太陽光が大気分子によってこちらへ散乱された光」である。

したがって、空が青く見える流れは

> 太陽光が大気へ入る  
> → 分子の電子雲が振動する  
> → 誘起双極子が電磁波を再放射する  
> → 短波長ほど強く散乱される  
> → 青成分を多く含む散乱光が横方向から眼へ入る

と整理できる。

大気が青い色素を持っているわけではない。

## 6　では、なぜ空は紫ではないのか

$\lambda^{-4}$ だけを見れば、青より短い紫のほうがさらに強く散乱される。

それでも通常の昼空が紫ではなく青く見えるのは、散乱則だけで最終的な知覚色が決まらないからである。

眼に届く散乱光の分光分布は、概念的には

$$
L_{\mathrm{sky}}(\lambda)
\propto
E_{\odot}(\lambda)\,S_{\mathrm{atm}}(\lambda)
$$

と考えられる。

ここで $E_{\odot}(\lambda)$ は地球へ入ってくる太陽光の分光分布、$S_{\mathrm{atm}}(\lambda)$ は大気による散乱・吸収・多重散乱などを含む波長依存性である。

さらに、人間の色知覚はスペクトルをそのまま「波長の色」として読むわけではない。L・M・S錐体の分光感度を通して信号化される。

したがって、空の知覚色は

- 太陽光自体のスペクトル
- 大気中での散乱
- 大気による吸収・減衰
- 観察方向
- L・M・S錐体の分光感度

の組み合わせで決まる。

NASAも、紫は青より強く散乱されるが、人間の眼は青に対してより高い感度を持つため、空は青く見えると説明している。

## 7　夕焼けが赤いのは、今度は「散乱されなかった光」を見るから

昼の青空では、横方向から眼へ入る散乱光を見ていた。

夕焼けでは、太陽方向から直接来る光の色を考える必要がある。

大気中を距離 $s$ だけ進むとき、散乱によって直進光から光が失われるとする。波長ごとの散乱係数を $\beta_s(\lambda)$ とすれば、

$$
\frac{dI(\lambda)}{ds}
=-\beta_s(\lambda)I(\lambda)
$$

と書ける。

積分すると、

$$
I(\lambda,s)
=
I_0(\lambda)e^{-\beta_s(\lambda)s}
$$

となる。

Rayleigh散乱では概ね

$$
\beta_s(\lambda)\propto \lambda^{-4}
$$

なので、短波長ほど直進光から速く失われる。

太陽が高いとき、光が通る大気の距離は比較的短い。ところが太陽が地平線付近まで下がると、光は斜めに大気を長距離通過する。

すると青・紫・緑の成分が進行方向から強く散乱され、観察者まで直進して残りやすい長波長側の赤・橙の割合が高くなる。

つまり、

- 青空：散乱されてこちらへ来た光を見る
- 夕日：散乱されず直進方向に残った光を見る

という違いがある。

同じRayleigh散乱が、観察方向によって青と赤という反対の見え方を作っている。

## 8　光学的厚さで考えると、大気の距離が重要だと分かる

散乱・吸収を含めて、ある波長の光がどれほど減衰するかは光学的厚さ $\tau(\lambda)$ で表せる。

$$
\tau(\lambda)=\int \beta(\lambda,s)\,ds
$$

散乱体の数密度を $N(s)$、1個あたりの散乱断面積を $\sigma_{\mathrm{R}}(\lambda)$ とすると、散乱係数は

$$
\beta_s(\lambda,s)=N(s)\sigma_{\mathrm{R}}(\lambda)
$$

だから、散乱だけを考えれば

$$
\tau_s(\lambda)=\int N(s)\sigma_{\mathrm{R}}(\lambda)\,ds
$$

となる。つまり、散乱による減衰は「分子1個の散乱しやすさ」と「光路上に何個の分子があるか」の積分で決まる。

直達光は

$$
I(\lambda)=I_0(\lambda)e^{-\tau(\lambda)}
$$

となる。

太陽高度が低くなると、光が通過する大気の実効距離が増えるので $\tau$ が大きくなる。

そのうえRayleigh散乱では短波長側ほど $\beta$ が大きい。したがって夕方ほど直達光のスペクトルから短波長成分が強く削られ、赤く見えやすくなる。

「夕方だから赤い」のではなく、

$$
\text{長い光路長} \times \text{短波長ほど大きい散乱係数}
$$

という積み重ねで説明できる。

## 9　粒子サイズが大きくなるとRayleigh則から外れる

Rayleigh散乱が成り立つ基本条件は、散乱体が光の波長より十分小さいことである。

粒子半径を $a$ とすると、散乱問題では

$$
x=\frac{2\pi a}{\lambda}
$$

というサイズパラメータを使う。

$$
x\ll1
$$

ならRayleigh近似が有効になる。

一方、粒子サイズが波長と同程度以上になると、単純な $\lambda^{-4}$ では記述できなくなる。球形粒子について任意のサイズまで扱う理論がMie理論である。

この領域では、散乱の波長依存性だけでなく、前方・後方のどちらへ強く散乱するかという角度分布も大きく変化する。

## 10　雲が白く見えるのはなぜか

雲を構成する水滴は、空気分子よりはるかに大きく、可視光の波長に対してRayleigh極限ではない。

そのため、青だけが極端に優先して散乱される $\lambda^{-4}$ の性質は弱くなる。可視域の赤・緑・青が比較的近い強さで散乱され、さらに雲内部で多重散乱を繰り返す。

その結果、多くの可視波長が混ざって眼へ届くので、雲は白から灰色に見える。

雲が厚くなると、下側まで到達する光そのものが減るため、暗い灰色にもなる。

したがって、

- 分子による散乱：波長選択性が強い → 青空
- 大きな水滴による散乱：可視域で波長選択性が相対的に弱い → 白い雲

と整理できる。

## 11　散乱光はなぜ偏光するのか

Rayleigh散乱には角度依存性と偏光依存性がある。

まず、1個の誘起双極子を考える。双極子の振動軸と観察方向のなす角を $\psi$ とすると、遠方へ放射される強度は

$$
I(\psi)\propto \sin^2\psi
$$

である。双極子は振動軸方向には放射せず、それに垂直な方向へ最も強く放射する。

ただし、大気へ入射する太陽光はほぼ無偏光なので、そのまま $\sin^2\psi$ を「散乱角の分布」として使ってはいけない。入射方向と散乱方向のなす角を $\theta$ とし、2つの直交偏光成分を平均すると、Rayleigh散乱の微分断面積は

$$
\boxed{
\frac{d\sigma}{d\Omega}
=
\frac{k^4|\alpha|^2}{32\pi^2\varepsilon_0^2}
\left(1+\cos^2\theta\right)
}
$$

となる。

この式から、前方 $\theta=0^\circ$ と後方 $180^\circ$ では散乱強度が大きく、直角方向 $90^\circ$ ではその半分になることが分かる。一方、偏光度は理想的なRayleigh散乱なら

$$
\boxed{
P(\theta)=
\frac{1-\cos^2\theta}{1+\cos^2\theta}
}
$$

で与えられる。

したがって

$$
P(90^\circ)=1
$$

となり、単一散乱だけを考えれば、太陽から空の上で $90^\circ$ 離れた方向の散乱光は最も強く直線偏光する。

実際の空では、分子の非等方性、エアロゾル、地表反射、多重散乱などによって完全な100%偏光にはならない。それでも偏光サングラスを回転させながら青空を見ると明るさが変わるのは、この散乱偏光のためである。

ここで重要なのは、Rayleigh散乱が単に「短波長を強く散らす」だけではないことである。散乱後の光は、波長・方向・偏光状態の3つが同時に変化する。

### 11.1　実在の大気では「屈折率」から散乱強度を計算できる

ここまでの散乱断面積は、1分子の分極率 $\alpha$ を使って書いた。しかし大気について実際に計算するときは、測定しやすい巨視的な屈折率 $n$ からRayleigh散乱断面積を求めることができる。

希薄な等方媒質では、分子の分極率と屈折率はClausius–Mossotti（Lorentz–Lorenz）関係

$$
\boxed{
\frac{n^2-1}{n^2+2}
=
\frac{N\alpha}{3\varepsilon_0}
}
$$

で結び付く。$N$ は数密度である。

第3節の

$$
\sigma_{\mathrm R}
=
\frac{k^4|\alpha|^2}{6\pi\varepsilon_0^2},
\qquad
k=\frac{2\pi}{\lambda}
$$

へ $\alpha$ を代入すると、等方分子について

$$
\boxed{
\sigma_{\mathrm R}(\lambda)
=
\frac{24\pi^3}{N^2\lambda^4}
\left(\frac{n^2(\lambda)-1}{n^2(\lambda)+2}\right)^2
}
$$

を得る。つまり $\lambda^{-4}$ だけでなく、空気の屈折率そのものの波長依存も散乱強度へ入る。

ただし窒素や酸素の分子は完全な球対称ではなく、分極率には方向依存性がある。この非等方性を実用計算へ入れる代表的な補正がKing補正因子 $F_K$ である。脱偏光比を $\rho$ とすると、よく使われる形は

$$
\boxed{
F_K
=
\frac{6+3\rho}{6-7\rho}
}
$$

であり、実在大気のRayleigh散乱断面積は

$$
\boxed{
\sigma_{\mathrm R}(\lambda)
=
\frac{24\pi^3}{N^2\lambda^4}
\left(\frac{n^2(\lambda)-1}{n^2(\lambda)+2}\right)^2
F_K(\lambda)
}
$$

と表せる。$n$ と $N$ は同じ基準状態に対応させる必要がある。式の中に $N$ が見えるが、希薄気体では屈折率差 $n-1$ 自体が数密度に比例するため、1分子あたりの散乱断面積は圧力や温度を単純に変えただけでは変わらず、主に波長と気体組成で決まる。

この式は、

$$
\text{分子の電子構造}
\rightarrow
\text{分極率テンソル}
\rightarrow
\text{屈折率・脱偏光比}
\rightarrow
\text{Rayleigh散乱断面積}
\rightarrow
\text{光学的厚さ}
\rightarrow
\text{空の分光放射輝度}
$$

という因果関係をつなぐ。BodhaineらやBucholtzの大気計算では、屈折率と脱偏光比の波長依存を含めることでRayleigh光学的厚さを高精度化している。したがって「青は $\lambda^{-4}$ で強く散乱される」は第一近似であり、実大気では $n(\lambda)$ と分子異方性まで含めて初めて定量的な散乱量になる。

## 12　散乱を「光の出入り」で書く――放射輸送方程式

ここまでは「直進光が散乱で減ること」と「別方向から散乱光が入ってくること」を分けて考えた。実際の大気では、この2つは同じ式で扱う。

波長 $\lambda$、位置 $s$、進行方向 $\Omega$ の分光放射輝度を $L_\lambda(s,\Omega)$ とすると、定常状態の放射輸送方程式は概念的に

$$
\boxed{
\frac{dL_\lambda(s,\Omega)}{ds}
=
-\beta_e(\lambda,s)L_\lambda(s,\Omega)
+
\frac{\beta_s(\lambda,s)}{4\pi}
\int_{4\pi}
P(\Omega'\rightarrow\Omega;\lambda)
L_\lambda(s,\Omega')\,d\Omega'
+
j_\lambda(s,\Omega)
}
$$

と書ける。

ここで

$$
\beta_e=\beta_a+\beta_s
$$

は消散係数、$\beta_a$ は吸収係数、$\beta_s$ は散乱係数である。右辺第1項は「その方向を進んでいた光が吸収・散乱によって失われる量」、第2項は「他方向を進んでいた光が散乱されて観察方向へ入ってくる量」、$j_\lambda$ は物質自身の発光を表す。可視域の通常の大気散乱だけを考えるなら、熱放射などの $j_\lambda$ はほぼ無視できる。

散乱の方向分布を表す $P$ を位相関数と呼ぶ。ここでは

$$
\int_{4\pi}P(\Omega'\rightarrow\Omega)\,d\Omega=4\pi
$$

となる規格化を採る。理想的な無偏光Rayleigh散乱なら

$$
\boxed{
P_R(\theta)=\frac{3}{4}\left(1+\cos^2\theta\right)
}
$$

であり、前節の微分断面積と同じ角度依存性を持つ。

太陽光を1回だけ散乱する「単一散乱近似」にすると、空のある方向から来る分光放射輝度は概略

$$
L_{\mathrm{sky},\lambda}(\Omega)
\approx
\int_{\mathrm{LOS}}
E_{\odot,\lambda}
\,e^{-\tau_{\odot}(\lambda,s)}
\frac{\beta_s(\lambda,s)P_R(\theta)}{4\pi}
\,e^{-\tau_{\mathrm{obs}}(\lambda,s)}
\,ds
$$

と書ける。$\tau_{\odot}$ は太陽から散乱点まで、$\tau_{\mathrm{obs}}$ は散乱点から観察者までの光学的厚さである。

この式は、空の色を決める因果関係をそのまま表している。

- $E_{\odot,\lambda}$：もとの太陽光スペクトル
- $e^{-\tau_{\odot}}$：散乱点へ届くまでの減衰
- $\beta_s$：その場所で散乱される確率
- $P_R(\theta)$：観察方向へ振り分けられる割合
- $e^{-\tau_{\mathrm{obs}}}$：散乱後、眼へ届くまでの減衰

Rayleigh領域では $\beta_s\propto\lambda^{-4}$ なので短波長が強く散乱される。しかし、光路が長くなると指数減衰も短波長側ほど強くなる。したがって、空の色は単純な $\lambda^{-4}$ だけではなく、太陽高度・観察方向・大気の厚さ・エアロゾル量まで含めた放射輸送で決まる。

これは青空や夕焼けの説明を「短波長は散乱しやすい」という一文から、実際に観察される分光放射輝度を計算する理論へ拡張した形である。

### 12.1　エアロゾルは「どれだけ前方へ散らすか」も重要

Rayleigh散乱では前方と後方が対称だが、サイズパラメータ $x\gtrsim1$ の水滴やエアロゾルではMie散乱が強い前方ピークを持つことが多い。角度分布を1個の数で要約する代表量が非対称因子

$$
\boxed{
g=
\frac{1}{4\pi}
\int_{4\pi}
P(\theta)\cos\theta\,d\Omega
}
$$

である。ここでは前節と同じく $\int P\,d\Omega=4\pi$ と規格化している。

$g=0$ は平均的に前後対称、$g>0$ は前方散乱優勢、$g<0$ は後方散乱優勢を表す。大きな粒子では $g$ が正になることが多く、散乱係数 $\beta_s$ が同じでも、光が横方向へ強く再配分されるとは限らない。

放射輸送では、前方へ散乱された光は元の進行方向をあまり失っていない。そのため、拡散的に方向をランダム化する強さを近似的に

$$
\boxed{
\beta_s'=\beta_s(1-g)
}
$$

という「輸送散乱係数」で表すことがある。$g\to1$ なら $\beta_s'$ は小さくなり、散乱回数が多くても進行方向は比較的保たれる。

実用計算でMie位相関数を簡略化するときにはHenyey–Greenstein型

$$
\boxed{
P_{\mathrm{HG}}(\theta)
=
\frac{1-g^2}
{\left(1+g^2-2g\cos\theta\right)^{3/2}}
}
$$

がよく使われる。この規格化では $\int P_{\mathrm{HG}}\,d\Omega=4\pi$ である。

したがって、霧・雲・エアロゾルの見え方は

$$
\text{粒子径・屈折率}
\rightarrow
\text{Mie位相関数}
\rightarrow
g
\rightarrow
\text{方向別の放射輸送}
\rightarrow
\text{眼へ届く分光放射輝度}
$$

とつながる。「大粒子ではRayleigh則が崩れる」というだけでなく、方向再分配の非対称性まで含めて初めて、霞・雲・太陽近傍のまぶしい散乱光を定量的に扱える。

### 12.2　エアロゾルの色依存性――Ångström指数

Rayleigh散乱では理想化すると $\lambda^{-4}$ という強い波長依存が現れるが、エアロゾルの消散は粒径分布が広く、Mie領域も含むため、可視域で単純な4乗則にはならない。大気観測では、エアロゾル光学的厚さ（AOD）$\tau_a$ の波長依存を、ある波長範囲で経験的に

$$
\boxed{
\tau_a(\lambda)
=
\tau_a(\lambda_0)
\left(\frac{\lambda}{\lambda_0}\right)^{-\alpha_A}
}
$$

と近似することが多い。$\alpha_A$ がÅngström指数である。

対数を取ると

$$
\ln\tau_a
=
\ln\tau_a(\lambda_0)
-
\alpha_A\ln\left(\frac{\lambda}{\lambda_0}\right)
$$

なので、2波長 $\lambda_1,\lambda_2$ の観測から

$$
\boxed{
\alpha_A
=
-\frac{
\ln\tau_a(\lambda_1)-\ln\tau_a(\lambda_2)
}{
\ln\lambda_1-\ln\lambda_2
}
}
$$

と求められる。NASAのAERONETでも、複数波長のAODを対数化し、その傾きからÅngström指数を求める。

物理的には、$\alpha_A$ が大きいほど消散の波長依存が強く、微小粒子が光学的に優勢である場合が多い。NASA Deep Blueは、概略として $\alpha_A>1$ なら煙や工業起源粒子などのfine modeが優勢、$\alpha_A<1$ なら砂塵・海塩などのcoarse modeが優勢になりやすいと説明している。ただしÅngström指数は粒径そのものではなく、粒径分布・屈折率・波長範囲をまとめて反映した経験量である。

例えば440 nmと870 nmで比を取ると、

$$
\frac{\tau_a(440)}{\tau_a(870)}
=
\left(\frac{870}{440}\right)^{\alpha_A}
$$

である。$\alpha_A=1.5$ ならこの比は約2.78、$\alpha_A=0.5$ なら約1.41となる。つまりfine modeが優勢な大気ほど短波長側の直達光を相対的に強く削りやすい。

直達太陽光を大気質量 $m$ を使って概略

$$
\boxed{
I_\lambda
=
I_{0,\lambda}
\exp\left[-m\left\{
\tau_R(\lambda)
+\tau_a(\lambda)
+\tau_{\rm abs}(\lambda)
\right\}\right]
}
$$

と書けば、青空や夕焼けの色はRayleigh散乱だけでなく、エアロゾルの量とÅngström指数にも依存することが分かる。$\alpha_A$ が大きければエアロゾル消散そのものにも強い短波長選択性が加わり、低い場合には消散はより灰色に近づく。一方、coarse modeでは前節の非対称因子 $g$ が大きくなりやすいため、色の波長依存が弱くても前方散乱による霞や太陽周辺の白っぽい光が目立つ場合がある。

したがって実大気の色は、

$$
\boxed{
\text{分子のRayleigh散乱}
+
\text{エアロゾルAODの波長依存}
+
\text{位相関数の前方性}
\rightarrow
\text{方向別・波長別の放射輝度}
}
$$

として考える必要がある。Ångström指数は、粒子サイズの物理を「色の付き方」へ接続するための実用的な指標である。

## 13　色を理解するときは「スペクトルの再分配」と考える

散乱で重要なのは、光が消えることではない。

ある観察方向から見れば光が減る一方、別の方向へ光が送られる。

したがって、散乱体を含む系では、観察者へ届く分光放射輝度は

$$
L_{\mathrm{obs}}(\lambda)
=
L_{\mathrm{direct}}(\lambda)
+
L_{\mathrm{scattered}}(\lambda)
$$

のように、直達成分と散乱成分を分けて考える必要がある。

これは物体色にもつながる。紙、塗料、肌、牛乳などでは、内部散乱が光路長を増やし、吸収と組み合わさることで最終的な反射スペクトルが決まる。

つまり「何色に見えるか」は、吸収だけでなく、光がどこへ運ばれたかまで含めて考えなければならない。

## 14　色彩検定で押さえる部分と大学レベルの発展

色彩検定では、まず次を押さえればよい。

- 光は物質との相互作用で反射・吸収・透過・散乱する
- 散乱の強さには波長依存性がある
- 短波長側が強く散乱される現象が、青空などの色に関係する
- 眼に届く光のスペクトルが変化することで、見える色が変わる

大学レベルでは、その背後を

$$
p=\alpha E
$$

$$
\sigma_{\mathrm{R}}=
\frac{k^4|\alpha|^2}{6\pi\varepsilon_0^2}
$$

$$
\frac{d\sigma}{d\Omega}
\propto
1+\cos^2\theta
$$

$$
I(\lambda)=I_0(\lambda)e^{-\tau(\lambda)}
$$

さらに

$$
\frac{dL_\lambda}{ds}
=
-\beta_eL_\lambda
+
\frac{\beta_s}{4\pi}
\int_{4\pi}P\,L_\lambda\,d\Omega'
$$

という放射輸送まで拡張して、誘起双極子、散乱断面積、角度分布、光学的厚さ、方向間のエネルギー移送を一つの連鎖として説明できる。

空の青も夕焼けの赤も、色そのものが空気中に存在しているのではない。太陽光のスペクトルが大気によって波長別・方向別に再配分され、その一部が眼へ入った結果である。

## 参考資料

- [色彩検定協会「公式テキスト3級目次」](https://www.aft.or.jp/images/text_of-3st-grade_mokuji.pdf)
- [色彩検定協会「公式テキスト2級目次」](https://www.aft.or.jp/images/text_of-2st-grade_mokuji.pdf)
- [色彩検定協会「色彩検定とは・各級の目安」](https://www.aft.or.jp/pages/feature/level)
- [NASA Science, Wave Behaviors](https://science.nasa.gov/ems/03_behaviors/)
- [NASA Space Place, Why Is the Sky Blue?](https://spaceplace.nasa.gov/blue-sky/en/)
- [NASA Goddard Space Flight Center, Planetary Spectrum Generator: Molecular (Rayleigh) and Aerosol (Mie) Scattering](https://psg.gsfc.nasa.gov/helpatm.php)
- [NASA AERONET, Spectral Optical Thickness](https://aeronet.gsfc.nasa.gov/Operational/BSSN/optical_thickness.html)
- [NASA Earth, Deep Blue: How Aerosols Are Measured](https://earth.gsfc.nasa.gov/climate/data/deep-blue/science)
- [UCAR Center for Science Education, The Appearance of the Sky](https://scied.ucar.edu/learning-zone/atmosphere/appearance-sky)
- [UCAR, Atmospheric Remote Sensing Lecture 7: Rayleigh/Molecular Scattering](https://www2.acom.ucar.edu/sites/default/files/documents/Gautam_acam_lecture.pdf)
- [NASA Reference Publication 1156, Introduction to the Theory of Atmospheric Radiative Transfer](https://ntrs.nasa.gov/citations/19860018367)
- [NASA Technical Reports Server, Radiative Transfer in Spherical Shell Atmospheres. 2: Asymmetric Phase Functions](https://ntrs.nasa.gov/citations/19770026499)
- [New Mexico State University, Rayleigh Scattering: Optical Depth](https://atmos.nmsu.edu/education_and_outreach/encyclopedia/rayleigh_optical.htm)
- [OpenStax University Physics Volume 3, 1.7 Polarization](https://openstax.org/books/university-physics-volume-3/pages/1-7-polarization)
- B. A. Bodhaine, N. B. Wood, E. G. Dutton, and J. R. Slusser, “On Rayleigh Optical Depth Calculations,” *Journal of Atmospheric and Oceanic Technology* 16, 1854–1861 (1999), DOI: 10.1175/1520-0426(1999)016<1854:ORODC>2.0.CO;2.
- A. Bucholtz, “Rayleigh-scattering calculations for the terrestrial atmosphere,” *Applied Optics* 34(15), 2765–2773 (1995), DOI: 10.1364/AO.34.002765.
- C. F. Bohren and D. R. Huffman, *Absorption and Scattering of Light by Small Particles*, Wiley, 1983.
- J. D. Jackson, *Classical Electrodynamics*, 3rd ed., Wiley, 1998.