#if canImport(SwiftUI)
import SwiftUI

public struct WeaknessItem: Identifiable, Equatable, Sendable {
    public let id: String
    public let label: String
    public let accuracy: Double
    public let attempts: Int

    public init(id: String, label: String, accuracy: Double, attempts: Int) {
        self.id = id
        self.label = label
        self.accuracy = accuracy
        self.attempts = attempts
    }
}

@available(iOS 16.0, macOS 13.0, *)
public struct WeaknessView: View {
    public let items: [WeaknessItem]
    public let onTrain: (String) -> Void

    public init(items: [WeaknessItem], onTrain: @escaping (String) -> Void) {
        self.items = items
        self.onTrain = onTrain
    }

    public var body: some View {
        List {
            if items.isEmpty {
                ContentUnavailableView("弱点データはまだありません", systemImage: "scope", description: Text("まずトレーニングを行うと、ここに苦手分野が表示されます。"))
            } else {
                ForEach(items) { item in
                    ViewThatFits(in: .horizontal) {
                        HStack(spacing: 12) {
                            itemSummary(item)
                            Spacer()
                            trainButton(item)
                        }
                        VStack(alignment: .leading, spacing: 8) {
                            itemSummary(item)
                            trainButton(item)
                        }
                    }
                    .padding(.vertical, 4)
                    .accessibilityElement(children: .contain)
                }
            }
        }
        .navigationTitle("弱点")
    }

    private func itemSummary(_ item: WeaknessItem) -> some View {
        VStack(alignment: .leading, spacing: 4) {
            Text(item.label).font(.headline)
            Text("正答率 \(Int((item.accuracy * 100).rounded()))% ・ \(item.attempts)問")
                .font(.caption).foregroundStyle(.secondary)
        }
        .accessibilityElement(children: .ignore)
        .accessibilityLabel("\(item.label)、正答率 \(Int((item.accuracy * 100).rounded()))パーセント、\(item.attempts)問")
    }

    private func trainButton(_ item: WeaknessItem) -> some View {
        Button("鍛える") { onTrain(item.id) }
            .buttonStyle(.bordered)
            .accessibilityLabel("\(item.label)を鍛える")
            .accessibilityHint("この分野のトレーニングを開始します")
    }
}
#endif
