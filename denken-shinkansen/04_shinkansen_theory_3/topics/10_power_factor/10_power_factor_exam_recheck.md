# Topic 10 完成後公式過去問 独立再解答記録

更新日: 2026-09-16

- series: `04_shinkansen_theory_3`
- topic: `10 新幹線が使う電力は「W」だけではない`
- stage: `INDEPENDENT_REANSWER_COMPLETE`
- 判定: `PASS`

## 実施条件

`MASTER_SPEC.md` と `EXAM_ALIGNMENT_SPEC.md` の完成後独立試験に従い、固定EXAM_ALIGNMENTの公式理論過去問5問・6答案要素について、公式解答PDFを開く前に公式問題文とTopic 10の完成教材にある式・判断手順だけから解答を確定し、その後に電気技術者試験センターの公式解答PDFと照合した。

使用した完成教材:
- `10_power_factor.md`
- `10_power_factor_explanation.pdf`
- `10_power_factor_practice.md`
- `10_power_factor_practice.pdf`
- `10_power_factor_images.pptx`

追加した試験範囲・後続Topic知識: なし。
未確認の新幹線実車力率・無効電力・補償方式による補完: なし。

## 独立再解答

| 公式過去問 | 教材だけでの独立解答 | 根拠・途中式 | 公式解答 | 判定 |
|---|---:|---|---:|---|
| 令和7年度上期 理論 問9 | (3) | 元負荷は `I=30A, cosφ=0.8` なので `IP=24A`, `IQ=18A`。並列抵抗追加後 `I=82A` より同相成分は `√(82²-18²)=80A`。抵抗電流 `IR=80-24=56A`、したがって `R=140/56=2.5Ω`。教材§9.7・例題2で完結。 | (3) | PASS |
| 令和5年度上期 理論 問9 | (3) | `R/XL=1/√2` より `XL=√2R`。`|Z|=√(R²+XL²)=√3R`、したがって `cosφ=R/|Z|=1/√3≈0.577`。選択肢0.58。教材§9.6で完結。 | (3) | PASS |
| 平成26年度 理論 問15(a) | (4) | `S=VI=300×12.5=3750VA`。`P=2250W` なので `Q=√(S²-P²)=√(3750²-2250²)=3000var`。教材§9.2・§9.3・例題1で完結。 | (4) | PASS |
| 平成26年度 理論 問15(b) | (3) | (a)の `Q=3000var` と純リアクタンス枝の `Q=V²/X` より `X=300²/3000=30Ω`。教材§9.6で完結。 | (3) | PASS |
| 平成24年度 理論 問8 | (4) | `S=VI=200×10=2000VA`、`Q=1200var` より `P=√(S²-Q²)=1600W`。`P=I²R` から `R=1600/10²=16Ω`。教材§9.3・§9.6で完結。 | (4) | PASS |
| 平成22年度 理論 問8 | (4) | 改善前 `cosφ1=1/2` なので `tanφ1=√3`。改善後も遅れで `cosφ2=√3/2` なので `tanφ2=1/√3`。直列補償式 `XC=R(tanφ1-tanφ2)` より `XC=2R/√3`。教材§9.8で完結。 | (4) | PASS |

## 公式解答照合

公式過去問・解答一覧:
- https://www.shiken.or.jp/chief/third/qa/

公式問題:
- 令和7年度上期: https://www.shiken.or.jp/chief/upload/20250831_ch_third_q01.pdf
- 令和5年度上期: https://www.shiken.or.jp/chief/upload/20230820_ch_third_q01.pdf
- 平成26年度: https://www.shiken.or.jp/chief/upload/20140907_ch_third_q01.pdf
- 平成24年度: https://www.shiken.or.jp/chief/upload/20120909_ch_third_q01.pdf
- 平成22年度: https://www.shiken.or.jp/chief/upload/20100905_ch_third_q01.pdf

公式解答:
- 令和7年度上期: https://www.shiken.or.jp/chief/upload/20250831_ch_third_a01.pdf
- 令和5年度上期: https://www.shiken.or.jp/chief/upload/20230820_ch_third_a01.pdf
- 平成26年度: https://www.shiken.or.jp/chief/upload/20140907_ch_third_a01.pdf
- 平成24年度: https://www.shiken.or.jp/chief/upload/20120909_ch_third_a01.pdf
- 平成22年度: https://www.shiken.or.jp/chief/upload/20100905_ch_third_a01.pdf

独立解答列: `(3), (3), (4), (3), (4), (4)`

公式解答列: `(3), (3), (4), (3), (4), (4)`

一致: `6 / 6`

## 品質ゲート判定

- 教材だけで必要公式を選べる: PASS
- 教材だけで途中式を構成できる: PASS
- 教材だけで選択肢を確定できる: PASS
- 力率・電力三角形・電流成分・力率改善の言い換えに対応できる: PASS
- 正答理由を説明できる: PASS
- 教材外知識の補完が必要な問題: 0問
- Topic 11以降の三相・半導体・高調波への依存: 0問
- 未確認新幹線実車値・補償方式への依存: 0問
- 公式解答との一致: `5 / 5問・6 / 6答案要素`

結論: 完成後公式過去問独立再解答は `PASS`。Topic 10は最終QA未実施のため、まだ `completed` としない。
