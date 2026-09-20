# NCSはなぜ「見え」を数で表せるのか――知覚的類似度を座標化する

色彩検定1級では、色彩学として測色や表色系を深く理解することが求められる。NCS（Natural Colour System）は、XYZのように光を測って得る三刺激値でも、PCCSのように配色操作を中心に設計された体系でもない。人が色を見たとき、「白・黒・赤・黄・緑・青のどれに、どの程度似て見えるか」を尺度化する知覚ベースの表色系である。

理系的に見ると、NCSの面白さは、色を物理量そのものではなく「知覚された類似度の座標」として表すところにある。固定した色相では、白み・黒み・色みの3成分が

$$
w+s+c=100
$$

という制約を満たすため、NCSのニュアンス三角形は数学的には2次元単体（2-simplex）として読める。

## 1　NCSは「光の混合比」ではなく「知覚の記述」である

XYZ表色系では、分光分布 $P(\lambda)$ から

$$
X=k\int P(\lambda)\bar{x}(\lambda)d\lambda
$$

$$
Y=k\int P(\lambda)\bar{y}(\lambda)d\lambda
$$

$$
Z=k\int P(\lambda)\bar{z}(\lambda)d\lambda
$$

を計算する。ここで $X,Y,Z$ は等色実験を基礎にした測色量であり、光のスペクトルから線形積分で得られる。

NCSは発想が異なる。NCS記号が表すのは、物体の分光反射率そのものでも、顔料の配合比でも、錐体応答の数値でもない。

基本思想は

$$
\text{物理刺激}\rightarrow\text{色知覚}\rightarrow\text{NCS記述}
$$

である。

ASTM E2970-22も、NCSを人間が色を見る仕組みに基づく色記述体系と位置づけ、NCS記号は「知覚された色」を記述するもので、顔料・光線・神経信号そのものには依存しないとしている。

したがってNCSをRGBのような「混ぜる量の座標」と考えるのは誤りである。

## 2　出発点は6つの elementary colours

NCSでは、知覚上の基本となる色として

- 白 $W$
- 黒 $S$
- 黄 $Y$
- 赤 $R$
- 青 $B$
- 緑 $G$

の6つを置く。

このうち有彩色4色は、ヘリングの反対色説に対応する。

$$
R\leftrightarrow G
$$

$$
Y\leftrightarrow B
$$

たとえば橙は「黄み」と「赤み」を同時に感じられるが、「赤み」と「緑み」を同時に含む固有色相としては知覚されない。同様に「黄み」と「青み」も反対関係になる。

ここで重要なのは、NCSが神経細胞の出力値を直接測定しているわけではないことである。NCSは反対色的な色知覚を心理物理学的・現象学的に記述する体系であり、網膜や外側膝状体の $L-M$、$S-(L+M)$ チャネルと数値的に同一ではない。

## 3　ニュアンス三角形は「和が100になる座標」である

固定した色相を1つ選ぶと、NCSではその色のニュアンスを

- blackness：黒み $s$
- whiteness：白み $w$
- chromaticness：色み $c$

で記述する。

これらは

$$
s+w+c=100
$$

を満たす。

さらに

$$
s\ge0,\qquad w\ge0,\qquad c\ge0
$$

である。

したがって許される点集合は

$$
\Delta^2=
\left\{(s,w,c)\mid s,w,c\ge0,\ s+w+c=100\right\}
$$

となる。これは3次元座標空間内の平面を正の領域で切り取った三角形、すなわち2-simplexである。

三角形の頂点は概念的に

$$
W=(0,100,0)
$$

$$
S=(100,0,0)
$$

$$
C=(0,0,100)
$$

である。

NCSの「ニュアンス三角形」は、単なる図ではなく「3成分の総和を100に固定した組成空間」と考えられる。

## 4　NCS記号の最初の4桁は何を表すのか

たとえば

$$
\mathrm{NCS\ S\ 2030-Y90R}
$$

という表記を考える。

`2030` の前半 `20` は黒み、後半 `30` は色みを表す。

したがって

$$
s=20
$$

$$
c=30
$$

である。

白みは直接書かれていないが、総和条件から

$$
w=100-s-c
$$

なので

$$
w=100-20-30=50
$$

となる。

つまりニュアンスだけを見れば

$$
(s,w,c)=(20,50,30)
$$

である。

このようにNCS記号は、三角形上の位置を2変数だけで指定している。3変数のうち1つが

$$
s+w+c=100
$$

で従属するため、独立変数は2つで十分だからである。

## 5　色相 `Y90R` は「90%の赤色光」という意味ではない

`Y90R` は黄 $Y$ と赤 $R$ の間にある色相で、「有彩色として感じられる成分のうち、赤への類似度が90%、黄への類似度が10%」という関係を表す。

色相内の比率を $p$ とすれば

$$
p=0.90
$$

として

$$
\frac{r}{y+r}=p
$$

$$
\frac{y}{y+r}=1-p
$$

と表せる。

さらにこの色の chromaticness が $c=30$ なら、知覚的成分として形式的に

$$
r=cp=30\times0.90=27
$$

