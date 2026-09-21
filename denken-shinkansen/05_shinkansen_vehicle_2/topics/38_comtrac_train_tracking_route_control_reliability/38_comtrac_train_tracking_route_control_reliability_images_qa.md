# Topic 38 PowerPoint QA — COMTRAC 列車追跡・進路制御・高信頼化

更新日: 2026-09-21

判定: `PASS / POWERPOINT_COMPLETE`

## reconcile

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md` / `HANDOFF.md`、Topic 38固定EXAM_ALIGNMENT、解説source/PDF、練習source/PDFと各QAをreconcileした。

本runで未完了だった解説画像PowerPointのみを作成した。固定EXAM_ALIGNMENT、既存PDF、既存練習sourceは変更していない。

## canonical artifact

- path: `38_comtrac_train_tracking_route_control_reliability_images.pptx`
- file size: `12675 bytes`
- SHA-256: `5b0176f4d6bf5066269618e34463f0d464b0909ba9a8996d71b0bbc1fb487774`
- 16:9 / `4 slides`
- python-pptx open / geometry bounds: `4 / 4 PASS`
- PPTX text/content assertions: `PASS`
- LibreOffice PDF conversion: `4 / 4 pages PASS`
- Poppler `pdftotext -layout`: `PASS`
- extracted text chars: `5896`
- replacement character U+FFFD: `0件`
- Poppler PNG render: `4 / 4 PASS`
- visual inspection: `4 / 4 PASS`

## slide構成

1. COMTRACの公開一次資料で確認できる役割、列車追跡・状態データ・時刻情報、Topic 38固定9項目、制作境界。
2. 状態・イベント処理、FIFO・割込み・starvation、ブール代数、組合せ/順序回路、教材用インターロック式・状態遷移。R2一次問8・H23一次問8へ接続。
3. シーケンス制御とフィードバック制御、センサ/アクチュエータ、ソフトウェア試験。R8一次問8・H29一次問8へ接続。
4. UPS、バイパス、同期、`n+1`、可用性一般式・教材用仮定例、固定5問・25答案要素、SPEC 9/9、境界。H26一次問3へ接続。

## 固定過去問接続

- R8 一次「機械」問8: `5 / 5 connected` → slide 3
- R2 一次「機械」問8: `5 / 5 connected` → slide 2
- H29 一次「機械」問8: `5 / 5 connected` → slide 3
- H26 一次「機械」問3: `5 / 5 connected` → slide 4
- H23 一次「機械」問8: `5 / 5 connected` → slide 2
- 一次: `25 / 25 connected`
- 二次: `0 / 0`（当該コア論点へ直接対応する固定問題なし。件数合わせ採用 `0件`）
- 合計: `25 / 25 connected`

## SPEC gate

- 列車追跡: `PASS` — slides 1 / 4
- 状態データ: `PASS` — slides 1 / 2 / 4
- 論理処理: `PASS` — slides 1 / 2 / 3 / 4
- 時刻情報: `PASS` — slides 1 / 2 / 4
- ブール代数: `PASS` — slides 2 / 4
- インターロック: `PASS` — slides 2 / 4
- 状態遷移: `PASS` — slides 1 / 2 / 4
- 冗長化: `PASS` — slides 1 / 4
- 可用性: `PASS` — slides 1 / 4
- SPEC固定9項目: `9 / 9 PASS`

## 計算・式の独立確認

slide 4 の教材用仮定例を独立再計算した。

- `MTBF=1000 h`, `MTTR=2 h`
- `A=MTBF/(MTBF+MTTR)=1000/1002=0.998003992... ≒ 99.8004 %`
- 独立二系統・完全切替を仮定: `A_parallel=1-(1-A)^2=0.999996015... ≒ 99.9996 %`
- 数値はCOMTRAC・第二総合指令所の実可用性ではないことをスライド上で明示。

判定: `PASS`。

## 一次資料・表示境界

- JR東海: COMTRACが列車運行状況・設備状態を把握し、進路制御・運行管理等を支援する範囲だけを使用。
- JRTT: 軌道回路による列車位置検知と連動装置の一般機能を使用。
- 鉄道総研: 列車位置検知・進路制御・連動の一般説明を補助確認。
- 教材用Boolean式・状態遷移・可用性モデルを実COMTRAC内部実装として表示: `0件`
- 未確認COMTRAC内部構成・追跡アルゴリズム・進路制御論理・処理周期・装置単位冗長方式・MTBF/MTTR/可用性値の真値化: `0件`
- Topic 39 COSMOS / SCADA / A-D変換 / 計器用変成器 / 遠隔計測・遠隔制御の先取り: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

## next safe step

Topic 38 のfresh clean blind candidate固定。

clean blind candidate作成runは、固定EXAM_ALIGNMENTの保存済み正答、解説source/PDF、練習source/PDF、各QA、公式標準解答を先に開かず、question-only intakeから独立再解答する。本runはanswer-bearing資料を参照済みのため、同run内でclean blind candidateを作成しない。
