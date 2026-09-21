# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-21

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜38は最終ゲートまで `PASS / completed`。完成数 `38 / 39`。

現在地は `topic_39_practice_pdf_complete / powerpoint_pending`。last completed topicは `38 COMTRAC 列車追跡・進路制御・高信頼化`、active topicは `39 COSMOS 統合監視・SCADA・信頼性`。

## Topic 38 完了判定

remediation後のEXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPointと各QAは `PASS`。fresh clean blind v9は公式標準解答一致・教材依存とも `25 / 25 PASS`。Topic 38成果物は再生成しない。

## Topic 39 制作前EXAM_ALIGNMENT

正本:
- `topics/39_cosmos_integrated_monitoring_scada_reliability/39_cosmos_integrated_monitoring_scada_reliability.md`
- `topics/39_cosmos_integrated_monitoring_scada_reliability/39_cosmos_integrated_monitoring_scada_reliability_exam_alignment_qa.md`

判定: `PASS`

- 固定公式過去問: `5問`
- 一次: `4問 / 20答案要素`
- 二次: `1問 / 5答案要素`
- 合計: `25答案要素`
- 二次直接対応: R2二次「電力・管理」問2
- 二次件数合わせ: `0件`
- 系列SPEC固定13項目: `13 / 13 mapped`
- Topic 38固定問題の重複採用: `0件`
- 未確認COSMOS内部実装・数値の真値化: `0件`
- exact blocker: `0件`

固定5問:
1. R4一次「機械」問3 — 計器用変成器
2. R3一次「機械」問8 — A/D変換
3. H30一次「機械」問8 — LAN中継機器・アドレス
4. H25一次「機械」問8 — 変調・復調
5. R2二次「電力・管理」問2 — 計器用変成器・保護リレー信頼性・自動監視・冗長化

H26一次「機械」問3のUPS・並列冗長はTopic 38ですでに固定済みなので重複固定しない。

## Topic 39 解説source＋source QA

正本:
- `topics/39_cosmos_integrated_monitoring_scada_reliability/39_cosmos_integrated_monitoring_scada_reliability_explanation_source.md`
- `topics/39_cosmos_integrated_monitoring_scada_reliability/39_cosmos_integrated_monitoring_scada_reliability_explanation_source_qa.md`

判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

- 固定25答案要素: `25 / 25 PASS`
- 一次: `20 / 20 PASS`
- 二次: `5 / 5 PASS`
- 系列SPEC固定13項目: `13 / 13 PASS`
- 系列SPEC計算・グラフ3種: `3 / 3 PASS`
- 3段階例題: `3 / 3 PASS`
- 固定5問変更: `0件`
- Topic 38固定問題重複採用: `0件`
- 一般SCADAモデルをCOSMOS実装と断定: `0件`
- 未確認COSMOS内部実装・数値の真値化: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

一般SCADAモデルは `計測対象 → CT/VT・センサ → 信号調整 → A/D変換・データ収集 → 通信 → 監視表示/状態判定 → 操作指令 → 制御対象` とし、COSMOS内部構成図ではないと明示済み。

CT/VTは負担、励磁、固定比誤差式、CT二次開放禁止まで、A/Dは標本化・量子化・分解能・量子化誤差・サンプルホールド・代表方式まで、通信はLAN層、MAC/IP、Wi-Fi/DHCP、搬送波、変調/復調、AM/FM/PM、ASK/FSK/PSK/QAMまで収録済み。

信頼性は `R(t)=exp(-λt)`、直列・並列系、可用性は `A=MTBF/(MTBF+MTTR)` を成立条件付きで収録。教材用仮定値による `信頼度―時間`、`単一系・冗長系比較`、`可用性比較` の計算値をsourceに固定済み。

## Topic 39 解説PDF＋PDF QA

正本:
- `topics/39_cosmos_integrated_monitoring_scada_reliability/39_cosmos_integrated_monitoring_scada_reliability_explanation.pdf`
- `topics/39_cosmos_integrated_monitoring_scada_reliability/39_cosmos_integrated_monitoring_scada_reliability_explanation_pdf_qa.md`

判定: `PASS / EXPLANATION_PDF_COMPLETE`

- A4縦: `3頁`
- 固定5問・25答案要素: `25 / 25 connected`
- 一次: `20 / 20 PASS`
- 二次: `5 / 5 PASS`
- 系列SPEC固定13項目: `13 / 13 PASS`
- 3段階例題: `3 / 3 PASS`
- 系列SPEC計算・グラフ3種: `3 / 3 PASS`
- PDFium 200 dpi render: `3 / 3 PASS`
- Poppler 200 dpi render: `3 / 3 PASS`
- Ghostscript / pdfinfo / pdftotext: `PASS`
- replacement character U+FFFD: `0件`
- `(cid:)`: `0件`
- clipped text / overlap / black square / broken glyph: `0件`
- 一般SCADAモデルをCOSMOS実装と断定: `0件`
- 未確認COSMOS内部実装・数値の真値化: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

