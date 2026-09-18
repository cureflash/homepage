# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-18

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜15は最終QAまで `PASS / completed`。完成数は `15 / 39`。

現在地は `topic_16_practice_pdf_complete`。Topic 16 `700系 多レベル変換器とPWM` は制作前EXAM_ALIGNMENT、解説source＋3段階例題、解説PDF、練習問題source、練習PDFまで完了した。次工程は固定EXAM_ALIGNMENT・解説source・共通仮定モデル・練習問題source・練習PDFを変更せず、解説画像PowerPointを制作する。

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
Topic 16の解説画像PowerPointを制作する。固定5問・26答案要素、SPEC指定8項目・3可視化、解説source、共通仮定モデル、練習問題source、練習PDF、範囲境界を変更しない。
