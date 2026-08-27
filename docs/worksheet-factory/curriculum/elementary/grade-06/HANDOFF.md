# 小学6年 算数 — HANDOFF

更新: 2026-08-27

## 完了

小学6年の計画済み反復技能は **15技能・45PDF** で完了した。

今回の最終3 checkpoint:

13. `unit-conversion-numeric` — 単位換算を含む数値練習 — 3 variants / 3 PDFs
14. `elementary-four-operations-review` — 小学校6年間の四則総復習 — 3 variants / 3 PDFs
15. `five-minute-calculation-challenge` — 5分間計算チャレンジ — 3 variants / 3 PDFs

公開commit: `13bbc66c66e2069dd1051e4f6a81ada8dc67f1d7`
workflow run: `33070402501` success

## 最終3 checkpointの設計

### 単位換算

長さ・質量・容量の既習単位を、整数で機械的に一意に検算できる範囲に限定した。

- m ↔ cm
- km ↔ m
- kg ↔ g
- L ↔ mL

factorと方向から保存済みanswerを参照せず独立再計算する。

### 小学校6年間の四則総復習

加法・減法・乗法・除法を各5問、合計20問に均等化した。除法は整数で割り切れる問題だけ生成する。

### 5分間計算チャレンジ

短い整数四則を各10問、合計40問。4列×10行の時間練習向けレイアウトとし、問題ページと同一配置の解答ページに赤字で答えを加える。

## 検証

`tests/test_grade6_final_three_publisher.py` で以下を検証した。

- deterministic seed再生成
- 全answerの独立再計算一致
- 問題内重複なし
- variant間差
- 既存catalogとのnormalized content hash衝突なし
- 四則総復習/5分チャレンジのA/B/C/Dではなく加減乗除の均等配分
- 除法の割り切れ条件
- 2ページPDF
- catalog validation
- publisher冪等性
- 通常整数の問題番号
- 同一配置＋赤字解答

Grade 6 workflowでは既存Grade 6全publisher/test、共通 `tests/test_worksheet_factory.py`、共有catalog writer concurrency guardまで成功してから9PDFをmainへ公開した。

## 範囲確認

現行の文部科学省・小学校算数の学習指導要領を再確認し、小学校算数全体の既習量・四則計算を総復習として扱う設計に留めた。新しい中学校内容は混ぜていない。

## 次にやること

小学6年は再開不要。次回workerは中学1年をactive gradeとして、`curriculum/junior-high/grade-01/STATUS.json` と `PLAN.md` を読み、最初の未完了技能から開始する。
