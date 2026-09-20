# 光とは何だろう――「色」の入口を電磁波と光子から考える

色彩検定3級では、色の見え方を理解する前提として光の基礎を学び、2級では光の性質や照明との関係をさらに扱う。ここではその範囲を、大学初年度の電磁気学・量子論まで拡張して説明する。

最初に結論を言えば、色は光そのものでも物体そのものでもない。物理学が扱うのは、まず電磁放射としての光と、そのスペクトルが物質との相互作用によってどう変化するかである。その結果が眼に入り、視覚系で処理されて初めて色知覚になる。

この記事では、その出発点である「光とは何か」を、Maxwell方程式、波、エネルギー輸送、光子という4つの視点から整理する。

## 1　光は電磁波である

古典電磁気学では、光は時間変化する電場 $\mathbf{E}$ と磁場 $\mathbf{B}$ が空間を伝播する電磁波である。

真空中で自由電荷密度と電流密度が0なら、Maxwell方程式は

$$
\nabla\cdot\mathbf{E}=0,
\qquad
\nabla\cdot\mathbf{B}=0
$$

$$
\nabla\times\mathbf{E}
=-\frac{\partial\mathbf{B}}{\partial t}
$$

$$
\nabla\times\mathbf{B}
=\mu_0\varepsilon_0
\frac{\partial\mathbf{E}}{\partial t}
$$

となる。

ここで重要なのは、時間変化する磁場が電場を作り、時間変化する電場が磁場を作るという相互関係である。このため、一度生じた電磁場の変化は空間を波として進むことができる。

Faradayの法則の両辺に回転を取り、

$$
\nabla\times(\nabla\times\mathbf{E})
=-\frac{\partial}{\partial t}(\nabla\times\mathbf{B})
$$

とする。ベクトル恒等式

$$
\nabla\times(\nabla\times\mathbf{E})
=\nabla(\nabla\cdot\mathbf{E})-\nabla^2\mathbf{E}
$$

と $\nabla\cdot\mathbf{E}=0$ を使えば、

$$
\nabla^2\mathbf{E}
-\mu_0\varepsilon_0
\frac{\partial^2\mathbf{E}}{\partial t^2}
=0
$$

が得られる。磁場についても同様に

$$
\nabla^2\mathbf{B}
-\mu_0\varepsilon_0
\frac{\partial^2\mathbf{B}}{\partial t^2}
=0
$$

となる。

一般的な波動方程式

$$
\nabla^2\psi-
\frac{1}{v^2}
\frac{\partial^2\psi}{\partial t^2}=0
$$

と比較すると、真空中の電磁波の速度は

$$
c=\frac{1}{\sqrt{\mu_0\varepsilon_0}}
$$

であることが分かる。

現在のSIでは真空中の光速は厳密に

$$
c=299\,792\,458\ \mathrm{m/s}
$$

と定義されている。

つまり、可視光、赤外線、紫外線、電波、X線などは別々の種類の「波」ではなく、周波数帯の異なる同じ電磁放射である。

## 2　電場・磁場・進行方向は互いに直交する

真空中を $x$ 方向へ進む単色平面波を考えると、電場を

$$
\mathbf{E}(x,t)
=\mathbf{E}_0\cos(kx-\omega t)
$$

のように書ける。

ここで

$$
k=\frac{2\pi}{\lambda},
\qquad
\omega=2\pi\nu
$$

である。

Maxwell方程式を満たす平面波では、

$$
\mathbf{E}\perp\mathbf{B},
\qquad
\mathbf{E}\perp\mathbf{k},
\qquad
\mathbf{B}\perp\mathbf{k}
$$

となる。つまり電場、磁場、進行方向は互いに直交する。

さらに真空では振幅の間に

$$
B_0=\frac{E_0}{c}
$$

という関係がある。

この「電場の向き」が、後で扱う偏光の物理的な意味になる。偏光は単なる光の色の違いではなく、電場ベクトルの振動方向に関する性質である。

## 3　波長と振動数は同じ波を別の尺度で表している

位相

$$
kx-\omega t
$$

が一定となる位置を追うと、その移動速度は

$$
v_{\mathrm{p}}=\frac{\omega}{k}
$$

となる。真空中では $v_{\mathrm{p}}=c$ なので、

$$
c=\lambda\nu
$$

が得られる。

したがって、波長 $\lambda$ と振動数 $\nu$ は独立ではない。

$$
\nu=\frac{c}{\lambda}
$$

なので、波長が短いほど振動数は高く、波長が長いほど振動数は低い。

「可視光は400〜700 nm」と丸暗記することが多いが、可視域には厳密な境界があるわけではない。CIEは、可視放射の限界は網膜へ届く放射量や観察者の感度によって変わり、下限をおおむね360〜400 nm、上限を760〜830 nmとしている。教材で400〜700 nm程度とするのは、扱いやすい近似範囲と考えるとよい。

