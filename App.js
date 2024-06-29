import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.first_view}>
        <Image source={require('./assets/Menu.png')} />
        <View>
        <Text style={{ fontSize: 25, fontWeight: "bold"}}>Open</Text>
        <Text style={{ fontSize: 25, fontWeight: "bold"}}>Fashion</Text>
        </View>
        <View style={{flexDirection: 'row', gap: 15}}>
       <Image source={require('./assets/Search.png')} />
        <Image source={require('./assets/shoppingBag.png')} />
        </View>
        </View>
      

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
   justifyContent: 'space-evenly',
   paddingLeft: 20,
   paddingRight: 20,
  },
  first_view: {
    flexDirection: 'row',
    justifyContent: 'space-between'
    }
});
