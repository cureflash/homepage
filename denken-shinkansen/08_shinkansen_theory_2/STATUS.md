# STATUS - 新幹線・電験二種「理論」

更新日: 2026-09-19

## 状態
- active_series: `08_shinkansen_theory_2`
- exam_aligned_completed_topics: 19 / 21
- current_status: `topic_20_powerpoint_complete`
- last_completed_topic: `19 25kV・大電流をどう安全に測る？`
- active_topic: `20 East iは走りながら何をどう測る？`
- next_start: Topic 20 完成後独立再解答

## 完成済み

Topic 01〜19は、各テーマのEXAM_ALIGNMENT、必要成果物、完成後独立再解答、最終QAを通過し `PASS / completed`。

## Topic 20 固定EXAM_ALIGNMENT
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC確認
- [x] 固定範囲12項目: 測定誤差、絶対誤差、相対誤差、精度、有効数字、ブリッジ回路、波形計測、オシロスコープ、A/D変換、サンプリング、標本化、エイリアシング
- [x] 一次・二次を含む関連候補を直近年度から調査
- [x] R8 一次 理論 問4を採用
- [x] R7 一次 理論 問4を採用
- [x] R6 一次 理論 問6を採用
- [x] H24 一次 理論 問7を採用
- [x] H20 一次 理論 問6を採用
- [x] 品質ゲート対象を一次5問・25答案要素に固定
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
- [x] 解説画像PowerPoint＋表示QA: `PASS / POWERPOINT_COMPLETE`
- [ ] 完成後独立再解答
- [ ] 最終QA
- [ ] completed状態同期

## 今回進めた内容

Topic 20の解説画像PowerPoint＋表示QA工程を完了した。ローカル生成物を同一生成source・PptxGenJS 4.0.0で検証済みで、GitHub Actionsによる正本バイナリ生成待ち。

- PowerPoint: `topics/20_east_i_measurement/20_east_i_measurement_images.pptx`
- QA: `topics/20_east_i_measurement/20_east_i_measurement_powerpoint_qa.md`
- 16:9 / 8枚
- 200 dpi全スライド表示QA: `8 / 8 PASS`
- レンダリング寸法: `2667 × 1500 px / slide`
- shape geometry overflow: `0件`
- PPTX ZIP整合性: `PASS`
- PDF変換: `8ページ / PASS`
- 文字抽出QA: `PASS`
- SHA-256: `2a35298811f8a54f1aa3b9448235bbc829ac9031140aa40f45702da82d7fb179`
- SPEC固定範囲: `12 / 12可視化`
- 固定一次5問・25答案要素: `25 / 25可視化`
- 共通解法8ステップ: `PASS`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- 固定範囲外追加: `0件`
- East i内部測定回路・未公開定数の推測追加: `0件`

## 判定

`PASS / topic_20_powerpoint_complete / IN_PROGRESS`。

完成数は `19 / 21`。次工程はTopic 20の完成後独立再解答。