## 4　物質に入ると「振動数はそのまま、波長が変わる」

屈折率 $n$ の透明媒質では、単純化すると光の位相速度は

$$
v_{\mathrm{p}}=\frac{c}{n}
$$

になる。

境界面を通過するとき、時間的な振動数 $\nu$ は連続でなければならないため、通常は振動数は変わらない。一方、速度が変わるので媒質中の波長は

$$
\lambda_{\mathrm{med}}
=\frac{v_{\mathrm{p}}}{\nu}
=\frac{\lambda_0}{n}
$$

となる。$\lambda_0$ は真空波長である。

したがって、ガラス中へ入った青色光の「周波数が低くなって赤になる」わけではない。変わるのは主として位相速度と媒質中波長であり、境界で振動数は保存される。

また現実の物質では $n$ は波長依存性

$$
n=n(\lambda)
$$

を持つ。この分散が、プリズムで白色光が波長ごとに異なる方向へ屈折する原因になる。

## 5　「赤い光」と「青い光」の物理的な違い

単色光について考えるなら、赤と青の違いは主に振動数と真空波長で表せる。

概略的には、

- 長波長・低振動数側：赤
- 中間：緑
- 短波長・高振動数側：青〜紫

となる。

ただし、ここで

> 波長 = 色

と考えるのは不正確である。

波長は物理量だが、色は知覚量だからである。

単一波長に対応するスペクトル色は存在するが、私たちが知覚する色のすべてが単一波長に対応するわけではない。たとえばマゼンタは単一の波長として存在しない。それでも長波長側と短波長側の光を組み合わせれば、視覚系はマゼンタ系の色を知覚する。

したがって、

> 光のスペクトルは物理量、色はその光に対する視覚系の応答である。

という区別が必要になる。

## 6　電磁波はエネルギーを運ぶ

光が物体を温めたり、太陽電池で電気エネルギーへ変換されたりするのは、電磁波がエネルギーを運んでいるからである。

電磁場のエネルギー流密度はPoyntingベクトル

$$
\mathbf{S}
=\frac{1}{\mu_0}\mathbf{E}\times\mathbf{B}
$$

で表される。

$\mathbf{E}\times\mathbf{B}$ の向きは波の進行方向と一致する。つまり、電場と磁場は単に振動しているだけではなく、その組合せによってエネルギーを空間へ運んでいる。

真空中の正弦波について時間平均を取ると、放射の強度は

$$
I=\langle S\rangle
=\frac{1}{2}c\varepsilon_0E_0^2
$$

となる。

ここで重要なのは、古典電磁波の強度が

$$
I\propto E_0^2
$$

で決まることである。電場振幅を2倍にすると、平均強度は4倍になる。

一方、人間が感じる「明るさ」はこの物理的強度そのものではない。眼の感度は波長依存であり、知覚応答も単純な比例関係ではない。放射量と測光量の違いは別記事で扱う。

## 7　光子1個のエネルギーは振動数で決まる

干渉・回折・偏光では波としての記述が有効だが、物質とのエネルギー交換では量子論が必要になる。

光子1個のエネルギーは

$$
E=h\nu
$$

であり、$c=\lambda\nu$ を使えば

$$
E=\frac{hc}{\lambda}
$$

となる。

Planck定数は現在のSIで厳密に

$$
h=6.626\,070\,15\times10^{-34}\ \mathrm{J\,s}
$$

である。

たとえば真空波長400 nmでは

$$
E\approx4.97\times10^{-19}\ \mathrm{J}
\approx3.10\ \mathrm{eV}
$$

700 nmでは

$$
E\approx2.84\times10^{-19}\ \mathrm{J}
\approx1.77\ \mathrm{eV}
$$

となる。

したがって可視域では、短波長側ほど1光子あたりのエネルギーが大きい。

これは物質の発色へ直接つながる。原子・分子・固体が持つ二つのエネルギー準位の差を $\Delta E$ とすると、

$$
\Delta E=h\nu
$$

を満たす光子との相互作用によって吸収や発光が起こりうる。

## 8　「強い青色光」と「青色の高エネルギー光子」は別の話

光子1個のエネルギーと、光全体が運ぶエネルギー流は区別しなければならない。

単色光で単位面積・単位時間あたりに到達する光子数を $\Phi$ とすると、概念的には

$$
I=\Phi h\nu
$$

と書ける。

したがって光の強度を大きくする方法には、同じ振動数の光子をより多く送ることが含まれる。

一方、振動数を高くすることは、1個の光子のエネルギーを大きくすることである。

