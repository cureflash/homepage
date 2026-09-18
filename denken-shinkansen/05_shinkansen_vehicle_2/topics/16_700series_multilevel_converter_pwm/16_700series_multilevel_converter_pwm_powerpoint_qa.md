# Topic 16 解説画像PowerPoint QA

更新日: 2026-09-18

対象: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm_images.pptx`

## 成果物
- 形式: PowerPoint 16:9
- スライド数: 4
- 1枚目: 2レベル・理想3レベル出力波形、`dv/dt`、H29/R7型論点
- 2枚目: 高調波・位相差、多重化、H24一次型論点
- 3枚目: 素子電圧、`dv/dt`、H24二次型論点
- 4枚目: PWM、スイッチング周波数、損失、変換効率
- SHA-256: `3cae8061b27e955e541b3f2239422a6c2c040dea0b64b7c78fc09316ca64c0bc`
- Git blob SHA: `3fc2de5b0e93b9fc16021b414e1225413067504c`

## 表示・ファイルQA
- [x] LibreOffice headless PDF変換: `PASS`
- [x] 16:9・全4枚: `PASS`
- [x] 1600×900表示QA: `4 / 4 PASS`
- [x] スライド境界overflow: `0件`
- [x] 文字・数式・図の欠落、重なり、切れ: `0件`
- [x] PDF文字抽出のUnicode置換文字: `0件`
- [x] `(cid:)`: `0件`
- [x] PPTX ZIP整合性: `PASS`

## 共通仮定モデル・数値QA
- [x] `E_d=1.0 pu` をSPEC指定3可視化で共通使用
- [x] 2レベル出力: `±0.5 pu`
- [x] 理想3レベル出力: `-0.5, 0, +0.5 pu`
- [x] 電圧ステップ: 2レベル `E_d`、理想分担3レベル `E_d/2`
- [x] 素子電圧比較: 2レベル `1.0 pu`、理想分担側 `0.5 pu`
- [x] 同じ立上り時間なら `dv/dt` は電圧ステップ比に従う
- [x] 位相差合成式と `φ=π/8` の基本波・5次・7次比は解説sourceと一致
- [x] H24二次型 `V_v=E_dK/√2`、`V_v=V_L+jXI` は解説sourceと一致
- [x] `P_sw≈f_swE_sw`、`η=P_out/(P_out+P_loss)` は解説sourceと一致
- [x] 解説source/PDF・練習source/PDFの共通仮定モデル変更: `0件`

## 試験対応QA
- [x] 固定EXAM_ALIGNMENT: 一次4問＋二次1問、計5問 `変更なし`
- [x] 固定答案要素: 一次20＋二次6、計26 `変更なし`
- [x] R7 一次 機械 問4: スライド1・4
- [x] R4 一次 機械 問4: スライド4
- [x] H29 一次 機械 問3: スライド1
- [x] H24 一次 機械 問3: スライド2
- [x] H24 二次 機械・制御 問3: スライド3
- [x] 固定26答案要素の可視化・接続: `26 / 26 PASS`

## SPEC・境界QA
- [x] SPEC指定8項目: `8 / 8 covered`
- [x] SPEC指定3可視化: `3 / 3 PASS`
- [x] 3可視化は同一の教材用仮定モデルから生成
- [x] Topic 12のVVVF・V/f・誘導機速度制御追加: `0件`
- [x] Topic 13の回生・四象限運転追加: `0件`
- [x] Topic 17の素子別詳細損失比較追加: `0件`
- [x] `dv/dt`を固定公式過去問の直接出題論点として表記: `0件`
- [x] 未確認700系実車回路・レベル数・電圧・素子定格・キャリア周波数・効率の真値化: `0件`
- [x] 固定公式過去問の個別正答記号・完成済み答案保存: `0件`

判定: `PASS / POWERPOINT_COMPLETE`

次工程: blind再解答対象を開く前に、必須成果物・固定EXAM_ALIGNMENT・解説source・PDF/PPTX・練習問題を監査し、その後blind再解答候補を固定する。
