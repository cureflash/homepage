# 16 700系 多レベル変換器とPWM — 練習PDF QA

更新日: 2026-09-18

## 対象
- PDF: `16_700series_multilevel_converter_pwm_practice.pdf`
- source: `16_700series_multilevel_converter_pwm_practice_source.md`

## 改訂内容
- blind再解答QAで不足した R7一次「機械」問4 (3) の1答案要素だけを同期。
- 一次問1: IGBT/MOSFETを自己消弧形スイッチング素子として識別し、逆並列ダイオードを還流用の別素子として区別。
- 二次問1(d): IGBT以外の代表例としてMOSFETを示し、逆並列ダイオードとの役割差を明記。
- 固定EXAM_ALIGNMENT、問題数、正答、共通仮定モデル、SPEC指定8項目・3可視化、範囲境界は変更なし。

## 構成
- A4縦: `4ページ`
- 一次試験型: `8 / 8`、全問五肢択一
- 二次試験型: `4 / 4`、途中式・前提・単位・理由を収録
- 完全解説: `12 / 12`

## 表示・抽出QA
- 180 dpiレンダリング: `4 / 4 PASS`
- PDF open/preflight: `PASS`
- 文字抽出: `PASS`
- 抽出置換文字 U+FFFD: `0件`
- 文字欠落・黒四角・重なり・クリップ: `0件`
- preflight注意: `HeiseiKakuGo-W5非埋込 / 180 dpi表示・文字抽出はPASS`

## 試験対応・数値QA
- 固定5過去問・26答案要素接続: `26 / 26 PASS`
- R7 一次 機械 問4 (3): `PASS / PDF同期済み`
- 数値・論理整合: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- SPEC指定8項目: `8 / 8 covered`
- SPEC指定3可視化の式系・条件との整合: `3 / 3 PASS`
- 共通仮定式系の変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 問題数・正答・式系の変更: `0件`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`

## ファイル
- PDF SHA-256: `b1da3262e4a4194a4bae3ea65bf9b82e6105872b350fad580437bdddcd481ffb`
- Git blob SHA: `127628da3cb3a4f863ff3e9d723165ac0e81fb86`

判定: `PASS / PRACTICE_PDF_REVISION_SYNC_COMPLETE`

## 現在地
current_status: `topic_16_progress_sync_complete`

次工程はTopic 16最終QAの再判定。技術成果物・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTX・blind再解答結果は変更しない。
