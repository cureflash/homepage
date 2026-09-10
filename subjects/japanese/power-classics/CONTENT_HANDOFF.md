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
- completed: 125/200
- next ID: `kobun_aux_tari_ri_meaning_0126`
- next safe checkpoint: 0126〜0150（25問）

## Totals

1725 generated / 1725 checked / 1725 verified / 0 needs_revision / 0 rejected / pending 0.

## Latest QA

`kobun.aux.tari_ri.meaning` 0101〜0125を生成し、stem＋choicesのみから各問を再解答して25/25 verified。正答位置A/B/C/D = 7/6/6/6、選択肢内重複0、stem完全重複0、batch内最大類似度0.6588（0115/0116、0112/0121）、既存の同skill 0001〜0100とのstem完全重複0、batch内0.94以上0件。完了は出来事の完結後に次の行動へ移る文脈、存続は結果状態が継続する文脈として判定した。助動詞「り」の用例はサ変動詞未然形または四段活用已然形への接続のみを使用した。

## Reconcile rule

各run開始時とpush/merge直前にmainを再確認する。自分の開始ID以降に並行batchが存在すれば重複生成せず、最新の連続IDへ追従する。非forceのみ。既存テスト/CIを壊す変更はcontent runに混ぜない。

## QA debt

全bank横断のsemantic near-duplicate scanは未完了。個別batchのverifiedはproduction-approvedとは区別する。
