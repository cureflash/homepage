# Topic 27 PowerPoint QA

更新日: 2026-09-20

判定: `PASS / POWERPOINT_COMPLETE`

## 対象

- `27_l0_linear_synchronous_motor_images.pptx`
- canonical blob SHA: `fa47872508029438c1056ea8130b636e8bb4c75b`
- 16:9 / `6 slides`
- file size: `220,628 bytes`
- SHA-256: `443a36dd659a9b4c0dabade616a15aee8ec9d39dcc88572337c45c624b46e9cc`

## reconcile / artifact identity

最新main、系列 `STATUS.md` / `HANDOFF.md`、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、Topic 27固定EXAM_ALIGNMENT、解説source/PDF、練習source/PDF、直近同系列worker成果をreconcileした。開始時点の正本は `topic_27_practice_pdf_complete` で、Topic 27 PowerPointは未作成だったため重複作業はない。

Topic 26でconnector経由binary uploadのtruncateが実際に起きていた既存worker履歴を踏襲し、今回はGitHub Actions上でPowerPointを生成し、そのcanonical artifact自体へZIP・python-pptx・geometry・LibreOffice・pdftotext QAを実行してからmainへcommitした。

## canonical構造・表示QA

- GitHub Actions build/validation job: `PASS`
- PPTX ZIP integrity: `PASS`
- python-pptx open: `PASS`
- slide count: `6 / 6`
- 16:9 geometry: `PASS`
- slide geometry bounds: `6 / 6 PASS`
- LibreOffice headless PDF変換: `6 / 6 pages PASS`
- `pdftotext -layout`: `PASS`（`9,826 bytes`）
- 必須表示トークン: `PASS`
- 置換文字 `�`: `0件`

## 内容QA

固定EXAM_ALIGNMENTは変更していない。

1. R7 一次「機械」問1 `(1)〜(5)` — 5答案要素
2. R6 一次「機械」問1 `(1)〜(5)` — 5答案要素
3. H29 一次「機械」問1 `(1),(2),(5)` — 3答案要素
4. H21 一次「機械」問5 `(1)〜(5)` — 5答案要素
5. R6 二次「機械・制御」問1 `(1)(a)〜(c),(2)(b),(2)(c)` — 5答案要素

一次 `18 / 18`、二次 `5 / 5`、合計 `23 / 23 connected`。

SPEC必須7項目:
- 同期機: `PASS`
- 移動磁界: `PASS`
- 極ピッチ: `PASS`
- 周波数: `PASS`
- 同期速度: `PASS`
- 電機子反作用: `PASS`
- 同期リアクタンス: `PASS`

集計: `7 / 7 PASS`。

SPEC指定2可視化:
- 周波数―同期速度: `PASS`
- 極ピッチ―同期速度: `PASS`

集計: `2 / 2 PASS`。

## 数値再確認

- `τ=1.20 m`, `f=50 Hz` → `v_s=2τf=120 m/s`: `PASS`
- 6極, `f=50 Hz` → `N_s=120f/P=1000 min^-1`: `PASS`
- `X_a=1.8 Ω/相`, `X_l=0.2 Ω/相` → `X_s=2.0 Ω/相`: `PASS`
- `I_a=100 A` → `X_s I_a=200 V/相`: `PASS`
- `I_f0=220 A`, `I_fsc=200 A` → `K=1.10`, `Z_s=0.909 p.u.`: `PASS`
- `V_n=6.6 kV`, `S_n=5.0 MVA` → `Z_base=8.712 Ω`: `PASS`
- `Z_s=0.909×8.712=7.92 Ω/相`, `R_a=0.80 Ω/相` → `X_s≈7.88 Ω/相`: `PASS`

## 固定境界

- L0系実車接続は、一次資料で確認済みの「三相交流→ガイドウェイの移動磁界→車上超電導磁石との吸引・反発による推進」まで: `維持`
- 未確認のL0系実極ピッチ・実推進周波数・実同期リアクタンス・実推力の真値化: `0件`
- 負荷角 `δ`、本格フェーザ出力解析、推力式のTopic 28範囲先取り: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21 H26二次 問1(4)の `48.0 / 48.1 N·m` 過去問固有丸め差に関する一般式変更: `0件`
- 一般式 `P=Tω`, `ω=2πN/60`: `維持`
- exact blocker: `0件`

## 次工程

Topic 27完成後clean blind独立再解答の候補固定。保存済み正答・公式解答を先に見ず、固定5問・23答案要素を教材だけで解く。PowerPoint完成だけではTopic 27を `completed` にしない。
