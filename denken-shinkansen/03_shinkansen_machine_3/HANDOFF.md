# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-13

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は2/16。Topic 01・02は品質ゲートPASSでcompleted。active topicは03 `直流モーターはどうやって速度を変える？`。

## 今回進捗
Topic 03の解説画像PowerPoint `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_images.pptx` をパッケージ内XMLまで確認し、旧選定のR4上 機械 問1・R3 機械 問7を含む過去問への直接参照がないことを確認した。したがってPowerPoint自体の修正は不要。

仕様は追加していない。回生制動、誘導機・同期機の始動法、誘導機VVVF・パワー半導体などの範囲外論点も追加していない。

GitHub正本更新:
- `STATUS.md` — `topic_03_powerpoint_alignment_verified` へ更新。完成数2/16据え置き
- `HANDOFF.md` — PowerPoint確認結果と次工程を記録
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_images.pptx` — 変更なし
- Webカタログは未更新。品質ゲート未通過のため登録しない

## Topic 03 新EXAM_ALIGNMENT
- R7下 機械 問2 — 永久磁石直流電動機。`Pcu=Ia^2Ra` から `Ra`、`E=V-IaRa`、一定磁束の速度比
- R6上 機械 問2 — 電機子電圧変更、`E=V-IaRa`、一定界磁の速度比
- R2 機械 問1 — 電機子・界磁独立制御、`T=kΦIa`、弱め界磁
- R1 機械 問1 — 永久磁石機、一定トルク・一定磁束での電圧変更
- H30 機械 問1 — 始動抵抗、逆起電力、段階的抵抗切外し

差し替え:
- R4上 機械 問1 → R7下 機械 問2
- R3 機械 問7 → H30 機械 問1

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
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control.md` — 新EXAM_ALIGNMENTへ更新済み。旧選定FAIL理由は履歴として保持
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_explanation.pdf` — A4縦4ページ、既存表示QA PASS。旧選定参照を新選定5問へ同期する工程が残る
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_practice.md` — 12問、全問五肢択一。EXAM_ALIGNMENT対応を新選定5問へ同期済み
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_practice.pdf` — A4縦7ページ、既存表示QA PASS。過去問対応表の同期確認・必要修正が残る
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_images.pptx` — 16:9、3枚。旧選定問への直接参照なしを確認済み。変更不要。既存表示QA・パッケージ検査PASS

## QA判定
Topic 01: `PASS / completed`。

Topic 02: `PASS / completed`。完成後独立再解答6/6正答。

Topic 03: `IN_PROGRESS`。source Markdown・練習問題sourceの新EXAM_ALIGNMENT同期に加え、PowerPointの旧選定問直接参照なし確認まで完了した。解説PDF・練習PDFの同期と、新選定5問での完成後独立再解答が残るため、完成数は2/16のまま。

## 次の正確な開始点
解説PDF・練習PDFの過去問対応表を新選定5問へ必要最小限で同期し、全ページ表示QAを行う。その後、新選定5問を保存済み正答を見ず完成教材だけで独立再解答し、公式解答と照合する。