# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-16

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜11は最終QAまで `PASS / completed`。完成数は `11 / 39`。

Topic 11 `300系② PWMコンバータ` は、固定一次2問＋二次3問・計5問・27答案要素を維持し、解説source/PDF、練習source/PDF、解説画像PowerPoint、完成後独立再解答、最終QAまで完了した。前回最終QAで唯一FAILだった進捗記録3箇所は `3 / 3` 同期済みで、再判定は `PASS / completed`。

現在地は `topic_11_completed`。次の未完了テーマはTopic 12 `300系③ VVVFインバータと誘導機制御`。

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

## Topic 11 完成成果物
- 解説source: `topics/11_300series_pwm_converter/11_300series_pwm_converter.md`
  - 3段階例題 `3 / 3`
  - 固定5問・27答案要素マッピング `27 / 27`
- 解説PDF: `topics/11_300series_pwm_converter/11_300series_pwm_converter_explanation.pdf`
  - A4縦5ページ、180 dpi Visual QA `5 / 5 PASS`、文字抽出QA `PASS`
- 練習source: `topics/11_300series_pwm_converter/11_300series_pwm_converter_practice_source.md`
  - 一次8問＋二次4問、数値・論理QA `12 / 12 PASS`、一次正答一意性 `8 / 8 PASS`
- 練習PDF: `topics/11_300series_pwm_converter/11_300series_pwm_converter_practice.pdf`
  - A4縦3ページ、Visual QA `3 / 3 PASS`、数値・論理再検算 `12 / 12 PASS`
- 解説画像PowerPoint: `topics/11_300series_pwm_converter/11_300series_pwm_converter_images.pptx`
- PowerPoint QA: `topics/11_300series_pwm_converter/11_300series_pwm_converter_images_qa.md`
  - 16:9、4スライド、SPEC指定4可視化 `4 / 4 PASS`
  - Visual QA `4 / 4 PASS`、overflow `0件`、ZIP/XML整合性 `PASS`
- 完成後独立再解答: `topics/11_300series_pwm_converter/11_300series_pwm_converter_independent_reanswer.md`
  - 一次 `10 / 10 PASS`、二次 `17 / 17 PASS`、総合 `27 / 27 PASS`
- 最終QA: `topics/11_300series_pwm_converter/11_300series_pwm_converter_final_qa.md`
  - `PASS / completed`
  - 必須成果物・表示QA・練習QA・SPEC境界・進捗記録整合: 全件 `PASS`

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
- Topic 12のVVVF、V/f、同期速度、すべり、定トルク／定出力領域はTopic 11へ追加していない
- Topic 13の回生、四象限運転、回生エネルギーはTopic 11へ追加していない
- 未確認の300系直流中間電圧、キャリア周波数、変調率、素子損失等を実車値として追加していない
- 固定範囲外追加: `0件`
- Topic 12〜13先取り: `0件`
- 未確認300系実車値追加: `0件`

## 最終QA再判定
- 前回FAILだった主source冒頭・主source末尾・練習source末尾: `3 / 3 同期済み`
- 固定一次2問＋二次3問・27答案要素: `PASS`
- 完成後独立再解答: `27 / 27 PASS`
- 必須成果物: `PASS`
- PDF/PPTX表示・構造QA: `PASS`
- 練習問題QA: `12 / 12 PASS`
- SPEC境界: `PASS`
- 進捗記録整合: `PASS`
- 最終判定: `PASS / completed`

## 次の正確な開始点
Topic 12「300系③ VVVFインバータと誘導機制御」の制作前EXAM_ALIGNMENTを行う。公式過去問を直近年度から確認し、一次・二次を合わせ原則5問以上、二次対象論点で確認できる記述問題を含める。過去問要求から教材範囲を固定してから本文制作へ進む。