たとえば、弱い青色光は1光子あたりのエネルギーは赤色光より大きいが、光子数が少なければ総エネルギー流は強い赤色光より小さくなりうる。

この区別は、LED、光化学、紫外線、生体作用を理解するときに重要である。

## 9　白色光には「白という波長」はない

白色光は特定の1波長ではない。

光源を物理的に表すときには、波長ごとの放射の分布

$$
S(\lambda)
$$

すなわち分光分布を使う。

太陽光、白熱電球、蛍光灯、白色LEDは、いずれも白く見える条件を作れるが、$S(\lambda)$ の形は大きく異なる。

人間の視覚は、この連続関数としてのスペクトルをそのまま保存しているわけではない。L・M・S錐体などの応答を経て、色に関する情報は低次元の信号へ圧縮される。

そのため、異なる分光分布が同じ色に見えることがある。これがメタメリズムの基礎である。

つまり、

$$
S_1(\lambda)\neq S_2(\lambda)
$$

であっても、視覚系に対する三刺激的な応答が一致すれば、

$$
\text{同じ色に見える}
$$

ことがある。

ここからXYZ表色系や等色関数へつながる。

## 10　色彩学では「光源 → 物体 → 眼」を分けて考える

色の成立を物理学から整理すると、少なくとも三段階に分けられる。

### 光源

光源は分光分布

$$
S(\lambda)
$$

を持つ。

### 物体

物体は波長ごとに光を反射、吸収、透過、散乱する。

単純な拡散反射物体なら、観察方向へ出るスペクトルの基本形は

$$
L(\lambda)
\propto
S(\lambda)R(\lambda)
$$

と考えられる。$R(\lambda)$ は分光反射率である。

透過物体なら

$$
L_{\mathrm{t}}(\lambda)
\propto
S(\lambda)T(\lambda)
$$

となる。$T(\lambda)$ は分光透過率である。

### 眼・脳

最後に、その光が網膜へ入り、錐体と神経回路で処理される。

したがって色知覚の因果関係は、

$$
\text{光源}
\rightarrow
\text{物質との相互作用}
\rightarrow
\text{眼へ入るスペクトル}
\rightarrow
\text{神経応答}
\rightarrow
\text{色知覚}
$$

と整理できる。

「リンゴが赤い」という日常表現は便利だが、物理的にはリンゴだけで赤が決まっているわけではない。光源の分光分布、リンゴの分光反射率、観察者の視覚系が組み合わさって色が成立する。

## 11　色彩検定で押さえるところ

検定レベルでは、まず次の関係を押さえる。

- 光は電磁放射であり、可視光はその一部である
- 波長と振動数は $c=\lambda\nu$ で結ばれる
- 光源からの光は物体で反射・吸収・透過され、眼に入る
- 光の分光分布が変われば、同じ物体でも見え方が変わりうる
- 白色光は「白という単一波長」ではない

大学レベルでは、さらに

$$
\nabla^2\mathbf{E}
-\mu_0\varepsilon_0
\frac{\partial^2\mathbf{E}}{\partial t^2}=0
$$

$$
\mathbf{S}
=\frac{1}{\mu_0}\mathbf{E}\times\mathbf{B}
$$

$$
I=\frac{1}{2}c\varepsilon_0E_0^2
$$

$$
E=h\nu=\frac{hc}{\lambda}
$$

を区別して理解する。

これらはそれぞれ、

- Maxwell方程式：なぜ光が波として伝わるか
- Poyntingベクトル：どうエネルギーを運ぶか
- 強度：単位面積・単位時間あたりのエネルギー流
- 光子エネルギー：物質との量子的なエネルギー交換

を表している。

光をこの4層で捉えると、反射、屈折、散乱、干渉、黒体放射、LED、加法混色までを同じ物理体系の中で理解できる。

## 参考資料

- [色彩検定協会「色彩検定とは」](https://www.aft.or.jp/pages/feature/level)
- [CIE International Lighting Vocabulary: visible radiation](https://cie.co.at/eilvterm/17-21-003)
- [NIST CODATA: speed of light in vacuum](https://physics.nist.gov/cuu/Constants/Value/c.html)
- [NIST Fundamental Physical Constants](https://physics.nist.gov/cuu/Constants/)
- [OpenStax, University Physics Volume 2, Plane Electromagnetic Waves](https://openstax.org/books/university-physics-volume-2/pages/16-2-plane-electromagnetic-waves)
- [OpenStax, University Physics Volume 2, Energy Carried by Electromagnetic Waves](https://openstax.org/books/university-physics-volume-2/pages/16-3-energy-carried-by-electromagnetic-waves)
- [OpenStax, University Physics Volume 3, Wave-Particle Duality](https://openstax.org/books/university-physics-volume-3/pages/6-6-wave-particle-duality)
