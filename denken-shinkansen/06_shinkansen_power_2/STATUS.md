# STATUS

updated: 2026-09-18
series: `06_shinkansen_power_2`
active_topic: `13`
theme: 単相の新幹線負荷は三相系統を乱さない？
current_status: `topic_13_preproduction_reanswer_complete_with_gap`
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

制作前EXAM_ALIGNMENTと制作前blind独立再解答まで完了。

正式品質ゲート:
- 平成28年度 第二種一次「法規」問6 — `5答案要素`
- 平成23年度 第二種二次「電力・管理」問4 — `3答案要素`
- 合計: 一次1問＋二次1問、`2問 / 8答案要素`

制作前blind独立再解答:
- H28一次 法規 問6: `5 / 5 PASS`
- H23二次 電力・管理 問4: `1 / 3 PASS`
- 合計: `6 / 8 PASS`

H23二次問4の不足:
- 二つの単相負荷を各変圧器へ独立に加えるモデルとして扱い、(2)単相負荷合計と(3)利用率を誤った。
- 教材本文では、二つの単相負荷が同一のときの回路電流、30 kVA側は三相負荷電流のみ、50 kVA側は三相負荷電流＋単相負荷電流となるフェーザ関係を説明する。
- `P1,max = 50 - 30 cos30° = 24.02 kW` と利用率 `94.97 -> 95.0 %` へ途中式から到達できる説明が必要。

この `6 / 8` は制作前ベースラインであり、完成判定ではない。完成後blind独立再解答では `8 / 8 PASS` が必要。

原則5問未満だが、固定範囲外の故障計算・配電方式・保護を混ぜて件数を水増ししない。正式問題の追加はしない。

source:
- `topics/13_three_phase_unbalance/13_three_phase_unbalance.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_preproduction_blind_reanswer_20260918.md`

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
- [ ] Topic 13 — production-pre EXAM_ALIGNMENT + blind re-answer complete; explanation source pending

## next_start

Topic 13の解説source本文を制作する。既存SPEC範囲を増やさず、制作前再解答で不足したH23二次問4の回路電流・フェーザ合成・容量制約を必須中間説明として組み込む。Topic 14以降・Topic 16故障計算は先取りしない。