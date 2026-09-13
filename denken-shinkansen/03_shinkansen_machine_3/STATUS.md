# STATUS - 新幹線・電験三種「機械」

更新日: 2026-09-13

## 状態
- active_series: `03_shinkansen_machine_3`
- exam_aligned_completed_topics: 2 / 16
- current_status: `topic_03_explanation_pdf_complete`
- last_completed_topic: `02 初代0系はどうやって走っていた？`
- active_topic: `03 直流モーターはどうやって速度を変える？`
- next_start: Topic 03 の確定済みEXAM_ALIGNMENT・解説本文だけを使い、練習問題sourceを12問以上作成する。少なくとも半数を五肢択一とし、全問に完全解説を付ける

## 新品質ゲート進捗
- [x] 01 架線25kVをそのままモーターに入れたらどうなる？ — 必須4成果物と完成後独立再解答まで完了。選定5問を教材だけで再解答し5/5正答、品質ゲートPASS
- [x] 02 初代0系はどうやって走っていた？ — 必須4成果物と完成後独立再解答まで完了。選定6問を教材だけで再解答し6/6正答、品質ゲートPASS
- [ ] 03 直流モーターはどうやって速度を変える？ — 制作前EXAM_ALIGNMENT、解説本文9節、3段階例題、解説PDFまで完了。練習問題source以降は未着手
- [ ] 04〜16 — 未着手

## 01 品質ゲート記録
EXAM_ALIGNMENT対象:
1. R6上 機械 問8 — 巻数比・一次側換算・簡易等価回路
2. R6上 機械 問9 — 短絡試験・等価抵抗・漏れリアクタンス
3. R5上 機械 問9 — 鉄損・銅損・負荷率・最大効率
4. R4下 機械 問8 — 全損失から無負荷損を分離する計算
5. R4下 機械 問9 — 励磁電流・鉄損・励磁アドミタンス・最大効率

成果物:
- `topics/01_transformer/01_transformer.md`
- `topics/01_transformer/01_transformer_explanation.pdf`
- `topics/01_transformer/01_transformer_practice.pdf`
- `topics/01_transformer/01_transformer_images.pptx`

独立再解答結果: `4 / 2 / 4 / 4 / 5`、5/5一致。QA=`PASS / completed`。

## 02 品質ゲート記録
EXAM_ALIGNMENT対象:
1. R8上 機械 問1 — 分巻・直巻の発電機／電動機特性、自己励磁、残留磁気、始動トルク、整流子・ブラシとブラシレス化
2. R8上 機械 問2 — 磁界中を動く導体の誘導起電力、発電機作用、導体速度
3. R7下 機械 問1 — 直流分巻電動機の速度特性・トルク特性、特性グラフ
4. R7下 機械 問2 — 永久磁石直流電動機の銅損、電機子抵抗、逆起電力、回転速度
5. R7上 機械 問1 — 直巻・分巻・複巻電動機の結線と特性、始動トルク
6. R7上 機械 問2 — 始動時の逆起電力、始動電流、電機子抵抗、銅損、出力、効率

成果物:
- `topics/02_dc_machine/02_dc_machine.md`
- `topics/02_dc_machine/02_dc_machine_explanation.pdf`
- `topics/02_dc_machine/02_dc_machine_practice.md`
- `topics/02_dc_machine/02_dc_machine_practice.pdf`
- `topics/02_dc_machine/02_dc_machine_images.pptx`

独立再解答結果: `2 / 4 / 5 / 4 / 5 / 2`、6/6一致。QA=`PASS / completed`。

## 03 EXAM_ALIGNMENT対象
1. R6上 機械 問2 — 他励直流電動機の電機子電圧変更と回転速度。`E=V-IaRa`、一定界磁で `E∝N`
2. R4上 機械 問1 — 分巻電動機の始動抵抗、界磁・抵抗・電圧制御、静止レオナード
3. R3 機械 問7 — 分巻電動機の始動電流抑制、電機子回路の直列始動抵抗と段階的切外し
4. R2 機械 問1 — 他励電動機の電機子・界磁独立制御、`T=kΦIa`、弱め界磁と速度
5. R1 機械 問1 — 永久磁石直流電動機の電圧変更、一定トルク・一定磁束条件での速度計算

source Markdown:
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control.md`

確定範囲:
- `V=E+IaRa`、`E=kΦN`、`N=(V-IaRa)/(kΦ)`
- 始動時 `E=0` と始動抵抗
- 電機子電圧制御、界磁制御、抵抗制御、弱め界磁
- 系列SPECで指定されたタップ制御、定トルク運転・定出力運転の基本
- 新幹線接続はSPEC既定の `変圧器側で電圧を変える → 主電動機へ加わる電圧が変わる → 電流・トルク・速度が変化する` に限定
- 未確認の0系実車定格値・タップ数等は追加しない
- R4上問1に含まれる回生制動はTopic 09、誘導機VVVF・パワー半導体はTopic 04〜08として先取りしない

解説本文:
- MASTER SPECの9節構成で作成済み
- 速度式・始動・電機子電圧制御・界磁制御・抵抗制御・弱め界磁・定トルク／定出力の基本を確定範囲内で説明
- 3段階例題は、電機子電圧変更、始動抵抗、弱め界磁＋定出力の基本を扱う
- 選定5過去問の要求事項を本文節・例題へ全件マッピング済み

解説PDF:
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_explanation.pdf`
- A4縦4ページ
- 確定済みsource Markdownだけを組版し、9節・3段階例題・選定5過去問対応・公式まとめを収録
- 新幹線側は系列SPECで確定済みの接続だけを使用し、未確認の0系実車値を追加していない
- 全4ページをレンダリング確認し、文字欠け・重なり・クリッピング・可読性を確認してPASS。PDFテキストの置換文字・欠落記号も検査済み

完成後独立再解答は未実施。練習問題、練習PDF、PowerPointまで揃えた後に上記5問を教材だけで再解答する。

## 境界
Topic 03は系列SPECの速度制御・始動範囲だけを扱う。回生制動はTopic 09、誘導機のVVVF制御とパワー半導体は後続Topic 04〜08の範囲とし、先取りしない。未確認の0系実車値は真値化しない。

## 03 QA判定
`IN_PROGRESS`。制作前EXAM_ALIGNMENT、解説本文9節・3段階例題、解説PDFまで完了。必須成果物のうち練習PDF・PowerPointが未完で、完成後独立再解答も未実施のため完成数は2/16のまま。

## 次
Topic 03の確定済みEXAM_ALIGNMENT・本文だけを使い、三種仕様に従って練習問題sourceを12問以上作成する。少なくとも半数を五肢択一とし、数値問題は式選択理由・代入・中間計算・最終値・検算、知識問題は正答理由と重要誤答肢の誤りまで記載する。