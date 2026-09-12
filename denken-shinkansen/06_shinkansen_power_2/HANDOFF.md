# HANDOFF - 新幹線・電験二種「電力」

更新日: 2026-09-13

## 現在地

completed topic: `01 新幹線を電力系統から見てみる`

active topic: `02 信濃川の水で新幹線を何本走らせられる？`

状態: `topic_01_completed`

完成数は `1 / 22`。

Topic 01は、制作前EXAM_ALIGNMENT、解説本文、3段階例題、練習15問、解説PDF、練習PDF、解説画像PowerPoint、完成後独立再解答、最終QAまで完了した。

source Markdown:
- `topics/01_power_system_view/01_power_system_view.md`
- `topics/01_power_system_view/01_power_system_view_practice.md`
- `topics/01_power_system_view/01_power_system_view_independent_reanswer.md`

主要成果物:
- `topics/01_power_system_view/01_power_system_view_explanation.pdf`
- `topics/01_power_system_view/01_power_system_view_practice.pdf`
- `topics/01_power_system_view/01_power_system_view_images.pptx`

## Topic 01 正式選定した公式過去問

- H29 一次 電力 問6
- R5 一次 電力 問4
- R4 二次 電力・管理 問3
- R5 二次 電力・管理 問4
- R6 二次 電力・管理 問4

一次2問＋二次記述3問。二種品質ゲートの「一次・二次合わせて原則5問以上」「二次対象論点では記述式を含める」を満たす。

## Topic 01 最終QA

判定: `PASS`

- 初回完成後独立再解答は3/5 PASSだった。
- 不足していた次の3点だけを既存Topic 01範囲内で補強した。
  1. タービン発電機の直軸過渡リアクタンス `X_d'` の代表範囲 `0.2～0.4 p.u.`
  2. `V = Z_bus I` における対角要素 `Z_kk` と駆動点インピーダンスの関係
  3. `S_sc = S_B/|Z_th,pu|`、`ΔV≈Z_thΔI` を用いた短絡容量と系統の強さ・電圧維持能力の関係
- 補強後、同じ5問を教材だけで再独立解答し `5 / 5 PASS`、教材外知識補完 `0件`。
- 解説PDFは補強内容を同期した現行版でレンダリングQA PASS。
- 練習PDFは現行blobが作成時から変更されておらず、作成時に全6ページをPDFium / pdftoppmの2系統でレンダリングQA済み。
- PowerPointは現行blobが作成時から変更されておらず、全4枚の画像レンダリング確認とoverflow検査PASS済み。
- 必須成果物とEXAM_ALIGNMENT記録の整合を確認した。
- Topic 08、12、16、20の本題および未確認実設備値は追加していない。

以上によりTopic 01を `completed` とした。

## 次に行うこと

Topic 02 `信濃川の水で新幹線を何本走らせられる？` の制作前EXAM_ALIGNMENTを行う。

- 電気技術者試験センター公式過去問を直近年度優先で調査する。
- 一次・二次を合わせて原則5問以上を正式選定する。
- 二次対象論点で確認できる場合は記述式を最低1問含める。
- 各問の要求知識、使用式、設問型、教材で必要な説明をsource Markdownへ記録する。
- 参考教材を最低2系統確認する。
- 過去問から必要範囲を確定する前に解説本文・成果物を作らない。