# 透明なプラスチックに虹色が出るのはなぜか――偏光・複屈折・位相差

透明なプラスチックを2枚の偏光板ではさむと、もともと無色だった部分に虹色の模様が現れることがある。色素を加えたわけではないのに、なぜ色が生まれるのだろうか。

原因は、光が横波であり電場の振動方向を持つこと、材料の屈折率が振動方向によって異なること、そして波長ごとに位相差が変わることにある。核心は

$$
\boxed{\delta(\lambda)=\frac{2\pi}{\lambda}\Delta n(\lambda)d}
$$

である。$\Delta n=n_e-n_o$ は複屈折、$d$ は材料中を進む距離、$\delta$ は2つの偏光成分の位相差である。白色光には多くの波長が含まれるため、$\delta$は波長ごとに異なる。偏光板を通すと波長ごとの透過率に差が生まれ、それが色として見える。

## 1　色彩検定との接続

2026年度の色彩検定公式案内では、3級で「光の基礎知識」、2級で「光の性質を知る」「色の見えに関わる照明」を学ぶことが示されている。偏光や複屈折そのものは検定の中心用語ではないが、「光が物質と相互作用した結果、眼へ届く分光分布が変わり、色が生じる」という考え方を大学レベルへ拡張する題材になる。

特に本記事は、光が電磁波であること、反射・屈折が境界面での電磁波の応答で決まること、物体から眼へ届く分光分布が変われば色の見えも変わること、LCDや偏光サングラスでは光の振動方向を制御していることにつながる。

色を「波長だけの問題」と考えると偏光色は理解しにくい。光には波長だけでなく、振幅・位相・偏光という自由度もある。

## 2　光は横波なので振動方向を持つ

真空中を$z$方向へ進む単色平面波を考える。電場を

$$
\mathbf{E}(z,t)=E_0\hat{\mathbf{x}}\cos(kz-\omega t)
$$

と書けば、電場は$x$方向に振動している。電磁波では

$$
\mathbf{E}\perp\mathbf{B}\perp\mathbf{k}
$$

であり、電場と磁場は進行方向に垂直である。したがって光は横波であり、進行方向に垂直な平面内で振動方向を選べる。この電場の振動状態が偏光である。

最も単純なのが直線偏光で、電場ベクトルが一定方向に沿って振動する。位相の異なる2つの直交成分を重ねれば、円偏光や楕円偏光も作れる。

## 3　偏光板は電場を投影する――Malusの法則

直線偏光した光が偏光板へ入るとする。入射光の偏光方向と偏光板の透過軸の角度を$\theta$とすると、電場振幅は

$$
E=E_0\cos\theta
$$

となる。光強度は電場振幅の2乗に比例するため

$$
\boxed{I=I_0\cos^2\theta}
$$

を得る。これがMalusの法則である。

$\theta=0^\circ$なら$I=I_0$、$\theta=90^\circ$なら$I=0$である。したがって2枚の理想偏光板を90°ずらして置けば、単純な直線偏光はほぼ遮断される。

偏光していない光を最初の理想偏光板へ入れる場合、あらゆる偏光方向について$\cos^2\theta$を平均すると

$$
\langle\cos^2\theta\rangle=\frac12
$$

なので、強度は理想的には半分になる。

## 4　反射光も偏光する――Brewster角

偏光は偏光板だけで生じるわけではない。水面、ガラス、道路などからの反射光も偏光する。

入射面に平行な偏光をp偏光、垂直な偏光をs偏光とする。Fresnel式によれば、s偏光とp偏光では反射係数が異なる。媒質1から媒質2へ光が入射するとき、p偏光の反射がゼロになる特別な角度があり、Brewster角$\theta_B$と呼ばれる。

$$
\boxed{\tan\theta_B=\frac{n_2}{n_1}}
$$

ここで$n_1,n_2$は両媒質の屈折率である。この角度では反射光がほぼs偏光だけになる。そのため偏光サングラスは適切な向きの偏光成分を遮断し、水面や路面からのぎらつきを弱められる。

