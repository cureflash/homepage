# Topic 21 最終QA

テーマ: `21 架線からEast iまで全部シミュレーションする`

実施日: 2026-09-19
判定: `NEEDS_REVISION / FINAL_QA_BLOCKED`

## 再照合対象

`denken-shinkansen/MASTER_SPEC.md`、`denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`、`STATUS.md`、`HANDOFF.md`、GitHub正本のTopic 21成果物を再照合した。

品質ゲートは固定一次4問・17答案要素＋二次1問・4答案要素＝`5問・21答案要素`。二次数合わせは行わない。

## 必須成果物

- main source: `21_integrated_simulation.md` — `PASS / 内容存在`
- 解説PDF: `21_integrated_simulation_explanation.pdf` — `PASS / EXPLANATION_PDF_COMPLETE`
- 解説PDF QA: `21_integrated_simulation_explanation_pdf_qa.md` — `4 / 4 PASS`
- 練習source: `21_integrated_simulation_practice.md` — `PASS / PRACTICE_PDF_COMPLETE`
- 練習PDF: `21_integrated_simulation_practice.pdf` — `PASS / PRACTICE_PDF_COMPLETE`
- 練習PDF QA: `21_integrated_simulation_practice_pdf_qa.md` — `4 / 4 PASS`
- 解説画像PowerPoint: `21_integrated_simulation_images.pptx` — `PASS / POWERPOINT_COMPLETE`
- PowerPoint QA: `21_integrated_simulation_powerpoint_qa.md` — `8 / 8 PASS`
- 完成後独立再解答: `21_integrated_simulation_independent_reanswer.md` — `21 / 21 PASS`

必須成果物の欠落: `0件`。

## 過去問対応品質ゲート

- R8 一次 理論 問3: `5 / 5 PASS`
- R8 一次 理論 問4: `5 / 5 PASS`
- R8 一次 理論 問6: `5 / 5 PASS`
- H24 一次 機械 問3 (4)(5): `2 / 2 PASS`
- R2 二次 電力・管理 問6 (1)〜(3): `4 / 4 PASS`
- 一次: `17 / 17 PASS`
- 二次: `4 / 4 PASS`
- 合計: `21 / 21 PASS`
- 公式標準解答照合: `21 / 21一致`
- 教材に存在しない外部知識で補完: `0件`
- 根拠を説明できない偶然正答: `0件`
- 候補答案変更: `0件`

令和8年度二次試験は2026-09-19時点で未実施のため、既実施年度からTopic 21固定範囲に直接対応するR2二次「電力・管理」問6を採用している。

## SPEC固定範囲

系列SPEC第21章の固定範囲:

- 回路
- 交流
- 過渡
- 高調波
- 計測

簡略モデル8ブロック:

`25kV電源 → 架線等価回路 → 主変圧器 → 整流・DCリンク → PWMインバータ → 簡略負荷 → 電流・電圧センサ → 測定`

- 解説PDF: `5 / 5領域収録 / 8 / 8ブロック収録`
- 練習問題: `5 / 5領域接続`
- PowerPoint: `5 / 5領域可視化 / 8 / 8ブロック可視化`
- 二次数合わせ: `0件`
- Topic 01〜20にない新論点追加: `0件`
- 固定範囲外追加: `0件`
- 実車主回路・East i内部回路・未公開定数の推測追加: `0件`
- 仕様追加: `0件`

## 成果物QA

### 解説PDF

- A4縦4ページ
- 200 dpi全ページ表示QA: `4 / 4 PASS`
- 文字抽出QA: `PASS`
- クリッピング / 重なり / 文字化け / ページ欠落: `0件`
- 固定5問・21答案要素: `21 / 21接続`
- 3段階例題: `3 / 3`
- 例題独立再計算: `3 / 3 PASS`

### 練習PDF

- A4縦4ページ
- 問題数: `12問`
- 形式: `五肢択一11問 + 二次記述型1問（4小問）`
- 難易度: `基礎3 / 本試験標準6 / 複合・ひっかけ3`
- 200 dpi全ページ表示QA: `4 / 4 PASS`
- 数値計算独立再計算: `11 / 11 PASS`
- 固定一次4問・17答案要素: `17 / 17接続`
- 固定二次1問・4答案要素: `4 / 4接続`

### PowerPoint

- 16:9 / 8枚
- 200 dpi全スライド表示QA: `8 / 8 PASS`
- shape geometry overflow: `0件`
- PPTX ZIP整合性: `PASS`
- PDF変換: `8ページ / PASS`
- PDF/XML文字抽出QA: `PASS`
- 文字化け / クリッピング / 重なり / 欠落: `0件`
- 固定一次4問・17答案要素: `17 / 17可視化`
- 固定二次1問・4答案要素: `4 / 4可視化`

## blocker

内容・成果物・過去問対応品質ゲートはPASSだが、GitHub正本の主source `21_integrated_simulation.md` の進捗記録が実進捗と不一致である。

GitHub正本の主source冒頭は現在:

- stage: `EXPLANATION_SOURCE_COMPLETE`
- completion: `in_progress`
- 次工程: `解説PDF制作`

一方、`STATUS.md` / `HANDOFF.md` と実在成果物は完成後独立再解答まで完了し、`PASS / INDEPENDENT_REANSWER_COMPLETE`、次工程は最終QAとなっている。

`completion: in_progress` 自体は未完了状態として整合するが、主sourceの `stage` と `次工程` が実進捗へ同期されていない。HANDOFFで最終QA要件として固定された「source、STATUS、HANDOFFのstage・completion整合性」を満たさないため、このrunでは `completed` にしない。

blocker: `1件`。

## 最終判定

`NEEDS_REVISION / FINAL_QA_BLOCKED`

品質ゲート・成果物品質・固定範囲はPASS。主source進捗記録の同期後に最終QAを再実施する。

完成数は `20 / 21` のまま。

次工程: Topic 21主sourceの進捗記録を実進捗へ同期する。
