import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,SafeAreaView } from 'react-native';
import HelloWorld from "./HelloWorld";

const App = () => {
  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Hello World!!! 🎉</Text>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});

export default App;