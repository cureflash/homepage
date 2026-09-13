# STATUS - 新幹線・電験二種「理論」

更新日: 2026-09-13

## 状態
- active_series: `08_shinkansen_theory_2`
- exam_aligned_completed_topics: 2 / 21
- current_status: `topic_03_powerpoint_complete`
- last_completed_topic: `02 架線は長くなるとなぜ電圧が落ちる？`
- active_topic: `03 25kV架線の周囲にはどんな電界ができる？`
- next_start: Topic 03の完成済み教材だけを使い、EXAM_ALIGNMENTで固定した一次理論6問・21小問を保存済み正答を見ずに独立再解答する。教材外知識やSPEC外論点で補完しない

## Topic 03 品質ゲート進捗
- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 公式過去問を直近年度優先で調査
- [x] 一次理論6問・対象21小問を選定
- [x] 二次試験も確認対象に含め、直接対応問題がないため数合わせで採用しない判断を記録
- [x] R7/R6/R2等のSPEC外論点（影像法、静電容量、誘電体）を除外
- [x] 参考教材をe-sysnet＋電験王2の複数系統で確認
- [x] source Markdownへ要求知識・式・設問型・典型ミス・教材内必要説明を固定
- [x] 公式問題・公式解答との照合
- [x] 解説本文＋3段階例題
- [x] 解説PDF
- [x] 練習PDF（解答・完全解説付き）
- [x] 解説画像PowerPoint
- [ ] 公式過去問の教材のみでの完成後独立再解答
- [ ] 最終QA PASS

## 今回進めた内容

Topic 03の解説画像PowerPoint `topics/03_catenary_electric_field/03_catenary_electric_field_images.pptx` を作成した。

PowerPoint収録内容:
- 16:9、全5スライド
- 電荷分布・対称性から解法を選ぶ導入
- 点電荷の電界、ベクトル合成、`F=qE`
- 電束密度 `D=εE`、ガウスの法則、包有電荷 `Q_enc`
- 一様帯電球・球殻の領域別電界
- 無限長線電荷・円筒ガウス面、`E=λ/(2πεr)`
- 架線を線電荷とみなす教育用簡略モデル
- 電位差 `V_A-V_B=-∫E·dl`、`E=-dV/dr`、線電荷の有限基準半径
- 一次理論6問・21小問へ接続する解法フローと過去問マッピング

全5スライドをレンダリングして目視確認し、文字切れ・重なり・欠落・破損グリフがないことを確認した。`slides_test.py` のoverflow検査もPASS。

既存EXAM_ALIGNMENTの範囲を維持し、影像法、静電容量、誘電体、静電エネルギー、絶縁設計等は追加していない。二次試験は直接対応問題がないという既存判断を変更していない。実在架線の未確認値は使用していない。

## 判定

Topic 03は `topic_03_powerpoint_complete`。まだ `completed` ではない。完成数は `2 / 21` のまま。次工程は公式過去問の教材のみでの完成後独立再解答。