色彩の観点では、反射率が波長だけでなく偏光状態と入射角にも依存することが重要である。一般に

$$
R_s(\lambda,\theta)\neq R_p(\lambda,\theta)
$$

であり、表面から戻るスペクトルは偏光状態によっても変化しうる。

## 5　複屈折――屈折率が1つではない物質

等方的なガラスでは、同じ波長なら屈折率は基本的に偏光方向によらない。しかし結晶や配向した高分子などの異方性材料では、電場の向きによって屈折率が変わる。

単軸結晶では代表的に通常光の屈折率$n_o$と異常光の屈折率$n_e$を考える。複屈折は

$$
\boxed{\Delta n=n_e-n_o}
$$

で表せる。

1つの入射光を材料の主軸方向へ分解すると、2成分は異なる位相速度で進む。位相速度は

$$
v_p=\frac{c}{n}
$$

なので、$n_o$と$n_e$が違えば、同じ厚さを通過した後の位相がずれる。

### 5.1　なぜ偏光方向で屈折率が変わるのか――誘電率テンソル

複屈折の根本原因は、物質の電気分極が方向によって異なることにある。線形媒質では

$$
\mathbf{D}=\varepsilon_0\mathbf{E}+\mathbf{P}
$$

である。等方媒質なら $\mathbf{P}=\varepsilon_0\chi\mathbf{E}$ と書けるため

$$
\mathbf{D}=\varepsilon_0\varepsilon_r\mathbf{E}
$$

となり、光に対する応答は1個の誘電率で表せる。これに対して異方性媒質では電気感受率、したがって誘電率がテンソルになり、主誘電軸を座標軸に選べば

$$
\boxed{
\mathbf{D}=\varepsilon_0\boldsymbol{\varepsilon}_r\mathbf{E}
},\qquad
\boldsymbol{\varepsilon}_r=
\begin{pmatrix}
\varepsilon_x&0&0\\
0&\varepsilon_y&0\\
0&0&\varepsilon_z
\end{pmatrix}
$$

と書ける。つまり同じ大きさの電場を加えても、電場方向によって分極の大きさが異なる。

時間依存を $e^{-i\omega t}$ とした平面波を非磁性・損失なしの異方性媒質で考えると、Maxwell方程式は電場について

$$
\boxed{
\mathbf{k}\times(\mathbf{k}\times\mathbf{E})
+\frac{\omega^2}{c^2}\boldsymbol{\varepsilon}_r\mathbf{E}=0
}
$$

という固有値問題になる。非自明な $\mathbf{E}$ が存在する条件から、同じ進行方向に対して一般に2つの固有偏光と2つの位相定数が得られる。主軸に沿う単純な配置で、電場が主誘電軸方向の固有偏光になる場合には

$$
k_i^2=\varepsilon_i\frac{\omega^2}{c^2}
$$

したがって

$$
\boxed{n_i=\frac{ck_i}{\omega}=\sqrt{\varepsilon_i}}
$$

となる。偏光方向によって屈折率が違うという現象は、電場方向ごとの分極応答、すなわち誘電率テンソルの固有値が異なることの光学的な現れである。

単軸結晶なら主軸系で概念的に

$$
\boldsymbol{\varepsilon}_r=
\operatorname{diag}(n_o^2,n_o^2,n_e^2)
$$

と表せる。ただし一般の進行方向で異常光が感じる実効屈折率は単純に常に $n_e$ ではなく、光軸との角度にも依存する。したがって複屈折の因果関係は

$$
\boxed{
\text{結晶構造・分子配向}
\rightarrow
\boldsymbol{\varepsilon}_r\text{の異方性}
\rightarrow
\text{偏光ごとの異なる位相定数}
\rightarrow
\text{位相差}
\rightarrow
\text{偏光色}
}
$$

と整理できる。配向高分子や応力を受けたプラスチックで複屈折が生じるのも、分子配向やひずみが誘電応答の対称性を崩すためである。

## 6　位相差はなぜ厚さと複屈折に比例するのか

真空波長$\lambda$の光が厚さ$d$の複屈折材料を通るとする。屈折率$n$の媒質中で得る位相は

