import Foundation

public let nativeAppStateVersion = 1
public let defaultNativeAppStateKey = "power-toeic.app-state"

public enum NativeAppStoreError: Error, Equatable {
    case invalidState
    case invalidAttempt
    case invalidReviewEntries
    case invalidProgression
}

public protocol AppStatePersistenceBackend {
    func readData(forKey key: String) throws -> Data?
    func writeData(_ data: Data, forKey key: String) throws
    func removeData(forKey key: String) throws
}

public struct UserDefaultsPersistenceBackend: AppStatePersistenceBackend {
    private let defaults: UserDefaults

    public init(defaults: UserDefaults = .standard) {
        self.defaults = defaults
    }

    public func readData(forKey key: String) throws -> Data? {
        defaults.data(forKey: key)
    }

    public func writeData(_ data: Data, forKey key: String) throws {
        defaults.set(data, forKey: key)
    }

    public func removeData(forKey key: String) throws {
        defaults.removeObject(forKey: key)
    }
}

public func createDefaultNativeAppState() -> PersistenceEnvelope {
    PersistenceEnvelope(
        version: nativeAppStateVersion,
        attempts: [],
        reviewEntries: [],
        progression: ProgressionState(points: 0, stage: 0)
    )
}

public enum NativeAppStateValidator {
    public static func isValid(_ state: PersistenceEnvelope) -> Bool {
        state.version == nativeAppStateVersion
            && state.attempts.allSatisfy(isValidAttempt)
            && state.reviewEntries.allSatisfy(isValidReviewEntry)
            && isValidProgression(state.progression)
    }

    public static func isValidAttempt(_ attempt: Attempt) -> Bool {
        !attempt.questionId.isEmpty
            && attempt.questionVersion > 0
            && !attempt.skillId.isEmpty
            && (0...3).contains(attempt.selectedIndex)
            && (0...3).contains(attempt.correctIndex)
            && attempt.correct == (attempt.selectedIndex == attempt.correctIndex)
            && attempt.responseMs >= 0
            && !attempt.answeredAt.isEmpty
    }

    public static func isValidReviewEntry(_ entry: ReviewEntry) -> Bool {
        !entry.questionId.isEmpty
            && entry.questionVersion > 0
            && !entry.skillId.isEmpty
            && !entry.dueAt.isEmpty
            && entry.intervalIndex >= 0
            && !entry.status.isEmpty
            && !entry.lastAttemptAt.isEmpty
    }

    public static func isValidProgression(_ progression: ProgressionState) -> Bool {
        progression.points >= 0 && (0...5).contains(progression.stage)
    }
}

public final class VersionedNativeAppStore {
    private let backend: any AppStatePersistenceBackend
    private let key: String
    private let encoder: JSONEncoder
    private let decoder: JSONDecoder

    public init(
        backend: any AppStatePersistenceBackend = UserDefaultsPersistenceBackend(),
        key: String = defaultNativeAppStateKey
    ) {
        self.backend = backend
        self.key = key
        self.encoder = JSONEncoder()
        self.encoder.outputFormatting = [.sortedKeys]
        self.decoder = JSONDecoder()
    }

    public func load() -> PersistenceEnvelope {
        let data: Data
        do {
            guard let stored = try backend.readData(forKey: key) else {
                return createDefaultNativeAppState()
            }
            data = stored
        } catch {
            return createDefaultNativeAppState()
        }

        do {
            let decoded = try decoder.decode(PersistenceEnvelope.self, from: data)
            guard NativeAppStateValidator.isValid(decoded) else {
                resetInvalidPayload()
                return createDefaultNativeAppState()
            }
            return decoded
        } catch {
            resetInvalidPayload()
            return createDefaultNativeAppState()
        }
    }

    @discardableResult
    public func save(_ state: PersistenceEnvelope) throws -> PersistenceEnvelope {
        guard NativeAppStateValidator.isValid(state) else {
            throw NativeAppStoreError.invalidState
        }

        let data = try encoder.encode(state)
        do {
            try backend.writeData(data, forKey: key)
        } catch {
            // Native storage failure must not make the quiz unusable.
        }
        return state
    }

    @discardableResult
    public func appendAttempt(_ attempt: Attempt) throws -> PersistenceEnvelope {
        guard NativeAppStateValidator.isValidAttempt(attempt) else {
            throw NativeAppStoreError.invalidAttempt
        }
        let current = load()
        return try save(PersistenceEnvelope(
            version: current.version,
            attempts: current.attempts + [attempt],
            reviewEntries: current.reviewEntries,
            progression: current.progression
        ))
    }

    @discardableResult
    public func replaceReviewEntries(_ reviewEntries: [ReviewEntry]) throws -> PersistenceEnvelope {
        guard reviewEntries.allSatisfy(NativeAppStateValidator.isValidReviewEntry) else {
            throw NativeAppStoreError.invalidReviewEntries
        }
        let current = load()
        return try save(PersistenceEnvelope(
            version: current.version,
            attempts: current.attempts,
            reviewEntries: reviewEntries,
            progression: current.progression
        ))
    }

    @discardableResult
    public func replaceProgression(_ progression: ProgressionState) throws -> PersistenceEnvelope {
        guard NativeAppStateValidator.isValidProgression(progression) else {
            throw NativeAppStoreError.invalidProgression
        }
        let current = load()
        return try save(PersistenceEnvelope(
            version: current.version,
            attempts: current.attempts,
            reviewEntries: current.reviewEntries,
            progression: progression
        ))
    }

    private func resetInvalidPayload() {
        try? backend.removeData(forKey: key)
    }
}
