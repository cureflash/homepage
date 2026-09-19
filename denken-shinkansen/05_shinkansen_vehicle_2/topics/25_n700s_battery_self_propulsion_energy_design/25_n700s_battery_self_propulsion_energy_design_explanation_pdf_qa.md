# 25 N700S バッテリー自走のエネルギー設計 — 解説PDF QA

更新日: 2026-09-20

判定: `BLOCKED / CANONICAL_ARTIFACT_IDENTITY_MISMATCH`

## exact blocker

GitHub main正本の解説PDFと、直前QAで記録された検証対象のartifact identityが一致しない。

- 正本path: `25_n700s_battery_self_propulsion_energy_design_explanation.pdf`
- GitHub main blob SHA: `aeec135e3fcecd5002623c8ab8de7d5bf76bd5ea`
- GitHub Contents API size: `9,982 bytes`
- 直前QA記録: `13,744 bytes`, SHA-256 `991b93eddf35c4676ebb6e25f5676d1749bae78133f2d162db67262d543d1a74`
- 正本PDF末尾の `startxref`: `13270`

`startxref=13270` が正本ファイル長 `9982` を超えているため、GitHub正本を直前QA済みPDFと同一artifactとして扱えない。直前の `PDFium 3/3 PASS` / `Poppler 3/3 PASS` はGitHub main正本に対する再検証結果として採用しない。

## reconcile

- 最新mainで既存workerがTopic 25練習sourceまで進めたことを確認: `PASS`
- 練習sourceの重複作業: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21 H26二次 問1(4)の一般式変更: `0件`
- 新たな内容推測・実車値真値化: `0件`

## 品質ゲート

MASTER_SPEC / EXAM_ALIGNMENT_SPECの正本成果物QAを満たせないため、Topic 25の後続PDF工程・PowerPoint・clean blindへの進行を停止する。

解消条件は、GitHub main上の解説PDFを正常なartifactへ置換した後、その正本そのものについてページ数・file size・SHA-256・PDFium/Poppler render・文字抽出・固定5問28答案要素・SPEC必須10項目・指定3可視化を再QAし、artifact identityを一致させること。