$$
\phi=\frac{2\pi}{\lambda}nd
$$

である。したがって2つの偏光成分の位相差は

$$
\boxed{\delta(\lambda)=\frac{2\pi}{\lambda}[n_e(\lambda)-n_o(\lambda)]d}
$$

となる。

長さとしての光路差、すなわちretardationを

$$
\Gamma(\lambda)=\Delta n(\lambda)d
$$

と置けば

$$
\boxed{\delta=\frac{2\pi\Gamma}{\lambda}}
$$

である。同じ材料・同じ厚さでも$1/\lambda$が入るため、青、緑、赤で位相差は同じにならない。さらに実際には$\Delta n$自体にも波長分散がある。ここから偏光色が生まれる。

## 7　直交偏光板の間に複屈折体を入れる

2枚の偏光板を90°で交差させ、その間に複屈折体を置く。複屈折体の主軸が最初の偏光板の軸に対して角度$\phi$だけ傾いているとする。

最初の偏光板を通った直線偏光は、複屈折体の2主軸方向へ分解される。2成分は異なる位相を受け、出口では一般に楕円偏光になる。それを2枚目の偏光板で同じ方向へ投影すると、2成分が再び重なり、位相差に応じて強め合い・弱め合いが生じる。

単色光について、最初の偏光板を通過した後の強度を$I_0$とすれば、理想的には

$$
\boxed{I(\lambda)=I_0(\lambda)\sin^2(2\phi)\sin^2\left(\frac{\delta(\lambda)}{2}\right)}
$$

となる。したがって

$$
I(\lambda)=I_0(\lambda)\sin^2(2\phi)\sin^2\left(\frac{\pi\Delta n(\lambda)d}{\lambda}\right)
$$

である。

$\phi=0^\circ$または$90^\circ$なら暗くなり、$\phi=45^\circ$なら位相差の効果が最大になる。

## 8　Jones行列で透過強度の式を導く

前節の式は、偏光を2成分の複素振幅として扱うJones calculusから直接導ける。最初の偏光板を通った光を$x$偏光として

$$
\mathbf{E}_{\mathrm{in}}=E_0
\begin{pmatrix}
1\\
0
\end{pmatrix}
$$

と書く。座標を角度$\phi$だけ回転する行列を

$$
R(\phi)=
\begin{pmatrix}
\cos\phi & -\sin\phi\\
\sin\phi & \cos\phi
\end{pmatrix}
$$

とする。

複屈折体の主軸方向で2成分が相対位相差$\delta$を受けるなら、そのJones行列は全体位相を無視して

$$
J_0(\delta)=
\begin{pmatrix}
e^{-i\delta/2} & 0\\
0 & e^{i\delta/2}
\end{pmatrix}
$$

である。主軸が実験室座標に対して$\phi$だけ傾いている場合は

$$
\boxed{J(\phi,\delta)=R(-\phi)J_0(\delta)R(\phi)}
$$

となる。

2枚目の偏光板が最初の偏光板と直交し、$y$成分だけを通すとする。そのJones行列は

$$
P_y=
\begin{pmatrix}
0&0\\
0&1
\end{pmatrix}
$$

である。したがって

$$
\mathbf{E}_{\mathrm{out}}
=P_yJ(\phi,\delta)\mathbf{E}_{\mathrm{in}}
$$

を計算すると、透過する$y$成分の複素振幅は全体位相と符号を除いて

$$
E_y=iE_0\sin(2\phi)\sin\left(\frac{\delta}{2}\right)
$$

となる。強度は複素振幅の絶対値二乗に比例するから

$$
\boxed{\frac{I}{I_0}=\sin^2(2\phi)\sin^2\left(\frac{\delta}{2}\right)}
$$

が得られる。

この導出から、偏光色は「複屈折体が色を直接発している」のではなく、2偏光成分の相対位相を変え、その後の偏光板が位相差を強度差へ変換していることが明確になる。

