# STATUS - 新幹線車両・電験二種

更新日: 2026-09-18

## 状態
- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `15 / 39`
- current_status: `topic_16_explanation_pdf_revision_sync_complete`
- last_completed_topic: `15 500系 高速域の出力・熱解析`
- active_topic: `16 700系 多レベル変換器とPWM`
- next_start: sourceで補正した R7一次「機械」問4 (3) の最小説明を練習PDFへ同期し、A4ページ・文字抽出・180 dpi表示QA・一次8問/二次4問の整合を再確認する

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
- [ ] 16 700系 多レベル変換器とPWM — EXPLANATION_PDF_REVISION_SYNC_COMPLETE / 制作中

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
- 解説本文: `完成 / blind QA指摘1答案要素を最小補正済み`
- 3段階例題: `3 / 3 PASS`
- 固定5過去問・26答案要素の実効本文マッピング: `26 / 26 PASS`
- 補正: `R7 一次 機械 問4 (3) — IGBT/MOSFETを自己消弧形スイッチング素子として識別し、逆並列ダイオードとの差を明記`
- SPEC指定8項目: `8 / 8 covered`
- SPEC指定3可視化の再生成条件: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 判定: `PASS / SOURCE_REVISION_COMPLETE`

## Topic 16 解説PDF
- PDF: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm_explanation.pdf`
- QA: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm_explanation_pdf_qa.md`
- A4縦: `4ページ`
- 180 dpi表示QA: `4 / 4 PASS`
- PDF open/preflight・文字抽出: `PASS`
- 文字欠落・文字化け・重なり・クリップ: `0件`
- 3段階例題: `3 / 3 PASS`
- 固定5過去問・26答案要素への接続: `26 / 26 PASS`
- R7 一次 機械 問4 (3): `PASS / IGBT・MOSFETの識別と逆並列ダイオードとの差をPDF同期済み`
- SPEC指定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- source共通仮定モデルとの整合: `PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`
- 判定: `PASS / EXPLANATION_PDF_REVISION_SYNC_COMPLETE`

## Topic 16 練習問題source
- source: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm_practice_source.md`
- 一次試験型: `8問 / 8問五肢択一`
- 二次試験型: `4問 / 4問記述式`
- 完全解説: `12 / 12`
- 数値・論理再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定5過去問・26答案要素の実効接続: `26 / 26 PASS`
- 補正: `R7 一次 機械 問4 (3) を自己消弧形スイッチング素子（IGBT/MOSFET）の識別へ正しく再マッピング`
- SPEC指定8項目: `8 / 8 covered`
- SPEC指定3可視化の式系・条件との整合: `3 / 3 PASS`
- 解説source/PDFの共通仮定式系の変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`
- 判定: `PASS / SOURCE_REVISION_COMPLETE`

## Topic 16 練習PDF
- PDF: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm_practice.pdf`
- QA: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm_practice_qa.md`
- A4縦: `4ページ`
- 一次試験型: `8 / 8`、全問五肢択一
- 二次試験型: `4 / 4`、途中式・前提・単位・理由を収録
- 完全解説: `12 / 12`
- 180 dpi表示QA: `4 / 4 PASS`
- PDF open/preflight・文字抽出: `PASS`
- 数値・論理整合: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- SPEC指定8項目: `8 / 8 covered`
- SPEC指定3可視化の式系・条件との整合: `3 / 3 PASS`
- 共通仮定式系の変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`
- blind QAの1答案要素不足を同期改訂するまで最終ゲート未通過

## Topic 16 解説画像PowerPoint
- PowerPoint: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm_images.pptx`
- QA: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm_powerpoint_qa.md`
- 16:9: `4枚`
- 1600×900表示QA: `4 / 4 PASS`
- LibreOffice PDF変換・PPTX ZIP整合性: `PASS`
- SPEC指定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 共通仮定モデル変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`
- blind QAの1答案要素不足を同期改訂するまで最終ゲート未通過

## Topic 16 完成後独立再解答前ゲート
- path: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm_blind_reanswer_gate.md`
- 固定5過去問・26答案要素: `変更なし`
- 必須先読み対象の公式正答番号・標準解答本文保存: `0件`
- 必須先読み対象の完成済み個別答案・個別数値解・導出結果保存: `0件`
- 判定: `PASS / BLIND_REANSWER_READY`

## Topic 16 完成後独立再解答 候補答案固定
- path: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm_blind_reanswer_candidates.md`
- 実施条件: `公式問題文＋完成教材のみ / 公式解答・標準解答は未参照`
- 固定過去問・26答案要素: `変更なし`
- 一次候補答案: `20 / 20 固定`
- 二次候補答案: `6 / 6 固定`
- 合計: `26 / 26 固定`
- 判定: `PASS / BLIND_REANSWER_CANDIDATES_FIXED`

## Topic 16 完成後独立再解答QA
- path: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm_blind_reanswer_qa.md`
- 公式解答・標準解答との照合: `26 / 26 一致相当`
- 教材だけでの導出: `25 / 26 PASS`
- FAIL: `R7 一次 機械 問4 (3)` — 旧完成教材に必要な自己消弧形スイッチング素子の識別説明が不足
- source補正: `完了`
- 解説PDF同期: `完了`
- 練習PDF・PowerPoint同期後にblind再解答ゲートを作り直す
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC指定8項目・3可視化変更: `0件`
- SPEC外追加: `0件`
- 判定: `NEEDS_REVISION / BLIND_REANSWER_QA_COMPLETE`

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
source補正と解説PDF同期は完了。固定EXAM_ALIGNMENT、SPEC指定8項目・3可視化、共通仮定モデルを変更せず、同じ最小補正を練習PDFへ同期して表示QAする。その後にPowerPoint同期、blind再解答前ゲート再作成へ進む。
