# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-15

## 現在地

Topic 01〜06は `completed`。Topic 07 `0系のモーターはなぜ力を出せる？` は最終QAまで実施したが、進捗記録不整合のため `NEEDS_REVISION / IN_PROGRESS`。

完成数: `6 / 21`

current_status: `topic_07_final_qa_needs_revision`

active_topic: `07 0系のモーターはなぜ力を出せる？`

次工程: Topic 07の主source・練習sourceの旧進捗記録を現在地へ同期する。

## Topic 06 完了記録

Topic 06 `25kVからどうやって電圧が誘導される？` は最終QA再々実施まで完了し、全品質ゲート `PASS / completed`。

- 固定一次5問・16小問: `16 / 16 PASS`
- 教材外知識補完: 0件
- 二次数合わせ: 0件
- 固定範囲外論点追加: 0件
- 解説PDF・練習PDF・PowerPoint表示QA: PASS
- 練習12問の正答一意性・独立再計算: `12 / 12 PASS`
- 主source・練習source・独立再解答記録・最終QA記録の相互整合: PASS

## Topic 07 固定範囲

系列SPECどおり、次だけを扱う。

- ローレンツ力
- `F=q(v×B)`
- `F=BIl`
- 電子の運動
- 電界中の荷電粒子
- 磁界中の荷電粒子
- 円運動
- 電子の比電荷

直流機そのものの等価回路、速度特性、トルク特性、始動法、速度制御等は機械系列へ譲る。

## Topic 07 固定EXAM_ALIGNMENT

品質ゲート対象は一次「理論」5問・25小問。

- R7 問7 (1)〜(5): 磁界中の電子、ローレンツ力の向き・大きさ、円運動、周波数・周期。公式解答 `イ / ハ / ル / ヨ / ホ`
- R5 問6 (1)〜(5): 交流電界中の電子、`F=-eE`、運動方程式、速度・位置の積分、周期運動。公式解答 `ル / カ / ヨ / ワ / ニ`
- R3 問6 (1)〜(5): 一様電界領域を通過する電子、通過時間、力、速度成分、軌道変位。公式解答 `リ / ヘ / ハ / ル / ロ`
- R1 問7 (1)〜(5): 磁界中の電子、ローレンツ力、円運動半径、サイクロトロン角周波数。公式解答 `ヌ / ワ / ホ / イ / ヲ`
- H25 問6 (1)〜(5): サイクロトロン共鳴、向心力、軌道半径、加速電圧、角周波数。公式解答 `ワ / ヲ / ト / チ / ヨ`

公式問題・公式解答の25小問を照合済み。

### 除外判断

- R8 問1: 球内電界をガウスの法則から導出する必要がありTopic 03依存のため非採用。
- R8 問7・R2 問7: 半導体論点でTopic 16側のため非採用。
- R6・R4: Topic 07固定範囲だけで完結する直接対応問題を確認できず非採用。
- R7〜R5二次「電力・管理」「機械・制御」: 固定範囲だけを直接解かせる記述問題は確認できず、数合わせで採用しない。
- 2026年度R8二次は制作前調査時点では未実施。

## 教材で欠落不可の内容

- `F=q(v×B)` と `F=|q|vB sinθ`
- 電子の負電荷による力方向の反転
- `F=qE` と電界中の運動方程式
- x・y成分を分離した粒子運動
- 磁気力が仕事をせず速さを変えないこと
- `|q|vB=mv²/r`
- `r=mv/(|q|B)`
- `ωc=|q|B/m`、`f=|q|B/(2πm)`、`T=2πm/(|q|B)`
- 加速電圧 `|q|V=mv²/2`
- 電子の比電荷 `e/m`
- `B[T]` と `H[A/m]` の区別、真空中 `B=μ0H`
- 電流が受ける力。直交時 `F=BIl`、一般に `F=BIl sinθ`
- `F=BIl` を多数の移動電荷に働くローレンツ力の総和として接続すること
- 0系直流主電動機は「磁界中の電流に力が働く」導入例に限定すること

## Topic 07 解説source完成内容

