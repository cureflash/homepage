# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-17

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は `12 / 16`。Topic 01〜12は品質ゲートPASSでcompleted。active topicは13「新幹線は主電動機以外もモーターだらけ？」。

現在 `topic_13_independent_reanswer_complete / IN_PROGRESS`。固定5問を完成教材だけでblind再解答し、答案固定後の公式解答照合まで `5 / 5 PASS`。H29 機械 問12は前段の汚染runを未判定として隔離したうえで、電気技術者試験センターの公式問題だけを先に参照するfresh blind条件で再実施し `(4)` に固定、固定後に公式解答 `(4)` と照合してPASSした。Topic 13はまだ最終QA前のためcompletedにはしない。

## Topic 13 固定範囲
電動機出力 / 回転速度 / トルク / 負荷特性 / ポンプ / ファン / コンプレッサ / 所要動力 / 効率 / インバータ駆動 / 可変速運転。

代表計算:
- `P = ωT`
- `ω = 2πN/60`
- ポンプ水動力 `P_h = ρgQH`
- ポンプ効率・電動機効率・余裕係数を含む所要動力
- ファン・ポンプ系の代表的負荷特性 `Q ∝ N`、`T ∝ N²`、`P ∝ N³`

## 固定EXAM_ALIGNMENT
- R5上 機械 問7 — 電動機・負荷のトルク－速度曲線、安定動作点、送風機負荷
- R4下 機械 問11 — ポンプ所要動力、流量換算、損失水頭、ポンプ効率、電動機効率
- H30 機械 問10 — ポンプ所要動力、効率、余裕係数、必要台数
- H29 機械 問12 — `Q ∝ N`、`T ∝ N²`、`P ∝ N³`、可変速運転
- H27 機械 問12 — ポンプ用電動機出力、全揚程、効率、余裕係数

品質ゲート対象 `5問`。制作前独立検証・公式解答照合 `5 / 5 PASS`。完成後blind独立再解答・公式解答照合 `5 / 5 PASS`。固定EXAM_ALIGNMENT変更、教材外・固定範囲外補完、件数合わせ、未確認補機仕様追加はいずれも0件。

## 成果物・QA
- source: `topics/13_auxiliary_motors/13_auxiliary_motors.md`
- explanation PDF: `topics/13_auxiliary_motors/13_auxiliary_motors_explanation.pdf`
- explanation PDF QA: `topics/13_auxiliary_motors/13_auxiliary_motors_explanation_pdf_qa.md`
- practice source: `topics/13_auxiliary_motors/13_auxiliary_motors_practice.md`
- practice PDF: `topics/13_auxiliary_motors/13_auxiliary_motors_practice.pdf`
- practice PDF QA: `topics/13_auxiliary_motors/13_auxiliary_motors_practice_pdf_qa.md`
- PowerPoint: `topics/13_auxiliary_motors/13_auxiliary_motors_images.pptx`
- PowerPoint QA: `topics/13_auxiliary_motors/13_auxiliary_motors_powerpoint_qa.md`
- independent reanswer: `topics/13_auxiliary_motors/13_auxiliary_motors_independent_reanswer.md`

解説本文は固定5問を `5 / 5` マッピング、3段階例題 `3 / 3 PASS`。解説PDFはA4縦4ページ、200 dpi表示 `4 / 4 PASS`、文字抽出PASS。

練習問題は12問・全問五肢択一（基礎3 / 本試験標準7 / 複合2）、独立計算・論理 `12 / 12 PASS`、正答一意性 `12 / 12 PASS`、固定5問接続 `5 / 5 PASS`。練習PDFはA4縦3ページ、200 dpi表示 `3 / 3 PASS`、文字抽出PASS。

解説画像PowerPointは16:9・4枚。固定5問接続 `5 / 5 PASS`。LibreOffice→PDF→180 dpi表示 `4 / 4 PASS`、スライド外はみ出し0件、文字切れ・重なり・判読不能0件、欠落・破損グリフ0件、ZIP整合性PASS。SHA-256: `8dc1bd352a123bd85b5a6b1f7a21591b98e1c25586a3d8682848dc4344acea02`。

完成後blind独立再解答は、R5上 問7 `(4)`、R4下 問11 `(4)`、H30 問10 `(4)`、H29 問12 `(4)`、H27 問12 `(5)`。公式解答一致 `5 / 5 PASS`、教材外・固定範囲外知識補完0件。

H29 問12 fresh blindでは、教材の `T∝N²`、`Q∝N`、`P∝N³` を公式問題の選択肢へ照合すると(イ)(ウ)(エ)が一致するのは `(4)` のみであるため、教材にないエレベータ負荷知識を追加せず一意に選択できた。答案固定後に公式解答 `(4)` を確認した。

## 範囲境界
- エレベータ・巻上機を独立論点として追加しない。
- キャビテーション、NPSH、配管網解析へ拡張しない。
- コンプレッサの圧縮仕事・熱力学サイクルへ拡張しない。
- Topic 14〜16を先取りしない。
- ドア駆動装置からシーケンス制御・インタロックへ拡張しない。
- 車種固有の補機形式、定格、電圧、周波数、インバータ方式を一次資料確認前に実値化しない。

## 次工程
Topic 13の最終QAを行う。必須成果物、固定EXAM_ALIGNMENT 5問、完成後blind独立再解答 `5 / 5 PASS`、PDF/PPTX表示QA、進捗記録整合、固定範囲境界を再確認し、全件PASSの場合のみTopic 13を `completed` とする。
