#!/usr/bin/env python3
from pathlib import Path
import sys

if len(sys.argv) != 2:
    raise SystemExit('usage: apply-train-selector.py APP_DIR')

app_dir = Path(sys.argv[1])
content_view = app_dir / 'ContentView.swift'
dashboard = app_dir / 'ContentViewDashboard.swift'
scene = app_dir / 'RunningScenePanel.swift'

cv = content_view.read_text(encoding='utf-8')
needle = '    @State var showManualAudioLibrary = false\n'
replace = '    @State var showManualAudioLibrary = false\n    @State var selectedTrainSeries: TrainSeries = .series300\n'
if needle not in cv:
    raise SystemExit('ContentView.swift state insertion point not found')
cv = cv.replace(needle, replace, 1)
content_view.write_text(cv, encoding='utf-8')

db = dashboard.read_text(encoding='utf-8')
needle = '''                selectedDestination: selectedDestination,
                selectedOriginStation: selectedOriginStation
            )
'''
replace = '''                selectedDestination: selectedDestination,
                selectedOriginStation: selectedOriginStation,
                selectedTrainSeries: $selectedTrainSeries
            )
'''
if needle not in db:
    raise SystemExit('ContentViewDashboard.swift RunningScenePanel call not found')
db = db.replace(needle, replace, 1)
dashboard.write_text(db, encoding='utf-8')

sc = scene.read_text(encoding='utf-8')

enum_block = '''enum TrainSeries: String, CaseIterable, Identifiable {
    case series0 = "0系"
    case series100 = "100系"
    case series300 = "300系"
    case series500 = "500系"
    case series700 = "700系"
    case railStar = "ひかりレールスター"
    case n700s = "N700S"
    case doctorYellowT4 = "ドクターイエロー T4"

    var id: String { rawValue }

    var shortTitle: String {
        switch self {
        case .series0: return "0"
        case .series100: return "100"
        case .series300: return "300"
        case .series500: return "500"
        case .series700: return "700"
        case .railStar: return "RS"
        case .n700s: return "N700S"
        case .doctorYellowT4: return "T4"
        }
    }

    var assetFileName: String {
        switch self {
        case .series0: return "train0.png"
        case .series100: return "train100.png"
        case .series300: return "train300.png"
        case .series500: return "train500.png"
        case .series700: return "train700.png"
        case .railStar: return "trainRailStar.png"
        case .n700s: return "trainN700S.png"
        case .doctorYellowT4: return "trainT4.png"
        }
    }
}

'''
needle = 'struct RunningScenePanel: View {\n'
if needle not in sc:
    raise SystemExit('RunningScenePanel declaration not found')
sc = sc.replace(needle, enum_block + needle, 1)

needle = '''    let selectedDestination: Destination?
    let selectedOriginStation: Station?

    private let canvasWidth: CGFloat = 1366
'''
replace = '''    let selectedDestination: Destination?
    let selectedOriginStation: Station?
    @Binding var selectedTrainSeries: TrainSeries

    private let canvasWidth: CGFloat = 1366
'''
if needle not in sc:
    raise SystemExit('RunningScenePanel property insertion point not found')
sc = sc.replace(needle, replace, 1)

needle = '''                sceneCanvas
                    .frame(width: canvasWidth, height: canvasHeight, alignment: .topLeading)
                    .scaleEffect(appliedScale, anchor: .topLeading)
                    .offset(x: sceneOffsetX, y: sceneOffsetY)
            }
'''
replace = '''                sceneCanvas
                    .frame(width: canvasWidth, height: canvasHeight, alignment: .topLeading)
                    .scaleEffect(appliedScale, anchor: .topLeading)
                    .offset(x: sceneOffsetX, y: sceneOffsetY)

                trainSeriesSelector
                    .padding(8)
            }
'''
if needle not in sc:
    raise SystemExit('RunningScenePanel overlay insertion point not found')
sc = sc.replace(needle, replace, 1)

needle = '''    private var animationPixelsPerSecond: CGFloat {
        let clamped = min(max(displaySpeed, 0), maxGaugeSpeed)
        return CGFloat(clamped / maxGaugeSpeed * maxAnimationSpeed)
    }

'''
selector = '''    private var animationPixelsPerSecond: CGFloat {
        let clamped = min(max(displaySpeed, 0), maxGaugeSpeed)
        return CGFloat(clamped / maxGaugeSpeed * maxAnimationSpeed)
    }

    private var trainSeriesSelector: some View {
        HStack(spacing: 4) {
            Text("SERIES")
                .font(.system(size: 9, weight: .black, design: .monospaced))
                .foregroundColor(.green)

            ForEach(TrainSeries.allCases) { series in
                Button {
                    selectedTrainSeries = series
                } label: {
                    Text(series.shortTitle)
                        .font(.system(size: 9, weight: .black, design: .monospaced))
                        .foregroundColor(selectedTrainSeries == series ? .black : .green)
                        .frame(minWidth: series == .n700s ? 48 : 34, minHeight: 24)
                        .padding(.horizontal, 3)
                        .background(
                            RoundedRectangle(cornerRadius: 3)
                                .fill(selectedTrainSeries == series ? Color.green : Color.black.opacity(0.76))
                        )
                        .overlay(
                            RoundedRectangle(cornerRadius: 3)
                                .stroke(Color.green.opacity(0.82), lineWidth: 0.8)
                        )
                }
                .buttonStyle(.plain)
                .accessibilityLabel(series.rawValue)
            }
        }
        .padding(.horizontal, 7)
        .padding(.vertical, 5)
        .background(
            RoundedRectangle(cornerRadius: 5)
                .fill(Color.black.opacity(0.72))
        )
        .overlay(
            RoundedRectangle(cornerRadius: 5)
                .stroke(Color.green.opacity(0.55), lineWidth: 0.8)
        )
    }

'''
if needle not in sc:
    raise SystemExit('RunningScenePanel selector insertion point not found')
sc = sc.replace(needle, selector, 1)

needle = '                SceneImage(fileName: "train300.png")\n'
replace = '                SceneImage(fileName: selectedTrainSeries.assetFileName)\n'
if needle not in sc:
    raise SystemExit('train300 asset reference not found')
sc = sc.replace(needle, replace, 1)
scene.write_text(sc, encoding='utf-8')
print('patched train selector')
