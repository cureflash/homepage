# STATUS - 新幹線車両・電験二種

更新日: 2026-09-16

## 状態
- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: 10 / 39
- current_status: `topic_11_practice_source_complete`
- last_completed_topic: `10 300系① 誘導電動機等価回路`
- active_topic: `11 300系② PWMコンバータ`
- next_start: Topic 11の練習PDFを作成する

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
- [ ] 11 300系② PWMコンバータ — PRACTICE_SOURCE_COMPLETE / IN_PROGRESS

## Topic 11 制作前EXAM_ALIGNMENT
- source: `topics/11_300series_pwm_converter/11_300series_pwm_converter.md`
- 固定過去問: 一次2問＋二次3問、計5問
- 固定答案要素: 一次10＋二次17、計27
- R5 二次 機械・制御 問3: (1)〜(5) — 高調波発生源・影響、基本波／高調波分離、補償電流・実効値
- R4 一次 機械 問4: (1)〜(5) — オン損失、漏れ電流、スイッチング損失、周期、ソフトスイッチング
- R1 二次 機械・制御 問3: (1)〜(3)のみ — 正弦波PWM、系統電流基本波、連系リアクトル、交流端子基本波、直流中間電圧条件
- H24 二次 機械・制御 問3: (1)〜(4) — PWM変調率、基本波電圧、フェーザ、力率、有効・無効電流
- H22 一次 機械 問3: (1)〜(5) — 三角搬送波、変調率、線間基本波実効値、直流電圧制御、力率1制御
- 制作前独立検証: 一次 `10 / 10 PASS`、二次 `17 / 17 PASS`、合計 `27 / 27 PASS`
- 二次記述問題: `3問`
- 固定範囲外知識による補完: `0件`
- Topic 12〜13先取り: `0件`
- 未確認300系実車値追加: `0件`

## Topic 11 解説source
- 解説本文: 完成
- 3段階例題: `3 / 3`
- 固定5問・27答案要素の本文マッピング: `27 / 27`
- SPEC指定4可視化へ直接つながる計算条件: `4 / 4`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 12〜13先取り: `0件`
- 未確認300系実車値追加: `0件`

## Topic 11 解説PDF
- PDF: `topics/11_300series_pwm_converter/11_300series_pwm_converter_explanation.pdf`
- QA: `topics/11_300series_pwm_converter/11_300series_pwm_converter_explanation_pdf_qa.md`
- A4縦: `5ページ`
- 180 dpi Visual QA: `5 / 5 PASS`
- overlap / clipping / broken glyph: `0件`
- 文字抽出QA: `PASS` / Unicode置換文字 `0件` / `□` `0件`
- 固定EXAM_ALIGNMENT: 一次2問＋二次3問・27答案要素を維持
- 3段階例題: `3 / 3`
- SPEC指定4可視化: `4 / 4`
- 固定範囲外追加: `0件`
- Topic 12〜13先取り: `0件`
- 未確認300系実車値追加: `0件`
- 教材用仮定値と実車値の区別: 明記
- SHA-256: `c72e80b3d9a69510d1541d2eb03d88f21071999b68f3fb9429e634a97aa66db4`

## Topic 11 練習source
- source: `topics/11_300series_pwm_converter/11_300series_pwm_converter_practice_source.md`
- 一次試験型: `8問`、すべて五肢択一
- 二次試験型: `4問`、途中式・前提・単位・理由を含む記述式
- 合計: `12問`
- 数値・論理QA: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 二次記述QA: `4 / 4 PASS`
- 固定5問・27答案要素への接続: `27 / 27`
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定範囲外追加: `0件`
- Topic 12〜13先取り: `0件`
- 未確認300系実車値追加: `0件`
- 問題数値: すべて教材用仮定値

## Topic 11 固定範囲
- PWMコンバータ
- 直流中間回路
- 基本波
- 高調波
- 力率制御
- 直流電圧制御
- スイッチング
- 変換損失

指定計算・グラフ:
- PWM波形
- 基本波・高調波
- 変調条件―基本波電圧
- 入力電流波形

範囲外として追加しない:
- Topic 12のVVVF、V/f、同期速度、すべり、定トルク／定出力領域
- Topic 13の回生、四象限運転、回生エネルギー
- 未確認の300系直流中間電圧、キャリア周波数、変調率、素子損失等の実車値

## 次工程
Topic 11の固定EXAM_ALIGNMENT・解説source・解説PDF・練習sourceを変更せず、練習PDFを作成する。
