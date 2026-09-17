# 36 COSMOS① 練習source QA

判定: `PASS / PRACTICE_SOURCE_COMPLETE`

## 対象
- source: `36_cosmos_integrated_management_practice.md`
- 固定EXAM_ALIGNMENT: 5問・8答案要素、変更なし
- 系列SPEC固定範囲: 運行管理、車両管理、設備管理、保守管理、情報伝送、ネットワーク、データ処理

## 構成QA
- 問題数: `15` — PASS
- 基礎4 / 標準8 / 複合3 — PASS
- 五肢択一: `15 / 15` — PASS
- 完全解説: `15 / 15` — PASS
- 正答位置: A=3 / B=3 / C=3 / D=3 / E=3 — PASS

## 独立再解答
問題文から再計算・再判定し、source記載正答と照合した。

- Q1 コンピュータ基本構成: PASS
- Q2 DRAM/SRAM: PASS
- Q3 情報伝送・光ファイバ: PASS
- Q4 偶数パリティ: PASS
- Q5 r進数・未知基数: PASS
- Q6 8 bit 2の補数: PASS
- Q7 線形D-A変換: PASS
- Q8 A-D/D-A・信号方向: PASS
- Q9 配列・最大値・平均値: PASS
- Q10 比較・交換・降順: PASS
- Q11 EPROM/EEPROM: PASS
- Q12 CPUクロック/LAN通信速度: PASS
- Q13 オフセットバイナリ・D-A変換: PASS
- Q14 配列・平均・並べ替え: PASS
- Q15 A-D・LAN・パリティ・光ファイバ複合: PASS

集計: `15 / 15 PASS`。
複数正答: `0件`。

## 固定EXAM_ALIGNMENT接続
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
練習PDFを作成し、全ページ表示・文字抽出・問題/解答整合・固定EXAM_ALIGNMENT反映をQAする。PowerPointへはまだ進まない。
