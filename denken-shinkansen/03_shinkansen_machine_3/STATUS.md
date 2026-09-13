# STATUS - 新幹線・電験三種「機械」

更新日: 2026-09-13

## 状態
- active_series: `03_shinkansen_machine_3`
- exam_aligned_completed_topics: 3 / 16
- current_status: `topic_03_completed`
- last_completed_topic: `03 直流モーターはどうやって速度を変える？`
- active_topic: `04 300系でモーターが全部変わった`
- next_start: Topic 04について公式過去問を直近年度から調査し、系列SPECの範囲内で `EXAM_ALIGNMENT` を作成する

## 新品質ゲート進捗
- [x] 01 架線25kVをそのままモーターに入れたらどうなる？ — 選定5問を教材だけで再解答し5/5正答、品質ゲートPASS
- [x] 02 初代0系はどうやって走っていた？ — 選定6問を教材だけで再解答し6/6正答、品質ゲートPASS
- [x] 03 直流モーターはどうやって速度を変える？ — 必須4成果物を新選定5問へ同期。完成後独立再解答5/5正答、品質ゲートPASS
- [ ] 04〜16 — 未着手

## 03 EXAM_ALIGNMENT対象
1. R7下 機械 問2 — 永久磁石直流電動機、`Pcu=Ia^2Ra`、`E=V-IaRa`、一定磁束で速度比
2. R6上 機械 問2 — 他励直流電動機の電機子電圧変更、`E=V-IaRa`、一定界磁で `E∝N`
3. R2 機械 問1 — 電機子・界磁独立制御、`T=kΦIa`、弱め界磁
4. R1 機械 問1 — 永久磁石直流電動機、一定トルク・一定磁束での速度計算
5. H30 機械 問1 — 始動抵抗、逆起電力、段階的抵抗切外し

旧選定のR4上 問1とR3 問7はTopic 03外の回生制動・誘導機／同期機始動法を含むため、教材へ仕様外論点を追加せず上記2問へ差し替えた。

## 03 成果物
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control.md` — 新EXAM_ALIGNMENT・独立再解答結果を記録済み
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_explanation.pdf` — 新選定5問へ同期済み、A4縦4ページ、同期版の全ページ表示QA PASS
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_practice.md` — 12問、全問五肢択一、新選定5問へ同期済み
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_practice.pdf` — 新選定5問へ同期済み、A4縦7ページ、同期版の全ページ表示QA PASS
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_images.pptx` — 16:9、3枚。旧選定問への直接参照なし、既存表示QA・パッケージ検査PASS

PDF同期版は2026-09-13の既存QA済みblobをGitHub正本へ復元した。現在blob SHAは解説PDF `fcc5bfd05cda2c26171dad7204880b98d33a9541`、練習PDF `b9f974706c4ba4ee818d7aabef817854cca5ed5a`。

## 03 完成後独立再解答
| 過去問 | 独立再解答 | 公式解答 | 教材のみ | 判定 |
|---|---:|---:|---|---|
| R7下 機械 問2 | 4 | 4 | 可 | PASS |
| R6上 機械 問2 | 2 | 2 | 可 | PASS |
| R2 機械 問1 | 1 | 1 | 可 | PASS |
| R1 機械 問1 | 4 | 4 | 可 | PASS |
| H30 機械 問1 | 4 | 4 | 可 | PASS |

使用した関係は `Pcu=Ia^2Ra`、`V=E+IaRa`、`E=kΦN`、`T=kΦIa`、始動時 `E=0`。全てTopic 03教材内に存在し、仕様外知識による補完は不要。

## 03 QA判定
`PASS / completed`。完成数を3/16へ更新する。

## 次
Topic 04「300系でモーターが全部変わった」を開始する。本文より先に公式過去問調査と `EXAM_ALIGNMENT` を行い、系列SPECにある誘導機範囲を越えて仕様を追加しない。