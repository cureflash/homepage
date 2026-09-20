# 色温度はなぜ「温度」なのか――黒体放射とPlanckの法則

色彩検定3級では「照明と色の見え方」、2級では「照明の表し方」「白熱ランプ」「LED」を扱う。この記事では、その背景にある黒体放射、Planckの法則、Wienの変位則、色度座標、色温度・相関色温度を大学物理と測色学まで掘り下げる。

照明の色は単に「赤っぽい」「青っぽい」と分類されているわけではない。熱放射する理想物体では、温度を1つ決めると放射スペクトルの形が決まる。そのスペクトルを人間の等色関数で積分すると色度が決まり、温度を変えると色度図上に1本の軌跡ができる。

つまり、

$$
\text{温度 }T
\rightarrow
\text{黒体の分光放射 }B_\lambda(\lambda,T)
\rightarrow
(X,Y,Z)
\rightarrow
\text{色度}
\rightarrow
\text{色温度}
$$

という因果関係がある。

## 1　黒体は「真っ黒な物体」という意味ではない

黒体、またはPlanckian radiatorとは、入射した放射を波長・方向・偏光によらず完全に吸収する理想的な熱放射体である。

「黒体」という名前は、低温で可視光をほとんど出さない場合に黒く見えることに由来する。しかし十分に高温にすれば、黒体自身が強く光る。したがって

$$
\text{黒体}=\text{黒く見える物体}
$$

ではなく、

$$
\text{黒体}=\text{吸収率1の理想熱放射体}
$$

と考える必要がある。

熱平衡にある黒体の放射は、材料の種類ではなく温度だけで決まる。この「温度だけでスペクトルが決まる」という性質が、照明の色を温度で表せる根拠になる。

## 2　Planckの法則が温度とスペクトルを結ぶ

温度 $T$ の黒体の波長あたり分光放射輝度は

$$
\boxed{
B_\lambda(\lambda,T)
=
\frac{2hc^2}{\lambda^5}
\frac{1}{\exp\!\left(\frac{hc}{\lambda k_{\rm B}T}\right)-1}
}
$$

で表される。

ここで

- $h$：Planck定数
- $c$：真空中の光速
- $k_{\rm B}$：Boltzmann定数
- $\lambda$：真空波長
- $T$：絶対温度

である。

この式には温度 $T$ が指数関数の中に入っている。そのため温度を上げると単に全波長で同じ倍率だけ明るくなるのではなく、スペクトルの形そのものが変わる。

低温では赤外域の比率が大きい。温度を上げるにつれて短波長側の放射が急速に増え、赤、橙、黄、白、さらに青白い方向へ見かけの色が変わる。

因果関係は

$$
T\uparrow
\rightarrow
\frac{hc}{\lambda k_{\rm B}T}\downarrow
\rightarrow
\text{短波長側の放射が相対的に増える}
\rightarrow
\text{色度が青側へ移る}
$$

と整理できる。

## 3　Wienの変位則――高温ほどピークが短波長へ移る

$B_\lambda(\lambda,T)$ を波長で微分し、極大条件

$$
\frac{\partial B_\lambda}{\partial \lambda}=0
$$

を解くと、Wienの変位則

$$
\boxed{
\lambda_{\max}T=b
}
$$

が得られる。

定数は

$$
b\approx2.898\times10^{-3}\ \mathrm{m\,K}
$$

である。

したがって

$$
\lambda_{\max}=\frac{b}{T}
$$

なので、高温ほど放射ピークは短波長側へ移る。

たとえば2700 Kでは

$$
\lambda_{\max}
\approx
\frac{2.898\times10^{-3}}{2700}
\approx1.07\ \mu\mathrm{m}
$$

で、ピークは可視光より長い近赤外域にある。

6500 Kでは

$$
\lambda_{\max}
\approx446\ \mathrm{nm}
$$

となり、波長表示のスペクトルでは可視域の青付近に極大が来る。

ただし、「ピーク波長だけで色が決まる」と考えてはいけない。人間の色覚は可視域全体のスペクトルを3つの応答へ積分しているからである。

