import Foundation

public struct ReviewAttemptEvidence: Codable, Equatable, Sendable {
    public let questionId: String
    public let questionVersion: Int
    public let skillId: String
    public let correct: Bool
    public let context: AttemptContext
    public let answeredAt: String

    public init(questionId: String, questionVersion: Int, skillId: String, correct: Bool, context: AttemptContext, answeredAt: String) {
        self.questionId = questionId
        self.questionVersion = questionVersion
        self.skillId = skillId
        self.correct = correct
        self.context = context
        self.answeredAt = answeredAt
    }

    public init(attempt: Attempt) {
        self.init(
            questionId: attempt.questionId,
            questionVersion: attempt.questionVersion,
            skillId: attempt.skillId,
            correct: attempt.correct,
            context: attempt.context,
            answeredAt: attempt.answeredAt
        )
    }
}

public enum ReviewSchedulerError: Error, Equatable, Sendable {
    case invalidAttempt
    case invalidIntervals
    case invalidDateTime
}

public enum ReviewScheduler {
    public static let defaultIntervals = [1, 3, 7, 14]

    public static func entry(
        from attempt: ReviewAttemptEvidence,
        previousEntry: ReviewEntry? = nil,
        intervals: [Int] = defaultIntervals
    ) throws -> ReviewEntry {
        guard !attempt.questionId.isEmpty,
              attempt.questionVersion > 0,
              !attempt.skillId.isEmpty else {
            throw ReviewSchedulerError.invalidAttempt
        }
        guard !intervals.isEmpty, intervals.allSatisfy({ $0 > 0 }) else {
            throw ReviewSchedulerError.invalidIntervals
        }
        guard let answeredAt = parse(attempt.answeredAt) else {
            throw ReviewSchedulerError.invalidDateTime
        }

        let previousIndex = previousEntry?.intervalIndex ?? -1
        let intervalIndex: Int
        if attempt.context == .review && attempt.correct {
            intervalIndex = min(previousIndex + 1, intervals.count - 1)
        } else {
            intervalIndex = 0
        }
        let dueDate = answeredAt.addingTimeInterval(Double(intervals[intervalIndex]) * 86_400)

        return ReviewEntry(
            questionId: attempt.questionId,
            questionVersion: attempt.questionVersion,
            skillId: attempt.skillId,
            dueAt: format(dueDate),
            intervalIndex: intervalIndex,
            status: "scheduled",
            lastAttemptAt: attempt.answeredAt
        )
    }

    public static func upsert(_ entries: [ReviewEntry], nextEntry: ReviewEntry) -> [ReviewEntry] {
        (entries.filter { $0.questionId != nextEntry.questionId } + [nextEntry])
            .sorted {
                if $0.dueAt != $1.dueAt { return $0.dueAt < $1.dueAt }
                return $0.questionId < $1.questionId
            }
    }

    public static func dueEntries(_ entries: [ReviewEntry], now: String) throws -> [ReviewEntry] {
        guard let nowDate = parse(now) else { throw ReviewSchedulerError.invalidDateTime }
        return try entries
            .filter { entry in
                guard entry.status == "scheduled" else { return false }
                guard let dueDate = parse(entry.dueAt) else { throw ReviewSchedulerError.invalidDateTime }
                return dueDate <= nowDate
            }
            .sorted {
                if $0.dueAt != $1.dueAt { return $0.dueAt < $1.dueAt }
                return $0.questionId < $1.questionId
            }
    }

    public static func dueQuestionIDs(_ entries: [ReviewEntry], now: String) throws -> [String] {
        try dueEntries(entries, now: now).map(\.questionId)
    }

    private static func parse(_ value: String) -> Date? {
        let fractional = ISO8601DateFormatter()
        fractional.formatOptions = [.withInternetDateTime, .withFractionalSeconds]
        if let date = fractional.date(from: value) { return date }
        let plain = ISO8601DateFormatter()
        plain.formatOptions = [.withInternetDateTime]
        return plain.date(from: value)
    }

    private static func format(_ date: Date) -> String {
        let formatter = ISO8601DateFormatter()
        formatter.formatOptions = [.withInternetDateTime, .withFractionalSeconds]
        formatter.timeZone = TimeZone(secondsFromGMT: 0)
        return formatter.string(from: date)
    }
}
