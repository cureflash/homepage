import Foundation

public protocol QuestionBankRepository: Sendable {
    func question(id: String) throws -> Question?
    func questions(skillId: String?, categoryId: String?) throws -> [Question]
    func skills() throws -> [Skill]
}

public extension QuestionBankRepository {
    func questions() throws -> [Question] {
        try questions(skillId: nil, categoryId: nil)
    }

    func questions(skillId: String) throws -> [Question] {
        try questions(skillId: skillId, categoryId: nil)
    }
}
