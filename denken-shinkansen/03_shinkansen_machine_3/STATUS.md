# STATUS - 新幹線・電験三種「機械」

更新日: 2026-09-19

## 状態
- active_series: `03_shinkansen_machine_3`
- exam_aligned_completed_topics: `15 / 16`
- current_status: `topic_16_independent_reanswer_complete`
- last_completed_topic: `15 車内の照明・空調にはどれだけ電気が必要？`
- active_topic: `16 同期機って新幹線には使わないの？`
- next_start: Topic 16の最終QA再判定を実施し、必須成果物・表示QA・固定EXAM_ALIGNMENT・進捗記録整合・固定範囲境界をまとめて確認する

## 新品質ゲート進捗
- [x] 01 架線25kVをそのままモーターに入れたらどうなる？ — 品質ゲートPASS / completed
- [x] 02 初代0系はどうやって走っていた？ — 品質ゲートPASS / completed
- [x] 03 直流モーターはどうやって速度を変える？ — 品質ゲートPASS / completed
- [x] 04 300系でモーターが全部変わった — 品質ゲートPASS / completed
- [x] 05 誘導電動機はなぜ勝手に回る？ — 品質ゲートPASS / completed
- [x] 06 新幹線はどうやって速度を変えている？ — 品質ゲートPASS / completed
- [x] 07 GTO→IGBT→SiCで何が変わった？ — 品質ゲートPASS / completed
- [x] 08 N700Sのモーターはなぜ小さくできた？ — 品質ゲートPASS / completed
- [x] 09 新幹線はどうやって電気で止まる？ — 品質ゲートPASS / completed
- [x] 10 新幹線の速度はどう自動制御される？ — 品質ゲートPASS / completed
- [x] 11 空転した車輪をどう立て直す？ — 品質ゲートPASS / completed
- [x] 12 新幹線のコンピュータは何をしている？ — 品質ゲートPASS / completed
- [x] 13 新幹線は主電動機以外もモーターだらけ？ — 最終QA再判定PASS / completed
- [x] 14 停電してもN700Sが走れるのはなぜ？ — 最終QA再判定PASS / completed
- [x] 15 車内の照明・空調にはどれだけ電気が必要？ — 最終QA再判定PASS / completed
- [ ] 16 同期機って新幹線には使わないの？ — 完成後blind独立再解答 `6 / 6 PASS` / 最終QA待ち

