# STATUS - 新幹線車両・電験三種

更新日: 2026-09-16

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 31 / 38
- current_status: `topic_32_independent_reanswer_complete`
- last_completed_topic: `31 ATC② 地上から車上へどう情報を送る？`
- active_topic: `32 ATC③ 新幹線をどう自動で減速させる？`
- next_start: Topic 32の固定EXAM_ALIGNMENTと完成済み成果物を維持し、最終QAを実施する

## 新品質ゲート進捗
- [x] 01〜31 — PASS
- [ ] 32 ATC③ 新幹線をどう自動で減速させる？ — 完成後独立再解答完了、最終QA待ち

## 32 EXAM_ALIGNMENT
品質ゲート対象は公式過去問5問・6対象項目。系列SPEC固定範囲は、速度検出、速度照査、ブレーキ指令、フィードバック、ブロック線図、AND、OR、フェイルセーフ。

1. R8上 機械 問13 — ブロック線図・負帰還・伝達関数 — `4` — PASS
2. R7下 機械 問18(a) — 一次遅れ閉ループ伝達関数 — `2` — PASS
3. R7下 機械 問18(b) — 周波数応答・ボード線図 — `2` — PASS
4. R6下 機械 問13 — P・I・Dと定常・過渡特性 — `2` — PASS
5. R6下 機械 問14 — AND・OR・NOT、論理式、タイムチャート — `3` — PASS
6. R6上 機械 問13 — シーケンス・フィードバック・インタロック — `2` — PASS

制作前独立解答: `6 / 6 PASS`。
完成後独立再解答: `6 / 6 PASS`。
公式解答との不一致: `0件`。
教材外知識補完: `0件`。
固定範囲外知識による正答補完: `0件`。
未確認新幹線ATC実車値追加: `0件`。

source: `topics/32_atc_speed_brake_control/32_atc_speed_brake_control.md`

## 32 解説source
- 本文: §1〜§15
- 3段階例題: 基礎「一次遅れ系の折点と低周波利得」／標準「内部信号から伝達関数を求める」／複合「論理式とシーケンス判断」
- 固定EXAM_ALIGNMENT: `6 / 6` 本文マッピング済み
- 負帰還: `C/R=G/(1+GH)`
- 固定過去問型: `C/R=(1+jωT1)/(1+jωT2)` を内部信号から導出
- 一次遅れ: `W(jω)=K/(1+jωT)`、`ωc=1/T`、低周波利得 `20log10K`、折点後 `-20 dB/dec`
- P・I・D: I=定常特性改善、D=過渡特性改善、Pは両特性へ影響
- 論理回路: AND・OR・NOT、`X=A·C+B·NOT(C)`、タイムチャート追跡
- シーケンス制御・インタロック・フェイルセーフの一般原則
- JRTT公開範囲のATC方式世代差のみ収録
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`

## 32 解説PDF
- `topics/32_atc_speed_brake_control/32_atc_speed_brake_control_explanation.pdf`
- A4縦4ページ
- 本文§1〜§15、3段階例題、固定5問・6対象項目の対応を収録
- 180 dpi全ページ表示QA: `4 / 4 PASS`
- 文字抽出QA: PASS
- 固定EXAM_ALIGNMENT: `6 / 6` 反映
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`

## 32 練習source / PDF
- source: `topics/32_atc_speed_brake_control/32_atc_speed_brake_control_practice.md`
- PDF: `topics/32_atc_speed_brake_control/32_atc_speed_brake_control_practice.pdf`
- 全15問（基礎4／標準8／複合3）、全問五肢択一＋完全解説
- 正答位置: A/B/C/D/E各3問
- 固定5問・6対象項目: `6 / 6` 練習マッピング
- 独立数値・論理QA: `15 / 15 PASS`
- 複数正答: `0件`
- A4縦4ページ、180 dpi全ページ表示QA: `4 / 4 PASS`
- 文字抽出QA: PASS
- 固定範囲外論点追加: `0件`
- Topic 30/31範囲の再説明追加: `0件`
- 未確認実車値追加: `0件`

## 32 練習QA
- 問題数: `15 / 15`
- 基礎/標準/複合: `4 / 8 / 3`
- 五肢択一: `15 / 15`
- 正答位置: A/B/C/D/E各3問
- 固定EXAM_ALIGNMENT要求事項: `6 / 6` マッピング
- 独立数値・論理再計算: `15 / 15 PASS`
- 複数正答: `0件`
- 練習PDF表示QA: 180 dpi `4 / 4 PASS`
- 練習PDF文字抽出QA: PASS
- 固定範囲外論点追加: `0件`
- Topic 30/31範囲の再説明追加: `0件`
- 未確認実車値追加: `0件`

