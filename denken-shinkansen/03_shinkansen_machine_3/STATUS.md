# STATUS - 新幹線・電験三種「機械」

更新日: 2026-09-15

## 状態
- active_series: `03_shinkansen_machine_3`
- exam_aligned_completed_topics: 8 / 16
- current_status: `topic_09_exam_alignment_complete`
- last_completed_topic: `08 N700Sのモーターはなぜ小さくできた？`
- active_topic: `09 新幹線はどうやって電気で止まる？`
- next_start: Topic 09の解説本文＋基礎・本試験標準・複合の3段階例題を作成し、固定5問の要求事項を全件本文へマッピングする

## 新品質ゲート進捗
- [x] 01 架線25kVをそのままモーターに入れたらどうなる？ — 品質ゲートPASS / completed
- [x] 02 初代0系はどうやって走っていた？ — 品質ゲートPASS / completed
- [x] 03 直流モーターはどうやって速度を変える？ — 品質ゲートPASS / completed
- [x] 04 300系でモーターが全部変わった — 品質ゲートPASS / completed
- [x] 05 誘導電動機はなぜ勝手に回る？ — 品質ゲートPASS / completed
- [x] 06 新幹線はどうやって速度を変えている？ — 品質ゲートPASS / completed
- [x] 07 GTO→IGBT→SiCで何が変わった？ — 品質ゲートPASS / completed
- [x] 08 N700Sのモーターはなぜ小さくできた？ — 品質ゲートPASS / completed
- [ ] 09〜16 — 未完了

## Topic 09 EXAM_ALIGNMENT
品質ゲート対象は、系列SPECの固定範囲だけで完結する公式過去問5問で固定する。

1. R8上 機械 問11 — 機械出力、力、速度、効率
2. R2 機械 問11 — 回転体の運動エネルギー、減速、平均出力
3. H29 機械 問2 — 発電機作用、回生時の電流・トルク方向、誘導起電力と電源電圧
4. H25 機械 問10 — 回転速度、角速度、出力、トルク、回転体の運動エネルギー
5. H24 機械 問11 — 慣性モーメント、発電制動、回生制動、エネルギーの処理先

制作前答案列: `(4), (3), (2), (5), (1)`

制作前公式照合: `5 / 5 PASS`

教材外・固定範囲外知識による補完: `0件`

固定EXAM_ALIGNMENT変更: `0件`

R7上問3、R6上問3、R4上問1、H27問2、H26問16、H29問3は回生・発電機運転に関連するが、かご形/巻線形構造・材料、スリップリング、直流機始動/速度制御、発電機外部特性、チョッパ、二次入力/二次銅損などTopic 09固定範囲外を正答に必要とするため除外する。

## Topic 09 固定範囲
系列SPECどおり以下だけを扱う。

- 発電機作用
- 誘導機の発電機運転
- 回生ブレーキ
- 発電ブレーキ
- 電力
- トルク
- 回転方向
- 制動力
- 運動エネルギー
- 効率
- 四象限運転の概念
- 運動エネルギー、回生可能電力量、モーター出力、制動時間、効率を含めた回収電力量の計算

四象限運転は概念図までとし、詳細解析は扱わない。昇圧チョッパ、誘導機等価回路、二次入力・二次銅損、ベクトル制御、直流機の始動・速度制御等を件数合わせで追加しない。未確認実車値は追加しない。

## Topic 09 成果物・品質状態
### 解説source
`topics/09_regenerative_braking/09_regenerative_braking.md`

- 制作前EXAM_ALIGNMENT完成
- 公式過去問5問を固定
- 制作前検証 `5 / 5 PASS`
- 教材外・固定範囲外知識による補完 `0件`
- 固定範囲外論点追加 `0件`
- 未確認実車値追加 `0件`

## Topic 08 EXAM_ALIGNMENT
品質ゲート対象は、系列SPECの固定範囲だけで完結する公式過去問4問・5小問で固定する。

1. R6上 機械 問15(a) — 周波数・極数・同期速度・滑り、問題文条件 `T∝s`
2. R5下 機械 問15(a)(b) — 同期速度・滑り周波数・インバータ一次周波数制御・回転速度
3. R5上 機械 問4 — 周波数・極数・滑り・実回転速度・出力・トルク
4. R2 機械 問15(b) — 周波数変更時の同期速度・実回転速度、同一出力トルク条件から出力比較

制作前答案列: `(2), (2), (1), (2), (1)`

制作前公式照合: `5 / 5 PASS`

完成後独立答案列: `(2), (2), (1), (2), (1)`

完成後公式照合: `5 / 5 PASS`

教材外・固定範囲外知識による補完: `0件`

固定EXAM_ALIGNMENT変更: `0件`

5問へ件数合わせするため、等価回路、二次入力・二次銅損、二次抵抗制御、ベクトル制御、始動法等は追加しない。直近年度から遡って確認した関連問題のうち、Topic 08固定範囲だけで設問全体または独立小問を完結できるものは上記4問である。

## Topic 08 固定範囲
系列SPECどおり以下だけを扱う。

