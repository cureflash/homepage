# Topic 33 PowerPoint QA — 空調・電熱の熱収支

更新日: 2026-09-20

判定: `PASS / POWERPOINT_COMPLETE`

## reconcile

最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md` / `HANDOFF.md`、Topic 33固定EXAM_ALIGNMENT、解説source/PDF、練習source/PDFと各QAをreconcileし、未完了だったPowerPointのみを作成した。固定EXAM_ALIGNMENT・問題・正答は変更していない。

初回render QAは `pdftotext` が `SPEC 7項目` の間に空白を挿入したためexact-token assertionだけが失敗した。6枚生成、geometry、6枚PNG render、blank/edge、U+FFFD、先行token群は通過済みだった。再試験では抽出テキストの空白のみ正規化し、内容判定を変更せず再検証した。

## canonical artifact

- path: `33_hvac_thermal_balance_images.pptx`
- file size: `41858 bytes`
- SHA-256: `cb1d632c0788653314a79ed9c1ab36cc13414d664b3de5b9dbd872d3d5dba594`
- 16:9 / `6 slides`
- python-pptx open / geometry bounds: `6 / 6 PASS`
- LibreOffice PDF変換: `6 / 6 pages PASS`
- `pdftotext -layout`: `PASS (7267 bytes)`
- 置換文字 `�`: `0件`
- PNG render: `6 / 6 PASS`
- blank render: `0件`
- ページ端越え: `0件`

## slide構成

1. 試験範囲と電気→熱→空調の全体像
2. ジュール熱・顕熱・一次元定常熱伝導・熱平衡
3. 対流・放射・伝導の識別、位相制御と高調波
4. ヒートポンプ熱収支、冷房/暖房COP、圧縮機・HFC過去問固有境界
5. 外気/換気/車内負荷、空調消費電力、新幹線への一般設計接続
6. 本試験解法フロー、固定5問マッピング、SPEC 7項目、品質境界

## 固定過去問接続

- R8 一次「機械」問6: `5 / 5 PASS`
- R3 一次「機械」問7: `5 / 5 PASS`
- R1 一次「機械」問7 ヒートポンプ行: `2 / 2 PASS`
- H30 一次「機械」問4: `5 / 5 PASS`
- H27 一次「機械」問4: `5 / 5 PASS`
- 一次合計: `22 / 22 connected`
- 二次: `対象外（公式「機械・制御」試験範囲に電熱なし）`

## SPEC gate

- 熱量: `PASS`
- 熱収支: `PASS`
- COP: `PASS`
- 消費電力: `PASS`
- 外気負荷: `PASS`
- 車内負荷: `PASS`
- 効率: `PASS`
- SPEC固定7項目: `7 / 7 PASS`

## 境界確認

- 二次問題の件数合わせ採用: `0件`
- COPと電熱器効率の混同: `0件`
- HFC過去問固有知識を現行実車仕様へ一般化: `0件`
- 未確認実車値の真値化: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

Topic 33は教材成果物一式が揃った。次工程はanswer-bearing資料を先に開かないfresh workerによるclean blind candidate固定。本runはanswer-bearing資料を確認済みのためcandidate作成へ進まない。
