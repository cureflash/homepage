# CDはなぜ虹色に見えるのか――回折格子と波の干渉

CDの記録面を光にかざすと、見る角度によって青、緑、赤の筋が現れる。色素が塗られているわけでも、シャボン玉のような薄膜があるわけでもない。それでも虹色が生じるのは、表面に非常に細かい周期構造があり、その構造が光を波長ごとに異なる方向へ送り分けるからである。

最も基本的な式は、正面から光が入射する回折格子について

$$
\boxed{d\sin\theta_m=m\lambda}
$$

である。$d$は溝の間隔、$\lambda$は波長、$m=0,\pm1,\pm2,\dots$は回折次数、$\theta_m$はその次数の光が進む角度である。同じ$d$でも$\lambda$が違えば$\theta_m$が変わる。白色光に含まれるさまざまな波長が異なる方向へ分かれるため、虹色として見える。

## 1　色彩検定との接続

2026年度の色彩検定公式案内では、3級で光の基礎知識、2級で光の性質と色の見えに関わる照明を扱う。回折格子そのものは試験の中心語ではないが、「物体から眼へ届く分光分布がどう作られるか」を理解するうえで重要な発展題材である。

顔料の色は主として波長ごとの吸収率・反射率によって決まる。一方、CD、ホログラム、鳥の羽、昆虫の翅などでは、微細構造による干渉・回折が強く関与する。これらは構造色と呼ばれる。

ここで重要なのは、色が「物質固有の色素」だけで決まるわけではないことである。

$$
\text{微細構造}\rightarrow\text{波長ごとの回折方向・強度}\rightarrow\text{眼へ届く分光分布}\rightarrow\text{色}
$$

という経路でも色は生じる。

## 2　回折とは何か

光を幾何光学だけで考えると、光線は直進する。しかし開口や障害物の大きさが波長に近づくと、光は単純な直線では扱えなくなる。波が開口の後ろへ広がり、異なる位置から出た波どうしが干渉する。この現象が回折である。

回折格子は、等間隔に並んだ多数の溝やスリットを持つ周期構造である。1本のスリットだけなら広い回折像が現れるが、多数のスリットを規則正しく並べると、特定の角度だけで波が強く足し合わされる。

したがって回折格子は

> 多数の波源から出た光の位相差を、周期構造によってそろえる装置

と考えることができる。

## 3　なぜ特定の角度だけ明るくなるのか

間隔$d$で並ぶ2本の溝を考える。正面から単色光を入射し、格子の法線から角度$\theta$の方向を観測する。

隣り合う2本の溝から出た光の光路差は

$$
\Delta L=d\sin\theta
$$

となる。この光路差が波長の整数倍なら、2つの波は同位相で重なる。

$$
\Delta L=m\lambda
$$

したがって

$$
\boxed{d\sin\theta_m=m\lambda}
$$

を得る。

$m=0$では

$$
\theta_0=0
$$

であり、波長に関係なく同じ方向へ進む。これが0次光である。

$m=1$なら

$$
\sin\theta_1=\frac{\lambda}{d}
$$

なので、波長が長いほど大きな角度へ回折される。可視光では一般に青より赤の方が大きな角度へ現れる。

### 3.1　回折格子式を波数ベクトルで導く

上の光路差による導出は直感的だが、周期構造の物理をより一般的に表すには波数ベクトルを使うとよい。格子が$x$方向に周期$d$を持つとき、その周期性に対応する逆格子ベクトルの大きさは

$$
\boxed{G=\frac{2\pi}{d}}
$$

である。周期構造による弾性回折では、光の周波数は変わらないため波数の大きさ

$$
|\mathbf{k}|=k=\frac{2\pi n}{\lambda_0}
$$

は同じ媒質中では一定である。一方、格子に平行な$x$方向の波数成分は、周期性から逆格子ベクトルの整数倍だけ変化できる。

$$
\boxed{k_{x,m}=k_{x,\mathrm{in}}+mG}
$$

入射角を$\alpha$、$m$次回折光の角度を$\theta_m$とし、どちらも格子法線から符号付きで測れば

$$
k\sin\theta_m=k\sin\alpha+m\frac{2\pi}{d}
$$

となる。空気中で$k=2\pi/\lambda$とすれば

$$
\boxed{d\left(\sin\theta_m-\sin\alpha\right)=m\lambda}
$$

を得る。反射格子で入射光と回折光を法線の反対側から正の角度として定義する教科書では