- 誘導電動機
- 極数
- 同期速度
- 周波数
- 回転速度
- すべり
- トルク
- 出力
- 高速回転
- 小型軽量化
- SiC主変換装置との関係
- `Ns = 120f / P`
- 4極と6極の同期速度・必要周波数比較

実車記述はJR東海・メーカー一次資料に基づく。N700Sでは新幹線初の6極駆動モーター、4極から6極への変更、小型軽量化、N700A比で1台車当たり約140 kgの軽量化、SiC素子使用主変換装置を一次資料で確認済み。確認できていない主電動機回転速度・寸法等は推測しない。単純に「6極にすれば小さくなる」と一般化しない。

## Topic 08 成果物・品質状態
### 解説source
`topics/08_n700s_motor/08_n700s_motor.md`

- 制作前EXAM_ALIGNMENT完成
- 公式過去問4問・5小問を固定
- 制作前検証 `5 / 5 PASS`
- 解説本文＋3段階例題完成
- 固定4問・5小問の本文マッピング `4問・5小問 / 全件`
- 完成後独立再解答 `5 / 5 PASS`
- 最終QA `PASS`
- JR東海・メーカー一次資料で6極化・小型軽量化・SiC主変換装置を確認
- 固定範囲外知識による補完 `0件`
- 固定範囲外論点追加 `0件`
- 未確認実車値追加 `0件`

### 解説PDF
`topics/08_n700s_motor/08_n700s_motor_explanation.pdf`

- A4縦4ページ
- 200 dpi全4ページ表示QA `4 / 4 PASS`
- 文字抽出QA `PASS`
- 3段階例題・固定4問5小問への教材内マッピングを収録
- 固定範囲外論点の追加 `0件`
- 未確認実車値の追加 `0件`

### 解説PDF QA記録
`topics/08_n700s_motor/08_n700s_motor_explanation_pdf_qa.md`

### 練習問題source
`topics/08_n700s_motor/08_n700s_motor_practice.md`

- 全12問・全問五肢択一
- 基礎3／本試験標準7／複合・応用2
- 固定EXAM_ALIGNMENT 4問・5小問へ全件接続
- 独立計算・論理QA `12 / 12 PASS`
- 正答一意性 `12 / 12 PASS`
- 固定範囲外論点追加 `0件`
- 未確認実車値追加 `0件`

### 練習PDF
`topics/08_n700s_motor/08_n700s_motor_practice.pdf`

- A4縦3ページ
- 全12問・全問五肢択一＋完全解説
- 200 dpi全3ページ表示QA `3 / 3 PASS`
- 文字抽出QA `PASS`
- 固定EXAM_ALIGNMENT 4問・5小問を維持
- 固定範囲外論点追加 `0件`
- 未確認実車値追加 `0件`

### 練習PDF QA記録
`topics/08_n700s_motor/08_n700s_motor_practice_pdf_qa.md`

### 解説画像PowerPoint
`topics/08_n700s_motor/08_n700s_motor_images.pptx`

- 16:9・4枚
- 固定EXAM_ALIGNMENT 4問・5小問の判定軸、4極/6極と周波数・同期速度、滑り・出力・トルク、N700Sの6極主電動機とSiC主変換装置の関係を可視化
- 外部画像不使用（PowerPoint図形で独自作成）
- 全4スライド表示QA `4 / 4 PASS`
- overflow `0件`
- PowerPoint ZIP整合性 `PASS`
- 固定範囲外論点追加 `0件`
- 未確認実車値追加 `0件`

### PowerPoint QA記録
`topics/08_n700s_motor/08_n700s_motor_powerpoint_qa.md`

## Topic 08 最終QA
- 必須成果物の実在: `PASS`
- 固定EXAM_ALIGNMENT 4問・5小問: `PASS`
- 完成後独立再解答: `5 / 5 PASS`
- 解説PDF表示QA・文字抽出QA: `PASS`
- 練習PDF表示QA・文字抽出QA: `PASS`
- PowerPoint表示QA・overflow・ZIP整合性: `PASS`
- source進捗整合: `PASS`
- 固定範囲境界: `PASS`
- 教材外・固定範囲外知識による補完: `0件`
- 固定範囲外論点の追加: `0件`
- 未確認実車値の追加: `0件`
- 判定: `PASS / completed`
- 完成数: `8 / 16`

## Topic 07 EXAM_ALIGNMENT
品質ゲート対象は公式過去問5問で固定する。

1. R5上 機械 問10 — IGBTとパワーMOSFETの逆方向導通、電圧駆動、ユニポーラ/バイポーラ、テイル電流、SiC
2. R2 機械 問10 — IGBT/MOSFETの電圧駆動、キャリア蓄積、スイッチング損失、オン状態抵抗、SiC
3. H30 機械 問11 — IGBTのオンオフ制御、逆並列ダイオード、インバータ、PWM
4. H29 機械 問10 — ダイオード、サイリスタ、MOSFET、IGBTの定常オン・オフと逆方向電流
5. H23 機械 問10 — 整流ダイオード、サイリスタ、パワートランジスタ、MOSFET、IGBTの役割・特性

