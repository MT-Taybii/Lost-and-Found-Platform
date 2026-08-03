# Building Android APK for Download

This guide explains how to build a downloadable APK file for Android phones.

## Prerequisites

1. **Node.js** (v18 or higher) installed
2. **Expo Account** - Create a free account at [expo.dev](https://expo.dev)
3. **EAS CLI** installed globally

## Step 1: Install Dependencies

Navigate to the mobile directory and install dependencies:

```bash
cd mobile
npm install
```

## Step 2: Install EAS CLI Globally

```bash
npm install -g eas-cli
```

## Step 3: Login to Expo

```bash
eas login
```

This will open a browser window where you can log in to your Expo account.

## Step 4: Configure the Project

```bash
eas build:configure
```

This will set up your project for EAS Build and create necessary configuration files.

## Step 5: Build the APK

### For Development/Testing (Preview Build)

```bash
eas build --platform android --profile preview
```

This creates an APK that can be installed on any Android device without Google Play Store.

### For Production

```bash
eas build --platform android --profile production
```

This creates an optimized APK for production use.

## Step 6: Download the APK

1. After the build completes, you'll see a download link in the terminal
2. Click the link to download the APK file
3. The APK file can be shared and installed on any Android device

## Installing the APK on Android

### Method 1: Direct Download

1. Send the APK file to your Android phone (via email, cloud storage, etc.)
2. On your phone, enable "Install from Unknown Sources" in Settings > Security
3. Tap the APK file to install

### Method 2: USB Transfer

1. Connect your Android phone to your computer via USB
2. Transfer the APK file to your phone
3. On your phone, enable "Install from Unknown Sources"
4. Tap the APK file to install

## Build Time

- First build: 10-20 minutes
- Subsequent builds: 5-10 minutes (cached dependencies)

## Troubleshooting

### Build Fails

If the build fails, check:
1. You're logged in to Expo (`eas whoami`)
2. Your project is configured (`eas build:configure`)
3. All dependencies are installed (`npm install`)

### APK Won't Install

1. Enable "Install from Unknown Sources" in Android settings
2. Make sure you have enough storage space
3. Try uninstalling any previous version first

## Alternative: Local Build (Advanced)

If you prefer to build locally without using Expo's cloud service:

1. Install Android Studio and set up Android SDK
2. Run:
```bash
eas build --platform android --local
```

This requires significant setup time and disk space but doesn't require an Expo account.

## Cost

- Free tier: Up to 30 builds per month
- Paid plans: More builds and faster build times

See [expo.dev/pricing](https://expo.dev/pricing) for details.
