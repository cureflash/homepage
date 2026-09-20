# 有機色素はなぜ色づくのか――π共役とHOMO–LUMOギャップ

色素分子は、もともと「赤い」「青い」という性質を持っているわけではない。白色光のうち一部の波長を分子が選択的に吸収し、吸収されずに残った光が眼へ届くことで色が見える。

色彩検定3級では「光の性質と色」「減法混色」を学ぶ。ここでは、その一段下にある原因――なぜ有機分子が特定波長だけを吸収できるのか――を、π結合、分子軌道、HOMO–LUMOギャップ、電子遷移まで掘り下げる。

## 1　有機色素の色は「電子のエネルギー差」から始まる

分子中の電子は、任意のエネルギーを連続的に取れるわけではない。分子軌道ごとに許されたエネルギー準位があり、光子のエネルギーが二つの準位差に対応すると電子遷移が起こりうる。

光子のエネルギーは

$$
E=h\nu=\frac{hc}{\lambda}
$$

である。したがって、基底状態と励起状態のエネルギー差を $\Delta E$ とすれば、吸収波長は概念的に

$$
\Delta E\approx\frac{hc}{\lambda}
$$

で結びつく。

エネルギー差が大きいほど短波長、エネルギー差が小さいほど長波長の光を吸収する。

可視光を吸収する色素を理解するには、分子構造が $\Delta E$ をどう変えるかを見る必要がある。

## 2　σ結合とπ結合は何が違うのか

炭素―炭素二重結合は、1本のσ結合と1本のπ結合からなる。

σ結合では、原子軌道が原子核を結ぶ軸に沿って重なり合う。一方、π結合では隣り合うp軌道が横向きに重なり、分子平面の上下に電子密度を持つ。

二つのp軌道からは、低エネルギーの結合性軌道 $\pi$ と、高エネルギーの反結合性軌道 $\pi^*$ ができる。

最も単純な電子励起は

$$
\pi\rightarrow\pi^*
$$

である。

ただし孤立した二重結合では、このエネルギー差は大きく、吸収は主として紫外域に現れる。そのため単純なアルケンは通常、可視光に対して無色に近い。

## 3　共役するとπ電子が分子全体へ広がる

単結合と二重結合が交互に並ぶ

$$
-\mathrm{C=C-C=C-C=C}-
$$

のような構造を、共役系と呼ぶ。

共役系では隣接するp軌道が連続的に重なり、π電子を一つの二重結合だけに局在させる近似が悪くなる。π電子は複数原子にまたがる分子軌道を占有する。

その結果、孤立二重結合を何本も別々に置いた場合とは異なる一組の分子軌道準位が形成される。

この「π電子の非局在化」が、共役の長さと吸収波長を結びつける基本である。

## 4　Hückel分子軌道法で共役鎖を見る

線状の共役系を非常に単純化し、各炭素から1個ずつp軌道を取り出すHückel分子軌道法を考える。

$p$軌道が $N$ 個ある線状共役系では、近似的なπ分子軌道エネルギーは

$$
E_k=\alpha+2\beta\cos\left(\frac{k\pi}{N+1}\right),
\qquad k=1,2,\ldots,N
$$

と書ける。

ここで

- $\alpha$：各p軌道の基準エネルギー
- $\beta$：隣接p軌道間の相互作用を表す積分（通常は負）
- $N$：共役に参加するp軌道数

である。

偶数個のπ電子を持つ単純なポリエンでは、低い準位から電子が2個ずつ入り、最高被占軌道がHOMO、最低空軌道がLUMOになる。

$$
\Delta E_{\mathrm{HL}}=E_{\mathrm{LUMO}}-E_{\mathrm{HOMO}}
$$

共役鎖が長くなって $N$ が増えると準位の本数が増え、HOMOとLUMOの間隔は一般に狭くなる。

したがって

$$
N\uparrow
\quad\Rightarrow\quad
\Delta E_{\mathrm{HL}}\downarrow
\quad\Rightarrow\quad
\lambda_{\mathrm{abs}}\uparrow
$$

という傾向が生じる。

これが「共役が長いほど長波長側を吸収しやすい」という現象の量子化学的な骨格である。

