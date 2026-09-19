# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-19

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: `19 / 22`
- current_status: `topic_19_final_qa_pass / completed`
- last_completed_topic: `19 PIDで新幹線の速度を制御する`
- active_topic: `20 制御系はなぜ発振する？`
- next_start: Topic 20 制作前EXAM_ALIGNMENT

## 完了テーマ
- [x] Topic 01〜17 最終QA `PASS / completed`
- [x] Topic 18 最終QA `PASS / topic_18_final_qa_pass / completed`
- [x] Topic 19 最終QA `PASS / topic_19_final_qa_pass / completed`

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
- `topics/19_pid_speed_control/19_pid_speed_control_independent_reanswer.md`
- `topics/19_pid_speed_control/19_pid_speed_control_final_qa.md`

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
手順:
1. 完成教材だけで固定5問・12答案要素を再解答
2. 公式正答・標準解答を開く前に答案をGitHubへ固定: commit `f6c4c162d94c1c38176be61dc958f069abddea99`
3. 固定後に電気技術者試験センター公式正答・標準解答と照合
4. H25 一次 機械 問6 (2) の解答群記号転記ミスだけを訂正し、記録QAを再実施

結果:
- R07 二次 問4 (1),(2),(3): `3 / 3 PASS`
- H30 二次 問4 (1): `2 / 2 PASS`
- H23 二次 問4 (4): `4 / 4 PASS`
- R02 二次 問4 (1),(2): `2 / 2 PASS`
- H25 一次 問6 (2): ロック時点で式 `Ti=K1/K2` を正しく導出。公式問題PDFでは `K1/K2` の解答群記号は「ワ」、公式標準解答も「ワ」。記録上の「ヲ」を「ワ」へ訂正: `PASS`

集計:
- ロック時点の公式一致: `11 / 12`（解答群記号誤転記1件）
- 訂正後の公式整合: `12 / 12 PASS`
- 独立再解答記録QA: `6 / 6 PASS`
- 教材外補完: `0件`
- Topic 20/21先取り: `0件`
- 教材の式・解法不足: `0件`
- 判定: `PASS / topic_19_independent_reanswer_record_qa_pass`

## Topic 19 最終QA
初回:
- 必須成果物: `PASS`
- 固定5問・12答案要素: `12 / 12 PASS`
- 独立再解答記録QA: `6 / 6 PASS`
- 解説PDF・練習PDF・PowerPoint QA: `PASS`
- 仕様境界: `PASS`
- 進捗記録整合: `2 / 4 PASS`
- blocker: main source `## 状態` と練習source `# 次工程` の進捗記録不整合
- 判定: `NEEDS_REVISION / topic_19_final_qa_progress_records_unsynced`

blocker修正:
- main source進捗同期 commit `31d82c6cb2f3f1a69ab0664624ae36faa691f28f`
- 練習source進捗同期 commit `927a61727266ea5e9f21da43050e55ad4d3e6f05`
- 技術本文、練習問題、固定EXAM_ALIGNMENT、PDF/PPTX、独立再解答結果: 変更なし

再実施:
- 必須成果物: `PASS`
- 固定5問・12答案要素: `12 / 12 PASS`
- 独立再解答記録QA: `6 / 6 PASS`
- 解説PDF・練習PDF・PowerPoint QA: `PASS`
- 仕様境界: `PASS`
- 進捗記録整合: `4 / 4 PASS`
- 最終判定: `PASS / topic_19_final_qa_pass`

## Topic 19 completed状態同期
- 主source: `topic_19_final_qa_pass / completed`
- 練習source: 最終QA `PASS / completed`、次工程Topic 20制作前EXAM_ALIGNMENT
- STATUS/HANDOFF: 完成数 `19 / 22`、active Topic 20へ同期
- 固定一次1問＋二次4問・12答案要素: `12 / 12 PASS` 維持
- 技術本文・練習問題・正答・固定EXAM_ALIGNMENT・PDF/PPTX・独立再解答結果: 変更なし
- 判定: `PASS / completed`

## 今回進めた内容
Topic 19を `completed` として確定し、主source・練習source・STATUS/HANDOFFの完了記録を同期した。技術・試験対応内容は変更していない。完成数は `19 / 22`。

## 次工程
Topic 20「制御系はなぜ発振する？」の制作前EXAM_ALIGNMENTを行う。