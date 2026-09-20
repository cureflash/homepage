# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-20

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: `21 / 22`
- current_status: `topic_21_final_qa_pass / completed`
- last_completed_topic: `21 空転した車輪を再粘着させる`
- active_topic: `22 東京→新大阪を主回路＋走行制御でシミュレーション`
- next_start: Topic 22 制作前EXAM_ALIGNMENT

仕様authorityは `denken-shinkansen/MASTER_SPEC.md`、`denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`。仕様追加はしない。

## 完了テーマ
- [x] Topic 01〜17 最終QA `PASS / completed`
- [x] Topic 18 最終QA `PASS / completed`
- [x] Topic 19 最終QA `PASS / completed`
- [x] Topic 20 最終QA `PASS / completed`
- [x] Topic 21 最終QA `PASS / completed`
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
- `topics/20_control_system_stability/20_control_system_stability_final_qa.md`

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
- H25 一次 機械 問6 (1),(3),(4),(5): `4 / 4 PASS`
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

## Topic 20 最終QA
前回最終QAの未同期3件を現行mainへ同期後、最終QAを再実施した。

- 上位仕様・系列SPEC照合: `PASS`
- 固定一次2問＋二次3問・14答案要素: `14 / 14 COVERED`
- 成果物存在・成果物QA: `PASS`
- 独立再解答・記録QA: `PASS`
- 訂正後公式整合: `14 / 14 PASS`
- 教材の概念・解法不足: `0件`
- 進捗・メタデータ同期: `3 / 3 PASS`
- Topic 21先取り・未確認実車制御値化・SPEC外高度制御理論追加: `各0件 / PASS`
- 技術本文・固定EXAM_ALIGNMENT・PDF/PPTXの追加修正: `0件`
- 判定: `PASS / topic_20_final_qa_pass / completed`

## Topic 21 固定範囲
系列 `SPEC.md` の次だけを扱う。

- 車輪速度検出、加速度推定
- 空転・滑走、粘着
- フィードバック、トルク抑制、再粘着
- 非線形性、飽和、応答速度
- センサ、アクチュエータ

境界:
- Topic 17〜20は必要な前提だけ再使用する
- Topic 22の総合走行シミュレーションを先取りしない
- 実車のセンサ方式、検知しきい値、制御周期、トルク抑制量・回復量、判定ロジック等は公開一次資料未確認のまま実車仕様化しない
- 教材用値・制御則は教材用モデルと明記する
- 実車アルゴリズムは公開資料で確認できる範囲のみ使用する

## Topic 21 固定EXAM_ALIGNMENT
一次4問＋二次1問、計5問・14答案要素。

- R08 一次 機械 問8 (1)〜(5) — 5答案要素
- R06 一次 機械 問8 (5) — 1答案要素
- R04 一次 機械 問7 (3) — 1答案要素
- H27 一次 機械 問8 (3),(5) — 4答案要素（各小問で物理量＋センサ例）
- R07 二次 機械・制御 問4 (4),(5) — 3答案要素（閉ループ伝達関数＋インパルス応答＋指定時刻出力）

制作前品質ゲート:
- 公式過去問5問: `PASS`
- 一次・二次を含む: `PASS`
- 2026年度最新一次問題を含む: `PASS`
- 2026-09-20時点の最新公表二次問題を含む: `PASS`
- 二次記述式を含む: `PASS`
- 固定14答案要素を教材節へ割当: `PASS`
- 参考教材2系統（e-sysnet＋電験王）: `PASS`
- 制作前sourceへの固定過去問個別正答保存: `0件 / PASS`
- 未確認実車再粘着アルゴリズムの仕様化: `0件 / PASS`
- Topic 22先取り: `0件 / PASS`
- SPEC外A-D変換器方式等の追加: `0件 / PASS`
- 独立再解答: `NOT_RUN`（制作前時点）
- 判定: `PASS / topic_21_exam_alignment_complete`

## Topic 21 解説source品質ゲート
- 固定14答案要素の教材節カバー: `14 / 14 COVERED`
- メカトロニクス基本構成、センサ、アクチュエータ: `PASS`
- シーケンス制御とフィードバック制御: `PASS`
- ロータリエンコーダの速度・方向・角度検出: `PASS`
- 磁気系・光電系センサ: `PASS`
- 車輪速度、加速度推定、空転・滑走・粘着: `PASS`
- トルク抑制、再粘着、非線形性、飽和、応答速度: `PASS`
- 二次型の閉ループ伝達関数、インパルス応答、ステップ応答: `PASS`
- 基礎・本試験標準・複合例題: `各1問 / PASS`
- 実車記述: 公開論文のSTAR21 953形試験範囲のみ: `PASS`
- 公開値の現行新幹線一般化: `0件 / PASS`
- 固定過去問個別正答の保存: `0件 / PASS`
- Topic 22先取り・SPEC外A-D変換器方式追加: `各0件 / PASS`
- 独立再解答: `14 / 14 PASS`
- 判定: `PASS / topic_21_explanation_source_complete`

