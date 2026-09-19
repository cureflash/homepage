# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-19

## 現在地

Topic 01〜20は `PASS / completed`。完成数は `20 / 21`。

current_status: `topic_21_explanation_pdf_complete`

active_topic: `21 架線からEast iまで全部シミュレーションする`

Topic 21は制作前EXAM_ALIGNMENT、制作前blind独立再解答＋公式照合、解説source本文＋3段階例題、解説PDF＋表示/収録QAまで完了し、`PASS / EXPLANATION_PDF_COMPLETE`。次工程は練習問題source＋練習PDF。

## Topic 21 source / PDF

- source: `topics/21_integrated_simulation/21_integrated_simulation.md`
- 解説PDF: `topics/21_integrated_simulation/21_integrated_simulation_explanation.pdf`
- 解説PDF QA: `topics/21_integrated_simulation/21_integrated_simulation_explanation_pdf_qa.md`
- stage: `EXPLANATION_PDF_COMPLETE`
- completion: `in_progress`
- 制作前blind独立再解答: `21 / 21 PASS`
- 公式標準解答照合: `21 / 21一致`
- 候補答案変更: `0件`
- 解説本文＋3段階例題: `PASS / EXPLANATION_SOURCE_COMPLETE`
- 解説PDF＋表示/収録QA: `PASS / EXPLANATION_PDF_COMPLETE`
- 固定5問・21答案要素のPDF接続: `21 / 21`

## Topic 21 SPEC固定範囲

系列SPEC第21章の範囲だけを扱う。

- 回路
- 交流
- 過渡
- 高調波
- 計測

簡略モデル:

```text
25kV電源
↓
架線等価回路
↓
主変圧器
↓
整流・DCリンク
↓
PWMインバータ
↓
簡略負荷
↓
電流・電圧センサ
↓
測定
```

入力例・出力例は系列SPEC記載項目の範囲に限定する。計算プログラムで連続特性・波形を出す場合は代表点を手計算または別手法で独立再計算する。

実車主回路やEast i内部回路を再現しない。公開資料で確認できない実車定数、PWM方式・周波数、センサ方式、サンプリング条件を推測で真値化しない。

## Topic 21 固定EXAM_ALIGNMENT

品質ゲート対象: `5問・21答案要素`。

| 年度 | 区分・科目・問 | 要求 | 答案要素 |
|---|---|---|---:|
| R8 | 一次 理論 問3 | 回路網、閉路方程式、テブナン、相反定理 | 5 |
| R8 | 一次 理論 問4 | 校正、零位法、検出器零条件、未知量算出 | 5 |
| R8 | 一次 理論 問6 | RC・RL・RLC過渡、初期条件、自由応答、蓄積エネルギー | 5 |
| H24 | 一次 機械 問3 (4)(5) | 基本波、高調波、位相差、合成 | 2 |
| R2 | 二次 電力・管理 問6 (1)〜(3) | P・Q・S、総合力率、P-Qベクトル、無効電力補償 | 4 |

集計:
- 一次: `4問・17答案要素 / 17 / 17 PASS`
- 二次: `1問・4答案要素 / 4 / 4 PASS`
- 合計: `21 / 21 PASS`
- 二次数合わせ: `0件`

関連候補は9件を確認。H28二次「機械・制御」問3 (3)(4)は高調波の直接関連候補だが、H24一次と論点が重なるため固定ゲートには採用しない。H30二次「電力・管理」問5、R7二次「電力・管理」問3、R6二次「機械・制御」問3は設備設計・単位法・制御等の固定範囲外要素が大きいため非採用。

令和8年度二次試験は2026-11-15実施予定で、2026-09-19時点では未実施。

## 制作前blind独立再解答結果

公式標準解答・保存済み正答を先に見ず、固定5問・21答案要素を独立導出してGitHubへ保存した後に公式標準解答へ照合した。

- R8 一次 理論 問3: `5 / 5一致`
- R8 一次 理論 問4: `5 / 5一致`
- R8 一次 理論 問6: `5 / 5一致`
- H24 一次 機械 問3 (4)(5): `2 / 2一致`
- R2 二次 電力・管理 問6 (1)〜(3): `4 / 4一致`
- 合計: `21 / 21 PASS`
- 候補答案変更: `0件`

