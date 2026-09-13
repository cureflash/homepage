# HANDOFF - 新幹線・電験二種「電力」

更新日: 2026-09-13

## 現在地
- completed topics: `01 新幹線を電力系統から見てみる`, `02 信濃川の水で新幹線を何本走らせられる？`
- 完成数: `2 / 22`
- active topic: `03 川崎発電所は新幹線の負荷変動に追従できる？`
- current status: `topic_03_explanation_pdf_complete`

Topic 03 は制作前EXAM_ALIGNMENT、制作前独立検証、解説本文8節、3段階例題、練習15問＋完全解説、練習問題独立QA、解説PDFまで完了。次は練習PDF。

## Topic 03 今回完了した内容
- `topics/03_thermal_power/03_thermal_power_explanation.pdf` を作成
- A4縦4ページ
- `03_thermal_power.md` の本文8節・3段階例題・EXAM_ALIGNMENT・正式選定5問の要求事項・出典・数式・単位を同期
- 200 dpiで全4ページをレンダリングし、文字切れ・重なり・表崩れ・数式・単位・出典表示を確認してPASS
- PDF内の主要式 `P_g=P_GT+P_ST`, `P_s=P_g-P_aux`, `η_g=P_g/Q_f`, `η_s=P_s/Q_f`, `P_g,req=P_load/(1-a)`, `Q_f,req=P_g,req/η_g` をsourceと照合
- 基礎・本試験標準・複合の3段階例題を収録
- 川崎発電所の実値は一次資料確認済みの総出力 `809 MW`、2024年度発電効率 `43.1%`、発電機4台、都市ガス・天然ガス、2021年6月新1号機運転開始のみ使用
- 未確認の個別負荷率―効率曲線、新幹線1本当たり電力、実設備ランプレートは追加していない
- 固定範囲外知識の追加 `0件`
- 制作前独立検証 `5 / 5 PASS`、練習問題独立QA `15 / 15 PASS` は維持

source:
- `topics/03_thermal_power/03_thermal_power.md`
- `topics/03_thermal_power/03_thermal_power_preproduction_verification.md`
- `topics/03_thermal_power/03_thermal_power_practice.md`
- `topics/03_thermal_power/03_thermal_power_practice_qa.md`
- `topics/03_thermal_power/03_thermal_power_explanation.pdf`

## Topic 03 正式過去問
- R3 一次 電力 問5
  - 非常用直流/交流電源、蓄電池条件、重要補機
- H29 二次 電力・管理 問1
  - 大気温度上昇から空気密度・質量流量・GT出力・排熱回収・ST出力へ至る因果と吸気冷却対策
- R1 二次 電力・管理 問1
  - タービン油ポンプ、ターニングギヤ電動機と停止できない理由
- H27 一次 電力 問1
  - GT/ST/排熱回収の構成、熱サイクル、熱効率
- H25 一次 電力 問1
  - 蒸気タービン発電機の起動、熱応力、振動、危険速度

制作前独立検証は `5 / 5 PASS` のまま維持する。

## Topic 03 固定範囲
- ガスタービン
- 蒸気タービン
- 排熱回収
- コンバインドサイクル
- 熱収支
- 発電端効率
- 送電端効率
- 所内電力
- 部分負荷効率
- 負荷追従
- 発電機運用
- 燃料投入から送電端出力までの熱収支
- 負荷率―効率曲線
- 新幹線負荷変化に対する必要発電出力

この範囲を追加しない。復水・給水系統の詳細、環境設備、自然循環ボイラ等はTopic 03へ追加しない。

## 次に行うこと
Topic 03 の練習PDFを作成する。

1. `03_thermal_power_practice.md` の全15問と完全解説を正本とする。
2. 一次型10問＋二次記述型5問、基礎4／本試験標準8／複合・応用3の構成を維持する。
3. 練習問題独立QA `15 / 15 PASS` と一致する正答・途中式・単位・記述答案を同期する。
4. 固定範囲外知識と未確認実設備値を追加しない。
5. PDF生成後に全ページ表示・数式・文字切れ・表崩れ・出典表示をQAする。

Topic 02 は `PASS / completed` のまま変更しない。
