# Topic 13 PowerPoint QA

更新日: 2026-09-18

## 対象
- `13_three_phase_unbalance_images.pptx`
- 16:9
- 4スライド

## 正本
- `denken-shinkansen/MASTER_SPEC.md`
- `denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`
- `06_shinkansen_power_2/SPEC.md`
- `13_three_phase_unbalance.md`
- `13_three_phase_unbalance_explanation.md`
- `13_three_phase_unbalance_practice.md`

## スライド対応
1. 三相平衡・三相不平衡・正相・逆相・零相
   - 平衡三相の120°関係
   - 大容量単相負荷を含む不平衡原因
   - 正相 `a-b-c`、逆相 `a-c-b`、零相同相
2. `a` 演算子・対称座標変換
   - `a=exp(j2π/3)`
   - 相量→正相・逆相・零相の変換式
   - 線間単相負荷の例: `I1=I2=51.96 A`, `I0=0`
3. 逆相電流の同期機影響・電圧不平衡率・不平衡緩和
   - 逆相磁界→回転子誘導電流・渦電流→局部加熱
   - 電圧不平衡率 `|V2|/|V1|×100 [%]`
   - 正式ゲート範囲の受電点 `3 %以下`
   - 相振り分け、き電用変圧器、強い上位系統
4. 異容量V結線のフェーザ合成
   - 二つの単相負荷を同一とする最大条件
   - `Ta` は三相平衡負荷電流、`Tb` は三相平衡＋単相負荷のフェーザ和
   - `P3,max=√3 Sa`
   - `P1,max=Sb-Sa cos30°`
   - `ηu=(P3,max+P1,max)/(Sa+Sb)×100`
   - 仮定値 `Sa=20 kVA`, `Sb=35 kVA` で `34.64 kW`, `17.68 kW`, `95.13 %`

## SPEC固定8項目同期
- 三相不平衡: Slides 1, 3
- 正相: Slides 1, 2
- 逆相: Slides 1–3
- 零相: Slides 1, 2
- `a` 演算子: Slide 2
- 対称座標変換: Slide 2
- 逆相電流: Slides 1, 3
- き電用変圧器による不平衡緩和: Slide 3

固定8項目: `8 / 8 PASS`。

## 正式過去問品質ゲート同期
- 平成28年度 第二種一次「法規」問6: `5答案要素`
  - 不平衡原因: Slide 1
  - 交流式電気鉄道＝大容量単相負荷: Slide 1
  - 受電点電圧不平衡率: Slide 3
  - 逆相電流による同期機影響: Slides 1, 3
  - 相振り分け・強い上位系統等の緩和: Slide 3
- 平成23年度 第二種二次「電力・管理」問4: `3答案要素`
  - 三相最大平衡負荷: Slide 4
  - 単相負荷合計最大値: Slide 4
  - 変圧器利用率: Slide 4

固定2問・8答案要素: `8 / 8` をPowerPoint内へ接続。

この `8 / 8` はPowerPointの説明カバレッジであり、完成後blind独立再解答のPASSではない。

## 制作前不足2要素の改善維持
制作前blindで不足した平成23年度二次問4の(2)(3)について、Slide 4で以下を維持した。

1. 二つの単相負荷を同一とする最大条件
2. `Ta` / `Tb` の回路電流の違い
3. スカラー加算ではなくフェーザ合成で容量判定する理由
4. `Sa cos30°` の投影
5. `P1,max=Sb-Sa cos30°`
6. 利用率までの途中式

制作前不足2答案要素への説明維持: `2 / 2 PASS`。

## 範囲確認
- Topic 14 調相設備・無効電力補償・力率改善: 追加なし
- Topic 15 回生・逆潮流: 追加なし
- Topic 16 故障電流計算・故障時対称分等価回路: 追加なし
- Topic 17 保護協調: 追加なし
- Topic 18 雷サージ・進行波: 追加なし
- Topic 20 安定度: 追加なし
- Topic 21 周波数制御・経済運用: 追加なし
- 未確認の新幹線実設備値・実測逆相電流値: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`

## 表示QA
- 全4スライドをLibreOffice経由でレンダリングし目視確認: `4 / 4 PASS`
- レンダリング寸法: `1601 × 900` / slide
- 文字切れ: `0件`
- 文字重なり: `0件`
- 図形はみ出し: `0件`
- 数式・単位: `PASS`
- 教材上仮定値の明示: Slide 4

## 機械QA
- `slides_test.py`: `PASS / No overflow detected`
- PPTX ZIP整合性: `PASS / No errors detected`
- LibreOffice PDF変換: `4ページ PASS`
- PDF文字抽出: `PASS`
- SHA-256: `ece286355b43e8dd1a532f57889283bd7aeb034045ce65eb4354fbb73cd2ce9b`

## 判定
`PASS / topic_13_powerpoint_complete`

完成後blind独立再解答は固定2問・8答案要素 `8 / 8 PASS` で完了済み。制作前不足2答案要素も `2 / 2 改善確認`。次段階は進捗記録整合を含む最終QA再判定とする。固定EXAM_ALIGNMENT、PowerPoint実体、技術内容は変更しない。