## Topic 21 解説PDF品質ゲート
- 固定一次4問＋二次1問・14答案要素: `14 / 14 COVERED`
- A4縦4ページ: `PASS`
- 200 dpi表示: `4 / 4 PASS`
- `pdftocairo` 160 dpi表示: `4 / 4 PASS`
- 文字切れ・重なり・ページ外はみ出し・欠落グリフ: `0件 / PASS`
- `pdftotext` 抽出、replacement char、`(cid:)`: `PASS / 0 / 0`
- 基礎・本試験標準・複合例題: `3 / 3 INCLUDED`
- 数値・論理QA: `6 / 6 PASS`
- 固定過去問個別正答の保存: `0件 / PASS`
- STAR21公開値の現行新幹線一般化: `0件 / PASS`
- Topic 22先取り・SPEC外A-D変換器方式追加: `各0件 / PASS`
- 判定: `PASS / topic_21_explanation_pdf_complete`

## Topic 21 練習source品質ゲート
- 一次試験型: `10問 / 全問五肢択一`
- 一次正答一意性: `10 / 10 PASS`
- 二次試験型: `5問 / 記述・式変形・検算付き`
- 全15問独立再計算・論理確認: `15 / 15 PASS`
- 固定一次4問＋二次1問・14答案要素: `14 / 14 COVERED`
- メカトロニクス、センサ、制御演算、アクチュエータ: `PASS`
- シーケンス/フィードバック、ロータリエンコーダ、磁気/光電センサ: `PASS`
- 車輪速度、加速度推定、空転/滑走、粘着限界: `PASS`
- トルク抑制、回復確認、再粘着、非線形性、飽和、応答速度: `PASS`
- 閉ループ伝達関数、インパルス応答、ステップ応答、指定時刻評価: `PASS`
- 固定過去問個別正答の保存: `0件 / PASS`
- 未確認実車仕様化・Topic 22先取り・SPEC外A-D変換器方式追加: `各0件 / PASS`
- 判定: `PASS / topic_21_practice_source_complete`

## Topic 21 練習PDF品質ゲート
- PDF生成時canonical練習source blob: `c9a87ccf46b7f8caa91c064af1fc56149d05e3d1`
- 現行メタデータ同期済み練習source blob: `a710fd8efd3c200c7d922c86048244da43431789`
- A4縦2ページ・2段組: `PASS`
- 200 dpi表示: `2 / 2 PASS`
- `pdftocairo` 160 dpi表示: `2 / 2 PASS`
- 文字切れ・重なり・ページ外はみ出し・欠落グリフ: `0件 / PASS`
- `pdftotext` 抽出、replacement char、`(cid:)`: `PASS / 0 / 0`
- 一次10問＋二次5問: `15 / 15 INCLUDED`
- 一次正答一意性: `10 / 10 PASS`
- 全15問独立再計算・論理確認: `15 / 15 PASS`
- 固定一次4問＋二次1問・14答案要素: `14 / 14 COVERED`
- 未確認実車仕様化・Topic 22先取り・SPEC外A-D変換器方式追加: `各0件 / PASS`
- 固定公式過去問個別正答保存: `0件 / PASS`
- 判定: `PASS / topic_21_practice_pdf_complete`

## Topic 21 解説画像PowerPoint品質ゲート
- 16:9・4枚: `PASS`
- LibreOffice headless PDF変換: `PASS`
- 1600×900レンダリング: `4 / 4 PASS`
- スライド外周クリップ: `0件 / PASS`
- `pdftotext` 抽出、replacement char、`(cid:)`: `PASS / 0 / 0`
- PPTX ZIP整合・slide XML: `PASS / 4`
- 固定一次4問＋二次1問・14答案要素: `14 / 14 COVERED`
- 未確認実車仕様化・Topic 22先取り・SPEC外A-D変換器方式追加: `各0件 / PASS`
- 固定公式過去問個別正答保存: `0件 / PASS`
- 判定: `PASS / topic_21_powerpoint_complete / IN_PROGRESS`

