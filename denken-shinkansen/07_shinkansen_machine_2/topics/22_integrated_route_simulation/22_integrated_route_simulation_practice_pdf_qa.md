# Topic 22 練習PDF QA

更新日: 2026-09-20

対象: `topics/22_integrated_route_simulation/22_integrated_route_simulation_practice.pdf`

## reconcile
- 最新main上の練習source `83982cd7c2f48e7ec53fdb3bf136d9a8b01254fe` を正本としてPDF化し、問題・正答・解説の技術内容は変更していない。
- 固定EXAM_ALIGNMENTは一次4問＋二次2問、計6問・16答案要素のまま変更していない。
- 練習sourceは一次試験型10問＋二次試験型5問、合計15問。
- 数値は教材用仮定値のみ。未確認実車・実路線値の真値化、系列SPEC外の新規制御方式・車両仕様追加、固定公式過去問の個別正答保存は追加していない。

## 現行練習PDF
- A4縦・2ページ・2段組。
- canonical source blob: `83982cd7c2f48e7ec53fdb3bf136d9a8b01254fe`
- PDF Git blob: `42c4b6d5b6454705a71882ae8c33fd270b448655`
- PDF SHA-256: `b49af48fd4163dae485961d1f715760d7884353d743ff7312eb291f15bdb7a1a`
- PDF size: `13146 byte`

## 表示QA
- Poppler 200 dpiで全2ページをPNGレンダリング: `2 / 2 PASS`。
- 全ページ寸法: `1654x2339 px`。
- `pdftocairo` 160 dpiでも全2ページをレンダリング: `2 / 2 PASS`。全ページ `1323x1871 px`。
- word bboxのページ外はみ出し: `0件`。
- bbox最小余白: `14.27 pt`。
- 異常な黒塗り領域: `0件`。200 dpi黒画素率は page 1 `0.01901`、page 2 `0.01622`。

判定: `PASS`。

## 文字抽出QA
- `pdftotext -layout` 成功。
- Unicode置換文字: `0件`。
- `(cid:)`: `0件`。
- `問1`〜`問15` の見出しを全件抽出確認。
- 主要数値 `98.6`、`40`、`1800`、`0.05`、`11.5`、`54.0`、`0.531`、`98.63`、`768`、`4584`、`162.1`、`0.5989`、`94.8`、`1896`、`1998.7`、`-0.0542`、`2.40` を抽出確認。

判定: `PASS`。

## 数値・論理QA
- 問1: `5400/(5400+40+36)=0.986121...` → `98.6 % / PASS`。
- 問2: `sqrt(36/100)=0.60 / PASS`。
- 問4: `0.020/(1/2000)=40 / PASS`。
- 問5: `n_s=1800 min^-1, s=0.05 / PASS`。
- 問6: `ω_s=157.0796 rad/s, T=11.459 kN·m / PASS`。
- 問7: `n_s=1200 min^-1, s=-0.05`、発電機運転側 `PASS`。
- 問8: `v=54.0354 m/s=194.527 km/h / PASS`。
- 問9: `F_tr=174.419 kN, a=0.531395 m/s² / PASS`。
- 問10: `T(s)=(2s+1)/(s^2+3s+1) / PASS`。
- 問11: `P_out=5.40 MW, P_cu=45 kW, P_loss=75 kW, η=0.986301, P_in=5.475 MW / PASS`。
- 問12: `n_s=1600, s=0.05, P_2=768 kW, P_cu2=38.4 kW, P_m=729.6 kW, T=4583.66 N·m`。二経路一致 `PASS`。
- 問13: `n_w=1000, v=45.0295 m/s=162.106 km/h, F_tr=111.628 kN, a=0.366512 m/s² / PASS`。
- 問14: 極 `-0.381966, -2.618034`、`y(0.50)=0.598877 / PASS`。
- 問15: `u=-0.20 Hz, f_inv=94.8 Hz, n_s=1896, n_m=1998.690, s=-0.054161`、回生電力 `2.40 MW`、消費電力 `0 MW / PASS`。
- 一次10問の正答一意性と二次5問の途中式・単位・検算はcanonical sourceの品質ゲートを維持。
- 固定一次4問＋二次2問・16答案要素: `16 / 16 COVERED`。

## 判定
`PASS / topic_22_practice_pdf_complete / IN_PROGRESS`

## 次工程
Topic 22 解説画像PowerPoint source。固定EXAM_ALIGNMENTは変更せず、独立過去問再解答は全成果物完成後に行う。
