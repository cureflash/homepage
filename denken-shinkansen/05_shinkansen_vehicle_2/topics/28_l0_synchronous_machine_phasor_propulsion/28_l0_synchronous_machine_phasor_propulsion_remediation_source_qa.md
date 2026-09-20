# Topic 28 source remediation QA

更新日: 2026-09-20

判定: `PASS / SOURCE_REMEDIATION_COMPLETE`

対象:
- `28_l0_synchronous_machine_phasor_propulsion_explanation_source.md`
- remediation後 blob SHA: `8f9562b6b56a22ec7b507a5dc5834fda73787515`
- 起点: clean blind公式照合 `NEEDS_REVISION / 26_OF_27_PASS`
- 唯一のFAIL: H29二次「機械・制御」問1(1)

## 最小補強内容

固定EXAM_ALIGNMENTは変更せず、clean blindで露呈した記号対応だけを補強した。

1. §2で、H29本試験の `φ` = 本教材の力率角 `θ` と明示。
2. `φ` / `θ` は電圧 `V` と電流 `I` の位相差、負荷角 `δ` は `V` と内部誘導起電力 `E` の位相差であり、別物と明示。
3. §10で、設問指定 `V,I,X_s,φ` に対し
   - `E=sqrt(V^2+2VX_sI sinφ+(X_sI)^2)`
   - `ε={sqrt(V^2+2VX_sI sinφ+(X_sI)^2)-V}/V ×100 [%]`
   を指定変数だけで書く手順を追加。
4. §16へ `φ / θ` と `δ` の取り違えを頻出ミスとして追加。
5. H29のsource対応節へ §2・§16を追加。

## 式の独立確認

遅れ力率発電機で

`E=(V+X_sI sinφ)+jX_sI cosφ`

より

`|E|^2=(V+X_sI sinφ)^2+(X_sI cosφ)^2`

`=V^2+2VX_sI sinφ+(X_sI)^2(sin^2φ+cos^2φ)`

`=V^2+2VX_sI sinφ+(X_sI)^2`

したがって追加式は既存の発電機フェーザ式と整合する。

## 境界確認

- 固定過去問: `5問` のまま
- 答案要素: `27` のまま
- SPEC必須8項目: 変更なし
- 指定3可視化: 変更なし
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- 未確認L0系実車値の真値化: `0件`
- Topic 29先取り: `0件`
- 新規仕様追加: `0件`

## 残工程

解説PDFは旧sourceから生成されたままで、この補強は未同期。Topic 28はまだ `completed` と数えない。

次工程: remediation後sourceから解説PDFを再生成し、PDF QAを実施する。その後、公式解答を見ていないfresh workerでclean blind候補を新規固定する。