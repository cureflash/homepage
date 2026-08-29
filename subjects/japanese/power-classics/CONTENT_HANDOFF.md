# Power古典 CONTENT HANDOFF

## Read first

1. `CONTENT_MASTER_INSTRUCTIONS.md`
2. `CLASSICS_TAXONOMY.md`
3. `data/taxonomy/classics-v1.json`
4. `QUESTION_SCHEMA.md`
5. `CONTENT_STATUS.md`

Power TOEIC (`subjects/english/power-toeic/`) を共通バックエンド／Drill Engineの正本として扱う。Power古典専用のengine、session、mastery、persistence等を新規実装・forkしない。

## Exact continuation point

- current skill: `kobun.aux.ki_keri.meaning`
- completed: 150/200
- next ID: `kobun_aux_ki_keri_meaning_0151`
- next safe checkpoint: 0151〜0175（25問）

## Totals

1250 generated / 1250 checked / 1250 verified / 0 needs_revision / 0 rejected / pending 0.

## Latest QA

`kobun.aux.ki_keri.meaning` 0126〜0150をstem＋choicesのみから独立再解答し25/25 verified。正答位置A/B/C/D = 7/6/6/6、stem完全重複0、batch内最大類似度0.745（0.94以上0件）。「き」の過去、物語・伝承・昔の習慣文脈での「けり」の過去、眼前の気づき・感動・和歌文脈での「けり」の詠嘆を確認した。

## Reconcile rule

各run開始時とpush/merge直前にmainを再確認する。自分の開始ID以降に並行batchが存在すれば重複生成せず、最新の連続IDへ追従する。非forceのみ。既存テスト/CIを壊す変更はcontent runに混ぜない。

## QA debt

全bank横断のsemantic near-duplicate scanは未完了。個別batchのverifiedはproduction-approvedとは区別する。
