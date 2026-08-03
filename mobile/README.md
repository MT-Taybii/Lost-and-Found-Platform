# Lost & Found Platform - Mobile App

A React Native mobile application for reporting and finding lost items, converted from the original C++ console application.

## Features

- **Report Lost Items**: Add items you've lost with description, location, and owner information
- **Report Found Items**: Add items you've found with description, location, and finder information
- **View Lost Items**: Browse all reported lost items
- **View Found Items**: Browse all reported found items
- **Find Matches**: Automatically match lost items with found items based on item name

## Tech Stack

- **React Native** with Expo for cross-platform development (iOS & Android)
- **Expo Router** for navigation
- **TypeScript** for type safety
- **AsyncStorage** for data persistence
- **Context API** for state management

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo Go app on your mobile device (for testing)
- Android Studio / Xcode (for building production apps)

## Installation

1. Navigate to the mobile directory:
```bash
cd mobile
```

2. Install dependencies:
```bash
npm install
```

## Running the App

### Development with Expo Go

1. Start the development server:
```bash
npm start
```

2. Scan the QR code with the Expo Go app on your mobile device
   - Download Expo Go from App Store (iOS) or Google Play Store (Android)

### iOS Simulator

```bash
npm run ios
```

### Android Emulator

```bash
npm run android
```

### Web

```bash
npm run web
```

## Project Structure

```
mobile/
├── app/
│   ├── index.tsx          # Home screen with menu
│   ├── report-lost.tsx    # Report lost item screen
│   ├── report-found.tsx   # Report found item screen
│   ├── lost-items.tsx     # View lost items screen
│   ├── found-items.tsx    # View found items screen
│   └── matches.tsx        # Find matches screen
├── src/
│   ├── context/
│   │   └── AppContext.tsx # Global state management
│   ├── models/
│   │   └── Item.ts        # Data models
│   └── utils/
│       └── validation.ts  # Input validation utilities
├── assets/                # Images and icons
├── package.json
├── app.json              # Expo configuration
├── tsconfig.json         # TypeScript configuration
└── babel.config.js       # Babel configuration
```

## Data Persistence

The app uses AsyncStorage to persist data locally on the device. All lost and found items are saved and will persist across app restarts.

## Form Validation

- **Item Name**: Only letters, numbers, and spaces allowed
- **Location**: Only letters and spaces allowed
- **Owner/Finder Name**: Only letters and spaces allowed

## Building for Production

### Quick Start - Android APK (Downloadable)

For a downloadable APK file that can be installed on any Android phone:

1. Install EAS CLI:
```bash
npm install -g eas-cli
```

2. Login to Expo:
```bash
eas login
```

3. Configure the project:
```bash
eas build:configure
```

4. Build the APK:
```bash
eas build --platform android --profile preview
```

5. Download the APK from the link provided in the terminal

See [BUILD_APK.md](BUILD_APK.md) for detailed instructions.

### iOS

```bash
eas build --platform ios
```

### Android (AAB for Play Store)

```bash
eas build --platform android
```

## Original C++ Application

This mobile app is based on the original C++ console application located in the parent directory. The core functionality and logic have been preserved while adapting it for a modern mobile interface.

## License

This project is open source and available for educational purposes.
