from pathlib import Path
import sys
root = Path(sys.argv[1]).resolve()

(root/'AudioPlaybackTiming.swift').write_text('''import Foundation
import AVFoundation

/// DFPlayerのBUSY端子には依存せず、アプリに同梱したMP3の実再生時間から
/// 次のBLE信号を送る時刻を決める。
enum AudioPlaybackTiming {
    private static var durationCache: [Int: TimeInterval] = [:]

    static func duration(for track: Int) -> TimeInterval {
        if let cached = durationCache[track] {
            return cached
        }

        if let url = AppResourceBundle.audioURL(track: track),
           let player = try? AVAudioPlayer(contentsOf: url),
           player.duration > 0 {
            durationCache[track] = player.duration
            return player.duration
        }

        // SDカード側にだけ存在し、アプリ側に同名MP3が無い場合の安全側フォールバック。
        // 対象MP3をResources/shinkansenへ追加すれば自動的に実時間へ切り替わる。
        let fallback = AppConfig.Audio.announcementTrackRange.contains(track)
            ? AppConfig.Audio.unknownAnnouncementTrackDuration
            : AppConfig.Audio.unknownShortTrackDuration
        durationCache[track] = fallback
        return fallback
    }
}
''', encoding='utf-8')

# BLEProtocol
p=root/'BLEProtocol.swift'; s=p.read_text(encoding='utf-8')
old='''    static func playAudio(
        runID: UInt16,
        track: Int,
        minimumBusyDurationMs: Int? = nil
    ) -> String {
        if let minimumBusyDurationMs {
            return "AUDIO,PLAY,\\(runID),\\(track),MIN_BUSY_MS,\\(minimumBusyDurationMs)"
        }
        return "AUDIO,PLAY,\\(runID),\\(track)"
    }
'''
new='''    static func playAudio(runID: UInt16, track: Int) -> String {
        "AUDIO,PLAY,\\(runID),\\(track)"
    }
'''
assert old in s
p.write_text(s.replace(old,new), encoding='utf-8')

# AppConfig
p=root/'AppConfig.swift'; s=p.read_text(encoding='utf-8')
s=s.replace('/// - 音声ID・再生間隔・BUSY判定・音声選択規則: `Audio`','/// - 音声ID・再生時間・音声選択規則: `Audio`')
s=s.replace('    /// 音声ID、音声間隔、BUSY LOW判定、駅ごとの選択規則をここで調整する。','    /// 音声ID、時間ベース再生制御、駅ごとの選択規則をここで調整する。')
s=s.replace('        static let departureMotorStartDelayAfterOtomeFinished: TimeInterval = 1.0','''        static let postPlaybackSignalDelay: TimeInterval = 0.3
        static let departureMotorStartDelayAfterOtomeFinished: TimeInterval = postPlaybackSignalDelay

        /// アプリ内に同名MP3が無い場合だけ使うフォールバック。
        static let unknownShortTrackDuration: TimeInterval = 5.0
        static let unknownAnnouncementTrackDuration: TimeInterval = 30.0''')
s=s.replace('        static let departureFirstToSecondMinimumDelay: TimeInterval = 1.0','        static let departureFirstToSecondMinimumDelay: TimeInterval = postPlaybackSignalDelay')
s=s.replace('        static let postDepartureChimeToAnnouncementDelay: TimeInterval = 2.0','        static let postDepartureChimeToAnnouncementDelay: TimeInterval = postPlaybackSignalDelay')
s=s.replace('        static let manualQueueInterTrackDelay: TimeInterval = 0.0','        static let manualQueueInterTrackDelay: TimeInterval = postPlaybackSignalDelay')
oldbusy='''        // BUSY LOW最低継続時間
        static let shortTrackMinimumBusyMs = 250
        static let announcementMinimumBusyMs = 1000
        static let validTrackRange = 1...2999
        static let announcementTrackRange = 100...999

        static func minimumBusyDurationMs(for track: Int) -> Int {
            announcementTrackRange.contains(track)
                ? announcementMinimumBusyMs
                : shortTrackMinimumBusyMs
        }
'''
newbusy='''        static let validTrackRange = 1...2999
        static let announcementTrackRange = 100...999
'''
assert oldbusy in s
s=s.replace(oldbusy,newbusy)
s=s.replace('        static let preDecelerationDelayAfterChime: TimeInterval = 2.0','        static let preDecelerationDelayAfterChime: TimeInterval = 0.3')
s=s.replace('        static let announcementDelayAfterChime: TimeInterval = 0.0','        static let announcementDelayAfterChime: TimeInterval = 0.3')
s=s.replace('        static let finalBrakeDelayAfterAnnouncement: TimeInterval = 2.0','        static let finalBrakeDelayAfterAnnouncement: TimeInterval = 0.3')
p.write_text(s, encoding='utf-8')

