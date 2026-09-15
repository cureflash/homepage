# STATUS

updated: 2026-09-15
series: `06_shinkansen_power_2`
active_topic: `07`
theme: 三相電力をどう25kVの単相へ変える？
current_status: `topic_07_exam_alignment_blocked`
completed_topics: `6 / 22`

## Topic 06 final result

Topic 06「275kVを受ける新幹線変電所の中身」の最終QAを再実施し、`PASS / completed` とした。前回唯一のblockerだった主source進捗記録3箇所は同期済み。教材本文・固定EXAM_ALIGNMENT・数式・問題・PDF/PPTX・固定範囲は変更していない。

品質ゲート:
- 制作前独立検証: `5 / 5問 PASS`
- 一次過去問: `20 / 20小問 PASS`
- 二次過去問: `3 / 3設問 PASS`
- 完成後独立再解答: `5 / 5問 PASS`
- 完成後一次: `20 / 20小問 PASS`
- 完成後二次: `3 / 3設問 PASS`
- SPEC固定6項目: `6 / 6`
- 解説PDF: A4縦 `6ページ` / 200 dpi `6 / 6 PASS`
- 練習問題: `15問`
- 一次型五肢択一: `10 / 10 PASS`
- 二次記述型: `5 / 5 PASS`
- 練習15問独立QA: `15 / 15 PASS`
- 練習PDF: A4縦 `4ページ` / 200 dpi `4 / 4 PASS` / 文字抽出QA PASS
- 解説画像PowerPoint: 16:9 `5スライド` / 表示QA `5 / 5 PASS`
- PowerPoint overflow: `0件`
- PowerPoint ZIP整合性: `PASS`
- 正式5過去問への練習問題マッピング: `5 / 5`
- 教材外知識補完: `0件`
- 固定範囲外論点追加: `0件`
- 後続Topic知識への依存追加: `0件`
- 未確認実設備値追加: `0件`
- source進捗整合: `PASS`
- 最終QA: `PASS / completed`

成果物:
- `topics/06_substation/06_substation.md`
- `topics/06_substation/06_substation_explanation_source.md`
- `topics/06_substation/06_substation_explanation.pdf`
- `topics/06_substation/06_substation_practice.md`
- `topics/06_substation/06_substation_practice_qa.md`
- `topics/06_substation/06_substation_practice.pdf`
- `topics/06_substation/06_substation_images.pptx`
- `topics/06_substation/06_substation_powerpoint_qa.md`
- `topics/06_substation/06_substation_independent_reanswer.md`
- `topics/06_substation/06_substation_final_qa.md`

## Topic 07 制作前EXAM_ALIGNMENT blocker

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`、直近成果をreconcileした上で、第二種一次「電力」・二次「電力・管理」を直近年度から遡って調査したが、Topic 07固定範囲「スコット、変形ウッドブリッジ、ルーフ・デルタ」「フェーザ図、結線比較」に直接対応する公式過去問を、指定科目内で品質ゲート用に確定できなかった。

確認事項:
- 平成23年度 第二種一次「電力」問2は、公式問題でΔ結線とV結線の容量・送電電力比較を扱うが、V結線はTopic 07固定範囲外なので採用しない。
- 平成12年度 第二種一次「電力」問2は過去問索引上「主変圧器の結線」だが、現行の電気技術者試験センター公開アーカイブは平成21年度までで、当該問題本文・公式解答を公式PDFで再確認できない。内容を推測して採用しない。
- スコット結線を直接扱う平成23年度 第二種二次「機械・制御」問2は、公式PDFで確認できたが、本系列HANDOFFが指定する二次「電力・管理」の範囲外なので採用しない。
- 二次「電力・管理」の年度別索引でも、スコット／変形ウッドブリッジ／ルーフ・デルタに直接対応する記述問題を確認できなかった。
- 件数合わせとしてTopic 08以降の％インピーダンス、ATき電、電圧降下、不平衡・対称座標法を混ぜない。

exact blocker:
`Topic 07の固定技術範囲と、HANDOFFで指定された過去問科目（一次「電力」・二次「電力・管理」）の間で、公式過去問対応品質ゲートを確定できない。科目外の「機械・制御」問題を採用するか、指定科目内で確認できた範囲のみを採用して原則5問未満を許容するかを正本から決定できないため、推測でEXAM_ALIGNMENTを固定できない。`

調査先:
- 電気技術者試験センター 第二種過去問題: https://www.shiken.or.jp/chief/second/qa/
- 電気の神髄 第二種一次「電力」年度別出題一覧: https://denki-no-shinzui.com/denryoku2/
- 電気の神髄 第二種二次「電力・管理」年度別出題一覧: https://denki-no-shinzui.com/denryokukanri2/
- 電験王2 平成23年度二次「機械・制御」問2: https://denken-ou.com/c2/kikaiseigyoh23-2/

## Gate checklist

- [x] Topic 01 completed
- [x] Topic 02 completed
- [x] Topic 03 completed
- [x] Topic 04 completed
- [x] Topic 05 completed
- [x] Topic 06 completed
- [ ] Topic 07 制作前EXAM_ALIGNMENT — BLOCKED

## next_start

Topic 07は制作前EXAM_ALIGNMENTで停止。上記exact blockerが解消されるまで、source本文・PDF・練習問題・PowerPointへ進めない。科目外過去問の採用、固定範囲外問題による件数合わせ、Topic 08以降の先取りは行わない。
