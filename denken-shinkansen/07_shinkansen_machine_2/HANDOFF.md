# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-19

## 現在地
- Topic 01〜18: 最終QA `PASS / completed`
- 完成数: `18 / 22`
- active topic: `19 PIDで新幹線の速度を制御する`
- current status: `topic_19_explanation_pdf_complete / IN_PROGRESS`
- 次工程: Topic 19 練習source

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
Topic 19解説PDF＋QAまで完成した。

成果物:
- `topics/19_pid_speed_control/19_pid_speed_control.md`
- `topics/19_pid_speed_control/19_pid_speed_control_explanation.pdf`
- `topics/19_pid_speed_control/19_pid_speed_control_explanation_pdf_qa.md`

含めた内容:
- P・I・D各動作の時間領域／ラプラス領域対応
- PID並列形と時間定数表示の相互変換
- P・PI・PD・PIDの判別
- 単位負帰還の偏差伝達関数
- 最終値の定理によるステップ・ランプ定常偏差
- Topic 18の二次遅れ・減衰係数・応答指標への接続
- 教材用仮定プラントでの `Kp`、`Ki`、`Kd` 一変数比較条件
- 基礎・本試験標準・複合例題
- 固定5問・12答案要素の教材節マッピング

QA:
- 固定5問・12答案要素: `12 / 12 COVERED`
- Topic 20先取り: `0件`
- Topic 21先取り: `0件`
- 未確認実車PID値: `0件`
- 固定問題の個別正答記号・最終数値保存: `0件`
- 解説PDF: 表示6/6、文字抽出PASS、数値・論理15/15
- 判定: `PASS / topic_19_explanation_pdf_complete`

## GitHub反映
- 解説source: GitHub正本反映済み
- 解説PDF: Git blob `bbbe79949058c62725f644236b78f8c961365291`
- 解説PDF QA: `PASS / topic_19_explanation_pdf_complete`

## 次に行うこと
Topic 19練習sourceを作成し、固定一次1問＋二次4問・12答案要素への演習接続を維持してQAする。
