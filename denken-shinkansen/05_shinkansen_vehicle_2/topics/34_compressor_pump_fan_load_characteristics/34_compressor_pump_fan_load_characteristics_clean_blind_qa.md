# Topic 34 clean blind QA v1

更新日: 2026-09-21

## 判定

`FAIL / 26 of 27`

candidate正本:
- `34_compressor_pump_fan_load_characteristics_clean_blind_candidate.md`
- candidate固定commit: `851446050c4e4e7723373e3cabf715f58d24bc65`

candidateは公式解答を閲覧する前に固定した。固定後に公式標準解答と照合し、固定5問・27答案要素のうち26要素一致、1要素不一致だった。candidate固定後の書換えは行っていない。

## 問題別結果

| 公式過去問 | 答案要素 | 結果 |
|---|---:|---:|
| R7一次「機械」問2 | 5 | 4 / 5 |
| R6一次「機械」問2 | 5 | 5 / 5 |
| H25一次「機械」問3 | 5 | 5 / 5 |
| R7二次「機械・制御」問2 | 6 | 6 / 6 |
| R4二次「機械・制御」問3 | 6 | 6 / 6 |
| 合計 | 27 | 26 / 27 |

## 不一致の診断

R7一次「機械」問2(4)のみ不一致。

- candidate: `(リ) 無関係である`
- 公式標準解答: `(チ) r'_2`
- 問題文は「最大トルクは…[4]に関係なく一定」の形で、空欄[4]には「何に関係なく」の対象量を入れる必要がある。
- candidateは「最大トルク値は二次抵抗に依存しない」という物理関係自体は正しく把握していたが、空欄へ入る語を選択肢から対応付ける段階で文法上の主語・目的語を取り違えた。

## 教材不足かの切分け

clean blind固定後に解説sourceを確認したところ、`## 5. 誘導電動機のトルク特性` に以下が既に明記されている。

- `r'_2` を変えると最大トルクを生じる滑りは変わる。
- 最大トルク値そのものは理想化した式では `r'_2` に依存しない。

したがって今回の1要素FAILは、必要知識の教材欠落ではなく、穴埋め文の読解・選択肢対応ミスと診断する。既存の解説source/PDF、練習source/PDF、PowerPointを修正・再生成する根拠にはしない。

## 公式照合先

- R7一次標準解答: `https://www.shiken.or.jp/chief/upload/20250831_ch_second_a01.pdf`
- R6一次標準解答: `https://www.shiken.or.jp/chief/upload/20240818_ch_second_a01.pdf`
- H25一次標準解答: `https://www.shiken.or.jp/chief/upload/20130831_ch_second_a01.pdf`
- R7二次標準解答: `https://www.shiken.or.jp/chief/upload/20251116_ch_second_a01_tk.pdf`
- R4二次標準解答: `https://www.shiken.or.jp/chief/upload/20221113_ch_second_a01.pdf`

## 品質ゲート

- clean blind v1: `FAIL / 26 of 27`
- candidate固定後修正: `0件`
- 教材欠落によるFAIL: `0件`
- 公式問題・標準解答の確定不能事項: `0件`
- Topic 21一般式変更: `0件`
- 未確認実車値の真値化: `0件`
- Topic 35以降の先取り: `0件`

Topic 34は未完了。次工程は、本candidate・本QA・公式解答・その他answer-bearing資料を未閲覧のfresh workerによるclean blind v2。v2 candidate固定後にのみ公式照合する。