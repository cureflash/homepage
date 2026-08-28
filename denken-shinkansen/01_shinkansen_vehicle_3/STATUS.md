# STATUS - 新幹線車両・電験三種

更新日: 2026-08-29

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 0 / 38
- legacy_artifacts_present: 3 / 38
- current_status: re_audit_required
- next_topic: `01 プラレール① 電気編` の試験対応再構築

## 新品質基準
2026-08-29から `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md` を最優先仕様とする。

テーマは成果物ファイルが存在するだけでは完了としない。公式過去問マッピング、電験解説サイト比較、本試験標準の解説・例題・練習問題、独立過去問再解答を含む試験対応品質ゲートをPASSしたテーマだけを完了数へ計上する。

## 再監査対象

以下3テーマは旧仕様で成果物が存在するが、新しい試験対応品質ゲートは未実施のため完成扱いを解除する。

- [ ] 01 プラレール① 電気編
  - legacy: 解説PDF / 練習PDF / PowerPoint / source Markdownあり
  - required: EXAM_ALIGNMENT作成、公式過去問5問原則調査、解説補強、練習問題補強、独立過去問再解答
- [ ] 02 プラレール② 機械編
  - legacy: 解説PDF / 練習PDF / PowerPoint / source Markdownあり
  - required: 同上
- [ ] 03 0系① 主変圧器
  - legacy: 解説PDF / 練習PDF / PowerPoint / source Markdownあり
  - required: 変圧器の電験三種過去問を基準に、原理・理論・巻数比・損失・効率・電圧変動率・典型解法を再構築

## 次
- [ ] `01 プラレール① 電気編` を新しい試験対応品質仕様で再構築する

## 系列遷移
`01` の38テーマが新品質基準で完了したら、`MASTER_SPEC.md` の制作順に従って `02_shinkansen_power_3` へ自動遷移する。