また、$\delta=\pi/2$なら1/4波長板、$\delta=\pi$なら1/2波長板に相当する。Jones calculusは完全偏光した光の複素振幅を扱う記述なので、偏光板を通過した後の完全偏光成分には非常に便利である。一方、自然光のような非偏光光や部分偏光光まで一貫して扱うには、次節のStokes–Mueller形式が必要になる。

### 8.1　Jones行列の限界――自然光はStokesベクトルで扱う

太陽光、白熱放射、LEDなどの実在光源は、一般には「$x$成分と$y$成分の位相差が時間的に固定された1本のJonesベクトル」では表せない。偏光状態が高速に揺らぐ非偏光光や、偏光成分と非偏光成分が混在した部分偏光光では、電場そのものではなく時間平均された相関量を使う。

その代表がStokesベクトル

$$
\boxed{
\mathbf{S}=
\begin{pmatrix}
S_0\\S_1\\S_2\\S_3
\end{pmatrix}
}
$$

である。複素電場を$E_x,E_y$とし、十分長い時間平均を$\langle\cdot\rangle$で表すと、1つの代表的な符号規約では

$$
S_0=\left\langle |E_x|^2+|E_y|^2\right\rangle,
$$

$$
S_1=\left\langle |E_x|^2-|E_y|^2\right\rangle,
$$

$$
S_2=2\operatorname{Re}\left\langle E_xE_y^*\right\rangle,
$$

$$
S_3=-2\operatorname{Im}\left\langle E_xE_y^*\right\rangle
$$

と書ける。$S_0$は全強度、$S_1,S_2$は直線偏光、$S_3$は円偏光に対応する。なお$S_3$の符号は右・左円偏光の定義によって文献間で逆になることがある。

偏光度は

$$
\boxed{
P=\frac{\sqrt{S_1^2+S_2^2+S_3^2}}{S_0}
},\qquad 0\le P\le1
$$

で定義できる。$P=1$なら完全偏光、$P=0$なら理想的な非偏光光である。

Jones行列に対応して、Stokesベクトルを変換する4×4実行列をMueller行列$M$と呼ぶ。波長依存性まで書けば

$$
\boxed{
\mathbf{S}_{\mathrm{out}}(\lambda)
=M(\lambda)\mathbf{S}_{\mathrm{in}}(\lambda)
}
$$

となる。理想的な非偏光入射光なら

$$
\mathbf{S}_{\mathrm{in}}(\lambda)=
\begin{pmatrix}
I(\lambda)\\0\\0\\0
\end{pmatrix}
$$

である。透過軸が$\theta$の理想直線偏光板を通ると、$c=\cos2\theta$、$s=\sin2\theta$として

$$
M_P(\theta)=\frac12
\begin{pmatrix}
1&c&s&0\\
c&c^2&cs&0\\
s&cs&s^2&0\\
0&0&0&0
\end{pmatrix}
$$

だから

$$
\mathbf{S}_{\mathrm{out}}
=\frac{I}{2}
\begin{pmatrix}
1\\c\\s\\0
\end{pmatrix}
$$

となる。つまり「非偏光光の半分が捨てられ、残りが直線偏光になる」という第3節の結果を、偏光状態まで含めて表現できる。

この後に複屈折体のMueller行列、さらに2枚目の偏光板のMueller行列を順に掛ければ、非偏光の白色光から出発して偏光色が生まれる過程を統計光学として一貫して追跡できる。

### 8.2　白色光では異なる波長の電場を直接足さない

白色光を扱うときには、もう1つ重要な点がある。異なる波長成分は一般に固定された相対位相を持たないため、可視域全体の電場を1本のJonesベクトルとして足し合わせて色を計算するのではない。

まず各波長ごとに

$$
\mathbf{S}_{\mathrm{out}}(\lambda)
=M(\lambda)\mathbf{S}_{\mathrm{in}}(\lambda)
$$

を計算し、検出される分光強度

$$
\boxed{I_{\mathrm{out}}(\lambda)=S_{0,\mathrm{out}}(\lambda)}
$$

を求める。眼や通常の測色器は光の電場振動そのものを追跡できず、非常に速い光学振動を時間平均した強度を受け取るためである。

