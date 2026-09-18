# Topic 17 練習PDF QA

更新日: 2026-09-18

対象: `17_speed_feedback_control_practice.pdf`

## reconcile
- `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、最新main、系列 `STATUS.md` / `HANDOFF.md`、Topic 17の解説source・解説PDF・練習sourceを確認した。
- 最初の未完了テーマは Topic 17、次工程は練習PDF作成であることを確認した。
- 固定EXAM_ALIGNMENTは一次1問＋二次記述4問、計5問・6答案要素のまま変更していない。
- 練習sourceの一次10問＋二次5問、正答・途中式・説明を変更せずPDF化した。

## PDF生成
- [x] A4縦
- [x] 5ページ
- [x] 一次試験型10問を収録
- [x] 二次試験型5問を収録
- [x] 全15問の解答・解説を収録
- [x] 固定6答案要素を `6 / 6` 接続
- [x] 教材用仮定値を新幹線実車値として扱っていない
- [x] 固定公式過去問の個別正答記号・完成済み公式答案を掲載していない

## 数式・論理QA
- 練習sourceの一次正答一意性 `10 / 10 PASS` を維持
- 練習sourceの独立再計算・論理QA `15 / 15 PASS` を維持
- PDF化後に主要式14チェックポイントを独立再計算し `14 / 14 PASS`
- 問2 `2×3/(s+4)=6/(s+4)` — PASS
- 問3 `G=4/(s+2), H=1 -> Y/R=4/(s+6)` — PASS
- 問4 `E/R=(s+2)/(s+6)` — PASS
- 問5 `G=5/(s+1), H=1/5 -> Y/R=5/(s+2)` — PASS
- 問6 `CPH=3/[2(s+1)]` — PASS
- 問7 `E/D=-3/(s+7)` — PASS
- 問10 `Y/D=2(s+1)/(s+7)` — PASS
- 問11 `G=6/(s+1), Y/R=6/(s+7)` — PASS
- 問12 `E/R=(s^2+3s+2)/(s^2+3s+5)` — PASS
- 問13 `E/D=-5(s+1)/(s^2+3s+12)` — PASS
- 問14 `G=8/(s+3)` — PASS
- 問14 `GH=4/(s+3)` — PASS
- 問14 `Y/R=8/(s+7), E/R=(s+3)/(s+7)` — PASS
- 問15 `GH=2/(s+2), Y/R=6/(s+4), E/R=(s+2)/(s+4)` — PASS

## 表示QA
- [x] 160 dpiで全5ページを再レンダリング
- [x] 表示QA `5 / 5 PASS`
- [x] 文字・数式・表の欠落 `0件`
- [x] 重なり・切れ・ページ外overflow `0件`
- [x] 黒四角・broken glyph `0件`
- [x] PDF文字抽出QA PASS
- [x] Unicode置換文字 `0件`
- [x] `(cid:)` `0件`
- [x] Markdown backtick由来の抽出異常 `0件`

## 仕様境界
- [x] Topic 18の過渡応答・時定数・ステップ応答追加 `0件`
- [x] Topic 19のPID制御追加 `0件`
- [x] Topic 20の安定判別・周波数応答追加 `0件`
- [x] Topic 21の再粘着制御追加 `0件`
- [x] 二自由度制御・フィードフォワード補償の独立論点追加 `0件`
- [x] 未確認の新幹線制御ゲイン・時定数・センサ定数の実車値化 `0件`
- [x] 固定過去問の正答記号・完成済み公式答案の保存 `0件`

## ハッシュ
- SHA-256: `e4011a7e383e4dc94f5c7a3c6fd4e9a1a85ee93b7d6054830e06f9c9dff71f01`
- Git blob SHA: `87e988deffbbede3e4b76031a98a4e50762d7e8f`

判定: `PASS / topic_17_practice_pdf_complete`
