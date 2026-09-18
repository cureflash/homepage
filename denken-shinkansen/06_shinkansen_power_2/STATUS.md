# STATUS

updated: 2026-09-18
series: `06_shinkansen_power_2`
active_topic: `13`
theme: 単相の新幹線負荷は三相系統を乱さない？
current_status: `topic_13_explanation_source_complete`
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

制作前EXAM_ALIGNMENT、制作前blind独立再解答、解説source本文まで完了。

正式品質ゲート:
- 平成28年度 第二種一次「法規」問6 — `5答案要素`
- 平成23年度 第二種二次「電力・管理」問4 — `3答案要素`
- 合計: 一次1問＋二次1問、`2問 / 8答案要素`

制作前blind独立再解答:
- H28一次 法規 問6: `5 / 5 PASS`
- H23二次 電力・管理 問4: `1 / 3 PASS`
- 合計: `6 / 8 PASS`

解説source反映:
- 三相平衡・不平衡、正相・逆相・零相、`a` 演算子、対称座標変換、逆相電流、き電用変圧器による不平衡緩和を固定範囲内で説明。
- H28一次問6の5答案要素を本文へ `5 / 5` マッピング。
- H23二次問4の3答案要素を本文へ `3 / 3` マッピング。
- 正式2問8答案要素の説明箇所マッピング: `8 / 8`。
- 制作前不足2要素について、二つの単相負荷を同一とする最大条件、Ta/Tbの回路電流、フェーザ合成、`P1,max = Sb - Sa cos30°`、利用率までを説明し、教材上の改善箇所 `2 / 2` を反映。
- 3段階例題をsourceへ実装。数値は教材用仮定値とし、未確認実設備値を使用していない。

この `8 / 8` は教材内説明箇所の存在確認であり、完成後blind独立再解答のPASSではない。完成判定では固定2問8答案要素を教材のみで `8 / 8 PASS` する必要がある。

品質境界:
- 正式過去問追加: `0件`
- Topic 14以降の先取り: `0件`
- Topic 16故障計算先取り: `0件`
- 未確認実設備値の真値使用: `0件`
- 仕様追加: `0件`

source:
- `topics/13_three_phase_unbalance/13_three_phase_unbalance.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_preproduction_blind_reanswer_20260918.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_explanation.md`

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
- [ ] Topic 13 — production-pre EXAM_ALIGNMENT + blind re-answer + explanation source complete; explanation PDF pending

## next_start

Topic 13の解説PDFを制作し、表示・文字抽出・数式欠落・3段階例題の再計算QAを行う。固定2問8答案要素、SPEC境界、制作前不足2要素の改善説明を維持し、Topic 14以降・Topic 16故障計算は先取りしない。