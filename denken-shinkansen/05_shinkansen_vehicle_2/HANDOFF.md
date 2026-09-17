# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-17

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜13は最終QAまで `PASS / completed`。完成数は `13 / 39`。

現在地は `topic_14_exam_alignment_complete`。Topic 14 `300系⑤ 走行抵抗と必要けん引力` は制作前EXAM_ALIGNMENTまで完了。固定一次2問＋二次3問、計5問・9答案要素を確定し、制作前計算・論理検証は一次 `3 / 3 PASS`、二次 `6 / 6 PASS`、合計 `9 / 9 PASS`。本文・PDF・練習問題・PowerPointは未制作。

次はTopic 14の解説本文＋3段階例題。

## Topic 14 固定EXAM_ALIGNMENT
source: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force.md`

固定過去問:
- R7 二次 機械・制御 問2 (1),(3)
- R1 二次 機械・制御 問1 (4)
- H26 二次 機械・制御 問1 (4)
- H26 一次 機械 問5 (1)
- H25 一次 機械 問3 (1),(2)

品質ゲート:
- 一次: `2問・3答案要素`
- 二次: `3問・6答案要素`
- 合計: `5問・9答案要素`
- 制作前計算・論理検証: 一次 `3 / 3 PASS`、二次 `6 / 6 PASS`、合計 `9 / 9 PASS`
- 二次記述問題: `3問`
- 公式解答・標準解答との不一致: `0件`
- 参考教材2系統以上: `PASS`
- R8一次「機械」直近年度確認: `PASS / 固定対象なし`
- SPEC指定8項目: `8 / 8 aligned`
- SPEC指定4可視化: `4 / 4 aligned`
- 固定EXAM_ALIGNMENT変更: `0件`

直近年度から公式問題を確認し、R8一次「機械」にはTopic 14の走行抵抗・必要けん引力・機械出力接続を直接測る固定対象を確認できなかったため、件数合わせでは採用していない。列車の走行抵抗式・勾配抵抗式そのものを直接問う第二種問題も固定対象として確認できていないため、「過去問で直接問われた」とは扱わない。SPEC必須の列車側力学を、実際に確認できた `P=Tω`、負荷トルク・慣性トルク、始動トルク等の二種試験論点へ接続する。

## Topic 14 SPEC固定範囲
扱う内容:
- 走行抵抗
- 速度依存抵抗
- 空気抵抗
- 勾配抵抗
- 加速抵抗
- 必要けん引力
- 軸出力
- 車輪周出力

指定計算・グラフ:
- 速度―走行抵抗
- 速度―必要けん引力
- 速度―必要出力
- 勾配条件比較

範囲境界:
- Topic 13の回生・制動・エネルギー返送は再展開しない
- Topic 12のPWM/VVVF/V/f制御等は `P=Tω` 接続に必要な範囲以上へ戻らない
- 粘着限界、曲線抵抗、トンネル抵抗、台車・歯車設計、列車運行計画は追加しない
- 未確認の300系質量・走行抵抗係数・空気抵抗係数・伝達効率を実車値として追加しない

## Topic 13 固定EXAM_ALIGNMENT
source: `topics/13_300series_regenerative_four_quadrant/13_300series_regenerative_four_quadrant.md`

固定過去問:
- R6 一次 機械 問2 (1),(2)
- R5 一次 機械 問2 (1),(2),(3),(5)
- H28 一次 機械 問5 (3)〜(5)
- H27 一次 機械 問3 (1),(2)
- H24 二次 機械・制御 問3 (1),(2)a〜c

品質ゲート:
- 一次: `4問・11答案要素`
- 二次: `1問・4答案要素`
- 合計: `5問・15答案要素`
- 制作前独立検証: 一次 `11 / 11 PASS`、二次 `4 / 4 PASS`、合計 `15 / 15 PASS`
- 完成後独立再解答: 一次 `11 / 11 PASS`、二次 `4 / 4 PASS`、合計 `15 / 15 PASS`
- 教材外知識補完: `0件`
- 公式解答・標準解答との不一致: `0件`
- 参考教材2系統以上: `PASS`
- SPEC指定8項目: `8 / 8 PASS`
- SPEC指定3可視化: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`

