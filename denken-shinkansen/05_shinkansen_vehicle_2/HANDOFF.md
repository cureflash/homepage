# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-17

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜13は最終QAまで `PASS / completed`。完成数は `13 / 39`。

現在地は `topic_13_final_qa_complete`。Topic 13 `300系④ 回生と四象限運転` は、固定EXAM_ALIGNMENT、解説本文＋3段階例題、解説PDF＋QA、練習問題・完全解説source、練習PDF＋QA、解説画像PowerPoint＋QA、完成後独立再解答、最終QAまで完了。固定一次4問＋二次1問・15答案要素は `15 / 15 PASS`。初回最終QAで唯一FAILだった進捗記録4箇所も `4 / 4 PASS` で同期済みで、再判定は `PASS / completed`。

次はTopic 14 `300系⑤ 走行抵抗と必要けん引力` の制作前EXAM_ALIGNMENT。

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

## Topic 14 SPEC固定範囲
Topic 14 `300系⑤ 走行抵抗と必要けん引力` は系列 `SPEC.md` に従い、制作前EXAM_ALIGNMENTから開始する。

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

仕様を追加せず、まず電気技術者試験センターの第二種公式過去問を直近年度から調査する。二種は一次・二次を合わせ原則5問以上を調査し、二次対象論点で該当記述問題を確認できる場合は少なくとも1問を固定する。過去問要求から教材必須説明を逆算し、参考教材は最低2系統を確認する。確定不能事項は推測せずexact blockerとして記録する。

## 直前Topic
Topic 13 `300系④ 回生と四象限運転` は最終QA `PASS / completed`。Topic 12 `300系③ VVVFインバータと誘導機制御`、Topic 11 `300系② PWMコンバータ` も `PASS / completed`。

## 次の正確な開始点
Topic 14 `300系⑤ 走行抵抗と必要けん引力` の制作前EXAM_ALIGNMENTを行う。本文・PDF・練習問題・PowerPointは、固定過去問と要求事項を確定するまで作らない。