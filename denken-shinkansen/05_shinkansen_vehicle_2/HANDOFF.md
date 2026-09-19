# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜22は最終QAまで `PASS / completed`。完成数は `22 / 39`。

現在地は `topic_23_blocked_current_powerpoint_zip_corrupt`。active topic は Topic 23 `N700S SiC主変換装置`。Topic 24へは進めない。

## reconcile

latest main、最新 `STATUS.md` / `HANDOFF.md`、直近車両二種worker成果、Topic 23初回clean blind、source補強、PDF再同期、PowerPoint再同期履歴、修正後clean blind、最終QAをreconcileした。

教材内容側は合格している。

- 固定過去問: 第二種一次4問＋二次1問 = `5問`
- 一次答案要素: `17 / 17 PASS`
- 二次答案要素: `6 / 6 PASS`
- 合計: `23 / 23 PASS`
- 修正後clean blind: `23 / 23 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 一般式変更: `0件`
- SPEC外追加: `0件`
- 未確認N700S実車値の真値化: `0件`

## Topic 23 PowerPoint exact blocker

現行mainの `23_n700s_sic_main_converter_images.pptx` をbyte単位で再取得して検査した。

識別情報:

- GitHub blob SHA: `ff2c73d872da4fc3605fb30e5f67c9dc97517f5c`
- size: `12,326 bytes`
- SHA-256: `8abfe66b9dbf6f05dba212af35405abe9981b9bd017980866c03186030dde5b8`
- Git blob SHA-1再計算: `ff2c73d872da4fc3605fb30e5f67c9dc97517f5c` — GitHub blobと一致

構造QA:

- ZIP: `FAIL` — `missing 618 bytes in zipfile`, `invalid zip file with overlapped components`
- python-pptx: `FAIL / open不可`
- LibreOffice: `FAIL / source file could not be loaded`
- PDF生成: `0 files`
- pdftoppm / 6枚表示 / geometry overflow: `BLOCKED`

以前のPowerPoint QA記録:

- size: `12,944 bytes`
- SHA-256: `dc5babab362325cb00ca462660cd7f9b6c1cd1f6ef6f1e36c62ffe55395ae70c`
- 表示QA: `6 / 6 PASS`

この以前のQA済みartifactは現行GitHub blobではない。サイズ誤記とは扱わず、以前のPASSを現行PPTXへ転用しない。

exact blocker:

`The current GitHub PPTX blob ff2c73d872da4fc3605fb30e5f67c9dc97517f5c is exactly 12,326 bytes (SHA-256 8abfe66b9dbf6f05dba212af35405abe9981b9bd017980866c03186030dde5b8) and is a malformed ZIP. python-pptx and LibreOffice cannot open it. The previously QA-passed 12,944-byte artifact is not the current GitHub artifact. A valid Topic 23 PPTX must be recreated or restored from the already-fixed sources/6-slide specification, with no technical/spec changes, then full identity/open/ZIP/render/display QA must be rerun.`

## 成果物状態

- 解説PDF: `PASS / RESYNCED`
- 練習PDF: `PASS / RESYNCED`
- PowerPoint: `FAIL / CORRUPT_CURRENT_ARTIFACT`
- 最終QA: `BLOCKED`

## 実車値境界

維持事項:

- JR東海公表のN700A比7%消費電力量低減をSiC単独効果へ読み替えない。
- 富士電機公表の20%軽量化をN700S車両全体の重量低減率へ拡張しない。
- N700S未公表の `V_on`, `R_on`, `E_on`, `E_off`, `f_s`, `T_j`, `R_th` を真値化しない。
- 比較計算値は教材用仮定値として扱う。

Topic 21 H26二次「機械・制御」問1(4)の `48.0 / 48.1 N·m` 差は、公式標準解答が `π=3.14` 相当を使った過去問固有丸め差として解決済み。一般式は変更しない。

## 次の安全な工程

有効なTopic 23 PPTX artifactを再生成または復元できる状態を確定するまで停止する。復旧時は技術本文・固定EXAM_ALIGNMENT・問題・数式・SPECを変更せず、同一PPTXへ以下を再実施する。

1. byte size / SHA-256
2. Git blob identity
3. python-pptx open / ZIP整合性
4. LibreOffice PDF変換
5. pdftoppm表示QA
6. 6枚表示確認 / geometry overflow
7. PowerPoint QAと最終QAの再判定

Topic 23がPASSするまでTopic 24へ進めない。
