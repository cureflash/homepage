# STATUS

updated: 2026-09-18
series: `06_shinkansen_power_2`
active_topic: `14`
theme: 新幹線の力率と電圧をどう維持する？
current_status: `topic_13_completed`
completed_topics: `13 / 22`

## Topic 12 final result

Topic 12「N700Sが何本も同時加速したら？」は最終QA再判定まで完了し、`PASS / completed`。

正式品質ゲート:
- 令和4年度 第二種二次「電力・管理」問6 — `8 / 8 PASS`
- 令和元年度 第二種二次「電力・管理」問2 — `6 / 6 PASS`
- 平成30年度 第二種一次「電力」問7 — `5 / 5 PASS`
- 平成29年度 第二種二次「電力・管理」問4 — `3 / 3 PASS`
- 平成23年度 第二種二次「電力・管理」問6 — `3 / 3 PASS`
- 合計: 一次1問＋二次4問、`5 / 5問・25 / 25答案要素 PASS`

完成後blind独立再解答:
- 一次: `5 / 5答案要素 PASS`
- 二次: `20 / 20答案要素 PASS`
- 合計: `5 / 5問・25 / 25答案要素 PASS`
- 制作前不足2要素: `2 / 2 改善確認`

成果物・QA:
- 解説PDF: `3 / 3` ページ表示PASS、3段階例題 `3 / 3 PASS`
- 練習: 15問、一次10＋二次5、数値・論理 `15 / 15 PASS`
- 練習PDF: `7 / 7` ページ表示PASS
- 計算プログラム: CSV `5 / 5`、高電圧側解 `5 / 5`、SVG `2 / 2`、複素KVL再代入PASS
- PowerPoint: `4 / 4` スライド表示PASS、SPEC固定8項目 `8 / 8`、指定2量 `2 / 2`
- 進捗記録整合: PASS
- Webカタログ登録: PASS

品質境界:
- 固定5問・25答案要素の変更: `0件`
- Topic 13以降の先取り: `0件`
- 教材外知識補完: `0件`
- 未確認N700S実設備値の真値使用: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`

source:
- `topics/12_multiple_train_load/12_multiple_train_load.md`
- `topics/12_multiple_train_load/12_multiple_train_load_final_qa.md`
- `topics/12_multiple_train_load/12_multiple_train_load_blind_reanswer_20260918.md`
- `qualifications/denken-shinkansen/catalog.json`

## Topic 13 final result

Topic 13「単相の新幹線負荷は三相系統を乱さない？」は、制作前EXAM_ALIGNMENT、制作前blind独立再解答、解説source/PDF、練習source/PDF、PowerPoint、各QA、完成後blind独立再解答、初回最終QA、進捗記録同期、最終QA再判定まで完了し、`PASS / completed`。

正式品質ゲート:
- 平成28年度 第二種一次「法規」問6 — `5 / 5答案要素 PASS`
- 平成23年度 第二種二次「電力・管理」問4 — `3 / 3答案要素 PASS`
- 合計: 一次1問＋二次1問、`2 / 2問・8 / 8答案要素 PASS`

原則5問未満だが、現行公式問題・公式解答を双方確認でき、Topic 13固定範囲だけで問題全体を扱える正式問題は2問。件数合わせのためTopic 16故障計算・配電方式・保護・法令詳細を追加していない。

制作前blind独立再解答:
- H28一次 法規 問6: `5 / 5 PASS`
- H23二次 電力・管理 問4: `1 / 3 PASS`
- 合計: `6 / 8 PASS`

完成後blind独立再解答:
- H28一次 法規 問6: `(ヌ, ハ, チ, イ, リ)`、`5 / 5 PASS`
- H23二次 電力・管理 問4: `52.0 kW / 24.0 kW / 95.0 %`、`3 / 3 PASS`
- 合計: `2 / 2問・8 / 8答案要素 PASS`
- 制作前不足2答案要素: `2 / 2 改善確認`
- 公式解答・標準解答は候補解固定後に照合。

成果物・QA:
- `13_three_phase_unbalance_explanation.pdf`: A4縦4ページ、200 dpi表示 `4 / 4 PASS`、文字抽出PASS、3段階例題 `3 / 3 PASS`。
- `13_three_phase_unbalance_practice.md`: 15問（一次10＋二次5）、正式8答案要素 `8 / 8` 接続。
- `13_three_phase_unbalance_practice.pdf`: A4縦10ページ、表示 `10 / 10 PASS`、文字抽出PASS、数値・論理 `15 / 15 PASS`、一次正答一意性 `10 / 10 PASS`。
- `13_three_phase_unbalance_images.pptx`: 16:9・4枚、表示 `4 / 4 PASS`、overflow 0、ZIP整合性PASS、SPEC固定8項目 `8 / 8`、正式8答案要素 `8 / 8`。
- `qualifications/denken-shinkansen/catalog.json`: Topic 13登録済み。

初回最終QAの4 blocker:
1. 主source旧進捗記録 — 解消。
2. 練習source旧進捗記録 — 解消。
3. PowerPoint QA旧次工程 — 解消。
4. Webカタログ未登録 — 解消。

最終QA再判定:
- 上位仕様: PASS
- 固定EXAM_ALIGNMENT: PASS
- 必須成果物: PASS
- 完成後blind: PASS
- PDF/PPTX・練習QA: PASS
- SPEC境界: PASS
- 進捗記録整合: PASS
- Web公開: PASS
- 判定: `PASS / completed`

品質境界:
- 正式過去問追加: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 14以降の先取り: `0件`
- Topic 16故障計算先取り: `0件`
- 未確認実設備値の真値使用: `0件`
- 教材外知識補完: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`

source:
- `topics/13_three_phase_unbalance/13_three_phase_unbalance.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_preproduction_blind_reanswer_20260918.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_explanation.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_explanation.pdf`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_explanation_pdf_qa.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_practice.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_practice.pdf`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_practice_pdf_qa.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_images.pptx`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_powerpoint_qa.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_blind_reanswer_20260918.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_final_qa.md`
- `qualifications/denken-shinkansen/catalog.json`

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
- [x] Topic 11 completed
- [x] Topic 12 completed
- [x] Topic 13 completed
- [ ] Topic 14 — preproduction EXAM_ALIGNMENT pending

## next_start

Topic 14「新幹線の力率と電圧をどう維持する？」の制作前EXAM_ALIGNMENTを行う。`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md` のTopic 14固定範囲だけを使い、公式過去問を一次・二次から直近年度優先で調査する。Topic 15以降を先取りしない。