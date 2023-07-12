# Open Spot
This repository contains the source code and related documentation for the Open Spot app.
Open Spot is a mobile application that allows athletes and sports enthusiasts to discover and locate ideal training spots for their favourite sports. 

## Motivations
### Have a personal software development project
I began this project as a way to show proficiency in technical skills, so, I included technical topics such as state management, and hooks implementation, to solve requirements such as multilanguage, forecast climate, and a flow user experience.
### Learning and training
Throughout this development I've learned about, graphic design, user experience, mobile software development, frontend architecture patterns, Javascript, Maps API, and Firebase, in addition, to solving many technical troubles related to development and deployment.

## Features
- It shows Open Spots (places to train and work out) by a selected region. 
- It brings you, information on the current climate and forecast, in your current location or a selected spot.
- It's bilingual, allowing change between Spanish and English language.
- It's implemented Maps API to allow navigating between Open Spots.
- It shows information about distance and a suggested path to arrive at the spot.

## What is cooking?
I'm working on new features, such as:
- Show a summary of open spots grouped by sports.
- Measures and metrics with Flipper implementation 
- Pass all tests :)
- Publish an APK from EAS (expo application services), I have trouble for setup the environment variables related to Firebase.
- The user is able to add open spots, this needs an IA implementation to analyse user inputs such as images and text.
- Give suggestions about the best open spot to work out, taking into account climate and distance.

### Install steps
To run this code you need:
1. Install [Node.js](https://nodejs.org/en)
2. To run a virtual device follow this guide [Expo Go](https://docs.expo.dev/get-started/expo-go/)
3. Run the following commands in the terminal:
```
git clone HTTP://github/gabalfa/open-spot-expo
cd open-spot-expo
npm install
npx expo start
```
4. Provide the secrets for each API key, as you can see in the file .dev.example
5. Have a Firebase backend with correct data

### Stack
This app is developed with Javascript, React-Native, Expo, Google Maps and Firebase.

![javascript](https://img.icons8.com/color/48/javascript--v1.png)
![react native](https://img.icons8.com/nolan/64/react-native.png)
![firestore](https://img.icons8.com/color/48/firebase.png)
![maps](https://img.icons8.com/color/48/google-maps-new.png)


![image test](https://drive.google.com/file/d/1BGU18fv9v9r0jqxZs45f3UQH83TOGqj9/view)
