# 20 N700系 フィードバック制御 — 練習PDF QA

更新日: 2026-09-19

## 対象
- source: `20_n700_feedback_control_practice_source.md`
- PDF: `20_n700_feedback_control_practice.pdf`

判定: `PASS / PRACTICE_PDF_COMPLETE`

## 構成
- A4縦: `6 pages`
- 一次試験型: `8 / 8`、全問五肢択一
- 二次試験型: `4 / 4`、途中式・前提・理由を収録
- 完全解説: `12 / 12`
- 問題・正答・数式のsourceからの仕様変更: `0件`

## 表示・抽出QA
- PDFium 180 dpiレンダリング: `6 / 6 PASS`
- pdftoppm 180 dpiレンダリング: `6 / 6 PASS`
- 両renderer画像寸法: `1489×2105 / 6 pages`
- PDF構造・開封: `PASS`
- 文字抽出: `PASS`
- 抽出置換文字 U+FFFD / `(cid:)`: `0件`
- 問題見出し抽出: `12 / 12 PASS`
- 空白ページ: `0件`
- 欠落グリフ・黒四角・重なり・クリップ: `0件 / 2 renderer visual check`

## 試験対応・数値QA
- 固定公式過去問: `一次1問＋二次4問 / 5問 / 変更なし`
- 固定答案要素: `一次1＋二次18 / 19`
- 固定答案要素の練習問題接続: `19 / 19 PASS`
- 数値・式・論理独立再計算: `12 / 12 PASS`（練習sourceの独立QAを保持）
- 一次正答一意性: `8 / 8 PASS`
- SPEC指定10項目: `10 / 10 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- ステップ応答: `G(s)=1/(s+1)`、`0≤t≤5 s`、`t=1 s`で`0.632`を再確認
- ゲイン変更: `K=0.5, 1, 2`、`t=0.5 s`で`0.176, 0.316, 0.518`を再確認
- 時定数変更: `T=0.5, 1, 2 s`、`t=0.5 s`で`0.632, 0.393, 0.221`を再確認
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定問題差替え: `0件`
- SPEC外追加: `0件`
- 未確認N700系実車制御値の真値化: `0件`
- 公式解答・標準解答の個別正答参照・保存: `0件`
- 完成後clean blind公式照合: `未実施 / PowerPoint完成後`

## ファイル
- PDF SHA-256: `290d4c157f9f6271ba490ae943c39074d410adc33f978be099789b1d7cb9f1c0`
- PDF size: `13081 byte`

## worker reconcile
- 練習source commit `4f7fc0ec9acb3f79aa7b83152adfd406a2a735e8` を引き継いだ。
- 作業開始時main HEAD `ea8fe8ce3aaa6e03c485303d636817fcb82d543b` は別系列 `06_power_2` の更新のみで、Topic 20成果物との競合はない。
- 練習PDF commit `dad1d08bada18be7e5dc1804ae58ff5004725298` を反映済み。
- 練習sourceを重複作成せず、次工程の練習PDFのみ実施した。

## 次工程
Topic 20の解説画像PowerPointを作る。固定5問・19答案要素、一次8問＋二次4問、問題・正答・数式、SPEC指定10項目・3可視化を変更しない。PowerPoint完成後にclean blind候補固定へ進む。