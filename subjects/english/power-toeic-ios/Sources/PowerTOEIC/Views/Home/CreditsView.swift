#if canImport(SwiftUI)
import SwiftUI

@available(iOS 16.0, macOS 13.0, *)
public struct CreditsView: View {
    public init() {}

    public var body: some View {
        NavigationStack {
            List {
                Section("サウンド") {
                    VStack(alignment: .leading, spacing: 6) {
                        Text("OtoLogic")
                            .font(.headline)
                        Text("OtoLogic (CC BY 4.0) / https://otologic.jp/")
                            .font(.footnote)
                            .textSelection(.enabled)
                        Link("OtoLogicを開く", destination: URL(string: "https://otologic.jp/")!)
                            .font(.footnote)
                    }
                    .accessibilityElement(children: .combine)
                    .accessibilityLabel("サウンド素材 OtoLogic、CC BY 4.0、otologic.jp")
                }

                Section("この画面について") {
                    Text("配布版に第三者素材を同梱する場合のクレジットを表示します。素材の同梱状況はリリース時に確認します。")
                        .font(.footnote)
                        .foregroundStyle(.secondary)
                }
            }
            .navigationTitle("クレジット")
        }
    }
}
#endif
