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
- pdftoppm 1600×900生成: `4 / 4 PASS`
- スライド外周クリップ: `0件`
- PDF文字抽出: `PASS`
- Unicode置換文字 / `(cid:)`: `0件 / 0件`
- 1600×900表示目視QA: `4 / 4 PASS`

## 内容QA
1. Slide 1: 回転系 `P=Tω`、`ω=2πN/60`、車両系 `P=Fv`、編成 `P_train=n_m P_m` を接続し、定トルク・定出力、電流制限・電圧制限を切り分けて可視化。
2. Slide 2: SPEC指定「速度―けん引力」。学習用仮定値 `n_m=24`、`P_m0=300 kW`、`v_b=120 km/h` から、60/120/180/240/300 km/hで `216/216/144/108/86.4 kN` を表示。
3. Slide 3: SPEC指定「速度―主電動機出力」。`v<=v_b` で `P_m(v)=P_m0(v/v_b)`、`v>=v_b` で `P_m(v)=P_m0` とし、`150/300/300/300/300 kW` を表示。編成側 `P_train=n_mP_m` に接続。
4. Slide 4: SPEC指定「速度―編成必要出力」。`R(v)=40000+20v^2 [N]`、`P_req=R(v)v` により `0.759/2.074/4.500/8.593/14.907 MW` を表示し、学習用利用可能出力 `3.6/7.2/7.2/7.2/7.2 MW` と比較。固定過去問5問・6答案要素を明示。

## 数値・論理QA
- `P=Tω`、`ω=2πN/60`、`T=P/ω`: `PASS`
- `P=Fv`、`F=P/v`、`km/h -> m/s` を `/3.6`: `PASS`
- `P_train=n_mP_m`: `PASS`
- 速度―けん引力 5点: `5 / 5 PASS`
- 速度―主電動機出力 5点: `5 / 5 PASS`
- 速度―編成必要出力 5点: `5 / 5 PASS`
- 利用可能出力補助線 5点: `5 / 5 PASS`
- 240 km/hで `P_req=8.593 MW > P_train=7.2 MW`: `PASS`
- 300 km/hで `P_req=14.907 MW > P_train=7.2 MW`: `PASS`

## 過去問対応品質ゲート
- 固定過去問: `一次2問＋二次3問 / 計5問 / 変更なし`
- 固定答案要素: `一次3＋二次3 / 計6 / 変更なし`
- 固定5問・6答案要素への可視化・接続: `6 / 6 PASS`
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
- 公式解答・標準解答の個別正答参照・保存: `0件`
- 完成後clean blind公式照合: `未実施 / 次工程`
- 判定: `PASS / POWERPOINT_COMPLETE`

## ファイル識別
- size: `39833 bytes`
- SHA-256: `25b62bfb791c51ede76394bf5b72c1e23b440b8f26a7669ded80063fcdf5fa63`

## 次工程
固定5問・6答案要素を教材だけでclean blind再解答し、公式解答・標準解答を先に見ず候補答案を固定する。固定EXAM_ALIGNMENT、SPEC範囲、既存PDF/PPTX、練習問題・正答・数式・学習用仮定値は変更しない。
