# HANDOFF

updated: 2026-09-17
series: `06_shinkansen_power_2`
active_topic: `11`
current_status: `topic_11_explanation_source_complete`

## 今回完了

Topic 11「新幹線が移動すると電圧はどう変わる？」の解説本文sourceと3段階例題を制作した。

前提の制作前品質ゲートは維持する。

- 平成30年度 第二種一次「電力」問7 — `5 / 5 PASS`
- 平成27年度 第二種二次「電力・管理」問3 — `4 / 4 PASS`
- 平成27年度 第二種二次「電力・管理」問4 — `5 / 5 PASS`
- 平成26年度 第二種二次「電力・管理」問4 — `3 / 3 PASS`
- 合計: `4 / 4問・17 / 17答案要素 PASS`

追加成果物:
- `topics/11_moving_train_voltage/11_moving_train_voltage_explanation.md`

本文の品質確認:
- SPEC固定内容 `6 / 6`
- パンタグラフ電圧・線路電流・有効電力損失・無効電力への数式接続 `4 / 4`
- 3段階例題 `3 / 3`
- 正式4問・17答案要素の本文マッピング `17 / 17`
- Topic 12以降の先取り `0件`
- 未確認実設備値 `0件`
- 仕様追加 `0件`

解説sourceでは、単一移動負荷について `Z(x)=z'x`、`S=P+jQ=VI*`、`V_s=V_r+ZI`、厳密受電端電圧式、近似電圧降下、`I²R` 損失、位置掃引の計算順を説明した。H27二次問3へ必要な位置依存電流の積分法も、複数列車潮流へ拡張せず試験技能として接続した。H30一次問7の導体量関係はTopic 10既習事項の再確認に限定した。

## 現在地

Topic 11: `explanation_source_complete / IN_PROGRESS`。

完成数: `10 / 22`。

## 次に行う

`11_moving_train_voltage_explanation.md` から解説PDFを制作し、数式・単位・ページ表示をQAする。練習問題、計算プログラム、PowerPointはまだ制作しない。