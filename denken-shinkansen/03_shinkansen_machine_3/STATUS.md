# STATUS - 新幹線・電験三種「機械」

更新日: 2026-09-14

## 状態
- active_series: `03_shinkansen_machine_3`
- exam_aligned_completed_topics: 6 / 16
- current_status: `topic_07_exam_alignment_complete`
- last_completed_topic: `06 新幹線はどうやって速度を変えている？`
- active_topic: `07 GTO→IGBT→SiCで何が変わった？`
- next_start: Topic 07の解説本文＋3段階例題を作成する。固定EXAM_ALIGNMENT 5問を解ける中間知識を欠落なく入れ、系列SPEC固定範囲だけを扱う。新幹線側の採用素子・回路方式は一次資料確認後に記述する

## 新品質ゲート進捗
- [x] 01 架線25kVをそのままモーターに入れたらどうなる？ — 品質ゲートPASS / completed
- [x] 02 初代0系はどうやって走っていた？ — 品質ゲートPASS / completed
- [x] 03 直流モーターはどうやって速度を変える？ — 品質ゲートPASS / completed
- [x] 04 300系でモーターが全部変わった — 品質ゲートPASS / completed
- [x] 05 誘導電動機はなぜ勝手に回る？ — 品質ゲートPASS / completed
- [x] 06 新幹線はどうやって速度を変えている？ — 品質ゲートPASS / completed
- [ ] 07 GTO→IGBT→SiCで何が変わった？ — 制作前EXAM_ALIGNMENT完了
- [ ] 08〜16 — 未完了

## Topic 07 EXAM_ALIGNMENT
品質ゲート対象は公式過去問5問で固定する。

1. R5上 機械 問10 — IGBTとパワーMOSFETの逆方向導通、電圧駆動、ユニポーラ/バイポーラ、テイル電流、SiC
2. R2 機械 問10 — IGBT/MOSFETの電圧駆動、キャリア蓄積、スイッチング損失、オン状態抵抗、SiC
3. H30 機械 問11 — IGBTのオンオフ制御、逆並列ダイオード、インバータ、PWM
4. H29 機械 問10 — ダイオード、サイリスタ、MOSFET、IGBTの定常オン・オフと逆方向電流
5. H23 機械 問10 — 整流ダイオード、サイリスタ、パワートランジスタ、MOSFET、IGBTの役割・特性

制作前検証答案列: `(1), (2), (5), (2), (3)`

公式解答との一致: `5 / 5 PASS`

固定範囲外知識による補完: `0件`

## Topic 07 固定範囲
系列SPECどおり以下だけを扱う。

- ダイオード、サイリスタ、GTO、IGBT、MOSFETの基本、SiC
- オン状態、オフ状態
- 導通損失、スイッチング損失、スイッチング周波数
- 発熱、冷却、変換効率
- `損失減少 → 発熱減少 → 冷却装置小型化 → 主変換装置小型化 → 車両軽量化`

半導体物性の詳細には深入りしない。バンド構造、結晶構造、キャリア移動度等を独立論点として追加しない。新幹線側は系列SPECの世代イメージを入口とし、実際の採用素子・回路方式は一次資料で確認してから記述する。未確認実車値は追加しない。

## Topic 07 成果物
### 解説source
`topics/07_power_semiconductors/07_power_semiconductors.md`

- 制作前EXAM_ALIGNMENT完成
- 公式過去問5問を固定
- 制作前検証 `5 / 5 PASS`
- 固定範囲外追加 `0件`
- 解説本文・3段階例題は未着手

## Topic 07 現在の品質状態
- 制作前EXAM_ALIGNMENT: 完了
- 制作前検証: `5 / 5 PASS`
- 解説本文: 未着手
- 3段階例題: 未着手
- 解説PDF: 未着手
- 練習問題source/PDF: 未着手
- 解説画像PowerPoint: 未着手
- 完成後独立再解答: 未実施
- 最終QA: 未実施
- 完成数: `6 / 16`

## Topic 06 EXAM_ALIGNMENT
品質ゲート対象は5問・7小問で固定する。

1. R8上 機械 問10 — 交流→直流電力変換回路、平滑リアクトル、入力電流波形と制御素子ブリッジ
2. R8上 機械 問16(a)(b) — 三相ダイオード全波整流、相電圧・線間電圧、6パルス出力、平均値・脈動率
3. R7上 機械 問16(a) — IGBT直流チョッパ、スイッチング周期、通流率、平均電圧、オン時間
4. R6上 機械 問10 — 単相半波ダイオード整流、R-L負荷、環流ダイオード、負荷電圧・電流波形
5. R6上 機械 問16(a)(b) — IGBT単相ブリッジ電圧形インバータ、逆並列ダイオード、誘導性負荷の通流経路、時定数

制作前検証答案列: `(5), (2), (2), (2), (3), (5), (2)`

公式解答との一致: `7 / 7 PASS`

