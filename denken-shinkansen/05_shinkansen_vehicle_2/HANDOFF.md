# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-18

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜15は最終QAまで `PASS / completed`。完成数は `15 / 39`。

現在地は `topic_16_explanation_pdf_revision_sync_complete`。Topic 16 `700系 多レベル変換器とPWM` は、blind再解答QAで検出した R7一次「機械」問4 (3) の1答案要素不足について、main source と練習sourceを最小補正済み。今回、その同じ補正を解説PDFへ同期し、IGBT/MOSFETを自己消弧形スイッチング素子として識別し、逆並列ダイオードを還流用の別素子として区別できる説明を収録した。A4 4ページ、180 dpi表示 `4 / 4 PASS`、固定5問・26答案要素 `26 / 26 PASS`、SPEC指定8項目・3可視化も維持している。固定EXAM_ALIGNMENT、共通仮定モデル、範囲境界は変更していない。練習PDF・PowerPoint同期とblind再試験が残るためTopic 16はcompletedにしない。

次工程は同じ最小補正を練習PDFへ同期し、A4ページ・文字抽出・180 dpi表示QA・一次8問/二次4問の整合を再確認する。

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
- 判定: `PASS / BLIND_REANSWER_READY`
- 固定公式過去問の公式正答番号・標準解答本文保存: `0件`
- 固定公式過去問の完成済み個別答案・個別数値解・導出結果保存: `0件`
- 固定EXAM_ALIGNMENT・教材本文・PDF/PPTX・共通仮定モデル変更: `0件`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`

## Topic 16 完成後独立再解答 候補答案固定
- path: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm_blind_reanswer_candidates.md`
- 実施条件: `公式問題文＋完成教材のみ / 公式解答・標準解答は未参照`
- 固定過去問: `一次4問＋二次1問、計5問`
- 一次候補答案: `20 / 20 固定`
- 二次候補答案: `6 / 6 固定`
- 合計: `26 / 26 固定`
- 固定EXAM_ALIGNMENT変更: `0件`
- 教材本文・PDF/PPTX変更: `0件`
- SPEC指定8項目・3可視化・共通仮定モデル変更: `0件`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`
- 判定: `PASS / BLIND_REANSWER_CANDIDATES_FIXED`

## Topic 16 完成後独立再解答QA
- path: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm_blind_reanswer_qa.md`
- 公式解答・標準解答との照合: `26 / 26 一致相当`
- H24二次の変調率: `候補0.950 / 標準解答0.949` は同一式・同一厳密値の途中丸め差
- 教材だけでの導出: `25 / 26 PASS`
- FAIL: `R7 一次 機械 問4 (3)` — 旧完成教材に当該識別知識が不足
- source補正: `完了`
- 解説PDF同期: `完了`
- 練習PDF・PowerPoint同期後にblind再解答ゲートを作り直す
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC指定8項目・3可視化・共通仮定モデル変更: `0件`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`
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
source補正と解説PDF同期は完了。固定範囲を広げず、同じ最小補正を練習PDFへ同期して表示QAする。その後、PowerPoint同期、公式解答と旧blind QAを先読み対象から外す再解答ゲート再作成へ進む。
