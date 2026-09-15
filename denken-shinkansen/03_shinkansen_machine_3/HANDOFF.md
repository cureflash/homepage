# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-15

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は `8 / 16`。Topic 01〜08は品質ゲートPASSでcompleted。active topicは09「新幹線はどうやって電気で止まる？」。

## 今回進捗
Topic 09「新幹線はどうやって電気で止まる？」の解説画像PowerPointを完成した。

- 品質ゲート対象: 公式過去問5問
- 制作前答案列: `(4), (3), (2), (5), (1)`
- 制作前公式照合: `5 / 5 PASS`
- 解説本文＋3段階例題: 完了
- 固定5問の本文マッピング: `5 / 5 全件`
- 解説PDF: A4縦3ページ、表示QA `3 / 3 PASS`
- 練習問題source: 12問・全問五肢択一、独立QA `12 / 12 PASS`
- 練習PDF: A4縦6ページ、表示QA `6 / 6 PASS`
- 解説画像PowerPoint: 16:9・4枚
- PowerPoint固定EXAM_ALIGNMENT接続: `5 / 5 全件`
- PowerPoint表示QA: `4 / 4 PASS`
- overflow: `0件`
- PowerPoint ZIP整合性: `PASS`
- 外部画像: `0点`（PowerPoint図形で独自作成）
- 固定EXAM_ALIGNMENT変更: `0件`
- 教材外・固定範囲外知識による補完: `0件`
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`
- PowerPoint: `topics/09_regenerative_braking/09_regenerative_braking_images.pptx`
- PowerPoint QA: `topics/09_regenerative_braking/09_regenerative_braking_powerpoint_qa.md`
- 完成数: `8 / 16`

固定範囲外の誘導機構造・スリップリング・直流機始動/速度制御・発電機外部特性・チョッパ・二次入力/二次銅損・ベクトル制御等は追加していない。数値問題は通常の電験三種型または計算練習用仮定値とし、未確認実車値を真値として扱っていない。

## Topic 09 EXAM_ALIGNMENT
品質ゲート対象は5問で固定。

1. R8上 機械 問11 — 機械出力、力、速度、効率
2. R2 機械 問11 — 回転体の運動エネルギー、減速、平均出力
3. H29 機械 問2 — 発電機作用、回生時の電流・トルク方向、誘導起電力と電源電圧
4. H25 機械 問10 — 回転速度、角速度、出力、トルク、回転体の運動エネルギー
5. H24 機械 問11 — 慣性モーメント、発電制動、回生制動、エネルギーの処理先

制作前公式照合: `5 / 5 PASS`

### 非選定
- R7上 機械 問3: かご形/巻線形の構造・材料・用途まで必要なため除外。
- R6上 機械 問3: 巻線形誘導機のスリップリング・二次抵抗調整まで必要なため除外。
- R4上 機械 問1: 直流電動機の始動抵抗・速度制御・逆転まで必要なため除外。
- H27 機械 問2: 他励/分巻発電機の外部特性曲線まで必要なため除外。
- H26 機械 問16: 降圧・昇圧チョッパのスイッチング計算が主要求のため除外。
- H29 機械 問3: 二次入力・二次銅損・同期ワットまで必要なため除外。

## Topic 09 固定範囲
系列SPECに従い、次だけを扱う。

- 発電機作用
- 誘導機の発電機運転
- 回生ブレーキ
- 発電ブレーキ
- 電力
- トルク
- 回転方向
- 制動力
- 運動エネルギー
- 効率
- 四象限運転の概念
- 運動エネルギー、回生可能電力量、モーター出力、制動時間、効率を含めた回収電力量の計算

四象限運転は概念図までとし、詳細解析は扱わない。新幹線実車値は一次資料確認済みのものだけを使い、未確認値は推測しない。

## Topic 09 現在状態
- 制作前EXAM_ALIGNMENT: 完了
- 制作前検証: `5 / 5 PASS`
- 解説本文: 完了
- 3段階例題: 完了
- 固定5問の本文マッピング: `5 / 5 全件`
- 解説PDF: 完了
- 解説PDF表示QA: `3 / 3 PASS`
- 解説PDF文字抽出QA: `PASS`
- 練習問題source: 完了
- 練習問題: 全12問・全問五肢択一
- 練習問題独立QA: `12 / 12 PASS`
- 練習問題正答一意性: `12 / 12 PASS`
- 練習PDF: 完了
- 練習PDF: A4縦6ページ
- 練習PDF表示QA: `6 / 6 PASS`
- 練習PDF文字抽出QA: `PASS`
- 解説画像PowerPoint: 完了
- 解説画像PowerPoint: 16:9・4枚
- PowerPoint表示QA: `4 / 4 PASS`
- PowerPoint overflow: `0件`
- PowerPoint ZIP整合性: `PASS`
- 完成後独立再解答: 未実施
- 最終QA: 未実施

source: `topics/09_regenerative_braking/09_regenerative_braking.md`

practice source: `topics/09_regenerative_braking/09_regenerative_braking_practice.md`

practice PDF: `topics/09_regenerative_braking/09_regenerative_braking_practice.pdf`

practice PDF QA: `topics/09_regenerative_braking/09_regenerative_braking_practice_pdf_qa.md`

PowerPoint: `topics/09_regenerative_braking/09_regenerative_braking_images.pptx`

PowerPoint QA: `topics/09_regenerative_braking/09_regenerative_braking_powerpoint_qa.md`

## 次に行う
Topic 09の完成後独立再解答を実施する。保存済み正答を先に見ず、完成教材だけで固定EXAM_ALIGNMENT 5問を再解答する。固定EXAM_ALIGNMENT 5問、固定範囲、正答は変更しない。

## Topic 08 完了要約
Topic 08「N700Sのモーターはなぜ小さくできた？」は品質ゲートPASS / completed。

- 固定EXAM_ALIGNMENT: 4問・5小問
- 制作前検証: `5 / 5 PASS`
- 完成後独立再解答: `5 / 5 PASS`
- 解説PDF・練習PDF・PowerPoint: 完成
- 表示QA・文字抽出QA・overflow・PPTX整合性: PASS
- 教材外・固定範囲外知識による補完: `0件`
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`

## Topic 07 完了要約
Topic 07「GTO→IGBT→SiCで何が変わった？」は品質ゲートPASS / completed。

- 固定EXAM_ALIGNMENT: 5問
- 制作前検証: `5 / 5 PASS`
- 完成後独立再解答: `5 / 5 PASS`
- 解説PDF・練習PDF・PowerPoint: 完成
- 表示QA・文字抽出QA・overflow・PPTX整合性: PASS
- 教材外・固定範囲外知識による補完: `0件`
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`

## Topic 06 完了要約
Topic 06「新幹線はどうやって速度を変えている？」は品質ゲートPASS / completed。固定5問・7小問の完成後独立再解答 `7 / 7 PASS`、解説PDF・練習PDF・PowerPoint・表示QA・範囲境界を確認済み。教材外・固定範囲外知識による補完 `0件`。