# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-14

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜05は最終QAまで `PASS`。完成数は `5 / 39`。

現在地は `topic_06_source_progress_synced`。active topicは Topic 06 `0系⑥ 主回路全体の電力・損失・効率`。

## Topic 06 EXAM_ALIGNMENT
source:
- `topics/06_0series_main_circuit_power_loss_efficiency/06_0series_main_circuit_power_loss_efficiency.md`

品質ゲート対象を一次3問＋二次2問、計5問で固定している。

- R8 一次 機械 問3
  - 変圧器の損失、規約効率、最大効率条件
  - 公式解答 `(1)=ト, (2)=ロ, (3)=ヌ, (4)=リ, (5)=ヲ`
- R5 一次 機械 問1
  - 回転機の効率、機械損・鉄損・銅損・漂遊負荷損・固定損
  - 公式解答 `(1)=リ, (2)=ロ, (3)=ル, (4)=ニ, (5)=ヨ`
- H30 一次 機械 問5
  - 変圧器の無負荷損・負荷損・鉄損・規約効率
  - 公式解答 `(1)=ホ, (2)=ワ, (3)=ヌ, (4)=カ, (5)=ヘ`
- R2 二次 機械・制御 問2
  - 鉄損 `400 W`、定格銅損 `624 W`、最大効率負荷率 `80.0 %`、最大効率 `99.0 %`、負荷率30 %・力率60 %で `97.5 %`
- H22 二次 機械・制御 問2
  - 鉄損 `1.04 kW`、定格銅損 `4.93 kW`、最大効率条件 `鉄損=負荷時銅損`、負荷率 `0.45826`、最大効率約 `98.5 %`

二次記述2問を含み、二種一次・二次合計の原則5問以上を満たす。R7一次機械問3はTopic 01寄りのため採用しない。IGBT等のスイッチング損失も件数合わせで追加しない。

## Topic 06 完了済み工程
- 解説source: 完了
- 解説PDF: A4縦5ページ、180 dpi Visual QA `PASS`
- 練習source: 一次8問＋二次4問、計算・論理 `12 / 12 PASS`
- 練習PDF: `topics/06_0series_main_circuit_power_loss_efficiency/06_0series_main_circuit_power_loss_efficiency_practice.pdf`
- 練習PDF QA: `topics/06_0series_main_circuit_power_loss_efficiency/06_0series_main_circuit_power_loss_efficiency_practice_qa.md`
  - A4縦3ページ
  - 一次8問＋二次4問を収録
  - 180 dpi全ページ Visual QA `PASS`
  - 文字抽出QA `PASS`
  - 計算・論理 `12 / 12 PASS`
- 解説画像PowerPoint: `topics/06_0series_main_circuit_power_loss_efficiency/06_0series_main_circuit_power_loss_efficiency_images.pptx`
- PowerPoint QA: `topics/06_0series_main_circuit_power_loss_efficiency/06_0series_main_circuit_power_loss_efficiency_images_qa.md`
  - 16:9・4スライド
  - SPEC指定の4可視化対象を反映
  - 180 dpi全4スライド Visual QA `PASS`
  - overflow `0件`
  - PPTX ZIP整合性 `PASS`
- 完成後独立再解答: `PASS`
- 独立再解答記録: `topics/06_0series_main_circuit_power_loss_efficiency/06_0series_main_circuit_power_loss_efficiency_independent_reanswer.md`
  - 固定5問すべて公式解答・標準解答と一致
  - 一次3問・15小問 `15 / 15 PASS`
  - 二次2問・7設問 `7 / 7 PASS`
  - 全チェックポイント `22 / 22 PASS`
  - 教材外知識補完 `0件`
  - 固定範囲外追加 `0件`
  - 未確認0系実値追加 `0件`
- 最終QA: 前回 `NEEDS_REVISION`
- 最終QA記録: `topics/06_0series_main_circuit_power_loss_efficiency/06_0series_main_circuit_power_loss_efficiency_final_qa.md`
  - 必須成果物・過去問対応・独立再解答・表示QA・固定範囲はすべてPASS
  - 前回FAIL要因はsource進捗記録不整合のみ
- source進捗記録同期: 完了
  - 主sourceの「PDF・練習問題・PowerPointは未着手」「次工程は解説PDF」を解消
  - 主sourceの完成後独立再解答予定表現を `22 / 22 PASS` の実績へ同期
  - 練習sourceの「次工程は練習PDF」「PowerPointと完成後独立再解答はまだ行わない」を解消
  - 教材本文・EXAM_ALIGNMENT・数式・問題・PDF/PPTX・固定範囲は変更していない

## Topic 06 固定範囲
扱う内容:
- 主変圧器損失
- 整流器損失
- 主電動機損失
- 機械損
- 入力電力
- 軸出力
- 総合効率
- 発熱
- 冷却

指定計算・グラフ:
- 負荷率―総合効率
- 機器別損失内訳
- 入力電力―車輪側出力
- 条件変更時の損失比較

範囲境界:
- サイリスタ位相制御、チョッパ、誘導機、PWM/VVVF、回生・四象限運転、IGBT/SiC、詳細熱モデルは追加しない。
- 未確認の0系固有損失値、冷却容量、編成出力、歯車損失は実値として置かない。
- 整流器損失は交流入力と直流出力の差として扱い、後世代のスイッチング損失モデルへ拡張しない。

## 次の正確な開始点
Topic 06の最終QAを再実施する。

1. 必須成果物の実在を再確認する。
2. 固定EXAM_ALIGNMENT一次3問＋二次2問と完成後独立再解答 `22 / 22 PASS` を再確認する。
3. 解説PDF・練習PDF・PowerPoint表示QAを再確認する。
4. 主source・練習sourceの進捗記録不整合が解消済みであることを確認する。
5. 固定範囲外論点・未確認0系実値の追加がないことを確認する。
6. 全件PASSの場合のみTopic 06を `completed` とし、完成数を `6 / 39` に進める。