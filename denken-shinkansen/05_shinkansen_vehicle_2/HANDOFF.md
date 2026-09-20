# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜28は最終QAまで `PASS / completed`。完成数は `28 / 39`。

現在地は `topic_29_explanation_pdf_complete`。active topicは Topic 29 `L0系③ 超電導磁気浮上の電磁力`。Topic 29はまだ `completed` ではない。

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

## Topic 29 制作前EXAM_ALIGNMENT

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

## Topic 29 解説source

- source: `topics/29_l0_superconducting_magnetic_levitation_force/29_l0_superconducting_magnetic_levitation_force_explanation_source.md`
- QA: `topics/29_l0_superconducting_magnetic_levitation_force/29_l0_superconducting_magnetic_levitation_force_explanation_source_qa.md`
- 判定: `PASS / EXPLANATION_SOURCE_COMPLETE`
- 固定5問・24答案要素: `24 / 24 connected`
- SPEC必須8項目: `8 / 8 PASS`
- 指定3可視化: `3 / 3 PASS`
- 3段階例題: 基礎 / 本試験標準 / 複合 `PASS`
- 数式・単位・例題独立再計算: `PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- exact blocker: `0件`

一次資料で確認した実車接続は、鉄道総研・JR東海が説明する超電導磁石、浮上・案内コイル、電磁誘導による浮上と中央復元まで。未確認の磁界、コイル電流、`R/L/M`、幾何寸法、浮上力、案内力、速度しきい値は真値化していない。

教材用速度モデル `I_rms(v)` と `F_model(v)` は、指定可視化を説明するための仮定モデルとして明記済み。L0系実車の速度―力特性式として扱わない。

## Topic 29 今回完了

解説PDFとQAをGitHub正本へ反映する。

- PDF: `topics/29_l0_superconducting_magnetic_levitation_force/29_l0_superconducting_magnetic_levitation_force_explanation.pdf`
- QA: `topics/29_l0_superconducting_magnetic_levitation_force/29_l0_superconducting_magnetic_levitation_force_explanation_pdf_qa.md`
- 判定: `PASS / EXPLANATION_PDF_COMPLETE`
- canonical blob SHA: `f656c1b95a542bf15bfc77ca2f799fda6886faa0`
- A4縦4頁
- PDFium / Poppler: `4 / 4 PASS`
- `pdftotext -layout`: `PASS`
- 固定5問・24答案要素: `24 / 24 covered`
- 一次: `20 / 20 covered`
- 二次: `4 / 4 covered`
- SPEC必須8項目: `8 / 8 covered`
- 指定3可視化: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- exact blocker: `0件`

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

固定EXAM_ALIGNMENTは変更しない。L0系実車の未確認の磁界・コイル電流・`R/L/M`・幾何寸法・浮上力・案内力・速度しきい値を真値化しない。教材用仮定値は実車一般式へ昇格させない。Topic 30「誘導集電・非接触電力伝送」は先取りしない。教材一式完成前にclean blind独立再解答へ進まない。

## 次の安全な工程

Topic 29練習sourceを作成する。

QA項目:
- 固定5問・24答案要素に対応する練習問題・解答・途中式を整備
- 一次20 / 20、二次4 / 4の接続維持
- SPEC必須8項目維持
- 解説source/PDFと数式・単位・符号を一致
- L0系未確認実車値の真値化0件
- Topic 30先取り0件

## Topic 21 H26二次 問1(4)

`48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
