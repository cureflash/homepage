# STATUS - 新幹線車両・電験二種

更新日: 2026-09-17

## 状態
- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `13 / 39`
- current_status: `topic_14_explanation_source_complete`
- last_completed_topic: `13 300系④ 回生と四象限運転`
- active_topic: `14 300系⑤ 走行抵抗と必要けん引力`
- next_start: Topic 14 解説PDF

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
- [ ] 14 300系⑤ 走行抵抗と必要けん引力 — IN_PROGRESS / EXPLANATION_SOURCE_COMPLETE

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

## Topic 14 SPEC再照合
`SPEC.md` 第14章の正本記載へ再照合し、進捗記録の範囲誤記を修正した。

SPEC指定8項目:
- 走行抵抗
- 加速抵抗
- 勾配抵抗
- けん引力
- 車輪周力
- 速度
- 必要出力
- 加速度

SPEC指定4可視化:
- 速度―走行抵抗
- 速度―必要けん引力
- 速度―必要出力
- 加速曲線

再照合QA:
- SPEC 8項目: `8 / 8 一致`
- SPEC 4可視化: `4 / 4 一致`
- 固定5過去問: `変更なし`
- 固定9答案要素: `変更なし`
- 制作前検証: `9 / 9 PASS 維持`
- 「空気抵抗」をSPEC指定項目とする誤記: `修正済み`
- 「勾配条件比較」をSPEC指定可視化とする誤記: `修正済み`
- 新規過去問追加: `0件`
- 新規実車値追加: `0件`

## Topic 14 解説source
- path: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force.md`
- 解説本文: `完成`
- 3段階例題: `3 / 3 PASS`
- 固定5過去問・9答案要素の本文マッピング: `9 / 9 PASS`
- 例題数値再計算: `PASS`
- SPEC指定8項目: `8 / 8 PASS`
- SPEC指定4可視化への計算条件: `4 / 4 PASS`
- 4可視化の共通仮定式系: `PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 未確認300系実車値の真値化: `0件`
- 判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

## Topic 14 固定範囲
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

