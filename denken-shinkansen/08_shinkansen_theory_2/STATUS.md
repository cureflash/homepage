# STATUS - 新幹線・電験二種「理論」

更新日: 2026-09-19

## 状態
- active_series: `08_shinkansen_theory_2`
- exam_aligned_completed_topics: 19 / 21
- current_status: `topic_20_practice_pdf_complete`
- last_completed_topic: `19 25kV・大電流をどう安全に測る？`
- active_topic: `20 East iは走りながら何をどう測る？`
- next_start: Topic 20 解説画像PowerPoint＋表示QA

## 完成済み

Topic 01〜19は、各テーマのEXAM_ALIGNMENT、必要成果物、完成後独立再解答、最終QAを通過し `PASS / completed`。

## Topic 19 制作進捗
- [x] 制作前EXAM_ALIGNMENT: `PASS / 一次5問・25答案要素`
- [x] 制作前blind独立再解答: `25 / 25 PASS`
- [x] 公式標準解答照合: `25 / 25`
- [x] 解説本文＋3段階例題: `PASS / EXPLANATION_SOURCE_COMPLETE`
- [x] 解説PDF＋表示QA: `PASS / EXPLANATION_PDF_COMPLETE`
- [x] 練習問題source＋練習PDF: `PASS / PRACTICE_PDF_COMPLETE`
- [x] 解説画像PowerPoint＋表示QA: `PASS / POWERPOINT_RESTORED`
- [x] 完成後独立再解答: `25 / 25 PASS`
- [x] 最終QA再実施: `PASS / FINAL_QA_COMPLETE`
- [x] completed状態同期
- [x] 最終判定: `PASS / completed`

## Topic 20 固定EXAM_ALIGNMENT
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC確認
- [x] 固定範囲: 測定誤差、絶対誤差、相対誤差、精度、有効数字、ブリッジ回路、波形計測、オシロスコープ、A/D変換、サンプリング、標本化、エイリアシング
- [x] 一次・二次を含む関連候補を直近年度から調査
- [x] R8 一次 理論 問4を採用
- [x] R7 一次 理論 問4を採用
- [x] R6 一次 理論 問6を採用
- [x] H24 一次 理論 問7を採用
- [x] H20 一次 理論 問6を採用
- [x] 品質ゲート対象を一次5問・25答案要素に固定
- [x] R4一次理論問8はTopic 19との重複が大きいため非採用
- [x] R3一次理論問8/R2一次理論問6はブリッジ論点重複のため関連候補として非採用
- [x] R8二次は2026-09-19時点で未実施
- [x] 系列08は一次理論中心のため二次問題を件数合わせで採用しない
- [x] 二次採用0問・二次数合わせ0件
- [x] East i公開測定項目をJR東日本資料で確認
- [x] East i内部測定回路の推測追加0件
- [x] 公式標準解答・保存済み正答の事前保存0件

## Topic 20 制作進捗
- [x] 制作前EXAM_ALIGNMENT: `PASS / 一次5問・25答案要素`
- [x] 制作前blind独立再解答: `25 / 25 PASS`
- [x] 標準解答照合: `R8/R7/R6/H24 20 / 20公式一致 + H20 5 / 5二次資料一致`
- [x] 解説本文＋3段階例題: `PASS / EXPLANATION_SOURCE_COMPLETE`
- [x] 解説PDF＋表示QA: `PASS / EXPLANATION_PDF_COMPLETE`
- [x] 練習問題source＋練習PDF: `PASS / PRACTICE_PDF_COMPLETE`
- [ ] 解説画像PowerPoint＋表示QA
- [ ] 完成後独立再解答
- [ ] 最終QA
- [ ] completed状態同期

## 今回進めた内容

Topic 20の練習問題source＋練習PDF工程を完了状態へ進めた。既存sourceとQAは存在したがPDF本体がGitHub正本から欠落していたため、sourceから再生成して復元した。

- source: `topics/20_east_i_measurement/20_east_i_measurement_practice.md`
- PDF: `topics/20_east_i_measurement/20_east_i_measurement_practice.pdf`
- QA: `topics/20_east_i_measurement/20_east_i_measurement_practice_pdf_qa.md`
- A4縦4ページ
- 200 dpi全ページ表示QA: `4 / 4 PASS`
- 文字抽出QA: `PASS`
- SHA-256: `1ec964bb8739f19735977d6f7a85a92892f5891544e6426a9d0d8d146be689c1`
- 問題数: `12問`
- 形式: `全問五肢択一`
- 難易度: `基礎3 / 本試験標準6 / 複合・ひっかけ3`
- 数値再計算・論理QA: `12 / 12 PASS`
- 正答一意性: `12 / 12 PASS`
- 固定一次5問・25答案要素: `25 / 25接続`
- SPEC固定範囲: `12 / 12接続`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- A/D・サンプリング・エイリアシングの存在しない過去問への接続: `0件`
- East i内部測定回路・未公開定数の推測追加: `0件`
- 固定範囲外追加: `0件`

## 判定

`PASS / topic_20_practice_pdf_complete / IN_PROGRESS`。

完成数は `19 / 21`。次工程はTopic 20の解説画像PowerPoint＋表示QA。
