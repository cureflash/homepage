# Topic 10 最終QA記録

対象: `10 新幹線はモーターを発電機にして止まる`

実施日: 2026-09-16

## 判定

`NEEDS_REVISION / IN_PROGRESS`。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`07_shinkansen_machine_2/SPEC.md` の範囲内で再確認し、新しい仕様は追加していない。

技術内容、必須成果物、固定EXAM_ALIGNMENT、完成後独立再解答、練習問題QA、PDF/PPTX表示QA、固定範囲境界はPASS。未完了理由は進捗記録1箇所のみで、`10_regenerative_braking_four_quadrant_practice.md` 末尾 `## 次工程` が「練習PDFを作成する」という旧状態のまま残っている。

## 必須成果物

GitHub正本上で実在を確認した。

- source Markdown: PASS (`7ff80a0d9a016d4ff2d93d5cc6266f9cafc3901b`)
- 解説PDF: PASS (`f3f492378095f8e8c2685ac7ed5377157fa2fa1d`)
- 練習source: PASS (`67c7151125cc90b08a070ea76e21aa7c09da573d`)
- 練習PDF: PASS (`11d0922d158a50ccd35c0ea0f8cd7a09ac24cc2e`)
- 解説画像PowerPoint: PASS (`3f5daff770cc5fb79fd6fa86abe0449619470e7e`)

## EXAM_ALIGNMENT

固定対象は一次4問＋二次記述1問、計5問・15答案要素。

- R06 一次 機械 問2: (1),(2)
- R05 一次 機械 問2: (1),(2),(3),(5)
- H28 一次 機械 問5: (3)〜(5)
- H27 一次 機械 問3: (1),(2)
- H24 二次 機械・制御 問3: (1),(2)a〜c

二種の一次・二次を合わせて原則5問以上、二次対象論点では記述式を含める品質ゲートを満たす。混合問題はTopic 10固定範囲へ直接対応する小問だけをゲート対象としている。

## 完成後独立再解答

- 固定5問・15答案要素: `15 / 15 PASS`
- R06 一次 機械 問2: `2 / 2 PASS`
- R05 一次 機械 問2: `4 / 4 PASS`
- H28 一次 機械 問5: `3 / 3 PASS`
- H27 一次 機械 問3: `2 / 2 PASS`
- H24 二次 機械・制御 問3: `4 / 4 PASS`
- 教材外知識補完: 0件
- 固定EXAM_ALIGNMENT・固定範囲・問題・正答の変更: 0件

## 練習・表示QA

- 練習問題: 一次10問＋二次記述5問、計15問
- 数値・論理再検算: `15 / 15 PASS`
- 一次問題の正答一意性: `10 / 10 PASS`
- 固定5問・15答案要素への接続: PASS
- 解説PDF: A4縦4ページ、200 dpi表示QA `4 / 4 PASS`、文字抽出QA PASS
- 練習PDF: A4縦6ページ、200 dpi表示QA `6 / 6 PASS`、文字抽出QA PASS、数値・論理再検算 `15 / 15 PASS`
- PowerPoint: 16:9・4スライド、表示QA `4 / 4 PASS`、overflow 0件、ZIP整合性PASS

## 進捗記録整合

FAIL。

`10_regenerative_braking_four_quadrant_practice.md` 末尾は現在も次の旧進捗を指している。

`固定EXAM_ALIGNMENTと問題・正答を変更せず、練習PDFを作成して全ページ表示QA・文字抽出QA・数値再検算を行う。`

実際には練習PDF、PowerPoint、完成後独立再解答まで完了済みであるため、GitHub正本内の進捗記録が実態と一致していない。教材内容・問題・正答を変更せず、この進捗記録だけを同期する必要がある。

## 仕様境界

追加していない範囲:

- H27一次問3の回生失効・電力貯蔵・運行間隔
- H24二次問3の無効電流・出力可能領域
- Topic 11のパワー半導体損失・熱設計
- Topic 16の蓄電池・DCリンク給電
- 未確認の新幹線実車回生効率

## 最終判定

- 必須成果物: PASS
- 一次4問＋二次記述1問・15答案要素の過去問対応: PASS
- 完成後独立再解答: `15 / 15 PASS`
- 練習・PDF/PPTX QA: PASS
- 仕様外論点の追加なし: PASS
- 未確認実車値の真値化なし: PASS
- 進捗記録整合: FAIL

判定: `NEEDS_REVISION / IN_PROGRESS`。

次は `10_regenerative_braking_four_quadrant_practice.md` 末尾の旧進捗記録だけを現在地へ同期する。