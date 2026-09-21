# ルーメン・ルクス・カンデラは何が違うのか――測光量を放射量から導く

色彩検定3級では「照明と色の見え方」、2級では「照明の表し方」を学ぶ。光束、光度、照度、輝度は別々の暗記事項に見えるが、大学レベルではすべて「放射を人間の視感度で重み付けし、空間的に積分・微分する量」として統一できる。

核心は

$$
\boxed{
X_v=K_m\int X_{e,\lambda}(\lambda)V(\lambda)\,d\lambda
}
$$

である。$X_e$ は放射量、$X_v$ は測光量、$V(\lambda)$ はCIE明所視標準分光視感効率、$K_m\approx683\ \mathrm{lm\,W^{-1}}$ である。

## 1　色彩検定との接続

色彩検定協会の現行案内では、3級で光の基礎知識と照明、2級で光の性質と「色の見えに関わる照明」を扱う。大学レベルでは、照明を次の2段階に分けると整理しやすい。

- 放射測定：光をエネルギーとして測る
- 測光：その放射を標準化された人間の視覚感度で重み付けする

照明が変われば明るさだけでなく物体色も変化するため、測光量と分光分布を区別することが重要になる。

## 2　まず光をWで測る――放射測定

光が単位時間に運ぶ放射エネルギーを放射束 radiant flux といい、

$$
\Phi_e=\frac{dQ_e}{dt}
$$

で定義する。単位はWである。

分光放射束を $\Phi_{e,\lambda}(\lambda)$ とすると、全放射束は

$$
\Phi_e=\int\Phi_{e,\lambda}(\lambda)\,d\lambda
$$

である。

しかし同じ1 Wでも波長によって眼への効き方は異なる。したがって放射束だけでは「人にとってどれだけ明るいか」を表せない。

## 3　測光は放射測定に視覚の重みを入れたもの

CIE明所視標準分光視感効率を $V(\lambda)$ とする。これは最大値を1に正規化した無次元関数であり、分光放射束から光束 $\Phi_v$ を

$$
\boxed{
\Phi_v=K_m\int\Phi_{e,\lambda}(\lambda)V(\lambda)\,d\lambda
}
$$

で計算する。

現在のSIでは、周波数

$$
\nu=540\times10^{12}\ \mathrm{Hz}
$$

の単色放射に対する視感効果度を

$$
\boxed{K_{cd}=683\ \mathrm{lm\,W^{-1}}}
$$

と正確に定めてカンデラを定義する。この周波数は標準空気中で約555.016 nmに相当する。

つまり測光量は純粋な電磁気学的エネルギー量ではなく、放射量に標準観測者の視覚特性を組み込んだ量である。

## 4　同じ1 Wでもルーメンは違う

波長 $\lambda_0$ の単色光なら

$$
\boxed{
\Phi_v=683\,V(\lambda_0)\Phi_e
}
$$

となる。$V(\lambda_0)=1$ に近い555 nm付近では1 Wの単色放射は約683 lmに相当するが、青端や赤端では $V(\lambda)$ が小さいので同じ1 Wでも光束は小さい。

したがって

$$
\boxed{\mathrm{W}\neq\mathrm{lm}}
$$

である。Wは放射エネルギー流、lmはその放射を視感度で重み付けした量である。

## 5　光束 lumen――見える光の総量

光束 luminous flux $\Phi_v$ の単位がルーメン lm である。方向を区別せず、光源から出る可視的な光の総量を表す。

同じ1000 lmでも、全方向へ広げる光源と狭い方向へ集中するスポットライトでは、特定方向の明るさは異なる。そこで方向を含む量として光度を導入する。

## 6　光度 candela――光束の立体角密度

光度 luminous intensity $I_v$ は

$$
\boxed{
I_v=\frac{d\Phi_v}{d\Omega}
}
$$

で定義され、単位はcdである。

$$
1\ \mathrm{cd}=1\ \mathrm{lm\,sr^{-1}}
$$

全方向へ等方的に放射する点光源なら全立体角は $4\pi$ srなので

$$
\boxed{\Phi_v=4\pi I_v}
$$

