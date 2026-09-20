# エメラルドはなぜ緑なのか――Cr³⁺と結晶場から発色を考える

エメラルドは「緑色の物質だから緑に見える」のではない。白色光のうち特定の波長域が結晶内部で選択的に吸収され、残った光が眼に届くため緑に見える。

色彩検定3級では「色はなぜ見えるのか」「物体が光を吸収・反射・透過する」というところまで扱う。本記事では、その吸収がなぜ特定波長にだけ起こるのかを、エメラルド中のCr³⁺、結晶場理論、電子遷移までさかのぼって説明する。

## 1　エメラルドの母体はベリル

エメラルドはベリル（緑柱石）の一種で、理想化した化学式は

$$
\mathrm{Be_3Al_2Si_6O_{18}}
$$

で表される。

純粋なベリルは無色に近い。エメラルドでは、結晶中のAl³⁺の一部がCr³⁺やV³⁺などに置き換わることで可視光の吸収が生じる。GIAの分光測定では、Cr³⁺を含むエメラルドにおよそ430 nmと600〜620 nm付近の強い吸収が観測されている。

つまり、緑色の主因はベリルそのものではなく、母体結晶中に少量入った発色元素である。

このように、少量含まれるだけで色を大きく変える元素やイオンを宝石学では発色原因として扱う。

## 2　Cr³⁺はどんな電子配置を持つのか

Crの原子番号は24である。Cr³⁺では3個の電子を失い、3d電子は3個残る。

したがってCr³⁺は

$$
3d^3
$$

という電子配置を持つ。

自由なCr³⁺イオンだけを考えると、5つのd軌道は同じエネルギーとして扱える。しかし実際のエメラルド中では、Cr³⁺の周囲を酸素原子が取り囲んでいるため、d軌道は同じエネルギーではなくなる。

ここで結晶場が重要になる。

## 3　八面体型の結晶場でd軌道が二つに分かれる

Cr³⁺はベリル中でAl³⁺の位置を置換し、酸素に囲まれたほぼ八面体型の配位環境に入る。ただし実際には完全な正八面体ではなく、結晶構造による歪みを持つ。

まず単純な八面体結晶場を考える。

5つのd軌道のうち、配位子の方向を向きやすい

$$
d_{x^2-y^2},\ d_{z^2}
$$

は酸素側の電子との反発が大きく、エネルギーが高くなる。この二つをまとめて $e_g$ と呼ぶ。

一方、配位子の間を向く

$$
d_{xy},\ d_{xz},\ d_{yz}
$$

は比較的エネルギーが低く、$t_{2g}$ と呼ばれる。

八面体場での分裂幅を $\Delta_o$ とすると、重心を基準に

$$
E(t_{2g})=-\frac{2}{5}\Delta_o
$$

$$
E(e_g)=+\frac{3}{5}\Delta_o
$$

となる。

この分裂こそが、可視光を選択的に吸収できる原因の一つである。

## 4　吸収する光の波長はエネルギー差で決まる

電子が低い準位から高い準位へ移るには、その差に対応するエネルギーが必要である。

光子のエネルギーは

$$
E=h\nu=\frac{hc}{\lambda}
$$

なので、電子準位差を $\Delta E$ とすると、概念的には

$$
\Delta E\approx \frac{hc}{\lambda}
$$

を満たす波長の光が吸収される。

ただし、Cr³⁺のように複数のd電子を持つイオンでは、単純に「$t_{2g}$から$e_g$へ1個上がる」だけではスペクトル全体を説明できない。電子間反発やスピンも含めた多電子状態を考える必要がある。

Cr³⁺はd³イオンなので、八面体場では基底状態を主に

$$
{}^4A_{2g}
$$

で表し、可視域の主要な吸収には

$$
{}^4A_{2g}\rightarrow{}^4T_{2g}
$$

$$
{}^4A_{2g}\rightarrow{}^4T_{1g}
$$

などの遷移が関係する。

このようなd³イオンの励起状態のエネルギーは、$\Delta_o$だけでなく電子間反発も含めてTanabe–Sugano図で整理できる。

## 5　エメラルドは「緑を吸収する」のではない

実際のエメラルドでは、Cr³⁺に由来する強い吸収帯がおよそ430 nm付近と600〜620 nm付近に現れる。

430 nm付近は青紫側、600〜620 nm付近は橙〜赤側である。

つまり両端寄りの光が強く削られ、その間にある緑付近の光が相対的に多く透過・反射される。

模式的には

$$
I(\lambda)=I_0(\lambda)T(\lambda)
$$

と書ける。

ここで

- $I_0(\lambda)$：入射光の分光強度
- $T(\lambda)$：エメラルドの分光透過率
- $I(\lambda)$：眼へ届く透過光

である。

エメラルドが緑に見えるのは、緑色の光を内部で作っているからではない。入射した光のスペクトルから、Cr³⁺の電子構造に対応する波長が選択的に除かれた結果である。

