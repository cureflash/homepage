# Topic 03 完成後公式過去問 独立再解答記録

更新日: 2026-09-13

- series: `04_shinkansen_theory_3`
- topic: `03 架線はただの銅線ではない`
- stage: `INDEPENDENT_REANSWER_COMPLETE`
- 判定: `PASS`

## 実施条件

`MASTER_SPEC.md` と `EXAM_ALIGNMENT_SPEC.md` の完成後独立試験に従い、選定済み公式過去問6問について、公式解答を開く前にTopic 03の完成教材だけを根拠として再解答した。その後、電気技術者試験センターの公式解答と照合した。

使用した教材:
- `03_catenary_resistance.md`
- `03_catenary_resistance_explanation.pdf`
- `03_catenary_resistance_practice.md`
- `03_catenary_resistance_practice.pdf`
- `03_catenary_resistance_images.pptx`

追加した試験範囲・後続Topic知識: なし。

## 独立再解答

| 公式過去問 | 教材だけでの独立解答 | 根拠・途中式 | 公式解答 | 判定 |
|---|---:|---|---:|---|
| 令和8年度上期 理論 問7 | (4) | 並列なので `I=V/R+V/Rx`。`I-V/R=V/Rx` より `Rx=VR/(IR-V)`。教材4.2、4.3、例題2で完結。 | (4) | PASS |
| 令和7年度下期 理論 問5 | (1) | 並列部電圧を `U` とすると `P2=U²/4`、`P3=U²/8`。`R1` 電流は `U/4+U/8=3U/8` なので `P1=5(3U/8)²=45U²/64`。したがって `P1>P2>P3`。教材4、6、例題2で完結。 | (1) | PASS |
| 令和6年度下期 理論 問7 | (4) | `1.8R = R + (R||Rx)`。`x=Rx/R` とすると `x/(1+x)=0.8`、よって `x=4`、`Rx=4R`。教材4.3、例題2で完結。 | (4) | PASS |
| 令和5年度上期 理論 問7 | (3) | `Δt=120-20=100 ℃`、`R120/R20=1+0.005×100=1.5`。一定電圧なので `I120/I20=1/1.5=2/3`、約33%減少。教材5、例題3で完結。 | (3) | PASS |
| 令和4年度下期 理論 問7 | (2) | `r20=R1R2/(R1+R2)`、`r21=R1(1+α1)R2/{R1(1+α1)+R2}`。`(r21-r20)/r20 = α1R2/(R1+R2+α1R1)`。教材5.3、例題3で完結。 | (2) | PASS |
| 令和2年度 理論 問5 | (4) | 全電線の長さは同じなので `R∝ρ/S`。比例値は A=`8.90/9=0.9889`、B=`2.50/5=0.500`、C=`1.47/1=1.47`、D=`1.55/2=0.775`。よって `RC>RA>RD>RB`。教材2、3、例題1で完結。 | (4) | PASS |

## 公式解答照合

公式過去問・解答一覧:
- https://www.shiken.or.jp/chief/third/qa/

公式解答:
- 令和8年度上期: https://www.shiken.or.jp/chief/upload/20260830_ch_third_a01.pdf
- 令和7年度下期: https://www.shiken.or.jp/chief/upload/20260322_ch_third_a01.pdf
- 令和6年度下期: https://www.shiken.or.jp/chief/upload/2024_3_2.pdf
- 令和5年度上期: https://www.shiken.or.jp/chief/upload/20230820_ch_third_a01.pdf
- 令和4年度下期: https://www.shiken.or.jp/chief/upload/20230326_ch_third_a01.pdf
- 令和2年度: https://www.shiken.or.jp/chief/upload/20200913_ch_third_a01.pdf

独立解答列: `(4), (1), (4), (3), (2), (4)`

公式解答列: `(4), (1), (4), (3), (2), (4)`

一致: `6 / 6`

## 品質ゲート判定

- 教材だけで必要公式を選べる: PASS
- 教材だけで途中式を構成できる: PASS
- 教材だけで選択肢を確定できる: PASS
- 問題文の言い換えへ対応できる: PASS
- 正答理由を説明できる: PASS
- 教材外知識の補完が必要な問題: 0問
- 公式解答との一致: 6 / 6

結論: 完成後公式過去問独立再解答は `PASS`。Topic 03は最終QA未実施のため、まだ `completed` としない。
