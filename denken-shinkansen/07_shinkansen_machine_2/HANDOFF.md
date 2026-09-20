# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-20

## 現在地
- Topic 01〜21: 最終QA `PASS / completed`
- 完成数: `21 / 22`
- active topic: `22 東京→新大阪を主回路＋走行制御でシミュレーション`
- current status: `topic_21_final_qa_pass / completed`
- 次工程: Topic 22 制作前EXAM_ALIGNMENT

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

## Topic 20 固定EXAM_ALIGNMENT
一次2問＋二次3問、計5問・14答案要素。

- H23 一次 機械 問7 (1)〜(5) — 5答案要素
- H25 一次 機械 問6 (1),(3),(4),(5) — 4答案要素
- H30 二次 機械・制御 問4 (2) — 1答案要素
- R03 二次 機械・制御 問4 (3),(5) — 2答案要素
- R04 二次 機械・制御 問4 (1),(2) — 2答案要素

制作前ゲートは `PASS / topic_20_exam_alignment_complete`。一次・二次・二次記述式を含み、固定14答案要素を教材節へ割当済み。

## Topic 20 既存成果物
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

Topic 20成果物QA:
- 固定5問・14答案要素: `14 / 14 COVERED`
- 解説PDF表示: `5 / 5 PASS`
- 練習PDF表示: `3 / 3 PASS`
- PowerPoint表示: `4 / 4 PASS`
- 一次練習正答一意性: `10 / 10 PASS`
- 全15問独立再計算: `15 / 15 PASS`
- 独立再解答記録QA: `8 / 8 PASS`
- 訂正後公式整合: `14 / 14 PASS`
- 判定: `PASS / topic_20_final_qa_pass / completed`

## Topic 21 固定範囲
系列 `SPEC.md` の Topic 21 にある次のみ。

- 車輪速度検出、加速度推定
- 空転・滑走、粘着
- フィードバック、トルク抑制、再粘着
- 非線形性、飽和、応答速度
- センサ、アクチュエータ

境界:
- Topic 17〜20は前提として必要な範囲のみ再使用する
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
- R08最新一次を含む: `PASS`
- 2026-09-20時点の最新公表R07二次を含む: `PASS`
- 二次記述式を含む: `PASS`
- 固定14答案要素を教材節へ割当: `PASS`
- 参考教材2系統（e-sysnet＋電験王）: `PASS`
- 制作前sourceへの固定過去問個別正答保存: `0件 / PASS`
- 未確認実車再粘着アルゴリズムの仕様化: `0件 / PASS`
- Topic 22先取り: `0件 / PASS`
- SPEC外A-D変換器方式等の追加: `0件 / PASS`
- 独立再解答: `NOT_RUN`（制作前時点）
- 判定: `PASS / topic_21_exam_alignment_complete`

## Topic 21 解説source
- `topics/21_readhesion_control/21_readhesion_control.md`
- 状態: `PASS / topic_21_explanation_source_complete`
- 固定5問・14答案要素: `14 / 14 COVERED`
- 一次対応: メカトロニクス基本構成、センサ・アクチュエータ、シーケンス/フィードバック、ロータリエンコーダ、磁気・光電センサ
- 二次対応: 閉ループ伝達関数、インパルス応答、単位ステップ応答、指定時刻評価
- 再粘着対応: 車輪速度、加速度推定、空転・滑走、粘着、トルク抑制、非線形性、飽和、応答速度
- 例題: 基礎・本試験標準・複合 各1問
- 実車接続: 公開論文で確認できるSTAR21 953形の試験結果のみ
- 公開値の現行新幹線一般化: `0件 / PASS`
- 固定過去問個別正答保存: `0件 / PASS`
- Topic 22先取り・SPEC外A-D変換器方式追加: `各0件 / PASS`
- 進捗メタデータ: 独立再解答 `14 / 14 PASS`、次工程 `最終QA再実施` へ同期済み

## Topic 21 解説PDF
- `topics/21_readhesion_control/21_readhesion_control_explanation.pdf`
- `topics/21_readhesion_control/21_readhesion_control_explanation_pdf_qa.md`
- 状態: `PASS / topic_21_explanation_pdf_complete`
- A4縦4ページ、200 dpi表示 `4 / 4 PASS`、`pdftocairo` 160 dpi表示 `4 / 4 PASS`
- 固定5問・14答案要素: `14 / 14 COVERED`
- 基礎・本試験標準・複合例題: `3 / 3 INCLUDED`
- 数値・論理QA: `6 / 6 PASS`
- 文字抽出異常: `replacement char 0 / (cid:) 0`
- 固定過去問個別正答保存: `0件 / PASS`
- STAR21公開値の現行新幹線一般化: `0件 / PASS`
- Topic 22先取り・SPEC外A-D変換器方式追加: `各0件 / PASS`

