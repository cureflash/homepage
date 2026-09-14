# Topic 04 最終QA

更新日: 2026-09-14

## 判定

`PASS / completed`

前回 `NEEDS_REVISION` となった系列SPEC不足2項目をsource・解説PDF・PowerPointへ同期した後、最終QAを再実施した。上位仕様、一次・二次の過去問対応品質ゲート、練習問題、必須成果物、表示QA、系列SPEC計算・可視化、固定範囲境界を再確認し、全件PASSとした。

## 確認結果

| 確認項目 | 結果 | 確認内容 |
|---|---|---|
| 上位仕様 | PASS | `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`06_shinkansen_power_2/SPEC.md` を再確認 |
| 正式EXAM_ALIGNMENT | PASS | 一次3問＋二次2問、計5問を維持。差し替えなし |
| 必須成果物 | PASS | 解説source、練習source、解説PDF、練習PDF、解説画像PowerPointがGitHub正本上に実在 |
| 練習問題 | PASS | 15問（一次型10＋二次記述5）、独立QA `15 / 15 PASS` |
| 完成後独立再解答 | PASS | 正式5問 `5 / 5 PASS`。教材外知識補完 `0件` |
| 解説PDF表示QA | PASS | A4縦7ページ、200 dpi全7ページ `7 / 7 PASS` |
| 練習PDF表示QA | PASS | A4縦7ページ、200 dpi全7ページ `7 / 7 PASS` |
| PowerPoint表示QA | PASS | 16:9・5スライド、全5枚表示QA、overflow、ZIP整合性PASS |
| 系列SPEC計算・可視化 | PASS | 4項目すべてsource・成果物へ収録 |
| 実値/仮定値区別 | PASS | 「むつ」原子炉熱出力36 MW以外の列車側効率・所内率・走行条件は教材用仮定値と明示 |
| 固定範囲境界 | PASS | 核燃料サイクル・放射線・法規制・新型炉等の追加 `0件` |
| 未確認実設備値 | PASS | 追加 `0件` |
| 進捗記録 | PASS | `04_nuclear_power.md`、`STATUS.md`、`HANDOFF.md` を completed / Topic 05開始へ同期 |

## 系列SPEC計算・可視化

`06_shinkansen_power_2/SPEC.md` のTopic 04で要求される4項目を全件確認した。

1. 原子炉熱出力―車輪出力: 収録済み
2. 効率を変えた場合の走行可能出力: 収録済み
3. 東京―佐世保間の必要走行エネルギーとの比較: 収録済み
4. 発車・加速・惰行・停車を想定した負荷変化: 収録済み

補強した感度計算は、原子炉熱出力 `36 MW` と教材用仮定値 `η_g=0.96`、所内率 `a=0.05`、`η_c=0.97`、`η_m=0.95`、`η_d=0.98` を用い、熱→軸効率 `20/25/30%` に対して車輪出力 `5.93/7.41/8.89 MW`。独立再計算でも一致した。

教材用東京―佐世保条件 `t=8.0 h`、平均必要車輪出力 `4.0 MW` では必要走行エネルギー `32 MWh`。上記3ケースの供給可能エネルギー `47.4/59.3/71.2 MWh` も独立再計算と一致した。実車性能・実運転時分・設備成立性を示す値ではない。

## 過去問対応品質ゲート

- R7 一次 電力 問5: PASS
- H22 一次 電力 問1: PASS
- R3 一次 電力 問5: PASS
- R1 二次 電力・管理 問1: PASS
- R3 二次 電力・管理 問6: PASS
- 合計: `5 / 5 PASS`
- 一次: `3 / 3 PASS`
- 二次: `2 / 2 PASS`
- 教材外知識補完: `0件`
- 固定範囲外追加: `0件`
- 未確認実設備値依存: `0件`

## 必須成果物の実在確認

- `04_nuclear_power.md` — blob `4e81aac1fbd402a80efdf1ffc0529ebe2e8c549d`
- `04_nuclear_power_explanation_source.md` — blob `ef1c42db55be56cb36cf111a4d622ec06512526e`
- `04_nuclear_power_explanation.pdf` — blob `946a4a3e2b576579ad05d5e54d609c9064939e01`
- `04_nuclear_power_practice.md` — blob `682f3f639931827ea7d0d2fa3811051d8df99065`
- `04_nuclear_power_practice.pdf` — blob `45a590897c1ba574cb45d230e0d3f0b894b47a67`
- `04_nuclear_power_images.pptx` — blob `a5f5b1b2b4c20706b06e881d621812f5232f0c4f`
- `04_nuclear_power_practice_qa.md` — blob `287089ac914102112be18e6088948689f2319f12`
- `04_nuclear_power_powerpoint_qa.md` — blob `308acbd7325b556ab2c16609e268dea1b0569007`
- `04_nuclear_power_independent_reanswer.md` — blob `12c8d2a412b707af42b974e83fbbbc1a174e13b5`

## 完了判定

Topic 04 は `completed`。

完成数: `4 / 22`

次はTopic 05「新幹線を再エネ主体で走らせるには？」の制作前EXAM_ALIGNMENTを行う。