# STATUS - 新幹線車両・電験二種

更新日: 2026-09-20

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `24 / 39`
- current_status: `topic_25_blocked_canonical_explanation_pdf_identity`
- last_completed_topic: `24 N700S 主電動機設計の比較`
- active_topic: `25 N700S バッテリー自走のエネルギー設計`
- next_start: GitHub main正本のTopic 25解説PDF artifact identityを修復し、正本そのものを再QAする。修復完了まで後続工程へ進まない

## Topic 25 練習source

既存worker成果をreconcile済み。重複作業なし。

- 判定: `PASS / PRACTICE_SOURCE_COMPLETE`
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

成果物:
- `topics/25_n700s_battery_self_propulsion_energy_design/25_n700s_battery_self_propulsion_energy_design_practice_source.md`

## Topic 25 exact blocker

解説PDFのGitHub main正本と直前QAのartifact identityが不一致。

- 正本blob SHA: `aeec135e3fcecd5002623c8ab8de7d5bf76bd5ea`
- GitHub Contents API size: `9,982 bytes`
- 直前QA記録: `13,744 bytes`, SHA-256 `991b93eddf35c4676ebb6e25f5676d1749bae78133f2d162db67262d543d1a74`
- 正本PDF末尾 `startxref`: `13270`
- `13270 > 9982` のため正本PDFを直前QA済みartifactとして扱えない

判定: `BLOCKED / CANONICAL_ARTIFACT_IDENTITY_MISMATCH`。

直前の `PDFium 3/3 PASS` / `Poppler 3/3 PASS` はGitHub main正本に対する再検証結果として無効化。Topic 25解説PDFの品質ゲートを再OPENする。

解消条件: 正常なPDFへ正本を置換し、その正本についてページ数・size・SHA-256・PDFium/Poppler・文字抽出・固定5問28答案要素・SPEC必須10項目・指定3可視化を再QAしてidentityを一致させる。

## Topic 25 固定EXAM_ALIGNMENT

1. R8 一次「機械」問5 `(1)〜(5)` — 5答案要素
2. R4 一次「機械」問6 `(1)〜(5)` — 5答案要素
3. R2 一次「機械」問4 `(1)〜(5)` — 5答案要素
4. R1 一次「機械」問4 `(1)〜(5)` — 5答案要素
5. H23 二次「機械・制御」問3 `(1)〜(4)` — 8答案要素

集計: 一次 `20`、二次 `8`、合計 `28`。固定EXAM_ALIGNMENT変更 `0件`。

## Topic 21 H26二次 問1(4)

`48.0 / 48.1 N·m` 差は公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## 完成数

Topic 01〜24: `PASS / completed`。完成数 `24 / 39`。Topic 25はblocker解消まで完成扱いにしない。