## 6　同じCr³⁺でも周囲が変われば色が変わる

Cr³⁺そのものだけで色が一意に決まるわけではない。

結晶場分裂 $\Delta_o$ は、

- 周囲の原子・配位子の種類
- 金属イオンとの距離
- 配位構造
- 結晶格子の歪み
- 結合の共有結合性

などによって変化する。

したがって同じCr³⁺でも、別の結晶に入れば電子準位差が変わり、吸収波長も変わる。

有名な例がルビーである。ルビーもCr³⁺を発色原因として持つが、母体はベリルではなくコランダム（Al₂O₃）である。そのためCr–O周辺の配位環境と結晶場が異なり、エメラルドとは違う吸収スペクトルになって赤く見える。

重要なのは

> 発色元素だけでなく、その元素が「どんな結晶環境に置かれているか」が色を決める

という点である。

## 7　結晶場理論と配位子場理論は同じなのか

結晶場理論（Crystal Field Theory）は、周囲の配位子を主に点電荷として扱い、静電相互作用からd軌道分裂を説明するモデルである。

これは「なぜ5つのd軌道が分裂するのか」を理解するには非常に便利だが、実際の金属–酸素結合には共有結合性もある。

そこで、より現実的には分子軌道論を取り込んだ配位子場理論（Ligand Field Theory）を用いる。

つまり、

$$
\text{結晶場理論}
\rightarrow
\text{d軌道分裂を静電的に理解する近似}
$$

$$
\text{配位子場理論}
\rightarrow
\text{共有結合性まで含めて電子状態を考える}
$$

という関係にある。

エメラルドの精密な吸収エネルギーを計算する研究では、単純な結晶場模型だけでなく、量子化学計算や多電子状態を含む配位子場解析が使われる。

## 8　V³⁺でもエメラルドは緑になりうる

すべてのエメラルドがCr³⁺だけで着色しているわけではない。

産地によってはV³⁺が主要な発色要因になる。GIAが報告した中国・麻栗坡産のバナジウムに富むエメラルドでは、V³⁺に対応する吸収帯が約425〜432 nmおよび611〜644 nm付近に観測され、黄緑色の発色に寄与している。

したがって「エメラルド＝必ずCrだけで緑」と覚えるのは不正確である。

宝石の色は、母体結晶、置換元素、その濃度、結晶方位、他の不純物が組み合わさって決まる。

## 9　色彩検定の知識に戻す

色彩検定でまず必要なのは、物体色が光源と物体の分光特性によって決まるという考え方である。

エメラルドを例にすると、

$$
\text{白色光}
\rightarrow
\text{Cr}^{3+}\text{の電子遷移による選択吸収}
\rightarrow
\text{透過スペクトルの変形}
\rightarrow
\text{緑として知覚}
$$

という流れになる。

色彩検定では「特定の波長が吸収される」ところまで理解すればよい。しかし、その「なぜ特定波長なのか」を大学レベルまで掘ると、

$$
\text{結晶構造}
\rightarrow
\text{結晶場・配位子場}
\rightarrow
\text{電子準位}
\rightarrow
\text{吸収スペクトル}
\rightarrow
\text{色}
$$

まで一本の因果関係で説明できる。

## 参考資料

- 色彩検定協会「色彩検定とは・各級の目安」 https://www.aft.or.jp/pages/feature/level
- 色彩検定協会「教えて！色彩先生」 https://www.aft.or.jp/shikisaigakuen/
- GIA, *Three-Phase Inclusions in Emerald and Their Impact on Origin Determination* https://www.gia.edu/gems-gemology/summer-2014-saeseaw-three-phase-inclusions-emerald
- GIA, *Emeralds in Catherine de’ Medici’s Pendant: An Unexpected Geographic Origin* https://www.gia.edu/gems-gemology/spring-2025-catherine-de-medici-emerald-pendant
- GIA, *Unique Vanadium-Rich Emerald from Malipo, China* https://www.gia.edu/gems-gemology/fall-2019-emerald-from-malipo-china
- Atanasov et al., *First-Principles Study of Optical Absorption Energies, Ligand Field and Spin-Hamiltonian Parameters of Cr³⁺ Ions in Emeralds*, Inorganic Chemistry 61 (2022), 178–192. https://doi.org/10.1021/acs.inorgchem.1c02650
- Chemistry LibreTexts, *Crystal Field Theory* https://chem.libretexts.org/Bookshelves/Inorganic_Chemistry/Supplemental_Modules_and_Websites_(Inorganic_Chemistry)/Crystal_Field_Theory/Crystal_Field_Theory
- Chemistry LibreTexts, *Tanabe-Sugano Diagrams* https://chem.libretexts.org/Ancillary_Materials/Reference/Reference_Tables/Spectroscopic_Reference_Tables/Tanabe-Sugano_Diagrams
