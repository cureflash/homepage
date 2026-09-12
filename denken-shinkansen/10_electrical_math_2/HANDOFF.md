# HANDOFF - 電験二種「電気数学」

更新日: 2026-09-13

## 現在地

Topic 01 `複素数・複素指数・フェーザ計算` は最終QAまでPASSし、`completed`。

完成数: `1 / 20`

active topic: `02 ベクトルと座標変換`

current status: `topic_02_powerpoint_complete`

## Topic 02 source

source Markdown:
`topics/02_vectors_coordinate_transforms/02_vectors_coordinate_transforms.md`

source blob SHA:
`92e87f72cd5be5a6710a496d06b16e0df578a2f5`

解説PDF:
`topics/02_vectors_coordinate_transforms/02_vectors_coordinate_transforms_explanation.pdf`

解説PDF blob SHA:
`934254383ff400046bee02b10b001a4e3bdec04a`

練習PDF:
`topics/02_vectors_coordinate_transforms/02_vectors_coordinate_transforms_practice.pdf`

練習PDF blob SHA:
`ce088bb49ee53003e6dce0dcad0bd0ddbf5adfdf`

解説画像PowerPoint:
`topics/02_vectors_coordinate_transforms/02_vectors_coordinate_transforms_images.pptx`

PowerPoint blob SHA:
`8730709536aeec283de45296fb940bf26387c37c`

## Topic 02 制作前EXAM_ALIGNMENT

選定公式過去問:

- R8 一次 理論 問1
- R8 一次 理論 問2
- R7 一次 理論 問2
- R7 一次 理論 問7
- R1 一次 理論 問5

制作前独立再解答:

- 5問 / 25小問 PASS
- 公式解答との一致: 25 / 25
- 参考教材: e-sysnet + 電験王2 の2系統以上
- 直近年度優先: R8 2問 + R7 2問

## Topic 02 解説PDF

A4縦3ページ。

収録範囲:

- 成分表示とベクトル合成
- 基底と成分
- 大きさと単位ベクトル
- 内積と射影・成分抽出
- 外積の大きさ・向き・右手系
- ローレンツ力 `q(v×B)` と負電荷での反転
- 回転対称性による成分相殺
- 直交座標と `r=sqrt(x^2+y^2)`
- 半径方向・円周方向から直交成分への読み替え
- 2次元回転変換と逆変換
- `M=M0 cosθ` と射影
- 三相120°ベクトルの幾何学的合成
- 標準解法アルゴリズム
- 3段階例題
- 選定5過去問と教材節の対応表

全3ページを180 dpiでレンダリングし、文字切れ・重なり・欠落・黒塗り・ページ外はみ出しがないことを目視確認済み。

## Topic 02 練習PDF

A4縦5ページ、全12問。

- 問1〜8: 二種一次理論を意識した五肢択一
- 問9〜12: 本試験標準〜複合の記述計算
- 成分表示、射影、内積、外積、負電荷の方向反転、回転対称性、半径・円周方向、2次元回転変換、三相120°を演習化
- 各問に途中式・使用理由・符号・単位・検算を含む完全解説
- 全5ページを180 dpiでレンダリングし、文字切れ・重なり・欠落・黒塗り・ページ外はみ出しなしを目視確認済み

## Topic 02 解説画像PowerPoint

16:9、4枚。

- スライド1: 成分表示・基底・大きさ・単位ベクトル・成分抽出
- スライド2: 内積による射影、外積、ローレンツ力、負電荷での方向反転
- スライド3: 2次元回転変換、逆変換、半径・円周方向から直交成分への読み替え、`M=M0 cosθ`
- スライド4: 標準解法アルゴリズム、120°三相ベクトル、選定5過去問との対応
- 全4枚を160 dpi相当でレンダリングし、文字切れ・重なり・欠落・黒塗り・ページ外はみ出しなしを目視確認済み
- PPTXパッケージ整合性検査PASS
- 全shapeのスライド外はみ出し検査PASS

## 範囲外として維持するもの

- 対称座標法そのものの詳細
- Topic 11の一般的な行列・線形連立方程式
- SPECにない抽象ベクトル解析
- 未確認の新幹線実車値・設備値

二次記述問題は数合わせで追加しない。本テーマの直接対応は一次理論のベクトル・座標処理である。

## 次に行うこと

Topic 02の完成教材だけを使い、選定公式過去問5問を保存済み正答を先に見ず独立再解答する。

その後、必須成果物実在確認・独立再解答結果・教材間整合・範囲管理をまとめた最終QAを行い、PASSした場合のみTopic 02を `completed` とする。