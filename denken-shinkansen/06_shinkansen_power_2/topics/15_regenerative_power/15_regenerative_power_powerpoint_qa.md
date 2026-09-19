# Topic 15 PowerPoint QA

更新日: 2026-09-19
status: `PASS / topic_15_powerpoint_complete`

対象: `15_regenerative_power_images.pptx`

## 正本境界

既存の `15_regenerative_power_explanation.md`、固定EXAM_ALIGNMENT、系列 `SPEC.md` のTopic 15範囲だけでPowerPointを構成した。正式過去問、固定答案要素、教材技術範囲は追加・差替えしていない。

- ファイルサイズ: `41310 bytes`
- SHA-256: `607e662db92b8461f4a4111571102bbcdcd5e29fcbdfe48ba3fb38a2727a33d9`
- 16:9
- スライド数: `5`

## 構造・表示QA

- PPTX ZIP整合性: `PASS`
- `slides_test.py`: `PASS / No overflow detected`
- LibreOfficeレンダリング: `1601 x 900`, `5 / 5 PASS`
- 目視: 文字切れ `0件`、重なり `0件`、図形はみ出し `0件`
- LibreOffice PDF変換: `5ページ PASS`
- PDF文字抽出: `PASS / U+FFFD 0件 / 黒四角0件 / □ 0件`

## 固定5スライド

1. 回生電力の行き先、系統受容性、電力収支、逆潮流、電圧上昇、回生失効の概念
2. 力行・回生電力の時系列、変電所から見た正味電力、蓄電あり／なし比較
3. 二次電池のSOC、Cレート、充放電効率、自己放電、NaS・Li-ion・レドックスフロー
4. 揚水発電の発電時有効落差、揚水時全揚程、入出力、総合効率
5. 広域連系と負荷率、需要家側蓄電池、電池・フライホイール・SMESの二次記述答案化

## SPEC固定範囲

固定8項目:
- 逆潮流: Slides 1, 2
- 回生電力: Slides 1, 2
- 他列車への融通: Slide 1（同時刻の他列車・一般負荷で消費）
- 蓄電設備: Slides 1〜5
- 系統受容性: Slide 1
- 電圧上昇: Slide 1
- 需給バランス: Slides 1, 2（符号付き電力収支）
- 回生失効の概念: Slide 1

結果: `8 / 8 PASS`。

固定3可視化:
- 力行列車と回生列車の時系列電力: Slide 2
- 変電所から見た正味電力: Slide 2
- 蓄電あり／なし比較: Slide 2

結果: `3 / 3 PASS`。数値は既存sourceの教材用仮定値だけを使用し、実設備値として扱っていない。

## 正式過去問品質ゲート接続

- 令和2年度 第二種一次「電力」問6: `5 / 5答案要素` — Slide 3
- 平成28年度 第二種一次「電力」問5: `5 / 5答案要素` — Slide 3
- 平成26年度 第二種一次「電力」問1: `5 / 5答案要素` — Slide 4
- 平成25年度 第二種二次「電力・管理」問6: `3 / 3答案群` — Slide 5
- 平成21年度 第二種二次「電力・管理」問4: `6 / 6答案要素` — Slide 5

PowerPoint説明接続:
- 一次: `15 / 15 PASS`
- 二次: `9 / 9 PASS`
- 合計: `5 / 5問・24 / 24答案要素 PASS`

これはPowerPoint内の説明接続QAであり、完成後blind独立再解答そのものではない。完成後blindは次工程とする。

## 品質境界

- 固定EXAM_ALIGNMENT変更: `0件`
- 固定5問・24答案要素変更: `0件`
- 新規正式過去問追加: `0件`
- Topic 16故障計算先取り: `0件`
- Topic 17保護・FRT設計先取り: `0件`
- Topic 18雷サージ先取り: `0件`
- Topic 20安定度先取り: `0件`
- Topic 21需給制御一般の新規展開: `0件`
- 未確認実設備値の真値化: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`

## 判定

`PASS / topic_15_powerpoint_complete`

次工程は、固定5問・24答案要素を変更せず、完成済みlearner-facing成果物だけを使った完成後blind独立再解答。Webカタログ登録・最終QAはその後とする。
