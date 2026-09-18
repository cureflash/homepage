# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-19

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: `18 / 22`
- current_status: `topic_19_independent_reanswer_checked / NEEDS_REVISION`
- last_completed_topic: `18 速度指令を変えたら何秒で追従する？`
- active_topic: `19 PIDで新幹線の速度を制御する`
- next_start: H25 一次 機械 問6 (2) の解答群記号転記ミスを修正し、独立再解答記録QAを再実施

## 完了テーマ
- [x] Topic 01〜17 最終QA `PASS / completed`
- [x] Topic 18 最終QA `PASS / topic_18_final_qa_pass / completed`
- [ ] Topic 19 `IN_PROGRESS` — 制作前EXAM_ALIGNMENT `PASS`、解説source `PASS`、解説PDF＋QA `PASS`、練習source `PASS`、練習PDF＋QA `PASS`、解説画像PowerPoint＋QA `PASS`、独立再解答前ゲート `BLIND_REANSWER_READY`、完成後独立再解答公式照合 `11 / 12 PASS / NEEDS_REVISION`

仕様authorityは `denken-shinkansen/MASTER_SPEC.md`、`denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`。仕様追加はしない。

## Topic 18 最終状態
- 固定EXAM_ALIGNMENT: 一次1問＋二次4問、計5問・12答案要素
- 完成後独立再解答: `12 / 12 PASS`
- 教材外知識補完: `0件`
- 解説PDF・練習PDF・PowerPoint QA: `PASS`
- 仕様境界・進捗記録整合: `PASS`
- 最終判定: `PASS / topic_18_final_qa_pass / completed`

## Topic 19 固定範囲
系列 `SPEC.md` の次だけを扱う。

- P・PI・PD・PID制御を速度応答で比較
- 比例制御、積分制御、微分制御、PI、PID
- 定常偏差、オーバーシュート、応答速度
- `Kp`、`Ki`、`Kd` を変化させた速度応答グラフ

境界:
- Topic 20の一般的な安定判別・ラウス・フルビッツ・根軌跡・周波数応答・ボード線図・余裕・発振判定を追加しない
- Topic 21の空転・再粘着制御を先取りしない
- 未確認の新幹線実車PIDゲイン・制御周期・制御則を実車値化しない

## Topic 19 固定EXAM_ALIGNMENT
一次1問＋二次4問、計5問・12答案要素。

- H25 一次 機械 問6 (2) — 1答案要素
- R07 二次 機械・制御 問4 (1),(2),(3) — 3答案要素
- H30 二次 機械・制御 問4 (1) — 2答案要素
- H23 二次 機械・制御 問4 (4) — 4答案要素
- R02 二次 機械・制御 問4 (1),(2) — 2答案要素

制作前EXAM_ALIGNMENT: `PASS / topic_19_exam_alignment_complete`。

## Topic 19 既存成果物QA
成果物:
- `topics/19_pid_speed_control/19_pid_speed_control.md`
- `topics/19_pid_speed_control/19_pid_speed_control_explanation.pdf`
- `topics/19_pid_speed_control/19_pid_speed_control_explanation_pdf_qa.md`
- `topics/19_pid_speed_control/19_pid_speed_control_practice.md`
- `topics/19_pid_speed_control/19_pid_speed_control_practice.pdf`
- `topics/19_pid_speed_control/19_pid_speed_control_practice_pdf_qa.md`
- `topics/19_pid_speed_control/19_pid_speed_control_images.pptx`
- `topics/19_pid_speed_control/19_pid_speed_control_powerpoint_qa.md`
- `topics/19_pid_speed_control/19_pid_speed_control_blind_reanswer_gate.md`

QA:
- 解説PDF表示: `6 / 6 PASS`
- 練習PDF表示: `15 / 15 PASS`
- PowerPoint表示: `4 / 4 PASS`
- 一次練習正答一意性: `10 / 10 PASS`
- 練習全15問の独立再計算・論理確認: `15 / 15 PASS`
- 固定5問・12答案要素の教材節マッピング: `12 / 12 COVERED`
- Topic 20/21先取り: `0件`
- 未確認実車PID値の実車値化: `0件`

## Topic 19 完成後独立再解答
成果物:
- `topics/19_pid_speed_control/19_pid_speed_control_independent_reanswer.md`

手順:
1. 完成教材だけで固定5問・12答案要素を再解答
2. 公式正答・標準解答を開く前に答案をGitHubへ固定: commit `f6c4c162d94c1c38176be61dc958f069abddea99`
3. 固定後に電気技術者試験センター公式正答・標準解答と照合

照合結果:
- R07 二次 問4 (1),(2),(3): `3 / 3 PASS`
- H30 二次 問4 (1): `2 / 2 PASS`
- H23 二次 問4 (4): `4 / 4 PASS`
- R02 二次 問4 (1),(2): `2 / 2 PASS`
- H25 一次 問6 (2): 式 `Ti=K1/K2` は公式と一致したが、解答群記号を「ヲ」と誤転記。公式正答は「ワ」: `FAIL`

集計:
- 公式一致: `11 / 12 PASS`
- 教材外補完: `0件`
- 教材の式・解法不足によるFAIL: `0件`
- FAIL原因: 解答群記号転記ミス1件
- 判定: `NEEDS_REVISION / topic_19_independent_reanswer_checked`

## 今回進めた内容
Topic 19の完成後独立再解答を実施した。答案を公式照合前にGitHubへ固定した後、公式正答・標準解答と照合。12答案要素中11要素は一致し、H25一次機械問6(2)だけ、導出した `Ti=K1/K2` は正しかったが解答群記号を誤転記したためFAILとした。完成数は `18 / 22` のまま。

## 次工程
H25 一次 機械 問6 (2) の解答群記号転記ミスを修正し、独立再解答記録QAを再実施する。