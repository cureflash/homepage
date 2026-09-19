# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-19

## 現在地
- Topic 01〜19: 最終QA `PASS / completed`
- 完成数: `19 / 22`
- active topic: `20 制御系はなぜ発振する？`
- current status: `topic_20_independent_reanswer_needs_revision / NEEDS_REVISION`
- 次工程: 独立再解答の転記2件を訂正し、独立再解答記録QA

仕様authorityは `denken-shinkansen/MASTER_SPEC.md`、`denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`。仕様追加はしない。

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

## 固定EXAM_ALIGNMENT
一次2問＋二次3問、計5問・14答案要素。

- H23 一次 機械 問7 (1)〜(5) — 5答案要素
- H25 一次 機械 問6 (1),(3),(4),(5) — 4答案要素
- H30 二次 機械・制御 問4 (2) — 1答案要素
- R03 二次 機械・制御 問4 (3),(5) — 2答案要素
- R04 二次 機械・制御 問4 (1),(2) — 2答案要素

制作前ゲートは `PASS / topic_20_exam_alignment_complete`。一次・二次・二次記述式を含み、固定14答案要素を教材節へ割当済み。

## 既存成果物
- `topics/20_control_system_stability/20_control_system_stability.md`
- `topics/20_control_system_stability/20_control_system_stability_explanation.pdf`
- `topics/20_control_system_stability/20_control_system_stability_explanation_pdf_qa.md`
- `topics/20_control_system_stability/20_control_system_stability_practice.md`
- `topics/20_control_system_stability/20_control_system_stability_practice.pdf`
- `topics/20_control_system_stability/20_control_system_stability_practice_pdf_qa.md`
- `topics/20_control_system_stability/20_control_system_stability_images.pptx`
- `topics/20_control_system_stability/20_control_system_stability_powerpoint_qa.md`
- `topics/20_control_system_stability/20_control_system_stability_blind_reanswer_gate.md`
- `topics/20_control_system_stability/20_control_system_stability_independent_reanswer.md`

成果物QA:
- 固定5問・14答案要素: `14 / 14 COVERED`
- 解説PDF表示: `5 / 5 PASS`
- 練習PDF表示: `3 / 3 PASS`
- PowerPoint表示: `4 / 4 PASS`
- 一次練習正答一意性: `10 / 10 PASS`
- 全15問独立再計算: `15 / 15 PASS`
- Topic 21先取り・未確認実車制御値化・SPEC外高度制御理論追加: `各0件 / PASS`
- 独立再解答前ゲート: `BLIND_REANSWER_READY`

## 完成後独立再解答
公式照合前に固定5問・14答案要素を完成教材だけで解き、commit `001dbd5f8ee1c0e8a1ea4cd4ca3cef47a2167f15` で答案を固定。その後に公式正答・標準解答を照合した。

結果:
- H23 一次 問7: `4 / 5`。設問(1)は「安定性」という内容は正しいが、選択肢記号を `ヲ` と転記。公式は `ワ`。
- H25 一次 問6 (1),(3),(4),(5): `4 / 4 PASS`
- H30 二次 問4 (2): `0 / 1`。問題文 `Ti=0.1 s` を `0.01 s` と転記し、折点を `100 rad/s` とした。公式は `10 rad/s`。PI折れ線の考え方は正しい。
- R03 二次 問4 (3),(5): `2 / 2 PASS`
- R04 二次 問4 (1),(2): `2 / 2 PASS`

集計:
- 固定答案の公式一致: `12 / 14`
- 不一致: `2 / 14`
- 教材外補完: `0件`
- 教材の概念・解法不足が原因の不一致: `0件`
- 転記ミス: `2件`
- 判定: `NEEDS_REVISION / topic_20_independent_reanswer_needs_revision`

訂正対象:
1. H23 一次 問7 (1): `安定性 = ヲ` → `安定性 = ワ`
2. H30 二次 問4 (2): `Ti=0.01 s` → `Ti=0.1 s`、折点 `100 rad/s` → `10 rad/s`

Topic 20はまだ `completed` にしない。完成数は `19 / 22` のまま。

## 次工程
上記2件を固定時点の誤りとして履歴を残したまま訂正し、独立再解答記録QAを実施する。技術本文・練習問題・固定EXAM_ALIGNMENT・PDF/PPTXは変更しない。
