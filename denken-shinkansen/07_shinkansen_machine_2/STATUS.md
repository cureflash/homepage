# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-15

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: `8 / 22`
- current_status: `topic_09_explanation_source_complete`
- last_completed_topic: `08 VVVFインバータで三相交流を作る`
- active_topic: `09 誘導電動機を自由に操るには？`
- next_start: Topic 09の解説PDFを作成し、全ページ表示QA・文字抽出QAを行う

## 完了テーマ
- [x] Topic 01 最終QA PASS
- [x] Topic 02 最終QA PASS
- [x] Topic 03 最終QA PASS
- [x] Topic 04 最終QA PASS
- [x] Topic 05 最終QA PASS
- [x] Topic 06 最終QA PASS
- [x] Topic 07 最終QA PASS
- [x] Topic 08 最終QA PASS

## Topic 09 制作前EXAM_ALIGNMENT
- [x] `MASTER_SPEC.md` / `EXAM_ALIGNMENT_SPEC.md` / 系列`SPEC.md`確認
- [x] 一次3問＋二次記述2問、計5問を固定
- [x] 固定範囲へ直接対応する18小問を品質ゲート対象化
- [x] 制作前独立検証 `18 / 18 PASS`
- [x] 固定範囲外論点による件数合わせ 0件
- [x] 未確認300系実車制御値の追加 0件

## Topic 09 解説source
- [x] 解説本文完成
- [x] 基礎・標準・複合の3段階例題完成
- [x] 固定5問・18小問を本文へ `18 / 18` マッピング
- [x] `N_s=120f/p`、`N=(1-s)N_s`、`f_2=sf`、`Φ∝V/f`、`P=Tω` の意味・成立条件・解法を収録
- [x] 定トルク→基底速度→弱め磁束・定出力を固定範囲内で整理
- [x] ベクトル制御は磁束成分・トルク成分、d軸/q軸の概念まで
- [x] Topic 10以降・厳密座標変換・制御器設計の追加 0件

## 今回進めた内容
Topic 09「誘導電動機を自由に操るには？」の解説本文＋3段階例題を完成した。固定一次3問＋二次2問・18小問を全件教材内へ接続し、総極数と極対数の記号差、同期速度・滑り・二次周波数、V/f一定、定トルク、弱め磁束・定出力、ベクトル制御概念までをSPEC範囲内で整理した。固定範囲外論点・未確認300系実車値は追加していない。

## 判定
Topic 09は `explanation_source_complete`。完成数は `8 / 22` のまま。次は解説PDF＋全ページ表示QA・文字抽出QA。