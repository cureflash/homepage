# Topic 17 最終QA記録

対象: `17 新幹線の速度をフィードバック制御する`

実施日: 2026-09-18

## 判定

`NEEDS_REVISION / IN_PROGRESS`。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`07_shinkansen_machine_2/SPEC.md` と最新mainを再確認した。技術内容、固定EXAM_ALIGNMENT、完成後独立再解答、PDF/PPTX QA、仕様境界はPASSしたが、進捗記録3箇所が実状態へ未同期のため completed にはしない。

## reconcile

- 最初の未完了テーマは Topic 17。
- 固定EXAM_ALIGNMENTは一次1問＋二次記述4問、計5問・6答案要素のまま変更なし。
- source Markdown、解説PDF、練習source/PDF、PowerPoint、各QA、独立再解答前ゲート、答案ロック、完成後独立再解答記録の実在を確認。
- 技術本文・練習問題・正答・PDF/PPTX・固定EXAM_ALIGNMENTの内容変更 `0件`。

## 必須成果物

- source Markdown: PASS (`b0faf60a08ccca3ce389bf7cc58603bf1b780546`)
- 解説PDF: PASS (`171afc11b64f8ece63702473bdef84c20865ca80`)
- 解説PDF QA: PASS (`b8586ce663ab0d9d3ac5f8c63a34b4910e926fd4`)
- 練習source: PASS (`261aef7e59de4fdbd055d9611b6a1e6e5668150e`)
- 練習PDF: PASS (`87e988deffbbede3e4b76031a98a4e50762d7e8f`)
- 練習PDF QA: PASS
- 解説画像PowerPoint: PASS (`d712faec67a64ff8b3c4157f8c4ae032802da626`)
- PowerPoint QA: PASS (`58fff28d9a9bbe6ea467b08a17db2fdf4d0594a4`)
- 独立再解答前ゲート: PASS (`a878bfaf503ab1887ae689d54e53ea6237893338`)
- 答案ロック: PASS (`93c538935ea619a34679ce6fc790c54f1283b89b`)
- 完成後独立再解答記録: PASS (`f9e19ebbb83fa9d3bdd35ad180e1f3bbf7e34c39`)

## EXAM_ALIGNMENT・独立再解答

- R07 二次 機械・制御 問4 (1): `1 / 1 PASS`
- R06 二次 機械・制御 問4 (1): `1 / 1 PASS`
- R04 二次 機械・制御 問4 (3): `1 / 1 PASS`
- R03 二次 機械・制御 問4 (1),(2): `2 / 2 PASS`
- H21 一次 機械 問4 (1): `1 / 1 PASS`
- 合計: `6 / 6 PASS`
- 教材外知識による補完: `0件`

二種の一次・二次を合わせて5問を固定し、二次記述4問を含む。完成教材だけで6答案要素を独立再解答し、公式照合までPASSしている。

## 練習・表示QA

- 練習問題: 一次10問＋二次記述5問
- 一次正答一意性: `10 / 10 PASS`
- 独立再計算・論理QA: `15 / 15 PASS`
- 固定6答案要素への接続: `6 / 6 PASS`
- 解説PDF: A4縦6ページ、表示QA `6 / 6 PASS`、文字抽出QA PASS
- 練習PDF: A4縦5ページ、表示QA `5 / 5 PASS`、主要式 `14 / 14 PASS`、文字抽出QA PASS
- PowerPoint: 16:9・4スライド、表示QA `4 / 4 PASS`、overflow `0件`、ZIP整合性PASS

## 仕様境界

- Topic 18の過渡応答先取り: `0件`
- Topic 19のPID先取り: `0件`
- Topic 20の安定判別・周波数応答先取り: `0件`
- Topic 21の再粘着制御先取り: `0件`
- 二自由度制御・フィードフォワード補償の独立論点追加: `0件`
- 未確認の新幹線制御ゲイン・時定数・センサ定数等の実車値化: `0件`

判定: `PASS`。

## 進捗記録整合

次の3箇所が実状態と不一致。

1. main source `## 状態`: `topic_17_explanation_pdf_complete / IN_PROGRESS` のままで、練習source/PDF・PowerPoint・独立再解答完了を反映していない。
2. main source末尾 `# 次工程`: 「Topic 17練習sourceを制作する」のまま。
3. 練習source末尾 `# 次工程`: 「Topic 17練習PDFを制作する」のまま。

系列 `STATUS.md` / `HANDOFF.md` は独立再解答完了まで同期済みだが、上記3箇所が不一致のため進捗記録整合はFAIL。

判定: `FAIL`。

## 最終判定

`NEEDS_REVISION / topic_17_final_qa_needs_revision / IN_PROGRESS`。

技術内容と試験対応品質ゲートはPASSしている。次工程は上記3箇所だけを実成果物状態へ同期し、技術本文・問題・正答・固定EXAM_ALIGNMENT・PDF/PPTX・独立再解答結果は変更しない。同期後に最終QAを再実施する。
