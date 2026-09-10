# 中学3年 数学 — HANDOFF

更新: 2026-09-10

## 最終公開済みcheckpoint

中学3年は現在 12技能・36PDF を公開済み。

直近で次の4 checkpointを公開した。

1. `factor-difference-squares` — 和と差の積型の因数分解 — 3 variants / 3 PDFs
2. `expansion-factorization-mixed-100` — 展開・因数分解混合100問 — 3 variants / 3 PDFs
3. `square-root-basic-value` — 平方根の基本値 — 3 variants / 3 PDFs
4. `simplify-radical` — 根号の簡単化 — 3 variants / 3 PDFs

publish commit: `5225474c2688657a9ee38f2f551604032d414199`

## 今回解消した停止要因

旧publisherは `factor-difference-squares` の候補数不足で生成loopが停止し得たため、候補範囲は既に `2..30` へ拡張されていた。

再開時の監査で、混合100問では内部problem objectが異なっていても画面に出る問題文が重複し得ることを確認したため、次を修正した。

- 表示問題文 `question_text(p)` を基準にvariant内重複を排除。
- rejection loopに上限を設け、有限候補不足時は無限停止せずfail closedする。
- direct-script test runnerを既存JH3 testと同じROOT bootstrap + `main()`形式へ統一。
- deterministic generation、独立再計算、表示問題文重複なし、variant間差、既存catalog hash非衝突、混合100問の5 family各20問、根号簡単化の既約性、2ページPDF、catalog validation、idempotency、共通Factory回帰、catalog-writer concurrency auditを通過。

修正PR:

- PR #814 — displayed-problem deduplication / bounded generation
- PR #817 — direct test runner修正

GitHub Actions `Junior-high grade 3 worksheet factory checkpoint` run `34491208403` はsuccessし、12PDFと12 catalog rowsをmainへ公開した。

平方根は文部科学省の中学校数学第3学年「A 数と式」に、正の数の平方根と平方根を含む簡単な式の計算として配置されていることを再確認済み。

## 正確な次の再開点

`PLAN.md` の `simplify-radical` の次から進める。

1. `根号の乗除`
2. `根号の加減`
3. `分母の有理化`
4. `平方根四則混合`

既存と同じ deterministic generator → independent validator → displayed-problem duplicate/hash guard → PDF → catalog/site validation 契約と、repository-wide concurrency group `worksheet-catalog-publish-v1` / `cancel-in-progress: false` を維持する。
