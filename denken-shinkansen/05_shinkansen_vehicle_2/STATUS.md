# STATUS - 新幹線車両・電験二種

更新日: 2026-09-18

## 状態
- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `16 / 39`
- current_status: `topic_17_practice_source_complete`
- last_completed_topic: `16 700系 多レベル変換器とPWM`
- active_topic: `17 パワー半導体の損失比較`
- next_start: 新しいrunでTopic 17の練習PDFを作成する

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
- [x] 16 700系 多レベル変換器とPWM — PASS

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
- 文字欠落・文字化け・重なり・クリップ: `0件`
- 数値・論理整合: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定5過去問・26答案要素接続: `26 / 26 PASS`
- R7 一次 機械 問4 (3): `PASS / IGBT・MOSFETの識別と逆並列ダイオードとの差をPDF同期済み`
- SPEC指定8項目: `8 / 8 covered`
- SPEC指定3可視化の式系・条件との整合: `3 / 3 PASS`
- 共通仮定式系の変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`
- SHA-256: `b1da3262e4a4194a4bae3ea65bf9b82e6105872b350fad580437bdddcd481ffb`
- Git blob SHA: `127628da3cb3a4f863ff3e9d723165ac0e81fb86`
- 判定: `PASS / PRACTICE_PDF_REVISION_SYNC_COMPLETE`

## Topic 16 解説画像PowerPoint
- PowerPoint: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm_images.pptx`
- QA: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm_powerpoint_qa.md`
- 16:9: `4枚`
- 1600×900表示QA: `4 / 4 PASS`
- LibreOffice PDF変換・PPTX ZIP整合性: `PASS`
- PDF文字抽出Unicode置換文字・`(cid:)`: `0件 / 0件`
- 固定5過去問・26答案要素の可視化・接続: `26 / 26 PASS`
- R7 一次 機械 問4 (3): `PASS / IGBT・MOSFETを自己消弧形スイッチング素子として識別し、逆並列ダイオードとの差をスライド1・4へ同期済み`
- SPEC指定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 共通仮定モデル変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`
- SHA-256: `dc175b814c514d82e55ab8c8f3d50248c8adcbd8676708424a3282bb8861f4de`
- Git blob SHA: `fec7c9b85c3d756e49833615a69ee8fd18a685c4`
- 判定: `PASS / POWERPOINT_REVISION_SYNC_COMPLETE`

## Topic 16 完成後独立再解答前ゲート
- path: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm_blind_reanswer_gate.md`
- 改訂済み必須成果物再監査: `PASS`
- 固定5過去問・26答案要素: `変更なし`
- SPEC指定8項目・3可視化: `変更なし`
- 固定範囲外追加: `0件`
- 未確認700系実車値の真値化: `0件`
- 次回候補答案固定前に公式解答・標準解答・旧候補答案・旧blind QAを先読みしない条件を固定
- 判定: `PASS / BLIND_REANSWER_GATE_REBUILT`

## Topic 16 完成後独立再解答 候補答案固定
- path: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm_blind_reanswer_candidates.md`
- 固定過去問: `一次4問＋二次1問、計5問`
- 固定答案要素: `一次20＋二次6 / 26 / 26 固定`
- 候補答案固定前の公式解答・標準解答先読み: `0件`
- 旧候補答案本文・旧blind QA本文の先読み: `0件`
- 使用資料: `公式問題文＋改訂済みTopic 16教材sourceのみ`
- R7一次 問4(3): `MOSFETとして教材内根拠から独立固定`
- H24二次: `V_v≈100.7 V / K≈0.950 / tanφ=0.12 / I_Qmin≈-15.2 A`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC指定8項目・3可視化変更: `0件`
- SPEC外追加: `0件`
- 公式解答・標準解答との照合: `未実施`
- 判定: `PASS / CANDIDATES_REFRESHED`

## Topic 16 完成後独立再解答QA
- path: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm_blind_reanswer_qa.md`
- 固定済み新候補答案の後付け変更: `0件`
- 公式解答・標準解答照合: `5問 / 26答案要素 / 26 / 26 PASS`
- 一次: `20 / 20 PASS`
- 二次: `6 / 6 PASS`
- 教材だけで導出: `26 / 26 PASS`
- 教材外知識補完: `0件`
- R7 一次 機械 問4 (3): `PASS / MOSFET（チ）を改訂教材内根拠から独立固定`
- H24 二次 (2b): `PASS / 候補K≈0.950、標準K≈0.949は同一式・同一厳密値の丸め差`
- 公式解答／標準解答との内容不一致: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC指定8項目・3可視化変更: `0件`
- SPEC外追加: `0件`
- 判定: `PASS / BLIND_REANSWER_QA_PASS`

## Topic 16 最終QA
- path: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm_final_qa.md`
- 技術内容: `PASS`
- 固定一次4問＋二次1問・26答案要素: `PASS`
- 完成後blind再解答: `26 / 26 PASS`
- 必須成果物: `PASS`
- PDF/PPTX表示・構造QA: `PASS`
- 練習問題QA: `12 / 12 PASS`
- SPEC境界: `PASS`
- 進捗記録整合: `PASS`
- SPEC外追加: `0件`
- 判定: `PASS / completed`

