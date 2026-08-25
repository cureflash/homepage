# Codex Batch Runner

Git上の `STATUS.json` / `HANDOFF` / 実行計画を基準に、Codexを同じThreadで連続実行するWindows向けランナーです。

現在の初期設定では `社会プリント` だけを対象にし、最大10ターンまで試験運用します。

## 仕組み

1. `run.bat` をダブルクリック
2. Git作業ツリーがcleanか確認
3. `git pull --ff-only`
4. 対象プロジェクトの `STATUS.json` を読む
5. CodexのThreadを開始
6. 1ターン目は STATUS / HANDOFF / 実行計画を読むよう指示
7. Codexが作業・検証・STATUS/HANDOFF更新・commitまで実施
8. 親ランナーがGit状態とSTATUSの進行を確認
9. commitがあれば `git push`
10. 同じThreadへ `次を進めて` を送信
11. `status=done/completed/complete`、停止条件、または最大回数まで繰り返す

## 初回だけ必要な準備

Node.js 18以上、Git、Codex CLIが必要です。

PowerShellでCodex CLIを入れます。

```powershell
npm install -g @openai/codex
```

続いて一度だけ、

```powershell
codex
```

を実行し、`Sign in with ChatGPT` でログインしてください。

その後、このリポジトリを最新化し、`batch-runner/run.bat` をダブルクリックします。

SDK自体は `run.bat` が初回に `npm install --no-package-lock` で自動導入します。

## 現在の安全装置

- 起動時にGit作業ツリーがdirtyなら停止
- `git pull` は `--ff-only` のみ
- Codex sandboxは `workspace-write`
- approval policyは `never`。無人実行中に承認待ちで止まらない代わりに、許可外操作は失敗させる
- 1ターン60分で中断
- Codexが変更をcommitせずdirtyな状態で終了したら停止
- `updated_at` だけを書き換えても進捗とは判定しない
- STATUSが実質同一のまま2ターン続いたら停止
- 初期設定は最大10ターン
- force push / reset --hard / 履歴改変 / 未関連変更の破棄は禁止するプロンプトを使用
- 失敗したら次のプロジェクトへ進まず停止

## 設定ファイル

### `config.json`

全体の実行回数、タイムアウト、Git push、Codex sandboxなどを設定します。

### `projects.json`

処理対象を設定します。初期状態では以下だけ有効です。

```text
社会プリント
└─ docs/social-worksheet-factory/STATUS.json
```

安定動作を確認した後、算数・理科・国語などをここへ追加します。

## ログ

実行ログは、

```text
batch-runner/logs/
```

へ保存します。ログはGitにはcommitしません。

## 注意

このランナーはChatGPTのチャットURLやWeb画面を操作しません。Codex SDK / Codex CLIのThreadを使います。

各プロジェクトでは、1ターンごとに `STATUS.json` とHANDOFFを必ず更新し、変更をcommitして終了する運用を前提にしています。
