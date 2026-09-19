# STATUS - 新幹線車両・電験二種

更新日: 2026-09-19

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `19 / 39`
- current_status: `topic_20_practice_pdf_complete`
- last_completed_topic: `19 ミニ新幹線 複電圧主回路`
- active_topic: `20 N700系 フィードバック制御`
- next_start: Topic 20解説画像PowerPoint。固定5問・19答案要素、一次8問＋二次4問、問題・正答・数式、SPEC指定10項目・3可視化を変更せずPPTX化・表示QAする

## 完了済み

Topic 01〜19は最終QAまで `PASS / completed`。完成数は `19 / 39`。

## Topic 20 現在地

- 制作前EXAM_ALIGNMENT: `PASS / EXAM_ALIGNMENT_COMPLETE`
- 解説source: `PASS / EXPLANATION_SOURCE_COMPLETE`
- 解説PDF: `PASS / EXPLANATION_PDF_COMPLETE`
- 練習source: `PASS / PRACTICE_SOURCE_COMPLETE`
- 練習PDF: `PASS / PRACTICE_PDF_COMPLETE`
- PowerPoint: `未実施`
- clean blind公式照合: `未実施 / PowerPoint完成後`
- 最終QA: `未実施`

## Topic 20 練習PDF

判定: `PASS / PRACTICE_PDF_COMPLETE`

成果物:
- 練習source: `topics/20_n700_feedback_control/20_n700_feedback_control_practice_source.md`
- 練習PDF: `topics/20_n700_feedback_control/20_n700_feedback_control_practice.pdf`
- QA: `topics/20_n700_feedback_control/20_n700_feedback_control_practice_qa.md`

品質:
- A4縦: `6 pages`
- PDFium / pdftoppm 180 dpi: `6 / 6 PASS` / `6 / 6 PASS`
- PDF構造・開封・文字抽出: `PASS`
- 問題見出し抽出: `12 / 12 PASS`
- 欠落グリフ・黒四角・重なり・クリップ: `0件`
- 一次試験型: `8問 / 全問五肢択一`
- 二次試験型: `4問 / 記述式`
- 完全解説: `12 / 12`
- 数値・式・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定公式過去問: `一次1問＋二次4問 / 5問 / 変更なし`
- 固定答案要素: `一次1＋二次18 / 19 / 19 covered`
- SPEC指定10項目: `10 / 10 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更 / 固定問題差替え / SPEC外追加 / 未確認N700系実車制御値の真値化: `0件`
- 公式解答・標準解答の個別正答参照・保存: `0件`
- 完成後clean blind公式照合: `未実施 / PowerPoint完成後`

## Topic 20 固定ゲート

固定公式過去問:
- H25 一次 機械 問6 `(1)`: 1要素
- R7 二次 機械・制御 問4 `(1)〜(5)`: 5要素
- R6 二次 機械・制御 問4 `(1)〜(4)`: 4要素
- R4 二次 機械・制御 問4 `(1)〜(4)`: 4要素
- R3 二次 機械・制御 問4 `(1)〜(5)`: 5要素
- 合計: `5問・19答案要素`

固定SPEC境界:
- 伝達関数
- ブロック線図
- 開ループ
- 閉ループ
- 一次遅れ
- 二次遅れ
- 時定数
- 定常偏差
- 過渡応答
- 安定性
- 指定可視化: `ステップ応答`、`ゲイン変更時の応答`、`時定数変更時の応答`

境界:
- PIDパラメータ設計・代表根近似を追加しない。
- 周波数応答・ボード線図、状態空間法、根軌跡、現代制御、2自由度制御を追加しない。
- 未確認N700系実車制御値を真値化しない。

## worker reconcile

- Topic 20練習source commit: `4f7fc0ec9acb3f79aa7b83152adfd406a2a735e8`
- 本工程開始時main HEAD: `ea8fe8ce3aaa6e03c485303d636817fcb82d543b`
- 練習PDF commit: `dad1d08bada18be7e5dc1804ae58ff5004725298`
- 練習PDF QA commit: `f9168a285a30ad527b85887ba246d606937ff44e`
- 開始時HEADおよび途中の更新は別系列のみで、Topic 20成果物との競合・重複作業はない。
- 詳細な工程QAは各topic配下の `*_qa.md` を正本とする。

## 次工程

Topic 20「N700系 フィードバック制御」の解説画像PowerPointを制作・QAする。固定5問・19答案要素、一次8問＋二次4問、問題・正答・数式、SPEC指定10項目・3可視化を変更しない。PowerPoint完成後にclean blind候補固定へ進む。