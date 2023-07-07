import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { GlobalProvider } from "./src/context/Global"

import { Header } from "./src/components/Header"
import { Spots } from "./src/components/Spots"

import { BACKGROUND_COLORS } from "./src/constants/colors"

// import { connectToDevTools } from "react-devtools-core"

// if (__DEV__) {
//   connectToDevTools({
//     host: "localhost",
//     port: 8097,
//   });
// }

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>

      <StatusBar style="light" />
      
      <GlobalProvider>

          <Header />
          
          <Spots />

      </GlobalProvider>

    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLORS.HEADER,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});