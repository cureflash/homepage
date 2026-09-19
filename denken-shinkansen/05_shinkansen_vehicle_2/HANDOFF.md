# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜26は最終QAまで `PASS / completed`。完成数は `26 / 39`。

現在地は `topic_26_completed`。次のactive topicは Topic 27 `L0系① リニア同期モータ`。

## 今回のreconcileと進行

最新main、系列 `STATUS.md` / `HANDOFF.md`、上位仕様、系列 `SPEC.md`、直近コミット、Topic 26制作前EXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPoint、LOCK済みclean blind候補、公式照合QA、既存車両二種worker成果をreconcileした。

既存workerの成果はすべて正本として再利用し、解説PDF・練習PDF・PowerPoint・clean blind公式照合の重複作業は行っていない。Topic 26に既存の最終QAがないことを確認し、次の安全な工程として成果物横断の最終QAだけを実施した。

判定は `PASS / COMPLETED`。固定5問・16答案要素は一次 `10 / 10 PASS`、二次 `6 / 6 PASS`、合計 `16 / 16 PASS`。SPEC必須7項目 `7 / 7 PASS`、指定3可視化 `3 / 3 PASS`、exact blocker `0件`。

## Topic 26 固定EXAM_ALIGNMENT

成果物:
- `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis.md`

固定問題:
1. R7二次「機械・制御」問2 `(1)〜(3)` — 6答案要素
2. H26一次「機械」問5 `(1),(4),(5)` — 3答案要素
3. H25一次「機械」問3 `(1)` — 1答案要素
4. R5一次「機械」問2 `(2),(3),(5)` — 3答案要素
5. H27一次「機械」問3 `(1),(2),(3)` — 3答案要素

集計:
- 一次: `4問・10答案要素`
- 二次: `1問・6答案要素`
- 合計: `5問・16答案要素`

列車の勾配抵抗式・走行抵抗式を直接問う第二種公式過去問は固定対象として確認できなかったため、直接出題とは記載しない。Topic 14で確定済みの `R_g=mg sinθ≈mgi`、`P=Fv` をSPEC必須事項として固定過去問の電動機・効率・回生論点へ接続する。

## Topic 26 成果物最終状態

### 解説source / PDF

- explanation source: `PASS / EXPLANATION_SOURCE_COMPLETE`
- source blob SHA: `e962b822d5d6af80fa9adf694250a3202e5a10ea`
- explanation PDF: `PASS / EXPLANATION_PDF_COMPLETE`
- canonical PDF blob SHA: `0d6c373ca4dc1edcc004be32666ac40f8607b6b4`
- A4縦: `3 pages`
- PDFium / Poppler: `3 / 3 PASS`
- 固定5問・16答案要素: `16 / 16 covered`
- SPEC必須7項目: `7 / 7 covered`
- 指定3可視化: `3 / 3 PASS`
- 3段階例題: `3 / 3 PASS`

### 練習source / PDF

- practice source: `PASS / PRACTICE_SOURCE_COMPLETE`
- source blob SHA: `4e1c26ddd981747b05a12d751bd83bfec8287888`
- 一次8問、二次4問、合計12問
- practice PDF: `PASS / PRACTICE_PDF_COMPLETE`
- canonical PDF blob SHA: `8905c072f60a0b584c8cd7f439713606588bb500`
- A4縦: `4 pages`
- PDFium / Poppler: `4 / 4 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 数値・論理独立再計算: `12 / 12 PASS`
- 固定答案要素接続: `16 / 16`

### PowerPoint

- `PASS / POWERPOINT_COMPLETE`
- canonical blob SHA: `999988097102c9674967abc8152c04ebf7904819`
- 16:9 / `6 slides`
- GitHub Actions canonical rebuild/validation: `PASS`
- ZIP integrity / python-pptx / geometry: `PASS`
- LibreOffice render: `6 / 6 PASS`
- 固定答案要素接続: `16 / 16`
- SPEC必須7項目: `7 / 7 PASS`
- 指定3可視化: `3 / 3 PASS`

## Topic 26 clean blind

候補:
- `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_blind_candidates.md`
- blob SHA: `8eec1ddb4285420828d134a2f28e6469ff33be5a`
- lock commit: `c52f45f7b56817e2a76e9c872758e41bd21c4a8c`
- lock後の同ファイル追加commit: `0件`

公式照合:
- `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_clean_blind_official_match_qa.md`
- R7二次 問2: `6 / 6 PASS`
- H26一次 問5: `3 / 3 PASS`
- H25一次 問3: `1 / 1 PASS`
- R5一次 問2: `3 / 3 PASS`
- H27一次 問3: `3 / 3 PASS`
- 一次: `10 / 10 PASS`
- 二次: `6 / 6 PASS`
- 合計: `16 / 16 PASS`
- 不一致: `0件`

R7二次の `1.55×10^3 W`、`1.18×10^3 min^-1`、`1.12×10^4 W` は公式標準解答 `1550 W`、`1180 min^-1`、`11200 W` と同値。

## Topic 26 最終QA

成果物:
- `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_final_qa.md`

判定:
- `PASS / COMPLETED`
- 固定過去問: `5 / 5 PASS`
- 一次答案要素: `10 / 10 PASS`
- 二次答案要素: `6 / 6 PASS`
- 合計答案要素: `16 / 16 PASS`
- SPEC必須7項目: `7 / 7 PASS`
- SPEC指定3可視化: `3 / 3 PASS`
- candidate lock後の修正: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- exact blocker: `0件`

## 固定境界

- Topic 26固定EXAM_ALIGNMENT: `5問・16答案要素`
- E7・W7系の実車事実は、確認済みの北陸新幹線30‰急勾配とE7系ブレーキ性能向上まで
- 未確認のE7・W7編成質量、主電動機出力、編成出力、実けん引力、実走行抵抗係数、実効率、回生限界の真値化: `0件`
- 教材用仮定値を実車値として扱う: `0件`
- Topic 21 H26二次 問1(4)の `48.0 / 48.1 N·m` 差は公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持
- 一般式 `P=Tω`, `ω=2πN/60` 変更: `0件`
- SPEC外主題追加: `0件`

## 次の安全な工程

Topic 27 `L0系① リニア同期モータ` の制作前EXAM_ALIGNMENT。公式第二種一次・二次過去問を先に確認し、系列SPECの同期機、移動磁界、極ピッチ、周波数、同期速度、電機子反作用、同期リアクタンス、および指定2可視化（周波数―同期速度、極ピッチ―同期速度）へ必要な範囲だけ固定する。既存worker成果があれば先にreconcileし、仕様不整合または確定不能事項があればexact blockerを記録して停止する。
