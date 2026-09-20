# Topic 31 PowerPoint QA

更新日: 2026-09-20

判定: `PASS / POWERPOINT_COMPLETE`

## reconcile

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md`、`HANDOFF.md`とTopic 31既存成果物をreconcileし、次の未完了工程である解説画像PowerPointのみを作成した。固定EXAM_ALIGNMENT、解説source/PDF、練習source/PDFは変更していない。

## canonical artifact

- path: `31_auxiliary_power_converter_images.pptx`
- canonical blob SHA: `e9967a2566c12d286521a7458ce83de19b91da83`
- file size: `47486 bytes`
- SHA-256: `d09aa116b16a18096326f4b3474f887ebd9f30e24a290a2de5813537ba833a1e`
- 16:9 / `6 slides`
- python-pptx open / geometry bounds: `6 / 6 PASS`
- LibreOffice PDF変換: `6 / 6 pages PASS`
- `pdftotext -layout`: `PASS (7976 bytes)`
- 置換文字 `�`: `0件`
- PNG render: `6 / 6 PASS`
- blank render: `0件`

## 固定過去問接続

| 固定過去問 | PowerPoint接続 | 判定 |
|---|---:|---|
| R7 一次「機械」問4 | 5 / 5 | PASS |
| R5 二次「機械・制御」問3 | 7 / 7 | PASS |
| R4 一次「機械」問4 | 5 / 5 | PASS |
| R2 二次「機械・制御」問2 | 5 / 5 | PASS |
| H22 一次「機械」問3 | 5 / 5 | PASS |

- 一次: `15 / 15 connected`
- 二次: `12 / 12 connected`
- 合計: `27 / 27 connected`

接続内容:
- R7一次: 電圧形インバータ、誘導性負荷、逆並列ダイオード、MOSFET、PWM、スイッチング周波数
- R5二次: 高調波発生源・影響、基本波／高調波分離、補償電流、実効値
- R4一次: 導通損失、漏れ電流、スイッチング損失、繰返し周期、ソフトスイッチング
- R2二次: 固定損＋負荷依存損失の一般教材モデル、負荷率、効率
- H22一次: 三相PWM、三角搬送波、変調率、線間基本波実効値、力率

## SPEC gate

- インバータ: `PASS`
- コンバータ: `PASS`
- 三相負荷: `PASS`
- 力率: `PASS`
- 高調波: `PASS`
- 変換損失: `PASS`
- 効率: `PASS`
- 負荷変動: `PASS`
- SPEC固定8項目: `8 / 8 PASS`

## 境界確認

- R2二次問2の変圧器固有条件を変換器へ普遍化: `0件`
- H22一次問3のPV・MPPT固有事項追加: `0件`
- R5二次問3の能動フィルタを実車搭載事実化: `0件`
- 未確認実車値の真値化: `0件`
- Topic 32〜34先取り: `0件`
- Topic 21一般式変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- exact blocker: `0件`

## 判定

`PASS / POWERPOINT_COMPLETE`

Topic 31は教材成果物一式が揃った。次工程は、answer-bearing資料を先に開かないfresh workerによるclean blind candidate固定である。候補固定後に公式解答と照合する。
