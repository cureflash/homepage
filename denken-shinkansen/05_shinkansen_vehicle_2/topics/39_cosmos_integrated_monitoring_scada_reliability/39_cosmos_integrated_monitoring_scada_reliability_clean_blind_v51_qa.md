# Topic 39 clean blind v51 QA

実施日: 2026-09-22
判定: `FAIL / CLEAN_BLIND_V52_REQUIRED`

## 1. Freshness

- candidate commit: `1c1e12a6707545b939c22e280d3b643ff58828ff`
- candidate固定前の参照範囲: 上位仕様、系列SPEC、sanitized `STATUS.md` / `HANDOFF.md`、question-only intake、固定5問の公式「問題」PDFのみ。
- candidate固定前の公式標準解答、v1〜v50 candidate/QA、固定EXAM_ALIGNMENT保存済み正答、Topic 39 answer-bearing教材: `未参照`
- freshness: `PASS`
- R2二次 固定5群境界: `5 / 5 maintained / PASS`

## 2. 公式標準解答との照合

公式資料:
- R4一次: https://www.shiken.or.jp/chief/upload/20220820_ch_second_a01.pdf
- R3一次: https://www.shiken.or.jp/chief/upload/20210821_ch_second_a01.pdf
- H30一次: https://www.shiken.or.jp/chief/upload/20180901_ch_second_a01.pdf
- H25一次: https://www.shiken.or.jp/chief/upload/20130831_ch_second_a01.pdf
- R2二次: https://www.shiken.or.jp/chief/upload/20201122_ch_second_a01.pdf

### 一次

| 問題 | candidate | 公式 | 一致 | 判定 |
|---|---|---|---:|---|
| R4一次「機械」問3 | `ハ / ニ / チ / カ / イ` | `ハ / ニ / チ / カ / イ` | 5 / 5 | PASS |
| R3一次「機械」問8 | `チ / ト / カ / ヌ / ヘ` | `チ / ト / カ / ヌ / ヘ` | 5 / 5 | PASS |
| H30一次「機械」問8 | `ル / ヨ / ヌ / チ / ヘ` | `ル / ヨ / ヌ / チ / イ` | 4 / 5 | FAIL |
| H25一次「機械」問8 | `ヨ / ル / ロ / ヲ / ト` | `ヨ / ル / ロ / カ / ト` | 4 / 5 | FAIL |

一次合計: `18 / 20 FAIL`。

不一致:
- H30問8(5): blankは `DHCP` サーバを要求するが、candidateは `IP` を選択。
- H25問8(4): QAMは `直交振幅変調` だが、candidateは `位相振幅変調` を選択。

### 二次 R2「電力・管理」問2

固定EXAM_ALIGNMENTの5群境界をそのまま採点単位とする。公式標準解答の補足表現を、新しい第6要素や固定群外の必須条件として追加しない。

| 固定群 | candidate要旨 | 公式との照合 | 判定 |
|---|---|---|---|
| 群1 | 高電圧・大電流を安全に扱える低い値へ変成、VT/PT・CT | 変成と代表例は一致するが、高圧回路から測定・保護回路を電気的に絶縁する役割を明示していない | FAIL |
| 群2 | `ε=(K_n-K)/K×100[%]` | 一致 | PASS |
| 群3 | 保護区間内事故で確実動作、健全時・区間外事故で不要動作しない | 公式の信頼性要件にある点検・自動監視、低故障率、冗長化を欠く | FAIL |
| 群4 | `3サイクル`＋`操作機構` | 公式は `5サイクル及び3サイクル`＋`引外しコイル（トリップコイル）` | FAIL |
| 群5 | 投入指令が残っても引外し優先、事故時の投入維持・反復投入を防止 | 一致 | PASS |

二次合計: `2 / 5 FAIL`。

総合: `20 / 25 FAIL`。

不一致診断: 一次 `concept/nomenclature error ×2`、二次 `solver omission ×2 groups + nomenclature/omission ×1 group`。教材修正理由にはしない。

## 3. 教材だけでの導出可能性

candidate固定後、現行 `39_cosmos_integrated_monitoring_scada_reliability_explanation_source.md` と固定EXAM_ALIGNMENTを照合した。

- R4一次: `5 / 5 COVERED`
- R3一次: `5 / 5 COVERED`
- H30一次: `5 / 5 COVERED`
- H25一次: `5 / 5 COVERED`
- R2二次: `5 / 5 COVERED`

教材導出可能性: `25 / 25 PASS`。

現行教材には、CT/VTの絶縁・変成、比誤差式、DHCP、QAM=直交振幅変調、保護区間内正動作/区間外正不動作・定期点検/自動監視・低故障率・冗長化、`5サイクル又は3サイクル`、引外しコイル（トリップコイル）、トリップフリーが既収録。今回の不一致は教材欠落ではなくsolver側の取りこぼし・用語選択である。

## 4. 品質ゲート

- 固定公式過去問5問: `変更なし`
- 一次4問20要素＋二次1問5要素: `変更なし`
- R2固定5群境界: `PASS`
- 教材導出可能性: `25 / 25 PASS`
- 公式標準解答一致: `20 / 25 FAIL`
- 未確認COSMOS内部実装・数値の真値化: `0件`
- 教材/PDF/練習/PPT修正: `0件`
- EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

結論: `CLEAN_BLIND V51 FAIL`。Topic 39は完了扱いにしない。

## 5. 次工程

別fresh worker/contextで `clean blind v52` を実施する。candidate固定前はquestion-only intakeと公式「問題」PDFだけを使い、R2二次の固定5群境界を維持する。`25 / 25`公式一致かつ`25 / 25`教材導出可能の場合のみTopic 39最終ゲートへ進む。

Topic 21 H26二次「機械・制御」問1(4)の48.1 N·m / 48.0 N·mは既診断の丸め差を維持し、一般式 `P=Tω`、`ω=2πN/60` は変更しない。
