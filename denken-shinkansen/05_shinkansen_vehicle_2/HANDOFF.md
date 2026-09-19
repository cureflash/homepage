# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜22は最終QAまで `PASS / completed`。完成数は `22 / 39`。

現在地は `topic_23_practice_source_complete`。active topic は Topic 23 `N700S SiC主変換装置`。

## 今回のreconcile

latest main、最新 `STATUS.md` / `HANDOFF.md`、Topic 23既存成果物、直近車両二種worker成果をreconcileした。

Topic 22は最終QA `PASS / COMPLETED`。先行 `10 / 11` 診断はTopic 20の許可済み前提参照を外したworkerの結果で、有効clean blind候補は公式照合前に commit `f8aa715525de8747459c27cb02254575eaeca868` で固定、その後の公式照合で `11 / 11 PASS`。重複公式照合ファイルは整理し、`22_e5_readhesion_control_blind_reanswer_official_check.md` を残した。

Topic 21 H26二次「機械・制御」問1(4)の `48.0 / 48.1 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。直近のTopic 21最終QA同期後も `PASS / completed` のままで、Topic 23工程との競合はない。

同時進行workerがTopic 23制作前EXAM_ALIGNMENT、解説source、解説PDFまで完了済みだったため重複調査・再生成をせず、その固定5問・23答案要素とSPEC境界をreconcileして練習sourceへ進めた。

## Topic 23 制作前EXAM_ALIGNMENT

判定: `PASS / EXAM_ALIGNMENT_COMPLETE`

固定過去問:
- R7 一次「機械」問4 `(1)〜(5)` — `5答案要素 / 橋渡し`
- R4 一次「機械」問4 `(1)〜(5)` — `5答案要素 / 直接`
- R2 一次「機械」問2 `(1)〜(5)` — `5答案要素 / 直接`
- H24 一次「機械」問6 `(2),(3)` — `2答案要素 / 直接`
- H24 二次「機械・制御」問1 `(1)〜(6)` — `6答案要素 / 橋渡し`

品質ゲート:
- 一次: `4問・17答案要素`
- 二次: `1問・6答案要素`
- 合計: `5問・23答案要素`
- 二次記述・計算問題: `1問`
- Topic 17既存clean blind: `23 / 23 PASS`
- Topic 23完成後: Topic 23教材だけでclean blindを再実施する
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認N700S実車値の真値化: `0件`

## Topic 23 解説source

判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

- 固定5問: `5 / 5 unchanged`
- 一次答案要素: `17 / 17 covered`
- 二次答案要素: `6 / 6 covered`
- 合計: `23 / 23 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 regeneration-ready`
- 3段階例題: `3 / 3 complete`
- `p(t)=v(t)i(t)`、導通損失、`P_sw=f_s(E_on+E_off)`、変換効率、簡略熱抵抗モデルを固定過去問へ接続
- N700Sは東芝・富士電機・JR東海で確認できる範囲だけ実車事実として使用
- JR東海のN700A比7%消費電力量低減をSiC単独効果へ読み替えない
- 富士電機の駆動システム従来比20%軽量化を車両全体の重量低減率へ読み替えない
- 比較用 `V_on`, `E_on/E_off`, `f_s`, `R_th` は全て仮定モデルと明記
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- 新たなexact blocker: `0件`

## Topic 23 解説PDF

判定: `PASS / EXPLANATION_PDF_COMPLETE`

- A4縦: `5 pages`
- PDFium render: `5 / 5 PASS`
- Poppler render: `5 / 5 PASS`
- 文字抽出・破損グリフ: `PASS`
- 固定5問・23答案要素: `23 / 23 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 3段階例題: `3 / 3 PASS`
- 仮定値／実車値境界: `PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認N700S実車値の真値化: `0件`

## Topic 23 練習source

判定: `PASS / PRACTICE_SOURCE_COMPLETE`

- 一次試験型: `8問`（五肢択一）
- 二次試験型: `4問`（途中式・前提・単位・理由を含む記述式）
- 合計: `12問`
- 固定5問・23答案要素: `23 / 23 connected`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化の式系・条件: `3 / 3 aligned`
- 数値・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- H24二次橋渡しは固定6答案要素に必要な `V_a=E+R_aI_a`、逆起電力比例、IGBT/ダイオード電圧降下、通流率、`0≤D≤1` の範囲だけに限定
- JR東海7%値のSiC単独効果化: `0件`
- 富士電機20%軽量化の車両全体への誤拡張: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- 新たなexact blocker: `0件`

成果物:
- `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter.md`
- `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_explanation_source.md`
- `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_explanation.pdf`
- `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_explanation_pdf_qa.md`
- `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_practice_source.md`

## 次の安全な工程

Topic 23練習PDF生成＋PDF QA。固定5問・23答案要素、SPEC固定8項目、指定3可視化、仮定値／実車値境界を変更しない。完成後clean blind公式照合はPowerPoint完成後に実施する。
