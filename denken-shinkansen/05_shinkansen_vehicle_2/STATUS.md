# STATUS - 新幹線車両・電験二種

更新日: 2026-09-17

## 状態
- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `12 / 39`
- current_status: `topic_13_practice_source_complete`
- last_completed_topic: `12 300系③ VVVFインバータと誘導機制御`
- active_topic: `13 300系④ 回生と四象限運転`
- next_start: Topic 13 練習PDF

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
- [ ] 13 300系④ 回生と四象限運転 — PRACTICE_SOURCE_COMPLETE / IN_PROGRESS

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
- Topic 14先取り: `0件`
- 回生失効・電力貯蔵設備追加: `0件`
- SPEC外制御方式追加: `0件`
- 未確認300系実車値追加: `0件`

## Topic 13 解説source
- 解説本文: 完成
- 3段階例題: `3 / 3 PASS`
- 固定5過去問・15答案要素の本文マッピング: `15 / 15 PASS`
- 例題数値再計算: `PASS`
- SPEC指定8項目: `8 / 8 PASS`
- SPEC指定3可視化への計算条件: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 14先取り: `0件`
- 回生失効・電力貯蔵設備追加: `0件`
- H24二次の無効電流・出力可能領域追加: `0件`
- SPEC外制御方式追加: `0件`
- 未確認300系実車値の真値化: `0件`

## Topic 13 解説PDF
- path: `topics/13_300series_regenerative_four_quadrant/13_300series_regenerative_four_quadrant_explanation.pdf`
- QA: `topics/13_300series_regenerative_four_quadrant/13_300series_regenerative_four_quadrant_explanation_pdf_qa.md`
- A4縦: `PASS`
- ページ数: `5`
- 180 dpi表示QA: `5 / 5 PASS`
- 文字抽出QA: `PASS`
- 文字欠落・黒四角・重なり・クリップ: `0件`
- 固定5過去問・15答案要素接続: `15 / 15 PASS`
- 3段階例題: `3 / 3 PASS`
- SPEC指定8項目: `8 / 8 PASS`
- SPEC指定3可視化: `3 / 3 PASS`
- 教材図・例題の仮定値表記: `PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 14先取り: `0件`
- 回生失効・電力貯蔵設備追加: `0件`
- H24二次の無効電流・出力可能領域追加: `0件`
- SPEC外制御方式追加: `0件`
- 未確認300系実車値の真値化: `0件`

## Topic 13 練習問題source
- path: `topics/13_300series_regenerative_four_quadrant/13_300series_regenerative_four_quadrant_practice_source.md`
- 一次試験型: `8問`（全問五肢択一）
- 二次試験型: `4問`（途中式・前提・単位・理由を含む記述式）
- 合計: `12問`
- 数値・論理QA: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定5過去問・15答案要素接続: `15 / 15 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 14先取り: `0件`
- H27固定範囲外の回生失効・電力貯蔵設備・運行間隔追加: `0件`
- H24二次固定範囲外の無効電流・出力可能領域追加: `0件`
- Topic 11/12の論点再展開: `0件`
- SPEC外制御方式追加: `0件`
- 未確認300系実車値の真値化: `0件`

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
- 未確認の300系回生効率・制御定数等を実車値として追加しない

## Topic 12 固定EXAM_ALIGNMENT
- source: `topics/12_300series_vvvf_inverter_induction_control/12_300series_vvvf_inverter_induction_control.md`
- 固定過去問: 一次4問＋二次1問、計5問
- 固定答案要素: 一次11＋二次2、計13
- R6 一次 機械 問2 (1),(5)
- R4 一次 機械 問2 (3)〜(5)
- R2 一次 機械 問3 (1),(4),(5)
- H30 二次 機械・制御 問1 (4)
- H26 一次 機械 問5 (3)〜(5)
- 制作前独立検証: 一次 `11 / 11 PASS`、二次 `2 / 2 PASS`、合計 `13 / 13 PASS`
- 二次記述問題: `1問`
- 公式解答との不一致: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`

## Topic 12 解説source
- 解説本文: 完成
- 3段階例題: `3 / 3 PASS`
- 固定5過去問・13答案要素の本文マッピング: `13 / 13 PASS`
- SPEC指定4可視化へ接続する計算条件: `4 / 4`
- Topic 13先取り: `0件`
- SPEC外制御方式追加: `0件`
- Topic 11のPWMコンバータ側論点の再展開: `0件`
- 未確認300系実車値の真値化: `0件`

## Topic 12 解説PDF
- path: `topics/12_300series_vvvf_inverter_induction_control/12_300series_vvvf_inverter_induction_control_explanation.pdf`
- QA: `topics/12_300series_vvvf_inverter_induction_control/12_300series_vvvf_inverter_induction_control_explanation_pdf_qa.md`
- A4縦: `PASS`
- ページ数: `5`
- 180 dpi表示QA: `5 / 5 PASS`
- 文字抽出QA: `PASS`
- 固定5過去問・13答案要素接続: `13 / 13 PASS`
- 3段階例題: `3 / 3 PASS`
- SPEC指定4可視化: `4 / 4 PASS`
- Topic 13先取り: `0件`
- SPEC外制御方式追加: `0件`
- Topic 11のPWMコンバータ側論点再展開: `0件`
- 未確認300系実車値の真値化: `0件`

## Topic 12 練習問題source
- path: `topics/12_300series_vvvf_inverter_induction_control/12_300series_vvvf_inverter_induction_control_practice_source.md`
- 一次試験型: `8問`（全問五肢択一）
- 二次試験型: `4問`（途中式・前提・単位・理由を含む記述式）
- 合計: `12問`
- 数値・論理QA: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定5過去問・13答案要素接続: `13 / 13 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 13先取り: `0件`
- SPEC外制御方式追加: `0件`
- Topic 11のPWMコンバータ側論点再展開: `0件`
- 未確認300系実車値の真値化: `0件`