となる。同じ光束を小さい立体角へ集中させれば、その方向の光度は高くなる。

## 7　照度 lux――面へ入る光束密度

照度 illuminance $E_v$ は面に入射する光束の面密度である。

$$
\boxed{
E_v=\frac{d\Phi_v}{dA}
}
$$

単位はlxで、

$$
1\ \mathrm{lx}=1\ \mathrm{lm\,m^{-2}}
$$

である。1000 lmが1 m²へ一様に入射すれば1000 lx、10 m²へ広がれば100 lxになる。

## 8　逆二乗則は立体角の幾何から出る

点光源から距離 $r$ の位置に面積 $dA$ を置き、その法線と光線の角度を $\theta$ とする。面が光源から張る立体角は

$$
\boxed{
d\Omega=\frac{dA\cos\theta}{r^2}
}
$$

である。

光度の定義 $d\Phi_v=I_vd\Omega$ を使うと

$$
E_v=\frac{d\Phi_v}{dA}
=\frac{I_v\cos\theta}{r^2}
$$

すなわち

$$
\boxed{
E_v=\frac{I_v\cos\theta}{r^2}
}
$$

を得る。

面が光源へ正対するなら $\theta=0$ なので

$$
\boxed{E_v=\frac{I_v}{r^2}}
$$

であり、距離が2倍になると照度は1/4になる。これは経験則ではなく、光が距離とともに $r^2$ に比例する面積へ広がることの直接の帰結である。

## 9　余弦則は投影面積から出る

同じ式

$$
E_v=\frac{I_v\cos\theta}{r^2}
$$

に含まれる $\cos\theta$ は、斜めから照明すると同じ光束がより広い実面積へ分散することを表す。

$\theta=60^\circ$ なら $\cos\theta=1/2$ なので、距離と光度が同じでも照度は正対時の半分になる。

## 10　輝度――面から特定方向へ出る光

輝度 luminance $L_v$ は

$$
\boxed{
L_v=\frac{d^2\Phi_v}{dA\cos\theta\,d\Omega}
}
$$

で定義される。光度を使えば

$$
\boxed{
L_v=\frac{dI_v}{dA\cos\theta}
}
$$

とも書ける。単位はcd/m²である。

照度が「面へどれだけ光が入るか」を表すのに対し、輝度は「その面からある方向へどれだけ光が出るか」を表す。ディスプレイの明るさがcd/m²で表されるのはこのためである。

ただし輝度は知覚された明るさそのものではない。明るさ知覚は順応、周囲対比、視野サイズ、色度にも依存する。

## 11　Lambert面ではなぜ輝度が方向に依存しないのか

完全拡散面では、法線から角度 $\theta$ の方向への光度が

$$
I_v(\theta)=I_v(0)\cos\theta
$$

に従う。

一方で輝度の分母にも投影面積の $\cos\theta$ が入るので

$$
L_v
=\frac{I_v(\theta)}{A\cos\theta}
=\frac{I_v(0)}{A}
$$

となり、理想的には観察方向に依存しない。

Lambert面の光束発散度 $M_v$ は半球上で積分すると

$$
M_v
=\int_{2\pi}L_v\cos\theta\,d\Omega
$$

$$
=L_v\int_0^{2\pi}\int_0^{\pi/2}\cos\theta\sin\theta\,d\theta\,d\phi
$$

より

$$
\boxed{M_v=\pi L_v}
$$

となる。$\pi$ は単なる換算係数ではなく、半球上の方向積分から現れる。

## 12　照度から物体の輝度へ――なぜ白い紙は明るく見えるのか

照度 $E_v$ は面へ入る光、輝度 $L_v$ は面から眼の方向へ出る光である。この二つは物体の反射率を介してつながる。

入射光束のうち測光学的に $\rho_v$ の割合を反射する理想的な拡散反射面なら、光束発散度は

$$
\boxed{M_v=\rho_v E_v}
$$

である。さらにLambert面では $M_v=\pi L_v$ なので、

$$
\boxed{
L_v=\frac{\rho_v E_v}{\pi}
}
$$

を得る。

