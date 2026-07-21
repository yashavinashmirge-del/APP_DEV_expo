# APP_DEV_expo

A collection of Expo / React Native learning exercises built while working through an app development course. Each top-level folder is a standalone Expo project created with `create-expo-app`, using file-based routing via `expo-router`.

## 📁 Structure

| Folder | Description |
|---|---|
| [`SETUP_EXPO`](./SETUP_EXPO) | Initial Expo project setup — verifying the toolchain and dev environment work end-to-end. |
| [`COMPONENTS`](./COMPONENTS/app/index.tsx) | Module 2 exercise — building on the base setup with additional screens/components. |

Each folder is an independent Expo app with its own `package.json`, `app.json`, and `app/` directory (routes), so they can be run and installed separately.

## 🛠 Tech Stack

- [Expo](https://expo.dev) (SDK 54) with the new architecture enabled
- [Expo Router](https://docs.expo.dev/router/introduction/) for file-based navigation
- React 19 / React Native 0.81
- TypeScript
- ESLint (`eslint-config-expo`)

## 🚀 Getting Started

Prerequisites:
- [Node.js](https://nodejs.org/) (LTS recommended)
- [Bun](https://bun.sh/) — each project ships a `bun.lock` and is managed with Bun
- [Expo Go](https://expo.dev/go) app on your phone, or an Android/iOS simulator, for previewing

To run a specific project, `cd` into its folder first, e.g.:

```bash
cd SETUP_EXPO
bun install
bunx expo start
```

or for Module 2:

```bash
cd MODULE02
bun install
bunx expo start
```

From the Expo CLI output you can open the app in:
- an [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- an [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), for a quick sandboxed preview
- a [development build](https://docs.expo.dev/develop/development-builds/introduction/)

## 📜 Available Scripts (per project)

| Script | Description |
|---|---|
| `bun start` | Start the Expo dev server |
| `bun run android` | Start and open on Android |
| `bun run ios` | Start and open on iOS |
| `bun run web` | Start and open in the browser |
| `bun run lint` | Run ESLint |
| `bun run reset-project` | Reset to a blank starter app (moves current code to `app-example`) |

## 📚 Learn More

- [Expo documentation](https://docs.expo.dev/)
- [Expo Router documentation](https://docs.expo.dev/router/introduction/)
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/)
