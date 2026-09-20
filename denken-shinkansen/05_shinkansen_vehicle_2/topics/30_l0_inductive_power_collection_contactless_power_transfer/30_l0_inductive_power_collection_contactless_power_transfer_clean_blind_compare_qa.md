# Topic 30 clean blind 比較QA

更新日: 2026-09-20

判定: `PASS / COMPLETED`

## candidate固定

- candidate: `30_l0_inductive_power_collection_contactless_power_transfer_clean_blind_candidate.md`
- candidate blob SHA: `33b53e26f54b8619da9819e2ce48cb2250ad13b1`
- candidate lock commit: `a9295e2a018f4d75d3b99ac7c5c6c9044528c8e7`
- candidate固定後修正: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`

candidate固定前は公式標準解答、Topic 30 EXAM_ALIGNMENT本体、exam alignment QA、保存済み比較結果等のanswer-bearing資料を参照していない。candidateをGitHubへ固定した後にのみ公式標準解答を開いて比較した。

公式出典: 一般財団法人 電気技術者試験センター 第二種電気主任技術者試験「過去の問題と解答」
- https://www.shiken.or.jp/chief/second/qa/
- 参照日: 2026-09-20

## 公式標準解答との比較

| 固定過去問 | candidate | 公式標準解答 | 判定 |
|---|---|---|---|
| R8 一次「理論」問5 | `ヲ / ト / ロ / チ / ル` | `ヲ / ト / ロ / チ / ル` | `5 / 5 PASS` |
| R7 一次「理論」問2 | `ヲ / ワ / チ / イ / ヨ` | `ヲ / ワ / チ / イ / ヨ` | `5 / 5 PASS` |
| H30 一次「理論」問2 | `ハ / ヨ / リ / ヌ / イ` | `ハ / ヨ / リ / ヌ / イ` | `5 / 5 PASS` |
| H30 一次「機械」問5 | `ホ / ワ / ヌ / カ / ヘ` | `ホ / ワ / ヌ / カ / ヘ` | `5 / 5 PASS` |
| R2 二次「機械・制御」問2 | `400 W / 624 W / 80.0 % / 99.0 % / 97.5 %` | `400 W / 624 W / 80.0 % / 99.0 % / 97.5 %` | `5 / 5 PASS` |

集計:
- 一次: `20 / 20 PASS`
- 二次: `5 / 5 PASS`
- 合計: `25 / 25 PASS`
- 公式照合不一致: `0件`
- 丸め注記追加: `0件`

R2二次問2ではcandidateの未丸め途中値と公式の途中値に最終表示へ影響しない微小差があるが、全5答案要素の公式表示値は一致している。candidate改変は行わない。

## 教材品質ゲート

既存の各工程QAをreconcileした。

- 解説source＋source QA: `PASS`
- 解説PDF＋PDF QA: `PASS`
- 練習source＋source QA: `PASS`
- 練習PDF＋PDF QA: `PASS`
- 解説画像PowerPoint＋QA: `PASS`
- 固定5問・25答案要素への教材接続: `25 / 25 PASS`
- SPEC必須7項目: `7 / 7 PASS`
- 指定3可視化: `3 / 3 PASS`
- 未確認L0系実車値の真値化: `0件`
- Topic 31範囲先取り: `0件`
- exact blocker: `0件`

## Topic 21不変条件

H26二次「機械・制御」問1(4)の `48.1 N・m / 48.0 N・m` 差は、既診断どおり公式標準解答の `π=3.14` 相当の数値処理による過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更していない。

## 最終判定

`PASS / COMPLETED`

Topic 30は `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`の完成後独立再解答ゲートを通過した。次工程はTopic 31「補助電源変換器」の制作前EXAM_ALIGNMENTである。