## 32 PowerPoint QA
- `topics/32_atc_speed_brake_control/32_atc_speed_brake_control_images.pptx`
- 画面比率: `16:9`
- スライド数: `4`
- 内容: ATC速度制御の一般制御系対応、負帰還・ブロック線図、一次遅れ周波数応答とP・I・D、AND/OR/NOT・シーケンス・インタロック・フェイルセーフ
- 固定EXAM_ALIGNMENT要求事項: `6 / 6` 可視化
- 表示QA: `4 / 4 PASS`
- overflow検査: PASS
- PPTX ZIP整合性: PASS
- 固定範囲外論点追加: `0件`
- Topic 30/31範囲の再説明追加: `0件`
- 未確認実車値追加: `0件`

## 32 完成後独立再解答
- R8上 機械 問13 — 内部信号を連立し `C/R=(1+jωT1)/(1+jωT2)` → 選択肢4 — PASS
- R7下 機械 問18(a) — `T=0.2 s, K=10` より `C/R=10/(1+j0.2ω)` → 選択肢2 — PASS
- R7下 機械 問18(b) — 低周波利得 `20 dB`、折点 `5 rad/s`、以後 `-20 dB/dec` → 選択肢2 — PASS
- R6下 機械 問13 — I=定常特性改善、D=過渡特性改善、P=両特性へ影響 → 選択肢2 — PASS
- R6下 機械 問14 — `X=A·C+B·NOT(C)` を場合分けしてタイムチャート追跡 → 選択肢3 — PASS
- R6上 機械 問13 — シーケンス/フィードバック、有接点、インタロック、タイムチャートを対応 → 選択肢2 — PASS
- 合計: `6 / 6 PASS`
- 公式解答との不一致: `0件`
- 教材外知識補完: `0件`
- 固定範囲外知識による正答補完: `0件`
- 未確認実車値依存: `0件`
- 記録: `topics/32_atc_speed_brake_control/32_atc_speed_brake_control_final_qa.md`

## 31 EXAM_ALIGNMENT
品質ゲート対象は公式過去問5問・6対象項目。系列SPEC固定範囲は、信号、周波数、情報伝送、センサ、デジタル信号、論理判断。

1. R7下 機械 問14 — フローチャートの条件分岐・反復による論理判断 — `3` — PASS
2. R5上 機械 問18(a) — パルス信号の動作周波数から周期を求める — `3` — PASS
3. R5上 機械 問18(b) — CPIと1命令実行時間から動作周波数を求める — `4` — PASS
4. R4下 機械 問13 — 伝送路・雑音・多重化・変調波・標本化・圧縮 — `3` — PASS
5. R4下 理論 問14 — 標本化・量子化・符号化・伝送路雑音・A-D変換 — `5` — PASS
6. R4上 機械 問14 — センサ・アナログ/デジタル・A-D/D-A・インタフェース — `2` — PASS

制作前独立解答: `6 / 6 PASS`。
完成後独立再解答: `6 / 6 PASS`。
公式解答との不一致: `0件`。
教材外知識補完: `0件`。
固定範囲外知識による正答補完: `0件`。
Topic 32の速度照査・ブレーキ指令・フィードバック・ブロック線図・AND/OR追加: `0件`。
未確認新幹線ATC実車値追加: `0件`。

source: `topics/31_atc_signal_transmission/31_atc_signal_transmission.md`

## 31 解説source
- 本文: §1〜§15
- 3段階例題: 基礎「周期と周波数」／標準「標本化条件」／複合「デジタル処理時間と条件判断」
- 固定EXAM_ALIGNMENT: `6 / 6` 本文マッピング済み
- 周期・周波数: `f=1/T`, `T=1/f`
- 処理時間: `t_instruction=CPI/f`
- A-D変換: 標本化→量子化→符号化
- 標本化条件: `f_s>=2f_max`, `T_s<=1/(2f_max)`
- 情報伝送: 伝送路、雑音、多重化、搬送波、変調波、圧縮
- センサ・信号処理: アナログ→A-D→デジタル処理、D-A、インタフェース
- 論理判断: 条件分岐・反復の追跡まで
- Topic 32範囲追加: `0件`
- 未確認実車値追加: `0件`

