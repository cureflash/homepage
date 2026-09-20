# ルーメン・ルクス・カンデラは何が違うのか――測光量を放射量から導く

色彩検定3級では「照明と色の見え方」、2級では「照明の表し方」を学ぶ。ここで登場する光束、光度、照度、輝度は、単位だけを暗記すると混同しやすい。

物理的には、これらはすべて同じ光を

1. 波長方向には人間の明所視感度 $V(\lambda)$ で重み付けし、
2. 空間方向には立体角や面積で整理する

ことで作られる量である。

核心を先に書けば、放射量から測光量への変換は

$$
\boxed{
X_v
=
K_m\int X_{e,\lambda}(\lambda)V(\lambda)\,d\lambda
}
$$

で表せる。ここで $X_e$ は物理的な放射量、$X_v$ は人の視感度を含む測光量、$V(\lambda)$ はCIE明所視標準分光視感効率、$K_m\approx683\ \mathrm{lm\,W^{-1}}$ である。

したがって「光が何Wあるか」と「人にどれだけ明るく効くか」は同じではない。本記事では、この一点からルーメン、カンデラ、ルクス、輝度まで順に導く。

## 1　色彩検定との接続

色彩検定協会の公式テキスト目次では、3級の「光と色」に「照明と色の見え方」、2級の「光と色」に「照明」があり、2級では特に「照明の表し方」が独立項目になっている。

色彩検定では、照明は単に「明るい・暗い」を決めるものではない。物体へ入射する光の量と分光分布が変われば、眼へ届く光も変わり、明るさだけでなく色の見えも変化する。

そのため、照明を理解するには次の2系統を分ける必要がある。

- 放射測定：光を純粋なエネルギーとして測る
- 測光：光を人間の視感度で重み付けして測る

大学レベルでは、この2つを数式で接続する。

## 2　まず「光の量」をWで測る――放射測定

光は電磁波であり、エネルギーを運ぶ。単位時間あたりに運ばれる放射エネルギーを放射束 radiant flux といい、

$$
\Phi_e=\frac{dQ_e}{dt}
$$

で定義する。単位はWである。

しかし可視光では、同じ1 Wでも波長によって人間が感じる明るさへの寄与が違う。

たとえば明所視では黄緑付近の感度が高く、可視域の端に近づくほど感度は低くなる。したがって、放射束だけでは「人に対してどれほど明るく働く光か」を表せない。

そこで波長ごとの放射束を考える。分光放射束を $\Phi_{e,\lambda}(\lambda)$ とすれば

$$
\Phi_e
=
\int \Phi_{e,\lambda}(\lambda)\,d\lambda
$$

である。

測光では、このスペクトルをそのまま足すのではなく、人の視感度を掛けてから積分する。

## 3　測光は「眼の感度を含んだ放射測定」である

CIEの明所視標準分光視感効率を $V(\lambda)$ とする。これは最大値を1に正規化した無次元関数である。

分光放射束から光束 $\Phi_v$ を求める式は

$$
\boxed{
\Phi_v
=
K_m\int
\Phi_{e,\lambda}(\lambda)V(\lambda)\,d\lambda
}
$$

である。

$K_m$ は明所視における最大分光視感効果度であり、実用上

$$
K_m\approx683\ \mathrm{lm\,W^{-1}}
$$

である。

SIでは、周波数

$$
\nu=540\times10^{12}\ \mathrm{Hz}
$$

の単色放射について、分光視感効果度を正確に

$$
K_{cd}=683\ \mathrm{lm\,W^{-1}}
$$

と定めてカンデラを定義する。この周波数は標準空気中で約555.016 nmに対応する。

つまり測光量は、純粋な電磁気学的エネルギー量ではない。物理量に標準化された人間の視覚特性を組み込んだ量である。

## 4　同じ1 Wでもルーメンが違う

単色光を考える。波長 $\lambda_0$ の放射束を $\Phi_e$ とすると、分光積分は

$$
\boxed{
\Phi_v
=
683\,V(\lambda_0)\Phi_e
}
$$

と簡単になる。

$V(\lambda_0)=1$ に近い555 nm付近なら、1 Wの単色放射は約683 lmに相当する。

一方、$V(\lambda)$ が小さい青端・赤端では、同じ1 Wでも光束は大きく減る。

ここで重要なのは

$$
\boxed{
\mathrm{W}\neq\mathrm{lm}
}
$$

ということである。

Wはエネルギー流の物理量、lmはその放射を明所視の視感度で重み付けした量である。

