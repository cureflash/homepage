# STATUS - 新幹線・電験三種「機械」

更新日: 2026-09-14

## 状態
- active_series: `03_shinkansen_machine_3`
- exam_aligned_completed_topics: 5 / 16
- current_status: `topic_06_practice_pdf_complete`
- last_completed_topic: `05 誘導電動機はなぜ勝手に回る？`
- active_topic: `06 新幹線はどうやって速度を変えている？`
- next_start: Topic 06の解説画像PowerPointを作成し、全スライド表示QA・overflow検査を行う。固定EXAM_ALIGNMENT 5問・7小問と固定範囲を維持し、固定範囲外論点や未確認実車値は追加しない

## 新品質ゲート進捗
- [x] 01 架線25kVをそのままモーターに入れたらどうなる？ — 品質ゲートPASS / completed
- [x] 02 初代0系はどうやって走っていた？ — 品質ゲートPASS / completed
- [x] 03 直流モーターはどうやって速度を変える？ — 品質ゲートPASS / completed
- [x] 04 300系でモーターが全部変わった — 品質ゲートPASS / completed
- [x] 05 誘導電動機はなぜ勝手に回る？ — 品質ゲートPASS / completed
- [ ] 06 新幹線はどうやって速度を変えている？ — EXAM_ALIGNMENT、解説本文、3段階例題、解説PDF、練習問題source、練習PDFまで完了
- [ ] 07〜16 — 未完了

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
- 解説画像PowerPoint: 未着手
- 完成後独立再解答: 未実施
- 最終QA: 未実施
- 完成数: `5 / 16`
