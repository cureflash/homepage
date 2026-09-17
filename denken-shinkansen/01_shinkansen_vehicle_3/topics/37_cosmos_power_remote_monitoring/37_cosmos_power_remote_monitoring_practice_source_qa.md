# 37 COSMOS② 練習source QA

判定: `PASS / PRACTICE_SOURCE_COMPLETE`

## 対象
- source: `37_cosmos_power_remote_monitoring_practice.md`
- 固定EXAM_ALIGNMENT: 5問・6答案要素、変更なし
- 系列SPEC固定範囲: SCADA、変電所、センサ、遠隔計測、A/D変換、デジタル情報、遠隔制御

## 構成QA
- 問題数: `15` — PASS
- 基礎4 / 標準8 / 複合3 — PASS
- 五肢択一: `15 / 15` — PASS
- 完全解説: `15 / 15` — PASS
- 正答位置: A=3 / B=3 / C=3 / D=3 / E=3 — PASS

## 独立再解答
問題文から再計算・再判定し、source記載正答と照合した。

- Q1 SCADAの一般的役割: PASS
- Q2 センサ・PLC・出力機器: PASS
- Q3 8 bitコード数・量子化幅: PASS
- Q4 2進/10進/16進変換: PASS
- Q5 二重積分形A-D変換・時間比: PASS
- Q6 二重積分形A-D変換・クロック数比: PASS
- Q7 レベルスイッチ・PLC・シーケンス制御: PASS
- Q8 遠隔計測/遠隔制御の情報方向: PASS
- Q9 通信回線による転送遮断の一般原理: PASS
- Q10 10 bit量子化・コード番号: PASS
- Q11 16進/10進/2進変換: PASS
- Q12 COSMOS-SCADA公開範囲と一般SCADAの区別: PASS
- Q13 二重積分形A-D変換・クロック数・16進複合: PASS
- Q14 センサ→A-D→PLC→通信→遠方機器: PASS
- Q15 SCADA・A-D・シーケンス・遠隔制御複合: PASS

集計: `15 / 15 PASS`。
複数正答: `0件`。

## 固定EXAM_ALIGNMENT接続
- R6上 法規 問7: Q8, Q9, Q14, Q15 — PASS
- R3 機械 問14: Q4, Q11, Q13 — PASS
- R1 理論 問18(a): Q5, Q13 — PASS
- R1 理論 問18(b): Q6, Q13 — PASS
- H26 機械 問13: Q2, Q7, Q14, Q15 — PASS
- H23 法規 問6: Q9, Q15 — PASS

固定5問・6答案要素: `6 / 6 PASS`。

## 範囲境界QA
- 固定範囲外追加: `0件`
- COSMOS-SCADA未確認内部のデータ形式・通信プロトコル・ネットワーク構成・更新周期・サーバ/DB構造の追加: `0件`
- 転送遮断一般原理をCOSMOS-SCADA固有実装方式として断定: `0件`
- Topic 38の冗長化・バックアップ・フェイルセーフ・論理回路・障害検知・切替・システム信頼性の先取り: `0件`
- 個別固定過去問の正答番号・完成導出保存: `0件`

## 次工程
練習PDFを作成し、全ページ表示・文字抽出・問題/解答整合・固定EXAM_ALIGNMENT反映をQAする。PowerPointへはまだ進まない。
