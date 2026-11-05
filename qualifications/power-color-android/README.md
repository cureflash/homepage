# Power Color for Android

This preview wraps the existing Grade 3 Power Color web app and shared Power TOEIC
engine in an Android WebView. The original files are copied into the APK at build
time; quiz logic and content are not forked. The app needs no network permission.

With JDK 17, Gradle 8.13 and Android SDK 36 installed, run:

```sh
gradle -p qualifications/power-color-android assembleDebug
```

The debug APK is `app/build/outputs/apk/debug/app-debug.apk`. Android instrumentation
tests run with `connectedDebugAndroidTest` on a connected device or emulator.

The application ID and debug signing are provisional; a Play release requires the
final application identity, release signing, store assets and a submission review.
