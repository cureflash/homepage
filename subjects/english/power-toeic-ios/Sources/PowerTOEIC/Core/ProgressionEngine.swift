import Foundation

public enum ProgressionEvent: Equatable, Sendable {
    case attempt(correct: Bool, firstCorrect: Bool, context: AttemptContext)
    case mastery(newlyMastered: Bool)
    case sessionComplete(questionCount: Int)
}

public struct ProgressionPointConfig: Equatable, Sendable {
    public let firstCorrect: Int
    public let mixedCorrectBonus: Int
    public let reviewCorrectBonus: Int
    public let masteryMilestone: Int
    public let substantialSessionComplete: Int

    public init(
        firstCorrect: Int = 2,
        mixedCorrectBonus: Int = 2,
        reviewCorrectBonus: Int = 3,
        masteryMilestone: Int = 10,
        substantialSessionComplete: Int = 5
    ) {
        self.firstCorrect = firstCorrect
        self.mixedCorrectBonus = mixedCorrectBonus
        self.reviewCorrectBonus = reviewCorrectBonus
        self.masteryMilestone = masteryMilestone
        self.substantialSessionComplete = substantialSessionComplete
    }
}

public struct ProgressionUpdate: Equatable, Sendable {
    public let points: Int
    public let stage: Int
    public let earned: Int

    public init(points: Int, stage: Int, earned: Int) {
        self.points = points
        self.stage = stage
        self.earned = earned
    }
}

public enum ProgressionEngineError: Error, Equatable {
    case negativePoints
    case invalidThresholds
}

public enum ProgressionEngine {
    public static let stageThresholds = [0, 20, 60, 140, 280, 500]
    public static let defaultConfig = ProgressionPointConfig()

    public static func stage(
        for points: Int,
        thresholds: [Int] = stageThresholds
    ) throws -> Int {
        guard points >= 0 else { throw ProgressionEngineError.negativePoints }
        guard !thresholds.isEmpty,
              thresholds.first == 0,
              zip(thresholds, thresholds.dropFirst()).allSatisfy({ pair in pair.0 <= pair.1 }) else {
            throw ProgressionEngineError.invalidThresholds
        }

        var resolvedStage = 0
        for (index, threshold) in thresholds.enumerated() where points >= threshold {
            resolvedStage = index
        }
        return min(5, resolvedStage)
    }

    public static func event(
        from attempt: Attempt,
        priorAttempts: [Attempt]
    ) -> ProgressionEvent {
        let wasSeenCorrect = priorAttempts.contains {
            $0.questionId == attempt.questionId && $0.correct
        }
        return .attempt(
            correct: attempt.correct,
            firstCorrect: attempt.correct && !wasSeenCorrect,
            context: attempt.context
        )
    }

    public static func apply(
        state: ProgressionState,
        event: ProgressionEvent,
        config: ProgressionPointConfig = defaultConfig
    ) throws -> ProgressionUpdate {
        guard state.points >= 0 else { throw ProgressionEngineError.negativePoints }

        var earned = 0
        switch event {
        case let .attempt(correct, firstCorrect, context):
            if correct {
                if firstCorrect { earned += config.firstCorrect }
                if context == .mixed { earned += config.mixedCorrectBonus }
                if context == .review { earned += config.reviewCorrectBonus }
            }
        case let .mastery(newlyMastered):
            if newlyMastered { earned += config.masteryMilestone }
        case let .sessionComplete(questionCount):
            if questionCount >= 10 { earned += config.substantialSessionComplete }
        }

        let clampedEarned = max(0, earned)
        let newPoints = state.points + clampedEarned
        return ProgressionUpdate(
            points: newPoints,
            stage: try stage(for: newPoints),
            earned: clampedEarned
        )
    }
}
