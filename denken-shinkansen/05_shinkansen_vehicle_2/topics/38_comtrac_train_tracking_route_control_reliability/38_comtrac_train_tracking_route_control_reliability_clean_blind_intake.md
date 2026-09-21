# Topic 38 clean blind intake

更新日: 2026-09-21

目的: Topic 38「COMTRAC 列車追跡・進路制御・高信頼化」の完成後 clean blind 独立再解答を、answer-bearing資料を先に開かず開始するための question-only intake。ここには正答・公式標準解答・既存教材の解答情報を記載しない。

## 固定対象

固定5問・25答案要素を変更しない。

- R8一次「機械」問8: 5答案要素
- R2一次「機械」問8: 5答案要素
- H29一次「機械」問8: 5答案要素
- H26一次「機械」問3: 5答案要素
- H23一次「機械」問8: 5答案要素

二次試験は当該コア論点の直接対応を固定できておらず、件数合わせ採用は0件のままとする。

## 公式 question-only 導線

公式過去問一覧:
- https://www.shiken.or.jp/chief/second/qa/

candidate固定前は各年度の「問題」PDFだけを開き、「解答」PDFは開かない。

- R8一次「機械」: https://www.shiken.or.jp/chief/upload/20260830_ch_second_q03.pdf （問8）
- R2一次「機械」: https://www.shiken.or.jp/chief/upload/20200912_ch_second_q03.pdf （問8）
- H29一次「機械」: https://www.shiken.or.jp/chief/upload/20170902_ch_second_q03.pdf （問8）
- H26一次「機械」: https://www.shiken.or.jp/chief/upload/20140906_ch_second_q03.pdf （問3）
- H23一次「機械」: https://www.shiken.or.jp/chief/upload/20110903_ch_second_q03.pdf （問8）

## clean blind 手順

1. 最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md`、`HANDOFF.md`をreconcileする。
2. 本intakeと公式「問題」PDFだけを用いて25答案要素を独立に解く。
3. candidateを固定・commitするまで、公式標準解答、固定EXAM_ALIGNMENTの保存済み正答、Topic 38解説source/PDF、練習source/PDF、各answer-bearing QAを開かない。
4. candidate固定後に初めて公式標準解答と既存教材を照合し、教材だけで導出可能だったかを25答案要素単位でQAする。
5. 教材外知識で補完した要素、偶然一致、根拠不足はPASSにしない。

Topic 21 H26二次「機械・制御」問1(4)の48.1 N·m / 48.0 N·m差は既存の丸め差診断を維持し、一般式 `P=Tω`、`ω=2πN/60` は変更しない。

exact blocker: 0件
