# Topic 36 ATC② 信号伝送と周波数 — 解説source QA

更新日: 2026-09-21

判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

## reconcile

- 制作開始時main HEAD: `9810423de73491809010a9cd052de6c666ae5663`
- `MASTER_SPEC.md`: 確認済み
- `EXAM_ALIGNMENT_SPEC.md`: 確認済み
- 系列 `SPEC.md`: Topic 36固定8項目を確認
- `STATUS.md` / `HANDOFF.md`: `topic_36_exam_alignment_complete`、次工程がTopic 36解説sourceであることを確認
- Topic 36 EXAM_ALIGNMENT: `PASS / EXAM_ALIGNMENT_COMPLETE`
- 既存Topic 36成果物: EXAM_ALIGNMENT source / QAのみ。解説sourceの重複なし
- 既存車両二種worker成果: Topic 35完了、Topic 36 EXAM_ALIGNMENT完了を採用し、再作業なし

## 固定過去問接続QA

固定5問・25答案要素を解説sourceへ接続した。

### R8 一次「理論」問5

- `V_L` と `V_C` の位相差 `π rad`: connected
- 共振時 `I0=V/R`: connected
- `Q=ω0L/R`: connected
- `V_L=(ω0L/R)V=QV`: connected
- `(1/R)sqrt(L/C)>1`: connected

判定: `5 / 5 connected`

### R3 一次「機械」問8

- ディジタル基礎数 `2`: connected
- 量子化 `誤差`: connected
- 積分形A-Dの `時間`: connected
- 逐次比較形の `MSB`: connected
- `サンプルホールド`: connected

判定: `5 / 5 connected`

### H26 一次「機械」問8

- `リピータ`: connected
- `データリンク` 層: connected
- `MACアドレス`: connected
- `ネットワーク` 層: connected
- `IPアドレス`: connected

判定: `5 / 5 connected`

### H25 一次「機械」問8

- `搬送波`: connected
- `復調`: connected
- `AM`: connected
- `QAM / 直交振幅変調`: connected
- `ASK`: connected

判定: `5 / 5 connected`

### H22 一次「機械」問8

- `プラッタ`: connected
- `シーク時間`: connected
- `ストライピング`: connected
- `ミラーリング`: connected
- `RAID5`: connected

判定: `5 / 5 connected`

一次合計: `25 / 25 connected`。

二次固定問題: `0問`。公式科目範囲外というEXAM_ALIGNMENT判定を維持し、件数合わせ採用 `0件`。

## SPEC固定8項目QA

- 周波数: `f`, `ω`, RLC共振、搬送波・標本化周波数へ接続
- 信号伝送: 原信号→変調→伝送路→復調→判定、物理層中継へ接続
- 変調: AM/FM/PM、ASK/FSK/PSK/QAMを収録
- フィルタ: RLC周波数選択性、標本化前帯域制限へ接続
- ノイズ: 外来ノイズと量子化誤差を区別
- S/N: 電力比、dB、同一インピーダンス時の電圧比を収録
- デジタル判定: 教材用しきい値モデル、ノイズとの関係を収録
- 冗長化: ストライピング、ミラーリング、パリティ、RAID5を一般原理として収録

判定: `8 / 8 PASS`。

## 公式・成立条件QA

- `ω=2πf`: PASS
- `X_L=ωL`: PASS
- `X_C=1/(ωC)`: PASS
- `ω0=1/sqrt(LC)`: PASS
- `f0=1/(2πsqrt(LC))`: PASS
- 共振時 `Z=R`, `I0=V/R`: PASS
- `Q=ω0L/R=1/(ω0CR)=(1/R)sqrt(L/C)`: PASS
- 共振時リアクタンス素子電圧 `QV`: PASS
- 標本化 `f_s>2f_max`: PASS
- `N` bit量子化の代表レベル数 `2^N`: PASS
- `S/N=P_S/P_N`: PASS
- 電力比dB `10log10`: PASS
- 同一インピーダンス電圧比dB `20log10`: PASS

## 3段階例題QA

### 基礎例題

`R=20 Ω`, `L=0.20 H`, `C=50 μF`

独立再計算:
- `ω0=316.2278 rad/s`
- `f0=50.3292 Hz`
- `Q=3.16228`

source表示 `316.2 rad/s`, `50.3 Hz`, `3.16` と一致。

### 本試験標準例題

最高周波数 `3 kHz`:
- ナイキスト条件: `f_s>6 kHz`
- 8 bit: `2^8=256` levels

判定: PASS。

### 複合例題

同一インピーダンス、`V_S=1.0 V`:
- `V_N=0.10 V`: `20log10(10)=20.000 dB`
- `V_N=0.20 V`: `20log10(5)=13.9794 dB`
- S/N低下量: `6.0206 dB`

source表示 `20 dB`, `14.0 dB`, 約`6 dB`低下と一致。

判定: `3 / 3 PASS`。

## 試験解法QA

MASTER / EXAM_ALIGNMENT_SPECで要求される次を収録した。

- 冒頭で科目・出題技能を明示: PASS
- 用語を関係として説明: PASS
- 公式の意味・成立条件: PASS
- テーマ固有の解法手順: PASS
- 基礎/標準/複合の3段階例題: PASS
- 新幹線/ATCへの接続: PASS
- 頻出ミス・ひっかけ: PASS
- 固定過去問での出方: PASS
- 公式・解法まとめ: PASS

## 境界QA

- R8 RLC回路をATC実機フィルタと断定: `0件`
- H22 RAIDをATC実装そのものと断定: `0件`
- 未確認ATC使用周波数の真値化: `0件`
- 未確認ATC変調方式の真値化: `0件`
- 未確認受信しきい値の真値化: `0件`
- 未確認S/N要求値の真値化: `0件`
- 未確認冗長構成の真値化: `0件`
- Topic 37の速度検出・目標速度・伝達関数・ブロック線図の先取り: `0件`
- 二次問題の件数合わせ採用: `0件`

## Topic 21固定注記

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有の丸め差という既存診断を維持した。一般式 `P=Tω`、`ω=2πN/60` の変更は `0件`。

## 最終判定

- 固定5問・25答案要素: `25 / 25 connected`
- SPEC固定8項目: `8 / 8 PASS`
- 3段階例題: `3 / 3 PASS`
- 公式・数値独立再計算: `PASS`
- 未確認実車値の真値化: `0件`
- Topic 37・38先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

Topic 36解説sourceは品質ゲートを通過した。Topic自体は未完了で、完成数は `35 / 39` のまま。次の安全な工程は解説PDF生成＋表示QAである。
