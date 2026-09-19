# Topic 26 E7・W7系 勾配条件を含む総合走行解析 — 最終QA

更新日: 2026-09-20

判定: `PASS / COMPLETED`

## reconcile

最新main、系列 `STATUS.md` / `HANDOFF.md`、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、Topic 26全成果物、直近コミット、既存車両二種worker成果をreconcileした。

clean blind候補ファイル `26_e7_w7_gradient_integrated_running_analysis_blind_candidates.md` は lock commit `c52f45f7b56817e2a76e9c872758e41bd21c4a8c` で作成後、同ファイルへの追加commitがなく、公式照合後も blob SHA `8eec1ddb4285420828d134a2f28e6469ff33be5a` のまま維持されている。候補後編集は `0件`。

Topic 26に既存の最終QAはなく、既存workerの解説PDF QA、練習PDF QA、PowerPoint QA、clean blind公式照合QAを正本として採用し、重複再生成は行っていない。

## 成果物横断QA

### 解説source / PDF

- explanation source: `PASS / EXPLANATION_SOURCE_COMPLETE`
- source blob SHA: `e962b822d5d6af80fa9adf694250a3202e5a10ea`
- explanation PDF: `PASS / EXPLANATION_PDF_COMPLETE`
- canonical PDF blob SHA: `0d6c373ca4dc1edcc004be32666ac40f8607b6b4`
- file size: `10,902 bytes`
- A4縦: `3 pages`
- PDFium / Poppler: `3 / 3 PASS`
- 固定過去問: `5 / 5 covered`
- 一次答案要素: `10 / 10 covered`
- 二次答案要素: `6 / 6 covered`
- 合計答案要素: `16 / 16 covered`
- SPEC必須7項目: `7 / 7 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 3段階例題: `3 / 3 PASS`

### 練習source / PDF

- practice source: `PASS / PRACTICE_SOURCE_COMPLETE`
- source blob SHA: `4e1c26ddd981747b05a12d751bd83bfec8287888`
- 一次試験型: `8問`
- 二次試験型: `4問`
- 合計: `12問`
- practice PDF: `PASS / PRACTICE_PDF_COMPLETE`
- canonical PDF blob SHA: `8905c072f60a0b584c8cd7f439713606588bb500`
- file size: `11,005 bytes`
- A4縦: `4 pages`
- PDFium / Poppler: `4 / 4 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 数値・論理独立再計算: `12 / 12 PASS`
- 固定答案要素接続: `16 / 16`

### 解説画像PowerPoint

- `PASS / POWERPOINT_COMPLETE`
- canonical blob SHA: `999988097102c9674967abc8152c04ebf7904819`
- file size: `225,537 bytes`
- 16:9 / `6 slides`
- GitHub Actions canonical rebuild/validation: `PASS`
- ZIP integrity / python-pptx / geometry: `PASS`
- LibreOffice render: `6 / 6 PASS`
- 固定答案要素接続: `16 / 16`
- SPEC必須7項目: `7 / 7 PASS`
- SPEC指定3可視化: `3 / 3 PASS`

## clean blind過去問対応品質ゲート

正本: `26_e7_w7_gradient_integrated_running_analysis_clean_blind_official_match_qa.md`

- R7 二次「機械・制御」問2: `6 / 6 PASS`
- H26 一次「機械」問5: `3 / 3 PASS`
- H25 一次「機械」問3: `1 / 1 PASS`
- R5 一次「機械」問2: `3 / 3 PASS`
- H27 一次「機械」問3: `3 / 3 PASS`
- 一次答案要素: `10 / 10 PASS`
- 二次答案要素: `6 / 6 PASS`
- 合計答案要素: `16 / 16 PASS`
- 固定過去問: `5 / 5 PASS`
- 固定候補後編集: `0件`
- 不一致: `0件`

R7二次の固定候補 `1.55×10^3 W`、`1.18×10^3 min^-1`、`1.12×10^4 W` は公式標準解答 `1550 W`、`1180 min^-1`、`11200 W` と同値であり、不一致ではない。

## 仕様・境界QA

- `MASTER_SPEC.md` 過去問対応品質ゲート: `PASS`
- `EXAM_ALIGNMENT_SPEC.md` 完成後独立試験: `PASS`
- 系列 `SPEC.md` Topic 26必須7項目: `7 / 7 PASS`
- 系列 `SPEC.md` 指定3計算・グラフ: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 列車の勾配抵抗式・走行抵抗式を第二種公式過去問で直接出題されたとする記載: `0件`
- E7・W7系の実車事実は、確認済みの北陸新幹線30‰急勾配とE7系ブレーキ性能向上まで: `維持`
- 未確認の編成質量、主電動機出力、編成出力、実けん引力、実走行抵抗係数、実効率、回生限界の真値化: `0件`
- 教材用仮定値を実車値として扱う: `0件`
- Topic 21 H26二次 問1(4) `48.1 / 48.0 N·m` は `π=3.14` 相当の過去問固有丸め差として維持
- 一般式 `P=Tω`, `ω=2πN/60` 変更: `0件`
- SPEC外主題追加: `0件`
- exact blocker: `0件`

## 完成判定

Topic 26は全必須成果物、表示・構造QA、固定5問・16答案要素のclean blind公式照合、仕様境界をすべて満たしたため `PASS / COMPLETED`。

完成数: `26 / 39`。

## 次工程

Topic 27 `L0系① リニア同期モータ` の制作前EXAM_ALIGNMENT。公式第二種一次・二次過去問を先に確認し、系列SPECの同期機・移動磁界・極ピッチ・周波数・同期速度・電機子反作用・同期リアクタンスと指定2可視化へ必要な範囲だけ固定する。仕様不整合または確定不能事項があればexact blockerを記録して停止する。
