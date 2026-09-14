# STATUS - 新幹線車両・電験三種

更新日: 2026-09-15

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 29 / 38
- current_status: `topic_30_powerpoint_complete`
- last_completed_topic: `29 コンプレッサ・ポンプ・ファン`
- active_topic: `30 ATC① 新幹線は列車をどう検知する？`
- next_start: Topic 30の完成後独立再解答。固定EXAM_ALIGNMENT 5問を完成教材だけで再解答し、教材外知識補完・固定範囲外追加がないか判定する

## 新品質ゲート進捗
- [x] 01〜29 — PASS
- [ ] 30 ATC① 新幹線は列車をどう検知する？ — POWERPOINT_COMPLETE

## 30 EXAM_ALIGNMENT
品質ゲート対象は公式過去問5問。系列SPEC固定範囲は、レール、軌道回路、車軸短絡、電圧、電流、短絡、リレー、列車検知。

1. R8上 理論 問7 — 並列抵抗の電圧・電流から未知抵抗式を導出 — `4` — PASS
2. R7上 理論 問6 — 分圧・並列追加後の電圧から抵抗を復元し、端子間短絡電流を求める — `2` — PASS
3. R7上 理論 問7 — スイッチ開閉による電流変化から未知抵抗を求める — `1` — PASS
4. R5下 理論 問7 — 切換スイッチ3状態の電流から未知抵抗を求める — `5` — PASS
5. H27 理論 問6 — スイッチ開閉前後で全電流が同じ条件から未知抵抗を求める — `2` — PASS

制作前独立解答: `5 / 5 PASS`。
公式解答との不一致: `0件`。
固定範囲外論点の件数合わせ追加: `0件`。
未確認実車値追加: `0件`。

## 30 成果物
- 解説source / EXAM_ALIGNMENT: `topics/30_atc_train_detection/30_atc_train_detection.md` — 制作前EXAM_ALIGNMENT＋解説本文§1〜§15＋3段階例題
- 解説PDF: `topics/30_atc_train_detection/30_atc_train_detection_explanation.pdf` — A4縦4ページ、180 dpi全ページ表示QA PASS、文字抽出QA PASS
- 練習source: `topics/30_atc_train_detection/30_atc_train_detection_practice.md` — 15問（基礎4／標準8／複合3）、全問五肢択一＋完全解説、固定5問を全件マッピング
- 練習PDF: `topics/30_atc_train_detection/30_atc_train_detection_practice.pdf` — A4縦4ページ、180 dpi全ページ表示QA PASS、文字抽出QA PASS
- 解説画像PowerPoint: `topics/30_atc_train_detection/30_atc_train_detection_images.pptx` — 16:9・4枚、固定5問の解法経路を可視化、全4枚表示QA PASS、ZIP整合性PASS
- 完成後独立再解答・最終QA: 未着手

## 30 練習QA
- 問題数: `15 / 15`
- 基礎/標準/複合: `4 / 8 / 3`
- 五肢択一: `15 / 15`
- 正答位置: A/B/C/D/E各3問
- 固定EXAM_ALIGNMENT要求事項: `5 / 5` マッピング
- 独立計算・論理QA: `15 / 15 PASS`
- 複数正答: `0件`
- 練習PDF表示QA: 180 dpi `4 / 4 PASS`
- 練習PDF文字抽出QA: PASS
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`

## 30 PowerPoint QA
- 画面比率: `16:9`
- スライド数: `4`
- 内容: 軌道回路の列車なし/あり、直列・並列・分圧・短絡、固定5過去問の解法経路、再利用解法アルゴリズム
- 固定EXAM_ALIGNMENT要求事項: `5 / 5` 可視化
- 表示QA: `4 / 4 PASS`
- ZIP整合性: PASS
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`

## 30 範囲境界
追加しない:
- ATC信号の周波数・符号化・情報伝送（Topic 31）
- 速度検出、速度照査、ブレーキ指令、AND/OR、フェイルセーフ（Topic 32）
- リレーシーケンス、保護リレー方式
- RC/RL/RLC過渡現象
- 軌道回路の詳細な方式各論
- 未確認の新幹線軌道回路電圧・電流・車軸短絡抵抗・リレー動作値

## 直前完了
Topic 29 `コンプレッサ・ポンプ・ファン` は固定5問の完成後独立再解答 `5 / 5 PASS`、教材外知識補完・固定範囲外追加・未確認実車値追加0件で `PASS / COMPLETED`。

## 次テーマ工程
Topic 30の固定5過去問を、完成教材だけを使って保存済み正答を先に見ず独立再解答する。教材外知識補完、固定範囲外追加、未確認実車値依存がないことを確認し、品質ゲート判定を記録する。
