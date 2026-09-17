# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-18

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は `14 / 16`。Topic 01〜14は品質ゲートPASSでcompleted。active topicは15「車内の照明・空調にはどれだけ電気が必要？」。

Topic 15は制作前 `EXAM_ALIGNMENT`、解説source本文、解説PDF、練習問題source、練習PDFまで完了。固定7問・12答案要素は変更せず、本文マッピング `12 / 12 PASS`、練習問題→固定EXAM_ALIGNMENT接続 `12 / 12 PASS`。練習問題は12問（基礎3 / 本試験標準7 / 複合・応用2）、全12問を五肢択一とし、独立計算・論理QA `12 / 12 PASS`、正答一意性QA `12 / 12 PASS`。練習PDFはA4縦3ページ、200 dpi表示QA `3 / 3 PASS`、文字抽出QA `PASS`、固定7問・12答案要素への接続 `12 / 12 PASS`。光束発散度、熱伝導・熱放射、工業電熱、未確認の新幹線車内設備実値、Topic 16は追加していない。

状態: `topic_15_practice_pdf_complete / IN_PROGRESS`

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

## Topic 14
Topic 14「停電してもN700Sが走れるのはなぜ？」は最終QA再判定PASSで `completed`。固定EXAM_ALIGNMENTはH30 機械 問12、完成後blind独立再解答 `1 / 1 PASS`。解説PDF・練習PDF・PowerPointの表示QA、進捗記録整合、固定範囲境界はいずれもPASS。成果物は `topics/14_battery/` に保存済み。

## Topic 13
Topic 13「新幹線は主電動機以外もモーターだらけ？」は最終QA再判定PASSで `completed`。固定EXAM_ALIGNMENT 5問、完成後blind独立再解答 `5 / 5 PASS`、PDF/PPTX表示QA、進捗記録整合、固定範囲境界はいずれもPASS。成果物は `topics/13_auxiliary_motors/` に保存済み。

## 次工程
固定EXAM_ALIGNMENTを変更せず、Topic 15の解説画像PowerPointを作成する。練習PDF・QAと固定7問12答案要素の接続を維持し、Topic 16は先取りしない。