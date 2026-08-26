# Social Quiz Engine

社会科の反復練習ゲーム用の共通エンジンです。

## 現在の実装

- 日本地図：都道府県名 -> 都道府県、県庁所在地 -> 都道府県、都道府県 -> 県庁所在地5択
- 世界地図：15地域に分割した国・地域の位置当て
- 世界地図の7モード
  - イージー：国名＋首都＋国旗 -> 地図クリック
  - ハード：国名だけ -> 地図クリック
  - ハード：首都だけ -> 地図クリック
  - ハード：国旗だけ -> 地図クリック
  - 逆引き：光った国 -> 国名5択
  - 逆引き：光った国 -> 首都5択
  - 逆引き：光った国 -> 国旗5択
- 出題順のシャッフル
- 正誤判定、正解数、正答率、結果表示
- 180秒の共通制限時間
- 不正解ごとに残り時間を20秒減算
- 0秒でゲームオーバー、全問回答でクリア
- ゲーム開始・正解・不正解のSE
- マウス・タッチ・キーボード操作

## 世界版の地域

世界版は一枚の小さな世界地図で回答させず、次の15ビューに分割しています。

- 東アジア
- 東南アジア
- 南アジア
- 西・中央アジア
- 北・西ヨーロッパ
- 中・南ヨーロッパ
- 東ヨーロッパ・ロシア
- 北アフリカ
- 西・中部アフリカ
- 東・南部アフリカ
- 北・中央アメリカ
- カリブ海地域
- 南アメリカ
- オセアニア西部
- 太平洋島しょ部

小さすぎる島国・小国は、元の国境パスが空またはクリック困難な場合に同じ地理座標上へクリック可能な丸マーカーを追加しています。太平洋島しょ部は日付変更線をまたぐ表示に対応しています。

## 構成

- `js/core/quiz-engine.js`: 出題順、採点、進行、タイマー、ペナルティ、結果表示
- `js/core/quiz-effects.js`: SE再生。音声再生に失敗してもゲーム進行には影響させない
- `js/renderers/svg-region-renderer.js`: 通常SVG上の地域をクリックして答える形式
- `js/renderers/choice-renderer.js`: 選択肢ボタンから答える形式
- `js/renderers/world-region-renderer.js`: svg-world-mapsを地域ビューへ切り出す世界地図renderer
- `js/renderers/world-map-choice-renderer.js`: 国を光らせた地図＋5択を組み合わせるrenderer
- `js/games/world-countries.js`: 地域×7モードを同一データから生成するgame factory
- `js/data/world-countries.js`: ISOコード、日本語国名、首都、地域、小国マーカー、出典メタデータ
- `js/data/world-regions.js`: 地域ビューとモード定義
- `js/main.js`: ゲーム設定、renderer、SE、世界版セレクタの接続
- `assets/audio/`: 共通SE

## 共通ゲームルール

既定値は以下です。

- `timeLimitSeconds = 180`
- `wrongPenaltySeconds = 20`
- タイマーが0になる前に最後の問題へ回答すればクリア
- タイマーが0になった時点で未回答問題が残っていればゲームオーバー

必要ならゲーム定義側で制限時間やペナルティ秒数だけを上書きできます。問題データやrendererを書き換える必要はありません。

ブラウザの自動再生制限に対応するため、クイズは「ゲーム開始」ボタンから開始します。この操作で出題SEとカウントダウンを同時に開始します。

SE:

- `assets/audio/quiz-start.mp3`: ゲーム開始
- `assets/audio/quiz-correct.mp3`: 正解
- `assets/audio/quiz-wrong.mp3`: 不正解

## 世界版5択の扱い

通常の曖昧な知識問題では、誤答候補は手動で固定します。一方、世界版の逆引きは「ISOコードで一意に決まる国名・国旗」と、首都が一意に扱える国だけを対象にしているため、ユーザー指定どおり**同じ地域の候補から4件をランダム抽出して正解と合わせた5択**を生成します。

首都が複数ある、外交上の扱いが複雑、移転中・内戦等で単一の首都問題にしにくいケースは `capitalQuiz: false` として首都関連モードから除外します。国名・国旗の位置問題には残せます。

## 地図素材

### 日本

都道府県地図は `PA4KEV/japan-vector-map` の `japan-prefectures.svg` v1.0 を使用しています。MIT License、Copyright (c) 2023 Kevin Matsubara。上流コミット `6be9e705045777b7c433c429b0313f19b49d1ed4` に固定しています。

### 世界

世界地図表示は `homayounmmdy/svg-world-maps` 1.0.1 を使用し、実装確認時の上流コミット `06c2de4a159326e527e38e8506e3b9f2705bdf42` を記録しています。

重要: `svg-world-maps` のJavaScriptソフトウェア自体はMITですが、`src/maps/` の世界地図パスデータはSimpleMaps由来で、**SimpleMaps SVG Map Library License**が適用されます。クイズのように付加価値を加えたWebサイト／ソフトウェアでの利用条件に従って使用し、raw map collectionとしての再配布はしません。

- svg-world-maps: https://github.com/homayounmmdy/svg-world-maps
- SimpleMaps license: https://simplemaps.com/resources/svg-license

国名・首都・国旗の確認は外務省「キッズ外務省 世界の国々 基本情報を調べてみよう！」を主要な確認先としています。

## 継続開発

自動的な継続開発のルール・順序・引き継ぎは `docs/social-quiz-factory/` を正とします。
