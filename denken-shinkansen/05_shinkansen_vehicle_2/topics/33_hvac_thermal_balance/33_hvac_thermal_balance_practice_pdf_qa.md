# Topic 33 練習PDF QA

更新日: 2026-09-20

判定: `PASS / PRACTICE_PDF_COMPLETE`

## reconcile / blocker解消

最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md` / `HANDOFF.md`、固定EXAM_ALIGNMENT、解説source/PDF/QA、練習source/source QAをreconcileした。

旧staging payloadは `part0 + part1 + part2` で19,106 bytesへ復号できる一方、宣言済みSHA-256 `392e31a90e41f15d401214ffbada1d379305247cad1eed96d0421052163d0705` と一致しないためcanonical化しなかった。追加 `part1a` は `part1` の先頭2,123文字と完全一致（prefix check: `PASS`）しており、用途を推測してchunk順序を変更していない。

blockerは、輸送用staging payloadを修復推測するのではなく、canonical練習sourceからPDFを再生成し、生成物そのものを二重rendererとtext QAで検証して新たなcanonical PDFとすることで解消した。固定EXAM_ALIGNMENT・問題内容・正答・一般式には変更を加えていない。

## canonical PDF

- path: `33_hvac_thermal_balance_practice.pdf`
- canonical blob SHA: `6f97c59f3b4cd54c47ab1fc9f7039c3fbb39417f`
- source blob SHA: `dcee853dedc9adeb2f351315dc6ca97f3d23a118`
- file size: `21971 bytes`
- SHA-256: `079a09b8a2517c3171f4055d9549f9857570a68ecf3e3d8ad57e204c43503954`
- A4縦: `7 pages`

## render / text QA

- PDFium render: `7 / 7 PASS`
- Poppler render: `7 / 7 PASS`
- page-edge overflow: `0件`
- blank page: `0件`
- `pdftotext -layout`: `PASS (15021 bytes)`
- 置換文字 `�`: `0件`
- 問1〜問10: `10 / 10収録 PASS`
- 正答・完全解説: `10 / 10収録 PASS`

## 過去問対応品質ゲート

- 固定5問・22答案要素: `22 / 22 connected`
- 一次: `22 / 22 connected`
- 二次: `対象外（公式「機械・制御」試験範囲に電熱なし）`
- SPEC固定7項目: `7 / 7 covered`
- 一次試験型: `10 / 10`（全問五肢択一）
- 一次正答一意性: `10 / 10 PASS` を維持
- source QA済み数値問題独立再計算: `6 / 6 PASS` を維持
- source QA済み知識・識別問題: `4 / 4 PASS` を維持
- COPと電熱器効率の混同: `0件`
- J/W/kW・秒換算の不整合: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 未確認実車値の真値化: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

本判定は練習PDF工程のPASSであり、Topic 33最終完了を意味しない。次工程はTopic 33 PowerPoint生成＋render QA。
