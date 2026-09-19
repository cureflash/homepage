# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜23は最終QAまで `PASS / completed`。完成数は `23 / 39`。

現在地は `topic_24_powerpoint_complete`。active topic は Topic 24 `N700S 主電動機設計の比較`。Topic 24全体はまだ未完了。

## 今回のreconcile

最新main、系列 `STATUS.md` / `HANDOFF.md`、Topic 24ディレクトリ、直近コミット、既存の車両二種worker成果を確認した。練習PDFは別workerが `PASS / PRACTICE_PDF_COMPLETE` まで進めていたため重複作業せず、次工程の解説画像PowerPoint作成＋QAだけを実施した。

既存品質ゲートは再利用し、固定過去問の差替え・追加や既存検証の重複再調査はしていない。

- R7一次「機械」問2: Topic 10 `5 / 5 PASS`
- R4一次「機械」問2 `(3)〜(5)`: Topic 12 `3 / 3 PASS`
- R2一次「機械」問3 `(1),(4),(5)`: Topic 12 `3 / 3 PASS`
- R3二次「機械・制御」問1 `(3),(4)`: Topic 10 `2 / 2 PASS`
- R7二次「機械・制御」問2 `(1),(3)`: Topic 24制作前照合 `4 / 4 PASS`

## 今回実施 — Topic 24 解説画像PowerPoint

作成:
- `topics/24_n700s_main_motor_design_comparison/24_n700s_main_motor_design_comparison_images.pptx`
- `topics/24_n700s_main_motor_design_comparison/24_n700s_main_motor_design_comparison_powerpoint_qa.md`

判定: `PASS / POWERPOINT_COMPLETE`

構成・QA:
- 16:9: `6 slides`
- byte size: `27,698 bytes`
- SHA-256: `9d551c8110e7bd3081f7219d6d85e66f23f859d02ff4326ebf70ec51f3eca4f8`
- Git blob SHA: `5aa5cd61b81bc1d941d9d628c7abbc7af2bf536d`
- ZIP integrity: `PASS`
- python-pptx open: `6 / 6 PASS`
- geometry overflow: `0`
- LibreOffice PDF変換: `PASS / 6 pages`
- Poppler render: `6 / 6 PASS`
- PDFium render: `6 / 6 PASS`
- contact sheet目視: `6 / 6 PASS`
- 文字切れ・重なり・欠落グリフ: `0件`
- pdftotext replacement character / `(cid:)`: `0件`
- 固定5問・17答案要素: 一次 `11 / 11`、二次 `6 / 6`、合計 `17 / 17 covered`
- SPEC必須8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- SPEC外主題追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- 新たなexact blocker: `0件`

この段階ではTopic 24を `completed` としない。完成後品質ゲートのclean blind再解答は次工程で実施する。

## Topic 24 既存成果

- 制作前EXAM_ALIGNMENT: `PASS / EXAM_ALIGNMENT_COMPLETE`
- 解説source: `PASS / EXPLANATION_SOURCE_COMPLETE`
- 解説PDF: `PASS / EXPLANATION_PDF_COMPLETE`
- 練習source: `PASS / PRACTICE_SOURCE_COMPLETE`
- 練習PDF: `PASS / PRACTICE_PDF_COMPLETE`
- 解説画像PowerPoint: `PASS / POWERPOINT_COMPLETE`
- 完成後clean blind固定過去問再解答: `未実施`

## Topic 24 固定EXAM_ALIGNMENT

固定過去問:
1. R7 一次「機械」問2 `(1)〜(5)` — 5答案要素
2. R4 一次「機械」問2 `(3)〜(5)` — 3答案要素
3. R2 一次「機械」問3 `(1),(4),(5)` — 3答案要素
4. R3 二次「機械・制御」問1 `(3),(4)` — 2答案要素
5. R7 二次「機械・制御」問2 `(1),(3)` — 4答案要素

集計:
- 一次: `3問 / 11答案要素`
- 二次: `2問 / 6答案要素`
- 合計: `5問 / 17答案要素`

PowerPointまで `17 / 17 covered` を確認済みだが、これは完成後clean blindのPASSを先取りしない。

## N700S実車接続・境界

富士電機技報 2020 vol.93 no.2 p.95（5）でN700S向け主電動機の6極化を一次メーカー資料として確認済み。

同資料の「駆動システム全体で約20%軽量化」は、SiC素子搭載、主電動機6極化、主変圧器冷却方式見直しを合わせた結果として扱う。主電動機単体・6極化単独の20%軽量化とは扱わない。

N700S主電動機の実運転周波数、実回転速度、実トルク、寸法、質量は確認不能のため真値化しない。教材内の数値条件は一般教材用条件として扱う。

電気角は `θ_e=(P/2)θ_m` をSPEC必須の一般関係として扱い、固定第二種過去問の直接答案要素とは主張しない。Topic 10の損失・等価回路試験、Topic 12のPWM詳細、Topic 13の回生を独立主題として再展開しない。

## Topic 21 H26二次 問1(4)

`48.0 / 48.1 N·m` 差は、公式標準解答が `π=3.14` 相当を用いた過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。Topic 24 PowerPointにもこの注記を維持した。

## 次の安全な工程

Topic 24教材だけを使い、固定5問・17答案要素をclean blind独立再解答する。公式標準解答との一致を確認し、PASSした場合のみ最終QAへ進む。固定EXAM_ALIGNMENT、N700S事実境界、Topic 21一般式は変更しない。完成数は `23 / 39` のまま。