## Topic 16 進捗記録同期
- 初回最終QA指摘4箇所: `4 / 4 同期完了`
- 主source冒頭 `## 状態`: `topic_16_progress_sync_complete`
- 主source末尾 `## 次工程`: `最終QA再判定`
- 練習source末尾 `## 次工程`: `topic_16_progress_sync_complete / 最終QA再判定`
- 練習PDF QA末尾 `## 現在地`: `topic_16_progress_sync_complete / 最終QA再判定`
- 技術成果物変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 問題・正答変更: `0件`
- PDF/PPTX変更: `0件`
- blind再解答結果変更: `0件`
- SPEC外追加: `0件`
- 判定: `PASS / PROGRESS_SYNC_COMPLETE`

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

## Topic 17 固定EXAM_ALIGNMENT
- source: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison.md`
- 固定過去問: 一次4問＋二次1問、計5問
- 固定答案要素: 一次20＋二次6、計26
- R7 一次 機械 問4 (1)〜(5)
- R4 一次 機械 問4 (1)〜(5)
- R2 一次 機械 問2 (1)〜(5)
- H24 一次 機械 問6 (1)〜(5)
- H24 二次 機械・制御 問1 (1)〜(6)
- 制作前独立検証: 一次 `20 / 20 PASS`、二次 `6 / 6 PASS`、合計 `26 / 26 PASS`
- 二次記述・計算問題: `1問`
- 公式解答／標準解答との不一致: `0件`
- 参考教材2系統以上: `PASS / e-sysnet.com + 電験王2`
- R8一次「機械」直近年度確認: `PASS / Topic 17へ直接対応する問題は固定採用せず`
- SPEC指定7項目: `7 / 7 aligned`
- SPEC指定3可視化: `3 / 3 aligned`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`
- 判定: `PASS / EXAM_ALIGNMENT_COMPLETE`

## Topic 17 解説source
- source: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_explanation_source.md`
- 解説本文: `完成`
- 3段階例題: `3 / 3 PASS`
- 固定5過去問・26答案要素の実効本文マッピング: `26 / 26 covered`
- SPEC指定7項目: `7 / 7 covered`
- SPEC指定3可視化の再生成条件: `3 / 3 fixed`
- 例題数値再計算: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`
- 判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

## Topic 17 解説PDF
- PDF: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_explanation.pdf`
- QA: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_explanation_pdf_qa.md`
- A4縦: `4ページ`
- 180 dpi表示QA: `4 / 4 PASS`
- PDF open: `PASS`
- preflight: `PASS / 非埋込CIDフォント警告あり、180 dpi全頁表示・文字抽出で確認`
- 文字抽出: `PASS`
- Unicode置換文字 / `(cid:)`: `0件 / 0件`
- 文字欠落・文字化け・重なり・クリップ: `0件`
- 固定5過去問・26答案要素への接続: `26 / 26 PASS`
- 3段階例題: `3 / 3 PASS`
- SPEC指定7項目: `7 / 7 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- source固定一般仮定値との整合: `PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`
- SHA-256: `8d5934da49b062049afb86c8b9ccd12b79e53ce4bdeda79936c54211148198a4`
- Git blob SHA: `4cc6cbd05b5ce58c06d54bc91acc9d10a97eb764`
- 判定: `PASS / EXPLANATION_PDF_COMPLETE`

## Topic 17 練習問題source
- source: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_practice_source.md`
- 一次試験型: `8問 / 8問五肢択一`
- 二次試験型: `4問 / 4問記述式`
- 完全解説: `12 / 12`
- 数値・論理再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定5過去問・26答案要素の実効接続: `26 / 26 PASS`
- SPEC指定7項目: `7 / 7 covered`
- SPEC指定3可視化の式系・条件との整合: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`
- 判定: `PASS / PRACTICE_SOURCE_COMPLETE`

## 過去Topic
Topic 01〜16は最終QAまで `PASS / completed`。個別の固定EXAM_ALIGNMENT、成果物、blind再解答、最終QA、既知の注意事項は各Topic配下のsource・QAを正本とする。

## 次工程
Topic 17「パワー半導体の損失比較」の練習PDFを作成する。固定EXAM_ALIGNMENT・固定5問・26答案要素・SPEC指定7項目・3可視化は変更しない。