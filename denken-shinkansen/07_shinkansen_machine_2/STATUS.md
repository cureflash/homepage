# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-13

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: 1 / 22
- current_status: `topic_02_powerpoint_complete`
- last_completed_topic: `01 0系の主変圧器を等価回路で解剖する`
- active_topic: `02 0系の直流主電動機はどんな特性だった？`
- next_start: Topic 02の固定EXAM_ALIGNMENTで選定したゲート対象10小問を、保存済み正答を見ず教材だけで独立再解答する。10 / 10正答、使用式・途中式・正答理由の説明、教材外知識補完0件を確認する

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
- [x] 練習PDF（解答・完全解説付き）
- [x] 解説画像PowerPoint
- [ ] 公式過去問の教材のみでの独立再解答
- [ ] 最終QA PASS

## 今回進めた内容
Topic 02の解説画像PowerPointを作成した。

成果物:
- `topics/02_0series_dc_motor_characteristics/02_0series_dc_motor_characteristics_images.pptx`
- 16:9、7枚
- 電機子回路 `V=E+I_aR_a(+V_b)`、`E=kΦω`、`T=kΦI_a` を図と対応付けた
- 直巻未飽和域の `Φ∝I_a` → `T∝I_a^2` と磁気飽和時の注意を可視化した
- SPEC指定の速度―トルク、速度―出力、電流―速度の3特性を模式図で収録し、対応式を明示した
- 弱め界磁の速度上昇・同一電流時トルク低下を式で対比した
- H24二次 問1 (1)〜(4)型の「損失→抵抗→逆起電力→速度→電流→端子電圧」を再利用可能な手順として整理した
- 固定EXAM_ALIGNMENTの一次4問＋二次1問との対応表を収録した
- チョッパ、誘導機、VVVF、過渡制御は追加していない
- 0系実車の未確認定格値・実測特性は追加していない

QA:
- LibreOfficeでPDF変換し全7枚を150 dpiでレンダリング確認
- 文字切れ、図表欠落、ページ外はみ出し、欠損グリフなし
- PowerPoint再読込、ZIP構造検査PASS
- 7スライドすべてshape境界がスライド内に収まり、overflow 0件

## 判定
Topic 02は `powerpoint_complete`。完成数は `1 / 22` のまま。次工程は固定EXAM_ALIGNMENTのゲート対象10小問の完成後独立再解答。
