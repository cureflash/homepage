# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-17

## 現在地
- Topic 01〜14: 最終QA `PASS / completed`
- 完成数: `14 / 22`
- active topic: `15 新幹線の補機モーターを設計する`
- current status: `topic_15_powerpoint_complete`
- 次工程: Topic 15 独立再解答前ゲート

仕様authorityは `denken-shinkansen/MASTER_SPEC.md`、`denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`。仕様追加はしない。

## reconcile結果
- 最新main、系列 `STATUS.md` / `HANDOFF.md`、Topic 15既存成果物を確認した。
- Topic 14は最終QA `PASS / completed` のまま変更なし。
- Topic 15は制作前EXAM_ALIGNMENT、解説source/PDF、練習source/PDFまで完成済みだった。
- 今回、Topic 15解説画像PowerPointを追加し、表示QA・overflow・ZIP整合性をPASSした。
- 固定一次3問＋二次記述2問、計5問・8答案要素を変更していない。
- 固定範囲外論点、Topic 16以降の先取り、未確認新幹線補機実値の真値化はいずれも `0件`。
- 固定公式過去問の個別正答記号・完成済み答案は保存していない。blind再解答条件を維持する。

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
- 独立再解答前ゲート: 未着手
- 完成後独立再解答: 未着手
- 最終QA: 未着手

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

## 次に行うこと
Topic 15の独立再解答前ゲートを実施する。固定5過去問・8答案要素について、公式正答・標準解答・完成済み個別答案を先読みしない状態を再監査し、blind再解答可能ならゲート記録を残す。
