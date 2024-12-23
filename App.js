// The following import breaks tests. [jay_mclain]
// TODO: FIX: import '@expo/metro-runtime'; // MUST be the first import to ensure Fast Refresh works on web.

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