$$
y=c(1-p)=30\times0.10=3
$$

と分解できる。

したがって先ほどの色は

$$
s+w+r+y=20+50+27+3=100
$$

となる。

ただしこれは赤色顔料27%、黄色顔料3%という配合式ではない。あくまで知覚的な elementary colour への類似度を表す。

## 6　色相環も「距離そのもの」ではない

NCSの有彩色相は

$$
Y\rightarrow R\rightarrow B\rightarrow G\rightarrow Y
$$

という円環を作る。

各区間では、隣り合う2つの elementary hue の比率で色相を表す。

たとえば

- `Y30R`：黄を基準に30%赤み
- `R20B`：赤を基準に20%青み
- `B40G`：青を基準に40%緑み
- `G50Y`：緑と黄が等しい比率

という読み方になる。

数学的には色相は円周上の1次元座標として扱えるが、NCSの数値差をそのまま知覚色差とみなしてはいけない。

たとえば

$$
|h_1-h_2|
$$

を計算しただけでは、CIELABの $\Delta E$ のような色差尺度にはならない。NCS色相目盛は「知覚属性を記述する順序体系」であり、全空間に単一のユークリッド距離が定義されているわけではない。

## 7　chromaticness と saturation は別物である

NCSでは chromaticness $c$ と saturation $m$ を区別する。

公式NCS資料では、彩度に相当する saturation は

$$
m=\frac{c}{c+w}
$$

と表される。

総和条件

$$
s+w+c=100
$$

を使えば

$$
m=\frac{c}{100-s}
$$

とも書ける。

たとえば

$$
4030-Y90R
$$

では

$$
s=40,\quad c=30,\quad w=30
$$

なので

$$
m=\frac{30}{30+30}=0.5
$$

となる。

一方

$$
6020-Y90R
$$

では

$$
s=60,\quad c=20,\quad w=20
$$

だから

$$
m=\frac{20}{20+20}=0.5
$$

となり、chromaticness は異なっても saturation は同じになる。

これは、$c$ が三角形内での「色みの絶対的な割合」を表すのに対し、$m$ は白みと色みの相対比を表すからである。

## 8　NCS色空間は「色相環×三角形」だが、単純な直積ではない

固定した色相ではニュアンスは三角形で表せる。色相自体は円環である。

そこで概念的には

$$
\text{NCS}\approx
\text{hue circle}\times\text{nuance triangle}
$$

と考えたくなる。

ただし厳密な直積ではない。無彩色軸では $c=0$ となるため、色相の違いが消えるからである。

つまり

$$
c=0
$$

では

$$
Y,R,B,G
$$

の区別は意味を失い、すべて白―灰―黒の軸へ収束する。

数学的には、色相方向の自由度が有彩色では存在するが、無彩色軸で縮退する空間とみなせる。

この構造は、円柱座標で半径 $r=0$ のとき角度 $\theta$ が意味を失うことに似ている。

## 9　NCSとXYZは何が違うのか

XYZは測色系であり、色刺激を線形空間の座標として表す。

$$
\mathbf{X}=
\begin{bmatrix}
X\\Y\\Z
\end{bmatrix}
$$

異なる光を加法混色する場合、三刺激値は

$$
\mathbf{X}_{1+2}=\mathbf{X}_1+\mathbf{X}_2
$$

と加算できる。

NCSでは一般に

$$
\mathbf{n}_{1+2}=\mathbf{n}_1+\mathbf{n}_2
$$

のような線形加算則は成立しない。

NCS記号は知覚的類似度だからである。

したがってNCSは線形ベクトル空間というより、知覚属性に基づく座標化・順序化された色空間と考える方が正確である。

## 10　ではNCSとCIELABは変換できないのか

「単純な線形変換ではない」が正しい。

ASTM E2970-22は、NCS記号とCIE三刺激値との対応・変換を扱っている。また同規格の補助計算資料では、D65、CIE 1931 2°標準観察者、拡散照明・8°受光系などの条件のもとで、NCSと

$$
L^*,a^*,b^*,X,Y,Z,x,y
$$

の対応を求める方法が示されている。

これは

$$
\text{NCS}=A\begin{bmatrix}X\\Y\\Z\end{bmatrix}
$$

という単一の3×3行列変換ではない。

NCSの座標は心理物理学的評価から構成された体系なので、CIE値との対応には実測色票、観察条件、経験的関係が必要になる。

つまり

$$
\text{分光反射率}
\rightarrow XYZ
\rightarrow CIELAB
\rightarrow \text{NCS対応値}
$$

という経路は作れるが、最後の写像は単なる基底変換ではない。

## 11　NCSは「神経科学の反対色チャネル」そのものではない

NCSはヘリングの反対色説を重要な理論背景としている。

現代神経科学でも、錐体信号から概念的に

$$
L-M
$$

$$
S-(L+M)
$$

のような反対色チャネルが形成されることが知られている。

しかし

$$
\text{NCS redness}\neq L-M
$$

$$
\text{NCS yellowness}\neq L+M-S
$$

と考えるべきである。

