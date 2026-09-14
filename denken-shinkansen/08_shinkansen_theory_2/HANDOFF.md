# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-14

## 現在地

Topic 01〜04は `completed`。

Topic 05 `0系主変圧器の鉄心には何が起きている？` は最終QAまで実施したが、source 2ファイルの進捗記録不整合により `NEEDS_REVISION`。

完成数: `4 / 21`

current_status: `topic_05_final_qa_needs_revision`

active_topic: `05 0系主変圧器の鉄心には何が起きている？`

## Topic 05 固定範囲

系列SPECどおり、次だけを扱う。

- アンペアの周回積分
- 磁界
- 磁束密度
- 磁束
- 透磁率
- 起磁力
- 磁気抵抗
- 磁気回路
- B-H曲線
- ヒステリシス
- 磁気エネルギー

変圧器等価回路は機械編、自己／相互インダクタンス・ファラデーの法則・誘導起電力はTopic 06へ譲る。同期機特性・表皮効果も本Topicへ追加しない。

## Topic 05 固定EXAM_ALIGNMENT

品質ゲート対象は一次「理論」5問・16小問。

- R6 問2 (1)〜(2): 円柱導体内部のアンペアの周回積分、`H(r)`、磁気エネルギー密度と体積積分。公式解答 `チ / ヌ`
- R5 問2 (1): 無限長直線電流の磁束密度 `B(r)=μ0I/(2πr)`。公式解答 `ワ`
- R4 問2 (1)〜(5): 環状鉄心の `B(r)`、磁束積分、磁気抵抗 `R_m=l/(μS)`、`Φ=NI/R_m`、磁気回路近似。公式解答 `ヌ / ト / カ / リ / ヲ`
- R3 問2 (1)〜(5): B-H曲線、ヒステリシス、残留磁束密度、保磁力、ループ面積と損失。公式解答 `ハ / ヨ / ヌ / チ / カ`
- H30 問2 (1)〜(3): 空隙を含む磁気回路、磁気抵抗、空隙長、磁束密度。公式解答 `ハ / ヨ / リ`

範囲境界:

- R8 問2: ビオ・サバール＋ファラデーの法則が中心なので非採用
- R7 問2: 自己・相互インダクタンス＋トルク＋電磁誘導が中心なので非採用
- R6 問2(3)〜(5): 導電率・直流抵抗・表皮効果のため除外
- R5 問2(2)〜(5): 鎖交磁束・ファラデーの法則・誘導起電力のため除外
- H30 問2(4)(5): 自己・相互インダクタンスのため除外
- R2 問2: 磁気エネルギーを含むが自己インダクタンス中心のため品質ゲート対象には加えない

二次試験はR7〜R5の「電力・管理」「機械・制御」を確認したが、本Topic固定範囲だけで直接解かせる問題は確認できなかった。同期機の界磁・飽和に触れる問題はあるが、同期リアクタンス、フェーザ、同期機特性が主題なので採用しない。`08 理論・二種` は一次理論中心のため、二次問題を数合わせで追加しない。

## Topic 05 成果物

- source: `topics/05_transformer_magnetic_circuit/05_transformer_magnetic_circuit.md`
- 解説本文: 完成
- 3段階例題: 完成
- 固定一次5問・16小問の本文対応表: 完成
- 解説PDF: 完成（A4縦6ページ）
- 解説PDF表示QA: 全6ページPASS（200 dpiレンダリング、文字抽出の置換文字0件）
- 練習問題source: 完成（12問、全問五肢択一、基礎3 / 標準6 / 複合3）
- 練習PDF: 完成（A4縦3ページ）
- 練習問題QA: 正答一意性・計算再検算 `12 / 12 PASS`、200 dpi全3ページ表示QA PASS
- 解説画像PowerPoint: 完成（16:9、5スライド）
- PowerPoint QA: 全5スライド表示QA、overflow検査、ZIP整合性すべてPASS
- 完成後独立再解答: 完成（`topics/05_transformer_magnetic_circuit/05_transformer_magnetic_circuit_independent_reanswer.md`）
- 独立再解答結果: 固定一次5問・16小問 `16 / 16 PASS`、教材外補完0件、固定範囲外追加0件
- 最終QA: 実施済み（`topics/05_transformer_magnetic_circuit/05_transformer_magnetic_circuit_final_qa.md`）
- 最終QA判定: `NEEDS_REVISION / IN_PROGRESS`

## 最終QAで検出した残件

技術内容、固定EXAM_ALIGNMENT、二次非採用判断、独立再解答、表示QAはPASS。

進捗記録のみ不整合が残る。

1. `05_transformer_magnetic_circuit.md` 冒頭状態欄が「解説本文＋3段階例題まで完成。PDF・練習問題・PowerPoint・完成後独立再解答・最終QAは未着手」のまま。
2. `05_transformer_magnetic_circuit_practice.md` 冒頭状態欄が「練習問題source＋練習PDFまで完成」のまま。

この2ファイルを現在地へ同期するまで `completed` にしない。

## 今回の更新

1. MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC / STATUS / HANDOFFとGitHub正本成果物を再確認。
2. 必須成果物、固定一次5問・16小問の独立再解答 `16 / 16 PASS`、二次非採用判断、固定範囲、表示QA・計算QAを確認。
3. source 2ファイルの旧進捗記録を検出したため、最終QAを `NEEDS_REVISION` とした。
4. 技術内容、固定EXAM_ALIGNMENT、問題・正答、二次非採用判断は変更していない。

## 次に行うこと

`05_transformer_magnetic_circuit.md` と `05_transformer_magnetic_circuit_practice.md` の状態記録だけをGitHub正本の現在地へ同期する。その後に最終QAを再実施し、全品質ゲートPASSの場合のみTopic 05を `completed` にする。
