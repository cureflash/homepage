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
- completed: 50/300
- next ID: `kobun_aux_tsu_nu_meaning_0051`
- next safe checkpoint: 0051〜0075（25問）

## Totals

1350 generated / 1350 checked / 1350 verified / 0 needs_revision / 0 rejected / pending 0.

## Latest QA

`kobun.aux.tsu_nu.meaning` 0026〜0050を生成し、stem＋choicesのみから独立再解答して25/25 verified。正答位置A/B/C/D = 7/6/6/6、stem完全重複0、最大類似度0.9275、0.94以上0件。完了は動作・変化の完結、強意は主に「てむ・なむ・つべし・ぬべし」の後続形で判定し、「ぬ」は打消「ず」と混同しない語形・文脈に限定した。

## Reconcile rule

各run開始時とpush/merge直前にmainを再確認する。自分の開始ID以降に並行batchが存在すれば重複生成せず、最新の連続IDへ追従する。非forceのみ。既存テスト/CIを壊す変更はcontent runに混ぜない。

## QA debt

全bank横断のsemantic near-duplicate scanは未完了。個別batchのverifiedはproduction-approvedとは区別する。
