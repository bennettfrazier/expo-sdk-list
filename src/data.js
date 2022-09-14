export const posts = [
  {
    name: "accelerometer",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/accelerometer",
    tags: ["sensor", "motion"],
    description:
      "provides access to the device accelerometer sensor(s) and associated listeners to respond to changes in acceleration in 3d space, meaning any movement or vibration.",
  },
  {
    name: "app-loading",
    tags: ["loading", "UI", "component"],
    link: "https://docs.expo.io/versions/v46.0.0/sdk/app-loading",
    description:
      "tells expo-splash-screen to keep the splash screen visible while the AppLoading component is mounted.",
  },
  {
    name: "apple-authentication",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/apple-authentication",
    description:
      "provides Apple authentication for iOS 13+. It does not yet support lower iOS versions, Android, or web.",
  },
  {
    name: "application",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/application",
    description:
      "provides useful information about the native application, itself, such as the ID, app name, and build version.",
  },
  {
    name: "asset",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/asset",
    description:
      "provides an interface to Expo's asset system, and static image resources",
    tags: ["asset", "static"],
  },
  {
    name: "async-storage",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/async-storage",
    description:
      "An asynchronous, unencrypted, persistent, key-value storage API.",
    tags: ["storage"],
  },
  {
    name: "audio",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/audio",
    description:
      "allows you to implement audio playback and recording in your app.",
    tags: ["audio"],
  },
  {
    name: "auth-session",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/auth-session",
    description:
      "easiest way to add web browser based authentication (for example, browser-based OAuth flows) to your app, built on top of WebBrowser, Crypto, and Random.",
    tags: ["authentication", "crypto","web"],
  },
  {
    name: "av",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/av",
    description:
      "a set of components that share a unified imperative API for media playback",
    tags: ["audio", "media"],
  },
  {
    name: "background-fetch",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/background-fetch",
    description:
      "provides an API to perform background fetch tasks, allowing you to run specific code periodically in the background to update your app.",
    tags: ["background", "update"],
  },
  {
    name: "bar-code-scanner",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/bar-code-scanner",
    description:
      "provides a React component that renders a viewfinder for the device's camera (either front or back) and will scan bar codes that show up in the frame.",
    tags: ["device"],
  },
  {
    name: "barometer",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/barometer",
    description:
      "provides access to the device barometer sensor to respond to changes in air pressure.",
    tags: ["sensor"],
  },
  {
    name: "battery",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/battery",
    description:
      "provides battery information for the physical device (such as battery level, whether or not the device is charging, and more) as well as corresponding event listeners.",
    tags: ["device", "information"],
  },
  {
    name: "blur-view",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/blur-view",
    description: "A React component that blurs everything underneath the view",
    tags: ["component", "UI"],
  },
  {
    name: "brightness",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/brightness",
    description: "get and set screen brightness.",
    tags: ["display"],
  },
  {
    name: "build properties",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/build-properties",
    description: "override default native build properties with a managed app.",
    tags: ["config"],
  },
  {
    name: "calendar",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/calendar",
    description:
      "interact with the device's system calendars, events, reminders, and associated records.",
    tags: ["device", "UI"],
  },
  {
    name: "camera",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/camera",
    description:
      "renders a preview for the device's front or back camera. The camera's parameters like zoom, auto focus, white balance and flash mode are adjustable.",
    tags: ["device", "media"],
  },
  {
    name: "captureRef",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/captureRef",
    description: "essentially screenshots a view and returns an image for you.",
    tags: ["image", "capture"],
  },
  {
    name: "cellular",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/cellular",
    description:
      "provides information about the user’s cellular service provider, such as its unique identifier, cellular connection type, and whether it allows VoIP calls on its network.",
    tags: ["device", "information"],
  },
  {
    name: "checkbox",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/checkbox",
    description:
      "provides an component to provide a boolean input element on Android and Web.",
    tags: ["component","UI", "web"],
  },
  {
    name: "clipboard",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/clipboard",
    description:
      "provides an interface for getting and setting Clipboard content on Android, iOS, and Web.",
    tags: ["device","web"],
  },
  {
    name: "constants",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/constants",
    description:
      "provides system information that remains constant throughout the lifetime of your app's install.",
    tags: ["device", "system"],
  },
  {
    name: "contacts",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/contacts",
    description:
      "provides access to the device's system contacts, allowing you to get contact information as well as adding, editing, or removing contacts.",
    tags: ["device", "system"],
  },
  {
    name: "crypto",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/crypto",
    description:
      "enables you to hash (encrypt) data in an equivalent manner to the Node.js core crypto API.",
    tags: ["crypto"],
  },
  {
    name: "date-time-picker",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/picker",
    description:
      "provides access to the system UI for picking between several options.",
    tags: ["calendar", "date", "system"],
  },
  {
    name: "device",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/device",
    description:
      "provides access to system information about the physical device, such as its manufacturer and model.",
    tags: ["device", "system"],
  },
  {
    name: "devicemotion",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/devicemotion",
    description:
      "provides access to the device motion and orientation sensors.",
    tags: ["device", "motion"],
  },
  {
    name: "document-picker",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/document-picker",
    description:
      "Provides access to the system's UI for selecting documents from the available providers on the user's device.",
    tags: ["media", "document", "device", "system"],
  },
  {
    name: "error-recovery",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/error-recovery",
    description:
      "provides utilities for helping you gracefully handle crashes due to fatal JavaScript errors.",
    tags: ["error"],
  },
  {
    name: "facedetector",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/facedetector",
    description:
      "use the power of the Google Mobile Vision framework to detect faces on images.",
    tags: ["image", "Google"],
  },
  {
    name: "filesystem",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/filesystem",
    description:
      "provides access to a file system stored locally on the device.",
    tags: ["file", "system", "local", "storage"],
  },
  {
    name: "firebase-analytics",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/firebase-analytics",
    description: "enables the use of native Google Analytics for Firebase.",
    tags: ["firebase", "analytics"],
  },
  {
    name: "firebase-core",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/firebase-core",
    description:
      "provides access to the Firebase configuration and performs initialisation of the native Firebase App.",
    tags: ["firebase"],
  },
  {
    name: "firebase-recaptcha",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/firebase-recaptcha",
    description:
      "provides a set of building blocks for creating a reCAPTCHA verifier and using that with your Firebase Phone authentication workflow.",
    tags: ["firebase", "authentication"],
  },
  {
    name: "font",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/font",
    description:
      "allows loading fonts from the web and using them in React Native components.",
    tags: ["font", "loading", "UI"],
  },
  {
    name: "gesture-handler",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/gesture-handler",
    description: "An API for handling complex gestures.",
    tags: ["touch", "gesture", "device"],
  },
  {
    name: "gl-view",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/gl-view",
    description:
      "provides a View that acts as an OpenGL ES render target, useful for rendering 2D and 3D graphics.",
    tags: ["OpenGL"],
  },
  {
    name: "gyroscope",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/gyroscope",
    description:
      "provides access to the device's gyroscope sensor to respond to changes in rotation in 3D space.",
    tags: ["3D", "device", "sensor"],
  },
  {
    name: "haptics",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/haptics",
    description:
      "provides haptic (touch) feedback for Taptic (iOS 10+) and Vibrator (Android).",
    tags: ["touch", "device"],
  },
  {
    name: "imagemanipulator",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/imagemanipulator",
    description:
      "provides an API to modify images stored on the local file system.",
    tags: ["local", "system", "storage", "media", "image"],
  },
  {
    name: "imagepicker",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/imagepicker",
    description:
      "provides access to the system's UI for selecting images and videos from the phone's library or taking a photo with the camera.",
    tags: ["UI", "system", "image", "media"],
  },
  {
    name: "in-app-purchases",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/in-app-purchases",
    description: "provides an API to accept payments for in-app products.",
    tags: ["payments"],
  },
  {
    name: "intent-launcher",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/intent-launcher",
    description:
      "provides a way to launch Android intents. For example, you can use this API to open a specific settings screen.",
  },
  {
    name: "keep-awake",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/keep-awake",
    description:
      "provides a React hook that prevents the screen from sleeping and a pair of functions to enable this behavior imperatively.",
    tags: ["device"],
  },
  {
    name: "linear-gradient",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/linear-gradient",
    description:
      "provides a native React view that transitions between multiple colors in a linear direction.",
    tags: ["color", "UX"],
  },
  {
    name: "linking",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/linking",
    description:
      "provides utilities and helper methods for your app to interact with other installed apps using deep links.",
    tags: ["links"],
  },
  {
    name: "local-authentication",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/local-authentication",
    description:
      "allows you to use FaceID and TouchID (iOS) or the Biometric Prompt (Android) to authenticate the user with a face or fingerprint scan.",
    tags: ["device", "authentication", "local"],
  },
  {
    name: "localization",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/localization",
    description:
      "allows you to Localize your app, customizing the experience for specific regions, languages, or cultures. It also provides access to the locale data on the native device.",
  },
  {
    name: "location",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/location",
    description:
      "allows reading geolocation information from the device. Your app can poll for the current location or subscribe to location update events.",
    tags: ["device", "system", "information", "location"],
  },
  {
    name: "lottie",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/lottie",
    description: "support for Lottie, the animation library from AirBnB.",
    tags: ["UX", "UI", "motion", "animation"],
  },
  {
    name: "magnetometer",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/magnetometer",
    description:
      "provides access to the device magnetometer sensor(s) to respond to and measure the changes in the magnetic field.",
    tags: ["device", "sensor"],
  },
  {
    name: "mail-composer",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/mail-composer",
    description:
      "allows you to compose and send emails quickly and easily using the OS UI.",
    tags: ["email", "device", "UI"],
  },
  {
    name: "map-view",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/map-view",
    description:
      "provides a Map component that uses Apple Maps or Google Maps on iOS and Google Maps on Android.",
    tags: ["device", "location"],
  },
  {
    name: "masked-view",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/masked-view",
    description:
      "provides a masked view which only displays the pixels that overlap with the view rendered in its mask element.",
    tags: ["UI"],
  },
  {
    name: "media-library",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/media-library",
    description:
      "provides access to the user's media library, allowing them to access their existing images and videos from your app, as well as save new ones.",
    tags: ["media", "storage"],
  },
  {
    name: "navigation-bar",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/navigation-bar",
    description:
      "enables you to modify and observe the native navigation bar on Android devices.",
    tags: ["device", "information"],
  },
  {
    name: "netinfo",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/netinfo",
    description:
      "allows you to get information about connection type and connection quality.",
    tags: ["device", "information"],
  },
  {
    name: "network",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/network",
    description:
      "provides useful information about the device's network such as its IP address, MAC address, and airplane mode status.",
    tags: ["device", "information"],
  },
  {
    name: "notifications",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/notifications",
    description:
      "provides an API to fetch push notification tokens and to present, schedule, receive and respond to notifications.",
    tags: ["push", "device", "notification"],
  },
  {
    name: "pedometer",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/pedometer",
    description:
      "get the user's step count and subscribe to pedometer updates.",
    tags: ["device", "information"],
  },
  {
    name: "picker",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/picker",
    description:
      "A component that provides access to the system UI for picking between several options",
    tags: ["system", "UI"],
  },
  {
    name: "print",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/print",
    description:
      "provides an API for iOS (AirPrint) and Android printing functionality.",
    tags: ["device", "print"],
  },
  {
    name: "random",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/random",
    description:
      "provides a native interface for creating strong random bytes.",
    tags: ["crypto"],
  },
  {
    name: "reanimated",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/reanimated",
    description:
      "provides an API that greatly simplifies the process of creating smooth, powerful, and maintainable animations.",
    tags: ["motion", "UX", "animation"],
  },
  {
    name: "register-root-component",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/register-root-component",
    description:
      "this function tells Expo what component to use as the root component for your app.",
    tags: ["component", "function", "context"],
  },
  {
    name: "safe-area-context",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/safe-area-context",
    description:
      "provides a flexible API for accessing device safe area inset information to properly position around notches, status bars, home indicators, etc.",
    tags: ["device", "UI"],
  },
  {
    name: "screen-capture",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/screen-capture",
    description:
      "allows you to protect screens in your app from being captured or recorded, as well as be notified if a screenshot is taken while your app is foregrounded.",
  },
  {
    name: "screen-orientation",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/screen-orientation",
    description:
      "allows changing supported screen orientations at runtime, and subscribing to orientation changes. This will take priority over the orientation key in app.json.",
    tags: ["device", "orientation"],
  },
  {
    name: "screens",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/screens",
    description:
      "provides native primitives to represent screens instead of plain <View> components in order to better take advantage of operating system behavior and optimizations around screens.",
    tags: ["device", "system"],
  },
  {
    name: "securestore",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/securestore",
    description:
      "provides a way to encrypt and securely store key–value pairs locally on the device.",
    tags: ["encrypt", "local", "storage"],
  },
  {
    name: "segment",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/segment",
    description:
      "provides access to https://segment.com/ mobile analytics. Wraps Segment's iOS and Android sources.",
    tags: ["analytics"],
  },
  {
    name: "segmented-control",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/segmented-control",
    description: "a fancy radio button",
    tags: ["component", "UI"],
  },
  {
    name: "sensors",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/sensors",
    description:
      "provides various APIs for accessing device sensors to measure motion, orientation, pressure, magnetic fields, and step count.",
    tags: ["device", "information", "sensor", "motion"],
  },
  {
    name: "shared-element",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/shared-element",
    description:
      "provides a set of building blocks to help you build shared element transitions — animations where you transition an element in one scene smoothly into another.",
    tags: ["motion", "component", "UI", "UX", "animation"],
  },
  {
    name: "sharing",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/sharing",
    description:
      "allows you to share files directly with other compatible applications.",
    tags: ["file", "media", "sharing"],
  },
  {
    name: "skia",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/skia",
    description:
      "brings the Skia Graphics Library to React Native.",
    tags: ["graphics"],
  },
  {
    name: "slider",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/slider",
    description:
      "A component that provides access to the system UI for a slider control, that allows users to pick among a range of values by dragging an anchor.",
    tags: ["system", "UI", "motion", "animation"],
  },
  {
    name: "sms",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/sms",
    description:
      "provides access to the system's UI/app for sending SMS messages.",
    tags: ["SMS", "system", "UI"],
  },
  {
    name: "speech",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/speech",
    description:
      "provides an API that allows you to utilize Text-to-speech functionality in your app.",
    tags: ["text-to-speech"],
  },
  {
    name: "splash-screen",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/splash-screen",
    description:
      "A module that tells the splash screen to remain visible until it has been explicitly told to hide. ",
    tags: ["loading", "UI"],
  },
  {
    name: "sqlite",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/sqlite",
    description:
      "gives your app access to a database that can be queried through a WebSQL-like API. The database is persisted across restarts of your app.",
    tags: ["database", "storage"],
  },
  {
    name: "status-bar",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/status-bar",
    description:
      "gives you a component and imperative interface to control the app status bar to change its text color, background color, hide it, make it translucent or opaque, and apply animations to any of these changes.",
    tags: ["device", "UI", "component"],
  },
  {
    name: "storereview",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/storereview",
    description:
      "provides access to ask the user to rate your app without ever having to leave the app itself.",
    tags: ["device", "review", "rating"],
  },
  {
    name: "stripe",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/stripe",
    description:
      "allows you to build delightful payment experiences in your native Android and iOS apps using React Native & Expo",
    tags: ["payments"],
  },
  {
    name: "svg",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/svg",
    description:
      "allows you to use SVGs in your app, with support for interactivity and animation.",
    tags: ["media", "svg"],
  },
  {
    name: "system-ui",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/system-ui",
    description:
      "enables you to interact with UI elements that fall outside of the React tree.",
    tags: ["system", "UI"],
  },
  {
    name: "task-manager",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/task-manager",
    description:
      "allows you to manage long-running tasks, in particular those tasks that can run while your app is in the background.",
    tags: ["background", "device"],
  },
  {
    name: "tracking-transparency",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/tracking-transparency",
    description:
      "a library for requesting permission to track the user or their device.",
    tags: ["permissions", "device"],
  },
  {
    name: "updates",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/updates",
    description:
      "allows you to programmatically control and respond to over-the-air updates to your app.",
    tags: ["updates"],
  },
  {
    name: "video-thumbnails",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/video-thumbnails",
    description:
      "allows you to generate an image to serve as a thumbnail from a video file.",
    tags: ["video", "media"],
  },
  {
    name: "video",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/video",
    description:
      "displays a video inline with the other UI elements in your app.",
    tags: ["video", "media"],
  },
  {
    name: "view-pager",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/view-pager",
    description:
      "exposes a component that provides the layout and gestures to scroll between pages of content, like a carousel.",
    tags: ["system", "UI", "motion", "animation"],
  },
  {
    name: "webbrowser",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/webbrowser",
    description:
      "provides access to the system's web browser and supports handling redirects.",
    tags: ["system", "links","web"],
  },
  {
    name: "webview",
    link: "https://docs.expo.io/versions/v46.0.0/sdk/webview",
    description:
      "provides a WebView component that renders web content in a native view.",
      tags: ["component","web"]
  },
];
