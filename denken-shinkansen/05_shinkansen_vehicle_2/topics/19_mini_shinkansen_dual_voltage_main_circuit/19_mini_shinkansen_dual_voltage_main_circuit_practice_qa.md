# 19 ミニ新幹線 複電圧主回路 — 練習PDF QA

更新日: 2026-09-19

## 対象
- PDF: `19_mini_shinkansen_dual_voltage_main_circuit_practice.pdf`
- source: `19_mini_shinkansen_dual_voltage_main_circuit_practice_source.md`

## 構成
- A4縦: `5ページ`
- 一次試験型: `8 / 8`、全問五肢択一
- 二次試験型: `4 / 4`、途中式・前提・単位・理由を収録
- 完全解説: `12 / 12`
- 問題・正答・数式のsourceからの仕様変更: `0件`

## 表示・抽出QA
- pdfium 180 dpiレンダリング: `5 / 5 PASS`
- pdftoppm 180 dpiレンダリング: `5 / 5 PASS`
- qpdf構造チェック: `PASS`
- 文字抽出: `PASS`
- 抽出置換文字 U+FFFD / `(cid:)`: `0件`
- 問題見出し抽出: `12 / 12 PASS`
- 主要式抽出: `2 / 2 PASS`
- 空白ページ: `0件`
- 外周クリップ安全域: `5 / 5 PASS`

## 試験対応・数値QA
- 固定公式過去問: `一次4問＋二次1問 / 5問`
- 固定答案要素: `一次7＋二次2 / 9`
- 固定答案要素の練習問題接続: `9 / 9 PASS`
- 数値・論理独立再計算: `12 / 12 PASS`（練習sourceの独立QAを変更せず継承）
- 一次正答一意性: `8 / 8 PASS`
- SPEC指定9項目: `9 / 9 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認ミニ新幹線実車値の真値化: `0件`
- H25負荷時タップ切換装置を実車採用方式として扱う記述: `0件`
- 完成後clean blind公式照合: `未実施 / PowerPoint完成後`

## ファイル
- PDF SHA-256: `d8549939d7256f8820b937ba1b54db88310e5e6ba847c30e5448403f6f34715c`
- PDF size: `17896 byte`

判定: `PASS / PRACTICE_PDF_COMPLETE`

## 次工程
Topic 19の解説画像PowerPointを作る。固定5問・9答案要素、SPEC指定9項目・3可視化、解説／練習の問題・正答・数式を変更しない。PowerPoint完成後にclean blind公式照合へ進む。
