# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-13

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は2/16。Topic 01・02は完成済み、次のactive topicは03 `JR東日本はなぜ火力発電所まで持っている？`。

## 今回進捗
Topic 02を1段階進め、最終QAを完了した。制作前 `EXAM_ALIGNMENT`、必須成果物、表示QA、完成後独立再解答7/7 PASS、固定範囲・出典を総合確認し、`PASS / completed` とした。

更新成果物:
- `topics/02_hydropower/02_hydropower_final_qa.md`
- `STATUS.md`
- `HANDOFF.md`

## Topic 02 制作前過去問対応ゲート
公式過去問を直近年度から確認し、`SPEC.md` の固定範囲内で問題全体を完答できる6問・7小問を選定済み。

1. R8上 電力 問2 — 理論的包蔵水力・年間電力量 — 独立 (5) / 公式 (5) — PASS
2. R8上 電力 問15(a) — 揚水発電の発電出力・揚水入力 — 独立 (5) / 公式 (5) — PASS
3. R8上 電力 問15(b) — 揚水時間・総合効率 — 独立 (3) / 公式 (3) — PASS
4. R7下 電力 問2 — 単位体積当たりの水の運動エネルギー — 独立 (1) / 公式 (1) — PASS
5. R7上 電力 問1 — `P=ρgQH` の単位と `9.8QH[kW]` — 独立 (2) / 公式 (2) — PASS
6. R3 電力 問2 — 連続の関係とベルヌーイの定理 — 独立 (3) / 公式 (3) — PASS
7. H25 電力 問1 — 衝動/反動水車と代表形式 — 独立 (4) / 公式 (4) — PASS

結果: `7/7 PASS`。

## Topic 02で固定した教材範囲
`SPEC.md` から追加していない。

- 流量
- 有効落差
- 水力
- 水車出力
- 発電機出力
- 水車効率
- 発電機効率
- 総合効率
- 水車の種類
- 揚水発電
- ベルヌーイの定理の基本
- `P=ρgQHη`

境界:
- ダム形式・発電所分類の詳細は追加しない
- 比速度・キャビテーション・水撃作用・サージタンク・調速機は追加しない
- 発電機の同期機/誘導機としての詳細は追加しない
- JR東日本・信濃川発電設備の未確認実値は真値化しない

## Topic 02 成果物
source Markdown:
- `topics/02_hydropower/02_hydropower.md`

解説PDF:
- `topics/02_hydropower/02_hydropower_explanation.pdf`
- A4縦5ページ
- 200 dpi全ページ表示QA PASS

練習PDF:
- `topics/02_hydropower/02_hydropower_practice.pdf`
- A4縦4ページ・全12問
- 基礎3 / 本試験標準7 / 複合・応用2
- 全問五肢択一・完全解説付き
- 200 dpi全ページ表示QA PASS

解説画像PowerPoint:
- `topics/02_hydropower/02_hydropower_images.pptx`
- 16:9・7枚
- PDF変換後150 dpi全ページ表示QA PASS
- shape境界外はみ出し0件、ZIP整合性PASS

完成後独立再解答:
- `topics/02_hydropower/02_hydropower_exam_reanswer.md`
- `7/7 PASS`
- 教材外知識補完0件

最終QA:
- `topics/02_hydropower/02_hydropower_final_qa.md`
- `PASS / completed`

## Topic 02 最終QA要点
- GitHub正本上で必須4成果物と独立再解答記録の存在を確認
- `EXAM_ALIGNMENT` の6問・7小問が本文・例題へ対応済み
- 解説PDF・練習PDF・PowerPointの既存表示QAは全件PASS
- 完成後独立再解答は7/7で公式解答と一致
- R8上問2 `14.60 TWh`、R8上問15(a) 発電 `約192.5 MW`・揚水入力 `約213.8 MW`、問15(b) `10 h`・`約72.0%`、R3問2 `vB=3.63 m/s`, `pB≈315.9 kPa` を再計算して記録値と一致
- 固定範囲外論点の追加0件
- 未確認実設備値の真値化0件

## 新幹線側の出典境界
JR東日本一次資料で確認した範囲だけを実設備事実として使用している。

- 信濃川発電所は千手発電所・小千谷発電所・小千谷第二発電所の3発電所の総称
- 信濃川水系から取水した水を利用
- 発電した電気が首都圏・上越線・新幹線の電車や鉄道施設へ送られている

本文の計算訓練用数値は仮定値と明記済み。

## 現在状態
- `current_status`: `topic_02_completed`
- 完成数: `2/16`
- last completed: Topic 02
- next active: Topic 03

## 次の正確な開始点
Topic 03「JR東日本はなぜ火力発電所まで持っている？」の制作前EXAM_ALIGNMENTから開始する。`SPEC.md` の火力発電固定範囲から仕様を追加せず、電気技術者試験センター公式過去問を直近年度から原則5問以上調査し、要求知識・使用式・設問型を分解して教材必須説明を確定する。