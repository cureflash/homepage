# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-14

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は4/16。Topic 01〜04は完成済み。active topicは05 `新幹線を再エネだけで走らせられる？`。

## 今回進捗
Topic 05の解説画像PowerPointを完成した。制作前EXAM_ALIGNMENTで固定した5過去問は変更せず、SPEC固定範囲を16:9・4枚に可視化した。全4枚レンダリング目視確認、`slides_test.py`、PPTX ZIP整合性ともPASS。SPEC固定範囲外の論点、未確認実車値は追加していない。

更新対象:
- `topics/05_renewable_energy/05_renewable_energy_images.pptx`
- `topics/05_renewable_energy/05_renewable_energy_powerpoint_qa.md`
- `STATUS.md`
- `HANDOFF.md`

## Topic 05 SPEC固定範囲
- 太陽光発電
- 風力発電
- 地熱発電
- 燃料電池
- 発電量変動
- 設備利用率
- 系統連系
- 蓄電池
- 需給バランス

主題は、変動する再エネ出力を新幹線という大電力負荷へ接続し、発電量と需要量の時間変動を考えること。固定範囲外の発電方式を件数合わせで追加しない。

## Topic 05 EXAM_ALIGNMENT
品質ゲート対象は次の公式過去問5問で固定。

1. R8上 電力 問5 — 二次電池、リチウムイオン電池、再エネ出力平滑化、ナトリウム・硫黄電池、エネルギー密度
2. R7下 電力 問5 — 風力等で用いる誘導発電機、励磁、滑り、系統並列、突入電流
3. R6上 電力 問5 — 燃料電池の直流出力、電解質分類、反応原理、排熱利用、水素改質
4. R5上 電力 問5 — 風力発電、風速と出力の `v^3` 関係、発電機の種類、出力変動
5. R2 電力 問5 — 太陽光発電、セル、パワーコンディショナ、昼間余剰電力、需給調整

PowerPointカバレッジ:
- R8上 問5 → Slide 3・4
- R7下 問5 → Slide 2・3・4
- R6上 問5 → Slide 2・4
- R5上 問5 → Slide 2・4
- R2 問5 → Slide 1〜4
- SPEC固定の地熱・設備利用率・発電量変動 → Slide 1〜3

公式問題・公式解答は電気技術者試験センター正本で確認済み。参考教材はe-sysnet、電験王、電験三種まとめましたの複数系統を確認済み。

### 範囲境界
- R7上 電力 問5: バイオマス主題のため除外。
- R6下 電力 問5: 地熱を含むが、完答にはバイオマス知識が必要なため除外。地熱自体はSPEC固定範囲として教材で扱う。
- R5下 電力 問5: 太陽光・風力・燃料電池を含むが、小水力・洋上風力の直流送電まで要求するため除外。
- R4下 電力 問5、H28 電力 問5: 固定範囲外の発電方式を含むため除外。

## 完成済み成果物
- source: `topics/05_renewable_energy/05_renewable_energy.md`
- 解説PDF: `topics/05_renewable_energy/05_renewable_energy_explanation.pdf`
- 練習PDF: `topics/05_renewable_energy/05_renewable_energy_practice.pdf`
- 解説画像PowerPoint: `topics/05_renewable_energy/05_renewable_energy_images.pptx`
  - 16:9・4枚
  - 固定5過去問要求事項を全件カバー
  - 全4枚表示QA PASS
  - `slides_test.py` PASS
  - PPTX ZIP整合性 PASS
  - SHA-256: `b6aae5780ab4fa0282df08dea927c13fa4a86c8069f22ec7585378340f106d2d`
- PowerPoint QA: `topics/05_renewable_energy/05_renewable_energy_powerpoint_qa.md`

## Topic 04 完了状態
Topic 04は `completed`。固定6過去問の完成後独立再解答6/6 PASS、最終QA PASS、教材外知識補完0件、仕様外追加0件。

## 現在状態
- `current_status`: `topic_05_powerpoint_complete`
- 完成数: `4/16`
- last completed: Topic 04
- active: Topic 05
- Topic 05未着手: 完成後独立再解答、最終QA

## 次の正確な開始点
Topic 05の固定5過去問を、完成教材だけを使って独立再解答する。保存済み正答を先に見ず、教材外知識で補完しない。SPEC固定範囲外の論点は追加しない。
