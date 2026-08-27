# 小学5年 算数 — HANDOFF

更新: 2026-08-27

## 今回完了したcheckpoint

1. `reduce-fraction` — 約分 — 3 variants / 3 PDFs
2. `unlike-denominator-add` — 異分母分数のたし算 — 3 variants / 3 PDFs
3. `unlike-denominator-sub` — 異分母分数のひき算 — 3 variants / 3 PDFs
4. `fraction-decimal-conversion` — 分数・小数の変換 — 3 variants / 3 PDFs

今回 **4技能・12PDF** を追加公開した。これまでの8技能と合わせ、小学5年は **12技能・36PDF** 公開済み。

## カリキュラム確認

文部科学省「小学校学習指導要領（平成29年告示）解説 算数編」の第5学年で、約分・通分と異分母分数の加法・減法を扱うことを確認してから実装した。分数・小数の変換は有限小数へ機械的に変換できる範囲に限定し、分数と除法・小数の関係を反復する技能として設計した。

## 実装・検証

- publisher: `scripts/publish_grade5_fraction_core.py`
- test: `tests/test_grade5_fraction_core_publisher.py`
- workflow: `.github/workflows/grade5-core-publish.yml`
- 各技能3seed（`10711 / 10812 / 10913`）、各20問。
- `reduce-fraction` は未約分の真分数だけを生成し、`Fraction` で既約分数を独立再計算する。
- `unlike-denominator-add` / `unlike-denominator-sub` は異なる分母を保証し、`Fraction` で和・差を独立再計算する。減法は正の結果だけを生成する。
- `fraction-decimal-conversion` は分数→有限小数と小数→既約分数を10問ずつ交互に出し、`Fraction` と10進表記の双方で同値性を確認する。
- 問題内重複、variant間差、既存catalogとのnormalized content hash衝突を検査する。
- 問題番号は通常整数表記。
- 2ページ目は問題ページと同じ配置を保持し、答えだけ赤字で追加する。
- Grade 5 workflowで既存publisher/test、新publisher/test、`tests/test_worksheet_factory.py` を実行し、公開commitが生成された。
- publish commit: `fce79b0f6b7070848a7edd5448eed0c0e550cd50`

## 現在の公開範囲

小学5年: **12技能・36PDF**。

公開先: `materials/worksheets/elementary/grade-05/`

## 次にやること

PLAN.mdの次の未完了項目から順に進める。

1. 分数計算混合（この学年までの範囲）
2. 百分率の基本変換（小数↔百分率）
3. 割合の基本数値計算
4. 学年総復習計算

次runでも安全なら最大4 checkpoint連続で進める。分数混合は第5学年で扱う加減の範囲を越えて分数乗除へ進まない。百分率・割合は数値条件を限定し、独立answer validationを機械的に保証する。
