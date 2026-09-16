# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-16

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は `10 / 16`。Topic 01〜10は品質ゲートPASSでcompleted。active topicは11「空転した車輪をどう立て直す？」。

## 今回進捗
Topic 10の最終QAを再実施し、`PASS / completed` とした。前回唯一のblockerだった練習source末尾の旧進捗記録は同期済みで、必須成果物、固定EXAM_ALIGNMENT 5件、完成後blind独立再解答、PDF/PPTX QA、source進捗整合、系列SPEC境界を全件PASS確認した。教材本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTXは変更していない。Web公開要件に従い `qualifications/denken-shinkansen/catalog.json` へTopic 10を登録済み。

## Topic 10 最終品質状態
- 品質ゲート対象: R8上 機械 問13 / R7下 機械 問13 / R5下 機械 問18(a) / R5上 機械 問13 / R4上 機械 問15(a)
- 制作前独立検証: `5 / 5 PASS`
- 解説本文＋3段階例題: 完成
- 固定5件の本文マッピング: `5 / 5 全件`
- 解説PDF: A4縦4ページ、200 dpi表示QA `4 / 4 PASS`、文字抽出QA `PASS`
- 練習問題source: 12問・全問五肢択一、独立計算・論理QA `12 / 12 PASS`、正答一意性QA `12 / 12 PASS`
- 練習PDF: A4縦6ページ、200 dpi表示QA `6 / 6 PASS`、文字抽出QA `PASS`
- 解説画像PowerPoint: 16:9・4枚、表示QA `4 / 4 PASS`、overflow `0件`、PPTX ZIP整合性 `PASS`
- 完成後blind独立再解答: `(4),(3),(5),(1),(2)` / `5 / 5 PASS`
- 教材外・固定範囲外知識による補完: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`
- source進捗整合: `PASS`
- Webカタログ登録: `PASS`
- 最終QA: `PASS / completed`

## Topic 10 成果物
- source: `topics/10_automatic_control/10_automatic_control.md`
- 解説PDF: `topics/10_automatic_control/10_automatic_control_explanation.pdf`
- 解説PDF QA: `topics/10_automatic_control/10_automatic_control_explanation_pdf_qa.md`
- 練習問題source: `topics/10_automatic_control/10_automatic_control_practice.md`
- 練習PDF: `topics/10_automatic_control/10_automatic_control_practice.pdf`
- 練習PDF QA: `topics/10_automatic_control/10_automatic_control_practice_pdf_qa.md`
- PowerPoint: `topics/10_automatic_control/10_automatic_control_images.pptx`
- PowerPoint QA: `topics/10_automatic_control/10_automatic_control_powerpoint_qa.md`
- blind再解答ゲート記録: `topics/10_automatic_control/10_automatic_control_blind_reanswer_gate.md`

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

## 次に行う
Topic 11「空転した車輪をどう立て直す？」の制作前EXAM_ALIGNMENTを実施する。`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md` の固定範囲に従い、直近年度を優先して公式過去問を調査し、品質ゲート対象を固定する。