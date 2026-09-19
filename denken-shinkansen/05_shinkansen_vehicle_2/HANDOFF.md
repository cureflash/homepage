# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜19は最終QAまで `PASS / completed`。完成数は `19 / 39`。

現在地は `topic_20_powerpoint_complete`。last completed は Topic 19 `ミニ新幹線 複電圧主回路`。active topic は Topic 20 `N700系 フィードバック制御`。固定公式過去問5問・19答案要素、SPEC指定10項目・3可視化を変更せず、解説source/PDF、練習source/PDF、PowerPointまで完成・QA済み。

## 今回完了

成果物:
- PowerPoint: `topics/20_n700_feedback_control/20_n700_feedback_control_images.pptx`
- QA: `topics/20_n700_feedback_control/20_n700_feedback_control_powerpoint_qa.md`

判定: `PASS / POWERPOINT_COMPLETE`

品質:
- 16:9: `4 slides`
- python-pptx open / PPTX ZIP整合性: `PASS / PASS`
- LibreOffice PDF変換: `PASS / 4 pages`
- pdftoppm 1600×900: `4 / 4 PASS`
- PDF文字抽出: `PASS`
- Unicode置換文字 / `(cid:)`: `0件 / 0件`
- 1600×900表示目視QA: `4 / 4 PASS`
- 固定答案要素: `19 / 19 covered`
- SPEC指定10項目: `10 / 10 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 一次8問＋二次4問の問題・正答・数式変更: `0件`
- 固定EXAM_ALIGNMENT変更 / SPEC外追加 / 未確認N700系実車制御値の真値化: `0件`
- 公式解答・標準解答の個別正答参照・保存: `0件`
- 完成後clean blind公式照合: `未実施 / 次工程`

## 固定ゲート

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
- 可視化: `ステップ応答`、`ゲイン変更時の応答`、`時定数変更時の応答`

追加禁止・境界:
- PIDパラメータ設計、代表根近似。
- 周波数応答・ボード線図、状態空間法、根軌跡、現代制御、2自由度制御。
- 未確認N700系実車の制御器次数、ゲイン、時定数、伝達関数、制御周期等の真値化。

## reconcile

- 練習source commit `4f7fc0ec9acb3f79aa7b83152adfd406a2a735e8`、練習PDF `dad1d08bada18be7e5dc1804ae58ff5004725298`、QA `f9168a285a30ad527b85887ba246d606937ff44e` を引き継いだ。
- 直前の本系列正本同期は `07fcc657819b88a2e04c0a40c23fa43049b58d59`。
- PowerPoint工程開始時main HEAD `62434e5269a93d46570b5287e350fe4308aa4d89` は別系列 `02_shinkansen_power_3` の進捗同期で、本系列との競合なし。
- 既存の「車両二種を進行」「車両二種 30分補助」「車両二種 追加枠A」等が作成済みの解説source/PDF・練習source/PDFを再実施せず、最初の未完了工程PowerPointだけを進めた。

## 次の安全な工程

Topic 20完成後clean blind公式照合。

固定条件:
- 固定5問・19答案要素を教材だけで独立再解答する。
- 候補答案を固定するまで公式解答・標準解答を見ない。
- 固定EXAM_ALIGNMENT、SPEC境界、既存PDF/PPTX、練習問題・正答・数式を変更しない。
- clean blind照合PASS後に最終QAへ進む。

詳細な工程QAは各topic配下の `*_qa.md` を正本とする。
