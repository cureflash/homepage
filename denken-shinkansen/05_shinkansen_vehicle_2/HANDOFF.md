# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜24は最終QAまで `PASS / completed`。完成数は `24 / 39`。

現在地は `topic_25_clean_blind_official_match_complete`。active topicは Topic 25 `N700S バッテリー自走のエネルギー設計`。

## 今回のreconcileと進行

最新main、系列 `STATUS.md` / `HANDOFF.md`、上位仕様、系列 `SPEC.md`、Topic 25全成果物と固定済みclean blind候補を照合した。固定候補を変更せず、次の未完了工程である公式解答・標準解答との照合だけを実施した。

## Topic 25 PowerPoint

- `PASS / POWERPOINT_COMPLETE`
- canonical blob SHA: `726da748b8ceb7c0d6cdee770daca7738fc1c202`
- 16:9 / `6 slides`
- file size: `258,876 bytes`
- SHA-256: `0d0998d38ab8e5075c86b9c6f8c993390d43f7d053c81b784373942c9419fbd7`
- ZIP integrity / python-pptx / geometry: `PASS`
- LibreOffice render: `6 / 6 PASS`
- 固定5問: `5 / 5 connected`
- 一次 `20 / 20`、二次 `8 / 8`、合計 `28 / 28 connected`
- SPEC必須10項目: `10 / 10 PASS`
- 指定3可視化: `3 / 3 PASS`

## Topic 25 clean blind候補

成果物:
- `topics/25_n700s_battery_self_propulsion_energy_design/25_n700s_battery_self_propulsion_energy_design_blind_reanswer_candidates_clean.md`

判定:
- `CANDIDATES_FIXED`
- 固定5問: `5 / 5 solved`
- 一次答案要素: `20 / 20 candidate fixed`
- 二次答案要素: `8 / 8 candidate fixed`
- 合計: `28 / 28 candidate fixed`
- 候補固定後編集: `0件`

## Topic 25 clean blind公式照合

成果物:
- `topics/25_n700s_battery_self_propulsion_energy_design/25_n700s_battery_self_propulsion_energy_design_clean_blind_official_match_qa.md`

判定:
- `PASS / CLEAN_BLIND_OFFICIAL_MATCH_COMPLETE`
- R8一次 問5: `5 / 5 PASS`
- R4一次 問6: `5 / 5 PASS`
- R2一次 問4: `5 / 5 PASS`
- R1一次 問4: `5 / 5 PASS`
- H23二次 問3: `8 / 8 PASS`
- 一次: `20 / 20 PASS`
- 二次: `8 / 8 PASS`
- 合計: `28 / 28 PASS`
- 固定5問: `5 / 5 PASS`
- 不一致: `0件`
- exact blocker: `0件`

## 固定境界

- 固定EXAM_ALIGNMENT変更: `0件`
- N700S実車接続は東芝一次メーカー資料で確認済みのSCiB採用・バッテリー自走共同開発まで
- 未確認の電池電圧、Ah、Wh、セル数、直並列数、Cレート、実放電電流、各効率の真値化: `0件`
- 速度条件―必要電力は教材用与件に限定、未指定走行抵抗モデル追加: `0件`
- Topic 21 H26二次 問1(4)の過去問固有丸め注記を維持。一般式 `P=Tω`, `ω=2πN/60` 変更: `0件`
- SPEC外主題追加: `0件`

## 次の安全な工程

Topic 25最終QA。解説source/PDF、練習source/PDF、PowerPoint、clean blind公式照合、固定EXAM_ALIGNMENT、SPEC境界を横断し、完成可否を判定する。最終QA PASSまでは完成数 `24 / 39` のまま。
