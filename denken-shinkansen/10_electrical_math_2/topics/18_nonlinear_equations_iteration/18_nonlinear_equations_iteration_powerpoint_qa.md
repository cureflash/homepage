# Topic 18 解説画像PowerPoint QA

更新日: 2026-09-18

対象:
- `18_nonlinear_equations_iteration_images.pptx`

## 判定

`PASS / POWERPOINT_COMPLETE`

## 構成QA

- 16:9: `PASS`
- スライド数: `5`
- SPEC固定範囲5項目: `5 / 5 covered`
  - 二分法
  - Newton法
  - 収束
  - 初期値依存
  - 許容誤差
- 電力潮流・非線形動作点への接続: `PASS`
- 接続確認した第二種二次「電力・管理」5問との対応: `5 / 5 PASS`
- 二分法・Newton法そのものを直接要求する確認済み第二種過去問: `0問`
- 非該当5問の固定品質ゲート件数への水増し: `0件`
- 第一種Newton-Raphson潮流問題の件数加算: `0件`

## 数値整合QA

- 二分法 `f(x)=x^2-2`, `[1,2]`, 6反復後の区間 `[1.40625, 1.421875]`: `PASS`
- 最終中点 `1.4140625`、区間幅 `0.015625`、中点誤差上限 `0.0078125`: `PASS`
- Newton法送電電力式例 `f(δ)=2 sin δ-1`: `PASS`
- `δ0=0.5` → `δ1=0.5234444738` → `δ2=0.5235987687`, `|f(δ2)|≈1.19×10^-8`: `PASS`
- 初期値依存 `g(x)=x^3-x`: `x0=0.2` は0、`x0=0.8` は1へ収束: `PASS`
- `x=1/sqrt(3)` で `g'(x)=0` となりNewton更新不能: `PASS`
- 独立再計算: `PASS`

## 表示QA

- 全5スライド再レンダリング: `5 / 5 PASS`
- 文字切れ・重なり・文字化け: `0件`
- overflow: `0件`
- `slides_test.py`: `PASS`
- PPTX ZIP/XML整合性: `PASS`

## 仕様境界

- Topic 19最適化の追加: `0件`
- 多変数Newton-Raphson潮流・ヤコビ行列一般理論の追加: `0件`
- 割線法・Regula Falsi法等の追加求根法: `0件`
- 第一種・第三種過去問による件数水増し: `0件`
- 未確認実車値依存: `0件`

## ファイル整合

- SHA-256: `5c49393d8a1f31bc71efe82761d1ec2a6390db128a21e939b0773e0319cc8b15`
- Git blob SHA: `ab1d01d62bab998b98f3ebd9477a1defacf3e7b3`
- file size: `8638 bytes`

## 進捗整合

直前のGitHub正本では `STATUS.md` / `HANDOFF.md` が `topic_18_powerpoint_complete` を示していた一方、Topic 18ディレクトリにPowerPoint本体とQAが存在していなかった。本工程で不足成果物を実体化し、進捗記録と成果物を一致させる。固定EXAM_ALIGNMENT、解説本文、練習問題、PDFは変更しない。

## 次工程

Topic 18の完成後独立検証を行う。固定EXAM_ALIGNMENT、解説本文、練習問題、PDF、PowerPointの内容は変更しない。
