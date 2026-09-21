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

## R2二次 固定5答案要素の境界（question-only）

R2二次「電力・管理」問2は、既存EXAM_ALIGNMENTで固定済みの5群を次の境界で扱う。ここでは各群の正答内容を示さず、公式問題文上の要求単位だけを示す。

1. 小問(1)前半: 計器用変成器の役割説明と、代表的なものを二つ挙げる要求
2. 小問(1)後半: 比誤差を、公称変成比 `K_n` と真の変成比 `K` を用いた式で表す要求
3. 小問(2): 保護リレーが的確に保護するために備えるべき「信頼性」の説明要求
4. 小問(3)前半: 77又は66 kV系統の遮断器について、定格遮断時間をサイクル数で答える要求と、事故除去指令を受ける箇所の名称要求
5. 小問(3)後半: 同箇所が持つ引外し自由（トリップフリー）の機能と目的の説明要求

この5群の境界は固定し、v7 workerは分割し直さない。各群の中身は公式「問題」PDFだけから独立に解答する。

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
2. 本intakeと公式「問題」PDFだけを用いて25答案要素を独立に解く。R2二次は上記5群の境界を維持する。
3. candidateを固定・commitするまで、公式標準解答、固定EXAM_ALIGNMENTの保存済み正答、Topic 39解説source/PDF、練習source/PDF、各answer-bearing QAを開かない。
4. candidate固定後に初めて公式標準解答と既存教材を照合し、教材だけで導出可能だったかを25答案要素単位でQAする。
5. 教材外知識で補完した要素、偶然一致、根拠不足はPASSにしない。

Topic 21 H26二次「機械・制御」問1(4)の48.1 N·m / 48.0 N·m差は既存の丸め差診断を維持し、一般式 `P=Tω`、`ω=2πN/60` は変更しない。

exact blocker: `0件`
