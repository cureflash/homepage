# Topic 11 最終QA

テーマ: `11 ATCはなぜ特定の周波数を見分けられる？`

実施日: 2026-09-16

## 判定条件

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`、`STATUS.md`、`HANDOFF.md`、GitHub正本の既存成果物を再照合した。固定EXAM_ALIGNMENT・教材本文・問題・正答・PDF/PPTXは変更しない。

`08 理論・二種` は一次理論中心であるため、二次試験は確認対象に含めるが、Topic 11固定範囲だけで完結する直接対応記述問題が確認できない場合は件数合わせをしない。

## 確認結果

### 1. 必須成果物

GitHub正本上で以下が実在する。

- 解説source
- 解説PDF
- 練習source
- 練習PDF
- 解説画像PowerPoint
- PowerPoint QA
- 完成後独立再解答記録

判定: `PASS`

### 2. 過去問対応品質ゲート

固定EXAM_ALIGNMENTは一次「理論」5問・25小問。

- H28 問8(1)〜(5): `5 / 5 PASS`
- H27 問2(1)〜(5): `5 / 5 PASS`
- H25 問3(1)〜(5): `5 / 5 PASS`
- H24 問7(1)〜(5): `5 / 5 PASS`
- H22 問4(1)〜(5): `5 / 5 PASS`

完成後独立再解答は `25 / 25 PASS`。教材外知識補完 `0件`、固定範囲外論点追加 `0件`、未確認ATC実設備値・実回路追加 `0件`。

判定: `PASS`

### 3. 二次試験

2026-09-16時点で令和8年度二次試験は未実施。R7〜R5二次を確認済み。

- R7・R6: Topic 11固定範囲だけで完結する直接対応問題なし
- R5 機械・制御 問3「電力用能動フィルタ」: パワーエレクトロニクス・高調波補償・制御が必要なため非採用
- R5 機械・制御 問4「ゲイン特性曲線からの伝達関数」: 自動制御の伝達関数体系が必要なため非採用

二次採用 `0問`、二次数合わせ `0件` を維持する。

判定: `PASS`

### 4. SPEC境界

固定範囲は RLC共振、周波数応答、ローパス、ハイパス、バンドパス、遮断周波数、ゲイン、位相。実車ATC回路の推測、能動フィルタ、自動制御体系、オペアンプ能動フィルタ、Topic 12以降の三相回路・複素電力・高調波・過渡現象は追加していない。

判定: `PASS`

### 5. 表示QA・練習QA

既存QA記録を再照合した。

- 解説PDF: A4縦2ページ、200 dpi表示QA `2 / 2 PASS`、文字抽出QA `PASS`
- 練習PDF: A4縦3ページ、200 dpi表示QA `3 / 3 PASS`、文字抽出QA `PASS`
- 練習12問: 独立計算・正答一意性 `12 / 12 PASS`
- 固定5問・25小問への練習接続: `25 / 25`
- PowerPoint: 16:9・5スライド、表示QA `5 / 5 PASS`、overflow `0件`、ZIP整合性 `PASS`

判定: `PASS`

### 6. 成果物相互整合・進捗記録

技術内容、固定EXAM_ALIGNMENT、練習問題、独立再解答、PDF/PPTX QA記録は相互に整合している。

ただしGitHub正本の進捗記録に旧工程が残る。

- `11_atc_frequency_filter.md` 冒頭: `stage: EXPLANATION_SOURCE_COMPLETE`、`completion: IN_PROGRESS`、次工程が「解説PDF＋表示QA」
- 同source末尾: 次工程が「解説PDFを作成」
- `11_atc_frequency_filter_practice.md` 末尾: 次工程が「練習PDFを作成」

実在成果物・独立再解答済み状態と矛盾するため、このまま `completed` へは進めない。

判定: `NEEDS_REVISION`

## 最終判定

`NEEDS_REVISION / IN_PROGRESS`

技術内容、固定一次5問・25小問の独立再解答 `25 / 25 PASS`、二次非採用判断、必須成果物、表示QA、SPEC境界はPASS。未完了理由は主source 2箇所と練習source 1箇所の旧進捗記録のみ。

次工程は、上記3箇所を実在成果物・独立再解答済みの現在地へ同期する。教材本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTXは変更しない。