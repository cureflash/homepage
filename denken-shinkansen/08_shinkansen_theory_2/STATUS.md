# STATUS - 新幹線・電験二種「理論」

更新日: 2026-09-13

## 状態
- active_series: `08_shinkansen_theory_2`
- exam_aligned_completed_topics: 1 / 21
- current_status: `topic_02_explanation_body_complete`
- last_completed_topic: `01 25kV架線を一つの等価回路にする`
- active_topic: `02 架線は長くなるとなぜ電圧が落ちる？`
- next_start: Topic 02の解説PDFを作成し、本文の式・3段階例題・過去問対応表を欠落なく収録して全ページQAする

## Topic 02 品質ゲート進捗
- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 公式過去問を直近年度優先で調査
- [x] 一次理論3問＋二次電力・管理3問を選定
- [x] `08 理論・二種` の一次中心原則を維持し、二次は直接関連問題だけを採用
- [x] 参考教材をe-sysnet＋電験王2の複数系統で確認
- [x] source Markdownへ要求知識・式・設問型・典型ミス・教材内必要説明を固定
- [x] 公式解答との照合を伴う制作前独立検証 6 / 6 PASS
- [x] 解説本文＋3段階例題
- [ ] 解説PDF
- [ ] 練習PDF（解答・完全解説付き）
- [ ] 解説画像PowerPoint
- [ ] 公式過去問の教材のみでの完成後独立再解答
- [ ] 最終QA

## 今回進めた内容

Topic 02の解説本文＋3段階例題を `topics/02_catenary_voltage_drop/02_catenary_voltage_drop.md` へ追加した。

本文収録範囲:
- 抵抗率・導電率と `R=ρl/S=l/(σS)`
- 電流密度 `J=I/S`、非一様時の面積積分、局所オーム則 `J=σE`
- 温度係数による抵抗補正
- `ΔV=IR` と `P_loss=I²R`
- 三相線路の単位長さ定数→全長換算と進み/遅れの符号
- 分布負荷の `∫I(x)r dx` と `∫I(x)²r dx`

3段階例題:
- 基礎: 導電率・円形断面・電流密度・単位長さ電圧
- 本試験標準: 温度補正→電圧降下→抵抗損
- 複合・ひっかけ: 単相2線式の分布負荷積分

選定過去問6問について本文節との対応表を追加し、制作前に固定した要求事項を全件カバーした。実車未確認値は使わず、例題値は教材用仮定値と明記した。磁界・静電容量・表皮効果・コロナ等は追加していない。

## 判定

Topic 02を `topic_02_explanation_body_complete` とする。完成数は `1 / 21` のまま。次段階は解説PDF作成＋全ページQA。