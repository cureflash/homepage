# STATUS - 電験二種「電気数学」

更新日: 2026-09-13

## 状態
- active_series: `10_electrical_math_2`
- exam_aligned_completed_topics: 1 / 20
- current_status: `topic_02_explanation_body_complete`
- last_completed_topic: `01 複素数・複素指数・フェーザ計算`
- active_topic: `02 ベクトルと座標変換`
- next_start: Topic 02の解説PDFを、`topics/02_vectors_coordinate_transforms/02_vectors_coordinate_transforms.md` の解説本文から作成し、全ページQAを行う

## Topic 02 品質ゲート進捗
- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 関連する公式過去問を5問選定
- [x] 参考教材を複数系統確認
- [x] source Markdownへ制作前EXAM_ALIGNMENTを記録
- [x] 公式解答との照合を伴う制作前独立検証
- [x] 解説本文
- [x] 3段階例題
- [ ] 解説PDF
- [ ] 練習PDF（解答・完全解説付き）
- [ ] 解説画像PowerPoint
- [ ] 公式過去問の教材のみでの独立再解答
- [ ] 最終QA PASS

## 今回進めた内容
Topic 02 `ベクトルと座標変換` の解説本文と3段階例題を `topics/02_vectors_coordinate_transforms/02_vectors_coordinate_transforms.md` へ追加した。

本文へ反映した制作前EXAM_ALIGNMENTの必須事項:

- `v=v_x e_x+v_y e_y+v_z e_z` と成分・基底の区別
- 同一基底でのベクトル合成、大きさ、単位ベクトル
- 内積による成分抽出・射影
- 外積の大きさ・右手系・成分計算
- `q(v×B)` と負電荷での方向反転
- 回転対称性による横成分相殺・軸成分加算
- `r=sqrt(x^2+y^2)` と半径・円周方向から直交成分への変換
- `x'=x cosθ+y sinθ`, `y'=-x sinθ+y cosθ` と逆変換
- `M=M0 cosθ` を射影として読む接続
- 三相120°ベクトルの成分合成
- `座標系固定→成分化→演算選択→必要成分抽出→符号・単位検算` の標準解法

3段階例題:

1. 基礎: 内積による進行方向成分の抽出
2. 本試験標準: 電子のローレンツ力の大きさ・向き
3. 複合・ひっかけ: 円周方向磁束密度を直交座標・回転座標へ変換

過去問要求事項と本文節の対応表もsource Markdownへ追加した。

## 範囲管理

追加していないもの:

- 対称座標法そのものの詳細
- Topic 11の一般的な行列・線形連立方程式
- SPECにない抽象ベクトル解析
- 未確認の新幹線実車値・設備値

二次記述問題は数合わせで追加していない。本テーマの直接対応は一次理論のベクトル・座標処理である。

## 判定
Topic 02の解説本文段階をPASSとする。

テーマ完成数は `1 / 20` のまま。Topic 02はまだ `completed` ではない。