## 4　ピーク波長には注意が必要――波長表示と周波数表示では極大位置が違う

大学レベルでは、Wienの変位則を使うときに一つ重要な注意がある。

黒体放射は、波長あたりのスペクトル

$$
B_\lambda
$$

でも、周波数あたりのスペクトル

$$
B_\nu
$$

でも表せる。しかし

$$
B_\nu\,d\nu
=
B_\lambda\,|d\lambda|
$$

であり、

$$
\nu=\frac{c}{\lambda}
$$

は非線形変換なので、単純に

$$
\nu_{\max}=\frac{c}{\lambda_{\max}}
$$

とはならない。

つまり「スペクトルのどこが最大か」は、横軸を波長にするか周波数にするかで変わる。

色を論じるときは、ピーク1点ではなく、可視域に存在する分光分布全体を扱う必要がある。

## 5　温度を上げると放射総量は $T^4$ で増える

黒体から単位面積あたりに放射される全エネルギーはStefan–Boltzmann則

$$
\boxed{
M=\sigma T^4
}
$$

に従う。

ここで $\sigma$ はStefan–Boltzmann定数である。

温度が2倍になれば、理想黒体の総放射量は

$$
2^4=16
$$

倍になる。

したがって白熱電球のフィラメントを高温にすると、短波長側の可視光が増えるだけでなく、放射総量も急増する。

ただし2700～3000 K程度のタングステン白熱電球では、黒体スペクトルの大きな部分は赤外域にある。これが白熱電球で投入電力のかなりの部分が熱として放射される物理的理由の一つである。

## 6　黒体スペクトルをXYZに変換すると「色」になる

物理学が直接与えるのは分光放射分布であって、まだ人間の色ではない。

黒体スペクトル $B_\lambda(\lambda,T)$ をCIE 1931等色関数 $\bar{x}(\lambda)$、$\bar{y}(\lambda)$、$\bar{z}(\lambda)$ と組み合わせると、三刺激値は概念的に

$$
X(T)=k\int B_\lambda(\lambda,T)\bar{x}(\lambda)\,d\lambda
$$

$$
Y(T)=k\int B_\lambda(\lambda,T)\bar{y}(\lambda)\,d\lambda
$$

$$
Z(T)=k\int B_\lambda(\lambda,T)\bar{z}(\lambda)\,d\lambda
$$

となる。

さらに

$$
x=\frac{X}{X+Y+Z}
$$

$$
y=\frac{Y}{X+Y+Z}
$$

とすれば色度座標が得られる。

温度 $T$ を変化させながらこの計算を繰り返すと、色度図上に黒体の色度が連続的に並ぶ。この軌跡がPlanckian locus、黒体軌跡である。

したがって黒体軌跡は経験的な色見本の並びではない。

$$
\boxed{
\text{Planckの法則}
+
\text{CIE等色関数}
\rightarrow
\text{黒体軌跡}
}
$$

として計算で得られる。

## 7　色温度は「同じ色度をもつ黒体の温度」

CIEでいう色温度 $T_c$ は、与えられた光と同じ色度をもつPlanckian radiatorの温度である。

したがって光源の色度が黒体軌跡上にあるなら、

$$
\text{光源の色度}
=
\text{温度 }T_c\text{ の黒体の色度}
$$

として色温度を定義できる。

温度が低い黒体は赤・橙成分の比率が高く、見た目は「暖かい」白になる。温度が高い黒体は短波長成分が増え、「冷たい」青白い白へ近づく。

そのため照明用語では

- 低色温度：暖色系
- 高色温度：寒色系

となる。

物理的温度の高低と、心理的な「暖かい／冷たい」という表現が逆方向に感じられる点は混同しやすい。

## 8　白熱電球では「温度」がかなり直接的な意味を持つ

白熱電球はタングステンフィラメントを高温に加熱し、熱放射を利用する。

実在物体は完全な黒体ではなく、波長依存の放射率

$$
\varepsilon(\lambda,T)
$$

を持つので、実際の分光放射は概念的には

