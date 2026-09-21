# Topic 39 clean blind v31 QA

実施日: 2026-09-22
判定: `FAIL / CLEAN_BLIND_V32_REQUIRED`

## 1. Freshness

- candidate commit: `f2614f5629d12857a83529302bdc610dc9030d91`
- candidate固定前に参照したTopic 39資料: 上位仕様、系列SPEC、sanitized `STATUS.md` / `HANDOFF.md`、question-only intake、固定5問の公式「問題」PDFのみ
- candidate固定前の公式標準解答、v1〜v30 candidate/QA、固定EXAM_ALIGNMENTの保存済み正答、Topic 39 answer-bearing教材・QA: `未参照`
- freshness: `PASS`
- R2二次 固定5群境界: `5 / 5 maintained / PASS`

## 2. 公式標準解答との照合

公式資料:
- R4一次 解答: https://www.shiken.or.jp/chief/upload/20220820_ch_second_a01.pdf
- R3一次 解答: https://www.shiken.or.jp/chief/upload/20210821_ch_second_a01.pdf
- H30一次 解答: https://www.shiken.or.jp/chief/upload/20180901_ch_second_a01.pdf
- H25一次 解答: https://www.shiken.or.jp/chief/upload/20130831_ch_second_a01.pdf
- R2二次 標準解答: https://www.shiken.or.jp/chief/upload/20201122_ch_second_a01.pdf

### 一次

| 問題 | candidate | 公式 | 一致 | 判定 |
|---|---|---|---:|---|
| R4一次「機械」問3 | `ハ / ニ / チ / カ / イ` | `ハ / ニ / チ / カ / イ` | 5 / 5 | PASS |
| R3一次「機械」問8 | `チ / ト / カ / ヌ / ヘ` | `チ / ト / カ / ヌ / ヘ` | 5 / 5 | PASS |
| H30一次「機械」問8 | `ル / ヨ / ヌ / チ / イ` | `ル / ヨ / ヌ / チ / イ` | 5 / 5 | PASS |
| H25一次「機械」問8 | `コ / ル / ロ / カ / ト` | `ヨ / ル / ロ / カ / ト` | 4 / 5 | FAIL |

H25問8(1)はcandidate本文の語義「搬送波」自体は正しいが、選択記号を存在しない `コ` と誤記した。公式は `ヨ`。

一次合計: `19 / 20 FAIL`。

### 二次 R2「電力・管理」問2

| 固定群 | candidate | 公式標準解答との一致 | 判定 |
|---|---|---|---|
| 群1 | 高電圧・大電流を計器/保護リレーで扱える値へ変成、VT/CT | 変成と代表2種は満たすが、高圧回路からの絶縁という役割を明示していない | FAIL |
| 群2 | `ε=(K_n-K)/K×100[%]` | 一致 | PASS |
| 群3 | 必要時の確実動作＋不要時の不動作 | 公式標準解答の点検・自動監視、低故障率、冗長化を欠く | FAIL |
| 群4 | `3サイクル`＋`引外し装置` | 公式は `5サイクル及び3サイクル`＋`引外しコイル（トリップコイル、TC）`。5サイクルを欠き、名称も公式名称と不一致 | FAIL |
| 群5 | 投入操作中・投入指令継続中でも引外しを優先し、事故状態で投入保持・再投入を防ぐ | 機能・目的を満たす | PASS |

二次合計: `2 / 5 FAIL`。

総合: `21 / 25 FAIL`。

不一致診断: `solver transcription error ×1 + solver omission ×3 groups + nomenclature error ×1 group`。教材修正理由にはしない。

## 3. 教材だけでの導出可能性

candidate固定後に最新main、v30 QA、Topic 39 sourceをreconcileした。v30以降、answer-bearing教材本体の変更はなく、固定25答案要素への教材接続は維持されている。

- R4一次5要素: `5 / 5 COVERED`
- R3一次5要素: `5 / 5 COVERED`
- H30一次5要素: `5 / 5 COVERED`
- H25一次5要素: `5 / 5 COVERED`
- R2二次5群: `5 / 5 COVERED`
  - 群1: 高圧回路からの絶縁、扱いやすい値への変成、CT/VTを明示。
  - 群2: `ε=(K_n-K)/K×100[%]` を明示。
  - 群3: 区間内正動作、区間外正不動作、点検・自動監視、低故障率、冗長化を明示。
  - 群4: `5サイクル又は3サイクル`、引外しコイル（トリップコイル）を明示。
  - 群5: トリップフリーの機能と目的を明示。

教材導出可能性: `25 / 25 PASS`。

## 4. 品質ゲート

- 固定公式過去問5問: `変更なし`
- 一次4問＋二次1問: `変更なし`
- 固定25答案要素: `変更なし`
- R2固定5群境界: `PASS`
- 教材導出可能性: `25 / 25 PASS`
- 公式標準解答一致: `21 / 25 FAIL`
- 未確認COSMOS内部実装・数値の真値化: `0件`
- 系列SPEC外仕様追加: `0件`
- 教材/PDF/練習/PPT修正: `0件`
- EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

結論: `CLEAN_BLIND V31 FAIL`。テーマ完了にはしない。

## 5. 次工程

別fresh worker/contextで `clean blind v32` を実施する。candidate固定前はquestion-only intakeと公式「問題」PDFだけを用い、R2二次は固定5群境界を維持する。`25 / 25`公式一致かつ`25 / 25`教材導出可能の場合のみ次の最終QAへ進める。
