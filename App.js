import { StatusBar } from 'expo-status-bar'
import { StyleSheet, SafeAreaView } from 'react-native'

import { GlobalProvider } from "./src/context/Global"

import { Header } from "./src/components/Header"
import { Filters } from "./src/components/Filters"
import { Spots } from "./src/components/Spots"

import { BACKGROUND_COLORS } from "./src/constants/colors"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <StatusBar style="light" />
      
      <GlobalProvider>

        <Header />

        {/* <Filters /> */}
        
        <Spots />

      </GlobalProvider>

    </SafeAreaView>
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
