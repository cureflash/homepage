# HANDOFF - 新幹線・電験二種「電力」

更新日: 2026-09-13

## 現在地
- completed topics: `01 新幹線を電力系統から見てみる`, `02 信濃川の水で新幹線を何本走らせられる？`
- 完成数: `2 / 22`
- active topic: `03 川崎発電所は新幹線の負荷変動に追従できる？`
- current status: `topic_03_powerpoint_complete`

Topic 03 は制作前EXAM_ALIGNMENT、制作前独立検証、解説本文8節、3段階例題、練習15問＋完全解説、練習問題独立QA、解説PDF、練習PDF、解説画像PowerPointまで完了。次は完成後独立再解答。

## Topic 03 今回完了した内容
- `topics/03_thermal_power/03_thermal_power_images.pptx` を作成
- 16:9・4スライド
- `03_thermal_power.md` の本文8節・3段階例題を正本として図式化
- 正式選定5問の要求事項を固定範囲内で可視化
- スライド構成:
  1. コンバインドサイクル構成、熱収支、一次/二次の設問接続
  2. 蒸気タービン起動時の制約と重要補機
  3. 大気温度上昇から最大出力低下までの因果、負荷追従、吸気冷却
  4. 川崎発電所の確認済み実値と複合・ひっかけ例題
- 川崎発電所の実値は一次資料確認済みの `809 MW`、発電機4台、都市ガス・天然ガス、2024年度発電効率 `43.1%` のみ使用
- 夏季 `720 MW`、所内率 `4.0%`、負荷 `670+35 MW` は本文どおり仮定値として明示
- 全4スライド表示QA PASS
- overflow検査 PASS
- PPTX ZIP整合性 PASS
- 教材外知識補完 `0件`
- 未確認実設備値の追加 `0件`
- 固定範囲外知識の追加 `0件`

source:
- `topics/03_thermal_power/03_thermal_power.md`
- `topics/03_thermal_power/03_thermal_power_preproduction_verification.md`
- `topics/03_thermal_power/03_thermal_power_practice.md`
- `topics/03_thermal_power/03_thermal_power_practice_qa.md`
- `topics/03_thermal_power/03_thermal_power_explanation.pdf`
- `topics/03_thermal_power/03_thermal_power_practice.pdf`
- `topics/03_thermal_power/03_thermal_power_images.pptx`
- `topics/03_thermal_power/03_thermal_power_powerpoint_qa.md`

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
Topic 03 の完成後独立再解答を実施する。

1. 正式選定5問を、保存済み正答を先に見ず、完成教材だけで解く。
2. 一次3問は選択肢判定の根拠まで確認する。
3. 二次2問は論説の因果・補機名・継続理由が教材だけで再現できるか確認する。
4. 教材外知識で補完した場合はFAILとする。
5. `5 / 5 PASS` なら独立再解答記録を残し、次を最終QAとする。

Topic 02 は `PASS / completed` のまま変更しない。
