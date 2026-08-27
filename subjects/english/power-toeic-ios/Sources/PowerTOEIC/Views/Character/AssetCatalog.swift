import Foundation

public enum CharacterReaction: String, CaseIterable, Sendable {
    case neutral
    case correct
    case wrong
    case complete
}

public struct AssetRecord: Equatable, Sendable {
    public let semanticID: SemanticAssetID
    public let resourceName: String?
    public let sourceTitle: String?
    public let sourceURL: String?
    public let credit: String?

    public init(
        semanticID: SemanticAssetID,
        resourceName: String?,
        sourceTitle: String? = nil,
        sourceURL: String? = nil,
        credit: String? = nil
    ) {
        self.semanticID = semanticID
        self.resourceName = resourceName
        self.sourceTitle = sourceTitle
        self.sourceURL = sourceURL
        self.credit = credit
    }
}

public struct AssetCatalog: Sendable {
    public static let sergeantNeutral = SemanticAssetID(rawValue: "sergeant.neutral")
    public static let sergeantCorrect = SemanticAssetID(rawValue: "sergeant.correct")
    public static let sergeantWrong = SemanticAssetID(rawValue: "sergeant.wrong")
    public static let sergeantComplete = SemanticAssetID(rawValue: "sergeant.complete")

    public static let audioCorrect = SemanticAssetID(rawValue: "audio.correct")
    public static let audioWrong = SemanticAssetID(rawValue: "audio.wrong")
    public static let audioInspiration = SemanticAssetID(rawValue: "audio.inspiration")

    private let records: [SemanticAssetID: AssetRecord]
    private let aliases: [SemanticAssetID: SemanticAssetID]

    public init(
        records: [SemanticAssetID: AssetRecord] = AssetCatalog.defaultRecords,
        aliases: [SemanticAssetID: SemanticAssetID] = AssetCatalog.defaultAliases
    ) {
        self.records = records
        self.aliases = aliases
    }

    public static func sergeantID(_ reaction: CharacterReaction = .neutral) -> SemanticAssetID {
        SemanticAssetID(rawValue: "sergeant.\(reaction.rawValue)")
    }

    public static func traineeID(stage: Int, reaction: CharacterReaction = .neutral) -> SemanticAssetID {
        let normalizedStage = (0...5).contains(stage) ? stage : 0
        return SemanticAssetID(rawValue: "trainee.stage_\(normalizedStage).\(reaction.rawValue)")
    }

    public func resolve(_ id: SemanticAssetID, fallback: SemanticAssetID? = nil) -> AssetRecord? {
        if let direct = records[id] { return direct }
        if let alias = aliases[id], let aliased = records[alias] { return aliased }
        if let fallback {
            if let direct = records[fallback] { return direct }
            if let alias = aliases[fallback] { return records[alias] }
        }
        return nil
    }

    public func sergeant(_ reaction: CharacterReaction = .neutral) -> AssetRecord? {
        resolve(Self.sergeantID(reaction), fallback: Self.sergeantNeutral)
    }

    public func trainee(stage: Int, reaction: CharacterReaction = .neutral) -> AssetRecord? {
        let neutral = Self.traineeID(stage: stage, reaction: .neutral)
        return resolve(Self.traineeID(stage: stage, reaction: reaction), fallback: neutral)
            ?? resolve(Self.traineeID(stage: 0, reaction: .neutral))
    }

    public func audio(_ id: SemanticAssetID) -> AssetRecord? {
        resolve(id)
    }

    public static let defaultRecords: [SemanticAssetID: AssetRecord] = {
        var values: [SemanticAssetID: AssetRecord] = [:]

        let sergeant = AssetRecord(
            semanticID: sergeantNeutral,
            resourceName: "irasutoya_sergeant_instructor",
            sourceTitle: "法務教官のイラスト（男性）",
            sourceURL: "https://www.irasutoya.com/2017/09/blog-post_34.html"
        )
        values[sergeantNeutral] = sergeant

        let skinnySource = "https://www.irasutoya.com/2016/05/blog-post_397.html"
        for stage in 0...1 {
            let id = traineeID(stage: stage)
            values[id] = AssetRecord(
                semanticID: id,
                resourceName: "irasutoya_trainee_skinny",
                sourceTitle: "痩せた男性のイラスト",
                sourceURL: skinnySource
            )
        }

        let muscularSource = "https://www.irasutoya.com/2018/06/blog-post_865.html"
        for stage in 2...4 {
            let id = traineeID(stage: stage)
            values[id] = AssetRecord(
                semanticID: id,
                resourceName: "irasutoya_trainee_muscular",
                sourceTitle: "筋肉質な人のイラスト（男性）",
                sourceURL: muscularSource
            )
        }

        // Keep the semantic record and provenance fixed while the exact Stage 5
        // image bytes are still unbundled. CharacterView will render its safe
        // system-image fallback instead of requesting a missing SwiftPM resource.
        let finalID = traineeID(stage: 5)
        values[finalID] = AssetRecord(
            semanticID: finalID,
            resourceName: nil,
            sourceTitle: "ボディービルダーのイラスト",
            sourceURL: "https://www.irasutoya.com/2014/06/blog-post_14.html"
        )

        let credit = "OtoLogic (CC BY 4.0) / https://otologic.jp/"
        values[audioCorrect] = AssetRecord(
            semanticID: audioCorrect,
            resourceName: "otologic_correct.mp3",
            sourceTitle: "Quiz Ding Dong 05-1 (Fast-Short)",
            sourceURL: "https://otologic.jp/free/se/quiz01.html",
            credit: credit
        )
        values[audioWrong] = AssetRecord(
            semanticID: audioWrong,
            resourceName: "otologic_incorrect.mp3",
            sourceTitle: "Quiz Buzzer 05-1 (Mid)",
            sourceURL: "https://otologic.jp/free/se/quiz01.html",
            credit: credit
        )
        values[audioInspiration] = AssetRecord(
            semanticID: audioInspiration,
            resourceName: "otologic_inspiration.mp3",
            sourceTitle: "Inspiration 11-1 (Low)",
            sourceURL: "https://otologic.jp/free/se/inspiration01.html",
            credit: credit
        )
        return values
    }()

    public static let defaultAliases: [SemanticAssetID: SemanticAssetID] = {
        var values: [SemanticAssetID: SemanticAssetID] = [:]
        for reaction in CharacterReaction.allCases where reaction != .neutral {
            values[sergeantID(reaction)] = sergeantNeutral
            for stage in 0...5 {
                values[traineeID(stage: stage, reaction: reaction)] = traineeID(stage: stage)
            }
        }
        return values
    }()
}

public protocol AudioCuePlaying: Sendable {
    func play(_ id: SemanticAssetID)
}

public struct SilentAudioCuePlayer: AudioCuePlaying {
    public init() {}
    public func play(_ id: SemanticAssetID) {}
}
