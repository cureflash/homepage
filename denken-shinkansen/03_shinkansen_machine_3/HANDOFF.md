# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-13

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は2/16。Topic 01・02は品質ゲートPASSでcompleted。active topicは03 `直流モーターはどうやって速度を変える？`。

## 今回進捗
Topic 03の旧EXAM_ALIGNMENTで範囲外だった2問を、教材側へ仕様外知識を追加せず公式過去問側で差し替えた。

差し替え:
- R4上 機械 問1 → R7下 機械 問2
- R3 機械 問7 → H30 機械 問1

新選定5問:
1. R7下 機械 問2 — 永久磁石直流電動機。銅損から `Ra`、逆起電力、一定磁束で速度比
2. R6上 機械 問2 — 他励直流電動機の電機子電圧変更と回転速度
3. R2 機械 問1 — 他励電動機の電機子・界磁独立制御、トルク、弱め界磁
4. R1 機械 問1 — 永久磁石直流電動機の電圧変更と速度
5. H30 機械 問1 — 始動抵抗、逆起電力、段階的抵抗切外し

R7下問2は `Ra=0.75 Ω`、`E=10.5 V`、`N=2625 min^-1` で選択肢4。H30問1は `R1=1.5 Ω`、速度上昇後 `E=100 V`、`R2=0.5 Ω` で選択肢4。いずれもTopic 03の確定範囲だけで解法を構成できる。

GitHub正本更新:
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control.md` — EXAM_ALIGNMENTを新選定5問へ更新。差し替え理由・範囲確認・旧選定FAIL履歴を記録
- `STATUS.md` — `topic_03_exam_alignment_reselected_source_updated` へ更新。完成数2/16据え置き
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
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_practice.md` — 12問、全問五肢択一。問題本文は変更不要だがEXAM_ALIGNMENT対応欄の同期が未実施
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_practice.pdf` — A4縦7ページ、既存表示QA PASS。対応表の同期確認が未実施
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_images.pptx` — 16:9、3枚、既存表示QA・パッケージ検査PASS。旧選定問への直接参照の有無確認が未実施

## QA判定
Topic 01: `PASS / completed`。

Topic 02: `PASS / completed`。完成後独立再解答6/6正答。

Topic 03: `IN_PROGRESS`。旧選定のFAIL原因だった範囲不一致を解消する新選定5問を確定し、source Markdownへ反映した。成果物内対応表の同期と新選定5問での完成後独立再解答が残るため、完成数は2/16のまま。

## 次の正確な開始点
`03_dc_motor_speed_control_practice.md` のEXAM_ALIGNMENT対応を新選定5問へ必要最小限で修正する。続いて解説PDF・練習PDFの過去問対応表を同期し全ページ表示QA、PowerPointは旧選定問への直接参照がある場合のみ修正する。その後、新選定5問を保存済み正答を見ず完成教材だけで独立再解答し、公式解答と照合する。