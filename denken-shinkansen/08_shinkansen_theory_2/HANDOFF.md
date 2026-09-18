# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-19

## 現在地

Topic 01〜19は `PASS / completed`。完成数は `19 / 21`。

current_status: `topic_20_powerpoint_complete`

active_topic: `20 East iは走りながら何をどう測る？`

Topic 20は制作前EXAM_ALIGNMENT、制作前blind独立再解答、解説本文＋3段階例題、解説PDF＋表示QA、練習問題source＋練習PDF、解説画像PowerPoint＋表示QAまで完了。次工程は完成後独立再解答。

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
- stage: `POWERPOINT_COMPLETE`
- completion: `in_progress`

## PowerPoint QA

- 16:9 / 8枚
- 200 dpi表示QA: `8 / 8 PASS`
- `2667 × 1500 px / slide`
- shape geometry overflow: `0件`
- PPTX ZIP整合性: `PASS`
- PDF変換: `8ページ / PASS`
- 文字抽出QA: `PASS`
- 文字化け: `0件`
- SPEC固定範囲: `12 / 12可視化`
- 固定一次5問・25答案要素: `25 / 25可視化`
- 共通解法8ステップ: `PASS`
- SHA-256: `2a35298811f8a54f1aa3b9448235bbc829ac9031140aa40f45702da82d7fb179`
- 判定: `PASS / POWERPOINT_COMPLETE`

## East i一次資料

- JR東日本/JREメディアで、新幹線用East i（E926形）が走行しながら線路・架線等を検査・検測する車両であることを確認。
- JR東日本 2025-10-23資料で、East-i搭載センサによるトロリ線の摩耗・高さ・偏位測定とカメラ画像等の取得を確認。
- 上記を導入例としてのみ使い、E926の内部回路・同一センサ構成・未公開定数を断定しない。

一次資料:
- `https://www.jreast.co.jp/press/2025/20251023_ho02.pdf`
- `https://media.jreast.co.jp/articles/1653`

## 次工程

Topic 20の完成後独立再解答。保存済み正答を先に見ず、固定一次5問・25答案要素を教材内容だけで再解答し、各答案要素の根拠を説明できるか確認する。外部知識で補完した場合はFAILとする。
