# HANDOFF - 新幹線・電験三種「理論」

更新日: 2026-09-18

## 現在地

Topic 01〜13は最終QAまでPASSし、`completed`。Topic 14「East iは何をどう測っている？」は最終QAを実施し、技術内容・過去問対応品質ゲート・PDF/PPTX QAはPASSしたが、主source・練習sourceの進捗記録不整合により `NEEDS_REVISION`。まだ `completed` にはしていない。

- 完成数: `13 / 14`
- last completed: `13 インバータはどうやって三相交流を作る？`
- active topic: `14 East iは何をどう測っている？`
- current status: `topic_14_final_qa_needs_revision`
- next start: `14_east_i_measurement.md` と `14_east_i_measurement_practice.md` の進捗記録だけを `INDEPENDENT_REANSWER_COMPLETE` へ同期する。技術本文・固定EXAM_ALIGNMENT・練習問題・PDF/PPTX・独立再解答結果は変更しない

## 今回進捗

Topic 14の最終QAを実施した。必須成果物、各QA記録、固定8問・13答案要素の完成後独立再解答、SPEC境界を再確認した結果、技術品質は全件PASSした。

- 必須成果物の実在: PASS
- 固定8問要求の本文マッピング: `8 / 8`
- 3段階例題独立再計算: `3 / 3 PASS`
- 練習問題: 15問、全問五肢択一、正答一意性 `15 / 15 PASS`
- 練習問題再計算: `12 / 12 PASS`
- 解説PDF: A4縦4ページ、200 dpi表示 `4 / 4 PASS`、文字抽出PASS
- 練習PDF: A4縦4ページ、200 dpi表示 `4 / 4 PASS`、文字抽出PASS
- PowerPoint: 16:9・4枚、表示 `4 / 4 PASS`、overflow 0件、ZIP/XML整合性PASS
- 完成後独立再解答 再実施: `8 / 8問・13 / 13答案要素 PASS`
- 教材外知識補完: `0件`
- 系列SPEC固定範囲外追加: `0件`
- 未確認East i情報追加: `0件`

ただし進捗記録整合性がFAILした。

- 主source `14_east_i_measurement.md`: `status: EXPLANATION_SOURCE_COMPLETE` のまま
- 主source末尾: 次工程が「解説PDFを作成」のまま
- 練習source `14_east_i_measurement_practice.md`: `stage: PRACTICE_PDF_COMPLETE` のまま
- `STATUS.md` / `HANDOFF.md` / `14_east_i_measurement_exam_recheck.md`: 完成後独立再解答再実施PASSまで進行済み

このため最終QAは `NEEDS_REVISION` とし、`topics/14_east_i_measurement/14_east_i_measurement_final_qa.md` に記録した。次工程は進捗メタデータだけの同期であり、技術成果物は変更しない。

## Topic 14 固定過去問

1. 令和8年度上期 理論 問16
2. 令和7年度下期 理論 問14
3. 令和7年度上期 理論 問16
4. 令和6年度下期 理論 問16
5. 令和6年度上期 理論 問14
6. 令和6年度上期 理論 問16
7. 令和5年度下期 理論 問16
8. 令和4年度下期 理論 問14

制作前独立検証: `8 / 8問・13 / 13答案要素 PASS`
完成後独立再解答 初回: `7 / 8問・12 / 13答案要素 NEEDS_REVISION`
完成後独立再解答 再実施: `8 / 8問・13 / 13答案要素 PASS`

## Topic 14 SPEC固定範囲

主題は、新幹線の検測・保守を入口として電気測定・電子計測を学ぶこと。

扱う内容:
- 電圧計
- 電流計
- 電力計
- 抵抗測定
- 計器の内部抵抗
- 測定レンジ
- 分流器
- 倍率器
- CT
- VT
- ホイートストンブリッジ
- 電位差計の基本
- オシロスコープ的な波形観測
- A/D変換の基本
- センサ
- 測定誤差
- 絶対誤差
- 相対誤差
- 指示計器

## Topic 14 境界

- East i等の実際の検測項目は公開一次資料で確認し、教材で扱う電気計測の全項目をEast iが直接測定しているとは記述しない。
- 測定器を回路へ接続することで回路状態が変化することを扱う。代表例は電圧計・電流計の内部抵抗。
- 軌道回路等は、電圧・電流・短絡という回路理論の応用例として紹介してよい。
- ATC・軌道回路の詳細は車両編・機械編へ送り、本Topicへ追加しない。
- 未確認のEast i検測項目・センサ構成・内部回路・数値を推測しない。
- 件数合わせのため系列SPEC外論点を追加しない。

## 解説source・PDFの現状

固定8問の要求事項を本文・解説PDFへ `8 / 8` マッピング済み。

3段階例題:
- 基礎: 分流器で電流計の測定レンジを拡大
- 本試験標準: ホイートストンブリッジの未知抵抗・平衡後電流
- 複合・ひっかけ: 電圧計内部抵抗による負荷効果と測定誤差

3例題は本文結果から独立再計算し `3 / 3 PASS`。

East i接続はJR東日本「新たな新幹線専用検測車の開発に着手します」（2025-10-07）で公表された現行E926形の検測装置・トロリ線状態測定方式だけを使用し、未確認の内部回路・センサ定数・測定値は追加していない。

解説PDFはA4縦4ページ。200 dpiレンダリング `4 / 4 PASS`、文字抽出 `PASS`、固定範囲外追加 `0件`。

## 練習source・PDFの現状

固定8問の要求事項を練習15問へ `8 / 8` 接続済み。全問五肢択一で、基礎4・本試験標準8・複合3。正答一意性 `15 / 15 PASS`、数値・単位・論理再計算 `12 / 12 PASS`、正答位置は `(1)`〜`(5)` 各3問。

練習PDFはA4縦4ページ。200 dpiレンダリング `4 / 4 PASS`、文字抽出 `PASS`、固定範囲外追加 `0件`、未確認East i情報依存 `0件`。

## 解説画像PowerPointの現状

固定8問の要求事項を4枚の解説画像へ `8 / 8` 接続済み。16:9・4枚、200 dpi表示 `4 / 4 PASS`、shape-bound overflow 0件、文字欠け・重なり・文字化け0件、ZIP/XML整合性PASS。

East i実車情報は、JR東日本一次資料で公表された現行E926形の検測装置例とトロリ線状態測定方式だけを使用した。一般的な電気計測原理とEast iの実装を区別し、未確認の内部回路・センサ定数・測定値は追加していない。

## 次に行うこと

主source・練習sourceの進捗記録を同期する。

- `14_east_i_measurement.md` の冒頭statusを `INDEPENDENT_REANSWER_COMPLETE` へ更新する
- 同source末尾の次工程を「最終QA再実施」へ更新する
- `14_east_i_measurement_practice.md` のstageを `INDEPENDENT_REANSWER_COMPLETE` へ更新する
- 技術本文、固定EXAM_ALIGNMENT、練習15問、正答、PDF/PPTX、独立再解答結果は変更しない
- 同期後の次工程で最終QAを再実施し、全件PASSの場合のみTopic 14を `completed` とする

## 固定ルール

- `MASTER_SPEC.md` と `EXAM_ALIGNMENT_SPEC.md` を系列SPECより優先する
- 新幹線紹介ではなく、本試験問題を教材だけで解けることを合否基準にする
- 各TopicはSPEC境界を守り、後続・他系列の知識を完成ゲートへ混在させない
- 完成後独立再解答と最終QAを通過するまで `completed` としない
