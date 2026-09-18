# 37 COSMOS② 練習PDF QA（改訂source同期）

判定: `PASS / PRACTICE_PDF_REVISED`

## 対象
- source: `37_cosmos_power_remote_monitoring_practice.md`
- PDF: `37_cosmos_power_remote_monitoring_practice.pdf`
- 固定EXAM_ALIGNMENT: 5問・6答案要素、変更なし
- 系列SPEC固定範囲: SCADA、変電所、センサ、遠隔計測、A/D変換、デジタル情報、遠隔制御
- PDF SHA-256: `e34e9e69afd5bb6590d2c6a4d1651c10530170f031df0d02f85cf6c405b87750`

## PDF構成QA
- A4縦: PASS
- ページ数: `4`
- 問題数: `15`
- 基礎4 / 標準8 / 複合3: PASS
- 五肢択一: `15 / 15`
- 完全解説: `15 / 15`
- 正答位置: A=3 / B=3 / C=3 / D=3 / E=3
- 固定EXAM_ALIGNMENT対応表: `6行 / 6答案要素`

## 改訂source同期QA
- Q9: 系統連系保護（発電電圧異常、系統側短絡・地絡、地絡過電圧、単独運転、転送遮断、単独運転検出）を反映 — PASS
- Q15: 逆潮流・自立運転・単独運転・逆充電・転送遮断装置の定義を反映 — PASS
- sourceのQ1〜Q15の問題、選択肢、正答、解説との意味上の不一致: `0件`
- PDF表示互換性のため、数式表記のみ `≤`→`<=`、下付き数字→`_2` / `_16` に置換。意味変更なし

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
- 正答位置抽出集計: A=3 / B=3 / C=3 / D=3 / E=3
- 固定過去問6答案要素の対応表行: `6 / 6`
- Q9の「地絡過電圧」「転送遮断」抽出: PASS
- Q15の「逆潮流」「自立運転」「単独運転」「逆充電」抽出: PASS
- PDF preflight: openable / non-scanned / unencrypted — PASS

## 固定EXAM_ALIGNMENT反映
- R6上 法規 問7: Q8, Q9, Q14 — PASS
- R3 機械 問14: Q4, Q11, Q13 — PASS
- R1 理論 問18(a): Q5, Q13 — PASS
- R1 理論 問18(b): Q6, Q13 — PASS
- H26 機械 問13: Q2, Q7, Q14 — PASS
- H23 法規 問6: Q9, Q15 — PASS

固定5問・6答案要素: `6 / 6 PASS`。

## 範囲境界QA
- 固定範囲外追加: `0件`
- Topic 38先取り: `0件`
- COSMOS-SCADA未確認内部仕様追加: `0件`
- 転送遮断・系統連系保護をCOSMOS-SCADA固有実装と断定: `0件`
- 個別固定過去問の正答番号・完成導出保存: `0件`

## 次工程
改訂済み解説source・練習sourceを正本としてTopic 37の解説画像PowerPointを同期修正し、固定EXAM_ALIGNMENT反映、16:9表示、overflow、PPTX ZIP整合性をQAする。完成後blind独立再解答・最終QAにはまだ進まない。
