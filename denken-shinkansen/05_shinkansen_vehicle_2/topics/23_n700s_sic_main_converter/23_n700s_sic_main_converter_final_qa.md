# 23 N700S SiC主変換装置 — 最終QA

更新日: 2026-09-19

## 判定

`PASS / COMPLETED`

latest main `7e65d8545797599d372190a592e7362f320d7c7d`、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、最新 `STATUS.md` / `HANDOFF.md`、Topic 23のsource・PDF・PowerPoint・各QA・修正後clean blind候補固定と公式照合をreconcileした。

## 1. 上位仕様

- `MASTER_SPEC.md`: 電験二種では一次・二次を含む過去問対応を最優先し、教材だけで独立再解答できることを完了条件とする。
- `EXAM_ALIGNMENT_SPEC.md`: 二種は一次・二次を合わせて原則5問以上、二次対象論点では記述式を含め、完成後clean blindで再解答する。
- 系列 `SPEC.md` Topic 23: SiC / 導通損失 / スイッチング損失 / スイッチング周波数 / 変換効率 / 発熱 / 冷却 / 小型軽量化の8項目。指定3可視化は電流―導通損失、スイッチング周波数―総損失、条件をそろえたSi系素子との比較。

上位仕様: `PASS`。

## 2. 固定EXAM_ALIGNMENT

固定問題・答案要素は制作前確定から変更していない。

- R7 一次「機械」問4 `(1)〜(5)`: 5答案要素
- R4 一次「機械」問4 `(1)〜(5)`: 5答案要素
- R2 一次「機械」問2 `(1)〜(5)`: 5答案要素
- H24 一次「機械」問6 `(2),(3)`: 2答案要素
- H24 二次「機械・制御」問1 `(1)〜(6)`: 6答案要素
- 一次: `17答案要素`
- 二次: `6答案要素`
- 合計: `5問・23答案要素`
- 固定EXAM_ALIGNMENT変更: `0件`

固定EXAM_ALIGNMENT: `PASS`。

## 3. clean blind独立再解答

初回clean blindは `21 / 23` で、R2一次問2 `(2),(4)` のみFAILだった。候補ファイルは後編集せず、教材側だけを補強した。

補強内容:

1. 電圧矢印極性→ON/OFF状態表→時間平均の順を明示し、固定R2では `V=D V_dc` とした。
2. 固定R2図3の `p(t)` 三角波を積分し、`W_off=(1/2)V_dc I_dc T_2` とした。
3. `VI t_s/6` は相補的直線ランプ条件に限定した。
4. 一般式 `E_sw=∫v(t)i(t)dt` は変更していない。

修正後候補は公式照合前に commit `5d28e38e9151edc9d2ca3e309783aea2e6b9272f` で固定。公式照合結果:

- R7一次: `5 / 5 PASS`
- R4一次: `5 / 5 PASS`
- R2一次: `5 / 5 PASS`
- H24一次: `2 / 2 PASS`
- H24二次: `6 / 6 PASS`
- 一次: `17 / 17 PASS`
- 二次: `6 / 6 PASS`
- 合計: `23 / 23 PASS`
- 初回候補後編集: `0件`
- 修正後候補固定後編集: `0件`

clean blind品質ゲート: `PASS`。

## 4. 必須成果物

GitHub正本で実在を確認した。

- 主source: `23_n700s_sic_main_converter.md`
- 解説source: `23_n700s_sic_main_converter_explanation_source.md`
- 解説PDF / QA
- 練習source
- 練習PDF / QA
- 解説画像PowerPoint / QA
- 初回clean blind候補・公式照合記録
- 修正後clean blind候補固定・候補固定QA・公式照合記録

必須成果物: `PASS`。

## 5. 成果物QA

### 解説source / PDF

- 固定5問・23答案要素: `23 / 23 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 3段階例題: `3 / 3 PASS`
- clean blind補強2点: `2 / 2 PASS`
- 解説PDF: A4縦 `5 pages`
- PDFium / Poppler: `5 / 5 PASS`
- クリッピング・文字重なり・破損グリフ: `0件`

### 練習source / PDF

- 一次試験型: `8 / 8`
- 五肢択一: `8 / 8`
- 二次記述式: `4 / 4`
- 全問題・完全解説: `12 / 12`
- 数値・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定23答案要素: `23 / 23 covered`
- 練習PDF: A4縦 `5 pages`
- PDFium / pdftoppm: `5 / 5 PASS`
- 既存12問の問題数・正答・数値変更: `0件`

### PowerPoint

- 16:9: `6 slides`
- SHA-256: `dc5babab362325cb00ca462660cd7f9b6c1cd1f6ef6f1e36c62ffe55395ae70c`
- python-pptx再オープン / PPTX ZIP: `PASS / PASS`
- LibreOffice PDF変換 / pdftoppm表示: `6 / 6 PASS`
- geometry overflow: `0件`
- 固定23答案要素: `23 / 23 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- R2読図補強2点: `2 / 2 PASS`

成果物QA: `PASS`。

## 6. SPEC・実車値境界

- SiC材料物性、MOSFET内部構造、ゲート抵抗最適化、EMI、詳細熱流体設計の新規主題化: `0件`
- H24一次問6の照明固有 `(1),(4),(5)` の追加: `0件`
- H24二次問1の直流機制御の独立主題化: `0件`
- N700S未公表 `V_on`, `R_on`, `E_on`, `E_off`, `f_s`, `T_j`, `R_th` の真値化: `0件`
- JR東海N700A比7%消費電力量低減をSiC単独効果へ読み替え: `0件`
- 富士電機20%軽量化をN700S車両全体の重量低減率へ拡張: `0件`
- 比較計算値は教材用仮定値として明示: `PASS`
- 固定SPEC外追加: `0件`

SPEC・実車値境界: `PASS`。

## 7. 最終判定

- 技術内容: `PASS`
- 固定5問・23答案要素: `PASS`
- clean blind: `23 / 23 PASS`
- 必須成果物: `PASS`
- PDF/PPTX QA: `PASS`
- SPEC固定8項目・指定3可視化: `PASS`
- 実車値／仮定値境界: `PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 一般式変更: `0件`
- 仕様外追加: `0件`
- 新たなexact blocker: `0件`

Topic 23 は `completed`。完成数は `23 / 39`。次の未完了テーマは Topic 24「N700S 主電動機設計の比較」。次工程は制作前EXAM_ALIGNMENT。
