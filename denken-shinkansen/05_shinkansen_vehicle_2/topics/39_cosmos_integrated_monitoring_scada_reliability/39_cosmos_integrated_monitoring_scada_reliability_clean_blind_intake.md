# Topic 39 clean blind intake

更新日: 2026-09-21

目的: Topic 39「COSMOS 統合監視・SCADA・信頼性」の完成後 clean blind 独立再解答を、answer-bearing資料を先に開かず開始するための question-only intake。ここには正答・公式標準解答・既存教材の解答情報を記載しない。

## 固定対象

固定5問・25答案要素を変更しない。

- R4一次「機械」問3: 5答案要素
- R3一次「機械」問8: 5答案要素
- H30一次「機械」問8: 5答案要素
- H25一次「機械」問8: 5答案要素
- R2二次「電力・管理」問2: 5答案要素

## 公式 question-only 導線

公式過去問一覧:
- https://www.shiken.or.jp/chief/second/qa/

candidate固定前は各年度の「問題」PDFだけを開き、「解答」PDFは開かない。

- R4一次「機械」: https://www.shiken.or.jp/chief/upload/20220820_ch_second_q03.pdf （問3）
- R3一次「機械」: https://www.shiken.or.jp/chief/upload/20210821_ch_second_q03.pdf （問8）
- H30一次「機械」: https://www.shiken.or.jp/chief/upload/20180901_ch_second_q03.pdf （問8）
- H25一次「機械」: https://www.shiken.or.jp/chief/upload/20130831_ch_second_q03.pdf （問8）
- R2二次「電力・管理」: https://www.shiken.or.jp/chief/upload/20201122_ch_second_q01.pdf （問2）

## clean blind 手順

1. 最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md`、`HANDOFF.md`をreconcileする。
2. 本intakeと公式「問題」PDFだけを用いて25答案要素を独立に解く。
3. candidateを固定・commitするまで、公式標準解答、固定EXAM_ALIGNMENTの保存済み正答、Topic 39解説source/PDF、練習source/PDF、各answer-bearing QAを開かない。
4. candidate固定後に初めて公式標準解答と既存教材を照合し、教材だけで導出可能だったかを25答案要素単位でQAする。
5. 教材外知識で補完した要素、偶然一致、根拠不足はPASSにしない。

Topic 21 H26二次「機械・制御」問1(4)の48.1 N·m / 48.0 N·m差は既存の丸め差診断を維持し、一般式 `P=Tω`、`ω=2πN/60` は変更しない。

exact blocker: 0件
