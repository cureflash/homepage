# 19 ミニ新幹線 複電圧主回路 — 解説PDF QA

更新日: 2026-09-19

対象: `19_mini_shinkansen_dual_voltage_main_circuit_explanation.pdf`

## 生成結果

- 判定: `PASS / EXPLANATION_PDF_COMPLETE`
- A4縦: `2 pages`
- encrypted: `no`
- file size: `7755 bytes`
- SHA-256: `ef9e5a2deab4af20bcd530df520f3fe852d897d9b48daf5cfb936348a7737cea`
- Git blob SHA: `3bd34c763a98bfc10a371e952cfed05b231a4cb8`

## 表示QA

- PyMuPDF open: `PASS`
- pdfium 180 dpi: `2 / 2 PASS`
- pdftoppm 180 dpi: `2 / 2 PASS`
- 欠落グリフ・黒四角・重なり・クリップ: `0件`
- テキスト抽出: `PASS`
- preflight: `non-embedded CID font warning only`
- 日本語表示: `pdfium / pdftoppm の二系統で確認済み`

## 数式・数値QA

主要式:
- `a=N1/N2=V1/V2=I2/I1`: `PASS`
- `V2=V1N2/N1,tap`: `PASS`
- `I1=Pout/(ηV1cosφ)`: `PASS`
- `Vo=DVd`: `PASS`

例題:
- 例題1: `a=5, V2=2 kV, I1=20 A, 双方200 kVA` — `PASS`
- 例題2: `N1=1000/800 turn, I1=800/1000 A, 比1.25` — `PASS`
- 例題3: `D=0.60/0.80` — `PASS`

可視化:
- 電源電圧―一次電流: `8/10/12.5/16/20 kV → 1000/800/640/500/400 A` — `PASS`
- タップ条件―二次電圧: `1250/1000/800 turn → 1.6/2.0/2.5 kV` — `PASS`
- 同一出力比較: `V1=1.00/0.80 p.u. → I1=1.00/1.25 p.u.` — `PASS`

## 過去問対応品質ゲート

固定EXAM_ALIGNMENTは変更していない。

- R5 一次 機械 問3 `(2)`: `1 / 1 covered`
- R5 一次 機械 問4 `(4)(5)`: `2 / 2 covered`
- R5 一次 電力 問6 `(3)`: `1 / 1 covered`
- H25 一次 電力 問2 `(1)(2)(3)`: `3 / 3 covered`
- R5 二次 機械・制御 問2 `(1)(2)`: `2 / 2 covered`
- 一次: `7 / 7 covered`
- 二次: `2 / 2 covered`
- 合計: `9 / 9 covered`

H25一次「電力」問2の負荷時タップ切換は一般原理としてのみ扱い、ミニ新幹線実車の採用方式とはしていない。

## SPEC品質ゲート

- SPEC指定9項目: `9 / 9 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 3段階例題: `3 / 3 PASS`
- SPEC外追加: `0件`
- 未確認ミニ新幹線実車値の真値化: `0件`
- 完成後clean blind公式照合: `未実施 / 必要成果物完成後に実施`

## 次工程

固定5問・9答案要素、SPEC指定9項目・3可視化を変更せず、Topic 19の練習sourceを作る。