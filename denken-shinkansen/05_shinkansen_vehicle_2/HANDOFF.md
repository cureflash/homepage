# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜28は最終QAまで `PASS / completed`。完成数 `28 / 39`。

現在地は `topic_29_artifacts_resynced_fresh_blind_v2_required`。Topic 29 `L0系③ 超電導磁気浮上の電磁力` はclean blind v1 `21 / 24 PASS` 後の教材remediationと3artifact再同期まで完了した。

## 固定EXAM_ALIGNMENT

固定5問・24答案要素は変更しない。

1. R8 一次「理論」問2 — 5答案要素
2. R7 一次「理論」問2 — 5答案要素
3. R4 一次「理論」問2 — 5答案要素
4. R2 一次「理論」問2 — 5答案要素
5. H23 二次「機械・制御」問1 — 4答案要素

SPEC必須8項目・指定3可視化も変更しない。

## v1 root cause / remediation

v1:
- candidate lock `c60c20f76e9064964d666abf0a1823f417450d2c`
- 一次 `20 / 20 PASS`
- H23二次 `1 / 4 PASS`
- 合計 `21 / 24 PASS`

原因は固定子側を含む一相L形等価回路への橋渡し不足。blind-safe教材には以下を統合済み。

- `V_1=V_L/sqrt(3)`
- `I'_2=V_1/sqrt((r_1+r'_2/s)^2+(x_1+x'_2)^2)`
- `T=3I'^2_2(r'_2/s)/ω_s`
- `s_max=r'_2/sqrt(r_1^2+(x_1+x'_2)^2)`
- 逆相制動 `s_p=2-s`
- 実通過区間 `1<=s_p<=2`
- `r_1`,`x_1` が残るとき簡略条件 `s_m=r'_2/x'_2` を使わない

source:
- 解説source remediation commit `fd5fd78cc2fc4b9da10276751db92b47a160f3ff`
- 練習source remediation commit `072c8f023f0386d70170676efd94bdbcd6c81697`

## artifact再同期

3artifactすべてremediation後教材へ同期済み。

- 解説PDF
  - blob `35ba843b81fd8fc08f76bd5de8aa9edee540d78f`
  - `PASS / EXPLANATION_ARTIFACT_RESYNC_COMPLETE`
- 練習PDF
  - blob `bebec9f9a6ed60178ca567e54060b37958ea2a27`
  - A4 11 pages / PDFium・Poppler `11 / 11 PASS`
  - `PASS / PRACTICE_ARTIFACT_RESYNC_COMPLETE`
- PowerPoint
  - blob `85394e303e8ff9bff19193a76b09d1db17406ec9`
  - 16:9 / 6 slides / LibreOffice render `6 / 6 PASS`
  - `PASS / POWERPOINT_ARTIFACT_RESYNC_COMPLETE`

固定5問・24答案要素 `24 / 24 connected`、SPEC必須8項目 `8 / 8`、指定3可視化 `3 / 3`。L0系未確認実車値の真値化0件、Topic 30先取り0件、Topic 21一般式変更0件、exact blocker 0件。

## 次の安全な工程

fresh workerでclean blind v2を実施する。

1. candidate固定前にanswer-bearing資料を開かない。
2. remediation済み教材だけで固定5問・24答案要素を解答し、新規candidateを固定する。
3. candidate固定後は変更しない。
4. 固定後にのみ公式標準解答と照合する。
5. `24 / 24 PASS` の場合のみ最終QA・completedへ進む。

candidate固定前に開かない:
- active theme alignment本体 / exam alignment QA
- 公式解答PDF
- blind compare QA
- `29_l0_superconducting_magnetic_levitation_force_h23_l_equivalent_remediation_note_20260920.md`

参照してよい教材側資料:
- remediation済み解説source / PDF
- remediation済み練習source / PDF
- remediation済みPowerPoint
- `29_l0_superconducting_magnetic_levitation_force_h23_teaching_patch_20260920.md`
- source integration QA / artifact QA

`29_l0_superconducting_magnetic_levitation_force_fresh_worker_blocker.md` は過去の実施者blockerとして保持する。v1 candidate lockの成立自体は維持する。

## Topic 21 H26二次 問1(4)

`48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