- 試験論点→電界中の荷電粒子→時間変化電界→ローレンツ力→円運動→加速電圧・比電荷→電流が受ける力→0系への接続、の順で解説。
- 固定一次5問・25小問を教材節へ全件マッピング。
- `F=BIl` を移動電荷へのローレンツ力総和から導出。
- 直流機特性・後続Topic論点は追加していない。
- 3段階例題を作成。
  - 基礎: 磁界中の電子のローレンツ力・円運動
  - 標準: 一様電界領域を通過する電子
  - 複合: 加速電圧・円運動・サイクロトロン周波数・比電荷
- 例題数値は独立再計算済み。

## Topic 07 練習source完成内容

- `07_motor_lorentz_force_practice.md` を作成。
- 一次型12問、すべて五肢択一。
- 難易度: 基礎3 / 本試験標準6 / 複合・ひっかけ3。
- 固定一次5問・25小問の要求事項を全件練習問題へ接続。
- `F=q(v×B)`、`F=BIl`、電界中の電子運動、時間変化電界、円運動、サイクロトロン周波数、加速電圧、比電荷、`B/H` 区別を収録。
- 問題文・選択肢だけから独立再計算 `12 / 12 PASS`。
- 正答一意性 `12 / 12 PASS`、五肢重複0件。
- 固定範囲外知識依存0件、未確認実車値依存0件、二次数合わせ0件。

## Topic 07 成果物

- source: `topics/07_motor_lorentz_force/07_motor_lorentz_force.md`
- 解説本文: 完了
- 3段階例題: 完了
- 解説PDF: `topics/07_motor_lorentz_force/07_motor_lorentz_force_explanation.pdf` 完了（A4縦3ページ）
- 解説PDF表示QA: 200 dpi全3ページ `3 / 3 PASS`
- 解説PDF文字抽出QA: PASS
- 練習source: `topics/07_motor_lorentz_force/07_motor_lorentz_force_practice.md` 完了
- 練習問題独立QA: `12 / 12 PASS`
- 練習PDF: `topics/07_motor_lorentz_force/07_motor_lorentz_force_practice.pdf` 完了（A4縦4ページ）
- 練習PDF表示QA: 200 dpi全4ページ `4 / 4 PASS`
- 練習PDF文字抽出QA: PASS
- 解説画像PowerPoint: `topics/07_motor_lorentz_force/07_motor_lorentz_force_images.pptx` 完了（16:9・5枚）
- PowerPoint表示QA: 約200 dpi全5スライド `5 / 5 PASS`
- PowerPoint overflow検査: PASS
- PowerPoint ZIP整合性: PASS
- 完成後独立再解答: `topics/07_motor_lorentz_force/07_motor_lorentz_force_independent_reanswer.md` 完了（固定5問・25小問 `25 / 25 PASS`）
- 最終QA: `topics/07_motor_lorentz_force/07_motor_lorentz_force_final_qa.md` 実施済み（`NEEDS_REVISION / IN_PROGRESS`）

## Topic 07 最終QAで確認した残件

技術内容・試験対応・表示QAはPASS。未完了理由は進捗記録のみ。

- 主source冒頭が「PDF・練習問題・PowerPoint・完成後独立再解答は未実施」のまま
- 主sourceの固定品質ゲートが「完成後独立再解答: 未実施」のまま
- 主sourceの次工程が「解説PDFを作成」のまま
- 練習sourceの次工程が「解説画像PowerPoint作成」のまま

教材本文・固定EXAM_ALIGNMENT・数式・例題・問題・正答・成果物は変更せず、上記の進捗記録だけを現在地へ同期する必要がある。

## 今回の更新

1. 最新main、MASTER_SPEC、EXAM_ALIGNMENT_SPEC、系列SPEC、STATUS、HANDOFF、Topic 07成果物を再照合。
2. 固定一次5問・25小問の完成後独立再解答 `25 / 25 PASS`、二次非採用判断、固定範囲、表示QAを確認。
3. 必須成果物の実在を確認。
4. 主source・練習sourceに旧進捗記録が残ることを検出。
5. 最終QAを `NEEDS_REVISION / IN_PROGRESS` と判定。
6. 最終QA記録・STATUS・HANDOFFをGitHub正本へ反映。
7. 完成数は `6 / 21` のまま。

## 次に行うこと

Topic 07の主source・練習sourceの旧進捗記録を現在地へ同期する。教材本文、固定EXAM_ALIGNMENT、数式、例題、問題、正答、成果物は変更しない。