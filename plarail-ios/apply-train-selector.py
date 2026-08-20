#!/usr/bin/env python3
from pathlib import Path
import re
import sys

if len(sys.argv) != 2:
    raise SystemExit('usage: apply-train-selector.py APP_DIR')

root = Path(sys.argv[1]).resolve()

# ---------------------------------------------------------------------------
# Train display model: only 300 series and N700 series.
# ---------------------------------------------------------------------------
(root / 'TrainDisplaySeries.swift').write_text('''import Foundation

enum TrainDisplaySeries: String, CaseIterable {
    case series300 = "300"
    case n700 = "N700"

    var trainAssetFileName: String {
        switch self {
        case .series300: return "train300.png"
        case .n700: return "trainN700.png"
        }
    }

    /// The button always displays the OTHER train that will be selected.
    var toggleIconFileName: String {
        switch self {
        case .series300: return "iconN700_toggle.png"
        case .n700: return "icon300_toggle.png"
        }
    }

    var next: TrainDisplaySeries {
        switch self {
        case .series300: return .n700
        case .n700: return .series300
        }
    }
}
''', encoding='utf-8')

# ---------------------------------------------------------------------------
# ContentView: train state + coupling between train and cabin chime.
# ---------------------------------------------------------------------------
p = root / 'ContentView.swift'
s = p.read_text(encoding='utf-8')
needle = '    @State var showManualAudioLibrary = false\n'
if 'selectedTrainSeries: TrainDisplaySeries' not in s:
    if needle not in s:
        raise SystemExit('ContentView.swift: state insertion point not found')
    s = s.replace(
        needle,
        needle + '    @State var selectedTrainSeries: TrainDisplaySeries = .series300\n',
        1
    )

selected_chime_block = '''    var selectedChime: ChimeType {
        get { operation.selectedChime }
        nonmutating set { operation.selectedChime = newValue }
    }
'''
helpers = '''
    var trainAssetFileName: String {
        selectedTrainSeries.trainAssetFileName
    }

    var toggleTrainIconFileName: String {
        selectedTrainSeries.toggleIconFileName
    }

    func toggleTrainSeries() {
        switch selectedTrainSeries {
        case .series300:
            selectedTrainSeries = .n700
            selectedChime = .ainiIkou
        case .n700:
            selectedTrainSeries = .series300
            selectedChime = .ambitiousJapan
        }
    }
'''
if 'func toggleTrainSeries()' not in s:
    if selected_chime_block not in s:
        raise SystemExit('ContentView.swift: selectedChime block not found')
    s = s.replace(selected_chime_block, selected_chime_block + helpers, 1)
p.write_text(s, encoding='utf-8')

# ---------------------------------------------------------------------------
# Resources: image lookup used by the header toggle button.
# ---------------------------------------------------------------------------
p = root / 'AppResourceBundle.swift'
s = p.read_text(encoding='utf-8')
if 'static func imageURL(fileName:' not in s:
    idx = s.rfind('\n}')
    if idx < 0:
        raise SystemExit('AppResourceBundle.swift: enum terminator not found')
    image_helper = '''

    static func imageURL(fileName: String) -> URL? {
        let ns = fileName as NSString
        let name = ns.deletingPathExtension
        let ext = ns.pathExtension.isEmpty ? nil : ns.pathExtension

        var bundles: [Bundle] = [Bundle.main]
        bundles.append(contentsOf: Bundle.allBundles)
        bundles.append(contentsOf: Bundle.allFrameworks)

        for bundle in bundles {
            if let url = bundle.url(
                forResource: name,
                withExtension: ext,
                subdirectory: "shinkansen"
            ) {
                return url
            }

            if let resourceURL = bundle.resourceURL {
                let nestedURL = resourceURL
                    .appendingPathComponent("shinkansen", isDirectory: true)
                    .appendingPathComponent(fileName)
                if FileManager.default.fileExists(atPath: nestedURL.path) {
                    return nestedURL
                }
            }
        }
        return nil
    }
'''
    s = s[:idx] + image_helper + s[idx:]
p.write_text(s, encoding='utf-8')

# ---------------------------------------------------------------------------
# Running scene: switch the train graphic according to ContentView state.
# ---------------------------------------------------------------------------
p = root / 'RunningScenePanel.swift'
s = p.read_text(encoding='utf-8')
property_needle = '''    let selectedDestination: Destination?
    let selectedOriginStation: Station?

    private let canvasWidth: CGFloat = 1366
'''
if 'let trainAssetFileName: String' not in s:
    if property_needle not in s:
        raise SystemExit('RunningScenePanel.swift: property insertion point not found')
    s = s.replace(
        property_needle,
        '''    let selectedDestination: Destination?
    let selectedOriginStation: Station?
    let trainAssetFileName: String

    private let canvasWidth: CGFloat = 1366
''',
        1
    )

if 'SceneImage(fileName: trainAssetFileName)' not in s:
    if 'SceneImage(fileName: "train300.png")' not in s:
        raise SystemExit('RunningScenePanel.swift: train300 reference not found')
    s = s.replace(
        'SceneImage(fileName: "train300.png")',
        'SceneImage(fileName: trainAssetFileName)',
        1
    )
