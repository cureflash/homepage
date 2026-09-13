# STATUS - 新幹線・電験三種「電力」

更新日: 2026-09-13

## 状態
- active_series: `02_shinkansen_power_3`
- exam_aligned_completed_topics: 2 / 16
- current_status: `topic_03_powerpoint_complete`
- last_completed_topic: `02 上越新幹線を水の力で走らせる`
- active_topic: `03 JR東日本はなぜ火力発電所まで持っている？`
- next_start: Topic 03の完成教材だけを使って、制作前EXAM_ALIGNMENTの6問・7小問を独立再解答する。公式解答は解答確定後に照合し、教材外知識の補完がないことを確認する

## 新品質ゲート進捗
- [x] 01 新幹線の電気はどこから来る？ — EXAM_ALIGNMENT、解説本文・解説PDF・練習PDF・解説画像PowerPoint、完成後独立再解答、最終QAまで完了
- [x] 02 上越新幹線を水の力で走らせる — EXAM_ALIGNMENT、解説本文・解説PDF・練習PDF・解説画像PowerPoint、完成後独立再解答7/7 PASS、最終QAまで完了
- [ ] 03 JR東日本はなぜ火力発電所まで持っている？ — EXAM_ALIGNMENT、解説本文・3段階例題、解説PDF、練習PDF、解説画像PowerPointまで完了。完成後独立再解答・最終QAは未着手
- [ ] 04〜16 — 未着手

## Topic 03 制作前EXAM_ALIGNMENT
品質ゲート対象は6問・7小問。

1. R8上 電力 問3 — 復水器の凝縮・真空度・タービン効率
2. R7下 電力 問15(a) — 発熱量・燃料消費量・発電電力量から発電端効率
3. R7上 電力 問2 — 蒸気タービン効率・比エンタルピー差・使用蒸気量
4. R6上 電力 問3 — ガスタービンコンバインドサイクルと汽力発電の比較
5. R3 電力 問15(a)(b) — 発電端/送電端電力量・所内率・発電端熱効率
6. R1 電力 問15(a) — タービン熱消費率・復水器損失・タービン出力

制作前独立再解答: `7/7 PASS`。

固定範囲:
- 汽力発電
- ガスタービン発電
- コンバインドサイクル
- ボイラ
- 蒸気タービン
- 復水器
- 発電機
- 熱効率
- 熱消費率
- 発電端効率
- 所内率
- 発熱量と発電電力量
- 発電端出力と送電端出力

境界維持:
- 詳細煙風道設備を追加しない
- 再熱/再生サイクル・給水加熱器等の個別論点を追加しない
- 炭素組成・化学量論・CO2計算を追加しない
- 保護装置・継電器・トリップ機構を追加しない
- JR東日本川崎発電所等の実設備値は一次資料確認済みのものだけを使用する

## Topic 03 成果物
- source Markdown: `topics/03_thermal_power/03_thermal_power.md`
- 解説PDF: `topics/03_thermal_power/03_thermal_power_explanation.pdf`
- 練習PDF: `topics/03_thermal_power/03_thermal_power_practice.pdf`
- 解説画像PowerPoint: `topics/03_thermal_power/03_thermal_power_images.pptx`
- PowerPoint QA: `topics/03_thermal_power/03_thermal_power_powerpoint_qa.md`

## Topic 03 解説画像PowerPoint
- 16:9・7枚
- JR東日本川崎発電所を入口に、汽力発電のエネルギー流れ、復水器、蒸気タービン出力・使用蒸気量、熱効率・熱消費率、発電端/送電端・所内率、ガスタービン・コンバインドサイクル、解法手順・頻出ミスを図解
- 制作前EXAM_ALIGNMENTの6問・7小問で要求された固定範囲を視覚化
- JR東日本一次資料で確認済みの総出力80.9万kW、発電機4台、都市ガス・天然ガス、複合サイクルのみを実設備情報として使用
- 固定範囲外論点の追加0件
- 全7枚をレンダリングして表示確認し、文字欠け・クリップ・重なりなし
- PPTXのスライド境界外はみ出し0件、ZIP整合性PASS

判定: 解説画像PowerPoint表示QA `PASS`。

## 次
Topic 03の完成教材だけを使い、選定6問・7小問を独立再解答する。完成数は2/16のまま。