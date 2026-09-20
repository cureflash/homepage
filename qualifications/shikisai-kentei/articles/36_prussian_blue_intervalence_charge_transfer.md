# プルシアンブルーはなぜ青いのか――混合原子価と電荷移動遷移

プルシアンブルーは、鉄を含む無機顔料である。青く見える直接の理由は「青い成分を発しているから」ではなく、可視光のうち赤側を強く吸収し、残った光が反射・散乱して眼に届くためである。

色彩検定3級では「光の性質と色」「減法混色」、2級では「光の性質と色」を扱う。ここでは、その一段下にある原因――なぜ一つの顔料が赤付近の光を強く吸収できるのか――を、混合原子価、シアノ架橋、電荷移動遷移、分光反射まで掘り下げる。

## 1　プルシアンブルーは「鉄が二つの酸化状態を持つ」顔料

プルシアンブルーは鉄とシアン化物からなる三次元配位骨格を持つ。単一の理想化学式だけで全試料を表すのは難しく、対イオン、水、欠陥の量によって組成が変わる。

代表的には、カリウムを含む型を

$$
\mathrm{KFe^{III}[Fe^{II}(CN)_6]}
$$

欠陥と水を多く含む型を概略

$$
\mathrm{Fe^{III}_4[Fe^{II}(CN)_6]_3\cdot xH_2O}
$$

のように表す。

重要なのは、同じ結晶骨格の中に

$$
\mathrm{Fe^{II}}
\quad\text{と}\quad
\mathrm{Fe^{III}}
$$

が共存することである。このように同種元素が異なる酸化状態で共存する物質を、混合原子価化合物と呼ぶ。

## 2　シアン化物イオンが二つの鉄をつなぐ

骨格中では、シアン化物イオン $\mathrm{CN^-}$ が鉄イオンどうしを架橋する。

模式的には

$$
\mathrm{Fe^{II}-C\equiv N-Fe^{III}}
$$

という単位を考えることができる。

炭素側に結合するFeと窒素側に結合するFeでは、周囲の配位環境と電子状態が異なる。したがって、二つの鉄は「同じ鉄原子がただ隣り合っている」のではなく、電子を受け渡しできる異なるサイトとして働く。

ここが、エメラルド中のCr³⁺で扱った単一金属中心のd-d遷移との大きな違いである。

## 3　青色の主因は「サイト間の電子移動」

プルシアンブルーの可視吸収では、Fe²⁺側からFe³⁺側へ電子が移る電荷移動遷移が重要である。

概念的には

$$
\mathrm{Fe^{II}-CN-Fe^{III}}+h\nu
\rightarrow
\mathrm{Fe^{III}-CN-Fe^{II}}
$$

と書ける。

これは、酸化状態の異なる二つの金属サイト間で起こるため、intervalence charge transfer（IVCT、原子価間電荷移動）と呼ばれる。

ここで重要なのは、「電子がずっと片方から片方へ移住してしまう」という意味ではないことである。光吸収によって電子状態が励起され、その遷移に対応するエネルギーの光が吸収される。

## 4　なぜ赤い光が吸収されるのか

プルシアンブルーには、試料条件によって位置は変わるが、およそ700 nm付近を中心とする幅広い吸収帯が知られている。Nature Communicationsで報告されたプルシアンブルーナノ粒子でも、500〜800 nmに広がり、約700 nmに最大を持つ吸収がFe(III)–Fe(II)間のIVCTに帰属されている。

光子エネルギーは

$$
E=h\nu=\frac{hc}{\lambda}
$$

なので、$\lambda=700\ \mathrm{nm}$ とすると

$$
E\approx1.77\ \mathrm{eV}
$$

である。

波数で書けば

$$
\tilde\nu=\frac{1}{\lambda}
\approx1.43\times10^4\ \mathrm{cm^{-1}}
$$

となる。

つまり、Fe²⁺側の占有電子状態とFe³⁺側の受容可能な電子状態の間に、この程度のエネルギー差をもつ強い遷移があるため、赤〜近赤外側の光が大きく削られる。

## 5　なぜd-d遷移より強く色づきやすいのか

遷移金属イオンの色ではd-d遷移も重要だが、d-d遷移には対称性による選択則の制約があり、吸収が比較的弱い場合が多い。

