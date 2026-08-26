import Foundation

public struct Skill: Codable, Equatable, Sendable {
    public let id: String
    public let label: String
    public let categoryId: String

    public init(id: String, label: String, categoryId: String) {
        self.id = id
        self.label = label
        self.categoryId = categoryId
    }
}

public struct Question: Codable, Equatable, Sendable {
    public let id: String
    public let version: Int
    public let skillId: String
    public let categoryId: String
    public let sentence: String
    public let choices: [String]
    public let correctIndex: Int
    public let explanation: String

    public init(id: String, version: Int, skillId: String, categoryId: String, sentence: String, choices: [String], correctIndex: Int, explanation: String) {
        self.id = id
        self.version = version
        self.skillId = skillId
        self.categoryId = categoryId
        self.sentence = sentence
        self.choices = choices
        self.correctIndex = correctIndex
        self.explanation = explanation
    }
}

public enum WorkoutMode: String, Codable, CaseIterable, Sendable {
    case quick = "QUICK"
    case training = "TRAINING"
    case power = "POWER"
    case weakness = "WEAKNESS"
    case custom = "CUSTOM"
    case test = "TEST"
    case review = "REVIEW"
}

public enum SelectionPolicy: String, Codable, Sendable {
    case standard
    case reviewDue = "review_due"
}

public enum LabelPolicy: String, Codable, Sendable {
    case showSkill = "show_skill"
    case hideSkill = "hide_skill"
}

public struct SkillAllocation: Codable, Equatable, Sendable {
    public let skillId: String
    public let count: Int?
    public let weight: Double?

    public init(skillId: String, count: Int? = nil, weight: Double? = nil) {
        self.skillId = skillId
        self.count = count
        self.weight = weight
    }
}

public struct WorkoutRecipe: Codable, Equatable, Sendable {
    public let mode: WorkoutMode
    public let totalCount: Int
    public let skillAllocations: [SkillAllocation]
    public let selectionPolicy: SelectionPolicy
    public let labelPolicy: LabelPolicy
    public let seed: Int
    public let endless: Bool

    public init(mode: WorkoutMode, totalCount: Int, skillAllocations: [SkillAllocation], selectionPolicy: SelectionPolicy, labelPolicy: LabelPolicy, seed: Int, endless: Bool) {
        self.mode = mode
        self.totalCount = totalCount
        self.skillAllocations = skillAllocations
        self.selectionPolicy = selectionPolicy
        self.labelPolicy = labelPolicy
        self.seed = seed
        self.endless = endless
    }
}

public enum AttemptContext: String, Codable, Sendable {
    case training
    case mixed
    case review
}

public struct Attempt: Codable, Equatable, Sendable {
    public let questionId: String
    public let questionVersion: Int
    public let skillId: String
    public let selectedIndex: Int
    public let correctIndex: Int
    public let correct: Bool
    public let responseMs: Int
    public let answeredAt: String
    public let context: AttemptContext

    public init(questionId: String, questionVersion: Int, skillId: String, selectedIndex: Int, correctIndex: Int, correct: Bool, responseMs: Int, answeredAt: String, context: AttemptContext) {
        self.questionId = questionId
        self.questionVersion = questionVersion
        self.skillId = skillId
        self.selectedIndex = selectedIndex
        self.correctIndex = correctIndex
        self.correct = correct
        self.responseMs = responseMs
        self.answeredAt = answeredAt
        self.context = context
    }
}

public enum MasteryState: String, Codable, Sendable {
    case unknown
    case training
    case weak
    case mixedPass = "mixed_pass"
    case reviewing
    case mastered
}

public struct EvidenceSummary: Codable, Equatable, Sendable {
    public let attempts: Int
    public let correct: Int
    public let accuracy: Double

    public init(attempts: Int, correct: Int, accuracy: Double) {
        self.attempts = attempts
        self.correct = correct
        self.accuracy = accuracy
    }
}

public struct MasterySnapshot: Codable, Equatable, Sendable {
    public let skillId: String
    public let state: MasteryState
    public let attempts: Int
    public let correct: Int
    public let accuracy: Double
    public let recentAttempts: Int
    public let recentCorrect: Int
    public let recentAccuracy: Double
    public let mixed: EvidenceSummary
    public let review: EvidenceSummary
}

public struct ReviewEntry: Codable, Equatable, Sendable {
    public let questionId: String
    public let questionVersion: Int
    public let skillId: String
    public let dueAt: String
    public let intervalIndex: Int
    public let status: String
    public let lastAttemptAt: String
}

public struct ProgressionState: Codable, Equatable, Sendable {
    public let points: Int
    public let stage: Int

    public init(points: Int, stage: Int) {
        self.points = points
        self.stage = stage
    }
}

public enum QuestionReportReason: String, Codable, Sendable {
    case ambiguous
    case unnaturalEnglish = "unnatural_english"
    case wrongAnswer = "wrong_answer"
    case wrongExplanation = "wrong_explanation"
    case other
}

public struct QuestionReport: Codable, Equatable, Sendable {
    public let id: String
    public let questionId: String
    public let questionVersion: Int
    public let reason: QuestionReportReason
    public let detail: String
    public let createdAt: String
}

public struct SemanticAssetID: RawRepresentable, Codable, Equatable, Hashable, Sendable {
    public let rawValue: String

    public init(rawValue: String) {
        self.rawValue = rawValue
    }
}

public struct PersistenceEnvelope: Codable, Equatable, Sendable {
    public let version: Int
    public let attempts: [Attempt]
    public let reviewEntries: [ReviewEntry]
    public let progression: ProgressionState

    public init(version: Int, attempts: [Attempt], reviewEntries: [ReviewEntry], progression: ProgressionState) {
        self.version = version
        self.attempts = attempts
        self.reviewEntries = reviewEntries
        self.progression = progression
    }
}
