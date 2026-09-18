# Topic 38 最終QA

更新日: 2026-09-18

判定: `PASS / COMPLETED`

## 対象

- Topic: `38 COSMOS③ システムが壊れても新幹線を止めない`
- source: `38_cosmos_high_reliability.md`
- 解説PDF: `38_cosmos_high_reliability_explanation.pdf`
- 練習source: `38_cosmos_high_reliability_practice.md`
- 練習PDF: `38_cosmos_high_reliability_practice.pdf`
- PowerPoint: `38_cosmos_high_reliability_images.pptx`
- 固定EXAM_ALIGNMENT: `5問・5答案要素`

## 必須4成果物

MASTER_SPECで必須の4成果物を横断確認した。

1. 根拠・計算条件・試験対応表を残すsource Markdown: `EXIST / PASS`
2. 解説プリントPDF: `EXIST / PASS`
3. 練習プリントPDF（解答・完全解説付き）: `EXIST / PASS`
4. 解説画像PowerPoint: `EXIST / PASS`

結果: `4 / 4 EXIST / PASS`。

## 過去問対応品質ゲート

固定問題・答案要素はEXAM_ALIGNMENT確定後に追加・差替えしていない。

- R6下 機械 問14 — AND・OR・NOT、論理式、入力波形→出力波形
- R6上 機械 問14 — ExOR・NOR・OR、bit演算、2進→16進
- R6下 電力 問9 — 6.6 kV非接地、多回線地絡、地絡方向継電器、高圧カットアウト
- R4下 電力 問13 — 低圧ネットワーク方式、複数給電線、ネットワークプロテクタ、供給継続
- R3 電力 問13 — 遮断器、保護継電器、区分開閉器、避雷器、ケッチヒューズ

確認結果:
- 制作前blind独立解答: `5 / 5 PASS`
- 解説本文マッピング: `5 / 5 PASS`
- 解説PDF反映: `5 / 5 PASS`
- 練習問題接続: `5 / 5 PASS`
- PowerPoint接続: `5 / 5 PASS`
- 完成後独立再解答: `5 / 5 PASS`
- 公式解答一致: `5 / 5 PASS`
- 教材外知識補完: `0件`

## 各成果物QA

### 解説source
- MASTER_SPEC要求へ接続する本文: `§1〜§15 / PASS`
- 3段階例題: `3 / 3 PASS`
- 公式・成立条件・再利用可能な解法手順: `PASS`

### 解説PDF
- A4縦: `PASS`
- ページ数: `6`
- 180 dpi全ページ表示: `6 / 6 PASS`
- 文字抽出: `PASS`
- 固定5問・5答案要素反映: `5 / 5 PASS`

### 練習source / PDF
- 問題数: `15`
- 基礎4 / 標準8 / 複合3: `PASS`
- 五肢択一: `15 / 15`
- 完全解説: `15 / 15`
- 練習source独立再解答: `15 / 15 PASS`
- 複数正答: `0件`
- 練習PDF A4縦: `4ページ`
- 180 dpi全ページ表示: `4 / 4 PASS`
- source/PDF意味上の不一致: `0件`

### PowerPoint
- 16:9: `PASS`
- スライド数: `4`
- 180 dpi相当表示: `4 / 4 PASS`
- shape geometry overflow: `0件 / PASS`
- PPTX ZIP整合性: `PASS`
- 外部引用画像: `0件`

## 固定範囲・実システム境界

系列SPECの固定範囲だけを対象とした。

- 冗長化
- バックアップ
- フェイルセーフ
- 論理回路
- 障害検知
- 切替
- システム信頼性

JR東日本公開資料で確認できる「システム信頼度の向上」「新幹線電力設備の状態監視・制御」「事故時の情報収集・制御・早期復旧」までを実システム事実として扱った。

- COSMOS/COSMOS-SCADAのサーバ台数の推測: `0件`
- 二重系/三重系・待機方式の推測: `0件`
- 通信経路・切替時間・切替条件・同期方式の推測: `0件`
- 学習用信頼度計算を実信頼度として扱う記述: `0件`
- 固定範囲外追加: `0件`
- 固定公式過去問の追加・差替え: `0件`

## 最終判定

EXAM_ALIGNMENT_SPECのPASS条件を満たし、必須成果物、過去問マッピング、公式の意味・条件・解法、練習問題、本試験標準例題、完成後独立再解答の全ゲートを通過した。

Topic 38は `PASS / COMPLETED` とする。
