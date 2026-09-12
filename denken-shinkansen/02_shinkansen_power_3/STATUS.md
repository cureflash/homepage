# STATUS - 新幹線・電験三種「電力」

更新日: 2026-09-13

## 状態
- active_series: `02_shinkansen_power_3`
- exam_aligned_completed_topics: 1 / 16
- current_status: `topic_02_practice_pdf_complete`
- last_completed_topic: `01 新幹線の電気はどこから来る？`
- active_topic: `02 上越新幹線を水の力で走らせる`
- next_start: Topic 02 の解説画像PowerPointを作成し、全スライド表示QAを行う

## 新品質ゲート進捗
- [x] 01 新幹線の電気はどこから来る？ — EXAM_ALIGNMENT範囲再監査、解説本文・解説PDF・練習PDF・解説画像PowerPoint、完成後独立再解答、最終QAまで完了
- [ ] 02 上越新幹線を水の力で走らせる — 制作前EXAM_ALIGNMENT、解説本文・3段階例題、解説PDF、練習PDFまで完了。PowerPoint以降は未着手
- [ ] 03〜16 — 未着手

## 01 EXAM_ALIGNMENT範囲再監査
前回の6問は、問題全体を教材だけで完答するにはTopic 01境界外の詳細知識が必要と判定し、最終品質ゲート対象から除外した。

除外:
1. R8上 電力 問6 — V結線詳細 → Topic 06・07
2. R8上 電力 問8 — 電線太さ・コロナ・サージ等 → Topic 09
3. R8上 電力 問11 — ネットワーク配電詳細 → Topic 14
4. R7下 電力 問1 — 水力分類詳細 → Topic 02
5. R7下 電力 問5 — 誘導・同期発電機詳細 → Topic 01境界外
6. R7下 電力 問6 — 避雷器詳細 → Topic 06・11

Topic 01の既定範囲に適合する次の5問へ差し替え済み。

1. R7上 電力 問13 — 三相有効電力・力率・線路損失
2. R6下 電力 問12 — 三相有効電力・三相線路損失・損失率
3. R6上 電力 問11 — 三相方式と単相方式の基本的相違
4. R4上 電力 問8 — 三相負荷電流・抵抗損失
5. R1 電力 問7 — 変電所の昇降圧・電圧調整・系統切換え・系統保護

## 01 制作前独立再解答
公式解答を先に見ず5問を再解答し、その後に電気技術者試験センター公式解答と照合した。

- R7上 問13: 独立解答 (2) / 公式 (2) — PASS
- R6下 問12: 独立解答 (2) / 公式 (2) — PASS
- R6上 問11: 独立解答 (2) / 公式 (2) — PASS
- R4上 問8: 独立解答 (5) / 公式 (5) — PASS
- R1 問7: 独立解答 (3) / 公式 (3) — PASS

5/5一致。

## 01 成果物
- source Markdown: `topics/01_power_system_overview/01_power_system_overview.md`
- 解説PDF: `topics/01_power_system_overview/01_power_system_overview_explanation.pdf`
- 練習PDF: `topics/01_power_system_overview/01_power_system_overview_practice.pdf`
- 解説画像PowerPoint: `topics/01_power_system_overview/01_power_system_overview_images.pptx`
- 完成後QA: `topics/01_power_system_overview/01_power_system_overview_final_qa.md`

解説PDFはA4縦4ページ、練習PDFはA4縦7ページ・全15問、PowerPointは16:9・4枚。各表示確認は完了済み。

## 01 完成後独立再解答
完成教材の既定範囲だけで選定5問を再解答し、解答確定後に公式解答と照合した。

- R7上 問13: (2) — PASS
- R6下 問12: (2) — PASS
- R6上 問11: (2) — PASS
- R4上 問8: (5) — PASS
- R1 問7: (3) — PASS

結果: `5/5 PASS`。教材外知識の補完0件。
詳細は `topics/01_power_system_overview/01_power_system_overview_final_qa.md`。

