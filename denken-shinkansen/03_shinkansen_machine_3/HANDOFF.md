# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-13

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は2/16。Topic 01・02は品質ゲートPASSでcompleted。active topicは03 `直流モーターはどうやって速度を変える？`。

## 今回進捗
Topic 03の練習問題sourceに残っていた旧EXAM_ALIGNMENT参照を、新選定5問へ必要最小限で同期した。問題本文・解説は確定範囲内のため変更していない。

新しい対応:
- R7下 機械 問2 → 問1・5・9。`Pcu=Ia^2Ra` から `Ra` を逆算する段階は解説本文で直接対応し、練習問題では `I^2R`、`E=V-IaRa`、永久磁石機の速度比を分割確認
- R6上 機械 問2 → 問4・11
- R2 機械 問1 → 問3・8・10・11・12
- R1 機械 問1 → 問5
- H30 機械 問1 → 問2・6・7
- 抵抗制御の補強 → 問9

旧選定のR4上 機械 問1、R3 機械 問7への参照は練習問題sourceから除去した。回生制動、誘導機・同期機の始動法などの仕様外論点は追加していない。

GitHub正本更新:
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_practice.md` — EXAM_ALIGNMENT対応を新選定5問へ同期。問題本文・解説は変更なし
- `STATUS.md` — `topic_03_practice_source_alignment_synced` へ更新。完成数2/16据え置き
- `HANDOFF.md`
- Webカタログは未更新。品質ゲート未通過のため登録しない

## Topic 03で確定した範囲
- `V=E+IaRa`
- `E=kΦN`
- `N=(V-IaRa)/(kΦ)`
- `Pcu=Ia^2Ra` から電機子抵抗を求め速度計算へ接続する範囲
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

回生制動はTopic 09、誘導機・同期機の始動法および誘導機VVVF・パワー半導体は後続Topicの範囲として先取りしない。

## 既存成果物
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control.md` — 新EXAM_ALIGNMENTへ更新済み
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_explanation.pdf` — A4縦4ページ、既存表示QA PASS。旧過去問対応表の同期が未実施
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_practice.md` — 12問、全問五肢択一。EXAM_ALIGNMENT対応を新選定5問へ同期済み。問題本文・解説は変更なし
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_practice.pdf` — A4縦7ページ、既存表示QA PASS。対応表の同期確認が未実施
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_images.pptx` — 16:9、3枚、既存表示QA・パッケージ検査PASS。旧選定問への直接参照の有無確認が未実施

## QA判定
Topic 01: `PASS / completed`。

Topic 02: `PASS / completed`。完成後独立再解答6/6正答。

Topic 03: `IN_PROGRESS`。新選定5問は確定済みで、source Markdownと練習問題sourceのEXAM_ALIGNMENT同期まで完了した。解説PDF・練習PDFの対応表同期、PowerPoint確認、新選定5問での完成後独立再解答が残るため、完成数は2/16のまま。

## 次の正確な開始点
解説PDF・練習PDFの過去問対応表を新選定5問へ必要最小限で同期し、全ページ表示QAを行う。PowerPointは旧選定問への直接参照の有無だけ確認し、存在する場合のみ修正する。その後、新選定5問を保存済み正答を見ず完成教材だけで独立再解答し、公式解答と照合する。