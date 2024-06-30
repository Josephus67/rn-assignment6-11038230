/*
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, Image, ScrollView } from 'react-native';

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


        <ScrollView vertical showsVerticalScrollIndicator={true}>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={{ fontSize: 25, fontStyle: 'italic', letterSpacing: 3}}>Our Story</Text>
      <View style={{flexDirection: 'row', gap: 25}}> 
        <View>
        <Image source={require('./assets/Menu.png')}  />
        </View>
        <View>
        <Image source={require('./assets/Menu.png')} />
        </View>
      </View>
        </View>



        <View style={{flexDirection: 'column',justifyContent: 'flex-evenly'}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly', gap: 20}}>
    <View>
    <Image source={require('./assets/dress1.png')} style={styles.left_Images}/>
    <Text> Office Wear</Text>
    <Text>reversible angora cardigan</Text>
    <Text>$120</Text>    
      </View>
    <View>
      <Image source={require('./assets/dress2.png')} style={styles.left_Images}/>
      <Text>Black</Text>
      <Text>reversible angora cardigan</Text>
      <Text>$120</Text>
    </View>
      </View>



      <View style={{flexDirection: 'row', justifyContent: 'space-evenly', gap: 20}}>
    <View>
    <Image source={require('./assets/dress1.png')} style={styles.left_Images}/>
    <Text> Office Wear</Text>
    <Text>reversible angora cardigan</Text>
    <Text>$120</Text>    
      </View>
    <View>
    <Image source={require('./assets/dress2.png')} style={styles.left_Images} />
    <Text>Black</Text>
      <Text>reversible angora cardigan</Text>
      <Text>$120</Text>
    </View>
      </View>


      


     
</View>
</ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   paddingLeft: 20,
   paddingRight: 20,
  },
  first_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 400,
    marginTop: 10,
    position: 'absolute'
    },
    left_Images: {
 //transform: [{ scale: 0.8 }], 
 //width: '180%', 
 //height: '50%',
 //marginLeft: -70,
    }
});
*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const imageSize = width / 2; // Adjust the image size to fit within the screen

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
     {/* <View style={styles.first_view}>
        <Image source={require('./assets/Menu.png')} style={styles.icon} />
        <Image source={require('./assets/Logo.png')} style={styles.logo} />
        <View style={styles.iconContainer}>
          <Image source={require('./assets/Search.png')} style={styles.icon} />
          <Image source={require('./assets/shoppingBag.png')} style={styles.icon} />
        </View>
      </View>*/}

      <View style={{ height: 20 }} />
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <View style={styles.row}>
          <View>
            <Image source={require('./assets/dress1.png')} style={[styles.image, {marginLeft: -20}]} />
            <View>
            <Text> Office Wear</Text>
    <Text style={{opacity: 0.5}}>reversible angora cardigan</Text>
    <Text style={{color:'#FF5B61'}}>$120</Text> 
    </View>
            </View>
            <View>
            <Image source={require('./assets/dress2.png')} style={[styles.image,{marginLeft: -20} ]}/>
            <Text> Black</Text>
    <Text style={{opacity: 0.5}}>reversible angora cardigan</Text>
    <Text style={{color:'#FF5B61'}}>$120</Text> 
    </View>
          </View>
          <View style={styles.row}>
          <View>
            <Image source={require('./assets/dress3.png')} style={[styles.image, {marginLeft: -20}]} />
            <Text> Church Wear</Text>
    <Text style={{opacity: 0.5}}>reversible angora cardigan</Text>
    <Text style={{color:'#FF5B61'}}>$120</Text> 
            </View>
            <View>
            <Image source={require('./assets/dress4.png')} style={[styles.image, {marginLeft: -20}]} />
            <Text> Lamerei</Text>
    <Text style={{opacity: 0.5}}>reversible angora cardigan</Text>
    <Text style={{color:'#FF5B61'}}>$120</Text> 
            </View>
          </View>
          <View style={styles.row}>
          <View>
            <Image source={require('./assets/dress5.png')} style={[styles.image, {marginLeft: -20}]} />
            <Text> 2IWN</Text>
    <Text style={{opacity: 0.5}}>reversible angora cardigan</Text>
    <Text style={{color:'#FF5B61'}}>$120</Text> 
            </View>
            <View>
            <Image source={require('./assets/dress6.png')} style={[styles.image, {marginLeft: -20}]} />
            <Text> Lopo</Text>
    <Text style={{opacity: 0.5}}>reversible angora cardigan</Text>
    <Text style={{color:'#FF5B61'}}>$120</Text> 
          </View>
          </View>
          <View style={styles.row}>
          <View>
            <Image source={require('./assets/dress7.png')} style={[styles.image, {marginLeft: -20}]} />
            <Text> 2IWN</Text>
    <Text style={{opacity: 0.5}}>reversible angora cardigan</Text>
    <Text style={{color:'#FF5B61'}}>$120</Text> 
            </View>
            <View>
            <Image source={require('./assets/dress3.png')} style={[styles.image, {marginLeft: -20}]} />
          <Text> Lame</Text>
    <Text style={{opacity: 0.5}}>reversible angora cardigan</Text>
    <Text style={{color:'#FF5B61'}}>$120</Text> 
          </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  first_view: {
    flexDirection: 'row',
    justifyContent: 'space-around',
   marginTop: 30,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  imageContainer: {
    flexDirection: 'column',
    gap: 15,
    
   // paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 20,
  },
  image: {
    width: imageSize,
    height: imageSize,
    resizeMode: 'contain',
  },
});
