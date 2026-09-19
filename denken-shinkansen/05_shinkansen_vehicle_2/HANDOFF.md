# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜22は最終QAまで `PASS / completed`。完成数は `22 / 39`。

現在地は `topic_23_powerpoint_recovery_complete`。active topic は Topic 23 `N700S SiC主変換装置`。Topic 24へは進めない。

## reconcile

latest main、最新 `STATUS.md` / `HANDOFF.md`、直近車両二種worker成果、Topic 23初回clean blind、source補強、解説PDF・練習PDF再同期、修正後clean blind `23 / 23 PASS`、旧PPTX破損blockerまでreconcile済み。同一工程の重複はしていない。

教材内容側の固定ゲート:

- 固定過去問: 第二種一次4問＋二次1問 = `5問`
- 一次答案要素: `17 / 17 PASS`
- 二次答案要素: `6 / 6 PASS`
- 合計: `23 / 23 PASS`
- 修正後clean blind: `23 / 23 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 一般式変更: `0件`
- SPEC外追加: `0件`
- 未確認N700S実車値の真値化: `0件`

## 今回完了: PowerPoint復旧

旧現行blob `ff2c73d872da4fc3605fb30e5f67c9dc97517f5c` はZIP破損しており、python-pptx / LibreOfficeで開けなかった。補強済みTopic 23 sourceと固定6枚構成から、技術内容・固定EXAM_ALIGNMENT・問題・一般式・SPEC境界を変えずにPPTXを再生成した。

復旧artifact:

- file: `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_images.pptx`
- Git blob SHA: `4ac7e4c493e8c24e8ea98d40db2494a7218f14b2`
- byte size: `8,587 bytes`
- SHA-256: `b7c1e6af945c9e1c36e01175db365a8c4f119800e0ae655894fdae2ee0b02062`
- 16:9 / `6 slides`

PowerPoint QA:

- ZIP整合性: `PASS`
- python-pptx open: `6 / 6 PASS`
- LibreOffice PDF変換: `6 / 6 PASS`
- PDF page size: `960.009 × 540 pt`
- pdftoppm/contact sheet: `6 / 6 PASS`
- geometry overflow: `0`
- 文字切れ・重なり・欠落グリフ: `0`
- 固定5問・23答案要素: `23 / 23 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- clean blind補強2点: `2 / 2 PASS`
- 新たなexact blocker: `0件`

## 実車値境界

維持事項:

- JR東海公表のN700A比7%消費電力量低減をSiC単独効果へ読み替えない。
- 富士電機公表の20%軽量化をN700S車両全体の重量低減率へ拡張しない。
- N700S未公表の `V_on`, `R_on`, `E_on`, `E_off`, `f_s`, `T_j`, `R_th` を真値化しない。
- 比較計算値は教材用仮定値として扱う。

Topic 21 H26二次「機械・制御」問1(4)の `48.0 / 48.1 N·m` 差は、公式標準解答が `π=3.14` 相当を使った過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## 次の安全な工程

Topic 23最終QAを再実施する。復旧した現行GitHub PPTXのidentity/表示QA、PASS済みPDF、修正後clean blind `23 / 23`、固定SPEC境界を一括reconcileし、全ゲートPASS時のみTopic 23を `completed` にする。PASS確定前にTopic 24へ進めない。
