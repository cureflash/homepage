# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-19

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: `19 / 22`
- current_status: `topic_20_independent_reanswer_record_qa_pass / IN_PROGRESS`
- last_completed_topic: `19 PIDで新幹線の速度を制御する`
- active_topic: `20 制御系はなぜ発振する？`
- next_start: Topic 20 最終QA

仕様authorityは `denken-shinkansen/MASTER_SPEC.md`、`denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`。仕様追加はしない。

## 完了テーマ
- [x] Topic 01〜17 最終QA `PASS / completed`
- [x] Topic 18 最終QA `PASS / completed`
- [x] Topic 19 最終QA `PASS / completed`
- [ ] Topic 20 `IN_PROGRESS`
- [ ] Topic 21
- [ ] Topic 22

## Topic 20 固定範囲
系列 `SPEC.md` の次だけを扱う。

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
- `topics/20_control_system_stability/20_control_system_stability_explanation.pdf`
- `topics/20_control_system_stability/20_control_system_stability_explanation_pdf_qa.md`
- `topics/20_control_system_stability/20_control_system_stability_practice.md`
- `topics/20_control_system_stability/20_control_system_stability_practice.pdf`
- `topics/20_control_system_stability/20_control_system_stability_practice_pdf_qa.md`
- `topics/20_control_system_stability/20_control_system_stability_images.pptx`
- `topics/20_control_system_stability/20_control_system_stability_powerpoint_qa.md`
- `topics/20_control_system_stability/20_control_system_stability_blind_reanswer_gate.md`
- `topics/20_control_system_stability/20_control_system_stability_independent_reanswer.md`

## Topic 20 成果物QA
- 解説source固定5問・14答案要素: `14 / 14 COVERED`
- 解説PDF: A4縦5ページ、表示 `5 / 5 PASS`
- 練習source: 一次10問＋二次5問、一次正答一意性 `10 / 10 PASS`、全15問独立再計算 `15 / 15 PASS`
- 練習PDF: A4縦3ページ、表示 `3 / 3 PASS`
- PowerPoint: 16:9・4枚、表示 `4 / 4 PASS`
- Topic 21先取り: `0件 / PASS`
- 未確認実車制御値化: `0件 / PASS`
- 固定過去問個別正答の事前保存: `0件 / PASS`
- 独立再解答前判定: `BLIND_REANSWER_READY`

## Topic 20 完成後独立再解答・記録QA
手順:
1. 公式正答・標準解答を開かず、完成教材と公式問題PDFだけで固定5問・14答案要素を再解答
2. 答案を commit `001dbd5f8ee1c0e8a1ea4cd4ca3cef47a2167f15` でGitHubへ固定
3. 固定後に電気技術者試験センター公式正答・標準解答と照合
4. ロック履歴を残したまま転記2件を訂正し、記録QAを実施

ロック時点:
- H23 一次 問7: `4 / 5`。設問(1)は概念「安定性」は正しいが解答群記号を `ヲ` と転記。公式は `ワ`。
- H25 一次 問6 (1),(3),(4),(5): `4 / 4 PASS`
- H30 二次 問4 (2): `0 / 1`。問題文 `Ti=0.1 s` を `0.01 s` と転記し、折点を `100 rad/s` とした。公式は `10 rad/s`。
- R03 二次 問4 (3),(5): `2 / 2 PASS`
- R04 二次 問4 (1),(2): `2 / 2 PASS`
- 固定答案の公式一致: `12 / 14`

訂正後:
1. H23 一次 問7 (1): `安定性 = ヲ` → `安定性 = ワ`
2. H30 二次 問4 (2): `Ti=0.01 s` → `Ti=0.1 s`、折点 `100 rad/s` → `10 rad/s`

記録QA:
- ロックcommitに2件の誤記が残っていること: `PASS`
- H23公式問題・正答で `安定性 = ワ`: `PASS`
- H30公式問題で `Kp=10, Ti=0.1`: `PASS`
- H30公式標準解答で折点 `10 rad/s`: `PASS`
- 訂正対象以外12答案要素の結果不変: `PASS`
- 教材本文・練習・固定EXAM_ALIGNMENT・PDF/PPTX変更なし: `PASS`
- 教材外補完、Topic 21先取り、未確認実車制御値化: `各0件 / PASS`
- 記録QA: `8 / 8 PASS`

集計:
- ロック時点の公式一致: `12 / 14`
- 訂正後の公式整合: `14 / 14 PASS`
- 教材の概念・解法不足: `0件`
- 判定: `PASS / topic_20_independent_reanswer_record_qa_pass`

## 今回進めた内容
Topic 20の独立再解答で確認された転記2件を、固定時点の誤りとして履歴を保持したまま訂正した。電気技術者試験センター公式問題・正答・標準解答で訂正内容を再確認し、独立再解答記録QA `8 / 8 PASS`。Topic 20はまだ完了扱いにせず、完成数は `19 / 22` のまま。

## 次工程
Topic 20の最終QAを実施する。
