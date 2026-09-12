# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-13

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は2/16。Topic 01・02は品質ゲートPASSでcompleted。active topicは03 `直流モーターはどうやって速度を変える？`。

## 今回進捗
Topic 03 を未着手から `topic_03_exam_alignment_complete` へ1段階進めた。

制作前EXAM_ALIGNMENTを実施し、直近年度を優先して公式過去問5問を選定した。要求知識・使用式・設問型を分解し、系列SPEC内で教材必須範囲を固定した。完成後独立再解答に備え、公式正答番号はこの段階ではsourceへ記録していない。

GitHub正本更新:
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control.md` — 新規作成。EXAM_ALIGNMENT、教材必須範囲、範囲境界、完成後ゲートを記録
- `STATUS.md` — `topic_03_exam_alignment_complete`、完成数2/16、次工程を解説本文＋3段階例題へ更新
- `HANDOFF.md`

## Topic 03 EXAM_ALIGNMENT
選定した公式過去問:

1. R6上 機械 問2 — 他励直流電動機の電機子電圧変更と回転速度。`E=V-IaRa`、一定界磁で `E∝N`
2. R4上 機械 問1 — 分巻電動機の始動抵抗、界磁・抵抗・電圧制御、静止レオナード
3. R3 機械 問7 — 分巻電動機の始動電流抑制、電機子回路の直列始動抵抗と段階的切外し
4. R2 機械 問1 — 他励電動機の電機子・界磁独立制御、`T=kΦIa`、弱め界磁と速度
5. R1 機械 問1 — 永久磁石直流電動機の電圧変更、一定トルク・一定磁束条件での速度計算

公式問題:
- R6上: `https://www.shiken.or.jp/chief/upload/20240818_ch_third_q03.pdf`
- R4上: `https://www.shiken.or.jp/chief/upload/20220821_ch_third_q03.pdf`
- R3: `https://www.shiken.or.jp/chief/upload/20210822_ch_third_q03.pdf`
- R2: `https://www.shiken.or.jp/chief/upload/20200913_ch_third_q03.pdf`
- R1: `https://www.shiken.or.jp/chief/upload/20190901_ch_third_q03.pdf`

参考教材はe-sysnet、電験三種まとめました、電験王の複数系統を確認。説明粒度・論点分解・解法の見せ方だけを参照し、文章・図・例題は複製しない。

## Topic 03で確定した範囲
系列SPECと過去問要求から、以下だけを教材化する。

- `V=E+IaRa`
- `E=kΦN`
- `N=(V-IaRa)/(kΦ)`
- 始動時 `N=0 → E=0` と始動抵抗
- 電機子電圧制御
- 界磁制御・弱め界磁
- 抵抗制御
- タップ制御
- `T=kΦIa`
- 定トルク運転・定出力運転の基本
- 電圧・電流・磁束・トルク・速度をつなぐ再利用可能な解法手順

新幹線接続は系列SPECで確定済みの次だけを使う。

```text
変圧器側で電圧を変える
↓
主電動機へ加わる電圧が変わる
↓
電流・トルク・速度が変化する
```

## 境界
仕様追加はしていない。

- 0系のタップ数、主電動機定格値、具体的な回路定数は未確認なので追加しない
- R4上問1に含まれる逆転・回生制動はTopic 03の要求に採用しない。回生はTopic 09
- 誘導電動機のVVVF、インバータ、GTO・IGBT・SiCは後続Topic 04〜08として先取りしない
- 高度な駆動制御則へ広げない

## QA判定
Topic 01: `PASS / completed`。

Topic 02: `PASS / completed`。MASTER SPEC必須成果物を揃え、完成後独立再解答6/6正答。

Topic 03: `IN_PROGRESS`。制作前EXAM_ALIGNMENT完了。完成後独立再解答は未実施のため、完成数は2/16のまま。

## 次の正確な開始点
`topics/03_dc_motor_speed_control/03_dc_motor_speed_control.md` の確定済み範囲だけを使い、MASTER SPECの9節構成に沿って解説本文と3段階例題を作成する。