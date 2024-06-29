import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Safe, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
      <Text style={{ fontSize: 25}}>Open Fashion </Text>
      <Text style={{ fontSize: 25}}>Our Story</Text>

</View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
