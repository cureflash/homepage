# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-13

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: 1 / 22
- current_status: `topic_02_explanation_pdf_complete`
- last_completed_topic: `01 0系の主変圧器を等価回路で解剖する`
- active_topic: `02 0系の直流主電動機はどんな特性だった？`
- next_start: Topic 02の練習PDF（解答・完全解説付き）を作成する。一次試験型の知識・計算に加え、H24二次問1型の途中式・前提・単位を記述する問題へ接続する。チョッパ、誘導機、VVVF、過渡制御は追加しない

## Topic 01 品質ゲート進捗
- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 公式過去問を一次・二次合わせて6問選定
- [x] 二次試験の記述式問題を含めた
- [x] 参考教材を複数系統確認
- [x] source Markdownへ制作前EXAM_ALIGNMENTを記録
- [x] 公式解答との照合を伴う要求事項の独立検証
- [x] 解説本文
- [x] 解説PDF
- [x] 練習PDF（解答・完全解説付き）
- [x] 解説画像PowerPoint
- [x] 公式過去問の教材のみでの独立再解答
- [x] 最終QA PASS

## Topic 02 品質ゲート進捗
- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 公式過去問を一次4問＋二次記述1問、計5問選定
- [x] 混合問題は本テーマ対応小問だけをゲート対象として明示
- [x] 参考教材を複数系統確認
- [x] source Markdownへ制作前EXAM_ALIGNMENTを記録
- [x] ゲート対象10小問の公式解答照合を伴う要求事項の独立検証: 10 / 10 PASS
- [x] 解説本文＋3段階例題
- [x] 解説PDF
- [ ] 練習PDF（解答・完全解説付き）
- [ ] 解説画像PowerPoint
- [ ] 公式過去問の教材のみでの独立再解答
- [ ] 最終QA PASS

## 今回進めた内容
Topic 02の解説PDFを作成した。

成果物:
- `topics/02_0series_dc_motor_characteristics/02_0series_dc_motor_characteristics_explanation.pdf`
- A4縦 3ページ
- 全3ページをレンダリングして表示確認し、文字切れ・図表欠落・ページ外はみ出しなし
- PDFは開封可能で3ページとして認識されることを確認

収録内容:
- 電機子回路 `V=E+I_aR_a+V_b`
- `E=kΦω`、`T=kΦI_a` と速度式
- 直巻未飽和域の `Φ∝I_a`、`T∝I_a^2` と磁気飽和の注意
- 軽負荷時の速度上昇、弱め界磁
- `P_em=EI_a=Tω`、銅損、ブラシ損、効率
- 速度―トルク、速度―出力、電流―速度の3特性模式図
- H24二次問1型の再利用可能な解法手順
- 基礎・標準・二次相当の3段階例題
- 一次4問＋二次1問の過去問対応表

3段階例題の代表計算は別計算で再確認し、数値整合を確認した。特性図は式の関係を読むための自作模式図であり、0系実車の測定曲線として扱っていない。

範囲外のチョッパ、誘導機、VVVF、過渡制御は追加していない。0系主電動機の未確認実値・未確認実測曲線も追加していない。

## 判定
Topic 02は `explanation_pdf_complete`。完成数は `1 / 22` のまま。次工程は練習PDF作成。