## Topic 21 練習source
- `topics/21_readhesion_control/21_readhesion_control_practice.md`
- 状態: `PASS / topic_21_practice_source_complete`
- 一次試験型: `10問 / 全問五肢択一`
- 一次正答一意性: `10 / 10 PASS`
- 二次試験型: `5問 / 記述・式変形・検算付き`
- 全15問独立再計算・論理確認: `15 / 15 PASS`
- 固定5問・14答案要素: `14 / 14 COVERED`
- センサ・アクチュエータ、シーケンス/フィードバック、ロータリエンコーダ、磁気/光電センサ: `PASS`
- 車輪速度、加速度推定、空転/滑走、粘着、トルク抑制、再粘着: `PASS`
- 非線形性、飽和、応答速度: `PASS`
- 閉ループ伝達関数、インパルス応答、単位ステップ応答、指定時刻評価: `PASS`
- 固定過去問個別正答保存: `0件 / PASS`
- 未確認実車仕様化・Topic 22先取り・SPEC外A-D変換器方式追加: `各0件 / PASS`
- 進捗メタデータ: 次工程 `最終QA再実施` へ同期済み

## Topic 21 練習PDF
- `topics/21_readhesion_control/21_readhesion_control_practice.pdf`
- `topics/21_readhesion_control/21_readhesion_control_practice_pdf_qa.md`
- 状態: `PASS / topic_21_practice_pdf_complete`
- A4縦2ページ・2段組
- 200 dpi表示 `2 / 2 PASS`、`pdftocairo` 160 dpi表示 `2 / 2 PASS`
- 文字抽出異常: `replacement char 0 / (cid:) 0`
- 一次10問＋二次5問: `15 / 15 INCLUDED`
- 一次正答一意性: `10 / 10 PASS`
- 全15問独立再計算・論理確認: `15 / 15 PASS`
- 固定5問・14答案要素: `14 / 14 COVERED`
- 未確認実車仕様化・Topic 22先取り・SPEC外A-D変換器方式追加: `各0件 / PASS`
- 固定過去問個別正答保存: `0件 / PASS`

## Topic 21 解説画像PowerPoint
- `topics/21_readhesion_control/21_readhesion_control_images.pptx`
- `topics/21_readhesion_control/21_readhesion_control_powerpoint_qa.md`
- 状態: `PASS / topic_21_powerpoint_complete`
- 16:9・4枚、LibreOffice変換 `PASS`、1600×900レンダリング `4 / 4 PASS`
- PPTX ZIP整合・slide XML: `PASS / 4`
- PDF文字抽出異常: `replacement char 0 / (cid:) 0`
- 固定一次4問＋二次1問・14答案要素: `14 / 14 COVERED`
- 一次・二次・二次記述式: `PASS`
- 未確認実車仕様化・Topic 22先取り・SPEC外A-D変換器方式追加: `各0件 / PASS`
- 固定過去問個別正答保存: `0件 / PASS`

## Topic 21 独立再解答前ゲート
- `topics/21_readhesion_control/21_readhesion_control_blind_reanswer_gate.md`
- 状態: `BLIND_REANSWER_READY / topic_21_blind_reanswer_ready / IN_PROGRESS`
- 固定一次4問＋二次1問・14答案要素: `変更なし / PASS`
- 固定過去問の公式正答記号・標準解答本文の事前保存: `0件 / PASS`
- 固定過去問の完成済み個別解答・完成済み導出結果の事前保存: `0件 / PASS`
- 解説PDF表示QA `4 / 4 PASS`
- 練習PDF表示QA `2 / 2 PASS`
- PowerPoint表示QA `4 / 4 PASS`
- 一次練習正答一意性 `10 / 10 PASS`
- 全15問独立再計算・論理QA `15 / 15 PASS`
- 未確認実車仕様化・Topic 22先取り・SPEC外A-D変換器方式追加: `各0件 / PASS`

## Topic 21 完成後独立再解答
- `topics/21_readhesion_control/21_readhesion_control_independent_reanswer.md`
- 公式照合前答案を commit `29fa8525a1a970236e44fac44421e3fa451b52a3` で固定: `PASS`
- R08 一次: `5 / 5 PASS`
- R06 一次: `1 / 1 PASS`
- R04 一次: `1 / 1 PASS`
- H27 一次: `4 / 4 PASS`
- R07 二次: `3 / 3 PASS`
- 公式一致: `14 / 14 PASS`
- 訂正: `0件`
- 記録QA: `8 / 8 PASS`
- 教材の概念・解法不足: `0件`
- 教材外知識補完・未確認実車仕様化・Topic 22先取り・SPEC外A-D変換器方式追加: `各0件 / PASS`
- 状態: `PASS / topic_21_independent_reanswer_pass / IN_PROGRESS`

## Topic 21 最終QA
- `topics/21_readhesion_control/21_readhesion_control_final_qa.md`
- 技術・試験対応品質ゲート: `PASS`
- 成果物ゲート: `PASS`
- 独立再解答ゲート: `PASS / 14 / 14`
- 独立再解答記録QA: `8 / 8 PASS`
- 前回未同期の進捗メタデータ2件: `2 / 2 PASS`
- 進捗・正本整合ゲート: `PASS`
- 技術本文・固定EXAM_ALIGNMENT・PDF/PPTXの追加修正: `0件`
- 状態: `PASS / topic_21_final_qa_pass / completed`

## 次工程
Topic 22「東京→新大阪を主回路＋走行制御でシミュレーション」の制作前EXAM_ALIGNMENT。