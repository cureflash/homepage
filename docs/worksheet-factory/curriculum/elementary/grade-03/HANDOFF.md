# 小学3年 算数 — HANDOFF

更新: 2026-08-26

## 今回完了

- 文部科学省の現行小学校学習指導要領・算数第3学年を確認し、次の配置を確認した。
  - 3位数・4位数の加法及び減法を第3学年で扱う。
  - 2位数や3位数に1位数をかける乗法、および2位数に2位数をかける乗法を第3学年で扱う。
- `scripts/publish_grade3_add_sub.py` を追加し、次の4技能を実装・公開した。
  - 3桁 + 3桁
  - 3桁 - 3桁
  - 4桁 + 4桁
  - 4桁 - 4桁
- 加減4技能は seed=3101/3202/3303 の3variant、各20問で計12PDF。
- 加法は両方の被加数を指定桁数に保ち、和も同じ桁数内に収める。減法は同じ桁数同士かつ `a > b` に限定した。
- `independent_answer()` で生成時に保持した答えとは別に全問を再計算し、問題ごとの桁範囲・演算条件も独立検証する。
- `tests/test_grade3_add_sub_publisher.py` で決定性、20問内の数値ペア重複、variant間content hash重複、既存カタログとの重複、独立解答、PDF2ページ、カタログ整合性、冪等性を検証するようにした。
- GitHub Actions `Grade 3 worksheet factory checkpoint` run 32904378322 が成功し、新規12PDFとカタログを main に公開した。公開コミットは `5e2ddc97f4b6178163f9002eff08d6b68ce40fe0`。

- 続けて `scripts/publish_grade3_multiplication.py` を追加し、次の3技能を実装・公開した。
  - 2桁 × 1桁
  - 2桁 × 2桁
  - 3桁 × 1桁
- 乗法3技能は seed=3401/3502/3603 の3variant、各20問で計9PDF。
- 2桁×1桁は、小2で公開済みの10〜12×1桁の単純再利用を避けるため被乗数を20〜99にした。
- 乗法も決定的seed生成、20問内の数値ペア重複拒否、既存カタログとの `content_hash` 重複拒否、`independent_answer()` による独立再計算を実装した。
- 乗法用PDFも問題番号は `1`〜`20` の普通整数表記。2ページ目は問題ページと同じ位置に式を再掲し、各式の下へ赤字で答えを追加する。
- `tests/test_grade3_multiplication_publisher.py` で決定性、独立解答、問題範囲、重複、PDF2ページ、カタログ、冪等性を検証するようにした。
- Grade 3 checkpointを拡張し、加減・乗法・共通worksheet factory回帰テストをlatest main上でまとめて検証するようにした。
- GitHub Actions run 32904512758 が成功し、ログ上で以下を確認した。
  - `published 0 grade-3 addition/subtraction worksheets`
  - `published 9 grade-3 multiplication worksheets`
  - `grade 3 addition/subtraction publisher tests: OK`
  - `grade 3 multiplication publisher tests: OK`
  - `worksheet factory tests: OK`
- 同runで新規9PDFを main に公開した。公開コミットは `5259faa273872983f113b7e1ec579b9097b618fa`。

## 現在の公開範囲

- 小3算数: 7技能。
- 3位数・4位数の加減: 4技能 × 3variant = 12PDF。
- 2位数・3位数の乗法: 3技能 × 3variant = 9PDF。
- 合計21PDFを公開済み。
- 公開先: `materials/worksheets/elementary/grade-03/`。
- `worksheets/catalog.json` に登録済みで、既存の動的一覧/navigationから小学3年として表示される。

## 未完了

PLAN.md の残りは未実装。

- 1桁で割るわり算（割り切れる）
- 1桁で割るわり算（あまりあり）
- 0.1の位までの小数のたし算・ひき算
- 簡単な同分母分数のたし算・ひき算
- 四則計算混合
- 万・億までの数と位取り
- □を使った四則の逆算
- そろばん型（既存生成器との適合性を確認して判断）
- 学年総復習

## 次にやること

文部科学省の第3学年における除法の配置を再確認したうえで、`1桁で割るわり算（割り切れる）` を実装する。九九の範囲だけの実質的な小2逆引きに閉じず、第3学年で扱う除法の計算範囲に沿って、決定的seed生成、独立商再計算、被除数・除数・商の範囲検証、20問内および教材間重複検査、普通整数の問題番号、同一配置への赤字解答、PDF/カタログ登録、Grade 3 checkpoint回帰テストまで通す。その後 `1桁で割るわり算（あまりあり）` へ進む。
