# Power古典 CONTENT HANDOFF

## Read first

1. `CONTENT_MASTER_INSTRUCTIONS.md`
2. `CLASSICS_TAXONOMY.md`
3. `data/taxonomy/classics-v1.json`
4. `QUESTION_SCHEMA.md`
5. `CONTENT_STATUS.md`

Power TOEIC (`subjects/english/power-toeic/`) を共通バックエンド／Drill Engineの正本として扱う。Power古典専用のengine、session、mastery、persistence等を新規実装・forkしない。

## Exact continuation point

- current skill: `kobun.aux.tsu_nu.meaning`
- completed: 175/300
- next ID: `kobun_aux_tsu_nu_meaning_0176`
- next safe checkpoint: 0176〜0200（25問）

## Totals

1475 generated / 1475 checked / 1475 verified / 0 needs_revision / 0 rejected / pending 0.

## Latest QA

`kobun.aux.tsu_nu.meaning` 0151〜0175を生成し、stem＋choicesのみから各問を再解答して25/25 verified。正答位置A/B/C/D = 7/6/6/6、選択肢内重複0、stem完全重複0。初回類似度検査で定型stem 2組を修正し、再検査ではbatch内最大類似度0.8889、0.94以上0件。完了は動作・変化の成立・完結、強意は主に「てむ・なむ・つべし・ぬべし」で判定し、助動詞「ぬ」と打消「ず」、係助詞「なむ」の混同を避けた。

## Reconcile rule

各run開始時とpush/merge直前にmainを再確認する。自分の開始ID以降に並行batchが存在すれば重複生成せず、最新の連続IDへ追従する。非forceのみ。既存テスト/CIを壊す変更はcontent runに混ぜない。

## QA debt

全bank横断のsemantic near-duplicate scanは未完了。個別batchのverifiedはproduction-approvedとは区別する。
