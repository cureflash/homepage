# Topic 11 完成後 blind 独立再解答

更新日: 2026-09-17
判定: `PASS`
stage: `COMPLETION_BLIND_REANSWER_COMPLETE`

対象: Topic 11「新幹線が移動すると電圧はどう変わる？」

## 実施条件

完成済み教材の一般式・解法だけを使い、正式固定4問・17答案要素を再解答した。問題文は電気技術者試験センター公式問題PDFで確認し、公式解答・標準解答および既存の制作前再解答記録は、候補導出が完了するまで参照しなかった。

使用した完成教材の中心:
- `11_moving_train_voltage_explanation.md`
- `11_moving_train_voltage_practice.md`
- Topic 10既習事項として本文§9に再掲された三相送電・導体量関係

公式問題:
- H30一次「電力」: https://www.shiken.or.jp/chief/upload/20180901_ch_second_q02.pdf
- H27二次「電力・管理」: https://www.shiken.or.jp/chief/upload/20151122_ch_second_q01.pdf
- H26二次「電力・管理」: https://www.shiken.or.jp/chief/upload/20141123_ch_second_q01.pdf

## 1. 平成30年度 第二種一次「電力」問7

教材の再掲式

- `P=√3VIcosφ`
- `R=ρL/A`
- `G=3σAL`
- `λ=3RI²/P`

から消去すると、

- (1) `ヲ = √3VIcosφ`
- (2) `ハ = ρL/A`
- (3) `チ = 3σAL`
- (4) `ヨ = 9σ²ρAL³`
- (5) `カ = cos²φ/(3σρL²)`

となる。

公式解答照合: `(ヲ, ハ, チ, ヨ, カ)` と一致。

結果: `5 / 5 PASS`

## 2. 平成27年度 第二種二次「電力・管理」問3

位置をA点から `y` とし、負荷密度を `Iy/L` として積分する。

- (1)a `V_A = RIx³/(6L)`
- (1)b `V_B = RI(L-x)²(2L+x)/(6L)`
- (1)c `V_A=V_B` より `x=2L/3`
- (2) B点給電時との比 `=8/27≈29.6 %`

公式標準解答と全要素一致。

結果: `4 / 4 PASS`

## 3. 平成27年度 第二種二次「電力・管理」問4

完成教材の `V̇1=V̇2+(r+jx)İ` と `S=V̇1İ*` を使う。

- (1) `V̇1=V̇2+(r+jx)İ`
- (2) `İ=(P-jQ)/V̇1*`
- (3) `V1²-V1V2e^(-jδ)=(r+jx)(P-jQ)`
- (4) `α=V1V2sinδ`, `β=V1(V1-V2cosδ)`
- (5) `x≈0.2275 p.u.`, `r≈0.02745 p.u.`

公式標準解答の丸め `x=0.228 p.u.`, `r=0.0275 p.u.` と一致。

結果: `5 / 5 PASS`

## 4. 平成26年度 第二種二次「電力・管理」問4

抵抗負荷なので `İr` と `Ėr` は同相とし、

`Ės=Ėr+İr(R+jX)`

を使う。

- (1) `Ėr` と `Rİr` を同相、`jXİr` を90°進みとして `Ės` を合成するベクトル関係
- (2) `I=50 A` のとき受電端線間電圧 `≈6.47 kV`
- (3) 電圧降下率10 %から受電端線間電圧 `6.30 kV`、`I≈67.2 A`、三相抵抗負荷電力 `≈733 kW`

公式標準解答と全要素一致。

結果: `3 / 3 PASS`

## 公式解答照合先

- H30一次: https://www.shiken.or.jp/chief/upload/20180901_ch_second_a01.pdf
- H27二次: https://www.shiken.or.jp/chief/upload/20151122_ch_second_a01.pdf
- H26二次: https://www.shiken.or.jp/chief/upload/20141123_ch_second_a01.pdf

## 集計

- 一次: `1問・5 / 5答案要素 PASS`
- 二次: `3問・12 / 12答案要素 PASS`
- 合計: `4 / 4問・17 / 17答案要素 PASS`

## 品質ゲート監査

- 完成教材だけで必要公式を選択: PASS
- 完成教材だけで途中式を構成: PASS
- 正答理由を説明可能: PASS
- 教材外補完: `0件`
- Topic 12以降の先取り: `0件`
- 未確認実設備値依存: `0件`
- 仕様追加: `0件`

H30一次問7の導体抵抗・導体質量関係は、Topic 11本文§9に品質ゲート維持用の既習事項として再掲済みであり、Topic 11の新規仕様には追加していない。

## 次工程

Topic 11の最終QAを実施し、成果物・進捗記録・EXAM_ALIGNMENT・完成後blind再解答結果の整合を再判定する。最終QA PASSまでは `completed` にしない。
