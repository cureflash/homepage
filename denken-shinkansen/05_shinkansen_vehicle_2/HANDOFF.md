# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜25は最終QAまで `PASS / completed`。完成数は `25 / 39`。

現在地は `topic_26_clean_blind_official_match_complete`。active topicは Topic 26 `E7・W7系 勾配条件を含む総合走行解析`。

## 今回のreconcileと進行

最新main、系列 `STATUS.md` / `HANDOFF.md`、上位仕様、系列 `SPEC.md`、Topic 26制作前EXAM_ALIGNMENT・解説source/PDF・練習source/PDF・PowerPoint・LOCK済みclean blind候補をreconcileした。

次の安全な工程として、LOCK済み候補を一切編集せず、電気技術者試験センター公式解答・標準解答と照合した。固定5問・16答案要素は一次 `10 / 10 PASS`、二次 `6 / 6 PASS`、合計 `16 / 16 PASS`。不一致は0件。R7二次の科学表記候補 `1.55×10^3 W`、`1.18×10^3 min^-1`、`1.12×10^4 W` は公式標準解答 `1550 W`、`1180 min^-1`、`11200 W` と同値である。

固定EXAM_ALIGNMENT、SPEC必須7項目、指定3可視化、実車値境界、Topic 21一般式は変更していない。Topic 26は最終QA前のため、まだ `completed` と数えない。

## Topic 26 固定EXAM_ALIGNMENT

成果物:
- `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis.md`

判定:
- `PASS / EXAM_ALIGNMENT_COMPLETE`
- 固定過去問: `5問`
- 一次: `4問・10答案要素`
- 二次: `1問・6答案要素`
- 合計: `16答案要素`
- SPEC必須: 勾配抵抗、走行抵抗、必要けん引力、必要出力、効率、速度制限、回生条件の `7項目`
- SPEC指定可視化: 勾配―必要けん引力、速度―必要出力、勾配別走行条件比較の `3件`
- exact blocker: `0件`

固定問題:
1. R7二次「機械・制御」問2 `(1)〜(3)` — 6答案要素
2. H26一次「機械」問5 `(1),(4),(5)` — 3答案要素
3. H25一次「機械」問3 `(1)` — 1答案要素
4. R5一次「機械」問2 `(2),(3),(5)` — 3答案要素
5. H27一次「機械」問3 `(1),(2),(3)` — 3答案要素

列車の勾配抵抗式・走行抵抗式を直接問う第二種公式過去問は固定対象として確認できなかったため、直接出題とは記載しない。Topic 14で確定済みの `R_g=mg sinθ≈mgi`、`P=Fv` をSPEC必須事項として固定過去問の電動機・効率・回生論点へ接続する。

## Topic 26 解説source / PDF

- 解説source: `PASS / EXPLANATION_SOURCE_COMPLETE`
- 解説PDF: `PASS / EXPLANATION_PDF_COMPLETE`
- PDF canonical blob SHA: `0d6c373ca4dc1edcc004be32666ac40f8607b6b4`
- A4縦 `3 pages`
- PDFium / Poppler: `3 / 3 PASS`
- 固定5問・16答案要素: `16 / 16 covered`
- SPEC必須7項目: `7 / 7 covered`
- 指定3可視化: `3 / 3 PASS`
- 3段階例題: `3 / 3 PASS`
- 実車値境界違反: `0件`

## Topic 26 練習source

成果物:
- `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_practice_source.md`

判定:
- `PASS / PRACTICE_SOURCE_COMPLETE`
- 一次試験型: `8問`
- 二次試験型: `4問`
- 合計: `12問`
- 固定過去問: `5 / 5 connected`
- 一次答案要素: `10 / 10 connected`
- 二次答案要素: `6 / 6 connected`
- 合計答案要素: `16 / 16 connected`
- SPEC必須7項目: `7 / 7 covered`
- SPEC指定3可視化の計算系: `3 / 3 aligned`
- 数値・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- exact blocker: `0件`

## Topic 26 練習PDF

成果物:
- `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_practice.pdf`
- canonical blob SHA: `8905c072f60a0b584c8cd7f439713606588bb500`
- `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_practice_pdf_qa.md`

判定:
- `PASS / PRACTICE_PDF_COMPLETE`
- file size: `11,005 bytes`
- SHA-256: `6c54571db61e98f8251e7171291a5a5bc57afaf751ff7e194240021b2009441e`
- A4縦: `4 pages`
- PDFium / Poppler: `4 / 4 PASS`
- `pdftotext`: `PASS`（6,415 bytes）
- 置換文字: `0件`
- 一次8問＋正答・完全解説: `8 / 8`
- 二次4問＋完全解説: `4 / 4`
- 数値・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定5問: `5 / 5 connected`
- 一次答案要素: `10 / 10 connected`
- 二次答案要素: `6 / 6 connected`
- 合計: `16 / 16 connected`
- SPEC必須7項目: `7 / 7 covered`
- 指定3可視化の計算接続: `3 / 3 aligned`
- exact blocker: `0件`

