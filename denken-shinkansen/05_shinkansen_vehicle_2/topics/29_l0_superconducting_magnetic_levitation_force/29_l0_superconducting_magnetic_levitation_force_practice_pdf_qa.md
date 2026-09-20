# Topic 29 練習PDF 再同期QA

更新日: 2026-09-20

判定: `PASS / PRACTICE_ARTIFACT_RESYNC_COMPLETE`

## reconcile

最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md`、`HANDOFF.md`、直近の車両二種worker成果をreconcileした。解説PDF再同期済み成果を重複実施せず、remediation済み練習sourceを正本として練習PDFのみ再生成・QAした。

## canonical PDF

- path: `29_l0_superconducting_magnetic_levitation_force_practice.pdf`
- canonical blob SHA: `bebec9f9a6ed60178ca567e54060b37958ea2a27`
- source blob SHA: `604fcd377c8db66799c4b8938d7a815305405f8d`
- file size: `558534 bytes`
- SHA-256: `c14a0ac081ac716f21566bac80fa9bfdd191a3a709adf19b5aec84aef23f640c`
- A4縦: `11 pages`

## render / text QA

- PDFium render: `11 / 11 PASS`
- Poppler render: `11 / 11 PASS`
- `pdftotext -layout`: `PASS (19982 bytes)`
- 置換文字 `�`: `0件`
- 一次8問＋二次4問: `12 / 12収録 PASS`

## H23二次 remediation反映

- `V_1=V_L/sqrt(3)`
- `I'_2=V_1/sqrt((r_1+r'_2/s)^2+(x_1+x'_2)^2)`
- `T=3I'^2_2(r'_2/s)/ω_s`
- `s_max=r'_2/sqrt(r_1^2+(x_1+x'_2)^2)`
- 逆相制動 `s_p=2-s`
- 実通過区間 `1<=s_p<=2`
- 問12: `T≈393 N・m`, `s_max≈0.294`, 区間最大は停止直前側 — `PASS`
- `r_1`, `x_1` が残る場合は簡略条件 `s_m=r'_2/x'_2` を使わない

## 過去問対応品質ゲート

- 固定5問・24答案要素: `24 / 24 connected`
- 一次: `20 / 20 connected`
- 二次: `4 / 4 connected`
- SPEC必須8項目: `8 / 8 covered`
- 指定3可視化の計算接続: `3 / 3 aligned`
- 固定EXAM_ALIGNMENT変更: `0件`
- L0系未確認実車値の真値化: `0件`
- Topic 30先取り: `0件`
- exact blocker: `0件`

本判定は練習PDF再同期工程のPASSであり、Topic 29最終clean blind PASSを意味しない。

## Topic 21 H26二次 問1(4)

`48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
