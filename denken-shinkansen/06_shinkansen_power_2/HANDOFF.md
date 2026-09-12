# HANDOFF - 新幹線・電験二種「電力」

更新日: 2026-09-13

## 現在地

active topic: `01 新幹線を電力系統から見てみる`

状態: `topic_01_revision_materials_synced`

完成数は `0 / 22`。初回完成後独立再解答は正式選定5問中3問PASS、2問FAILだった。今回、FAIL原因になった教材不足3点だけを解説本文へ補強し、解説PDFへ同期した。再独立解答は未実施のため、まだ `completed` ではない。

source Markdown:
- `topics/01_power_system_view/01_power_system_view.md`
- `topics/01_power_system_view/01_power_system_view_practice.md`
- `topics/01_power_system_view/01_power_system_view_independent_reanswer.md`

主要成果物:
- `topics/01_power_system_view/01_power_system_view_explanation.pdf`
- `topics/01_power_system_view/01_power_system_view_practice.pdf`
- `topics/01_power_system_view/01_power_system_view_images.pptx`

## 正式選定した公式過去問

- H29 一次 電力 問6
- R5 一次 電力 問4
- R4 二次 電力・管理 問3
- R5 二次 電力・管理 問4
- R6 二次 電力・管理 問4

一次2問＋二次記述3問。二種品質ゲートの「一次・二次合わせて原則5問以上」「二次対象論点では記述式を含める」を満たす。

## 初回完成後独立再解答

PASS:
- R4 二次 電力・管理 問3
- R5 二次 電力・管理 問4
- R6 二次 電力・管理 問4

FAIL:
- H29 一次 電力 問6
  - タービン発電機の直軸過渡リアクタンス代表範囲が教材内に不足
- R5 一次 電力 問4
  - 駆動点インピーダンスと節点インピーダンス行列の関係が不足
  - 短絡容量と系統の強さ・電圧維持能力の関係が不足

`EXAM_ALIGNMENT_SPEC.md` の「教材外知識で補って解いた場合はFAIL」に従い、初回判定は3/5 PASSで `NEEDS_REVISION`。

## 今回の補強

既存Topic 01の範囲内で、次の3点だけを追加した。

1. H29一次問6で必要な、タービン発電機の直軸過渡リアクタンス `X_d'` の代表範囲 `0.2～0.4 p.u.`
2. `V = Z_bus I` における対角要素 `Z_kk` と駆動点インピーダンスの関係
3. `S_sc = S_B/|Z_th,pu|`、`ΔV≈Z_thΔI` を用いた、短絡容量と系統の強さ・電圧維持能力の関係

Topic 08の変圧器固有論、Topic 12の本格潮流、Topic 16の故障種別・対称座標法、Topic 20の安定度へは範囲を広げていない。

## 成果物同期

`01_power_system_view.md`:
- 第3節に `X_d' = 0.2～0.4 p.u.` の代表知識を追加
- 第7節に `Z_bus` と駆動点インピーダンスの関係を追加
- 第7節に短絡容量と系統の強さ・電圧維持能力の関係を追加
- EXAM_ALIGNMENTと本文節マッピングを同期

`01_power_system_view_explanation.pdf`:
- 上記3点を同期
- A4縦4ページ
- 全4ページをレンダリング確認し、文字切れ・重なり・欠落なし

練習問題、練習PDF、PowerPointは今回変更していない。

## 次に行うこと

同じ正式選定5問を、補強済み教材だけで再度独立解答する。保存済み正答や制作前独立検証を解答根拠に使わない。

5/5 PASSかつ教材外知識補完0件なら最終QAへ進み、その場合だけTopic 01を `completed` にする。