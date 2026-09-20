# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜29は最終QAまで `PASS / completed`。完成数 `29 / 39`。

現在地は `topic_30_explanation_pdf_complete`。Topic 30 `L0系④ 誘導集電・非接触電力伝送` は制作前EXAM_ALIGNMENT、解説source＋source QA、解説PDF＋PDF QAまで完了。次は練習source作成＋QA。

## Topic 30 解説PDF完了記録

判定: `PASS / EXPLANATION_PDF_COMPLETE`

canonical artifacts:
- PDF: `topics/30_l0_inductive_power_collection_contactless_power_transfer/30_l0_inductive_power_collection_contactless_power_transfer_explanation.pdf`
- QA: `topics/30_l0_inductive_power_collection_contactless_power_transfer/30_l0_inductive_power_collection_contactless_power_transfer_explanation_pdf_qa.md`
- PDF blob: `a3926909e5240e4d77042f12e903f299f81d6800`
- source blob: `4c65d9499783cf262f7cc5d9956bd75da7866cbc`

QA:
- A4縦 `7 pages`
- PDFium / Poppler `7 / 7 PASS`
- `pdftotext -layout` `PASS`
- 固定5問・25答案要素 `25 / 25 covered`
- 一次 `20 / 20 covered`
- 二次 `5 / 5 covered`
- SPEC必須7項目 `7 / 7 covered`
- 指定3可視化 `3 / 3 PASS`
- 未確認L0系実車値の真値化 `0件`
- 固定EXAM_ALIGNMENT変更 `0件`
- Topic 21一般式変更 `0件`
- exact blocker `0件`

既存workerが作成済みの一時PDF builderを引き継いで生成し、EXAM_ALIGNMENT/source工程は再実施していない。PDF QA通過後、一時builderは正本から除去済み。

## Topic 30 解説source完了記録

判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

canonical source:
- `topics/30_l0_inductive_power_collection_contactless_power_transfer/30_l0_inductive_power_collection_contactless_power_transfer_explanation_source.md`
- `topics/30_l0_inductive_power_collection_contactless_power_transfer/30_l0_inductive_power_collection_contactless_power_transfer_explanation_source_qa.md`

QA:
- 固定5問・25答案要素 `25 / 25 connected`
- SPEC必須7項目 `7 / 7 PASS`
- 指定3可視化 `3 / 3 PASS`
- 3段階例題 `3 / 3 PASS`
- 数式・単位・数値例 `PASS`
- 未確認L0系実車値の真値化 `0件`
- 固定EXAM_ALIGNMENT変更 `0件`
- Topic 21一般式変更 `0件`
- exact blocker `0件`

JR東海一次資料で確認した誘導集電の原理・L0系改良型での全面採用だけを実車事実として使用。鉄道総研のWPT資料は一般原理の参考に限定し、その装置定数をL0系へ転用していない。source中の `k`,`L`,`M`,`R`,周波数、伝送電力、効率、補償定数は教材用仮定値として明示済み。

## Topic 30 固定EXAM_ALIGNMENT

固定5問・25答案要素。教材制作中に差し替えない。

1. R8 一次「理論」問5 — 5答案要素
2. R7 一次「理論」問2 — 5答案要素
3. H30 一次「理論」問2 — 5答案要素
4. H30 一次「機械」問5 — 5答案要素
5. R2 二次「機械・制御」問2 — 5答案要素

制作前独立再計算・公式照合:
- 一次 `20 / 20 PASS`
- 二次 `5 / 5 PASS`
- 合計 `25 / 25 PASS`
- 公式照合不一致 `0件`
- exact blocker `0件`

正本:
- `topics/30_l0_inductive_power_collection_contactless_power_transfer/30_l0_inductive_power_collection_contactless_power_transfer.md`
- `topics/30_l0_inductive_power_collection_contactless_power_transfer/30_l0_inductive_power_collection_contactless_power_transfer_exam_alignment_qa.md`

## Topic 30 固定範囲

系列SPEC:
- 主題: 非接触給電を相互インダクタンスと結合回路として解析する
- 相互インダクタンス
- 結合係数
- 誘導起電力
- 等価回路
- 交流電力
- 力率
- 変換効率
- 可視化: 結合係数―伝送電力 / 負荷条件―効率 / 周波数特性

変圧器問題は結合回路・交流電力・損失・効率の二種試験対応橋渡しとして使用する。L0系非接触給電を通常変圧器と同一構造・同一定数とは扱わない。

未確認のL0系結合係数、自己・相互インダクタンス、抵抗、周波数、伝送電力、効率、ギャップ、コイル寸法等は真値化しない。教材用数値を置く場合は仮定値と明示する。

## 次の安全な工程

1. Topic 30練習sourceを作成する。
2. 固定5問25答案要素に対応する一次型・二次記述型の練習問題、解答、途中式、理由説明を整備する。
3. 一次 `20 / 20`、二次 `5 / 5`、SPEC必須7項目への接続をQAする。
4. source QAがPASSしたら練習PDFへ進む。
5. 固定EXAM_ALIGNMENTは差し替えない。
6. L0系実車値は一次資料で確認できたもの以外を真値化しない。
7. Topic 21 H26二次問1(4)の `48.1 / 48.0 N・m` は `π=3.14` 相当の過去問固有丸め差として維持し、一般式を変更しない。

教材完成後clean blindのcandidate固定前には、Topic 30 EXAM_ALIGNMENT本体、exam alignment QA、公式解答等のanswer-bearing資料を開かない。

## Topic 29 完了記録

- final QA: `PASS / COMPLETED`
- clean blind v2 candidate lock: `18b7ea1d8796a4802e63c78088bb1fae87e70601`
- compare QA: `PASS / 24_OF_24`
- candidate固定後修正: `0件`
- 一次 `20 / 20 PASS`
- 二次 `4 / 4 PASS`
- 合計 `24 / 24 PASS`
- SPEC必須8項目 `8 / 8 PASS`
- 指定3可視化 `3 / 3 PASS`
- exact blocker `0件`

canonical artifacts:
- 解説PDF `35ba843b81fd8fc08f76bd5de8aa9edee540d78f`
- 練習PDF `bebec9f9a6ed60178ca567e54060b37958ea2a27`
- PowerPoint `85394e303e8ff9bff19193a76b09d1db17406ec9`

H23二次問1(1)のcandidate `75.6 N・m` と公式 `75.7 N・m` は、一般式・途中量が一致し、公式表示から `π_eff≈3.14003` と逆算できるため `π=3.14` 相当の過去問固有丸め差として扱った。candidateは変更せず `PASS_WITH_ROUNDING_NOTE`。一般式は変更しない。

## Topic 21 H26二次 問1(4)

`48.1 N・m / 48.0 N・m` 差は既診断どおり、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
