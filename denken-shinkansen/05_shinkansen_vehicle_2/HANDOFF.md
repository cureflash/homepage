# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-21

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜37は最終QAまで `PASS / completed`。完成数 `37 / 39`。

現在地は `topic_38_explanation_pdf_remediated`。last completed topicは `37 ATC③ 速度制御系`、active topicは `38 COMTRAC 列車追跡・進路制御・高信頼化`。

## Topic 37 完了記録

- 固定5問・25答案要素: 一次5、二次20、`25 / 25 PASS`
- SPEC固定8項目: `8 / 8 PASS`
- 系列SPEC固定計算・グラフ: `2 / 2 PASS`
- 解説・練習・PowerPoint各成果物: `PASS`
- clean blind v2: `25 / 25 PASS`
- candidate固定後修正 `0件`、固定EXAM_ALIGNMENT変更 `0件`、exact blocker `0件`

## Topic 38 clean blind v1診断

固定5問はR8一次「機械」問8、R2一次「機械」問8、H29一次「機械」問8、H26一次「機械」問3、H23一次「機械」問8。一次 `5問 / 25答案要素`、二次 `0問`、直接対応なし・件数合わせ `0件`。固定5問自体は変更しない。

clean blind v1は公式標準解答 `25 / 25 PASS`、教材だけで導出 `23 / 25 FAIL`。

- R8問8(5): 角位置センサなしの簡易位置決め、過負荷・急加減速時の脱調不足
- H23問8(3): ノイマン形コンピュータ不足
- H29問8/H23問8: 固定答案要素mappingが実空欄と不一致
- v1 candidate修正: `0件`

## remediation完了範囲

### EXAM_ALIGNMENT＋QA

`PASS / EXAM_ALIGNMENT_REMEDIATED`

- source commit: `25eff5df4436b338d31dbbcd29ebb703018f0bd0`
- QA commit: `0585a5803c75eb3e525bd8df3c90f60b043cb298`
- H29実空欄: `(1)逐次的 (2)結合 (3)ドライバ (4)大きくなる (5)ブラックボックス`
- H23実空欄: `(1)組合せ回路 (2)フリップフロップ (3)ノイマン形コンピュータ (4)ASIC (5)Quine–McCluskey法`
- 固定5問変更: `0件`
- 固定25答案要素: `25 / 25 PASS`
- SPEC固定9項目: `9 / 9 PASS`

### 解説source＋source QA

`PASS / EXPLANATION_SOURCE_REMEDIATED`

- source commit: `a7c57a477e4c33d2619de243204f5a0bd3bce6fe`
- QA commit: `b718ffd4898442e5a898b8b036880465aa725e5e`
- R8(5): 角位置センサなしのオープンループ簡易位置決めと脱調条件を明示
- H23(3): ノイマン形コンピュータの記憶プログラム方式・原則逐次命令実行を明示
- H29(4): 単体→結合→システム試験で対象プログラム量・範囲が大きくなることを明示
- H29/H23接続表を実空欄単位へ修正
- 固定25答案要素: `25 / 25 connected`
- SPEC固定9項目: `9 / 9 PASS`
- 3段階例題: `3 / 3 PASS`
- 未確認COMTRAC実装・数値の真値化: `0件`
- Topic 39先取り: `0件`
- exact blocker: `0件`

### 練習source＋source QA

`PASS / PRACTICE_SOURCE_REMEDIATED`

- source remediation commit: `40f4234fad5e4087369e574978583928545e6b20`
- source QA commit: `34a229e28e92425d7a25aa7953c3788f4b5159a9`
- 一次試験型: `12問 / 12問五肢択一`
- 一次正答一意性: `12 / 12 PASS`
- 二次試験型: `0題`、直接対応なし・件数合わせ `0件`
- R8(5): 角位置センサなしのオープンループ簡易位置決め、過負荷・急加減速時の脱調を問6へ反映
- H23(3): ノイマン形コンピュータの記憶プログラム方式・原則逐次命令実行を問3へ反映
- H29(4): 単体→結合→システム試験で対象プログラム量・範囲が大きくなることを問7へ反映
- H29/H23実空欄mapping: `10 / 10 PASS`
- 固定5問・25答案要素: `25 / 25 PASS`
- SPEC固定9項目: `9 / 9 PASS`
- 計算再検算: `3 / 3 PASS`
- 未確認COMTRAC実装・数値の真値化: `0件`
- Topic 39先取り: `0件`
- exact blocker: `0件`

### 解説PDF＋PDF QA

`PASS / EXPLANATION_PDF_REMEDIATED`

- main base: `bb37a5552b51d1004071982a86ccfa2828b3baba`
- source blob: `5e78be9bc99e279e977e482a7d08236b7bcc8304`
- source QA blob: `90f48db5b346b713fd26d48bb81ae87ae148e5f4`
- remediation前PDFを流用せず再生成
- A4縦 `4頁`
- PDFium / Poppler / visual: `4 / 4 PASS`
- clean blind v1 remediation必須3点: `3 / 3 PASS`
- 固定5問・25答案要素: `25 / 25 connected`
- SPEC固定9項目: `9 / 9 PASS`
- 3段階例題: `3 / 3 PASS`
- 未確認COMTRAC実装・数値の真値化: `0件`
- Topic 39先取り: `0件`
- exact blocker: `0件`

## 次工程: practice PDF regeneration

次runは最新main、上位2仕様書、系列SPEC、本STATUS/HANDOFF、remediated EXAM_ALIGNMENT・解説source・練習source、再生成済み解説PDF/QAをreconcileし、remediated練習sourceから練習PDFを再生成してPDF QAを行う。remediation前練習PDFは流用しない。

その後、以下を順に進める。

1. PowerPoint / PowerPoint QA
2. fresh clean blind v2

v1 candidateは修正しない。v2は別candidateとして固定する。

## 境界条件

- 未確認のCOMTRAC内部構成、列車追跡アルゴリズム、進路制御論理、インターロック実装、処理周期、冗長方式、故障率、MTBF、MTTR、可用性値を真値化しない。
- JR東海第二総合指令所の存在から装置単位の冗長方式・切替方式を推測しない。
- 教材用状態機械・Boolean式・可用性計算の仮定例は実装値と明確に分離する。
- Topic 39のCOSMOS、SCADA、A/D変換、計器用変成器、遠隔計測・遠隔制御は先取りしない。
- Topic 21 H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は既存の丸め差診断を維持し、一般式 `P=Tω`、`ω=2πN/60` は変更しない。

exact blocker: `0件`
