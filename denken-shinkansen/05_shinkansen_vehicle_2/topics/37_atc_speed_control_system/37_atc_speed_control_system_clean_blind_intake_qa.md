# Topic 37 clean blind intake QA

更新日: 2026-09-21

判定: `PASS / INTAKE_PREPARED`

## reconcile

- 本run再確認時 main HEAD: `16fd3bb45f8edebd0c95a0d6ea0584c2537ddade`
- `STATUS.md` / `HANDOFF.md`: `topic_37_powerpoint_complete`、完成 `36 / 39`、fresh clean blindのみ未実施
- Topic 37既存成果物: EXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPointと各QAまで存在
- 固定過去問: `5 / 5` 維持
- 固定答案要素: `25 / 25` 維持（一次5、二次20）
- Topic 38先取り: `0件`
- Topic 21一般式変更: `0件`

## question-only source QA

公式問題PDFをcandidate固定前の正本問題源とする方針は維持した。

直接問題面を取得できたもの:
- R7二次「機械・制御」問4
- R6二次「機械・制御」問4
- R4二次「機械・制御」問4
- R3二次「機械・制御」問4

R4一次「機械」問7は公式PDFが継続してtimeoutしたため、TAC公開の令和4年度第二種一次「機械」問題PDFの問題面から、5答案要素を解くための意味情報だけを `37_atc_speed_control_system_clean_blind_intake.md` へquestion-only fallbackとして転記した。

fallback QA:
- 年度・資格・科目・問番号: `一致`
- 固定答案要素数: `5 / 5`
- 正答語の転記: `0件`
- 解答記号の転記: `0件`
- 公式標準解答の転記: `0件`
- 既存教材解答の転記: `0件`
- fallbackによるカリキュラム範囲変更: `0件`

TAC PDF末尾には解答表も含まれるため、次のfresh runではTAC PDF自体を開かず、公式PDFが取得不能の場合のみGitHub正本のquestion-only fallbackを使う。

## fresh条件

本runはR4一次問題源の復旧調査中にanswer-bearing情報が露出したため、fresh条件を満たさない。したがってclean blind candidateは作成していない。これは `EXAM_ALIGNMENT_SPEC.md` の「保存済み正答を見ずに独立再解答する」要件を守るためのもの。

次のfresh runは検索を行わず、更新済み `37_atc_speed_control_system_clean_blind_intake.md` からcandidateを固定する。candidate固定後にのみ公式標準解答・既存answer-bearing資料を照合する。

## 進捗判定

完成判定に必要なclean blind自体は未実施のため、`36 / 39`・`topic_37_powerpoint_complete` のままが正しい。question-only取得blockerは次run向けfallback追加により解消済み。

exact blocker: `0件`
