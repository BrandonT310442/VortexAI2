import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeStack from '../VortexAI/routes/homeStack';
import { TamaguiProvider, createTamagui } from '@tamagui/core' // or 'tamagui'
import { config } from '@tamagui/config/v3'
const tamaguiConfig = createTamagui(config)


export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
          <HomeStack />

  </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
