# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-17

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は `12 / 16`。Topic 01〜12は完成済み。active themeはTopic 13。

## 今回進捗
Topic 13 `新幹線の架線は何でできている？` の制作前EXAM_ALIGNMENTを実施した。SPEC固定範囲は銅、アルミニウム、合金、導電率、抵抗率、温度係数、引張強度、絶縁材料、磁性材料、半導体材料から追加していない。電気技術者試験センター公式過去問を直近年度から遡り、R8上・R7下・R6下・R5下・R5上の電力問14を品質ゲート対象5問・5答案要素として固定した。複数の電験学習資料で説明粒度も確認し、sourceに要求知識・判断・教材で必要な説明・参考URLを記録した。未確認の新幹線トロリ線材質・実設備値は真値化していない。

source: `topics/13_electrical_materials/13_electrical_materials.md`

固定問題:
- R8上 電力 問14 — 絶縁材料
- R7下 電力 問14 — 磁性材料・鉄損
- R6下 電力 問14 — 銅・軟銅/硬銅・導電率
- R5下 電力 問14 — 銅/アルミニウム・ACSR・強度
- R5上 電力 問14 — アモルファス磁性材料

現在の品質ゲート:
- 制作前EXAM_ALIGNMENT: 完了
- 固定問題: `5問・5答案要素`
- 制作前独立検証: 未実施
- 解説本文・3段階例題: 未着手
- 解説PDF・練習問題/PDF・PowerPoint: 未着手
- 完成後ブラインド独立再解答・最終QA: 未実施
- SPEC固定範囲外追加: `0件`
- 未確認新幹線実設備値の真値化: `0件`

## 前回進捗（Topic 12）
Topic 12 `320km/hでもパンタグラフが離れないのはなぜ？` の最終QAを再実施した。初回最終QAで唯一FAILだった進捗記録整合について、`12_overhead_line_mechanics_explanation_qa.md`、`12_overhead_line_mechanics_practice_source.md`、`12_overhead_line_mechanics_powerpoint_qa.md`、`12_overhead_line_mechanics_independent_reanswer.md` の4箇所が現在地へ同期済みであることを再確認し、技術内容・必須成果物・固定EXAM_ALIGNMENT・完成後ブラインド独立再解答・PDF/PPTX QA・SPEC境界・進捗記録整合を全件PASSと判定した。Topic 12を `PASS / completed` とし、main source・STATUS・HANDOFFを同期した。固定EXAM_ALIGNMENT、数式、問題、正答、PDF/PPTX、独立再解答結果は変更していない。

完成後独立答案:
- R7上 電力 問12: `(4)`
- R6下 電力 問13: `(3)`
- R3 電力 問16 (a)(b): `(4),(2)`
- H29 電力 問8: `(2)`
- H24 電力 問13: `(3)`

source: `topics/12_overhead_line_mechanics/12_overhead_line_mechanics.md`
解説PDF: `topics/12_overhead_line_mechanics/12_overhead_line_mechanics_explanation.pdf`
解説PDF QA: `topics/12_overhead_line_mechanics/12_overhead_line_mechanics_explanation_qa.md`
練習問題source: `topics/12_overhead_line_mechanics/12_overhead_line_mechanics_practice_source.md`
練習PDF: `topics/12_overhead_line_mechanics/12_overhead_line_mechanics_practice.pdf`
練習PDF QA: `topics/12_overhead_line_mechanics/12_overhead_line_mechanics_practice_qa.md`
解説画像PowerPoint: `topics/12_overhead_line_mechanics/12_overhead_line_mechanics_images.pptx`
PowerPoint QA: `topics/12_overhead_line_mechanics/12_overhead_line_mechanics_powerpoint_qa.md`
完成後独立再解答: `topics/12_overhead_line_mechanics/12_overhead_line_mechanics_independent_reanswer.md`
最終QA: `topics/12_overhead_line_mechanics/12_overhead_line_mechanics_final_qa.md`

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
- 練習問題source: 全12問・全問五肢択一
- 練習難易度: 基礎3 / 本試験標準7 / 複合2
- 練習source数値・論理独立再計算: `12 / 12 PASS`
- 練習source正答一意性: `12 / 12 PASS`
- 練習source固定5問・6答案要素への接続: `6 / 6`
- 練習PDF: A4縦4ページ
- 練習PDF表示QA: 200 dpi `4 / 4 PASS`
- 練習PDF文字抽出QA: `PASS`
- 練習PDF数値・論理再検算: `12 / 12 PASS`
- 練習PDF正答一意性: `12 / 12 PASS`
- 練習PDF固定5問・6答案要素への接続: `6 / 6`
- 解説画像PowerPoint: 16:9・4枚
- PowerPoint固定5問・6答案要素の要求事項可視化: `6 / 6`
- PowerPoint表示QA: 1601×900 `4 / 4 PASS`
- PowerPoint overflow: `0件`
- PowerPoint ZIP整合性: `PASS`
- PowerPoint内数値・論理再検算: `PASS`
- 完成後ブラインド独立再解答: `6 / 6 PASS`
- 公式解答一致: `6 / 6 PASS`
- 教材外知識補完: `0件`
- Topic 13以降の論点による補完: `0件`
- SPEC固定範囲外追加（独立再解答時）: `0件`
- 未確認新幹線実設備値の使用: `0件`
- main sourceへの完成後独立再解答結果同期: 完了
- SPEC固定範囲外の採用問題・本文・PDF・PowerPoint追加: `0件`
- 件数合わせの仕様追加: `0件`
- 制作前の保存済み正答・選択肢番号の完成教材転記: `0件`
- 前回最終QA: `NEEDS_REVISION / IN_PROGRESS`（技術内容・成果物・過去問品質ゲート・SPEC境界はPASS。進捗記録整合のみFAIL: 旧工程4箇所）
- 旧進捗記録4箇所同期: 完了
- 最終QA再実施: `PASS / completed`

## 前テーマ記録
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
- `current_status`: `topic_13_exam_alignment_complete`
- 完成数: `12 / 16`
- last completed: Topic 12 `320km/hでもパンタグラフが離れないのはなぜ？`
- active: Topic 13 `新幹線の架線は何でできている？`
- Topic 13 source: `topics/13_electrical_materials/13_electrical_materials.md`
- Topic 13 固定問題: `5問・5答案要素`
- Topic 13 制作前EXAM_ALIGNMENT: 完了
- Topic 13 制作前独立検証: 未実施
- Topic 13 SPEC固定範囲外追加: `0件`
- Topic 13 未確認新幹線実設備値の真値化: `0件`
- Topic 12 最終QA: `PASS / completed`

## 次の正確な開始点
Topic 13の固定5問について制作前独立検証を実施する。公式問題の要求知識・判断根拠を独立に再構成し、公式標準解答との一致とSPEC固定範囲だけで完答できることを確認する。Topic 12以前の技術内容・固定EXAM_ALIGNMENT・成果物・独立再解答結果は変更しない。