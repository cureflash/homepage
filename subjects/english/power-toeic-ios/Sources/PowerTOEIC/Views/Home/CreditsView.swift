#if canImport(SwiftUI)
import SwiftUI

@available(iOS 16.0, macOS 13.0, *)
public struct CreditsView: View {
    public init() {}

    public var body: some View {
        NavigationStack {
            ScrollView {
                VStack(alignment: .leading, spacing: 18) {
                    Text("クレジット")
                        .font(.title.bold())

                    creditSection(
                        title: "効果音",
                        body: "OtoLogic (CC BY 4.0) / https://otologic.jp/",
                        detail: "正解・不正解・達成演出の効果音にOtoLogic素材を使用予定です。"
                    )

                    creditSection(
                        title: "キャラクター仮素材",
                        body: "いらすとや",
                        detail: "開発中の軍曹・訓練生表示には、いらすとやの素材を仮素材として使用します。最終公開時の実際の同梱素材と利用条件を提出前に再確認します。"
                    )
                }
                .frame(maxWidth: 720, alignment: .leading)
                .padding()
            }
            .navigationTitle("クレジット")
        }
        .accessibilityIdentifier("credits.view")
    }

    private func creditSection(title: String, body: String, detail: String) -> some View {
        VStack(alignment: .leading, spacing: 6) {
            Text(title).font(.headline)
            Text(body)
            Text(detail)
                .font(.footnote)
                .foregroundStyle(.secondary)
        }
        .accessibilityElement(children: .combine)
    }
}
#endif
