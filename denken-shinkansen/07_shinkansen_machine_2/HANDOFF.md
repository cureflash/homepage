# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-19

## 現在地
- Topic 01〜18: 最終QA `PASS / completed`
- 完成数: `18 / 22`
- active topic: `19 PIDで新幹線の速度を制御する`
- current status: `topic_19_practice_pdf_complete / IN_PROGRESS`
- 次工程: Topic 19 解説画像PowerPoint source

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
Topic 19練習PDF＋QAまで完成した。

成果物:
- `topics/19_pid_speed_control/19_pid_speed_control.md`
- `topics/19_pid_speed_control/19_pid_speed_control_explanation.pdf`
- `topics/19_pid_speed_control/19_pid_speed_control_explanation_pdf_qa.md`
- `topics/19_pid_speed_control/19_pid_speed_control_practice.md`
- `topics/19_pid_speed_control/19_pid_speed_control_practice.pdf`
- `topics/19_pid_speed_control/19_pid_speed_control_practice_pdf_qa.md`

練習source構成:
- 一次試験型10問（全問五肢択一）
- 二次試験型5問（記述・式変形・検算付き）
- 合計15問

練習source QA:
- 一次正答一意性: `10 / 10 PASS`
- 全15問の独立再計算・論理確認: `15 / 15 PASS`
- 固定5問・12答案要素: `12 / 12 COVERED`
- P・I・D、PI・PD・PID、係数変換、偏差伝達関数、ステップ／ランプ定常偏差、応答速度、オーバーシュート比較: `PASS`
- `Kp`・`Ki`・`Kd` 一変数比較: `PASS`
- Topic 20先取り: `0件`
- Topic 21先取り: `0件`
- 未確認実車PID値: `0件`
- 固定問題の個別正答記号・最終数値・完成済み個別解答保存: `0件`
- 判定: `PASS / topic_19_practice_source_complete`

練習PDF QA:
- A4縦15ページ: `PASS`
- Poppler 200 dpiレンダリング: `15 / 15 PASS`
- 全ページ寸法: `1654x2339 px`
- ページ端接触・bboxはみ出し: `0件`
- 最小レンダリング余白: `56 px`
- 文字抽出: `PASS`（Unicode置換文字0件、`(cid:)` 0件）
- 固定5問・12答案要素: `12 / 12 COVERED`
- canonical source blob: `f1015f13e5deefcbd7e67fbd8d0891249d684333`
- PDF Git blob: `5983354776827cfb38889a944d1cbb4c6c269fbe`
- 判定: `PASS / topic_19_practice_pdf_complete / IN_PROGRESS`

## GitHub反映
- 解説source: 反映済み
- 解説PDF: Git blob `bbbe79949058c62725f644236b78f8c961365291`
- 解説PDF QA: `PASS / topic_19_explanation_pdf_complete`
- 練習source: `topics/19_pid_speed_control/19_pid_speed_control_practice.md`
- 練習PDF: Git blob `5983354776827cfb38889a944d1cbb4c6c269fbe`
- 練習PDF QA: `PASS / topic_19_practice_pdf_complete`
- STATUS/HANDOFF: `topic_19_practice_pdf_complete / IN_PROGRESS` へ同期

## 次に行うこと
Topic 19の解説画像PowerPoint sourceを作成する。固定一次1問＋二次4問・12答案要素への接続と系列SPEC境界を維持し、Topic 20/21を先取りしない。