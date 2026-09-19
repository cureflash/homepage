# Topic 19 最終QA記録

対象: `19 PIDで新幹線の速度を制御する`

実施日: 2026-09-19

## 判定

`NEEDS_REVISION / FINAL_QA_BLOCKED_BY_PROGRESS_RECORDS`。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`07_shinkansen_machine_2/SPEC.md` と最新mainを再確認した。必須成果物、固定EXAM_ALIGNMENT、完成後独立再解答、PDF/PPTX QA、仕様境界はPASSしたが、main source と練習sourceの進捗記録が現在地へ同期されていないため、Topic 19を `completed` にはしない。

本runでは最終QA実施までを1段階とする。技術本文、練習問題、正答、固定EXAM_ALIGNMENT、PDF/PPTX、独立再解答結果は変更していない。

## reconcile

- 最終QA開始時点の最初の未完了テーマは Topic 19。
- 系列SPECのTopic 19固定範囲は、P・PI・PD・PID、比例・積分・微分、定常偏差、オーバーシュート、応答速度、`Kp`・`Ki`・`Kd` を変えた速度応答比較で変更なし。
- 固定EXAM_ALIGNMENTは一次1問＋二次4問、計5問・12答案要素のまま変更なし。
- source Markdown、解説PDF、練習source/PDF、PowerPoint、各QA、独立再解答前ゲート、完成後独立再解答記録の実在を確認。
- 技術本文・練習問題・正答・PDF/PPTX・固定EXAM_ALIGNMENTの内容変更 `0件`。

## 必須成果物

- source Markdown: PASS (`3a2d0332418bef3b71cb082c73a328aef65a8175`)
- 解説PDF: PASS (`bbbe79949058c62725f644236b78f8c961365291`)
- 解説PDF QA: PASS (`f1841546bc38d1b252c4cd451334ec4957a8e559`)
- 練習source: PASS (`f1015f13e5deefcbd7e67fbd8d0891249d684333`)
- 練習PDF: PASS (`5983354776827cfb38889a944d1cbb4c6c269fbe`)
- 練習PDF QA: PASS (`5f6983a260a8f9dc794ad2f6129896429507bb7b`)
- 解説画像PowerPoint: PASS (`8d863217eee028e3b14b2ddda9c1dcb9e32cf804`)
- PowerPoint QA: PASS (`e361be067e78c22bc40dc92936faa765abd97e77`)
- 独立再解答前ゲート: PASS (`0301f0ea48777c23288e5a6abd23df845ae310ba`)
- 完成後独立再解答記録: PASS (`d7ccaa49d514e9f41d2ab9b67dc533e3beed562f`)
- 公式照合前答案ロック: commit `f6c4c162d94c1c38176be61dc958f069abddea99`

## EXAM_ALIGNMENT・独立再解答

- H25 一次 機械 問6 (2): 導出 `Ti=K1/K2` は正しい。解答群記号の転記だけ「ヲ」→「ワ」へ訂正済み: `1 / 1 PASS`
- R07 二次 機械・制御 問4 (1),(2),(3): `3 / 3 PASS`
- H30 二次 機械・制御 問4 (1): `2 / 2 PASS`
- H23 二次 機械・制御 問4 (4): `4 / 4 PASS`
- R02 二次 機械・制御 問4 (1),(2): `2 / 2 PASS`
- 訂正後の公式整合: `12 / 12 PASS`
- 独立再解答記録QA: `6 / 6 PASS`
- 教材外知識による補完: `0件`

二種の一次・二次を合わせて5問を固定し、二次記述4問を含む。教材の式・解法不足は `0件`。

## 練習・表示QA

- 練習問題: 一次10問＋二次記述5問
- 一次正答一意性: `10 / 10 PASS`
- 独立再計算・論理QA: `15 / 15 PASS`
- 固定12答案要素への接続: `12 / 12 COVERED`
- 解説PDF: A4縦6ページ、表示QA `6 / 6 PASS`、数値・論理 `15 / 15 PASS`
- 練習PDF: A4縦15ページ、表示QA `15 / 15 PASS`、文字抽出QA PASS
- PowerPoint: 16:9・4スライド、表示QA `4 / 4 PASS`、overflow `0件`、ZIP整合性PASS

## 仕様境界

- Topic 20の一般安定判別・ラウス・フルビッツ・根軌跡・周波数応答・ボード線図・余裕・発振判定の先取り: `0件`
- Topic 21の空転・滑走・再粘着制御先取り: `0件`
- 未確認の新幹線実車PIDゲイン・制御周期・制御則・整定時間等の実車値化: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`

技術・試験対応判定: `PASS`。

## 進捗記録整合

1. `STATUS.md`: `topic_19_independent_reanswer_record_qa_pass / IN_PROGRESS`、次工程「Topic 19 最終QA」で最終QA開始時点の状態を示す — `PASS`。
2. `HANDOFF.md`: 同じく最終QA開始時点の状態を示す — `PASS`。
3. main source `19_pid_speed_control.md` の `## 状態`: `topic_19_explanation_pdf_complete / IN_PROGRESS`、次工程「練習source」のままで、独立再解答完了後の現在地へ未同期 — `FAIL`。
4. 練習source `19_pid_speed_control_practice.md` の `# 次工程`: 「Topic 19練習PDF＋QAを作成する」のままで、独立再解答完了後の現在地へ未同期 — `FAIL`。

進捗記録整合: `2 / 4 PASS`。

## 最終判定

`NEEDS_REVISION / topic_19_final_qa_progress_records_unsynced`。

固定5問・12答案要素、独立再解答、練習QA、PDF/PPTX QA、仕様境界はPASSしている。未完了理由は進捗記録不整合のみ。

次工程は main source と練習sourceの進捗記録を、Topic 19最終QA実施済み・進捗記録同期待ちの状態へ同期する。同期後に最終QAを再実施する。