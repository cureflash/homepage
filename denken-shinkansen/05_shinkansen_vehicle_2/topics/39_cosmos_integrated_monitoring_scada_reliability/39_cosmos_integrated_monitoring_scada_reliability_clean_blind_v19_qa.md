# Topic 39 clean blind v19 QA

実施日: 2026-09-22
判定: `FAIL / CLEAN_BLIND_V20_REQUIRED`

## 1. Freshness

- candidate commit: `e1c580c614b6e1da9db1b1e2c971b047988890f6`
- candidate固定前に参照したTopic 39資料: 上位仕様、系列SPEC、sanitized STATUS/HANDOFF、question-only intake、固定5問の公式「問題」PDFのみ
- v1〜v18 candidate/QA、公式標準解答、固定EXAM_ALIGNMENTの保存済み正答、Topic 39 answer-bearing教材・QA: candidate固定前 `未参照`
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

| 問題 | 一致 | 判定 |
|---|---:|---|
| R4一次「機械」問3 | 5 / 5 | PASS |
| R3一次「機械」問8 | 5 / 5 | PASS |
| H30一次「機械」問8 | 4 / 5 | FAIL |
| H25一次「機械」問8 | 5 / 5 | PASS |

一次合計: `19 / 20`。

H30一次「機械」問8(5):
- candidate: `IP`
- 公式: `DHCP`
- 問題文は「この階層で用いるアドレスは（5）サーバを用いることで自動的にクライアントへ割り当てられる」としており、空欄はアドレス種別ではなくサーバ種別を要求する。
- 診断: `solver error`。教材欠落ではない。

### 二次 R2「電力・管理」問2

| 固定群 | candidate | 公式標準解答との一致 | 判定 |
|---|---|---|---|
| 群1 | 計器用変成器の役割＋CT/VT | 要求を満たす | PASS |
| 群2 | `ε=(K_n-K)/K×100[%]` | 一致 | PASS |
| 群3 | 区間内事故時の確実動作＋不要時の誤動作防止 | 公式標準解答にある点検・自動監視、低故障率、冗長化を欠く | FAIL |
| 群4 | `3サイクル`＋操作機構（引外し機構） | 公式は `5サイクル及び3サイクル`＋`引外しコイル`。遮断時間・名称とも不完備 | FAIL |
| 群5 | トリップフリーの機能・目的 | 要求を満たす | PASS |

二次合計: `3 / 5`。

総合: `22 / 25 FAIL`。

## 3. 教材だけでの導出可能性

candidate固定後、Topic 39 sourceを照合した。

- R4一次5要素: `5 / 5 COVERED`
- R3一次5要素: `5 / 5 COVERED`
- H30一次5要素: `5 / 5 COVERED`
  - sourceは `リピータ / ブリッジ / MAC / Wi-Fi / DHCP` を明示している。
- H25一次5要素: `5 / 5 COVERED`
- R2二次5群: `5 / 5 COVERED`
  - sourceは群3について正動作・正不動作・点検/自動監視・低故障率・冗長化を明示。
  - sourceは群4について `5サイクル又は3サイクル` と引外しコイルを明示。

教材導出可能性: `25 / 25 PASS`。

よってv19の不一致3要素は教材欠落ではなく、candidate側の `solver error / omission` と判定する。

## 4. 品質ゲート

- 固定公式過去問5問: `変更なし`
- 一次4問＋二次1問: `変更なし`
- 固定25答案要素: `変更なし`
- R2固定5群境界: `PASS`
- 教材導出可能性: `25 / 25 PASS`
- 公式標準解答一致: `22 / 25 FAIL`
- 未確認COSMOS内部実装・数値の真値化: `0件`
- 系列SPEC外仕様追加: `0件`
- 教材/PDF/練習/PPT修正: `0件`
- EXAM_ALIGNMENT変更: `0件`

結論: `CLEAN_BLIND V19 FAIL`。テーマ完了にはしない。

## 5. 次工程

別fresh worker/contextで `clean blind v20` を実施する。candidate固定前はquestion-only intakeと公式「問題」PDFだけを用い、R2二次は固定5群境界を維持する。`25 / 25`公式一致かつ`25 / 25`教材導出可能の場合のみ次の最終QAへ進める。
