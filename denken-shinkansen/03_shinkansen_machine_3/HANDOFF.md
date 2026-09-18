# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-19

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。`03_shinkansen_machine_3` は新品質基準で `16 / 16 completed`。Topic 01〜16はすべて品質ゲートPASS。

Topic 16「同期機って新幹線には使わないの？」は、制作前EXAM_ALIGNMENT固定後、解説source・解説PDF・練習source・練習PDF・解説画像PowerPointを作成済み。旧版blind独立再解答 `5 / 6 PASS` のR5下 機械 問5を受け、固定範囲・固定EXAM_ALIGNMENTを変更せず `V = E + jXsI` の尾→頭判定「`E` の終点 → `V` の終点 = `jXsI`」を全成果物へ補強・再同期した。

改訂後blind独立再解答は、公式解答照合前に commit `a6d6452528cf03e9a055d9410aff8c33c3503dd6` で答案を固定し、その後公式解答と照合して `6 / 6 PASS`。教材内根拠 `6 / 6 PASS`、固定範囲外知識による答案補完0件、固定EXAM_ALIGNMENT変更0件。

2026-09-19の前回最終QAでは、技術内容・必須成果物・PDF/PPTX表示QA・固定EXAM_ALIGNMENT・固定範囲境界・改訂後blind独立再解答はすべてPASSしたが、進捗記録3件の旧文言だけが残っていたため `NEEDS_REVISION / IN_PROGRESS` とした。その3件を同期後、今回の最終QA再判定で全項目を再確認し `PASS / completed` とした。

## Topic 16 最終QA
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
- 進捗記録整合: `PASS`
- 技術内容・問題・正答・PDF/PPTXの最終QA時追加変更: `0件`
- 判定: `PASS / completed`

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

## 系列完了
`03_shinkansen_machine_3` は `16 / 16 completed`。MASTER制作順の次は `04_shinkansen_theory_3` の最初の未完了テーマ。
