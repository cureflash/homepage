# STATUS - 新幹線車両・電験二種

更新日: 2026-09-17

## 状態
- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `13 / 39`
- current_status: `topic_14_explanation_pdf_complete`
- last_completed_topic: `13 300系④ 回生と四象限運転`
- active_topic: `14 300系⑤ 走行抵抗と必要けん引力`
- next_start: Topic 14 練習問題source

## 品質ゲート進捗
- [x] 01 0系① 主変圧器の等価回路 — PASS
- [x] 02 0系② 整流回路の波形解析 — PASS
- [x] 03 0系③ 直流主電動機の電圧方程式とトルク — PASS
- [x] 04 0系④ タップ制御と加速特性 — PASS
- [x] 05 0系⑤ 発電ブレーキのエネルギー解析 — PASS
- [x] 06 0系⑥ 主回路全体の電力・損失・効率 — PASS
- [x] 07 直流主回路の高出力化 — PASS
- [x] 08 位相制御と平均直流電圧 — PASS
- [x] 09 直流機方式の損失・熱設計 — PASS
- [x] 10 300系① 誘導電動機等価回路 — PASS
- [x] 11 300系② PWMコンバータ — PASS
- [x] 12 300系③ VVVFインバータと誘導機制御 — PASS
- [x] 13 300系④ 回生と四象限運転 — PASS
- [ ] 14 300系⑤ 走行抵抗と必要けん引力 — IN_PROGRESS / EXPLANATION_PDF_COMPLETE

詳細な過去TopicのQAは各 `topics/` 配下のsource・QAを正本とする。

## Topic 14 固定EXAM_ALIGNMENT
- source: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force.md`
- 固定過去問: 一次2問＋二次3問、計5問
- 固定答案要素: 一次3＋二次6、計9
- R7 二次 機械・制御 問2 (1),(3)
- R1 二次 機械・制御 問1 (4)
- H26 二次 機械・制御 問1 (4)
- H26 一次 機械 問5 (1)
- H25 一次 機械 問3 (1),(2)
- 制作前計算・論理検証: 一次 `3 / 3 PASS`、二次 `6 / 6 PASS`、合計 `9 / 9 PASS`
- 二次記述問題: `3問`
- 公式解答・標準解答との不一致: `0件`
- 参考教材2系統以上: `PASS`
- R8一次「機械」直近年度確認: `PASS / 固定対象なし`
- SPEC指定8項目: `8 / 8 aligned`
- SPEC指定4可視化: `4 / 4 aligned`
- 固定EXAM_ALIGNMENT変更: `0件`

## Topic 14 解説source
- path: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force.md`
- 解説本文: `完成`
- 3段階例題: `3 / 3 PASS`
- 固定5過去問・9答案要素の本文マッピング: `9 / 9 PASS`
- 例題数値再計算: `PASS`
- SPEC指定8項目: `8 / 8 PASS`
- SPEC指定4可視化への計算条件: `4 / 4 PASS`
- 4可視化の共通仮定式系: `PASS`
- 未確認300系実車値の真値化: `0件`
- 判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

## Topic 14 解説PDF
- path: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_explanation.pdf`
- QA: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_explanation_pdf_qa.md`
- A4縦3ページ
- 180 dpi表示QA: `3 / 3 PASS`
- 文字抽出QA: `PASS`
- 文字欠落・黒四角・重なり・クリップ: `0件`
- 固定5過去問・9答案要素接続: `9 / 9 PASS`
- 3段階例題: `3 / 3 PASS`
- SPEC指定8項目: `8 / 8 PASS`
- SPEC指定4可視化: `4 / 4 PASS`
- 4可視化共通仮定式系: `PASS`
- PDF SHA-256: `32d691584b5d898b80389f20810ba2e3a22d9825d7b58502e9af9dd355c4a180`
- 固定EXAM_ALIGNMENT変更: `0件`
- 未確認300系実車値の真値化: `0件`
- 判定: `PASS / EXPLANATION_PDF_COMPLETE`

## Topic 14 固定範囲
扱う内容:
- 走行抵抗
- 加速抵抗
- 勾配抵抗
- けん引力
- 車輪周力
- 速度
- 必要出力
- 加速度

SPEC指定可視化:
- 速度―走行抵抗
- 速度―必要けん引力
- 速度―必要出力
- 加速曲線

範囲境界:
- Topic 13の回生・制動・エネルギー返送は再展開しない
- Topic 12のPWM/VVVF/V/f制御等は `P=Tω` 接続に必要な範囲以上へ戻らない
- 粘着限界、曲線抵抗、トンネル抵抗、台車・歯車設計、列車運行計画は追加しない
- 走行抵抗の内訳・経験式・係数は根拠のある範囲を超えて追加しない
- 未確認の300系質量・走行抵抗係数・伝達効率を実車値として追加しない

## 次工程
固定EXAM_ALIGNMENT、解説source、解説PDFを変更せず、Topic 14の練習問題sourceを制作する。二種一次試験型に加え、二次試験へ接続する記述式を含め、途中式・前提・単位・理由まで採点可能な完全解説とする。
