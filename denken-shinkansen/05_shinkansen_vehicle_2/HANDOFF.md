# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜28は最終QAまで `PASS / completed`。完成数は `28 / 39`。

現在地は `topic_29_exam_alignment_complete`。active topicは Topic 29 `L0系③ 超電導磁気浮上の電磁力`。Topic 29はまだ `completed` ではない。

## Topic 28 完了状態

Topic 28 `L0系② 同期機のフェーザと推進力` は `PASS / COMPLETED`。

最終QA:
- `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_final_qa.md`

clean blind v2:
- R4一次: `5 / 5 PASS`
- R7二次: `6 / 6 PASS`
- R5二次: `6 / 6 PASS`
- H29二次: `6 / 6 PASS`
- H27二次: `4 / 4 PASS`
- 合計: `27 / 27 PASS`
- candidate固定後修正: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`

公開一次資料で確認していないL0系実際の `X_s`、`E`、`δ`、有効電力、無効電力、推力、推進効率は真値化していない。

## Topic 29 今回完了

制作前EXAM_ALIGNMENTを固定した。

- source: `topics/29_l0_superconducting_magnetic_levitation_force/29_l0_superconducting_magnetic_levitation_force.md`
- QA: `topics/29_l0_superconducting_magnetic_levitation_force/29_l0_superconducting_magnetic_levitation_force_exam_alignment_qa.md`
- 判定: `PASS / EXAM_ALIGNMENT_COMPLETE`
- 固定過去問: `5問`
- 一次: `4問・20答案要素`
- 二次: `1問・4答案要素`
- 合計: `24答案要素`
- 制作前独立再計算・公式照合: `24 / 24 PASS`
- 公式照合不一致: `0件`
- exact blocker: `0件`

固定問題:
1. R8 一次「理論」問2 `(1)〜(5)` — 回転電荷、鎖交磁束、ファラデーの法則
2. R7 一次「理論」問2 `(1)〜(5)` — 相互インダクタンス、磁気エネルギー、電磁トルク、誘導起電力
3. R4 一次「理論」問2 `(1)〜(5)` — 磁界、磁束、磁気回路
4. R2 一次「理論」問2 `(1)〜(5)` — 鎖交磁束保存、磁気エネルギー、外力仕事
5. H23 二次「機械・制御」問1 `(1)〜(4)` — すべり、誘導電流、電磁トルク、逆相制動

H23二次は相対速度→誘導電流→電磁トルクの二次記述式ゲートとして使用する。誘導機制御をTopic 29へ追加しない。

## Topic 29 固定SPEC境界

必須8項目:
1. ファラデーの法則
2. 相互誘導
3. 誘導電流
4. 磁気エネルギー
5. 電磁力
6. 超電導磁石
7. 浮上力
8. 案内力

指定3可視化:
1. 磁束変化―誘導起電力
2. 速度―誘導電流
3. 速度―電磁力

固定EXAM_ALIGNMENTは以後勝手に変更しない。L0系実車の未確認の超電導磁石磁界、コイル電流、抵抗・インダクタンス、幾何寸法、浮上力、案内力、速度しきい値を真値化しない。例題・グラフの仮定値は「教材用仮定値」と明記する。Topic 30「誘導集電・非接触電力伝送」は先取りしない。

## 次の安全な工程

Topic 29解説sourceを制作する。

固定5問・24答案要素から逆算した説明を、SPEC必須8項目・指定3可視化へ全件マッピングする。公式・成立条件・単位・符号・解法手順を省略しない。L0系実車事実は鉄道総研・JR東海等の一次資料で確認した範囲だけを使う。

解説source完成後に解説PDFへ進み、教材一式完成後にclean blind独立再解答を行う。

## Topic 21 H26二次 問1(4)

`48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
