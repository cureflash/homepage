# Topic 14 最終QA

実施日: 2026-09-17

対象: `14 フーリエ変換・FFT`

判定: `NEEDS_REVISION`

## 上位仕様確認

- `denken-shinkansen/MASTER_SPEC.md`: PASS
- `denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`: PASS
- `denken-shinkansen/10_electrical_math_2/SPEC.md`: PASS

## 必須成果物

- source Markdown: `14_fourier_transform_fft.md` → 存在
- 解説PDF: `14_fourier_transform_fft_explanation.pdf` → 存在
- 解説PDF QA: `14_fourier_transform_fft_explanation_qa.md` → 存在
- 練習source: `14_fourier_transform_fft_practice.md` → 存在
- 練習PDF: `14_fourier_transform_fft_practice.pdf` → 存在
- 解説画像PowerPoint: `14_fourier_transform_fft_images.pptx` → 存在
- PowerPoint QA: `14_fourier_transform_fft_powerpoint_qa.md` → 存在
- 完成後独立再解答: `14_fourier_transform_fft_exam_reanswer.md` → 存在

必須成果物実在: PASS

## 試験対応品質ゲート

固定対象は変更しない。

- R3 一次「機械」問8 (1)
- 合計: `1問・1答案要素`

現行の電気技術者試験センター公開資料で、問題本文・公式解答まで直接確認でき、本Topic固定範囲へ直接接続する第二種公式過去問はこの1答案要素。原則5問以上の要件に対し、確認不能・範囲外の問題を件数合わせで追加しない。

確認結果:

- 制作前独立再解答・公式解答照合: `1 / 1 PASS`
- 解説本文へのマッピング: `1 / 1 PASS`
- 練習問題への接続: `1 / 1 PASS`
- 完成後独立再解答: `1 / 1 PASS`
- 完成後独立再解答の候補解答は公式解答確認前に `ANSWER_LOCKED_BEFORE_REVIEW` でlock済み: PASS
- lock commit: `0909fcf24702845179cdad0b72daa63e71548472`
- 教材だけで `f_s > 2 f_max` を選択し、係数2の理由を説明可能: PASS
- 教材外知識補完: 0件

## 成果物QA

解説PDF:
- A4縦5ページ
- 200 dpi全ページ表示QA: `5 / 5 PASS`
- クリッピング・文字重なり・文字化け・数式表欠落: 0件
- 文字抽出QA: PASS
- 3段階例題: `3 / 3 PASS`

練習問題・練習PDF:
- 全12問（一次型8問／記述型4問）
- 独立計算・論理QA: `12 / 12 PASS`
- 一次型正答一意性: `8 / 8 PASS`
- 練習PDF: A4縦5ページ
- 200 dpi全ページ表示QA: `5 / 5 PASS`
- 文字抽出QA: PASS
- 全12問＋完全解説反映: PASS

PowerPoint:
- 16:9・5枚
- 固定1答案要素への可視化接続: `1 / 1 PASS`
- 全5スライド表示QA: `5 / 5 PASS`
- クリッピング・重なり・文字化け: 0件
- overflow: 0件
- `slides_test.py`: PASS
- PPTX ZIP/XML整合性: PASS

## 範囲境界

- H18一次「機械」問6を正式件数へ追加: 0件
- H12一次「機械」問8を正式件数へ追加: 0件
- 二次「機械・制御」の件数合わせ: 0件
- 第一種・第三種過去問による第二種件数水増し: 0件
- Topic 15 対数・dB・周波数応答・ボード線図先取り: 0件
- ADC量子化・変換回路方式追加: 0件
- フィルタ設計一般追加: 0件
- FFT実装詳細の試験必須化: 0件
- 未確認実車値依存: 0件

技術内容・固定EXAM_ALIGNMENT・成果物QAはPASSであり、内容修正は不要。

## exact blocker

進捗記録だけが実成果物と不整合である。

1. `14_fourier_transform_fft.md` 冒頭 `## 状態` がPowerPoint完成時点のまま。
2. `14_fourier_transform_fft.md` 末尾 `## 次工程` が完成後独立再解答前のまま。
3. `14_fourier_transform_fft_explanation_qa.md` 末尾 `次工程` が練習問題source作成前のまま。
4. `14_fourier_transform_fft_practice.md` 末尾 `## 次工程` がPowerPoint作成前のまま。
5. `14_fourier_transform_fft_powerpoint_qa.md` 末尾 `## 次工程` が完成後独立再解答前のまま。
6. `HANDOFF.md` の `current_status` / `次工程` がPowerPoint完成時点・完成後独立再解答前のまま。

このため進捗記録整合性ゲートをFAILとし、Topic 14はまだ `completed` にしない。

## 次工程

技術本文、固定EXAM_ALIGNMENT、問題・正答、PDF、PowerPoint、完成後独立再解答は変更しない。

上記6箇所の進捗記録だけを実成果物へ同期し、その後に最終QAを再判定する。
