# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-13

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は3/16。Topic 01〜03は品質ゲートPASSでcompleted。次のactive topicは04 `300系でモーターが全部変わった`。

## 今回進捗
Topic 03の最終品質ゲートを完了した。

Git履歴を再確認すると、2026-09-13の既存コミットで解説PDF・練習PDFの新選定5問への同期と全ページ表示QAは完了していたが、並行更新後の現行mainでは旧PDF blobと「未同期」とするSTATUS/HANDOFFへ戻っていた。仕様を変更せず、既存QA済み同期版PDF blobをGitHub正本へ復元した。

復元後:
- 解説PDF blob: `fcc5bfd05cda2c26171dad7204880b98d33a9541`
- 練習PDF blob: `b9f974706c4ba4ee818d7aabef817854cca5ed5a`
- PowerPointは旧選定R4上問1・R3問7への直接参照なし。変更不要

そのうえで新選定5問を完成教材の式・解法だけで再計算し、公式解答と照合した。結果は `4 / 2 / 1 / 4 / 4` で5/5一致し、全問教材だけで根拠まで再構成できた。

## Topic 03 新EXAM_ALIGNMENT
- R7下 機械 問2 — `Pcu=Ia^2Ra`、`E=V-IaRa`、一定磁束の速度比 → 4
- R6上 機械 問2 — 電機子電圧変更、`E=V-IaRa`、一定界磁の速度比 → 2
- R2 機械 問1 — `T=kΦIa`、電機子・界磁独立制御、弱め界磁 → 1
- R1 機械 問1 — 一定トルク・一定磁束での電圧変更 → 4
- H30 機械 問1 — 始動抵抗、逆起電力、段階的抵抗切外し → 4

旧選定のR4上問1・R3問7はそれぞれ回生制動、誘導機／同期機始動法を含むため、教材へ仕様外論点を追加せず差し替えた。

## Topic 03 成果物
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control.md` — 新EXAM_ALIGNMENT、旧選定FAIL理由、新選定5問の完成後独立再解答結果を記録済み
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_explanation.pdf` — A4縦4ページ、新選定5問へ同期済み、同期版全ページ表示QA PASS
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_practice.md` — 12問、全問五肢択一、新選定5問へ同期済み
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_practice.pdf` — A4縦7ページ、新選定5問へ同期済み、同期版全ページ表示QA PASS
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_images.pptx` — 16:9、3枚、旧選定問への直接参照なし、既存QA PASS

## QA判定
Topic 01: `PASS / completed`。

Topic 02: `PASS / completed`。完成後独立再解答6/6正答。

Topic 03: `PASS / completed`。完成後独立再解答5/5正答。完成数3/16。

仕様は追加していない。回生制動はTopic 09、誘導機・同期機始動法、VVVF・パワー半導体等は後続Topicとして先取りしていない。

## 次の正確な開始点
Topic 04 `300系でモーターが全部変わった`。系列SPECの誘導機範囲を基準に、本文作成前に公式過去問を直近年度から調査し、`EXAM_ALIGNMENT` を作成する。