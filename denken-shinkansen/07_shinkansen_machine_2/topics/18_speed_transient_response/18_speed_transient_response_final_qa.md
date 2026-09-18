# Topic 18 最終QA記録

対象: `18 速度指令を変えたら何秒で追従する？`

実施日: 2026-09-18

## 判定

`NEEDS_REVISION / topic_18_final_qa_needs_revision`。

固定EXAM_ALIGNMENT、完成後独立再解答、解説PDF、PowerPoint、仕様境界はPASSしている。一方、現行main上の練習PDFと、そのQA記録が検証対象として一致していない。また進捗記録2箇所が実状態へ同期されていないため、Topic 18をcompletedにはしない。

## reconcile

- 実施時点の最新mainを確認した。
- 最初の未完了テーマはTopic 18。
- 系列 `STATUS.md` / `HANDOFF.md` は `topic_18_independent_reanswer_complete`、次工程「Topic 18最終QA」で一致。
- 固定EXAM_ALIGNMENTは一次1問＋二次4問、計5問・12答案要素のまま変更なし。
- 解説source、解説PDF、練習source、練習PDF、PowerPoint、各QA、独立再解答前ゲート、答案ロック、完成後独立再解答記録の実在を確認した。
- 直近変更を確認し、練習PDFがQA記録作成後に別blobへ置換されていることを確認した。

## 必須成果物

- source Markdown: 実在 PASS (`c9e2f56d99793905008cd4fd7e80bc68e922e141`)
- 解説PDF: 実在 PASS (`4693ebb4d6314b5f2ae4f87dc7a9e352a5770127`)
- 解説PDF QA: PASS (`d1d7cd7331ba5f3223de583b20c0f6b5f416d405`)
- 練習source: 実在 PASS (`390b830fc34ecf382fc6b216a6ce04164780e95c`)
- 練習PDF: 実在するが現行blobは `df2f12f4ffdf74edc5266e95e1badb2dad4d64bc`
- 練習PDF QA: 記録済みQAの対象blobは `0fc7e767eec6ffb5bc5295cff87ef55ddef0ce10`
- 解説画像PowerPoint: PASS (`1c65123ba298961a5dac0be4c87fdef6efcbcc14`)
- PowerPoint QA: PASS (`a12608a301472a755469dadbb5630309081e6c6f`)
- 独立再解答前ゲート: 実在 PASS (`facd63779e09e0940beda793091b154045697979`)
- 答案ロック: 実在 PASS (`8d2d84e8e9aaf0a09cb0e674649720ac2e089b8e`)
- 完成後独立再解答記録: PASS (`633a6a60b411dadcc95fe0e2f9103f61afab6864`)

## EXAM_ALIGNMENT・独立再解答

- H23 一次 機械 問7 (2): `1 / 1 PASS`
- R07 二次 機械・制御 問4 (2),(4),(5): `4 / 4 PASS`
- R06 二次 機械・制御 問4 (2),(3),(4): `3 / 3 PASS`
- R03 二次 機械・制御 問4 (3),(4): `2 / 2 PASS`
- H29 二次 機械・制御 問4 (5): `2 / 2 PASS`
- 合計: `12 / 12 PASS`
- 教材外知識による補完: `0件`

判定: PASS。

## 解説PDF・PowerPoint

- 解説PDF: A4縦5ページ、表示QA `5 / 5 PASS`、文字抽出QA PASS、主要11チェックポイント `11 / 11 PASS`。
- PowerPoint: 16:9・4枚、表示QA `4 / 4 PASS`、overflow `0件`、ZIP整合性PASS、主要数値再計算PASS。

判定: PASS。

## 練習PDF

既存QA記録は、Git blob `0fc7e767eec6ffb5bc5295cff87ef55ddef0ce10`、サイズ14133 byteの練習PDFに対して、表示 `6 / 6 PASS`、文字抽出PASS、一次正答一意性 `10 / 10 PASS`、全15問独立再計算・論理QA `15 / 15 PASS` を記録している。

その後のコミット `1d30f6b778db9bbd0dff179574248502973e976f` で練習PDFだけが置換され、現行mainのGit blobは `df2f12f4ffdf74edc5266e95e1badb2dad4d64bc`、サイズ13044 byteとなっている。QA Markdown自体は更新されていない。

したがって、既存の表示・文字抽出・数値整合QAを現行PDFへ引き継ぐことはできない。

判定: FAIL。

## 仕様境界

- Topic 19 PID先取り: `0件`
- Topic 20 安定判別・周波数応答先取り: `0件`
- Topic 21 再粘着制御先取り: `0件`
- 仕様外独立論点追加: `0件`
- 未確認の新幹線実車時定数・制御ゲイン・整定時間等の実車値化: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`

判定: PASS。

## 進捗記録整合

1. 系列 `STATUS.md` / `HANDOFF.md`: 独立再解答完了、次工程最終QAで整合 — PASS。
2. main source `18_speed_transient_response.md` の `## 状態`: `topic_18_explanation_source_complete`、PDF・練習問題・PowerPoint・独立再解答未着手と記載されており、実状態と不一致 — FAIL。
3. main source末尾 `# 次工程`: 解説PDF作成となっており、実状態と不一致 — FAIL。
4. 練習source末尾 `# 次工程`: 練習PDF作成となっており、実状態と不一致 — FAIL。

判定: FAIL。

## exact blocker

`現行mainの 18_speed_transient_response_practice.pdf は Git blob df2f12f4ffdf74edc5266e95e1badb2dad4d64bc だが、18_speed_transient_response_practice_pdf_qa.md が検証した対象は blob 0fc7e767eec6ffb5bc5295cff87ef55ddef0ce10 である。現行PDFに対する表示QA・文字抽出QA・数値整合QAが存在しないため、MASTER_SPEC / EXAM_ALIGNMENT_SPEC の品質ゲート上、Topic 18をcompletedに確定できない。`

併存する進捗記録不整合:

`18_speed_transient_response.md の状態・次工程、および 18_speed_transient_response_practice.md の次工程が、独立再解答完了後の実状態へ未同期。`

## 次工程

1. 現行blob `df2f12f4ffdf74edc5266e95e1badb2dad4d64bc` の練習PDFに対して、表示QA・文字抽出QA・一次10問正答一意性・全15問数値論理QA・固定12答案要素接続を再実施する。
2. QAがPASSした場合のみ、main sourceの状態・次工程、練習sourceの次工程を実状態へ同期する。
3. その後、Topic 18最終QAを再実施する。

技術本文・問題・正答・固定EXAM_ALIGNMENT・解説PDF・PowerPoint・独立再解答結果は変更しない。