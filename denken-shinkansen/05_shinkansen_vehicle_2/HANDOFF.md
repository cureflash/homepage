# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜32は最終QAまで `PASS / completed`。完成数 `32 / 39`。

現在地は `topic_33_exam_alignment_complete`。active topicは `33 空調・電熱の熱収支`。

## Topic 32 完了記録

判定: `PASS / COMPLETED`

clean blind canonical:
- candidate: `topics/32_lighting_design/32_lighting_design_clean_blind_candidate.md`
- candidate blob SHA: `b153d374febdd737285e8a6db7722ce14bf019fb`
- lock commit: `30e30f320db482bf63c939ee2be3c6a00d8dbc42`
- final QA: `topics/32_lighting_design/32_lighting_design_clean_blind_qa.md`

最終QA:
- 固定5問 `5 / 5 PASS`
- 一次 `30 / 30 PASS`
- 二次 `対象外（公式「機械・制御」試験範囲に照明なし）`
- candidate固定後修正 `0件`
- SPEC固定9項目 `9 / 9 connected`
- 固定EXAM_ALIGNMENT変更 `0件`
- 未確認実車値の真値化 `0件`
- exact blocker `0件`

EXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPoint、完成後clean blind独立再解答まで全工程を通過済み。

## Topic 33 制作前EXAM_ALIGNMENT 完了

テーマ: `空調・電熱の熱収支`

canonical:
- source: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance.md`
- QA: `topics/33_hvac_thermal_balance/33_hvac_thermal_balance_exam_alignment_qa.md`

系列SPEC固定項目:
- 熱量
- 熱収支
- COP
- 消費電力
- 外気負荷
- 車内負荷
- 効率

固定ゲート:
- R8一次「機械」問6: `5 / 5 PASS`
- R3一次「機械」問7: `5 / 5 PASS`
- R1一次「機械」問7の(1)ヒートポンプ行: `2 / 2 PASS`
- H30一次「機械」問4: `5 / 5 PASS`
- H27一次「機械」問4: `5 / 5 PASS`
- 一次合計: `22 / 22 PASS`
- 二次: `対象外（公式「機械・制御」試験範囲に電熱なし）`
- SPEC固定7項目: `7 / 7 mapped`
- 固定問題の件数合わせ採用: `0件`
- 二次問題の件数合わせ採用: `0件`
- 未確認実車値の真値化: `0件`
- exact blocker: `0件`

二次対象外は未調査ではない。電気技術者試験センター公式試験概要で一次「機械」に「電熱」が含まれる一方、二次「機械・制御」は「電気機器、パワーエレクトロニクス、自動制御及びメカトロニクス」であり、Topic 33の固定論点である電熱を含まないため、件数合わせ採用を行っていない。

## 次工程 — Topic 33 解説source

fresh workerで最新main、上位仕様、系列SPEC、`STATUS.md` / `HANDOFF.md`、Topic 33固定EXAM_ALIGNMENTをreconcileしてから開始する。

品質ゲート:
- 固定5問・22答案要素を変更しない。
- SPEC固定7項目をすべて本文へ接続する。
- 熱量、熱平衡、伝導・対流・放射、ヒートポンプ熱収支、COP、消費電力、外気負荷、車内負荷、効率の接続を明示する。
- COPとエネルギー変換効率を混同しない。
- 外気負荷・車内負荷に未確認の実車換気量、乗客発熱、機器発熱を置かない。
- 実車の空調方式、冷媒、能力、消費電力、COP、熱負荷を一次資料なしに真値化しない。
- 最低3段階例題を作る。
- 固定EXAM_ALIGNMENTは差し替えない。

## Topic 21 固定境界

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有の丸め差として診断済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
