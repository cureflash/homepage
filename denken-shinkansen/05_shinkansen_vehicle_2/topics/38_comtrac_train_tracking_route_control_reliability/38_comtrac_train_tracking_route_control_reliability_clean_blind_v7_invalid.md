# Topic 38 clean blind v7 invalidation

更新日: 2026-09-21

判定: `INVALID / FRESHNESS_CONTAMINATED_BEFORE_CANDIDATE`

## 対象

Topic 38「COMTRAC 列車追跡・進路制御・高信頼化」の fresh clean blind v7。

固定対象は変更しない。

- 一次: 5問 / 25答案要素
- 二次: 0問 / 0答案要素（直接対応なし・件数合わせ0件）
- 固定EXAM_ALIGNMENT変更: 0件
- 教材remediation: 0件
- Topic 39先取り: 0件

## invalidation理由

candidate固定前の必須reconcileで、当時の `STATUS.md` / `HANDOFF.md` 自体にv6の保存済み正答を特定できる答案詳細が記載されていた。

`MASTER_SPEC.md` §1は各runで `STATUS.md` / `HANDOFF.md` を読むことを必須としている。一方、`EXAM_ALIGNMENT_SPEC.md` §10は、生成時に見た公式解答や保存済み正答を先に見ずに独立再解答することを要求している。

このrunではmandatory記録を読む行為だけでfreshnessが失われたため、v7 candidateは作成しない。

exact blocker: `TOPIC38_CLEAN_BLIND_V7_FRESHNESS_CONTAMINATED_BY_MANDATORY_RECORDS`

## 実施しなかったこと

- v7 candidate作成: `0件`
- v7 candidate commit: `0件`
- 公式標準解答との照合: `0件`
- candidate修正: `0件`
- 教材本文修正: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`

## 再発防止

mandatoryな `STATUS.md` / `HANDOFF.md` からprior clean-blindの答案詳細・正誤位置・公式正答を除き、非answer-bearingな進捗要約だけを残す。詳細はprior candidate/QA側にのみ保持する。

これは上位仕様の変更ではなく、`MASTER_SPEC.md` §1と `EXAM_ALIGNMENT_SPEC.md` §10を同時に満たせる記録構造へ戻すための是正である。

## 次回手順

fresh workerで v8 を実施する。

candidate固定前に読むもの:

1. `MASTER_SPEC.md`
2. `EXAM_ALIGNMENT_SPEC.md`
3. 系列 `SPEC.md`
4. 非answer-bearing化済み `STATUS.md`
5. 非answer-bearing化済み `HANDOFF.md`
6. question-only intake
7. 公式「問題」PDFのみ

candidate固定前に開かないもの:

- Topic 38 source Markdown
- 練習source/PDF
- 解説PDF
- prior clean-blind candidate / QA
- 公式標準解答
- 保存済み正答を含むQA・answer-bearing commit diff

candidate固定後に初めて現行教材と公式標準解答へ照合し、25答案要素単位で教材依存性を判定する。

Topic 21 H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` は `π=3.14` 相当の丸め差診断を維持し、一般式 `P=Tω`、`ω=2πN/60` を変更しない。
