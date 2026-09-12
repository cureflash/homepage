# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-13

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: 1 / 22
- current_status: `topic_02_practice_pdf_complete`
- last_completed_topic: `01 0系の主変圧器を等価回路で解剖する`
- active_topic: `02 0系の直流主電動機はどんな特性だった？`
- next_start: Topic 02の解説画像PowerPointを作成する。速度―トルク、速度―出力、電流―速度の3特性を式と対応付け、一次4問＋二次1問の固定EXAM_ALIGNMENTから外れない。チョッパ、誘導機、VVVF、過渡制御は追加しない

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
- [ ] 解説画像PowerPoint
- [ ] 公式過去問の教材のみでの独立再解答
- [ ] 最終QA PASS

## 今回進めた内容
Topic 02の練習PDFを作成した。

成果物:
- `topics/02_0series_dc_motor_characteristics/02_0series_dc_motor_characteristics_practice.pdf`
- A4縦 10ページ
- 一次試験型8問（全問五肢択一）＋二次試験型4問（記述式）の計12問
- 全問に解答・完全解説を付与
- 数値問題はすべて教材用仮定値と明示し、0系実車値として扱っていない
- 全10ページを200 dpiでレンダリングし、文字切れ・図表欠落・ページ外はみ出し・欠損グリフなし
- 代表計算・全数値解答を別計算で再確認し、数値QA PASS

過去問対応:
- R6一次 機械 問2、H28一次 機械 問1・問5、H26一次 機械 問5に対応する知識・計算を一次型8問で反復
- H24二次 機械・制御 問1 (1)〜(4)型の「損失→電機子抵抗→逆起電力→速度→部分負荷端子電圧」を記述式で採点可能な形にした
- 二次記述では使用式、前提、途中式、単位、検算を明示
- 問題末尾にEXAM_ALIGNMENTとの対応表を収録

範囲外のチョッパ、誘導機、VVVF、過渡制御は追加していない。0系主電動機の未確認実値・実測特性も追加していない。

## 判定
Topic 02は `practice_pdf_complete`。完成数は `1 / 22` のまま。次工程は解説画像PowerPoint作成。
