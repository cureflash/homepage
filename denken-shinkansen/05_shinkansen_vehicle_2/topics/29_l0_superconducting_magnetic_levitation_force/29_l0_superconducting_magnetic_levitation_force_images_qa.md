# Topic 29 PowerPoint 再同期QA

更新日: 2026-09-20

判定: `PASS / POWERPOINT_ARTIFACT_RESYNC_COMPLETE`

## reconcile

最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md`、`HANDOFF.md`、直近の車両二種worker成果をreconcileした。解説PDF・練習PDFのremediation再同期済み成果を重複せず、既存6枚PowerPointのH23二次橋渡しだけをL形等価回路へ同期した。

## canonical artifact

- path: `29_l0_superconducting_magnetic_levitation_force_images.pptx`
- canonical blob SHA: `85394e303e8ff9bff19193a76b09d1db17406ec9`
- previous blob SHA: `2919bbe2b6763bcd73e246fd3e76c17305e9e662`
- file size: `47208 bytes`
- SHA-256: `b63dcddb18bfac7e09d03e89c62020f106780ef0b4e2671d4fc68a4fdcd2ce9e`
- 16:9 / `6 slides`
- python-pptx open / geometry bounds: `6 / 6 PASS`
- LibreOffice PDF変換: `6 / 6 pages PASS`
- `pdftotext -layout`: `PASS (13389 bytes)`
- 置換文字 `�`: `0件`

## H23二次 remediation反映

- `V_1=V_L/√3`
- `I'_2=V_1/√((r_1+r'_2/s)^2+(x_1+x'_2)^2)`
- `T=3I'^2_2(r'_2/s)/ω_s`
- `s_max=r'_2/√(r_1^2+(x_1+x'_2)^2)`
- 逆相制動 `s_p=2-s`
- 実通過区間 `1<=s_p<=2`
- `r_1,x_1` が残るとき簡略条件 `s_max=r'_2/x'_2` を使わない

## 過去問対応品質ゲート

- 固定5問・24答案要素: `24 / 24 connected`
- 一次: `20 / 20 connected`
- 二次: `4 / 4 connected`
- SPEC必須8項目: `8 / 8 PASS`
- 指定3可視化: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- L0系未確認実車値の真値化: `0件`
- Topic 30先取り: `0件`
- exact blocker: `0件`

本判定はPowerPoint再同期工程のPASSであり、Topic 29最終clean blind PASSを意味しない。

## Topic 21 H26二次 問1(4)

`48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
