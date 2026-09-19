# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜24は最終QAまで `PASS / completed`。完成数は `24 / 39`。

現在地は `topic_25_blocked_canonical_explanation_pdf_identity`。active topicは Topic 25 `N700S バッテリー自走のエネルギー設計`。

## 今回のreconcile

最新main、系列 `STATUS.md` / `HANDOFF.md`、Topic 25固定EXAM_ALIGNMENT、解説source、解説PDF/PDF QA、練習source、直近commitを再確認した。

既存workerがこのrun中にTopic 25練習sourceまで進めたため、同工程は重複せずreconcileした。練習sourceは一次8問＋二次4問、固定5問・28答案要素へ接続済み。

その後、GitHub main正本の解説PDFについてartifact identity不整合を検出したため、後続工程を停止した。

## Topic 25 exact blocker

正本:
- path: `topics/25_n700s_battery_self_propulsion_energy_design/25_n700s_battery_self_propulsion_energy_design_explanation.pdf`
- GitHub blob SHA: `aeec135e3fcecd5002623c8ab8de7d5bf76bd5ea`
- GitHub Contents API size: `9,982 bytes`
- PDF末尾 `startxref`: `13270`

直前QA記録:
- file size: `13,744 bytes`
- SHA-256: `991b93eddf35c4676ebb6e25f5676d1749bae78133f2d162db67262d543d1a74`
- PDFium/Poppler: `3 / 3 PASS`

`startxref=13270` がGitHub正本長 `9982` を超えており、正本は直前QA済みartifactと同一ではない。したがって直前のrender PASSをGitHub正本の品質証拠として採用しない。

判定: `BLOCKED / CANONICAL_ARTIFACT_IDENTITY_MISMATCH`。

解消条件: GitHub main正本を正常なPDFへ置換し、その正本そのものについてページ数・file size・SHA-256・PDFium/Poppler render・文字抽出・固定5問28答案要素・SPEC必須10項目・指定3可視化を再QAし、artifact identityを一致させる。

## Topic 25 練習source

成果物:
- `topics/25_n700s_battery_self_propulsion_energy_design/25_n700s_battery_self_propulsion_energy_design_practice_source.md`

判定:
- `PASS / PRACTICE_SOURCE_COMPLETE`
- 一次試験型: `8問`
- 二次試験型: `4問`
- 合計: `12問`
- 固定過去問: `5 / 5 connected`
- 一次答案要素: `20 / 20 connected`
- 二次答案要素: `8 / 8 connected`
- 合計答案要素: `28 / 28 connected`
- SPEC必須10項目: `10 / 10 covered`
- 数値・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 未確認N700S電池値の真値化: `0件`
- 未指定走行抵抗モデル追加: `0件`
- Topic 21一般式変更: `0件`

## Topic 25 固定EXAM_ALIGNMENT

1. R8 一次「機械」問5 `(1)〜(5)` — 5答案要素
2. R4 一次「機械」問6 `(1)〜(5)` — 5答案要素
3. R2 一次「機械」問4 `(1)〜(5)` — 5答案要素
4. R1 一次「機械」問4 `(1)〜(5)` — 5答案要素
5. H23 二次「機械・制御」問3 `(1)〜(4)` — 8答案要素

一次 `20`、二次 `8`、合計 `28`。固定EXAM_ALIGNMENT変更 `0件`。

## Topic 25 固定境界

N700S実車接続は東芝一次メーカー資料で確認済みのSCiB採用・バッテリー自走共同開発まで。未確認の電池電圧、Ah、Wh、セル数、直並列数、Cレート、実放電電流、各効率を真値化しない。速度条件―必要電力は与件の仮定入力比較に限定し、未指定走行抵抗モデルを追加しない。

## Topic 21 H26二次 問1(4)

`48.1 / 48.0 N·m` 差は公式標準解答が `π=3.14` 相当を用いた過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## 次の安全な工程

Topic 25解説PDFのGitHub正本artifactを修復し、正本再QAを完了する。修復完了まで練習PDF以降へ進まない。
