# Jest Implementation
This branch has the implementation of Jest without ending. 

### Install steps

1. npx expo install jest-expo jest
2. npm install --save-dev react-test-renderer
3. npm install --save-dev @testing-library/react-native
4. npm install --save-dev @testing-library/jest-native
5. Update package.json with:
```
"scripts": {
  ...
  "test": "jest"
},
```
2. Create jest.config.js file:
```
module.exports = {
  preset: "@testing-library/react-native",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  transform: {"\\.[jt]sx?$": "babel-jest"},
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|@expo-location/.*|@firebase/firestore)"
  ]
}
```
### Sources
[Expo testing](https://docs.expo.dev/develop/unit-testing/)

[Example with Testing library](https://www.notjust.dev/blog/2023-01-16-react-native-testing)
