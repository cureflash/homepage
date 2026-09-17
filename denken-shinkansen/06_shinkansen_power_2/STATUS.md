# STATUS

updated: 2026-09-17
series: `06_shinkansen_power_2`
active_topic: `11`
theme: 新幹線が移動すると電圧はどう変わる？
current_status: `topic_11_independent_reanswer_complete`
completed_topics: `10 / 22`

## Topic 11 current result

制作前EXAM_ALIGNMENTと制作前独立再解答を完了した。

正式品質ゲート:
- 平成30年度 第二種一次「電力」問7 — `5 / 5 PASS`
- 平成27年度 第二種二次「電力・管理」問3 — `4 / 4 PASS`
- 平成27年度 第二種二次「電力・管理」問4 — `5 / 5 PASS`
- 平成26年度 第二種二次「電力・管理」問4 — `3 / 3 PASS`
- 一次1問＋二次3問、計 `4 / 4問・17 / 17答案要素 PASS`

独立再解答候補をcommit `b4e1714be95ead9e4b736965834fa4550c40cdcf` で公式解答照合前に固定し、その後に公式解答・標準解答と照合した。

原則5問に対し、Topic 11固定範囲だけで完答できる5問目は確認できなかったため、件数合わせを行っていない。

範囲監査:
- Topic 11固定範囲＋既習Topic 10だけで到達: `17 / 17`
- 教材外補完: `0件`
- Topic 12以降の先取り: `0件`
- 未確認実設備値依存: `0件`
- 仕様追加: `0件`

SPEC固定範囲:
- 移動負荷
- 電圧降下
- 電力損失
- 複素電力
- 力率
- 送受電端電圧
- 列車位置を連続変化させ、パンタグラフ電圧・線路電流・有効電力損失・無効電力を計算・グラフ化

## Gate checklist

- [x] Topic 01 completed
- [x] Topic 02 completed
- [x] Topic 03 completed
- [x] Topic 04 completed
- [x] Topic 05 completed
- [x] Topic 06 completed
- [x] Topic 07 completed
- [x] Topic 08 completed
- [x] Topic 09 completed
- [x] Topic 10 completed
- [ ] Topic 11 — EXAM_ALIGNMENT + 制作前独立再解答 complete

## next_start

Topic 11の固定4問・17答案要素を本文節へ明示マッピングしながら、解説本文と3段階例題を制作する。SPECにない給電トポロジーや実設備値を推測で追加せず、固定範囲だけで進める。