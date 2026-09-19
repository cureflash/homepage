# 26 E7・W7系 勾配条件を含む総合走行解析 — 解説PDF QA

更新日: 2026-09-20

判定: `PASS / EXPLANATION_PDF_COMPLETE`

## reconcile

最新main、系列 `STATUS.md` / `HANDOFF.md`、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、Topic 26制作前EXAM_ALIGNMENT、Topic 26解説source、直近の系列commitを再確認した。既存の「車両二種を進行」枠は解説source完了まで進んでおり、解説PDFは未作成だったため、重複せず次工程だけを実施した。

固定EXAM_ALIGNMENTは第二種一次4問・10答案要素＋二次1問・6答案要素の合計5問・16答案要素のまま変更していない。

## artifact identity

- path: `26_e7_w7_gradient_integrated_running_analysis_explanation.pdf`
- canonical blob SHA: `0d6c373ca4dc1edcc004be32666ac40f8607b6b4`
- file size: `10,902 bytes`
- SHA-256: `304095fecec8fe3d2e46eda8fb020c3e48a2164179eb204b5e318b93dc591b17`
- A4縦: `3 pages`
- PDF `startxref`: `10427 < 10902` — 構造範囲内

## 表示・構造QA

- PDFium 180 dpi: `3 / 3 PASS`
- Poppler 180 dpi: `3 / 3 PASS`
- `pdftotext`: `PASS`
- 置換文字 `�`: `0件`
- 文字・表・グラフのクリッピング: `0件`
- 文字重なり: `0件`
- 日本語欠落グリフ: `0件`
- 黒四角・破損グリフ: `0件`
- SPEC指定3可視化: `3 / 3 PASS`
  - 勾配―必要けん引力
  - 速度―必要出力
  - 勾配別走行条件比較

PDFiumとPopplerの双方で3ページを目視確認し、本文・3グラフの欠落やクリッピングは確認されなかった。

## 数値・論理独立再計算

教材用仮定値 `m=4.00×10^5 kg`, `g=9.8 m/s^2`, `R_run(v)=30+0.008v^2 [kN]` を独立再計算した。

- `+30‰`: `R_g=117.6 kN` — PASS
- `v=80 m/s`: `R_run=81.2 kN` — PASS
- `+30‰, 80 m/s`: `F_req=198.8 kN` — PASS
- 車輪側必要出力: `P_w=15.904 MW` — PASS
- `eta=0.90`: `P_in=17.671... MW ≈17.67 MW` — PASS
- `-30‰, 80 m/s`: `F_req=-36.4 kN`, `B_req=36.4 kN` — PASS
- 機械制動電力: `P_brake=2.912 MW` — PASS
- `eta_reg=0.85`: 返送電力上限 `2.4752 MW ≈2.48 MW` — PASS
- `P_av=20 MW` の教材用境界: `v=92.5435... m/s ≈92.54 m/s` — PASS

## 過去問対応品質ゲート

- 固定過去問: `5 / 5 covered`
- 一次答案要素: `10 / 10 covered`
- 二次答案要素: `6 / 6 covered`
- 合計答案要素: `16 / 16 covered`
- SPEC必須7項目: `7 / 7 covered`
- 3段階例題: `3 / 3 PASS`

固定答案要素のPDF内確認:

1. R7二次 問2: 滑り、定格トルク、二次銅損、固定損、負荷変化時速度、負荷変化時出力 = `6 / 6`
2. H26一次 問5: 始動トルク要求、定加速域、定出力域 = `3 / 3`
3. H25一次 問3: `P=Tω`, `ω=2πN/60` = `1 / 1`
4. R5一次 問2: 制動時の機械→電気エネルギー変換、回生ブレーキ、鉄道への接続 = `3 / 3`
5. H27一次 問3: 直流→交流逆変換、他の力行車による消費、受電側なしの回生失効 = `3 / 3`

## 境界QA

- 固定EXAM_ALIGNMENT変更: `0件`
- 公式過去問本文の複製: `0件`
- 未確認E7・W7編成質量・主電動機出力・編成出力・実けん引力・実走行抵抗係数・実効率・回生限界の真値化: `0件`
- 実車事実: JR東日本公式資料で確認済みの北陸新幹線30‰急勾配とE7系ブレーキ性能向上までに限定
- 3可視化の質量・走行抵抗式・効率・利用可能出力: `教材用仮定値` と明示
- Topic 21 H26二次 問1(4) `48.0 / 48.1 N·m` の過去問固有丸め注記: `維持`
- 一般式 `P=Tω`, `ω=2πN/60` 変更: `0件`
- SPEC外主題追加: `0件`
- clean blind用個別正答の先取り保存: `0件`
- exact blocker: `0件`

## 完成判定

Topic 26解説PDFは `PASS / EXPLANATION_PDF_COMPLETE`。Topic 26全体はまだ `completed` ではなく、完成数は `25 / 39` のまま。

次工程: 固定EXAM_ALIGNMENTと解説PDFを入力としてTopic 26練習sourceを作成し、一次試験型＋二次記述式の問題について数値・論理を独立再計算する。
