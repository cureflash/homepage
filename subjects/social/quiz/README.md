# Social Quiz Engine

社会科の反復練習ゲーム用の共通エンジンです。

## 現在の実装

- 都道府県名を見て、日本地図上の都道府県を選ぶゲーム
- 出題順のシャッフル
- 正誤判定、正解数、正答率、結果表示
- マウス・タッチ・キーボード操作

## 構成

- `js/core/quiz-engine.js`: 出題順、採点、進行、結果表示
- `js/renderers/svg-region-renderer.js`: SVG上の地域をクリックして答える形式
- `js/renderers/choice-renderer.js`: 選択肢ボタンから答える形式
- `js/games/prefectures.js`: 都道府県ゲーム固有の問題データと表示設定
- `js/main.js`: ゲーム設定と renderer の接続

## 継続開発

自動的な継続開発のルール・順序・引き継ぎは `docs/social-quiz-factory/` を正とします。

- `00_MASTER_INSTRUCTIONS.md`: 毎回守る実行規則
- `10_CONTENT_AND_ARCHITECTURE.md`: 1対1対応、5択、色分け領域、UI分離などの設計規則
- `20_EXECUTION_PLAN.md`: 実装順序とチェックリスト
- `90_HANDOFF.md`: 次回の開始地点

## 拡張

問題内容と回答UIを分離しているため、エンジン本体を変更せずにゲームを追加できます。

### 地図クリック型

`renderer.type` を `svg-region` にし、クリック可能な地域に共通属性を持つSVGを指定します。世界の国当てにも同じ renderer を使えます。

### 選択肢型

`renderer.type` を `choice` にし、各 question に `options` を持たせます。雨温図の気候判定、人物の国籍・時代判定などに使えます。

```js
{
  id: "sample",
  prompt: "この人物はどこの国の人？",
  answer: "uk",
  answerLabel: "イギリス",
  options: [
    { key: "uk", label: "イギリス" },
    { key: "fr", label: "フランス" },
    { key: "de", label: "ドイツ" },
    { key: "it", label: "イタリア" }
  ]
}
```

画像や雨温図そのものの描画は、今後 renderer を追加して対応します。採点と進行は `QuizEngine` をそのまま利用します。

## 地図素材

都道府県地図は lalamalink の「ディフォルメ都道府県日本地図」を使用しています。CC0 1.0 Universal。

https://github.com/lalamalink/japan-map-svg
