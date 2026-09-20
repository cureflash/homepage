# Topic 32 PowerPoint QA — 照明設計

更新日: 2026-09-20

判定: `PASS / POWERPOINT_COMPLETE`

## reconcile

最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md`、`HANDOFF.md`、Topic 32既存成果物、直近の車両二種worker成果をreconcileし、次の未完了工程である解説画像PowerPointのみを作成した。固定EXAM_ALIGNMENT、解説source/PDF、練習source/PDFは変更していない。

## canonical artifact

- path: `32_lighting_design_images.pptx`
- file size: `42869 bytes`
- SHA-256: `0d8d9a9c2b5dce263c915528054e34281200e6a4855887715103271fd5215248`
- 16:9 / `6 slides`
- python-pptx open / geometry bounds: `6 / 6 PASS`
- LibreOffice PDF変換: `6 / 6 pages PASS`
- `pdftotext -layout`: `PASS (5797 bytes)`
- 置換文字 `�`: `0件`
- PNG render: `6 / 6 PASS`
- blank render: `0件`
- ページ端越え: `0件`

## slide構成

1. 試験範囲と測光量→配光→光束法→`lm/W`の全体像
2. 光束・光度・照度・光束発散度・輝度の定義と単位
3. 点光源照度、逆二乗則、余弦則、配光積分
4. 光束法、照明率、保守率、所要灯数、光源数/器具数の切上げ
5. 消費電力・`lm/W`、色温度・LED寿命の最小ブリッジ、簡略球形グローブ多重反射
6. 解法フロー、新幹線への一般設計接続、品質境界

## 固定過去問接続

| 固定過去問 | PowerPoint接続 | 判定 |
|---|---:|---|
| R8 一次「機械」問7 | 10 / 10 | PASS |
| R7 一次「機械」問7 | 5 / 5 | PASS |
| R6 一次「機械」問6 | 5 / 5 | PASS |
| R4 一次「機械」問5 | 5 / 5 | PASS |
| R3 一次「機械」問6 | 5 / 5 | PASS |

- 一次: `30 / 30 connected`
- 二次: `対象外（公式「機械・制御」試験範囲に照明なし）`
- 合計: `30 / 30 connected`

接続内容:
- R8一次: 光束・光度・照度・光束発散度・輝度の定義と単位
- R7一次: `lm/W`、配光積分、色温度、LED寿命基準、点光源照度
- R6一次: 標準比視感度、等方点光源、逆二乗則、入射角余弦則
- R4一次: 光束法、照明率、保守率、必要器具数、切上げ
- R3一次: 多重反射、全光束、光度、光束発散度、水平面照度、輝度

## SPEC gate

- 光束: `PASS`
- 光度: `PASS`
- 照度: `PASS`
- 配光: `PASS`
- 照明率: `PASS`
- 保守率: `PASS`
- 所要灯数: `PASS`
- 消費電力: `PASS`
- 効率: `PASS`
- SPEC固定9項目: `9 / 9 PASS`

## 境界確認

- 色温度・LED寿命を独立テーマへ拡張: `0件`
- 光束発散度・輝度を固定過去問対応以上へ拡張: `0件`
- 簡略球形グローブ式を一般器具へ無条件適用: `0件`
- `lm/W` と照明率 `U` の混同: `0件`
- 光束法の保守率 `M` と光束発散度 `M` の混同: `0件`（slide 4で別量と明示）
- 未確認実車値の真値化: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

## 判定

`PASS / POWERPOINT_COMPLETE`

Topic 32は教材成果物一式が揃った。次工程は、answer-bearing資料を先に開かないfresh workerによるclean blind candidate固定である。本runは固定EXAM_ALIGNMENT等のanswer-bearing資料を既に確認しているため、candidate作成へ進まない。