したがって偏光色の計算は

$$
\boxed{
\text{偏光状態の変換}
\rightarrow
I_{\mathrm{out}}(\lambda)
\rightarrow
XYZ
}
$$

という2段階になる。偏光光学と測色学の接点は、電場そのものではなく、最終的に得られた波長別の強度分布である。

## 9　白色光では波長ごとの透過率が違う

白色光の分光分布を$S_{\mathrm{in}}(\lambda)$とする。複屈折体＋直交偏光板系の分光透過率を$T(\lambda)$とすると

$$
\boxed{S_{\mathrm{out}}(\lambda)=S_{\mathrm{in}}(\lambda)T(\lambda)}
$$

である。先ほどの式から

$$
T(\lambda)\propto\sin^2(2\phi)\sin^2\left(\frac{\pi\Delta n(\lambda)d}{\lambda}\right)
$$

となる。この$T(\lambda)$は波長に対して周期的に変化する。ある波長は強く通り、別の波長は弱くなるため、もとの白色スペクトルが選択的に削られる。その結果、透明だった材料が色づいて見える。

重要なのは、この色が通常の顔料の選択吸収だけで生じているわけではないことである。偏光成分の位相差と投影による波長選択がスペクトルを作り変えている。

## 10　見える色をXYZまで計算できる

偏光系を出た分光分布$S_{\mathrm{out}}(\lambda)$が分かれば、色は通常の測色計算へ接続できる。

$$
X=k\int S_{\mathrm{out}}(\lambda)\bar{x}(\lambda)d\lambda
$$

$$
Y=k\int S_{\mathrm{out}}(\lambda)\bar{y}(\lambda)d\lambda
$$

$$
Z=k\int S_{\mathrm{out}}(\lambda)\bar{z}(\lambda)d\lambda
$$

したがって

$$
\boxed{\Delta n,\ d,\ \phi,\ S_{\mathrm{in}}(\lambda)\rightarrow T(\lambda)\rightarrow XYZ\rightarrow\text{色}}
$$

という計算経路を作れる。これは「虹色に見える」という現象を感覚的に説明するだけでなく、材料特性から実際の色を数値予測できることを意味する。

## 11　厚さが変わると色が変わる

位相差は$d$に比例するため、材料の厚さが変われば色も変わる。同じ複屈折$\Delta n$でも、薄い部分と厚い部分では

$$
\Gamma=\Delta n d
$$

が異なる。

偏光顕微鏡では、このretardationと色の関係を利用して鉱物や結晶を調べる。Michel–Lévy chartは、厚さ、複屈折、偏光色の対応を見るために使われる。

低いretardationでは灰色から黄、赤紫などへ変化し、その後さらに高次の色が現れる。retardationが大きくなると波長ごとの透過変化が細かくなり、色は次第に複雑になる。

## 12　透明プラスチックの虹色は応力を見ている

アクリルやポリカーボネートなどの高分子材料は、成形や荷重によって分子配向や内部応力が生じると、もともと等方的だった材料が光学的に異方的になることがある。応力によって生じる複屈折を応力複屈折という。

単純化した光弾性モデルでは、主応力差$\sigma_1-\sigma_2$に対して

$$
\boxed{\Delta n=C(\sigma_1-\sigma_2)}
$$

と書ける。$C$は材料に依存する光弾性係数である。するとretardationは

$$
\Gamma=Cd(\sigma_1-\sigma_2)
$$

となる。

つまり偏光板の間で見える色模様は、場所ごとの応力差を光学的な位相差へ変換したものと解釈できる。透明な定規、プラスチック容器、成形品などを直交偏光板ではさむと色模様が見えるのはこのためである。

### 12.1　縞次数から主応力差を逆算できる

光弾性を単色光で観察すると、虹色ではなく明暗の縞として応力分布を読める。第7節の透過強度式で、主応力軸が偏光板に対して$\phi=45^\circ$となる位置を考えると、$\sin^2(2\phi)=1$なので

$$
\frac{I}{I_0}
=
\sin^2\left(\frac{\pi\Delta n d}{\lambda}\right)
$$