## Topic 12 練習PDF
- path: `topics/12_300series_vvvf_inverter_induction_control/12_300series_vvvf_inverter_induction_control_practice.pdf`
- QA: `topics/12_300series_vvvf_inverter_induction_control/12_300series_vvvf_inverter_induction_control_practice_qa.md`
- A4縦: `PASS`
- ページ数: `2`
- 180 dpi表示QA: `2 / 2 PASS`
- 文字抽出QA: `PASS`
- 数値・論理QA: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 二次の途中式・前提・単位・理由: `4 / 4 PASS`
- 固定5過去問・13答案要素接続: `13 / 13 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 13先取り: `0件`
- SPEC外制御方式追加: `0件`
- Topic 11のPWMコンバータ側論点再展開: `0件`
- 未確認300系実車値の真値化: `0件`

## Topic 12 解説画像PowerPoint
- path: `topics/12_300series_vvvf_inverter_induction_control/12_300series_vvvf_inverter_induction_control_images.pptx`
- QA: `topics/12_300series_vvvf_inverter_induction_control/12_300series_vvvf_inverter_induction_control_images_qa.md`
- 16:9: `PASS`
- スライド数: `4`
- SPEC指定4可視化: `4 / 4 PASS`
- Visual QA: `4 / 4 PASS`
- overflow / clipping / broken glyph: `0件`
- PowerPoint ZIP/XML整合性: `PASS`
- 固定5過去問・13答案要素接続: 維持
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 13先取り: `0件`
- SPEC外制御方式追加: `0件`
- Topic 11のPWMコンバータ側論点再展開: `0件`
- 未確認300系実車値の真値化: `0件`

## Topic 12 完成後独立再解答
- path: `topics/12_300series_vvvf_inverter_induction_control/12_300series_vvvf_inverter_induction_control_independent_reanswer.md`
- 一次: `11 / 11 PASS`
- 二次: `2 / 2 PASS`
- 合計: `13 / 13 PASS`
- 教材外知識補完: `0件`
- 公式解答・標準解答との不一致: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定範囲外追加: `0件`
- Topic 13先取り: `0件`
- SPEC外制御方式追加: `0件`
- Topic 11のPWMコンバータ側論点再展開: `0件`
- 未確認300系実車値追加: `0件`

## Topic 12 最終QA
- path: `topics/12_300series_vvvf_inverter_induction_control/12_300series_vvvf_inverter_induction_control_final_qa.md`
- 技術内容: `PASS`
- 固定一次4問＋二次1問・13答案要素: `PASS`
- 完成後独立再解答: `13 / 13 PASS`
- 必須成果物: `PASS`
- PDF/PPTX表示・構造QA: `PASS`
- 練習問題QA: `12 / 12 PASS`
- SPEC境界: `PASS`
- 初回進捗記録整合: `FAIL`
- 初回判定: `NEEDS_REVISION / IN_PROGRESS`
- 初回要修正: 主source冒頭状態欄、主source末尾次工程、練習source末尾次工程、練習PDF QA末尾のcurrent_status/次工程
- 進捗記録4箇所の同期: `完了`
- 再判定時進捗記録整合: `PASS`
- 最終判定: `PASS / completed`
- 技術本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTXの修正: `不要`

## Topic 12 固定範囲
- VVVF
- PWM
- V/f
- 同期速度
- すべり
- 定トルク領域
- 定出力領域
- 電圧制限
- 電流制限

SPEC指定可視化:
- 周波数―同期速度
- 周波数―電圧
- 回転速度―トルク
- 回転速度―出力

範囲境界:
- Topic 13の回生・四象限運転・回生エネルギーは追加しない
- ベクトル制御・センサレス制御等のSPEC外制御方式は追加しない
- Topic 11のPWMコンバータ側の高調波・力率制御・直流中間電圧制御を再展開しない
- 未確認の300系基底周波数、最大電圧、最大電流、PWMキャリア周波数、制御定数等を実車値として追加しない
- SPEC指定9項目との対応: `9 / 9 PASS`
- SPEC指定4可視化との対応: `4 / 4 PASS`
- Topic 13先取り: `0件`
- SPEC外制御方式追加: `0件`
- 未確認300系実車値追加: `0件`

## Topic 11 完成成果物・QA
- 固定EXAM_ALIGNMENT: 一次2問＋二次3問、計5問・27答案要素
- 解説source/PDF、練習source/PDF、解説画像PowerPoint: 完成
- 完成後独立再解答: `27 / 27 PASS`
- 最終QA: `PASS / completed`

## 次工程
Topic 13「300系④ 回生と四象限運転」の練習PDFを作成する。固定EXAM_ALIGNMENTは変更しない。