$$
L_\lambda(\lambda,T)
=
\varepsilon(\lambda,T)B_\lambda(\lambda,T)
$$

となる。

したがって白熱電球のスペクトルは厳密な黒体スペクトルではない。それでも熱放射が支配的なので、黒体放射にかなり近い連続スペクトルを持つ。

CIE標準イルミナントAは、約2856 KのPlanckian radiationを代表する標準光として定義されている。

このような熱放射源では、色温度は発光体の実際の温度と比較的直接に結びつく。

## 9　LEDでは「相関色温度」であって、LEDが3000 Kに熱せられているわけではない

白色LEDは白熱電球とは発光原理が違う。

代表的な白色LEDでは、青色LEDの狭い発光と蛍光体の広帯域発光を組み合わせて白色を作る。

概念的には

$$
S_{\rm LED}(\lambda)
=
S_{\rm blue}(\lambda)
+
S_{\rm phosphor}(\lambda)
$$

である。

したがって3000 KのLEDと書かれていても、LEDチップが3000 Kになって黒体放射しているわけではない。

LED、蛍光ランプ、放電ランプなどのスペクトルは、一般には黒体スペクトルと一致しない。それでも色度が黒体軌跡の近くにあれば、その色を「最も近い黒体の温度」で表すことができる。

これが相関色温度

$$
\mathrm{CCT}=T_{cp}
$$

である。

CIEでは、与えられた分光分布の色度に最も近いPlanckian radiatorの温度として相関色温度を定義している。

概念的には、均等色度空間で

$$
T_{cp}
=
\operatorname*{arg\,min}_{T}
 d\!\left(\mathbf{c}_{\rm source},\mathbf{c}_{\rm P}(T)\right)
$$

と考えられる。

$\mathbf{c}_{\rm source}$ は光源の色度、$\mathbf{c}_{\rm P}(T)$ は温度 $T$ の黒体色度である。

## 10　同じ3000 Kでもスペクトルは同じとは限らない

相関色温度は、スペクトル全体を1個の数値へ強く圧縮した指標である。

たとえば

- 白熱電球
- 蛍光ランプ
- 青色LED＋蛍光体
- RGB混色LED

が、すべてほぼ3000 Kの相関色温度を持つことはありうる。

しかしそれらの分光分布

$$
S(\lambda)
$$

は大きく異なる。

色度は

$$
(X,Y,Z)
$$

という3つの積分値で決まるので、異なるスペクトルでも同じ三刺激値を作れる。これはメタメリズムと同じ数学的構造である。

したがって

$$
\boxed{
\text{同じCCT}
\not\Rightarrow
\text{同じスペクトル}
}
$$

であり、さらに

$$
\boxed{
\text{同じCCT}
\not\Rightarrow
\text{同じ演色性}
}
$$

である。

物体色の見え方まで評価するには、CCTだけでは足りず、光源の分光分布や演色評価も必要になる。

## 11　D65は「6500 Kの黒体」ではない

昼光を代表するCIE標準イルミナントD65は、相関色温度が約6500 Kの昼光スペクトルである。

しかしD65は6500 KのPlanckian radiatorそのものではない。

黒体ならスペクトル形状はPlanckの法則で決まるが、昼光には

- 太陽放射
- 大気吸収
- Rayleigh散乱
- エアロゾル散乱

などが関与する。

そのためD65と6500 K黒体は、色度が近くても分光分布は異なる。

この違いは、色温度・相関色温度が「スペクトルの形そのもの」ではなく「色度を温度で表した量」であることをよく示している。

## 12　2700 Kの光は、なぜピークが赤外なのに白く見えるのか

2700 K黒体の $B_\lambda$ のピークは約1.07 µmで、可視域外にある。それでも白熱電球は赤一色ではなく、黄みを帯びた白に見える。

理由は、黒体放射がピーク波長だけで光っているわけではなく、非常に広い連続スペクトルを持つからである。

2700 Kでも可視域の赤から青まで放射は存在する。ただし短波長側ほど弱く、相対的に長波長成分が多い。

たとえばPlanck式で550 nmの放射を1に規格化すると、概算で2700 Kでは

