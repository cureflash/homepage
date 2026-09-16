# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-16

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は `10 / 16`。Topic 01〜10は品質ゲートPASSでcompleted。active topicは11「空転した車輪をどう立て直す？」。

## 今回進捗
Topic 11の練習PDFを完成した。A4縦3ページ、全12問・全問五肢択一、完全解説 `12 / 12` を収録。200 dpi表示QA `3 / 3 PASS`、文字抽出QA `PASS`、文字切れ・重なり・ページ外はみ出し0件。固定R4下 機械 問14への接続 `1 / 1`、練習12問の問題数・正答、固定EXAM_ALIGNMENT・固定範囲・解説本文・解説PDFは変更していない。固定範囲外論点、未確認実車値、実車固有アルゴリズムの推測追加は0件。

## Topic 11 固定範囲
系列 `SPEC.md` に従い、次だけを扱う。

- センサ
- 回転速度
- 車輪
- 粘着
- 空転
- 滑走
- フィードバック
- 制御指令
- アクチュエータ
- メカトロニクス
- 応答速度

電気系・機械系・情報系が一つの制御システムを構成する例として扱う。実車の具体的な再粘着アルゴリズムは公開資料で確認できる範囲だけとし、推測しない。

## Topic 11 EXAM_ALIGNMENT
- 品質ゲート対象: R4下 機械 問14
- 対象数: `1問`
- 要求事項: メカトロニクスの統合概念 / センサによる速度等の物理量計測 / アクチュエータの役割 / 制御装置による計測情報処理と指令生成
- 制作前独立検証: `1 / 1 PASS`
- 固定過去問要求事項の本文マッピング: `1 / 1 PASS`
- 3段階例題: `3 / 3 PASS`
- 解説PDF表示QA: `4 / 4 PASS`
- 解説PDF文字抽出QA: `PASS`
- 練習問題source: `12問` 完成
- 練習問題構成: 基礎3 / 本試験標準7 / 複合・応用2
- 練習問題形式: `12 / 12` 五肢択一
- 練習問題独立論理QA: `12 / 12 PASS`
- 練習問題正答一意性QA: `12 / 12 PASS`
- 練習問題→固定EXAM_ALIGNMENT接続: `1 / 1`
- 練習PDF: A4縦 `3ページ` 完成
- 練習PDF表示QA: `3 / 3 PASS`
- 練習PDF文字抽出QA: `PASS`
- 練習PDF文字切れ・重なり・ページ外はみ出し: `0件`
- 教材外・固定範囲外知識による補完: `0件`
- 固定範囲外追加: `0件`
- 未確認実車値追加: `0件`
- 実車固有アルゴリズムの推測: `0件`
- source: `topics/11_readhesion_control/11_readhesion_control.md`
- explanation PDF: `topics/11_readhesion_control/11_readhesion_control_explanation.pdf`
- explanation PDF QA: `topics/11_readhesion_control/11_readhesion_control_explanation_pdf_qa.md`
- practice source: `topics/11_readhesion_control/11_readhesion_control_practice.md`
- practice PDF: `topics/11_readhesion_control/11_readhesion_control_practice.pdf`
- practice PDF QA: `topics/11_readhesion_control/11_readhesion_control_practice_pdf_qa.md`

## 非選定
- R4上 機械 問14: アナログ/ディジタル信号、A-D/D-A変換、インタフェースが正答要件となりTopic 11固定範囲外。
- R6上 機械 問13: リレーシーケンス、インタロック、タイムチャートが正答要件となり固定範囲外。
- 原則5問を満たすために、上記論点やステッピングモータ固有理論、PID等を追加しない。

## 解説sourceの要点
- センサ = 物理量を計測・検出する。
- 制御装置 = 計測情報を処理し、制御指令を生成する。
- アクチュエータ = エネルギーを機械的な動き・作用へ変える。
- メカトロニクス = 機械系・電子系・情報系を統合する。
- 再粘着制御の概念 = `検出 → 判断・指令 → 作用 → 状態変化 → 再検出`。
- 応答速度 = 状態変化を検出し、指令・作用へ反映するまでの速さ。
- 鉄道側は鉄道総研の公開資料で確認できる検出・トルク指令抑制の概念までに限定し、車種固有のしきい値・判定式・トルク低減率・応答時間を導入していない。

## 練習sourceの要点
- 全12問を五肢択一とし、三種本試験形式へ接続した。
- 問1・4〜7・11・12でR4下 機械 問14の役割分担・統合概念を直接練習する。
- 問2・3・8〜10で固定SPEC範囲の粘着 / 空転 / 滑走 / フィードバック / 応答速度を補強する。
- 12問の正答列は `(3),(4),(2),(5),(1),(3),(4),(2),(5),(1),(3),(4)`。
- 独立論理QA `12 / 12 PASS`、正答一意性QA `12 / 12 PASS`。

## 次に行う
Topic 11の解説画像PowerPointを作成する。固定EXAM_ALIGNMENT、固定範囲、解説本文・解説PDF、練習12問の問題数・正答、練習PDFは変更しない。
