# Topic 26 PowerPoint QA

更新日: 2026-09-20

判定: `PASS / POWERPOINT_COMPLETE`

## 対象

- `26_e7_w7_gradient_integrated_running_analysis_images.pptx`
- canonical blob SHA: `4cec8a6ee9eef4272b5783762a4f0c1f8311e19d`
- 16:9 / `6 slides`
- file size: `55,817 bytes`
- SHA-256: `91ee793f3472b4f1a26fd40360a7dd85a578c1f0fc64d9717ce43023f5cd2cb7`

## reconcile

最新main、系列 `STATUS.md` / `HANDOFF.md`、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、Topic 26制作前EXAM_ALIGNMENT、解説source/PDF、練習source/PDF、直近同系列worker成果を照合した。開始時に別workerがTopic 26練習PDF＋QAをmainへ反映したため、その成果を正本として採用し、練習PDFの重複作業を中止して次工程のPowerPoint生成＋QAだけを実施した。

## 構造・表示QA

- PPTX ZIP integrity: `PASS`
- python-pptx open: `PASS`
- slide count: `6 / 6`
- 16:9 geometry: `PASS`
- slide geometry bounds: `6 / 6 PASS`
- LibreOffice headless render: `6 / 6 pages PASS`
- Poppler render: `6 / 6 PASS`
- `pdftotext -layout`: `PASS`（8,941 bytes）
- 置換文字 `�`: `0件`
- contact-sheet視認: `6 / 6 PASS`
- クリッピング・重なり・破損グリフ: `0件`

## 内容QA

固定EXAM_ALIGNMENTは変更していない。

1. R7二次「機械・制御」問2 `(1)〜(3)` — 6答案要素
2. H26一次「機械」問5 `(1),(4),(5)` — 3答案要素
3. H25一次「機械」問3 `(1)` — 1答案要素
4. R5一次「機械」問2 `(2),(3),(5)` — 3答案要素
5. H27一次「機械」問3 `(1),(2),(3)` — 3答案要素

一次 `10 / 10`、二次 `6 / 6`、合計 `16 / 16 connected`。走行側の `R_g≈mgi`、`F_req=R_run+R_g`、`P=Fv` と、回転機側の `P=Tω`、同期速度、滑り、二次銅損、定加速/定出力、回生・回生失効を一つの解法へ接続した。

SPEC必須7項目: 勾配抵抗 / 走行抵抗 / 必要けん引力 / 必要出力 / 効率 / 速度制限 / 回生条件 = `7 / 7 PASS`。

SPEC指定3可視化:
- 勾配―必要けん引力: `PASS`
- 速度―必要出力: `PASS`
- 勾配別走行条件比較: `PASS`

集計: `3 / 3 PASS`。

## 数値再確認

- `v=80 m/s`, `R_run=81.2 kN`, `+30‰` → `R_g=117.6 kN`, `F_req=198.8 kN`, `P_w=15.904 MW`: `PASS`
- 同条件 `-30‰` → `F_req=-36.4 kN`, `B_req=36.4 kN`, `P_brake=2.912 MW`: `PASS`
- `η_reg=0.85` → `P_return≤2.4752 MW≈2.48 MW`: `PASS`
- `+20‰`, `F_av=150 kN`, `P_av=10.5 MW` → けん引力限界 `259.6 km/h`: `PASS`
- 同条件の出力限界 `70.7393 m/s≈254.7 km/h`: `PASS`
- 出力限界速度で `F_req≈148.43 kN<150 kN`: `PASS`

## 固定境界

- E7・W7系の実車事実は、制作前EXAM_ALIGNMENTで確認済みの北陸新幹線30‰急勾配とE7系ブレーキ性能向上まで: `維持`
- 教材用質量・走行抵抗式・効率・利用可能出力/けん引力を実車値として扱う: `0件`
- 未確認実車走行抵抗係数・実性能曲線追加: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21 H26二次 問1(4)の `48.0 / 48.1 N·m` 過去問固有丸め差に関する一般式変更: `0件`
- exact blocker: `0件`

## 次工程

Topic 26完成後clean blind独立再解答。PowerPoint完成だけではTopic 26を `completed` にしない。