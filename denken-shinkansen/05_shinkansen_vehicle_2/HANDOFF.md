# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜29は最終QAまで `PASS / completed`。完成数 `29 / 39`。

現在地は `topic_30_exam_alignment_complete`。Topic 30 `L0系④ 誘導集電・非接触電力伝送` は制作前EXAM_ALIGNMENTを完了。次は解説source作成。

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

SPEC必須7項目 `7 / 7 mapped`、指定3可視化 `3 / 3 mapped`。SPEC外主題追加0件。

変圧器問題は結合回路・交流電力・損失・効率の二種試験対応橋渡しとして使用する。L0系非接触給電を通常変圧器と同一構造・同一定数とは扱わない。

未確認のL0系結合係数、自己・相互インダクタンス、抵抗、周波数、伝送電力、効率、ギャップ、コイル寸法等は真値化しない。教材用数値を置く場合は仮定値と明示する。

## 次の安全な工程

1. Topic 30固定5問・25答案要素から必要説明を逆算して解説sourceを作成する。
2. SPEC必須7項目をすべて本文・解法・例題へ接続する。
3. 指定3可視化の式・仮定条件をsource内に固定する。
4. 二種一次だけでなく、R2二次「機械・制御」問2を途中式・力率・損失・効率まで教材だけで解けるようにする。
5. L0系実車値は一次資料で確認できたもの以外を真値化しない。
6. 解説source後、PDF・練習・PowerPoint・clean blindへ順に進める。

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
