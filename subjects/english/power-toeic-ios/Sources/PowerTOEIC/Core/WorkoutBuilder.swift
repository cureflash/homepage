import Foundation

public enum WorkoutBuilderError: Error, Equatable, Sendable {
    case invalidTotalCount
    case invalidSeed
    case duplicateSkillAllocation(String)
    case missingSkillID
    case invalidAllocation(String)
    case allocationCountsExceedTotal
    case testMustHideSkill
    case reviewMustUseDueSelection
    case presetRequiresSkill(WorkoutMode)
    case weaknessRequiresSkills
}

public struct QuestionHistoryEntry: Codable, Equatable, Sendable {
    public let questionId: String
    public let answeredAt: String

    public init(questionId: String, answeredAt: String) {
        self.questionId = questionId
        self.answeredAt = answeredAt
    }
}

public enum WorkoutBuilder {
    public static func validate(_ recipe: WorkoutRecipe) throws {
        guard recipe.totalCount > 0 else { throw WorkoutBuilderError.invalidTotalCount }
        guard recipe.seed >= 0 else { throw WorkoutBuilderError.invalidSeed }

        var seen = Set<String>()
        var explicitCount = 0
        for allocation in recipe.skillAllocations {
            guard !allocation.skillId.isEmpty else { throw WorkoutBuilderError.missingSkillID }
            guard seen.insert(allocation.skillId).inserted else {
                throw WorkoutBuilderError.duplicateSkillAllocation(allocation.skillId)
            }
            let hasCount = allocation.count != nil
            let hasWeight = allocation.weight != nil
            guard hasCount != hasWeight else {
                throw WorkoutBuilderError.invalidAllocation(allocation.skillId)
            }
            if let count = allocation.count {
                guard count > 0 else { throw WorkoutBuilderError.invalidAllocation(allocation.skillId) }
                explicitCount += count
            }
            if let weight = allocation.weight {
                guard weight.isFinite, weight > 0 else {
                    throw WorkoutBuilderError.invalidAllocation(allocation.skillId)
                }
            }
        }
        guard explicitCount <= recipe.totalCount else {
            throw WorkoutBuilderError.allocationCountsExceedTotal
        }
        if recipe.mode == .test, recipe.labelPolicy != .hideSkill {
            throw WorkoutBuilderError.testMustHideSkill
        }
        if recipe.mode == .review, recipe.selectionPolicy != .reviewDue {
            throw WorkoutBuilderError.reviewMustUseDueSelection
        }
    }

    public static func selectQuestionIDs(
        repository: any QuestionBankRepository,
        recipe: WorkoutRecipe,
        history: [QuestionHistoryEntry] = [],
        reviewQuestionIDs: [String] = []
    ) throws -> [String] {
        try validate(recipe)
        var selected: [String] = []
        var used = Set<String>()
        let reviewSet = Set(reviewQuestionIDs)

        func addFrom(_ questions: [Question], count requestedCount: Int, salt: Int) {
            var remaining = requestedCount
            for question in rankCandidates(questions, history: history, seed: recipe.seed + salt) {
                if selected.count >= recipe.totalCount || remaining <= 0 { break }
                guard used.insert(question.id).inserted else { continue }
                selected.append(question.id)
                remaining -= 1
            }
        }

        if recipe.selectionPolicy == .reviewDue {
            let eligible = try repository.questions().filter { reviewSet.contains($0.id) }
            addFrom(eligible, count: recipe.totalCount, salt: 9_000)
            return selected
        }

        let allocations = allocationCounts(recipe)
        for (index, allocation) in allocations.enumerated() {
            let questions = try repository.questions(skillId: allocation.skillId)
            addFrom(questions, count: allocation.resolvedCount, salt: index + 1)
        }
        if selected.count < recipe.totalCount {
            addFrom(
                try repository.questions(),
                count: recipe.totalCount - selected.count,
                salt: 5_000
            )
        }
        return selected
    }

    public static func presetRecipe(
        _ mode: WorkoutMode,
        skillId: String? = nil,
        totalCount: Int? = nil,
        seed: Int = 1,
        endless: Bool = false
    ) throws -> WorkoutRecipe {
        let defaults: [WorkoutMode: Int] = [
            .quick: 10,
            .training: 30,
            .power: 100,
            .test: 30,
            .review: 30,
        ]
        guard let count = totalCount ?? defaults[mode] else {
            throw WorkoutBuilderError.invalidTotalCount
        }
        if (mode == .training || mode == .power), skillId == nil {
            throw WorkoutBuilderError.presetRequiresSkill(mode)
        }
        let allocations = skillId.map { [SkillAllocation(skillId: $0, count: count)] } ?? []
        let recipe = WorkoutRecipe(
            mode: mode,
            totalCount: count,
            skillAllocations: allocations,
            selectionPolicy: mode == .review ? .reviewDue : .standard,
            labelPolicy: mode == .test ? .hideSkill : .showSkill,
            seed: seed,
            endless: endless
        )
        try validate(recipe)
        return recipe
    }

