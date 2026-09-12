# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-13

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は2/16。Topic 01・02は品質ゲートPASSでcompleted。active topicは03 `直流モーターはどうやって速度を変える？`。

## 今回進捗
Topic 03 を `topic_03_exam_alignment_complete` から `topic_03_explanation_content_complete` へ1段階進めた。

確定済みEXAM_ALIGNMENTと系列SPECだけを使い、MASTER SPECの9節構成に沿う解説本文と3段階例題をsource Markdownへ追加した。選定5過去問が要求する速度式、始動、電機子電圧制御、界磁制御、抵抗制御、弱め界磁、トルク条件を本文節・例題へ全件マッピングした。

GitHub正本更新:
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control.md` — 解説本文9節、3段階例題、過去問→本文／例題マッピングを追加
- `STATUS.md` — `topic_03_explanation_content_complete`、完成数2/16、次工程を解説プリントPDFへ更新
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

## 解説本文・例題
source Markdownに次を追加済み。

- 9節: 試験論点、基礎概念、公式と成立条件、解法手順、3段階例題、新幹線接続、頻出ミス、過去問対応、公式まとめ
- 基礎例題: 電機子電圧変更後の回転速度。`IaRa` を引いた逆起電力比で速度を求める
- 本試験標準例題: 始動電流を制限する始動抵抗と、逆起電力増加後の抵抗切外し
- 複合・ひっかけ例題: 弱め界磁時の速度比・トルク比・`P=Tω` による定出力の基本

選定5過去問の要求事項は本文節と例題へ全件マッピング済み。完成後独立再解答は、全成果物完成後まで実施しない。

## 境界
仕様追加はしていない。

- 0系のタップ数、主電動機定格値、具体的な回路定数は未確認なので追加しない
- R4上問1に含まれる逆転・回生制動はTopic 03の要求に採用しない。回生はTopic 09
- 誘導電動機のVVVF、インバータ、GTO・IGBT・SiCは後続Topic 04〜08として先取りしない
- 高度な駆動制御則へ広げない

## QA判定
Topic 01: `PASS / completed`。

Topic 02: `PASS / completed`。MASTER SPEC必須成果物を揃え、完成後独立再解答6/6正答。

Topic 03: `IN_PROGRESS`。制作前EXAM_ALIGNMENTと解説本文9節・3段階例題まで完了。必須成果物と完成後独立再解答が未完了のため、完成数は2/16のまま。

## 次の正確な開始点
`topics/03_dc_motor_speed_control/03_dc_motor_speed_control.md` の確定済み本文・例題だけを使い、解説プリントPDFを作成する。