この違いを理解すると、「電力が大きい光源ほど必ず明るい」とは限らない理由も分かる。照明では、電気入力からどれだけの光束を得られるかを表すために lm/W が使われるが、これは光源全体の発光効率に関わる指標であり、単色放射に対する $K(\lambda)$ とは区別して考える必要がある。

## 5　光束 lumen――全方向へ出る「見える光の総量」

光束 luminous flux $\Phi_v$ の単位がルーメン lm である。

光源から出る光を、方向を区別せず全体として数えた量だと考えるとよい。

CIEでは1 lmを光束のSI単位として定義している。方向情報はまだ含まれていない。

たとえば同じ1000 lmの光源でも、全方向へ均等に放射する光源と、狭い角度へ集中して放射するスポットライトでは、特定方向の明るさは大きく異なる。

そこで次に「どの方向へどれだけ光束を送るか」を考える。

## 6　光度 candela――光束を立体角で割る

立体角を $\Omega$ とする。光度 luminous intensity $I_v$ は

$$
\boxed{
I_v
=
\frac{d\Phi_v}{d\Omega}
}
$$

で定義される。

単位はカンデラ cd で、

$$
1\ \mathrm{cd}
=
1\ \mathrm{lm\,sr^{-1}}
$$

である。

ここでsrはステラジアン、すなわち3次元空間における角度の単位である。

点光源が全方向へ完全に均一に光を出し、どの方向でも光度が $I_v$ なら、全立体角は $4\pi$ srなので

$$
\boxed{
\Phi_v=4\pi I_v
}
$$

となる。

逆に、同じ光束を狭い立体角へ集中すれば、その方向の光度は高くなる。

つまり

- lm：全体の光量
- cd：特定方向への光量密度

という違いである。

## 7　照度 lux――面にどれだけ光が落ちるか

照度 illuminance $E_v$ は、面へ入射する光束の面密度である。

$$
\boxed{
E_v
=
\frac{d\Phi_v}{dA}
}
$$

単位はルクス lx で、

$$
1\ \mathrm{lx}
=
1\ \mathrm{lm\,m^{-2}}
$$

である。

1000 lmの光が1 m²へ一様に入れば

$$
E_v=1000\ \mathrm{lx}
$$

である。

同じ1000 lmが10 m²へ広がれば

$$
E_v=100\ \mathrm{lx}
$$

になる。

したがって照度は光源そのものの量ではなく、「ある面がどれだけ照らされているか」を表す量である。

## 8　なぜ距離が2倍になると照度は1/4になるのか

点光源から距離 $r$ の位置に微小面積 $dA$ を置く。面の法線と光の進行方向の角度を $\theta$ とする。

この面が光源から張る立体角は

$$
\boxed{
d\Omega
=
\frac{dA\cos\theta}{r^2}
}
$$

である。

光度の定義から

$$
d\Phi_v
=
I_v\,d\Omega
$$

なので

$$
d\Phi_v
=
I_v
\frac{dA\cos\theta}{r^2}
$$

となる。

両辺を $dA$ で割れば

$$
\boxed{
E_v
=
\frac{I_v\cos\theta}{r^2}
}
$$

を得る。

面が光源へ正対していれば $\theta=0$ なので

$$
\boxed{
E_v
=
\frac{I_v}{r^2}
}
$$

である。

距離が2倍なら

$$
E_v'=
\frac{I_v}{(2r)^2}
=
\frac14E_v
$$

となる。

これは暗記すべき経験則ではない。球面の面積が $4\pi r^2$ で広がる幾何から生じる逆二乗則である。

## 9　なぜ斜めから照らすと暗くなるのか――余弦則

先ほどの式

$$
E_v
=
\frac{I_v\cos\theta}{r^2}
$$

には $\cos\theta$ が入っている。

これは斜めから光を当てると、同じ光束がより広い面積へ広がるためである。

$\theta=0^\circ$ なら

$$
\cos\theta=1
$$

で照度は最大になる。

$\theta=60^\circ$ なら

$$
\cos60^\circ=\frac12
$$

なので、距離と光度が同じでも照度は半分になる。

したがって面の照らされ方は

- 光源の光度
- 光源までの距離
- 面への入射角

の3つで決まる。

色彩設計でも、同じ照明器具を使っていても展示面の向きや配置が変われば照度が変わり、その結果として色の見えやコントラストも変化する。

## 10　輝度――「その面からその方向へ」どれだけ光が来るか

照度は面へ入る光を測る量だった。これに対して輝度 luminance $L_v$ は、ある面から特定方向へ出る光を表す。

定義は

