# Topic 39 clean blind v48 QA

実施日: 2026-09-22
判定: `FAIL / CLEAN_BLIND_V49_REQUIRED`

## 1. Freshness

- candidate commit: `bb28177efa1ce234fb4f6ded03761ae7f8c682ac`
- candidate固定前に参照したTopic 39資料: 上位仕様、系列SPEC、sanitized `STATUS.md` / `HANDOFF.md`、question-only intake、固定5問の公式「問題」PDFのみ
- candidate固定前の公式標準解答、v1〜v47 candidate/QA、固定EXAM_ALIGNMENTの保存済み正答、Topic 39 answer-bearing教材・QA: `未参照`
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
| H25一次「機械」問8 | `ヨ / ル / ロ / ワ / ト` | `ヨ / ル / ロ / カ / ト` | 4 / 5 | FAIL |

一次合計: `19 / 20 FAIL`。

H25問8(4)はcandidateが「位相振幅変調（ワ）」としたが、公式は「直交振幅変調（カ）」。QAMの概念・選択肢対応を誤った。

### 二次 R2「電力・管理」問2

| 固定群 | candidate要旨 | 公式標準解答との一致 | 判定 |
|---|---|---|---|
| 群1 | 高電圧・大電流を扱いやすい値へ変成し絶縁、VT/PT・CT | 役割・絶縁・代表変成器を満たす | PASS |
| 群2 | `ε=(K_n-K)/K×100[%]` | 一致 | PASS |
| 群3 | 必要事故時に確実動作し、不要時に誤動作しない | 点検・自動監視、低故障率、冗長化を欠く | FAIL |
| 群4 | `3サイクル`＋`引外し装置（引外しコイルを含む）` | 公式は `5サイクル及び3サイクル`＋`引外しコイル（トリップコイル、TC）`。5サイクルと指定名称を欠く | FAIL |
| 群5 | 投入指令継続中でも引外しを優先し、事故回路の投入保持・再投入を防ぐ | 投入・開放反復の防止と、それによる遮断器損傷・大事故防止という目的の明示が不足 | FAIL |

二次合計: `2 / 5 FAIL`。

総合: `21 / 25 FAIL`。

不一致診断: 一次 `concept/nomenclature error ×1`、二次 `solver omission ×3 groups`。教材修正理由にはしない。

## 3. 教材だけでの導出可能性

candidate固定後に既存 `39_cosmos_integrated_monitoring_scada_reliability_explanation_source.md` を照合した。固定25答案要素を導出する記述は維持されている。

- R4一次5要素: `5 / 5 COVERED`
- R3一次5要素: `5 / 5 COVERED`
- H30一次5要素: `5 / 5 COVERED`
- H25一次5要素: `5 / 5 COVERED`
- R2二次5群: `5 / 5 COVERED`
  - 群1: 主回路/高圧回路から計測・保護回路を絶縁し、扱いやすい値へ変成、CT/VTを明示。
  - 群2: `ε=(K_n-K)/K×100[%]` を明示。
  - 群3: 区間内正動作、区間外正不動作、定期点検・自動監視、低故障率、冗長化を明示。
  - 群4: `5サイクル又は3サイクル`、`引外しコイル（トリップコイル）`を明示。
  - 群5: 投入指令と引外し指令が競合しても引外しを優先し、事故状態で投入・開放を繰り返さないトリップフリーを明示。

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

結論: `CLEAN_BLIND V48 FAIL`。テーマ完了にはしない。

## 5. 次工程

別fresh worker/contextで `clean blind v49` を実施する。candidate固定前はquestion-only intakeと公式「問題」PDFだけを用い、R2二次は固定5群境界を維持する。`25 / 25`公式一致かつ`25 / 25`教材導出可能の場合のみTopic 39最終ゲートへ進める。
