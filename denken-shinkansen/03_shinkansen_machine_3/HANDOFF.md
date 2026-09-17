# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-17

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は `13 / 16`。Topic 01〜13は品質ゲートPASSでcompleted。active topicは14「停電してもN700Sが走れるのはなぜ？」。

Topic 14は制作前 `EXAM_ALIGNMENT`、解説source本文、解説PDF、練習問題source、練習PDF、解説画像PowerPointを完了し、`topic_14_powerpoint_complete / IN_PROGRESS`。完成後blind独立再解答は未実施。

## Topic 14 固定範囲
系列 `SPEC.md` に従い、電池 / 正極 / 負極 / 電解質 / 起電力 / 充電 / 放電 / 一次電池 / 二次電池 / リチウムイオン電池 / 電圧 / 電流 / Ah / Wh / 直列接続 / 並列接続 / 内部抵抗 / 充放電効率だけを扱う。

計算範囲:
- 電池容量
- 電力量
- 直列時の電圧
- 並列時の容量
- 放電時間
- 必要電力から必要容量

燃料電池、電気分解・電気めっき、鉛蓄電池・ニッケル水素電池・NAS電池等の個別化学、BMS・保護回路・熱管理、Topic 15・16は追加しない。

## Topic 14 固定EXAM_ALIGNMENT
- H30 機械 問12 — リチウムイオン二次電池の正極・負極・電解液、放電時のリチウムイオン移動方向、セル電圧

品質ゲート対象は `1問`。直近年度から遡って電気化学・電池問題を確認したが、系列SPEC固定範囲だけで問題全体を解答対象にできると確認した公式問題はH30問12のみ。三種で関連公式問題が5問未満の場合は確認できた全件を扱うという上位仕様の例外を適用し、件数合わせの固定範囲外追加はしない。

近接問題の非選定:
- H28 機械 問12 — 二次電池・内部抵抗等は接続するが、問題全体には酸化還元・イオン化傾向が必要なため非選定。
- R4上 機械 問12 — NAS固有の活物質・電解質・作動条件が必要なため非選定。

制作前公式照合ではH30問12の公式正答 `(1)` を確認。完成後blind独立再解答は教材完成後に別工程で行う。

## Topic 14 解説source本文
`topics/14_battery/14_battery.md` に解説本文を作成済み。

- H30問12の要求事項本文マッピング: `1 / 1 PASS`
- 3段階例題: `3 / 3 PASS`
- 公式・単位・使用条件・逆算手順: `PASS`
- 固定計算範囲: `PASS`
- 固定範囲外追加: `0件`
- H28問12向け酸化還元・イオン化傾向追加: `0件`
- NAS・燃料電池・電気加工等追加: `0件`
- 未確認N700S実値追加: `0件`
- Topic 15・16先取り: `0件`
- 解説source QA: `PASS`

## Topic 14 解説PDF
`topics/14_battery/14_battery_explanation.pdf` を作成済み。

- A4縦2ページ
- 200 dpi表示QA: `2 / 2 PASS`
- 文字抽出QA: `PASS`
- 文字切れ・重なり・ページ外はみ出し: `0件`
- 欠落・破損グリフ: `0件`
- 固定EXAM_ALIGNMENT H30問12の教材内マッピング: `1 / 1`
- 3段階例題: `3 / 3`
- 固定範囲外追加: `0件`
- 未確認N700S実値追加: `0件`
- QA: `topics/14_battery/14_battery_explanation_pdf_qa.md`

## Topic 14 練習問題source
`topics/14_battery/14_battery_practice.md` を作成済み。

- 問題数: `12 / 12`
- 構成: 基礎3 / 本試験標準7 / 複合・応用2
- 五肢択一: `12 / 12`
- 独立計算・論理QA: `12 / 12 PASS`
- 正答一意性QA: `12 / 12 PASS`
- 固定EXAM_ALIGNMENT H30問12への接続: `1 / 1 PASS`（問4）
- `Ah` / `Wh` / 直列 / 並列 / 内部抵抗 / 充放電効率 / 放電時間 / 必要容量: `PASS`
- H28問12向け酸化還元・イオン化傾向追加: `0件`
- NAS・燃料電池・電気加工等の固定範囲外追加: `0件`
- 未確認N700S実値追加: `0件`
- Topic 15・16先取り: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 判定: `PASS / PRACTICE_SOURCE_COMPLETE`

## Topic 14 解説画像PowerPoint
`topics/14_battery/14_battery_images.pptx` を作成済み。

- 16:9・4枚
- LibreOffice 180 dpi表示QA: `4 / 4 PASS`
- スライド外はみ出し: `0件`
- 文字切れ・重なり・判読不能: `0件`
- 欠落・破損グリフ: `0件`
- PowerPoint ZIP整合性: `PASS`
- 固定EXAM_ALIGNMENT H30問12との接続: `1 / 1 PASS`
- `C = It` / `W = VC` / `W = Pt` / 直列・並列 / `V = E - Ir` / 放電効率を含む必要容量逆算: `PASS`
- 固定範囲外追加: `0件`
- 未確認N700S実値追加: `0件`
- QA: `topics/14_battery/14_battery_powerpoint_qa.md`

## Topic 14 新幹線側の扱い
JR東海公式N700Sページで「高速鉄道で世界初となるバッテリ自走システム」の搭載を確認。搭載電池の化学系、実容量、直並列構成、定格電圧、自走速度・距離・時間、詳細な電力経路は現時点で実値化しない。一次資料で明示された値だけを後工程で使用する。

## Topic 14 成果物
- source: `topics/14_battery/14_battery.md`
- 状態: 解説画像PowerPoint完成
- source本文QA: `PASS`
- explanation PDF: `topics/14_battery/14_battery_explanation.pdf`
- explanation PDF QA: `topics/14_battery/14_battery_explanation_pdf_qa.md`
- explanation PDF表示QA: `2 / 2 PASS`
- explanation PDF文字抽出QA: `PASS`
- practice source: `topics/14_battery/14_battery_practice.md`
- practice source QA: `12 / 12 PASS`
- practice PDF: `topics/14_battery/14_battery_practice.pdf`
- practice PDF QA: `topics/14_battery/14_battery_practice_pdf_qa.md`
- practice PDF表示QA: `3 / 3 PASS`
- practice PDF文字抽出QA: `PASS`
- practice PDF固定過去問マッピング: `1 / 1 PASS`
- practice PDF文字切れ・重なり・ページ外はみ出し: `0件`
- practice PDF欠落・破損グリフ: `0件`
- PowerPoint: `topics/14_battery/14_battery_images.pptx`
- PowerPoint QA: `topics/14_battery/14_battery_powerpoint_qa.md`
- PowerPoint表示QA: `4 / 4 PASS`
- PowerPoint固定過去問接続: `1 / 1 PASS`
- 完成後blind独立再解答: 未実施
- 固定範囲外追加: `0件`
- 件数合わせ: `0件`
- 未確認N700S実値追加: `0件`

## Topic 13
Topic 13「新幹線は主電動機以外もモーターだらけ？」は最終QA再判定PASSで `completed`。固定EXAM_ALIGNMENT 5問、完成後blind独立再解答 `5 / 5 PASS`、PDF/PPTX表示QA、進捗記録整合、固定範囲境界はいずれもPASS。成果物は `topics/13_auxiliary_motors/` に保存済み。

## 次工程
Topic 14の完成後blind独立再解答を実施する。
