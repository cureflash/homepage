# 同じRGB値なのに、なぜ色が違うのか――ICCカラーマネジメントを座標変換として理解する

色彩検定協会の公開する「各級の目安」では、1級の色彩学に「測色」が明記され、公式テキスト1級編も色彩知識をより専門的・実践的に深める位置づけになっている。

測色を実務へ進めると、次の問題に突き当たる。

> あるディスプレイで見たRGB=(200,80,60)を、別のディスプレイや印刷物でも同じ色に見せるにはどうすればよいのか。

RGBやCMYKは、それだけでは色を一意に決めない。各装置の原色、白色点、階調特性、インク、紙などによって、同じ数値が別の物理刺激を作るからである。

カラーマネジメントは、この「装置ごとに違う座標系」を、測色値を介して変換する仕組みである。

本記事では、

$$
\text{デバイス値}
\rightarrow
\text{測色値}
\rightarrow
\text{別デバイス値}
$$

という流れを、ICCプロファイル、XYZ・CIELAB、色順応、色域写像、測定と近似の数学として説明する。

## 1　RGBは色そのものではない

デジタル画像の1画素を

$$
\mathbf{d}=
\begin{pmatrix}
R\\G\\B
\end{pmatrix}
$$

とする。

この3つの数値だけを見ても、実際にどのXYZを出すかは分からない。

ディスプレイAとBで、赤・緑・青の原色の色度や最大輝度、階調特性が違えば、同じ

$$
(R,G,B)=(200,80,60)
$$

でも異なる分光分布を作り、結果として異なるXYZになる。

数学的には、装置Aには

$$
F_A:\mathbf{d}_A\mapsto\mathbf{X}
$$

装置Bには

$$
F_B:\mathbf{d}_B\mapsto\mathbf{X}
$$

という別々の写像がある。

ここで

$$
\mathbf{X}=
\begin{pmatrix}
X\\Y\\Z
\end{pmatrix}
$$

は測色的な三刺激値である。

同じ数値でも

$$
F_A(\mathbf{d})\neq F_B(\mathbf{d})
$$

なら同じ色にはならない。

したがって「RGB値が同じだから同じ色」という考え方は、同一のRGB色空間・同一の表示条件を暗黙に仮定している。

## 2　sRGBとは「RGBの意味を決める規約」である

sRGBでは、単にR・G・Bという3チャンネルを使うだけでなく、

- RGB原色の色度
- D65白色点
- 符号化範囲
- 非線形の伝達関数
- 基準となる観察条件

が定義されている。

たとえばsRGBの原色はxy色度で

$$
R=(0.640,0.330),
\quad
G=(0.300,0.600),
\quad
B=(0.150,0.060)
$$

白色点は

$$
(x_w,y_w)=(0.3127,0.3290)
$$

で、CIE標準イルミナントD65に対応する。

したがって「RGB画像」というだけでは不十分で、

$$
\boxed{\text{RGB値}+\text{色空間の定義}}
$$

がそろって初めて測色値へ結びつけられる。

## 3　最初に非線形RGBを線形光へ戻す

sRGBの画素値は、光量に比例する線形RGBではない。

0〜1へ正規化した符号値を $C'$、線形光に対応する値を $C$ とすると、sRGBでは

