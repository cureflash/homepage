# 17 パワー半導体の損失比較 — 解説画像PowerPoint QA

更新日: 2026-09-19

## 対象

- PowerPoint: `17_power_semiconductor_loss_comparison_images.pptx`
- 固定EXAM_ALIGNMENT: `17_power_semiconductor_loss_comparison.md`
- 解説source: `17_power_semiconductor_loss_comparison_explanation_source.md`

## 構造・表示QA

- 画面比: `16:9`
- スライド数: `4枚`
- LibreOffice PDF変換: `PASS / 4ページ`
- python-pptx open: `PASS / 4 slides`
- PPTX ZIP整合性: `PASS`
- 1600×900表示QA: `4 / 4 PASS`
- 文字欠落・文字化け・重なり・クリップ: `0件`
- PDF文字抽出: `PASS`
- Unicode置換文字 / `(cid:)`: `0件 / 0件`

## 内容QA

1. Slide 1: 導通損失・スイッチング損失・オフ損失、IGBT/MOSFETと逆並列ダイオード、損失→発熱→接合温度・冷却→効率、二次試験型の通流判定順序を可視化。
2. Slide 2: SPEC指定「電流―導通損失」。`D=0.60`、`V_on=2.0 V`、`R_on=8.0 mΩ`、`P_cond,A=1.20I`、`P_cond,B=0.0048I^2`、交点 `I=250 A, P=300 W` をsourceと同条件で可視化。
3. Slide 3: SPEC指定「スイッチング周波数―損失」。`E_on+E_off=0.12 J/回`、`P_cond=240 W`、`P_sw=0.12f_s`、`P_total=240+0.12f_s` を可視化し、熱抵抗とソフトスイッチングはsource範囲の原理までに限定。
4. Slide 4: SPEC指定「出力―変換効率」。`V=1000 V`、`D=0.60`、`V_on=2.0 V`、`f_s=2.0 kHz`、`E_on+E_off=0.12 J` の一般仮定モデルを使用。H24二次型の可逆チョッパは通流素子→状態電圧→平均化→`0≤D≤1` の順序を示し、「損失無視」指定を維持。

## 過去問対応品質ゲート

- 固定過去問: `一次4問＋二次1問 / 計5問 / 変更なし`
- 固定答案要素: `一次17＋二次6 / 23 / 23 変更なし`
- 固定5問・23答案要素への可視化・接続: `23 / 23 PASS`
- clean blind公式照合: `23 / 23 PASS`
- H24一次「機械」問6のゲート対象: `(2)(3)のみ / PASS`
- SPEC指定7項目: `7 / 7 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 共通一般仮定モデル変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`
- PPTX本体変更: `0件`
- 判定: `PASS / POWERPOINT_COMPLETE`

## ファイル識別

- SHA-256: `7d9e169e750ba008081cccf99c4a1c3837dadbcb1faa4ab9586addd26d77000d`
- Git blob SHA: `3c27ff9c004939f1acf80a909df781eacd62dcfa`

## 次工程

旧26答案要素前提の記録を是正後の固定5問・23答案要素へ同期した。PowerPoint本体・問題・正答・数式は変更していない。次工程は Topic 17 の最終QA再実施。