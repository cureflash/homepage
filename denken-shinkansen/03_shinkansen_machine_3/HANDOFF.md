# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-18

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は `15 / 16`。Topic 01〜15は品質ゲートPASSでcompleted。active topicは16「同期機って新幹線には使わないの？」。

Topic 15は、前回最終QAで唯一FAILだった進捗記録整合を同期後に再判定し、技術内容、必須成果物、表示QA、固定EXAM_ALIGNMENT＋完成後blind独立再解答、進捗記録整合、固定範囲境界の全項目が `PASS`。Webカタログにも登録し `completed` とした。固定EXAM_ALIGNMENT、問題・正答、教材本文、PDF/PPTXは変更していない。

状態: `topic_15_completed / completed`

## Topic 15 最終QA再判定
- 技術内容: `PASS`
- 必須成果物: `PASS`
- 表示QA: `PASS`
- 固定EXAM_ALIGNMENT＋完成後blind独立再解答: `PASS`
- 進捗記録整合: `PASS`
- 固定範囲境界: `PASS`
- Webカタログ登録: `qualifications/denken-shinkansen/catalog.json` / `PASS`
- 最終判定: `PASS / completed`

## Topic 15 固定範囲
照明:
- 光束 / 光度 / 照度 / 輝度
- lm / cd / lx
- 逆二乗則
- 照明率 / 保守率 / 所要灯数
- 発光効率 / LED
- 計算: 照度 / 光度 / 光束 / 所要灯数 / 消費電力

電熱・空調:
- ジュール熱 / 電力量 / 熱量 / ヒーター / 空調 / 電熱 / 効率 / COPの基本
- 計算: `Q = I²Rt` / `Q = Pt` 等を中心に扱う

過去問で比熱・潜熱・密度が数値として与えられる場合は熱量換算の与条件として使うが、熱伝導・熱放射・熱抵抗・相変化理論等を独立論点として追加しない。新幹線側は「客室で使われる電気設備」という導入に限定し、一次資料で確認できない照明器具仕様・灯数・消費電力・空調能力・COP等は実値化しない。

## Topic 15 固定EXAM_ALIGNMENT
- R8上 機械 問17(a)(b) — 熱量 / 電熱 / 効率 / 消費電力 / 時間
- R7上 機械 問12 — 光束 / 光度 / 水平面照度 / 逆二乗則 / 複数光源
- R7上 機械 問17(a)(b) — 熱量 / 消費電力 / 効率 / 電力量
- R6下 機械 問17(a)(b) — 光束 / 平均光度 / 水平面照度 / 逆二乗則
- R6上 機械 問17(a)(b) — 光束 / 光度 / 照度 / 輝度
- R4上 機械 問17(a)(b) — 電力量 / 熱量 / COP / 温度上昇
- R2 機械 問12 — 平均照度 / 光束 / 照明率 / 保守率 / 所要灯数

品質ゲート対象は `7問・12答案要素`。制作前独立検証・公式解答照合 `12 / 12 PASS`、固定範囲外知識による答案補完 `0件`。解説source本文マッピング `12 / 12 PASS`、3段階例題 `PASS`。

完成後blind独立再解答:
- R8上 機械 問17: `(a)5 / (b)2`
- R7上 機械 問12: `(4)`
- R7上 機械 問17: `(a)2 / (b)2`
- R6下 機械 問17: `(a)2 / (b)3`
- R6上 機械 問17: `(a)2 / (b)1`
- R4上 機械 問17: `(a)5 / (b)5`
- R2 機械 問12: `(3)`
- 公式解答一致: `12 / 12 PASS`
- 教材外・固定範囲外知識による補完: `0件`
- 記録: `topics/15_lighting_heating/15_lighting_heating_independent_reanswer.md`

非選定:
- R7下 機械 問17 — 光束発散度を直接要求し、固定範囲外。
- R7下 機械 問12 — 熱伝導率・温度こう配を使う熱伝導問題で固定範囲外。
- R6下 機械 問12 — 熱伝導率を使う熱伝導問題で固定範囲外。
- R5上 機械 問12 — 光束発散度が正答要件に含まれ固定範囲外。
- R5下 機械 問17 — 固定範囲内だが、より新しい同型の点光源・水平面照度問題を固定済みのため品質ゲートへ重複加算しない。

件数合わせの仕様追加、熱伝導・熱放射・工業電熱の追加、未確認の新幹線車内設備実値、Topic 16先取りはいずれも `0件`。

source: `topics/15_lighting_heating/15_lighting_heating.md`
explanation PDF: `topics/15_lighting_heating/15_lighting_heating_explanation.pdf`
explanation PDF QA: `topics/15_lighting_heating/15_lighting_heating_explanation_pdf_qa.md`
practice source: `topics/15_lighting_heating/15_lighting_heating_practice.md`
practice PDF: `topics/15_lighting_heating/15_lighting_heating_practice.pdf`
practice PDF QA: `topics/15_lighting_heating/15_lighting_heating_practice_pdf_qa.md`
PowerPoint: `topics/15_lighting_heating/15_lighting_heating_images.pptx`
PowerPoint QA: `topics/15_lighting_heating/15_lighting_heating_powerpoint_qa.md`
independent reanswer: `topics/15_lighting_heating/15_lighting_heating_independent_reanswer.md`

## Topic 14
Topic 14「停電してもN700Sが走れるのはなぜ？」は最終QA再判定PASSで `completed`。固定EXAM_ALIGNMENTはH30 機械 問12、完成後blind独立再解答 `1 / 1 PASS`。解説PDF・練習PDF・PowerPointの表示QA、進捗記録整合、固定範囲境界はいずれもPASS。成果物は `topics/14_battery/` に保存済み。

## Topic 13
Topic 13「新幹線は主電動機以外もモーターだらけ？」は最終QA再判定PASSで `completed`。固定EXAM_ALIGNMENT 5問、完成後blind独立再解答 `5 / 5 PASS`、PDF/PPTX表示QA、進捗記録整合、固定範囲境界はいずれもPASS。成果物は `topics/13_auxiliary_motors/` に保存済み。

## 次工程
Topic 16「同期機って新幹線には使わないの？」の制作前EXAM_ALIGNMENTを作成する。系列 `SPEC.md` の固定範囲を守り、Topic 15の成果物は変更しない。