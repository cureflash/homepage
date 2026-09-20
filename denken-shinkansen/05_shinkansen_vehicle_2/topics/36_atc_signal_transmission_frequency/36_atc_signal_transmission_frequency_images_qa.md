# Topic 36 PowerPoint QA — ATC② 信号伝送と周波数

更新日: 2026-09-21

判定: `PASS / POWERPOINT_COMPLETE`

## reconcile

最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md` / `HANDOFF.md`、Topic 36固定EXAM_ALIGNMENT、解説source/PDF、練習source/PDFと各QAをreconcileし、未完了だった解説画像PowerPointのみを作成した。固定EXAM_ALIGNMENT、固定5問・25答案要素、既存source/PDFは変更していない。

## canonical artifact

- path: `36_atc_signal_transmission_frequency_images.pptx`
- file size: `53538 bytes`
- SHA-256: `5de0ed500adca5da90ab90b172d5c591d1bb3e37f3d81e2f2acb3a9d2fb03691`
- 16:9 / `6 slides`
- python-pptx open / geometry bounds: `6 / 6 PASS`
- PPTX text/content assertions: `PASS`
- source notes: `6 / 6 slides`
- LibreOffice PDF変換: `6 / 6 pages PASS`
- Poppler `pdftotext -layout`: `PASS`
- 置換文字 U+FFFD: `0件`
- Poppler PNG render: `6 / 6 PASS`
- 同一builderの事前visual inspection: `6 / 6 PASS`

## slide構成

1. 原信号→変調→伝送路→復調→判定、SPEC固定8項目、実車固有値の境界
2. `ω=2πf`、RLC直列共振、Q、`V_L=QV`、R8一次「理論」問5
3. AM/FM/PM・ASK/FSK/PSK/QAM、標本化・量子化・サンプルホールド、R3/H25一次
4. S/N、dB、教材用しきい値モデル、ノイズによる判定余裕
5. リピータとOSI層、MAC/IP、ストライピング・ミラーリング・パリティ・RAID5の一般原理
6. 固定5問25答案要素のPowerPointマッピング、二次0問、Topic 21固有丸め差注記

## 固定過去問接続

- R8一次「理論」問5: `5 / 5` → slide 2
- R3一次「機械」問8: `5 / 5` → slide 3
- H26一次「機械」問8: `5 / 5` → slide 5
- H25一次「機械」問8: `5 / 5` → slides 1 / 3
- H22一次「機械」問8: `5 / 5` → slides 5 / 6
- 一次: `25 / 25 connected`
- 二次: `0問`（公式科目範囲外、件数合わせなし）

## SPEC gate

- 周波数: `PASS` — slides 1 / 2 / 3
- 信号伝送: `PASS` — slides 1 / 3 / 5
- 変調: `PASS` — slides 1 / 3
- フィルタ: `PASS` — slides 2 / 3
- ノイズ: `PASS` — slide 4
- S/N: `PASS` — slide 4
- デジタル判定: `PASS` — slides 3 / 4
- 冗長化: `PASS` — slides 1 / 5 / 6
- SPEC固定8項目: `8 / 8 PASS`

## 数値・内容QA

- RLC例: `R=20 Ω`, `L=0.20 H`, `C=50 μF` → `ω0=316.2 rad/s`, `f0=50.3 Hz`, `Q=3.16`: `PASS`
- 標本化例: `fmax=3 kHz` → `fs>6 kHz`, 8 bit → `256 levels`: `PASS`
- S/N例: `V_S=1.0 V`, `V_N=0.10 V` → `20 dB`; `V_N=0.20 V` → `14.0 dB`; 約`6 dB`低下: `PASS`
- 教材用判定例: `Vth=2.5 V`, `2.3 V→0`, `+0.3 V`重畳で`2.6 V→1`: `PASS`
- リピータ=物理層、MAC=データリンク層、IP=ネットワーク層: `PASS`
- RAIDは冗長化一般原理として扱い、ATC実装と断定しない: `PASS`
- Topic 21一般式 `P=Tω`, `ω=2πN/60`: 変更なし
- H26二次問1(4) `48.1 N·m / 48.0 N·m`: `π=3.14`相当の過去問固有丸め差として注記維持

## 境界確認

- 固定EXAM_ALIGNMENT変更: `0件`
- 二次問題の件数合わせ採用: `0件`
- 未確認ATC使用周波数・変調方式・受信しきい値・S/N要求値・冗長構成の真値化: `0件`
- H22 RAIDをATC実装そのものと断定: `0件`
- Topic 37・38先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

PowerPoint工程は完了。次工程はanswer-bearing資料を先に開かないfresh workerによるclean blind candidate固定。本runは固定EXAM_ALIGNMENT・解説・練習のanswer-bearing資料を確認済みのため、clean blind candidateは作成しない。
