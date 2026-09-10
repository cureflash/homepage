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
- completed: 50/200
- next ID: `kobun_aux_tari_ri_meaning_0051`
- next safe checkpoint: 0051〜0075（25問）

## Totals

1650 generated / 1650 checked / 1650 verified / 0 needs_revision / 0 rejected / pending 0.

## Latest QA

`kobun.aux.tari_ri.meaning` 0026〜0050を生成し、stem＋choicesのみから各問を再解答して25/25 verified。正答位置A/B/C/D = 6/6/7/6、選択肢内重複0、stem完全重複0、batch内最大類似度0.6415、直前batchとの最大0.8936、0.94以上0件。完了は出来事の完結後に次の行動へ移る文脈、存続は結果状態が継続する文脈として判定した。助動詞「り」は四段活用已然形またはサ変動詞未然形への接続のみを使用した。

## Reconcile rule

各run開始時とpush/merge直前にmainを再確認する。自分の開始ID以降に並行batchが存在すれば重複生成せず、最新の連続IDへ追従する。非forceのみ。既存テスト/CIを壊す変更はcontent runに混ぜない。

## QA debt

全bank横断のsemantic near-duplicate scanは未完了。個別batchのverifiedはproduction-approvedとは区別する。
