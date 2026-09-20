# Topic 37 clean blind question-source recovery

更新日: 2026-09-21

判定: `RESOLVED_FOR_NEXT_FRESH_RUN / CURRENT_RUN_NOT_FRESH`

## reconcile

- 問題源blocker記録時 main HEAD: `16fd3bb45f8edebd0c95a0d6ea0584c2537ddade`
- `STATUS.md` / `HANDOFF.md`: `topic_37_powerpoint_complete`、完成 `36 / 39`、fresh clean blindのみ未実施
- 固定5問・25答案要素（一次5、二次20）を変更していない
- Topic 38先取り: `0件`
- Topic 21一般式変更: `0件`

## 問題源の復旧

公式question-only問題面を直接確認済み:
- R7二次「機械・制御」問4
- R6二次「機械・制御」問4
- R4二次「機械・制御」問4
- R3二次「機械・制御」問4

R4一次「機械」問7の公式問題PDFは本run環境でtimeoutした。そこで復旧調査に限りTAC公開の令和4年度第二種一次「機械」問題PDFを確認し、問7の問題面から5答案要素を解くための意味情報だけを `37_atc_speed_control_system_clean_blind_intake.md` へquestion-only fallbackとして記録した。

fallbackには正答、解答記号、公式標準解答、既存教材解答を含めていない。次のfresh runではTAC PDFを開かず、公式R4一次問題PDFが取得不能な場合のみGitHub正本のfallbackを使える。

## fresh判定

復旧調査中にanswer-bearing情報が露出したため、本runをclean blindとして扱わない。candidate作成・固定は行わない。

これは過去問対応品質ゲートを緩和する処理ではない。次のfresh runで、answer-bearing資料を開く前に固定5問・25答案要素を独立再解答し、candidateをcommitした後で公式標準解答と既存教材を照合する。

## 現在地

- clean blind candidate: `未作成`
- question-only source blocker: `解消済み（次run用fallbackあり）`
- completion: `36 / 39` のまま
- current_status: `topic_37_powerpoint_complete` のまま
- exact blocker: `0件`

次工程: fresh runで検索を行わず `37_atc_speed_control_system_clean_blind_intake.md` からcandidate固定→25答案要素の独立再解答QAへ進む。