$$
\boxed{
L_v
=
\frac{d^2\Phi_v}
{dA\cos\theta\,d\Omega}
}
$$

である。

光度を使えば

$$
\boxed{
L_v
=
\frac{dI_v}{dA\cos\theta}
}
$$

とも書ける。

単位は

$$
\mathrm{cd\,m^{-2}}
$$

である。

照度が「机の上にどれだけ光が届いたか」を表すのに対し、輝度は「その机やディスプレイをある方向から見たとき、どれだけ光が眼へ向かってくるか」を表す。

ディスプレイの明るさを cd/m² で表すのはこのためである。

ただし、輝度は知覚された「明るさ」そのものではない。実際の明るさ知覚は順応状態、周囲との対比、視野サイズ、色度などにも依存する。輝度はあくまで物理・測光的に定義された量である。

## 11　Lambert面ではなぜ輝度が角度で変わりにくいのか

完全拡散面、すなわちLambert面を考える。

Lambert面では、面の法線方向から角度 $\theta$ だけ傾いた方向への光度が

$$
I_v(\theta)
=
I_v(0)\cos\theta
$$

に従う。

一方、輝度の分母にも投影面積として $\cos\theta$ が入るので

$$
L_v
=
\frac{I_v(\theta)}{A\cos\theta}
=
\frac{I_v(0)}{A}
$$

となり、理想的には観察方向に依存しない。

またLambert面の光束発散度 $M_v$ は

$$
\boxed{
M_v=\pi L_v
}
$$

となる。

この関係は、拡散反射面や積分球などを扱う測光で重要である。

## 12　測光量を1枚の式で整理する

放射束から測光量へ進む流れは、次のように整理できる。

まず波長方向について

$$
\Phi_e
\xrightarrow{\,V(\lambda)\,}
\Phi_v
$$

と変換する。

次に空間方向について

$$
I_v
=
\frac{d\Phi_v}{d\Omega}
$$

$$
E_v
=
\frac{d\Phi_v}{dA}
$$

$$
L_v
=
\frac{d^2\Phi_v}
{dA\cos\theta\,d\Omega}
$$

と整理する。

表にすると次のようになる。

| 測光量 | 記号 | 定義の核 | 単位 | 何を表すか |
|---|---:|---|---|---|
| 光束 | $\Phi_v$ | 視感度で重み付けした放射束 | lm | 光の総量 |
| 光度 | $I_v$ | $d\Phi_v/d\Omega$ | cd | 特定方向への光の集中度 |
| 照度 | $E_v$ | $d\Phi_v/dA$ | lx | 面へ入る光束密度 |
| 輝度 | $L_v$ | $d^2\Phi_v/(dA\cos\theta d\Omega)$ | cd/m² | 面から特定方向へ出る光の密度 |

この表で重要なのは、単位を別々に暗記することではない。すべて光束 $\Phi_v$ を、立体角と面積で微分した量だと理解することである。

## 13　測光と測色はどこでつながるのか

光束はスペクトルを $V(\lambda)$ で重み付けして1個の数値へ圧縮する。

しかし色を決めるには1個の数値では足りない。CIE XYZでは

$$
X=k\int S(\lambda)\bar{x}(\lambda)\,d\lambda
$$

$$
Y=k\int S(\lambda)\bar{y}(\lambda)\,d\lambda
$$

$$
Z=k\int S(\lambda)\bar{z}(\lambda)\,d\lambda
$$

という3つの積分を使う。

CIE 1931標準表色系では

$$
\boxed{
\bar{y}(\lambda)=V(\lambda)
}
$$

となるように定められている。そのためY三刺激値は測光量の輝度と比例する。

ここから重要な結論が得られる。

$$
\boxed{
\text{同じ光束・同じ輝度でも、色が同じとは限らない}
}
$$

なぜなら測光量は $V(\lambda)$ という1本の関数だけでスペクトルを圧縮するのに対し、色度には $X,Y,Z$ の3成分が必要だからである。

したがって1000 lmの暖色LEDと1000 lmの昼光色LEDは、総光束が同じでも分光分布と色度が異なりうる。

色彩検定で「照明によって色の見えが変わる」と学ぶ理由はここにある。照度だけを合わせても、照明スペクトルが違えば物体から反射されるスペクトルは変化する。

## 14　物体色まで含めると「照明×反射率」になる

物体へ入射する照明の分光分布を $E(\lambda)$、物体の分光反射率を $R(\lambda)$ とすると、眼へ向かう反射光のスペクトルは第一近似で

$$
S(\lambda)
\propto
E(\lambda)R(\lambda)
$$

となる。