同じ500 lxで照らしても、$\rho_v=0.8$ の白い紙なら

$$
L_v\approx\frac{0.8\times500}{\pi}\approx127\ \mathrm{cd/m^2}
$$

だが、$\rho_v=0.1$ の暗い紙なら約16 cd/m²しかない。したがって「照度が同じなら物体も同じ明るさ」ではない。

ここで $\rho_v$ も単なる材料定数ではない。波長ごとの拡散反射率を $R(\lambda)$、入射分光放射照度を $E_{e,\lambda}(\lambda)$ とする単純化では、

$$
E_v
=K_m\int E_{e,\lambda}(\lambda)V(\lambda)\,d\lambda
$$

$$
M_v
=K_m\int E_{e,\lambda}(\lambda)R(\lambda)V(\lambda)\,d\lambda
$$

だから、測光学的な反射率は

$$
\boxed{
\rho_v
=\frac{M_v}{E_v}
=\frac{\int E_{e,\lambda}(\lambda)R(\lambda)V(\lambda)\,d\lambda}
{\int E_{e,\lambda}(\lambda)V(\lambda)\,d\lambda}
}
$$

となる。つまり同じ物体でも照明スペクトルが変われば、$R(\lambda)$ と $V(\lambda)$ の重なり方が変わり、測光学的な反射率や輝度も変わりうる。

この式は「照明→分光反射→眼へ届く光→輝度」という因果関係を直接表している。

## 13　レンズで輝度は増やせるか――エタンデュと基本輝度

輝度は単なる面密度ではなく、「投影面積×立体角」に対する光束密度である。微小な光線束について幾何学的エタンデュを

$$
\boxed{
dG=\cos\theta\,dA\,d\Omega
}
$$

とする。屈折率 $n$ の媒質では、CIEの optical extent は

$$
\boxed{
d\mathcal{E}=n^2dG=n^2\cos\theta\,dA\,d\Omega
}
$$

で表される。

一方、輝度の定義から

$$
d\Phi_v=L_v\cos\theta\,dA\,d\Omega
$$

なので、

$$
\boxed{
d\Phi_v=\frac{L_v}{n^2}\,d\mathcal{E}}
$$

と書ける。

吸収・反射損失・拡散がない理想的な光学系では optical extent が保存され、光束も保存される。したがって

$$
\boxed{
\frac{L_v}{n^2}=\text{const.}
}
$$

となる。CIEはこの量を basic luminance と呼ぶ。

空気中では $n\approx1$ なので、理想レンズを通しても拡張光源の輝度そのものは増やせない。レンズができるのは、面積と立体角の配分を変えることである。

受光面の照度は一般に

$$
\boxed{
E_v=\int_{\Omega}L_v(\theta,\phi)\cos\theta\,d\Omega
}
$$

である。したがってレンズで受光面から見た光源の立体角 $\Omega$ を大きくすれば照度は上げられるが、それは $L_v$ 自体を増幅したからではない。

このため「レンズで光を集める」と「光源の輝度を高くする」は別の操作である。受動光学系では、損失を無視しても輝度という位相空間密度を勝手に増やすことはできない。

## 14　測光量を一つの構造として見る

波長方向には

$$
\Phi_e\xrightarrow{\,V(\lambda)\,}\Phi_v
$$

と変換し、空間方向には

$$
I_v=\frac{d\Phi_v}{d\Omega},\qquad
E_v=\frac{d\Phi_v}{dA},\qquad
L_v=\frac{d^2\Phi_v}{dA\cos\theta\,d\Omega}
$$

と分解する。

| 測光量 | 記号 | 定義の核 | 単位 | 意味 |
|---|---:|---|---|---|
| 光束 | $\Phi_v$ | 視感度で重み付けした放射束 | lm | 光の総量 |
| 光度 | $I_v$ | $d\Phi_v/d\Omega$ | cd | 特定方向への集中度 |
| 照度 | $E_v$ | $d\Phi_v/dA$ | lx | 面へ入る光束密度 |
| 輝度 | $L_v$ | $d^2\Phi_v/(dA\cos\theta d\Omega)$ | cd/m² | 面から特定方向へ出る光束密度 |

