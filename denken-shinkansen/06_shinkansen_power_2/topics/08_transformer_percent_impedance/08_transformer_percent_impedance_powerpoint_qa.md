# Topic 08 PowerPoint QA

更新日: 2026-09-16

## 対象
- `08_transformer_percent_impedance_images.pptx`
- 16:9
- 4スライド

## 正本
- `denken-shinkansen/MASTER_SPEC.md`
- `denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`
- `06_shinkansen_power_2/SPEC.md`
- `08_transformer_percent_impedance.md`
- `08_transformer_percent_impedance_practice.md`

## スライド対応
1. 基準容量・基準電圧の変更
   - 一般の基準変更式、同一電圧基準での容量変更、変圧器をまたぐ基準電圧
   - R7二次問3、R3二次問3、H28二次問6
2. ％Zから三相短絡電流・短絡容量
   - 直列・並列合成、`I_s = I_B/Z_pu`、`S_s = S_B/Z_pu`
   - R7二次問3、R3二次問3、H28二次問6
3. 変圧器の並列運転・負荷分担・循環電流
   - 変圧比・位相・％Z、負荷分担、`I_c=(E_A-E_B)/(Z_A+Z_B)`
   - H30一次問6(B)
4. 電圧降下と本試験の解法フロー
   - `S=P+jQ`、`I=(S/V)*`、`V_s=V_r+ZI`
   - 基準決定→基準量→p.u./％Z統一→合成→短絡/電圧降下→並列運転判定
   - 正式4過去問の対応マップ

## 系列SPEC固定9項目同期
- ％インピーダンス: Slides 1–3
- 単位法: Slides 1–2, 4
- 基準容量変更: Slide 1
- 基準電圧変更: Slide 1
- 短絡電流: Slide 2
- 電圧降下: Slide 4
- 変圧器並列運転: Slide 3
- 循環電流: Slide 3
- 負荷分担: Slide 3

固定9項目: `9 / 9` 可視化。

## 過去問品質ゲート同期
- 正式固定: 一次1問＋二次3問 = `4問`
- 制作前独立再解答: `4 / 4問・17 / 17答案要素 PASS`
- 一次: `5 / 5空欄 PASS`
- 二次: `12 / 12答案要素 PASS`
- 問題・正答・EXAM_ALIGNMENT変更: `0件`
- 原則5問へ合わせるための仕様追加: `0件`

## 範囲確認
- ATき電・帰線・き電回路等価回路: 追加なし
- 線路定数・距離―電圧曲線: 追加なし
- 移動負荷: 追加なし
- 電力潮流・需要率: 追加なし
- 対称座標法: 追加なし
- 故障種別別の短絡解析: 追加なし
- 保護協調: 追加なし
- 未確認実設備値: 追加なし

## 表示QA
- 全4スライドをレンダリングして目視確認: `4 / 4 PASS`
- レンダリング寸法: `1601 × 900` / slide
- 文字切れ: `0件`
- 文字重なり: `0件`
- 図形はみ出し: `0件`
- 数式・単位: `PASS`
- 未確認実設備値の真値化: `0件`

## 機械QA
- `slides_test.py`: `PASS / No overflow detected`
- PPTX ZIP整合性: `PASS / No errors detected`

## 判定
`PASS / topic_08_powerpoint_complete`

次段階は、保存済み正答を先に見ず、固定一次1問＋二次3問を完成教材だけで独立再解答する。
