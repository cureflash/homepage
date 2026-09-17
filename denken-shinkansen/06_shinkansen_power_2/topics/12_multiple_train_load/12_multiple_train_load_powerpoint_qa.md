# Topic 12 PowerPoint QA

更新日: 2026-09-18

## 対象
- `12_multiple_train_load_images.pptx`
- 16:9
- 4スライド

## 正本
- `denken-shinkansen/MASTER_SPEC.md`
- `denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`
- `06_shinkansen_power_2/SPEC.md`
- `12_multiple_train_load.md`
- `12_multiple_train_load_explanation.md`
- `12_multiple_train_load_practice.md`
- `12_multiple_train_load_sim.py`
- `12_multiple_train_load_sweep.csv`

## 使用条件
解説source §11.3・計算プログラムと同一の教材上仮定値のみを使用する。

- 送電端線間電圧 `66 kV`
- 1列車あたり `2 MW`
- 遅れ力率 `0.90`
- 線路1相あたり `R=0.50 Ω`, `X=1.00 Ω`
- 列車本数 `n=0...4`
- N700S・新幹線実設備の確認値ではない

## スライド対応
1. 最大需要・需要率・不等率・負荷率
   - `Pmax,total = ΣPmax,i / Fd`
   - `Pavg = FL × Pmax`
   - 需要率・不等率・負荷率の基準量を分離
2. 複素電力・定電力負荷・区間電流
   - `S=P+jQ`
   - 平衡三相 `I=(P-jQ)/(√3V)`
   - 遅れ `Q>0` / 進み `Q<0`
   - `I1=IA+IB`, `I2=IB`
   - `ΔVk=ZkIk`
3. 簡易電力潮流・ノード電圧
   - `I=(Vs∠δ-Vr)/(jX)`
   - `S=Vr I*`
   - `P=VsVr sinδ/X`
   - `Q=(VsVr cosδ-Vr^2)/X`
   - 列車本数―受電端電圧グラフ
   - `n=4`: `Vr=65.880407 kV`
4. 線路電流・線路損失
   - `P_loss=3|I|^2R`
   - `P=√3VIcosφ`
   - 列車本数―三相線路損失グラフ
   - `n=4`: `I=77.898765 A`, `P_loss=9.102326 kW`

## SPEC固定8項目同期
- 複数負荷: Slides 1–3
- 負荷特性: Slide 2
- 最大需要: Slide 1
- 需要率: Slide 1
- 不等率: Slide 1
- 電力潮流: Slide 3
- ノード電圧: Slide 3
- 線路潮流: Slides 2–4

固定8項目: `8 / 8` 可視化。

## 計算・可視化指定
- 列車本数―電圧: Slide 3
- 列車本数―損失: Slide 4

指定2量: `2 / 2 PASS`。

## 過去問品質ゲート同期
- 令和4年度 第二種二次「電力・管理」問6: `8答案要素`
- 令和元年度 第二種二次「電力・管理」問2: `6答案要素`
- 平成30年度 第二種一次「電力」問7: `5答案要素`
- 平成29年度 第二種二次「電力・管理」問4: `3答案要素`
- 平成23年度 第二種二次「電力・管理」問6: `3答案要素`
- 正式固定: 一次1問＋二次4問 = `5問・25答案要素`
- 制作前独立再解答: `23 / 25答案要素 PASS`
- 解説・練習教材内カバレッジ: `25 / 25`
- 正式固定5問・EXAM_ALIGNMENT変更: `0件`
- PowerPointへの公式過去問転載: `0件`

PowerPoint完成は、完成後blind独立再解答PASSを意味しない。Topic 12は未完了を維持する。

## 範囲確認
- Topic 13 不平衡・対称座標法: 追加なし
- Topic 14 調相設備・無効電力補償: 追加なし
- Topic 15 回生・逆潮流: 追加なし
- Topic 16 短絡計算: 追加なし
- Topic 17 保護協調: 追加なし
- Topic 18 雷サージ・進行波: 追加なし
- Topic 20 安定度: 追加なし
- Topic 21 周波数制御・経済運用: 追加なし
- 未確認N700S実設備値: `0件`
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
- SHA-256: `f4f94504c5bd900f0e07d73203de0787c885ce021aa3818358e26aad22203995`

## 判定
`PASS / topic_12_powerpoint_complete`

次段階は、保存済み正答・公式解答を先に見ず、固定5問・25答案要素を教材内容だけで完成後blind独立再解答する。外部知識補完があればFAILとする。
