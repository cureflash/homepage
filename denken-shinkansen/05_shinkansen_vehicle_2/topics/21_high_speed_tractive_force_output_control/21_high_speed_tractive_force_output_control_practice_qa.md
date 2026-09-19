# 21 高速域の速度・けん引力・出力制御 — 練習PDF QA

更新日: 2026-09-19

## 対象
- source: `21_high_speed_tractive_force_output_control_practice_source.md`
- PDF: `21_high_speed_tractive_force_output_control_practice.pdf`

判定: `PASS / PRACTICE_PDF_COMPLETE`

## 構成
- A4縦: `4 pages`
- 一次試験型: `8 / 8`、全問五肢択一
- 二次試験型: `4 / 4`、途中式・単位・理由説明を収録
- 完全解説: `12 / 12`
- 問題・正答・数式・仮定値のsourceからの仕様変更: `0件`
- `≈`、`≤`、`≥` はCIDフォント欠落を避ける版面上の表記として、それぞれ `約`、`<=`、`>=` に置換。数学的意味・数値・条件は変更なし

## 表示・抽出QA
- PDFium 180 dpiレンダリング: `4 / 4 PASS`
- pdftoppm 180 dpiレンダリング: `4 / 4 PASS`
- 両renderer画像寸法: `1489×2105 / 4 pages`
- PDF構造・開封: `PASS`
- 文字抽出: `PASS`
- 抽出置換文字 U+FFFD / `(cid:)`: `0件`
- 問題見出し: `12 / 12 PASS`
- 空白ページ: `0件`
- 欠落グリフ・黒四角・重なり・クリップ: `0件 / 2 renderer確認`

## 試験対応・数値QA
- 固定公式過去問: `一次2問＋二次3問 / 5問 / 変更なし`
- 固定答案要素: `一次3＋二次3 / 6`
- 固定答案要素の練習問題接続: `6 / 6 PASS`
- H26一次 問5 `(4),(5)` 最小判別条件: `2 / 2 covered`
- 数値・式・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化への式系接続: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定問題差替え: `0件`
- SPEC外追加: `0件`
- 未確認実車値の真値化: `0件`
- 公式解答・標準解答の個別正答参照・保存: `0件`
- 完成後clean blind公式照合: `未実施 / PowerPoint完成後`

## 再計算要点
- 一次1: `ω=251.33 rad/s`, `T=1591.5 N·m`
- 一次2: `P=376.99 kW`, 出力比 `2`
- 一次3: `T2/T1=2/3`
- 一次5: `F=100 kN`
- 一次6: `P=6.0 MW`, `24台`
- 一次7: `R=67.5 kN`, `P_req=3.375 MW`
- 一次8: `R=96.7 kN`, `P_req=6.444 MW`, `F_avail=90.0 kN`
- 二次1: `T1=1591.5 N·m`, `T2=1061.0 N·m`
- 二次2: `P_train=6.0 MW`, `F180=120 kN`, `F270=80 kN`
- 二次3: `P_req(180)=4.00 MW`, `P_req(240)=7.667 MW`
- 二次4: `70/140/210 km/h` の `P_m`, `P_train`, `F_avail`, `R(v)`, `P_req` を再計算しsource丸め値と一致

## ファイル
- PDF SHA-256: `e95387b62ac68d250a7c9b2d2f798fb2e0a39fd230ed0d6419706cf042c18577`
- PDF size: `12239 byte`

## worker reconcile
- 作業開始時の同系列mainは `6698ec79df73f8338f0be65b280bd055c6a69193` (`topic_21_practice_source_complete`)。
- 作業中の最新main `598320450af0d20536e41273075a42b971877377` は `08_shinkansen_theory_2` のPDF修正のみで、車両二種Topic 21との競合なし。
- 直近の車両二種worker成果を重複作成せず、指定された次工程の練習PDFだけを版面化した。

## 次工程
Topic 21の解説画像PowerPointを作る。固定5問・6答案要素、一次8問＋二次4問、問題・正答・数式・仮定値、SPEC固定8項目・3可視化を変更しない。PowerPoint完成後にclean blind候補固定へ進む。
