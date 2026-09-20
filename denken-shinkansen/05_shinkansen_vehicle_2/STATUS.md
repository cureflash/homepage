# STATUS - 新幹線車両・電験二種

更新日: 2026-09-20

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `28 / 39`
- current_status: `topic_29_clean_blind_v1_needs_revision`
- last_completed_topic: `28 L0系② 同期機のフェーザと推進力`
- active_topic: `29 L0系③ 超電導磁気浮上の電磁力`
- next_start: H23 L形等価回路のblind-safe teaching patchを解説source / 練習教材へ統合し、PDF・PowerPointを再同期する

Topic 01〜28は `PASS / completed`。Topic 29は教材一式が一度PowerPointまで完成したが、完成後clean blind v1が `21 / 24 PASS` のため未完了。完成数は `28 / 39` のまま。

## Topic 29 固定EXAM_ALIGNMENT

判定: `PASS / EXAM_ALIGNMENT_COMPLETE`

- source: `topics/29_l0_superconducting_magnetic_levitation_force/29_l0_superconducting_magnetic_levitation_force.md`
- QA: `topics/29_l0_superconducting_magnetic_levitation_force/29_l0_superconducting_magnetic_levitation_force_exam_alignment_qa.md`
- 固定5問・24答案要素
  1. R8 一次「理論」問2: 5
  2. R7 一次「理論」問2: 5
  3. R4 一次「理論」問2: 5
  4. R2 一次「理論」問2: 5
  5. H23 二次「機械・制御」問1: 4
- 固定EXAM_ALIGNMENT変更: `0件`

SPEC必須8項目: ファラデーの法則 / 相互誘導 / 誘導電流 / 磁気エネルギー / 電磁力 / 超電導磁石 / 浮上力 / 案内力。

指定3可視化: 磁束変化―誘導起電力 / 速度―誘導電流 / 速度―電磁力。

## Topic 29 既存成果物

clean blind前までの成果物は以下。H23 remediationをまだ反映していないため、現在は「旧版・再同期待ち」と扱う。

- 解説source: `29_l0_superconducting_magnetic_levitation_force_explanation_source.md`
- 解説PDF: `29_l0_superconducting_magnetic_levitation_force_explanation.pdf`
  - blob: `f656c1b95a542bf15bfc77ca2f799fda6886faa0`
- 練習source: `29_l0_superconducting_magnetic_levitation_force_practice_source.md`
- 練習PDF: `29_l0_superconducting_magnetic_levitation_force_practice.pdf`
  - blob: `1f639d616e3c2432279e02e599c374771c0cfb70`
- PowerPoint: `29_l0_superconducting_magnetic_levitation_force_images.pptx`
  - blob: `2919bbe2b6763bcd73e246fd3e76c17305e9e662`

L0系実車の未確認の磁界・コイル電流・`R/L/M`・幾何寸法・浮上力・案内力・速度しきい値は真値化しない。Topic 30先取りは0件。

## Topic 29 clean blind v1

candidate:
- `topics/29_l0_superconducting_magnetic_levitation_force/29_l0_superconducting_magnetic_levitation_force_fresh_blind_candidates_20260920.md`
- lock commit: `c60c20f76e9064964d666abf0a1823f417450d2c`
- candidate固定後修正: `0件`

compare QA:
- `topics/29_l0_superconducting_magnetic_levitation_force/29_l0_superconducting_magnetic_levitation_force_fresh_blind_compare_qa_20260920.md`
- 一次: `20 / 20 PASS`
- 二次H23: `1 / 4 PASS`
- 合計: `21 / 24 PASS`
- 判定: `NEEDS_REVISION`

H23結果:
- (1) `UNRESOLVED_FROM_MATERIAL` → 公式 `75.7 N·m`: FAIL
- (2) candidate `0.375` → 公式 `0.212`: FAIL
- (3) `0 min^-1` → 公式一致: PASS
- (4) `UNRESOLVED_FROM_MATERIAL` → 公式 `36.7 N·m`: FAIL

## reconcile: fresh-worker blocker

`29_l0_superconducting_magnetic_levitation_force_fresh_worker_blocker.md` は、別workerがanswer-bearing alignmentを候補固定前に読んだため、そのworker自身について記録した実施者blockerである。

一方、candidate lock `c60c20f...` はそのblocker commitより前に、answer-bearing資料を先に見ていない別runで固定済み。したがって現在の正本状態は「fresh-worker待ち」ではなく「clean blind v1実施済み・H23 remediation必要」。blockerファイルは履歴として残す。

## root cause / remediation

不足はH23二次のL形等価回路への橋渡し。

既存教材は固定子側を無視した簡略形 `s_m=r'_2/x'_2` までしか扱っておらず、H23が要求する以下が不足していた。

- `V_1=V_L/sqrt(3)`
- `I'_2=V_1/sqrt((r_1+r'_2/s)^2+(x_1+x'_2)^2)`
- `T=3I'^2_2(r'_2/s)/ω_s`
- `s_max=r'_2/sqrt(r_1^2+(x_1+x'_2)^2)`
- 逆相制動 `s_p=2-s` と実際の区間 `1<=s_p<=2` の照合

内部answer-bearing診断:
- `29_l0_superconducting_magnetic_levitation_force_h23_l_equivalent_remediation_note_20260920.md`
- fresh workerは参照禁止。

blind-safe教材patch:
- `29_l0_superconducting_magnetic_levitation_force_h23_teaching_patch_20260920.md`
- 公式正答値を記載せず、一般式・適用条件・解法手順のみ追加。
- 判定: `TEACHING_PATCH_READY / ARTIFACT_RESYNC_REQUIRED`

## 次の安全な工程

1. blind-safe teaching patchを解説sourceと練習教材へ統合する。
2. 解説PDF・練習PDF・PowerPointを再生成し、表示・数式・単位・固定5問24答案要素の接続を再QAする。
3. その後、answer-bearing資料を見ていないfresh workerでclean blind v2 candidateを新規固定する。
4. v2 candidate固定後に公式照合する。v1 candidateは変更しない。

fresh blind v2のcandidate固定前に開かないもの:
- active theme alignment本体とexam alignment QA
- 公式解答PDF
- v1/v2 compare QA
- `h23_l_equivalent_remediation_note_20260920.md`（answer-bearing）

fresh workerが参照してよい教材側追加物は `h23_teaching_patch_20260920.md`。

## Topic 21 H26二次 問1(4)

`48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
