# Topic 07 完成後公式過去問 独立再解答記録

更新日: 2026-09-15

- series: `04_shinkansen_theory_3`
- topic: `07 モーターはなぜ回る？`
- stage: `INDEPENDENT_REANSWER_COMPLETE`
- 判定: `PASS`

## 実施条件

`MASTER_SPEC.md` と `EXAM_ALIGNMENT_SPEC.md` の完成後独立試験に従い、固定EXAM_ALIGNMENTの公式理論過去問5問について、公式問題文とTopic 07の完成教材にある式・判断手順から解答を再導出し、その後に電気技術者試験センターの公式解答PDFと照合した。

使用した完成教材:
- `07_motor_force_induction.md`
- `07_motor_force_induction_explanation.pdf`
- `07_motor_force_induction_practice.md`
- `07_motor_force_induction_practice.pdf`
- `07_motor_force_induction_images.pptx`

追加した試験範囲・後続Topic知識: なし。
未確認0系実車値の補完: なし。

## 独立再解答

| 公式過去問 | 教材だけでの独立解答 | 根拠・途中式 | 公式解答 | 判定 |
|---|---:|---|---:|---|
| 令和6年度下期 理論 問4 | (2) | 2本の平行導体には同方向の電流が流れているので引力。Aは右側のBへ向かう `+x`、Bは左側のAへ向かう `-x`。教材§10の「同方向電流→引力」と§9.1の方向判定だけで確定できる。 | (2) | PASS |
| 令和5年度下期 理論 問4 | (2) | Aとループ近側辺は逆方向電流なので反発、遠側辺は同方向なので引力。`Fnear=μ0 IA IB a/(2πd)`、`Ffar=μ0 IA IB a/{2π(d+a)}`。差は `μ0 IA IB a²/{2πd(a+d)}` で、近側の反発が強いため `+x`。教材§10.1、§16.2だけで完結。 | (2) | PASS |
| 令和4年度上期 理論 問4 | (3) | `e=Blv sinθ=0.02×0.5×0.5×sin60°=4.33×10^-3 V=4.33 mV`。最も近い選択肢は4.3 mV。教材§13、§16.5だけで完結。 | (3) | PASS |
| 令和2年度 理論 問3 | (3) | 磁界と平行な辺AB・CDは `F=0`。残る2辺には大きさ `B0Ih` の等大逆向きの力が働き、作用線間距離が `h` なので偶力モーメントは `B0Ih²`。教材§11、§16.3だけで完結。 | (3) | PASS |
| 平成28年度 理論 問12 | (2) | `I=vq/Δl` を `F=BIΔl sinθ` に代入して `F=qvB sinθ`。向きはフレミング左手則で判定する。電子は負電荷なので正電荷と逆向きに力を受け、問題図の条件では右方向。磁気力は速度に常に直交するため円運動。教材§12.1〜§12.2、§16.4だけで完結。 | (2) | PASS |

## 公式解答照合

公式過去問・解答一覧:
- https://www.shiken.or.jp/chief/third/qa/

公式問題:
- 令和6年度下期: https://www.shiken.or.jp/chief/upload/20250323_ch_third_q01.pdf
- 令和5年度下期: https://www.shiken.or.jp/chief/upload/20240324_ch_third_q01.pdf
- 令和4年度上期: https://www.shiken.or.jp/chief/upload/20220821_ch_third_q01.pdf
- 令和2年度: https://www.shiken.or.jp/chief/upload/20200913_ch_third_q01.pdf
- 平成28年度: https://www.shiken.or.jp/chief/upload/20160904_ch_third_q01.pdf

公式解答:
- 令和6年度下期: https://www.shiken.or.jp/chief/upload/2024_3_2.pdf
- 令和5年度下期: https://www.shiken.or.jp/chief/upload/20240324_ch_third_a01.pdf
- 令和4年度上期: https://www.shiken.or.jp/chief/upload/20220821_ch_third_a01.pdf
- 令和2年度: https://www.shiken.or.jp/chief/upload/20200913_ch_third_a01.pdf
- 平成28年度: https://www.shiken.or.jp/chief/upload/20160904_ch_third_a01.pdf

独立解答列: `(2), (2), (3), (3), (2)`

公式解答列: `(2), (2), (3), (3), (2)`

一致: `5 / 5`

## 品質ゲート判定

- 教材だけで必要公式を選べる: PASS
- 教材だけで途中式を構成できる: PASS
- 教材だけで選択肢を確定できる: PASS
- 問題文の言い換えへ対応できる: PASS
- 正答理由を説明できる: PASS
- 教材外知識の補完が必要な問題: 0問
- 直流機詳細・後続Topic知識への依存: 0問
- 未確認0系実車値への依存: 0問
- 公式解答との一致: `5 / 5`

結論: 完成後公式過去問独立再解答は `PASS`。Topic 07は最終QA未実施のため、まだ `completed` としない。
