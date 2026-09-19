# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-19

## 現在地
- Topic 01〜19: 最終QA `PASS / completed`
- 完成数: `19 / 22`
- active topic: `20 制御系はなぜ発振する？`
- current status: `topic_20_exam_alignment_complete / IN_PROGRESS`
- 次工程: Topic 20 解説source本文

仕様authorityは `denken-shinkansen/MASTER_SPEC.md`、`denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`。仕様追加はしない。

## Topic 19 固定範囲
- P・PI・PD・PID制御を速度応答で比較
- 比例制御、積分制御、微分制御、PI、PID
- 定常偏差、オーバーシュート、応答速度
- `Kp`、`Ki`、`Kd` を変化させた速度応答グラフ

境界:
- Topic 20の一般安定判別、ラウス・フルビッツ、根軌跡、周波数応答、ボード線図、ゲイン余裕、位相余裕、発振判定は追加しない
- Topic 21の空転・滑走・再粘着制御は先取りしない
- 未確認の新幹線実車PIDゲイン、制御周期、制御則は実車値化しない

## Topic 19 固定EXAM_ALIGNMENT
一次1問＋二次4問、計5問・12答案要素。

- H25 一次 機械 問6 (2) — 1答案要素
- R07 二次 機械・制御 問4 (1),(2),(3) — 3答案要素
- H30 二次 機械・制御 問4 (1) — 2答案要素
- H23 二次 機械・制御 問4 (4) — 4答案要素
- R02 二次 機械・制御 問4 (1),(2) — 2答案要素

制作前EXAM_ALIGNMENTは `PASS / topic_19_exam_alignment_complete`。

## 既存成果物
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

既存成果物QA:
- 解説PDF表示: `6 / 6 PASS`
- 練習PDF表示: `15 / 15 PASS`
- PowerPoint表示: `4 / 4 PASS`
- 一次練習正答一意性: `10 / 10 PASS`
- 全15問の独立再計算・論理確認: `15 / 15 PASS`
- 固定5問・12答案要素: `12 / 12 COVERED`
- Topic 20/21先取り、未確認実車PID値: `各0件`

## 完成後独立再解答
確認:
1. 公式照合前ロック commit `f6c4c162d94c1c38176be61dc958f069abddea99` に `Ti=K1/K2` の導出が存在する — `PASS`
2. 公式問題PDFで `K1/K2` の解答群記号が「ワ」である — `PASS`
3. 公式標準解答で H25 一次 機械 問6 (2) が「ワ」である — `PASS`
4. 訂正は解答群記号「ヲ」→「ワ」だけで、数式・導出・教材・固定EXAM_ALIGNMENT変更なし — `PASS`
5. 残り11答案要素の公式一致は変更なし — `PASS`
6. 教材外補完、Topic 20/21先取りなし — `PASS`

集計:
- ロック時点の公式一致: `11 / 12`（解答群記号誤転記1件）
- 訂正後の公式整合: `12 / 12 PASS`
- 独立再解答記録QA: `6 / 6 PASS`
- 教材外補完: `0件`
- 教材の式・解法不足: `0件`
- 判定: `PASS / topic_19_independent_reanswer_record_qa_pass`

## 最終QA
初回は技術・試験対応をPASSしたが、進捗記録整合 `2 / 4 PASS` で `NEEDS_REVISION / topic_19_final_qa_progress_records_unsynced`。

blocker修正:
- main source進捗同期 commit `31d82c6cb2f3f1a69ab0664624ae36faa691f28f`
- 練習source進捗同期 commit `927a61727266ea5e9f21da43050e55ad4d3e6f05`
- STATUS/HANDOFFも `topic_19_progress_records_synced / IN_PROGRESS` へ同期済み
- 技術本文、練習問題、正答、固定EXAM_ALIGNMENT、PDF/PPTX、独立再解答結果の変更なし

再実施結果:
1. 必須成果物 — `PASS`
2. 固定一次1問＋二次4問・12答案要素 — `12 / 12 PASS`
3. 完成後独立再解答・公式照合 — `PASS`
4. 解説PDF・練習PDF・PowerPoint QA — `PASS`
5. Topic 20/21先取り、未確認実車PID値 — `0件 / PASS`
6. 進捗記録整合 — `4 / 4 PASS`

最終判定: `PASS / topic_19_final_qa_pass`。

## completed状態同期
- 主source: `topic_19_final_qa_pass / completed`
- 練習source: 最終QA `PASS / completed`、次工程Topic 20制作前EXAM_ALIGNMENT
- STATUS/HANDOFF: 完成数 `19 / 22`、active Topic 20へ同期
- 固定一次1問＋二次4問・12答案要素: `12 / 12 PASS` 維持
- 技術本文、練習問題、正答、固定EXAM_ALIGNMENT、PDF/PPTX、独立再解答結果の変更なし
- 判定: `PASS / completed`

## Topic 20 固定範囲
- 特性方程式、極、零点
- ラウス・フルビッツ
- 根軌跡の概念
- 周波数応答、ボード線図
- ゲイン余裕、位相余裕
- 発振
- ボード線図、ゲイン変更時の応答、安定・不安定応答比較

境界:
- Topic 17〜19は必要な前提だけ再使用する
- Topic 21の空転・滑走・再粘着制御を先取りしない
- 未確認の新幹線実車ゲイン、安定余裕、制御周期、極配置等を実車値化しない
- 系列SPECにない高度な制御理論へ範囲を拡張しない

## Topic 20 固定EXAM_ALIGNMENT
一次2問＋二次3問、計5問・14答案要素。

- H23 一次 機械 問7 (1)〜(5) — 5答案要素
- H25 一次 機械 問6 (1),(3),(4),(5) — 4答案要素
- H30 二次 機械・制御 問4 (2) — 1答案要素
- R03 二次 機械・制御 問4 (3),(5) — 2答案要素
- R04 二次 機械・制御 問4 (1),(2) — 2答案要素

制作前品質ゲート:
- 公式過去問5問: `PASS`
- 一次・二次を含む: `PASS`
- 二次記述式を含む: `PASS`
- 固定14答案要素を教材節へ割当: `PASS`
- 参考教材2系統: `PASS`
- 制作前sourceへの個別正答保存: `0件 / PASS`
- Topic 21先取り: `0件 / PASS`
- 未確認実車制御値の実車値化: `0件 / PASS`
- 判定: `PASS / topic_20_exam_alignment_complete`

## Topic 20 成果物
- `topics/20_control_system_stability/20_control_system_stability.md`

## 今回完了した段階
Topic 20の制作前EXAM_ALIGNMENTを完了した。

- 一次2問＋二次3問、計5問・14答案要素を固定
- 特性方程式・極・ラウス・周波数応答・ボード線図・安定余裕・発振を教材節へマッピング
- 固定過去問の個別正答は未保存
- Topic 21先取り・未確認実車値化は各0件
- 完成数は `19 / 22` のまま

## 次に行うこと
Topic 20「制御系はなぜ発振する？」の解説source本文を作成する。