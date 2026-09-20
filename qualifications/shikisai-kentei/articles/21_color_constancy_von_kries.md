# なぜ照明が変わっても物体の色が同じに見えるのか――色恒常性とvon Kries順応

昼の窓辺で見た白い紙と、電球色の照明の下で見た白い紙では、眼に入る光のスペクトルはかなり違う。それでも私たちは、多くの場合どちらも「白い紙」と認識する。

この性質を色恒常性（color constancy）という。

色彩検定3級では「光と色」の「照明と色の見え方」、2級では「光の性質と色」「視覚系の構造と色」を扱う。本記事は、その背後にある問題を、分光反射率、錐体応答、色順応、von Kriesモデル、照明推定まで使って大学レベルで考える。

重要なのは、色恒常性を「照明の色を完全に無視できる機能」と考えないことである。実際の色恒常性は不完全であり、色順応だけでなく、周囲の色、物体間の関係、照明の手がかりなど複数の情報に支えられている。

## 1　眼に届く光は「照明×物体」で決まる

物体表面から眼へ届く光を考える。

照明の分光分布を $E(\lambda)$、物体の分光反射率を $\rho(\lambda)$ とすると、単純化した拡散反射では、眼へ届く分光放射輝度 $L(\lambda)$ は

$$
L(\lambda)\propto E(\lambda)\rho(\lambda)
$$

と書ける。

Lambert面を仮定し、入射照度と観察方向の幾何条件まで固定すれば

$$
L(\lambda)=\frac{E(\lambda)\rho(\lambda)}{\pi}
$$

という形になる。

つまり眼が直接受け取るのは物体固有の $\rho(\lambda)$ ではなく、

$$
\text{照明}\times\text{反射率}
$$

の積である。

同じ赤い紙でも、青成分の少ない光源の下では、眼へ返ってくる短波長成分はさらに少なくなる。物体が変わっていなくても、網膜刺激は変化する。

## 2　なぜ色恒常性は難しい問題なのか

観測された光

$$
L(\lambda)=E(\lambda)\rho(\lambda)
$$

だけから、$E(\lambda)$ と $\rho(\lambda)$ を一意に分離することはできない。

たとえば任意の正の関数 $a(\lambda)$ に対して

$$
E'(\lambda)=a(\lambda)E(\lambda)
$$

$$
\rho'(\lambda)=\frac{\rho(\lambda)}{a(\lambda)}
$$

とすれば、条件を満たす範囲では

$$
E'(\lambda)\rho'(\lambda)=E(\lambda)\rho(\lambda)
$$

となる。

したがって、一つのスペクトルだけを見ても「これは赤い物体を白色光で照らしたのか、それとも別の物体を赤みの強い光で照らしたのか」を完全には区別できない。

さらに人間の視覚はスペクトルそのものを測っているわけではない。L・M・S錐体によって、おおむね3つの応答へ圧縮される。

各錐体応答は

$$
R_i=\int E(\lambda)\rho(\lambda)q_i(\lambda)\,d\lambda
$$

で表せる。ここで $q_i(\lambda)$ は各錐体の分光感度、$i=L,M,S$ である。

高次元の照明スペクトルと反射率スペクトルから得られる情報が3つの値に圧縮されるため、逆問題はさらに強く不定になる。

色恒常性は、単純な測定問題ではなく「限られた感覚情報から物体の性質を推定する問題」である。

## 3　色恒常性とは何を一定にしているのか

色恒常性は、照明スペクトルが変化しても物体の表面色が比較的安定して知覚される性質を指す。

しかし、「何が一定に見えるか」は実験課題によって異なる。

研究ではしばしば、

- 色相・彩度が同じに見えるか
- 同じ物体表面に見えるか
- 変化が照明によるものか物体によるものか判断できるか

が区別される。

Reeves、Amano、Fosterの研究では、同じ場面でも「色相と彩度が同じか」と「同じ物体材料に見えるか」で恒常性の程度が異なった。

つまり色恒常性は、単一の知覚値が完全固定される現象ではない。

## 4　最も単純な補正――色順応

照明が赤みを帯びた環境に長くいると、その赤みは次第に目立ちにくくなる。このような感度調整を色順応（chromatic adaptation）という。

直感的には、強く刺激され続けている錐体系の感度を下げ、弱く刺激されている系の感度を相対的に上げる方向に働く。

L・M・S錐体応答を

$$
\mathbf{r}=\begin{bmatrix}L\\M\\S\end{bmatrix}
$$

とし、順応後の応答を

$$
\mathbf{r}'=
\begin{bmatrix}
g_L&0&0\\
0&g_M&0\\
0&0&g_S
\end{bmatrix}
\mathbf{r}
$$

と書く。

このように各チャネルの利得を独立に変える考え方が、von Kries型順応の基本である。

## 5　von Kriesモデル――「白」を基準に各錐体を割り算する

順応している照明の下で白色表面を見たときの錐体応答を

