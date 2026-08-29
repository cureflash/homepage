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
- completed: 50/100
- next ID: `kobun_aux_zuru_connection_0051`
- next safe checkpoint: 0051〜0075（25問）

## Totals

1050 generated / 1050 checked / 1050 verified / 0 needs_revision / 0 rejected / pending 0.

## Latest QA

`kobun.aux.zuru.connection` 0026〜0050をstem＋choicesのみから独立再解答し25/25 verified。正答位置A/B/C/D = 7/6/6/6、stem完全重複0、batch内最大類似度0.894（0.94超0件）。打消の助動詞「ず」の未然形接続、本活用・補助活用、各活用種類の動詞への接続と後続語からの活用形判定を確認した。

## Reconcile rule

各run開始時とpush/merge直前にmainを再確認する。自分の開始ID以降に並行batchが存在すれば重複生成せず、最新の連続IDへ追従する。非forceのみ。既存テスト/CIを壊す変更はcontent runに混ぜない。

## QA debt

全bank横断のsemantic near-duplicate scanは未完了。個別batchのverifiedはproduction-approvedとは区別する。
