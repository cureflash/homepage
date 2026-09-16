# STATUS - 新幹線車両・電験二種

更新日: 2026-09-16

## 状態
- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `10 / 39`
- current_status: `topic_11_powerpoint_complete`
- last_completed_topic: `10 300系① 誘導電動機等価回路`
- active_topic: `11 300系② PWMコンバータ`
- next_start: 完成済み教材だけを使い、Topic 11固定5過去問・27答案要素を独立再解答する

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
- [ ] 11 300系② PWMコンバータ — POWERPOINT_COMPLETE / IN_PROGRESS

## Topic 11 固定EXAM_ALIGNMENT
- source: `topics/11_300series_pwm_converter/11_300series_pwm_converter.md`
- 固定過去問: 一次2問＋二次3問、計5問
- 固定答案要素: 一次10＋二次17、計27
- R5 二次 機械・制御 問3 (1)〜(5)
- R4 一次 機械 問4 (1)〜(5)
- R1 二次 機械・制御 問3 (1)〜(3)
- H24 二次 機械・制御 問3 (1)〜(4)
- H22 一次 機械 問3 (1)〜(5)
- 制作前独立検証: 一次 `10 / 10 PASS`、二次 `17 / 17 PASS`、合計 `27 / 27 PASS`
- 二次記述問題: `3問`
- 固定EXAM_ALIGNMENT変更: `0件`

## Topic 11 完成済み成果物
- 解説source: 完成、3段階例題 `3 / 3`、固定5問・27答案要素マッピング `27 / 27`
- 解説PDF: `topics/11_300series_pwm_converter/11_300series_pwm_converter_explanation.pdf`
  - A4縦5ページ、180 dpi Visual QA `5 / 5 PASS`、文字抽出QA `PASS`
- 練習source: `topics/11_300series_pwm_converter/11_300series_pwm_converter_practice_source.md`
  - 一次8問＋二次4問、数値・論理QA `12 / 12 PASS`、固定5問・27答案要素へ `27 / 27` 接続
- 練習PDF: `topics/11_300series_pwm_converter/11_300series_pwm_converter_practice.pdf`
  - A4縦3ページ、Visual QA `3 / 3 PASS`、数値・論理再検算 `12 / 12 PASS`
- 解説画像PowerPoint: `topics/11_300series_pwm_converter/11_300series_pwm_converter_images.pptx`
- PowerPoint QA: `topics/11_300series_pwm_converter/11_300series_pwm_converter_images_qa.md`
  - 16:9、4スライド
  - SPEC指定4可視化 `4 / 4 PASS`
  - Visual QA `4 / 4 PASS`
  - overlap / clipping / broken glyph `0件`
  - `slides_test.py` overflow `PASS / 0件`
  - PowerPoint ZIP/XML整合性 `PASS`
  - 固定一次2問＋二次3問・27答案要素を維持
  - Git blob SHA-1: `8688e3b87936a08c80ae5cdbf19dbc6d1033fb44`
  - SHA-256: `26158481860cac4adb3f870aeaf19d2100a4418b0e6c60a0032b1c114286b4aa`

## Topic 11 固定範囲
- PWMコンバータ
- 直流中間回路
- 基本波
- 高調波
- 力率制御
- 直流電圧制御
- スイッチング
- 変換損失

SPEC指定可視化:
- PWM波形
- 基本波・高調波
- 変調条件―基本波電圧
- 入力電流波形

範囲境界:
- Topic 12のVVVF、V/f、同期速度、すべり、定トルク／定出力領域は追加しない
- Topic 13の回生、四象限運転、回生エネルギーは追加しない
- 未確認の300系直流中間電圧、キャリア周波数、変調率、素子損失等を実車値として追加しない
- 今回の固定範囲外追加: `0件`
- Topic 12〜13先取り: `0件`
- 未確認300系実車値追加: `0件`

## 次工程
完成済みの解説source/PDF・練習source/PDF・PowerPointだけを使い、保存済み公式正答を先に参照せず、固定一次2問＋二次3問・27答案要素を独立再解答する。教材外知識による補完は禁止する。
