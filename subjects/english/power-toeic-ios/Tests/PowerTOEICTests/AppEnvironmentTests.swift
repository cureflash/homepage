import Foundation
import XCTest
@testable import PowerTOEIC

final class AppEnvironmentTests: XCTestCase {
    private final class MemoryBackend: AppStatePersistenceBackend {
        var values: [String: Data] = [:]
        var failRead = false

        enum Failure: Error { case forced }

        func readData(forKey key: String) throws -> Data? {
            if failRead { throw Failure.forced }
            return values[key]
        }

        func writeData(_ data: Data, forKey key: String) throws {
            values[key] = data
        }

        func removeData(forKey key: String) throws {
            values.removeValue(forKey: key)
        }
    }

    private struct FixedClock: AppClock {
        let value: String
        func nowISOString() -> String { value }
    }

    func testLaunchWithoutPersistedStateUsesOfflineSafeDefaults() {
        let environment = PowerTOEICAppEnvironment(
            questionBank: EmptyQuestionBankRepository(),
            appStore: VersionedNativeAppStore(backend: MemoryBackend()),
            clock: FixedClock(value: "2026-08-27T00:00:00Z")
        )

        let snapshot = environment.launchSnapshot()
        XCTAssertEqual(snapshot.persistedState, createDefaultNativeAppState())
        XCTAssertEqual(snapshot.reviewDueCount, 0)
        XCTAssertNoThrow(try environment.questionBank.questions())
        XCTAssertTrue((try? environment.questionBank.questions().isEmpty) == true)
    }

    func testLaunchRestoresProgressionAndCalculatesDueReviewsDeterministically() throws {
        let backend = MemoryBackend()
        let store = VersionedNativeAppStore(backend: backend)
        let state = PersistenceEnvelope(
            version: nativeAppStateVersion,
            attempts: [],
            reviewEntries: [
                ReviewEntry(
                    questionId: "due",
                    questionVersion: 1,
                    skillId: "skill.a",
                    dueAt: "2026-08-26T23:59:00Z",
                    intervalIndex: 0,
                    status: "scheduled",
                    lastAttemptAt: "2026-08-25T23:59:00Z"
                ),
                ReviewEntry(
                    questionId: "future",
                    questionVersion: 1,
                    skillId: "skill.a",
                    dueAt: "2026-08-28T00:00:00Z",
                    intervalIndex: 0,
                    status: "scheduled",
                    lastAttemptAt: "2026-08-27T00:00:00Z"
                )
            ],
            progression: ProgressionState(points: 140, stage: 3)
        )
        try store.save(state)

        let environment = PowerTOEICAppEnvironment(
            questionBank: EmptyQuestionBankRepository(),
            appStore: store,
            clock: FixedClock(value: "2026-08-27T00:00:00Z")
        )

        let snapshot = environment.launchSnapshot()
        XCTAssertEqual(snapshot.persistedState.progression, ProgressionState(points: 140, stage: 3))
        XCTAssertEqual(snapshot.reviewDueCount, 1)
    }

    func testCorruptOrUnavailableStorageCannotPreventLaunch() {
        let corruptBackend = MemoryBackend()
        corruptBackend.values[defaultNativeAppStateKey] = Data("corrupt".utf8)
        let corruptEnvironment = PowerTOEICAppEnvironment(
            questionBank: EmptyQuestionBankRepository(),
            appStore: VersionedNativeAppStore(backend: corruptBackend),
            clock: FixedClock(value: "2026-08-27T00:00:00Z")
        )
        XCTAssertEqual(corruptEnvironment.launchSnapshot().persistedState, createDefaultNativeAppState())

        let failedBackend = MemoryBackend()
        failedBackend.failRead = true
        let failedEnvironment = PowerTOEICAppEnvironment(
            questionBank: EmptyQuestionBankRepository(),
            appStore: VersionedNativeAppStore(backend: failedBackend),
            clock: FixedClock(value: "2026-08-27T00:00:00Z")
        )
        XCTAssertEqual(failedEnvironment.launchSnapshot().persistedState, createDefaultNativeAppState())
        XCTAssertEqual(failedEnvironment.launchSnapshot().reviewDueCount, 0)
    }
}
