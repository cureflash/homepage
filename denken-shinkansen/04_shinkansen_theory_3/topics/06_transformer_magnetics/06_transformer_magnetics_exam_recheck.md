# Topic 06 完成後公式過去問 独立再解答記録

更新日: 2026-09-14

- series: `04_shinkansen_theory_3`
- topic: `06 0系の変圧器は何をしていた？`
- stage: `INDEPENDENT_REANSWER_COMPLETE`
- 判定: `PASS`

## 実施条件

`MASTER_SPEC.md` と `EXAM_ALIGNMENT_SPEC.md` の完成後独立試験に従い、固定EXAM_ALIGNMENTの公式理論過去問5問について、公式解答を開く前にTopic 06の完成教材だけを根拠として再解答した。その後、電気技術者試験センターの公式解答と照合した。

使用した教材:
- `06_transformer_magnetics.md`
- `06_transformer_magnetics_explanation.pdf`
- `06_transformer_magnetics_practice.md`
- `06_transformer_magnetics_practice.pdf`
- `06_transformer_magnetics_images.pptx`

追加した試験範囲・後続Topic知識: なし。
未確認0系実車値の補完: なし。

## 独立再解答

| 公式過去問 | 教材だけでの独立解答 | 根拠・途中式 | 公式解答 | 判定 |
|---|---:|---|---:|---|
| 令和8年度上期 理論 問3 | (1) | `L=1 mH=1×10^-3 H`、`I1=10 A`。`Ψ1=LI1=1×10^-2 Wb`、`W1=LI1²/2=5×10^-2 J`。`I2/I1=30/10=3` なので、一定 `L` の線形条件では `Ψ2/Ψ1=3`、`W2/W1=3²=9`。教材§6、§8、例題2だけで完結。 | (1) | PASS |
| 令和7年度下期 理論 問3 | (3) | `N=1000`、`Φ=6×10^-4 Wb`、`I=0.2 A`。`L=NΦ/I=(1000×6×10^-4)/0.2=3 H`。教材§6、例題1だけで完結。 | (3) | PASS |
| 令和6年度上期 理論 問3 | (2) | 教材§2、§11の単位整理より、インダクタンスは `H=Wb/A`、磁界の強さは `A/m`、磁気抵抗は `H^-1` 相当、透磁率は `H/m`。磁束は `Wb=V·s` であり `V/s` ではないため誤りは(2)。 | (2) | PASS |
| 令和5年度上期 理論 問3 | (2) | `Rm=l/(μA)` より、磁気抵抗は磁路長 `l` に比例し、透磁率 `μ` と断面積 `A` に反比例する。よって「断面積に比例する」が誤り。`Rm=起磁力/磁束` と単位 `H^-1` も教材§4、§11で確認できる。 | (2) | PASS |
| 令和4年度上期 理論 問3 | (2) | `L1=40 mH`、`L2=10 mH`、直列測定値 `Lseries=86 mH`。50 mHより大きいので加極性として `86=40+10+2M`、`M=18 mH`。`k=M/√(L1L2)=18/√(40×10)=18/20=0.90`。教材§7、例題3Bだけで完結。 | (2) | PASS |

## 公式解答照合

公式過去問・解答一覧:
- https://www.shiken.or.jp/chief/third/qa/

公式解答:
- 令和8年度上期: https://www.shiken.or.jp/chief/upload/20260830_ch_third_a01.pdf
- 令和7年度下期: https://www.shiken.or.jp/chief/upload/20260322_ch_third_a01.pdf
- 令和6年度上期: https://www.shiken.or.jp/chief/upload/20240818_ch_third_a01.pdf
- 令和5年度上期: https://www.shiken.or.jp/chief/upload/20230820_ch_third_a01.pdf
- 令和4年度上期: https://www.shiken.or.jp/chief/upload/20220821_ch_third_a01.pdf

独立解答列: `(1), (3), (2), (2), (2)`

公式解答列: `(1), (3), (2), (2), (2)`

一致: `5 / 5`

## 品質ゲート判定

- 教材だけで必要公式を選べる: PASS
- 教材だけで途中式を構成できる: PASS
- 教材だけで選択肢を確定できる: PASS
- 問題文の言い換えへ対応できる: PASS
- 正答理由を説明できる: PASS
- 教材外知識の補完が必要な問題: 0問
- 後続Topic知識への依存: 0問
- 未確認0系実車値への依存: 0問
- 公式解答との一致: 5 / 5

結論: 完成後公式過去問独立再解答は `PASS`。Topic 06は最終QA未実施のため、まだ `completed` としない。