    public static func weaknessRecipe(
        rankedWeaknesses: [(skillId: String, score: Double)],
        totalCount: Int = 30,
        maxSkills: Int = 3,
        seed: Int = 1
    ) throws -> WorkoutRecipe {
        let eligible = rankedWeaknesses
            .filter { !$0.skillId.isEmpty }
            .prefix(maxSkills)
        guard !eligible.isEmpty else { throw WorkoutBuilderError.weaknessRequiresSkills }
        let count = eligible.count
        let allocations = eligible.enumerated().map { index, entry in
            SkillAllocation(
                skillId: entry.skillId,
                weight: max(1, entry.score.isFinite && entry.score != 0 ? entry.score : Double(count - index))
            )
        }
        let recipe = WorkoutRecipe(
            mode: .weakness,
            totalCount: totalCount,
            skillAllocations: allocations,
            selectionPolicy: .standard,
            labelPolicy: .showSkill,
            seed: seed,
            endless: false
        )
        try validate(recipe)
        return recipe
    }

    private struct ResolvedAllocation {
        let skillId: String
        let weight: Double?
        var resolvedCount: Int
    }

    private static func allocationCounts(_ recipe: WorkoutRecipe) -> [ResolvedAllocation] {
        guard !recipe.skillAllocations.isEmpty else { return [] }
        var result = recipe.skillAllocations.map {
            ResolvedAllocation(skillId: $0.skillId, weight: $0.weight, resolvedCount: $0.count ?? 0)
        }
        var remaining = recipe.totalCount - result.reduce(0) { $0 + $1.resolvedCount }
        let weightedIndices = result.indices.filter { result[$0].weight != nil }
        guard !weightedIndices.isEmpty else { return result }
        let weightTotal = weightedIndices.reduce(0.0) { $0 + (result[$1].weight ?? 0) }
        let weightedBudget = remaining
        for index in weightedIndices {
            let share = Int(floor(Double(weightedBudget) * (result[index].weight ?? 0) / weightTotal))
            result[index].resolvedCount += share
            remaining -= share
        }
        var cursor = 0
        while remaining > 0 {
            let index = weightedIndices[cursor % weightedIndices.count]
            result[index].resolvedCount += 1
            cursor += 1
            remaining -= 1
        }
        return result
    }

    private struct HistoryValue {
        var lastSeen: Int64
        var seenCount: Int
    }

    private static func historyByQuestion(_ history: [QuestionHistoryEntry]) -> [String: HistoryValue] {
        var result: [String: HistoryValue] = [:]
        for (index, entry) in history.enumerated() {
            guard !entry.questionId.isEmpty else { continue }
            let parsed = iso8601Milliseconds(entry.answeredAt) ?? Int64(index)
            if var previous = result[entry.questionId] {
                previous.seenCount += 1
                if parsed >= previous.lastSeen { previous.lastSeen = parsed }
                result[entry.questionId] = previous
            } else {
                result[entry.questionId] = HistoryValue(lastSeen: parsed, seenCount: 1)
            }
        }
        return result
    }

    private static func rankCandidates(
        _ questions: [Question],
        history: [QuestionHistoryEntry],
        seed: Int
    ) -> [Question] {
        let seen = historyByQuestion(history)
        return questions.sorted { lhs, rhs in
            let left = seen[lhs.id]
            let right = seen[rhs.id]
            if left == nil, right != nil { return true }
            if left != nil, right == nil { return false }
            if let left, let right, left.lastSeen != right.lastSeen {
                return left.lastSeen < right.lastSeen
            }
            let leftHash = hashSeed(seed: seed, text: lhs.id)
            let rightHash = hashSeed(seed: seed, text: rhs.id)
            if leftHash != rightHash { return leftHash < rightHash }
            return lhs.id < rhs.id
        }
    }

    private static func hashSeed(seed: Int, text: String) -> UInt32 {
        var hash = UInt32(2_166_136_261) ^ UInt32(truncatingIfNeeded: seed)
        for codeUnit in text.utf16 {
            hash ^= UInt32(codeUnit)
            hash = hash &* 16_777_619
        }
        return hash
    }

    private static func iso8601Milliseconds(_ value: String) -> Int64? {
        let formatter = ISO8601DateFormatter()
        formatter.formatOptions = [.withInternetDateTime, .withFractionalSeconds]
        guard let date = formatter.date(from: value) else { return nil }
        return Int64(date.timeIntervalSince1970 * 1_000)
    }
}
