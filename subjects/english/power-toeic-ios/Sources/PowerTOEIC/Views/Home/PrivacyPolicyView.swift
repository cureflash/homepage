#if canImport(SwiftUI)
import SwiftUI

@available(iOS 16.0, macOS 13.0, *)
public struct PrivacyPolicyView: View {
    public init() {}

    public var body: some View {
        NavigationStack {
            ScrollView {
                VStack(alignment: .leading, spacing: 16) {
                    Text("プライバシーポリシー")
                        .font(.title.bold())

                    policySection(
                        title: "保存する情報",
                        body: "Power TOEICは、学習履歴、復習予定、訓練生の進行状態、問題報告を端末内に保存します。これらは現在のアプリ実装ではサーバーへ送信しません。"
                    )
                    policySection(
                        title: "データ収集・追跡",
                        body: "現在のネイティブアプリには広告SDK、分析SDK、アカウント機能、行動追跡、位置情報、連絡先、写真、マイク、カメラの収集処理はありません。"
                    )
                    policySection(
                        title: "通信",
                        body: "コア学習機能はオフラインで動作し、実行時のLLMや必須ネットワークサービスを利用しません。将来、同期・アカウント・分析などを追加する場合は、公開前に本ポリシーとApp Storeのプライバシー申告を更新します。"
                    )
                    policySection(
                        title: "削除",
                        body: "学習データは端末内のアプリ保存領域にあります。アプリの削除により端末上の保存データも削除されます。将来アプリ内リセット機能を提供する場合は、その操作でも削除できるようにします。"
                    )
                    policySection(
                        title: "外部素材",
                        body: "キャラクター画像と効果音は表示・再生用の静的素材です。素材の表示・再生によって学習履歴が素材提供元へ送信される設計にはしません。"
                    )
                }
                .frame(maxWidth: 720, alignment: .leading)
                .padding()
            }
            .navigationTitle("プライバシー")
            .navigationBarTitleDisplayMode(.inline)
        }
        .accessibilityIdentifier("privacy.policy")
    }

    private func policySection(title: String, body: String) -> some View {
        VStack(alignment: .leading, spacing: 6) {
            Text(title).font(.headline)
            Text(body).foregroundStyle(.secondary)
        }
    }
}
#endif
