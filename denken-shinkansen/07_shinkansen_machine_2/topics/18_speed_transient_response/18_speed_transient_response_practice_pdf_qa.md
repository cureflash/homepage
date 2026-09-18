# Topic 18 練習PDF QA

更新日: 2026-09-18

対象: `topics/18_speed_transient_response/18_speed_transient_response_practice.pdf`

## reconcile
- 最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md` / `STATUS.md` / `HANDOFF.md`、Topic 18実在成果物、直近のTopic 18変更を確認した。
- 最初の未完了テーマはTopic 18「速度指令を変えたら何秒で追従する？」であり、練習source `PASS / topic_18_practice_source_complete` の次工程が練習PDF＋QAであることを確認した。
- 固定一次1問＋二次4問、計5問・12答案要素は変更していない。

## 練習PDF
- A4縦・6ページ。
- 一次試験型10問（全問五肢択一）＋二次試験型5問（途中式・単位・検算付き）を収録した。
- 固定5問・12答案要素への接続 `12 / 12` を維持した。
- Topic 19〜21先取り、仕様外独立論点、未確認実車値、固定公式過去問の正答記号・完成済み個別解答保存は `0件`。

## 表示QA
- 160 dpiで全6ページをレンダリングして目視確認: `6 / 6 PASS`。
- 文字・数式・表の欠落、重なり、切れ、overflow、破損グリフ: `0件`。
- A4 595×842 pt: `6 / 6 PASS`。

## 文字抽出QA
- `pdftotext -layout` 抽出: PASS。
- Unicode置換文字: `0件`。
- `(cid:)`: `0件`。
- `問1` / `問10` / `問11` / `問15`、`H23` / `R07` / `R06` / `R03` / `H29`、主要数値を抽出確認した。

## 数値・論理QA
- 一次10問の正答一意性: `10 / 10 PASS`。
- 全15問の独立再計算・論理確認: `15 / 15 PASS`。
- 代表チェックポイント: `0.63212`、`3.30 s`、`7.82 s`、`ω_n=10 rad/s`、`ζ=0.4`、`16.3%`、`1.264`、`6.59 s`、`11.74 s`、`ω_n=5 rad/s`、`ζ=0.6`、`ω_d=4 rad/s`、`9.48%`、`1.33 s`、`0.692`、`0.8`、`0.2`、`ω_d≈2.598 rad/s`、係数 `3.464` をsourceと独立照合しPASS。
- 固定5問・12答案要素への教材接続: `12 / 12 PASS`。

## ハッシュ
- PDF SHA-256: `41262af9fd778e3ff0bda53c10cbf6938548e9768324b908882a3b8fd569e64f`
- PDF Git blob SHA: `0fc7e767eec6ffb5bc5295cff87ef55ddef0ce10`

## 判定
`PASS / topic_18_practice_pdf_complete / IN_PROGRESS`

次工程はTopic 18解説画像PowerPoint＋表示QA。