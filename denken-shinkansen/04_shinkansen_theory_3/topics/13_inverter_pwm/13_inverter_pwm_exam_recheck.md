# Topic 13 完成後公式過去問 独立再解答記録

更新日: 2026-09-17

- series: `04_shinkansen_theory_3`
- topic: `13 インバータはどうやって三相交流を作る？`
- stage: `INDEPENDENT_REANSWER_COMPLETE`
- 判定: `PASS`

## 実施条件

`MASTER_SPEC.md` と `EXAM_ALIGNMENT_SPEC.md` の完成後独立試験に従い、固定EXAM_ALIGNMENTの公式「理論」過去問4問について、公式解答PDFを開く前に公式問題文とTopic 13の完成教材にある知識・式・判断手順だけから解答を確定し、その後に電気技術者試験センターの公式解答PDFと照合した。

使用した完成教材:
- `13_inverter_pwm.md`
- `13_inverter_pwm_explanation.pdf`
- `13_inverter_pwm_practice.md`
- `13_inverter_pwm_practice.pdf`
- `13_inverter_pwm_images.pptx`

追加した試験範囲・後続Topic知識: なし。
教材外知識による補完: なし。
機械科目のPWM/V/f制御・素子損失詳細による補完: なし。
未確認の新幹線主変換装置内部回路・実車値による補完: なし。

## 独立再解答

| 公式過去問 | 教材だけでの独立解答 | 根拠・途中判断 | 公式解答 | 判定 |
|---|---:|---|---:|---|
| 令和6年度上期 理論 問9 | (2) | 基本波と第3高調波を別々に処理する。基本波は `(100/√2)(20/√2)cos(π/6)≈866 W`、第3高調波は `(50/√2)(10√3/√2)cos(π/3)≈217 W`。合計 `約1.08 kW`。教材§7.6・§7.7・§7.12・§8.2で完結。 | (2) | PASS |
| 令和4年度下期 理論 問8 | (1) | `波形率=実効値/整流平均値`、`波高率=最大値/実効値`。三角波は正弦波より両者とも大きく、方形波は両者とも小さい。教材§7.4・§7.12・§7.13で完結。 | (1) | PASS |
| 平成30年度 理論 問13 | (3) | 目標波形は `v_o=max(v_i,E)`。理想ダイオードを区間ごとに短絡/開放へ置換すると、回路(a)と(d)が同じ下側Eクランプ波形になる。教材§7.2・§7.8・§7.12・§8.3の手順で完結。 | (3) | PASS |
| 平成29年度 理論 問9 | (3) | 各調波の実効値二乗を加える。`P=R[(6/√2)^2+(2/√2)^2]=5(18+2)=100 W`。教材§7.6・§7.7・§7.12で完結。 | (3) | PASS |

## 公式解答照合

公式過去問・解答一覧:
- https://www.shiken.or.jp/chief/third/qa/

公式問題:
- 令和6年度上期: https://www.shiken.or.jp/chief/upload/20240818_ch_third_q01.pdf
- 令和4年度下期: https://www.shiken.or.jp/chief/upload/20230326_ch_third_q01.pdf
- 平成30年度: https://www.shiken.or.jp/chief/upload/20180902_ch_third_q01.pdf
- 平成29年度: https://www.shiken.or.jp/chief/upload/20170903_ch_third_q01.pdf

公式解答:
- 令和6年度上期: https://www.shiken.or.jp/chief/upload/20240818_ch_third_a01.pdf
- 令和4年度下期: https://www.shiken.or.jp/chief/upload/20230326_ch_third_a01.pdf
- 平成30年度: https://www.shiken.or.jp/chief/upload/20180902_ch_third_a01.pdf
- 平成29年度: https://www.shiken.or.jp/chief/upload/20170903_ch_third_a01.pdf

独立解答列: `(2),(1),(3),(3)`

公式解答列: `(2),(1),(3),(3)`

一致: `4 / 4`

## 品質ゲート判定

- 教材だけで必要知識・公式を選べる: PASS
- 教材だけで途中式・ON/OFF判定を構成できる: PASS
- 教材だけで選択肢を確定できる: PASS
- 正答理由を説明できる: PASS
- 教材外知識の補完が必要な問題: `0件`
- 系列SPEC固定範囲外論点への依存: `0件`
- Topic 14の測定器・測定誤差への依存: `0件`
- 機械科目の詳細PWM/V/f制御への依存: `0件`
- 未確認実車値への依存: `0件`
- 公式解答との一致: `4 / 4`

結論: 完成後公式過去問独立再解答は `PASS`。Topic 13は最終QA未実施のため、まだ `completed` としない。
