# HANDOFF - 電験三種「電気数学」

更新日: 2026-09-13

## 現在地

Topic 01 `単位・指数・有効数字` は `completed`。

Topic 02 `三角比・三角関数` も最終QAまで完了し `completed`。

Topic 03 `複素数` は制作前EXAM_ALIGNMENT、解説本文＋3段階例題、解説PDF、練習PDF、解説画像PowerPoint、完成後独立再解答まで完了。最終QAのみ未実施。

完成数: `2 / 12`

current_status: `topic_03_exam_reanswer_complete`

active_topic: `03 複素数`

## Topic 03 固定EXAM_ALIGNMENT

記録:
`topics/03_complex_numbers/03_complex_numbers.md`

選定した公式過去問:
- R8上 理論 問8
- R7下 理論 問9
- R7下 理論 問15
- R7上 理論 問9
- R6上 理論 問13

固定した数学範囲:
- `j`, `j²=-1`
- 実部・虚部
- 四則演算
- 共役複素数
- 絶対値
- 偏角の意味
- `Z=R+jX`
- `1/j=-j`
- 複素インピーダンス・アドミタンスの直交形式計算
- 実部・虚部を分けた交流量の合成

R7下問15の三相関係、R7上問9の力率など回路側の既知関係は、source Markdownで明記済みの先行教材の既知事項としてのみ接続する。本Topicの仕様へ新規追加しない。

## 成果物

source Markdown:
`topics/03_complex_numbers/03_complex_numbers.md`

解説PDF:
`topics/03_complex_numbers/03_complex_numbers_explanation.pdf`

練習PDF:
`topics/03_complex_numbers/03_complex_numbers_practice.pdf`

解説画像PowerPoint:
`topics/03_complex_numbers/03_complex_numbers_images.pptx`

完成後独立再解答記録:
`topics/03_complex_numbers/03_complex_numbers_exam_reanswer.md`

既存PDF・PowerPointは各作成工程で表示QA済み。PowerPointはキャンバス外はみ出し検査もPASS済み。

## 完成後独立再解答

選定5問・6小問を再計算し、再計算後に試験センター公式解答PDFと照合した。

- R8上 理論 問8: (1) `E=20 V`, `P=96 W`
- R7下 理論 問9: (5) `R≈8.14 Ω`
- R7下 理論 問15: (a)(3), (b)(3) `I≈11.55 A`, `P=4.0 kW`
- R7上 理論 問9: (3) `R=2.5 Ω`
- R6上 理論 問13: (3) `Rp≈(ωL)²/r`

5問6小問すべて公式解答と一致。固定範囲内の複素数操作で解答でき、仕様外論点は追加していない。

## 範囲境界

- 極形式 `r∠θ` の体系的な変換・乗除算とフェーザ計算はTopic 04へ送る。
- 偏角はTopic 03 SPECに従い、複素平面上の向きを読む範囲で扱う。
- 空間ベクトルはTopic 05へ送る。
- 複素電力の体系的な扱いは追加しない。
- RLC共振、三相結線、力率改善などの回路理論を本Topicで新規展開しない。
- 新幹線の未確認実設備値は追加しない。

## 次に行うこと

Topic 03の最終QAを行う。

必須成果物の実在、EXAM_ALIGNMENT、完成後独立再解答、既実施PDF/PPTX表示QAとの整合、数式・単位、範囲境界を確認する。PASSした場合のみTopic 03を `completed` とし、完成数を `3 / 12` に更新する。その次はTopic 04 `極形式・フェーザ` の制作前EXAM_ALIGNMENT。
