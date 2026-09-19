# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-19

## 現在地

Topic 01〜20は `PASS / completed`。完成数は `20 / 21`。

current_status: `topic_20_completed`

active_topic: `21 架線からEast iまで全部シミュレーションする`

Topic 20は制作前EXAM_ALIGNMENT、制作前blind独立再解答、解説本文＋3段階例題、解説PDF＋表示QA、練習問題source＋練習PDF、解説画像PowerPoint＋表示QA、完成後独立再解答、最終QA再実施を通過し、`completed` 状態同期まで完了。初回最終QAの唯一のblockerだった主source進捗記録不整合は解消済み。次工程はTopic 21の制作前EXAM_ALIGNMENT。

## Topic 20 固定範囲

- 測定誤差
- 絶対誤差
- 相対誤差
- 精度
- 有効数字
- ブリッジ回路
- 波形計測
- オシロスコープ
- A/D変換
- サンプリング
- 標本化
- エイリアシング

East iは電気・電子計測の導入に限定する。公開資料で確認できない内部測定回路、ADC分解能、サンプリング周波数、センサ方式を推測で実値化しない。

## Topic 20 固定EXAM_ALIGNMENT

品質ゲート対象は一次5問・25答案要素。

- R8 一次 理論 問4: 零位法、90°位相差、標準抵抗・未知容量、検出器零条件、周波数変更から校正。
- R7 一次 理論 問4: 誘導分圧器、標準・未知枝電流、検出器零条件、複素インピーダンス比、平衡式。
- R6 一次 理論 問6: 交流ブリッジ、寄生容量、誤差、補償・ガード、未知量算出。
- H24 一次 理論 問7: 入力R/C、減衰比、プローブR/C、時定数一致、周波数補償。
- H20 一次 理論 問6: 内部抵抗、二接続法、指示値と真値、誤差率、接続選択。

固定過去問に直接現れないA/D変換、サンプリング、標本化、エイリアシングは系列SPEC必須として教材・練習問題で補う。存在しない公式過去問へ接続しない。

## 二次試験の扱い

- 系列08は一次理論中心。
- Topic 20固定範囲だけで完答する直接対応記述問題を件数合わせで採用しない。
- 二次採用: `0問`
- 二次数合わせ: `0件`

## Topic 20 成果物

- source: `topics/20_east_i_measurement/20_east_i_measurement.md`
- 制作前blind独立再解答: `topics/20_east_i_measurement/20_east_i_measurement_blind_reanswer.md`
- 解説PDF: `topics/20_east_i_measurement/20_east_i_measurement_explanation.pdf`
- 解説PDF QA: `topics/20_east_i_measurement/20_east_i_measurement_explanation_pdf_qa.md`
- 練習source: `topics/20_east_i_measurement/20_east_i_measurement_practice.md`
- 練習PDF: `topics/20_east_i_measurement/20_east_i_measurement_practice.pdf`
- 練習PDF QA: `topics/20_east_i_measurement/20_east_i_measurement_practice_pdf_qa.md`
- PowerPoint: `topics/20_east_i_measurement/20_east_i_measurement_images.pptx`
- PowerPoint QA: `topics/20_east_i_measurement/20_east_i_measurement_powerpoint_qa.md`
- 完成後独立再解答: `topics/20_east_i_measurement/20_east_i_measurement_reanswer.md`
- 最終QA: `topics/20_east_i_measurement/20_east_i_measurement_final_qa.md`
- stage: `COMPLETED`
- completion: `completed`

## 完成後独立再解答

- R8 一次 理論 問4: `カ / ワ / リ / ホ / イ` → `5 / 5 PASS`
- R7 一次 理論 問4: `ル / チ / ヌ / ヲ / ヨ` → `5 / 5 PASS`
- R6 一次 理論 問6: `ヘ / ハ / ワ / チ / ヲ` → `5 / 5 PASS`
- H24 一次 理論 問7: `ニ / ヨ / ヌ / イ / ヲ` → `5 / 5 PASS`
- H20 一次 理論 問6: `ニ / カ / ヨ / リ / ワ` → `5 / 5 PASS`
- 一次合計: `25 / 25 PASS`
- 公式標準解答直接一致: `20 / 20`
- H20二次資料掲載解答一致: `5 / 5`
- 教材外知識補完: `0件`
- 固定範囲外追加: `0件`
- East i内部測定回路・未公開定数の推測追加: `0件`
- 判定: `PASS / INDEPENDENT_REANSWER_COMPLETE`

## completed状態同期

- 主source: `completion: completed` / `stage: COMPLETED`
- 練習source: `completion: completed` / `stage: COMPLETED`
- 固定一次5問・25答案要素: `25 / 25 PASS` 維持
- R8/R7/R6/H24公式標準解答直接一致: `20 / 20` 維持
- H20二次資料掲載解答一致: `5 / 5` 維持
- 二次採用: `0問`
- 二次数合わせ: `0件`
- 技術本文・固定EXAM_ALIGNMENT・練習問題・正答・PDF・PowerPoint変更: `0件`
- 固定範囲外追加: `0件`
- East i内部測定回路・未公開定数の推測追加: `0件`
- 判定: `PASS / completed`

## East i一次資料

- JR東日本/JREメディアで、新幹線用East i（E926形）が走行しながら線路・架線等を検査・検測する車両であることを確認。
- JR東日本 2025-10-23資料で、East-i搭載センサによるトロリ線の摩耗・高さ・偏位測定とカメラ画像等の取得を確認。
- 上記を導入例としてのみ使い、E926の内部回路・同一センサ構成・未公開定数を断定しない。

一次資料:
- `https://www.jreast.co.jp/press/2025/20251023_ho02.pdf`
- `https://media.jreast.co.jp/articles/1653`

## 次工程

Topic 21「架線からEast iまで全部シミュレーションする」の制作前EXAM_ALIGNMENT。