固定範囲外知識による補完: `0件`

## Topic 06 完成後独立再解答
完成教材の式・判断手順だけで固定5問・7小問を再導出し、その後に公式解答と照合した。

独立答案列: `(5), (2), (2), (2), (3), (5), (2)`

公式解答との一致: `7 / 7 PASS`

教材外・固定範囲外知識による補完: `0件`

## Topic 06 固定範囲
系列SPECどおり以下だけを扱う。

- ダイオード、サイリスタ、GTO、IGBT
- 整流、コンバータ、インバータ、チョッパ
- PWM、直流中間回路、スイッチング
- 可変電圧、可変周波数、VVVF
- `Ns = 120f / P` とインバータ周波数による同期速度制御
- 単相整流、三相整流、デューティ比、平均電圧

新幹線側は `架線交流 → 主変圧器 → コンバータ → 直流中間回路 → インバータ → 可変電圧・可変周波数三相交流 → 誘導電動機` のみ。

ベクトル制御、回生制動、MPPT、系統連系保護、単独運転検出、詳細な高調波解析、未確認実車値は追加しない。

## Topic 06 成果物
### 解説source
`topics/06_power_electronics/06_power_electronics.md`

- 解説本文＋3段階例題完成
- 固定5問・7小問の本文マッピング `7 / 7`
- 完成後独立再解答 `7 / 7 PASS`
- 最終QA `PASS`
- 固定範囲外追加 `0件`

### 解説PDF
`topics/06_power_electronics/06_power_electronics_explanation.pdf`

- A4縦5ページ
- 200 dpi全ページ表示QA `PASS`
- 文字抽出QA `PASS`

### 練習問題source
`topics/06_power_electronics/06_power_electronics_practice.md`

- 全12問、全問五肢択一
- 基礎3 / 本試験標準7 / 複合・応用2
- 固定EXAM_ALIGNMENT 5問・7小問を全件マッピング
- R-L負荷・環流ダイオード、三相整流、直流チョッパ、単相ブリッジインバータ、PWM・VVVF・同期速度を収録
- 数値問題は式・理由・代入・中間計算・最終値・検算まで記載
- 知識問題は正答理由と主要誤答肢の誤りを記載
- 固定範囲外論点の追加 `0件`
- 未確認実車値の追加 `0件`

### 練習PDF
`topics/06_power_electronics/06_power_electronics_practice.pdf`

- A4縦5ページ
- sourceの12問・完全解説を反映
- 200 dpi全ページ表示QA `PASS`
- 文字抽出QA `PASS`（問1〜12、正答12件、品質確認項目を確認）
- 固定範囲外論点の追加 `0件`
- 未確認実車値の追加 `0件`

### 解説画像PowerPoint
`topics/06_power_electronics/06_power_electronics_images.pptx`

- 16:9・4スライド
- 固定EXAM_ALIGNMENT 5問・7小問を可視化
- 主回路の電力変換系列、三相整流6パルス、直流チョッパ、R-L負荷・インバータ通流、PWM・VVVF・同期速度を収録
- 全4スライド表示QA `PASS`
- overflow検査 `0件`
- PPTX ZIP整合性 `PASS`
- 固定範囲外論点の追加 `0件`
- 未確認実車値の追加 `0件`

## Topic 06 最終QA
2026-09-14に実施。

- 必須成果物の実在: `PASS`
- 固定EXAM_ALIGNMENT 5問・7小問の整合: `PASS`
- 完成後独立再解答: `7 / 7 PASS`
- 解説PDF・練習PDF・PowerPointの既存表示QA記録: `PASS`
- 固定範囲境界: `PASS`
- source・STATUS・HANDOFF進捗整合: `PASS`
- 教材外・固定範囲外知識による補完: `0件`
- 固定範囲外論点・未確認実車値の追加: `0件`
- 判定: `PASS / completed`

## Topic 06 現在の品質状態
- 制作前EXAM_ALIGNMENT: 完了
- 制作前検証: `7 / 7 PASS`
- 解説本文: 完了
- 3段階例題: 完了
- 選定5問・7小問の本文マッピング: `7 / 7` 完了
- 解説PDF: 完了
- 解説PDF表示QA: `PASS`
- 解説PDF文字抽出QA: `PASS`
- 練習問題source: 完了（12問、固定5問・7小問を全件マッピング）
- 練習PDF: 完了（A4縦5ページ）
- 練習PDF表示QA: `PASS`
- 練習PDF文字抽出QA: `PASS`
- 解説画像PowerPoint: 完了（16:9・4スライド）
- PowerPoint表示QA: `PASS`
- PowerPoint overflow検査: `0件`
- PPTX ZIP整合性: `PASS`
- 完成後独立再解答: `7 / 7 PASS`
- 教材外・固定範囲外知識による補完: `0件`
- 最終QA: `PASS`
- 完成数: `6 / 16`
