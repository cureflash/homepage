# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-17

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は `11 / 16`。Topic 01〜11は完成済み。

## 今回進捗
Topic 12 `320km/hでもパンタグラフが離れないのはなぜ？` の解説PDF＋QAを完成した。A4縦4ページ、200 dpi表示QA `4 / 4 PASS`、文字抽出 `PASS`。本文§1〜§14、基礎・本試験標準・複合の3段階例題、固定5問・6答案要素の要求事項を反映し、例題数値・論理再検算 `3 / 3 PASS`、固定過去問対応 `6 / 6` を維持した。

SPEC固定範囲外追加0件、Topic 13以降の先取り0件、未確認新幹線実設備値の真値化0件。制作前の保存済み選択肢番号・最終数値解はPDFへ転記しておらず、完成後ブラインド独立再解答の条件を維持している。

source: `topics/12_overhead_line_mechanics/12_overhead_line_mechanics.md`
解説PDF: `topics/12_overhead_line_mechanics/12_overhead_line_mechanics_explanation.pdf`
解説PDF QA: `topics/12_overhead_line_mechanics/12_overhead_line_mechanics_explanation_qa.md`

固定問題:
- R7上 電力 問12
- R6下 電力 問13
- R3 電力 問16 (a)(b)
- H29 電力 問8
- H24 電力 問13

## Topic 12 固定範囲
`SPEC.md` から追加しない。

- 電線の自重
- 弛度
- 支持点
- 径間
- 張力
- 温度
- 風圧荷重
- 着雪
- 電線伸縮
- 波動伝播の基本
- 高速集電

品質ゲートの中心は弛度・径間・水平張力・電線実長・温度伸縮。`D=wS^2/(8T)`、`L≈S+8D^2/(3S)`、`ΔL=αLΔθ` を本試験標準の逆算まで扱う。風圧荷重・着雪は単位長さ当たり荷重への影響、波動伝播は張力と線密度に依存する基本関係、高速集電はその物理的接続までとする。未確認の架線張力・波動速度・接触力・構成寸法、パンタグラフ制御・空力、Topic 13の材料論点、支持物・支線設計、法規上の風圧荷重区分は追加しない。

H25 電力 問9は架線張力に関連するが、支線・支柱の幾何と支持物設計が中心で固定範囲外の独立論点を要するため品質ゲートから除外。H24 電力 問13はR6下 電力 問13と同型だが、温度上昇と弛度の継続出題確認として採用した。

## Topic 12 現在の品質ゲート
- 制作前EXAM_ALIGNMENT: 完了
- 固定問題: `5問・6答案要素`
- 制作前独立検証: `6 / 6 PASS`
- 公式解答との不一致: `0件`
- 解説本文: §1〜§14 完成
- 3段階例題: 基礎・本試験標準・複合 各1問完成
- 固定5問・6答案要素の本文要求事項マッピング: `6 / 6 PASS`
- 3段階例題独立再計算: `3 / 3 PASS`
- 解説PDF: A4縦4ページ
- 解説PDF表示QA: 200 dpi `4 / 4 PASS`
- 解説PDF文字抽出QA: `PASS`
- 解説PDF数値・論理再検算: `3 / 3 PASS`
- SPEC固定範囲外の採用問題・本文・PDF追加: `0件`
- Topic 13以降の論点による補完・先取り: `0件`
- 未確認新幹線実設備値への依存・真値化: `0件`
- 件数合わせの仕様追加: `0件`
- 制作前の保存済み正答・選択肢番号のPDF転記: `0件`

## 直前完了テーマ
Topic 11 `架線事故ではどうやって電気を止める？` は `PASS / completed`。固定5問・7答案要素の完成後ブラインド独立再解答 `7 / 7 PASS`、公式解答一致 `7 / 7`、必須成果物、PDF/PPTX QA、SPEC境界、進捗記録整合を全件PASS確認済み。

固定結果:
- 品質ゲート対象: 公式過去問5問・7答案要素
- R5下 電力 問16 (a)(b): `(2),(4)`
- R5上 電力 問16 (a)(b): `(4),(2)`
- R2 電力 問8: `(4)`
- R2 電力 問9: `(2)`
- H22 電力 問8: `(3)`
- 制作前独立検証: `7 / 7 PASS`
- 解説本文: §1〜§15 完成
- 3段階例題: 基礎・本試験標準・複合 各1問完成
- 固定5問・7答案要素の本文要求事項マッピング: `7 / 7`
- 解説PDF: `topics/11_fault_protection/11_fault_protection_explanation.pdf`
- 解説PDF QA: `topics/11_fault_protection/11_fault_protection_explanation_qa.md`
- 練習問題source: `topics/11_fault_protection/11_fault_protection_practice_source.md`
- 練習PDF: `topics/11_fault_protection/11_fault_protection_practice.pdf`
- 練習PDF QA: `topics/11_fault_protection/11_fault_protection_practice_qa.md`
- 解説画像PowerPoint: `topics/11_fault_protection/11_fault_protection_images.pptx`
- PowerPoint QA: `topics/11_fault_protection/11_fault_protection_powerpoint_qa.md`
- 完成後独立再解答: `topics/11_fault_protection/11_fault_protection_independent_reanswer.md`
- 最終QA: `topics/11_fault_protection/11_fault_protection_final_qa.md`
- 最終QA判定: `PASS / completed`

## 現在状態
- `current_status`: `topic_12_explanation_pdf_complete`
- 完成数: `11 / 16`
- last completed: Topic 11 `架線事故ではどうやって電気を止める？`
- active: Topic 12 `320km/hでもパンタグラフが離れないのはなぜ？`
- Topic 12 source: `topics/12_overhead_line_mechanics/12_overhead_line_mechanics.md`
- Topic 12 解説PDF: `topics/12_overhead_line_mechanics/12_overhead_line_mechanics_explanation.pdf`
- Topic 12 解説PDF QA: `topics/12_overhead_line_mechanics/12_overhead_line_mechanics_explanation_qa.md`
- 固定問題: `5問・6答案要素`
- 制作前独立検証: `6 / 6 PASS`
- 本文要求事項マッピング: `6 / 6 PASS`
- 3段階例題独立再計算: `3 / 3 PASS`
- 解説PDF表示QA: `4 / 4 PASS`
- 解説PDF文字抽出QA: `PASS`
- SPEC固定範囲外追加: `0件`
- Topic 13以降の先取り: `0件`
- 未確認新幹線実設備値の真値化: `0件`

## 次の正確な開始点
Topic 12の練習問題sourceを作成する。原則12問以上、少なくとも半数を五肢択一、本試験標準を中心に固定5問・6答案要素へ接続し、SPEC固定範囲外、Topic 13以降、未確認の新幹線実設備値を追加しない。