神経系では複数段階の非線形変換、順応、受容野処理、皮質処理が入る。NCSは最終的な色の見えを記述する心理物理学的体系であり、生理信号をそのまま座標にしたものではない。

この区別をすると、「反対色説を使っているのに、なぜNCSとLMSが直接変換できないのか」という混乱を避けられる。

## 12　NCSが測れるもの・測れないもの

スウェーデン規格 SS 19100 は、NCSを表面色の知覚を記述する体系として定義し、金属的・蛍光的に見える表面、透明体や発光体の色、光沢やテクスチャなどは同じ枠組みだけでは記述しないとしている。

したがってNCS記号は

$$
\text{色の見え}
$$

を記述しても、

$$
\text{分光反射率 }R(\lambda)
$$

や

$$
\text{顔料組成}
$$

を一意には決めない。

異なる分光反射率をもつ物体が、ある照明下でほぼ同じNCS知覚を生むこともあり得る。これは測色でいうメタメリズムと矛盾しない。

## 13　マンセル・PCCS・NCS・XYZ・CIELABの違い

| 体系 | 主に表すもの | 基本座標 | 数学的性格 |
|---|---|---|---|
| マンセル | 色相・明度・彩度の知覚的順序 | H, V, C | 知覚尺度による顕色系 |
| PCCS | 配色しやすい色相・トーン | hue, tone | 離散化・カテゴリー化 |
| NCS | elementary colourへの知覚的類似度 | s, w, c, hue | 制約付き知覚座標・順序系 |
| XYZ | 等色に必要な三刺激値 | X, Y, Z | 線形測色空間 |
| CIELAB | 知覚的に近似均等な色座標 | L*, a*, b* | XYZの非線形変換 |

NCSを理解すると、「表色系」という言葉の中に

$$
\text{物理的に測る体系}
$$

と

$$
\text{知覚を記述する体系}
$$

が共存していることが分かる。

## 14　色彩検定で押さえるところ

色彩検定との接続では、次を整理しておくとよい。

- NCSはNatural Colour Systemの略で、知覚を基礎にした顕色系である
- 基本となる elementary colours は白・黒・黄・赤・青・緑の6色
- 赤―緑、黄―青は反対関係にある
- ニュアンスはblackness $s$、whiteness $w$、chromaticness $c$ で表す
- $s+w+c=100$ が成り立つ
- `2030`なら黒み20、色み30、白み50
- `Y90R`は黄―赤の間で赤への類似度が90%という意味であり、光や顔料の90%を意味しない
- chromaticness と saturation は異なる
- saturation は $m=c/(c+w)=c/(100-s)$ と表せる
- NCSはXYZのような線形測色空間ではなく、知覚の記述体系である
- NCS記号だけから分光反射率や顔料配合を一意に復元することはできない

大学レベルでは、固定色相のNCSニュアンスを

$$
\Delta^2=
\{(s,w,c)\mid s,w,c\ge0,\ s+w+c=100\}
$$

という2-simplexとして捉えると構造が明確になる。

色彩検定で暗記しがちな「白み・黒み・色み」は、数学的には「総和制約をもつ3成分座標」であり、その上に色相という循環座標が加わった体系なのである。

## 参考資料

- 公益社団法人 色彩検定協会「色彩検定とは」（1級で色彩学として測色、世界の色彩調和論などを扱うことを明記）  
  https://www.aft.or.jp/pages/feature/level
- NCS Colour, “Learn the NCS System”（NCS記号、blackness、chromaticness、hueの公式解説）  
  https://ncscolour.com/pages/the-system
- NCS Colour, “Colour harmonies”（whiteness・blackness・chromaticness・saturation、$m=c/(c+w)=c/(100-s)$）  
  https://ncscolour.com/pages/colour-harmonies
- Swedish Institute for Standards, SS 19100 “Colour notation system”（NCSの適用範囲と表面色の知覚記述）  
  https://www.sis.se/en/produkter/paint-and-colour-industries/paints-and-varnishes/ss191007/
- ASTM International, ASTM E2970-22 “Standard Practice for Specifying Color by the Natural Colour System (NCS)”（NCS記号、CIE三刺激値との対応、適用範囲）  
  https://store.astm.org/e2970-22.html
- ASTM International, Adjunct to E2970（NCSとCIELAB・XYZ・xyの変換条件）  
  https://store.astm.org/adje297015-ea.html
- Anders Hård, Lars Sivik, “NCS—Natural Color System: A Swedish Standard for Color Notation,” Color Research & Application, 6(3), 129–138, 1981.  
  https://doi.org/10.1002/col.5080060303
- Anders Hård, Lars Sivik, Gunnar Tonnquist, “NCS, natural color system—From concept to research and applications. Part I,” Color Research & Application, 21(3), 180–205, 1996.  
  https://doi.org/10.1002/(SICI)1520-6378(199606)21:3%3C180::AID-COL2%3E3.0.CO;2-O
- DICカラーデザイン株式会社「NCS表色系とは」（ヘリングの反対色説と6主要色の日本語解説）  
  https://www.dic-color.com/knowledge/ncs.html