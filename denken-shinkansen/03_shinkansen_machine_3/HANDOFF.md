# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-19

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は `15 / 16`。Topic 01〜15は品質ゲートPASSでcompleted。active topicは16「同期機って新幹線には使わないの？」。

Topic 16は制作前EXAM_ALIGNMENT固定後、解説source・解説PDF・練習source・練習PDF・解説画像PowerPointまで作成済み。旧版blind独立再解答 `5 / 6 PASS` のR5下 機械 問5を受け、固定範囲・固定EXAM_ALIGNMENTを変更せず `V = E + jXsI` の尾→頭判定「`E` の終点 → `V` の終点 = `jXsI`」を全成果物へ補強・再同期した。

改訂後blind独立再解答は、公式解答照合前に commit `a6d6452528cf03e9a055d9410aff8c33c3503dd6` で答案を固定し、その後公式解答と照合して `6 / 6 PASS`。教材内根拠 `6 / 6 PASS`、固定範囲外知識による答案補完0件、固定EXAM_ALIGNMENT変更0件。

2026-09-19の最終QA再判定を再実施した。技術内容、必須成果物、PDF/PPTX表示QA、固定EXAM_ALIGNMENT、固定範囲境界、改訂後blind独立再解答はすべてPASSした。一方、進捗記録整合を再確認すると、旧「進捗記録整合完了後に最終QA」とする前向き文言が3ファイルに残っていたため、進捗記録整合のみFAILとした。

残存箇所:
1. `topics/16_synchronous_machine/16_synchronous_machine_practice.md`
   - 「次工程」が「進捗記録整合を完了後、最終QA再判定」のまま
2. `topics/16_synchronous_machine/16_synchronous_machine_explanation_pdf_qa.md`
   - 「残作業は進捗記録整合の完了後に最終QA再判定」と残る
3. `topics/16_synchronous_machine/16_synchronous_machine_practice_pdf_qa.md`
   - 「次工程」が「進捗記録整合を完了後、最終QA再判定」のまま

状態: `topic_16_final_qa_recheck_needs_progress_record_fix / IN_PROGRESS`

## 最終QA再判定結果
- 必須成果物存在: `PASS`
  - `topics/16_synchronous_machine/16_synchronous_machine.md`
  - `topics/16_synchronous_machine/16_synchronous_machine_explanation.pdf`
  - `topics/16_synchronous_machine/16_synchronous_machine_practice.md`
  - `topics/16_synchronous_machine/16_synchronous_machine_practice.pdf`
  - `topics/16_synchronous_machine/16_synchronous_machine_images.pptx`
- 解説PDF: A4縦4ページ / 200 dpi `4 / 4 PASS` / 文字抽出 `PASS`
- 練習PDF: A4縦2ページ / 12問 / 200 dpi `2 / 2 PASS` / 正答一覧 `12 / 12 PASS`
- PowerPoint: 16:9・4枚 / 表示 `4 / 4 PASS` / はみ出し0件 / ZIP整合性 `PASS`
- 固定EXAM_ALIGNMENT: `6問・6答案要素` / 変更 `0件`
- 完成後blind独立再解答: `6 / 6 PASS`
- 教材内根拠: `6 / 6 PASS`
- 固定範囲外追加: `0件`
- 固定範囲外知識による答案補完: `0件`
- 技術内容・問題・正答・派生成果物: `PASS`
- 進捗記録整合: `FAIL`（上記3件のみ）
- 今回最終QA判定: `NEEDS_REVISION / IN_PROGRESS`
- Topic 16 completed化: `まだ不可`

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
解説PDF: source改訂反映済み / A4縦4ページ / 200 dpi表示QA `4 / 4 PASS` / 文字抽出QA `PASS`。
練習PDF: source改訂反映済み / A4縦2ページ / 200 dpi表示QA `2 / 2 PASS` / 文字抽出QA `PASS` / 正答一覧 `12 / 12 PASS`。
PowerPoint: source改訂反映済み / 16:9・4枚 / 表示QA `4 / 4 PASS` / はみ出し0件 / ZIP整合性 `PASS`。
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

## Topic 15
Topic 15「車内の照明・空調にはどれだけ電気が必要？」は最終QA再判定PASSで `completed`。完成後blind独立再解答 `12 / 12 PASS`。

## Topic 14
Topic 14「停電してもN700Sが走れるのはなぜ？」は最終QA再判定PASSで `completed`。完成後blind独立再解答 `1 / 1 PASS`。

## Topic 13
Topic 13「新幹線は主電動機以外もモーターだらけ？」は最終QA再判定PASSで `completed`。完成後blind独立再解答 `5 / 5 PASS`。

## 次工程
`16_synchronous_machine_practice.md`、`16_synchronous_machine_explanation_pdf_qa.md`、`16_synchronous_machine_practice_pdf_qa.md` の旧「進捗記録整合完了後」文言だけを現状へ同期する。技術内容・固定範囲・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTXは変更しない。同期後に最終QAを再判定する。