$$
d(\sin\alpha+\sin\beta_m)=m\lambda
$$

と書かれることもある。違いは角度の符号規約であり、物理内容は同じである。正入射なら$\alpha=0$なので、最初の式

$$
d\sin\theta_m=m\lambda
$$

へ戻る。

この表現の利点は、回折を「光路差が整数波長になる」という幾何だけでなく、周期構造が光へ離散的な横方向波数

$$
mG=m\frac{2\pi}{d}
$$

を与える現象として理解できることである。光子の言葉では、周期構造と運動量を交換して進行方向が離散的に変わるとみなせる。エネルギーは保存されるので$|\mathbf{k}|$は変わらず、方向だけが変化する。

さらに実在する回折次数には

$$
|\sin\theta_m|\le1
$$

という条件が必要である。したがって

$$
\left|\sin\alpha+m\frac{\lambda}{d}\right|\le1
$$

を満たす$m$だけが伝搬光として存在できる。周期$d$、波長$\lambda$、入射角$\alpha$によって、見える回折次数の数そのものが決まる。

## 4　多数の溝があるとピークが鋭くなる

2本だけでなく$N$本の等間隔スリットを考える。隣接スリット間の位相差を

$$
2\beta=\frac{2\pi d\sin\theta}{\lambda}
$$

とおけば、多重スリットの干渉項は

$$
\boxed{I(\theta)\propto\left(\frac{\sin N\beta}{\sin\beta}\right)^2}
$$

となる。

$N$が大きいほど、主極大は細く鋭くなる。つまり多数の溝を持つ回折格子は、近い波長をよりはっきり別方向へ分離できる。

実際のスリットには有限の幅$a$があるため、単スリット回折の包絡線も掛かる。理想的な多重スリットなら

$$
I(\theta)=I_0
\left(\frac{\sin\alpha}{\alpha}\right)^2
\left(\frac{\sin N\beta}{\sin\beta}\right)^2
$$

$$
\alpha=\frac{\pi a\sin\theta}{\lambda},\qquad
\beta=\frac{\pi d\sin\theta}{\lambda}
$$

と書ける。

最初の因子が各スリット自身の回折、2つ目の因子が多数スリット間の干渉である。実在する反射型回折格子では溝断面や金属反射率、偏光なども効率に影響するが、波長を方向へ変換する本質は同じである。

## 5　白色光が虹に分かれる

白色光は1つの波長ではなく、多数の波長を含む。一次回折$m=1$では

$$
\theta(\lambda)=\sin^{-1}\left(\frac{\lambda}{d}\right)
$$

だから、波長によって進行方向が異なる。

波長に対する角度の変化率を求めると

$$
\cos\theta\frac{d\theta}{d\lambda}=\frac{m}{d}
$$

したがって

$$
\boxed{\frac{d\theta}{d\lambda}=\frac{m}{d\cos\theta}}
$$

となる。これを角分散という。

$d$が小さい、つまり溝が細かいほど角分散は大きくなる。また高次の$m$ほど波長差が大きな角度差へ変換される。

このため回折格子は、単に虹色を作るだけでなく、分光器で波長を測定するためにも使われる。

## 6　CDの溝は回折格子として働く

CD-ROMでは情報トラックは連続したらせん状であり、隣接するトラックの間隔は約

$$
d=1.6\ \mu\mathrm{m}
$$

である。ECMA-130では物理トラックのピッチが$1.6\ \mu\mathrm{m}\pm0.1\ \mu\mathrm{m}$と規定されている。

らせん全体は曲がっているが、局所的な小領域だけを見れば、ほぼ平行な周期構造とみなせる。そこへ白色光が当たると、隣り合うトラックから反射された光が干渉する。

単純化して正入射・一次回折を考えると

$$
\sin\theta=\frac{\lambda}{1.6\ \mu\mathrm{m}}
$$

である。

波長400 nmなら

$$
\theta\approx14.5^\circ
$$

波長550 nmなら

$$
\theta\approx20.1^\circ
$$

波長700 nmなら

$$
\theta\approx25.9^\circ
$$

となる。赤と青では10°以上も方向が違うため、肉眼でも色の分離がはっきり分かる。

CDを傾けたり回したりすると虹の位置が大きく変わるのは、入射方向と溝の向きが変化し、回折条件が変わるためである。

## 7　プリズムの虹と何が違うのか

プリズムも白色光を虹に分けるが、仕組みは異なる。

プリズムでは屈折率$n(\lambda)$が波長によって異なるため、Snellの法則

