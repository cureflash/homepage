# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-18

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は `15 / 16`。Topic 01〜15は品質ゲートPASSでcompleted。active topicは16「同期機って新幹線には使わないの？」。

Topic 16は制作前EXAM_ALIGNMENT固定後、解説source本文と解説PDFまで完成。系列 `SPEC.md` の固定範囲だけで公式過去問6問・6答案要素を維持し、制作前検証 `6 / 6 PASS`、本文マッピング `6 / 6 PASS`、3段階例題 `PASS`、解説source QA `PASS`。解説PDFはA4縦4ページ、200 dpi表示QA `4 / 4 PASS`、文字抽出QA `PASS`、固定過去問マッピング `6 / 6`。始動法・制動巻線、短絡比、無負荷飽和曲線・三相短絡曲線を使う試験法、同期調相機、負荷角・脱出トルク等の仕様外追加は0件。未確認のL0系実車値・詳細方式追加も0件。正答選択肢番号・計算問題の最終数値は完成後blind独立再解答のため制作前記録へ保存していない。

状態: `topic_16_explanation_pdf_complete / IN_PROGRESS`

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
解説PDF表示QA: `4 / 4 PASS`。
解説PDF文字抽出QA: `PASS`。
解説PDF固定過去問マッピング: `6 / 6`。
固定範囲外知識による答案補完: `0件`。
固定EXAM_ALIGNMENT変更: `0件`。

非選定:
- R7下 機械 問5 — 始動・制動巻線が固定範囲外。
- R7下 機械 問6 — 無負荷・短絡特性を使う試験法が固定範囲外。
- R6上 機械 問5 — 始動法が固定範囲外。
- R5上 機械 問5 — 短絡比が固定範囲外。
- R4下 機械 問4 — V曲線は範囲内だが、完答に同期調相機が必要で固定範囲外。

source: `topics/16_synchronous_machine/16_synchronous_machine.md`
解説本文: 完成。
解説PDF: `topics/16_synchronous_machine/16_synchronous_machine_explanation.pdf` 完成（A4縦4ページ）。
解説PDF QA: `topics/16_synchronous_machine/16_synchronous_machine_explanation_pdf_qa.md` / `PASS`。
練習問題source: 未着手。
練習PDF: 未着手。
解説画像PowerPoint: 未着手。
完成後blind独立再解答: 未実施。

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
Topic 16「同期機って新幹線には使わないの？」の練習問題sourceを作成する。固定EXAM_ALIGNMENT 6問・6答案要素、固定範囲、完成後blind保全を変更しない。三種のMASTER/EXAM_ALIGNMENT仕様どおり原則12問以上、20〜30%基礎、50〜60%本試験標準、約20%複合・応用、少なくとも半数を五肢択一とし、正答一意性と独立計算・論理QAを行う。
