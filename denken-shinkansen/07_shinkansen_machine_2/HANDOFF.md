# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-19

## 現在地
- Topic 01〜18: 最終QA `PASS / completed`
- 完成数: `18 / 22`
- active topic: `19 PIDで新幹線の速度を制御する`
- current status: `topic_19_independent_reanswer_checked / NEEDS_REVISION`
- 次工程: H25 一次 機械 問6 (2) の解答群記号転記ミスを修正し、独立再解答記録QAを再実施

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

既存成果物QA:
- 解説PDF表示: `6 / 6 PASS`
- 練習PDF表示: `15 / 15 PASS`
- PowerPoint表示: `4 / 4 PASS`
- 一次練習正答一意性: `10 / 10 PASS`
- 全15問の独立再計算・論理確認: `15 / 15 PASS`
- 固定5問・12答案要素: `12 / 12 COVERED`
- Topic 20/21先取り、未確認実車PID値: `各0件`

## 今回完了した段階
Topic 19の完成後独立再解答を実施した。

手順:
1. 完成教材だけで固定5問・12答案要素を解答
2. 公式正答・標準解答を確認する前に答案をGitHubへ固定
   - commit: `f6c4c162d94c1c38176be61dc958f069abddea99`
3. 固定後に電気技術者試験センター公式正答・標準解答と照合

結果:
- R07 二次 問4 (1),(2),(3): `3 / 3 PASS`
- H30 二次 問4 (1): `2 / 2 PASS`
- H23 二次 問4 (4): `4 / 4 PASS`
- R02 二次 問4 (1),(2): `2 / 2 PASS`
- H25 一次 問6 (2): `FAIL`
  - 導出した `Ti=K1/K2` 自体は公式と一致
  - 固定答案で解答群記号を「ヲ」と誤転記
  - 公式正答の選択肢記号は「ワ」

集計:
- 公式一致: `11 / 12 PASS`
- 教材外補完: `0件`
- 教材の式・解法不足によるFAIL: `0件`
- FAIL原因: 解答群記号転記ミス1件
- 判定: `NEEDS_REVISION / IN_PROGRESS`

## GitHub反映
- 独立再解答答案ロック: `f6c4c162d94c1c38176be61dc958f069abddea99`
- 公式照合結果: `topics/19_pid_speed_control/19_pid_speed_control_independent_reanswer.md`
- STATUS/HANDOFF: `topic_19_independent_reanswer_checked / NEEDS_REVISION` へ同期

## 次に行うこと
H25 一次 機械 問6 (2) の解答群記号転記ミスを修正し、独立再解答記録QAを再実施する。