$$
n_1\sin\theta_1=n_2(\lambda)\sin\theta_2
$$

を通じて色が分かれる。これは材料の分散である。

回折格子では、周期構造による光路差

$$
d\sin\theta=m\lambda
$$

が直接波長を選別する。

したがって

- プリズム：材料の屈折率分散
- 回折格子：周期構造による干渉

という違いがある。

どちらも最終的には「波長を角度へ変換する装置」だが、基礎となる物理が違う。

## 8　薄膜干渉とも何が違うのか

シャボン玉や油膜の色は、異なる界面で反射した光どうしの干渉で生じる。代表的な光路差は

$$
2nd\cos\theta
$$

の形を持ち、膜厚$d$が波長選択を決める。

一方、回折格子では隣接する周期構造間の横方向の間隔$d$が重要であり

$$
d\sin\theta=m\lambda
$$

が基本になる。

つまり両者とも干渉を使うが、位相差を生み出す幾何学が違う。

- 薄膜干渉：厚さ方向の光路差
- 回折格子：周期構造の横方向の光路差

という整理ができる。

## 9　なぜ見る角度で色が変わるのか

顔料色では、観察角度を少し変えても色相は大きく変わらないことが多い。一方、回折による構造色では観察方向が式の中に直接入っている。

$$
\lambda=\frac{d\sin\theta_m}{m}
$$

したがって、ある観察方向$\theta_m$で強く見える波長は決まっている。眼の位置を動かせば$\theta_m$が変わり、強く届く波長も変わる。

この角度依存性がiridescence、すなわち玉虫色・虹色の大きな特徴である。

照明位置も同様に重要である。斜入射では入射角も光路差に寄与するため、一般の回折格子式では入射角と回折角の両方が現れる。反射格子では符号規約によって式の形は変わるが、原理は「周期構造が接線方向の波数を$2\pi/d$の整数倍だけ変える」で共通している。

## 10　分解能はなぜ溝の本数で決まるのか

回折格子の重要な性能に分解能がある。近接した2つの波長$\lambda$と$\lambda+\Delta\lambda$を分離できる能力を

$$
R=\frac{\lambda}{\Delta\lambda}
$$

と定義すると、理想的な回折格子では

$$
\boxed{R=mN}
$$

となる。$N$は実際に照明されている溝の本数である。

たとえば一次回折$m=1$で10000本の溝が有効なら、理想的には

$$
R=10000
$$

となる。波長500 nm付近なら

$$
\Delta\lambda\approx\frac{500\ \mathrm{nm}}{10000}=0.05\ \mathrm{nm}
$$

程度の差を区別できる計算になる。

多数の溝があるほど干渉ピークが鋭くなることが、そのまま高い分光分解能につながる。

### 10.1　なぜ $R=mN$ になるのか――干渉ピーク幅から導く

上の式は経験的な規則ではなく、$N$本の溝が作る干渉ピークの幅と、回折格子の角分散を組み合わせると導ける。

多重スリットの干渉項

$$
I(\theta)\propto\left(\frac{\sin N\beta}{\sin\beta}\right)^2,
\qquad
\beta=\frac{\pi d\sin\theta}{\lambda}
$$

を考える。$m$次の主極大では

$$
\beta=m\pi
$$

である。そのすぐ隣の最小は、分子が0になる条件

$$
\sin N\beta=0
$$

から

$$
N\beta=Nm\pi\pm\pi
$$

すなわち

$$
\boxed{\delta\beta=\frac{\pi}{N}}
$$

だけ離れた位置に現れる。

一方、角度を微小量$\delta\theta$だけ変えると

$$
\delta\beta
\approx
\frac{\pi d\cos\theta_m}{\lambda}\,\delta\theta
$$

だから、主極大から最初の最小までの角幅は

$$
\boxed{
\delta\theta_{\rm min}
\approx
\frac{\lambda}{Nd\cos\theta_m}
}
$$

となる。これが「溝の本数$N$が多いほどピークが細くなる」の定量的な意味である。

次に、同じ$m$次で波長を$\lambda$から$\lambda+\Delta\lambda$へ少し変える。回折格子式

$$
d\sin\theta_m=m\lambda
$$

を微分すると

$$
d\cos\theta_m\,\Delta\theta
\approx
m\Delta\lambda
$$

なので、2波長の主極大どうしの角度差は

$$
\boxed{
\Delta\theta
\approx
\frac{m\Delta\lambda}{d\cos\theta_m}
}
$$

