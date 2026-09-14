# Topic 06 最終QA

実施日: 2026-09-14

対象: `06 0系⑥ 主回路全体の電力・損失・効率`

## 正本
- `denken-shinkansen/MASTER_SPEC.md`
- `denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`
- `05_shinkansen_vehicle_2/SPEC.md`

## 成果物確認
GitHub正本上で必須成果物の実在を確認した。

- source Markdown: `06_0series_main_circuit_power_loss_efficiency.md`
- 練習問題source: `06_0series_main_circuit_power_loss_efficiency_practice_source.md`
- 解説PDF: `06_0series_main_circuit_power_loss_efficiency_explanation.pdf`
- 練習PDF: `06_0series_main_circuit_power_loss_efficiency_practice.pdf`
- 解説画像PowerPoint: `06_0series_main_circuit_power_loss_efficiency_images.pptx`
- 完成後独立再解答: `06_0series_main_circuit_power_loss_efficiency_independent_reanswer.md`

既存QA記録も再確認した。

- 解説PDF: A4縦5ページ、180 dpi全5ページ Visual QA `PASS`
- 練習PDF: A4縦3ページ、180 dpi全3ページ Visual QA・文字抽出QA `PASS`
- 練習問題: 一次8問＋二次記述4問、計算・論理 `12 / 12 PASS`
- PowerPoint: 16:9・4スライド、180 dpi全4スライド Visual QA・overflow・ZIP整合性 `PASS`

## EXAM_ALIGNMENT
品質ゲート対象は固定済みの一次3問＋二次2問、計5問とする。

- R8 一次 機械 問3 — 変圧器損失・規約効率・最大効率条件
- R5 一次 機械 問1 — 回転機の効率・機械損・鉄損・銅損・漂遊負荷損・固定損
- H30 一次 機械 問5 — 無負荷損・負荷損・鉄損・規約効率
- R2 二次 機械・制御 問2 — 鉄損・銅損・負荷率・最大効率・部分負荷効率
- H22 二次 機械・制御 問2 — 無負荷試験・銅損・最大効率条件

二次記述2問を含み、二種一次・二次合計の原則5問以上を満たす。R7一次機械問3やIGBT等を件数合わせで追加していない。

## 完成後独立再解答
`06_0series_main_circuit_power_loss_efficiency_independent_reanswer.md` を再確認した。

- 一次3問・15小問: `15 / 15 PASS`
- 二次2問・7設問: `7 / 7 PASS`
- 全チェックポイント: `22 / 22 PASS`
- 教材外知識補完: `0件`
- 固定範囲外論点の追加: `0件`
- 未確認0系実値の追加: `0件`

## 範囲境界
SPEC固定範囲の主変圧器損失、整流器損失、主電動機損失、機械損、入力電力、軸出力、総合効率、発熱、冷却、および指定4グラフを維持している。

追加していないことを確認した。

- サイリスタ位相制御
- チョッパ制御
- 誘導電動機
- PWM/VVVF
- 回生・四象限運転
- IGBT/SiC
- 詳細熱モデル
- 未確認の0系固有損失値、冷却容量、編成出力、歯車損失

## 進捗記録整合性
ここだけ `FAIL`。

主source `06_0series_main_circuit_power_loss_efficiency.md` の状態欄に、現時点では実在する成果物に反して次の旧進捗が残っている。

- `PDF・練習問題・PowerPointは未着手`
- `次工程は、この本文を正本として解説PDFを生成`

練習source `06_0series_main_circuit_power_loss_efficiency_practice_source.md` にも次の旧進捗が残っている。

- `次工程は、このsourceから練習PDFを生成`
- `PowerPointと完成後独立再解答はまだ行わない`

成果物自体・教材内容・EXAM_ALIGNMENT・独立再解答には不合格要因はないが、GitHub正本の進捗記録が実態と矛盾しているため、この状態では `completed` にしない。

## 品質ゲート判定
- 必須成果物存在: PASS
- 過去問マッピング: PASS
- 一次・二次双方を含む: PASS
- 二次記述式への接続: PASS
- 練習問題の一次/二次接続: PASS
- SPEC指定4グラフ: PASS
- 表示QA: PASS
- 完成教材だけでの独立再解答: `22 / 22 PASS`
- 固定範囲: PASS
- 進捗記録整合性: FAIL

最終QA: `NEEDS_REVISION`

Topic 06は `completed` にしない。次工程は主sourceと練習sourceの旧進捗記録だけを現在地へ同期すること。教材本文・EXAM_ALIGNMENT・数式・問題・PDF/PPTX・固定範囲は変更しない。