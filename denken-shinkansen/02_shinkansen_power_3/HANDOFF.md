# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-17

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は `10 / 16`。Topic 01〜10は完成済み。

## 今回進捗
Topic 11 `架線事故ではどうやって電気を止める？` の練習問題sourceを完成した。全12問・全問五肢択一、基礎3／本試験標準7／複合2。数値・論理独立再計算 `12 / 12 PASS`、正答一意性 `12 / 12 PASS`、固定5問・7答案要素への接続 `7 / 7`。

固定結果:
- 品質ゲート対象: 公式過去問5問・7答案要素
- R5下 電力 問16 (a)(b)
- R5上 電力 問16 (a)(b)
- R2 電力 問8
- R2 電力 問9
- H22 電力 問8
- 制作前独立検証: `7 / 7 PASS`
- 解説本文: §1〜§15 完成
- 3段階例題: 基礎・本試験標準・複合 各1問完成
- 固定5問・7答案要素の本文要求事項マッピング: `7 / 7`
- 解説PDF: `topics/11_fault_protection/11_fault_protection_explanation.pdf`
- 解説PDF QA: `topics/11_fault_protection/11_fault_protection_explanation_qa.md`
- 解説PDF: A4縦4ページ
- 200 dpi表示QA: `4 / 4 PASS`
- 文字抽出QA: `PASS`
- 3段階例題数値・論理再検算: `PASS`
- 練習問題source: `topics/11_fault_protection/11_fault_protection_practice_source.md`
- 練習問題数: `12`
- 練習形式: `12 / 12` 五肢択一
- 練習難易度: 基礎3 / 本試験標準7 / 複合2
- 練習source数値・論理独立再計算: `12 / 12 PASS`
- 練習source正答一意性: `12 / 12 PASS`
- 練習source固定5問・7答案要素への接続: `7 / 7`
- SPEC固定範囲外追加: `0件`
- Topic 12以降の先取り: `0件`
- 未確認新幹線実設備値の真値化: `0件`

制作前の個別正答・最終数値解は、完成後ブラインド独立再解答を保護するためsource・進捗記録・解説PDFへ保存していない。練習問題の正答は練習教材自身の解説として記録するが、固定公式過去問の保存済み正答は記録しない。

## Topic 11 固定範囲
`SPEC.md` から追加しない。

- 短絡
- 地絡
- 短絡電流
- 過電流
- 遮断器
- 遮断容量
- 保護リレー
- 選択遮断
- 接地
- 避雷器

新幹線側は「25kVの架線が地絡したら、なぜ発電所まで全部止めなくてよいのか？」を入口として事故検出・遮断・保護協調へつなぐ。未確認の保護整定値、事故電流値、遮断器定格、鉄道固有アルゴリズムは真値として置かない。

R8上 電力 問7は自動再閉路がSPEC外、R8上 電力 問9は通信誘導等がSPEC外のため品質ゲートから除外済み。件数合わせの仕様追加はしていない。

## 直前完了テーマ
Topic 10 `新幹線が突然大電力を使ったら？` は `PASS / completed`。固定5問・8小問の完成後ブラインド独立再解答 `8 / 8 PASS`、最終QA PASS。

## 現在状態
- `current_status`: `topic_11_practice_source_complete`
- 完成数: `10 / 16`
- last completed: Topic 10 `新幹線が突然大電力を使ったら？`
- active: Topic 11 `架線事故ではどうやって電気を止める？`
- Topic 11 source: `topics/11_fault_protection/11_fault_protection.md`
- Topic 11解説PDF: `topics/11_fault_protection/11_fault_protection_explanation.pdf`
- Topic 11練習source: `topics/11_fault_protection/11_fault_protection_practice_source.md`
- 固定問題: `5問・7答案要素`
- 制作前独立検証: `7 / 7 PASS`
- 本文要求事項マッピング: `7 / 7`
- 解説PDF表示QA: `4 / 4 PASS`
- 練習source QA: `12 / 12 PASS`

## 次の正確な開始点
Topic 11の練習PDFを作成し、表示・文字抽出・数値論理QAを行う。固定5問・7答案要素への接続 `7 / 7`、SPEC固定範囲、完成後ブラインド独立再解答保護を維持する。PowerPoint・完成後独立再解答にはまだ進まない。