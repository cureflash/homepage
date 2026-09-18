# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-19

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は `15 / 16`。Topic 01〜15は品質ゲートPASSでcompleted。active topicは16「同期機って新幹線には使わないの？」。

Topic 16は制作前EXAM_ALIGNMENT固定後、解説source本文・解説PDF・練習問題source・練習PDF・解説画像PowerPointまで作成済み。旧版の完成後blind独立再解答は `5 / 6 PASS` で、R5下 機械 問5のみ `jXsI` の始点・終点を逆に読んだため `NEEDS_REVISION` となった。

固定範囲・固定EXAM_ALIGNMENTを変更せず、解説source・練習source・解説PDF・練習PDF・PowerPointへ `V = E + jXsI` の尾→頭判定「`E` の終点 → `V` の終点 = `jXsI`」を補強済み。

今回、改訂済み教材で固定EXAM_ALIGNMENT 6問を再解答した。公式解答との照合前に commit `a6d6452528cf03e9a055d9410aff8c33c3503dd6` で答案を固定し、その後に電気技術者試験センター公式解答と照合した結果、`6 / 6 PASS`。R5下 機械 問5も改訂した尾→頭判定で `(3)` を選び、公式解答 `(3)` と一致した。教材内根拠へ戻せること `6 / 6 PASS`、固定範囲外知識による答案補完0件、固定EXAM_ALIGNMENT変更0件。

状態: `topic_16_independent_reanswer_complete / IN_PROGRESS`

## Topic 16 固定範囲
- 同期機
- 同期発電機
- 同期電動機
- 回転磁界
- 同期速度
- 極数
- 周波数
- 界磁
- 励磁
- 電機子
- 力率
- 電機子反作用
- 同期リアクタンス
- V曲線の基本
- 並行運転の基本

同期速度は `Ns = 120f / P`。L0系リニア同期モータは、系列SPECどおり回転同期機を直線状に展開したものとして概念説明にだけ使用する。四機比較は固定子、回転子、励磁、回転磁界、同期速度、すべり、整流子、ブラシ、速度制御、発電機運転、主な用途に限定する。

## Topic 16 固定EXAM_ALIGNMENT
- R7上 機械 問5 — 同期発電機の並行運転条件 / 周波数 / 電圧 / 位相 / 同期検定器
- R5下 機械 問5 — 同期電動機 / 遅れ力率 / 誘導起電力 / 同期リアクタンス / ベクトル図
- R5下 機械 問6 — 同期発電機 / 同期速度 / 極数 / 周波数 / 並行運転
- R4上 機械 問4 — 並行運転 / 起電力 / 界磁 / 回転速度 / 同期検定器 / 無効横流
- H28 機械 問5 — 同期電動機 / V曲線 / 界磁電流 / 電機子電流 / 力率
- H26 機械 問5 — 同期発電機 / 電機子反作用 / 力率 / 同期リアクタンス

品質ゲート対象: `6問・6答案要素`。
制作前検証・公式解答照合: `6 / 6 PASS`。
固定過去問要求事項の本文マッピング: `6 / 6 PASS`。
3段階例題: `PASS`。
解説source QA: `PASS`。
ベクトル尾→頭・始点終点判定source QA: `PASS`。
練習問題source: 問10を尾→頭判定問題へ改訂 / `12 / 12 PASS` / 正答一意性 `12 / 12 PASS`。
解説PDF: source改訂反映済み / A4縦4ページ / 200 dpi表示QA `4 / 4 PASS` / 文字抽出QA `PASS` / `PASS`。
練習PDF: source改訂反映済み / A4縦2ページ / 200 dpi表示QA `2 / 2 PASS` / 文字抽出QA `PASS` / 正答一覧 `12 / 12 PASS` / `PASS`。
PowerPoint: source改訂反映済み / 16:9・4枚 / 表示QA `4 / 4 PASS` / はみ出し0件 / ZIP整合性 `PASS` / `PASS`。
完成後blind独立再解答: 改訂後 `6 / 6 PASS` / 公式解答一致 `6 / 6 PASS` / 教材外補完0件。
固定範囲外知識による答案補完: `0件`。
固定EXAM_ALIGNMENT変更: `0件`。

