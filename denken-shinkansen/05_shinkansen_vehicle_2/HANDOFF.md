# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-17

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜13は最終QAまで `PASS / completed`。完成数は `13 / 39`。

現在地は `topic_14_practice_source_complete`。Topic 14 `300系⑤ 走行抵抗と必要けん引力` は固定一次2問＋二次3問、計5問・9答案要素と制作前検証 `9 / 9 PASS` を変更せず、解説source、解説PDF、練習問題sourceまで完成した。

次はTopic 14の練習PDF。

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

R8一次「機械」にはTopic 14の走行抵抗・必要けん引力・機械出力接続を直接測る固定対象を確認できなかったため、件数合わせでは採用していない。列車の走行抵抗式・勾配抵抗式そのものを直接問う第二種問題も固定対象として確認できていないため、「過去問で直接問われた」とは扱わない。SPEC必須の列車側力学を、確認できた `P=Tω`、負荷トルク・慣性トルク、始動トルク等の二種試験論点へ接続する。

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
- 未確認300系実車値の真値化: `0件`

教材用仮定モデル:
- `m=m_eq=4.00×10^5 kg`
- `R_run(v)=25000+80v+6v^2 [N]`、`v [m/s]`
- 300系実車値ではないことを本文で明示

## Topic 14 解説PDF
- path: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_explanation.pdf`
- QA: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_explanation_pdf_qa.md`
- 判定: `PASS / EXPLANATION_PDF_COMPLETE`
- A4縦3ページ
- 180 dpi表示QA: `3 / 3 PASS`
- 文字抽出QA: `PASS`
- 文字欠落・黒四角・重なり・クリップ: `0件`
- 固定5過去問・9答案要素接続: `9 / 9 PASS`
- 3段階例題: `3 / 3 PASS`
- SPEC指定8項目: `8 / 8 PASS`
- SPEC指定4可視化: `4 / 4 PASS`
- 4可視化共通仮定式系: `PASS`
- 加速曲線: 前進オイラー法 `Δt=1 s` をPDF内に明記
- 教材用仮定値表記: `PASS / 300系実車値ではないことを明記`
- PDF SHA-256: `32d691584b5d898b80389f20810ba2e3a22d9825d7b58502e9af9dd355c4a180`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`

## Topic 14 練習問題source
- path: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_practice_source.md`
- 判定: `PASS / PRACTICE_SOURCE_COMPLETE`
- 一次試験型: `8問`、全問五肢択一
- 二次試験型: `4問`、途中式・前提・単位・理由を含む
- 合計: `12問`
- 固定5過去問・9答案要素接続: `9 / 9 PASS`
- 数値・論理再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- SPEC指定8項目: `8 / 8 covered`
- SPEC指定4可視化の式系・条件との整合: `4 / 4 PASS`
- 4可視化共通仮定式系の変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 13再展開: `0件`
- Topic 12のPWM/VVVF/V/f・滑り制御再展開: `0件`
- SPEC外追加: `0件`
- 未確認300系実車値の真値化: `0件`

練習問題の列車側数値は解説sourceと同じ教材用仮定モデルを使用した。固定R7二次への接続では同期速度・滑りの数値処理だけを扱い、滑り制御方式は追加していない。

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
- Topic 12のPWM/VVVF/V/f、滑り制御等は固定過去問と `P=Tω` 接続に必要な範囲以上へ戻らない
- 粘着限界、曲線抵抗、トンネル抵抗、台車・歯車設計、列車運行計画は追加しない
- 走行抵抗の内訳・経験式・係数は根拠のある範囲を超えて追加しない
- 未確認の300系質量・走行抵抗係数・伝達効率を実車値として追加しない

## 次の正確な開始点
固定EXAM_ALIGNMENT、解説source、解説PDF、練習問題sourceは完成。次はTopic 14の練習PDFを作る。一次8問＋二次4問を完全解説付きで収録し、A4表示・文字抽出・数値整合・固定5過去問9答案要素接続をQAする。固定5過去問・9答案要素、SPEC指定8項目・4可視化条件、教材用仮定式系を変更しない。
