# STATUS - 新幹線・電験三種「機械」

更新日: 2026-09-13

## 状態
- active_series: `03_shinkansen_machine_3`
- exam_aligned_completed_topics: 2 / 16
- current_status: `topic_03_exam_alignment_reselected_source_updated`
- last_completed_topic: `02 初代0系はどうやって走っていた？`
- active_topic: `03 直流モーターはどうやって速度を変える？`
- next_start: 解説PDF・練習問題source/PDFの過去問対応表を新選定5問へ必要最小限で同期し、PowerPointに旧選定問への直接参照がないことを確認する

## 新品質ゲート進捗
- [x] 01 架線25kVをそのままモーターに入れたらどうなる？ — 必須4成果物と完成後独立再解答まで完了。選定5問を教材だけで再解答し5/5正答、品質ゲートPASS
- [x] 02 初代0系はどうやって走っていた？ — 必須4成果物と完成後独立再解答まで完了。選定6問を教材だけで再解答し6/6正答、品質ゲートPASS
- [ ] 03 直流モーターはどうやって速度を変える？ — 必須成果物は完成。旧選定の完成後独立再解答で範囲外問題2問を検出したため、仕様外内容を追加せず過去問選定を修正。source MarkdownのEXAM_ALIGNMENTは新選定5問へ更新済み。成果物内対応表の同期と新選定での独立再解答は未実施
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
新選定:
1. R7下 機械 問2 — 永久磁石直流電動機。銅損から `Ra`、`E=V-IaRa`、一定磁束で速度比
2. R6上 機械 問2 — 他励直流電動機の電機子電圧変更と回転速度。`E=V-IaRa`、一定界磁で `E∝N`
3. R2 機械 問1 — 他励電動機の電機子・界磁独立制御、`T=kΦIa`、弱め界磁と速度
4. R1 機械 問1 — 永久磁石直流電動機の電圧変更、一定トルク・一定磁束条件での速度計算
5. H30 機械 問1 — 直流電動機の始動抵抗、逆起電力、段階的抵抗切外し

差し替え:
- R4上 機械 問1 → R7下 機械 問2
- R3 機械 問7 → H30 機械 問1

差し替え理由:
- R4上問1は逆転時の電流反転と回生制動を含み、Topic 03だけでは設問全体を解けない
- R3問7は誘導電動機・同期電動機の始動法を含み、Topic 03だけでは設問全体を解けない
- 教材側へこれらの仕様外論点を追加しない

差し替え後2問の範囲確認:
- R7下問2: `Ra=3/2^2=0.75 Ω`、`E=12-2×0.75=10.5 V`、`N=3000×10.5/12=2625 min^-1` → 選択肢4
- H30問1: `R1=200/100-0.5=1.5 Ω`、速度上昇後 `E=200-50×2.0=100 V`、`R2=(200-100)/100-0.5=0.5 Ω` → 選択肢4

source Markdown:
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control.md`
- EXAM_ALIGNMENTを新選定5問へ更新済み
- 旧選定でのFAIL理由は履歴として保持

確定範囲:
- `V=E+IaRa`、`E=kΦN`、`N=(V-IaRa)/(kΦ)`
- `Pcu=Ia^2Ra` から電機子抵抗を求め、速度計算へ接続する範囲
- 始動時 `E=0` と始動抵抗
- 電機子電圧制御、界磁制御、抵抗制御、弱め界磁
- 系列SPECで指定されたタップ制御、定トルク運転・定出力運転の基本
- 新幹線接続はSPEC既定の `変圧器側で電圧を変える → 主電動機へ加わる電圧が変わる → 電流・トルク・速度が変化する` に限定
- 未確認の0系実車定格値・タップ数等は追加しない
- 回生制動はTopic 09、誘導機VVVF・パワー半導体はTopic 04〜08として先取りしない

解説本文:
- MASTER SPECの9節構成で作成済み
- 速度式・始動・電機子電圧制御・界磁制御・抵抗制御・弱め界磁・定トルク／定出力の基本を確定範囲内で説明
- 3段階例題は、電機子電圧変更、始動抵抗、弱め界磁＋定出力の基本を扱う
- source内の過去問対応表は新選定5問へ更新済み

解説PDF:
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_explanation.pdf`
- A4縦4ページ
- 表示QAは既存版でPASS
- 本文理論は範囲内だが、旧選定過去問への参照が残るため次工程で対応表だけ同期する

練習問題source:
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_practice.md`
- 全12問を五肢択一で作成済み
- 問題本文の確定範囲に変更は不要
- EXAM_ALIGNMENT対応欄は旧選定のままなので次工程で新選定へ同期する

練習PDF:
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_practice.pdf`
- A4縦7ページ
- 表示QAは既存版でPASS
- 問題本文・解説内容は確定範囲内。対応表に旧選定参照があれば次工程で同期する

解説画像PowerPoint:
- `topics/03_dc_motor_speed_control/03_dc_motor_speed_control_images.pptx`
- 16:9、3枚
- 速度式、始動抵抗、弱め界磁、定トルク／定出力、新幹線接続を図解済み
- 次工程で旧選定問への直接参照の有無だけ確認し、存在する場合のみ修正する

旧選定での完成後独立再解答:
- R6上 問2 → 独立2 / 公式2 / 教材のみPASS
- R4上 問1 → 独立4 / 公式4 / 教材のみFAIL
- R3 問7 → 独立1 / 公式1 / 教材のみFAIL
- R2 問1 → 独立1 / 公式1 / 教材のみPASS
- R1 問1 → 独立4 / 公式4 / 教材のみPASS
- 選択肢の公式一致は5/5だが、教材のみで完結したのは3/5

## 境界
Topic 03は系列SPECの速度制御・始動範囲だけを扱う。回生制動はTopic 09、誘導機のVVVF制御とパワー半導体は後続Topic 04〜08の範囲とし、先取りしない。未確認の0系実車値は真値化しない。

## 03 QA判定
`IN_PROGRESS`。旧選定の品質ゲートFAIL原因を教材内容ではなく過去問選定の範囲不一致と特定し、Topic 03内だけで解ける公式過去問へ選定を修正した。source MarkdownのEXAM_ALIGNMENTは修正済み。成果物内対応表の同期と新選定5問での完成後独立再解答が残るため、完成数は2/16のまま。

## 次
解説PDF・練習問題source/PDFの過去問対応表を新選定5問へ必要最小限で同期する。PowerPointは旧選定問への直接参照の有無だけ確認し、必要な場合のみ修正する。その後、新選定5問で完成後独立再解答を再実施する。