# Topic 23 N700S SiC主変換装置 - 解説画像PowerPoint QA

更新日: 2026-09-19

判定: `PASS / POWERPOINT_RESYNC_COMPLETE`

## reconcile

latest main `e4c5a1a1618a96e548fe70f8bf7dcb48cf9b873b`、最新 `STATUS.md` / `HANDOFF.md`、直近車両二種worker成果をreconcileした。解説PDF・練習PDFはclean blind補強後の再同期が完了しているため重複生成せず、`REGENERATE_REQUIRED` だったPowerPointだけを既存6枚構成の範囲で再生成した。

Topic 21 H26二次「機械・制御」問1(4)の `48.0 / 48.1 N·m` 差は、既存診断どおり過去問固有丸め差として扱い、一般式 `P=Tω`、`ω=2πN/60` は変更していない。

## 対象

- explanation source: `23_n700s_sic_main_converter_explanation_source.md`
- practice source: `23_n700s_sic_main_converter_practice_source.md`
- PowerPoint: `23_n700s_sic_main_converter_images.pptx`
- 形式: 16:9、6枚
- ファイルサイズ: `12,944 bytes`
- SHA-256: `dc5babab362325cb00ca462660cd7f9b6c1cd1f6ef6f1e36c62ffe55395ae70c`

## clean blind補強2点の同期

1. R2一次「機械」問2 `(2)`
   - 「矢印極性 → 状態表 → 平均値」の順を明示
   - `S ON: v=V_dc`, `S OFF・還流: v=0`
   - `V={V_dc·DT+0·(1-D)T}/T=D V_dc` を明示
2. R2一次「機械」問2 `(4)`
   - `p(t)=i_s v_s` の三角波を図示
   - `W_off=(1/2)V_dc I_dc T_2` を明示
   - `VI t_s/6` は相補的な直線ランプという別条件だけに限定

一般式 `E_sw=∫v(t)i(t)dt` は変更していない。

## 構造・表示QA

- python-pptx再オープン: `6 / 6 PASS`
- PPTX ZIP整合性: `PASS`
- スライド外geometry overflow: `0`
- LibreOffice PDF変換: `PASS / 6 pages`
- PDFページ寸法: `960.009 × 540 pt`
- pdftoppm 120 dpi: `6 / 6 PASS`
- contact sheet目視: `6 / 6 PASS`
- 文字・図のクリッピング: `0`
- 文字重なり: `0`
- `pdftotext` replacement character: `0`
- `pdftotext` `(cid:)`: `0`

## 内容QA

6枚構成は維持した。

1. 第二種で問われる損失分解
   - `p=vi`
   - `P_cond=V_on I D`
   - `P_cond=I_rms^2 R_on`
   - `P_sw=f_s(E_on+E_off)`
   - 電圧形インバータ / IGBT / MOSFET / 逆並列ダイオード / PWM / スイッチング周波数
   - オン損失 / 漏れ電流 / スイッチング損失 / `T=1/f_s` / ソフトスイッチング
   - R2 `(4)` の `p(t)` 三角波を追加
2. H24二次への橋渡し
   - 可逆チョッパ / IGBT・ダイオード電圧降下 / 電機子電流 / 通流率
   - `V_a=E+R_a I_a`
   - 一定磁束で `E∝n`
   - `V_a=D V_state1+(1-D)V_state2`
   - `0≤D≤1`
   - IGBT・ダイオードの導通損失を通流率で分解
   - R2 `(2)` の極性・状態表・平均値を追加
3. 損失低減→発熱低減→許容熱抵抗増大→冷却要求緩和→冷却簡素化→小型軽量化
   - `T_j≈T_a+P_loss R_th`
   - `R_th,max=(T_j,max-T_a)/P_loss`
   - JR東海7%値と富士電機20%値の適用境界を維持
4. 可視化A 電流-導通損失
   - 学習仮定 `D=0.60`, Si `V_on=2.0 V`, SiC `1.4 V`
   - 200 Aで `240 W / 168 W`
5. 可視化B スイッチング周波数-総損失
   - Si: `300, 360, 480, 600, 720 W`
   - SiC: `193, 218, 268, 318, 368 W`
   - 横軸 `0.5, 1, 2, 3, 4 kHz`
6. 可視化C 同条件Si系・SiC系比較
   - `I=200 A`, `D=0.60`, `f_s=4 kHz`, `R_th=0.05 K/W`
   - Si: 導通 `240 W`, switching `480 W`, total `720 W`, `ΔT=36.0 K`
   - SiC: 導通 `168 W`, switching `200 W`, total `368 W`, `ΔT=18.4 K`

## 過去問対応品質ゲート

固定5問は変更していない。

- R7 一次「機械」問4 `(1)〜(5)`: `5 / 5 covered`
- R4 一次「機械」問4 `(1)〜(5)`: `5 / 5 covered`
- R2 一次「機械」問2 `(1)〜(5)`: `5 / 5 covered`
- H24 一次「機械」問6 `(2),(3)`: `2 / 2 covered`
- H24 二次「機械・制御」問1 `(1)〜(6)`: `6 / 6 covered`

一次答案要素 `17 / 17`、二次答案要素 `6 / 6`、合計 `23 / 23 covered`。

## SPEC品質ゲート

固定8項目: SiC / 導通損失 / スイッチング損失 / スイッチング周波数 / 変換効率 / 発熱 / 冷却 / 小型軽量化 = `8 / 8 covered`。

固定3可視化: 電流-導通損失 / スイッチング周波数-総損失 / 条件をそろえたSi系素子との比較 = `3 / 3 PASS`。

## 境界QA

- 固定問題差替え: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 一般式変更: `0件`
- 新規問題追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- JR東海N700A比7%値のSiC単独効果化: `0件`
- 富士電機20%軽量化のN700S車両全体への誤拡張: `0件`
- H24二次橋渡しの独立主題化: `0件`
- 新たなexact blocker: `0件`

## 次工程

初回clean blind候補は変更しない。補強後教材だけを使い、初回候補とは別ファイルで固定5問・23答案要素の修正後clean blind独立再解答を行い、候補固定後に公式解答と照合する。
