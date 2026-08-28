# 中学3年 数学 — HANDOFF

更新: 2026-08-28

## 最終公開済みcheckpoint

次の4 checkpointまでは公開完了している。

1. `difference-of-squares-expansion` — `(a+b)(a-b)` の展開 — 3 variants / 3 PDFs
2. `factor-common-factor` — 共通因数でくくる因数分解 — 3 variants / 3 PDFs
3. `factor-x2-sum-product` — `x^2+(a+b)x+ab` 型の因数分解 — 3 variants / 3 PDFs
4. `factor-square-formula` — 平方公式型の因数分解 — 3 variants / 3 PDFs

publish commit: `4f77b081a34bfe50fdcc0c86b1bcaab9f4eecb4c`

現在の公開範囲は **8技能・24PDF**。

## 実装済み・公開待ち

次の4 checkpoint用のpublisher/test/workflowを実装したが、**まだ公開完了扱いにしない**。

1. `factor-difference-squares` — 和と差の積型の因数分解 — 3 variants / 3 PDFs予定
2. `expansion-factorization-mixed-100` — 展開・因数分解混合100問 — 3 variants / 3 PDFs予定
3. `square-root-basic-value` — 平方根の基本値 — 3 variants / 3 PDFs予定
4. `simplify-radical` — 根号の簡単化 — 3 variants / 3 PDFs予定

現行MEXTの中学校数学第3学年「数と式」で、正の数の平方根と平方根を含む簡単な式の計算を扱う配置を確認済み。

実装:

- publisher: `scripts/publish_jh3_factorization_roots.py`
- test: `tests/test_jh3_factorization_roots_publisher.py`
- workflow: `.github/workflows/math-jh3-publish.yml`
- repository-wide catalog writer concurrency group `worksheet-catalog-publish-v1` / `cancel-in-progress: false` は維持。
- deterministic seed、独立再計算、variant内重複、variant間差、既存catalog hash非衝突、2ページPDF、通常整数番号、同一配置＋赤字解答、catalog validation、共通Factory回帰、catalog-writer concurrency auditをworkflowで検査する。

## 現在の安全停止理由

初期実装で `factor-difference-squares` / mixed内のdifference-of-squares候補を `2..20` としており、必要20問に対して候補が19通りしかないため、20問目で生成loopが停止しない境界不具合を検出した。

修正済み:

- 修正commit: `54c92121c827f2d4cbc5670275ac3f9e25733971`
- 候補範囲を十分な `2..30` へ拡張した。

ただし、修正前commitをcheckoutしたworkflow run `33134751770` が validation step 内で停止しており、共有catalog writerの直列化契約により修正版run `33134804447` は後続待ちになっている。**修正版runがsuccessして12PDFとcatalog rowをmainへcommitするまでは、STATUSのskill/PDF件数を進めない。**

## 正確な次の再開点

1. workflow run `33134751770` が終了したことを確認する。
2. 修正版run `33134804447` の実行を確認する。
3. `Reconcile latest main and validate junior-high grade 3 batch` と `Commit validated checkpoint` がsuccessしたことを確認する。
4. `Publish junior-high grade 3 worksheet checkpoint` commitと、12PDF・12 catalog rowsがmainに存在することを確認する。
5. その時点でのみ STATUS/HANDOFF/shared HANDOFF を **12技能・36PDF** へ進める。
6. `PLAN.md` から `simplify-radical` の次の未完了技能を読み、次checkpointを決める。

公開前に件数だけを先行更新しないこと。修正前runの生成物を採用しないこと。
