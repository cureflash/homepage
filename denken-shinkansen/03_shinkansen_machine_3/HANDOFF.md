# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-18

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は `15 / 16`。Topic 01〜15は品質ゲートPASSでcompleted。active topicは16「同期機って新幹線には使わないの？」。

Topic 16は制作前EXAM_ALIGNMENT固定後、解説source本文・解説PDF・練習問題source・練習PDF・解説画像PowerPointまで完成したが、完成後blind独立再解答は `5 / 6 PASS`。R5下 機械 問5のみ、`V = E + jXsI` と `jXsI` が `I` より90°進む関係までは教材だけで判断できた一方、選択肢図で `jXsI` の始点・終点を逆に読み、blind答案(5)、公式解答(3)となった。MASTER SPEC / EXAM_ALIGNMENT SPECの品質ゲートにより未完了、判定は `NEEDS_REVISION` のまま。

今回、固定範囲・固定EXAM_ALIGNMENTを変更せずsourceレベルの補強を実施した。解説sourceでは `V = E + jXsI` を尾→頭で読む手順を明記し、「Eの終点を `jXsI` の始点とし、その終点がVの終点に一致する」「Vの終点→Eの終点は逆向きで誤り」と固定した。練習sourceの問10も、同じ始点・終点判定を直接問う五肢択一へ改訂し、独立論理QA・正答一意性QAともPASS。仕様外論点追加0件、固定EXAM_ALIGNMENT変更0件。

状態: `topic_16_vector_source_remediation_complete / IN_PROGRESS`

## Topic 16 固定範囲
- 同期機
- 同期発電機
- 同期電動機
- 回転磁界
- 同期速度
- 極数
- 周波数
- 界磁
- 励磁
- 電機子
- 力率
- 電機子反作用
- 同期リアクタンス
- V曲線の基本
- 並行運転の基本

同期速度は `Ns = 120f / P`。L0系リニア同期モータは、系列SPECどおり回転同期機を直線状に展開したものとして概念説明にだけ使用する。四機比較は固定子、回転子、励磁、回転磁界、同期速度、すべり、整流子、ブラシ、速度制御、発電機運転、主な用途に限定する。

## Topic 16 固定EXAM_ALIGNMENT
- R7上 機械 問5 — 同期発電機の並行運転条件 / 周波数 / 電圧 / 位相 / 同期検定器
- R5下 機械 問5 — 同期電動機 / 遅れ力率 / 誘導起電力 / 同期リアクタンス / ベクトル図
- R5下 機械 問6 — 同期発電機 / 同期速度 / 極数 / 周波数 / 並行運転
- R4上 機械 問4 — 並行運転 / 起電力 / 界磁 / 回転速度 / 同期検定器 / 無効横流
- H28 機械 問5 — 同期電動機 / V曲線 / 界磁電流 / 電機子電流 / 力率
- H26 機械 問5 — 同期発電機 / 電機子反作用 / 力率 / 同期リアクタンス

品質ゲート対象: `6問・6答案要素`。
制作前検証・公式解答照合: `6 / 6 PASS`。
固定過去問要求事項の本文マッピング: `6 / 6 PASS`。
3段階例題: `PASS`。
解説source QA: `PASS`。
ベクトル尾→頭・始点終点判定source QA: `PASS`。
練習問題source: 問10を尾→頭判定問題へ改訂 / `12 / 12 PASS` / 正答一意性 `12 / 12 PASS`。
解説PDF: 既存版あり / source改訂未反映 / `REGEN_REQUIRED`。
練習PDF: 既存版あり / practice source改訂未反映 / `REGEN_REQUIRED`。
PowerPoint: 既存版あり / source改訂未反映 / `REGEN_REQUIRED`。
完成後blind独立再解答: 旧版で `5 / 6 PASS / NEEDS_REVISION`。派生成果物同期後に再実施する。
固定範囲外知識による答案補完: `0件`。
固定EXAM_ALIGNMENT変更: `0件`。

非選定:
- R7下 機械 問5 — 始動・制動巻線が固定範囲外。
- R7下 機械 問6 — 無負荷・短絡特性を使う試験法が固定範囲外。
- R6上 機械 問5 — 始動法が固定範囲外。
- R5上 機械 問5 — 短絡比が固定範囲外。
- R4下 機械 問4 — V曲線は範囲内だが、完答に同期調相機が必要で固定範囲外。

source: `topics/16_synchronous_machine/16_synchronous_machine.md`
解説本文: ベクトル図の尾→頭判定を補強済み。
解説PDF: `topics/16_synchronous_machine/16_synchronous_machine_explanation.pdf` 既存版は改訂前sourceに対応。
解説PDF QA: `topics/16_synchronous_machine/16_synchronous_machine_explanation_pdf_qa.md` は改訂前PDFに対する記録。
練習問題source: `topics/16_synchronous_machine/16_synchronous_machine_practice.md` 問10改訂済み（12問を維持）。
練習PDF: `topics/16_synchronous_machine/16_synchronous_machine_practice.pdf` 既存版は改訂前sourceに対応。
練習PDF QA: `topics/16_synchronous_machine/16_synchronous_machine_practice_pdf_qa.md` は改訂前PDFに対する記録。
解説画像PowerPoint: `topics/16_synchronous_machine/16_synchronous_machine_images.pptx` 既存版は改訂前sourceに対応。
PowerPoint QA: `topics/16_synchronous_machine/16_synchronous_machine_powerpoint_qa.md` は改訂前PowerPointに対する記録。
完成後blind独立再解答: `topics/16_synchronous_machine/16_synchronous_machine_independent_reanswer.md` / 旧版 `5 / 6 PASS / NEEDS_REVISION`。

## Topic 15
Topic 15「車内の照明・空調にはどれだけ電気が必要？」は最終QA再判定PASSで `completed`。技術内容、必須成果物、表示QA、固定EXAM_ALIGNMENT＋完成後blind独立再解答、進捗記録整合、固定範囲境界は全件PASS。Webカタログにも登録済み。

固定EXAM_ALIGNMENT:
- R8上 機械 問17(a)(b)
- R7上 機械 問12
- R7上 機械 問17(a)(b)
- R6下 機械 問17(a)(b)
- R6上 機械 問17(a)(b)
- R4上 機械 問17(a)(b)
- R2 機械 問12

品質ゲート対象は `7問・12答案要素`。完成後blind独立再解答 `12 / 12 PASS`。成果物は `topics/15_lighting_heating/` に保存済み。

## Topic 14
Topic 14「停電してもN700Sが走れるのはなぜ？」は最終QA再判定PASSで `completed`。固定EXAM_ALIGNMENTはH30 機械 問12、完成後blind独立再解答 `1 / 1 PASS`。成果物は `topics/14_battery/` に保存済み。

## Topic 13
Topic 13「新幹線は主電動機以外もモーターだらけ？」は最終QA再判定PASSで `completed`。固定EXAM_ALIGNMENT 5問、完成後blind独立再解答 `5 / 5 PASS`。成果物は `topics/13_auxiliary_motors/` に保存済み。

## 次工程
`topics/16_synchronous_machine/16_synchronous_machine_explanation.pdf` にsource改訂を反映する。固定範囲・固定EXAM_ALIGNMENTを変更せず、既存A4縦構成を維持して「Eの終点→Vの終点が `jXsI`」という尾→頭判定を入れ、表示QA・文字抽出QAを再実施する。練習PDF・PowerPointの同期とblind再解答はその後に行う。