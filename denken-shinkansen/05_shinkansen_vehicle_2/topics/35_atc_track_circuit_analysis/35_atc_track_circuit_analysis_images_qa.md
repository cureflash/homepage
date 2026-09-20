# Topic 35 PowerPoint QA — ATC① 軌道回路の回路解析

更新日: 2026-09-21

判定: `PASS / POWERPOINT_COMPLETE`

## reconcile

最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md` / `HANDOFF.md`、Topic 35固定EXAM_ALIGNMENT、解説source/PDF、練習source/PDFと各QAをreconcileし、未完了だった解説画像PowerPointのみを作成した。固定EXAM_ALIGNMENT、固定5問・25答案要素、既存source/PDFは変更していない。

## canonical artifact

- path: `35_atc_track_circuit_analysis_images.pptx`
- file size: `55935 bytes`
- SHA-256: `0859b0d59bed70367d108f9c0102f806c1d53bd371b2766f27f9686256955a52`
- 16:9 / `6 slides`
- python-pptx open / geometry bounds: `6 / 6 PASS`
- PPTX text/content assertions: `PASS`
- source notes: `6 / 6 slides`
- LibreOffice PDF変換: `6 / 6 pages PASS`
- `pdftotext -layout`: `PASS (8118 bytes)`
- 置換文字 `�`: `0件`
- PNG render: `6 / 6 PASS`
- blank render / page-edge overflow: `0件`

## slide構成

1. 信号源→レール回路→受信器と車軸短絡、SPEC固定7項目、Topic 36・37との範囲境界
2. `Z=R+jX`、R/L/Cの複素インピーダンス、フェーザと位相、R7一次問3・問4接続
3. テブナン等価、列車なし時の受信電圧、基礎例題、R5一次問4接続
4. 車軸短絡の並列合成、全回路電流増加と受信器電流低下、受信電圧比の仮定例
5. 網目電流法、ブリッジ平衡、漏れ枝、R8一次問3・R7一次問4・R6一次問6接続
6. 本試験解法順序、固定5問25答案要素のPowerPointマッピング、フェイルセーフ境界、Topic 21固定注記

## 固定過去問接続

- R8一次「理論」問3: `5 / 5` → slide 5
- R7一次「理論」問3: `5 / 5` → slide 2
- R7一次「理論」問4: `5 / 5` → slides 2 / 5
- R6一次「理論」問6: `5 / 5` → slide 5
- R5一次「理論」問4: `5 / 5` → slide 3
- 一次: `25 / 25 connected`
- 二次: `0問`（直接対応問題未確認のため件数合わせなし）

## SPEC gate

- 軌道回路: `PASS` — slides 1 / 6
- レールインピーダンス: `PASS` — slides 1 / 2 / 3
- 車軸短絡: `PASS` — slides 1 / 4
- 受信レベル: `PASS` — slides 1 / 3 / 4
- 信号電流: `PASS` — slides 1 / 2 / 4
- 回路条件: `PASS` — slides 1 / 5 / 6
- フェイルセーフ: `PASS` — slides 1 / 6
- SPEC固定7項目: `7 / 7 PASS`

## 数値・内容QA

- 基礎例題: `Vth=12 V`, `Zth=2 Ω`, `Zr=4 Ω`, `ZR=18 Ω` → `I=0.500 A`, `VR=9.00 V`: `PASS`
- 車軸短絡例: `Zs=0.5 Ω`, `Zp=0.4878 Ω`, `I=1.541 A`, `VR=0.7519 V`, `IR=0.03759 A`, `Is=1.504 A`, `kV=0.09775`: `PASS`
- 複素インピーダンス: `Zr=Rr+jXr`, `XL=jωL`, `ZC=1/(jωC)`: `PASS`
- 網目共有枝: `Zc(I1−I2)`: `PASS`
- ブリッジ平衡: `Z1·Z3=Z2·Z4`: `PASS`
- Topic 21一般式 `P=Tω`, `ω=2πN/60`: 変更なし
- H26二次問1(4) `48.1 N·m / 48.0 N·m`: `π=3.14`相当の過去問固有丸め差として注記維持

## 境界確認

- 固定EXAM_ALIGNMENT変更: `0件`
- 二次問題の件数合わせ採用: `0件`
- 固定過去問を軌道回路そのものの出題と偽装: `0件`
- 未確認実設備値・しきい値の真値化: `0件`
- Topic 36の変調・フィルタ・S/N先取り: `0件`
- Topic 37の速度制御・ブレーキ制御先取り: `0件`
- exact blocker: `0件`

PowerPoint工程は完了。次工程はanswer-bearing資料を先に開かないfresh workerによるclean blind candidate固定。本runは固定EXAM_ALIGNMENT・解説・練習のanswer-bearing資料を確認済みのため、clean blind candidateは作成しない。
