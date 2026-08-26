# Social Quiz Engine

社会科の反復練習ゲーム用の共通エンジンです。

## 現在の実装

- 日本地図：都道府県名 -> 都道府県、県庁所在地 -> 都道府県、都道府県 -> 県庁所在地5択
- 世界地図：6つの大地域に分けた国・地域の位置当て
- 世界地図の7モード
  - イージー：国名＋首都＋国旗 -> 地図クリック
  - ハード：国名だけ -> 地図クリック
  - ハード：首都だけ -> 地図クリック
  - ハード：国旗だけ -> 地図クリック
  - 逆引き：光った国 -> 国名5択
  - 逆引き：光った国 -> 首都5択
  - 逆引き：光った国 -> 国旗5択
- 世界版は1プレイ最大20問。20か国未満の地域／モードでは対象国をすべて出題
- 出題順のシャッフル
- 正誤判定、正解数、正答率、結果表示
- 180秒の共通制限時間
- 不正解ごとに残り時間を20秒減算
- 0秒でゲームオーバー、全問回答でクリア
- ゲーム開始・正解・不正解のSE
- マウス・タッチ・キーボード操作

## 世界版の地域

地域セレクタは学校地理で扱いやすい大きな単位に統合しています。

- アジア
- ヨーロッパ
- アフリカ
- 北アメリカ
- 南アメリカ
- オセアニア

内部の国データには従来の細かなサブリージョンを保持していますが、ゲーム上の地域選択・地図ファイル・逆引き5択の候補範囲は上記6地域を正とします。旧URLの `east-asia`、`caribbean`、`pacific-islands` などは対応する大地域へ自動的に読み替えます。

各地域はNatural Earth 1:50mの国境データから事前生成したWebメルカトルSVGです。小さすぎる島国・小国には同じISOキーの丸いヒットターゲットも埋め込みます。オセアニアは日付変更線をまたぐ国も同じ地域地図内に表示します。

## ロード方式

世界版では外部CDNから地図ライブラリを動的importしません。また、ブラウザで全世界SVGを生成して不要な国を削除する処理も行いません。

`assets/maps/world/` に6地域のSVGを固定保存し、選択中の地域ファイルを1本だけ `fetch(..., { cache: "force-cache" })` します。現在の生成物は約70KB〜311KB（未圧縮）で、すべての地域を同時には読み込みません。

## 構成

- `js/core/quiz-engine.js`: 出題順、採点、進行、タイマー、ペナルティ、結果表示
- `js/core/quiz-effects.js`: SE再生。音声再生に失敗してもゲーム進行には影響させない
- `js/renderers/svg-region-renderer.js`: 通常SVG上の地域をクリックして答える形式
- `js/renderers/choice-renderer.js`: 選択肢ボタンから答える形式
- `js/renderers/world-map-source.js`: 選択地域のローカルSVGをキャッシュ付きで読み込む
- `js/renderers/world-region-renderer.js`: 事前生成済み地域SVGの国をクリックするrenderer
- `js/renderers/world-map-choice-renderer.js`: 国を光らせた地図＋5択を組み合わせるrenderer
- `js/games/world-countries.js`: 6地域×7モードと1プレイ最大20問を同一データから生成するgame factory
- `js/data/world-countries.js`: ISOコード、日本語国名、首都、内部サブリージョン、小国マーカー、出典メタデータ
- `js/data/world-regions.js`: 6大地域、サブリージョン対応、モード定義
- `js/data/world-map-metadata.js`: Natural Earth・投影法・ローカル配信の正本メタデータ
- `assets/maps/world/`: 6地域のWebメルカトルSVG＋`manifest.json`
- `scripts/build_social_world_maps.py`: Natural Earth 1:50m -> 6大地域WebメルカトルSVG生成器
- `assets/audio/`: 共通SE

## 共通ゲームルール

- `timeLimitSeconds = 180`
- `wrongPenaltySeconds = 20`
- タイマーが0になる前に最後の問題へ回答すればクリア
- タイマーが0になった時点で未回答問題が残っていればゲームオーバー

ブラウザの自動再生制限に対応するため、クイズは「ゲーム開始」ボタンから開始します。この操作で出題SEとカウントダウンを同時に開始します。

SE:

- `assets/audio/quiz-start.mp3`: ゲーム開始
- `assets/audio/quiz-correct.mp3`: 正解
- `assets/audio/quiz-wrong.mp3`: 不正解

## 世界版5択の扱い

通常の曖昧な知識問題では、誤答候補は手動で固定します。一方、世界版の逆引きは「ISOコードで一意に決まる国名・国旗」と、首都が一意に扱える国だけを対象にしているため、ユーザー指定どおり同じ大地域の候補から4件をランダム抽出して正解と合わせた5択を生成します。

首都が複数ある、外交上の扱いが複雑、移転中・内戦等で単一の首都問題にしにくいケースは首都関連モードから除外し、国名・国旗の位置問題には残せます。

## 地図素材

### 日本

都道府県地図は `PA4KEV/japan-vector-map` の `japan-prefectures.svg` v1.0 を使用しています。MIT License、Copyright (c) 2023 Kevin Matsubara。上流コミット `6be9e705045777b7c433c429b0313f19b49d1ed4` に固定しています。

### 世界

世界地図は **Natural Earth 1:50m Admin 0 – Countries v5.1.1** を使用しています。Natural EarthはPublic Domainです。

生成時に緯度経度をWebメルカトルへ投影し、アジア・ヨーロッパ・アフリカ・北アメリカ・南アメリカ・オセアニアの6地域へまとめてローカルSVGとして保存します。正本manifestは `assets/maps/world/manifest.json` にあり、元ZIPのSHA-256、各地域SVGのSHA-256、ファイルサイズを記録しています。

- Natural Earth: https://www.naturalearthdata.com/downloads/50m-cultural-vectors/50m-admin-0-countries-2/
- Terms: https://www.naturalearthdata.com/about/terms-of-use/

国名・首都・国旗の確認は外務省「キッズ外務省 世界の国々 基本情報を調べてみよう！」を主要な確認先としています。

## 継続開発

自動的な継続開発のルール・順序・引き継ぎは `docs/social-quiz-factory/` を正とします。
