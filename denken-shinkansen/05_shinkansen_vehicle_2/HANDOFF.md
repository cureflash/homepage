# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-17

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜13は最終QAまで `PASS / completed`。完成数は `13 / 39`。

現在地は `topic_14_blind_reanswer_blocked`。Topic 14 `300系⑤ 走行抵抗と必要けん引力` は、固定一次2問＋二次3問、計5問・9答案要素、解説source、解説PDF、練習問題source、練習PDF、解説画像PowerPoint、blind再解答前ゲートまで完成済み。固定EXAM_ALIGNMENTと既存成果物は変更していない。

完成後blind再解答は公式解答・標準解答を開く前に答案をGitHubへ固定し、その後に公式照合した。9答案要素のうち8要素は公式と一致したが、H26二次「機械・制御」問1 (4) だけ公式標準解答内部に数値不整合があるため、推測でPASSにせず停止している。

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
- 参考教材2系統以上: `PASS`
- R8一次「機械」直近年度確認: `PASS / 固定対象なし`
- SPEC指定8項目: `8 / 8 aligned`
- SPEC指定4可視化: `4 / 4 aligned`
- 固定EXAM_ALIGNMENT変更: `0件`

R8一次「機械」にはTopic 14の走行抵抗・必要けん引力・機械出力接続を直接測る固定対象を確認できなかったため採用していない。列車の走行抵抗式・勾配抵抗式そのものを直接問う第二種問題も固定対象として確認できていないため、「過去問で直接問われた」とは扱わない。SPEC必須の列車側力学を `P=Tω`、負荷トルク・慣性トルク、始動トルク等の二種試験論点へ接続している。

## 完成済み成果物
- 解説source: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force.md` — `PASS / EXPLANATION_SOURCE_COMPLETE`
- 解説PDF: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_explanation.pdf` — `PASS / EXPLANATION_PDF_COMPLETE`
- 解説PDF QA: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_explanation_pdf_qa.md`
- 練習問題source: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_practice_source.md` — `PASS / PRACTICE_SOURCE_COMPLETE`
- 練習PDF: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_practice.pdf` — `PASS / PRACTICE_PDF_COMPLETE`
- 練習PDF QA: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_practice_qa.md`
- 解説画像PowerPoint: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_images.pptx` — `PASS / POWERPOINT_COMPLETE`
- PowerPoint QA: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_powerpoint_qa.md`
- blind再解答前ゲート: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_blind_reanswer_gate.md` — `PASS / BLIND_REANSWER_READY`

教材用仮定モデル:
- `m=m_eq=4.00×10^5 kg`
- `R_run(v)=25000+80v+6v^2 [N]`、`v [m/s]`
- 300系実車値ではないことを明示済み

既存成果物の主要QA:
- 解説本文3段階例題: `3 / 3 PASS`
- 固定5過去問・9答案要素の本文接続: `9 / 9 PASS`
- 練習問題: 一次8問＋二次4問、計12問、数値・論理 `12 / 12 PASS`
- 解説PDF表示QA: `3 / 3 PASS`
- 練習PDF表示QA: `2 / 2 PASS`
- PowerPoint: 16:9・4枚、SPEC指定4可視化 `4 / 4 PASS`、表示QA `4 / 4 PASS`
- 未確認300系実車値の真値化: `0件`
- SPEC外追加: `0件`

## Topic 14 完成後blind再解答
blind答案:
`topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_blind_reanswer.md`

QA:
`topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_blind_reanswer_qa.md`

実施条件:
- 公式解答・標準解答を開く前にblind答案をGitHubへ固定: `PASS`
- 完成教材と公式問題文で固定5問を再解答: `5 / 5`
- 固定9答案要素の公式照合確定PASS: `8 / 9`
- 教材外知識による補完: `0件`

確定PASS:
- R7 二次 機械・制御 問2 (1),(3): `4 / 4`
- R1 二次 機械・制御 問1 (4): `1 / 1`
- H26 一次 機械 問5 (1): `1 / 1`
- H25 一次 機械 問3 (1),(2): `2 / 2`

## exact blocker
H26二次「機械・制御」問1 (4)。

問題データと教材・公式掲載式からのblind再計算:
- `I2'=22.430886... A`
- `TL=48.0468... N·m`
- 問題冊子の3桁指定に従うと `48.0 N·m`

公式標準解答:
- `I2'=22.430 A` と表示
- 最終計算を `48.067 -> 48.1 N·m` と表示

公式標準解答に表示された `I2'=22.430 A` を公式掲載式へそのまま再代入しても、

`(3×2)/(2π×50) × 22.430^2 × (0.15/0.03) = 48.04298... N·m`

となり、3桁では `48.0 N·m`。したがって公式標準解答の最終数値 `48.1 N·m` と内部整合しない。

`MASTER_SPEC.md` / `EXAM_ALIGNMENT_SPEC.md` は公式解答との一致を品質ゲートに要求しているが、このような公式側の算術差に対する許容差・例外規定はない。仕様を追加せず、Topic 14は `BLOCKED / OFFICIAL_NUMERIC_DISCREPANCY` とする。

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
H26二次「機械・制御」問1 (4) の公式標準解答最終値 `48.1 N·m` と独立再計算 `48.0 N·m` の不整合を品質ゲート上どう扱うかが確定するまで停止する。Topic 14を `completed` にせず、完成数は `13 / 39` のまま。Topic 15へ進めない。