一方、電荷移動遷移では電子密度そのものが異なる金属サイト間を大きく移動するため、遷移双極子モーメントが大きくなりやすい。

遷移強度は概念的に

$$
I_{if}\propto
\left|
\langle\psi_f|\hat{\mu}|\psi_i\rangle
\right|^2
$$

で表される。

プルシアンブルーの約700 nm帯については、分光電気化学測定から数千〜約1万 $\mathrm{L\,mol^{-1}\,cm^{-1}}$ 規模の大きなモル吸光係数が報告されている。これは、単なる弱いd-d吸収では説明しにくい強い発色が電荷移動遷移に由来することと整合する。

## 6　「赤を吸う」から青く見える

赤い光を強く吸収することと、青く見えることを混同してはいけない。

顔料へ白色光が当たると、波長ごとに

- 吸収される光
- 粒子内部・粒子間で散乱される光
- 表面から反射される光

に分かれる。

プルシアンブルーでは赤側の光がIVCTで強く吸収される。その結果、反射光では相対的に青〜青緑側の成分が多く残り、眼には青として知覚される。

色彩検定でいう減法混色は、まさにこの「入射光から一部の波長成分を吸収によって差し引く」という現象を利用している。

## 7　顔料は溶液と違い、「散乱」も同時に考える

溶液中の色素なら、Beer–Lambert則

$$
A(\lambda)=\varepsilon(\lambda)cl
$$

を使って透過吸収を扱いやすい。

しかし顔料は微粒子を含む不均一系であり、吸収だけでなく散乱が重要になる。そのため、厚い不透明な顔料層では、Kubelka–Munk理論を使って分光反射率から吸収と散乱の比を近似的に扱うことがある。

無限厚試料の分光反射率を $R_\infty(\lambda)$ とすると、

$$
F(R_\infty)
=
\frac{(1-R_\infty)^2}{2R_\infty}
\approx
\frac{K}{S}
$$

と書ける。

ここで

- $K$：吸収係数
- $S$：散乱係数

である。

したがって、同じ化学種でも粒子径や凝集状態が変わって $S$ が変化すれば、見かけの明度や彩度も変わりうる。

「分子・結晶がどの波長を吸うか」と「顔料粒子がどのように光を散乱するか」は別の階層の問題であり、実際の顔料色では両者が重なっている。

## 8　Fe²⁺とFe³⁺の両方が必要である

IVCTが成立するには、電子を渡せるサイトと受け取れるサイトが必要である。

プルシアンブルーでは

$$
\mathrm{Fe^{II}}
\leftrightarrow
\mathrm{Fe^{III}}
$$

という混合原子価状態がその条件を作る。

電気化学的にFe³⁺側が還元され、Fe²⁺が増えて混合原子価性が失われると、約700 nmのIVCT吸収は弱くなり、青色も大きく変化する。この酸化還元に伴う色変化は、プルシアンブルーが電気化学材料として研究される理由の一つでもある。

つまり色は単なる「元素の種類」ではなく、

$$
\text{元素}
+\text{酸化数}
+\text{配位構造}
+\text{サイト間相互作用}
$$

で決まる。

## 9　シアノ架橋は電子移動の経路でもある

Fe²⁺とFe³⁺が十分離れて完全に独立していれば、サイト間電荷移動は弱くなる。

プルシアンブルーでは、$\mathrm{CN^-}$ が両サイトをつなぎ、金属d軌道と配位子軌道の混成を通じて電子的結合を作る。

単純化すると、IVCTの吸収エネルギーと強度は

- Fe²⁺側とFe³⁺側の電子準位差
- シアノ架橋を通じた電子結合の強さ
- 格子歪み
- 周囲の水分子
- 対イオン
- 欠陥

に依存する。

実際、DFT研究では、骨格内のアルカリ金属イオンや格子歪みによってプルシアンブルーのcharge-transfer band gapが変化しうることが示されている。

したがって「700 nmを必ず吸収する固定分子」と考えるより、結晶骨格全体の電子構造が幅を持った吸収帯を作ると理解する方がよい。

## 10　d-d遷移・配位子金属間電荷移動・IVCTを区別する

遷移金属化合物の可視吸収には複数の機構がある。

### d-d遷移

同じ金属イオン上でd軌道間を遷移する。

