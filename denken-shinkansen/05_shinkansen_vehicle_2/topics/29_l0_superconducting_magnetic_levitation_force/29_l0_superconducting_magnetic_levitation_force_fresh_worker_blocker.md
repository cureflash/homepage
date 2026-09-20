# Topic 29 clean blind fresh-worker blocker

判定: `BLOCKED / FRESH_WORKER_CONDITION_NOT_CERTIFIABLE`

記録日: 2026-09-20

## exact blocker

Topic 29の次工程は、完成済み教材だけを使い、公式解答・保存済み正答を先に見ていないfresh workerが固定5問・24答案要素をclean blindで再解答し、候補を別ファイルへ固定する工程である。

本runは現状確認のためactive themeの `29_l0_superconducting_magnetic_levitation_force.md` を開いた時点で、制作前独立再計算・公式照合の結果と、H23二次を含む公式照合済み数値を閲覧した。そのため、本run自身が候補を作っても「公式解答・保存済み正答を先に見ていないfresh worker」という品質条件を満たしたとは認定できない。

これは教材内容・数式・固定EXAM_ALIGNMENTの未確定ではなく、独立再解答の実施者条件に関するblockerである。推測でPASS扱いしない。

## 今回変更しないもの

- 固定EXAM_ALIGNMENT（5問・24答案要素）
- 解説source / 解説PDF
- 練習source / 練習PDF
- PowerPoint
- L0系実車境界
- Topic 30範囲
- Topic 21の一般式 `P=Tω`, `ω=2πN/60`

## 次回fresh workerの安全な参照順

候補固定前は、答えを含むactive theme alignment本体とそのQAを開かない。

1. `MASTER_SPEC.md`
2. `EXAM_ALIGNMENT_SPEC.md`
3. 系列 `SPEC.md`
4. 系列 `STATUS.md` / `HANDOFF.md`
5. Topic 29の解説source
6. 電気技術者試験センターの固定5問の問題PDFのみ

固定問題IDは `STATUS.md` / `HANDOFF.md` にある一覧を使う。候補固定後に初めて、公式解答・active theme alignment本体・exam alignment QAと照合する。

## 解除条件

上記answer-bearing資料を候補固定前に参照していないfresh workerが、固定5問・24答案要素を教材だけで独立再解答し、candidateを変更不能の別ファイルへ固定すること。

解除までTopic 29を `completed` に数えない。