# ContentViewOperations
p=root/'ContentViewOperations.swift'; s=p.read_text(encoding='utf-8')
needle='''    func sendCommand(_ command: String) {
        guard isDebugMode2 else {
            bleManager.send(command)
            return
        }

        let sessionID = debugSimulationID
        bleManager.recordSimulatedTransmission(command)
        scheduleSimulatedMicrocontrollerResponse(
            for: command,
            sessionID: sessionID
        )
    }
'''
addition='''
    /// 実機音声はDFPlayerのBUSY/FINISHED通知を進行条件にしない。
    /// PLAY送信時にアプリ内MP3の実時間を取得し、終了予定時刻から次段を進める。
    func sendTimedAudio(runID: UInt16, track: Int) {
        sendCommand(PlarailBLECommand.playAudio(runID: runID, track: track))

        // Debug Mode 2はiPad上のAVAudioPlayer実再生完了を既存処理が通知する。
        guard !isDebugMode2 else { return }

        markTimedAudioStarted(runID: runID, track: track)

        let duration = AudioPlaybackTiming.duration(for: track)
        DispatchQueue.main.asyncAfter(deadline: .now() + duration) {
            self.handleTimedAudioFinished(runID: runID, track: track)
        }
    }

    func markTimedAudioStarted(runID: UInt16, track: Int) {
        if operation.departureDisplayWaitingForPostDepartureChime,
           isRouteConfigured,
           track == postDepartureChimeTrack {
            operation.departureDisplayWaitingForPostDepartureChime = false
            startDepartureMarqueeSequence()
        }

        guard runID == operation.operationAudioRunID else { return }

        switch operation.operationAudioStage {
        case .departureFirstWaitingStart:
            guard track == operation.operationAudioFirstTrack else { return }
            operation.operationAudioStage = .departureFirstPlaying

        case .departureSecondWaitingStart:
            guard track == operation.operationAudioSecondTrack else { return }
            operation.operationAudioStage = .departureSecondPlaying

        case .stopFirstWaitingStart:
            guard track == operation.operationAudioFirstTrack else { return }
            operation.operationAudioStage = .stopFirstPlaying

        case .stopSecondWaitingStart:
            guard track == operation.operationAudioSecondTrack else { return }
            operation.operationAudioStage = .stopSecondPlaying
            stopSequence = operation.stopPreDecelerationCompleted ? .holdingAnnouncement : .reducingTo180
            announcementStartedAt = Date()

        default:
            break
        }
    }

    /// 予測したMP3終了時刻で呼ぶ。ここから各「次の信号」は0.3秒後に送る。
    func handleTimedAudioFinished(runID: UInt16, track: Int) {
        if runID == operation.pendingATCAudioRunID,
           track == AudioCatalog.atcTrack {
            DispatchQueue.main.asyncAfter(deadline: .now() + AppConfig.Audio.postPlaybackSignalDelay) {
                guard self.operation.pendingATCAudioRunID == runID else { return }
                self.applyPendingNotchAfterATC(runID: runID)
            }
            return
        }

        if runID == operation.operationAudioRunID {
            switch operation.operationAudioStage {
            case .departureFirstPlaying:
                guard track == operation.operationAudioFirstTrack else { break }
                operation.operationAudioFirstFinished = true
                operation.operationAudioStage = .departureWaitingSecond
                operation.operationAudioSecondNotBefore = Date().addingTimeInterval(
                    AppConfig.Audio.departureFirstToSecondMinimumDelay
                )
                DispatchQueue.main.asyncAfter(
                    deadline: .now() + AppConfig.Audio.departureFirstToSecondMinimumDelay
                ) {
                    self.updateOperationAudioSequence(now: Date())
                }
                return

            case .departureSecondPlaying:
                guard track == operation.operationAudioSecondTrack else { break }
                DispatchQueue.main.asyncAfter(
                    deadline: .now() + AppConfig.Audio.departureMotorStartDelayAfterOtomeFinished
                ) {
                    guard self.operation.operationAudioRunID == runID,
                          self.operation.operationAudioStage == .departureSecondPlaying else { return }
                    self.beginDepartureMotorAfterOtomeFinished(runID: runID)
                }
                return

            case .stopFirstPlaying:
                guard track == operation.operationAudioFirstTrack else { break }
                continueStopSequenceAfterChime(runID: runID)
                return

            case .stopSecondPlaying:
                guard track == operation.operationAudioSecondTrack else { break }
                beginStopProfileAfterAudio(runID: runID, audioFailed: false)
                return

            default:
                break
            }
        }

        if audioQueue.finish(runID: runID, track: track) {
            DispatchQueue.main.asyncAfter(deadline: .now() + AppConfig.Audio.postPlaybackSignalDelay) {
                self.sendNextQueuedAudioIfPossible()
            }
        }
    }
'''
assert needle in s
s=s.replace(needle, needle+addition, 1)