$$
B_\lambda(450\ \mathrm{nm})\approx0.32
$$

$$
B_\lambda(650\ \mathrm{nm})\approx1.93
$$

となり、青より赤側がかなり強い。

一方6500 Kでは同じ規格化で

$$
B_\lambda(450\ \mathrm{nm})\approx1.10
$$

$$
B_\lambda(650\ \mathrm{nm})\approx0.82
$$

となる。

つまり色温度上昇で、可視域内部の青／赤の相対比が大きく変わる。

## 13　色彩検定の「照明」を物理へつなぐ

色彩検定3級では「照明と色の見え方」を学ぶ。2級ではさらに「照明の表し方」「ランプの種類」「白熱ランプ」「LED」へ進む。

これを物理的因果関係でつなぐと、

$$
\text{熱運動・電子遷移}
\rightarrow
\text{発光スペクトル}
\rightarrow
\text{XYZ}
\rightarrow
\text{色度}
\rightarrow
\text{色温度・CCT}
$$

となる。

白熱ランプでは

$$
\text{フィラメント温度}
\rightarrow
\text{熱放射}
\rightarrow
\text{ほぼ連続スペクトル}
$$

である。

LEDでは

$$
\text{半導体の発光}
+
\text{蛍光体変換または多色混色}
\rightarrow
\text{人工的に設計されたスペクトル}
$$

である。

両者が同じ「3000 K」と表示されても、その数値が意味する物理は同じではない。

## まとめ

黒体放射では、温度 $T$ を決めるとPlanckの法則

$$
B_\lambda(\lambda,T)
=
\frac{2hc^2}{\lambda^5}
\frac{1}{e^{hc/(\lambda k_{\rm B}T)}-1}
$$

によってスペクトルが決まる。

温度を上げるとWienの変位則

$$
\lambda_{\max}T=b
$$

に従って波長表示のピークは短波長側へ移り、総放射量はStefan–Boltzmann則

$$
M=\sigma T^4
$$

で増加する。

そのスペクトルをCIE等色関数で積分すると色度が得られ、温度を変えたときの色度の軌跡が黒体軌跡になる。黒体軌跡上の光では色温度、黒体軌跡に近い非熱放射源では相関色温度を用いる。

したがって「3000 K」という表示は、光の色を黒体放射という物理モデルへ対応づけた値である。白熱電球では実温度とかなり直接的につながるが、LEDではあくまで色度が近い黒体の温度を示している。

## 参考資料

- 公益社団法人 色彩検定協会「公式テキスト3級目次」。「光と色―照明と色の見え方」p.022。https://www.aft.or.jp/images/text_of-3st-grade_mokuji.pdf
- 公益社団法人 色彩検定協会「公式テキスト2級目次」。「光と色―照明の表し方」p.024、「白熱ランプ」p.028、「LED」p.030。https://www.aft.or.jp/images/text_of-2st-grade_mokuji.pdf
- CIE, *International Lighting Vocabulary*, 17-24-004 “Planckian radiator”. https://cie.co.at/eilvterm/17-24-004
- CIE, *International Lighting Vocabulary*, 17-24-005 “Planck's law”. https://cie.co.at/eilvterm/17-24-005
- CIE, *International Lighting Vocabulary*, 17-23-059 “Planckian locus”. https://cie.co.at/eilvterm/17-23-059
- CIE, *International Lighting Vocabulary*, 17-23-067 “colour temperature”. https://cie.co.at/eilvterm/17-23-067
- CIE, *International Lighting Vocabulary*, 17-23-068 “correlated colour temperature”. https://cie.co.at/eilvterm/17-23-068
- CIE, “CIE standard illuminants”. https://www.cie.co.at/eilv/168
- OpenStax, *University Physics Volume 3*, §6.1 “Blackbody Radiation”. https://openstax.org/books/university-physics-volume-3/pages/6-1-blackbody-radiation
- U.S. Department of Energy, “LED Basics”. https://www.energy.gov/cmei/ssl/led-basics
- Eugene Hecht, *Optics*, 5th ed., Pearson, 2017.
