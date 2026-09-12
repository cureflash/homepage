# STATUS - 新幹線・電験二種「理論」

更新日: 2026-09-13

## 状態
- active_series: `08_shinkansen_theory_2`
- exam_aligned_completed_topics: 1 / 21
- current_status: `topic_02_practice_pdf_complete`
- last_completed_topic: `01 25kV架線を一つの等価回路にする`
- active_topic: `02 架線は長くなるとなぜ電圧が落ちる？`
- next_start: Topic 02の解説画像PowerPointを作成し、一次理論3問＋直接関連二次3問の要求事項を図解へ反映して全スライドQAする

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
- [x] 解説PDF
- [x] 練習PDF（解答・完全解説付き）
- [ ] 解説画像PowerPoint
- [ ] 公式過去問の教材のみでの完成後独立再解答
- [ ] 最終QA

## 今回進めた内容

Topic 02の練習問題sourceと練習PDFを作成した。

成果物:
- `topics/02_catenary_voltage_drop/02_catenary_voltage_drop_practice.md`
- `topics/02_catenary_voltage_drop/02_catenary_voltage_drop_practice.pdf`

問題構成:
- 一次試験型 8問（全問五肢択一）
- 二次試験接続型 4問（記述式、途中式・前提・単位・理由を完全解説）
- 合計 12問

過去問対応:
- R6 一次 理論 問2(3): 導電率、`R=l/(σS)`、単位長さ電圧
- R1 一次 理論 問5(1): `I=JS` と円形断面
- H27 一次 理論 問1(3)(4): 非一様電流密度、`J=σE`
- R5 二次 電力・管理 問4(1): 三相線路定数、進み力率の電圧降下
- R1 二次 電力・管理 問4(2): 分布負荷の `∫I(x)^2 r dx`
- H27 二次 電力・管理 問3: 分布負荷の `∫I(x) r dx` と給電位置

Visual QA:
- A4縦 8ページ
- 200 dpiで全8ページをレンダリング
- 8 / 8ページで文字欠け・重なり・ページ外はみ出しなし
- PDF preflight PASS（8ページ、非暗号化、PyMuPDFで開ける、スキャンPDFではない）

実車未確認値は使わず、全数値は教材用仮定値。磁界・静電容量・表皮効果・コロナ等は追加していない。

## 判定

Topic 02を `topic_02_practice_pdf_complete` とする。完成数は `1 / 21` のまま。次段階は解説画像PowerPoint作成＋全スライドQA。
