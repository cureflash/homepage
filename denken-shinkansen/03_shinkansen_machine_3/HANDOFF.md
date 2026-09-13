# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-13

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は2/16。Topic 01・02は品質ゲートPASSでcompleted。active topicは03 `直流モーターはどうやって速度を変える？`。

## 今回進捗
Topic 03 の完成後独立再解答を実施した。

独立再解答の選択肢は `2 / 4 / 1 / 1 / 4` で、公式解答と5/5一致した。ただし `EXAM_ALIGNMENT_SPEC.md` の完成条件である「完成教材だけで独立再解答できるか」を厳密に確認すると3/5だった。

- R6上 問2: 教材のみで解答可、2=公式2
- R4上 問1: 教材のみでは一意に解答不可。Topic 03外の逆転時の電流反転知識が必要で、回生制動も含む
- R3 問7: 教材のみでは一意に解答不可。誘導電動機・同期電動機の始動法を含む
- R2 問1: 教材のみで解答可、1=公式1
- R1 問1: 教材のみで解答可、4=公式4

このためQAは `FAIL / IN_PROGRESS`。完成数は2/16のまま。範囲外内容をTopic 03へ追加して通過させず、過去問選定側を修正する。

GitHub正本更新:
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control.md` — 完成後独立再解答結果とFAIL理由を記録
- `STATUS.md` — `topic_03_independent_reanswer_failed_scope_mismatch`、完成数2/16据え置き、次工程をEXAM_ALIGNMENT修正へ更新
- `HANDOFF.md`
- Webカタログは未更新。品質ゲート未通過のため登録しない

## Topic 03 EXAM_ALIGNMENT
現選定:
1. R6上 機械 問2 — 他励直流電動機の電機子電圧変更と回転速度。`E=V-IaRa`、一定界磁で `E∝N` — PASS
2. R4上 機械 問1 — 分巻電動機の始動抵抗、界磁・抵抗・電圧制御、静止レオナード — 差し替え必要
3. R3 機械 問7 — 分巻電動機の始動電流抑制と始動抵抗の切外し — 差し替え必要
4. R2 機械 問1 — 他励電動機の電機子・界磁独立制御、`T=kΦIa`、弱め界磁と速度 — PASS
5. R1 機械 問1 — 永久磁石直流電動機の電圧変更、一定トルク・一定磁束条件での速度計算 — PASS

差し替え候補は公式問題・公式解答まで確認済み。

- R7下 機械 問2 — 永久磁石直流電動機。銅損から `Ra`、`E=V-IaRa`、一定磁束で速度比。Topic 03内だけで選択肢4を導け、公式4と一致
- H30 機械 問1 — 直流電動機の始動抵抗、逆起電力、段階的抵抗切外し。Topic 03内だけで選択肢4を導け、公式4と一致

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

## 既存成果物
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control.md`
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_explanation.pdf` — A4縦4ページ、表示QA PASS
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_practice.md` — 12問、全問五肢択一
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_practice.pdf` — A4縦7ページ、表示QA PASS
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_images.pptx` — 16:9、3枚、表示QA・パッケージ検査PASS

既存教材本文の確定範囲自体に不足を認めたわけではない。失敗原因は、R4上問1・R3問7を「問全体がTopic 03だけで解ける」として選定していたこと。差し替えに伴い、source・解説PDF・練習source/PDF・PowerPointの過去問対応表に旧2問への直接参照がある箇所だけ必要最小限で修正する。

## QA判定
Topic 01: `PASS / completed`。

Topic 02: `PASS / completed`。完成後独立再解答6/6正答。

Topic 03: `FAIL / IN_PROGRESS`。必須成果物は揃っている。独立再解答の選択肢は公式と5/5一致したが、完成教材だけで完結したのは3/5。仕様外内容を追加せずEXAM_ALIGNMENTを修正する。

## 次の正確な開始点
R4上問1・R3問7をR7下機械問2・H30機械問1へ差し替え、Topic 03のEXAM_ALIGNMENTと成果物内の対応表を必要最小限で更新する。その後、差し替え後5問を保存済み正答を見ずに完成教材だけで独立再解答し、公式解答と照合する。