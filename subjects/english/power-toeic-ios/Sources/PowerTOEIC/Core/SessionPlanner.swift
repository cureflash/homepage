import Foundation

public enum SessionPlanner {
    public static let finiteSizes = [5, 10, 30, 50, 100]
    public static let endlessChunkSize = 30

    public static func resizedRecipe(_ recipe: WorkoutRecipe, totalCount: Int, seed: Int? = nil, endless: Bool = false) throws -> WorkoutRecipe {
        let resized = WorkoutRecipe(
            mode: recipe.mode, totalCount: totalCount,
            skillAllocations: recipe.skillAllocations.map {
                SkillAllocation(skillId: $0.skillId, weight: $0.weight ?? Double(max(1, $0.count ?? 1)))
            },
            selectionPolicy: recipe.selectionPolicy, labelPolicy: recipe.labelPolicy,
            seed: seed ?? recipe.seed, endless: endless
        )
        try WorkoutBuilder.validate(resized)
        return resized
    }
}
