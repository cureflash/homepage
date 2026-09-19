# 25 N700S バッテリー自走のエネルギー設計 — 解説PDF QA

更新日: 2026-09-20

判定: `PASS / EXPLANATION_PDF_CANONICAL_REPAIR_COMPLETE`

## reconcile

最新main、`STATUS.md` / `HANDOFF.md`、固定EXAM_ALIGNMENT、解説source、練習source、直近commitを再確認した。既存workerが記録した `CANONICAL_ARTIFACT_IDENTITY_MISMATCH` を優先し、練習PDF以降へは進まず、解説PDF正本の修復と正本再QAだけを実施した。

## 正本artifact identity

- path: `25_n700s_battery_self_propulsion_energy_design_explanation.pdf`
- 修復commit: `31b90f6b7238a825986ca41ccedd7a0762300670`
- GitHub main blob SHA: `7588e85204db180eee2bd5e2494708df4810276e`
- pre-commit QA対象と同一blob: `PASS`
- file size: `13,227 bytes`
- SHA-256: `7a4acfc30141e48e0469ce271aaa357f367f27e8030e1ca7b6adc1bbefb6156e`
- A4縦: `3 pages`
- PDF `startxref`: `12753 < 13227` — 構造範囲内
- 旧破損blob `aeec135e3fcecd5002623c8ab8de7d5bf76bd5ea` / `9,982 bytes`: 正本から置換済み

GitHub `main` をbase64で再取得し、blob SHAが修復時に作成・事前QAしたblob `7588e85204db180eee2bd5e2494708df4810276e` と一致した。したがって下記render・文字抽出結果は正本と同一byte列に対するQAとして採用する。

## 表示・構造QA

- PDFium 180 dpi: `3 / 3 PASS`
- Poppler 180 dpi: `3 / 3 PASS`
- `pdftotext`: `PASS`
- 置換文字 `�`: `0件`
- 文字・表・グラフのクリッピング: `0件`
- 文字重なり: `0件`
- 日本語欠落グリフ: `0件`
- 黒四角・破損グリフ: `0件`
- SPEC指定3可視化: `3 / 3 PASS`
  - 走行時間―必要電力量
  - 速度条件―必要電力
  - 効率―必要電池容量

## 過去問対応品質ゲート

- 固定過去問: 第二種一次4問＋二次1問 = `5 / 5 covered`
- 一次答案要素: `20 / 20 covered`
- 二次答案要素: `8 / 8 covered`
- 合計答案要素: `28 / 28 covered`
- SPEC必須10項目: `10 / 10 covered`
- 3段階例題: `3 / 3 PASS`
- H23二次: S1・D2充電経路／降圧関係: `covered`
- H23二次: S2・D1放電経路／昇圧関係: `covered`
- H23二次: Cレート・端子電圧・充放電時間: `covered`
- H23二次: `I^2R` 損失・充電効率理由: `covered`
- 鉛蓄電池: Pb/PbO2、PbSO4、硫酸濃度・比重、約2.0 V、ファラデー則: `covered`
- リチウムイオン二次電池: 充放電、電極・電解質、約3.7 V論点、大電流時端子電圧、Wh/kg: `covered`

## 境界QA

- 固定EXAM_ALIGNMENT変更: `0件`
- 公式過去問本文の複製: `0件`
- 未確認N700S電池電圧・Ah・Wh・セル数・直並列数・Cレート・実電流・各効率の真値化: `0件`
- N700S実車事実: 東芝一次メーカー資料で確認済みのSCiB採用・バッテリー自走共同開発までに限定
- 未指定走行抵抗モデル追加: `0件`
- 速度条件―必要電力の3点: 教材用与件として明示し実車特性化 `0件`
- Topic 21 H26二次 問1(4) `48.1 / 48.0 N·m` 過去問固有丸め注記: `維持`
- 一般式 `P=Tω`, `ω=2πN/60` 変更: `0件`
- SPEC外主題追加: `0件`
- 新たなexact blocker: `0件`

## 完成判定

正本artifact identity blockerは解消。Topic 25全体はまだ `completed` ではなく、完成数は `24 / 39` のまま。

次工程: 既存の `PRACTICE_SOURCE_COMPLETE` を入力として練習PDFを生成し、表示・数式・単位・一次正答一意性・二次記述解答・固定28答案要素coverageをQAする。