pairs=[]
pairs.append(('''        sendCommand(
            PlarailBLECommand.playAudio(
                runID: runID,
                track: AudioCatalog.hornTrack,
                minimumBusyDurationMs: AppConfig.Audio.shortTrackMinimumBusyMs
            )
        )''','''        sendTimedAudio(runID: runID, track: AudioCatalog.hornTrack)'''))
pairs.append(('''        sendCommand(
            PlarailBLECommand.playAudio(
                runID: runID,
                track: chimeTrack,
                minimumBusyDurationMs: AppConfig.Audio.minimumBusyDurationMs(
                    for: chimeTrack
                )
            )
        )''','''        sendTimedAudio(runID: runID, track: chimeTrack)'''))
pairs.append(('''            self.sendCommand(
                PlarailBLECommand.playAudio(
                    runID: runID,
                    track: firstTrack,
                    minimumBusyDurationMs: AppConfig.Audio.minimumBusyDurationMs(
                        for: firstTrack
                    )
                )
            )''','''            self.sendTimedAudio(runID: runID, track: firstTrack)'''))
pairs.append(('''        sendCommand(
            PlarailBLECommand.playAudio(
                runID: runID,
                track: secondTrack,
                minimumBusyDurationMs: AppConfig.Audio.announcementMinimumBusyMs
            )
        )
        lastMessage = "SEND : SECOND AUDIO / TRACK \\(secondTrack) / MIN_BUSY_MS \\(AppConfig.Audio.announcementMinimumBusyMs)"''','''        sendTimedAudio(runID: runID, track: secondTrack)
        lastMessage = "SEND : SECOND AUDIO / TRACK \\(secondTrack) / TIME BASED"'''))
pairs.append(('''        let minimumBusyMs = AppConfig.Audio.minimumBusyDurationMs(for: track)
        sendCommand(
            PlarailBLECommand.playAudio(
                runID: runID,
                track: track,
                minimumBusyDurationMs: minimumBusyMs
            )
        )
        lastMessage = "SEND : AUDIO,PLAY,\\(runID),\\(track),MIN_BUSY_MS,\\(minimumBusyMs)"''','''        sendTimedAudio(runID: runID, track: track)
        lastMessage = "SEND : AUDIO,PLAY,\\(runID),\\(track) / TIME BASED"'''))
pairs.append(('''        sendCommand(
            PlarailBLECommand.playAudio(
                runID: activeRunID,
                track: AudioCatalog.hornTrack,
                minimumBusyDurationMs: AppConfig.Audio.shortTrackMinimumBusyMs
            )
        )''','''        sendTimedAudio(runID: activeRunID, track: AudioCatalog.hornTrack)'''))
for old,new in pairs:
    count=s.count(old)
    if count:
        s=s.replace(old,new)
    else:
        print('MISSING PAIR', old.splitlines()[0:3])

# ATC confirmation track.
atc_old='''        sendCommand(
            PlarailBLECommand.playAudio(
                runID: runID,
                track: AudioCatalog.atcTrack,
                minimumBusyDurationMs: AppConfig.Audio.shortTrackMinimumBusyMs
            )
        )'''
