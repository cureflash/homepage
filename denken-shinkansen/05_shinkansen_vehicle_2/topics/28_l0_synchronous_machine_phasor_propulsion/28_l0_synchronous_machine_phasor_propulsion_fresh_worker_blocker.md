# Topic 28 clean blind fresh-worker blocker

判定: `BLOCKED / FRESH_WORKER_CONDITION_NOT_CERTIFIABLE`

記録日: 2026-09-20

## exact blocker

Topic 28の次工程は、remediation後教材だけを使い、公式解答を先に見ていないfresh workerがclean blind候補を新規固定する工程である。

本runは必須reconcileとして系列 `STATUS.md` / `HANDOFF.md` を読んだ時点で、前回clean blindの公式照合結果とH29二次「機械・制御」問1(1)の公式側の式・記号対応を既に閲覧している。そのため、本run自身が新しい候補を作っても「公式解答を先に見ていないfresh worker」という品質条件を満たしたとは認定できない。

これは数式・教材内容の未確定ではなく、独立再解答の実施者条件に関するblockerである。推測でPASS扱いしない。

## 今回変更しないもの

- Topic 28の旧blind候補
- 固定EXAM_ALIGNMENT（5問・27答案要素）
- remediation後の解説source / 解説PDF
- 練習source / 練習PDF
- PowerPoint
- Topic 21の一般式 `P=Tω`, `ω=2πN/60`

## 解除条件

公式解答・既存blind比較結果を事前に参照していない別fresh workerが、remediation後教材のみを使って別ファイルへ候補を固定し、その後に公式照合すること。

解除までTopic 28を `completed` に数えない。
