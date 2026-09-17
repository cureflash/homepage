# Topic 16 練習PDF QA

実施日: 2026-09-18

対象:
`topics/16_numerical_differentiation_integration/16_numerical_differentiation_integration_practice.pdf`

元source:
`topics/16_numerical_differentiation_integration/16_numerical_differentiation_integration_practice.md`

## 成果物

- A4縦: 4ページ
- 問題: 全12問
- 一次型: 8問（五肢択一）
- 記述型: 4問
- 難易度: 基礎3問／標準6問／複合3問
- 解答・完全解説: 全12問を収録
- 固定EXAM_ALIGNMENT: 第二種4問・8答案要素への接続を維持

## 表示QA

200 dpiで全4ページをレンダリングして確認した。

- page 1: PASS
- page 2: PASS
- page 3: PASS
- page 4: PASS

判定: `4 / 4 PASS`

確認事項:

- 文字欠け: 0件
- 文字重なり: 0件
- ページ外クリップ: 0件
- 黒四角・欠損グリフ: 0件
- 数式・記号の表示崩れ: 0件
- A4縦: PASS

## 文字抽出QA

`pdftotext -layout` で全4ページを抽出して確認した。

- 問1〜問12: PASS
- `Q_peak` / `Q_off`: PASS
- `P_peak=13.75 MW` / `P_off=8.75 MW`: PASS
- `F_L=14/27`: PASS
- `F_L/F=7/9`: PASS
- `E_out=18.0 MWh`: PASS
- `E_loss=0.36 MWh`: PASS
- `98.04 %`: PASS
- R6 / R4 / H23 / H22 の固定過去問接続記録: PASS
- `8 / 8 PASS`: PASS
- replacement character `U+FFFD`: 0件

判定: `PASS`

## PDF構造

- Openable: PASS
- Encrypted: no
- Scanned-only: no
- A4: 595.276 × 841.89 pt
- 日本語: CIDフォント `HeiseiKakuGo-W5`、200 dpi表示QAおよび文字抽出QAで正常表示を確認

## 内容整合

練習sourceで確定済みの内容のみを組版し、新しい論点・設問・実車値は追加していない。

- 固定4問・8答案要素への接続: `8 / 8 PASS`
- 独立計算・論理QA: `12 / 12 PASS` を維持
- 一次型正答一意性: `8 / 8 PASS` を維持
- 第一種・第三種過去問による件数水増し: 0件
- Topic 17以降の先取り: 0件
- 高次数値微分公式の追加: 0件
- 高次Newton-Cotes公式の体系的追加: 0件
- スプライン補間・有限要素法等の別算法追加: 0件
- 未確認実車値追加: 0件

## 判定

`PRACTICE_PDF_COMPLETE / IN_PROGRESS`

次工程: Topic 16の最終QAを再判定する。