## Topic 26 PowerPoint

成果物:
- `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_images.pptx`
- canonical blob SHA: `999988097102c9674967abc8152c04ebf7904819`
- `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_images_qa.md`

判定:
- `PASS / POWERPOINT_COMPLETE`
- 16:9: `6 slides`
- file size: `225,537 bytes`
- SHA-256: `67dadfdd3ef0a0a5f8b07018c9ee87a31ecd86571e1d16f74ca6b6f90e6ae4e9`
- GitHub Actions canonical rebuild/validation: `PASS`
- PPTX ZIP / python-pptx / geometry: `PASS`
- LibreOffice PDF変換: `6 / 6 PASS`
- `pdftotext -layout`: `PASS`（8,858 bytes）
- 置換文字: `0件`
- 固定5問: `5 / 5 connected`
- 一次答案要素: `10 / 10 connected`
- 二次答案要素: `6 / 6 connected`
- 合計: `16 / 16 connected`
- SPEC必須7項目: `7 / 7 PASS`
- 指定3可視化: `3 / 3 PASS`
- 数値再確認: `PASS`
- 初回binary upload truncate: `検出・無効化・再生成済み`
- exact blocker: `0件`

## Topic 26 clean blind候補固定

成果物:
- `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_blind_candidates.md`

判定:
- `LOCKED / COMPARED_TO_OFFICIAL_ANSWERS_WITHOUT_EDIT`
- 固定過去問: `5 / 5 candidate fixed`
- 一次答案要素: `10 / 10 candidate fixed`
- 二次答案要素: `6 / 6 candidate fixed`
- 合計答案要素: `16 / 16 candidate fixed`
- 候補固定時点の公式解答参照: `0件`
- 教材外知識での補完: `0件`
- candidate lock後の修正: `0件`
- exact blocker: `0件`

R7二次固定候補:
- `(1)` `s1=3.50 %`, `T1=181 N·m`
- `(2)` `P_c2=798 W`, `P_f=1.55×10^3 W`
- `(3)` `N2=1.18×10^3 min^-1`, `P2=1.12×10^4 W`

一次固定候補:
- H26問5 `(1)=(ロ)`, `(4)=(ヲ)`, `(5)=(ニ)`
- H25問3 `(1)=(ヨ)`
- R5問2 `(2)=(ホ)`, `(3)=(チ)`, `(5)=(ル)`
- H27問3 `(1)=(ヘ)`, `(2)=(ヌ)`, `(3)=(ト)`

## Topic 26 clean blind公式照合

成果物:
- `topics/26_e7_w7_gradient_integrated_running_analysis/26_e7_w7_gradient_integrated_running_analysis_clean_blind_official_match_qa.md`

判定:
- `PASS / CLEAN_BLIND_OFFICIAL_MATCH_COMPLETE`
- 固定過去問: `5 / 5 PASS`
- 一次答案要素: `10 / 10 PASS`
- 二次答案要素: `6 / 6 PASS`
- 合計答案要素: `16 / 16 PASS`
- 固定候補の後編集: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 不一致: `0件`
- exact blocker: `0件`

## 固定境界

- Topic 26固定EXAM_ALIGNMENT: `5問・16答案要素`
- Topic 26で未確認のE7・W7実車値を真値化: `0件`
- Topic 26で未確認走行抵抗経験式・係数を実車値として追加: `0件`
- 数値例・3可視化・練習問題の仮定値を実車値として扱う: `0件`
- Topic 21 H26二次 問1(4)の過去問固有丸め注記を維持。一般式 `P=Tω`, `ω=2πN/60` 変更: `0件`
- Topic 26固定過去問へのH26二次 問1(4)重複採用: `0件`
- SPEC外主題追加: `0件`

## 次の安全な工程

Topic 26最終QA。解説source/PDF、練習source/PDF、PowerPoint、clean blind公式照合を横断し、固定5問・16答案要素、SPEC必須7項目、指定3可視化、実車値境界を再確認する。すべてPASSの場合のみ Topic 26 を `PASS / COMPLETED` とし、完成数を `26 / 39` へ進める。固定EXAM_ALIGNMENT、実車値境界、Topic 21一般式は変更しない。