## 31 解説PDF
- `topics/31_atc_signal_transmission/31_atc_signal_transmission_explanation.pdf`
- A4縦4ページ
- 本文§1〜§15、3段階例題、固定5問・6対象項目の対応を収録
- 180 dpi全ページ表示QA: `4 / 4 PASS`
- 文字抽出QA: PASS
- 固定EXAM_ALIGNMENT: `6 / 6` 反映
- Topic 32範囲追加: `0件`
- 未確認実車値追加: `0件`

## 31 練習source / PDF
- source: `topics/31_atc_signal_transmission/31_atc_signal_transmission_practice.md`
- PDF: `topics/31_atc_signal_transmission/31_atc_signal_transmission_practice.pdf`
- 全15問（基礎4／標準8／複合3）、全問五肢択一＋完全解説
- 正答位置: A/B/C/D/E各3問
- 固定5問・6対象項目: `6 / 6` 練習マッピング
- 独立数値・論理QA: `15 / 15 PASS`
- 複数正答: `0件`
- A4縦4ページ、180 dpi全ページ表示QA: `4 / 4 PASS`
- 文字抽出QA: PASS
- Topic 32範囲追加: `0件`
- 未確認実車値追加: `0件`

## 31 練習QA
- 問題数: `15 / 15`
- 基礎/標準/複合: `4 / 8 / 3`
- 五肢択一: `15 / 15`
- 正答位置: A/B/C/D/E各3問
- 固定EXAM_ALIGNMENT要求事項: `6 / 6` マッピング
- 数値・論理再計算: `15 / 15 PASS`
- 複数正答: `0件`
- 練習PDF表示QA: 180 dpi `4 / 4 PASS`
- 練習PDF文字抽出QA: PASS
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`

## 31 PowerPoint QA
- `topics/31_atc_signal_transmission/31_atc_signal_transmission_images.pptx`
- 画面比率: `16:9`
- スライド数: `4`
- 内容: 地上→車上の情報伝送骨格、周期・周波数とCPI、A-D変換と標本化、伝送用語と条件分岐・反復
- 固定EXAM_ALIGNMENT要求事項: `6 / 6` 可視化
- 表示QA: `4 / 4 PASS`
- overflow検査: PASS
- PPTX ZIP整合性: PASS
- Topic 32範囲追加: `0件`
- 未確認実車値追加: `0件`

## 31 完成後独立再解答
- R7下 機械 問14 — 条件分岐・反復を追跡し `(A,B)=(51,23)` → 選択肢3 — PASS
- R5上 機械 問18(a) — `T=1/(2.5 GHz)=0.4 ns` → 選択肢3 — PASS
- R5上 機械 問18(b) — `f=4/(20 ns)=200 MHz` → 選択肢4 — PASS
- R4下 機械 問13 — 雑音・多重化・変調波・標本化・圧縮を対応 → 選択肢3 — PASS
- R4下 理論 問14 — 時間波形表示にFFTは必須ではない → 選択肢5 — PASS
- R4上 機械 問14 — アナログ/デジタル・A-D/D-A・インタフェースを対応 → 選択肢2 — PASS
- 合計: `6 / 6 PASS`
- 公式解答との不一致: `0件`
- 教材外知識補完: `0件`
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`
- 記録: `topics/31_atc_signal_transmission/31_atc_signal_transmission_final_qa.md`

## 31 最終QA
`PASS / COMPLETED`。
- 必須成果物: PASS
- 固定5問・6対象項目の完成後独立再解答: `6 / 6 PASS`
- 解説PDF / 練習PDF / PowerPoint表示QA: PASS
- 進捗記録整合: PASS
- 固定範囲境界: PASS
- Topic 31を `completed` とし、完成数を31/38へ更新

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
- 解説画像PowerPoint: `topics/30_atc_train_detection/30_atc_train_detection_images.pptx` — 16:9・4枚、固定5過去問の解法経路を可視化、全4枚表示QA PASS、ZIP整合性PASS
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
Topic 31 `ATC② 地上から車上へどう情報を送る？` は固定5問・6対象項目の完成後独立再解答 `6 / 6 PASS`、必須成果物・表示QA・進捗記録整合・固定範囲境界すべてPASS、教材外知識補完・固定範囲外追加・未確認実車値追加0件で `PASS / COMPLETED`。

## 次テーマ工程
Topic 32 `ATC③ 新幹線をどう自動で減速させる？` は完成後独立再解答まで完了。固定5問・6対象項目と既存成果物を変更せず、次は最終QAを実施する。