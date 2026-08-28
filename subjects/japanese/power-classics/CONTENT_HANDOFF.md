# Power古典 CONTENT HANDOFF

## Read first

1. `CONTENT_MASTER_INSTRUCTIONS.md`
2. `CLASSICS_TAXONOMY.md`
3. `data/taxonomy/classics-v1.json`
4. `QUESTION_SCHEMA.md`
5. `CONTENT_STATUS.md`

Power TOEIC (`subjects/english/power-toeic/`) を共通バックエンド／Drill Engineの正本として扱う。Power古典専用のengine、session、mastery、persistence等を新規実装・forkしない。

## Exact continuation point

- current skill: `kobun.adjectival_noun.nari_vs_tari`
- completed: 25/50
- next ID: `kobun_adjectival_noun_nari_vs_tari_0026`
- next safe checkpoint: 0026〜0050（25問）

## Totals

975 generated / 975 checked / 975 verified / 0 needs_revision / 0 rejected / pending 0.

## Latest QA

`kobun.adjectival_noun.nari_vs_tari` 0001〜0025を独立再解答し25/25 verified。正答位置A/B/C/D = 7/6/6/6、stem完全重複0、batch内最大類似度0.906（0.94超0件）。ナリ活用（なら・なり/に・なり・なる・なれ・なれ）とタリ活用（たら・たり/と・たり・たる・たれ・たれ）を未然・連用・終止・連体・已然・命令の用例で確認した。

## Reconcile rule

各run開始時とpush/merge直前にmainを再確認する。自分の開始ID以降に並行batchが存在すれば重複生成せず、最新の連続IDへ追従する。非forceのみ。既存テスト/CIを壊す変更はcontent runに混ぜない。

## QA debt

全bank横断のsemantic near-duplicate scanは未完了。個別batchのverifiedはproduction-approvedとは区別する。
