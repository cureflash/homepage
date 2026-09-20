# Topic 35 ATC① 軌道回路の回路解析 — 解説PDF QA

更新日: 2026-09-21

判定: `PASS / EXPLANATION_PDF_COMPLETE`

## 正本・reconcile

- `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md` / `HANDOFF.md`、固定EXAM_ALIGNMENT、解説source/source QAを確認した。
- 固定EXAM_ALIGNMENT `5問 / 25答案要素` は変更していない。
- PDF: `35_atc_track_circuit_analysis_explanation.pdf`
- PDF canonical commit: `51bed9f651d4ba499d54e5de40d6e3061e68b420`
- PDF SHA-256: `f35699fb423d486ef36ba8a4d69056c8b06eb5059139c8df459b9e1356fef9be`
- dual-render QA: `35_atc_track_circuit_analysis_renderer_qa_result.md`
- 初回生成PDFにPopplerの非致命的syntax warningが1件あったため、内容を変更せずqpdfで構造正規化した。最終PDFではqpdf / Popplerとも構文エラー0件。

## PDF QA

- A4縦: `10頁 / PASS`（`595.276 × 841.89 pt`）
- qpdf check: `PASS`（syntax / stream encoding error 0件）
- Poppler `pdfinfo`: `PASS`
- Poppler `pdftotext`: `PASS`
- Poppler 160 dpi render: `10 / 10 PASS`
- PDFium 160 dpi render: `10 / 10 PASS`
- 空白頁: `0件`
- ページ端切れ: `0件`（両rendererの最小content margin `53 px`）
- renderer mean pixel差: `0.6050%〜1.4595%`
- 文字抽出: content QA `7576 chars`、dual-render QA `6293 chars`。文字数はQA手順依存の参考値とし、合否は必須語句・数値抽出と文字化け有無で判定する。
- 置換文字 U+FFFD: `0件`
- SPEC固定語句: `7 / 7 PASS`
- 固定過去問ラベル: `R8一次 / R7一次 / R6一次 / R5一次 = 4 / 4 PASS`
- 3段階例題の代表値 `9.00 / 9.78 / 15.677 / 2.683`: `4 / 4 PASS`
- dual-render QA追加例題値 `0.500 / 7.692 / 0.7519 / 0.03759 / 0.1712`: `5 / 5 PASS`
- 固定答案列の抽出: `PASS`

## 固定過去問答案要素ゲート

- R8一次「理論」問3: `5 / 5 connected`
- R7一次「理論」問3: `5 / 5 connected`
- R7一次「理論」問4: `5 / 5 connected`
- R6一次「理論」問6: `5 / 5 connected`
- R5一次「理論」問4: `5 / 5 connected`
- 一次合計: `25 / 25 connected`
- 二次: `0問`。R8二次は未実施、R7〜R5確認範囲で本Topicへ直接対応する問題を確認できないため、件数合わせで追加しない。

## SPEC固定7項目

- 軌道回路: `PASS`
- レールインピーダンス: `PASS`
- 車軸短絡: `PASS`
- 受信レベル: `PASS`
- 信号電流: `PASS`
- 回路条件: `PASS`
- フェイルセーフ: `PASS`

`7 / 7 PASS`。

## 3段階例題

- 基礎: `PASS`
- 本試験標準: `PASS`
- 複合・ひっかけ: `PASS`

`3 / 3 PASS`。数値・複素数の独立再計算は解説source QAで通過済みで、PDF抽出値も一致した。

## 範囲境界QA

- 固定EXAM_ALIGNMENT変更: `0件`
- 二次問題の件数合わせ採用: `0件`
- 固定過去問を「軌道回路そのものの出題」とする偽装: `0件`
- 未確認レールインピーダンス・車軸短絡抵抗・受信しきい値・信号電流を実車真値化: `0件`
- Topic 36の変調・フィルタ・ノイズ等の先取り: `0件`
- Topic 37の速度制御・ブレーキ制御等の先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

## 次工程

Topic 35練習source。固定5問・25答案要素とSPEC固定7項目へ接続し、二次問題は直接対応問題がない現状を維持して件数合わせを行わない。
