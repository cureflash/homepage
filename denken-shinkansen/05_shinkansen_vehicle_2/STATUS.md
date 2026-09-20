# STATUS - 新幹線車両・電験二種

更新日: 2026-09-20

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `28 / 39`
- current_status: `topic_29_artifacts_resynced_fresh_blind_v2_required`
- last_completed_topic: `28 L0系② 同期機のフェーザと推進力`
- active_topic: `29 L0系③ 超電導磁気浮上の電磁力`
- next_start: answer-bearing資料を見ていないfresh workerでclean blind v2 candidateを新規固定する

Topic 01〜28は `PASS / completed`。Topic 29はclean blind v1が `21 / 24 PASS` のため未完了。完成数は `28 / 39` のまま。

## Topic 29 固定EXAM_ALIGNMENT

判定: `PASS / EXAM_ALIGNMENT_COMPLETE`

- 固定5問・24答案要素
  1. R8 一次「理論」問2: 5
  2. R7 一次「理論」問2: 5
  3. R4 一次「理論」問2: 5
  4. R2 一次「理論」問2: 5
  5. H23 二次「機械・制御」問1: 4
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC必須8項目: `8 / 8 maintained`
- 指定3可視化: `3 / 3 maintained`

## clean blind v1 / remediation

- v1 candidate lock: `c60c20f76e9064964d666abf0a1823f417450d2c`
- candidate固定後修正: `0件`
- 一次: `20 / 20 PASS`
- H23二次: `1 / 4 PASS`
- 合計: `21 / 24 PASS`
- 判定: `NEEDS_REVISION`

不足はH23二次の一相L形等価回路への橋渡し。remediation済みsourceは以下を追加済み。

- `V_1=V_L/sqrt(3)`
- `I'_2=V_1/sqrt((r_1+r'_2/s)^2+(x_1+x'_2)^2)`
- `T=3I'^2_2(r'_2/s)/ω_s`
- `s_max=r'_2/sqrt(r_1^2+(x_1+x'_2)^2)`
- 逆相制動 `s_p=2-s`
- 実通過区間 `1<=s_p<=2`
- `r_1`,`x_1` が残るとき簡略条件 `s_m=r'_2/x'_2` を使わない

source統合:
- 解説source commit: `fd5fd78cc2fc4b9da10276751db92b47a160f3ff`
- 練習source commit: `072c8f023f0386d70170676efd94bdbcd6c81697`
- source integration QA: `PASS / SOURCE_INTEGRATION_COMPLETE`

## artifact状態

remediation後sourceとの再同期を完了。

- 解説PDF: `29_l0_superconducting_magnetic_levitation_force_explanation.pdf`
  - blob: `35ba843b81fd8fc08f76bd5de8aa9edee540d78f`
  - QA: `PASS / EXPLANATION_ARTIFACT_RESYNC_COMPLETE`
- 練習PDF: `29_l0_superconducting_magnetic_levitation_force_practice.pdf`
  - blob: `bebec9f9a6ed60178ca567e54060b37958ea2a27`
  - A4 11 pages / PDFium・Poppler `11 / 11 PASS`
  - QA: `PASS / PRACTICE_ARTIFACT_RESYNC_COMPLETE`
- PowerPoint: `29_l0_superconducting_magnetic_levitation_force_images.pptx`
  - blob: `85394e303e8ff9bff19193a76b09d1db17406ec9`
  - 16:9 / 6 slides / LibreOffice render `6 / 6 PASS`
  - QA: `PASS / POWERPOINT_ARTIFACT_RESYNC_COMPLETE`

固定5問・24答案要素は `24 / 24 connected` を維持。L0系未確認実車値の真値化0件、Topic 30先取り0件、exact blocker 0件。

## 次の安全な工程

1. answer-bearing資料を見ていないfresh workerでclean blind v2 candidateを新規固定する。
2. candidate固定後にのみ公式標準解答と照合する。
3. `24 / 24 PASS` の場合のみTopic 29最終QA・completedへ進む。FAILがあればcandidateは変更せず、原因診断→教材補強→artifact再同期→別fresh workerで再試験する。

fresh blind v2 candidate固定前に開かない:
- active theme alignment本体 / exam alignment QA
- 公式解答PDF
- v1/v2 compare QA
- `29_l0_superconducting_magnetic_levitation_force_h23_l_equivalent_remediation_note_20260920.md`

fresh workerが参照してよい教材側資料:
- remediation済み解説source / PDF
- remediation済み練習source / PDF
- remediation済みPowerPoint
- `29_l0_superconducting_magnetic_levitation_force_h23_teaching_patch_20260920.md`
- source integration QA / artifact QA

## Topic 21 H26二次 問1(4)

`48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
