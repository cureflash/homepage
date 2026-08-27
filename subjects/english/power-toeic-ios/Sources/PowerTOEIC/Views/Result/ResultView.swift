#if canImport(SwiftUI)
import SwiftUI

@available(iOS 16.0, macOS 13.0, *)
public struct ResultView: View {
    public let results: SessionResults
    public let skillLabel: (String) -> String
    public let onHome: () -> Void

    public init(results: SessionResults, skillLabel: @escaping (String) -> String = { $0 }, onHome: @escaping () -> Void) {
        self.results = results
        self.skillLabel = skillLabel
        self.onHome = onHome
    }

    public var body: some View {
        ScrollView {
            VStack(spacing: 20) {
                Text("トレーニング完了").font(.title2.bold())
                Text("\(Int((results.accuracy * 100).rounded()))%")
                    .font(.largeTitle.weight(.black))
                    .monospacedDigit()
                    .accessibilityLabel("正答率 \(Int((results.accuracy * 100).rounded()))パーセント")
                Text("\(results.correct) / \(results.answered) 正解")
                    .foregroundStyle(.secondary)
                    .accessibilityLabel("\(results.answered)問中\(results.correct)問正解")

                if !results.bySkill.isEmpty {
                    VStack(alignment: .leading, spacing: 10) {
                        Text("分野別").font(.headline)
                        ForEach(results.bySkill.keys.sorted(), id: \.self) { skillID in
                            if let item = results.bySkill[skillID] {
                                ViewThatFits(in: .horizontal) {
                                    HStack {
                                        Text(skillLabel(skillID))
                                        Spacer()
                                        Text("\(item.correct) / \(item.answered)").monospacedDigit()
                                    }
                                    VStack(alignment: .leading, spacing: 2) {
                                        Text(skillLabel(skillID))
                                        Text("\(item.correct) / \(item.answered) 正解")
                                            .foregroundStyle(.secondary)
                                    }
                                }
                                .accessibilityElement(children: .ignore)
                                .accessibilityLabel("\(skillLabel(skillID))、\(item.answered)問中\(item.correct)問正解")
                            }
                        }
                    }
                    .padding()
                    .background(RoundedRectangle(cornerRadius: 14).fill(.thinMaterial))
                }

                Button("ホームへ戻る", action: onHome)
                    .buttonStyle(.borderedProminent)
                    .controlSize(.large)
                    .accessibilityHint("ホーム画面へ戻ります")
            }
            .padding()
        }
        .navigationTitle("結果")
    }
}
#endif
