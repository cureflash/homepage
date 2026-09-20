# Topic 29 最終QA

更新日: 2026-09-20

判定: `PASS / COMPLETED`

## reconcile

最新main `b0986a5bc9c5261698581826f9ccf356b6ef51a2`、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、最新`STATUS.md` / `HANDOFF.md`、直近worker成果をreconcileした。既存のsource remediation・3artifact再同期・clean blind v2を重複実施していない。

## 固定EXAM_ALIGNMENT

- R8 一次「理論」問2: `5 / 5 PASS`
- R7 一次「理論」問2: `5 / 5 PASS`
- R4 一次「理論」問2: `5 / 5 PASS`
- R2 一次「理論」問2: `5 / 5 PASS`
- H23 二次「機械・制御」問1: `4 / 4 PASS`
- 一次: `20 / 20 PASS`
- 二次: `4 / 4 PASS`
- 合計: `24 / 24 PASS`
- candidate lock: `18b7ea1d8796a4802e63c78088bb1fae87e70601`
- candidate固定後修正: `0件`
- compare QA: `PASS / 24_OF_24`

H23(1)はcandidate `75.6 N・m`、公式標準解答 `75.7 N・m`。式・途中量は一致し、公式表示値から逆算した `π_eff≈3.14003` より、`π=3.14` 相当の過去問固有数値処理による丸め差と診断した。一般式・教材式は変更しない。

## artifact identity / QA

### 解説PDF

- source blob: `ac618a6ac5d0131ba68bfe55f0af58b38de37737`
- PDF blob: `35ba843b81fd8fc08f76bd5de8aa9edee540d78f`
- A4縦 `4 pages`
- PDFium `4 / 4 PASS`
- Poppler `4 / 4 PASS`
- 指定3可視化 `3 / 3 PASS`
- 判定: `PASS / EXPLANATION_ARTIFACT_RESYNC_COMPLETE`

### 練習PDF

- source blob: `604fcd377c8db66799c4b8938d7a815305405f8d`
- PDF blob: `bebec9f9a6ed60178ca567e54060b37958ea2a27`
- A4縦 `11 pages`
- PDFium / Poppler `11 / 11 PASS`
- 一次8問＋二次4問 `12 / 12収録 PASS`
- 判定: `PASS / PRACTICE_ARTIFACT_RESYNC_COMPLETE`

### PowerPoint

- PPTX blob: `85394e303e8ff9bff19193a76b09d1db17406ec9`
- 16:9 / `6 slides`
- python-pptx geometry `6 / 6 PASS`
- LibreOffice render `6 / 6 PASS`
- 判定: `PASS / POWERPOINT_ARTIFACT_RESYNC_COMPLETE`

## SPEC品質ゲート

系列SPEC Topic 29必須8項目:

1. ファラデーの法則
2. 相互誘導
3. 誘導電流
4. 磁気エネルギー
5. 電磁力
6. 超電導磁石
7. 浮上力
8. 案内力

`8 / 8 PASS`。

指定3可視化:

1. 磁束変化―誘導起電力
2. 速度―誘導電流
3. 速度―電磁力

`3 / 3 PASS`。

## 境界・不整合確認

- 固定EXAM_ALIGNMENT変更: `0件`
- L0系未確認実車値の真値化: `0件`
- 教材用仮定値と実車値の混同: `0件`
- Topic 30「誘導集電・非接触電力伝送」の先取り: `0件`
- source / artifact identity不整合: `0件`
- exact blocker: `0件`

## Topic 21 H26二次 問1(4)

`48.1 N・m / 48.0 N・m` 差は既診断どおり、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## 完了判定

`MASTER_SPEC.md` / `EXAM_ALIGNMENT_SPEC.md` / 系列`SPEC.md` の完成条件を満たすため、Topic 29を `completed` とする。系列完成数は `29 / 39`。次の安全な工程はTopic 30「L0系④ 誘導集電・非接触電力伝送」の制作前EXAM_ALIGNMENTである。