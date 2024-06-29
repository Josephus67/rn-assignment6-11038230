import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      
        <View style={styles.first_view}>
          <Image source={require('./assets/Menu.png')} />
       <Image source={require('./assets/Logo.png')} />
        <View style={{flexDirection: 'row', gap: 15}}>
       <Image source={require('./assets/Search.png')} />
        <Image source={require('./assets/shoppingBag.png')} />
        </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={{ fontSize: 25, fontStyle: 'italic', letterSpacing: 3}}>Our Story</Text>
      <View style={{flexDirection: 'row', gap: 25}}> 
        <Image source={require('./assets/Menu.png')} />
        <Image source={require('./assets/Menu.png')} />
      </View>
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
