# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-17

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜12は最終QAまで `PASS / completed`。完成数は `12 / 39`。

現在地は `topic_13_independent_reanswer_passed`。Topic 13 `300系④ 回生と四象限運転` は、固定EXAM_ALIGNMENT、解説本文＋3段階例題、解説PDF＋QA、練習問題・完全解説source、練習PDF＋QA、解説画像PowerPoint＋QA、完成後独立再解答まで完成。固定一次4問＋二次1問・15答案要素は `15 / 15 PASS`。次は最終QA。

## Topic 13 固定EXAM_ALIGNMENT
source: `topics/13_300series_regenerative_four_quadrant/13_300series_regenerative_four_quadrant.md`

固定過去問:
- R6 一次 機械 問2 (1),(2)
- R5 一次 機械 問2 (1),(2),(3),(5)
- H28 一次 機械 問5 (3)〜(5)
- H27 一次 機械 問3 (1),(2)
- H24 二次 機械・制御 問3 (1),(2)a〜c

品質ゲート:
- 一次: `4問・11答案要素`
- 二次: `1問・4答案要素`
- 合計: `5問・15答案要素`
- 制作前独立検証: 一次 `11 / 11 PASS`、二次 `4 / 4 PASS`、合計 `15 / 15 PASS`
- 二次記述問題: `1問`
- 公式解答・標準解答との不一致: `0件`
- 参考教材2系統以上: `PASS`
- SPEC指定8項目: `8 / 8 PASS`
- SPEC指定3可視化: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`

## Topic 13 既完成成果物
- 解説source: `topics/13_300series_regenerative_four_quadrant/13_300series_regenerative_four_quadrant.md`
- 解説PDF: `topics/13_300series_regenerative_four_quadrant/13_300series_regenerative_four_quadrant_explanation.pdf`
- 解説PDF QA: `topics/13_300series_regenerative_four_quadrant/13_300series_regenerative_four_quadrant_explanation_pdf_qa.md`
- 練習source: `topics/13_300series_regenerative_four_quadrant/13_300series_regenerative_four_quadrant_practice_source.md`
- 練習PDF: `topics/13_300series_regenerative_four_quadrant/13_300series_regenerative_four_quadrant_practice.pdf`
- 練習PDF QA: `topics/13_300series_regenerative_four_quadrant/13_300series_regenerative_four_quadrant_practice_qa.md`
- 解説画像PowerPoint: `topics/13_300series_regenerative_four_quadrant/13_300series_regenerative_four_quadrant_images.pptx`
- PowerPoint QA: `topics/13_300series_regenerative_four_quadrant/13_300series_regenerative_four_quadrant_images_qa.md`
- 完成後独立再解答: `topics/13_300series_regenerative_four_quadrant/13_300series_regenerative_four_quadrant_independent_reanswer.md`

## Topic 13 完成後独立再解答
- 公式解答確認前に完成教材と公式問題文だけで答案を固定
- 答案ロックcommit: `14070ee683554770df331c22f09525a5be97b45c`
- 一次 `11 / 11 PASS`
- 二次 `4 / 4 PASS`
- 合計 `15 / 15 PASS`
- 教材外知識補完: `0件`
- 公式解答・標準解答との不一致: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定範囲外追加: `0件`
- Topic 14先取り: `0件`

## Topic 13 解説画像PowerPoint完成確認
- 16:9・4スライド
- SPEC指定3可視化 `3 / 3 PASS`
  - 速度・トルク平面
  - 力行・回生時の電力フロー
  - 回生可能エネルギー
- H24二次型計算再検算: `PASS`
- 固定5過去問・15答案要素接続: `15 / 15 PASS`
- 約180 dpi表示QA: `4 / 4 PASS`
- overlap / clipping / broken glyph / overflow: `0件`
- `slides_test.py`: `PASS / 0件`
- PowerPoint ZIP/XML整合性: `PASS`
- PDF経由文字抽出: `4 / 4ページ PASS`
- Unicode置換文字: `0件`
- PowerPoint SHA-256: `c5f69a2f555916d4ba81966cbd30adddc068b0d663023f3385f9287fa40ff893`
- Git blob SHA-1: `05ec4efe282fac7392524c2f85e83488257ef43d`

## Topic 13 練習PDF完成確認
- A4縦2ページ
- 一次8問＋二次4問、全12問＋完全解説を収録
- 180 dpi表示QA: `2 / 2 PASS`
- 文字抽出QA: `PASS`
- Unicode置換文字 / 黒四角 / クリップ / 重なり / overflow: `0件`
- 数値・論理QA: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 二次の途中式・前提・単位・理由: `4 / 4 PASS`
- 固定5過去問・15答案要素接続: `15 / 15 PASS`
- PDF SHA-256: `ec183d8f536905083c3cbf9cdaca06d014f99e735fa00361b5ea82472fc935c0`
- PDF Git blob SHA-1: `ce7d43ed9a81f752bd0220d211c145f2b65a5908`
- source Git blob SHA-1: `c52cdd0959c30b62488985ee416af6ee4fc35b58`

## Topic 13 範囲境界
- Topic 14の走行抵抗・必要けん引力・加速度計算は先取りしない
- H27の回生失効・電力貯蔵・運行間隔は追加しない
- H24二次問3の無効電流・出力可能領域は追加しない
- Topic 11/12の高調波・力率制御・V/f制御等は本テーマに必要な接続以上に再展開しない
- SPEC外制御方式は追加しない
- 未確認の300系回生効率・制御定数等を実車値として追加しない

## 直前Topic
Topic 12 `300系③ VVVFインバータと誘導機制御` は最終QA `PASS / completed`。Topic 11 `300系② PWMコンバータ` も `PASS / completed`。

## 次の正確な開始点
Topic 13 `300系④ 回生と四象限運転` の最終QAを実施する。固定5問・15答案要素の完成後独立再解答 `15 / 15 PASS` を維持し、必須成果物、PDF/PPTX QA、進捗記録整合、固定範囲境界を総合判定する。