である。

Rayleighの分解条件では、一方の主極大が他方の最初の最小に重なる程度を「ちょうど分離できる」とみなす。したがって

$$
\Delta\theta\approx\delta\theta_{\rm min}
$$

を課すと、

$$
\frac{m\Delta\lambda}{d\cos\theta_m}
\approx
\frac{\lambda}{Nd\cos\theta_m}
$$

となり、共通因子を消して

$$
\boxed{
\frac{\lambda}{\Delta\lambda}\approx mN
}
$$

を得る。負の回折次数まで含めて分解能の大きさを書くなら$|m|N$である。

さらに、照明されている格子の幅を$W$とすると$N\approx W/d$なので、

$$
\boxed{
R\approx |m|\frac{W}{d}
}
$$

とも書ける。同じ照明幅$W$なら、溝間隔$d$を小さくすると角分散が大きくなるだけでなく、照明される溝の本数も増えるため、理想分解能も高くなる。

したがって

$$
\boxed{
\text{周期構造を細かくする・広い範囲を照明する}
\rightarrow
N\text{増加}
\rightarrow
\text{干渉ピーク狭窄}
\rightarrow
\text{近接波長を分離}
}
$$

という因果関係で分解能を理解できる。実際の分光器では、入射スリット幅、光学収差、検出器画素、格子効率なども最終的な分解能を制限するため、$R=|m|N$は回折格子そのものが与える理想上限である。

### 10.2　周期は「方向」を、1周期内の形は「強度」を決める

回折格子式は、どの方向に回折次数が存在できるかを決める。しかし、その次数がどれだけ明るいかまでは決めない。同じ周期$d$を持つ格子でも、溝の断面形状、深さ、反射膜、偏光によって各次数へ分配される光パワーは変わる。

これをFourier光学で見る。格子1周期の複素振幅応答を$g(x)$とし、

$$
g(x+d)=g(x)
$$

とする。周期関数なので

$$
\boxed{
g(x)=\sum_{m=-\infty}^{\infty}c_m
\exp\!\left(i\frac{2\pi m}{d}x\right)
}
$$

とFourier級数に展開でき、係数は

$$
\boxed{
c_m=\frac{1}{d}\int_0^d g(x)
\exp\!\left(-i\frac{2\pi m}{d}x\right)dx
}
$$

である。この$m$番目の空間Fourier成分が、横方向波数を

$$
mG=m\frac{2\pi}{d}
$$

だけ変える$m$次回折光に対応する。したがってスカラー回折の近似では、$m$次の回折効率は概念的に

$$
\boxed{\eta_m\propto|c_m|^2}
$$

で決まる。厳密には入射・出射方向のエネルギー流、材料の反射率、偏光などの係数も必要だが、「周期が回折角を決め、1周期内の形が各次数の振幅を決める」という分離が本質である。

極端な理想例として、1周期内で位相だけが直線的に$2\pi m_b$進む

$$
g(x)=\exp\!\left(i\frac{2\pi m_b}{d}x\right)
$$

を考える。このとき直交性から

$$
c_m=\delta_{m,m_b}
$$

となり、損失のないスカラー模型では光をほぼ$m_b$次へ集中できる。実際のblazed grating（ブレーズ回折格子）は鋸歯状の溝面によって、この「1周期内の位相勾配」を近似し、狙った波長・次数の効率を高める。

反射格子で、入射角$\alpha$と回折角$\beta$を格子法線の両側から正に測る規約を使えば

$$
d(\sin\alpha+\sin\beta)=m\lambda
$$

である。Littrow配置では入射光と回折光が同じ経路を逆向きに進み、ブレーズ面の鏡面反射方向と一致する設計では

$$
\alpha=\beta=\theta_B
$$

となる。したがって効率が最大になる代表的なブレーズ波長は

$$
\boxed{m\lambda_B=2d\sin\theta_B}
$$

と見積もれる。$\theta_B$はブレーズ角である。

重要なのは、ブレーズが回折格子式そのものを変えるわけではないことである。周期$d$が許される回折方向を決め、溝形状がその許された方向のどこへ光パワーを多く配るかを決める。

$$
\boxed{
\text{周期 }d
\rightarrow
\text{回折角}
\qquad
\text{溝形状・深さ・偏光}
\rightarrow
c_m
\rightarrow
\eta_m
\rightarrow
\text{見える明るさ・色}
}
$$

