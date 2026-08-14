# PlarailController iPad build

このフォルダは、Swift Playgroundsで作成したプラレールアプリをGitHub ActionsのmacOS/Xcodeでビルドし、署名前IPAを作るためのものです。

## 必要なファイル

元のSwift Playground ZIPを、次の名前でこのフォルダへアップロードしてください。

`PlarailController.swiftpm.zip`

ZIPの中には `*.swiftpm` フォルダが1つ入っている状態を想定しています。

## ビルド

ZIPをmainブランチへ追加すると `Build Plarail unsigned IPA` が自動実行されます。手動実行も可能です。

成功後、GitHubの Actions → 該当実行 → Artifacts から `PlarailController-unsigned-ipa` を取得してください。

生成されるIPAは未署名です。Windows側でSideloadly等を使って自分のApple Accountで署名し、iPadへインストールします。
