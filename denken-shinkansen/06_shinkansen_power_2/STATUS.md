# STATUS

updated: 2026-09-20
series: `06_shinkansen_power_2`
active_topic: `17`
theme: 事故区間だけをどう一瞬で切る？
current_status: `topic_17_preproduction_blind_mismatch`
completed_topics: `16 / 22`

## Completed through Topic 16

Topic 01〜16は `completed`。

Topic 16最終品質ゲート:
- 固定EXAM_ALIGNMENT: 一次2問＋二次3問、計5問・23答案要素、変更0件
- 制作前blind: `23 / 23 PASS`
- 補正後完成後blind clean rerun: `23 / 23 PASS`
- 公式標準解答照合: `23 / 23一致`
- 解説PDF current-artifact QA: `PASS`
- 練習PDF current-artifact identity: `PASS`
- PowerPoint current exact blob: `4aee9bedf079ed9a44fe789562e2192fc00728f3` / `38,384 bytes` / structure+LibreOffice render `PASS`
- Webカタログ: `PASS`
- 最終QA: `PASS / topic_16_final_qa_pass`

## Topic 17 current stage

制作前EXAM_ALIGNMENTは固定済み。制作前blind独立再解答を実施したが `24 / 26 PASS` で品質ゲート未通過。

固定公式過去問:
- 一次: 令和4年度「電力」問3、平成29年度「電力」問3、平成25年度「電力」問4
- 二次: 令和2年度「電力・管理」問2、平成25年度「電力・管理」問3

固定品質ゲート:
- 一次: `3問 / 15答案要素` -> `15 / 15 PASS`
- 二次: `2問 / 11答案要素` -> `9 / 11 PASS`
- 合計: `5問 / 26答案要素` -> `24 / 26 PASS`
- SPEC固定11項目マッピング: `11 / 11`

blind記録:
- `topics/17_protection_coordination/17_protection_coordination_preproduction_blind_20260920.md`

exact blocker:
1. R2二次「電力・管理」問2の保護リレー信頼性条件で、公式標準解答が明示する「故障率が低いこと」をblind候補が欠いた。
2. 同問の77/66 kV系統用遮断器の定格遮断時間をblind候補が `3サイクル` のみとし、公式標準解答の `5サイクル及び3サイクル` を満たさなかった。

公式標準解答を既に照合したrunで同一答案をclean blind扱いにはしない。教材本文、PDF、PowerPointは未着手のまま止める。

## 品質境界

- Topic 16固定5問・23答案要素変更: `0件`
- Topic 17固定EXAM_ALIGNMENT変更: `0件`
- Topic 18以降先取り: `0件`
- 未確認実設備値の真値化: `0件`
- 仕様追加: `0件`
- Topic 17教材本文着手: `0件`

## next_start

Topic 17固定5問・26答案要素について、公式標準解答・保存済み候補答案を入力から除外したclean blind独立再解答を行う。`26 / 26 PASS` を確認するまで教材本文・解説PDF・練習PDF・PowerPointへ進まない。
