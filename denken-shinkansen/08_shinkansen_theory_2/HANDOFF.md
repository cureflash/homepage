# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-13

## 現在地

Topic 01 `25kV架線を一つの等価回路にする` は `completed`。

Topic 02 `架線は長くなるとなぜ電圧が落ちる？` は `completed`。

Topic 03 `25kV架線の周囲にはどんな電界ができる？` は制作前EXAM_ALIGNMENT、解説本文＋3段階例題、解説PDF、練習PDFまで完了。

完成数: `2 / 21`

current_status: `topic_03_practice_pdf_complete`

active_topic: `03 25kV架線の周囲にはどんな電界ができる？`

## Topic 03 制作前EXAM_ALIGNMENT

記録:
`topics/03_catenary_electric_field/03_catenary_electric_field.md`

品質ゲート対象は一次「理論」6問・21小問。

- R8 問1 (1)〜(3): 球対称の体積電荷分布、ガウスの法則、`F=qE`
- R5 問1 (1): 同軸円筒間の電界
- R4 問1 (1)〜(5): 球・球殻の包有電荷、領域別電界、電位
- H30 問1 (1)〜(4): 点電荷の電界成分、重ね合わせ
- H23 問1 (1)〜(3): 円筒ガウス面、電位の積分、最大電界
- H21 問1 (1)〜(5): クーロン力、電界合成、電界0条件

公式問題・公式解答で対象と正答を照合済み。完成後独立再解答は教材完成後に実施する。

二次試験も確認対象に含めたが、本Topicの固定範囲だけで静電界解析を直接問う問題は今回確認した範囲では採用しない。`MASTER_SPEC.md` の `08 理論・二種` は一次中心・無理に二次形式を付けないという原則に従う。

R7の電気影像法・静電容量、R6の誘電体入りコンデンサ、R2の影像電荷等はSPEC外またはTopic 04のため除外した。静電容量、誘電体の分極、静電エネルギー、絶縁設計、高電圧設備一般をTopic 03へ追加しない。

## Topic 03 解説本文・解説PDF

source:
`topics/03_catenary_electric_field/03_catenary_electric_field.md`

解説PDF:
`topics/03_catenary_electric_field/03_catenary_electric_field_explanation.pdf`

解説PDFはA4縦5ページ。source Markdownで固定した試験論点、成立条件、解法手順、3段階例題、過去問対応表、公式まとめを収録し、全ページ表示QA済み。

## Topic 03 練習PDF

source:
`topics/03_catenary_electric_field/03_catenary_electric_field_practice.md`

PDF:
`topics/03_catenary_electric_field/03_catenary_electric_field_practice.pdf`

- 全12問、すべて一次試験型五肢択一
- 基礎3 / 本試験標準6 / 複合・ひっかけ3
- 一次理論6問・21小問の固定要求へマッピング
- SPEC必須の電束・電束密度・電位傾度も収録
- 正答だけでなく、式・理由・単位・中間値・典型ミスまで解説
- 二次試験は既存EXAM_ALIGNMENTどおり、直接対応がないため数合わせの記述式を追加していない
- 実在架線の未確認値なし
- 影像法、静電容量、誘電体、静電エネルギー、絶縁設計等の追加なし
- A4縦5ページ、全5ページ130 dpi表示QA PASS

## 次に行うこと

Topic 03の解説画像PowerPointを、`03_catenary_electric_field.md` と `03_catenary_electric_field_practice.md` を正本として作成する。

一次理論6問・21小問で要求される球対称・円筒対称・点電荷ベクトル合成・電位積分へ接続する図に限定し、影像法、静電容量、誘電体等のSPEC外論点を追加しない。
