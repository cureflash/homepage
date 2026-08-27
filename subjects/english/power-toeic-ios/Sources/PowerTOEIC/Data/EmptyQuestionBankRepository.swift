import Foundation

public struct EmptyQuestionBankRepository: QuestionBankRepository {
    public init() {}

    public func question(id: String) throws -> Question? {
        nil
    }

    public func questions(skillId: String?, categoryId: String?) throws -> [Question] {
        []
    }

    public func skills() throws -> [Skill] {
        []
    }
}
