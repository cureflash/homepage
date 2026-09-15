# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-15

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: `8 / 22`
- current_status: `topic_09_practice_pdf_complete`
- last_completed_topic: `08 VVVFインバータで三相交流を作る`
- active_topic: `09 誘導電動機を自由に操るには？`
- next_start: Topic 09の解説画像PowerPointを作成する

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

## Topic 09 解説PDF
- [x] `09_induction_motor_control_explanation.pdf` 作成
- [x] A4縦4ページ
- [x] 200 dpi全ページ表示QA `4 / 4 PASS`
- [x] 文字抽出QA PASS
- [x] 3段階例題・固定5問18小問の解法経路をPDFへ維持
- [x] 固定範囲外論点・未確認300系実車値の追加 0件

## Topic 09 練習問題source
- [x] `09_induction_motor_control_practice.md` 作成
- [x] 一次試験型10問・全問五肢択一
- [x] 二次試験型5問・途中式／前提／単位／理由説明付き
- [x] 全15問に解答・完全解説あり
- [x] 数値・論理再検算 `15 / 15 PASS`
- [x] 一次問題の正答一意性 `10 / 10 PASS`
- [x] 固定5問・18小問を練習問題へ `18 / 18` マッピング
- [x] 固定範囲外論点・未確認300系実車値の追加 0件

## Topic 09 練習PDF
- [x] `09_induction_motor_control_practice.pdf` 作成
- [x] 一次10問＋二次記述5問を全件収録
- [x] A4縦6ページ
- [x] 200 dpi全ページ表示QA `6 / 6 PASS`
- [x] 文字抽出QA PASS
- [x] 主要計算値の再検算 PASS
- [x] 固定5問・18小問の解法経路を維持
- [x] 固定範囲外論点・未確認300系実車値の追加 0件

## 今回進めた内容
Topic 09「誘導電動機を自由に操るには？」の練習PDFを完成した。既存の練習sourceをreconcileして重複作成を避け、一次10問＋二次記述5問を全件収録した。A4縦6ページ、200 dpi全ページ表示QA `6 / 6 PASS`、文字抽出QA PASS、主要計算値の再検算PASS。固定一次3問＋二次2問・18小問の解法経路、固定範囲、未確認300系実車値を追加しない境界を維持した。

## 判定
Topic 09は `practice_pdf_complete`。完成数は `8 / 22` のまま。次は解説画像PowerPointを作成する。