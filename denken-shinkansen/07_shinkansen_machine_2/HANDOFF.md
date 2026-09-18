# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-19

## 現在地
- Topic 01〜18: 最終QA `PASS / completed`
- 完成数: `18 / 22`
- active topic: `19 PIDで新幹線の速度を制御する`
- current status: `topic_19_blind_reanswer_ready / IN_PROGRESS`
- 次工程: Topic 19 完成後独立再解答

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

制作前EXAM_ALIGNMENTは `PASS / topic_19_exam_alignment_complete`。固定問題の個別正答記号・最終数値・完成済み式変形結果は保存していない。

## 今回完了した段階
Topic 19独立再解答前ゲートまで完了した。

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

既存成果物QA:
- 解説PDF表示: `6 / 6 PASS`
- 練習PDF表示: `15 / 15 PASS`
- PowerPoint表示: `4 / 4 PASS`
- 一次正答一意性: `10 / 10 PASS`
- 全15問の独立再計算・論理確認: `15 / 15 PASS`
- 固定5問・12答案要素: `12 / 12 COVERED`
- Topic 20/21先取り、未確認実車PID値、固定問題個別正答保存: `各0件`

独立再解答前ゲート:
- 固定一次1問＋二次4問・12答案要素を変更していない
- 公式正答記号・標準解答本文の事前保存: `0件`
- 完成済み固定過去問個別解答・完成済み導出結果の事前保存: `0件`
- 公式解答・標準解答の内容をゲート監査では開いていない
- 判定: `BLIND_REANSWER_READY / IN_PROGRESS`

## GitHub反映
- 解説source/PDF/QA: 反映済み
- 練習source/PDF/QA: 反映済み
- 解説画像PowerPoint/QA: 反映済み
- 独立再解答前ゲート: `topics/19_pid_speed_control/19_pid_speed_control_blind_reanswer_gate.md`
- STATUS/HANDOFF: `topic_19_blind_reanswer_ready / IN_PROGRESS` へ同期

## 次に行うこと
完成教材だけを使って固定5問・12答案要素を先に再解答し、答案を固定してから公式解答・標準解答と照合する。