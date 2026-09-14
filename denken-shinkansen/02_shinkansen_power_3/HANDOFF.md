# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-14

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は4/16。Topic 01〜04は完成済み。active topicは05 `新幹線を再エネだけで走らせられる？`。

## 今回進捗
Topic 05 sourceのEXAM_ALIGNMENT・進捗メタデータへ、修正版教材による再独立再解答 `5/5 PASS` を同期した。

再解答結果:
- R8上 電力 問5: `(4)` = 公式 `(4)` — PASS
- R7下 電力 問5: `(5)` = 公式 `(5)` — PASS
- R6上 電力 問5: `(1)` = 公式 `(1)` — PASS
- R5上 電力 問5: `(2)` = 公式 `(2)` — PASS
- R2 電力 問5: `(3)` = 公式 `(3)` — PASS

公式解答との一致 `5/5`、教材のみ完結 `5/5`、教材外知識補完 `0件`。初回FAILの原因だった日射代表値とNaS電池エネルギー密度比較はsource・解説PDFへ補強済みで、source内の品質ゲート本文カバレッジも5問すべて `COVERED` へ同期した。

固定5過去問、SPEC固定範囲、除外問題は変更していない。最終QAは未実施のため、まだ `completed` にはしない。

今回更新対象:
- `topics/05_renewable_energy/05_renewable_energy.md`
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
品質ゲート対象は次の公式過去問5問で固定。変更しない。

1. R8上 電力 問5 — 二次電池、リチウムイオン電池、再エネ出力平滑化、ナトリウム・硫黄電池、エネルギー密度
2. R7下 電力 問5 — 風力等で用いる誘導発電機、励磁、滑り、系統並列、突入電流
3. R6上 電力 問5 — 燃料電池の直流出力、電解質分類、反応原理、排熱利用、水素改質
4. R5上 電力 問5 — 風力発電、風速と出力の `v^3` 関係、発電機の種類、出力変動
5. R2 電力 問5 — 太陽光発電、日射エネルギー、セル、パワーコンディショナ、昼間余剰電力

修正版教材での再独立再解答は全5問PASS。詳細は `topics/05_renewable_energy/05_renewable_energy_independent_reanswer.md`。sourceのEXAM_ALIGNMENTへも結果同期済み。

### 範囲境界
- R7上 電力 問5: バイオマス主題のため除外。
- R6下 電力 問5: 地熱を含むが、完答にはバイオマス知識が必要なため除外。地熱自体はSPEC固定範囲として教材で扱う。
- R5下 電力 問5: 太陽光・風力・燃料電池を含むが、小水力・洋上風力の直流送電まで要求するため除外。
- R4下 電力 問5、H28 電力 問5: 固定範囲外の発電方式を含むため除外。

## 成果物
- source: `topics/05_renewable_energy/05_renewable_energy.md` — 補強内容・PDF同期・再独立再解答5/5 PASSを同期済み
- 解説PDF: `topics/05_renewable_energy/05_renewable_energy_explanation.pdf` — 補強内容同期済み、A4縦4ページ、200 dpi全ページ表示QA PASS
- 練習PDF: `topics/05_renewable_energy/05_renewable_energy_practice.pdf`
- 解説画像PowerPoint: `topics/05_renewable_energy/05_renewable_energy_images.pptx`
- PowerPoint QA: `topics/05_renewable_energy/05_renewable_energy_powerpoint_qa.md`
- 独立再解答: `topics/05_renewable_energy/05_renewable_energy_independent_reanswer.md` — 修正版教材で5/5 PASSへ更新済み

## 現在状態
- `current_status`: `topic_05_source_reanswer_synced`
- 完成数: `4/16`
- last completed: Topic 04
- active: Topic 05
- Topic 05判定: 完成後独立再解答ゲート `PASS`、source同期済み。最終QA前のため未完了

## 次の正確な開始点
Topic 05の最終QAを実施する。成果物の存在、PDF/PPTX表示QA、固定5過去問の完成後独立再解答5/5 PASS、教材外知識補完0件、SPEC固定範囲・除外境界を再確認し、全件PASSの場合のみ `completed` にする。