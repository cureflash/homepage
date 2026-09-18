# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-19

## 現在地
- Topic 01〜18: 最終QA `PASS / completed`
- 完成数: `18 / 22`
- active topic: `19 PIDで新幹線の速度を制御する`
- current status: `topic_19_powerpoint_complete / IN_PROGRESS`
- 次工程: Topic 19 独立再解答前ゲート

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
Topic 19解説画像PowerPoint＋QAまで完成した。

成果物:
- `topics/19_pid_speed_control/19_pid_speed_control.md`
- `topics/19_pid_speed_control/19_pid_speed_control_explanation.pdf`
- `topics/19_pid_speed_control/19_pid_speed_control_explanation_pdf_qa.md`
- `topics/19_pid_speed_control/19_pid_speed_control_practice.md`
- `topics/19_pid_speed_control/19_pid_speed_control_practice.pdf`
- `topics/19_pid_speed_control/19_pid_speed_control_practice_pdf_qa.md`
- `topics/19_pid_speed_control/19_pid_speed_control_images.pptx`
- `topics/19_pid_speed_control/19_pid_speed_control_powerpoint_qa.md`

練習source/PDF QA:
- 一次試験型10問＋二次試験型5問、計15問
- 一次正答一意性: `10 / 10 PASS`
- 全15問の独立再計算・論理確認: `15 / 15 PASS`
- 固定5問・12答案要素: `12 / 12 COVERED`
- 練習PDF 15ページ表示・文字抽出: `PASS`
- Topic 20/21先取り、未確認実車PID値、固定問題個別正答保存: `各0件`

PowerPoint QA:
- 16:9・4枚
- 1枚目: P・I・D各動作、P・PI・PD・PID、係数変換
- 2枚目: 偏差伝達関数、最終値の定理、ステップ／ランプ定常偏差
- 3枚目: 教材用 `G(s)=1/(2s+1)` で `Kp`・`Ki`・`Kd` を一つずつ変えた速度応答3グラフ
- 4枚目: 本試験解法フローと固定5問・12答案要素対応
- LibreOffice PDF変換・120 dpi表示: `4 / 4 PASS`
- 文字・数式・図・グラフの欠落、重なり、切れ: `0件`
- PDF文字抽出: `PASS`
- PPTX ZIP整合性: `PASS`
- 固定5問・12答案要素: `12 / 12 COVERED`
- Topic 20/21先取り、未確認実車PID値、固定問題個別正答保存: `各0件`
- PPTX Git blob: `f30c3f6aa908052d605aa205ce06516afe00fe8c`
- 判定: `PASS / topic_19_powerpoint_complete / IN_PROGRESS`

## GitHub反映
- 解説source/PDF/QA: 反映済み
- 練習source/PDF/QA: 反映済み
- 解説画像PowerPoint: `topics/19_pid_speed_control/19_pid_speed_control_images.pptx`
- PowerPoint QA: `topics/19_pid_speed_control/19_pid_speed_control_powerpoint_qa.md`
- STATUS/HANDOFF: `topic_19_powerpoint_complete / IN_PROGRESS` へ同期

## 次に行うこと
固定5問・12答案要素と完成教材を変更せず、Topic 19の独立再解答前ゲートを実施する。公式正答・標準解答・完成済み個別解答を事前保存せず、問題だけを再取得して独立再解答へ進む準備を確認する。