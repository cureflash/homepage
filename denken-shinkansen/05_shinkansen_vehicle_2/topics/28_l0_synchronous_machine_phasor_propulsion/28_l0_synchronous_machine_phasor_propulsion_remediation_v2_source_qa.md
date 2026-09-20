# Topic 28 source remediation V2 QA

更新日: 2026-09-20

判定: `PASS / SOURCE_REMEDIATION_V2_COMPLETE`

対象:
- `28_l0_synchronous_machine_phasor_propulsion_explanation_source.md`
- remediation V2 blob SHA: `ca52ffa9625184be7d5b00844aa411b713b52141`
- 起点: fresh clean-blind公式照合 `NEEDS_REVISION / 22_OF_27_PASS`

## fresh blindで露呈した教材不足

固定candidateは編集せず、教材側だけを補強した。

1. R4一次「機械」問1で、並列中の2台の端子電圧が同一であることと、界磁調整前後の共通端子電圧の大小を区別する因果説明が不足していた。
2. H29二次「機械・制御」問1(5)を解くために必要な、短絡比から同期リアクタンスp.u.値へ接続する中間知識と成立条件が不足していた。

## 最小remediation

- R4固有条件について、界磁変化 → 誘導起電力差 → 無効循環電流 → 電機子反作用 → 共通端子電圧の再平衡、という因果を追加した。
- 短絡比 `K_SCR` の定義を追加した。
- 磁気飽和無視・線形無負荷特性・定格p.u.基準・電機子抵抗無視の同期リアクタンスモデルで、`K_SCR` と `X_s[p.u.]` の関係を導出した。
- H29(5)は短絡比を同期リアクタンスへ変換してから通常の発電機フェーザ式へ戻る解法順を追加した。
- 頻出ミスと解法アルゴリズムへ上記2点を追加した。

## 品質ゲート

- 固定過去問: `5問` のまま
- 一次答案要素: `5`
- 二次答案要素: `22`
- 合計答案要素: `27`
- SPEC必須8項目: 変更なし
- 指定3可視化: 変更なし
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 29先取り: `0件`
- 未確認L0系実車値の真値化: `0件`
- Topic 21一般式変更: `0件`
- source-level exact blocker: `0件`

Topic 21 H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差という既存診断を維持し、一般式 `P=Tω`、`ω=2πN/60` は変更していない。

## 次工程

remediation V2 sourceを解説PDFへ同期し、PDF QA後、今回のfresh candidate・公式比較を事前に見ていないfresh workerでclean blindを再実施する。今回のcandidateは変更しない。
