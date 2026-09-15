# Topic 07 最終QA記録

対象: `07 なぜ三相交流をそのまま架線へ流さない？`

実施日: 2026-09-15

## 判定
NEEDS_REVISION。Topic 07はまだ `completed` にしない。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`02_shinkansen_power_3/SPEC.md` とGitHub正本の現状を照合した。仕様追加は行っていない。

## 必須成果物の実在確認
GitHub正本上で次を確認した。

| 成果物 | blob SHA | 判定 |
|---|---|---|
| source Markdown | `c8bee2f8a7416e55b90049eea8c1a0d65363c36a` | PASS |
| 解説PDF | `db1ca4e90b74cebc13af1da3805f69ce3677e2d4` | PASS |
| 練習PDF | `39cc5d13f10d3a3268995af15f4a8b2149a64336` | PASS |
| 解説画像PowerPoint | `ad9f8ef8e2a1b9a26bd69256a77299a27f37c3cd` | PASS |
| 練習PDF QA記録 | `70ac3701acc2a172231fad0c5bb14e8545bf9ae8` | 要同期 |
| PowerPoint QA記録 | `b579d008451cd780d15a61d5a809aa21dce6573a` | 要同期 |
| EXAM_ALIGNMENT再監査 | `8360eedc8215cc7663596e374d8f01b6b2ade012` | PASS |
| 改定完成後独立再解答 | `9d683d254d3562ddab5dae8779282543fee9a576` | PASS |

## 改定EXAM_ALIGNMENT確認
初回固定5問・8小問は完成後独立再解答で教材のみ完結 `2 / 8` となったため再監査済み。

現行品質ゲートは、現行SPEC固定範囲へ直接対応し完成教材だけで完答できることを確認した次の3問。

- R4上 機械 問9 — スコット結線、二次90°
- H30 電力 問8 — 変圧比、平衡三相有効電力
- H22 理論 問9 — Y結線、線間/相関係、三相電力、中性線電流

再監査では、RLC、力率とインピーダンス分解、Δ-Y/Y-Δ位相差30°等を必要とする問題を固定対象から除外し、通過のための仕様追加をしていない。

改定品質ゲート: `3問 / 3解答項目`。
SPEC固定範囲変更: `0件`。
固定範囲外教材追加: `0件`。

## 完成後独立再解答
改定3問を保存済み正答を先に見ず、完成教材だけで再解答し、公式解答と全件一致している。

- R4上 機械 問9: `(3)` — PASS
- H30 電力 問8: `(3)` — PASS
- H22 理論 問9: `(4)` — PASS

公式解答一致: `3 / 3 PASS`。
教材のみ完結: `3 / 3 PASS`。
教材外知識補完: `0件`。
SPEC固定範囲外追加: `0件`。

## 成果物・表示QA確認
既存QA記録では次を確認できる。

- 解説PDF: A4縦4ページ、200 dpi全4ページ表示QA PASS、文字抽出QA PASS。
- 練習PDF: A4縦3ページ、全12問五肢択一。200 dpi全3ページ表示QA PASS、文字抽出QA PASS、正答一意性PASS、数値問題独立再計算 `8 / 8 PASS`。
- PowerPoint: 16:9・4枚。全4枚表示QA、文字欠け0、クリップ0、意図しない重なり0、境界外はみ出し0、ZIP整合性PASS。

表示品質そのものはPASS。

## 最終QAで検出した不整合
### 1. PowerPoint側の過去問対応が旧EXAM_ALIGNMENTのまま
`07_phase_conversion_powerpoint_qa.md` は現在も「固定5問・8小問」を正本としており、Slide 4を旧5過去問への対応表として記録している。

そこには、再監査で現行品質ゲートから外した次の3問が残っている。

- R7下 理論 問15(a)(b)
- R5下 理論 問15(a)(b)
- H27 機械 問7

改定EXAM_ALIGNMENT 3問とPowerPointの試験対応表示が一致していないため、現状のPowerPointを最終成果物としてPASSにはできない。

### 2. 練習PDF QAの過去問対応表も旧5問のまま
`07_phase_conversion_practice_qa.md` の「固定過去問への接続」も旧5問・8小問を列挙している。

再監査後の固定3問へ同期されていないため、QA記録として不整合がある。問題本文・正答を変更する必要があるかは、現行3問との対応と固定範囲を再照合してから判断する。件数合わせで問題を追加しない。

### 3. PowerPoint QAの次工程も旧状態
`07_phase_conversion_powerpoint_qa.md` 末尾は「次は固定5問・8小問の独立再解答」のままで、改定再解答 `3 / 3 PASS` 済みという現在地と一致しない。

## SPEC境界確認
主sourceと改定EXAM_ALIGNMENTは、三相交流、単相交流、線間/相電圧、三相電力、相変換、三相側負荷平衡、スコット結線、変形ウッドブリッジ結線、ルーフ・デルタ結線の範囲を維持している。

次を品質ゲート通過のために追加していない。

- RLCの無効電流相殺
- 力率からのインピーダンス分解
- Δ-Y/Y-Δの一次・二次30°位相差
- Topic 08以降の電圧降下・線路損失・き電回路詳細
- Topic 10の力率改善
- Topic 11の短絡・保護
- 二種相当の厳密ベクトル導出
- 未確認の個別設備定格・配置

## 最終判定
- 必須成果物の実在: PASS
- 改定EXAM_ALIGNMENT 3問: PASS
- 改定完成後独立再解答: `3 / 3 PASS`
- 教材外知識補完: `0件`
- PDF/PPTX既存表示QA: PASS
- SPEC境界: PASS
- PowerPointの過去問対応表示: FAIL（旧5問のまま）
- 練習PDF QAの過去問対応記録: FAIL（旧5問のまま）
- 進捗記録整合: FAIL（PowerPoint QAの次工程が旧状態）

よってTopic 07は `NEEDS_REVISION` のままとし、完成数は `6 / 16` を維持する。

次工程は、PowerPoint Slide 4とPowerPoint QA、練習PDF QAの過去問対応を改定3問へ同期し、PowerPointは再レンダリング・はみ出し・ZIP整合性を再QAすること。教材範囲や問題数は勝手に増やさない。