$$
C=
\begin{cases}
\dfrac{C'}{12.92}, & C'\le0.04045\\[6pt]
\left(\dfrac{C'+0.055}{1.055}\right)^{2.4}, & C'>0.04045
\end{cases}
$$

と復号する。

したがって

$$
\mathbf{d}'=
\begin{pmatrix}
R'\\G'\\B'
\end{pmatrix}
$$

から線形RGB

$$
\mathbf{r}=
\begin{pmatrix}
R\\G\\B
\end{pmatrix}
$$

へ変換してから、XYZへの線形変換を行う。

この順序を無視し、符号化されたRGBへ直接3×3行列を掛けると、測色的には正しくない。

## 4　線形RGBからXYZへの変換は行列で書ける

三原色を加法混色する理想化されたRGB系では、線形RGBからXYZへの変換は

$$
\begin{pmatrix}
X\\Y\\Z
\end{pmatrix}
=
M
\begin{pmatrix}
R\\G\\B
\end{pmatrix}
$$

と書ける。

行列 $M$ の各列は、赤・緑・青の単位強度が作るXYZベクトルに対応する。

つまり

$$
M=
\begin{pmatrix}
X_R&X_G&X_B\\
Y_R&Y_G&Y_B\\
Z_R&Z_G&Z_B
\end{pmatrix}
$$

である。

これは「RGBが3次元、XYZも3次元だから何となく変換できる」という話ではない。

加法混色の線形性により、各原色の刺激ベクトルの線形結合として色刺激を記述できるため、行列変換になる。

## 5　カラーマネジメントの本体は「座標系をつなぐこと」

ソース装置のデバイス値を $\mathbf{d}_s$、出力装置のデバイス値を $\mathbf{d}_t$ とする。

カラーマネジメントでは概念的に

$$
\mathbf{d}_s
\xrightarrow{F_s}
\mathbf{p}
\xrightarrow{G_t}
\mathbf{d}_t
$$

と変換する。

$\mathbf{p}$ は装置に依存しない接続空間の座標である。

ICC方式では、v2/v4プロファイルのProfile Connection Space（PCS）としてCIEXYZまたはCIELABが使われる。

したがって本質は

$$
\boxed{
\text{装置固有座標}
\rightarrow
\text{共通測色座標}
\rightarrow
\text{別の装置固有座標}
}
$$

という座標変換である。

## 6　ICCプロファイルは「色の辞書」ではなく変換モデルである

ICCプロファイルには、装置のRGBやCMYKとPCSを対応づける情報が格納される。

単純なRGBディスプレイなら、

1. 各チャンネルの階調応答TRC
2. 線形RGBからXYZへ写す3×3行列

でかなりの部分を記述できる。

概念的には

$$
\mathbf{d}
\xrightarrow{\mathrm{TRC}}
\mathbf{r}
\xrightarrow{M}
\mathbf{X}
$$

である。

一方、プリンタのように

$$
(C,M,Y,K)
$$

の4変数を持ち、インク同士の相互作用や紙の影響が強い装置では、単純な3×3行列では足りない。

そこで多次元LUT（look-up table）と補間を使い、

$$
F(C,M,Y,K)\approx(L^*,a^*,b^*)
$$

のような非線形写像を近似する。

## 7　プロファイルはどうやって作るのか

プロファイル作成では、既知のデバイス値を多数出力し、その色を測る。

ディスプレイなら、RGBパッチ

$$
\mathbf{r}_i
$$

を表示して、色彩計や分光放射計でXYZ

$$
\mathbf{x}_i
$$

を測定する。

線形モデルで近似するなら、未知の行列 $M$ を

$$
\mathbf{x}_i\approx M\mathbf{r}_i
$$

として推定できる。

全パッチについて二乗誤差

$$
J(M)=
\sum_i
\|\mathbf{x}_i-M\mathbf{r}_i\|^2
$$

を最小にする問題である。

データ行列を

$$
X=[\mathbf{x}_1,\dots,\mathbf{x}_n],
\qquad
R=[\mathbf{r}_1,\dots,\mathbf{r}_n]
$$

とすると、$RR^{\mathsf T}$ が可逆なら最小二乗解は

$$
M=
XR^{\mathsf T}
(RR^{\mathsf T})^{-1}
$$

となる。

実際のプロファイルではTRC、行列、LUT、補間、測定ノイズ補正などが加わるが、根本は

$$
\boxed{\text{入力した装置値と、測定した測色値の対応をモデル化する}}
$$

ことである。

## 8　キャリブレーションとプロファイリングは別物である

この2つは混同されやすい。

キャリブレーションは、装置そのものを目標状態へ調整する操作である。

たとえばディスプレイなら

- 白色点
- 輝度
- 黒レベル
- 階調応答

などを目標へ近づける。

一方、プロファイリングは、その調整後の装置が実際にどの色を出すかを測定し、

$$
F:\text{device values}\rightarrow\text{PCS}
$$

を記述することである。

したがって

$$
\boxed{\text{校正} = \text{装置状態を整える}}
$$

$$
\boxed{\text{プロファイル} = \text{その状態を記述する}}
$$

である。

プロファイルを作った後にディスプレイ設定や紙・インクを大きく変えれば、対応関係 $F$ も変わるので、古いプロファイルの精度は落ちる。

## 9　なぜICC PCSはD50を基準にするのか

ICC v4ではPCSの基準白としてD50を用いる。

XYZで表すPCS白色点は概略

$$
\mathbf{W}_{D50}
=
\begin{pmatrix}
0.9642\\1.0000\\0.8249
\end{pmatrix}
$$

である。

しかしsRGBの基準白はD65である。

そこでsRGBの測色値をICC PCSへ接続するときには、白色点の違いを扱う必要がある。

単純にXYZの各成分を同比率で変えるのではなく、色順応変換を用いる。

## 10　色順応変換は「錐体応答の倍率調整」として書ける

Bradford型の色順応変換を抽象化すると、まずXYZを錐体応答に近い空間へ写す。

$$
\mathbf{l}=M_B\mathbf{X}
$$

ソース白色点を $\mathbf{W}_s$、ターゲット白色点を $\mathbf{W}_t$ とし、

$$
\mathbf{l}_s=M_B\mathbf{W}_s,
\qquad
\mathbf{l}_t=M_B\mathbf{W}_t
$$

とする。

各成分を白色点比でスケーリングすれば

$$
D=
\operatorname{diag}
\left(
\frac{l_{t1}}{l_{s1}},
\frac{l_{t2}}{l_{s2}},
\frac{l_{t3}}{l_{s3}}
\right)
$$

となり、変換後XYZは

$$
\boxed{
\mathbf{X}_t
=
M_B^{-1}DM_B\mathbf{X}_s
}
$$

で表せる。

これはvon Kries型の対角変換と同じ基本構造を持つ。

つまりICCカラーマネジメントに現れる色順応は、色恒常性で学んだ「各受容器チャンネルの利得調整」と数学的につながっている。

## 11　色域はPCS内の集合として考えられる

ある装置が再現できる色全体を色域（gamut）とする。

PCS内でソース色域を

$$
\mathcal G_s
$$

出力装置の色域を

$$
\mathcal G_t
$$

とする。

一般には

$$
\mathcal G_s\not\subseteq\mathcal G_t
$$

である。

たとえばディスプレイ上で非常に鮮やかな青緑が表示できても、特定のCMYK印刷では同じ測色値を作れない場合がある。

もし目標色

$$
\mathbf{p}\in\mathcal G_s
$$

が

$$
\mathbf{p}\notin\mathcal G_t
$$

なら、出力装置にその色を命令する座標は存在しない。

この問題は単なる変換精度ではなく、集合の包含関係による物理的制約である。

## 12　色域外の色はどうするのか――レンダリングインテント

色域外の色を出力するには

$$
H:\mathcal G_s\rightarrow\mathcal G_t
$$

という色域写像が必要になる。

ICCでは代表的に4つのレンダリングインテントが定義される。

- 知覚的（Perceptual）
- メディア相対測色的（Media-relative colorimetric）
- ICC絶対測色的（ICC-absolute colorimetric）
- 彩度（Saturation）

色域外の点をそのまま保持することはできないため、何を保存し、何を変えるかという目的関数が必要になる。

たとえば単純化して、色域外の色を最も近い出力可能色へ写すなら

$$
H(\mathbf{p})
=
\arg\min_{\mathbf{q}\in\mathcal G_t}
\Delta E(\mathbf{p},\mathbf{q})
$$

と書ける。

ただし実際の知覚的レンダリングでは、単一点の最近傍ではなく、画像全体の階調や色関係を保つために色域全体を圧縮する。

したがって色域写像は一般に

$$
\boxed{\text{一意の正解がある座標変換ではない}}
$$

という点が重要である。

## 13　「相対測色」と「絶対測色」は白をどう扱うかが違う

紙の白はディスプレイの白と同じではない。

メディア相対測色では、ソース媒体の白と出力媒体の白を対応させる。

概念的には

$$
\text{source white}\mapsto\text{destination white}
$$

と考える。

一方、ICC絶対測色では媒体白の差も再現対象に含める。

そのため、白色度の異なる印刷用紙を別の装置上で校正・プルーフする用途では、白の扱いが結果に大きく効く。

「同じLab値を出せばよい」だけではなく、どの白へ順応した座標なのかを管理する必要がある。

## 14　XYZやLabは「完全に見えを保証する空間」ではない

PCSにXYZやCIELABを使うと、装置依存性は大きく減らせる。

しかし

$$
\boxed{\text{同じXYZ} \Rightarrow \text{あらゆる環境で完全に同じ見え}}
$$

ではない。

色の見えは

- 観察照明
- 周囲の明るさ
- 背景色
- 順応状態
- 視野サイズ

などにも依存する。

ICC v4 PCSは、基準観察条件を定めることで装置間接続を標準化している。

つまりPCSは「人間の色覚を完全にモデル化した空間」ではなく、色再現ワークフローを接続するための標準化された測色インターフェースである。

## 15　色差はカラーマネジメントの誤差評価に使える

プロファイル変換後、目標色を

$$
\mathbf{c}_{\mathrm{target}}
$$

実測色を

$$
\mathbf{c}_{\mathrm{meas}}
$$

とすれば、CIELAB上の単純な色差は

$$
\Delta E^*_{ab}
=
\sqrt{
(L_2^*-L_1^*)^2+
(a_2^*-a_1^*)^2+
(b_2^*-b_1^*)^2
}
$$

で評価できる。

より知覚的一様性を改善した評価にはCIEDE2000などを用いる。

ここで重要なのは、カラーマネジメントと色差管理が別の役割を持つことである。

$$
\text{カラーマネジメント}
:\text{色を変換する}
$$

$$
\text{色差評価}
:\text{変換・出力結果を測る}
$$

である。

測色計で出力パッチを測れば、プロファイルがどの程度目標色を再現できているかを数値で検証できる。

## 16　メタメリズムはICCプロファイルだけでは消せない

ICCの通常のPCSはXYZまたはLabという3次元情報である。

異なるスペクトル

$$
P_1(\lambda)\neq P_2(\lambda)
$$

でも、ある観察条件で

$$
XYZ_1=XYZ_2
$$

になることがある。

これはメタメリズムである。

通常のICCプロファイルでPCSへ写した時点で、スペクトルの違いは保持されない。

したがって

- 照明を変えたときの条件等色崩れ
- 蛍光材料
- 分光的に特殊なインク

などは、三刺激値だけでは完全には扱えない。

この点は、分光測色と三刺激値測色の違いそのものである。

## 17　プリンタはなぜディスプレイよりモデル化が難しいのか

ディスプレイの理想的な加法混色では、線形化後のRGBとXYZの関係を3×3行列で近似しやすい。

一方CMYK印刷では、

- インクの分光吸収
- 紙内部の散乱
- 網点面積率
- ドットゲイン
- インクの重なり
- 黒生成

が絡む。

そのため

$$
(C,M,Y,K)
\rightarrow
(X,Y,Z)
$$

は強い非線形性を持つ。

さらに4次元入力から3次元色空間への写像なので、同じ色を作るCMYK組合せが複数存在しうる。

数学的には逆写像が一意でない。

この非一意性は、局所的にはヤコビ行列で確認できる。プリンタの色再現を

$$
F:\mathbb{R}^4\rightarrow\mathbb{R}^3,
\qquad
\mathbf{c}=(C,M,Y,K)^\mathsf T
$$

とし、そのヤコビ行列を

$$
J_F(\mathbf c)=\frac{\partial(X,Y,Z)}{\partial(C,M,Y,K)}
$$

とする。$J_F$ は $3\times4$ 行列なので、最大階数が3である。階数が3の場合でも、階数・退化次数定理から

$$
\dim\ker J_F=4-3=1
$$

となる。したがって少なくとも1方向の微小変化 $\delta\mathbf c$ について

$$
J_F\,\delta\mathbf c=0
$$

が成り立ち、一次近似では

$$
F(\mathbf c+\delta\mathbf c)
\approx
F(\mathbf c)
$$

となる。つまりPCS上の色をほとんど変えずにCMYK配分を変えられる自由度が局所的に存在する。黒生成やGCR/UCRで「同じ見えを保ちながらK版の使い方を変える」余地が生じる数学的背景の一つがここにある。

逆にRGBディスプレイを

$$
F:\mathbb{R}^3\rightarrow\mathbb{R}^3
$$

とみなすと、ある点で

$$
\det J_F\neq0
$$

なら逆関数定理により、その近傍ではPCSからRGBへの局所逆写像が存在する。ただし、逆変換が存在することと安定であることは別問題である。

ヤコビ行列の条件数を

$$
\kappa(J_F)=\|J_F\|\,\|J_F^{-1}\|
$$

とすると、$\kappa$ が大きい領域ではPCS側の小さな誤差や補間誤差が、逆変換後のデバイス値で大きく増幅されうる。色域境界付近や装置応答が飽和する領域でLUTの補間密度や測定精度が重要になるのは、この「逆問題の悪条件性」としても理解できる。

CMYKの逆変換は一意でないため、実務的には単なる方程式の逆解ではなく、制約付き最適化として考えられる。目標PCSを $\mathbf p_t$ とすれば、模式的に

$$
\min_{0\le\mathbf c\le1}
\left[
\Delta E_{00}(F(\mathbf c),\mathbf p_t)^2
+\lambda R(\mathbf c)
\right]
$$

と書ける。$R(\mathbf c)$ は総インク量、K版使用量、階調の滑らかさなど、色差以外の設計目的を表す正則化項である。さらに総インク量制限を

$$
C+M+Y+K\le T_{\max}
$$

のような制約として課すこともできる。

したがってプリンタのプロファイル変換は、「色を合わせる」だけでなく、無数にありうる近似解の中から製版・印刷上望ましい解を選ぶ逆問題でもある。

そのため出力プロファイルには、色再現だけでなく黒インク量、総インク量、階調安定性などの設計判断も入る。

## 18　ソフトプルーフは何を計算しているのか

印刷前にディスプレイ上で印刷結果を予測するソフトプルーフでは、単に画像をモニタへ表示しているのではない。

概念的には

$$
\text{画像色}
\rightarrow
\text{プリンタで再現可能な色}
\rightarrow
\text{その測色値}
\rightarrow
\text{ディスプレイRGB}
$$

という複合変換を行う。

変換を写像で書けば

$$
\mathbf{d}_{\mathrm{monitor}}
=
G_m
\circ
F_p
\circ
G_p
\circ
F_s
(\mathbf{d}_{\mathrm{source}})
$$

のように考えられる。

ここで

- $F_s$：ソース色からPCS
- $G_p$：PCSからプリンタ値
- $F_p$：プリンタ値から実際のPCS色
- $G_m$：PCSからモニタ値

である。

つまりソフトプルーフは「印刷機の色再現を一度数学的に通した結果」をモニタ上に再現しようとしている。

## 19　プロファイルなし画像で何が起こるのか

RGB値だけがあり、そのRGBがsRGBなのかDisplay P3なのかAdobe RGB系なのか分からなければ、入力座標の意味が決まらない。

数学的には、

$$
\mathbf{d}
$$

は分かっていても

$$
F
$$

が分からない状態である。

すると

$$
F(\mathbf{d})
$$

として求めるべきPCS値が一意に決まらない。

アプリケーションが「これはsRGBだろう」と仮定すれば表示はできるが、それは未知の変換をsRGB変換で置き換えたにすぎない。

カラーマネジメントでプロファイル情報が重要なのは、RGB値そのものより

$$
\boxed{\text{RGB値を測色値へ解釈する写像}}
$$

を確定させるためである。

## 20　色彩検定との接続

色彩検定協会の公開情報では、1級は「プロフェッショナル向け」とされ、色彩学の例として「測色」「世界の色彩調和論」「カラーマーケティング」などが挙げられている。公式テキスト1級編も、下位級で学んだ色彩知識を専門的・実践的に深める教材として位置づけられている。

カラーマネジメントを大学レベルで理解すると、これまで別々に見えていた

$$
\text{XYZ}
$$

$$
\text{CIELAB}
$$

$$
\text{色差}
$$

$$
\text{分光測色}
$$

$$
\text{色順応}
$$

が一つの処理系としてつながる。

流れをまとめると、

$$
\boxed{
\text{装置を測る}
\rightarrow
\text{PCSへの写像を作る}
\rightarrow
\text{色域を考慮して別装置へ写す}
\rightarrow
\text{出力を再測定して色差で検証する}
}
$$

となる。

これは測色を「色を数値にする学問」から「異なる装置間で色を制御する工学」へ拡張したものと考えられる。

## 21　まとめ

RGBやCMYKは、装置から独立した絶対的な色ではない。

装置 $i$ のデバイス値 $\mathbf{d}_i$ と測色値 $\mathbf{p}$ の関係を

$$
F_i:\mathbf{d}_i\rightarrow\mathbf{p}
$$

として記述し、別装置への逆方向変換と組み合わせることで色を接続する。

ICCカラーマネジメントの核心は

$$
\boxed{
\text{device dependent}
\rightarrow
\text{PCS}
\rightarrow
\text{device dependent}
}
$$

という座標変換である。

ただし実際には、白色点の違いには色順応変換、再現可能範囲の違いには色域写像、装置の非線形性にはTRCやLUTが必要になる。

さらに、デバイス→PCS変換の逆問題では、RGBのように局所逆が存在しても条件数によって誤差が増幅され、CMYKのように入力次元が高い系では逆解そのものが非一意になる。

したがってカラーマネジメントは、単なる「色設定」ではなく、

$$
\boxed{
\text{測色}
+\text{線形代数}
+\text{非線形近似}
+\text{色順応}
+\text{逆問題・最適化}
}
$$

からなる色再現工学である。

## 参考資料

1. 公益社団法人 色彩検定協会, 「色彩検定とは―各級の目安」. https://www.aft.or.jp/pages/feature/level
2. 公益社団法人 色彩検定協会, 「公式テキスト」. https://www.aft.or.jp/pages/official-product-orders
3. International Color Consortium, “About ICC.” https://www.color.org/about/
4. International Color Consortium, *ICC.1:2022 Image technology colour management — Architecture, profile format, and data structure*, Profile version 4.4. https://www.color.org/icc-1_specification/
5. International Color Consortium, “Introduction to the ICC profile format.” https://www.color.org/getting-started/
6. International Color Consortium, “Display calibration.” https://www.color.org/displaycalibration/
7. International Color Consortium, “sRGB,” Three Component Color Encoding Registry. https://registry.color.org/rgb-registry/srgb
8. IEC, *IEC 61966-2-1:1999 Multimedia systems and equipment — Colour measurement and management — Part 2-1: Default RGB colour space — sRGB*. https://webstore.iec.ch/en/publication/6169
9. CIE, *CIE 015:2018 Colorimetry, 4th Edition*, International Commission on Illumination, 2018. https://cie.co.at/publications/colorimetry-4th-edition
10. ISO/CIE, *ISO/CIE 11664-4:2019 Colorimetry — Part 4: CIE 1976 L*a*b* colour space*. https://www.cie.co.at/publications/colorimetry-part-4-cie-1976-lab-colour-space-1
11. R. S. Berns, *Billmeyer and Saltzman's Principles of Color Technology*, 3rd ed., Wiley, 2000.
12. L. N. Trefethen and D. Bau III, *Numerical Linear Algebra*, SIAM, 1997.