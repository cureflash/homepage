#!/usr/bin/env python3
from pathlib import Path
import sys

if len(sys.argv) != 2:
    raise SystemExit("usage: apply-ipad-fullscreen-layout.py APP_DIR")

app_dir = Path(sys.argv[1])
my_app = app_dir / "MyApp.swift"
text = my_app.read_text(encoding="utf-8")

old = '''import SwiftUI

@main
struct MyApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
'''

new = '''import SwiftUI

@main
struct MyApp: App {
    private let designWidth: CGFloat = 1366
    private let designHeight: CGFloat = 1024

    var body: some Scene {
        WindowGroup {
            GeometryReader { viewport in
                let scale = min(
                    viewport.size.width / designWidth,
                    viewport.size.height / designHeight
                )

                ZStack {
                    Color.black
                        .ignoresSafeArea()

                    ContentView()
                        .frame(width: designWidth, height: designHeight)
                        .scaleEffect(scale, anchor: .center)
                }
                .frame(
                    width: viewport.size.width,
                    height: viewport.size.height,
                    alignment: .center
                )
            }
            .ignoresSafeArea()
            .statusBarHidden(true)
            .persistentSystemOverlays(.hidden)
        }
    }
}
'''

if old not in text:
    raise SystemExit("MyApp.swift did not match expected source; refusing blind replacement")

my_app.write_text(text.replace(old, new), encoding="utf-8")
print(f"patched {my_app}")
