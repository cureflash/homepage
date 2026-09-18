# Topic 18 最終QA記録

対象: `18 速度指令を変えたら何秒で追従する？`

更新日: 2026-09-19

## 判定

`NEEDS_REVISION / topic_18_final_qa_needs_revision`。

固定EXAM_ALIGNMENT、完成後独立再解答、解説PDF、PowerPoint、仕様境界はPASSしている。現行練習PDFの再QAを実施して旧QAとのblob不一致は解消したが、近似記号 `≈` の破損グリフを確認したためTopic 18をcompletedにはしない。

## reconcile

- `MASTER_SPEC.md` / `EXAM_ALIGNMENT_SPEC.md` / 系列 `SPEC.md` / `STATUS.md` / `HANDOFF.md` と現行mainを確認した。
- 最初の未完了テーマはTopic 18。
- 固定EXAM_ALIGNMENTは一次1問＋二次4問、計5問・12答案要素のまま変更なし。
- 解説source、解説PDF、練習source、現行練習PDF、PowerPoint、各QA、独立再解答前ゲート、答案ロック、完成後独立再解答記録の実在を確認した。
- 現行練習PDF Git blob `df2f12f4ffdf74edc5266e95e1badb2dad4d64bc` を対象に再QAした。
- 再QA記録: `18_speed_transient_response_practice_pdf_qa.md`。

## 必須成果物

- source Markdown: 実在 PASS (`c9e2f56d99793905008cd4fd7e80bc68e922e141`)
- 解説PDF: PASS (`4693ebb4d6314b5f2ae4f87dc7a9e352a5770127`)
- 解説PDF QA: PASS (`d1d7cd7331ba5f3223de583b20c0f6b5f416d405`)
- 練習source: PASS (`390b830fc34ecf382fc6b216a6ce04164780e95c`)
- 練習PDF: 実在 (`df2f12f4ffdf74edc5266e95e1badb2dad4d64bc`) / 再QA `NEEDS_REVISION`
- 解説画像PowerPoint: PASS (`1c65123ba298961a5dac0be4c87fdef6efcbcc14`)
- PowerPoint QA: PASS (`a12608a301472a755469dadbb5630309081e6c6f`)
- 独立再解答前ゲート: PASS (`facd63779e09e0940beda793091b154045697979`)
- 答案ロック: 実在 (`8d2d84e8e9aaf0a09cb0e674649720ac2e089b8e`)
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

## 現行練習PDF再QA

対象:
- Git blob: `df2f12f4ffdf74edc5266e95e1badb2dad4d64bc`
- SHA-256: `ae2913569943e1cb4a7ea58f09ca1c0d6d3ea15da3de6b822130189cec35bead`
- size: `13044 byte`
- A4縦・5ページ

確認結果:
- 問1〜問15、固定H23 / R07 / R06 / R03 / H29対応表: PASS
- 固定5問・12答案要素接続: `12 / 12 PASS`
- 一次10問正答一意性・全15問数値論理: 既存source QAと矛盾なし
- 160 dpi表示: ページ切れ・重なり・overflow `0件`
- `pdftotext -layout`: 抽出成功、Unicode置換文字 `0件`、`(cid:)` `0件`
- source中の `≈` 16箇所に対しPDF抽出は `≈` 0件。レンダリングでは該当位置が四角い欠落グリフとして表示される

したがって数値・論理ではなくPDFグリフ品質でFAIL。

判定: `NEEDS_REVISION / topic_18_practice_pdf_reqa_needs_revision`。

## 仕様境界

- Topic 19 PID先取り: `0件`
- Topic 20 安定判別・周波数応答先取り: `0件`
- Topic 21 再粘着制御先取り: `0件`
- 仕様外独立論点追加: `0件`
- 未確認の新幹線実車時定数・制御ゲイン・整定時間等の実車値化: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`

判定: PASS。

## 進捗記録整合

- `STATUS.md` / `HANDOFF.md` は前工程「現行練習PDF再QA」を次工程としているため、今回の再QA完了後の実状態とは未同期。
- main source `18_speed_transient_response.md` の状態・次工程は完成後実状態へ未同期。
- 練習source `18_speed_transient_response_practice.md` の次工程も未同期。
- PDFがPASSする前にcompleted方向へ同期しない。

判定: FAIL。

## exact blocker

`現行 18_speed_transient_response_practice.pdf は固定5問・12答案要素および数値論理を維持しているが、sourceで使用する近似記号 ≈ がPDFでは欠落グリフになる。表示品質ゲートを満たさないため、Topic 18をcompletedにできない。`

## 次工程

1. 技術本文・問題・正答・固定EXAM_ALIGNMENTを変更せず、練習PDF生成側で `≈` を正しく表示できるよう修正してPDFを再生成する。
2. 現行PDFへ表示・文字抽出・一次10問正答一意性・全15問数値論理・固定12答案要素接続QAを再実施する。
3. PASS後にのみ進捗記録を実状態へ同期し、Topic 18最終QAを再実施する。