改訂後blind答案:
- R7上 機械 問5: `(3)`
- R5下 機械 問5: `(3)`
- R5下 機械 問6: `(3)`
- R4上 機械 問4: `(2)`
- H28 機械 問5: `(2)`
- H26 機械 問5: `(1)`

非選定:
- R7下 機械 問5 — 始動・制動巻線が固定範囲外。
- R7下 機械 問6 — 無負荷・短絡特性を使う試験法が固定範囲外。
- R6上 機械 問5 — 始動法が固定範囲外。
- R5上 機械 問5 — 短絡比が固定範囲外。
- R4下 機械 問4 — V曲線は範囲内だが、完答に同期調相機が必要で固定範囲外。

source: `topics/16_synchronous_machine/16_synchronous_machine.md`
解説本文: ベクトル図の尾→頭判定を補強済み。
解説PDF: `topics/16_synchronous_machine/16_synchronous_machine_explanation.pdf` source改訂反映済み / `PASS`。
解説PDF QA: `topics/16_synchronous_machine/16_synchronous_machine_explanation_pdf_qa.md` 再同期後QA / `PASS`。
練習問題source: `topics/16_synchronous_machine/16_synchronous_machine_practice.md` 問10改訂済み（12問を維持）。
練習PDF: `topics/16_synchronous_machine/16_synchronous_machine_practice.pdf` source改訂反映済み / `PASS`。
練習PDF QA: `topics/16_synchronous_machine/16_synchronous_machine_practice_pdf_qa.md` 再同期後QA / `PASS`。
解説画像PowerPoint: `topics/16_synchronous_machine/16_synchronous_machine_images.pptx` source改訂反映済み / `PASS`。
PowerPoint QA: `topics/16_synchronous_machine/16_synchronous_machine_powerpoint_qa.md` 再同期後QA / `PASS`。
完成後blind独立再解答: `topics/16_synchronous_machine/16_synchronous_machine_independent_reanswer.md` / 改訂後 `6 / 6 PASS`。

## Topic 15
Topic 15「車内の照明・空調にはどれだけ電気が必要？」は最終QA再判定PASSで `completed`。技術内容、必須成果物、表示QA、固定EXAM_ALIGNMENT＋完成後blind独立再解答、進捗記録整合、固定範囲境界は全件PASS。Webカタログにも登録済み。

固定EXAM_ALIGNMENT:
- R8上 機械 問17(a)(b)
- R7上 機械 問12
- R7上 機械 問17(a)(b)
- R6下 機械 問17(a)(b)
- R6上 機械 問17(a)(b)
- R4上 機械 問17(a)(b)
- R2 機械 問12

品質ゲート対象は `7問・12答案要素`。完成後blind独立再解答 `12 / 12 PASS`。成果物は `topics/15_lighting_heating/` に保存済み。

## Topic 14
Topic 14「停電してもN700Sが走れるのはなぜ？」は最終QA再判定PASSで `completed`。固定EXAM_ALIGNMENTはH30 機械 問12、完成後blind独立再解答 `1 / 1 PASS`。成果物は `topics/14_battery/` に保存済み。

## Topic 13
Topic 13「新幹線は主電動機以外もモーターだらけ？」は最終QA再判定PASSで `completed`。固定EXAM_ALIGNMENT 5問、完成後blind独立再解答 `5 / 5 PASS`。成果物は `topics/13_auxiliary_motors/` に保存済み。

## 次工程
Topic 16の最終QA再判定を実施する。解説source / 解説PDF / 練習source / 練習PDF / PowerPoint / 各QA記録 / 完成後blind独立再解答記録 / STATUS / HANDOFF の整合を確認し、固定範囲外追加0件・固定EXAM_ALIGNMENT変更0件を再確認する。最終QAがPASSした場合のみTopic 16をcompletedとする。
