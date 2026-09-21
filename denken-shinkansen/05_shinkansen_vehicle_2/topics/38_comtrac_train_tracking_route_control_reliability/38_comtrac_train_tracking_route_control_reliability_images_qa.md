# Topic 38 PowerPoint QA — COMTRAC 列車追跡・進路制御・高信頼化

更新日: 2026-09-21

判定: `PASS / POWERPOINT_REMEDIATED`

## reconcile

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md` / `HANDOFF.md`、Topic 38 の remediated EXAM_ALIGNMENT、解説source、練習source、再生成済み解説PDF / 練習PDFと各QAをreconcileした。

clean blind v1以前のPowerPointはremediation前の内容を含むため流用せず、remediated sourceから新規生成した。固定EXAM_ALIGNMENT、既存PDF、既存sourceは変更していない。

## canonical artifact

- path: `38_comtrac_train_tracking_route_control_reliability_images.pptx`
- file size: `8974 bytes`
- SHA-256: `078e48bcfb9da88bb8367f8f3e2b1a5f5d6276418c63c3d695a79e106e808c04`
- 16:9 / `4 slides`
- python-pptx open: `PASS`
- geometry bounds: bounds外shape `0件 / PASS`
- PPTX ZIP integrity: `PASS`
- LibreOffice PDF conversion: `4 / 4 pages PASS`
- Poppler `pdftotext -layout`: `3723 chars / U+FFFD 0件 / PASS`
- Poppler PNG render: `4 / 4 PASS`
- visual inspection: `4 / 4 PASS`

## slide構成

1. 公開一次資料で確認できるCOMTRACの役割、列車追跡・状態データ・時刻情報、SPEC固定9項目、断定しない境界。
2. 状態・イベント処理、FIFO・割込み・starvation、組合せ/順序回路、フリップフロップ、ノイマン形コンピュータ、ASIC、Quine–McCluskey法、教材用インターロック式・状態遷移。R2一次問8・H23一次問8へ接続。
3. シーケンス制御とフィードバック制御、角位置センサ、ステッピングモータのオープンループ簡易位置決めと脱調条件、ソフトウェア試験工程。R8一次問8・H29一次問8へ接続。
4. UPS、蓄電池、直流スイッチ、バイパス、同期、並列冗長、`n+1`、可用性一般式・教材用仮定例、固定品質ゲート。H26一次問3へ接続。

## clean blind v1 remediation反映

- R8一次「機械」問8(5): 角位置センサなしのオープンループ簡易位置決め、過負荷・急加減速時の脱調を明示: `PASS`
- H23一次「機械」問8(3): ノイマン形コンピュータの記憶プログラム方式・原則逐次命令実行を明示: `PASS`
- H29一次「機械」問8(4): 単体→結合→システム試験で対象プログラム量・範囲が大きくなることを明示: `PASS`
- H29/H23実空欄mapping: `10 / 10 PASS`
- remediation必須3点: `3 / 3 PASS`

## 固定過去問接続

- R8 一次「機械」問8: `5 / 5 connected`
- R2 一次「機械」問8: `5 / 5 connected`
- H29 一次「機械」問8: `5 / 5 connected`
- H26 一次「機械」問3: `5 / 5 connected`
- H23 一次「機械」問8: `5 / 5 connected`
- 一次: `25 / 25 connected`
- 二次: `0 / 0`（当該コア論点へ直接対応する固定問題なし。件数合わせ採用 `0件`）
- 合計: `25 / 25 connected`

## SPEC gate

- 列車追跡: `PASS`
- 状態データ: `PASS`
- 論理処理: `PASS`
- 時刻情報: `PASS`
- ブール代数: `PASS`
- インターロック: `PASS`
- 状態遷移: `PASS`
- 冗長化: `PASS`
- 可用性: `PASS`
- SPEC固定9項目: `9 / 9 PASS`

## 計算・式の独立確認

slide 4 の教材用仮定例を独立再計算した。

- `MTBF=1000 h`, `MTTR=2 h`
- `A=MTBF/(MTBF+MTTR)=1000/1002=0.998003992... ≒ 99.8004 %`
- 独立二系統・完全切替を仮定: `A_parallel=1-(1-A)^2=0.999996015... ≒ 99.9996 %`
- 数値はCOMTRAC・第二総合指令所の実可用性ではないことをスライド上で明示。

判定: `PASS`。

## 境界QA

- 教材用Boolean式・状態遷移・可用性モデルを実COMTRAC内部実装として表示: `0件`
- 未確認COMTRAC内部構成・追跡アルゴリズム・進路制御論理・処理周期・装置単位冗長方式・MTBF/MTTR/可用性値の真値化: `0件`
- Topic 39の内容を教材本文として先取り: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

## next safe step

Topic 38 の fresh clean blind v2 candidate 固定。

v2 candidate作成runは、保存済み正答、解説source/PDF、練習source/PDF、各QA、公式標準解答を先に開かず、question-only intakeから独立再解答する。v1 candidateは変更せず、v2を別candidateとして固定する。
