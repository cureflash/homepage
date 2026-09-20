# Topic 37 clean blind exact blocker

更新日: 2026-09-21

判定: `BLOCKED / QUESTION_ONLY_SOURCE_FETCH`

## reconcile

- run開始時 main HEAD: `bdf29c810cb29724259c3c2e448e90e55e352b49`
- 系列直近commit: `479c32f0273034f245ff257c4afd95eb3f82dc67`（Topic 37 clean-blind intake QA）
- `STATUS.md` / `HANDOFF.md`: `topic_37_powerpoint_complete`、完成 `36 / 39`、fresh clean blindのみ未実施
- 既存worker成果: `37_atc_speed_control_system_clean_blind_intake.md` と `37_atc_speed_control_system_clean_blind_intake_qa.md` をreconcileし、重複制作なし
- Topic 21 H26二次「機械・制御」問1(4): 48.1 N·m / 48.0 N·m差は既存の過去問固有丸め注記を維持し、一般式変更 `0件`

## question-only確認

candidate固定前にanswer-bearing資料は開かず、intake記載の公式「問題」導線だけを確認した。

直接取得・問題面確認まで完了:
- R7二次「機械・制御」問4
- R6二次「機械・制御」問4
- R4二次「機械・制御」問4
- R3二次「機械・制御」問4

取得不能:
- R4一次「機械」問7
- 公式問題PDF: `https://www.shiken.or.jp/chief/upload/20220820_ch_second_q03.pdf`
- 公式過去問一覧のR4一次「機械」リンクからの取得、URL直接取得、HTTP→HTTPS再試行のいずれもPDF fetch timeoutとなり、問題本文を確認できなかった。

## exact blocker

固定5問・25答案要素のうちR4一次「機械」問7の5答案要素について、公式question-only問題本文をこのrunで取得できない。`37_atc_speed_control_system_clean_blind_intake.md` は「本intakeと5つの公式問題PDFだけを用いて25答案要素を独立に解く」と固定しているため、非公式転載・既存EXAM_ALIGNMENT・教材・公式解答から問題内容を補完するとfresh clean blind条件を破る。

したがって推測・代替ソース利用は行わず、clean blind candidateは作成しない。公式問題PDFが正常取得できるfresh runで、5問すべてをquestion-only状態から解いてcandidateを固定する。

## このrunで行っていないこと

- 公式標準解答の閲覧: `0件`
- 固定EXAM_ALIGNMENTの正答閲覧: `0件`
- 解説source/PDFの閲覧: `0件`
- 練習source/PDFの閲覧: `0件`
- answer-bearing QAの閲覧: `0件`
- clean blind candidate作成: `0件`
- Topic 38先取り: `0件`
- Topic 21一般式変更: `0件`

次の安全な工程: fresh runでR4一次「機械」問7の公式問題PDF取得を最初に再試行する。取得できた場合のみ、固定5問・25答案要素のcandidate固定へ進む。
