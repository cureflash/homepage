# 21 高速域の速度・けん引力・出力制御 — 解説画像PowerPoint QA

更新日: 2026-09-19

## 対象
- PowerPoint: `21_high_speed_tractive_force_output_control_images.pptx`
- 固定EXAM_ALIGNMENT: `21_high_speed_tractive_force_output_control.md`
- 解説source: `21_high_speed_tractive_force_output_control_explanation_source.md`
- 練習source: `21_high_speed_tractive_force_output_control_practice_source.md`

## 構造・表示QA
- 画面比: `16:9`
- スライド数: `4枚`
- python-pptx open: `PASS / 4 slides`
- PPTX ZIP整合性: `PASS`
- LibreOffice PDF変換: `PASS / 4ページ`
- pdftoppm 1601×900生成: `4 / 4 PASS`
- スライド外周クリップ: `0件`
- PDF文字抽出: `PASS`
- 表示目視QA: `4 / 4 PASS`

## 内容QA
1. Slide 1: `P=Tω`、`ω=2πN/60`、`P=Fv`、`P_train=n_mP_m`、定トルク・定出力、電流制限・電圧制限を接続。H26一次問5 `(4),(5)`、H25一次問3 `(1)`、二次R7/R1/H26の固定答案要素への接続も明示。
2. Slide 2: SPEC指定「速度―けん引力」。60/120/180/240/300 km/hで `216/216/144/108/86.4 kN` を棒可視化。
3. Slide 3: SPEC指定「速度―主電動機出力」。`150/300/300/300/300 kW` を棒可視化し、`v_b=120 km/h`、低速側 `P_m∝v`、高速側 `P_m=300 kW` を明示。
4. Slide 4: SPEC指定「速度―編成必要出力」。`P_req=R(v)v`、`R(v)=40000+20v^2 [N]`、必要出力 `0.759/2.074/4.500/8.593/14.907 MW` と利用可能出力 `3.6/7.2/7.2/7.2/7.2 MW` を比較。共通仮定 `n_m=24`、`P_m0=300 kW`、`v_b=120 km/h` は学習用で実車値ではないと明示。

## 数値・論理QA
- `P=Tω`、`ω=2πN/60`、`T=P/ω`: `PASS`
- `P=Fv`、`F=P/v`: `PASS`
- `P_train=n_mP_m`: `PASS`
- 速度―けん引力 5点: `5 / 5 PASS`
- 速度―主電動機出力 5点: `5 / 5 PASS`
- 速度―編成必要出力 5点: `5 / 5 PASS`
- 利用可能出力 5点: `5 / 5 PASS`
- 240 km/hで `P_req=8.593 MW > P_train=7.2 MW`: `PASS`
- 300 km/hで `P_req=14.907 MW > P_train=7.2 MW`: `PASS`

## 過去問対応品質ゲート
- 固定過去問: `一次2問＋二次3問 / 計5問 / 変更なし`
- 固定答案要素: `一次3＋二次3 / 計6 / 変更なし`
- 固定5問・6答案要素への接続: `6 / 6 PASS`
- H26一次 問5 `(4),(5)` の必要最小条件: `2 / 2 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 一次8問＋二次4問の問題・正答・数式変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- V/f・すべり・等価回路の新規主題化: `0件`
- 加速抵抗・勾配抵抗・加速曲線、損失・熱、詳細ベクトル制御、粘着・再粘着制御、空力設計の追加: `0件`
- 未確認N700系等の実車値の真値化: `0件`
- `P=Fv`・走行抵抗を固定過去問の直接出題とする記載: `0件`
- 判定: `PASS / POWERPOINT_COMPLETE`

## H26二次 問1(4) 過去問固有注記の同期判定

判定: `SYNC_NOT_REQUIRED`

- 解説source / 解説PDFには、公式標準解答 `48.1 N·m` と高精度 `π` による `48.0 N·m` の差が、公式側の `π=3.14` 相当の数値処理による当該過去問固有の丸め差であることを注記済み。
- PowerPointは一般式 `P=Tω`、`ω=2πN/60` と速度・けん引力・出力の一般関係を示す4枚であり、H26二次 問1(4) の `I2'`、`48.067`、`48.0 / 48.1 N·m` の数値計算自体は掲載していない。
- よって、過去問固有の丸め注記を単独で追加すると一般式の説明と過去問固有処理を混同するため、PPTX本体は変更しない。
- 一般式、固定5問・6答案要素への接続、SPEC指定3可視化は現状のまま保持する。
- PowerPoint変更: `0件`

## ファイル識別
- size: `4627 bytes`
- Git blob SHA: `6441ba5b38db0b09cad80231e14208411076b2bd`
- SHA-256: `ae97d038f89335e43d240299e9ae9c214c8de9510cb1807cd32732da36a3a81b`

## 後続工程
H26二次 問1(4) の教材注記反映後状態でclean blind再確認を行う。公式照合では公式標準解答 `48.1 N·m` を正本として扱い、一般式は変更しない。
