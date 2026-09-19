# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-19

## 現在地

Topic 01〜20は `PASS / completed`。完成数は `20 / 21`。

current_status: `topic_21_final_qa_blocked`

active_topic: `21 架線からEast iまで全部シミュレーションする`

Topic 21は制作前EXAM_ALIGNMENT、制作前blind独立再解答＋公式照合、解説source本文＋3段階例題、解説PDF＋表示/収録QA、練習問題source＋練習PDF＋QA、解説画像PowerPoint＋表示QA、完成後独立再解答まで完了している。最終QAでは内容・成果物・品質ゲートはPASSしたが、主sourceの進捗記録が実進捗と不一致のため `NEEDS_REVISION / FINAL_QA_BLOCKED`。次工程は主source進捗記録同期。

## Topic 21 成果物

- main source: `topics/21_integrated_simulation/21_integrated_simulation.md`
- 解説PDF: `topics/21_integrated_simulation/21_integrated_simulation_explanation.pdf`
- 解説PDF QA: `topics/21_integrated_simulation/21_integrated_simulation_explanation_pdf_qa.md`
- 練習source: `topics/21_integrated_simulation/21_integrated_simulation_practice.md`
- 練習PDF: `topics/21_integrated_simulation/21_integrated_simulation_practice.pdf`
- 練習PDF QA: `topics/21_integrated_simulation/21_integrated_simulation_practice_pdf_qa.md`
- 解説画像PowerPoint: `topics/21_integrated_simulation/21_integrated_simulation_images.pptx`
- PowerPoint QA: `topics/21_integrated_simulation/21_integrated_simulation_powerpoint_qa.md`
- 完成後独立再解答: `topics/21_integrated_simulation/21_integrated_simulation_independent_reanswer.md`
- 最終QA: `topics/21_integrated_simulation/21_integrated_simulation_final_qa.md`
- stage: `FINAL_QA_BLOCKED`
- completion: `in_progress`

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
- 関連候補調査: `9件`

令和8年度二次試験は2026-11-15実施予定で、2026-09-19時点では未実施。既実施年度から固定範囲に直接対応するR2二次「電力・管理」問6を採用した。

## 制作前blind独立再解答結果

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

## 解説PDF＋表示/収録QA

- A4縦4ページ
- 200 dpi全ページ表示QA: `4 / 4 PASS`
- 文字抽出QA: `PASS`
- 固定5問・21答案要素: `21 / 21接続`
- 3段階例題: `3 / 3収録`
- 例題数値独立再計算: `3 / 3 PASS`
- クリッピング/文字重なり/文字化け/ページ欠落: `0件`
- 判定: `PASS / EXPLANATION_PDF_COMPLETE`

## 練習問題source＋練習PDF QA

- 問題数: `12問`
- 形式: `五肢択一11問 + 二次記述型1問（4小問）`
- 難易度: `基礎3 / 本試験標準6 / 複合・ひっかけ3`
- 固定一次4問・17答案要素: `17 / 17接続`
- 固定二次1問・4答案要素: `4 / 4接続`
- 合計: `5問・21 / 21答案要素`
- SPEC固定範囲: `5 / 5接続`
- 数値計算独立再計算: `11 / 11 PASS`
- A4縦4ページ
- 200 dpi全ページ表示QA: `4 / 4 PASS`
- 文字抽出QA: `PASS`
- 問1〜問12本文・解答抽出: `12 / 12`
- クリッピング/文字重なり/文字化け/ページ欠落: `0件`
- 二次数合わせ: `0件`
- Topic 01〜20にない新論点追加: `0件`
- 実車主回路・East i内部回路・未公開定数の推測追加: `0件`
- 仕様追加: `0件`
- 判定: `PASS / PRACTICE_PDF_COMPLETE`

## 解説画像PowerPoint＋表示QA

- 16:9 / `8枚`
- 200 dpi全スライド表示QA: `8 / 8 PASS`
- レンダリング寸法: `2667 × 1500 px / slide`
- shape geometry overflow: `0件`
- PPTX ZIP整合性: `PASS`
- PDF変換: `8ページ / PASS`
- PDF・PowerPoint XML文字抽出: `PASS`
- replacement character: `0件`
- クリッピング/文字重なり/ページ欠落: `0件`
- SPEC固定範囲5領域: `5 / 5可視化`
- 簡略モデル8ブロック: `8 / 8可視化`
- 固定一次4問・17答案要素: `17 / 17可視化`
- 固定二次1問・4答案要素: `4 / 4可視化`
- 合計: `5問・21 / 21答案要素`
- 二次数合わせ: `0件`
- Topic 01〜20にない新論点追加: `0件`
- 実車主回路・East i内部回路・未公開定数の推測追加: `0件`
- 仕様追加: `0件`
- 判定: `PASS / POWERPOINT_COMPLETE`

## 完成後独立再解答

- 記録: `topics/21_integrated_simulation/21_integrated_simulation_independent_reanswer.md`
- R8 一次 理論 問3: `5 / 5一致`
- R8 一次 理論 問4: `5 / 5一致`
- R8 一次 理論 問6: `5 / 5一致`
- H24 一次 機械 問3 (4)(5): `2 / 2一致`
- R2 二次 電力・管理 問6 (1)〜(3): `4 / 4一致`
- 一次: `17 / 17 PASS`
- 二次: `4 / 4 PASS`
- 合計: `21 / 21 PASS`
- 教材に存在しない外部知識で補完した答案要素: `0件`
- 根拠を説明できない偶然正答: `0件`
- 候補答案変更: `0件`
- 二次数合わせ: `0件`
- Topic 01〜20にない新論点追加: `0件`
- 実車主回路・East i内部回路・未公開定数の推測追加: `0件`
- 仕様追加: `0件`
- 判定: `PASS / INDEPENDENT_REANSWER_COMPLETE`

## 最終QA

- 記録: `topics/21_integrated_simulation/21_integrated_simulation_final_qa.md`
- 必須成果物欠落: `0件`
- 固定一次4問・17答案要素: `17 / 17 PASS`
- 固定二次1問・4答案要素: `4 / 4 PASS`
- 合計: `21 / 21 PASS`
- 解説PDF表示QA: `4 / 4 PASS`
- 練習PDF表示QA: `4 / 4 PASS`
- PowerPoint表示QA: `8 / 8 PASS`
- 二次数合わせ: `0件`
- 固定範囲外追加: `0件`
- 実車主回路・East i内部回路・未公開定数の推測追加: `0件`
- 仕様追加: `0件`
- blocker: `1件`
  - 主sourceが `stage: EXPLANATION_SOURCE_COMPLETE` / `次工程: 解説PDF制作` のままで実進捗と不一致
- 判定: `NEEDS_REVISION / FINAL_QA_BLOCKED`

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

Topic 21主sourceの進捗記録同期。

- `21_integrated_simulation.md` の `stage` を実進捗 `INDEPENDENT_REANSWER_COMPLETE` へ同期する。
- 解説PDF、練習PDF、PowerPoint、完成後独立再解答の完了状態を主sourceへ反映する。
- 初回最終QA `NEEDS_REVISION / FINAL_QA_BLOCKED` を記録する。
- `completion` はまだ `in_progress` のままとする。
- 次工程を `最終QA再実施` とする。
- 固定EXAM_ALIGNMENT、品質ゲート `5問・21答案要素`、二次採用、固定範囲は変更しない。
