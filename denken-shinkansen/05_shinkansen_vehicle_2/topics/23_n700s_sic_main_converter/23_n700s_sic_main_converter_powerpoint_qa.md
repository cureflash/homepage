# Topic 23 N700S SiC主変換装置 - 解説画像PowerPoint QA

更新日: 2026-09-19

判定: `PASS / POWERPOINT_COMPLETE`

## reconcile

latest main、最新 `STATUS.md` / `HANDOFF.md`、直近コミット、Topic 23既存成果物を再確認した。作業中に別workerが `1be4d1fdbe49215316c2b9f706f5d5731d79f73b` でTopic 23練習PDF＋QAを完成していたため、その成果物は上書き・重複生成せず、次の安全な工程である解説画像PowerPoint＋QAへ進んだ。

Topic 21 H26二次「機械・制御」問1(4)の `48.0 / 48.1 N·m` 差は、既存診断どおり公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として扱い、一般式 `P=Tω`、`ω=2πN/60` は変更していない。

## 対象

- explanation source: `23_n700s_sic_main_converter_explanation_source.md`
- practice source: `23_n700s_sic_main_converter_practice_source.md`
- PowerPoint: `23_n700s_sic_main_converter_images.pptx`
- 形式: 16:9、6枚
- ファイルサイズ: `44,295 bytes`
- SHA-256: `cd5b97ff3fb1ec76fb9c3ddbd078ceb5484cdc103be40408d1179ffeb28dd504`

## 構造・表示QA

- python-pptx再オープン: `6 / 6 PASS`
- PPTX ZIP整合性: `PASS`
- スライド外geometry overflow: `0`
- LibreOffice PDF変換: `PASS / 6 pages`
- PDFページ寸法: `960.009 × 540 pt`
- pdftoppm 150 dpi: `6 / 6 PASS`
- 目視contact sheet: `6 / 6 PASS`
- 文字・図のクリッピング: `0`
- 文字重なり: `0`
- 日本語欠落グリフ: `0`
- `pdftotext` replacement character: `0`
- `pdftotext` `(cid:)`: `0`

## 内容QA

1. 第二種で問われる「損失」を分解する
   - `p=vi`
   - `P_cond=V_on I D`
   - `P_cond=I_rms^2 R_on`
   - `P_sw=f_s(E_on+E_off)`
   - IGBT / MOSFET / 還流経路 / PWM / スイッチング周波数を損失・効率・発熱へ接続
2. H24二次への橋渡し
   - `V_a=E+R_a I_a`
   - 一定磁束で `E∝n`
   - `V_a=D V_state1+(1-D)V_state2`
   - `0≤D≤1` から運転範囲へ接続
   - IGBT・ダイオードの導通損失を通流率で分解
   - H24橋渡しでありN700S実機回路値ではないことを明示
3. 損失低減→発熱低減→許容熱抵抗増大→冷却要求緩和→小型軽量化の因果
   - `T_j≈T_a+P_loss R_th`
   - `R_th,max=(T_j,max-T_a)/P_loss`
   - JR東海7%値と富士電機20%値の適用境界を明示
4. 可視化A 電流-導通損失
   - 学習仮定 `D=0.60`, Si `V_on=2.0 V`, SiC `1.4 V`
   - 200 Aで `240 W / 168 W`
5. 可視化B スイッチング周波数-総損失
   - Si: `300, 360, 480, 600, 720 W`
   - SiC: `193, 218, 268, 318, 368 W`
   - 横軸目盛を `0.5, 1, 2, 3, 4 kHz` に固定して再生成済み
6. 可視化C 同条件Si系・SiC系比較
   - 条件 `I=200 A`, `D=0.60`, `f_s=4 kHz`, `R_th=0.05 K/W`
   - Si: 導通 `240 W`, switching `480 W`, total `720 W`, `ΔT=36.0 K`
   - SiC: 導通 `168 W`, switching `200 W`, total `368 W`, `ΔT=18.4 K`

## 過去問対応品質ゲート

固定5問は変更していない。

- R7 一次「機械」問4 `(1)〜(5)`: `5 / 5 covered`
- R4 一次「機械」問4 `(1)〜(5)`: `5 / 5 covered`
- R2 一次「機械」問2 `(1)〜(5)`: `5 / 5 covered`
- H24 一次「機械」問6 `(2),(3)`: `2 / 2 covered`
- H24 二次「機械・制御」問1 `(1)〜(6)`: `6 / 6 covered`

- 一次答案要素: `17 / 17 covered`
- 二次答案要素: `6 / 6 covered`
- 合計答案要素: `23 / 23 covered`

## SPEC品質ゲート

固定8項目:

- SiC: `PASS`
- 導通損失: `PASS`
- スイッチング損失: `PASS`
- スイッチング周波数: `PASS`
- 変換効率: `PASS`
- 発熱: `PASS`
- 冷却: `PASS`
- 小型軽量化: `PASS`

`8 / 8 covered`

固定3可視化:

1. 電流-導通損失: `PASS`
2. スイッチング周波数-総損失: `PASS`
3. 条件をそろえたSi系素子との比較: `PASS`

`3 / 3 covered`

## 境界QA

- 固定問題差替え: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 公式過去問本文の複製: `0件`
- 固定SPEC外追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- JR東海N700A比7%値のSiC単独効果化: `0件`
- 富士電機20%軽量化のN700S車両全体への誤拡張: `0件`
- H24二次橋渡しをTopic 23独立主題へ拡張: `0件`
- 新たなexact blocker: `0件`

## 次工程

Topic 23教材だけで固定5問・23答案要素をclean blind独立再解答し、候補固定後に公式解答・標準解答と照合する。
