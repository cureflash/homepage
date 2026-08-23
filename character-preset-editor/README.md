# 動画キャラ 表情・ポーズエディタ

iPad / PCブラウザから、Google Drive上の `sasara.json` / `reimu.json` / `marisa.json` と非公開元素材を読み込み、同じJSONへ直接保存する静的Webツール。

## 初回だけ必要なGoogle設定

Google Cloud Consoleで次を用意する。

1. Google Drive APIを有効化する。
2. OAuth同意画面を設定する。個人利用中はテストユーザーに自分のGoogleアカウントを追加する。
3. OAuthクライアントを「ウェブ アプリケーション」で作成する。
4. 「承認済みのJavaScript生成元」に、このページを配信しているサイトの **origin** を追加する。
   - 例: ページが `https://cureflash.github.io/homepage/character-preset-editor/` なら origin は `https://cureflash.github.io`
   - 独自ドメインならその `https://...` origin を登録する。
5. 発行された `xxxxxxxx.apps.googleusercontent.com` をページ上部へ入力し、「端末に保存」を押す。

クライアントIDは秘密情報ではない。クライアントシークレットはこの静的サイトに置かない。

## Drive上の正本

ページは `drive-config.js` に登録された非公開DriveファイルIDを使う。

- ささら: PSD + `sasara.json`
- 霊夢: kitsune ZIP + `reimu.json`
- 魔理沙: kitsune ZIP + `marisa.json`

OAuth後、Drive API `files.get?alt=media` で読み込み、`files.update` のmedia uploadで同じJSONファイルIDを更新する。

## 操作

- キャラクタータブで切替
- 40プリセットから選択
- 感情カテゴリ・表示名・各パーツを変更
- 「別名で複製」でプリセット追加
- 「このカテゴリの既定ポーズにする」でCSVの `表情` から呼ぶ既定差分を設定
- 「Driveに保存」で正本JSONを上書き
- 「JSONをダウンロード」はバックアップ用

## 台本CSV

```csv
話者,セリフ,表情,ポーズ
さとうささら,ここが重要です,serious,
霊夢,えっそうなの？,surprised,surprised_03
```

優先順位は `ポーズ` > `表情` の既定差分 > `normal`。
