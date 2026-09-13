# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-13

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は2/16。Topic 01・02は品質ゲートPASSでcompleted。active topicは03 `直流モーターはどうやって速度を変える？`。

## 今回進捗
Topic 03の解説PDF・練習PDFを、新選定5問のEXAM_ALIGNMENTへ同期した。解説PDFはA4縦4ページ、練習PDFはA4縦7ページを維持し、全ページ表示QAで文字欠け・クリップ・重なりなしを確認した。

PowerPoint `03_dc_motor_speed_control_images.pptx` はパッケージ内XMLを確認し、旧選定のR4上 機械 問1・R3 機械 問7を含む過去問への直接参照がないことを確認したため、修正していない。

教材範囲は拡張していない。回生制動、誘導機・同期機の始動法、誘導機VVVF・パワー半導体などの仕様外論点は追加していない。

GitHub正本更新:
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_explanation.pdf` — 新選定5問の過去問対応表へ同期、A4縦4ページ、全ページ表示QA PASS
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_practice.pdf` — 12問・五肢択一・解説を保持し、新選定5問のEXAM_ALIGNMENT表へ同期、A4縦7ページ、全ページ表示QA PASS
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_images.pptx` — 旧選定問への直接参照なしを確認、変更なし
- `STATUS.md` — `topic_03_artifact_alignment_synced` へ更新。完成数2/16据え置き
- `HANDOFF.md`
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

回生制動はTopic 09、誘導機・同期機の始動法および誘導機VVF・パワー半導体は後続Topicの範囲として先取りしない。

## 既存成果物
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control.md` — 新EXAM_ALIGNMENTへ更新済み。旧選定FAIL理由は履歴として保持
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_explanation.pdf` — A4縦4ページ、新選定5問へ同期済み、全ページ表示QA PASS
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_practice.md` — 12問、全問五肢択一。EXAM_ALIGNMENT対応を新選定5問へ同期済み
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_practice.pdf` — A4縦7ページ、新選定5問へ同期済み、全ページ表示QA PASS
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_images.pptx` — 16:9、3枚。旧選定問への直接参照なし、変更不要。既存表示QA・パッケージ検査PASS

## QA判定
Topic 01: `PASS / completed`。

Topic 02: `PASS / completed`。完成後独立再解答6/6正答。

Topic 03: `IN_PROGRESS`。新選定5問へのsource Markdown・練習問題source・解説PDF・練習PDF同期とPowerPoint確認まで完了した。過去問対応品質ゲートの最後の工程である、新選定5問の完成後独立再解答が残るため、完成数は2/16のまま。

## 次の正確な開始点
新選定5問を保存済み正答を見ず、完成教材だけで独立再解答する。教材だけで各選択肢の判定根拠まで再構成できるか確認し、その後に公式解答と照合する。1問でも教材だけで完結できなければ未完扱いとし、不足箇所だけを修正する。