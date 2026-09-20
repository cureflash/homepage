# Topic 28 最終QA

更新日: 2026-09-20

判定: `PASS / COMPLETED`

## reconcile対象

- `denken-shinkansen/MASTER_SPEC.md`
- `denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`
- `05_shinkansen_vehicle_2/SPEC.md`
- `05_shinkansen_vehicle_2/STATUS.md` / `HANDOFF.md`
- Topic 28の制作前EXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPoint、各QA
- remediation V2 source / PDF QA
- fresh clean blind v2候補固定・公式照合QA
- 直近mainコミットおよび既存車両二種worker成果

## 必須成果物

- 制作前EXAM_ALIGNMENT: `28_l0_synchronous_machine_phasor_propulsion.md` — `PASS`
- 解説source remediation V2 — `PASS / SOURCE_REMEDIATION_V2_COMPLETE`
  - source blob SHA: `ca52ffa9625184be7d5b00844aa411b713b52141`
- 解説PDF + QA — `PASS / EXPLANATION_PDF_RESYNC_V2_COMPLETE`
  - canonical blob SHA: `774df59978f3b4952fceb04fa596f0a3b191899e`
  - A4縦5頁、PDFium / Poppler `5 / 5 PASS`
- 練習source + QA — `PASS / PRACTICE_SOURCE_COMPLETE`
  - source blob SHA: `6ae62109d1efa99fe3913ecb258a58f151b6968a`
- 練習PDF + QA — `PASS / PRACTICE_PDF_COMPLETE`
  - canonical blob SHA: `2c24d79caa33af88db01324007c312c2551356ec`
  - A4縦5頁、PDFium / Poppler `5 / 5 PASS`
- 解説画像PowerPoint + QA — `PASS / POWERPOINT_COMPLETE`
  - canonical blob SHA: `b677f457c8e8f6aebcfebeeecd0b68ff7736883b`
  - 16:9・6枚、ZIP integrity / python-pptx / geometry / LibreOffice render `PASS`
- fresh clean blind v2候補:
  - `28_l0_synchronous_machine_phasor_propulsion_fresh_blind_candidates_20260920_v2.md`
  - lock commit: `4694d60f3399e55ddb54e9c3d18792249d7d5e5c`
- fresh clean blind v2公式照合QA:
  - `28_l0_synchronous_machine_phasor_propulsion_fresh_blind_compare_qa_20260920_v2.md`
  - `PASS / 27_OF_27_PASS`

## 過去問対応品質ゲート

固定5問は変更していない。

- R4 一次「機械」問1: `5 / 5 PASS`
- R7 二次「機械・制御」問1: `6 / 6 PASS`
- R5 二次「機械・制御」問1: `6 / 6 PASS`
- H29 二次「機械・制御」問1 `(1),(2),(5)`: `6 / 6 PASS`
- H27 二次「機械・制御」問1: `4 / 4 PASS`

集計:
- 一次答案要素: `5 / 5 PASS`
- 二次答案要素: `22 / 22 PASS`
- 合計答案要素: `27 / 27 PASS`
- candidate lock後の修正: `0件`
- 公式照合不一致: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`

前回fresh blind `22 / 27 PASS` で露呈した教材不足は、candidateを変更せず教材側のみremediationした。

- R4固有条件の共通端子電圧上昇: remediation V2で補強 → v2 blind `PASS`
- H29の `K_SCR → X_s[p.u.]` 中間知識: remediation V2で補強 → v2 blind `PASS`

したがって、教材にない外部知識を補って正解した状態ではない。

## 教材・成果物QA

- SPEC必須8項目: `8 / 8 PASS`
  - フェーザ
  - 内部誘導起電力
  - 同期リアクタンス
  - 負荷角
  - 電力角特性
  - 有効電力
  - 無効電力
  - 推進力
- SPEC指定3可視化: `3 / 3 PASS`
  - 電力角特性
  - 負荷角―出力
  - フェーザ図
- 3段階例題: `3 / 3 PASS`
- 練習問題: 一次8問＋二次4問
- 練習数値・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 発電機/電動機の符号規約: `PASS`
- 相値式 / p.u.式の係数3の区別: `PASS`
- 短絡比の成立条件と逆数関係: `PASS`
- H29の力率角 `φ/θ` と負荷角 `δ` の区別: `PASS`

## 固定境界

- L0系実車接続は公開一次資料で確認済みの推進原理まで。
- 未確認のL0系実 `X_s`, `E`, `δ`, `P`, `Q`, 推力, 推進効率の真値化: `0件`
- `δ=90°` は円筒形・定常・平衡三相・抵抗/損失無視の基本モデルにおける静的最大点に限定。
- 電気有効電力を効率条件なしに実車推進力へ直接等置: `0件`
- Topic 29「L0系③ 超電導磁気浮上の電磁力」の先取り: `0件`
- 突極機二反作用、d-q軸、過渡・次過渡リアクタンスの追加: `0件`
- SPEC外主題追加: `0件`
- exact blocker: `0件`

## Topic 21 H26二次 問1(4)

`48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差という既存診断を維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## 結論

Topic 28は `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md` の必須成果物・一次/二次過去問対応品質ゲートを満たすため、`PASS / COMPLETED` とする。

次の安全な工程は Topic 29 `L0系③ 超電導磁気浮上の電磁力` の制作前EXAM_ALIGNMENT。本文制作前に公式過去問を一次・二次合わせ原則5問以上、二次対象論点が確認できる場合は最低1問含めて固定し、未確認L0系実値を真値化しない。
