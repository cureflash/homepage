# HANDOFF

updated: 2026-09-19
series: `06_shinkansen_power_2`
active_topic: `15`
current_status: `topic_15_practice_source_complete`

## 今回完了

最新main、MASTER SPEC、EXAM_ALIGNMENT SPEC、本系列SPEC、STATUS/HANDOFF、Topic 15の固定EXAM_ALIGNMENT・解説source・解説PDF QAをreconcileし、次工程として練習問題sourceを作成した。

更新:
- `topics/15_regenerative_power/15_regenerative_power_practice.md`
- `STATUS.md`
- `HANDOFF.md`

固定問題・答案要素・本文節マッピング・仮定値/実値境界は変更していない。

## 練習問題source結果

- 全15問
- 基礎: `4問`
- 本試験標準: `8問`
- 複合・応用: `3問`
- 二種一次型五肢択一: `10問`
- 二種二次型記述: `5問`
- 全問に完全解説
- 固定一次3問の `15 / 15` 答案要素を接続
- 固定二次2問の `9 / 9` 答案要素を接続
- 合計: `24 / 24` 答案要素を接続

収録範囲:
- 力行・回生の符号と逆潮流
- kW/kWhと時系列電力収支
- Cレート、SOC、自己放電、充放電効率
- NaS、リチウムイオン、レドックスフロー電池
- 揚水発電の発電出力・揚水入力・総合効率・相反転断路器
- 広域連系と負荷率、可変速揚水、需要家側蓄電池
- 電池・フライホイール・SMESの原理と特徴
- 系統受容性、電圧上昇、回生失効の概念

公式過去問の転載は行わず、数値は教材用仮定値として明示した。

## reconcile結果

- Topic 01〜14: `completed`
- Topic 15: `IN_PROGRESS / 解説PDF PASS / 練習source complete`
- 完成数: `14 / 22`
- 固定EXAM_ALIGNMENT: 一次3問＋二次2問、計5問のまま
- 制作前blind: `5 / 5問・24 / 24答案要素 PASS`
- 解説PDF QA: `PASS`
- 練習source: `24 / 24答案要素 covered`
- 新規正式過去問追加: `0件`
- 練習PDF、PowerPoint、完成後blind: 未着手

## 次に行う

`topics/15_regenerative_power/15_regenerative_power_practice.md` から練習PDFを生成し、PDF QAを行う。

変更しない:
- 固定5問・24答案要素
- 本文節マッピング8節
- 仮定値/実値境界
- 後続Topic境界

PowerPoint、完成後blindはまだ行わない。

## 品質境界

- Topic 15固定問題: `5問`（一次3・二次2）
- 固定答案要素: `24`
- 制作前blind: `24 / 24 PASS`
- 練習source答案要素接続: `24 / 24`
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
