# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-17

## 現在地
- Topic 01〜15: 最終QA `PASS / completed`
- 完成数: `15 / 22`
- active topic: `16 N700Sバッテリーから主回路へ電力を送る`
- current status: `topic_16_exam_alignment_complete`
- 次工程: Topic 16 解説source作成

仕様authorityは `denken-shinkansen/MASTER_SPEC.md`、`denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`。仕様追加はしない。

## reconcile結果
- 最新main、系列 `STATUS.md` / `HANDOFF.md`、Topic 15既存成果物を確認した。
- Topic 01〜15は最終QA `PASS / completed` のまま変更なし。
- 最初の未完了テーマは Topic 16。
- Topic 16の系列SPEC固定範囲は、リチウムイオン電池、起電力、内部抵抗、放電電流、電圧降下、Ah、Wh、C-rate、DCリンク、DC/DC変換の概念、変換効率。
- 制作前EXAM_ALIGNMENTを `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link.md` に作成した。
- R08一次「機械」まで直近年度から確認し、固定範囲へ直接対応する一次4問＋二次記述1問、計5問・12答案要素を品質ゲート対象として固定した。
- R07一次「機械」問5は一般電気化学・鉛蓄電池が中心で固定範囲への直接性が低いため、件数合わせでは採用しない。
- 未確認N700S実車値、Topic 17以降の論点、電池材料反応・BMS、チョッパ回路詳細の仕様追加は `0件`。
- 固定問題の正答記号・完成済み数値解の保存は `0件`。完成教材後のblind独立再解答まで参照しない。

## Topic 15 最終状態
- 固定一次3問＋二次記述2問、5問・8答案要素
- 完成後独立再解答 `8 / 8 PASS`
- 必須成果物、練習・PDF/PPTX QA、仕様境界、進捗整合: PASS
- 最終判定: `PASS / completed`

## Topic 16 固定EXAM_ALIGNMENT
- R02 一次 機械 問4 (1),(4),(5) — 3答案要素
  - リチウムイオン二次電池の公称電圧、大電流放電時の電圧低下、`Wh=VIt` と重量エネルギー密度
- H30 一次 機械 問6 (3),(4) — 2答案要素
  - `Ah=It` による放電時間、`Wh/Ah` による平均電圧
- H26 一次 機械 問3 (1) — 1答案要素
  - 蓄電池を電力変換装置の直流回路へ接続する構成
- H18 一次 機械 問3 (1) — 1答案要素
  - 直流入力から直流出力を得るDC/DCコンバータの識別
- H23 二次 機械・制御 問3 (3),(4) — 5答案要素
  - 内部抵抗＋起電力モデル、C-rate、充放電電流、端子電圧波形、充放電時間、内部抵抗損と充電効率

一次4問＋二次記述1問、計5問。品質ゲート対象は12答案要素。

## Topic 16 制作前ゲート
- [x] `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、最新 `STATUS.md`、`HANDOFF.md` を確認
- [x] R08一次「機械」まで直近年度から公式過去問を確認
- [x] 一次・二次を含む固定5問・12答案要素を確定
- [x] 関連する二次記述 H23「機械・制御」問3を含めた
- [x] 固定範囲外を件数合わせで追加していない
- [x] 未確認N700S実車値追加 `0件`
- [x] Topic 17以降先取り `0件`
- [x] 正答記号・完成済み数値解保存 `0件`
- [x] 参考教材2系統以上を確認
- 判定: `PASS / topic_16_exam_alignment_complete`

## 次に行うこと
固定EXAM_ALIGNMENTを変更せず、Topic 16解説sourceを作成する。`V=E-Ir`、Ah/Wh、C-rate、`I²r`、DC/DCとDCリンク、変換効率を、固定12答案要素を教材だけで解ける粒度まで説明する。N700Sの数値は一次資料確認済みの値だけを実車値として扱う。
