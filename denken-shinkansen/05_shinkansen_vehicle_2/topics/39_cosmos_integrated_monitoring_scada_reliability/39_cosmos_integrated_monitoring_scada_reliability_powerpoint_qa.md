# Topic 39 COSMOS 統合監視・SCADA・信頼性 — PowerPoint render/content QA

更新日: 2026-09-21

判定: `PASS / POWERPOINT_COMPLETE`

## 正本・reconcile

- active series: `05_shinkansen_vehicle_2`
- PowerPoint publish commit: `d406af0b12f60efe8a0bbc0d00e6e11bb82a5357`
- fixed EXAM_ALIGNMENT: `39_cosmos_integrated_monitoring_scada_reliability.md`
- explanation source/PDF + QA: `PASS`
- practice source/PDF + QA: `PASS`
- 固定5問変更: `0件`
- Topic 38固定過去問の重複採用: `0件`
- 二次問題の件数合わせ採用: `0件`

## PowerPoint

- file: `39_cosmos_integrated_monitoring_scada_reliability_powerpoint.pptx`
- GitHub正本 SHA-256: `f5da5cd6ea08ddd2b410f985cdadd233dc4970cfec4dff4f4fe4fce3e188f368`
- GitHub正本 file size: `63322 bytes`
- slide count: `10`
- OOXML zip integrity: `PASS`
- PowerPoint内テキスト: `3773 chars`
- replacement character U+FFFD: `0件`
- black-square placeholder: `0件`

PowerPointは同一factory sourceから生成。公開前render/content QAは同factory出力をLibreOffice Impressで16:9 PDFへエクスポートして実施した。GitHub Actions側では公開用OOXMLを再圧縮しているため、公開前ローカルpackとGitHub正本packのSHA-256は一致しないが、スライド内容・構造を生成するsourceは同一である。

## スライド構成

1. Topic 39の試験範囲・境界条件
2. 一般SCADA機能連鎖と系列SPEC固定13項目の全体像
3. CT/VT、負担・励磁・比誤差・安全
4. A/D変換、標本化・量子化・2進数・MSB・サンプルホールド
5. LAN中継機器・アドレス、搬送波・変調/復調
6. 故障率と信頼度―時間
7. 単一系・冗長系の信頼度比較
8. 可用性比較
9. 遠隔計測・遠隔制御、保護リレー・遮断器・トリップフリー
10. 固定5問・25答案要素の過去問対応ゲートと正本・出典

## 固定5問・25答案要素QA

- R4一次「機械」問3: Slide 3 — 負担 / 励磁電流 / 励磁インピーダンスと変成誤差 / 比誤差 `ε=(K_n-K)/K×100 [%]` / CT一次通電中の二次開放禁止: `5 / 5 PASS`
- R3一次「機械」問8: Slide 4 — 2進数 / 量子化誤差 / 変換時間 / MSB / サンプルホールド: `5 / 5 PASS`
- H30一次「機械」問8: Slide 5 — リピータ / ブリッジ / MAC / Wi-Fi / DHCP: `5 / 5 PASS`
- H25一次「機械」問8: Slide 5 — 搬送波 / 復調 / AM / QAM / ASK: `5 / 5 PASS`
- R2二次「電力・管理」問2: Slide 3 / 9 — 計器用変成器の目的・CT/VT / 比誤差 / 正動作・正不動作と信頼性向上策 / 77・66 kV級遮断器の5又は3サイクルとトリップコイル / トリップフリー: `5 / 5 PASS`

集計:
- 一次: `20 / 20 PASS`
- 二次: `5 / 5 PASS`
- 合計: `25 / 25 PASS`

## 系列SPEC固定13項目QA

- 分散システム: Slide 2 `PASS`
- 情報伝送: Slide 2 / 5 `PASS`
- データ収集: Slide 2 / 4 `PASS`
- 状態監視: Slide 2 / 9 `PASS`
- SCADA: Slide 2 `PASS`
- A/D変換: Slide 4 `PASS`
- 計器用変成器: Slide 3 `PASS`
- 遠隔計測: Slide 2 / 9 `PASS`
- 遠隔制御: Slide 2 / 9 `PASS`
- 冗長系: Slide 7 / 9 `PASS`
- 故障率: Slide 6 `PASS`
- 信頼度: Slide 6 / 7 `PASS`
- 可用性: Slide 8 `PASS`

判定: `13 / 13 PASS`。

## 系列SPEC計算・グラフ3種QA

- 信頼度―時間: Slide 6。`λ=2.0×10^-4 1/h`、`R(t)=exp(-λt)`、2000 hで `0.6703`: `PASS`
- 単一系・冗長系比較: Slide 7。単一 `R=0.80`、独立理想2並列 `R=0.96`: `PASS`
- 可用性比較: Slide 8。`MTBF=2000 h`、`MTTR=4 h`、単一 `99.8004 %`、独立理想2並列 `99.9996 %`: `PASS`

3種とも教材用一般モデル・仮定値であり、COSMOS実設備値ではない。判定: `3 / 3 PASS`。

## render QA

同一factory source出力をLibreOffice Impressから16:9 PDFへエクスポートして確認。

- PDF pages: `10 / 10`
- Poppler 160 dpi render: `10 / 10 PASS`
- PDFium 160 dpi render: `10 / 10 PASS`
- montage visual inspection: `10 / 10 PASS`
- 個別確認: Slide 9 / 10 `PASS`
- clipped text: `0件`
- overlap: `0件`
- broken glyph: `0件`
- replacement character U+FFFD: `0件`
- `(cid:)`: `0件`
- 数式・表・グラフの表示崩れ: `0件`
- 和文フォント表示崩れ: `0件`

## 境界QA

- 一般SCADAモデルをCOSMOS実装と断定: `0件`
- COSMOS未公開内部構成、独自通信プロトコル、データ形式、監視周期、遠隔制御論理を推測: `0件`
- COSMOSの故障率、MTBF、MTTR、可用性実値を真値化: `0件`
- 教材用理想並列モデルを実設備の改善率として断定: `0件`
- `SCADA`、`遠隔制御`、`可用性`という名称が固定過去問に直接出たと主張: `0件`
- Topic 21一般式 `P=Tω`、`ω=2πN/60` の変更: `0件`
- exact blocker: `0件`

## 最終判定

`PASS / POWERPOINT_COMPLETE`

Topic 39はPowerPointまで完成。次工程はfresh workerによるclean blind最終ゲート。公式解答・保存済み正答を先に見ずcandidateを固定し、その後に公式標準解答一致と「教材だけで導出可能」を25答案要素で判定する。本runはanswer-bearing資料を参照済みのためclean blind candidateには使用しない。
