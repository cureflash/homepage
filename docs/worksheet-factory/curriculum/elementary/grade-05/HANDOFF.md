# 小学5年 算数 — HANDOFF

更新: 2026-08-27

## 今回完了したcheckpoint

1. `fraction-add-sub-mixed` — 分数計算混合 — 3 variants / 3 PDFs
2. `decimal-percent-conversion` — 小数・百分率の変換 — 3 variants / 3 PDFs
3. `basic-ratio-calculation` — 割合の基本数値計算 — 3 variants / 3 PDFs
4. `grade5-review` — 小学5年 算数 総復習 — 3 variants / 3 PDFs

今回 **4技能・12PDF** を追加公開した。これまでの12技能と合わせ、小学5年は **16技能・48PDF** で計画済み範囲を完了した。

## カリキュラム確認

文部科学省「小学校学習指導要領（平成29年告示）解説 算数編」で、第5学年に割合・百分率を用いた表し方と割合を求める学習が配置されていることを確認してから実装した。分数計算混合は第5学年で扱う加法・減法だけに限定し、分数の乗法・除法は小学6年へ送った。

## 実装・検証

- publisher: `scripts/publish_grade5_final_four.py`
- test: `tests/test_grade5_final_four_publisher.py`
- workflow: `.github/workflows/grade5-core-publish.yml`
- 各技能3seed（`11014 / 11115 / 11216`）、各20問。
- `fraction-add-sub-mixed` は異分母を含む3項の加減だけを生成し、`Fraction` で独立再計算する。結果が正になる問題だけを採用する。
- `decimal-percent-conversion` は小数→百分率と百分率→小数を10問ずつ出し、`Fraction` で同値性を検証する。
- `basic-ratio-calculation` は「割合を求める / 比べる量を求める / もとにする量を求める」を分散し、整数として一意に解ける数値条件に限定する。
- `grade5-review` は小数乗法・異分母分数加法・百分率・約数列挙を各5問ずつ組み合わせる。
- 問題内重複、variant間差、既存catalogとのnormalized content hash衝突を検査する。
- 問題番号は通常整数表記。
- 2ページ目は問題ページと同じ配置を保持し、答えだけ赤字で追加する。
- Grade 5 workflowで既存publisher/test、新publisher/test、`tests/test_worksheet_factory.py` を実行し、全step success後に公開commitを生成した。
- workflow run: `33048183296` success
- publish commit: `1a8294444b39fd74544c867504fa59a50630ae2c`

## 現在の公開範囲

小学5年: **16技能・48PDF**。STATUSは `done`。

公開先: `materials/worksheets/elementary/grade-05/`

## 次にやること

小学5年は完了。次runでは小学6年をactive gradeとして `PLAN.md` の先頭 **「分数×整数」** から開始する。

小学6年でも、決定的seed、独立answer validation、重複検査、通常整数の問題番号、同一配置への赤字解答、PDF/catalog/site validation、学年専用workflow回帰を維持する。
