import Foundation

public enum BundledQuestionBankError: Error, Equatable {
    case missingResource
    case invalidBank
}

public struct BundledQuestionBankRepository: QuestionBankRepository {
    private struct Bank: Decodable, Sendable {
        let format: String
        let categories: [QuestionCategory]
        let skills: [Skill]
        let questions: [Question]
    }

    private let bank: Bank
    private let byID: [String: Question]

    public init() throws {
        guard let url = Bundle.module.url(forResource: "pilot-bank", withExtension: "json") else {
            throw BundledQuestionBankError.missingResource
        }
        try self.init(data: Data(contentsOf: url))
    }

    public init(data: Data) throws {
        let decoded = try JSONDecoder().decode(Bank.self, from: data)
        let skillIDs = Set(decoded.skills.map(\.id))
        guard decoded.format == "power-toeic-pilot-runtime-bank-v1",
              !decoded.questions.isEmpty,
              Set(decoded.questions.map(\.id)).count == decoded.questions.count,
              skillIDs.count == decoded.skills.count,
              decoded.questions.allSatisfy({ question in
                  !question.id.isEmpty && question.version > 0 && skillIDs.contains(question.skillId)
                    && question.choices.count == 4 && Set(question.choices).count == 4
                    && question.choices.allSatisfy({ !$0.isEmpty }) && (0...3).contains(question.correctIndex)
              }) else { throw BundledQuestionBankError.invalidBank }
        bank = decoded
        byID = Dictionary(uniqueKeysWithValues: decoded.questions.map { ($0.id, $0) })
    }

    public func question(id: String) throws -> Question? { byID[id] }
    public func skills() throws -> [Skill] { bank.skills }
    public func categories() throws -> [QuestionCategory] { bank.categories }
    public func questions(skillId: String?, categoryId: String?) throws -> [Question] {
        bank.questions.filter { (skillId == nil || $0.skillId == skillId) && (categoryId == nil || $0.categoryId == categoryId) }
    }
}