assert atc_old in s
s=s.replace(atc_old, '        sendTimedAudio(runID: runID, track: AudioCatalog.atcTrack)', 1)

old='''        let chimeTrack = postDepartureChimeTrack
        shouldQueuePostDepartureAnnouncement = false
        operation.postDepartureAudioReservedAt = nil
        operation.postDepartureAudioPendingRequestRunID = nil
        sendCommand(
            PlarailBLECommand.postDepartureAudio(
                runID: runID,
                chimeTrack: chimeTrack,
                announcementTrack: departureTrack
            )
        )
        lastMessage = "TX > AUDIO,POST_DEPARTURE,\\(runID),\\(chimeTrack),\\(departureTrack)"
'''
new='''        let chimeTrack = postDepartureChimeTrack
        shouldQueuePostDepartureAnnouncement = false
        operation.postDepartureAudioReservedAt = nil
        operation.postDepartureAudioPendingRequestRunID = nil

        // ESP32側のPOST_DEPARTURE待ちだけ0,0で解除し、
        // 実際の2曲はアプリがMP3時間ベースで個別にPLAYする。
        sendCommand(
            PlarailBLECommand.postDepartureAudio(
                runID: runID,
                chimeTrack: AppConfig.Audio.noAudioTrack,
                announcementTrack: AppConfig.Audio.noAudioTrack
            )
        )
        audioQueue.start(
            runID: runID,
            tracks: [chimeTrack, departureTrack],
            interTrackDelay: AppConfig.Audio.postDepartureChimeToAnnouncementDelay
        )
        sendNextQueuedAudioIfPossible()
        lastMessage = "POST-DEPARTURE AUDIO : \\(chimeTrack) -> \\(departureTrack) / TIME BASED"
'''
assert old in s
s=s.replace(old,new,1)

start=s.index('        case .audioStarted(let runID, let track):')
end=s.index('        case .power(_, let millivolts):', start)
newcases='''        case .audioStarted(let runID, let track):
            // 実機のSTARTED通知はログ専用。進行はPLAY送信時刻＋MP3実時間で管理する。
            lastMessage = "RX < AUDIO STARTED \\(track) / RUN \\(runID) / TIME BASED"

        case .audioFinished(let runID, let track, let durationMs):
            // DFPlayer BUSY由来のFINISHEDは進行条件に使わない。
            let durationText = durationMs.map { " / BUSY \\($0)ms" } ?? ""
            lastMessage = "RX < AUDIO FINISHED \\(track)\\(durationText) / IGNORED"

        case .audioError(let runID, let track, let reason, let durationMs):
            // BUSY判定由来のERRORでもタイマー進行を止めない。
            let trackText = track.map(String.init) ?? "UNKNOWN"
            let durationText = durationMs.map { " / BUSY \\($0)ms" } ?? ""
            lastMessage = "RX < AUDIO ERROR RUN \\(runID) TRACK \\(trackText) : \\(reason)\\(durationText) / TIMING CONTINUES"

'''
s=s[:start]+newcases+s[end:]
s=s.replace('''        // ESP32側でもConfig::Audio::INTER_TRACK_GAP_MSのアイドル時間を確保する。
        // 2曲目はAppConfig.Audioの最低BUSY時間未満ならTOO_SHORTになる。
''','''        // 前曲の予測終了から0.3秒のアイドル時間を確保して2曲目を送る。
''')
s=s.replace('        lastMessage = "SEND : DEPARTURE MOTOR / OTOME FINISH +1.0s / DUTY \\(requestedNotch.dutyPermille)"','        lastMessage = "SEND : DEPARTURE MOTOR / OTOME END +0.3s / DUTY \\(requestedNotch.dutyPermille)"')
s=s.replace('''        // 連続音声は前曲完了後の整定時間が過ぎた時点で次曲を送る。
        // finish通知直後には送らず、DFPlayerのコマンド取りこぼしを避ける。''','''        // 連続音声はMP3の予測終了時刻から0.3秒後に次曲を送る。
        // DFPlayerのBUSY/FINISHED通知は進行条件に使わない。''')
p.write_text(s, encoding='utf-8')
print('patched')
