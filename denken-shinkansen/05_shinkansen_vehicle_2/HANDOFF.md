# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜30は最終QAまで `PASS / completed`。完成数 `30 / 39`。

現在地は `topic_31_exam_alignment_complete`。Topic 31 `補助電源変換器` は制作前EXAM_ALIGNMENTまで完了。次は解説source。

## Topic 31 EXAM_ALIGNMENT完了記録

判定: `PASS / EXAM_ALIGNMENT_COMPLETE`

canonical artifacts:
- `topics/31_auxiliary_power_converter/31_auxiliary_power_converter.md`
- `topics/31_auxiliary_power_converter/31_auxiliary_power_converter_exam_alignment_qa.md`

固定5問:
- R7 一次「機械」問4 `5 / 5 PASS`
- R5 二次「機械・制御」問3 `7 / 7 PASS`
- R4 一次「機械」問4 `5 / 5 PASS`
- R2 二次「機械・制御」問2 `5 / 5 PASS`
- H22 一次「機械」問3 `5 / 5 PASS`
- 一次 `15 / 15 PASS`
- 二次 `12 / 12 PASS`
- 合計 `27 / 27 PASS`
- SPEC固定8項目 `8 / 8 mapped`
- 二次記述・計算問題 `2問`
- 未確認実車値の真値化 `0件`
- exact blocker `0件`

固定境界:
- R2二次問2は固定損・負荷依存損失・負荷率・効率の一般モデルへだけ接続する。変圧器固有の `鉄損=銅損` を補助電源変換器の普遍則にしない。
- H22一次問3の太陽光・MPPT固有事項は教材範囲へ追加しない。
- R5二次問3の能動フィルタを実車補助電源の搭載事実として扱わない。
- 補助電源方式、回路トポロジー、定格、周波数、容量、素子、損失、効率は一次資料確認なしに真値化しない。

## Topic 30 完了記録

判定: `PASS / COMPLETED`

clean blind:
- candidate: `topics/30_l0_inductive_power_collection_contactless_power_transfer/30_l0_inductive_power_collection_contactless_power_transfer_clean_blind_candidate.md`
- candidate blob: `33b53e26f54b8619da9819e2ce48cb2250ad13b1`
- candidate lock commit: `a9295e2a018f4d75d3b99ac7c5c6c9044528c8e7`
- compare QA: `topics/30_l0_inductive_power_collection_contactless_power_transfer/30_l0_inductive_power_collection_contactless_power_transfer_clean_blind_compare_qa.md`
- candidate固定後修正: `0件`

完成後独立再解答:
- R8 一次「理論」問5 `5 / 5 PASS`
- R7 一次「理論」問2 `5 / 5 PASS`
- H30 一次「理論」問2 `5 / 5 PASS`
- H30 一次「機械」問5 `5 / 5 PASS`
- R2 二次「機械・制御」問2 `5 / 5 PASS`
- 一次 `20 / 20 PASS`
- 二次 `5 / 5 PASS`
- 合計 `25 / 25 PASS`
- 公式照合不一致 `0件`
- 固定EXAM_ALIGNMENT変更 `0件`
- exact blocker `0件`

canonical artifacts:
- 解説PDF: `topics/30_l0_inductive_power_collection_contactless_power_transfer/30_l0_inductive_power_collection_contactless_power_transfer_explanation.pdf` / blob `a3926909e5240e4d77042f12e903f299f81d6800` / A4縦7頁 / PDFium・Poppler `7 / 7 PASS`
- 練習PDF: `topics/30_l0_inductive_power_collection_contactless_power_transfer/30_l0_inductive_power_collection_contactless_power_transfer_practice.pdf` / blob `f1e9650e39e236a6fb3629fd93a234dfbafe89c2` / A4縦7頁 / PDFium・Poppler `7 / 7 PASS`
- PowerPoint: `topics/30_l0_inductive_power_collection_contactless_power_transfer/30_l0_inductive_power_collection_contactless_power_transfer_images.pptx` / blob `1b6841ad16eb59c9d9d80daf2cbdd51c45446641` / 16:9 6枚 / render `6 / 6 PASS`
- source/各QA: 同Topic 30ディレクトリのcanonical source・QAを使用
- 固定5問・25答案要素への教材接続 `25 / 25 PASS`
- SPEC必須7項目 `7 / 7 PASS`
- 指定3可視化 `3 / 3 PASS`
- 未確認L0系実車値の真値化 `0件`

R2二次問2はcandidateと公式の未丸め途中値に最終表示へ影響しない微小差があるが、5答案要素 `400 W / 624 W / 80.0 % / 99.0 % / 97.5 %` は公式表示と全一致。candidateは変更していない。

## Topic 31 固定範囲

系列SPECの `31 補助電源変換器` で扱う内容:
- インバータ
- コンバータ
- 三相負荷
- 力率
- 高調波
- 変換損失
- 効率
- 負荷変動

## 次の安全な工程

1. 最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md`、`HANDOFF.md`、直近worker成果をreconcileする。
2. 固定EXAM_ALIGNMENTは差し替えず、Topic 31解説sourceを作成する。
3. 固定5問・27答案要素を本文へ1対1で接続し、SPEC 8項目を欠落させない。
4. 実車接続は一次資料で確認できた事実だけを使い、未確認値は教材用仮定値として明示する。
5. R2二次問2の変圧器固有最大効率条件を変換器へ一般化しない。
6. source QAで `27 / 27`、SPEC `8 / 8`、範囲境界、未確認実車値0件を確認してからPDF工程へ進む。
7. 仕様不整合・確定不能事項が出た場合はexact blockerを記録して停止する。

Topic 31完成後のclean blind candidate固定前には、固定EXAM_ALIGNMENT本体、exam alignment QA、公式解答等のanswer-bearing資料を先に開かない。

## Topic 21 H26二次 問1(4)

`48.1 N・m / 48.0 N・m` 差は既診断どおり、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
