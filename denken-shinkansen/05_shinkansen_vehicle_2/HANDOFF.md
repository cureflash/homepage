# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-18

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜15は最終QAまで `PASS / completed`。完成数は `15 / 39`。

現在地は `topic_16_blind_reanswer_candidates_fixed`。Topic 16 `700系 多レベル変換器とPWM` は制作前EXAM_ALIGNMENT、解説source＋3段階例題、解説PDF、練習問題source、練習PDF、解説画像PowerPoint、完成後独立再解答前ゲートまで完了済み。さらに、公式解答・標準解答を先に開かず、完成教材と固定5問の公式問題文だけで一次20＋二次6、計26答案要素を再解答し、候補答案をGitHubへ固定した。固定EXAM_ALIGNMENT、SPEC指定8項目・3可視化、共通仮定モデル、範囲境界は変更していない。

次工程は、固定候補答案を変更せず公式解答・標準解答と照合し、26答案要素の一致と、各答案が完成教材内の根拠だけで導けたことを確認して完成後独立再解答のPASS/FAILを確定する。

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
- 正答記号・個別最終解のsource保存: `0件`
- 判定: `PASS / EXAM_ALIGNMENT_COMPLETE`

## Topic 16 解説source
- 解説本文: `完成`
- 3段階例題: `3 / 3 PASS`
- 固定5過去問・26答案要素の本文マッピング: `26 / 26 PASS`
- SPEC指定8項目: `8 / 8 covered`
- SPEC指定3可視化の再生成条件: `3 / 3 PASS`
- 共通仮定モデルの実車値誤認防止: `PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 正答記号・固定過去問の個別最終解保存: `0件`
- 判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

## Topic 16 解説PDF
- PDF: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm_explanation.pdf`
- QA: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm_explanation_pdf_qa.md`
- A4縦: `4ページ`
- 180 dpiレンダリング: `4 / 4 PASS`
- PDF open/preflight・文字抽出: `PASS`
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
source: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm_practice_source.md`

品質ゲート:
- 一次試験型: `8問 / 8問五肢択一`
- 二次試験型: `4問 / 4問記述式`
- 完全解説: `12 / 12`
- 数値・論理再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定5過去問・26答案要素への接続: `26 / 26 PASS`
- SPEC指定8項目: `8 / 8 covered`
- SPEC指定3可視化の式系・条件との整合: `3 / 3 PASS`
- 共通仮定モデルの変更: `0件`
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
- 180 dpiレンダリング: `4 / 4 PASS`
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

## Topic 16 解説画像PowerPoint
- PowerPoint: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm_images.pptx`
- QA: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm_powerpoint_qa.md`
- 16:9: `4枚`
- 1600×900表示QA: `4 / 4 PASS`
- LibreOffice PDF変換・PPTX ZIP整合性: `PASS`
- 固定5過去問・26答案要素への接続: `26 / 26 PASS`
- SPEC指定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 共通仮定モデル変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 問題・正答・完全解説の変更: `0件`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`
- 判定: `PASS / POWERPOINT_COMPLETE`

## Topic 16 完成後独立再解答前ゲート
- path: `topics/16_700series_multilevel_converter_pwm/16_700series_multilevel_converter_pwm_blind_reanswer_gate.md`
- 判定: `PASS / BLIND_REANSWER_READY`
- 必須先読み対象: `MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC / STATUS / HANDOFF / main source / 練習source / 各QA / 成果物一覧`
- 固定公式過去問の公式正答番号・標準解答本文保存: `0件`
- 固定公式過去問の完成済み個別答案・個別数値解・導出結果保存: `0件`
- main sourceの公式問題・公式解答URL: `URLのみ / 正答内容保存なし`
- 練習sourceの正答・解説: `教材自身の練習問題 / 固定公式過去問の保存済み正答ではない`
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
- 公式解答・標準解答との照合: `未実施`
- 判定: `PASS / BLIND_REANSWER_CANDIDATES_FIXED`

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
Topic 16 `700系 多レベル変換器とPWM` の固定候補答案を変更せず、公式解答・標準解答を開いて固定5問・26答案要素を照合する。各答案要素が完成教材内の根拠だけで導けたかも確認して完成後独立再解答のPASS/FAILを確定する。固定EXAM_ALIGNMENT、SPEC指定8項目・3可視化、共通仮定モデル、範囲境界を変更しない。
