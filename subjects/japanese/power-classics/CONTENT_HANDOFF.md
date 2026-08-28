# Power古典 CONTENT HANDOFF

## Read first

1. `CONTENT_MASTER_INSTRUCTIONS.md`
2. `CLASSICS_TAXONOMY.md`
3. `data/taxonomy/classics-v1.json`
4. `QUESTION_SCHEMA.md`
5. `CONTENT_STATUS.md`

Power TOEIC (`subjects/english/power-toeic/`) を共通バックエンド／Drill Engineの正本として扱う。Power古典専用のengine、session、mastery、persistence等を新規実装・forkしない。

## Exact continuation point

- current skill: `kobun.aux.zuru.connection`
- completed: 0/100
- next ID: `kobun_aux_zuru_connection_0001`
- next safe checkpoint: 0001〜0025（25問）

## Totals

1000 generated / 1000 checked / 1000 verified / 0 needs_revision / 0 rejected / pending 0.

## Latest QA

`kobun.adjectival_noun.nari_vs_tari` 0026〜0050を独立再解答し25/25 verified。同skillは50/50で第一目標完了。正答位置A/B/C/D = 6/6/6/7、stem完全重複0、batch内最大類似度0.923（0.94超0件）。ナリ活用（なら・なり/に・なり・なる・なれ・なれ）とタリ活用（たら・たり/と・たり・たる・たれ・たれ）を未然・連用・終止・連体・已然・命令の用例で確認した。

## Reconcile rule

各run開始時とpush/merge直前にmainを再確認する。自分の開始ID以降に並行batchが存在すれば重複生成せず、最新の連続IDへ追従する。非forceのみ。既存テスト/CIを壊す変更はcontent runに混ぜない。

## QA debt

全bank横断のsemantic near-duplicate scanは未完了。個別batchのverifiedはproduction-approvedとは区別する。