制作前検証答案列: `(1), (2), (5), (2), (3)`

制作前公式照合: `5 / 5 PASS`

完成後独立答案列: `(1), (2), (5), (2), (3)`

完成後公式照合: `5 / 5 PASS`

教材外・固定範囲外知識による補完: `0件`

固定EXAM_ALIGNMENT変更: `0件`

## Topic 07 固定範囲
系列SPECどおり以下だけを扱う。

- ダイオード、サイリスタ、GTO、IGBT、MOSFETの基本、SiC
- オン状態、オフ状態
- 導通損失、スイッチング損失、スイッチング周波数
- 発熱、冷却、変換効率
- `損失減少 → 発熱減少 → 冷却装置小型化 → 主変換装置小型化 → 車両軽量化`

半導体物性の詳細には深入りしない。バンド構造、結晶構造、キャリア移動度等を独立論点として追加しない。新幹線側の実際の採用素子・回路方式は一次・技術資料で確認した内容だけを書く。未確認実車値は追加しない。

## Topic 07 成果物・品質状態
### 解説source
`topics/07_power_semiconductors/07_power_semiconductors.md`

- 制作前EXAM_ALIGNMENT完成
- 公式過去問5問を固定
- 制作前検証 `5 / 5 PASS`
- 解説本文＋3段階例題完成
- 固定5問の本文マッピング `5 / 5`
- 完成後独立再解答 `5 / 5 PASS`
- 最終QA `PASS`
- 教材外・固定範囲外知識による補完 `0件`
- 固定範囲外追加 `0件`
- 未確認実車値追加 `0件`

### 解説PDF
`topics/07_power_semiconductors/07_power_semiconductors_explanation.pdf`

- A4縦5ページ
- 200 dpi全5ページ表示QA `PASS`
- 文字抽出QA `PASS`
- 3段階例題・固定5問への教材内マッピングを収録
- 固定範囲外論点の追加 `0件`
- 未確認実車値の追加 `0件`

### 解説PDF QA記録
`topics/07_power_semiconductors/07_power_semiconductors_explanation_pdf_qa.md`

### 練習問題source
`topics/07_power_semiconductors/07_power_semiconductors_practice.md`

- 全12問・全問五肢択一
- 基礎3／本試験標準7／複合・応用2
- 固定EXAM_ALIGNMENT 5問へ全件接続
- 独立計算・論理QA `12 / 12 PASS`
- 正答一意性 `12 / 12 PASS`
- 固定範囲外論点追加 `0件`
- 未確認実車値追加 `0件`

### 練習PDF
`topics/07_power_semiconductors/07_power_semiconductors_practice.pdf`

- A4縦4ページ
- 全12問・全問五肢択一＋完全解説
- 200 dpi全4ページ表示QA `4 / 4 PASS`
- 文字抽出QA `PASS`
- 固定EXAM_ALIGNMENT 5問・固定範囲を維持
- 固定範囲外論点の追加 `0件`
- 未確認実車値の追加 `0件`

### 練習PDF QA記録
`topics/07_power_semiconductors/07_power_semiconductors_practice_pdf_qa.md`

### 解説画像PowerPoint
`topics/07_power_semiconductors/07_power_semiconductors_images.pptx`

- 16:9・4枚
- 固定EXAM_ALIGNMENT 5問の判定軸、導通損失・スイッチング損失、インバータ＋逆並列ダイオード＋PWM、GTO→IGBT→SiCと小型軽量化因果を可視化
- 外部画像不使用（PowerPoint図形で独自作成）
- 全4スライド表示QA `4 / 4 PASS`
- overflow `0件`
- PowerPoint ZIP整合性 `PASS`
- 固定範囲外論点の追加 `0件`
- 未確認実車値の追加 `0件`

### PowerPoint QA記録
`topics/07_power_semiconductors/07_power_semiconductors_powerpoint_qa.md`

## Topic 07 最終QA
- 必須成果物の実在: `PASS`
- 固定EXAM_ALIGNMENT 5問: `PASS`
- 完成後独立再解答: `5 / 5 PASS`
- 解説PDF表示QA・文字抽出QA: `PASS`
- 練習PDF表示QA・文字抽出QA: `PASS`
- PowerPoint表示QA・overflow・ZIP整合性: `PASS`
- source進捗整合: `PASS`
- 固定範囲境界: `PASS`
- 教材外・固定範囲外知識による補完: `0件`
- 固定範囲外論点の追加: `0件`
- 未確認実車値の追加: `0件`
- 判定: `PASS / completed`
- 完成数: `7 / 16`

## Topic 06 完了要約
Topic 06「新幹線はどうやって速度を変えている？」は品質ゲートPASS / completed。固定5問・7小問の完成後独立再解答 `7 / 7 PASS`、解説PDF・練習PDF・PowerPoint・表示QA・範囲境界を確認済み。教材外・固定範囲外知識による補完 `0件`。