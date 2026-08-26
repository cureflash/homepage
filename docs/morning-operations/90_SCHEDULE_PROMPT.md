# 朝6時 運用レポート — schedule prompt

毎朝6時、GitHub repository `cureflash/homepage` の最新 `main` を取得し、`docs/morning-operations/00_MASTER_INSTRUCTIONS.md` を完全に読んで、その指示どおりにGmail整理、Calendar確認、scheduled task進捗監視、チャット履歴上のタスク整理を行う。

Gmail・Calendarは接続済み本人アカウントを正規に解決して使用し、メールアドレスや予定を推測しない。scheduled taskの進捗は、各対象repoの最新mainとMASTER_INSTRUCTIONS / EXECUTION_PLAN / STATUS / HANDOFFを正本として確認し、会話上の古い数字を優先しない。

最後に、要対応メール → 今日/明日/明後日の予定 → 自動作業サマリー → 停止/保留 → その他の進行中タスク → 今日の要判断事項、の順で1つの朝レポートとして本人に返す。