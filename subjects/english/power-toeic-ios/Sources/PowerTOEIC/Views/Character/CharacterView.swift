#if canImport(SwiftUI)
import SwiftUI

public enum CharacterRole: Sendable {
    case sergeant
    case trainee(stage: Int)
}

@available(iOS 16.0, macOS 13.0, *)
public struct CharacterView: View {
    public let role: CharacterRole
    public let reaction: CharacterReaction
    public let catalog: AssetCatalog
    public let message: String?

    @Environment(\.dynamicTypeSize) private var dynamicTypeSize

    public init(
        role: CharacterRole,
        reaction: CharacterReaction = .neutral,
        catalog: AssetCatalog = AssetCatalog(),
        message: String? = nil
    ) {
        self.role = role
        self.reaction = reaction
        self.catalog = catalog
        self.message = message
    }

    public var body: some View {
        Group {
            if dynamicTypeSize.isAccessibilitySize {
                VStack(alignment: .leading, spacing: 8) {
                    characterArtwork
                        .frame(maxWidth: .infinity)
                        .frame(height: 88)
                        .accessibilityHidden(true)
                    characterText
                }
            } else {
                HStack(alignment: .center, spacing: 12) {
                    characterArtwork
                        .frame(width: 92, height: 92)
                        .accessibilityHidden(true)
                    characterText
                }
            }
        }
        .padding(12)
        .background(RoundedRectangle(cornerRadius: 16).fill(.thinMaterial))
        .accessibilityElement(children: .ignore)
        .accessibilityLabel("\(roleTitle)。\(message ?? defaultMessage)")
        .accessibilityIdentifier(accessibilityID)
    }

    private var characterText: some View {
        VStack(alignment: .leading, spacing: 4) {
            Text(roleTitle)
                .font(.caption.weight(.bold))
                .foregroundStyle(.secondary)
            Text(message ?? defaultMessage)
                .font(.callout.weight(.semibold))
                .frame(maxWidth: .infinity, alignment: .leading)
        }
    }

    @ViewBuilder
    private var characterArtwork: some View {
        if let name = resolvedAsset?.resourceName {
            Image(name, bundle: .module)
                .resizable()
                .scaledToFit()
        } else {
            Image(systemName: fallbackSystemImage)
                .resizable()
                .scaledToFit()
                .padding(16)
                .foregroundStyle(.secondary)
        }
    }

    private var resolvedAsset: AssetRecord? {
        switch role {
        case .sergeant:
            return catalog.sergeant(reaction)
        case let .trainee(stage):
            return catalog.trainee(stage: stage, reaction: reaction)
        }
    }

    private var roleTitle: String {
        switch role {
        case .sergeant: return "鬼軍曹"
        case let .trainee(stage): return "訓練生 STAGE \(max(0, min(5, stage)))"
        }
    }

    private var defaultMessage: String {
        switch (role, reaction) {
        case (.sergeant, .neutral): return "次の1問だ。集中して選べ！"
        case (.sergeant, .correct): return "正解だ。その調子で続けろ！"
        case (.sergeant, .wrong): return "ここで修正だ。根拠を確認して次へ！"
        case (.sergeant, .complete): return "訓練完了。結果を確認しろ！"
        case (.trainee, .neutral): return "準備OK。"
        case (.trainee, .correct): return "POWERがついた！"
        case (.trainee, .wrong): return "次で取り返す。"
        case (.trainee, .complete): return "今日の訓練をやり切った！"
        }
    }

    private var fallbackSystemImage: String {
        switch role {
        case .sergeant: return "figure.strengthtraining.traditional"
        case .trainee: return "figure.strengthtraining.functional"
        }
    }

    private var accessibilityID: String {
        switch role {
        case .sergeant: return "character.sergeant"
        case .trainee: return "character.trainee"
        }
    }
}
#endif
