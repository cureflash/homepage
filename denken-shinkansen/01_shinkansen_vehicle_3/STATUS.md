# STATUS - 新幹線車両・電験三種

更新日: 2026-09-15

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 29 / 38
- current_status: `topic_30_final_qa_needs_revision`
- last_completed_topic: `29 コンプレッサ・ポンプ・ファン`
- active_topic: `30 ATC① 新幹線は列車をどう検知する？`
- next_start: Topic 30主source `topics/30_atc_train_detection/30_atc_train_detection.md` 冒頭の旧進捗だけを実態へ同期する。教材本文・固定EXAM_ALIGNMENT・数式・例題・成果物・固定範囲は変更しない

## 新品質ゲート進捗
- [x] 01〜29 — PASS
- [ ] 30 ATC① 新幹線は列車をどう検知する？ — NEEDS_REVISION

## 30 EXAM_ALIGNMENT
品質ゲート対象は公式過去問5問。系列SPEC固定範囲は、レール、軌道回路、車軸短絡、電圧、電流、短絡、リレー、列車検知。

1. R8上 理論 問7 — 並列抵抗の電圧・電流から未知抵抗式を導出 — `4` — PASS
2. R7上 理論 問6 — 分圧・並列追加後の電圧から抵抗を復元し、端子間短絡電流を求める — `2` — PASS
3. R7上 理論 問7 — スイッチ開閉による電流変化から未知抵抗を求める — `1` — PASS
4. R5下 理論 問7 — 切換スイッチ3状態の電流から未知抵抗を求める — `5` — PASS
5. H27 理論 問6 — スイッチ開閉前後で全電流が同じ条件から未知抵抗を求める — `2` — PASS

制作前独立解答: `5 / 5 PASS`。
完成後独立再解答: `5 / 5 PASS`。
公式解答との不一致: `0件`。
教材外知識補完: `0件`。
固定範囲外論点の件数合わせ追加: `0件`。
未確認実車値追加: `0件`。

## 30 成果物
- 解説source / EXAM_ALIGNMENT: `topics/30_atc_train_detection/30_atc_train_detection.md` — 制作前EXAM_ALIGNMENT＋解説本文§1〜§15＋3段階例題
- 解説PDF: `topics/30_atc_train_detection/30_atc_train_detection_explanation.pdf` — A4縦4ページ、180 dpi全ページ表示QA PASS、文字抽出QA PASS
- 練習source: `topics/30_atc_train_detection/30_atc_train_detection_practice.md` — 15問（基礎4／標準8／複合3）、全問五肢択一＋完全解説、固定5問を全件マッピング
- 練習PDF: `topics/30_atc_train_detection/30_atc_train_detection_practice.pdf` — A4縦4ページ、180 dpi全ページ表示QA PASS、文字抽出QA PASS
- 解説画像PowerPoint: `topics/30_atc_train_detection/30_atc_train_detection_images.pptx` — 16:9・4枚、固定5問の解法経路を可視化、全4枚表示QA PASS、ZIP整合性PASS
- 完成後独立再解答記録 / 最終QA: `topics/30_atc_train_detection/30_atc_train_detection_final_qa.md` — 再解答 `5 / 5 PASS`、最終判定 `NEEDS_REVISION`

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

## 30 完成後独立再解答
- R8上 理論 問7 — `Rx=VR/(IR-V)` → 選択肢4 — PASS
- R7上 理論 問6 — `R2=25Ω, R1=225Ω`、短絡時 `0.444...A` → 選択肢2 — PASS
- R7上 理論 問7 — 閉時 `Req=4Ω`、`10||R=2Ω` より `R=2.5Ω` → 選択肢1 — PASS
- R5下 理論 問7 — `R1=20Ω, R2=30Ω, r=60Ω` → 選択肢5 — PASS
- H27 理論 問6 — 開閉時の等価抵抗条件を連立し `R4=1Ω, R3=2Ω` → 選択肢2 — PASS
- 合計: `5 / 5 PASS`
- 教材外知識補完: `0件`
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`

## 30 最終QA
- 必須成果物: PASS
- 固定5問の完成後独立再解答: `5 / 5 PASS`
- 解説PDF / 練習PDF / PowerPoint表示QA: PASS
- 固定範囲境界: PASS
- 進捗記録整合: FAIL
  - 主source冒頭に `練習・PowerPoint・完成後独立再解答は未着手` という旧進捗が1箇所残存
- 判定: `NEEDS_REVISION / IN_PROGRESS`

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
Topic 30主source冒頭の進捗記録だけを現在の実在成果物へ同期する。その後、最終QAを再判定する。教材本文・固定EXAM_ALIGNMENT・数式・例題・PDF・練習・PowerPoint・固定範囲は変更しない。
