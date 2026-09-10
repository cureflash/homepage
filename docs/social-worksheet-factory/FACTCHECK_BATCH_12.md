# Social Studies Worksheet Factory — FACTCHECK Batch 12

## Scope

`日本史探究` の固定キューから、B(3)後期中世3単元とC(1)近世への転換2単元を独立に再確認し、文部科学省の現行学習指導要領解説に直接根拠を置ける表現へ修正した。

Verified and published:

1. `japanese-history-village-city-autonomy`
2. `japanese-history-onin-war-sengoku-daimyo`
3. `japanese-history-muromachi-regional-culture`
4. `japanese-history-sengoku-unification-transition`
5. `japanese-history-european-arrival-global-links`

## Authority reopened

Primary curriculum authority:

- 文部科学省『高等学校学習指導要領（平成30年告示）解説 地理歴史編』
- https://www.mext.go.jp/content/20220802-mxt_kyoiku02-100002620_03.pdf

B(3)(イ)の該当箇所では、次を明示している。

- 諸産業と流通や地域経済の成長、庶民の台頭とともに、村や町などの自治的な単位や一揆の組織が成立し、各地に都市が形成されたことを扱う。
- 自治的な村や町、一揆組織の成立要因・背景を、地理的条件や流通などの経済活動との関わりから考察する。
- 応仁の乱による畿内と地方の関係変化を問いとし、守護大名と戦国期の大名の領国経営の違い、戦国期の領国経営と畿内との政治的・経済的関係を考察する。
- 室町期の文化を経済の進展、都市・村の発達、東アジアとの交流と関連付け、公家・武家・庶民などによる文化の形成や融合を考察する。

C(1)の該当箇所では、次を明示している。

- 織豊政権の政治・経済政策、貿易や対外関係などを基に、中世から近世への時代の転換を理解する。
- 村落や都市の支配の変化、アジア各地やヨーロッパ諸国との交流の影響に着目して国家・社会の変容を考察する。
- 国際環境の変化と豊臣政権の対外政策、ヨーロッパ諸国のアジア進出、国内の社会・文化の変容を関連付けて扱う。
- 時代を通観する問いの例として、織豊政権が戦国時代を終わらせることができた理由を示している。

## Corrections

### `japanese-history-village-city-autonomy`

既存slugは保持するが、生成段階の `惣村` という具体語は採用したMEXT根拠に直接現れないためverified本文には昇格させず、MEXTが明示する `村や町などの自治的な単位`、`一揆の組織`、`都市` に限定した。

### `japanese-history-onin-war-sengoku-daimyo`

生成段階の年代説明や一般化した「台頭」表現をそのまま採用せず、MEXTが直接示す応仁の乱による畿内・地方関係の変化と、守護大名・戦国期の大名の領国経営比較へ修正した。

### `japanese-history-muromachi-regional-culture`

生成段階の担い手表現を、MEXTが明示する `公家や武家、庶民など` に合わせ、経済の進展・都市や村の発達・東アジアとの交流との関連を中心にした。

### `japanese-history-sengoku-unification-transition`

既存slugは保持するが、生成段階の「16世紀後半の全国統一」という説明を採用したMEXT根拠だけでverifiedにせず、`織豊政権` と `中世から近世への時代の転換` に限定した。

### `japanese-history-european-arrival-global-links`

既存slugは保持するが、生成段階の `鉄砲・キリスト教` は採用したMEXT根拠に直接現れないためverified本文には昇格させず、`ヨーロッパ諸国との交流`、国際環境・対外政策・国内社会文化の変容に限定した。

## Publication checks

- 5単元すべて unit / fact / sentence を `factcheckStatus: "verified"` とした。
- 5単元とも画像なし。画像ライセンス判断は不要。
- 5単元を `subjects/social/worksheets/index.html` のBatch 11直後へ固定キュー順で追加した。
- JavaScript 5ファイルは `node --check` で構文検査済み。
- term/template対応、source ID参照、unit ID重複、verified状態を構造検査済み。
- pending backlog は 135 → 130。

## Next

次は固定キューどおり `japanese-history-early-modern-sources-outlook` から開始する。
