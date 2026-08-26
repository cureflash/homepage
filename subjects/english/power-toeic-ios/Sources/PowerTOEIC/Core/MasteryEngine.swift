import Foundation

public struct MasteryConfig: Equatable, Sendable {
    public var minimumAttempts: Int
    public var recentWindow: Int
    public var weakAccuracyThreshold: Double
    public var mixedMinimumAttempts: Int
    public var mixedAccuracyThreshold: Double
    public var reviewMinimumAttempts: Int
    public var reviewAccuracyThreshold: Double

    public init(
        minimumAttempts: Int = 4,
        recentWindow: Int = 8,
        weakAccuracyThreshold: Double = 0.6,
        mixedMinimumAttempts: Int = 3,
        mixedAccuracyThreshold: Double = 0.8,
        reviewMinimumAttempts: Int = 2,
        reviewAccuracyThreshold: Double = 0.8
    ) {
        self.minimumAttempts = minimumAttempts
        self.recentWindow = recentWindow
        self.weakAccuracyThreshold = weakAccuracyThreshold
        self.mixedMinimumAttempts = mixedMinimumAttempts
        self.mixedAccuracyThreshold = mixedAccuracyThreshold
        self.reviewMinimumAttempts = reviewMinimumAttempts
        self.reviewAccuracyThreshold = reviewAccuracyThreshold
    }

    public static let `default` = MasteryConfig()
}

public struct MasteryAttemptEvidence: Codable, Equatable, Sendable {
    public let skillId: String
    public let correct: Bool
    public let context: AttemptContext

    public init(skillId: String, correct: Bool, context: AttemptContext) {
        self.skillId = skillId
        self.correct = correct
        self.context = context
    }

    public init(attempt: Attempt) {
        self.init(skillId: attempt.skillId, correct: attempt.correct, context: attempt.context)
    }
}

public enum MasteryEngineError: Error, Equatable, Sendable {
    case missingSkillID
    case invalidConfig
}

public enum MasteryEngine {
    public static func snapshot(
        skillId: String,
        attempts: [MasteryAttemptEvidence],
        config: MasteryConfig = .default
    ) throws -> MasterySnapshot {
        guard !skillId.isEmpty else { throw MasteryEngineError.missingSkillID }
        try validate(config)

        let skillAttempts = attempts.filter { $0.skillId == skillId }
        let correct = skillAttempts.filter(\.correct).count
        let recent = Array(skillAttempts.suffix(config.recentWindow))
        let recentCorrect = recent.filter(\.correct).count
        let accuracy = safeAccuracy(correct: correct, total: skillAttempts.count)
        let recentAccuracy = safeAccuracy(correct: recentCorrect, total: recent.count)
        let mixed = summarize(skillAttempts, context: .mixed)
        let review = summarize(skillAttempts, context: .review)

        let state: MasteryState
        if skillAttempts.isEmpty {
            state = .unknown
        } else if skillAttempts.count < config.minimumAttempts {
            state = .training
        } else if recentAccuracy < config.weakAccuracyThreshold {
            state = .weak
        } else if mixed.attempts < config.mixedMinimumAttempts || mixed.accuracy < config.mixedAccuracyThreshold {
            state = .training
        } else if review.attempts == 0 {
            state = .mixedPass
        } else if review.attempts < config.reviewMinimumAttempts || review.accuracy < config.reviewAccuracyThreshold {
            state = .reviewing
        } else {
            state = .mastered
        }

        return MasterySnapshot(
            skillId: skillId,
            state: state,
            attempts: skillAttempts.count,
            correct: correct,
            accuracy: accuracy,
            recentAttempts: recent.count,
            recentCorrect: recentCorrect,
            recentAccuracy: recentAccuracy,
            mixed: mixed,
            review: review
        )
    }

    public static func snapshots(
        attempts: [MasteryAttemptEvidence],
        skillIds: [String] = [],
        config: MasteryConfig = .default
    ) throws -> [MasterySnapshot] {
        try validate(config)
        var ordered: [String] = []
        var seen = Set<String>()
        for skillId in skillIds where !skillId.isEmpty {
            if seen.insert(skillId).inserted { ordered.append(skillId) }
        }
        let extras = Set(attempts.map(\.skillId))
            .filter { !$0.isEmpty && !seen.contains($0) }
            .sorted()
        return try (ordered + extras).map { try snapshot(skillId: $0, attempts: attempts, config: config) }
    }

    private static func validate(_ config: MasteryConfig) throws {
        let counts = [config.minimumAttempts, config.recentWindow, config.mixedMinimumAttempts, config.reviewMinimumAttempts]
        let thresholds = [config.weakAccuracyThreshold, config.mixedAccuracyThreshold, config.reviewAccuracyThreshold]
        guard counts.allSatisfy({ $0 >= 1 }), thresholds.allSatisfy({ $0.isFinite && (0...1).contains($0) }) else {
            throw MasteryEngineError.invalidConfig
        }
    }

    private static func safeAccuracy(correct: Int, total: Int) -> Double {
        total > 0 ? Double(correct) / Double(total) : 0
    }

    private static func summarize(_ attempts: [MasteryAttemptEvidence], context: AttemptContext) -> EvidenceSummary {
        let filtered = attempts.filter { $0.context == context }
        let correct = filtered.filter(\.correct).count
        return EvidenceSummary(
            attempts: filtered.count,
            correct: correct,
            accuracy: safeAccuracy(correct: correct, total: filtered.count)
        )
    }
}
