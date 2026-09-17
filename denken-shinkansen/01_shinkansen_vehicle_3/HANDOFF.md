# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-18

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は `36 / 38`。01〜36がPASS。active topicは37 `COSMOS② 新幹線の電力設備を遠隔監視する`。

## 今回進捗
Topic 37を1段階進め、固定5問・6答案要素と系列SPEC固定範囲を維持した練習sourceを作成した。全15問を基礎4・標準8・複合3で構成し、全問五肢択一・完全解説とした。全15問を問題文から独立再解答し、固定EXAM_ALIGNMENTへの接続と範囲境界をQAした。

判定: `PASS / PRACTICE_SOURCE_COMPLETE`。

- 練習source: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring_practice.md`
- 練習source QA: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring_practice_source_qa.md`
- 問題数: `15`
- 難易度: 基礎4 / 標準8 / 複合3
- 五肢択一: `15 / 15`
- 完全解説: `15 / 15`
- 正答位置: A=3 / B=3 / C=3 / D=3 / E=3
- 独立再解答: `15 / 15 PASS`
- 固定EXAM_ALIGNMENT: `5問・6答案要素 / 6 / 6 PASS`
- 複数正答: `0件`
- 固定問題差替え: `0件`
- 固定範囲外追加: `0件`
- Topic 38先取り: `0件`
- COSMOS-SCADA未確認内部仕様追加: `0件`
- 完成数: `36 / 38`

## Topic 37 練習source内容
1. SCADAの一般的役割
2. センサ・PLC・出力機器の役割
3. A-D変換のコード数・量子化幅
4. 2進数・10進数・16進数変換
5. 二重積分形A-D変換の時間比計算
6. 二重積分形A-D変換のクロック数比
7. レベルスイッチ・PLC・シーケンス制御
8. 遠隔計測と遠隔制御の情報方向
9. 通信回線による転送遮断の一般原理
10. 10 bit A-D変換の量子化・コード番号
11. 16進数・10進数・2進数変換
12. COSMOS-SCADA公開範囲と一般SCADAの区別
13. 二重積分形A-D変換・クロック数・16進数の複合
14. センサ→A-D→PLC→通信→遠方機器の複合
15. SCADA・A-D・シーケンス・遠隔制御の複合正誤

## 固定EXAM_ALIGNMENT練習接続
1. R6上 法規 問7 — Q8, Q9, Q14, Q15
2. R3 機械 問14 — Q4, Q11, Q13
3. R1 理論 問18(a) — Q5, Q13
4. R1 理論 問18(b) — Q6, Q13
5. H26 機械 問13 — Q2, Q7, Q14, Q15
6. H23 法規 問6 — Q9, Q15

結果: `6 / 6答案要素 PASS`。

## Topic 37 系列SPEC固定範囲
扱う内容:
- SCADA
- 変電所
- センサ
- 遠隔計測
- A/D変換
- デジタル情報
- 遠隔制御

境界:
- COSMOS-SCADA内部のデータ形式、通信プロトコル、ネットワーク構成、更新周期、サーバ構成、データベース構造は推測しない。
- 転送遮断装置の方式をCOSMOS-SCADAの実装方式とは断定しない。
- Topic 38の冗長化・バックアップ・フェイルセーフ・論理回路・障害検知・切替・システム信頼性は先取りしない。

## 次の正確な開始点
Topic 37の練習PDF作成。完成済み `37_cosmos_power_remote_monitoring_practice.md` だけを正本として問題・選択肢・解答・完全解説を反映し、全ページ表示、文字抽出、問題/解答整合、固定EXAM_ALIGNMENT反映、範囲境界をQAする。PowerPointへはまだ進まない。