## 15　測光とXYZ表色系はYでつながる

CIE XYZでは

$$
X=k\int S(\lambda)\bar{x}(\lambda)\,d\lambda
$$

$$
Y=k\int S(\lambda)\bar{y}(\lambda)\,d\lambda
$$

$$
Z=k\int S(\lambda)\bar{z}(\lambda)\,d\lambda
$$

と三つの積分で色刺激を表す。

CIE 1931標準表色系では

$$
\boxed{\bar{y}(\lambda)=V(\lambda)}
$$

となるように定められている。そのため、適切な測光学的規格化を行えばY三刺激値は輝度に対応する。

一方、測光量は $V(\lambda)$ という一本の重み関数でスペクトルを一次元へ圧縮するので、

$$
\boxed{
\text{同じ光束・同じ輝度でも色が同じとは限らない}
}
$$

1000 lmの暖色LEDと1000 lmの昼光色LEDは、総光束が同じでも分光分布と色度は異なりうる。

## 16　物体色は「照明スペクトル×分光反射率」で決まる

物体へ入射する照明の分光分布を $E(\lambda)$、物体の分光反射率を $R(\lambda)$ とすれば、眼へ向かう反射光は第一近似で

$$
\boxed{
S(\lambda)\propto E(\lambda)R(\lambda)
}
$$

となる。

したがって同じ照度でも $E(\lambda)$ が異なれば、物体から返るスペクトルも異なる。照度を揃えるだけでは色の見えを揃えられない理由はここにある。

## 17　暗くなると重み関数そのものが変わる――明所視・暗所視・薄明視

ここまで使った $V(\lambda)$ は明るい環境における明所視 photopic vision の標準分光視感効率である。しかし眼の分光感度は照度・輝度に依存して一定ではない。

ISO/CIE 23539:2023では、物理測光の標準関数として明所視の $V(\lambda)$ だけでなく、暗所視の $V'(\lambda)$、薄明視の $V_{\mathrm{mes};m}(\lambda)$、10°明所視の $V_{10}(\lambda)$ も扱う。

暗所視では杆体が支配的になるため、放射量から暗所視測光量への変換は

$$
\boxed{
X_v'=K_m'\int X_{e,\lambda}(\lambda)V'(\lambda)\,d\lambda
}
$$

となる。$V'(\lambda)$ の最大は標準空気中で507 nmにあり、最大分光視感効果度は約

