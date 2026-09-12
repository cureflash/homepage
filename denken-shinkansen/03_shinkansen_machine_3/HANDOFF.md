# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-13

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は1/16。Topic 01は品質ゲートPASSでcompleted。active topicは02 `初代0系はどうやって走っていた？`。

## 今回進捗
Topic 02 を未着手から `topic_02_exam_alignment_complete` へ1段階進めた。

GitHub正本更新:
- `topics/02_dc_machine/02_dc_machine.md` — 制作前EXAM_ALIGNMENTを新規作成
- `STATUS.md`
- `HANDOFF.md`

解説本文・PDF・練習PDF・PowerPointには着手していない。今回の段階はMASTER SPEC / EXAM_ALIGNMENT SPECで必須の「過去問から教材範囲を逆算する」制作前ゲートのみ。

## Topic 02 EXAM_ALIGNMENT
公式過去問は直近年度から6問を選定した。

1. R8上 機械 問1 — 分巻・直巻の発電機／電動機特性、自己励磁、残留磁気、始動トルク、整流子・ブラシとブラシレス化
2. R8上 機械 問2 — 磁界中を動く導体の誘導起電力、発電機作用、導体速度
3. R7下 機械 問1 — 直流分巻電動機の速度特性・トルク特性、特性グラフ
4. R7下 機械 問2 — 永久磁石直流電動機の銅損、電機子抵抗、逆起電力、回転速度
5. R7上 機械 問1 — 直巻・分巻・複巻電動機の結線と特性、始動トルク
6. R7上 機械 問2 — 始動時の逆起電力、始動電流、電機子抵抗、銅損、出力、効率

公式問題:
- R8上: `https://www.shiken.or.jp/chief/upload/20260830_ch_third_q03.pdf`
- R7下: `https://www.shiken.or.jp/chief/upload/20260322_ch_third_q03.pdf`
- R7上: `https://www.shiken.or.jp/chief/upload/20250831_ch_third_q03.pdf`

公式正答番号は、完成後の独立再解答を汚染しないためsource Markdownへ転記していない。

## 確定した教材必須範囲
- 電機子・界磁・整流子・ブラシと整流
- 発電機作用、`e=Blv`、`v=πDN/60`、`E=kΦN`
- 電動機作用、逆起電力、`V=E+IaRa`
- トルク `T=kΦIa`、機械出力 `Pout=Tω`
- 他励・分巻・直巻・複巻の結線と速度／トルク特性
- 電機子銅損 `Ia^2Ra`、機械損、入力・出力・効率
- 新幹線側は系列SPECで確定している0系の直流主電動機を入口にする

参考教材はe-sysnet、電気主任技術者のナレッジノート、電験三種まとめましたを比較し、説明粒度と解法手順だけを参照した。文章・図・例題は複製していない。

## 境界
仕様追加はしていない。0系主電動機の具体的形式・定格値は一次資料で未確認のため追加していない。

Topic 02では過去問対応に必要な `V=E+IaRa`、`E=kΦN` と速度・トルク特性まで扱う。電機子電圧制御、界磁制御、直列抵抗、タップ制御、弱め界磁、定トルク／定出力運転などの体系的な速度制御はTopic 03の範囲なので先取りしない。

## QA判定
Topic 01: `PASS / completed`。

Topic 02: 制作前 `EXAM_ALIGNMENT` 完了。公式6問について要求知識・式・設問型をsource Markdownへマッピング済み。テーマ自体は未完了で、独立再解答は教材完成後に実施する。完成数は1/16。

## 次の正確な開始点
Topic 02の解説本文を作成する。EXAM_ALIGNMENTで確定した要求事項に従い、電験で問う内容、必要概念、公式と成立条件、解法手順、基礎／本試験標準／複合の3段階例題、新幹線への接続、頻出ミス、過去問対応、公式まとめまでを作る。未確認の実車値は使わない。
