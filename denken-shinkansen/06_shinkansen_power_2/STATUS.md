# STATUS

updated: 2026-09-14
series: `06_shinkansen_power_2`
active_topic: `04`
theme: むつの原子炉を積んだ原子力新幹線を東京から佐世保まで走らせる
current_status: `topic_04_preproduction_independent_verification_complete`
completed_topics: `3 / 22`

## Topic 04 current result

制作前独立検証完了。

正式選定5問:
- R7 二種一次「電力」問5
- H22 二種一次「電力」問1
- R3 二種一次「電力」問5
- R1 二種二次「電力・管理」問1
- R3 二種二次「電力・管理」問6

独立検証:
- 一次3問＋二次2問、計 `5 / 5 PASS`
- R7一次問5: エントロピー、熱量、潜熱、過熱蒸気、臨界点を独立解答し全一致
- H22一次問1: ランキンサイクル、入口圧力、湿り度、抽気、給水を独立解答し全一致
- R3一次問5: 安全停止、保護・制御回路、継続時間、ディーゼル発電機、密封油ポンプを独立解答し全一致
- R1二次問1: ターニングギヤ電動機・発電機（水素）密封油ポンプ電動機と継続運転理由が標準解答と一致
- R3二次問6: 速度調定率 `3.0 %`、負荷30 MW減少時 `50.25 Hz / A 80 MW / B 70 MW` で標準解答と一致
- 固定範囲外知識による補完: `0件`
- 正式選定差し替え: 不要
- SPEC外追加: `0件`
- 「むつ」未確認実値の追加: `0件`

source:
`topics/04_nuclear_power/04_nuclear_power.md`

## Gate checklist

- [x] Topic 01 completed
- [x] Topic 02 completed
- [x] Topic 03 completed
- [x] Topic 04 制作前EXAM_ALIGNMENT
- [x] Topic 04 制作前独立検証
- [ ] Topic 04 解説本文＋3段階例題

## next_start

Topic 04 の解説本文＋3段階例題を制作する。固定済みEXAM_ALIGNMENTの5問が解ける粒度を満たし、`SPEC.md` の固定範囲を越えない。本文制作時に使用する「むつ」の原子炉形式・熱出力・蒸気条件・主機タービン仕様等はJAEA等の一次資料で再確認し、未確認値は推測しない。
