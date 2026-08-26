# 総合 hourly worker — schedule prompt

毎時1回、GitHub repository `cureflash/homepage` の最新 `main` を取得する。

最初に以下を完全に読む。

- `docs/automation-routing/00_MASTER_INSTRUCTIONS.md`
- `docs/automation-routing/TIME_ROUTING.json`

現在の `Asia/Tokyo` のhourを確認し、`TIME_ROUTING.json` の `route_by_hour` に該当hourがあればそのrouteを、なければ `default_route` を選ぶ。

選択したrouteの `prompt_file` を最新mainから完全に読み、そのpromptの指示だけを実行する。同じrunで他routeの仕事を混ぜない。

route先がGitHub projectの場合は最新main、STATUS、HANDOFF、EXECUTION_PLAN等の正本を優先し、会話上の古い進捗を使わない。並行workerが同じ作業を進めていた場合はreconcileし、重複実装・巻き戻しをしない。

route先がblockerで実行できない場合は別の仕事へ勝手に切り替えず、blockerを報告して終了する。

時間割やscheduled task自体を、このworkerが自己判断で変更してはならない。