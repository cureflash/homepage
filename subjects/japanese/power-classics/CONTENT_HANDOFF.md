# Power古典 CONTENT HANDOFF

## Read first

1. `CONTENT_MASTER_INSTRUCTIONS.md`
2. `CLASSICS_TAXONOMY.md`
3. `data/taxonomy/classics-v1.json`
4. `QUESTION_SCHEMA.md`
5. `CONTENT_STATUS.md`

Power TOEIC (`subjects/english/power-toeic/`) を共通バックエンド／Drill Engineの正本として扱う。Power古典専用のengine、session、mastery、persistence等を新規実装・forkしない。

## Exact continuation point

- current skill: `kobun.aux.tari_ri.meaning`
- completed: 0/200
- next ID: `kobun_aux_tari_ri_meaning_0001`
- next safe checkpoint: 0001〜0025（25問）

## Totals

1600 generated / 1600 checked / 1600 verified / 0 needs_revision / 0 rejected / pending 0.

## Latest QA

`kobun.aux.tsu_nu.meaning` 0276〜0300を生成し、stem＋choicesのみから各問を独立再解答して25/25 verified。正答位置A/B/C/D = 7/6/6/6、選択肢内重複0、stem完全重複0。batch内最大類似度0.8302、直前batchとの最大0.7632、0.94以上0件。完了は動作・変化の成立・完結、強意は「てむ・なむ・つべし・ぬべし」など推量系助動詞との接続を手掛かりに判定した。これで `kobun.aux.tsu_nu.meaning` は300/300で第一目標完了。

## Reconcile rule

各run開始時とpush/merge直前にmainを再確認する。自分の開始ID以降に並行batchが存在すれば重複生成せず、最新の連続IDへ追従する。非forceのみ。既存テスト/CIを壊す変更はcontent runに混ぜない。

## QA debt

全bank横断のsemantic near-duplicate scanは未完了。個別batchのverifiedはproduction-approvedとは区別する。
