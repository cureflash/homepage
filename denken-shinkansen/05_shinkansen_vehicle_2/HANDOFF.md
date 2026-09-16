# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-16

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜10は最終QAまで `PASS / completed`。完成数は `10 / 39`。

現在地は `topic_11_source_progress_synced`。Topic 11 `300系② PWMコンバータ` は、固定一次2問＋二次3問・計5問・27答案要素を変更せず、解説source/PDF、練習source/PDF、解説画像PowerPoint、完成後独立再解答まで完成している。前回最終QAで唯一FAILだった進捗記録3箇所は実成果物へ同期済み。技術本文・固定EXAM_ALIGNMENT・数式・例題・練習問題・正答・PDF/PPTXは変更していない。

## Topic 11 固定EXAM_ALIGNMENT
source: `topics/11_300series_pwm_converter/11_300series_pwm_converter.md`

固定過去問:
- R5 二次 機械・制御 問3 (1)〜(5)
- R4 一次 機械 問4 (1)〜(5)
- R1 二次 機械・制御 問3 (1)〜(3)
- H24 二次 機械・制御 問3 (1)〜(4)
- H22 一次 機械 問3 (1)〜(5)

品質ゲート:
- 一次: `2問・10答案要素`
- 二次: `3問・17答案要素`
- 合計: `5問・27答案要素`
- 制作前独立検証: `27 / 27 PASS`
- 完成後独立再解答: 一次 `10 / 10 PASS`、二次 `17 / 17 PASS`、合計 `27 / 27 PASS`
- 教材外知識補完: `0件`
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
  - 固定5問・27答案要素への接続を維持
  - Git blob SHA-1: `8688e3b87936a08c80ae5cdbf19dbc6d1033fb44`
  - SHA-256: `26158481860cac4adb3f870aeaf19d2100a4418b0e6c60a0032b1c114286b4aa`
- 完成後独立再解答: `topics/11_300series_pwm_converter/11_300series_pwm_converter_independent_reanswer.md`
  - R4一次 `5 / 5 PASS`
  - H22一次 `5 / 5 PASS`
  - 一次合計 `10 / 10 PASS`
  - R5二次 `7 / 7 PASS`
  - R1二次 `4 / 4 PASS`
  - H24二次 `6 / 6 PASS`
  - 二次合計 `17 / 17 PASS`
  - 総合 `27 / 27 PASS`
- 最終QA: `topics/11_300series_pwm_converter/11_300series_pwm_converter_final_qa.md`
  - 直前判定: `NEEDS_REVISION / IN_PROGRESS`
  - 技術内容・固定過去問・独立再解答・必須成果物・表示QA・練習QA・SPEC境界: `PASS`
  - 直前FAILだった進捗記録3箇所: `3 / 3 同期済み`
  - 最終QA再判定: 未実施

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

## 今回同期した進捗記録
教材内容は変更せず、前回最終QAで指摘された3箇所だけを同期した。

1. 主source `11_300series_pwm_converter.md` 冒頭状態欄
   - 全成果物・独立再解答・最終QAまで実施済みの実態へ同期。
2. 同主source末尾
   - `topic_11_source_progress_synced`、次工程を最終QA再判定へ同期。
3. 練習source `11_300series_pwm_converter_practice_source.md` 末尾
   - `topic_11_source_progress_synced`、次工程を最終QA再判定へ同期。

## 次の正確な開始点
Topic 11の最終QAを再判定する。固定5問・27答案要素、完成後独立再解答 `27 / 27 PASS`、必須成果物、PDF/PPTX QA、練習QA、SPEC境界、今回同期した進捗記録を再確認し、全件PASSの場合のみ `completed`、完成数 `11 / 39` とする。
