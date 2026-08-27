# 中学1年 数学 — HANDOFF

更新: 2026-08-28

## 今回完了

中学1年の最後の4 checkpointを連続で実装・公開した。

1. `linear-equation-decimal` — 小数を含む一次方程式 — 3 variants / 3 PDFs
2. `linear-equation-fraction` — 分数を含む一次方程式 — 3 variants / 3 PDFs
3. `proportion-equation` — 比例式型の方程式 — 3 variants / 3 PDFs
4. `proportional-inverse-substitution` — 比例・反比例の式への代入 — 3 variants / 3 PDFs

各PDFは20問。今回新規は4技能 / 12PDFで、中学1年は **20技能 / 60PDF** まで到達し、PLAN.mdの計画済み反復技能を完了した。

## 教科配置

現行の文部科学省「中学校学習指導要領」数学・第1学年の範囲を再確認した。第1学年では文字を用いた式・方程式と、比例・反比例の関係を扱う。今回の4技能はその機械的反復として配置した。

## 実装

- `scripts/publish_jh1_decimal_fraction_ratio.py`
  - 小数一次方程式は0.1単位の整数スケールで保持し、浮動小数誤差を避けて独立解答する。
  - 分数一次方程式は `Fraction` で厳密に独立再計算する。
  - 比例式は `a:b=x:d` を整数比から生成し、交差積で一意に解ける。
  - 比例・反比例の代入は各variantで比例10問・反比例10問。反比例は必ず整数で割り切れる値を生成する。
- `tests/test_jh1_decimal_fraction_ratio_publisher.py`
  - deterministic再生成
  - independent answer recomputation
  - 問題内重複、variant間差、既存catalogとのnormalized content hash衝突検査
  - 比例/反比例10問ずつの構成確認
  - 2ページPDF、通常整数番号、同一配置＋赤字解答、catalog validation、冪等publish
- `.github/workflows/math-jh1-publish.yml`
  - 新publisher/testを既存中1全publisher、共通Factory回帰、共有catalog writer concurrency guardと同じworkflowへ追加。

## 検証・公開

- publisher commit: `397dcfb31d43601d68d3468e7503eeb70978e11a`
- test commit: `80f24e43d2eb74794b0e6bffcc7a866231bf6f37`
- workflow commit: `7dab34e164ddf5b6ba4c007b6c1fd326002fccb5`
- publish commit: `8a3db9e099779331662d2cb43822113b658667d2`

公開commitには12PDFと12 catalog rowsが実際に追加されている。

## 完了状態

中学1年は `done`。

座標の読み取りはPLAN上「自動生成適性を見て追加」の補助候補であり、計画済み必須反復技能の完了条件には含めない。必要なら将来の合法的な追加拡張として扱う。

## 次にやること

次のactive gradeは **中学2年**。

`curriculum/junior-high/grade-02/PLAN.md` の先頭から、次の最大4 checkpointを候補とする。

1. 単項式の乗法
2. 単項式の除法
3. 多項式の加法
4. 多項式の減法

現行MEXT第2学年の単元配置を確認してから、同じFactory契約と共有catalog concurrency guardを維持して進める。