## Topic 39 練習source＋source QA

正本:
- `topics/39_cosmos_integrated_monitoring_scada_reliability/39_cosmos_integrated_monitoring_scada_reliability_practice_source.md`
- `topics/39_cosmos_integrated_monitoring_scada_reliability/39_cosmos_integrated_monitoring_scada_reliability_practice_source_qa.md`

判定: `PASS / PRACTICE_SOURCE_COMPLETE`

- 一次試験型: `12問`、全問五肢択一
- 一次正答一意性: `12 / 12 PASS`
- 二次試験型: `1題 / 5設問`、R2二次「電力・管理」問2へ直接接続
- 固定25答案要素: `25 / 25 PASS`
- 一次: `20 / 20 PASS`
- 二次: `5 / 5 PASS`
- 系列SPEC固定13項目: `13 / 13 PASS`
- 系列SPEC計算・グラフ3種: `3 / 3 PASS`
- 数値独立再計算: `6 / 6 PASS`
- 二次問題の件数合わせ採用: `0件`
- 固定5問変更: `0件`
- Topic 38固定問題重複採用: `0件`
- 一般SCADAモデルをCOSMOS実装と断定: `0件`
- 未確認COSMOS内部実装・数値の真値化: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

一次問題はCT/VT、A/D、LAN、変調、一般SCADA、信頼度、冗長系、可用性、遠隔計測・遠隔制御、保護リレー・遮断器を独自問題へ再構成した。数値問題は式選択理由、代入、中間値、最終値、検算まで記載。知識問題は主要誤答肢の理由まで記載した。

二次問1はR2二次固定5答案要素だけへ直接接続し、計器用変成器の目的・CT/VT、比誤差、正動作/正不動作と信頼性向上策、77/66 kV級遮断器の5又は3サイクルとトリップコイル、トリップフリーを5設問で確認する。主題外二次問題は追加していない。

## Topic 39 練習PDF＋PDF QA

正本:
- `topics/39_cosmos_integrated_monitoring_scada_reliability/39_cosmos_integrated_monitoring_scada_reliability_practice.pdf`
- `topics/39_cosmos_integrated_monitoring_scada_reliability/39_cosmos_integrated_monitoring_scada_reliability_practice_pdf_qa.md`

判定: `PASS / PRACTICE_PDF_COMPLETE`

- A4縦: `7頁`
- 一次12問・五肢・正答・完全解説: `12 / 12 PASS`
- 二次1題5設問・模範解答: `5 / 5 PASS`
- 固定25答案要素: `25 / 25 PASS`
- 一次: `20 / 20 PASS`
- 二次: `5 / 5 PASS`
- 系列SPEC固定13項目: `13 / 13 PASS`
- 系列SPEC計算・グラフ3種: `3 / 3 PASS`
- PDFium 200 dpi: `7 / 7 PASS`
- Poppler 200 dpi: `7 / 7 PASS`
- Ghostscript / pdfinfo / pdftotext: `PASS`
- replacement character U+FFFD: `0件`
- `(cid:)`: `0件`
- clipped text / overlap / black square / broken glyph: `0件`
- 一般SCADAモデルをCOSMOS実装と断定: `0件`
- 未確認COSMOS内部実装・数値の真値化: `0件`
- Topic 38固定問題重複採用: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

## 次工程

`TOPIC39_POWERPOINT`。

1. 解説source・解説PDF・練習source・練習PDFの正本を変更せず、Topic 39の解説画像PowerPointを生成する。
2. 固定5問・25答案要素、一次20＋二次5を解説画像へ接続する。
3. 系列SPEC固定13項目と計算・グラフ3種を保持する。
4. 一般SCADAモデル、CT/VT、A/D、通信・変調、遠隔計測/制御、信頼度/冗長系/可用性、保護リレー・遮断器を欠落させない。
5. COSMOS未公開内部実装・実値を推測しない。
6. スライドrender/content QAを行い、和文フォント、図表、数式、クリッピング、重なりを確認する。
7. PowerPoint QA通過後にのみfresh workerによるclean blind最終ゲートへ進む。

## 境界条件

- COSMOSの未公開内部構成、独自通信プロトコル、データ形式、監視周期、遠隔制御論理、装置単位の冗長方式、故障率、MTBF、MTTR、可用性実値を推測しない。
- 一般SCADAモデル、信頼性計算の仮定例は実設備仕様と明確に分離する。
- SCADA、遠隔制御、可用性という名称が固定過去問に直接出たとは主張しない。
- 完成後clean blindは公式解答・保存済み正答を先に見ないfresh workerで実施する。本runはanswer-bearing資料を参照済みなのでcandidateに流用しない。
- Topic 21 H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` は既存の丸め差診断を維持し、一般式 `P=Tω`、`ω=2πN/60` を変更しない。

次は `TOPIC39_POWERPOINT`。
