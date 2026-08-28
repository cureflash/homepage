# STATUS - 新幹線車両・電験三種

更新日: 2026-08-29

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 1 / 38
- legacy_artifacts_present: 3 / 38
- current_status: rebuilding_topic_02
- next_topic: `02 プラレール② 機械編` の新品質基準sourceを確認し、解説PDF・練習PDF・PowerPoint再生成と独立過去問QAを完了する

## 新品質基準
2026-08-29から `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md` を最優先仕様とする。成果物が存在するだけでは完了とせず、公式過去問マッピング、複数解説資料比較、本試験標準教材、独立過去問再解答までPASSしたテーマのみ完了数へ計上する。

## 01 プラレール① 電気編 — PASS
- [x] source Markdown / EXAM_ALIGNMENTを新品質基準で再構築
- [x] 公式過去問5問を分析: H27理論問4、H30理論問5・問6、R2理論問6、R4上理論問5
- [x] e-sysnet「直流回路の基本問題」「直流回路の消費電力」と電験三種まとめましたを比較
- [x] 直列・並列、合成抵抗、KCL、KVL、電力3公式、電力量、許容電力、未知抵抗、回路変更後再計算、直流電動機 `V=E+IaRa` を補強
- [x] 解説PDF再生成: 3ページ
- [x] 練習PDF再生成: 14問、五肢択一9問、基礎4 / 本試験標準7 / 複合・応用3
- [x] 解説画像PowerPoint再生成: 2スライド。第1スライドは乾電池→スイッチ→直流モーター→車輪、直列/並列、KCL/KVL、電力式、解法フローの自作模式図。第2スライドは全引用元一覧。各スライドに出典を記載し、外部引用画像は使用していない
- [x] PDF / PowerPoint visual QA
- [x] 練習問題14問の独立再計算
- [x] 公式過去問5問を保存済み正答を先に見ず、教材だけで独立再解答

### 独立過去問QA
- H27 理論 問4: 独立 (5) → 公式 (5) PASS
- H30 理論 問5: 独立 (1) → 公式 (1) PASS
- H30 理論 問6: 独立 (2) → 公式 (2) PASS
- R2 理論 問6: 独立 (2) → 公式 (2) PASS
- R4上 理論 問5: 独立 (2) → 公式 (2) PASS

5/5一致し、教材だけで公式選択・途中式・単位・選択肢照合まで再現できたため、新品質ゲートをPASSとする。

## 再監査対象
- [x] 01 プラレール① 電気編 — 新品質ゲートPASS
- [ ] 02 プラレール② 機械編 — 並行workerがsource Markdownを新品質基準へ再構築済み。成果物・独立QAは未完了
- [ ] 03 0系① 主変圧器 — legacy成果物のみ

## 次
`02 プラレール② 機械編` の最新source/EXAM_ALIGNMENTを確認し、解説PDF・練習PDF・PowerPoint、visual QA、全練習問題の独立再計算、選定公式過去問の独立再解答まで完了する。

## 系列遷移
`01` の38テーマが新品質基準で完了したら、MASTER順に `02_shinkansen_power_3` へ自動遷移する。
