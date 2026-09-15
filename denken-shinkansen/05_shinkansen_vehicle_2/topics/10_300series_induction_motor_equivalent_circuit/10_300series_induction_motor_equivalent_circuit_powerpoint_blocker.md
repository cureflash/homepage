# Topic 10 PowerPoint publish blocker

更新日: 2026-09-16

## 現在地

`STATUS.md` / `HANDOFF.md` の正本どおり、Topic 10 `300系① 誘導電動機等価回路` は `topic_10_practice_pdf_complete`。次工程は解説画像PowerPointのGitHub正本化である。

このrunでは最新`main`、`STATUS.md`、`HANDOFF.md`、直近の当該系列commitをreconcileし、主枠側でPowerPoint工程が未実施であることを確認した。固定EXAM_ALIGNMENTは一次3問＋二次2問・22答案要素のまま変更していない。

## PowerPoint生成・QA済み内容

ローカル作業環境では16:9・4スライドのPowerPointを生成し、次を収録した。

1. 一相分等価回路、`r2'/s`、`P2 : Pc2 : Pm = 1 : s : (1-s)`、二種の解法手順
2. トルク―すべり、出力―すべり
3. 効率―負荷率
4. 二次抵抗変更時のトルク―すべりと比例推移

計算条件はsource §11の教材用仮定値だけを使用した。

- `Vφ=200 V`, `f=50 Hz`, `p=4`
- `r1=0.20 Ω`, `x1=x2'=0.50 Ω`, `X=1.00 Ω`
- 基準 `r2'=0.30 Ω`
- 効率計算のみ `Rc=800 Ω`, `Xm=40 Ω`
- 比較 `r2'=0.20, 0.30, 0.45 Ω`
- 300系実車値として扱った値: `0件`

確認値:
- `Ns=1500 min^-1`
- 基準 `sm≈0.294`
- `Tmax≈313 N m`
- `r2'=0.20/0.30/0.45 Ω` の `sm≈0.196/0.294/0.441`
- 効率グラフ基準点 `s=0.040`、`Pout≈14.33 kW`、`η≈92.6%`（励磁枝の鉄損を含む教材用モデル）

QA:
- Visual QA: `4 / 4 PASS`
- 文字切れ・図形欠落・重なり: `0件`
- overflow: `PASS / 0件`
- PowerPoint ZIP整合性: `PASS`
- 固定範囲外追加: `0件`
- Topic 11〜13先取り: `0件`

## exact blocker

GitHub正本へ必要な `.pptx` binary を完全性保証付きで書き込めない。

現在接続されているGitHub write interfaceは、UTF-8 text fileの作成・更新、またはinline文字列からのblob作成は可能だが、ローカル生成binaryをfile referenceのまま渡す引数を持たない。生成済みPPTXは172,837 bytesで、base64化すると230,452文字になる。runtimeからこのbase64を取り出す際に出力が途中省略されるため、inline blobへ転記するとbyte完全性を保証できない。

したがって、破損PPTXやbase64文字列を `.pptx` としてcommitすることはしない。PowerPoint本体がGitHub正本へ入っていないため、`STATUS.md` / `HANDOFF.md` / 主sourceを `topic_10_powerpoint_complete` へ進めることもしない。

## 再開条件

ローカルbinaryをそのままGitHubへuploadできる経路が利用可能になった時点で、生成済み仕様と上記QA条件を再現し、`10_300series_induction_motor_equivalent_circuit_images.pptx` を正本化してからPowerPoint QA記録・`STATUS.md`・`HANDOFF.md`・主sourceを同期する。