となる。ここへ応力光学則

$$
\Delta n=C(\sigma_1-\sigma_2)
$$

を代入すれば

$$
\boxed{
\frac{I}{I_0}
=
\sin^2\left[
\frac{\pi C d(\sigma_1-\sigma_2)}{\lambda}
\right]
}
$$

を得る。したがって暗線が現れる条件は

$$
C d(\sigma_1-\sigma_2)=m\lambda,
\qquad m=0,1,2,\ldots
$$

である。

retardation $\Gamma=Cd(\sigma_1-\sigma_2)$ を波長で割った

$$
\boxed{
N=\frac{\Gamma}{\lambda}
=
\frac{Cd(\sigma_1-\sigma_2)}{\lambda}
}
$$

を縞次数とみなせば、整数次の暗線について

$$
\boxed{
\sigma_1-\sigma_2
=
\frac{N\lambda}{Cd}
}
$$

となる。つまり、材料の光弾性係数$C$と厚さ$d$が既知なら、縞次数を数えることで主応力差を逆算できる。ただし得られるのは個々の$\sigma_1,\sigma_2$ではなく、その差である。

一般の透過強度式

$$
\frac{I}{I_0}
=
\underbrace{\sin^2(2\phi)}_{\text{主軸の向き}}
\underbrace{\sin^2\left[
\frac{\pi Cd(\sigma_1-\sigma_2)}{\lambda}
\right]}_{\text{主応力差}}
$$

を見ると、模様には二種類の情報が重なっていることも分かる。$\phi=0^\circ,90^\circ$で暗くなる線は主応力方向に由来するisoclinic、同じretardation、すなわち同じ主応力差を結ぶ線はisochromaticである。

白色光では$\lambda$が連続的に分布するため、同じ主応力差でも消光条件を満たす縞次数が波長ごとにずれる。ある場所では赤が弱まり、別の場所では緑や青が弱まるため、単色光での明暗縞が白色光では色縞へ変わる。因果関係は

$$
\boxed{
\text{応力}
\rightarrow
\Delta n
\rightarrow
\Gamma
\rightarrow
T(\lambda)
\rightarrow
\text{分光分布}
\rightarrow
\text{色}
}
$$

と整理できる。透明プラスチックの虹色は、単なる「きれいな干渉色」ではなく、力学量を光学量へ変換した可視化でもある。

## 13　LCDも偏光を使って明暗を制御する

液晶ディスプレイも偏光を利用する代表例である。LCDでは、偏光板と液晶層を組み合わせ、液晶分子の配向を電場で変えることで透過する偏光状態を制御する。最終的にもう一方の偏光板を通る光量が変化し、画素の明暗を作る。

カラーLCDでは、通常はこの光量制御にRGBカラーフィルターなどを組み合わせて色を表示する。したがってLCDの色は、バックライトの分光分布、偏光板・液晶層による光量制御、RGBフィルターの分光透過率の組み合わせで決まる。

## 14　偏光色と薄膜干渉色は何が違うのか

シャボン玉や油膜の色では、異なる光路を進んだ反射光が重なり、光路差による干渉で波長選択が起こる。

複屈折体を直交偏光板で観察する場合は、まず直交する偏光成分に位相差が生じる。直交したままならその2成分は直接スカラー的には干渉しないが、最後の偏光板で同じ軸方向へ投影されることで、位相差が強度差へ変換される。

最終的にはどちらも

$$
\text{波長依存の位相差}\rightarrow\text{波長依存の透過・反射}\rightarrow\text{色}
$$

という構造を持つ。ただし、位相差を作る物理過程と偏光の役割は異なる。

## 15　色を「スペクトル変換」として統一的に見る

偏光現象まで含めると、物体から眼へ届く光は単純な反射率だけでは表せない場合がある。一般化すれば、光学系は入射スペクトルへ波長依存の伝達関数を作用させる。

$$
\boxed{S_{\mathrm{out}}(\lambda)=S_{\mathrm{in}}(\lambda)T(\lambda)}
$$

