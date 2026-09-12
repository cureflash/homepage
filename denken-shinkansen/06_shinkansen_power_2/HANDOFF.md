# HANDOFF - 新幹線・電験二種「電力」

更新日: 2026-09-13

## 現在地

active topic: `01 新幹線を電力系統から見てみる`

状態: `topic_01_reanswer_pass`

完成数は `0 / 22`。初回完成後独立再解答は正式選定5問中3問PASS、2問FAILだったが、不足3点の補強後に同じ5問を再独立解答し、`5 / 5 PASS`、教材外知識補完 `0件` となった。

最終QAは未実施のため、まだ `completed` ではない。

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

## 補強

既存Topic 01の範囲内で、次の3点だけを追加済み。

1. タービン発電機の直軸過渡リアクタンス `X_d'` の代表範囲 `0.2～0.4 p.u.`
2. `V = Z_bus I` における対角要素 `Z_kk` と駆動点インピーダンスの関係
3. `S_sc = S_B/|Z_th,pu|`、`ΔV≈Z_thΔI` を用いた、短絡容量と系統の強さ・電圧維持能力の関係

Topic 08の変圧器固有論、Topic 12の本格潮流、Topic 16の故障種別・対称座標法、Topic 20の安定度へは範囲を広げていない。

## 再独立解答

補強済み教材だけを使って5問を再解答し、全問の解答確定後に公式解答と照合した。

- H29一次問6: `[ハ, ヘ, ニ, ヌ, ル]` — PASS
- R5一次問4: `[イ, ロ, ヘ, ヨ, ニ]` — PASS
- R4二次問3: `sinθ_d=-0.260`, `Y_d=0.162 p.u.` — PASS
- R5二次問4: `V_s≈6.58 kV`, `Q_1≈212 kvar` — PASS
- R6二次問4: `400/400 A`, `406/394 A`, `I_sc≈8.34 kA` — PASS

完全PASS: `5 / 5`

教材外知識補完: `0件`

詳細な途中式は `01_power_system_view_independent_reanswer.md` に記録済み。

## 次に行うこと

最終QAを行う。

確認対象:
- source Markdownの状態・EXAM_ALIGNMENT・再独立解答記録
- 解説PDF
- 練習Markdown / 練習PDF
- PowerPoint
- 成果物相互の整合
- 正式選定5問の再独立解答 `5 / 5 PASS`

全項目PASSした場合のみTopic 01を `completed` にし、完成数を `1 / 22` に更新する。