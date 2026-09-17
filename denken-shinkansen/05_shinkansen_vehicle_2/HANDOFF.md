# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-17

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜13は最終QAまで `PASS / completed`。完成数は `13 / 39`。

現在地は `topic_14_explanation_source_complete`。Topic 14 `300系⑤ 走行抵抗と必要けん引力` は制作前EXAM_ALIGNMENTを正本 `SPEC.md` 第14章へ再照合済みで、固定一次2問＋二次3問、計5問・9答案要素と制作前計算・論理検証 一次 `3 / 3 PASS`、二次 `6 / 6 PASS`、合計 `9 / 9 PASS` を変更せず、解説本文＋3段階例題まで完成した。

次はTopic 14の解説PDF。

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

## Topic 14 SPEC再照合
以前のTopic 14進捗記録には、`SPEC.md` 第14章と一致しない「速度依存抵抗・空気抵抗・軸出力・車輪周出力」をSPEC指定8項目として扱う記述、および「勾配条件比較」をSPEC指定可視化とする記述があったため修正した。

正本SPEC指定8項目:
- 走行抵抗
- 加速抵抗
- 勾配抵抗
- けん引力
- 車輪周力
- 速度
- 必要出力
- 加速度

正本SPEC指定4可視化:
- 速度―走行抵抗
- 速度―必要けん引力
- 速度―必要出力
- 加速曲線

再照合QA:
- SPEC 8項目: `8 / 8 一致`
- SPEC 4可視化: `4 / 4 一致`
- 固定5過去問: `変更なし`
- 固定9答案要素: `変更なし`
- 制作前検証: `9 / 9 PASS 維持`
- 新規過去問追加: `0件`
- 新規実車値追加: `0件`

## Topic 14 解説source
- path: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force.md`
- 判定: `PASS / EXPLANATION_SOURCE_COMPLETE`
- 解説本文: `完成`
- 3段階例題: `3 / 3 PASS`
- 固定5過去問・9答案要素本文マッピング: `9 / 9 PASS`
- 例題数値再計算: `PASS`
- SPEC指定8項目: `8 / 8 PASS`
- SPEC指定4可視化の計算条件: `4 / 4 PASS`
- 4可視化は同じ教材用仮定式系から生成: `PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 13の回生・制動・エネルギー返送再展開: `0件`
- Topic 12のPWM/VVVF/V/f等再展開: `0件`
- SPEC外の粘着限界・曲線抵抗・トンネル抵抗・台車/歯車設計・運行計画追加: `0件`
- 未確認300系実車値の真値化: `0件`

教材用仮定モデル:
- `m=m_eq=4.00×10^5 kg`
- `R_run(v)=25000+80v+6v^2 [N]`、`v [m/s]`
- 300系実車値ではないことを本文で明示
- 速度―走行抵抗、速度―必要けん引力、速度―必要出力、加速曲線の4可視化条件を同一式系へ固定

## Topic 14 SPEC固定範囲
扱う内容:
- 走行抵抗
- 加速抵抗
- 勾配抵抗
- けん引力
- 車輪周力
- 速度
- 必要出力
- 加速度

指定計算・グラフ:
- 速度―走行抵抗
- 速度―必要けん引力
- 速度―必要出力
- 加速曲線

範囲境界:
- Topic 13の回生・制動・エネルギー返送は再展開しない
- Topic 12のPWM/VVVF/V/f制御等は `P=Tω` 接続に必要な範囲以上へ戻らない
- 粘着限界、曲線抵抗、トンネル抵抗、台車・歯車設計、列車運行計画は追加しない
- 走行抵抗の内訳・経験式・係数は根拠のある範囲を超えて追加しない
- 未確認の300系質量・走行抵抗係数・伝達効率を実車値として追加しない

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
Topic 14 `300系⑤ 走行抵抗と必要けん引力` の固定EXAM_ALIGNMENTと解説sourceは完成。固定一次2問＋二次3問・9答案要素、SPEC指定8項目・4可視化条件、教材用仮定式系を変更せず、次は解説PDFを制作する。PDF後に練習問題・PowerPointへ進む。未確認の300系実車値は真値化しない。