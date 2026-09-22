# Topic 39 clean blind v37 QA

実施日: 2026-09-22
判定: `FAIL / CLEAN_BLIND_V38_REQUIRED`

## 1. Freshness

- candidate commit: `3c9d5fc01011626367e852e669ca2aa4b7cca36c`
- candidate固定前に参照したTopic 39資料: 上位仕様、系列SPEC、sanitized `STATUS.md` / `HANDOFF.md`、question-only intake、固定5問の公式「問題」PDFのみ
- candidate固定前の公式標準解答、既存candidate/QA、固定EXAM_ALIGNMENTの保存済み正答、Topic 39 answer-bearing教材・QA: `未参照`
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
| H30一次「機械」問8 | `ル / ヨ / ヌ / チ / ヘ` | `ル / ヨ / ヌ / チ / イ` | 4 / 5 | FAIL |
| H25一次「機械」問8 | `ヨ / ル / ロ / ヲ / ト` | `ヨ / ル / ロ / カ / ト` | 4 / 5 | FAIL |

一次合計: `18 / 20 FAIL`。

不一致:
- H30問8(5): candidateは `IP`、公式は `DHCP`。
- H25問8(4): candidateは `位相振幅変調`、公式は `直交振幅変調(QAM)`。

### 二次 R2「電力・管理」問2

| 固定群 | 公式標準解答との一致 | 判定 |
|---|---|---|
| 群1 | 高圧回路からの絶縁、扱いやすい値への変成、CT/VTを満たす | PASS |
| 群2 | `ε=(K_n-K)/K×100[%]` | PASS |
| 群3 | 正動作・正不動作は含むが、点検・自動監視、低故障率、冗長化を欠く | FAIL |
| 群4 | 3サイクルは含むが5サイクルを欠き、受令箇所も公式の「引外しコイル（トリップコイル）」に対して「引外し装置（トリップ装置）」とした | FAIL |
| 群5 | 投入指令と競合しても引外しを優先し、事故状態で投入・開放を繰り返さない目的を満たす | PASS |

二次合計: `3 / 5 FAIL`。

総合: `21 / 25 FAIL`。

不一致診断: `solver error ×2 primary + solver omission ×2 secondary groups + nomenclature error ×1 secondary group`。教材修正理由にはしない。

## 3. 教材だけでの導出可能性

candidate固定後に固定EXAM_ALIGNMENTとTopic 39解説sourceを照合した。教材には一次4問の20要素、R2群3の正動作・正不動作・点検/自動監視・低故障率・冗長化、R2群4の5又は3サイクル・引外しコイル、R2群5のトリップフリーまで明記されている。

- R4一次5要素: `5 / 5 COVERED`
- R3一次5要素: `5 / 5 COVERED`
- H30一次5要素: `5 / 5 COVERED`
- H25一次5要素: `5 / 5 COVERED`
- R2二次5群: `5 / 5 COVERED`

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

結論: `CLEAN_BLIND V37 FAIL`。テーマ完了にはしない。

## 5. 次工程

別fresh worker/contextで `clean blind v38` を実施する。candidate固定前はquestion-only intakeと公式「問題」PDFだけを用い、R2二次は固定5群境界を維持する。`25 / 25`公式一致かつ`25 / 25`教材導出可能の場合のみ最終ゲートをPASSとする。
