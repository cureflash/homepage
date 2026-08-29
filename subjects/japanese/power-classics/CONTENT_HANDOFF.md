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
- completed: 0/300
- next ID: `kobun_aux_tsu_nu_meaning_0001`
- next safe checkpoint: 0001〜0025（25問）

## Totals

1300 generated / 1300 checked / 1300 verified / 0 needs_revision / 0 rejected / pending 0.

## Latest QA

`kobun.aux.ki_keri.meaning` 0151〜0200を2 checkpointで生成し、stem＋choicesのみから独立再解答して50/50 verified。0151〜0175の正答位置A/B/C/D = 7/7/5/6、最大類似度0.767。0176〜0200はA/B/C/D = 7/6/6/6、最大類似度0.929。両batchともstem完全重複0、0.94以上の高類似0件。これで同skillは200/200で第一目標完了。

## Reconcile rule

各run開始時とpush/merge直前にmainを再確認する。自分の開始ID以降に並行batchが存在すれば重複生成せず、最新の連続IDへ追従する。非forceのみ。既存テスト/CIを壊す変更はcontent runに混ぜない。

## QA debt

全bank横断のsemantic near-duplicate scanは未完了。個別batchのverifiedはproduction-approvedとは区別する。
