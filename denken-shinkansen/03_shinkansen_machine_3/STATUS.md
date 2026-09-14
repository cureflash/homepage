# STATUS - 新幹線・電験三種「機械」

更新日: 2026-09-15

## 状態
- active_series: `03_shinkansen_machine_3`
- exam_aligned_completed_topics: 7 / 16
- current_status: `topic_07_completed`
- last_completed_topic: `07 GTO→IGBT→SiCで何が変わった？`
- active_topic: `08 N700Sのモーターはなぜ小さくできた？`
- next_start: Topic 08の制作前EXAM_ALIGNMENTを実施する。`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md` の固定範囲に従い、直近の公式過去問から関連問題を調査して品質ゲート対象を確定する

## 新品質ゲート進捗
- [x] 01 架線25kVをそのままモーターに入れたらどうなる？ — 品質ゲートPASS / completed
- [x] 02 初代0系はどうやって走っていた？ — 品質ゲートPASS / completed
- [x] 03 直流モーターはどうやって速度を変える？ — 品質ゲートPASS / completed
- [x] 04 300系でモーターが全部変わった — 品質ゲートPASS / completed
- [x] 05 誘導電動機はなぜ勝手に回る？ — 品質ゲートPASS / completed
- [x] 06 新幹線はどうやって速度を変えている？ — 品質ゲートPASS / completed
- [x] 07 GTO→IGBT→SiCで何が変わった？ — 品質ゲートPASS / completed
- [ ] 08 N700Sのモーターはなぜ小さくできた？ — 未着手
- [ ] 09〜16 — 未完了

## Topic 07 EXAM_ALIGNMENT
品質ゲート対象は公式過去問5問で固定する。

1. R5上 機械 問10 — IGBTとパワーMOSFETの逆方向導通、電圧駆動、ユニポーラ/バイポーラ、テイル電流、SiC
2. R2 機械 問10 — IGBT/MOSFETの電圧駆動、キャリア蓄積、スイッチング損失、オン状態抵抗、SiC
3. H30 機械 問11 — IGBTのオンオフ制御、逆並列ダイオード、インバータ、PWM
4. H29 機械 問10 — ダイオード、サイリスタ、MOSFET、IGBTの定常オン・オフと逆方向電流
5. H23 機械 問10 — 整流ダイオード、サイリスタ、パワートランジスタ、MOSFET、IGBTの役割・特性

制作前検証答案列: `(1), (2), (5), (2), (3)`

制作前公式照合: `5 / 5 PASS`

完成後独立答案列: `(1), (2), (5), (2), (3)`

完成後公式照合: `5 / 5 PASS`

教材外・固定範囲外知識による補完: `0件`

固定EXAM_ALIGNMENT変更: `0件`

## Topic 07 固定範囲
系列SPECどおり以下だけを扱う。

- ダイオード、サイリスタ、GTO、IGBT、MOSFETの基本、SiC
- オン状態、オフ状態
- 導通損失、スイッチング損失、スイッチング周波数
- 発熱、冷却、変換効率
- `損失減少 → 発熱減少 → 冷却装置小型化 → 主変換装置小型化 → 車両軽量化`

半導体物性の詳細には深入りしない。バンド構造、結晶構造、キャリア移動度等を独立論点として追加しない。新幹線側の実際の採用素子・回路方式は一次・技術資料で確認した内容だけを書く。未確認実車値は追加しない。

## Topic 07 成果物・品質状態
### 解説source
`topics/07_power_semiconductors/07_power_semiconductors.md`

- 制作前EXAM_ALIGNMENT完成
- 公式過去問5問を固定
- 制作前検証 `5 / 5 PASS`
- 解説本文＋3段階例題完成
- 固定5問の本文マッピング `5 / 5`
- 完成後独立再解答 `5 / 5 PASS`
- 最終QA `PASS`
- 教材外・固定範囲外知識による補完 `0件`
- 固定範囲外追加 `0件`
- 未確認実車値追加 `0件`

### 解説PDF
`topics/07_power_semiconductors/07_power_semiconductors_explanation.pdf`

- A4縦5ページ
- 200 dpi全5ページ表示QA `PASS`
- 文字抽出QA `PASS`
- 3段階例題・固定5問への教材内マッピングを収録
- 固定範囲外論点の追加 `0件`
- 未確認実車値の追加 `0件`

### 解説PDF QA記録
`topics/07_power_semiconductors/07_power_semiconductors_explanation_pdf_qa.md`

### 練習問題source
`topics/07_power_semiconductors/07_power_semiconductors_practice.md`

- 全12問・全問五肢択一
- 基礎3／本試験標準7／複合・応用2
- 固定EXAM_ALIGNMENT 5問へ全件接続
- 独立計算・論理QA `12 / 12 PASS`
- 正答一意性 `12 / 12 PASS`
- 固定範囲外論点追加 `0件`
- 未確認実車値追加 `0件`

### 練習PDF
`topics/07_power_semiconductors/07_power_semiconductors_practice.pdf`

- A4縦4ページ
- 全12問・全問五肢択一＋完全解説
- 200 dpi全4ページ表示QA `4 / 4 PASS`
- 文字抽出QA `PASS`
- 固定EXAM_ALIGNMENT 5問・固定範囲を維持
- 固定範囲外論点の追加 `0件`
- 未確認実車値の追加 `0件`

### 練習PDF QA記録
`topics/07_power_semiconductors/07_power_semiconductors_practice_pdf_qa.md`

### 解説画像PowerPoint
`topics/07_power_semiconductors/07_power_semiconductors_images.pptx`

- 16:9・4枚
- 固定EXAM_ALIGNMENT 5問の判定軸、導通損失・スイッチング損失、インバータ＋逆並列ダイオード＋PWM、GTO→IGBT→SiCと小型軽量化因果を可視化
- 外部画像不使用（PowerPoint図形で独自作成）
- 全4スライド表示QA `4 / 4 PASS`
- overflow `0件`
- PowerPoint ZIP整合性 `PASS`
- 固定範囲外論点の追加 `0件`
- 未確認実車値の追加 `0件`

### PowerPoint QA記録
`topics/07_power_semiconductors/07_power_semiconductors_powerpoint_qa.md`

## Topic 07 最終QA
- 必須成果物の実在: `PASS`
- 固定EXAM_ALIGNMENT 5問: `PASS`
- 完成後独立再解答: `5 / 5 PASS`
- 解説PDF表示QA・文字抽出QA: `PASS`
- 練習PDF表示QA・文字抽出QA: `PASS`
- PowerPoint表示QA・overflow・ZIP整合性: `PASS`
- source進捗整合: `PASS`
- 固定範囲境界: `PASS`
- 教材外・固定範囲外知識による補完: `0件`
- 固定範囲外論点の追加: `0件`
- 未確認実車値の追加: `0件`
- 判定: `PASS / completed`
- 完成数: `7 / 16`

## Topic 06 完了要約
Topic 06「新幹線はどうやって速度を変えている？」は品質ゲートPASS / completed。固定5問・7小問の完成後独立再解答 `7 / 7 PASS`、解説PDF・練習PDF・PowerPoint・表示QA・範囲境界を確認済み。教材外・固定範囲外知識による補完 `0件`。
