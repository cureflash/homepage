# Topic 22 解説画像PowerPoint QA

更新日: 2026-09-20

## 判定
- artifact: `22_integrated_route_simulation_images.pptx`
- status: `PASS / topic_22_powerpoint_complete / IN_PROGRESS`
- 16:9・4枚
- 外部画像転載: `0件`
- 系列SPEC外の仕様追加: `0件 / PASS`
- 一次資料未確認の実車・実路線値の真値化: `0件 / PASS`
- 固定公式過去問の個別正答記号・最終数値保存: `0件 / PASS`
- 独立過去問再解答: `NOT_RUN`

## 固定EXAM_ALIGNMENT
固定範囲は変更していない。一次4問＋二次2問、計6問・16答案要素。

| 固定過去問 | 答案要素 | PowerPoint対応 |
|---|---:|---|
| R08 一次 機械 問3 (1)〜(3) | 3 | Slide 1: 変圧器損失・効率・最大効率条件 |
| R07 一次 機械 問2 (1) | 1 | Slide 2: 誘導機の同期速度・滑り・電力・トルク |
| R07 一次 機械 問4 (4),(5) | 2 | Slide 1: PWM信号波・キャリア・スイッチング |
| R06 一次 機械 問2 (1),(2) | 2 | Slide 1〜2: 負の滑り・回生・符号規約 |
| R07 二次 機械・制御 問2 (1) | 2 | Slide 2: 同期速度・滑り・軸出力/角速度→トルク |
| R07 二次 機械・制御 問4 (1)〜(5) | 6 | Slide 3: PI/PID・偏差・閉ループ・定常偏差・時間応答 |

- 固定答案要素: `16 / 16 COVERED`
- 一次・二次を含む: `PASS`
- 二次記述式2問を含む: `PASS`

## 内容QA
- Slide 1: `架線25kV → 主変圧器 → PWMコンバータ → DCリンク → VVVFインバータ → 誘導電動機 → 歯車 → 車輪 → 列車 → 速度フィードバック` を図示。
- Slide 2: `n_s=120f/p`、滑り、二次入力、トルク、車輪速度、駆動力、加速度までを一連で図示。
- Slide 3: 速度フィードバック、PI/PID、閉ループ・偏差伝達関数、3301点シミュレーションの代表値を図示。
- Slide 4: 固定EXAM_ALIGNMENT 6問・16答案要素と出典・境界を明示。
- 力行 `P>0,T>0`、回生 `P<0,T<0` の符号規約: `PASS`
- 教材用速度指令を実速度曲線として扱っていない: `PASS`
- 変換器損失は系列SPEC未指定のため基準モデルでは理想変換器として扱う旨を明示: `PASS`

## 数値整合
`22_integrated_route_simulation_calculation_qa.md` と照合。

- rows: `3301 / PASS`
- max speed: `39.367 m/s / PASS`
- max consumption: `4383.698 kW / PASS`
- max regeneration: `2209.887 kW / PASS`
- 力行点: `1828 / PASS`
- 回生点: `1149 / PASS`
- t=120 s代表点: `PASS`
- t=210 s代表点: `PASS`

## ファイルQA
GitHub正本へ生成した同一PowerPointについて、GitHub Actionsで構造QAを実行。

- `python-pptx` 再読込: `PASS`
- slide count: `4 / PASS`
- aspect ratio: `16:9 / PASS`
- slide bounds外shape: `0 / PASS`
- `unzip -t`: `PASS`、圧縮データエラー `0`
- GitHub正本のPPTX blob: `042b2865153e1a4d6d1f0e700a7b5c12b97b8556`
- file size: `39338 bytes`

同一source scriptのローカル生成物をLibreOffice headlessでPDF化し、全4枚をレンダリングして目視確認。

- LibreOffice PPTX→PDF: `PASS`
- 4ページ・16:9: `PASS`
- clipping / overlap: `0 / PASS`
- `pdftotext`: replacement character `0`、`(cid:)` `0`

## 結論
`PASS / topic_22_powerpoint_complete / IN_PROGRESS`。

全成果物が揃ったため、次工程は固定6問・16答案要素の独立再解答。独立再解答より前に固定過去問の個別正答を保存しない。
