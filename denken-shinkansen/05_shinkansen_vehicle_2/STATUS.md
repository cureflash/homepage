# STATUS - 新幹線車両・電験二種

更新日: 2026-09-19

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `21 / 39`
- current_status: `topic_22_independent_reanswer_needs_revision`
- last_completed_topic: `21 高速域の速度・けん引力・出力制御`
- active_topic: `22 E5系 再粘着制御`
- next_start: H21二次「機械・制御」問4 `(5a)` に必要な過去問固有の最小注記をTopic 22教材へ追加し、派生成果物を同期・QAする。固定5問・11答案要素、一般式、SPEC固定範囲は変更しない

## 完了済み

Topic 01〜21は最終QAまで `PASS / completed`。完成数は `21 / 39`。

## Topic 22 固定品質ゲート

- 固定過去問: 第二種一次2問＋二次3問 = `5問`
- 一次答案要素: `3`
- 二次答案要素: `8`
- 合計答案要素: `11`
- H28一次 問5 `(4),(5)` のみ再粘着テーマへの直接問題
- 他4問は速度差・滑り・トルク応答・フィードバック特性の橋渡し技能
- SPEC固定8項目: `8 / 8`
- SPEC指定3可視化: `3 / 3`
- 未確認E5系実車値の真値化は禁止

## Topic 22 解説source

判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

- 固定5問・11答案要素: `11 / 11 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3` 再生成条件あり
- 3段階例題: `3 / 3`

## Topic 22 解説PDF

判定: `PASS / EXPLANATION_PDF_COMPLETE`

- A4縦: `5 pages`
- PDFium / Poppler: `5 / 5 PASS`
- 固定11答案要素: `11 / 11 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`

## Topic 22 練習source

判定: `PASS / PRACTICE_SOURCE_COMPLETE`

- 一次試験型: `8 / 8`
- 二次記述式: `4 / 4`
- 全問題: `12 / 12`
- 固定11答案要素: `11 / 11 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化の式系: `3 / 3 aligned`

## Topic 22 練習PDF

判定: `PASS / PRACTICE_PDF_COMPLETE`

- A4縦: `7 pages`
- PDFium 180 dpi: `7 / 7 PASS`
- pdftoppm 180 dpi: `7 / 7 PASS`
- 文字抽出: `PASS`
- 一次試験型: `8 / 8`
- 二次記述式: `4 / 4`
- 全問題・完全解説: `12 / 12`
- 固定5問: `5 / 5 unchanged`
- 一次答案要素: `3 / 3 covered`
- 二次答案要素: `8 / 8 covered`
- 合計答案要素: `11 / 11 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化への接続: `3 / 3 aligned`
- 公式過去問本文の複製: `0件`
- 公式解答・標準解答の個別正答保存: `0件`
- 固定SPEC外追加: `0件`
- 未確認E5系実車値の真値化: `0件`
- 新たなexact blocker: `0件`

記録:
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_practice.pdf`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_practice_pdf_qa.md`

## Topic 22 解説画像PowerPoint

判定: `PASS / POWERPOINT_COMPLETE`

- 16:9: `5 slides`
- python-pptx open / PPTX ZIP: `PASS / PASS`
- LibreOffice PDF変換: `5 / 5 PASS`
- pdftoppm `1601×900`: `5 / 5 PASS`
- shape geometry overflow: `0件`
- 表示目視QA: `5 / 5 PASS`
- 固定5問: `5 / 5 unchanged`
- 一次答案要素: `3 / 3 covered`
- 二次答案要素: `8 / 8 covered`
- 合計答案要素: `11 / 11 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 公式過去問本文の複製: `0件`
- 公式解答・標準解答の個別正答保存: `0件`
- 固定SPEC外追加: `0件`
- 未確認E5系実車値の真値化: `0件`
- 新たなexact blocker: `0件`

記録:
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_images.pptx`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_powerpoint_qa.md`

## Topic 22 clean blind 実行blocker（先行worker）

- 状態: `BLOCKED_FOR_THIS_WORKER`。
- 原因: H21二次「機械・制御」問4の問題図を回収する過程で、先行workerが候補解答固定前に個別解答を含む第三者ページを開いた。
- 品質ゲート判定: 先行workerによる独立再解答は無効。候補ファイル・照合結果は作成していない。
- 固定EXAM_ALIGNMENT、一般式、教材本文、PowerPoint、練習問題は変更していない。

## Topic 22 clean blind独立再解答

判定: `NEEDS_REVISION / INDEPENDENT_REANSWER_FAILED`

fresh independent workerが教材だけで候補を先に固定し、その後に公式解答・標準解答と照合した。

- 一次: `3 / 3 PASS`
- 二次: `7 / 8 PASS`
- 合計: `10 / 11 PASS`
- 固定5問を全答案要素まで正答: `4 / 5`
- 不一致: H21二次「機械・制御」問4 `(5a)` の1要素
- 原因: H21固有モデルについて `K2↑ → G(s)ゲイン↓ → K1G(s)ゲイン↓ → 速応性低下` を教材だけで一意に判定する説明が不足
- 新規仕様追加の必要: `0件`
- 未確認E5系実車値の真値化: `0件`

記録:
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_independent_reanswer.md`

## 次工程

H21二次「機械・制御」問4 `(5a)` の既存橋渡し技能だけを最小補強する。固定EXAM_ALIGNMENT、一般式、SPEC固定8項目、指定3可視化は変更しない。補強後に派生成果物を同期・QAし、その後clean blind独立再解答を再実施する。
