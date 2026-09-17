# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-18

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は `13 / 16`。Topic 01〜13は品質ゲートPASSでcompleted。active topicは14「停電してもN700Sが走れるのはなぜ？」。

Topic 14は制作前 `EXAM_ALIGNMENT`、解説source本文、解説PDF、練習問題source、練習PDF、解説画像PowerPoint、完成後blind独立再解答まで完了。前回最終QAでは技術内容、必須成果物、表示QA、固定EXAM_ALIGNMENTとblind再解答、固定範囲境界はPASSしたが、旧進捗記録3ファイルのため進捗記録整合のみFAILとなった。今回、その3ファイルを実成果物へ同期し `3 / 3 PASS`。固定EXAM_ALIGNMENT、問題、正答、技術本文、PDF/PPTX、固定範囲は変更していない。最終QA再判定前のためまだcompletedではない。

状態: `topic_14_progress_sync_complete / IN_PROGRESS`

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

完成後blind独立再解答では、教材内5項目だけからH30問12の選択肢 `(1)` を一意に固定し、答案固定後の公式解答照合で `1 / 1 PASS`。

## Topic 14 成果物・QA
- source: `topics/14_battery/14_battery.md`
- 解説本文QA: `PASS`
- 固定過去問要求事項の本文マッピング: `1 / 1 PASS`
- 3段階例題: `3 / 3 PASS`
- explanation PDF: `topics/14_battery/14_battery_explanation.pdf`
- explanation PDF QA: `topics/14_battery/14_battery_explanation_pdf_qa.md`
- 解説PDF: A4縦2ページ / 表示 `2 / 2 PASS` / 文字抽出 `PASS`
- practice source: `topics/14_battery/14_battery_practice.md`
- 練習問題: 12問（基礎3 / 本試験標準7 / 複合・応用2）/ 全問五肢択一
- 練習問題独立計算・論理QA: `12 / 12 PASS`
- 練習問題正答一意性QA: `12 / 12 PASS`
- practice PDF: `topics/14_battery/14_battery_practice.pdf`
- practice PDF QA: `topics/14_battery/14_battery_practice_pdf_qa.md`
- 練習PDF: A4縦3ページ / 表示 `3 / 3 PASS` / 文字抽出 `PASS`
- PowerPoint: `topics/14_battery/14_battery_images.pptx`
- PowerPoint QA: `topics/14_battery/14_battery_powerpoint_qa.md`
- PowerPoint: 16:9・4枚 / 表示 `4 / 4 PASS` / ZIP整合性 `PASS`
- 独立再解答記録: `topics/14_battery/14_battery_independent_reanswer.md`
- 完成後blind独立再解答: `1 / 1 PASS`
- 固定範囲外追加: `0件`
- 件数合わせ: `0件`
- 未確認N700S実値追加: `0件`
- Topic 15・16先取り: `0件`

## 前回の最終QA
- 技術内容: `PASS`
- 必須成果物: `PASS`
- 表示QA: `PASS`
- 固定EXAM_ALIGNMENT・完成後blind独立再解答: `PASS`
- 固定範囲境界: `PASS`
- 進捗記録整合: `FAIL`
- 総合判定: `NEEDS_REVISION`

進捗記録整合FAILの対象だった3ファイルは今回すべて同期済み。

1. `topics/14_battery/14_battery.md` — 同期済み
2. `topics/14_battery/14_battery_practice.md` — 同期済み
3. `topics/14_battery/14_battery_practice_pdf_qa.md` — 同期済み

進捗記録同期: `3 / 3 PASS`。

## 新幹線側の扱い
JR東海公式N700Sページで「高速鉄道で世界初となるバッテリ自走システム」の搭載を確認。搭載電池の化学系、実容量、直並列構成、定格電圧、自走速度・距離・時間は実値化していない。系列SPECに明記された基本構成を超えて仕様を追加しない。

## Topic 13
Topic 13「新幹線は主電動機以外もモーターだらけ？」は最終QA再判定PASSで `completed`。固定EXAM_ALIGNMENT 5問、完成後blind独立再解答 `5 / 5 PASS`、PDF/PPTX表示QA、進捗記録整合、固定範囲境界はいずれもPASS。成果物は `topics/13_auxiliary_motors/` に保存済み。

## 次工程
Topic 14の最終QAを再判定する。固定EXAM_ALIGNMENT、問題、正答、技術本文、PDF/PPTX、固定範囲は変更しない。全件PASSの場合のみ `completed` とする。