$$
\mathrm{M}(d_i)\rightarrow\mathrm{M}(d_j)
$$

エメラルド中のCr³⁺は、この分類が中心だった。

### 配位子→金属電荷移動（LMCT）

配位子から金属へ電子密度が移る。

$$
\mathrm{L}\rightarrow\mathrm{M}
$$

### 金属→配位子電荷移動（MLCT）

金属から配位子へ電子密度が移る。

$$
\mathrm{M}\rightarrow\mathrm{L}
$$

### 原子価間電荷移動（IVCT）

異なる酸化状態を持つ金属サイト間で電子密度が移る。

$$
\mathrm{M^{n+}}\rightarrow\mathrm{M^{(n+1)+}}
$$

プルシアンブルーの強い青色を理解する中心は、このIVCTである。

## 11　「顔料の色」を化学から測色へつなぐ

化学的には、IVCTが分光吸収特性 $K(\lambda)$ を作る。

顔料層では散乱 $S(\lambda)$ も加わり、最終的に分光反射率

$$
R(\lambda)
$$

が決まる。

さらに照明の分光分布を $E(\lambda)$ とすれば、眼へ届く光は概念的に

$$
L(\lambda)\propto E(\lambda)R(\lambda)
$$

となる。

そのスペクトルが錐体やCIE等色関数で積分され、三刺激値や知覚色へ変換される。

したがって一つの顔料色は、

$$
\text{酸化数・電子構造}
\rightarrow
\text{電荷移動吸収}
\rightarrow
\text{吸収・散乱}
\rightarrow
\text{分光反射率}
\rightarrow
\text{三刺激値}
\rightarrow
\text{色知覚}
$$

という多段階の因果関係として理解できる。

## 12　色彩検定の知識に戻す

色彩検定で必要なのは、顔料が特定波長を吸収し、残った反射光によって物体色が見えること、そして減法混色では吸収が重なって反射光のスペクトルが変わることである。

プルシアンブルーを大学レベルまで掘ると、その「特定波長を吸収する理由」が

$$
\mathrm{Fe^{II}/Fe^{III}\ mixed\ valence}
\rightarrow
\mathrm{CN^-\ bridge}
\rightarrow
\mathrm{IVCT}
\rightarrow
\mathrm{red\ absorption}
\rightarrow
\mathrm{blue\ reflectance}
$$

と説明できる。

エメラルドでは「一つの金属イオンのd軌道分裂」が中心だったのに対し、プルシアンブルーでは「異なる原子価を持つ金属サイト間の電子移動」が中心になる。この違いを押さえると、無機物の発色を一つの機構だけで説明できない理由が見えてくる。

## 参考資料

- 色彩検定協会「公式テキスト3級目次」https://www.aft.or.jp/images/text_of-3st-grade_mokuji.pdf
- 色彩検定協会「公式テキスト2級目次」https://www.aft.or.jp/images/text_of-2st-grade_mokuji.pdf
- 色彩検定協会「色彩検定とは・各級の目安」https://www.aft.or.jp/pages/feature/level
- K. Itaya, I. Uchida, *Nature of intervalence charge-transfer bands in Prussian blues*, Inorganic Chemistry 25 (1986), 389–392. https://doi.org/10.1021/ic00223a034
- J. C. Wojdeł, S. T. Bromley, F. Illas, J. C. Jansen, *Band Gap Variation in Prussian Blue via Cation-Induced Structural Distortion*, Journal of Physical Chemistry B 111 (2007), 2032–2039. https://doi.org/10.1021/jp064517u
- Y. Li et al., *Determining the depth of surface charging layer of single Prussian blue nanoparticles with pseudocapacitive behaviors*, Nature Communications 13 (2022), 2964. https://doi.org/10.1038/s41467-022-30058-4
- F. Busquets-Fité et al., *Prussian Blue Nanoparticles as a Versatile Photothermal Tool*, Molecules 23 (2018), 1173. https://doi.org/10.3390/molecules23051173
- S. J. England, P. Kathirgamanathan, D. R. Rosseinsky, *Perturbation calculation from the charge-transfer spectrum data of intervalence site-transfer D.C. conductivity in Prussian Blue*, Journal of the Chemical Society, Chemical Communications (1980), 840–841. https://doi.org/10.1039/C39800000840
