# Topic 29 解説PDF 再同期QA

更新日: 2026-09-20

判定: `PASS / EXPLANATION_ARTIFACT_RESYNC_COMPLETE`

## reconcile

最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md`、`HANDOFF.md`、直近の車両二種worker成果をreconcileした。remediation済み解説sourceを正本とし、既存source工程を重複実施せずbinary artifactのみ再同期した。

## artifact identity

- path: `29_l0_superconducting_magnetic_levitation_force_explanation.pdf`
- canonical Git blob SHA: `35ba843b81fd8fc08f76bd5de8aa9edee540d78f`
- source blob SHA: `ac618a6ac5d0131ba68bfe55f0af58b38de37737`
- file size: `15,941 bytes`
- A4縦: `4 pages`

## 表示・構造QA

- PDFium: `4 / 4 PASS`
- Poppler: `4 / 4 PASS`
- `pdftotext -layout`: `PASS`
- 置換文字 `�`: `0件`
- 指定3可視化: `3 / 3 PASS`

## H23二次 remediation反映

- `V_1=V_L/sqrt(3)`
- `I'_2(s)=V_1/sqrt((r_1+r'_2/s)^2+(x_1+x'_2)^2)`
- `T(s)=3 I'^2_2(s)(r'_2/s)/ω_s`
- `s_max=r'_2/sqrt(r_1^2+(x_1+x'_2)^2)`
- 逆相制動 `s_p=2-s`
- 実通過区間 `1<=s_p<=2`
- `r_1`,`x_1` が残る場合は簡略条件 `s_m=r'_2/x'_2` を使わない

## 過去問対応品質ゲート

- 固定5問・24答案要素: `24 / 24 connected`
- 一次: `20 / 20 connected`
- 二次: `4 / 4 connected`
- SPEC必須8項目: `8 / 8 connected`
- 固定EXAM_ALIGNMENT変更: `0件`
- L0系未確認実車値の真値化: `0件`
- Topic 30先取り: `0件`
- exact blocker: `0件`

本判定は解説PDF再同期工程のPASSであり、Topic 29最終clean blind PASSを意味しない。

## Topic 21 H26二次 問1(4)

`48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