## 01 QA判定
`PASS / completed`。`MASTER_SPEC.md` と `EXAM_ALIGNMENT_SPEC.md` の完成条件を満たしたため、完成数を1/16へ更新した。

## 02 制作前EXAM_ALIGNMENT
source: `topics/02_hydropower/02_hydropower.md`

品質ゲート対象:
1. R8上 電力 問2 — 理論的包蔵水力・年間電力量
2. R8上 電力 問15(a)(b) — 揚水発電の出力・入力・運転時間・総合効率
3. R7下 電力 問2 — 単位体積当たりの運動エネルギー
4. R7上 電力 問1 — `P=ρgQH` の単位と `9.8QH[kW]`
5. R3 電力 問2 — 連続の関係とベルヌーイの定理
6. H25 電力 問1 — 衝動/反動水車と代表形式

制作前独立再解答は7小問すべて公式解答と一致し、`7/7 PASS`。

境界維持:
- ダム形式・発電所分類の詳細は追加しない
- 比速度・キャビテーション・水撃作用・サージタンク・調速機は追加しない
- 発電機の同期機/誘導機としての詳細は追加しない
- 信濃川発電設備の実値は一次資料確認前に真値化しない

## 02 解説本文
`topics/02_hydropower/02_hydropower.md` に本文と3段階例題を作成済み。

収録済み:
- `P=ρgQH` の位置エネルギーからの導出と `9.8QH[kW]` への単位変換
- 総落差・損失水頭・有効落差、発電時 `H0-hL` / 揚水時 `H0+hL`
- 水車効率・発電機効率・総合効率、発電では効率を掛け揚水入力では割る関係
- 流量・水量・流域面積・降水量・流出率、J/kWh/MWh/GWh/TWh換算
- 揚水発電の水量収支・発電/揚水時間・電力量効率
- 連続の式とベルヌーイの定理
- 衝動/反動水車とペルトン・フランシス・プロペラ・クロスフロー
- 再利用可能な解法手順
- 基礎・本試験標準・複合/ひっかけの3段階例題

JR東日本一次資料で、信濃川発電所が千手・小千谷・小千谷第二の3発電所の総称であり、発電電力が首都圏・上越線・新幹線の電車や鉄道施設へ送られていることを確認して本文へ接続した。未確認の実設備数値は使用していない。

固定範囲外のダム形式詳細、比速度、キャビテーション、水撃作用、サージタンク、調速機、発電機機種詳細は追加していない。

## 02 解説PDF
- file: `topics/02_hydropower/02_hydropower_explanation.pdf`
- A4縦5ページ
- 解説本文の固定範囲、3段階例題、過去問対応表、公式・解法まとめを収録
- 200 dpiで全5ページをレンダリングし、文字欠け・クリップ・重なり・壊れた数式記号がないことを確認
- 数式表示はPDF互換性を優先し、`rho`、`eta`、`H0`、`A1` 等のASCII表記を使用。意味・計算内容はsource Markdownと同一

判定: 解説PDF表示QA `PASS`。

## 02 練習PDF
- file: `topics/02_hydropower/02_hydropower_practice.pdf`
- A4縦4ページ
- 全12問: 基礎3問 / 本試験標準7問 / 複合・応用2問
- 全問五肢択一、全問に完全解説を付与
- `P=ρgQH`、有効落差、効率、流域水量・年間電力量、揚水発電、連続の式、ベルヌーイ、水車分類を練習可能
- 選定した公式過去問6問・7小問で要求された固定範囲内の論点を練習問題へ対応
- 固定範囲外のダム形式詳細、比速度、キャビテーション、水撃作用、サージタンク、調速機、発電機機種詳細は追加していない
- 200 dpiで全4ページをレンダリングし、文字欠け・クリップ・重なりがないことを確認

判定: 練習PDF表示QA `PASS`。

## 次
Topic 02の解説画像PowerPointを作成し、全スライド表示QAを行う。完成数は1/16のまま。