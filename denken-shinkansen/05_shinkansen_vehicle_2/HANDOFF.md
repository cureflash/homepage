# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-17

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜11は最終QAまで `PASS / completed`。完成数は `11 / 39`。

現在地は `topic_12_practice_source_complete`。Topic 12 `300系③ VVVFインバータと誘導機制御` の制作前EXAM_ALIGNMENT、解説本文＋3段階例題、解説PDF＋QA、練習問題・完全解説sourceまで完了した。固定一次4問＋二次1問・13答案要素は変更していない。

## Topic 12 固定EXAM_ALIGNMENT
source: `topics/12_300series_vvvf_inverter_induction_control/12_300series_vvvf_inverter_induction_control.md`

固定過去問:
- R6 一次 機械 問2 (1),(5)
- R4 一次 機械 問2 (3)〜(5)
- R2 一次 機械 問3 (1),(4),(5)
- H30 二次 機械・制御 問1 (4)
- H26 一次 機械 問5 (3)〜(5)

品質ゲート:
- 一次: `4問・11答案要素`
- 二次: `1問・2答案要素`
- 合計: `5問・13答案要素`
- 制作前独立検証: 一次 `11 / 11 PASS`、二次 `2 / 2 PASS`、合計 `13 / 13 PASS`
- 二次記述問題: `1問`
- 公式解答との不一致: `0件`
- 参考教材2系統以上: `PASS`
- 固定EXAM_ALIGNMENT変更: `0件`

## Topic 12 解説source完成確認
- 解説本文: 完成
- 3段階例題: `3 / 3 PASS`
- 固定5過去問・13答案要素の本文マッピング: `13 / 13 PASS`
- SPEC指定4可視化へ接続する計算条件: `4 / 4`
- Topic 13先取り: `0件`
- SPEC外制御方式追加: `0件`
- Topic 11のPWMコンバータ側高調波・力率制御・直流中間電圧制御の再展開: `0件`
- 未確認300系実車値の真値化: `0件`

教材用可視化条件は実車値と誤認しないよう仮定値として固定した。4極、`f_b=50 Hz`、`V_max=400 V`、`n_b=1440 rpm`、`T_b=900 N·m` を用い、周波数―同期速度、周波数―電圧、回転速度―トルク、回転速度―出力へ直接接続できる。

## Topic 12 解説PDF完成確認
- PDF: `topics/12_300series_vvvf_inverter_induction_control/12_300series_vvvf_inverter_induction_control_explanation.pdf`
- QA: `topics/12_300series_vvvf_inverter_induction_control/12_300series_vvvf_inverter_induction_control_explanation_pdf_qa.md`
- A4縦5ページ
- 180 dpi表示QA: `5 / 5 PASS`
- 文字抽出QA: `PASS`
- 文字欠落・黒四角・重なり・クリップ: `0件`
- 固定5過去問・13答案要素接続: `13 / 13 PASS`
- 3段階例題: `3 / 3 PASS`
- SPEC指定4可視化: `4 / 4 PASS`
- 教材図の仮定値表記: `PASS`
- Topic 13先取り: `0件`
- SPEC外制御方式追加: `0件`
- Topic 11のPWMコンバータ側論点再展開: `0件`
- 未確認300系実車値の真値化: `0件`

## Topic 12 練習問題source完成確認
- source: `topics/12_300series_vvvf_inverter_induction_control/12_300series_vvvf_inverter_induction_control_practice_source.md`
- 一次試験型: `8問`（全問五肢択一）
- 二次試験型: `4問`（途中式・前提・単位・理由を含む記述式）
- 合計: `12問`
- 数値・論理QA: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定5過去問・13答案要素接続: `13 / 13 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 13先取り: `0件`
- SPEC外制御方式追加: `0件`
- Topic 11のPWMコンバータ側論点再展開: `0件`
- 未確認300系実車値の真値化: `0件`

練習問題は同期速度・同期角速度、すべり、V/f、低周波始動、定トルク／定出力領域、電圧制限・電流制限、VVVFと三相かご形誘導電動機を固定範囲だけで扱う。H30二次型の「磁束・始動トルク維持」と「始動電流抑制」を記述問題で独立に説明できる構成にした。

## Topic 12 固定範囲
- VVVF
- PWM
- V/f
- 同期速度
- すべり
- 定トルク領域
- 定出力領域
- 電圧制限
- 電流制限

SPEC指定可視化:
- 周波数―同期速度
- 周波数―電圧
- 回転速度―トルク
- 回転速度―出力

範囲境界:
- Topic 13の回生・四象限運転・回生エネルギーは先取りしない
- ベクトル制御・センサレス制御等のSPEC外制御方式は追加しない
- Topic 11のPWMコンバータ側の高調波・力率制御・直流中間電圧制御を再展開しない
- 未確認の300系基底周波数、最大電圧、最大電流、PWMキャリア周波数、制御定数等を実車値として追加しない
- SPEC指定9項目との対応: `9 / 9 PASS`
- SPEC指定4可視化との対応: `4 / 4 PASS`
- Topic 13先取り: `0件`
- SPEC外制御方式追加: `0件`
- 未確認300系実車値追加: `0件`

## Topic 11 完了確認
Topic 11 `300系② PWMコンバータ` は固定一次2問＋二次3問・27答案要素、解説source/PDF、練習source/PDF、解説画像PowerPoint、完成後独立再解答、最終QAまで完了。完成後独立再解答 `27 / 27 PASS`、最終判定 `PASS / completed`。

## 次の正確な開始点
Topic 12の練習PDFを作成する。練習sourceの全12問と完全解説を正本とし、A4縦・表示QA・文字抽出QA・問題/正答整合QAを行う。固定EXAM_ALIGNMENTは変更しない。