# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-17

## 現在地
- Topic 01〜14: 最終QA `PASS / completed`
- 完成数: `14 / 22`
- active topic: `15 新幹線の補機モーターを設計する`
- current status: `topic_15_final_qa_needs_revision`
- 次工程: Topic 15 進捗記録3箇所の同期

仕様authorityは `denken-shinkansen/MASTER_SPEC.md`、`denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`。仕様追加はしない。

## reconcile結果
- 最新main、系列 `STATUS.md` / `HANDOFF.md`、Topic 15既存成果物を確認した。
- Topic 14は最終QA `PASS / completed` のまま変更なし。
- Topic 15は制作前EXAM_ALIGNMENT、解説source/PDF、練習source/PDF、解説画像PowerPoint、PowerPoint QA、独立再解答前ゲート、完成後独立再解答まで完成済み。
- 固定5過去問・8答案要素の独立再解答は `8 / 8 PASS`。教材外知識補完 `0件`。
- 今回最終QAを実施し、必須成果物、試験対応、練習・表示QA、仕様境界はPASS。
- blockerは進捗記録3箇所のみ。main source `## 状態`、main source末尾 `# 次工程`、練習source末尾 `# 次工程` がPowerPoint作成前の状態で止まっている。
- 技術本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTXの修正は不要。

## Topic 15 固定範囲
- ポンプ
- ファン
- コンプレッサ
- 負荷特性
- 所要動力
- 効率
- インバータ駆動
- 可変速運転
- 相似則 `Q∝N`, `H∝N²`, `P∝N³`

境界:
- Topic 05〜09の誘導機等価回路、最大トルク、PWM回路詳細、ベクトル制御内部理論を再制作しない。
- Topic 16以降の蓄電池・DCリンク・制御系論点を先取りしない。
- 未確認の新幹線補機定格値を実車値として置かない。
- コンプレッサへ三乗則を無条件適用しない。

## Topic 15 固定EXAM_ALIGNMENT
- R06 一次 機械 問2 (5) — 1答案要素
- H25 一次 機械 問3 (1),(2) — 2答案要素
- H23 一次 機械 問1 (1),(2) — 2答案要素
- R04 二次 機械・制御 問3 (6) — 2答案要素
- R07 二次 機械・制御 問2 (1)の定格トルク部分 — 1答案要素

一次3問＋二次記述2問、計5問。品質ゲート対象は8答案要素。

## Topic 15 成果物状態
- 解説source: 完成
- 解説PDF: 完成
- 練習source: 完成
- 練習PDF: 完成
- PowerPoint: 完成
- PowerPoint QA: PASS
- 独立再解答前ゲート: `BLIND_REANSWER_READY`
- 完成後独立再解答: `PASS / independent_reanswer_complete`
- 最終QA記録: `NEEDS_REVISION / IN_PROGRESS`

## Topic 15 PowerPoint QA
- `topics/15_auxiliary_motor_design/15_auxiliary_motor_design_images.pptx`
- `topics/15_auxiliary_motor_design/15_auxiliary_motor_design_powerpoint_qa.md`
- 16:9・4枚
- 120 dpi・1601×900 全4枚表示QA `4 / 4 PASS`
- overflow `0件`
- PDF文字抽出QA PASS / Unicode置換文字 `0件` / `(cid:)` `0件`
- PPTX ZIP整合性 PASS
- 固定一次3問＋二次2問・8答案要素を維持
- 固定範囲外論点・Topic 16以降先取り・未確認新幹線補機実値追加 `0件`
- Git blob SHA `af72dc7052484b5e368a1ab16389e4571caa7d3b`

## Topic 15 完成後独立再解答
- `topics/15_auxiliary_motor_design/15_auxiliary_motor_design_independent_reanswer.md`
- R06 一次 機械 問2 (5): `1 / 1 PASS`
- H25 一次 機械 問3 (1),(2): `2 / 2 PASS`
- H23 一次 機械 問1 (1),(2): `2 / 2 PASS`
- R04 二次 機械・制御 問3 (6): `2 / 2 PASS`
- R07 二次 機械・制御 問2 (1) 定格トルク: `1 / 1 PASS`
- 合計: `8 / 8 PASS`
- 教材外知識補完 `0件`
- 固定範囲外論点・Topic 16以降依存・未確認実値依存 `0件`
- 判定: `PASS / independent_reanswer_complete`

## Topic 15 最終QA
- `topics/15_auxiliary_motor_design/15_auxiliary_motor_design_final_qa.md`
- 必須成果物: PASS
- 固定5問・8答案要素: `8 / 8 PASS`
- 完成後独立再解答: `8 / 8 PASS`
- 練習・PDF/PPTX QA: PASS
- 仕様境界: PASS
- 進捗記録整合: FAIL
- 最終判定: `NEEDS_REVISION / IN_PROGRESS`

## 次に行うこと
Topic 15の技術内容は変更せず、次の進捗文だけを実成果物状態へ同期する。

1. `topics/15_auxiliary_motor_design/15_auxiliary_motor_design.md` の `## 状態`
2. 同ファイル末尾 `# 次工程`
3. `topics/15_auxiliary_motor_design/15_auxiliary_motor_design_practice.md` 末尾 `# 次工程`

同期後にTopic 15最終QAを再実施し、全項目PASSの場合のみ `completed`、完成数 `15 / 22` とする。
