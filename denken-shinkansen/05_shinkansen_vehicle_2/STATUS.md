# STATUS - 新幹線車両・電験二種

更新日: 2026-09-19

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `22 / 39`
- current_status: `topic_23_powerpoint_resync_complete`
- last_completed_topic: `22 E5系 再粘着制御`
- active_topic: `23 N700S SiC主変換装置`
- next_start: Topic 23補強後教材だけで、初回候補とは別ファイルのclean blind独立再解答を固定5問・23答案要素について実施し、候補固定後に公式解答と照合する

## 完了済み

Topic 01〜22は最終QAまで `PASS / completed`。完成数は `22 / 39`。

## Topic 23 固定品質ゲート

- 固定過去問: 第二種一次4問＋二次1問 = `5問`
- 一次答案要素: `17`
- 二次答案要素: `6`
- 合計答案要素: `23`
- SPEC固定8項目・指定3可視化: 変更なし
- 固定EXAM_ALIGNMENT変更: `0件`
- 未確認N700S実車値の真値化: `0件`

## Topic 23 clean blind初回

判定: `FAIL / NEEDS_REVISION`（候補ファイルは変更しない）

- 候補固定commit: `17837d40774f12e8348e9b55f250d5573b35f901`
- R7一次 問4: `5 / 5 PASS`
- R4一次 問4: `5 / 5 PASS`
- R2一次 問2: `3 / 5 PASS`
- H24一次 問6 `(2),(3)`: `2 / 2 PASS`
- H24二次 問1: `6 / 6 PASS`
- 一次合計: `15 / 17 PASS`
- 二次合計: `6 / 6 PASS`
- 総合: `21 / 23 PASS`
- 不一致はR2一次問2 `(2),(4)` の2点だけ

## Topic 23 clean blind補強

補強済み:

1. R2一次問2 `(2)`: 「矢印極性→状態表→平均値」、固定図では `V=D V_dc`
2. R2一次問2 `(4)`: `p(t)` 三角波を積分し `W_off=(1/2)V_dc I_dc T_2`
3. 練習一次問4の `VI t_s/6` は相補的直線ランプ条件だけに限定
4. 一般式 `E_sw=∫v(t)i(t)dt` は変更しない

## Topic 23 成果物再同期

- 解説PDF: `PASS / EXPLANATION_PDF_RESYNC_COMPLETE`
  - A4縦 `5 pages`
  - clean blind補強2点 `2 / 2 PASS`
  - 固定5問・23答案要素 `23 / 23 covered`
- 練習PDF: `PASS / PRACTICE_PDF_RESYNC_COMPLETE`
  - A4縦 `5 pages`
  - clean blind補強2点 `2 / 2 PASS`
  - 一次8問＋二次4問 `12 / 12`
  - 固定5問・23答案要素 `23 / 23 covered`
- PowerPoint: `PASS / POWERPOINT_RESYNC_COMPLETE`
  - 16:9 `6 slides`
  - SHA-256 `dc5babab362325cb00ca462660cd7f9b6c1cd1f6ef6f1e36c62ffe55395ae70c`
  - R2読図補強2点 `2 / 2 PASS`
  - 固定5問・23答案要素 `23 / 23 covered`
  - SPEC固定8項目 `8 / 8 covered`
  - SPEC指定3可視化 `3 / 3 PASS`
  - LibreOffice / pdftoppm表示QA `6 / 6 PASS`
  - geometry overflow `0`
  - 新たなexact blocker `0件`

## Topic 21 H26二次 問1(4)

`48.0 / 48.1 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。Topic 21は `PASS / completed` のまま。

## 次工程

Topic 23はまだ `completed` にしない。初回候補 `17837d...` は後編集せず、補強後教材だけを使った修正後clean blindを別ファイルで実施する。候補固定後に公式解答・標準解答と照合し、固定23答案要素が `23 / 23 PASS` した場合のみ最終QAへ進む。
