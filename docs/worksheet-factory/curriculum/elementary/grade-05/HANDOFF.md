# 小学5年 算数 — HANDOFF

更新: 2026-08-27

## 今回完了したcheckpoint

1. `list-multiples` — 倍数の列挙 — 3 variants / 3 PDFs
2. `greatest-common-divisor` — 最大公約数 — 3 variants / 3 PDFs
3. `least-common-multiple` — 最小公倍数 — 3 variants / 3 PDFs
4. `common-denominator` — 通分 — 3 variants / 3 PDFs

今回 **4技能・12PDF** を追加公開した。これまでの4技能と合わせ、小学5年は **8技能・24PDF** 公開済み。

## カリキュラム確認

文部科学省「小学校学習指導要領（平成29年告示）解説 算数編」の第5学年で、倍数・約数、最大公約数・最小公倍数、分数の通分を扱うことを確認してから実装した。

## 実装・検証

- publisher: `scripts/publish_grade5_number_properties_and_common_denominator.py`
- test: `tests/test_grade5_number_properties_and_common_denominator_publisher.py`
- workflow: `.github/workflows/grade5-core-publish.yml`
- 各技能3seed（`10408 / 10509 / 10610`）、各20問。
- `list-multiples` は与えた整数の最初の6倍数を独立列挙する。
- `greatest-common-divisor` / `least-common-multiple` は `gcd` / `lcm` を保存answerと独立して再計算する。
- `common-denominator` は2分数の分母の最小公倍数を求め、`Fraction` で値の同値性まで独立確認する。
- 問題内重複、variant間差、既存catalogとのnormalized content hash衝突を検査する。
- 問題番号は通常整数表記。
- 2ページ目は問題ページと同じ配置を保持し、答えだけ赤字で追加する。
- Grade 5 workflowで旧publisher、新publisher、両専用test、`tests/test_worksheet_factory.py` を実行し成功した。
- workflow run: `33041236859`
- publish commit: `e5b8c6adef1e38e3fb28e219e7246d2a05a75ad2`

## 現在の公開範囲

小学5年: **8技能・24PDF**。

公開先: `materials/worksheets/elementary/grade-05/`

## 次にやること

PLAN.mdの次の未完了項目から順に進める。

1. 約分
2. 異分母分数のたし算
3. 異分母分数のひき算
4. 分数・小数の変換

次runでも安全なら最大4 checkpoint連続で進める。分数系列は `Fraction` を用いた独立同値性確認を維持し、通分・約分・異分母加減で同じ問題セットを別名量産しない。
