import Foundation

public struct EditableSkillCount: Equatable, Identifiable {
    public let skillId: String
    public var count: Int
    public var id: String { skillId }
}

public struct WorkoutDraft {
    public var totalCount: Int
    public var endless: Bool
    public var allocations: [EditableSkillCount]
    private let source: WorkoutRecipe

    public init(recipe: WorkoutRecipe) {
        source = recipe
        totalCount = recipe.totalCount
        endless = recipe.endless
        allocations = WorkoutBuilder.resolvedSkillAllocations(recipe).map {
            EditableSkillCount(skillId: $0.skillId, count: $0.count ?? 1)
        }
    }

    public func recipe() throws -> WorkoutRecipe {
        guard !allocations.isEmpty else { throw WorkoutBuilderError.weaknessRequiresSkills }
        let recipe = WorkoutRecipe(
            mode: source.mode == .weakness ? .custom : source.mode,
            totalCount: totalCount,
            skillAllocations: allocations.map { SkillAllocation(skillId: $0.skillId, count: $0.count) },
            selectionPolicy: source.selectionPolicy, labelPolicy: source.labelPolicy,
            seed: source.seed, endless: endless
        )
        try WorkoutBuilder.validate(recipe)
        return recipe
    }

    public mutating func resize(to size: Int) throws {
        let weighted = WorkoutRecipe(
            mode: source.mode, totalCount: size,
            skillAllocations: allocations.map { SkillAllocation(skillId: $0.skillId, weight: Double(max(1, $0.count))) },
            selectionPolicy: source.selectionPolicy, labelPolicy: source.labelPolicy,
            seed: source.seed, endless: endless
        )
        try WorkoutBuilder.validate(weighted)
        totalCount = size
        allocations = WorkoutBuilder.resolvedSkillAllocations(weighted).map {
            EditableSkillCount(skillId: $0.skillId, count: $0.count ?? 1)
        }
    }
}
