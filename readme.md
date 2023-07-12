# Jest Implementation

This branch has the implementation of Jest without ending.

### Install steps

1. Install Flipper desktop app
2. EAS CLI installed and logged in to your Expo account
3. From Flipper run Setup Doctor
4. npx expo install expo-dev-client
5. npx expo install expo-build-properties
6. Update app.json or app.config.js:

```
{
  "plugins": [
    [
      "expo-build-properties",
      {
        "ios": {
          "flipper": true
        }
      }
    ]
  ]
}
```

7. Flipper requires creating a development build of your project
8. eas build --profile development -p android / eas build --profile development -p ios
9. after npx expo start --dev-client

### Sources

![Open spot view](https://github.com/gabalfa/open-spot-expo/blob/feature/flipperImplementation/previews/IMG-FLIPPER.png?raw=true)

[Expo flipper](https://docs.expo.dev/guides/using-flipper/)