## Topic 13 固定EXAM_ALIGNMENT
- source: `topics/13_300series_regenerative_four_quadrant/13_300series_regenerative_four_quadrant.md`
- 固定過去問: 一次4問＋二次1問、計5問
- 固定答案要素: 一次11＋二次4、計15
- R6 一次 機械 問2 (1),(2)
- R5 一次 機械 問2 (1),(2),(3),(5)
- H28 一次 機械 問5 (3)〜(5)
- H27 一次 機械 問3 (1),(2)
- H24 二次 機械・制御 問3 (1),(2)a〜c
- 制作前独立検証: 一次 `11 / 11 PASS`、二次 `4 / 4 PASS`、合計 `15 / 15 PASS`
- 二次記述問題: `1問`
- 公式解答・標準解答との不一致: `0件`
- 参考教材2系統以上: `PASS`
- SPEC指定8項目: `8 / 8 PASS`
- SPEC指定3可視化: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`

## Topic 13 解説source
- 解説本文: 完成
- 3段階例題: `3 / 3 PASS`
- 固定5過去問・15答案要素の本文マッピング: `15 / 15 PASS`
- 例題数値再計算: `PASS`
- SPEC指定8項目: `8 / 8 PASS`
- SPEC指定3可視化への計算条件: `3 / 3 PASS`

## Topic 13 解説PDF
- path: `topics/13_300series_regenerative_four_quadrant/13_300series_regenerative_four_quadrant_explanation.pdf`
- QA: `topics/13_300series_regenerative_four_quadrant/13_300series_regenerative_four_quadrant_explanation_pdf_qa.md`
- A4縦5ページ
- 180 dpi表示QA: `5 / 5 PASS`
- 文字抽出QA: `PASS`
- 固定5過去問・15答案要素接続: `15 / 15 PASS`
- SPEC指定3可視化: `3 / 3 PASS`

## Topic 13 練習問題source
- path: `topics/13_300series_regenerative_four_quadrant/13_300series_regenerative_four_quadrant_practice_source.md`
- 一次試験型: `8問`（全問五肢択一）
- 二次試験型: `4問`（途中式・前提・単位・理由を含む記述式）
- 合計: `12問`
- 数値・論理QA: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定5過去問・15答案要素接続: `15 / 15 PASS`

## Topic 13 練習PDF
- path: `topics/13_300series_regenerative_four_quadrant/13_300series_regenerative_four_quadrant_practice.pdf`
- QA: `topics/13_300series_regenerative_four_quadrant/13_300series_regenerative_four_quadrant_practice_qa.md`
- A4縦: `PASS`
- ページ数: `2`
- 一次8問＋二次4問、全12問＋完全解説: `PASS`
- 180 dpi表示QA: `2 / 2 PASS`
- 文字抽出QA: `PASS`
- 文字・数式のクリップ / 重なり / overflow / 黒四角: `0件`
- 数値・論理QA: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 二次の途中式・前提・単位・理由: `4 / 4 PASS`
- 固定5過去問・15答案要素接続: `15 / 15 PASS`
- PDF SHA-256: `ec183d8f536905083c3cbf9cdaca06d014f99e735fa00361b5ea82472fc935c0`
- PDF Git blob SHA-1: `ce7d43ed9a81f752bd0220d211c145f2b65a5908`
- source Git blob SHA-1: `c52cdd0959c30b62488985ee416af6ee4fc35b58`

## Topic 13 解説画像PowerPoint
- path: `topics/13_300series_regenerative_four_quadrant/13_300series_regenerative_four_quadrant_images.pptx`
- QA: `topics/13_300series_regenerative_four_quadrant/13_300series_regenerative_four_quadrant_images_qa.md`
- 16:9・4スライド
- SPEC指定3可視化: `3 / 3 PASS`
- H24二次型計算再検算: `PASS`
- 固定5過去問・15答案要素接続: `15 / 15 PASS`
- 約180 dpi表示QA: `4 / 4 PASS`
- `slides_test.py` overflow検査: `PASS / 0件`
- PowerPoint ZIP/XML整合性: `PASS`
- PDF経由文字抽出: `4 / 4ページ PASS`
- SHA-256: `c5f69a2f555916d4ba81966cbd30adddc068b0d663023f3385f9287fa40ff893`
- Git blob SHA-1: `05ec4efe282fac7392524c2f85e83488257ef43d`

## Topic 13 完成後独立再解答
- path: `topics/13_300series_regenerative_four_quadrant/13_300series_regenerative_four_quadrant_independent_reanswer.md`
- 公式解答確認前答案ロックcommit: `14070ee683554770df331c22f09525a5be97b45c`
- 一次: `11 / 11 PASS`
- 二次: `4 / 4 PASS`
- 合計: `15 / 15 PASS`
- 教材外知識補完: `0件`
- 公式解答・標準解答との不一致: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定範囲外追加: `0件`

## Topic 13 最終QA
- path: `topics/13_300series_regenerative_four_quadrant/13_300series_regenerative_four_quadrant_final_qa.md`
- 判定: `PASS / completed`
- 技術内容: `PASS`
- 固定一次4問＋二次1問・15答案要素: `PASS`
- 完成後独立再解答: `15 / 15 PASS`
- 必須成果物: `PASS`
- PDF/PPTX表示・構造QA: `PASS`
- 練習問題QA: `12 / 12 PASS`
- SPEC境界: `PASS`
- 進捗記録整合: `PASS`

## Topic 13 進捗記録同期
- 主source冒頭: `PASS`
- 主source末尾: `PASS`
- 練習source末尾: `PASS`
- 練習PDF QA末尾: `PASS`
- 同期: `4 / 4 PASS`
- 技術本文変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 問題・正答変更: `0件`
- PDF/PPTX変更: `0件`
- 完成後独立再解答結果変更: `0件`

## Topic 13 固定範囲
- 四象限運転
- トルク方向
- 回転方向
- 発電機運転
- 回生電力
- 直流中間回路
- 架線側電力フロー
- エネルギー収支

SPEC指定可視化:
- 速度・トルク平面
- 力行・回生時の電力フロー
- 回生可能エネルギー

範囲境界:
- Topic 14の走行抵抗・必要けん引力・加速度計算は追加しない
- H27の回生失効・電力貯蔵・運行間隔は追加しない
- H24二次問3の無効電流・出力可能領域は追加しない
- Topic 11/12の高調波・力率制御・V/f制御等は本テーマに必要な接続以上に再展開しない
- SPEC外制御方式は追加しない
- 未確認の300系回生効率・制御定数等を実車値として追加しない

## Topic 12 完了確認
Topic 12 `300系③ VVVFインバータと誘導機制御` は固定一次4問＋二次1問・13答案要素、解説source/PDF、練習source/PDF、解説画像PowerPoint、完成後独立再解答、最終QAまで完了。最終判定 `PASS / completed`。

## Topic 11 完了確認
Topic 11 `300系② PWMコンバータ` は固定一次2問＋二次3問・27答案要素、解説source/PDF、練習source/PDF、解説画像PowerPoint、完成後独立再解答、最終QAまで完了。最終判定 `PASS / completed`。

## 次工程
Topic 14の解説本文＋3段階例題は `PASS / EXPLANATION_SOURCE_COMPLETE`。固定一次2問＋二次3問・9答案要素とSPEC指定8項目・4可視化条件を変更せず、次は解説PDFを制作する。未確認の300系実車値を真値化しない。