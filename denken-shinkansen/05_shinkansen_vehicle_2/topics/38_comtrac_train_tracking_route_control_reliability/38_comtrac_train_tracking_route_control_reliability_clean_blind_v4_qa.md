# Topic 38 clean blind v4 QA

更新日: 2026-09-21

判定: `FAIL / OFFICIAL_MATCH_23_OF_25`

## freshness QA

- v4 candidate: `38_comtrac_train_tracking_route_control_reliability_clean_blind_v4_candidate.md`
- candidate固定commit: `4a2ee352f7496a8d1811fd8af9f2f2221b5ed738`
- candidate固定前の直近main reconcile: SHA / message / date等のmetadataのみ
- candidate固定前のv1〜v3 candidate・QA、保存済み正答、EXAM_ALIGNMENT QA、解説/練習source/PDF/QA、PowerPoint/QA、公式標準解答参照: `0件`
- candidate固定前に使用: `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md`、`HANDOFF.md`、question-only intake、固定5問の公式「問題」PDFのみ
- candidate固定後修正: `0件`

freshness判定: `PASS`。

## 公式標準解答一致QA

| 固定問題 | 一致 |
|---|---:|
| R8 一次「機械」問8 | `5 / 5` |
| R2 一次「機械」問8 | `4 / 5` |
| H29 一次「機械」問8 | `5 / 5` |
| H26 一次「機械」問3 | `5 / 5` |
| H23 一次「機械」問8 | `4 / 5` |

合計: `23 / 25 FAIL`。

不一致は2要素。

- R2 一次「機械」問8 (3)
  - frozen candidate: `(カ) 中断`
  - 公式標準解答: `(ヲ) 割込み`
- H23 一次「機械」問8 (3)
  - frozen candidate: `(ハ) ノイマン形コンピュータ`
  - 公式標準解答: `(ヌ) ノイマン形コンピュータ`
  - candidateは概念名をノイマン形と判断したが、選択肢記号を誤った。公式問題の `(ヌ)` がノイマン形コンピュータであり、`(ハ)` は別選択肢である。

candidateは固定後に変更しない。

## 教材だけで導出可能QA

candidate固定後にremediated explanation sourceを照合した。

- R8: `5 / 5` 教材接続
- R2: `5 / 5` 教材接続。sourceはイベント発生に応じて通常処理から所定処理へ制御を移す仕組みを `割込み` と明示し、ポーリングと区別している。
- H29: `5 / 5` 教材接続
- H26: `5 / 5` 教材接続
- H23: `5 / 5` 教材接続。sourceは記憶プログラム方式・逐次命令実行としてノイマン形コンピュータを明示している。

合計: `25 / 25 PASS`。

したがって2要素のFAILはいずれも教材欠落ではなく、fresh v4 candidateの独立再解答誤り。教材remediationを再実施しない。

## 品質ゲート判定

- 固定5問変更: `0件`
- 一次: 公式一致 `23 / 25 FAIL`
- 教材だけで導出可能: `25 / 25 PASS`
- 二次: `0問`、当該コア論点の直接対応なし・件数合わせ `0件`
- SPEC固定9項目: `9 / 9 PASS` を維持
- 未確認COMTRAC実装・数値の真値化: `0件`
- Topic 39先取り: `0件`
- Topic 21一般式変更: `0件`

`MASTER_SPEC.md` / `EXAM_ALIGNMENT_SPEC.md` の完成条件である独立再解答の公式標準解答一致 `25 / 25` を満たさないため、Topic 38をcompletedにしない。完成数は `37 / 39` のまま。

## exact blocker

`TOPIC38_CLEAN_BLIND_V4_OFFICIAL_MATCH_23_OF_25`: fresh clean blind v4の公式標準解答一致が `23 / 25` で必須 `25 / 25` を満たさない。R2一次「機械」問8(3)とH23一次「機械」問8(3)の2要素不一致。frozen candidateは修正しない。

次の安全な工程は、answer-bearingなv4 candidate/QA、v1〜v3 candidate/QA、保存済み正答、既存answer-bearing資料をcandidate固定前に参照していない別fresh workerによる clean blind v5。教材再生成・固定EXAM_ALIGNMENT変更・Topic 39先取りは行わない。