したがって色の見えは

$$
\boxed{
\text{照明スペクトル}
\times
\text{物体の分光反射率}
\rightarrow
\text{眼へ届くスペクトル}
}
$$

で決まる。

照度 $E_v$ が同じ2つの照明でも、分光分布 $E(\lambda)$ が異なれば、同じ物体の反射スペクトルも異なる。

これは「明るさを揃えれば色も同じに見える」とは限らないことを示している。

測光は照明の量を扱うために不可欠だが、色まで扱うには分光情報と測色が必要になる。

## 15　色彩検定の用語を大学物理へ翻訳する

| 色彩検定での表現 | 物理・数学での意味 |
|---|---|
| 光束 | 分光放射束を $V(\lambda)$ で重み付けした積分 |
| 光度 | 光束の立体角密度 $d\Phi_v/d\Omega$ |
| 照度 | 入射光束の面密度 $d\Phi_v/dA$ |
| 輝度 | 投影面積・立体角あたりの光束密度 |
| 距離が離れると暗い | 点光源近似では $E_v\propto1/r^2$ |
| 斜めから照らすと暗い | $E_v\propto\cos\theta$ |
| 照明で色が変わる | $E(\lambda)R(\lambda)$ が変わる |
| 同じ明るさでも色が違う | 測光は1次元、測色はXYZの3次元 |

試験では用語と単位を区別することが重要だが、物理的には「波長で重み付けし、空間で微分する」という一つの構造にまとめられる。

## 16　まとめ

照明の測光量は、独立した4種類の暗記事項ではない。

最初に放射スペクトルを人の明所視感度で重み付けし、

$$
\boxed{
\Phi_v
=
K_m\int
\Phi_{e,\lambda}(\lambda)V(\lambda)\,d\lambda
}
$$

として光束を作る。

その光束を空間的に分解すると

$$
\boxed{
I_v=\frac{d\Phi_v}{d\Omega}
}
$$

$$
\boxed{
E_v=\frac{d\Phi_v}{dA}
}
$$

$$
\boxed{
L_v=
\frac{d^2\Phi_v}{dA\cos\theta\,d\Omega}
}
$$

となる。

さらに点光源の幾何から

$$
\boxed{
E_v
=
\frac{I_v\cos\theta}{r^2}
}
$$

が導かれ、逆二乗則と余弦則が同時に説明できる。

そしてCIE 1931表色系では $\bar y(\lambda)=V(\lambda)$ なので、測光と測色はY成分を通じて直接つながっている。

色彩検定の「照明の表し方」を大学レベルで理解するとは、lm・cd・lx・cd/m²を暗記することではなく、放射スペクトル、人間の視感度、立体角、面積という4つの概念からすべてを導けるようにすることである。

## 参考資料

- 公益社団法人 色彩検定協会, 「公式テキスト3級 目次」. https://www.aft.or.jp/images/text_of-3st-grade_mokuji.pdf
- 公益社団法人 色彩検定協会, 「公式テキスト2級 目次」. https://www.aft.or.jp/images/text_of-2st-grade_mokuji.pdf
- Commission Internationale de l'Éclairage (CIE), CIE 018:2019, *The Basis of Physical Photometry, 3rd Edition*. https://www.cie.co.at/publications/basis-physical-photometry-3rd-edition
- CIE, *CIE spectral luminous efficiency for photopic vision, V(λ)*, DOI: 10.25039/CIE.DS.dktna2s3. https://cie.co.at/datatable/cie-spectral-luminous-efficiency-photopic-vision
- CIE, e-ILV 17-21-060 “illuminance”. https://cie.co.at/eilvterm/17-21-060
- CIE, e-ILV 17-21-050 “luminance”. https://cie.co.at/eilvterm/17-21-050
- CIE, e-ILV 17-21-084 “lumen”. https://cie.co.at/eilvterm/17-21-084
- CIE, e-ILV 17-23-045 “CIE 1931 standard colorimetric system”. https://cie.co.at/eilvterm/17-23-045
- National Institute of Standards and Technology (NIST), “Realization of the candela”. https://www.nist.gov/pml/sensor-science/optical-radiation/realization-candela
- NIST, “SI Units – Luminous Intensity”. https://www.nist.gov/pml/owm/si-units-luminous-intensity
- Bureau International des Poids et Mesures (BIPM), “SI base unit: candela (cd)”. https://www.bipm.org/en/si-base-units/candela
- Bureau International des Poids et Mesures, *The International System of Units (SI), 9th edition, updated 2026*. https://www.bipm.org/en/publications/si-brochure