$$
\mathbf{w}=\begin{bmatrix}L_w\\M_w\\S_w\end{bmatrix}
$$

とする。

もっとも単純なvon Kriesモデルでは、各錐体の利得を

$$
g_L\propto\frac{1}{L_w},\qquad
g_M\propto\frac{1}{M_w},\qquad
g_S\propto\frac{1}{S_w}
$$

と考える。

すると、任意の物体の順応後応答は概念的に

$$
\tilde{L}=\frac{L}{L_w},\qquad
\tilde{M}=\frac{M}{M_w},\qquad
\tilde{S}=\frac{S}{S_w}
$$

となる。

これは「照明そのものの絶対的な錐体刺激」よりも、基準白に対する相対値を見る操作である。

照明の変化が物体と基準白の両方へ似た割合で影響するなら、この比を取ることで照明変化の影響をかなり打ち消せる。

## 6　2つの照明条件を変換する

照明Aの基準白に対する錐体応答を

$$
\mathbf{w}_A=
\begin{bmatrix}L_A\\M_A\\S_A\end{bmatrix}
$$

照明Bの基準白を

$$
\mathbf{w}_B=
\begin{bmatrix}L_B\\M_B\\S_B\end{bmatrix}
$$

とする。

照明Aの下の錐体応答を、照明Bに順応した状態へ対応づける最も単純な変換は

$$
\mathbf{r}_B=
\begin{bmatrix}
L_B/L_A&0&0\\
0&M_B/M_A&0\\
0&0&S_B/S_A
\end{bmatrix}
\mathbf{r}_A
$$

と書ける。

対角行列になっていることが重要である。

つまりvon Kriesモデルは、L・M・Sなどのセンサー空間で各軸を独立に伸縮するモデルである。

線形代数的には

$$
\text{回転やせん断ではなく、各軸方向のスケーリング}
$$

である。

## 7　XYZではそのまま対角補正しない

実務的な色順応変換では、XYZ三刺激値を直接独立に割り算するのではなく、まず錐体応答に近いセンサー空間へ変換することが多い。

XYZベクトルを

$$
\mathbf{x}_{XYZ}=
\begin{bmatrix}X\\Y\\Z\end{bmatrix}
$$

とし、センサー空間への変換行列を $M$ とすると、

$$
\mathbf{x}_c=M\mathbf{x}_{XYZ}
$$

である。

そこでセンサー空間でvon Kries型の対角変換

$$
D=
\begin{bmatrix}
d_1&0&0\\
0&d_2&0\\
0&0&d_3
\end{bmatrix}
$$

を行い、XYZへ戻すと

$$
\mathbf{x}'_{XYZ}=M^{-1}DM\mathbf{x}_{XYZ}
$$

となる。

現代のchromatic adaptation transform（CAT）は、この考え方をより精密なセンサー空間、順応率、観察条件などへ拡張している。

CIECAM16も、色の見えを予測する過程に色順応変換を含む。

## 8　von Kriesモデルだけでは完全な色恒常性にならない

von Kries型順応は非常に重要だが、万能ではない。

理由の一つは、錐体の分光感度が狭いデルタ関数ではなく、広い波長範囲で重なっていることである。

もし各錐体が特定の一波長だけを測る理想センサーなら、照明変化を単純なチャネル利得として扱いやすい。しかし実際の錐体応答は

$$
R_i=\int E(\lambda)\rho(\lambda)q_i(\lambda)\,d\lambda
$$

という積分である。

ここで照明 $E(\lambda)$ が変わると、その影響は物体の $\rho(\lambda)$ によって異なる。

一般には

$$
\frac{R_{i,B}}{R_{i,A}}
$$

が、すべての物体で同じ一定値になるとは限らない。

WortheyとBrillは、受容器感度の広がりと重なりが、単純なvon Kries変換による完全な恒常性を制限することを示している。

つまり

$$
\text{各チャネルを一定倍率で補正するだけ}
$$

では、あらゆる反射率・あらゆる照明について完全に元の見えを再現できるわけではない。

## 9　視覚系は周囲の情報も利用する

色恒常性は色順応だけではなく、場面全体の情報にも依存する。

一つの物体だけを暗い背景に孤立させて提示すると、照明を推定する手がかりが少なくなる。一方、複数の色の物体が同じ照明を受けている場面では、共通して起こる色の変化から照明を推定しやすくなる。

BrainardとMaloneyは、表面色知覚を「眼に入る光」から「照明と表面反射率」を推定する問題として整理している。

概念的には、視覚系が求めたいのは

$$
P(\rho\mid L)
$$

である。

Bayes的に書けば

$$
P(\rho,E\mid L)
\propto
P(L\mid \rho,E)P(\rho,E)
$$

となる。

ここで、自然界でありそうな照明、物体反射率、周辺の色分布、ハイライト、陰影などが事前情報や手がかりになる。

脳がこの式をそのまま計算しているという意味ではない。色恒常性が「入力スペクトルをそのまま色へ変換する」だけでは説明できず、場面についての推定問題として理解できる、という数学的表現である。

