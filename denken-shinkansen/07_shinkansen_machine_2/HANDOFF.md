# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-16

## 現在地
Topic 01〜09は最終QAまで `PASS / completed`。

完成数: `9 / 22`

active topic: `10 新幹線はモーターを発電機にして止まる`

current status: `topic_10_powerpoint_complete`

## Topic 10 固定範囲
- 力行
- 回生
- 誘導機の発電機運転
- 四象限運転
- DCリンク
- PWMコンバータ
- 架線への電力回生
- 回生効率

固定電力フロー:
`車輪 → 誘導電動機 → インバータ → DCリンク → コンバータ → 架線`

境界:
- H27一次問3の回生失効・電力貯蔵・運行間隔は追加しない。
- H24二次問3の無効電流・出力可能領域は追加しない。
- Topic 11のパワー半導体損失・熱設計は追加しない。
- Topic 16の蓄電池・DCリンク給電は追加しない。
- 未確認の新幹線実車回生効率を真値として追加しない。

## Topic 10 固定EXAM_ALIGNMENT
固定過去問:
- R06 一次 機械 問2: (1),(2)
- R05 一次 機械 問2: (1),(2),(3),(5)
- H28 一次 機械 問5: (3)〜(5)
- H27 一次 機械 問3: (1),(2)
- H24 二次 機械・制御 問3: (1),(2)a〜c

一次4問＋二次記述1問、計5問。ゲート対象15答案要素。

制作前独立検証:
- R06 一次 機械 問2: `2 / 2 PASS`
- R05 一次 機械 問2: `4 / 4 PASS`
- H28 一次 機械 問5: `3 / 3 PASS`
- H27 一次 機械 問3: `2 / 2 PASS`
- H24 二次 機械・制御 問3: `4 / 4 PASS`
- 合計: `15 / 15 PASS`

主要確認内容:
- R06: 誘導電動機、`s<0` による回生制動
- R05: 制動時の運動エネルギー→電気エネルギー変換、回生ブレーキ
- H28: 電力回生、誘導電動機、滑り
- H27: 直流側→交流側の逆変換、架線回生電力を力行車が消費
- H24二次: `Vv=VL+jXI`、`I=30 A`、`Vv≈101 V`、`K≈0.949`、`tanφ=0.120`

## Topic 10 source
- `topics/10_regenerative_braking_four_quadrant/10_regenerative_braking_four_quadrant.md`

source完成内容:
- 公式一次4問＋二次1問の固定EXAM_ALIGNMENT
- 15答案要素の要求知識・式・設問型
- §1 試験論点
- §2 `N_s=120f/p`、`s=(N_s-N)/N_s`、`s<0` の発電機運転
- §3 力行／回生の電力フロー
- §4 `P_m=Tω` と四象限運転
- §5 `Vv=VL+jXI`、`P=VL I`、PWM変調率
- §6 回生効率
- 頻出ミス・過去問接続・公式まとめ
- 基礎・本試験標準・複合の3段階例題
- 固定5問・15答案要素の本文マッピング
- 固定範囲外小問の除外理由

例題上の効率・電圧等は教材上の設定値であり、未確認実車値として扱っていない。

## Topic 10 解説PDF
- `topics/10_regenerative_braking_four_quadrant/10_regenerative_braking_four_quadrant_explanation.pdf`: `completed`
- A4縦4ページ
- 200 dpi全4ページ Visual QA: `4 / 4 PASS`
- 文字抽出QA: `PASS` / Unicode置換文字 `0件` / `□`置換 `0件`
- 固定一次4問＋二次1問・15答案要素: 維持
- 3段階例題: `3 / 3`収録
- 固定範囲外追加: `0件`
- 未確認実車値追加: `0件`
- SHA-256: `4fbb34ed2d2f8d88be5b685ddeaba697ca1177cfa552777e065ddde66d14be77`

## Topic 10 練習問題source
- `topics/10_regenerative_braking_four_quadrant/10_regenerative_braking_four_quadrant_practice.md`: `completed`
- 一次試験型10問: 全問五肢択一
- 二次試験型5問: 記述・途中式／前提／単位／検算または論証付き
- 独立計算・論理QA: `15 / 15 PASS`
- 一次正答一意性: `10 / 10 PASS`
- 固定5過去問・15答案要素: 全件接続
- 固定範囲外追加: `0件`
- 未確認実車値追加: `0件`

主な数値再計算:
- `s=(1800-1890)/1800=-0.05`
- `0.95×0.98×0.97=0.90307`
- `V_L=200 V, P=6.0 kW, X=0.40 Ω` → `I=30 A`, `V_v=200.36 V`, `K=0.9445`
- 二次型 `V_L=100 V, P=3.0 kW, X=0.40 Ω, E_d=150 V` → `I=30 A`, `V_v=100.717 V`, `K=0.94957`, `tanφ=0.120`

## Topic 10 練習PDF
- `topics/10_regenerative_braking_four_quadrant/10_regenerative_braking_four_quadrant_practice.pdf`: `completed`
- A4縦6ページ
- 一次10問＋二次5問・完全解説を収録
- 200 dpi全6ページ Visual QA: `6 / 6 PASS`
- 文字抽出QA: `PASS` / Unicode置換文字 `0件` / `□`置換 `0件`
- 数値・論理再検算: `15 / 15 PASS`
- 一次正答一意性: `10 / 10 PASS` を維持
- 固定5過去問・15答案要素: 維持
- 固定範囲外追加: `0件`
- 未確認実車値追加: `0件`
- SHA-256: `b18a4dafb0123a73d6b87ccaf75bd887cf7dcee6e4d510e9b6310fa5ecabc33d`

## Topic 10 解説画像PowerPoint
- `topics/10_regenerative_braking_four_quadrant/10_regenerative_braking_four_quadrant_images.pptx`: `completed`
- 16:9・4枚
- 固定電力フロー、`s<0` 発電機運転、四象限、H24二次型フェーザ/PWM計算、回生効率を可視化
- Visual QA: `4 / 4 PASS`（1600×900相当）
- overflow: `0件`
- ZIP整合性: `PASS`
- 固定5過去問・15答案要素: 維持
- 固定範囲外追加: `0件`
- 未確認実車値追加: `0件`
- SHA-256: `77807ae3a7bbd10e7110a79316dacad7eaedb609d2ec4a482cfe473a5b5c310d`

## 次に行うこと
Topic 10の完成後独立再解答を行う。

1. 固定5過去問・15答案要素を変更しない。
2. 保存済み正答を先に見ず、完成教材だけで一次4問＋二次1問を再解答する。
3. 教材外知識で補完した場合はFAILとする。
4. H27/H24の除外小問、Topic 11/16、未確認実車値を追加しない。
5. 独立再解答後にSTATUS/HANDOFFを同期し、最終QAへは先行しない。