## 5　なぜ共役が十分長いと色が見えるのか

単純な共役系では、共役を長くするほどπ→π*遷移の吸収極大が長波長側へ移る。

有機化学の代表例では、1,3-ブタジエンの吸収は約217 nm、1,3,5-ヘキサトリエンでは約258 nmに現れる。どちらもまだ紫外域であり、可視光をほとんど吸収しない。

しかし共役系がさらに長くなると、HOMO–LUMO間隔が可視光の光子エネルギーに近づく。β-カロテンのような長い共役ポリエンでは青色域の光を吸収し、残った黄〜赤側の成分が多く眼へ届くため橙色に見える。

重要なのは

> 共役結合そのものが色なのではなく、共役によって電子準位間隔が変わり、可視域の光を吸収できるようになる

という因果関係である。

## 6　吸収した波長と「見える色」は同じではない

色素が500 nm付近の光を強く吸収したとしても、その物質が500 nmの色に見えるわけではない。

透過物体なら

$$
I(\lambda)=I_0(\lambda)T(\lambda)
$$

反射物体なら

$$
I(\lambda)=I_0(\lambda)R(\lambda)
$$

で眼へ届く光が決まる。

色素は吸収によって特定波長を「引き算」する。したがって観察される色は、吸収された光ではなく、残った分光分布を視覚系が処理した結果である。

これが色彩検定で扱う減法混色の物理・化学的な土台になる。

## 7　色の濃さは「どこを吸うか」だけでは決まらない

電子遷移には、起こりやすい遷移と起こりにくい遷移がある。

量子力学では、光との相互作用による遷移の強さは、概念的には遷移双極子モーメント

$$
\boldsymbol{\mu}_{if}
=
\langle\psi_f|\hat{\boldsymbol{\mu}}|\psi_i\rangle
$$

の大きさに関係し、吸収強度は

$$
I_{if}\propto |\boldsymbol{\mu}_{if}|^2
$$

のように表される。

したがって、エネルギー差が可視光に一致していても、遷移が強く許容される場合と、選択則によって弱くなる場合がある。

溶液の実測では、Beer–Lambert則

$$
A(\lambda)=\varepsilon(\lambda)cl
$$

に現れるモル吸光係数 $\varepsilon(\lambda)$ が、波長ごとの吸収の強さを表す。

つまり色素の見え方には

1. どの波長を吸収するか
2. どれほど強く吸収するか

の両方が必要である。

## 8　発色団とは何か

IUPACはchromophore（発色団）を、あるスペクトル帯を生じさせる電子遷移がおおむね局在している原子または原子団として定義している。

有機色素では、長い共役系、芳香環、カルボニル基、アゾ基などが電子状態を作り、吸収帯に寄与する。

ただし「この官能基があるから必ずこの色」と単純に対応するわけではない。実際の吸収波長は、分子全体の共役、置換基、電荷状態、溶媒、立体配座によって変わる。

## 9　置換基が吸収を長波長側へ動かすことがある

共役系へ電子供与性基や電子求引性基を導入すると、HOMOやLUMOのエネルギーが変化し、吸収帯が移動することがある。

スペクトル帯が長波長側へ移ることを、IUPACではbathochromic shiftと呼ぶ。

$$
\lambda_{\max}\uparrow
\quad\Leftrightarrow\quad
\Delta E\downarrow
$$

である。

古典的な色素化学では、発色団に導入されて吸収を長波長化・強化する基を「助色団（auxochrome）」と呼ぶことがある。ただしIUPAC Gold Bookでは、この語はobsolete（旧用語）とされている。

現代的には、置換基が分子軌道エネルギー、電子密度、電荷移動性をどう変えるかとして考える方が一般的である。

## 10　HOMO–LUMOギャップだけでは実際の色を完全には予測できない

「共役が長いほどHOMO–LUMOギャップが小さくなる」という説明は重要だが、実際の吸収スペクトルを完全には決められない。

理由は、実在分子では

- 電子間反発
- 軌道の形と対称性
- 遷移選択則
- 振動準位との結合
- 溶媒との相互作用
- 分子のねじれや平面性
- プロトン化・脱プロトン化
- 分子間会合