## Topic 16 制作品質状態
- 固定範囲: 同期機 / 同期発電機 / 同期電動機 / 回転磁界 / 同期速度 / 極数 / 周波数 / 界磁 / 励磁 / 電機子 / 力率 / 電機子反作用 / 同期リアクタンス / V曲線の基本 / 並行運転の基本
- 固定EXAM_ALIGNMENT: R7上 機械 問5 / R5下 機械 問5 / R5下 機械 問6 / R4上 機械 問4 / H28 機械 問5 / H26 機械 問5
- 品質ゲート対象: `6問・6答案要素`
- 制作前検証・公式解答照合: `6 / 6 PASS`
- 固定過去問要求事項の本文マッピング: `6 / 6 PASS`
- 3段階例題: `PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定範囲外知識による答案補完: `0件`
- 始動法・制動巻線・短絡比・短絡試験・同期調相機・負荷角等の固定範囲外追加: `0件`
- L0系リニア同期モータ: 系列SPECどおり、回転同期機を直線状に展開したものという概念説明に限定

### ベクトル図補強
- source: `topics/16_synchronous_machine/16_synchronous_machine.md`
- 同期電動機の式: `V = E + jXsI`
- 作図判定: `E` の終点を `jXsI` の始点とし、`jXsI` の終点が `V` の終点に一致する
- 正しい矢印: `E の終点 → V の終点`
- 逆向き判定: `V の終点 → E の終点` を `jXsI` と読む候補は除外
- `jXsI` の位相: `I` より90°進む
- 解説source QA: `PASS`
- ベクトル尾→頭・始点終点判定QA: `PASS`
- practice source: `topics/16_synchronous_machine/16_synchronous_machine_practice.md`
- 練習問題: `12問` を維持
- 問10: R5下 機械 問5型の尾→頭判定を直接問う五肢択一へ改訂
- 練習問題独立計算・論理QA: `12 / 12 PASS`
- 練習問題正答一意性QA: `12 / 12 PASS`
- 練習問題→固定EXAM_ALIGNMENT接続: `6 / 6 PASS`

### 解説PDF再同期
- explanation PDF: `topics/16_synchronous_machine/16_synchronous_machine_explanation.pdf`
- source改訂反映: `PASS`
- A4縦: `PASS`
- ページ数: `4`
- 200 dpi表示QA: `4 / 4 PASS`
- 文字抽出QA: `PASS`
- ベクトル尾→頭判定収録: `PASS`
- 固定EXAM_ALIGNMENT 6問・6答案要素マッピング: `6 / 6`
- 固定範囲外追加: `0件`
- QA記録: `topics/16_synchronous_machine/16_synchronous_machine_explanation_pdf_qa.md`

### 練習PDF再同期
- practice PDF: `topics/16_synchronous_machine/16_synchronous_machine_practice.pdf`
- practice source改訂反映: `PASS`
- A4縦: `PASS`
- ページ数: `2`
- 問題数: `12問`（基礎3 / 本試験標準7 / 複合・応用2）
- 五肢択一: `12 / 12`
- 完全解説: `12 / 12`
- 200 dpi表示QA: `2 / 2 PASS`
- 文字抽出QA: `PASS`
- 問10の `E終点 → V終点` 尾→頭判定収録: `PASS`
- 正答一覧source一致: `12 / 12 PASS`
- 固定EXAM_ALIGNMENT 6問・6答案要素接続: `6 / 6 PASS`
- 固定範囲外追加: `0件`
- QA記録: `topics/16_synchronous_machine/16_synchronous_machine_practice_pdf_qa.md`

### 解説画像PowerPoint再同期
- PowerPoint: `topics/16_synchronous_machine/16_synchronous_machine_images.pptx`
- source改訂反映: `PASS`
- 16:9: `PASS`
- スライド数: `4`
- 表示QA: `4 / 4 PASS`
- `slides_test.py` はみ出し検査: `PASS`（0件）
- PowerPoint ZIP整合性: `PASS`
- `V = E + jXsI`: `PASS`
- `jXsI` は `I` より90°進む: `PASS`
- `E の終点 → V の終点 = jXsI` の尾→頭判定収録: `PASS`
- `V の終点 → E の終点` の逆向き候補除外: `PASS`
- 固定EXAM_ALIGNMENT 6問・6答案要素接続: `6 / 6 PASS`
- 固定範囲外追加: `0件`
- QA記録: `topics/16_synchronous_machine/16_synchronous_machine_powerpoint_qa.md`

### 派生成果物の同期状態
- explanation PDF: `topics/16_synchronous_machine/16_synchronous_machine_explanation.pdf` — source改訂反映済み / `PASS`
- explanation PDF QA: `topics/16_synchronous_machine/16_synchronous_machine_explanation_pdf_qa.md` — 再同期後QA / `PASS`
- practice PDF: `topics/16_synchronous_machine/16_synchronous_machine_practice.pdf` — practice source改訂反映済み / `PASS`
- practice PDF QA: `topics/16_synchronous_machine/16_synchronous_machine_practice_pdf_qa.md` — 再同期後QA / `PASS`
- PowerPoint: `topics/16_synchronous_machine/16_synchronous_machine_images.pptx` — source改訂反映済み / `PASS`
- PowerPoint QA: `topics/16_synchronous_machine/16_synchronous_machine_powerpoint_qa.md` — 再同期後QA / `PASS`

### 完成後blind独立再解答
- 旧版結果: `5 / 6 PASS / NEEDS_REVISION`
- 改訂後答案ロックcommit: `a6d6452528cf03e9a055d9410aff8c33c3503dd6`
- 改訂後blind解答: R7上 問5 `(3)` / R5下 問5 `(3)` / R5下 問6 `(3)` / R4上 問4 `(2)` / H28 問5 `(2)` / H26 問5 `(1)`
- 公式解答: R7上 問5 `(3)` / R5下 問5 `(3)` / R5下 問6 `(3)` / R4上 問4 `(2)` / H28 問5 `(2)` / H26 問5 `(1)`
- 公式解答一致: `6 / 6 PASS`
- 教材内根拠へ戻せる: `6 / 6 PASS`
- 固定範囲外知識による答案補完: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 独立再解答記録: `topics/16_synchronous_machine/16_synchronous_machine_independent_reanswer.md`
- 完成後blind独立再解答ゲート: `PASS`
- 品質状態: 最終QA待ち
- 状態: `topic_16_independent_reanswer_complete / IN_PROGRESS`

## Topic 15 最終品質状態
- 固定EXAM_ALIGNMENT: R8上 機械 問17(a)(b) / R7上 機械 問12 / R7上 機械 問17(a)(b) / R6下 機械 問17(a)(b) / R6上 機械 問17(a)(b) / R4上 機械 問17(a)(b) / R2 機械 問12
- 品質ゲート対象: `7問・12答案要素`
- 完成後blind独立再解答: `12 / 12 PASS`
- 最終QA再判定: `PASS`
- 状態: `completed`

## Topic 14 最終品質状態
- 固定EXAM_ALIGNMENT: H30 機械 問12
- 完成後blind独立再解答: `1 / 1 PASS`
- 最終QA再判定: `PASS`
- 状態: `completed`

## Topic 13 最終品質状態
- 固定EXAM_ALIGNMENT: R5上 機械 問7 / R4下 機械 問11 / H30 機械 問10 / H29 機械 問12 / H27 機械 問12
- 完成後blind独立再解答: `5 / 5 PASS`
- 最終QA再判定: `PASS`
- 状態: `completed`

## 次工程
Topic 16の最終QA再判定を実施する。解説source / 解説PDF / 練習source / 練習PDF / PowerPoint / 各QA記録 / 完成後blind独立再解答記録 / STATUS / HANDOFF の整合を確認し、固定範囲外追加0件・固定EXAM_ALIGNMENT変更0件を再確認する。
