# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜28は最終QAまで `PASS / completed`。完成数 `28 / 39`。

現在地は `topic_29_source_remediation_complete_artifact_resync_required`。Topic 29 `L0系③ 超電導磁気浮上の電磁力` はclean blind v1で `21 / 24 PASS` だったため未完了。

## 固定EXAM_ALIGNMENT

固定5問・24答案要素は変更しない。

1. R8 一次「理論」問2 — 5答案要素
2. R7 一次「理論」問2 — 5答案要素
3. R4 一次「理論」問2 — 5答案要素
4. R2 一次「理論」問2 — 5答案要素
5. H23 二次「機械・制御」問1 — 4答案要素

SPEC必須8項目と指定3可視化も変更しない。

## clean blind v1

- candidate lock: `c60c20f76e9064964d666abf0a1823f417450d2c`
- candidate固定後修正: `0件`
- 一次: `20 / 20 PASS`
- H23二次: `1 / 4 PASS`
- 合計: `21 / 24 PASS`
- 判定: `NEEDS_REVISION`

具体的候補値・公式正答値はanswer-bearing compare QA / remediation note側へ隔離した。fresh blind v2の実施者が必須reconcileでSTATUS/HANDOFFを読んでも汚染されないよう、この2ファイルには数値正答を書かない。

## root cause / remediation

旧教材は固定子側を無視した簡略誘導機モデルまでしか扱っておらず、H23二次に必要な一相L形等価回路への橋渡しが不足していた。

blind-safe追加事項:
- `V_1=V_L/sqrt(3)`
- `I'_2=V_1/sqrt((r_1+r'_2/s)^2+(x_1+x'_2)^2)`
- `T=3I'^2_2(r'_2/s)/ω_s`
- `s_max=r'_2/sqrt(r_1^2+(x_1+x'_2)^2)`
- 逆相制動 `s_p=2-s`
- 実通過区間 `1<=s_p<=2` の照合
- `r_1`,`x_1` が残る場合は簡略条件 `s_m=r'_2/x'_2` を使わない

## 今回までの反映

- 解説sourceへremediation統合済み
  - commit `fd5fd78cc2fc4b9da10276751db92b47a160f3ff`
- 練習sourceへremediation統合済み
  - commit `072c8f023f0386d70170676efd94bdbcd6c81697`
- source integration QA追加済み
  - `topics/29_l0_superconducting_magnetic_levitation_force/29_l0_superconducting_magnetic_levitation_force_h23_source_integration_qa_20260920.md`
  - `PASS / SOURCE_INTEGRATION_COMPLETE / ARTIFACT_RESYNC_REQUIRED`

固定5問・24答案要素: `24 / 24 connected`。
L0系未確認実車値の真値化0件。Topic 30先取り0件。Topic 21一般式変更0件。

## artifact状態

下記3artifactは旧source生成版なので現時点では正本未同期。

- 解説PDF: `29_l0_superconducting_magnetic_levitation_force_explanation.pdf`
  - old blob `f656c1b95a542bf15bfc77ca2f799fda6886faa0`
- 練習PDF: `29_l0_superconducting_magnetic_levitation_force_practice.pdf`
  - old blob `1f639d616e3c2432279e02e599c374771c0cfb70`
- PowerPoint: `29_l0_superconducting_magnetic_levitation_force_images.pptx`
  - old blob `2919bbe2b6763bcd73e246fd3e76c17305e9e662`

## 次の安全な工程

1. remediation済み解説sourceを正本として解説PDFを再生成しQAする。
2. 練習PDFを再生成しQAする。
3. PowerPointを再生成しQAする。
4. 3artifact同期後、answer-bearing資料を見ていないfresh workerでclean blind v2 candidateを新規固定する。
5. v2固定後に公式照合する。v1 candidateは変更しない。

fresh blind v2 candidate固定前に開かない:
- active theme alignment本体 / exam alignment QA
- 公式解答PDF
- blind compare QA
- `29_l0_superconducting_magnetic_levitation_force_h23_l_equivalent_remediation_note_20260920.md`

fresh workerが参照してよい教材側資料:
- remediation済み解説source
- remediation済み練習source
- `29_l0_superconducting_magnetic_levitation_force_h23_teaching_patch_20260920.md`
- source integration QA

## reconcile

`29_l0_superconducting_magnetic_levitation_force_fresh_worker_blocker.md` は過去の実施者blockerとして保持する。v1 candidate lock `c60c20f...` の成立自体は維持する。

## Topic 21 H26二次 問1(4)

`48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
