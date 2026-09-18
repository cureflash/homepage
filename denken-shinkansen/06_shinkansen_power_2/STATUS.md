# STATUS

updated: 2026-09-18
series: `06_shinkansen_power_2`
active_topic: `13`
theme: 単相の新幹線負荷は三相系統を乱さない？
current_status: `topic_13_preproduction_exam_alignment_complete`
completed_topics: `12 / 22`

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

## Topic 13 progress

制作前EXAM_ALIGNMENT完了。

正式品質ゲート:
- 平成28年度 第二種一次「法規」問6 — 三相不平衡、交流式電気鉄道、逆相電流、同期機への影響、不平衡対策 — `5答案要素`
- 平成23年度 第二種二次「電力・管理」問4 — 異容量V結線、三相平衡負荷＋単相負荷、フェーザ合成、設備利用率 — `3答案要素`
- 合計: 一次1問＋二次1問、`2問 / 8答案要素`

原則5問未満だが、固定範囲外の故障計算・配電方式・保護を混ぜて件数を水増ししない。平成16年度一次「電力」問2と平成10年度一次「電力」問6(B)は関連履歴を確認したが、現行公式アーカイブ外で公式問題・公式解答を再確認できないため正式ゲートには数えない。

source:
- `topics/13_three_phase_unbalance/13_three_phase_unbalance.md`

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
- [ ] Topic 13 — production-pre EXAM_ALIGNMENT complete; independent re-answer pending

## next_start

Topic 13の正式2問8答案要素を、保存済み正答を先に見ずに制作前独立再解答する。固定範囲外の故障計算等で補完せず、不足した中間知識だけを教材要件として記録する。