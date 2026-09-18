# 18 E2系 50Hz・60Hzと磁束 — 練習PDF QA

更新日: 2026-09-19

## 対象
- PDF: `18_e2series_50hz_60hz_flux_practice.pdf`
- source: `18_e2series_50hz_60hz_flux_practice_source.md`

## 構成
- A4縦: `5ページ`
- 一次試験型: `8 / 8`、全問五肢択一
- 二次試験型: `4 / 4`、途中式・前提・単位・理由を収録
- 完全解説: `12 / 12`
- 問題・正答・数式のsourceからの仕様変更: `0件`

## 表示・抽出QA
- pdfium 180 dpiレンダリング: `5 / 5 PASS`
- pdftoppm 180 dpiレンダリング: `5 / 5 PASS`
- PDF open / preflight: `PASS`
- 文字抽出: `PASS`
- 抽出置換文字 U+FFFD: `0件`
- `(cid:)`: `0件`
- 一次・二次の問題見出し抽出: `12 / 12 PASS`
- 主要式抽出: `4 / 4 PASS`（下付き表現の結合下線を正規化して照合）
- 文字欠落・黒四角・重なり・クリップ: `0件`
- preflight注意: `HeiseiKakuGo-W5非埋込 / pdfium・pdftoppm表示および文字抽出はPASS`

## 試験対応・数値QA
- 固定公式過去問: `一次3問＋二次2問 / 5問`
- 固定答案要素の実効接続: `一次7＋二次8 / 15 / 15 PASS`
- 数値・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- SPEC指定7項目: `7 / 7 covered`
- SPEC指定3可視化の式系・条件との整合: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認E2系実車値の真値化: `0件`
- 完成後clean blind公式照合: `未実施 / PowerPoint完成後`

## 独立再計算内訳
- 一次1: `B_50/B_60=1.20` `PASS`
- 一次2: `E=1776 V` `PASS`
- 一次3: `Φ_60/Φ_50=5/6` `PASS`
- 一次4: `V=180 V` `PASS`
- 一次5: `N_s=1800 min^-1`, `ω_s=60π rad/s` `PASS`
- 一次6: `N_s=1200 min^-1`, `s=0.050`, `f_2=3.0 Hz` `PASS`
- 一次7: `f_inv=40 Hz`から`N_s=1200 min^-1` `PASS`
- 一次8: `1500 / 1440 / 60 min^-1 / 2.0 Hz / 0 min^-1` `PASS`
- 二次1: `7.51 mWb / 0.150 T / 9.01 mWb / 0.180 T / 2000 V` `PASS`
- 二次2: `1800 / 1710 / 90 min^-1 / 3.0 Hz / 90 / 1800 / 0 min^-1` `PASS`
- 二次3: `180 V / 900 min^-1 / 0.050 / 2.25 Hz` `PASS`
- 二次4: `A=B / C=0.833 p.u. / 40 Hz=1.25 p.u.` `PASS`

## ファイル
- PDF SHA-256: `100a7a93d2f0dec008b3c7e105c3c79b9e3d7a267e49562cb6bc8b46eefa63d1`

判定: `PASS / PRACTICE_PDF_COMPLETE`

## 次工程
Topic 18の解説画像PowerPointを作る。固定5問・15答案要素、SPEC指定7項目・3可視化、解説／練習の問題・正答・数式を変更しない。PowerPoint完成後にclean blind公式照合へ進む。