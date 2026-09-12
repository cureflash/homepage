# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-13

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は2/16。Topic 01・02は品質ゲートPASSでcompleted。次のactive topicは03 `直流モーターはどうやって速度を変える？`。

## 今回進捗
Topic 02 を `topic_02_powerpoint_complete` から `topic_02_completed` へ1段階進めた。

保存済み正答を先に見ず、Topic 02の選定6問を教材内容だけで独立再解答し、その後に電気技術者試験センター公式解答と照合した。

- R8上 機械 問1: `2` / 公式 `2` — PASS
- R8上 機械 問2: `4` / 公式 `4` — PASS
- R7下 機械 問1: `5` / 公式 `5` — PASS
- R7下 機械 問2: `4` / 公式 `4` — PASS
- R7上 機械 問1: `5` / 公式 `5` — PASS
- R7上 機械 問2: `2` / 公式 `2` — PASS

結果は `2 / 4 / 5 / 4 / 5 / 2`、6/6一致。必要公式の選択、途中式、言い換え対応、正答理由、教材カバレッジを確認し、Topic 02をcompletedとした。

GitHub正本更新:
- `topics/02_dc_machine/02_dc_machine.md` — 独立再解答結果・公式照合・QA判定を記録
- `STATUS.md` — Topic 02 completed、完成数2/16、次Topic 03へ更新
- `HANDOFF.md`

## Topic 02 EXAM_ALIGNMENT
公式過去問は直近年度から6問を選定済み。

1. R8上 機械 問1 — 分巻・直巻の発電機／電動機特性、自己励磁、残留磁気、始動トルク、整流子・ブラシとブラシレス化
2. R8上 機械 問2 — 磁界中を動く導体の誘導起電力、発電機作用、導体速度
3. R7下 機械 問1 — 直流分巻電動機の速度特性・トルク特性、負荷電流と電機子電流・界磁電流
4. R7下 機械 問2 — 永久磁石直流電動機の銅損、電機子抵抗、逆起電力、回転速度
5. R7上 機械 問1 — 直巻・分巻・複巻電動機の結線と特性、始動トルク、累積複巻・差動複巻
6. R7上 機械 問2 — 始動時の逆起電力、始動電流から電機子抵抗、銅損、出力、効率

公式問題:
- R8上: `https://www.shiken.or.jp/chief/upload/20260830_ch_third_q03.pdf`
- R7下: `https://www.shiken.or.jp/chief/upload/20260322_ch_third_q03.pdf`
- R7上: `https://www.shiken.or.jp/chief/upload/20250831_ch_third_q03.pdf`

公式解答:
- R8上: `https://www.shiken.or.jp/chief/upload/20260830_ch_third_a01.pdf`
- R7下: `https://www.shiken.or.jp/chief/upload/20260322_ch_third_a01.pdf`
- R7上: `https://www.shiken.or.jp/chief/upload/20250831_ch_third_a01.pdf`

## Topic 02 成果物
- `topics/02_dc_machine/02_dc_machine.md`
- `topics/02_dc_machine/02_dc_machine_explanation.pdf`
- `topics/02_dc_machine/02_dc_machine_practice.md`
- `topics/02_dc_machine/02_dc_machine_practice.pdf`
- `topics/02_dc_machine/02_dc_machine_images.pptx`

解説PDF:
- A4縦 4ページ
- 電験論点、構造・整流、誘導起電力、逆起電力、トルク、損失・効率、他励・分巻・直巻・複巻、解法手順、3段階例題、新幹線接続、頻出ミス、選定6問の過去問対応、公式まとめを収録
- 全4ページ表示QA PASS

練習問題・練習PDF:
- 12問、全問五肢択一
- 基礎3問、本試験標準7問、複合・応用2問
- 数値問題8問、知識・正誤問題4問
- 完全解説付き
- 練習PDF A4縦5ページ、全ページ表示QA PASS

解説画像PowerPoint:
- 16:9、6枚
- 電験で問う内容と0系の電力経路、直流機の主要式・構造模式図、他励・分巻・直巻・複巻の特性、解法手順と3段階例題、選定6問の過去問対応、公式まとめ・出典を収録
- 全6枚レンダリングQA・overflow検査PASS

## 境界
仕様追加はしていない。0系主電動機の具体的形式・定格値は一次資料で未確認のため追加していない。

Topic 02では過去問対応に必要な `V=E+IaRa`、`E=kΦN` と速度・トルク特性まで扱った。電機子電圧制御、界磁制御、直列抵抗、タップ制御、弱め界磁、定トルク／定出力運転などの体系的な速度制御はTopic 03の範囲として残している。

## QA判定
Topic 01: `PASS / completed`。

Topic 02: `PASS / completed`。MASTER SPEC必須成果物を揃え、完成後独立再解答6/6正答。完成数は2/16。

## 次の正確な開始点
Topic 03 `直流モーターはどうやって速度を変える？` の制作前EXAM_ALIGNMENTを開始する。直近年度の公式過去問から、系列SPECで定義済みの直流電動機の速度制御・起動・電機子電圧・界磁・直列抵抗・弱め界磁等に直接対応する問題を調査し、対象問題と教材必須範囲を確定する。