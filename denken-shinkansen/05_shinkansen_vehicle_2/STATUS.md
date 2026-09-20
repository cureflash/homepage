# STATUS - 新幹線車両・電験二種

更新日: 2026-09-20

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `29 / 39`
- current_status: `topic_30_explanation_source_complete`
- last_completed_topic: `29 L0系③ 超電導磁気浮上の電磁力`
- active_topic: `30 L0系④ 誘導集電・非接触電力伝送`
- next_start: Topic 30の解説PDFをsourceから生成し、表示・数式・単位・可視化・過去問接続QAを行う

Topic 01〜29は `PASS / completed`。完成数 `29 / 39`。Topic 30は制作前EXAM_ALIGNMENTと解説source＋source QAまで完了した。

## Topic 30 解説source

判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

成果物:
- `topics/30_l0_inductive_power_collection_contactless_power_transfer/30_l0_inductive_power_collection_contactless_power_transfer_explanation_source.md`
- `topics/30_l0_inductive_power_collection_contactless_power_transfer/30_l0_inductive_power_collection_contactless_power_transfer_explanation_source_qa.md`

結果:
- 固定5問・25答案要素: `25 / 25 connected`
- SPEC必須7項目: `7 / 7 PASS`
- 指定3可視化: `3 / 3 PASS`
- 3段階例題: `3 / 3 PASS`
- 数式・単位・数値例: `PASS`
- 未確認L0系実車値の真値化: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

教材用結合回路の可視化条件は仮定値として固定し、L0系実機値へ一般化しない。変圧器問題は結合回路・交流電力・損失・効率の二種水準の橋渡しとして扱い、L0系非接触給電を通常変圧器と同一構造・同一定数とは扱わない。

## Topic 30 制作前EXAM_ALIGNMENT

判定: `PASS / EXAM_ALIGNMENT_COMPLETE`

固定5問・25答案要素:
1. R8 一次「理論」問5 — 5答案要素
2. R7 一次「理論」問2 — 5答案要素
3. H30 一次「理論」問2 — 5答案要素
4. H30 一次「機械」問5 — 5答案要素
5. R2 二次「機械・制御」問2 — 5答案要素

結果:
- 一次: `20 / 20 PASS`
- 二次: `5 / 5 PASS`
- 合計: `25 / 25 PASS`
- 公式照合不一致: `0件`
- SPEC必須7項目: `7 / 7 mapped`
- 指定3可視化: `3 / 3 mapped`
- SPEC外主題追加: `0件`
- 未確認L0系実車値の真値化: `0件`
- exact blocker: `0件`

正本:
- `topics/30_l0_inductive_power_collection_contactless_power_transfer/30_l0_inductive_power_collection_contactless_power_transfer.md`
- `topics/30_l0_inductive_power_collection_contactless_power_transfer/30_l0_inductive_power_collection_contactless_power_transfer_exam_alignment_qa.md`

## Topic 30 系列SPEC固定範囲

### 主題

非接触給電を相互インダクタンスと結合回路として解析する。

### 扱う内容

- 相互インダクタンス
- 結合係数
- 誘導起電力
- 等価回路
- 交流電力
- 力率
- 変換効率

### 計算・グラフ

- 結合係数―伝送電力
- 負荷条件―効率
- 周波数特性

固定EXAM_ALIGNMENTを教材制作中に差し替えない。未確認のL0系結合係数、自己・相互インダクタンス、抵抗、周波数、伝送電力、効率、ギャップ、コイル寸法等は真値化しない。

## Topic 29 最終結果

- final QA: `PASS / COMPLETED`
- clean blind v2 candidate lock: `18b7ea1d8796a4802e63c78088bb1fae87e70601`
- candidate固定後修正: `0件`
- 一次: `20 / 20 PASS`
- 二次: `4 / 4 PASS`
- 合計: `24 / 24 PASS`
- SPEC必須8項目: `8 / 8 PASS`
- 指定3可視化: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- exact blocker: `0件`

artifact:
- 解説PDF blob: `35ba843b81fd8fc08f76bd5de8aa9edee540d78f` / A4 4 pages / PDFium・Poppler `4 / 4 PASS`
- 練習PDF blob: `bebec9f9a6ed60178ca567e54060b37958ea2a27` / A4 11 pages / PDFium・Poppler `11 / 11 PASS`
- PowerPoint blob: `85394e303e8ff9bff19193a76b09d1db17406ec9` / 16:9 6 slides / render `6 / 6 PASS`

H23二次「機械・制御」問1(1)はcandidate `75.6 N・m`、公式 `75.7 N・m`。式・途中量は一致し、公式表示から `π_eff≈3.14003` と逆算できるため、`π=3.14` 相当の過去問固有丸め差として `PASS_WITH_ROUNDING_NOTE`。一般式は変更しない。

## Topic 21 H26二次 問1(4)

`48.1 N・m / 48.0 N・m` 差は既診断どおり、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