などが効くためである。

特に共役系がねじれてp軌道の重なりが弱くなると、形式上二重結合が連続していても有効共役長は短くなる。

また、溶媒環境が変化するだけで吸収帯が移動するsolvent shiftも知られている。

したがって実際の色素設計では、単純Hückel模型は「なぜ共役で長波長化するのか」を理解する入口として使い、定量予測にはより高度な量子化学計算と実測スペクトルを用いる。

## 11　実際の食用色素でも構造と吸収は対応する

島津製作所のUV-Vis解説では、New Coccine（赤色102号）とBrilliant Blue FCF（青色1号）の分子構造と吸収スペクトルが比較されている。

いずれも大きな共役系を持ち、吸収ピークが可視域に現れる。New Coccineは主に青〜緑側を吸収するため赤く見え、Brilliant Blue FCFは黄〜赤寄りの光を強く吸収するため青く見える。

ここでも

$$
\text{分子構造}
\rightarrow
\text{電子準位}
\rightarrow
\text{吸収スペクトル}
\rightarrow
\text{眼へ届くスペクトル}
\rightarrow
\text{色知覚}
$$

という順序は同じである。

## 12　染料と顔料では同じ説明でよいのか

分子の電子遷移という出発点は共通するが、見え方は同じではない。

溶液中に分子として溶けた染料では、分子の吸収スペクトルが比較的直接に透過色へ反映される。

一方、顔料は粒子として分散して使われるため、吸収だけでなく粒径、屈折率差、多重散乱、結晶形、粒子間相互作用なども反射色に影響する。

したがって顔料の色を定量的に扱うには、分子軌道論だけでなく散乱を含む光学モデルが必要になる。

「色素分子が何を吸収するか」と「塗膜が最終的にどう見えるか」は別の階層の問題である。

## 13　色彩検定へ戻す

色彩検定3級の範囲では、まず次を理解すればよい。

- 白色光には複数の波長成分が含まれる
- 物質は波長ごとに異なる割合で光を吸収・反射・透過する
- 色素は特定波長を選択的に吸収する
- 減法混色は、色材が光の成分を吸収して減らすことで起こる

大学レベルまで掘り下げると、その「選択吸収」の原因は

$$
\text{分子構造}
\rightarrow
\pi\text{共役}
\rightarrow
\text{分子軌道準位}
\rightarrow
\Delta E
\rightarrow
\lambda_{\mathrm{abs}}
$$

まで追える。

有機色素の色は、化学構造を光のスペクトルへ変換する量子力学的な結果なのである。

## 参考資料

- 色彩検定協会「公式テキスト3級目次」 https://www.aft.or.jp/images/text_of-3st-grade_mokuji.pdf
- 色彩検定協会「色彩検定とは・各級の目安」 https://www.aft.or.jp/pages/feature/level
- IUPAC Gold Book, “chromophore” https://goldbook.iupac.org/terms/view/C01076
- IUPAC Gold Book, “bathochromic shift” https://goldbook.iupac.org/terms/view/B00618
- IUPAC Gold Book, “auxochrome” https://goldbook.iupac.org/terms/view/A00536
- IUPAC Gold Book, “solvent shift” https://goldbook.iupac.org/terms/view/S05761
- Chemistry LibreTexts, “Structure Determination in Conjugated Systems – Ultraviolet Spectroscopy” https://chem.libretexts.org/Courses/Nassau_Community_College/Organic_Chemistry_I_and_II/15%3A_Conjugated_Systems_Orbital_Symmetry_and_Ultraviolet_Spectroscopy/15.09%3A_Structure_Determination_in_Conjugated_Systems_-_Ultraviolet_Spectroscopy
- Chemistry LibreTexts, “Visible and Ultraviolet Spectroscopy” https://chem.libretexts.org/Bookshelves/Organic_Chemistry/Supplemental_Modules_(Organic_Chemistry)/Spectroscopy/Visible_and_Ultraviolet_Spectroscopy
- Shimadzu, “The Relationship Between UV-VIS Absorption and Structure of Organic Compounds” https://www.shimadzu.com/an/service-support/technical-support/technical-information/uv-vis/uv-ap/apl/index.html
