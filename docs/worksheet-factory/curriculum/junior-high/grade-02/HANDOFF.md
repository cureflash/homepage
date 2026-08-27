# 中学2年 数学 — HANDOFF

更新: 2026-08-28

## 今回追加

中学2年の次の4 checkpointを連続で実装・公開した。

1. `simultaneous-equations-substitution-basic` — 連立方程式 代入法 基本 — 3 variants / 3 PDFs
2. `simultaneous-equations-align-coefficients` — 係数をそろえる連立方程式 — 3 variants / 3 PDFs
3. `simultaneous-equations-parentheses` — かっこを含む連立方程式 — 3 variants / 3 PDFs
4. `simultaneous-equations-decimals` — 小数を含む連立方程式 — 3 variants / 3 PDFs

各variantは20問。`scripts/publish_jh2_simultaneous_equations_variants.py` で deterministic seed から生成し、保存済みanswerを信頼せず determinant / `Fraction` ベースの `independent_answer()` でx,yを独立再計算する。

- 代入法 基本: 1本目の式でxまたはyの係数を±1とし、代入へ移りやすい形に限定する。
- 係数をそろえる連立方程式: 初期状態ではx/yどちらの係数の絶対値も一致させず、最小公倍数で係数をそろえる必要がある形を生成する。
- かっこを含む連立方程式: `k(ax+by)=c` 型2本を生成し、validator側でかっこを独立展開してから解く。
- 小数を含む連立方程式: 係数を整数tenthsとして保持し、表示は1桁小数、validatorは `Fraction(value, 10)` で浮動小数誤差なしに解き直す。
- すべて整数解x/yを先に選び、元の2式へ代入すると厳密一致する問題だけを採用する。
- 問題内重複、variant間差、既存catalogとのnormalized content hash衝突を検査する。
- 問題番号は通常整数、PDFは2ページ、解答ページは同じ問題配置に赤字で答えを追加する。

現行の文部科学省・中学校学習指導要領では、第2学年「数と式」で連立二元一次方程式を理解し、簡単な連立二元一次方程式を解くことが明記されているため、その範囲内の解法・表現違いとして実装した。

## 検証・公開

- publisher: `scripts/publish_jh2_simultaneous_equations_variants.py`
- test: `tests/test_jh2_simultaneous_equations_variants_publisher.py`
- workflow: `.github/workflows/math-jh2-publish.yml`
- shared catalog concurrency group: `worksheet-catalog-publish-v1`

workflowは既存JH2 publisher/test、新4技能publisher/test、`tests/test_worksheet_factory.py`、`tests/test_worksheet_catalog_writer_concurrency.py` を通過した後に公開commitを作成した。

- publish commit: `6ad3f5ba9175a36451cf0ea5c3e69cb54b269d13`

現在の中学2年公開範囲は **12 skills / 36 PDFs**。

## 次にやること

次の未完了技能 **「分数を含む連立方程式」** から開始する。

その後、安全なら同じrunで次を順に進める。

1. 分数を含む連立方程式
2. 一次関数 xからyを求める代入
3. 2点から変化の割合を求める
4. 傾きと切片から式を作る基本練習

引き続きdeterministic seed、独立answer validation、duplicate/hash guard、2ページPDF、通常整数番号、同一配置＋赤字解答、catalog/site validation、共有catalog writer concurrency guardを維持する。
