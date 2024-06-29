import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, Image, ImageBackground } from 'react-native';

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
        <View>
        <Image source={require('./assets/Menu.png')} />
        </View>
        <View>
        <Image source={require('./assets/Menu.png')} />
        </View>
      </View>
        </View>
        
      
      <View style={{flexDirection: 'row', gap: 20, }}>
        <View>
          <View>
          <ImageBackground source={require('./assets/dress1.png')} resizeMode='contain' style={{height: 250, width: 180}}/>
          <Image source={require('./assets/add_circle.png')}
        style={{ position: 'absolute',
         bottom: 10,
         right: 10,}}  
          />
        </View>
        <Text>Office wear</Text>
        <Text style={{opacity: 0.5}}>reversible angora cardigan</Text>
        <Text style={{color: '#FF5B61'}}>$120</Text>
        </View>

        <View>
          <View>
        <ImageBackground source={require('./assets/dress2.png')} resizeMode='contain' style={{height: 250, width: 180}}/>
        <Image source={require('./assets/add_circle.png')}
        style={{ position: 'absolute',
         bottom: 10,
         right: 10,}}  
          />
          </View>
       <Text>Black</Text> 
      <Text style={{opacity: 0.5}}>reversible angora cardigan </Text>
      <Text style={{color: '#FF5B61'}}>$120</Text>
        </View>
      </View>

<View style={{flexDirection: 'column'}}>

      <View style={{flexDirection: 'row', gap: 20, }}>
        <View>
          <View>
          <ImageBackground source={require('./assets/dress3.png')} resizeMode='contain' style={{height: 250, width: 180}}/>
          <Image source={require('./assets/add_circle.png')}
        style={{ position: 'absolute',
         bottom: 10,
         right: 10,}}  
          />
        </View>
        <Text>Church Wear</Text>
        <Text style={{opacity: 0.5}}>reversible angora cardigan</Text>
        <Text style={{color: '#FF5B61'}}>$120</Text>
        </View>

        <View>
          <View>
        <ImageBackground source={require('./assets/dress4.png')} resizeMode='contain' style={{height: 250, width: 180}}/>
        <Image source={require('./assets/add_circle.png')}
        style={{ position: 'absolute',
         bottom: 10,
         right: 10,}}  
          />
          </View>
       <Text>Lamerei</Text> 
      <Text style={{opacity: 0.5}}>reversible angora cardigan </Text>
      <Text style={{color: '#FF5B61'}}>$120</Text>
        </View>
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
