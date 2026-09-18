# STATUS - 新幹線・電験二種「理論」

更新日: 2026-09-18

## 状態
- active_series: `08_shinkansen_theory_2`
- exam_aligned_completed_topics: 17 / 21
- current_status: `topic_18_practice_pdf_complete`
- last_completed_topic: `17 GTO・IGBT・SiCはどうやって電流を操る？`
- active_topic: `18 新幹線のセンサ信号をどう増幅する？`
- next_start: Topic 18 解説画像PowerPoint＋表示QA

## 完成済み

Topic 01〜17は、各テーマのEXAM_ALIGNMENT、必要成果物、完成後独立再解答、最終QAを通過し `PASS / completed`。

## Topic 18 固定EXAM_ALIGNMENT
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC確認
- [x] 固定範囲: 理想オペアンプ、反転増幅、非反転増幅、加算回路、差動増幅、積分回路、微分回路、コンパレータ
- [x] 一次・二次を含む関連候補を直近年度から調査
- [x] R8 一次 理論 問8を採用
- [x] R1 一次 理論 問8を採用
- [x] H29 一次 理論 問8を採用
- [x] H23 一次 理論 問8を採用
- [x] H21 一次 理論 問8を採用
- [x] 品質ゲート対象を一次5問・25答案要素に固定
- [x] R4一次理論問7は利得帯域幅積・周波数特性を含むため非採用
- [x] R2一次理論問8は電圧安定化・トランジスタ・損失計算を含むため非採用
- [x] H26一次理論問8は発振回路が主題のため非採用
- [x] R8二次は2026-09-18時点で未実施、R7〜R1二次を確認
- [x] 固定範囲だけで完答する直接対応二次問題なし
- [x] 二次採用0問・二次数合わせ0件
- [x] Topic 19以降の先取り0件
- [x] 実車の特定センサ回路・定数の未確認追加0件

## Topic 18 制作進捗
- [x] 制作前EXAM_ALIGNMENT: 一次5問・25答案要素
- [x] 制作前blind独立再解答: `25 / 25 PASS`
- [x] 公式標準解答照合: `25 / 25`
- [x] 解説本文＋3段階例題: `PASS / EXPLANATION_SOURCE_COMPLETE`
- [x] 解説PDF＋表示QA: `PASS / EXPLANATION_PDF_COMPLETE`
- [x] 練習問題source＋練習PDF: `PASS / PRACTICE_PDF_COMPLETE`
- [ ] 解説画像PowerPoint＋表示QA
- [ ] 完成後独立再解答
- [ ] 最終QA
- [ ] completed状態同期

## 今回進めた内容

Topic 18の練習問題source＋練習PDFを完成させた。

- source: `topics/18_sensor_signal_opamp/18_sensor_signal_opamp_practice.md`
- PDF: `topics/18_sensor_signal_opamp/18_sensor_signal_opamp_practice.pdf`
- QA: `topics/18_sensor_signal_opamp/18_sensor_signal_opamp_practice_pdf_qa.md`
- 問題数: `12問`
- 形式: `全問五肢択一`
- 難易度: `基礎3 / 本試験標準6 / 複合・ひっかけ3`
- A4縦3ページ
- 200 dpi全ページ表示QA: `3 / 3 PASS`
- 文字抽出QA: `PASS`
- SHA-256: `14da420cc2667d859029fd61abbbc17feb78732f2b3db1d4464a959137e1d6c8`
- 数値再計算・論理QA: `12 / 12 PASS`
- 正答一意性: `12 / 12 PASS`
- 固定一次5問・25答案要素への接続: `25 / 25`
- 制作前blind独立再解答: `25 / 25 PASS` を維持
- 公式標準解答照合: `25 / 25` を維持
- 二次採用: `0問`
- 二次数合わせ: `0件`
- SPEC固定範囲外追加: `0件`
- Topic 19・20の先取り: `0件`
- 実車の特定センサ回路・回路定数・実装方式の未確認追加: `0件`

## 判定

Topic 18は `PASS / PRACTICE_PDF_COMPLETE`。完成数は `17 / 21` のまま。次工程は解説画像PowerPoint＋表示QA。
