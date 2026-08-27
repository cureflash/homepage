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

## 1 run の作業量

各runでは、原則として **最大4つの連続checkpoint** まで進める。

1つ目のcheckpointを安全に完了したら即終了せず、次の未完了項目を再確認する。同一学年または近接単元で、既存generator / validator / catalog / PDF pipelineを安全に再利用でき、各checkpointの検証を独立して完了できる場合は、そのまま2つ目、3つ目、4つ目まで連続して進める。

4 checkpointは目標上限であってノルマではない。次のcheckpointで以下のいずれかが生じる場合は、1〜3 checkpointで安全に停止する。

- 学習指導要領・単元配置の確認が不十分
- 新しい共通generator設計が必要で、既存系列への回帰リスクが高い
- 独立answer validationを機械的に保証できない
- duplicate / hash / catalog / PDF / site validationに未解決の問題がある
- CI / Actions / main整合性にblockerがある
- 数合わせのために問題品質やvariant差を弱める必要がある

逆に、単純な近接単元で既存基盤を再利用できるのに、1 checkpointだけで機械的に終了してはならない。残り時間と安全性が許す限り最大4 checkpointまで進める。

各checkpointごとに、問題定義・deterministic seed・独立解答再計算・完全/近似重複検査・PDF生成・catalog/site validation・必要な回帰テストを完了し、安全境界を作る。途中で時間不足になっても、最後に完了したcheckpointまでをGitHubへ永続化し、次回の正確な再開点をSTATUS/HANDOFFへ残す。

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