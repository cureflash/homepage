# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-19

## 現在地

Topic 01〜21は `PASS / completed`。完成数は `21 / 21`。

current_status: `completed`

active_topic: `none`

Topic 21は制作前EXAM_ALIGNMENT、制作前blind独立再解答＋公式照合、解説source本文＋3段階例題、解説PDF＋表示/収録QA、練習問題source＋練習PDF＋QA、解説画像PowerPoint＋表示QA、完成後独立再解答、最終QA再実施、`completed` 状態同期まで完了した。初回最終QAの唯一のblockerだった主source進捗記録不整合は解消済みで、再実施した最終QAは `PASS / FINAL_QA_COMPLETE`。系列08は `21 / 21` 完了。

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
- stage: `COMPLETED`
- completion: `completed`

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

## 解説・成果物QA

- 解説PDF: A4縦4ページ / 200 dpi表示QA `4 / 4 PASS`
- 練習PDF: A4縦4ページ / 200 dpi表示QA `4 / 4 PASS`
- 練習問題: `12問`（五肢択一11＋二次記述型1問4小問）
- 数値計算独立再計算: `11 / 11 PASS`
- PowerPoint: 16:9 / `8枚` / 200 dpi表示QA `8 / 8 PASS`
- 固定一次4問・17答案要素: `17 / 17接続・可視化`
- 固定二次1問・4答案要素: `4 / 4接続・可視化`
- 簡略モデル8ブロック: `8 / 8収録・可視化`
- 3段階例題: `3 / 3収録`
- クリッピング/文字重なり/文字化け/欠落: `0件`

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

## 最終QA再実施

- 初回blocker解消: `1 / 1`
- 必須成果物欠落: `0件`
- 固定一次4問・17答案要素: `17 / 17 PASS`
- 固定二次1問・4答案要素: `4 / 4 PASS`
- 合計: `21 / 21 PASS`
- 公式標準解答照合: `21 / 21一致`
- SPEC固定範囲: `5 / 5領域`
- 簡略モデル: `8 / 8ブロック`
- 解説PDF表示QA: `4 / 4 PASS`
- 練習PDF表示QA: `4 / 4 PASS`
- PowerPoint表示QA: `8 / 8 PASS`
- 二次数合わせ: `0件`
- 固定範囲外追加: `0件`
- 実車主回路・East i内部回路・未公開定数の推測追加: `0件`
- 主source / STATUS / HANDOFF の最終QA前進捗整合: `PASS`
- 仕様追加: `0件`
- 判定: `PASS / FINAL_QA_COMPLETE`

## 完了状態同期

- main source stage: `COMPLETED`
- main source completion: `completed`
- STATUS完成数: `21 / 21`
- HANDOFF完成数: `21 / 21`
- 技術本文・固定EXAM_ALIGNMENT・過去問正答・教材成果物の変更: `0件`
- 仕様追加: `0件`
- 判定: `PASS / completed`

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

系列08 `08_shinkansen_theory_2` は `21 / 21 PASS / completed`。次系列は `MASTER_SPEC.md` の順序に従い `09_electrical_math_3`。
