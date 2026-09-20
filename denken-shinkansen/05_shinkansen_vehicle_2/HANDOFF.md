# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜28は最終QAまで `PASS / completed`。完成数 `28 / 39`。

現在地は `topic_29_clean_blind_v1_needs_revision`。Topic 29 `L0系③ 超電導磁気浮上の電磁力` は、教材一式を一度PowerPointまで完成した後、clean blind v1で `21 / 24 PASS` となったため未完了。

## 固定EXAM_ALIGNMENT

固定5問・24答案要素は変更しない。

1. R8 一次「理論」問2 — 5答案要素
2. R7 一次「理論」問2 — 5答案要素
3. R4 一次「理論」問2 — 5答案要素
4. R2 一次「理論」問2 — 5答案要素
5. H23 二次「機械・制御」問1 — 4答案要素

固定source:
- `topics/29_l0_superconducting_magnetic_levitation_force/29_l0_superconducting_magnetic_levitation_force.md`
- `topics/29_l0_superconducting_magnetic_levitation_force/29_l0_superconducting_magnetic_levitation_force_exam_alignment_qa.md`

SPEC必須8項目と指定3可視化も変更しない。

## clean blind v1

candidate:
- `topics/29_l0_superconducting_magnetic_levitation_force/29_l0_superconducting_magnetic_levitation_force_fresh_blind_candidates_20260920.md`
- lock commit: `c60c20f76e9064964d666abf0a1823f417450d2c`
- candidate固定後修正: `0件`

compare QA:
- `topics/29_l0_superconducting_magnetic_levitation_force/29_l0_superconducting_magnetic_levitation_force_fresh_blind_compare_qa_20260920.md`
- R8一次: `5 / 5 PASS`
- R7一次: `5 / 5 PASS`
- R4一次: `5 / 5 PASS`
- R2一次: `5 / 5 PASS`
- H23二次: `1 / 4 PASS`
- 合計: `21 / 24 PASS`
- 判定: `NEEDS_REVISION`

H23の不一致:
- (1) 教材から未解答。公式 `75.7 N·m`。
- (2) 簡略式から `0.375` としたが、公式は `0.212`。
- (3) `0 min^-1` は一致。
- (4) 教材から未解答。公式 `36.7 N·m`。

## root cause

H23問1は固定子側 `r_1`,`x_1` を残した一相L形等価回路を要求するが、旧教材§12と練習問12は固定子側電圧降下を無視した簡略二次回路しか扱っていなかった。

不足していた橋渡し:

- `V_1=V_L/sqrt(3)`
- `I'_2=V_1/sqrt((r_1+r'_2/s)^2+(x_1+x'_2)^2)`
- `T=3I'^2_2(r'_2/s)/ω_s`
- `s_max=r'_2/sqrt(r_1^2+(x_1+x'_2)^2)`
- 逆相制動 `s_p=2-s` と `1<=s_p<=2` の区間判定

固定EXAM_ALIGNMENT自体は変更しない。「24/24 connected」とした旧教材QAが過大評価だったと診断する。

## remediation files

answer-bearing内部診断:
- `topics/29_l0_superconducting_magnetic_levitation_force/29_l0_superconducting_magnetic_levitation_force_h23_l_equivalent_remediation_note_20260920.md`
- H23公式数値を含むためfresh blind v2 candidate固定前は開かない。

blind-safe teaching patch:
- `topics/29_l0_superconducting_magnetic_levitation_force/29_l0_superconducting_magnetic_levitation_force_h23_teaching_patch_20260920.md`
- 公式正答値を含めず、一般式・成立条件・解法手順だけを記載。
- 判定: `TEACHING_PATCH_READY / ARTIFACT_RESYNC_REQUIRED`

## reconcile

`29_l0_superconducting_magnetic_levitation_force_fresh_worker_blocker.md` は別workerが候補固定前にanswer-bearing alignmentを開いたため、そのworker自身に対して記録したblocker。

candidate lock `c60c20f...` はそのblocker commitより前に、answer-bearing資料を参照していない別runで成立済み。したがって現在の工程はfresh-worker待ちではなく、clean blind v1のH23不足を教材側でremediationする段階。blockerファイルは履歴として残す。

## 旧成果物の扱い

以下はblind v1実施前の旧版。H23 teaching patch未反映のため、現時点では再同期待ち。

- 解説source: `29_l0_superconducting_magnetic_levitation_force_explanation_source.md`
- 解説PDF: `29_l0_superconducting_magnetic_levitation_force_explanation.pdf` / blob `f656c1b95a542bf15bfc77ca2f799fda6886faa0`
- 練習source: `29_l0_superconducting_magnetic_levitation_force_practice_source.md`
- 練習PDF: `29_l0_superconducting_magnetic_levitation_force_practice.pdf` / blob `1f639d616e3c2432279e02e599c374771c0cfb70`
- PowerPoint: `29_l0_superconducting_magnetic_levitation_force_images.pptx` / blob `2919bbe2b6763bcd73e246fd3e76c17305e9e662`

L0系未確認実車値を真値化しない。Topic 30を先取りしない。

## 次の安全な工程

1. `h23_teaching_patch_20260920.md` を解説sourceと練習教材へ統合する。
2. 解説PDF・練習PDF・PowerPointを再生成しQAする。
3. 再同期完了後、answer-bearing資料を見ていないfresh workerでclean blind v2 candidateを新規固定する。
4. v2固定後に公式照合する。v1 candidateは変更しない。

fresh blind v2 candidate固定前に開かない:
- active theme alignment本体 / exam alignment QA
- 公式解答PDF
- blind compare QA
- `h23_l_equivalent_remediation_note_20260920.md`

fresh workerが参照してよい追加教材は `h23_teaching_patch_20260920.md`。

## Topic 21 H26二次 問1(4)

`48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