## Topic 21 独立再解答前ゲート
- `topics/21_readhesion_control/21_readhesion_control_blind_reanswer_gate.md`
- 固定一次4問＋二次1問・14答案要素: `変更なし / PASS`
- 固定公式過去問の公式正答・標準解答本文の事前保存: `0件 / PASS`
- 固定公式過去問の完成済み個別解答・完成済み導出結果の事前保存: `0件 / PASS`
- 解説PDF表示QA: `4 / 4 PASS`
- 練習PDF表示QA: `2 / 2 PASS`
- PowerPoint表示QA: `4 / 4 PASS`
- 一次練習正答一意性: `10 / 10 PASS`
- 全15問独立再計算・論理確認: `15 / 15 PASS`
- 未確認実車仕様化・Topic 22先取り・SPEC外A-D変換器方式追加: `各0件 / PASS`
- 判定: `BLIND_REANSWER_READY / topic_21_blind_reanswer_ready / IN_PROGRESS`

## Topic 21 完成後独立再解答・記録QA
- `topics/21_readhesion_control/21_readhesion_control_independent_reanswer.md`
- 公式照合前答案を commit `29fa8525a1a970236e44fac44421e3fa451b52a3` で固定: `PASS`
- R08 一次 問8 (1)〜(5): `5 / 5 PASS`
- R06 一次 問8 (5): `1 / 1 PASS`
- R04 一次 問7 (3): `1 / 1 PASS`
- H27 一次 問8 (3),(5): `4 / 4 PASS`
- R07 二次 問4 (4),(5): `3 / 3 PASS`
- 公式一致: `14 / 14 PASS`
- 訂正: `0件`
- 教材の概念・解法不足: `0件`
- 記録QA: `8 / 8 PASS`
- 教材本文・練習・固定EXAM_ALIGNMENT・PDF/PPTX変更: `0件`
- 教材外知識補完・未確認実車仕様化・Topic 22先取り・SPEC外A-D変換器方式追加: `各0件 / PASS`
- 判定: `PASS / topic_21_independent_reanswer_pass / IN_PROGRESS`

## Topic 21 成果物
- `topics/21_readhesion_control/21_readhesion_control.md` — 制作前EXAM_ALIGNMENT＋解説source本文完了
- `topics/21_readhesion_control/21_readhesion_control_explanation.pdf` — 解説PDF完了
- `topics/21_readhesion_control/21_readhesion_control_explanation_pdf_qa.md` — 解説PDF QA完了
- `topics/21_readhesion_control/21_readhesion_control_practice.md` — 練習source完了
- `topics/21_readhesion_control/21_readhesion_control_practice.pdf` — 練習PDF完了
- `topics/21_readhesion_control/21_readhesion_control_practice_pdf_qa.md` — 練習PDF QA完了
- `topics/21_readhesion_control/21_readhesion_control_images.pptx` — 解説画像PowerPoint完了
- `topics/21_readhesion_control/21_readhesion_control_powerpoint_qa.md` — PowerPoint QA完了
- `topics/21_readhesion_control/21_readhesion_control_blind_reanswer_gate.md` — 独立再解答前ゲート完了
- `topics/21_readhesion_control/21_readhesion_control_independent_reanswer.md` — 完成後独立再解答・公式照合・記録QA完了
- `topics/21_readhesion_control/21_readhesion_control_final_qa.md` — 最終QA `PASS / completed`

## Topic 21 最終QA
- 上位仕様・系列SPEC照合: `PASS`
- 固定一次4問＋二次1問・14答案要素: `14 / 14 COVERED`
- 成果物存在: `10 / 10 PASS`
- 成果物QA: `PASS`
- 独立再解答: `14 / 14 PASS`
- 独立再解答記録QA: `8 / 8 PASS`
- 教材の概念・解法不足: `0件`
- 未確認実車仕様化・Topic 22先取り・SPEC外A-D変換器方式追加: `各0件 / PASS`
- 前回未同期の進捗メタデータ2件: `2 / 2 PASS`
- 技術本文・固定EXAM_ALIGNMENT・PDF/PPTXの追加修正: `0件`
- 判定: `PASS / topic_21_final_qa_pass / completed`

## 今回進めた内容
Topic 21の最終QAを再実施した。前回指摘した進捗メタデータ2件は現行mainで同期済み、技術・成果物・独立再解答・正本整合の全ゲートがPASSしたため、Topic 21を `completed` とした。完成数は `21 / 22`。

## 次工程
Topic 22「東京→新大阪を主回路＋走行制御でシミュレーション」の制作前EXAM_ALIGNMENT。