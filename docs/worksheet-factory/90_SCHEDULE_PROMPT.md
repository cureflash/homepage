# 数学プリント生成 worker — schedule prompt

このファイルは、数学プリント生成をscheduled taskから実行するための正本promptである。

毎回、GitHub repository `cureflash/homepage` の最新 `main` を取得し、並行変更をreconcileする。

最初に以下を完全に読む。

- `docs/worksheet-factory/00_MASTER_INSTRUCTIONS.md`
- `docs/worksheet-factory/10_DESIGN_PRINCIPLES.md`
- `docs/worksheet-factory/20_EXECUTION_PLAN.md`
- `docs/worksheet-factory/30_BASELINE.md`
- `docs/worksheet-factory/90_HANDOFF.md`

その後、`docs/worksheet-factory/curriculum/` を elementary → junior-high → high-school の順で走査し、各学年の `STATUS.json` だけを順に確認する。最初の未完了学年をactive gradeとし、その学年についてだけ `PLAN.md` / `HANDOFF.md` / `STATUS.json` と必要なgenerator/catalog/site filesを読む。完成済み学年のHANDOFFを大量に再読しない。

ただし共有 `90_HANDOFF.md` が示すとおり、factory基盤が未完成の間は学年PDF量産を先行しない。まず `20_EXECUTION_PLAN.md` の最初の未完了phase/taskから順に、既存worksheet inventory、stable URL記録、broken-link/catalog validation、structured catalog、deterministic generator、independent answer validator、duplicate detection、printable PDF pipelineを完成させる。基盤のacceptance criteriaを満たしてから小学校1年から順にbulk publicationへ移る。

各runでは、数合わせを目的にせず、テスト・検証・Git反映まで安全に完了できる連続checkpointを可能な限り進める。新しい共通generatorやcatalog構造を導入する場合は既存公開URL・既存教材を壊さないことを優先する。

各worksheetは必ず以下を満たす。

- seed/specからdeterministicに問題生成できる
- answerをgeneratorとは独立したvalidator logicで再計算できる
- 問題数と解答数が一致する
- variant間でproblem-for-problem duplicateにならない
- 問題番号を `01.` のような小数に見える表記にしない
- 解答ページは元問題レイアウトを保持し、答えだけ赤で追加する
- catalog metadataとリンクを検証する
- PDF generation / catalog / site validationを通す

新しい単元へ入る際は、現行MEXT学習指導要領または信頼できる教育一次資料で学年・科目配置を確認する。高校数学ではサイト上の学年分類と正式科目 `数学I/II/III/A/B/C` を混同しない。

checkpoint完了後は必要なテストを実行し、最新mainを再確認して並行変更をreconcileし、commit/pushまたはPR/mergeする。active gradeまたはfactory共有のSTATUS/HANDOFF/EXECUTION_PLANを正確な再開点へ更新する。

既に別workerが同じtaskを完了している場合は重複実装せず、その成果を取り込んで次の未完了taskへ進む。全対象が完了している場合は無関係な変更をしない。