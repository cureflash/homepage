import Foundation

public struct WeaknessConfig: Equatable, Sendable {
    public var recentWeight: Double
    public var overallWeight: Double
    public var weakStateBonus: Double

    public init(recentWeight: Double = 0.7, overallWeight: Double = 0.3, weakStateBonus: Double = 0.15) {
        self.recentWeight = recentWeight
        self.overallWeight = overallWeight
        self.weakStateBonus = weakStateBonus
    }

    public static let `default` = WeaknessConfig()
}

public struct WeaknessRank: Equatable, Sendable {
    public let skillId: String
    public let state: MasteryState
    public let attempts: Int
    public let accuracy: Double
    public let recentAccuracy: Double
    public let weaknessScore: Double

    public init(skillId: String, state: MasteryState, attempts: Int, accuracy: Double, recentAccuracy: Double, weaknessScore: Double) {
        self.skillId = skillId
        self.state = state
        self.attempts = attempts
        self.accuracy = accuracy
        self.recentAccuracy = recentAccuracy
        self.weaknessScore = weaknessScore
    }
}

public enum WeaknessRankerError: Error, Equatable, Sendable {
    case invalidWeights
}

public enum WeaknessRanker {
    public static func rank(
        _ snapshots: [MasterySnapshot],
        config: WeaknessConfig = .default
    ) throws -> [WeaknessRank] {
        let weightTotal = config.recentWeight + config.overallWeight
        guard weightTotal.isFinite, weightTotal > 0 else { throw WeaknessRankerError.invalidWeights }

        return snapshots
            .filter { $0.attempts > 0 }
            .map { snapshot in
                let overallError = 1 - snapshot.accuracy
                let recentError = 1 - snapshot.recentAccuracy
                let base = (
                    recentError * config.recentWeight + overallError * config.overallWeight
                ) / weightTotal
                let stateBonus = snapshot.state == .weak ? config.weakStateBonus : 0
                return WeaknessRank(
                    skillId: snapshot.skillId,
                    state: snapshot.state,
                    attempts: snapshot.attempts,
                    accuracy: snapshot.accuracy,
                    recentAccuracy: snapshot.recentAccuracy,
                    weaknessScore: base + stateBonus
                )
            }
            .sorted { lhs, rhs in
                if lhs.weaknessScore != rhs.weaknessScore { return lhs.weaknessScore > rhs.weaknessScore }
                if lhs.attempts != rhs.attempts { return lhs.attempts > rhs.attempts }
                return lhs.skillId < rhs.skillId
            }
    }
}
