# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-13

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: 1 / 22
- current_status: `topic_02_explanation_body_complete`
- last_completed_topic: `01 0系の主変圧器を等価回路で解剖する`
- active_topic: `02 0系の直流主電動機はどんな特性だった？`
- next_start: Topic 02の解説PDFを作成する。解説本文と3段階例題をそのまま教材化し、速度―トルク・速度―出力・電流―速度の3特性は式との対応が分かる模式図として作成する。根拠のない0系実車曲線・実車値は使わない

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
- [ ] 解説PDF
- [ ] 練習PDF（解答・完全解説付き）
- [ ] 解説画像PowerPoint
- [ ] 公式過去問の教材のみでの独立再解答
- [ ] 最終QA PASS

## 今回進めた内容
Topic 02のsource Markdownに解説本文と3段階例題を追加した。

収録した内容:

- 電機子回路 `V=E+I_aR_a+V_b`
- `E=kΦω`、`T=kΦI_a` と速度式
- 一定界磁での `E∝n`、`T∝I_a`
- 直巻未飽和域の `Φ∝I_a`、`T∝I_a^2` と磁気飽和の注意
- 軽負荷時の速度上昇
- 弱め界磁
- `P_em=EI_a=Tω`、銅損、ブラシ損、効率
- 速度―トルク、速度―出力、電流―速度の読み方
- H24二次問1型の再利用可能な解法手順
- 基礎・標準・二次相当の3段階例題

範囲外のチョッパ、誘導機、VVVF、過渡制御は追加していない。0系主電動機の未確認実値・未確認実測曲線も追加していない。

## 判定
Topic 02は `explanation_body_complete`。完成数は `1 / 22` のまま。次工程は解説PDF作成。
