import Foundation

public protocol QuestionBankRepository: Sendable {
    func question(id: String) throws -> Question?
    func questions(skillId: String?, categoryId: String?) throws -> [Question]
    func skills() throws -> [Skill]
    func categories() throws -> [QuestionCategory]
}

public extension QuestionBankRepository {
    func categories() throws -> [QuestionCategory] {
        let ids = Set(try skills().map(\.categoryId)).sorted()
        return ids.map { QuestionCategory(id: $0, label: $0) }
    }

    func questions() throws -> [Question] {
        try questions(skillId: nil, categoryId: nil)
    }

    func questions(skillId: String) throws -> [Question] {
        try questions(skillId: skillId, categoryId: nil)
    }
}