$$
\boxed{K_m'\approx1700\ \mathrm{lm\,W^{-1}}}
$$

である。

明所視のピーク約555 nmより暗所視のピークが短波長側へ移るため、照度を下げると赤系刺激は相対的に暗く、青緑系刺激は相対的に明るく見える。これがプルキンエ現象である。

したがって「同じ分光放射でも測光値は観察条件によって変わりうる」。特に夜間道路照明のような薄明視領域では、単純に $V(\lambda)$ だけで評価すると短波長成分の寄与を過小評価する場合がある。CIEは2026年に屋外照明での薄明視測光の実用的適用指針 CIE 257:2026 を公表している。

この点は、測光量が純粋な光の物理量ではなく「放射場と標準化された視覚系との組合せ」で定義されることを最も端的に示している。

### 17.1　照度計は $V(\lambda)$ をどう実装するか――分光ミスマッチ

理想的な照度計は、入射する分光放射照度 $E_{e,\lambda}(\lambda)$ を $V(\lambda)$ で重み付けし、

$$
E_v=K_m\int E_{e,\lambda}(\lambda)V(\lambda)\,d\lambda
$$

をそのまま出力すればよい。しかし実際の物理測光器は、フォトダイオードと光学フィルタを組み合わせ、相対分光応答度 $s_{\mathrm{rel}}(\lambda)$ を $V(\lambda)$ に近づけている。したがって検出器の生信号 $Q$ は

$$
\boxed{
Q\propto\int E_{e,\lambda}(\lambda)s_{\mathrm{rel}}(\lambda)\,d\lambda
}
$$

となる。

もし $s_{\mathrm{rel}}(\lambda)\propto V(\lambda)$ が全波長で厳密に成立すれば、どの光源を測っても一つの校正係数で正しい照度へ変換できる。しかし実器では完全一致しない。CIE標準イルミナントAの分光分布を $S_A(\lambda)$ とし、この光源で照度計を校正したとする。校正係数を $C$ とすれば、

$$
C=K_m
\frac{\int S_A(\lambda)V(\lambda)\,d\lambda}
{\int S_A(\lambda)s_{\mathrm{rel}}(\lambda)\,d\lambda}
$$

である。別の光源 $S(\lambda)$ を測ったときの指示値は

$$
E_{\mathrm{ind}}
=C\int S(\lambda)s_{\mathrm{rel}}(\lambda)\,d\lambda
$$

だが、真の明所視照度は

$$
E_{\mathrm{true}}
=K_m\int S(\lambda)V(\lambda)\,d\lambda
$$

である。したがって、指示値を真値へ補正する分光ミスマッチ補正係数は

$$
\boxed{
F^*
=\frac{E_{\mathrm{true}}}{E_{\mathrm{ind}}}
=
\frac{\int S(\lambda)V(\lambda)\,d\lambda}
{\int S(\lambda)s_{\mathrm{rel}}(\lambda)\,d\lambda}
\frac{\int S_A(\lambda)s_{\mathrm{rel}}(\lambda)\,d\lambda}
{\int S_A(\lambda)V(\lambda)\,d\lambda}
}
$$

となる。

この式は、「基準光源で一度合わせれば、どんな光源でも正しい照度を測れる」とは限らないことを示す。校正は $S_A(\lambda)$ という一つのスペクトルに対する誤差を消すだけで、$s_{\mathrm{rel}}(\lambda)$ と $V(\lambda)$ の形の違いそのものは残る。白熱電球のような滑らかなスペクトルでは誤差が平均化されやすい一方、狭帯域成分を持つLEDでは局所的な応答差が測定値へ強く反映されることがある。

CIEは照度計・輝度計の性能を分光応答、余弦応答、直線性などの品質指標で評価しており、LED時代には標準イルミナントAを補完する測光器校正用LED参照スペクトル L41 も公表している。したがって「lux」は単にセンサーが受けた光量ではなく、実器の分光応答を標準視感度へどこまで一致させ、どのスペクトルで校正したかまで含む計測量である。

## 18　色彩検定の用語を大学物理へ翻訳する

| 色彩検定での表現 | 物理・数学での意味 |
|---|---|
| 光束 | 分光放射束を視感効率で重み付けした積分 |
| 光度 | 光束の立体角密度 $d\Phi_v/d\Omega$ |
| 照度 | 入射光束の面密度 $d\Phi_v/dA$ |
| 輝度 | 投影面積・立体角あたりの光束密度 |
| 距離が離れると暗い | 点光源近似では $E_v\propto1/r^2$ |
| 斜めから照らすと暗い | $E_v\propto\cos\theta$ |
| 白い紙ほど同じ照度で高輝度 | Lambert面なら $L_v=\rho_vE_v/\pi$ |
| レンズで光を集める | 輝度ではなく面積と立体角の配分を変える。理想系では $L_v/n^2$ が不変 |
| 照明で色が変わる | $E(\lambda)R(\lambda)$ が変わる |
| 同じ明るさでも色が違う | 測光は基本的に1次元、測色はXYZの3次元 |
| 暗所で青緑が相対的に明るくなる | $V(\lambda)$ から $V'(\lambda)$ へ感度が短波長側に移る |

## 19　まとめ

測光量は、放射スペクトルを標準視感度で重み付けして

$$
\boxed{
\Phi_v=K_m\int\Phi_{e,\lambda}(\lambda)V(\lambda)\,d\lambda
}
$$

と光束を作り、それを空間的に分解して

$$
\boxed{
I_v=\frac{d\Phi_v}{d\Omega},\qquad
E_v=\frac{d\Phi_v}{dA},\qquad
L_v=\frac{d^2\Phi_v}{dA\cos\theta\,d\Omega}
}
$$

と定義される。

さらに点光源の幾何から

$$
\boxed{E_v=\frac{I_v\cos\theta}{r^2}}
$$

が導かれ、逆二乗則と余弦則を同時に説明できる。拡散反射面では

$$
\boxed{L_v=\frac{\rho_vE_v}{\pi}}
$$

によって照度・反射率・輝度がつながる。また理想的な受動光学系では optical extent の保存から

$$
\boxed{\frac{L_v}{n^2}=\mathrm{const.}}
$$

となり、レンズは面積と立体角を交換できても輝度を自由に増幅できない。

CIE 1931表色系では $\bar y(\lambda)=V(\lambda)$ なので測光と測色はY成分を通じて接続する。ただし視覚の分光感度は一定ではなく、暗所視では $V'(\lambda)$、薄明視では $V_{\mathrm{mes};m}(\lambda)$ を考える必要がある。

色彩検定の「照明」を大学レベルで理解するとは、lm・cd・lx・cd/m²を暗記することではなく、放射スペクトル、標準視感度、立体角、投影面積、反射率、エタンデュからそれぞれの量を導けるようにすることである。

## 参考資料

- 公益社団法人 色彩検定協会, 「色彩検定とは」. https://www.aft.or.jp/pages/feature/level
- 公益社団法人 色彩検定協会, 「公式テキスト」. https://www.aft.or.jp/pages/official-product-orders
- Commission Internationale de l'Éclairage (CIE), CIE 018:2019, *The Basis of Physical Photometry, 3rd Edition*. https://www.cie.co.at/publications/basis-physical-photometry-3rd-edition
- ISO/CIE 23539:2023, *Photometry — The CIE system of physical photometry*. https://cie.co.at/publications/photometry-cie-system-physical-photometry-3
- ISO/CIE 19476:2014(E), *Characterization of the Performance of Illuminance Meters and Luminance Meters*. https://www.cie.co.at/publications/characterization-performance-illuminance-meters-and-luminance-meters
- CIE 231:2019, *CIE Classification System of Illuminance and Luminance Meters*. https://www.cie.co.at/publications/cie-classification-system-illuminance-and-luminance-meters
- CIE 251:2023, *LED Reference Spectrum for Photometer Calibration*. https://www.cie.co.at/publications/led-reference-spectrum-photometer-calibration
- CIE e-ILV 17-25-115, “spectral mismatch correction factor, <for a photometer>”. https://cie.co.at/eilvterm/17-25-115
- CIE e-ILV 17-21-048, “optical extent / etendue”. https://cie.co.at/eilvterm/17-21-048
- CIE e-ILV 17-21-049, “radiance”. https://cie.co.at/eilvterm/17-21-049
- CIE e-ILV 17-21-050, “luminance”. https://cie.co.at/eilvterm/17-21-050
- CIE, *CIE spectral luminous efficiency for photopic vision, V(λ)*, DOI: 10.25039/CIE.DS.dktna2s3. https://cie.co.at/datatable/cie-spectral-luminous-efficiency-photopic-vision
- CIE, *CIE spectral luminous efficiency for scotopic vision, V′(λ)*, DOI: 10.25039/CIE.DS.gr6w4b5g. https://www.cie.co.at/datatable/cie-spectral-luminous-efficiency-scotopic-vision
- CIE, e-ILV 17-22-036, “Purkinje phenomenon”. https://cie.co.at/eilvterm/17-22-036
- CIE, CIE 257:2026, *Recommendations for Practical Application of the CIE System for Mesopic Photometry in Outdoor Lighting*. https://www.cie.co.at/publications/recommendations-practical-application-cie-system-mesopic-photometry-outdoor-lighting
- National Institute of Standards and Technology (NIST), “Realization of the candela”. https://www.nist.gov/pml/sensor-science/optical-radiation/realization-candela
- NIST, “Photometry”. https://www.nist.gov/programs-projects/photometry
- Bureau International des Poids et Mesures (BIPM), “The SI”. https://www.bipm.org/en/measurement-units
- Bureau International des Poids et Mesures, *Principles governing photometry*, Metrologia 56 (2019), including the CIE photopic, scotopic and mesopic luminous-efficiency relations.