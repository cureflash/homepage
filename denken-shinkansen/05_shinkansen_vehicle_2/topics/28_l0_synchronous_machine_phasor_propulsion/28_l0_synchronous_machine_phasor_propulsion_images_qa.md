# Topic 28 PowerPoint QA

更新日: 2026-09-20

判定: `PASS / POWERPOINT_COMPLETE`

## 対象

- `28_l0_synchronous_machine_phasor_propulsion_images.pptx`
- canonical blob SHA: `b677f457c8e8f6aebcfebeeecd0b68ff7736883b`
- file size: `241,446 bytes`
- SHA-256: `48c2ed316625d3df369f38b4c08e1885c60222b6915a36a8862368da6e782a21`
- 16:9 / `6 slides`

## reconcile / artifact identity

最新main、系列 `STATUS.md` / `HANDOFF.md`、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、Topic 27最終成果、Topic 28の制作前EXAM_ALIGNMENT・解説source/PDF・練習source/PDF、直近コミット、既存車両二種worker成果をreconcileした。

開始時点の正本は `topic_28_practice_pdf_complete` で、Topic 28 PowerPointは未作成だったため重複作業はない。Topic 26/27で確認済みのconnector経由binary upload truncateリスクを避け、GitHub Actions上で生成し、そのcanonical artifact自体を検証してmainへcommitした。

GitHub Actions run `35483141385`: `success`。canonical artifact commit: `8ca524e4836823d1f7df85dfabf5fc5ac00566bb`。

## canonical構造・表示QA

- GitHub Actions build/validation: `PASS`
- PPTX ZIP integrity: `PASS`
- python-pptx open: `PASS`
- slide count: `6 / 6`
- 16:9 geometry: `PASS`
- slide geometry bounds: `6 / 6 PASS`
- LibreOffice headless PDF変換: `6 / 6 pages PASS`
- `pdftotext -layout`: `PASS`（`10,882 bytes`）
- 必須表示トークン: `PASS`
- 置換文字 `�`: `0件`

## EXAM_ALIGNMENT gate

固定EXAM_ALIGNMENTは変更していない。

1. R4 一次「機械」問1 `(1)〜(5)` — `5答案要素`
2. R7 二次「機械・制御」問1 — `6答案要素`
3. R5 二次「機械・制御」問1 — `6答案要素`
4. H29 二次「機械・制御」問1 — `6答案要素`
5. H27 二次「機械・制御」問1 — `4答案要素`

集計:
- 固定過去問: `5 / 5 connected`
- 一次答案要素: `5 / 5 connected`
- 二次答案要素: `22 / 22 connected`
- 合計答案要素: `27 / 27 connected`

## SPEC gate

SPEC必須8項目:
- フェーザ: `PASS`
- 内部誘導起電力: `PASS`
- 同期リアクタンス: `PASS`
- 負荷角: `PASS`
- 電力角特性: `PASS`
- 有効電力: `PASS`
- 無効電力: `PASS`
- 推進力: `PASS`

集計: `8 / 8 PASS`。

SPEC指定3可視化:
1. 電力角特性 `P=(VE/X_s)sinδ`: `PASS`
2. 負荷角―出力: `PASS`
3. 発電機 / 電動機フェーザ図: `PASS`

集計: `3 / 3 PASS`。

## 数値・式QA

- 発電機: `E=V+jX_sI`: `PASS`
- 電動機: `E=V-jX_sI`: `PASS`
- 円筒形・定常・平衡三相・電機子抵抗無視で `P=3VE/X_s sinδ`: `PASS`
- p.u.で `P=VE/X_s sinδ`: `PASS`
- 教材仮定 `V=1.0, E=1.6, X_s=0.8 p.u.` → `P_max=2.0 p.u.`: `PASS`
- `δ=30°` → `P=1.00 p.u.`: `PASS`
- `δ≈36.87°` → `P≈1.20 p.u.`: `PASS`
- `δ=60°` → `P≈1.73 p.u.`: `PASS`
- `δ=90°` → `P=2.00 p.u.`: `PASS`
- `P_e=24.3 MW`, `η=0.86` → `P_mech=20.898 MW≈20.90 MW`: `PASS`
- `v=139 m/s` → `F=P_mech/v≈150.35 kN≈150 kN`: `PASS`

## 境界・安全QA

- `δ=90°` を理想基本モデルの静的最大点に限定: `PASS`
- 電気有効電力を効率条件なしに実車推進力へ直接等置: `0件`
- 未確認L0系 `X_s,E,δ,P,Q,F,η` の真値化: `0件`
- L0系実車接続は確認済みの「三相交流→移動磁界→車上超電導磁石との吸引・反発による推進」まで: `維持`
- Topic 29浮上・案内系の先取り: `0件`
- 突極機二反作用・d-q軸・過渡/次過渡リアクタンスの追加: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外主題追加: `0件`
- exact blocker: `0件`

## Topic 21過去問固有注記

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更していない。

## 最終判定

判定: `PASS / POWERPOINT_COMPLETE`

Topic 28はまだ `completed` としない。次工程は、完成後clean blind独立再解答の候補を公式解答を先に見ずに固定し、その後公式照合・最終QAへ進む。
