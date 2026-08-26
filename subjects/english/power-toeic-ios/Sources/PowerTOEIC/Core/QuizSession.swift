import Foundation

public enum QuizSessionError: Error, Equatable, Sendable {
    case emptyQuestionIDs
    case sessionComplete
    case currentQuestionAlreadyAnswered
    case answerRequiredBeforeAdvancing
    case questionNotFound(String)
    case invalidAnswerIndex(Int)
}

public struct SkillResult: Equatable, Sendable {
    public let answered: Int
    public let correct: Int

    public init(answered: Int, correct: Int) {
        self.answered = answered
        self.correct = correct
    }
}

public struct SessionResults: Equatable, Sendable {
    public let answered: Int
    public let correct: Int
    public let accuracy: Double
    public let bySkill: [String: SkillResult]

    public init(answered: Int, correct: Int, accuracy: Double, bySkill: [String: SkillResult]) {
        self.answered = answered
        self.correct = correct
        self.accuracy = accuracy
        self.bySkill = bySkill
    }
}

public final class QuizSession {
    public typealias Clock = () -> Int

    private let repository: any QuestionBankRepository
    private let clock: Clock
    public let questionIDs: [String]
    public let context: AttemptContext

    public private(set) var index: Int = 0
    public private(set) var attempts: [Attempt] = []
    private var questionStartedAt: Int
    private var answeredCurrent = false

    public init(
        questionIDs: [String],
        repository: any QuestionBankRepository,
        clock: @escaping Clock = { Int(Date().timeIntervalSince1970 * 1_000) },
        context: AttemptContext = .training
    ) throws {
        guard !questionIDs.isEmpty else { throw QuizSessionError.emptyQuestionIDs }
        self.questionIDs = questionIDs
        self.repository = repository
        self.clock = clock
        self.context = context
        self.questionStartedAt = clock()
    }

    public var isComplete: Bool {
        index >= questionIDs.count
    }

    public var currentQuestion: Question? {
        guard !isComplete else { return nil }
        return try? repository.question(id: questionIDs[index])
    }

    public var progress: (current: Int, total: Int) {
        (min(index + 1, questionIDs.count), questionIDs.count)
    }

    @discardableResult
    public func submitAnswer(_ selectedIndex: Int) throws -> Attempt {
        guard !isComplete else { throw QuizSessionError.sessionComplete }
        guard !answeredCurrent else { throw QuizSessionError.currentQuestionAlreadyAnswered }

        let questionID = questionIDs[index]
        guard let question = try repository.question(id: questionID) else {
            throw QuizSessionError.questionNotFound(questionID)
        }
        guard question.choices.indices.contains(selectedIndex) else {
            throw QuizSessionError.invalidAnswerIndex(selectedIndex)
        }

        let answeredAtMs = clock()
        let attempt = Attempt(
            questionId: question.id,
            questionVersion: question.version,
            skillId: question.skillId,
            selectedIndex: selectedIndex,
            correctIndex: question.correctIndex,
            correct: selectedIndex == question.correctIndex,
            responseMs: max(0, answeredAtMs - questionStartedAt),
            answeredAt: Self.iso8601(millisecondsSince1970: answeredAtMs),
            context: context
        )
        attempts.append(attempt)
        answeredCurrent = true
        return attempt
    }

    @discardableResult
    public func next() throws -> Question? {
        guard answeredCurrent else { throw QuizSessionError.answerRequiredBeforeAdvancing }
        index += 1
        answeredCurrent = false
        questionStartedAt = clock()
        guard !isComplete else { return nil }
        let questionID = questionIDs[index]
        guard let question = try repository.question(id: questionID) else {
            throw QuizSessionError.questionNotFound(questionID)
        }
        return question
    }

    public func results() -> SessionResults {
        let correct = attempts.reduce(into: 0) { total, attempt in
            if attempt.correct { total += 1 }
        }
        var bySkill: [String: SkillResult] = [:]
        for attempt in attempts {
            let previous = bySkill[attempt.skillId] ?? SkillResult(answered: 0, correct: 0)
            bySkill[attempt.skillId] = SkillResult(
                answered: previous.answered + 1,
                correct: previous.correct + (attempt.correct ? 1 : 0)
            )
        }
        return SessionResults(
            answered: attempts.count,
            correct: correct,
            accuracy: attempts.isEmpty ? 0 : Double(correct) / Double(attempts.count),
            bySkill: bySkill
        )
    }

    private static func iso8601(millisecondsSince1970 milliseconds: Int) -> String {
        let date = Date(timeIntervalSince1970: Double(milliseconds) / 1_000)
        let formatter = ISO8601DateFormatter()
        formatter.formatOptions = [.withInternetDateTime, .withFractionalSeconds]
        formatter.timeZone = TimeZone(secondsFromGMT: 0)
        return formatter.string(from: date)
    }
}
