# 38 COSMOS③ 練習PDF QA

更新日: 2026-09-18

判定: `PASS / PRACTICE_PDF_COMPLETE`

## 対象
- source: `38_cosmos_high_reliability_practice.md`
- PDF: `38_cosmos_high_reliability_practice.pdf`
- 固定EXAM_ALIGNMENT: 5問・5答案要素、変更なし
- 系列SPEC固定範囲: 冗長化、バックアップ、フェイルセーフ、論理回路、障害検知、切替、システム信頼性
- PDF SHA-256: `c5885687d14b057b3f8ac48a2303f69003cd37a0b085faa881c2f5f6907eb533`

## PDF構成QA
- A4縦: PASS
- ページ数: `4`
- 問題数: `15`
- 基礎4 / 標準8 / 複合3: PASS
- 五肢択一: `15 / 15`
- 完全解説: `15 / 15`
- 正答位置: A=3 / B=3 / C=3 / D=3 / E=3
- 固定EXAM_ALIGNMENT対応: `5 / 5答案要素`

## source同期QA
- Q1〜Q15の問題文・選択肢・正答・解説: 意味上の不一致 `0件`
- PDF化に伴うMarkdown装飾除去のみ。論点・数値・選択肢・正答・解説内容の変更: `0件`
- 固定公式過去問の追加・差替え: `0件`

## 表示QA
180 dpiで全ページをレンダリングし目視確認した。
- page 1: PASS
- page 2: PASS
- page 3: PASS
- page 4: PASS
- 文字切れ・重なり・欠落: `0件`
- 黒塗り・豆腐字・置換文字: `0件`

集計: `4 / 4 PASS`。

## 文字抽出・整合QA
- PDF文字抽出: PASS
- Q1〜Q15見出し: `15 / 15`
- 正答表記: `15 / 15`
- 解説表記: `15 / 15`
- 正答位置抽出: A=3 / B=3 / C=3 / D=3 / E=3
- 置換文字 `�`: `0件`
- PDF preflight: openable / non-scanned / unencrypted — PASS

## 固定EXAM_ALIGNMENT反映
- R6下 機械 問14: Q3, Q5, Q13 — PASS
- R6上 機械 問14: Q4, Q6 — PASS
- R6下 電力 問9: Q7, Q8, Q10, Q14 — PASS
- R4下 電力 問13: Q1, Q9, Q10, Q11, Q12, Q14, Q15 — PASS
- R3 電力 問13: Q7, Q8, Q10, Q14 — PASS

固定5問・5答案要素: `5 / 5 PASS`。

## 範囲境界QA
- 固定範囲外追加: `0件`
- COSMOS/COSMOS-SCADA未確認内部仕様追加: `0件`
- 学習用信頼度を実信頼度として扱う記述: `0件`
- 個別固定過去問の正答番号・完成導出保存: `0件`

## 次工程
Topic 38解説画像PowerPointを制作し、固定EXAM_ALIGNMENT反映、16:9表示、overflow、PPTX ZIP整合性をQAする。完成後blind独立再解答・最終QAにはまだ進まない。
