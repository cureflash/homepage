#if canImport(SwiftUI)
import SwiftUI

@available(iOS 16.0, macOS 13.0, *)
public struct HomeAction: Identifiable, Sendable {
    public let id: String
    public let title: String
    public let subtitle: String
    public let systemImage: String
    public let mode: WorkoutMode

    public init(id: String, title: String, subtitle: String, systemImage: String, mode: WorkoutMode) {
        self.id = id
        self.title = title
        self.subtitle = subtitle
        self.systemImage = systemImage
        self.mode = mode
    }
}

@available(iOS 16.0, macOS 13.0, *)
public struct HomeView: View {
    public let progression: ProgressionState
    public let reviewDueCount: Int
    public let onSelect: (WorkoutMode) -> Void

    @State private var showingPrivacyPolicy = false
    @State private var showingCredits = false

    private let actions: [HomeAction] = [
        .init(id: "quick", title: "クイック 10", subtitle: "短時間で10問", systemImage: "bolt.fill", mode: .quick),
        .init(id: "weakness", title: "おすすめ弱点特訓", subtitle: "苦手を優先して鍛える", systemImage: "scope", mode: .weakness),
        .init(id: "training", title: "分野別 30", subtitle: "分野を選んで集中", systemImage: "square.grid.2x2", mode: .training),
        .init(id: "power", title: "POWER 100", subtitle: "100問を一気に鍛える", systemImage: "flame.fill", mode: .power),
        .init(id: "review", title: "復習", subtitle: "期限が来た問題を再訓練", systemImage: "arrow.clockwise", mode: .review),
        .init(id: "test", title: "総合テスト 30", subtitle: "分野表示なしで実力確認", systemImage: "checkmark.seal", mode: .test),
        .init(id: "custom", title: "カスタム", subtitle: "問題数と分野を自分で編集", systemImage: "slider.horizontal.3", mode: .custom)
    ]

    public init(progression: ProgressionState, reviewDueCount: Int, onSelect: @escaping (WorkoutMode) -> Void) {
        self.progression = progression
        self.reviewDueCount = reviewDueCount
        self.onSelect = onSelect
    }

    public var body: some View {
        ScrollView {
            VStack(alignment: .leading, spacing: 18) {
                VStack(alignment: .leading, spacing: 6) {
                    Text("POWER TOEIC").font(.largeTitle.weight(.black))
                    Text("弱点を見つけて、問題数で鍛える。")
                        .foregroundStyle(.secondary)
                }

                ViewThatFits(in: .horizontal) {
                    HStack(spacing: 12) { metrics }
                    VStack(spacing: 8) { metrics }
                }

                LazyVGrid(columns: [GridItem(.adaptive(minimum: 150), spacing: 12)], spacing: 12) {
                    ForEach(actions) { action in
                        Button { onSelect(action.mode) } label: {
                            VStack(alignment: .leading, spacing: 8) {
                                Image(systemName: action.systemImage).font(.title2)
                                Text(action.title).font(.headline)
                                Text(action.subtitle).font(.caption).foregroundStyle(.secondary)
                            }
                            .frame(maxWidth: .infinity, minHeight: 104, alignment: .leading)
                            .padding()
                            .background(RoundedRectangle(cornerRadius: 16).fill(.thinMaterial))
                        }
                        .buttonStyle(.plain)
                        .accessibilityLabel(action.title)
                        .accessibilityHint(action.subtitle)
                        .accessibilityIdentifier("home.\(action.id)")
                    }
                }

                HStack(spacing: 16) {
                    Button("プライバシーポリシー") {
                        showingPrivacyPolicy = true
                    }
                    .accessibilityHint("端末内に保存する学習データと、現在のデータ収集方針を確認します")
                    .accessibilityIdentifier("home.privacy")

                    Button("クレジット") {
                        showingCredits = true
                    }
                    .accessibilityHint("配布版で使用する第三者素材のクレジットを確認します")
                    .accessibilityIdentifier("home.credits")
                }
                .font(.footnote)
                .foregroundStyle(.secondary)
            }
            .padding()
        }
        .sheet(isPresented: $showingPrivacyPolicy) {
            PrivacyPolicyView()
        }
        .sheet(isPresented: $showingCredits) {
            CreditsView()
        }
    }

    @ViewBuilder
    private var metrics: some View {
        metric(title: "STAGE", value: "\(progression.stage) / 5")
        metric(title: "POWER", value: "\(progression.points)")
        metric(title: "復習", value: "\(reviewDueCount)")
    }

    private func metric(title: String, value: String) -> some View {
        VStack(alignment: .leading, spacing: 2) {
            Text(title).font(.caption2.weight(.bold)).foregroundStyle(.secondary)
            Text(value).font(.headline.monospacedDigit())
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding(10)
        .background(RoundedRectangle(cornerRadius: 12).fill(.quaternary))
        .accessibilityElement(children: .ignore)
        .accessibilityLabel("\(title) \(value)")
    }
}
#endif