この区別を入れると、同じピッチの周期構造でも虹の位置はほぼ同じなのに、色ごとの明るさが異なる理由まで説明できる。分光器用回折格子ではブレーズ設計が重要であり、CDのような実在周期構造でも断面形状や反射特性が、観察される虹の強度分布に影響する。

## 11　回折格子から測色へ

ある方向から眼へ届く分光放射束を$S(\lambda,\theta)$とする。回折格子の角度依存効率を$\eta(\lambda,\theta)$、入射光の分光分布を$S_0(\lambda)$とすれば、単純化して

$$
S(\lambda,\theta)=S_0(\lambda)\eta(\lambda,\theta)
$$

と書ける。

そこからCIE XYZ三刺激値は

$$
X=k\int S(\lambda,\theta)\bar{x}(\lambda)d\lambda
$$

$$
Y=k\int S(\lambda,\theta)\bar{y}(\lambda)d\lambda
$$

$$
Z=k\int S(\lambda,\theta)\bar{z}(\lambda)d\lambda
$$

で求められる。

つまり構造色も最終的には

$$
\boxed{\text{微細構造}\rightarrow\eta(\lambda,\theta)\rightarrow\text{分光分布}\rightarrow XYZ\rightarrow\text{色}}
$$

として測色学へ接続できる。

ここで$\theta$が入っていることが顔料色との大きな違いである。構造色は「物体に1つの固定色がある」というより、照明・観察角度を含めた光学系全体で色が決まる。

## 12　要点

回折格子による色の本質は、周期構造が波長ごとに異なる方向で強め合いを起こすことである。

中心式は

$$
\boxed{d\sin\theta_m=m\lambda}
$$

である。

この式から、波長が長いほど大きな角度へ回折されること、白色光が虹色に分かれること、CDを傾けると色が動くことを説明できる。

さらに、周期構造を波数空間で見れば

$$
\boxed{k_{x,m}=k_{x,\mathrm{in}}+m\frac{2\pi}{d}}
$$

であり、回折次数$m$は逆格子ベクトルの整数倍だけ横方向波数が変わることに対応する。多数の溝を持つ場合は

$$
I(\theta)\propto\left(\frac{\sin N\beta}{\sin\beta}\right)^2
$$

によってピークが鋭くなり、分解能は

$$
\boxed{R=mN}
$$

まで高くなる。

一方、各回折次数の明るさは周期だけでは決まらず、1周期内の複素振幅応答のFourier係数$c_m$によって

$$
\eta_m\propto|c_m|^2
$$

と決まる。したがって回折格子では「周期が色の出る方向を決め、溝形状がその色の強さを決める」と整理できる。

色彩学として見ると、回折格子は「微細構造が分光分布を作り、その分光分布を視覚系が色として知覚する」という構造色の典型例である。

## 参考資料

- 色彩検定協会「色彩検定とは」  
  https://www.aft.or.jp/pages/feature/level
- OpenStax, *University Physics Volume 3*, “4.4 Diffraction Gratings”  
  https://openstax.org/books/university-physics-volume-3/pages/4-4-diffraction-gratings
- MIT OpenCourseWare, *Theory of Solids I*, Lecture 2: reciprocal lattice and diffraction condition.  
  https://ocw.mit.edu/courses/8-511-theory-of-solids-i-fall-2004/resources/lec2/
- MIT OpenCourseWare, *Electricity and Magnetism*, Chapter 14: Interference and Diffraction.  
  https://ocw.mit.edu/courses/8-02t-electricity-and-magnetism-spring-2005/resources/ch14_inter_diffr/
- Christopher Palmer, *Diffraction Grating Handbook*, 8th ed., Richardson Gratings / MKS Instruments, 2020, Ch. 2, 9, 12.  
  https://www.newport.com/medias/sys_master/npresources/h30/h1b/9954522529822/MKS%20Diffraction%20Grating%20Handbook/MKS-Diffraction-Grating-Handbook.pdf
- Thorlabs, “Diffraction Gratings Tutorial / Introduction to Diffraction Gratings”  
  https://www.thorlabs.com/catalogpages/V21/876.PDF
- Ecma International, ECMA-130, *Data interchange on read-only 120 mm optical data disks (CD-ROM)*, 2nd ed., 1996.  
  https://ecma-international.org/publications-and-standards/standards/ecma-130/
- Eugene Hecht, *Optics*, 5th ed., Pearson, 2017.
- Max Born and Emil Wolf, *Principles of Optics*, 7th ed., Cambridge University Press, 1999.