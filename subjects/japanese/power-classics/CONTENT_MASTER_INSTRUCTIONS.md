# Power古典 CONTENT MASTER INSTRUCTIONS

## Architecture boundary

Power TOEIC (`subjects/english/power-toeic/`) の共通バックエンド／Drill Engineを正本とする。Power古典はcontent/taxonomyのみを所有し、古典専用のDrill Engineを新規実装・forkしない。

## Start-of-run

毎回mainと既存workerの変更をreconcileし、`CONTENT_STATUS.md`、`CONTENT_HANDOFF.md`、最新batch、`data/taxonomy/classics-v1.json`を確認する。未整備の正本ファイルは先に補完する。同じID範囲を重複生成しない。

## Phase A generation

taxonomy順・priority・prerequisitesを守り、未充足micro-skillを上から進める。1 run最大100問。有限暗記技能は30〜100問、文脈判定・識別・読解は原則100問以上を第一目標とし、taxonomyのtargetQuestionsがより大きければそれを優先する。生成物は `pending_validation` として保存する。

## Independent QA

同じrunで既存pending_validationを古い順から最大100問QAする。`proposed_answer_index` / explanation /生成時正答情報を先に見ず、stemとchoicesだけで自力再解答してから照合する。25問ごとにcheckpoint。時間不足時は25/50/75問地点で安全終了する。判定は verified / needs_revision / rejected。

古文では活用、助動詞接続、古語法、敬語方向、主語、文脈の一意性を検査する。漢文では返り点、訓読、書き下し、句法、送り仮名、解釈の一意性を検査する。4択は選択肢重複、複数正解、正解index、正解位置偏り、stem完全重複、高類似を検査する。事実・語法に疑義があれば信頼できる辞典・教育資料等で確認し、曖昧な問題をverifiedにしない。

## Completion bookkeeping

`CONTENT_STATUS.md` と `CONTENT_HANDOFF.md` に generated / checked / verified / needs_revision / rejected / pending、現在skill進捗、次の正確な開始skillとIDを必ず残す。verifiedとproduction-approvedは分離し、全bank横断semantic near-duplicate gate完了前にproduction-approved扱いしない。

## Git safety

mainから作業branchを作り、非forceでPRを作成する。merge直前にmainとの差分と並行変更を再確認する。共通Drill Engine・無関係なアプリコード・CI設定をcontent runで変更しない。
