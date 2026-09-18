# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-18

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜15は最終QAまで `PASS / completed`。完成数は `15 / 39`。

現在地は `topic_16_blind_reanswer_qa_pass`。Topic 16 `700系 多レベル変換器とPWM` は、blind再解答QAで検出した R7一次「機械」問4 (3) の1答案要素不足を main source・解説PDF・練習source/PDF・PowerPointへ最小補正し、blind再解答前ゲートを再構築済み。その後、公式解答・標準解答・旧候補答案本文・旧blind QA本文を先に見ず、固定5問の公式問題文と改訂済み教材sourceだけで26答案要素を独立再解答して候補答案を固定し、固定後に公式解答・標準解答と照合した。固定5問・26答案要素は `26 / 26 PASS`、教材外知識補完0件。Topic 16は最終QA未実施のためcompletedにしない。

次工程は、Topic 16の最終QAを実施し、固定EXAM_ALIGNMENT・必須成果物・表示QA・blind再解答QA・進捗記録の整合を確認する。

## Topic 16 固定EXAM_ALIGNMENT
source: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm.md`

固定過去問:
- R7 一次 機械 問4 (1)〜(5)
- R4 一次 機械 問4 (1)〜(5)
- H29 一次 機械 問3 (1)〜(5)
- H24 一次 機械 問3 (1)〜(5)
- H24 二次 機械・制御 問3 (1)〜(4)

品質ゲート:
- 一次: `4問・20答案要素`
- 二次: `1問・6答案要素`
- 合計: `5問・26答案要素`
- 制作前独立検証: `26 / 26 PASS`
- 二次記述・計算問題: `1問`
- 公式解答／標準解答との不一致: `0件`
- 参考教材2系統以上: `PASS`
- R8一次「機械」直近年度確認: `PASS / Topic 16へ直接対応する問題は固定採用せず`
- SPEC指定8項目: `8 / 8 aligned`
- SPEC指定3可視化: `3 / 3 aligned`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`
- 判定: `PASS / EXAM_ALIGNMENT_COMPLETE`

## Topic 16 解説source
- 解説本文: `完成 / blind QA指摘1答案要素を最小補正済み`
- 3段階例題: `3 / 3 PASS`
- 固定5過去問・26答案要素の実効本文マッピング: `26 / 26 PASS`
- 補正: `R7 一次 機械 問4 (3) — IGBT/MOSFETを自己消弧形スイッチング素子として識別し、逆並列ダイオードとの差を明記`
- SPEC指定8項目: `8 / 8 covered`
- SPEC指定3可視化の再生成条件: `3 / 3 PASS`
- 共通仮定モデルの実車値誤認防止: `PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 判定: `PASS / SOURCE_REVISION_COMPLETE`

## Topic 16 解説PDF
- PDF: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm_explanation.pdf`
- QA: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm_explanation_pdf_qa.md`
- A4縦: `4ページ`
- 180 dpiレンダリング: `4 / 4 PASS`
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
- SHA-256: `79d802587c25f5308b2a8902256bacf4f75cb435f2c56af4d9fffbc65a65c4e8`
- 判定: `PASS / EXPLANATION_PDF_REVISION_SYNC_COMPLETE`

## Topic 16 練習問題source
source: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm_practice_source.md`

品質ゲート:
- 一次試験型: `8問 / 8問五肢択一`
- 二次試験型: `4問 / 4問記述式`
- 完全解説: `12 / 12`
- 数値・論理再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定5過去問・26答案要素の実効接続: `26 / 26 PASS`
- 補正: `R7 一次 機械 問4 (3) を自己消弧形スイッチング素子（IGBT/MOSFET）の識別へ正しく再マッピング`
- SPEC指定8項目: `8 / 8 covered`
- SPEC指定3可視化の式系・条件との整合: `3 / 3 PASS`
- 共通仮定モデルの変更: `0件`
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
- 180 dpiレンダリング: `4 / 4 PASS`
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
- 固定5問・26答案要素の可視化・接続: `26 / 26 PASS`
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
- 固定公式過去問: `一次4問＋二次1問 / 5問・26答案要素 / 変更なし`
- SPEC指定8項目・3可視化: `変更なし`
- 共通仮定モデル変更: `0件`
- 固定範囲外追加: `0件`
- 未確認700系実車値の真値化: `0件`
- 次回候補答案固定前に公式解答・標準解答・旧候補答案・旧blind QAを先読みしない条件を固定
- 判定: `PASS / BLIND_REANSWER_GATE_REBUILT`

## Topic 16 完成後独立再解答 候補答案固定
- path: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm_blind_reanswer_candidates.md`
- 固定過去問: `一次4問＋二次1問 / 5問`
- 固定答案要素: `一次20＋二次6 / 26 / 26 固定`
- 候補答案固定前の公式解答・標準解答先読み: `0件`
- 旧候補答案本文・旧blind QA本文の先読み: `0件`
- 使用資料: `固定5問の公式問題文＋改訂済みTopic 16教材sourceのみ`
- R7一次 問4(3): `MOSFETとして教材内根拠から独立固定`
- H24二次: `V_v≈100.7 V / K≈0.950 / tanφ=0.12 / I_Qmin≈-15.2 A`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC指定8項目・3可視化変更: `0件`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`
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
- SPEC指定8項目・3可視化・共通仮定モデル変更: `0件`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`
- 判定: `PASS / BLIND_REANSWER_QA_PASS`

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
- `dv/dt`はSPEC指定項目として扱うが、今回固定した第二種公式過去問で直接問われた論点とは記載しない
- 公開一次資料で確認できない700系の変換器レベル数、直流電圧、素子耐圧、キャリア周波数、損失・効率値を実車値として置かない

## 解説sourceで固定した教材モデル
- 2レベルの基準: 中点基準 `±E_d/2`
- 多レベル比較: 実車値ではない理想分担3レベルモデルを使用
- 位相差合成: `sin(nωt)+sin(n(ωt-φ))=2cos(nφ/2)sin(nωt-nφ/2)`
- H24二次型: `V_v=E_dK/√2`、`V_v=V_L+jXI`
- `dv/dt≈Δv/Δt`
- 簡略スイッチング損失: `P_sw≈f_swE_sw`
- 変換効率: `η=P_out/(P_out+P_loss)`
- SPEC指定3可視化は `E_d=1.0 pu` の共通仮定条件から再生成する

## 過去Topic
Topic 01〜15は完了済み。個別の固定EXAM_ALIGNMENT、成果物、blind再解答、最終QAは各Topic配下のsource・QAを正本とする。

## 次工程
Topic 16の最終QAを実施し、固定EXAM_ALIGNMENT、必須成果物、表示QA、blind再解答QA、進捗記録の整合を確認する。最終QAがPASSした場合のみ `completed` とする。
