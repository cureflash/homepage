# Topic 15 練習PDF QA

実施日: 2026-09-17

対象:
`topics/15_log_db_frequency_response/15_log_db_frequency_response_practice.pdf`

元source:
`topics/15_log_db_frequency_response/15_log_db_frequency_response_practice.md`

## 成果物

- A4縦: 6ページ
- 問題: 全12問
- 一次型: 8問（五肢択一）
- 記述型: 4問
- 解答・完全解説: 全12問を収録
- 固定EXAM_ALIGNMENT: 第二種5問・12答案要素への接続を維持

## 表示QA

200 dpiで全6ページをレンダリングして確認した。

- page 1: PASS
- page 2: PASS
- page 3: PASS
- page 4: PASS
- page 5: PASS
- page 6: PASS

判定: `6 / 6 PASS`

確認事項:

- 文字欠け: 0件
- 文字重なり: 0件
- ページ外クリップ: 0件
- 黒四角・欠損グリフ: 0件
- 数式・記号の表示崩れ: 0件
- A4縦: PASS

## 文字抽出QA

`pdftotext -layout` で全6ページを抽出して確認した。

- 問1〜問12: PASS
- `20log10`: PASS
- `T_I=5 s`: PASS
- `K=2sqrt(2)`: PASS
- `GM_dB=-(-8)=8 dB`: PASS
- `PM=180+(-140)=40 deg`: PASS
- 固定過去問接続記録: PASS
- replacement character `U+FFFD`: 0件

数式の添字はPDF文字抽出時に `ω_b -> ωb` 等へ正規化される箇所があるが、表示上の添字は正常であり意味の欠落はない。

判定: `PASS`

## PDF構造

- Openable: PASS
- Encrypted: no
- Scanned-only: no
- 日本語フォント: Noto Sans CJK JPをsubset embedded
- 埋込フォントQA: PASS

## 内容整合

練習sourceで確定済みの内容を組版し、新しい論点・設問・実車値は追加していない。

- 固定5問・12答案要素への接続: `12 / 12 PASS`
- 独立計算・論理QA: `12 / 12 PASS` を維持
- 一次型正答一意性: `8 / 8 PASS` を維持
- 第一種・第三種過去問による件数水増し: 0件
- ラウス・フルビッツ法一般追加: 0件
- ナイキスト線図による独立した安定判別追加: 0件
- 補償器設計一般追加: 0件
- フィルタ設計一般追加: 0件
- Topic 16以降の数値計算先取り: 0件
- 未確認実車値追加: 0件

## 判定

`PRACTICE_PDF_COMPLETE / IN_PROGRESS`

次工程: Topic 15の最終QAを再判定する。
