# HANDOFF

updated: 2026-09-15
series: `06_shinkansen_power_2`
active_topic: `07`
current_status: `topic_06_completed`

## 今回完了

Topic 06「275kVを受ける新幹線変電所の中身」の最終QAを再実施し、`PASS / completed` とした。

前回 `NEEDS_REVISION` の唯一のblockerだった主source `topics/06_substation/06_substation.md` の旧進捗記録3箇所は現在地へ同期済み。再確認の結果、技術内容・成果物・試験対応品質ゲート・固定範囲境界・進捗整合は全件PASS。

維持した品質ゲート:
- 固定EXAM_ALIGNMENT: 一次4問＋二次1問、計5問
- 完成後独立再解答: `5 / 5問 PASS`
- 一次: `20 / 20小問 PASS`
- 二次: `3 / 3設問 PASS`
- 練習問題: `15 / 15 PASS`
- 解説PDF: A4縦6ページ / 表示QA `6 / 6 PASS`
- 練習PDF: A4縦4ページ / 表示QA `4 / 4 PASS` / 文字抽出QA PASS
- PowerPoint: 16:9・5スライド / 表示QA `5 / 5 PASS` / overflow 0件 / ZIP整合性PASS
- 系列SPEC固定6項目: `6 / 6`
- 教材外知識補完: `0件`
- 固定範囲外論点追加: `0件`
- 後続Topic知識への依存: `0件`
- 未確認実設備値への依存: `0件`

完成数は `6 / 22`。

## 次に行う

Topic 07「三相電力をどう25kVの単相へ変える？」の制作前EXAM_ALIGNMENTを行う。

1. `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md` を再確認する。
2. Topic 07固定範囲を「スコット、変形ウッドブリッジ、ルーフ・デルタ」「フェーザ図、結線比較」に限定する。
3. 第二種一次「電力」・二次「電力・管理」の公式過去問を直近年度優先で調査する。
4. 二次対象論点で該当記述問題が確認できる場合は最低1問を含める。
5. 件数合わせでTopic 08以降の％インピーダンス、ATき電、電圧降下、不平衡・対称座標法等を混ぜない。
6. 選定問題ごとに要求知識・式・設問型・教材内必須事項を固定し、source MarkdownへEXAM_ALIGNMENTを残す。

## Topic 07 固定範囲

系列SPECに記載された以下だけを固定範囲とする。

扱う内容:
- スコット結線
- 変形ウッドブリッジ結線
- ルーフ・デルタ結線

計算・可視化:
- フェーザ図
- 結線比較

後続Topic 08以降の論点へ拡張しない。