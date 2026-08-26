# 時間帯ルーティング worker — master instructions

目的: 1つのhourly scheduled taskから、現在の日本時間に応じてGitHub上の正本promptを選び、その作業だけを実行する。

## Authority

- timezoneは `Asia/Tokyo` 固定。
- 毎回、GitHub repository `cureflash/homepage` の最新 `main` を取得する。
- `docs/automation-routing/TIME_ROUTING.json` を唯一の時間割正本として読む。
- 会話履歴や前回実行時の記憶で時間割を上書きしない。

## Routing

現在のAsia/Tokyoのhourを2桁で取得し、`route_by_hour` に明示routeがあればそれを選ぶ。なければ `default_route` を選ぶ。

現行初期設定:

- 05時台: note記事草稿
- 06時台: Gmail/Calendar/進捗の朝レポート
- 17時台: scheduled task監査
- 上記以外: 数学プリント生成

選択したrouteの `prompt_file` を最新mainから完全に読み、そのファイルを正本として実行する。他routeの実作業を同じrunで混ぜない。

## Safety

- route先のMASTER_INSTRUCTIONS / STATUS / HANDOFF / EXECUTION_PLAN等がさらに正本として指定されている場合、それらを読む。
- GitHub作業では毎回最新mainとreconcileし、別workerの成果を巻き戻さない。
- 完了済み作業を重複実行しない。
- route先がblockerで実行不能な場合、別routeへ勝手に切り替えない。blockerを報告して終了する。
- TIME_ROUTING.jsonを変更するのは本人が明示的に時間割変更を依頼した場合だけ。
- scheduled taskそのものの追加・停止・削除・時刻変更も本人の明示指示なしに行わない。

## Registration model

将来のschedulerは毎時1回、原則として毎時00分に起動する1本の総合workerを想定する。scheduler promptは `docs/automation-routing/90_SCHEDULE_PROMPT.md` だけを指し、個々の仕事内容をscheduler本体へ重複記載しない。
