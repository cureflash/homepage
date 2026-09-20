# Topic 37 clean blind intake

更新日: 2026-09-21

目的: Topic 37「ATC③ 速度制御系」の完成後 clean blind 独立再解答を、answer-bearing資料を先に開かず開始するための question-only intake。ここには正答・公式標準解答・既存教材の解答情報を記載しない。

## 固定対象

固定5問・25答案要素を変更しない。

- R4一次「機械」問7: 5答案要素
- R7二次「機械・制御」問4: 5答案要素
- R6二次「機械・制御」問4: 5答案要素
- R4二次「機械・制御」問4: 5答案要素
- R3二次「機械・制御」問4: 5答案要素

## 公式 question-only 導線

公式過去問一覧:
- https://www.shiken.or.jp/chief/second/qa/

問題PDFのみを開く。各年度の「解答」PDFはcandidate固定前に開かない。

- R4一次「機械」: https://www.shiken.or.jp/chief/upload/20220820_ch_second_q03.pdf （問7）
- R7二次「機械・制御」: https://www.shiken.or.jp/chief/upload/20251116_ch_second_q02.pdf （問4）
- R6二次「機械・制御」: https://www.shiken.or.jp/chief/upload/20241110_as_02_ch_second_q02.pdf （問4）
- R4二次「機械・制御」: https://www.shiken.or.jp/chief/upload/20221113_ch_second_q02.pdf （問4）
- R3二次「機械・制御」: https://www.shiken.or.jp/chief/upload/20211114_ch_second_q02.pdf （問4）

## R4一次「機械」問7 question-only fallback

公式PDFの取得が一時的にtimeoutする環境向けに、問題面だけから復元した意味情報を残す。正答・解答記号・公式解答は含めない。fresh runでは公式PDFを最優先し、取得できない場合のみこの節を問題文代替として使う。

固定5答案要素は、産業用自動機の制御機器について次の用語を問う穴埋めである。

1. あらかじめ定めた順序・手続きに従って各段階を逐次進める制御方式の名称。
2. 旧来、状態記憶を利用して順序制御を実現した回路の名称。
3. 入力に操作ボタン・センサ、出力に表示灯・アクチュエータ等を接続し、プログラム変更で複雑な論理や配線変更なしの機能変更を行える産業用制御機器の名称。
4. 旧来のリレー回路をはしご状に表現するプログラム記述図式の名称。
5. 中核制御機器が故障した場合でも安全側へ移行するよう配慮する設計原則の名称。

復元元はTAC公開の令和4年度第二種一次「機械」問題PDFの問7問題面（P15-16）。当該PDF末尾には解答表も含まれるため、fresh candidate固定前はTAC PDF自体を開かず、このquestion-only fallbackだけを用いる。公式問題の識別子・年度・科目・問番号は上記公式導線と一致する。

## clean blind 手順

1. 最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md`、`HANDOFF.md`をreconcileする。
2. 本intakeと公式「問題」PDFだけを用いて25答案要素を独立に解く。R4一次「機械」問7の公式PDFだけ取得不能なら、上記question-only fallbackを代用する。
3. candidateを固定・commitするまで、公式標準解答、固定EXAM_ALIGNMENTの正答、解説source/PDF、練習source/PDF、各answer-bearing QAを開かない。
4. candidate固定後に初めて公式標準解答と既存教材を照合し、教材だけで導出可能だったかを25答案要素単位でQAする。
5. 教材外知識で補完した要素、偶然一致、根拠不足はPASSにしない。

## fresh条件

直近runではR4一次「機械」問7の公式PDF取得失敗を解消する調査過程でanswer-bearing情報が露出したため、そのrunではclean blind candidateを作成していない。次のfresh runは検索を行わず、本intakeから開始する。

Topic 21 H26二次「機械・制御」問1(4)の丸め差診断は既存正本どおり維持し、一般式は変更しない。

exact blocker: 0件
