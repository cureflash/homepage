# STATUS - 新幹線車両・電験二種

更新日: 2026-09-19

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `19 / 39`
- current_status: `topic_20_powerpoint_complete`
- last_completed_topic: `19 ミニ新幹線 複電圧主回路`
- active_topic: `20 N700系 フィードバック制御`
- next_start: Topic 20完成後clean blind公式照合。固定5問・19答案要素を教材だけで独立再解答し、公式解答・標準解答は候補答案固定後に照合する

## 完了済み

Topic 01〜19は最終QAまで `PASS / completed`。完成数は `19 / 39`。

## Topic 20 現在地

- 制作前EXAM_ALIGNMENT: `PASS / EXAM_ALIGNMENT_COMPLETE`
- 解説source: `PASS / EXPLANATION_SOURCE_COMPLETE`
- 解説PDF: `PASS / EXPLANATION_PDF_COMPLETE`
- 練習source: `PASS / PRACTICE_SOURCE_COMPLETE`
- 練習PDF: `PASS / PRACTICE_PDF_COMPLETE`
- PowerPoint: `PASS / POWERPOINT_COMPLETE`
- clean blind公式照合: `未実施 / 次工程`
- 最終QA: `未実施`

## Topic 20 PowerPoint

判定: `PASS / POWERPOINT_COMPLETE`

成果物:
- PowerPoint: `topics/20_n700_feedback_control/20_n700_feedback_control_images.pptx`
- QA: `topics/20_n700_feedback_control/20_n700_feedback_control_powerpoint_qa.md`

品質:
- 16:9: `4 slides`
- python-pptx open / PPTX ZIP整合性: `PASS / PASS`
- LibreOffice PDF変換: `PASS / 4 pages`
- pdftoppm 1600×900: `4 / 4 PASS`
- 文字抽出: `PASS`
- Unicode置換文字 / `(cid:)`: `0件 / 0件`
- 目視表示QA: `4 / 4 PASS`
- 固定公式過去問: `一次1問＋二次4問 / 5問 / 変更なし`
- 固定答案要素: `一次1＋二次18 / 19 / 19 covered`
- SPEC指定10項目: `10 / 10 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 一次8問＋二次4問の問題・正答・数式変更: `0件`
- 固定EXAM_ALIGNMENT変更 / SPEC外追加 / 未確認N700系実車制御値の真値化: `0件`
- 公式解答・標準解答の個別正答参照・保存: `0件`

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
- Topic 20練習PDF commit: `dad1d08bada18be7e5dc1804ae58ff5004725298`
- Topic 20練習PDF QA commit: `f9168a285a30ad527b85887ba246d606937ff44e`
- 直前の本系列正本同期: `07fcc657819b88a2e04c0a40c23fa43049b58d59`
- PowerPoint工程開始時main HEAD: `62434e5269a93d46570b5287e350fe4308aa4d89`
- 開始時HEAD差分は別系列 `02_shinkansen_power_3` の進捗同期のみで、本系列との競合・重複作業はない。
- 解説source/PDF、練習source/PDFを再作成せず、最初の未完了工程であるPowerPointのみ進めた。
- 詳細な工程QAは各topic配下の `*_qa.md` を正本とする。

## 次工程

Topic 20「N700系 フィードバック制御」の完成後clean blind公式照合。固定5問・19答案要素を教材だけで独立再解答し、候補答案を固定するまで公式解答・標準解答を参照しない。既存成果物・固定EXAM_ALIGNMENT・SPEC境界は変更しない。
