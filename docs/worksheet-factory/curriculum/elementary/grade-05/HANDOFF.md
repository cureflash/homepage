# 小学5年 算数 — HANDOFF

更新: 2026-08-27

## 今回完了したcheckpoint

1. `decimal-times-decimal` — 小数×小数 — 3 variants / 3 PDFs
2. `decimal-div-decimal` — 小数÷小数（割り切れる） — 3 variants / 3 PDFs
3. `decimal-mixed-four` — 小数四則混合 — 3 variants / 3 PDFs
4. `list-divisors` — 約数の列挙 — 3 variants / 3 PDFs

合計 **4技能・12PDF** を公開した。

## カリキュラム確認

文部科学省「小学校学習指導要領（平成29年告示）解説 算数編」の第5学年で、小数の乗法・除法、および整数の性質として約数・倍数を扱うことを確認した。

## 実装・検証

- publisher: `scripts/publish_grade5_first_four.py`
- test: `tests/test_grade5_first_four_publisher.py`
- workflow: `.github/workflows/grade5-core-publish.yml`
- 各技能3seed、各20問。
- seed/specから決定的に再生成できる。
- 解答は `Fraction` / 約数列挙ロジックで独立再計算する。
- 問題内重複、variant間差、既存catalogとのnormalized content hash衝突を検査する。
- 問題番号は通常整数表記。
- 2ページ目は問題ページと同じ配置を保持し、答えだけ赤字で追加する。
- Grade 5 workflowでpublisher、専用test、`tests/test_worksheet_factory.py` を実行し成功した。
- workflow run: `33038004644`
- publish commit: `a166fca1f8a0c72eecb4eb957dac3f0fac371202`

## 現在の公開範囲

小学5年: **4技能・12PDF**。

公開先: `materials/worksheets/elementary/grade-05/`

## 次にやること

PLAN.mdの次の未完了項目から順に進める。

1. 倍数の列挙
2. 最大公約数
3. 最小公倍数
4. 通分

次runでも安全なら最大4 checkpoint連続で進める。整数の性質3技能は共通generator/validatorを再利用できる。通分へ入る際は分数表記と独立answer validationを別途確認する。
