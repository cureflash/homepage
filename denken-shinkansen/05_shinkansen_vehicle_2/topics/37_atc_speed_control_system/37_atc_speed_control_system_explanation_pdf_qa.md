# Topic 37 ATC③ 速度制御系 — 解説PDF QA

更新日: 2026-09-21

判定: `PASS / EXPLANATION_PDF_COMPLETE`

## 正本・reconcile

- main base: `9936b2ff8e3a4acfa674558dd06eac6e2e6b837b`
- source: `37_atc_speed_control_system_explanation_source.md`
- source blob SHA: `8f4f64b2fcbd75c8f13c156b57ae564c33a719dd`
- source QA: `37_atc_speed_control_system_explanation_source_qa.md`
- source QA blob SHA: `5f57ef0a04a90469c8d3d545eafefebc067c51d4`
- fixed EXAM_ALIGNMENT: `37_atc_speed_control_system.md`
- 既存Topic 37成果物をreconcileし、解説PDF・PDF QAの重複成果物がないことを確認してから生成した。

## PDF

- file: `37_atc_speed_control_system_explanation.pdf`
- SHA-256: `8b9a65616365ddbf7796982df62c3819dc850ef0cb3192effaa1f27de69e761b`
- file size: `9429 bytes`
- A4縦: `3頁`
- extracted text: `2605 chars`
- replacement character U+FFFD: `0件`

## 構文・表示QA

- Ghostscript nullpage parse/render: `PASS`
- Poppler `pdfinfo`: `PASS`
- Poppler `pdftotext -layout`: `PASS`
- PDFium render: `3 / 3 PASS`
- Poppler render: `3 / 3 PASS`
- visual inspection: `3 / 3 PASS`
- clipped text / overlap / black square / broken glyph: `0件`

`qpdf` は実行環境に未導入のため未実施。代わりにGhostscript parse、Poppler、PDFiumの独立系統で構文・描画を確認した。

## 固定過去問ゲート

PDF本文に固定5問を差し替えず接続した。

1. R4一次「機械」問7 — `5 / 5`
2. R7二次「機械・制御」問4 — `5 / 5`
3. R6二次「機械・制御」問4 — `5 / 5`
4. R4二次「機械・制御」問4 — `5 / 5`
5. R3二次「機械・制御」問4 — `5 / 5`

- 一次: `5 / 5 connected`
- 二次: `20 / 20 connected`
- 合計: `25 / 25 connected`
- 主題外二次問題の件数合わせ: `0件`

抽出テキストで固定5問ラベル、`25/25`、主要最終値 `0<K<16.4`、`0<K<3`、`0<K<4` を再確認した。

## SPEC固定項目QA

PDF本文で以下8項目を確認。

- 速度検出
- 目標速度
- 伝達関数
- ブロック線図
- 応答
- 安定性
- ブレーキ制御
- フェイルセーフ

判定: `8 / 8 PASS`。

## 系列SPEC固定計算・グラフQA

1. 簡略速度制御系のステップ応答
   - `T(s)=4/(2s+5)`
   - `y(t)=0.8(1-e^{-2.5t})`
   - 代表値 `0.000, 0.315, 0.571, 0.734, 0.795`
   - グラフ掲載: `PASS`

2. 制動指令―速度応答
   - `A/U_b=a_max/(tau_b s+1)`
   - `Delta V/U_b=-a_max/[s(tau_b s+1)]`
   - 教材仮定値 `v0=80 m/s`, `a_max=0.8 m/s^2`, `tau_b=1.5 s`
   - 代表値を表で掲載
   - グラフ掲載: `PASS`

判定: `2 / 2 PASS`。

両モデルとも教材用仮定モデルであり、実車ATC・ブレーキ装置の実値として記述していない。

## 3段階例題QA

- 基礎例題: 一次遅れ閉ループ — `PASS`
- 本試験標準例題: R7型 — `PASS`
- 複合・ひっかけ例題: 三次系ラウス安定範囲 — `PASS`

判定: `3 / 3 PASS`。

## 鉄道一次資料・境界QA

- JRTT一次資料で確認済みのATC一般原理のみ実車側へ使用: `PASS`
- ATS-Dxを新幹線ATC実装として使用: `0件`
- 未確認の実車速度検出方式、制御周期、制御器構造・ゲイン、実機伝達関数、ブレーキ則、減速度、遅れ時間、フェイルセーフ回路の真値化: `0件`
- Topic 38先取り: `0件`

## Topic 21固定注記QA

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有の丸め差という既存診断を維持した。

- 一般式 `P=Tω`: 変更なし
- `ω=2πN/60`: 変更なし
- Topic 37制御式への波及: `0件`

## 最終判定

- 固定5問・25答案要素: `25 / 25 connected`
- SPEC固定8項目: `8 / 8 PASS`
- 系列SPEC固定計算・グラフ: `2 / 2 PASS`
- 3段階例題: `3 / 3 PASS`
- 実車仮定値の真値化: `0件`
- Topic 38先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

次工程: Topic 37練習source作成＋独立source QA。固定EXAM_ALIGNMENT、一次・二次25答案要素、SPEC固定8項目、鉄道一次資料の境界を変更しない。