顔料では$T(\lambda)$を主に吸収・散乱が決める。薄膜では位相差が決める。偏光光学では、偏光状態・複屈折・偏光板の向きが$T(\lambda)$を決める。

最終的に色として知覚されるかどうかは、出力スペクトルを等色関数や錐体感度で積分した結果による。この見方を持つと、色素色、構造色、偏光色を別々の暗記事項ではなく、「光学系がスペクトルをどう変換したか」という共通の枠組みで整理できる。

## 16　まとめ

偏光色の出発点は、光が横波であり電場の振動方向を持つことである。複屈折材料では2つの偏光成分が異なる屈折率を受けるため

$$
\delta(\lambda)=\frac{2\pi\Delta n(\lambda)d}{\lambda}
$$

という波長依存の位相差が生じる。

直交偏光板では、この位相差が

$$
I(\lambda)\propto\sin^2(2\phi)\sin^2\left(\frac{\pi\Delta n(\lambda)d}{\lambda}\right)
$$

という波長依存の透過強度へ変換される。Jones行列で見ると、複屈折体が作る相対位相差を最後の偏光板が強度差へ変換していることが数式として明確になる。さらに非偏光・部分偏光まで含める場合は、StokesベクトルとMueller行列で各波長の偏光状態を変換し、最終的な$S_0(\lambda)$を測色計算へ渡せばよい。

透明プラスチックの虹色、偏光顕微鏡、応力解析、LCDは、すべて「偏光状態を操作して光の強度やスペクトルを変える」という同じ電磁波の性質につながっている。

## 参考資料

- 色彩検定協会「色彩検定とは」 https://www.aft.or.jp/pages/feature/level
- OpenStax, *University Physics Volume 3*, 1.7 Polarization. https://openstax.org/books/university-physics-volume-3/pages/1-7-polarization
- MIT OpenCourseWare, “Lecture 17: Polarization, Polarizer,” *Physics III: Vibrations and Waves*. https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/pages/part-iii-optics/lecture-17/
- Physics LibreTexts, “Maxwell Equations in Matter.” https://phys.libretexts.org/Bookshelves/Optics/BSc_Optics_%28Konijnenberg_Adam_and_Urbach%29/01%3A_Basic_Electromagnetic_and_Wave_Optics/1.04%3A_Maxwell_Equations_in_Matter
- Physics LibreTexts, “Creating and Manipulating Polarisation States.” https://phys.libretexts.org/Bookshelves/Optics/BSc_Optics_%28Konijnenberg_Adam_and_Urbach%29/04%3A_Polarization/4.03%3A_Creating_and_Manipulating_Polarisation_States
- RP Photonics Encyclopedia, “Birefringence.” https://www.rp-photonics.com/birefringence.html
- RP Photonics Encyclopedia, “Retardance.” https://www.rp-photonics.com/retardance.html
- RP Photonics Encyclopedia, “Waveplates.” https://www.rp-photonics.com/waveplates.html
- RP Photonics Encyclopedia, “Unpolarized Light.” https://www.rp-photonics.com/unpolarized_light.html
- Nikon MicroscopyU, “Principles of Birefringence.” https://www.microscopyu.com/techniques/polarized-light/principles-of-birefringence
- 青山学院大学 米山研究室「光弾性法 Photoelasticity」 https://www.me.aoyama.ac.jp/~yoneyama/PE.html
- Shribak, M. (2015), “Polychromatic polarization microscope: bringing colors to a colorless world,” *Scientific Reports* 5, 17340. https://doi.org/10.1038/srep17340
- Russell A. Chipman, Wai-Sze Tiffany Lam, Garam Young, *Polarized Light and Optical Systems*, CRC Press, 2018. https://www.routledge.com/Polarized-Light-and-Optical-Systems/Chipman-Lam-Young/p/book/9781498700566
- CIE, *Colorimetry, 4th Edition*, CIE 015:2018. https://cie.co.at/publications/colorimetry-4th-edition
- Eugene Hecht, *Optics*, Pearson.
- Max Born and Emil Wolf, *Principles of Optics*, Cambridge University Press.