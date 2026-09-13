# HANDOFF - 新幹線・電験二種「電力」

更新日: 2026-09-13

## 現在地
- completed topics: `01 新幹線を電力系統から見てみる`, `02 信濃川の水で新幹線を何本走らせられる？`
- 完成数: `2 / 22`
- active topic: `03 川崎発電所は新幹線の負荷変動に追従できる？`
- current status: `topic_03_practice_pdf_complete`

Topic 03 は制作前EXAM_ALIGNMENT、制作前独立検証、解説本文8節、3段階例題、練習15問＋完全解説、練習問題独立QA、解説PDF、練習PDFまで完了。次は解説画像PowerPoint。

## Topic 03 今回完了した内容
- `topics/03_thermal_power/03_thermal_power_practice.pdf` を作成
- A4縦6ページ
- `03_thermal_power_practice.md` の全15問と完全解説を同期
- 一次型五肢択一10問＋二次「電力・管理」型記述5問
- 基礎4 / 本試験標準8 / 複合・応用3の構成を維持
- 正式選定5問の要求事項マッピングを維持
- 練習問題独立QA `15 / 15 PASS` と正答・途中式・単位・記述答案を同期
- 200 dpiで全6ページをレンダリングし、文字切れ・重なり・表崩れ・数式・単位を確認してPASS
- 教材外知識補完 `0件`
- 未確認の川崎発電所個別負荷率―効率曲線、新幹線1本当たり電力、実設備ランプレートは追加していない
- 固定範囲外知識の追加 `0件`

source:
- `topics/03_thermal_power/03_thermal_power.md`
- `topics/03_thermal_power/03_thermal_power_preproduction_verification.md`
- `topics/03_thermal_power/03_thermal_power_practice.md`
- `topics/03_thermal_power/03_thermal_power_practice_qa.md`
- `topics/03_thermal_power/03_thermal_power_explanation.pdf`
- `topics/03_thermal_power/03_thermal_power_practice.pdf`

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
Topic 03 の解説画像PowerPointを作成する。

1. `03_thermal_power.md` の本文8節・3段階例題を正本とする。
2. 正式選定5問の要求事項を固定範囲内で可視化する。
3. 発電端/送電端、コンバインドサイクル熱収支、大気温度影響、重要補機、負荷追従の関係を、教材本文と矛盾しない図・式で示す。
4. 固定範囲外知識と未確認実設備値を追加しない。
5. PowerPoint生成後に全スライド表示とoverflowをQAする。

Topic 02 は `PASS / completed` のまま変更しない。