## Topic 13 成果物
- 解説source: `topics/13_300series_regenerative_four_quadrant/13_300series_regenerative_four_quadrant.md`
- 解説PDF: `topics/13_300series_regenerative_four_quadrant/13_300series_regenerative_four_quadrant_explanation.pdf`
- 解説PDF QA: `topics/13_300series_regenerative_four_quadrant/13_300series_regenerative_four_quadrant_explanation_pdf_qa.md`
- 練習source: `topics/13_300series_regenerative_four_quadrant/13_300series_regenerative_four_quadrant_practice_source.md`
- 練習PDF: `topics/13_300series_regenerative_four_quadrant/13_300series_regenerative_four_quadrant_practice.pdf`
- 練習PDF QA: `topics/13_300series_regenerative_four_quadrant/13_300series_regenerative_four_quadrant_practice_qa.md`
- 解説画像PowerPoint: `topics/13_300series_regenerative_four_quadrant/13_300series_regenerative_four_quadrant_images.pptx`
- PowerPoint QA: `topics/13_300series_regenerative_four_quadrant/13_300series_regenerative_four_quadrant_images_qa.md`
- 完成後独立再解答: `topics/13_300series_regenerative_four_quadrant/13_300series_regenerative_four_quadrant_independent_reanswer.md`
- 最終QA: `topics/13_300series_regenerative_four_quadrant/13_300series_regenerative_four_quadrant_final_qa.md`

## Topic 13 最終QA
- 判定: `PASS / completed`
- 技術内容: `PASS`
- 固定一次4問＋二次1問・15答案要素: `PASS`
- 完成後独立再解答: `15 / 15 PASS`
- 必須成果物: `PASS`
- 解説PDF: A4縦5ページ、180 dpi表示 `5 / 5 PASS`、文字抽出 `PASS`
- 練習PDF: A4縦2ページ、一次8問＋二次4問、180 dpi表示 `2 / 2 PASS`、数値・論理 `12 / 12 PASS`
- PowerPoint: 16:9・4スライド、表示 `4 / 4 PASS`、overflow `0件`、ZIP/XML整合性 `PASS`
- SPEC境界: `PASS`
- 進捗記録整合: `PASS`

## Topic 13 進捗記録同期
初回最終QAで未同期だった4箇所は解消済み。

1. 主source冒頭状態欄: `PASS`
2. 主source末尾次工程: `PASS`
3. 練習source末尾次工程: `PASS`
4. 練習PDF QA末尾現在地: `PASS`

同期: `4 / 4 PASS`

同期時に変更していないもの:
- 技術本文
- 固定EXAM_ALIGNMENT
- 問題・正答
- PDF/PPTX
- 完成後独立再解答結果

## Topic 13 範囲境界
- Topic 14の走行抵抗・必要けん引力・加速度計算は先取りしていない
- H27の回生失効・電力貯蔵・運行間隔は追加していない
- H24二次問3の無効電流・出力可能領域は追加していない
- Topic 11/12の高調波・力率制御・V/f制御等は必要な接続以上に再展開していない
- SPEC外制御方式は追加していない
- 未確認の300系回生効率・制御定数等を実車値として追加していない

## 直前Topic
Topic 13 `300系④ 回生と四象限運転` は最終QA `PASS / completed`。Topic 12 `300系③ VVVFインバータと誘導機制御`、Topic 11 `300系② PWMコンバータ` も `PASS / completed`。

## 次の正確な開始点
Topic 14 `300系⑤ 走行抵抗と必要けん引力` の固定EXAM_ALIGNMENTは確定済み。固定一次2問＋二次3問・9答案要素、SPEC指定8項目・4可視化を変更せず、解説本文＋3段階例題を制作する。PDF・練習問題・PowerPointはその後の工程とし、未確認の300系実車値は真値化しない。