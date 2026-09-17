# 36 COSMOS① 練習PDF QA

判定: `PASS / PRACTICE_PDF_COMPLETE`

## 対象
- source: `36_cosmos_integrated_management_practice.md`
- PDF: `36_cosmos_integrated_management_practice.pdf`
- 固定EXAM_ALIGNMENT: 5問・8答案要素、変更なし
- 系列SPEC固定範囲: 運行管理、車両管理、設備管理、保守管理、情報伝送、ネットワーク、データ処理

## PDF構成QA
- A4縦: PASS
- ページ数: `5`
- 問題数: `15`
- 基礎4 / 標準8 / 複合3: PASS
- 五肢択一: `15 / 15`
- 完全解説: `15 / 15`
- 正答位置: A=3 / B=3 / C=3 / D=3 / E=3

## 表示QA
180 dpiで全ページをレンダリングし目視確認した。
- page 1: PASS
- page 2: PASS
- page 3: PASS
- page 4: PASS
- page 5: PASS
- 文字切れ・重なり・黒塗り・欠落: `0件`

集計: `5 / 5 PASS`。

## 文字抽出・整合QA
- PDF文字抽出: PASS
- Q1〜Q15見出し: `15 / 15`
- 正答表記: `15 / 15`
- 正答位置抽出集計: A=3 / B=3 / C=3 / D=3 / E=3
- 固定過去問8答案要素の対応表行: `8 / 8`
- source記載内容との問題・正答・解説の不一致: `0件`
- sourceの独立再解答結果 `15 / 15 PASS` を変更せず反映

## 固定EXAM_ALIGNMENT反映
- R6上 機械 問18(a): Q5 — PASS
- R6上 機械 問18(b): Q6, Q7, Q13 — PASS
- R4上 機械 問13: Q3, Q4, Q15 — PASS
- R4上 機械 問14: Q8, Q15 — PASS
- R4下 機械 問18(a): Q9, Q14 — PASS
- R4下 機械 問18(b): Q10, Q14 — PASS
- H27 機械 問18(a): Q1, Q12, Q15 — PASS
- H27 機械 問18(b): Q2, Q11 — PASS

固定5問・8答案要素: `8 / 8 PASS`。

## 範囲境界QA
- 固定範囲外追加: `0件`
- Topic 37のSCADA・遠隔計測・遠隔制御の体系的先取り: `0件`
- Topic 38の冗長化・バックアップ・障害切替の体系的先取り: `0件`
- 未確認COSMOS内部ネットワーク/DB/サーバ/通信仕様の追加: `0件`
- 「設備管理」をCOSMOS正式独立サブシステム名として断定: `0件`
- 個別固定過去問の正答番号・完成導出保存: `0件`

## 次工程
Topic 36の解説画像PowerPointを作成し、固定EXAM_ALIGNMENTの可視化、16:9表示、overflow、PPTX ZIP整合性をQAする。完成後blind独立再解答へはまだ進まない。
