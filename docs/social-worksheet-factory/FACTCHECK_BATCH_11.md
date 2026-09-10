# Social Studies Worksheet Factory — FACTCHECK Batch 11

## Scope

`日本史探究` B(3)「中世の国家・社会の展開と画期」の後期中世ブロック5単元を独立に再確認し、文部科学省の現行学習指導要領解説に直接根拠を置ける表現へ修正した。

Verified and published:

1. `japanese-history-kenmu-nanbokucho`
2. `japanese-history-muromachi-shogunate-shugo`
3. `japanese-history-ming-trade-east-asia`
4. `japanese-history-ryukyu-kingdom-exchange`
5. `japanese-history-agriculture-commerce-distribution`

## Authority reopened

Primary curriculum authority:

- 文部科学省『高等学校学習指導要領（平成30年告示）解説 地理歴史編』
- https://www.mext.go.jp/content/20220802-mxt_kyoiku02-100002620_03.pdf

B(3)(イ)の該当箇所では、次を明示している。

- 武家政権の変容、日明貿易の展開と琉球王国の成立、村落や都市の自立、多様な文化の形成・融合を基に、地域権力の成長、社会の変容と文化の特色を理解する。
- 社会・経済の変化、東アジアの国際情勢の変化、地域の多様性、社会の変化と文化との関係に着目して、中世の国家・社会の変容を考察する。
- 武家政権の変容では、鎌倉幕府滅亡後の政治権力の推移と武家の関係、政治・経済の基盤の変化、守護大名と戦国期の大名の領国経営の相違を扱う。
- 南北朝の動乱に見られる地域の政治・経済の基盤をめぐる対立を考察する。
- 日明貿易は、明を中心とした東アジアの国際秩序の視点から捉え、明銭の流入、私貿易、国内への影響を考察する。
- 琉球王国の成立と繁栄の国際的背景、東アジア交易での歴史的役割、交流・交易を通じた独自文化の形成を扱う。
- 諸産業と流通、地域経済の成長、庶民の台頭を、自治的な村・町、一揆組織、都市の形成と関連付けて扱う。

## Corrections

### `japanese-history-kenmu-nanbokucho`

既存slugは保持するが、採用したMEXT根拠だけでは `建武政権` の個別説明を直接verifiedにしない。learner-facing title/contentは、MEXTが明示する `鎌倉幕府滅亡後の政治権力の推移` と `南北朝の動乱`、地域の政治・経済基盤をめぐる対立に限定した。

### `japanese-history-muromachi-shogunate-shugo`

室町幕府の政治・経済面の権力基盤と、守護大名・戦国期の大名の領国経営の相違というMEXTの比較枠組みに合わせた。

### `japanese-history-ming-trade-east-asia`

日明貿易を単独の交易史として説明せず、明を中心とした東アジアの国際秩序、国内政治、明銭流入、私貿易との関係に限定した。

### `japanese-history-ryukyu-kingdom-exchange`

琉球王国の成立・繁栄の国際的背景、東アジアにおける歴史的役割、交流・交易を通じた文化形成というMEXTの枠組みに合わせた。

### `japanese-history-agriculture-commerce-distribution`

既存slugは保持するが、後期中世の当該箇所でMEXTが直接示すのは `諸産業と流通や地域経済の成長` であるため、learner-facing title/contentはこの表現へ修正した。鎌倉期の「農業や商工業の進展」と混同しない。

## Publication checks

- 5単元すべて unit / fact / sentence を `factcheckStatus: "verified"` とした。
- 5単元とも画像なし。画像ライセンス判断は不要。
- 5単元を `subjects/social/worksheets/index.html` のBatch 10直後へ固定キュー順で追加した。
- JavaScript 5ファイルは `node --check` で構文検査済み。
- term/template対応、source ID参照、unit ID重複、verified状態を構造検査済み。
- pending backlog は 140 → 135。

## Next

次は固定キューどおり `japanese-history-village-city-autonomy` から開始する。
