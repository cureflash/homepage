# STATUS - 新幹線車両・電験三種

更新日: 2026-09-15

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 30 / 38
- current_status: `topic_31_exam_alignment_complete`
- last_completed_topic: `30 ATC① 新幹線は列車をどう検知する？`
- active_topic: `31 ATC② 地上から車上へどう情報を送る？`
- next_start: Topic 31の解説本文＋3段階例題。固定5問・6対象項目を教材本文へ全件マッピングする

## 新品質ゲート進捗
- [x] 01〜30 — PASS
- [ ] 31 ATC② 地上から車上へどう情報を送る？ — 制作前EXAM_ALIGNMENT完了（固定5問・6対象項目、`6 / 6 PASS`）

## 31 EXAM_ALIGNMENT
品質ゲート対象は公式過去問5問・6対象項目。系列SPEC固定範囲は、信号、周波数、情報伝送、センサ、デジタル信号、論理判断。

1. R7下 機械 問14 — フローチャートの条件分岐・反復による論理判断 — `3` — PASS
2. R5上 機械 問18(a) — パルス信号の動作周波数から周期を求める — `3` — PASS
3. R5上 機械 問18(b) — CPIと1命令実行時間から動作周波数を求める — `4` — PASS
4. R4下 機械 問13 — 伝送路・雑音・多重化・変調波・標本化・圧縮 — `3` — PASS
5. R4下 理論 問14 — 標本化・量子化・符号化・伝送路雑音・A-D変換 — `5` — PASS
6. R4上 機械 問14 — センサ・アナログ/デジタル・A-D/D-A・インタフェース — `2` — PASS

制作前独立解答: `6 / 6 PASS`。
公式解答との不一致: `0件`。
固定範囲外知識による正答補完: `0件`。
Topic 32の速度照査・ブレーキ指令・フィードバック・ブロック線図・AND/OR追加: `0件`。
未確認新幹線ATC実車値追加: `0件`。

source: `topics/31_atc_signal_transmission/31_atc_signal_transmission.md`

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
- 解説source / EXAM_ALIGNMENT: `topics/30_atc_train_detection/30_atc_train_detection.md` — 制作前EXAM_ALIGNMENT＋解説本文§1〜§15＋3段階例題。進捗記録整合PASS
- 解説PDF: `topics/30_atc_train_detection/30_atc_train_detection_explanation.pdf` — A4縦4ページ、180 dpi全ページ表示QA PASS、文字抽出QA PASS
- 練習source: `topics/30_atc_train_detection/30_atc_train_detection_practice.md` — 15問（基礎4／標準8／複合3）、全問五肢択一＋完全解説、固定5問を全件マッピング
- 練習PDF: `topics/30_atc_train_detection/30_atc_train_detection_practice.pdf` — A4縦4ページ、180 dpi全ページ表示QA PASS、文字抽出QA PASS
- 解説画像PowerPoint: `topics/30_atc_train_detection/30_atc_train_detection_images.pptx` — 16:9・4枚、固定5問の解法経路を可視化、全4枚表示QA PASS、ZIP整合性PASS
- 完成後独立再解答記録 / 最終QA: `topics/30_atc_train_detection/30_atc_train_detection_final_qa.md` — 再解答 `5 / 5 PASS`、最終判定 `PASS / COMPLETED`

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
`PASS / COMPLETED`。
- 必須成果物: PASS
- 固定5問の完成後独立再解答: `5 / 5 PASS`
- 解説PDF / 練習PDF / PowerPoint表示QA: PASS
- 進捗記録整合: PASS
- 固定範囲境界: PASS
- Topic 30を `completed` とし、完成数を30/38へ更新

## 30 範囲境界
追加しない:
- ATC信号の周波数・符号化・情報伝送（Topic 31）
- 速度検出、速度照査、ブレーキ指令、AND/OR、フェイルセーフ（Topic 32）
- リレーシーケンス、保護リレー方式
- RC/RL/RLC過渡現象
- 軌道回路の詳細な方式各論
- 未確認の新幹線軌道回路電圧・電流・車軸短絡抵抗・リレー動作値

## 直前完了
Topic 30 `ATC① 新幹線は列車をどう検知する？` は固定5問の完成後独立再解答 `5 / 5 PASS`、必須成果物・表示QA・進捗記録整合・固定範囲境界すべてPASS、教材外知識補完・固定範囲外追加・未確認実車値追加0件で `PASS / COMPLETED`。

## 次テーマ工程
Topic 31 `ATC② 地上から車上へどう情報を送る？` は制作前EXAM_ALIGNMENT完了。次は固定5問・6対象項目を全件対応させた解説本文＋3段階例題を作成する。