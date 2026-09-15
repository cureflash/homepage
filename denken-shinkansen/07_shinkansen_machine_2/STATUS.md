# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-15

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: `8 / 22`
- current_status: `topic_09_source_progress_synced`
- last_completed_topic: `08 VVVFインバータで三相交流を作る`
- active_topic: `09 誘導電動機を自由に操るには？`
- next_start: Topic 09最終QAを再判定する

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

## Topic 09 解説画像PowerPoint
- [x] `09_induction_motor_control_images.pptx` 作成
- [x] 16:9・4スライド
- [x] 固定5問・18小問の解法経路を可視化
- [x] V/f一定、基底速度、弱め磁束・定出力、一次電圧制御、ベクトル制御概念を固定範囲内で整理
- [x] 200 dpi全スライド表示QA `4 / 4 PASS`
- [x] overflow検査 0件
- [x] PPTX ZIP整合性 PASS
- [x] 固定範囲外論点・未確認300系実車値の追加 0件

## Topic 09 完成後独立再解答
- [x] 保存済み公式解答・標準解答を先に見ず、完成教材だけで式選択・途中式・理由説明まで再構築
- [x] R02 一次 機械 問3 (1)〜(5): `5 / 5 PASS`
- [x] H26 一次 機械 問5 (3)〜(5): `3 / 3 PASS`
- [x] H25 一次 機械 問3 (3),(4): `2 / 2 PASS`
- [x] R04 二次 機械・制御 問3 (6): `1 / 1 PASS`
- [x] R02 二次 機械・制御 問1 (1)〜(7): `7 / 7 PASS`
- [x] 合計 `18 / 18 PASS`
- [x] 教材外知識補完 0件
- [x] 固定EXAM_ALIGNMENT・固定範囲・問題・正答の変更 0件
- [x] Topic 10以降・厳密Park/Clarke変換・制御器設計・センサレス推定器設計・未確認300系実車値の追加 0件

## Topic 09 最終QA
- [x] 必須成果物5件の存在確認 PASS
- [x] 一次3問＋二次2問・18小問のEXAM_ALIGNMENT確認 PASS
- [x] 完成後独立再解答 `18 / 18 PASS`、教材外補完0件を確認
- [x] 解説PDF表示QA `4 / 4 PASS`・文字抽出QA PASSの記録確認
- [x] 練習PDF表示QA `6 / 6 PASS`・文字抽出QA・主要計算再検算PASSの記録確認
- [x] PowerPoint表示QA `4 / 4 PASS`・overflow 0件・ZIP整合性PASSの記録確認
- [x] 固定範囲境界 PASS
- [x] 進捗記録整合: `09_induction_motor_control_practice.md` 末尾を実成果物へ同期済み

## 今回進めた内容
Topic 09「誘導電動機を自由に操るには？」の前回最終QAで唯一残った進捗記録不整合を修正した。`09_induction_motor_control_practice.md` 末尾 `## 次工程` を、実在する練習PDF・PowerPoint・完成後独立再解答の現在地へ同期した。

変更は進捗記録のみ。技術本文・固定EXAM_ALIGNMENT・15問・解答解説・問題・正答・PDF/PPTXは変更していない。

## 判定
Topic 09は `IN_PROGRESS`。前回最終QAの唯一の不整合は解消済みだが、最終QAの再判定前なので完成数は `8 / 22` のまま。次はTopic 09最終QAを再判定する。