p.write_text(s, encoding='utf-8')

# ---------------------------------------------------------------------------
# Dashboard: Tokaido title, header train-toggle image button, scene parameter.
# ---------------------------------------------------------------------------
p = root / 'ContentViewDashboard.swift'
s = p.read_text(encoding='utf-8')
s = s.replace(
    'Text("300系新幹線電車制御システム")',
    'Text("東海道新幹線制御システム")'
)
s = s.replace(
    'Text("300 SERIES SHINKANSEN ELECTRIC TRAIN CONTROL SYSTEM")',
    'Text("TOKAIDO SHINKANSEN CONTROL SYSTEM")'
)

# Insert the train switch immediately before the origin-station tram menu.
if '.accessibilityLabel("車両切替")' not in s:
    menu_needle = '''            Menu {
                Section("始発駅") {
'''
    if menu_needle not in s:
        raise SystemExit('ContentViewDashboard.swift: header Menu insertion point not found')
    switch_button = '''            Button {
                toggleTrainSeries()
            } label: {
                if let url = AppResourceBundle.imageURL(fileName: toggleTrainIconFileName),
                   let uiImage = UIImage(contentsOfFile: url.path) {
                    Image(uiImage: uiImage)
                        .resizable()
                        .interpolation(.high)
                        .scaledToFit()
                        .padding(2)
                        .frame(width: UILayoutConfig.Header.buttonSize, height: UILayoutConfig.Header.buttonSize)
                        .background(Color.white.opacity(0.10))
                        .clipShape(RoundedRectangle(cornerRadius: 4))
                        .overlay(
                            RoundedRectangle(cornerRadius: 4)
                                .stroke(.green.opacity(0.75), lineWidth: 0.7)
                        )
                } else {
                    Text(selectedTrainSeries.next.rawValue)
                        .font(.system(size: 12, weight: .black, design: .monospaced))
                        .foregroundColor(.green)
                        .frame(width: UILayoutConfig.Header.buttonSize, height: UILayoutConfig.Header.buttonSize)
                        .background(Color.green.opacity(0.12))
                        .clipShape(RoundedRectangle(cornerRadius: 4))
                        .overlay(
                            RoundedRectangle(cornerRadius: 4)
                                .stroke(.green.opacity(0.75), lineWidth: 0.7)
                        )
                }
            }
            .buttonStyle(.plain)
            .accessibilityLabel("車両切替")

'''
    s = s.replace(menu_needle, switch_button + menu_needle, 1)

call_needle = '''                selectedService: selectedService,
                selectedDestination: selectedDestination,
                selectedOriginStation: selectedOriginStation
            )
'''
if 'trainAssetFileName: trainAssetFileName' not in s:
    if call_needle not in s:
        raise SystemExit('ContentViewDashboard.swift: RunningScenePanel call not found')
    s = s.replace(
        call_needle,
        '''                selectedService: selectedService,
                selectedDestination: selectedDestination,
                selectedOriginStation: selectedOriginStation,
                trainAssetFileName: trainAssetFileName
            )
''',
        1
    )
p.write_text(s, encoding='utf-8')

# ---------------------------------------------------------------------------
# Cabin chime: 1012 is Aini Ikou. 1008 remains Otome no Inori.
# Default chime is Aini Ikou.
# ---------------------------------------------------------------------------
p = root / 'AppConfig.swift'
s = p.read_text(encoding='utf-8')
old = s
s = re.sub(r'(static\s+let\s+ainiIkouTrack\s*=\s*)\d+', r'\g<1>1012', s)
# Some revisions used a different capitalization but the same semantic name.
s = re.sub(r'(static\s+let\s+ainiIkou(?:Intermediate|Terminal)?Track\s*=\s*)\d+', r'\g<1>1012', s)
if 'ainiIkouTrack' in old and 'ainiIkouTrack = 1012' not in s:
    raise SystemExit('AppConfig.swift: failed to map ainiIkouTrack to 1012')
p.write_text(s, encoding='utf-8')

p = root / 'TrainStateManagers.swift'
s = p.read_text(encoding='utf-8')
s, n = re.subn(
    r'(@Published\s+var\s+selectedChime\s*:\s*ChimeType\s*=\s*)\.[A-Za-z0-9_]+',
    r'\g<1>.ainiIkou',
    s,
    count=1
)
if n != 1:
    raise SystemExit('TrainStateManagers.swift: selectedChime default not found')
p.write_text(s, encoding='utf-8')

# ---------------------------------------------------------------------------
# Debug Mode 2: display N700 and use Aini Ikou.
# Insert just before the first activation of isDebugMode2.
# ---------------------------------------------------------------------------
p = root / 'ContentViewOperations.swift'
s = p.read_text(encoding='utf-8')
if 'selectedTrainSeries = .n700' not in s:
    needle = '        isDebugMode2 = true\n'
    if needle not in s:
        raise SystemExit('ContentViewOperations.swift: debug activation not found')
    s = s.replace(
        needle,
        '        selectedTrainSeries = .n700\n        selectedChime = .ainiIkou\n' + needle,
        1
    )
p.write_text(s, encoding='utf-8')

print('patched final Tokaido 300/N700 selector + Aini Ikou 1012 behavior')
