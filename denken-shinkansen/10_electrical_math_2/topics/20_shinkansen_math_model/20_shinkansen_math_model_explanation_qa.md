# Topic 20 解説PDF QA

実施日: 2026-09-19

対象:
- source: `20_shinkansen_math_model.md` (blob `0c6f48ed2ae3f7389cf25416e37b5e668661dfd9`)
- PDF: `20_shinkansen_math_model_explanation.pdf`
- PDF git blob: `ba000915145b8a1780c7088df31c27953a2c8473`
- PDF SHA-256: `dd57b0a2dbd6999f46f5a9ce30e6437d3a160389f9394d2006371db44f2d87c3`

## 1. 仕様・範囲

- MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPECのTopic 20固定範囲だけを収録: `PASS`
- 新規数学手法の追加: `0件`
- 未確認実車値の追加: `0件`
- 教育用仮定値を実車値として扱った箇所: `0件`
- 接続確認5問を直接対応品質ゲート件数へ水増し: `0件`
- 第一種・第三種問題の追加: `0件`

## 2. PDF基本QA

- 用紙: A4縦
- ページ数: `4`
- 200 dpiレンダリング: `4 / 4 PASS`
- 文字切れ・ページ外はみ出し: `0件`
- 表・式の重なり: `0件`
- 日本語欠落・豆腐文字: `0件`
- 主要表・例題・過去問接続表の視認性: `PASS`

## 3. 文字抽出QA

`pdftotext -layout` で全4ページを抽出し、以下を確認した。

- タイトル: `PASS`
- 運動方程式 `m dv/dt = Ftraction - Fresistance - Fgrade`: `PASS`
- 伝達関数 `G(s) = V(s)/F(s) = 1/(Ms + D)`: `PASS`
- サンプリング条件 `f_s > 2 f_max`: `PASS`（抽出時は下線が結合文字として保持）
- 例題1 `180 kJ`: `PASS`
- 例題2 `3.7927... m/s`: `PASS`
- 例題3 `-162 kJ`: `PASS`
- 接続確認5問の表: `5 / 5 PASS`

## 4. 独立数値照合

### 例題1

- `Fnet = 10000 N`
- `a = 2 m/s^2`
- `v1 = 8 m/s`
- `Δx = 12 m`
- `Wtraction = 180 kJ`
- `ΔK = 120 kJ`
- `Wresistance = 60 kJ`
- 台形則による電力積分 `180 kJ`

判定: `PASS`

### 例題2

- `G(s)=1/(6s+2)`
- `τ=3 s`
- `v(3)=3.792723... m/s`
- Euler `Δt=1 s` の `v3=4.222222... m/s`
- 差 `0.429499... m/s`

判定: `PASS`

### 例題3

- 速度列 `12, 10, 8, 6 m/s`
- `Δx=27 m`
- `E_signed=-162 kJ`
- `ΔK=-162 kJ`
- `f_s=50 Hz` は `f_max=30 Hz` に対して不適
- `f_s=80 Hz, N=8` では `Δf=10 Hz`, 10 Hz→`k=1`, 30 Hz→`k=3`

判定: `PASS`

## 5. 試験対応の維持

- 接続確認した第二種公式過去問: `5問`
- 統合新幹線モデル自体を直接要求する確認済み第二種過去問: `0問`
- 教材内マッピング: `5 / 5 PASS`
- 接続5問の直接対応品質ゲート件数への水増し: `0件`

## 判定

`PASS / EXPLANATION_PDF_COMPLETE`

練習PDF、解説画像PowerPoint、完成後独立検証、初回最終QAまで完了済み。次工程: Topic 20の最終QA再判定。
