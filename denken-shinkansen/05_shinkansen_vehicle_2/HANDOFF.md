# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-16

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜10は最終QAまで `PASS / completed`。完成数は `10 / 39`。

現在地は `topic_11_powerpoint_complete`。Topic 11 `300系② PWMコンバータ` は、固定一次2問＋二次3問・計5問・27答案要素を変更せず、解説source/PDF、練習source/PDF、解説画像PowerPointまで完成した。

次工程は完成教材だけを使った固定5過去問・27答案要素の独立再解答。保存済み公式正答を先に参照せず、教材外知識で補完しない。

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

## 次の正確な開始点
Topic 11 `300系② PWMコンバータ` の完成後独立再解答。

1. 完成済みの解説source/PDF・練習source/PDF・PowerPointだけを使用する。
2. 保存済み公式正答を先に参照しない。
3. 固定一次2問＋二次3問・27答案要素を再導出する。
4. 教材外知識で補完しない。
5. 固定EXAM_ALIGNMENT、固定範囲、Topic 12〜13境界を変更しない。
6. 再解答後に公式解答と照合し、一致数と教材外補完件数を記録する。
