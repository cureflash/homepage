# Topic 09 完成後公式過去問 独立再解答記録

更新日: 2026-09-16

- series: `04_shinkansen_theory_3`
- topic: `09 北陸新幹線は50Hzと60Hzをどう走る？`
- stage: `INDEPENDENT_REANSWER_COMPLETE`
- 判定: `PASS`

## 実施条件

`MASTER_SPEC.md` と `EXAM_ALIGNMENT_SPEC.md` の完成後独立試験に従い、固定EXAM_ALIGNMENTの公式理論過去問6問について、公式解答PDFを開く前に公式問題文とTopic 09の完成教材にある式・判断手順だけから解答を確定し、その後に電気技術者試験センターの公式解答PDFと照合した。

使用した完成教材:
- `09_hokuriku_frequency_rlc.md`
- `09_hokuriku_frequency_rlc_explanation.pdf`
- `09_hokuriku_frequency_rlc_practice.md`
- `09_hokuriku_frequency_rlc_practice.pdf`
- `09_hokuriku_frequency_rlc_images.pptx`

追加した試験範囲・後続Topic知識: なし。
未確認新幹線実車値・周波数切替方式の補完: なし。

## 独立再解答

| 公式過去問 | 教材だけでの独立解答 | 根拠・途中式 | 公式解答 | 判定 |
|---|---:|---|---:|---|
| 令和8年度上期 理論 問8 | (1) | `VC=12V, XC=6Ω` から左枝 `I=2A`。`VR=16V` なので `E=√(16²+12²)=20V`。右枝 `|Z|=√(4²+3²)=5Ω` より `I=4A`。`P=2²×8+4²×4=96W`。教材§8.3、§8.4、§8.7で完結。 | (1) | PASS |
| 令和7年度下期 理論 問8 | (5) | 10Hzでは `XL=XC=5Ω` で理想L/C枝電流が打ち消し、並列部は `R2=30Ω`、全体50Ω。10MHzではCは短絡近似、Lは開放近似となり全体は約20Ω。したがって `I10Hz/I10MHz≈20/50=0.4`。教材§8.2、§8.5、§8.7で完結。 | (5) | PASS |
| 令和6年度下期 理論 問9 | (3) | 50Hzで `|Z|=100/20=5Ω`、`R=4Ω`より `XC=3Ω`。60Hzでは `XC=3×50/60=2.5Ω`、`I=100/√(4²+2.5²)≈21.2A`。教材§8.2、§8.4、§8.7で完結。 | (3) | PASS |
| 令和6年度上期 理論 問8 | (3) | `fA=1/(2π√LC)`、`fB=fA/√2`。直列全体は `Leq=3L`、`Ceq=C/2` なので `fAB=fA√(2/3)`。よって `fB<fAB<fA`。教材§8.6で完結。 | (3) | PASS |
| 令和5年度下期 理論 問8 | (2) | 共振時 `Z=R=0.5Ω`、`I=1/0.5=2A`。`VL=314V` から `XL=157Ω`。`L=10mH` より `f=157/(2π×0.01)≈2.50kHz`。教材§8.6、§8.7で完結。 | (2) | PASS |
| 令和5年度上期 理論 問8 | (3) | 直列共振ではインピーダンス最小・電流最大。`f<f0` は容量性で電流進み、`f>f0` は誘導性で電流遅れ。教材§8.4、§8.6で完結。 | (3) | PASS |

## 公式解答照合

公式過去問・解答一覧:
- https://www.shiken.or.jp/chief/third/qa/

公式問題:
- 令和8年度上期: https://www.shiken.or.jp/chief/upload/20260830_ch_third_q01.pdf
- 令和7年度下期: https://www.shiken.or.jp/chief/upload/20260322_ch_third_q01.pdf
- 令和6年度下期: https://www.shiken.or.jp/chief/upload/20250323_ch_third_q01.pdf
- 令和6年度上期: https://www.shiken.or.jp/chief/upload/20240818_ch_third_q01.pdf
- 令和5年度下期: https://www.shiken.or.jp/chief/upload/20240324_ch_third_q01.pdf
- 令和5年度上期: https://www.shiken.or.jp/chief/upload/20230820_ch_third_q01.pdf

公式解答:
- 令和8年度上期: https://www.shiken.or.jp/chief/upload/20260830_ch_third_a01.pdf
- 令和7年度下期: https://www.shiken.or.jp/chief/upload/20260322_ch_third_a01.pdf
- 令和6年度下期: https://www.shiken.or.jp/chief/upload/2024_3_2.pdf
- 令和6年度上期: https://www.shiken.or.jp/chief/upload/20240818_ch_third_a01.pdf
- 令和5年度下期: https://www.shiken.or.jp/chief/upload/20240324_ch_third_a01.pdf
- 令和5年度上期: https://www.shiken.or.jp/chief/upload/20230820_ch_third_a01.pdf

独立解答列: `(1), (5), (3), (3), (2), (3)`

公式解答列: `(1), (5), (3), (3), (2), (3)`

一致: `6 / 6`

## 品質ゲート判定

- 教材だけで必要公式を選べる: PASS
- 教材だけで途中式を構成できる: PASS
- 教材だけで選択肢を確定できる: PASS
- 周波数変化・直列/並列・共振の言い換えに対応できる: PASS
- 正答理由を説明できる: PASS
- 教材外知識の補完が必要な問題: 0問
- Topic 10以降の力率・三相・半導体等への依存: 0問
- 未確認新幹線実車値・周波数切替方式への依存: 0問
- 公式解答との一致: `6 / 6`

結論: 完成後公式過去問独立再解答は `PASS`。Topic 09は最終QA未実施のため、まだ `completed` としない。
