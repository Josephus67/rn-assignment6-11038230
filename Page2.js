
import React from 'react';
import { Text, SafeAreaView, StyleSheet, Image, View, imageSize } from 'react-native';

export default function Page2() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchbar_row}>
    <Image source={require('./assets/Logo.png')} />

    <Image source={require('./assets/Search.png')} style={styles.image} />
    </View>
    <View style={{height: 5}}/>
    <Text style={styles.checkout}>Checkout</Text>
<View style={{flexDirection: 'column'}}>
    <View style={{flexDirection:'row'}}>
      <Image source={require('./assets/dress1.png')} style={{transform: [{ scale: 0.8 }] }}/>
      <View style={{marginTop: 80}}>
            <Text style={styles.Office_wear}> OFFICE WEAR</Text>
    <Text style={{opacity: 0.5}}>reversible angora cardigan</Text>
    <Text style={{color:'#FF5B61'}}>$120</Text> 
    </View>
    <Image source={require('./assets/remove.png')} style={{marginTop: 150}}/>

    </View>
    <View style={{flexDirection:'row'}}>
    <Image source={require('./assets/dress2.png')} style={{transform: [{ scale: 0.8 }] }}/>
    <View style={{marginTop: 80}}>
            <Text style={styles.Office_wear}> LAMEREI</Text>
    <Text style={{opacity: 0.5}}>reversible angora cardigan</Text>
    <Text style={{color:'#FF5B61'}}>$120</Text> 
    </View>
    <Image source={require('./assets/remove.png')} style={{marginTop: 150}}/>
    </View>
    <View style={{flexDirection:'row'}}>
      <Image source={require('./assets/dress3.png')} style={{transform: [{ scale: 0.8 }] }}/>
      <View style={{marginTop: 80}}>
            <Text style={styles.Office_wear}> CHURCH WEAR</Text>
    <Text style={{opacity: 0.5}}>reversible angora cardigan</Text>
    <Text style={{color:'#FF5B61'}}>$120</Text> 
    </View>
    <Image source={require('./assets/remove.png')} style={{marginTop: 140}}/>

    </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  searchbar_row: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 130,
    marginLeft: 130,
  },
  checkout: {
    letterSpacing: 3,
    fontSize: 25,
    opacity: 0.5,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
 /* image: {
    //width: imageSize,
    //height: imageSize,
    //resizeMode: 'contain',
  },
  */
 Office_wear: {
  letterSpacing: 2.6,
  fontSize: 18,
 }
});
