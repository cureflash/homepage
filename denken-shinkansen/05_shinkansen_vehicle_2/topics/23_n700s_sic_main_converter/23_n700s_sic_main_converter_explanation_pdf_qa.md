# 23 N700S SiC主変換装置 — 解説PDF QA

更新日: 2026-09-19

判定: `PASS / EXPLANATION_PDF_RESYNC_COMPLETE`

## 対象

- source: `23_n700s_sic_main_converter_explanation_source.md`
- PDF: `23_n700s_sic_main_converter_explanation.pdf`
- clean blind後同期QA: `23_n700s_sic_main_converter_post_blind_artifact_sync_qa.md`
- A4縦: `5 pages`
- SHA-256: `13ea5c2773466a40f1053ea850051b5b2740682244495d7c8b482f86a83e6e27`

## clean blind補強2点

- R2一次「機械」問2 `(2)`: 「矢印極性→状態表→平均値」を受講者向けPDFへ同期し、固定問で `V=D V_dc` を明示: `PASS`
- R2一次「機械」問2 `(4)`: 固定図3の `p(t)=i_s v_s` 三角波から `W_off=(1/2)V_dc I_dc T_2` を求め、別条件の `VI t_s/6` と分離: `PASS`
- 一般式 `E_sw=∫v(t)i(t)dt`: `unchanged`
- 固定EXAM_ALIGNMENT: `unchanged`

## 表示・構造QA

- PDFium render: `5 / 5 PASS`
- Poppler render: `5 / 5 PASS`
- A4 portrait / 5 pages: `PASS`
- 文字抽出: `PASS`
- 置換文字 `�`: `0件`
- クリッピング: `0件`
- 文字重なり: `0件`
- 黒四角・破損グリフ: `0件`
- SPEC指定3可視化: `3 / 3 PASS`
- 可視化の数値は教材用仮定値でありN700S実車定数ではない旨を明記: `PASS`

## 内容QA

- 固定過去問: 第二種一次4問＋二次1問 = `5 / 5 covered`
- 一次答案要素: `17 / 17 covered`
- 二次答案要素: `6 / 6 covered`
- 合計答案要素: `23 / 23 covered`
- clean blind補強2点: `2 / 2 PASS`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 3段階例題: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 一般式変更: `0件`
- SPEC外追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- JR東海7%値・富士電機20%値の誤拡張: `0件`
- 新たなexact blocker: `0件`

## 次工程

Topic 23練習PDFを補強後practice sourceから再生成する。既存12問の問題数・正答・数値を変更せず、R2読図補強2点と一次問4の `VI t_s/6` の条件限定を同期し、表示・内容QAを行う。その後PowerPointを同期し、3成果物同期後に初回候補とは別ファイルで修正後clean blindを実施する。
