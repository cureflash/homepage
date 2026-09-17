# Topic 11 PowerPoint QA

更新日: 2026-09-17

## 対象
- `11_moving_train_voltage_images.pptx`
- 16:9
- 4スライド

## 正本
- `denken-shinkansen/MASTER_SPEC.md`
- `denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`
- `06_shinkansen_power_2/SPEC.md`
- `11_moving_train_voltage.md`
- `11_moving_train_voltage_explanation.md`
- `11_moving_train_voltage_practice.md`
- `11_moving_train_voltage_sim.py`

## 使用条件
解説例題2・計算プログラムと同一の教材上仮定値のみを使用する。

- `|Vs|=25.0 kV`
- `P=4.00 MW`
- 遅れ力率 `0.90`
- `z'=0.04+j0.06 Ω/km`
- 列車位置 `x=0...12 km`
- 実設備値ではない

## スライド対応
1. 列車位置とパンタグラフ電圧
   - `R(x)=r'x`, `X(x)=x'x`, `Z(x)=z'x`
   - `Vs=Vr+Z(x)I`
   - 単一移動負荷の位置 `x` を変化させ、パンタグラフ点電圧を可視化
   - `x=12 km`: `Vr=24.867 kV`
2. 複素電力と線路電流
   - `S=P+jQ=Vr I*`
   - `I=(P-jQ)/Vr`
   - `|I|=P/(Vr cosφ)`
   - `x=0 km`: `177.8 A`, `x=12 km`: `178.7 A`
3. 有効電力損失
   - `P_loss=|I|²R(x)`
   - `R(x)=0.04x Ω`
   - `x=6 km`: `7.63 kW`, `x=12 km`: `15.33 kW`
4. 無効電力
   - `Q_load=P tanφ`
   - `Q_line=|I|²X(x)`
   - 固定P・固定力率では負荷側Qは一定、位置増加により線路側Qは増加
   - 正式過去問4問への接続論点を短く表示し、個別正答・最終答案は転載しない

## SPEC固定6項目同期
- 移動負荷: Slides 1–4
- 電圧降下: Slides 1, 3
- 電力損失: Slide 3
- 複素電力: Slides 2, 4
- 力率: Slides 2, 4
- 送受電端電圧: Slides 1–2

固定6項目: `6 / 6` 可視化。

## 計算プログラム指定4量
- パンタグラフ電圧: Slide 1
- 線路電流: Slide 2
- 有効電力損失: Slide 3
- 無効電力: Slide 4

固定4量: `4 / 4 PASS`。

## 過去問品質ゲート同期
- 平成30年度 第二種一次「電力」問7: `5答案要素`
- 平成27年度 第二種二次「電力・管理」問3: `4答案要素`
- 平成27年度 第二種二次「電力・管理」問4: `5答案要素`
- 平成26年度 第二種二次「電力・管理」問4: `3答案要素`
- 正式固定: 一次1問＋二次3問 = `4問・17答案要素`
- 制作前独立再解答: `4 / 4問・17 / 17答案要素 PASS`
- 正式固定4問・EXAM_ALIGNMENT変更: `0件`
- 仕様追加による5問目の追加: `0件`
- PowerPointへの公式過去問転載: `0件`

## 範囲確認
- Topic 12 複数列車・需要率・電力潮流: 追加なし
- Topic 13 不平衡・対称座標法: 追加なし
- Topic 14 無効電力補償設備・電圧制御: 追加なし
- Topic 15 回生・逆潮流: 追加なし
- Topic 16以降の故障・保護・サージ: 追加なし
- Topic 20 安定度、Topic 21 周波数制御・経済運用: 追加なし
- 未確認実設備値: `0件`
- 仕様追加: `0件`

## 表示QA
- 全4スライドをLibreOffice経由でレンダリングし目視確認: `4 / 4 PASS`
- レンダリング寸法: `1601 × 900` / slide
- 文字切れ: `0件`
- 文字重なり: `0件`
- 図形はみ出し: `0件`
- 数式・単位: `PASS`
- 教材上仮定値の明示: 全スライド上部に表示

## 機械QA
- `slides_test.py`: `PASS / No overflow detected`
- PPTX ZIP整合性: `PASS / No errors detected`
- LibreOffice PDF変換: `4ページ PASS`
- PDF文字抽出: `PASS`
- SHA-256: `358c809cbaff5358147a9e4027aa5d9b3711bdad7c4926d2768d3efa68e2cce6`

## 判定
`PASS / topic_11_powerpoint_complete`

完成後blind独立再解答は正式4問・17答案要素 `17 / 17 PASS` で完了済み。次段階は進捗記録整合を含む最終QA再判定とする。固定EXAM_ALIGNMENT、PowerPoint実体、技術内容は変更しない。
