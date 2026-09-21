# Topic 38 clean blind v5 invalidation

更新日: 2026-09-21

判定: `INVALID / FRESHNESS_CONTAMINATED_BEFORE_CANDIDATE`

## 対象

Topic 38「COMTRAC 列車追跡・進路制御・高信頼化」の fresh clean blind v5。

固定対象は変更しない。

- 一次: 5問 / 25答案要素
- 二次: 0問 / 0答案要素（直接対応なし・件数合わせ0件）
- 固定EXAM_ALIGNMENT変更: 0件
- 教材remediation: 0件
- Topic 39先取り: 0件

## invalidation理由

candidate固定前に、現行の Topic 38 source Markdown を確認した。このsourceには固定過去問の保存済み正答が含まれている。

`EXAM_ALIGNMENT_SPEC.md` §10 は、公式解答や保存済み正答を先に見ず、教材内容だけで独立再解答することを要求する。したがって、このrunでv5 candidateを作成すると freshness を満たさない。

前回HANDOFFの「現行教材成果物を確認してからclean blindを行う」という手順は、source Markdown自体に保存済み正答が含まれる現在の成果物構造では、§10と両立しないことが実行時に判明した。

## 実施しなかったこと

- v5 candidate作成: `0件`
- v5 candidate commit: `0件`
- 公式標準解答との照合: `0件`
- candidate修正: `0件`
- 教材本文修正: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`

## 次回手順

fresh workerで v6 を実施する。

candidate固定前に読むもの:

1. `MASTER_SPEC.md`
2. `EXAM_ALIGNMENT_SPEC.md`
3. 系列 `SPEC.md`
4. `STATUS.md`
5. `HANDOFF.md`
6. question-only intake
7. 公式「問題」PDFのみ

candidate固定前に開かないもの:

- Topic 38 source Markdown
- 練習source/PDF
- 解説PDF
- prior clean-blind candidate / QA
- 公式標準解答
- 保存済み正答を含むQA・commit diff

candidate固定後に初めて現行教材と公式標準解答へ照合し、25答案要素単位で教材依存性を判定する。

これは新仕様の追加ではなく、`EXAM_ALIGNMENT_SPEC.md` §10のfreshness要件を、実際のsource内容に合わせて適用した記録である。

exact blocker: `0件`。次工程は `TOPIC38_CLEAN_BLIND_V6`。
