# Topic 08 完成後公式過去問 独立再解答記録

更新日: 2026-09-15

- series: `04_shinkansen_theory_3`
- topic: `08 新幹線の交流25kVとは何なのか`
- stage: `INDEPENDENT_REANSWER_COMPLETE`
- 判定: `PASS`

## 実施条件

`MASTER_SPEC.md` と `EXAM_ALIGNMENT_SPEC.md` の完成後独立試験に従い、固定EXAM_ALIGNMENTの公式理論過去問4問について、公式問題文とTopic 08の完成教材にある式・判断手順から解答を再導出し、その後に電気技術者試験センターの公式解答PDFと照合した。

使用した完成教材:
- `08_ac_25kv_basics.md`
- `08_ac_25kv_basics_explanation.pdf`
- `08_ac_25kv_basics_practice.md`
- `08_ac_25kv_basics_practice.pdf`
- `08_ac_25kv_basics_images.pptx`

追加した試験範囲・後続Topic知識: なし。
未確認新幹線実車値の補完: なし。

## 独立再解答

| 公式過去問 | 教材だけでの独立解答 | 根拠・途中式 | 公式解答 | 判定 |
|---|---:|---|---:|---|
| 令和7年度上期 理論 問8 | (5) | `4√2 sin(120πt)=4` より `sin(120πt)=1/√2`。`t>0`で最初の角度は `π/4` なので `120πt=π/4`、したがって `t=1/480 s`。教材§10、§15だけで完結。 | (5) | PASS |
| 令和6年度下期 理論 問8 | (3) | `x=ωt+θ` とおくと `v=E sinx+√3E sin(x+π/2)=E sinx+√3E cosx`。`2E sin(x+π/3)` と一致するので最大値は `e1` の2倍、位相は `π/3 rad`進み。教材§13、§14だけで完結。 | (3) | PASS |
| 令和3年度 理論 問8 | (5) | 波形から `Vm=100√2 V`、`f=50 Hz` なので `ω=100π rad/s`。上向き零交差が `ωt=π/4` なので `v=100√2 sin(100πt-π/4)`。純抵抗 `R=5Ω` では同相かつ `i=v/R` より `i=20√2 sin(100πt-π/4) A`。教材§11、§13.2、§13.3、§16だけで完結。 | (5) | PASS |
| 平成21年度 理論 問9 | (1) | `4√2 sin(120πt)=4` より `sin(120πt)=1/√2`。最初の正の解は `120πt=π/4` なので `t=1/480 s`。選択肢配列では(1)。教材§10、§15だけで完結。 | (1) | PASS |

## 公式解答照合

公式過去問・解答一覧:
- https://www.shiken.or.jp/chief/third/qa/

公式問題:
- 令和7年度上期: https://www.shiken.or.jp/chief/upload/20250831_ch_third_q01.pdf
- 令和6年度下期: https://www.shiken.or.jp/chief/upload/20250323_ch_third_q01.pdf
- 令和3年度: https://www.shiken.or.jp/chief/upload/20210822_ch_third_q01.pdf
- 平成21年度: https://www.shiken.or.jp/chief/upload/20090906_ch_third_q01.pdf

公式解答:
- 令和7年度上期: https://www.shiken.or.jp/chief/upload/20250831_ch_third_a01.pdf
- 令和6年度下期: https://www.shiken.or.jp/chief/upload/2024_3_2.pdf
- 令和3年度: https://www.shiken.or.jp/chief/upload/20210822_ch_third_a01.pdf
- 平成21年度: https://www.shiken.or.jp/chief/upload/20090906_ch_third_a01.pdf

独立解答列: `(5), (3), (5), (1)`

公式解答列: `(5), (3), (5), (1)`

一致: `4 / 4`

令和7年度上期 問8と平成21年度 問9は同一内容の再出題であり、要求事項は重複カウントしない。

## 品質ゲート判定

- 教材だけで必要公式を選べる: PASS
- 教材だけで途中式を構成できる: PASS
- 教材だけで選択肢を確定できる: PASS
- 波形・位相の言い換えへ対応できる: PASS
- 正答理由を説明できる: PASS
- 教材外知識の補完が必要な問題: 0問
- RLC・リアクタンス・力率・三相・高調波等の後続Topic知識への依存: 0問
- 非正弦波論点への依存: 0問
- 未確認新幹線実車値への依存: 0問
- 公式解答との一致: `4 / 4`

結論: 完成後公式過去問独立再解答は `PASS`。Topic 08は最終QA未実施のため、まだ `completed` としない。
