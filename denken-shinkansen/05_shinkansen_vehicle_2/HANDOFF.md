# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜25は最終QAまで `PASS / completed`。完成数は `25 / 39`。

現在地は `topic_25_completed`。active topicは Topic 26 `E7・W7系 勾配条件を含む総合走行解析`。

## 今回のreconcileと進行

最新main、系列 `STATUS.md` / `HANDOFF.md`、上位仕様、系列 `SPEC.md`、Topic 25全成果物、直近コミット、既存車両二種worker成果をreconcileした。並行workerが先に完成させたclean blind公式照合を正本として採用し、重複公式照合ファイルは削除した。そのうえで次の未完了工程だったTopic 25最終QAだけを実施した。

## Topic 25 解説PDF

- `PASS / EXPLANATION_PDF_CANONICAL_REPAIR_COMPLETE`
- canonical blob SHA: `7588e85204db180eee2bd5e2494708df4810276e`
- file size: `13,227 bytes`
- SHA-256: `7a4acfc30141e48e0469ce271aaa357f367f27e8030e1ca7b6adc1bbefb6156e`
- PDFium / Poppler: `3 / 3 PASS`
- 固定5問: `5 / 5 covered`
- 合計答案要素: `28 / 28 covered`
- SPEC必須10項目: `10 / 10 covered`
- 指定3可視化: `3 / 3 PASS`
- canonical artifact identity blocker: `RESOLVED`

## Topic 25 練習PDF

- `PASS / PRACTICE_PDF_COMPLETE`
- canonical blob SHA: `2dbb1439e2ee237065fce69e8ac11a9315c0335f`
- file size: `14,089 bytes`
- PDFium / Poppler: `5 / 5 PASS`
- 一次8問＋完全解説: `8 / 8`
- 二次4問＋完全解説: `4 / 4`
- 一次正答一意性: `8 / 8 PASS`
- 数値・論理独立再計算: `12 / 12 PASS`
- 固定答案要素接続: `28 / 28`

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
- 固定候補後編集: `0件`
- 不一致: `0件`
- exact blocker: `0件`

## Topic 25 最終QA

成果物:
- `topics/25_n700s_battery_self_propulsion_energy_design/25_n700s_battery_self_propulsion_energy_design_final_qa.md`

判定:
- `PASS / COMPLETED`
- 解説source/PDF: `PASS`
- 練習source/PDF: `PASS`
- PowerPoint: `PASS`
- 固定過去問: `5 / 5 PASS`
- 一次答案要素: `20 / 20 PASS`
- 二次答案要素: `8 / 8 PASS`
- 合計答案要素: `28 / 28 PASS`
- SPEC必須10項目: `10 / 10 PASS`
- SPEC指定3可視化: `3 / 3 PASS`
- exact blocker: `0件`

## 固定境界

- 固定EXAM_ALIGNMENT変更: `0件`
- N700S実車接続は東芝一次メーカー資料で確認済みのSCiB採用・バッテリー自走共同開発まで
- 未確認の電池電圧、Ah、Wh、セル数、直並列数、Cレート、実放電電流、各効率の真値化: `0件`
- 速度条件―必要電力は教材用与件に限定、未指定走行抵抗モデル追加: `0件`
- Topic 21 H26二次 問1(4)の過去問固有丸め注記を維持。一般式 `P=Tω`, `ω=2πN/60` 変更: `0件`
- SPEC外主題追加: `0件`

## 次の安全な工程

Topic 26 `E7・W7系 勾配条件を含む総合走行解析` の制作前EXAM_ALIGNMENT。公式第二種一次・二次過去問を先に固定し、既存worker成果と重複しない範囲だけ新規調査する。仕様不整合または確定不能事項があればexact blockerを記録して停止する。