## 10　色順応と色恒常性は同じではない

この二つは混同しやすい。

色順応は、持続する照明環境に応じて視覚系の感度が変化する過程である。

色恒常性は、その結果として物体の表面色が照明変化に対して比較的安定して知覚される現象である。

したがって関係は

$$
\text{色順応}
\subset
\text{色恒常性を支える機構の一部}
$$

と考える方がよい。

色恒常性には、少なくとも

- 錐体・反対色経路の順応
- 周囲との相対比較
- 空間的な色分布
- 照明についての手がかり
- 物体・材質についての推定

が関わる。

## 11　なぜ白い紙は電球色でも白く見えるのか

電球色の照明では、白い紙から眼へ届く光も長波長側に偏る。

しかし同じ照明は周囲の壁、机、他の物体にも共通して作用する。視覚系はその共通成分へ順応し、周囲の相対関係も利用する。

その結果、照明に由来する成分の一部が差し引かれ、紙の表面反射特性に対応する知覚が比較的安定する。

概念的には

$$
\text{網膜刺激}
=
\text{照明}\times\text{反射率}
$$

から

$$
\text{照明の影響を推定・正規化}
$$

し、

$$
\text{表面色の比較的安定な表現}
$$

を作る流れである。

ただし補正は完全ではない。極端な有色照明、周囲の手がかりが乏しい条件、順応時間が短い条件では、物体色の見えは大きく変化する。

Uchikawaらの実験では、周囲の色手がかりと照明への事前順応を増やすことで、表面色の恒常性が大きく改善した。

## 12　同時対比との違い

同時色対比では、周囲との局所的な差によって対象色が周囲から離れる方向へ変化して見える。

色恒常性では、周囲との関係が照明変化を補正し、物体色を安定させる方向に使われる。

同じ「周囲との比較」を使う処理でも、現象としては異なる。

- 同時色対比：周囲との差を強調する
- 色恒常性：照明由来の共通変化を抑える

実際の神経処理では両者を完全に独立な回路へ分けられるわけではなく、順応、反対色処理、空間文脈が重なっている。

## 13　色彩検定で押さえるところ

色彩検定3級では、公式テキストの「光と色 → 照明と色の見え方」と、「眼のしくみ → 網膜における光の処理」が直接の接続点になる。

2級では「光と色 → 視覚系の構造と色」「照明」が接続点になる。

試験対策としては、まず

- 物体の見えは照明によって変わる
- 人間の視覚は照明条件へ順応する
- 物体色の知覚は眼に入る光だけではなく観察条件に依存する

という関係を押さえる。

大学レベルでは、それを

$$
L(\lambda)=E(\lambda)\rho(\lambda)
$$

$$
R_i=\int E(\lambda)\rho(\lambda)q_i(\lambda)d\lambda
$$

$$
\mathbf{r}'=D\mathbf{r}
$$

という3段階で理解するとよい。

色恒常性とは、物理的に変化する網膜刺激から、比較的安定した「物体の色」を構成する視覚系の推定機構である。

## 参考資料

- [色彩検定協会「公式テキスト3級目次」](https://www.aft.or.jp/images/text_of-3st-grade_mokuji.pdf)
- [色彩検定協会「公式テキスト2級目次」](https://www.aft.or.jp/images/text_of-2st-grade_mokuji.pdf)
- [Brainard & Maloney, Surface Color Perception and Equivalent Illumination Models, Journal of Vision, 2011](https://pmc.ncbi.nlm.nih.gov/articles/PMC3249236/)
- [Smithson, Sensory, computational and cognitive components of human colour constancy, Philosophical Transactions of the Royal Society B, 2005](https://pmc.ncbi.nlm.nih.gov/articles/PMC1609194/)
- [Reeves, Amano & Foster, Color Constancy: Phenomenal or Projective?, Perception & Psychophysics, 2008](https://pmc.ncbi.nlm.nih.gov/articles/PMC2430609/)
- [Uchikawa, Kuriki & Tone, Limitations of surface-color and apparent-color constancy, JOSA A, 1996](https://pubmed.ncbi.nlm.nih.gov/8755788/)
- [West & Brill, Necessary and sufficient conditions for Von Kries chromatic adaptation to give color constancy, Journal of Mathematical Biology, 1982](https://pubmed.ncbi.nlm.nih.gov/7153671/)
- [Worthey & Brill, Heuristic analysis of von Kries color constancy, JOSA A, 1986](https://pubmed.ncbi.nlm.nih.gov/3772633/)
- [CIE 109-1994, A method of predicting corresponding colours under different chromatic and illuminance adaptations](https://www.cie.co.at/publications/method-predicting-corresponding-colours-under-different-chromatic-and-illuminance)
- [CIE 248:2022, The CIE 2016 Colour Appearance Model for Colour Management Systems: CIECAM16](https://www.cie.co.at/publications/cie-2016-colour-appearance-model-colour-management-systems-ciecam16)
