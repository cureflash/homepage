# HANDOFF

updated: 2026-09-19
series: `06_shinkansen_power_2`
active_topic: `15`
current_status: `topic_15_powerpoint_complete`

## 今回完了

最新main、MASTER SPEC、EXAM_ALIGNMENT SPEC、本系列SPEC、STATUS/HANDOFF、Topic 15の固定EXAM_ALIGNMENT、制作前blind、解説source/PDF QA、練習source/PDF QAをreconcileした。

直近の同系列正本は `topic_15_practice_pdf_complete` であり、PowerPointは未着手だったため重複なし。次工程としてPowerPointを制作し、PowerPoint QAを完了した。

追加:
- `topics/15_regenerative_power/15_regenerative_power_images.pptx`
- `topics/15_regenerative_power/15_regenerative_power_powerpoint_qa.md`

更新:
- `STATUS.md`
- `HANDOFF.md`

固定問題・24答案要素・本文節マッピング・仮定値/実値境界は変更していない。

## PowerPoint結果

- 16:9 `5スライド`
- ZIP整合性: `PASS`
- `slides_test.py`: `PASS / No overflow detected`
- LibreOffice 1601×900表示: `5 / 5 PASS`
- 文字切れ・重なり・図形はみ出し: `0件`
- LibreOffice PDF変換: `5ページ PASS`
- PDF文字抽出: `PASS / U+FFFD 0件 / 黒四角0件 / □ 0件`
- SPEC固定8項目: `8 / 8 PASS`
- SPEC固定3可視化: `3 / 3 PASS`
- 固定一次3問の `15 / 15` 答案要素を接続
- 固定二次2問の `9 / 9` 答案要素を接続
- 合計: `24 / 24` 答案要素を接続
- QA判定: `PASS`

数値は既存sourceの教材用仮定値だけを使用し、未確認の実設備値を真値化していない。公式過去問本文の転載、新規正式過去問追加、後続Topic先取りは行っていない。

## reconcile結果

- Topic 01〜14: `completed`
- Topic 15: `IN_PROGRESS / 解説PDF PASS / 練習PDF PASS / PowerPoint PASS`
- 完成数: `14 / 22`
- 固定EXAM_ALIGNMENT: 一次3問＋二次2問、計5問のまま
- 制作前blind: `5 / 5問・24 / 24答案要素 PASS`
- 解説PDF QA: `PASS`
- 練習PDF QA: `PASS`
- PowerPoint QA: `PASS`
- PowerPoint説明接続: `24 / 24答案要素 covered`
- 新規正式過去問追加: `0件`
- 完成後blind: 未着手

## 次に行う

完成済みlearner-facing成果物だけを使って、Topic 15の固定5問・24答案要素を完成後blind独立再解答する。

変更しない:
- 固定5問・24答案要素
- 本文節マッピング8節
- 仮定値/実値境界
- 後続Topic境界

blind PASS前にWebカタログ登録・最終QA・Topic 15 completed化は行わない。

## 品質境界

- Topic 15固定問題: `5問`（一次3・二次2）
- 固定答案要素: `24`
- 制作前blind: `24 / 24 PASS`
- 練習PDF答案要素接続: `24 / 24`
- PowerPoint答案要素接続: `24 / 24`
- 周辺問題による件数水増し: `0件`
- Topic 14固定問題の重複採用: `0件`
- Topic 16故障計算先取り: `0件`
- Topic 17保護・FRT設計先取り: `0件`
- Topic 18雷サージ先取り: `0件`
- Topic 20安定度先取り: `0件`
- Topic 21需給制御一般の新規展開: `0件`
- 未確認実設備値の真値化: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`
