# Topic 11 最終QA記録

対象: `11 架線事故ではどうやって電気を止める？`
実施日: 2026-09-17

## 判定
`PASS / completed`。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`02_shinkansen_power_3/SPEC.md` とGitHub正本を再照合した。前回最終QAで唯一FAILだった旧進捗記録4箇所は現在地へ同期済みで、技術内容、固定EXAM_ALIGNMENT、完成後ブラインド独立再解答、PDF/PPTX QA、SPEC境界、進捗記録整合を全件PASSと判定した。仕様追加は行っていない。

## 必須成果物
GitHub正本上で以下の実在を確認した。

- source Markdown: `11_fault_protection.md`
- 解説PDF: `11_fault_protection_explanation.pdf`
- 解説PDF QA: `11_fault_protection_explanation_qa.md`
- 練習問題source: `11_fault_protection_practice_source.md`
- 練習PDF: `11_fault_protection_practice.pdf`
- 練習PDF QA: `11_fault_protection_practice_qa.md`
- 解説画像PowerPoint: `11_fault_protection_images.pptx`
- PowerPoint QA: `11_fault_protection_powerpoint_qa.md`
- 完成後ブラインド独立再解答: `11_fault_protection_independent_reanswer.md`

必須成果物: PASS。

## 現行EXAM_ALIGNMENT
品質ゲート対象はTopic 11固定範囲だけで完答できる公式過去問5問・7答案要素。

- R5下 電力 問16 (a)(b)
- R5上 電力 問16 (a)(b)
- R2 電力 問8
- R2 電力 問9
- H22 電力 問8

固定5問・7答案要素の本文要求事項マッピング: `7 / 7`。

R8上 電力 問7は自動再閉路、R8上 電力 問9は通信誘導等の固定範囲外論点を必要とするため品質ゲートから除外されている。件数合わせの仕様追加はない。

## 完成後ブラインド独立再解答
- R5下 電力 問16(a)(b): `(2),(4)` / PASS
- R5上 電力 問16(a)(b): `(4),(2)` / PASS
- R2 電力 問8: `(4)` / PASS
- R2 電力 問9: `(2)` / PASS
- H22 電力 問8: `(3)` / PASS

集計:
- 公式解答一致: `7 / 7 PASS`
- 教材のみ完結: `7 / 7 PASS`
- 教材外知識補完: `0件`
- Topic 12以降の論点による補完: `0件`
- 未確認新幹線実設備値の使用: `0件`
- SPEC固定範囲外追加: `0件`

過去問対応品質ゲート: PASS。

## 成果物QA
- 解説PDF: A4縦4ページ、200 dpi表示QA `4 / 4 PASS`、文字抽出QA PASS、3段階例題の数値・論理再検算PASS、固定5問・7答案要素への対応 `7 / 7`。
- 練習PDF: A4縦4ページ、全12問・全問五肢択一。200 dpi表示QA `4 / 4 PASS`、文字抽出QA PASS、数値・論理再検算 `12 / 12 PASS`、正答一意性 `12 / 12 PASS`、固定5問・7答案要素への接続 `7 / 7`。
- PowerPoint: 16:9・4枚。固定5問・7答案要素の要求事項可視化 `7 / 7`。1601×900表示QA `4 / 4 PASS`、文字欠け0、クリップ0、意図しない重なり0、境界外はみ出し0、ZIP整合性PASS。

表示・ファイルQA: PASS。

## SPEC境界
維持した範囲:
- 短絡
- 地絡
- 短絡電流
- 過電流
- 遮断器
- 遮断容量
- 保護リレー
- 選択遮断
- 接地
- 避雷器
- 固定過去問を解くための%Z共通容量換算、CT比換算、限時特性、ZnO非線形抵抗への必要最小限の接続

追加していない範囲:
- 自動再閉路
- 通信誘導障害
- 間欠アーク地絡の詳細
- 事故点標定
- 鉄道固有の保護アルゴリズム
- CTの構造・取扱いを独立論点とする拡張
- Topic 12以降の弛み・張力、電気材料、配電・地中電線路、回生・蓄電
- 未確認の新幹線保護整定値、事故電流値、遮断器定格、リレー内部ロジック

SPEC境界: PASS。

## 進捗記録整合
前回FAILだった4箇所を再確認した。

1. `11_fault_protection_explanation_qa.md` — 練習source・練習PDF・PowerPoint・独立再解答・main source同期・最終QA実施済みを反映済み。
2. `11_fault_protection_practice_source.md` — 練習PDF・PowerPoint・独立再解答・main source同期・最終QA実施済みを反映済み。
3. `11_fault_protection_powerpoint_qa.md` — 完成後ブラインド独立再解答 `7 / 7 PASS`、main source同期・最終QA実施済みを反映済み。
4. `11_fault_protection_independent_reanswer.md` — main source同期・最終QA実施済みを反映済み。

本sourceも `topic_11_completed`、最終QA `PASS / completed`、次工程Topic 12制作前EXAM_ALIGNMENTへ同期した。

進捗記録整合: PASS。

## 最終判定
- 必須成果物: PASS
- 現行EXAM_ALIGNMENT: PASS
- 完成後独立再解答: `7 / 7 PASS`
- 教材外知識補完: `0件`
- PDF/PPTX QA: PASS
- SPEC境界: PASS
- 進捗記録整合: PASS

Topic 11は `PASS / completed`。新品質基準の完成数は `11 / 16`。

次工程はTopic 12 `320km/hでもパンタグラフが離れないのはなぜ？` の制作前EXAM_ALIGNMENT。Topic 11の技術内容・固定EXAM_ALIGNMENT・数式・問題・正答・PDF/PPTX・独立再解答結果は変更しない。