# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-16

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は `8 / 16`。Topic 01〜08は完成済み。

## 今回進捗
Topic 09 `変電所からパンタグラフまでどう送る？` の練習問題sourceを完成した。

`topics/09_feeding_transmission/09_feeding_transmission_practice_source.md` を作成し、固定5問・7小問から逆算した電験三種「電力」型12問と完全解説を収録した。

練習source QA:
- 全12問・全問五肢択一
- 難易度: 基礎3 / 本試験標準7 / 複合2
- 数値・論理独立再計算: `12 / 12 PASS`
- 正答一意性: `12 / 12 PASS`
- 固定5問・7小問への接続: `7 / 7`
- 線間値／相値、mS→S、T形・π形KVL/KCL、複素符号を再検算
- SPEC固定範囲外追加: `0件`
- Topic 10以降の先取り: `0件`
- 未確認実設備値の真値化: `0件`

## Topic 09 固定過去問
品質ゲート対象は変更していない。
- R6下 電力 問12
- R6下 電力 問16 (a)(b)
- R6下 電力 問17 (a)(b)
- R5上 電力 問10
- R4下 電力 問9

制作前独立検証 `7 / 7 PASS`、公式解答との不一致0件を維持する。

完成後ブラインド独立再解答を汚染しないため、制作前の選択肢番号・数値解はsource・STATUS・HANDOFFへ保存していない。

## Topic 09 固定範囲
SPEC固定範囲は、送電線路、電線抵抗、インダクタンス、静電容量、インピーダンス、電圧降下、電力損失、ATき電方式、帰線。

ATき電方式そのものの詳細解析は三種相当の理解に留める。

公式過去問で必要なT形・π形一相等価回路は、与えられた線路定数を使って電圧・電流を追う範囲まで扱う。分布定数線路の厳密導出は追加しない。地中送電線路はR・L・Cの確認にのみ使用し、布設方式・ケーブル構造へ広げない。フェランチ現象は静電容量とリアクタンスの直接的な応用として扱い、独立主題へ拡張しない。

Topic 10以降の需要率・負荷率・不等率・無効電力補償、短絡・保護・遮断、弛度・張力、材料、配電、回生電力へ先回りしない。

R8上 電力 問8、およびR7上・R7下の送電関連候補のうち、機械的強度・コロナ・雷／開閉サージ・架空送電線路の構成部品・誘導障害等の固定範囲外論点を要する問題は品質ゲートへ採用しない。

## 現在の品質ゲート進捗
- 制作前EXAM_ALIGNMENT: 完了
- 公式過去問: `5問・7小問` 固定
- 制作前独立検証: `7 / 7 PASS`
- 公式解答との不一致: `0件`
- 解説本文: §1〜§14 完成
- 3段階例題: 完成
- 本文要求事項マッピング: `7 / 7`
- 本文数式・単位QA: PASS
- 解説PDF: A4縦4ページ
- 解説PDF表示QA: 200 dpi `4 / 4 PASS`
- 解説PDF文字抽出QA: PASS
- 解説PDF数値・論理再検算: PASS
- 練習問題source: 全12問・全問五肢択一
- 練習難易度: 基礎3 / 本試験標準7 / 複合2
- 練習source数値・論理独立再計算: `12 / 12 PASS`
- 練習source正答一意性: `12 / 12 PASS`
- 練習source固定5問・7小問への接続: `7 / 7`
- SPEC固定範囲外追加: `0件`
- 未確認実設備値の真値化: `0件`
- 練習PDF / PowerPoint: 未着手
- 完成後ブラインド独立再解答: 未着手

## 直前完了テーマ
Topic 08 `新幹線の変電所はなぜ数十kmおき？` は `PASS / completed`。

固定5問・7小問は完成教材だけで `7 / 7 PASS`、公式解答一致 `7 / 7`。教材外知識補完、Topic 09以降の論点による補完、未確認実設備値の使用、SPEC固定範囲外追加はいずれも0件。

最終QA: `topics/08_voltage_drop/08_voltage_drop_final_qa.md`
source: `topics/08_voltage_drop/08_voltage_drop.md`
解説PDF: `topics/08_voltage_drop/08_voltage_drop_explanation.pdf`
練習問題source: `topics/08_voltage_drop/08_voltage_drop_practice_source.md`
練習PDF: `topics/08_voltage_drop/08_voltage_drop_practice.pdf`
練習PDF QA: `topics/08_voltage_drop/08_voltage_drop_practice_qa.md`
解説画像PowerPoint: `topics/08_voltage_drop/08_voltage_drop_images.pptx`
PowerPoint QA: `topics/08_voltage_drop/08_voltage_drop_powerpoint_qa.md`
完成後独立再解答: `topics/08_voltage_drop/08_voltage_drop_independent_reanswer.md`

## 現在状態
- `current_status`: `topic_09_practice_source_complete`
- 完成数: `8 / 16`
- last completed: Topic 08 `新幹線の変電所はなぜ数十kmおき？`
- active: Topic 09 `変電所からパンタグラフまでどう送る？`

## 次の正確な開始点
Topic 09の練習PDFを作成する。

`09_feeding_transmission_practice_source.md` の12問＋完全解説を正本とし、PDF化後に全ページ表示QA、文字抽出QA、数値・論理・正答一意性の再検算を行う。