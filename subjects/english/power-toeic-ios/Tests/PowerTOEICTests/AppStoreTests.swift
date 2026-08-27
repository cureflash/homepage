import Foundation
import XCTest
@testable import PowerTOEIC

final class AppStoreTests: XCTestCase {
    private final class MemoryBackend: AppStatePersistenceBackend {
        var values: [String: Data] = [:]
        var failRead = false
        var failWrite = false
        var failRemove = false

        enum Failure: Error { case forced }

        func readData(forKey key: String) throws -> Data? {
            if failRead { throw Failure.forced }
            return values[key]
        }

        func writeData(_ data: Data, forKey key: String) throws {
            if failWrite { throw Failure.forced }
            values[key] = data
        }

        func removeData(forKey key: String) throws {
            if failRemove { throw Failure.forced }
            values.removeValue(forKey: key)
        }
    }

    private func attempt(
        id: String = "q1",
        selectedIndex: Int = 1,
        correctIndex: Int = 1
    ) -> Attempt {
        Attempt(
            questionId: id,
            questionVersion: 1,
            skillId: "skill.a",
            selectedIndex: selectedIndex,
            correctIndex: correctIndex,
            correct: selectedIndex == correctIndex,
            responseMs: 850,
            answeredAt: "2026-08-27T00:00:00Z",
            context: .training
        )
    }

    private func reviewEntry() -> ReviewEntry {
        ReviewEntry(
            questionId: "q1",
            questionVersion: 1,
            skillId: "skill.a",
            dueAt: "2026-08-28T00:00:00Z",
            intervalIndex: 0,
            status: "scheduled",
            lastAttemptAt: "2026-08-27T00:00:00Z"
        )
    }

    func testMissingStateLoadsVersionedDefaults() {
        let store = VersionedNativeAppStore(backend: MemoryBackend())
        XCTAssertEqual(store.load(), createDefaultNativeAppState())
    }

    func testRoundTripPersistsPlatformNeutralEnvelope() throws {
        let backend = MemoryBackend()
        let store = VersionedNativeAppStore(backend: backend)
        let state = PersistenceEnvelope(
            version: nativeAppStateVersion,
            attempts: [attempt()],
            reviewEntries: [reviewEntry()],
            progression: ProgressionState(points: 60, stage: 2)
        )

        XCTAssertEqual(try store.save(state), state)
        XCTAssertEqual(store.load(), state)
    }

    func testCorruptAndUnsupportedPayloadsFailSafeAndReset() throws {
        let backend = MemoryBackend()
        backend.values[defaultNativeAppStateKey] = Data("not-json".utf8)
        let store = VersionedNativeAppStore(backend: backend)

        XCTAssertEqual(store.load(), createDefaultNativeAppState())
        XCTAssertNil(backend.values[defaultNativeAppStateKey])

        let unsupported = PersistenceEnvelope(
            version: 99,
            attempts: [],
            reviewEntries: [],
            progression: ProgressionState(points: 0, stage: 0)
        )
        backend.values[defaultNativeAppStateKey] = try JSONEncoder().encode(unsupported)
        XCTAssertEqual(store.load(), createDefaultNativeAppState())
        XCTAssertNil(backend.values[defaultNativeAppStateKey])
    }

    func testMutationHelpersPreserveOtherDomains() throws {
        let backend = MemoryBackend()
        let store = VersionedNativeAppStore(backend: backend)

        var state = try store.appendAttempt(attempt())
        XCTAssertEqual(state.attempts.count, 1)
        XCTAssertTrue(state.reviewEntries.isEmpty)
        XCTAssertEqual(state.progression, ProgressionState(points: 0, stage: 0))

        state = try store.replaceReviewEntries([reviewEntry()])
        XCTAssertEqual(state.attempts.count, 1)
        XCTAssertEqual(state.reviewEntries.count, 1)

        state = try store.replaceProgression(ProgressionState(points: 140, stage: 3))
        XCTAssertEqual(state.attempts.count, 1)
        XCTAssertEqual(state.reviewEntries.count, 1)
        XCTAssertEqual(state.progression, ProgressionState(points: 140, stage: 3))
    }

    func testStorageFailuresNeverPreventSafeFallbackOrValidMutationResult() throws {
        let backend = MemoryBackend()
        backend.failRead = true
        let store = VersionedNativeAppStore(backend: backend)
        XCTAssertEqual(store.load(), createDefaultNativeAppState())

        backend.failRead = false
        backend.failWrite = true
        let result = try store.appendAttempt(attempt())
        XCTAssertEqual(result.attempts.count, 1)
        XCTAssertEqual(store.load(), createDefaultNativeAppState())
    }

    func testInvalidDomainStateIsRejectedBeforeStorage() throws {
        let backend = MemoryBackend()
        let store = VersionedNativeAppStore(backend: backend)

        let invalidAttempt = Attempt(
            questionId: "q1",
            questionVersion: 1,
            skillId: "skill.a",
            selectedIndex: 4,
            correctIndex: 1,
            correct: false,
            responseMs: 1,
            answeredAt: "2026-08-27T00:00:00Z",
            context: .training
        )
        XCTAssertThrowsError(try store.appendAttempt(invalidAttempt)) { error in
            XCTAssertEqual(error as? NativeAppStoreError, .invalidAttempt)
        }

        XCTAssertThrowsError(
            try store.replaceProgression(ProgressionState(points: -1, stage: 0))
        ) { error in
            XCTAssertEqual(error as? NativeAppStoreError, .invalidProgression)
        }
    }
}
