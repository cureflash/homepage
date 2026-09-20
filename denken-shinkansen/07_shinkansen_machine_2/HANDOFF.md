# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-21

## 現在地
- Topic 01〜22: 最終QA `PASS / completed`
- 完成数: `22 / 22`
- active topic: `none`
- current status: `topic_22_final_qa_pass / completed`
- 次工程: 本系列内なし。`MASTER_SPEC.md` の全系列制作順を先頭から再確認する。

仕様authorityは `denken-shinkansen/MASTER_SPEC.md`、`denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`。仕様追加はしない。

過去テーマの詳細な固定EXAM_ALIGNMENT、成果物QA、独立再解答、最終QA記録は各 `topics/<topic>/` 配下を正本とする。

## Topic 22 固定範囲
系列 `SPEC.md` の Topic 22 のみ。

基本構成:
`架線25kV → 主変圧器 → PWMコンバータ → DCリンク → VVVFインバータ → 誘導電動機 → 歯車 → 車輪 → 列車 → 速度フィードバック`

境界:
- Topics 01〜21は必要な既習事項だけ統合する。
- 実車・実路線値は一次資料等で確認できた値だけを実値とし、計算値・仮定値を分離する。
- 東京―新大阪の実速度曲線、勾配、区間距離、実車の変圧器定数・モーター定数・PI/PIDゲイン等は固定していない。
- 系列SPEC外の新規制御方式・車両仕様は追加しない。

## Topic 22 固定EXAM_ALIGNMENT
- source: `topics/22_integrated_route_simulation/22_integrated_route_simulation.md`
- 一次4問＋二次2問、計6問・16答案要素

固定公式過去問:
- R08 一次 機械 問3 (1)〜(3) — 3答案要素
- R07 一次 機械 問2 (1) — 1答案要素
- R07 一次 機械 問4 (4),(5) — 2答案要素
- R06 一次 機械 問2 (1),(2) — 2答案要素
- R07 二次 機械・制御 問2 (1) — 2答案要素
- R07 二次 機械・制御 問4 (1)〜(5) — 6答案要素

品質ゲート:
- 一次4問＋二次2問、計6問: `PASS`
- 二次記述式2問: `PASS`
- 令和8年度最新一次を含む: `PASS`
- 2026-09-20時点の最新公表二次（令和7年度）を含む: `PASS`
- 固定16答案要素を教材節へ割当: `16 / 16 ASSIGNED`
- 参考教材2系統以上（e-sysnet＋電験王）: `PASS`
- 制作前sourceへの固定問題個別正答保存: `0件 / PASS`
- 一次資料未確認の実車・実路線値の真値化: `0件 / PASS`
- 系列SPEC外の新規制御方式・車両仕様追加: `0件 / PASS`
- 独立再解答: `16 / 16 PASS`

## Topic 22 完了済み工程
- 解説source: `PASS / topic_22_explanation_source_complete / IN_PROGRESS`
- 総合シミュレーション成果物: `PASS / topic_22_simulation_artifacts_complete / IN_PROGRESS`
  - program: `topics/22_integrated_route_simulation/22_integrated_route_simulation_calc.py`
  - CSV: `topics/22_integrated_route_simulation/22_integrated_route_simulation_results.csv` / `3301` 行
  - 指定6グラフ: `6 / 6 GENERATED`
- 解説プリントPDF: `PASS / topic_22_explanation_pdf_complete / IN_PROGRESS`
  - PDF: `topics/22_integrated_route_simulation/22_integrated_route_simulation_explanation.pdf`
  - QA: `topics/22_integrated_route_simulation/22_integrated_route_simulation_explanation_pdf_qa.md`
- 練習source: `PASS / topic_22_practice_source_complete / IN_PROGRESS`
  - source: `topics/22_integrated_route_simulation/22_integrated_route_simulation_practice.md`
  - 一次10問＋二次5問、固定16答案要素 `16 / 16 COVERED`
- 練習プリントPDF: `PASS / topic_22_practice_pdf_complete / IN_PROGRESS`
  - PDF: `topics/22_integrated_route_simulation/22_integrated_route_simulation_practice.pdf`
  - QA: `topics/22_integrated_route_simulation/22_integrated_route_simulation_practice_pdf_qa.md`
  - A4縦・2ページ・2段組
  - 一次試験型 `10 / 10` 五肢択一
  - 二次試験型 `5 / 5` 記述・途中式・単位・検算付き
  - 固定答案要素 `16 / 16 COVERED`
  - 表示QA `PASS`、文字抽出QA `PASS`、数値・論理QA `15 / 15 PASS`
- 解説画像PowerPoint: `PASS / topic_22_powerpoint_complete / IN_PROGRESS`
  - PowerPoint: `topics/22_integrated_route_simulation/22_integrated_route_simulation_images.pptx`
  - QA: `topics/22_integrated_route_simulation/22_integrated_route_simulation_powerpoint_qa.md`
  - 16:9・4枚
  - 固定16答案要素 `16 / 16 COVERED`
  - GitHub Actions構造QA・ZIP integrity: `PASS`
  - 同一sourceのLibreOffice表示QA: `PASS`
- 独立過去問再解答: `PASS / topic_22_independent_reanswer_pass / IN_PROGRESS`
  - 記録: `topics/22_integrated_route_simulation/22_integrated_route_simulation_independent_reanswer.md`
  - 固定一次4問＋二次2問・16答案要素: `16 / 16 PASS`
  - 公式照合後訂正: `0件`
  - 教材外知識補完: `0件`
  - 未確認実車・実路線値の答案利用: `0件`
  - 系列SPEC外仕様追加: `0件`
  - 記録QA: `8 / 8 PASS`
- 進捗メタデータ同期: `PASS / topic_22_progress_metadata_synced / IN_PROGRESS`
  - `22_integrated_route_simulation.md`: 冒頭状態・独立再解答・次工程を同期
  - `22_integrated_route_simulation_practice.md`: 独立再解答・次工程を同期
  - 前回最終QAの指摘2件: `2 / 2 対応済み`
  - 技術本文・固定EXAM_ALIGNMENT・PDF/PPTX・計算成果物変更: `0件`
- 最終QA再実施: `PASS / topic_22_final_qa_pass / completed`
  - 記録: `topics/22_integrated_route_simulation/22_integrated_route_simulation_final_qa.md`
  - 技術・試験対応品質ゲート: `PASS`
  - 成果物ゲート: `PASS`
  - 独立再解答ゲート: `PASS`
  - 進捗・正本整合ゲート: `PASS`
  - 前回指摘2件: `2 / 2 PASS`

## 最終QA履歴
前回判定:
- `NEEDS_REVISION / topic_22_final_qa_needs_revision / IN_PROGRESS`
- 原因: canonical source 2ファイルの進捗メタデータ未同期
- 修正: `22_integrated_route_simulation.md`、`22_integrated_route_simulation_practice.md` を同期

再実施判定:
- `PASS / topic_22_final_qa_pass / completed`
- 固定EXAM_ALIGNMENT変更: `0件`
- 技術本文変更: `0件`
- 未確認実車・実路線値の真値化: `0件`
- 系列SPEC外仕様追加: `0件`
- 完成数: `22 / 22`

## 未完了ゲート
なし。

## 次工程
`07_shinkansen_machine_2` は全22テーマ完了。本系列内では追加作業しない。次回の制作対象は `MASTER_SPEC.md` の全系列制作順を先頭から再確認して選定する。