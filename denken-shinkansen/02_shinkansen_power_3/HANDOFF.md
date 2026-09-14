# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-14

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は4/16。Topic 01〜04は完成済み。active topicは05 `新幹線を再エネだけで走らせられる？`。

## 今回進捗
Topic 05 sourceの冒頭状態・末尾次工程を、解説PDF同期済みの現在地へ同期した。教材本文、固定5過去問、SPEC固定範囲、除外問題は変更していない。

補強・PDF同期済みの内容:
1. R2 電力 問5 — 地表に入射する太陽光エネルギーの代表値 `約1 kJ/(m²·s)`（=`約1 kW/m²`）
2. R8上 電力 問5 — ナトリウム・硫黄電池の単位質量当たりエネルギー密度は、同問では鉛蓄電池の約3倍として扱う

解説PDFはA4縦4ページ。200 dpiで全4ページを表示確認済みで、クリップ・重なり・文字化けなし。日射代表値は1ページ目、NaS電池比較は2ページ目に明示されている。

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

初回独立再解答:
- R8上 問5: `(4)` = 公式 `(4)`。正答照合PASS。ただしNaS電池のエネルギー密度比較が未収録だったためNEEDS_REVISION。
- R7下 問5: `(5)` = 公式 `(5)`。PASS。
- R6上 問5: `(1)` = 公式 `(1)`。PASS。
- R5上 問5: `(2)` = 公式 `(2)`。PASS。
- R2 問5: `(3)` = 公式 `(3)`。ただし地表日射代表値が未収録だったため教材のみ完結FAIL。

R8上問5とR2問5の不足はsource・解説PDFへ補強済み。修正版教材での再独立再解答は未実施なので `completed` にはしない。

### 範囲境界
- R7上 電力 問5: バイオマス主題のため除外。
- R6下 電力 問5: 地熱を含むが、完答にはバイオマス知識が必要なため除外。地熱自体はSPEC固定範囲として教材で扱う。
- R5下 電力 問5: 太陽光・風力・燃料電池を含むが、小水力・洋上風力の直流送電まで要求するため除外。
- R4下 電力 問5、H28 電力 問5: 固定範囲外の発電方式を含むため除外。

## 成果物
- source: `topics/05_renewable_energy/05_renewable_energy.md` — 補強内容・進捗メタデータ同期済み
- 解説PDF: `topics/05_renewable_energy/05_renewable_energy_explanation.pdf` — 補強内容同期済み、A4縦4ページ、200 dpi全ページ表示QA PASS
- 練習PDF: `topics/05_renewable_energy/05_renewable_energy_practice.pdf`
- 解説画像PowerPoint: `topics/05_renewable_energy/05_renewable_energy_images.pptx`
- PowerPoint QA: `topics/05_renewable_energy/05_renewable_energy_powerpoint_qa.md`
- 独立再解答: `topics/05_renewable_energy/05_renewable_energy_independent_reanswer.md` — 初回FAIL記録

## 現在状態
- `current_status`: `topic_05_source_status_synced`
- 完成数: `4/16`
- last completed: Topic 04
- active: Topic 05
- Topic 05判定: 初回は公式正答5/5一致、完成後教材のみゲート `NEEDS_REVISION / FAIL`。修正版PDFでの再独立再解答は未実施

## 次の正確な開始点
Topic 05の修正版教材だけで固定5過去問を再独立再解答し、教材外知識の補完なしで5/5正答できるか再判定する。固定5過去問、SPEC固定範囲、除外問題は変更しない。