# STATUS - 新幹線車両・電験二種

更新日: 2026-09-18

## 状態
- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `15 / 39`
- current_status: `topic_16_practice_pdf_complete`
- last_completed_topic: `15 500系 高速域の出力・熱解析`
- active_topic: `16 700系 多レベル変換器とPWM`
- next_start: Topic 16の固定EXAM_ALIGNMENT・解説source・共通仮定モデル・練習問題source・練習PDFを変更せず、解説画像PowerPointを制作する

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
- [x] 14 300系⑤ 走行抵抗と必要けん引力 — PASS
- [x] 15 500系 高速域の出力・熱解析 — PASS
- [ ] 16 700系 多レベル変換器とPWM — PRACTICE_PDF_COMPLETE / 制作中

詳細な過去TopicのQAは各 `topics/` 配下のsource・QAを正本とする。

## Topic 16 固定EXAM_ALIGNMENT
- source: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm.md`
- 固定過去問: 一次4問＋二次1問、計5問
- 固定答案要素: 一次20＋二次6、計26
- R7 一次 機械 問4 (1)〜(5)
- R4 一次 機械 問4 (1)〜(5)
- H29 一次 機械 問3 (1)〜(5)
- H24 一次 機械 問3 (1)〜(5)
- H24 二次 機械・制御 問3 (1)〜(4)
- 制作前独立検証: 一次 `20 / 20 PASS`、二次 `6 / 6 PASS`、合計 `26 / 26 PASS`
- 二次記述・計算問題: `1問`
- 公式解答／標準解答との不一致: `0件`
- SPEC指定8項目: `8 / 8 aligned`
- SPEC指定3可視化: `3 / 3 aligned`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`

## Topic 16 解説source
- 解説本文: `完成`
- 3段階例題: `3 / 3 PASS`
- 固定5過去問・26答案要素の本文マッピング: `26 / 26 PASS`
- SPEC指定8項目: `8 / 8 covered`
- SPEC指定3可視化の再生成条件: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 正答記号・固定過去問の個別最終解保存: `0件`
- 判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

## Topic 16 解説PDF
- PDF: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm_explanation.pdf`
- QA: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm_explanation_pdf_qa.md`
- A4縦: `4ページ`
- 180 dpi表示QA: `4 / 4 PASS`
- 文字抽出・表示: `PASS`
- 固定5過去問・26答案要素への接続: `26 / 26 PASS`
- 3段階例題: `3 / 3 PASS`
- SPEC指定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- source共通仮定モデルとの整合: `PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 正答記号・固定過去問の個別最終解保存: `0件`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`
- 判定: `PASS / EXPLANATION_PDF_COMPLETE`

## Topic 16 練習問題source
- source: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm_practice_source.md`
- 一次試験型: `8問 / 8問五肢択一`
- 二次試験型: `4問 / 4問記述式`
- 完全解説: `12 / 12`
- 数値・論理再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定5過去問・26答案要素への接続: `26 / 26 PASS`
- SPEC指定8項目: `8 / 8 covered`
- SPEC指定3可視化の式系・条件との整合: `3 / 3 PASS`
- 解説source/PDFの共通仮定式系の変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 正答記号・固定過去問の個別最終解保存: `0件`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`
- 判定: `PASS / PRACTICE_SOURCE_COMPLETE`

## Topic 16 練習PDF
- PDF: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm_practice.pdf`
- QA: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm_practice_qa.md`
- A4縦: `4ページ`
- 一次試験型: `8 / 8`、全問五肢択一
- 二次試験型: `4 / 4`、途中式・前提・単位・理由を収録
- 完全解説: `12 / 12`
- 180 dpi表示QA: `4 / 4 PASS`
- PDF open/preflight・文字抽出: `PASS`
- 固定5過去問・26答案要素への接続: `26 / 26 PASS`
- 数値・論理整合: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- SPEC指定8項目: `8 / 8 covered`
- SPEC指定3可視化の式系・条件との整合: `3 / 3 PASS`
- 共通仮定式系の変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 問題・正答・完全解説の変更: `0件`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`
- 判定: `PASS / PRACTICE_PDF_COMPLETE`

## Topic 16 SPEC固定範囲
扱う内容:
- 多レベル変換
- PWM
- 素子電圧
- 出力電圧
- 高調波
- `dv/dt`
- スイッチング周波数
- 変換効率

SPEC指定可視化:
- 2レベル・多レベル出力波形比較
- 高調波比較
- 素子電圧比較

範囲境界:
- Topic 11のPWMコンバータは前提確認に必要な範囲だけ参照する
- Topic 12のVVVF・V/f・誘導機速度制御、Topic 13の回生・四象限運転は追加しない
- Topic 17のパワー半導体損失比較へ先取りしない
- `dv/dt`はSPEC指定項目として扱うが、固定公式過去問で直接問われたとは扱わない
- 未確認700系実車回路・レベル数・電圧・素子定格・キャリア周波数・効率を真値化しない

## 過去Topic
Topic 01〜15は最終QAまで `PASS / completed`。個別の固定EXAM_ALIGNMENT、成果物、blind再解答、最終QA、既知の注意事項は各Topic配下のsource・QAを正本とする。

## 次工程
Topic 16「700系 多レベル変換器とPWM」の解説画像PowerPointを制作する。固定一次4問＋二次1問・26答案要素、SPEC指定8項目・3可視化、解説source、共通仮定モデル、練習問題source、練習PDF、範囲境界を変更しない。
