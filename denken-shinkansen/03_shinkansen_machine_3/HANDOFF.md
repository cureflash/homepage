# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-13

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は2/16。Topic 01・02は品質ゲートPASSでcompleted。active topicは03 `直流モーターはどうやって速度を変える？`。

## 今回進捗
Topic 03 を `topic_03_explanation_content_complete` から `topic_03_explanation_pdf_complete` へ1段階進めた。

確定済み `topics/03_dc_motor_speed_control/03_dc_motor_speed_control.md` だけを使い、解説プリントPDFを作成した。新規論点・未確認実車値は追加していない。

GitHub正本更新:
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_explanation.pdf` — 新規作成
- `STATUS.md` — `topic_03_explanation_pdf_complete`、完成数2/16、次工程を練習問題sourceへ更新
- `HANDOFF.md`

## Topic 03 EXAM_ALIGNMENT
選定済み公式過去問:
1. R6上 機械 問2 — 他励直流電動機の電機子電圧変更と回転速度。`E=V-IaRa`、一定界磁で `E∝N`
2. R4上 機械 問1 — 分巻電動機の始動抵抗、界磁・抵抗・電圧制御、静止レオナード
3. R3 機械 問7 — 分巻電動機の始動電流抑制、電機子回路の直列始動抵抗と段階的切外し
4. R2 機械 問1 — 他励電動機の電機子・界磁独立制御、`T=kΦIa`、弱め界磁と速度
5. R1 機械 問1 — 永久磁石直流電動機の電圧変更、一定トルク・一定磁束条件での速度計算

## Topic 03で確定した範囲
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

新幹線接続は系列SPEC既定の以下だけを使用する。

```text
変圧器側で電圧を変える
↓
主電動機へ加わる電圧が変わる
↓
電流・トルク・速度が変化する
```

## 解説PDF
`topics/03_dc_motor_speed_control/03_dc_motor_speed_control_explanation.pdf`

- A4縦4ページ
- MASTER SPECの9節構成を収録
- 3段階例題を収録
  - 電機子電圧変更後の速度
  - 始動抵抗と段階的切外し
  - 弱め界磁の速度比・トルク比・定出力の基本
- 選定5過去問との対応を収録
- 未確認の0系タップ数、主電動機定格値、回路定数は追加していない
- 回生制動、誘導機VVVF、GTO・IGBT・SiCは先取りしていない
- 全4ページをレンダリング確認し、文字欠け・重なり・クリッピング・可読性を確認してPASS
- PDFテキストについて置換文字・欠落記号がないことを確認済み

## QA判定
Topic 01: `PASS / completed`。

Topic 02: `PASS / completed`。完成後独立再解答6/6正答。

Topic 03: `IN_PROGRESS`。制作前EXAM_ALIGNMENT、解説本文9節・3段階例題、解説PDFまで完了。練習問題source・練習PDF・PowerPoint・完成後独立再解答は未完了なので、完成数は2/16のまま。

## 次の正確な開始点
Topic 03の確定済みEXAM_ALIGNMENT・解説本文だけを使い、三種仕様に従って練習問題sourceを12問以上作成する。少なくとも半数を五肢択一とし、全問に完全解説を付ける。