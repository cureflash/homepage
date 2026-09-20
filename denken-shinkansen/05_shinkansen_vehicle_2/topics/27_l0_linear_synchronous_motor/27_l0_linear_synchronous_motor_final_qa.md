# Topic 27 最終QA

更新日: 2026-09-20

判定: `PASS / COMPLETED`

## reconcile対象

- `denken-shinkansen/MASTER_SPEC.md`
- `denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`
- `05_shinkansen_vehicle_2/SPEC.md`
- `05_shinkansen_vehicle_2/STATUS.md` / `HANDOFF.md`
- Topic 27の制作前EXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPoint、各QA
- clean blind候補固定・公式照合QA
- 直近mainコミットおよび既存車両二種worker成果

## 必須成果物

- 制作前EXAM_ALIGNMENT: `27_l0_linear_synchronous_motor.md` — `PASS`
- 解説source + QA — `PASS / EXPLANATION_SOURCE_COMPLETE`
- 解説PDF + QA — `PASS / EXPLANATION_PDF_COMPLETE`
  - canonical blob SHA: `10f17547d41a12d59ad76dcb33bc7a3a398f86a8`
- 練習source + QA — `PASS / PRACTICE_SOURCE_COMPLETE`
  - source blob SHA: `986b72ef8e509eff37bcad8132eff52b3086ffcb`
- 練習PDF + QA — `PASS / PRACTICE_PDF_COMPLETE`
  - canonical blob SHA: `a5f336100e3b9c0ca697f729f476d475c80782a0`
- 解説画像PowerPoint + QA — `PASS / POWERPOINT_COMPLETE`
  - canonical blob SHA: `fa47872508029438c1056ea8130b636e8bb4c75b`
- clean blind候補: `27_l0_linear_synchronous_motor_blind_candidates.md`
  - lock commit: `fe677eb5c89613a8ed06e1c2343a5cf0525f5d21`
  - lock/current blob SHA: `c9606b30811c630d8b1c90d56f4f552b9895abeb`
- clean blind公式照合QA — `PASS / CLEAN_BLIND_OFFICIAL_MATCH_COMPLETE`

## 過去問対応品質ゲート

- 固定過去問: `5 / 5 PASS`
- 一次答案要素: `18 / 18 PASS`
- 二次答案要素: `5 / 5 PASS`
- 合計答案要素: `23 / 23 PASS`
- candidate lock後の修正: `0件`
- 公式照合不一致: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`

## 教材・成果物QA

- SPEC必須7項目: `7 / 7 PASS`
  - 同期機、移動磁界、極ピッチ、周波数、同期速度、電機子反作用、同期リアクタンス
- SPEC指定2可視化: `2 / 2 PASS`
  - 周波数―同期速度
  - 極ピッチ―同期速度
- 固定教材必要説明8項目: `8 / 8 covered`
- 3段階例題: `3 / 3 PASS`
- 例題数値独立再計算: `3 / 3 PASS`
- 練習問題: 一次8問＋二次4問、`12 / 12` 数値・論理独立再計算PASS
- 一次正答一意性: `8 / 8 PASS`
- 解説PDF: A4縦3頁、PDFium / Poppler `3 / 3 PASS`
- 練習PDF: A4縦3頁、PDFium / Poppler `3 / 3 PASS`
- PowerPoint: 16:9・6枚、GitHub Actions canonical rebuild/validation・ZIP integrity・python-pptx・geometry・LibreOffice render `PASS`

## 固定境界

- L0系実車接続は一次資料で確認済みの「三相交流→ガイドウェイの移動磁界→車上超電導磁石との吸引・反発による推進」まで。
- 未確認のL0系極ピッチ、推進周波数、同期リアクタンス、推力等の真値化: `0件`
- 負荷角・フェーザ・出力角特性の本格解析はTopic 28へ維持。Topic 27での先取り: `0件`
- Topic 21 H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
- SPEC外主題追加: `0件`
- exact blocker: `0件`

## 結論

Topic 27は `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md` の必須成果物・一次/二次過去問対応品質ゲートを満たすため、`PASS / COMPLETED` とする。次の安全な工程は Topic 28 `L0系② 同期リアクタンスと出力` の制作前EXAM_ALIGNMENT。
