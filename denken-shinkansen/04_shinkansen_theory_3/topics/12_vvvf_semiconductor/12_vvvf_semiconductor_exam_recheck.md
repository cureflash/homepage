# Topic 12 完成後公式過去問 独立再解答記録

更新日: 2026-09-17

- series: `04_shinkansen_theory_3`
- topic: `12 300系はなぜVVVFになった？`
- stage: `INDEPENDENT_REANSWER_COMPLETE`
- 判定: `PASS`

## 実施条件

`MASTER_SPEC.md` と `EXAM_ALIGNMENT_SPEC.md` の完成後独立試験に従い、固定EXAM_ALIGNMENTの公式理論過去問7問について、公式解答PDFを開く前に公式問題文とTopic 12の完成教材にある知識・式・判断手順だけから解答を確定し、その後に電気技術者試験センターの公式解答PDFと照合した。

使用した完成教材:
- `12_vvvf_semiconductor.md`
- `12_vvvf_semiconductor_explanation.pdf`
- `12_vvvf_semiconductor_practice.md`
- `12_vvvf_semiconductor_practice.pdf`
- `12_vvvf_semiconductor_images.pptx`

追加した試験範囲・後続Topic知識: なし。
教材外知識による補完: なし。
未確認の300系主変換装置内部回路・実車値による補完: なし。

## 独立再解答

| 公式過去問 | 教材だけでの独立解答 | 根拠・途中判断 | 公式解答 | 判定 |
|---|---:|---|---:|---|
| 令和7年度下期 理論 問11 | (2) | 可変容量ダイオードは逆方向バイアス、定電圧ダイオードは逆方向降伏、レーザダイオードは順方向バイアスを利用する。教材§7.4〜§7.6で完結。 | (2) | PASS |
| 令和7年度上期 理論 問13 | (2) | 静特性から同一`VCE`での`ΔIC/ΔIB`を読み`β≈100`、`IB`一定で`ΔVCE/ΔIC`を読み`ro≈10 kΩ`。教材§7.7・§7.13で完結。 | (2) | PASS |
| 令和6年度下期 理論 問11 | (5) | FETの接合形/MOS、n/pチャネル、デプレッション形/エンハンスメント形の基本から、ゲート電圧によらず常にチャネルが形成されるとする記述を誤りと判定。教材§7.8で完結。 | (5) | PASS |
| 令和6年度上期 理論 問11 | (4) | BJTは基本的にベース電流で制御する電流制御素子、FETはゲート電圧で制御する電圧制御素子であり、逆にした記述を誤りと判定。教材§7.7〜§7.10で完結。 | (4) | PASS |
| 令和4年度上期 理論 問11 | (5) | nチャネルJFETは多数キャリアを主に用いる電圧制御素子。逆ゲートバイアス増大→空乏層拡大→チャネル狭窄→ドレーン電流減少。教材§7.8〜§7.9で完結。 | (5) | PASS |
| 平成29年度 理論 問11 | (2) | 整流、太陽電池、LEDはいずれもpn接合に関係する基本現象・素子として判定。教材§7.4〜§7.6で完結。 | (2) | PASS |
| 平成28年度 理論 問11 | (2) | 真性半導体は温度上昇で電子・正孔対が増え、一般に導電率が上がり抵抗率が下がるため、抵抗率が増加するとする記述を誤りと判定。教材§7.2〜§7.3で完結。 | (2) | PASS |

## 公式解答照合

公式過去問・解答一覧:
- https://www.shiken.or.jp/chief/third/qa/

公式問題:
- 令和7年度下期: https://www.shiken.or.jp/chief/upload/20260322_ch_third_q01.pdf
- 令和7年度上期: https://www.shiken.or.jp/chief/upload/20250831_ch_third_q01.pdf
- 令和6年度下期: https://www.shiken.or.jp/chief/upload/20250323_ch_third_q01.pdf
- 令和6年度上期: https://www.shiken.or.jp/chief/upload/20240818_ch_third_q01.pdf
- 令和4年度上期: https://www.shiken.or.jp/chief/upload/20220821_ch_third_q01.pdf
- 平成29年度: https://www.shiken.or.jp/chief/upload/20170903_ch_third_q01.pdf
- 平成28年度: https://www.shiken.or.jp/chief/upload/20160904_ch_third_q01.pdf

公式解答:
- 令和7年度下期: https://www.shiken.or.jp/chief/upload/20260322_ch_third_a01.pdf
- 令和7年度上期: https://www.shiken.or.jp/chief/upload/20250831_ch_third_a01.pdf
- 令和6年度下期: https://www.shiken.or.jp/chief/upload/2024_3_2.pdf
- 令和6年度上期: https://www.shiken.or.jp/chief/upload/20240818_ch_third_a01.pdf
- 令和4年度上期: https://www.shiken.or.jp/chief/upload/20220821_ch_third_a01.pdf
- 平成29年度: https://www.shiken.or.jp/chief/upload/20170903_ch_third_a01.pdf
- 平成28年度: https://www.shiken.or.jp/chief/upload/20160904_ch_third_a01.pdf

独立解答列: `(2),(2),(5),(4),(5),(2),(2)`

公式解答列: `(2),(2),(5),(4),(5),(2),(2)`

一致: `7 / 7`

## 品質ゲート判定

- 教材だけで必要知識・公式を選べる: PASS
- 教材だけで判断根拠・途中計算を構成できる: PASS
- 教材だけで選択肢を確定できる: PASS
- 正答理由を説明できる: PASS
- 教材外知識の補完が必要な問題: `0件`
- Topic 13のインバータ主回路・PWM・出力波形・高調波への依存: `0件`
- 機械編のGTO/IGBT/SiC詳細損失・駆動比較への依存: `0件`
- BJT/FET小信号回路・hパラメータ・ホール効果への依存: `0件`
- 未確認300系実車回路・実車値への依存: `0件`
- 公式解答との一致: `7 / 7`

結論: 完成後公式過去問独立再解答は `PASS`。Topic 12は最終QA未実施のため、まだ `completed` としない。
