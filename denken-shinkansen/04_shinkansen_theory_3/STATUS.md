# STATUS - 新幹線・電験三種「理論」

更新日: 2026-09-13

## 状態

- active_series: `04_shinkansen_theory_3`
- exam_aligned_completed_topics: 2 / 14
- current_status: `topic_03_powerpoint_complete`
- last_completed_topic: `02 なぜ新幹線は25,000Vなのか`
- active_topic: `03 架線はただの銅線ではない`
- next_start: Topic 03の完成教材だけを使い、選定済み公式過去問6問を独立再解答して公式解答と照合する

## Topic 01 進捗

- [x] EXAM_ALIGNMENT確定
- [x] 解説本文・解説PDF
- [x] 練習PDF
- [x] 解説画像PowerPoint
- [x] 完成後の公式過去問独立再解答
- [x] 最終QA PASS

## Topic 02 進捗

- [x] EXAM_ALIGNMENT確定
- [x] 解説本文・解説PDF
- [x] 練習PDF
- [x] 解説画像PowerPoint
- [x] 完成後の公式過去問独立再解答
- [x] 最終QA PASS

## Topic 03 進捗

- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC確認
- [x] GitHub上のSTATUS / HANDOFF / 既存成果物確認
- [x] 直近年度を優先して公式理論過去問を確認
- [x] Topic 03固定範囲でゲート対象6問を確定
- [x] Topic 05以降へ送る境界論点を整理
- [x] e-sysnet、電験王、電験三種まとめましたの説明粒度を確認
- [x] source MarkdownへEXAM_ALIGNMENTと教材必須説明を固定
- [x] 解説本文＋3段階例題
- [x] 解説PDF
- [x] 練習問題source・練習PDF
- [x] 解説画像PowerPoint
- [ ] 完成後の公式過去問独立再解答
- [ ] 最終QA

## 今回進めた内容

Topic 03 `架線はただの銅線ではない` を1段階進め、確定済みEXAM_ALIGNMENT・解説本文・解説PDF・練習PDFを基準に解説画像PowerPointを作成した。

更新成果物:
- 解説画像PowerPoint: `topics/03_catenary_resistance/03_catenary_resistance_images.pptx`

PowerPoint:
- 16:9、7枚
- 抵抗率・長さ・断面積、直列・並列、温度係数、発熱・消費電力・電圧降下、3段階例題、新幹線接続を既存教材と同じ範囲で可視化
- 新幹線接続値は既存sourceの教材用仮定値だけを使用し、実車値として扱っていない
- キルヒホッフ則、最大電力供給、正弦波、RLC等の後続Topic論点は追加していない

PowerPoint QA:
- 全7枚をレンダリングして表示確認
- 文字切れ・重なり・欠落なし
- overflow検査 PASS
- SPEC範囲外の仕様追加: なし

## 判定

Topic 03は `POWERPOINT_COMPLETE / IN_PROGRESS`。完成数は `2 / 14` のまま。次工程は完成教材だけを使った選定済み公式過去問6問の独立再解答。