## 解説sourceで固定した接続

- 架線等価回路: KCL/KVL、テブナン等価、相反定理から負荷側電圧・電流へ接続
- 交流: フェーザ、`S=VI*`、有効電力・無効電力・力率、複数負荷のP-Q合算
- 過渡: `t=0- / 0+ / ∞`、RL・RC・RLC初期条件、微分方程式、蓄積エネルギー
- 高調波: PWMを非正弦周期波として扱い、基本波・高調波・n次位相差・同一次数合成へ接続
- 計測: 理想値と測定値を分け、零位法・校正・測定誤差へ接続
- 数値シミュレーション: 入力条件・単位・初期条件・代表点を明記し、代表点を独立再計算

3段階例題:
- 基礎: 架線テブナン等価 → 負荷電流・端子電圧 → P・Q・力率
- 本試験標準: 複数負荷のP-Q合算 → 容量制約 → 力率改善
- 複合: RL過渡、高調波合成、直角相ブリッジ校正を別々に独立検算

Topic 01〜20にない新論点追加 `0件`、実車主回路・East i内部回路・未公開定数の推測追加 `0件`、仕様追加 `0件`。

## Topic 21 解説PDF＋表示/収録QA

- A4縦4ページ
- 200 dpi全ページ表示QA: `4 / 4 PASS`
- PDF構造確認: `PASS`
- 文字抽出QA: `PASS`
- SHA-256: `f7a02afbb68517517aa695b3053595b48980782eb7412487b13cdf27016a8b06`
- SPEC固定範囲: `5 / 5収録`
- 過去問から逆算した必須説明: `10 / 10収録`
- 固定5問・21答案要素: `21 / 21接続`
- 3段階例題: `3 / 3収録`
- 例題数値独立再計算: `3 / 3 PASS`
- 数式・単位・P/Q符号・n次位相差・零位条件の表示: `PASS`
- クリッピング/文字重なり/文字化け/ページ欠落: `0件`
- 二次採用: `1問・4答案要素`
- 二次数合わせ: `0件`
- Topic 01〜20にない新論点追加: `0件`
- 実車主回路・East i内部回路・未公開定数の推測追加: `0件`
- 仕様追加: `0件`
- 判定: `PASS / EXPLANATION_PDF_COMPLETE`

## 公式正本・参考

公式:
- https://www.shiken.or.jp/chief/second/qa/
- R8一次理論: https://www.shiken.or.jp/chief/upload/20260830_ch_second_q01.pdf
- R8一次標準解答: https://www.shiken.or.jp/chief/upload/20260830_ch_second_a01.pdf
- H24一次機械: https://www.shiken.or.jp/chief/upload/20120908_ch_second_q03.pdf
- H24一次標準解答: https://www.shiken.or.jp/chief/upload/20120908_ch_second_a01.pdf
- R2二次電力・管理: https://www.shiken.or.jp/chief/upload/20201122_ch_second_q01.pdf
- R2二次標準解答: https://www.shiken.or.jp/chief/upload/20201122_ch_second_a01.pdf

説明粒度・解法接続:
- https://e-sysnet.com/principle-of-superposition/
- https://e-sysnet.com/power_factor/
- https://e-sysnet.com/%E9%81%8E%E6%B8%A1%E7%8F%BE%E8%B1%A1/
- https://denken-ou.com/c2/
- https://denken-ou.com/c2/denryokukanrir2-6/

## 次工程

Topic 21の練習問題source＋練習PDF。

- 系列SPEC第21章と固定5問・21答案要素だけで設計する。
- 解説PDFの `回路・交流・過渡・高調波・計測` を横断して解かせる。
- 一次選択式だけでなく、採用済みR2二次「電力・管理」問6に対応する途中式・理由説明も含める。
- 数値計算は式、代入、単位、中間値、最終値、検算まで示す。
- 実車主回路・East i内部回路・未公開定数を推測しない。
- 二次問題を件数合わせで追加しない。
