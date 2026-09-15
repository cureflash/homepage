# STATUS

updated: 2026-09-15
series: `06_shinkansen_power_2`
active_topic: `07`
theme: 三相電力をどう25kVの単相へ変える？
current_status: `topic_07_exam_alignment_complete`
completed_topics: `6 / 22`

## Topic 06 final result

Topic 06「275kVを受ける新幹線変電所の中身」は `PASS / completed`。固定5過去問は制作前・完成後とも `5 / 5問 PASS`、一次 `20 / 20小問`、二次 `3 / 3設問`、教材外補完・固定範囲外追加は0件。必須成果物・PDF/PPTX表示QA・source進捗整合もPASS済み。

## Topic 07 制作前EXAM_ALIGNMENT

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md` とGitHub現状をreconcileし、前回blockerを上位仕様の優先順位に基づいて解消した。

### 固定範囲

- 三相交流
- 単相負荷
- 相変換
- スコット結線
- 変形ウッドブリッジ結線
- ルーフ・デルタ結線
- 三相側不平衡
- 逆相電流
- フェーザ図
- 結線比較

### 正式過去問

現行公開公式アーカイブ内で、Topic 07固定範囲だけで問題全体を解け、かつ二種の一次・二次双方を含む2問を固定した。

1. 平成23年度 第二種一次「理論」問6
   - 三相対称交流の複素フェーザ、相間電流、フェーザ合成、実効値
   - 5空欄
2. 平成23年度 第二種二次「機械・制御」問2
   - スコット結線、主座/T座巻数比、一次電流、巻線容量、利用率
   - 記述計算

`MASTER_SPEC.md` / `EXAM_ALIGNMENT_SPEC.md` の「二種は一次・二次を合わせて原則5問以上」「固定範囲外を混ぜない」を適用し、科目横断はTopic 07固定論点そのものを問う問題だけに限定した。一次「電力」・二次「電力・管理」へ問題数を合わせるためにV結線、配電方式、％インピーダンス、ATき電、対称座標法等を追加しない。

原則5問未満なのは、現行公式アーカイブと年度別索引を照合した結果、固定範囲のみで全問完答可能と確定できる公式問題が上記2問だったため。平成15年度一次「機械」問2のスコット結線直接出題は索引で確認したが、現行公式アーカイブ外で公式問題・公式解答を再確認できないため正式ゲートには数えない。

### 除外確認

- 令和8年度 一次「電力」: Topic 07直撃なし
- 令和7年度 一次「電力」問7: 単相3線式配電が主で固定範囲外を要するため除外
- 平成23年度 一次「電力」問2: V結線を要するため除外
- 平成25年度 二次「機械・制御」問2: V結線が主のため除外
- 平成12年度 一次「電力」問2: 現行公式アーカイブ外で公式本文・解答を再確認できず除外

### 成果物

- `topics/07_feeding_transformer/07_feeding_transformer.md`

### 品質ゲート現在地

- SPEC固定範囲: 変更なし
- 公式過去問: 一次1問＋二次1問を固定
- 一次・二次双方を含む: PASS
- 二次記述問題を含む: PASS
- 固定範囲外の件数合わせ: 0件
- 未確認実設備値追加: 0件
- 制作前EXAM_ALIGNMENT: 完了
- 制作前独立検証: 未実施

## Gate checklist

- [x] Topic 01 completed
- [x] Topic 02 completed
- [x] Topic 03 completed
- [x] Topic 04 completed
- [x] Topic 05 completed
- [x] Topic 06 completed
- [ ] Topic 07 制作前EXAM_ALIGNMENT complete / 独立検証未実施

## next_start

Topic 07の正式2過去問を保存済み正答に依存せず独立計算し、公式解答と照合する。H23一次理論問6は5空欄、H23二次機械・制御問2は全小問を対象とする。独立検証PASSまでは本文・PDF・練習問題・PowerPointへ進めない。
