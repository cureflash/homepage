# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-13

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: 0 / 22
- current_status: `topic_01_independent_reanswer_complete`
- last_completed_topic: `none`
- active_topic: `01 0系の主変圧器を等価回路で解剖する`
- next_start: Topic 01の最終QAを行う。必須成果物4種と完成後独立再解答記録の実在、EXAM_ALIGNMENTとの対応、解説PDF・練習PDF・PowerPoint・source Markdown間の数式・数値・出典・仮定値表示の整合、一次・二次の過去問対応品質ゲートを確認し、すべてPASSした場合のみcompletedへ変更する

## Topic 01 品質ゲート進捗
- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 公式過去問を一次・二次合わせて6問選定
- [x] 二次試験の記述式問題を含めた
- [x] 参考教材を複数系統確認
- [x] source Markdownへ制作前EXAM_ALIGNMENTを記録
- [x] 公式解答との照合を伴う要求事項の独立検証
- [x] 解説本文
- [x] 解説PDF
- [x] 練習PDF（解答・完全解説付き）
- [x] 解説画像PowerPoint
- [x] 公式過去問の教材のみでの独立再解答
- [ ] 最終QA PASS

## 今回進めた内容
Topic 01の完成後独立再解答を実施し、記録を `topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit_independent_reanswer.md` に保存した。

対象は選定済みの一次1問＋二次記述5問。

- R7 一次 機械 問3: `(1)リ (2)カ (3)ヲ (4)ロ (5)ニ`、`R=3.00 Ω`, `Z=9.20 Ω`, `X=8.70 Ω`
- R6 二次 機械・制御 問2: `g0=5.00×10^-5 S`, `b0=1.20×10^-4 S`, `R=16 Ω`, `X=12 Ω`, `p=4.0 %`, `q=3.0 %`、電圧変動率5.0 % / 2.5 %
- R3 二次 機械・制御 問2: `%r=0.75 %`, `%x=4.44 %`, `Z=27.2 Ω`, `R=4.54 Ω`, `X=26.8 Ω`, `V2≈423 V`, `QL≈169 kvar`
- R2 二次 機械・制御 問2: 鉄損400 W、定格銅損624 W、最大効率負荷率80.0 %、最大効率99.0 %、30 %負荷・力率60 %で97.5 %
- H28 二次 機械・制御 問2: `g0=2.40×10^-6 S`, `b0=1.99×10^-5 S`, `R=35.7 Ω`, `X≈115 Ω`、全負荷電圧変動率4.09 %、半負荷効率97.7 %、半負荷電圧変動率2.04 %
- H27 二次 機械・制御 問2: 巻数比31.4、定格一次電流15.2 A、短絡インピーダンス3.30 %、`r=5.23 Ω`, `x=13.4 Ω`、フェーザ図と電圧変動率近似式を導出

6問すべて、問題文の数値・条件と完成教材に収録済みの公式・解法から再計算・再導出でき、計算後の公式標準解答照合で一致した。教材外の知識補完は不要だった。

## 判定
Topic 01 は独立再解答までPASSしたが、まだ `completed` ではない。次工程は最終QA。最終QA PASSまでは完成数へ加算しない。
