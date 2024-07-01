
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Dimensions, ImageBackground } from 'react-native';

const { width } = Dimensions.get('window');
const imageSize = width / 2; // Adjust the image size to fit within the screen

export default function Page1() {
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

      <View style={{ height: 20 }} />
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <View style={styles.row}>
          <View>
            <Image source={require('./assets/dress1.png')} style={[styles.image, {marginLeft: -20}]}  />
       <Image source={require('./assets/add_circle.png')} style={{marginLeft:130, marginTop: -30 }}/>
           <View style={{height: 5}}/>
           <View>
            <Text> Office Wear</Text>
    <Text style={{opacity: 0.5}}>reversible angora cardigan</Text>
    <Text style={{color:'#FF5B61'}}>$120</Text> 
    </View>
            </View>
            <View>
            <Image source={require('./assets/dress2.png')} style={[styles.image,{marginLeft: -20} ]}/>
            <Image source={require('./assets/add_circle.png')} style={{marginLeft:130, marginTop: -30 }}/>
           <View style={{height: 5}}/>
            <Text> Black</Text>
    <Text style={{opacity: 0.5}}>reversible angora cardigan</Text>
    <Text style={{color:'#FF5B61'}}>$120</Text> 
    </View>
          </View>
          <View style={styles.row}>
          <View>
            <Image source={require('./assets/dress3.png')} style={[styles.image, {marginLeft: -20}]} />
            <Image source={require('./assets/add_circle.png')} style={{marginLeft:130, marginTop: -30 }}/>
           <View style={{height: 5}}/>
            <Text> Church Wear</Text>
    <Text style={{opacity: 0.5}}>reversible angora cardigan</Text>
    <Text style={{color:'#FF5B61'}}>$120</Text> 
            </View>
            <View>
            <Image source={require('./assets/dress4.png')} style={[styles.image, {marginLeft: -20}]} />
            <Image source={require('./assets/add_circle.png')} style={{marginLeft:130, marginTop: -30 }}/>
           <View style={{height: 5}}/>
            <Text> Lamerei</Text>
    <Text style={{opacity: 0.5}}>reversible angora cardigan</Text>
    <Text style={{color:'#FF5B61'}}>$120</Text> 
            </View>
          </View>
          <View style={styles.row}>
          <View>
            <Image source={require('./assets/dress5.png')} style={[styles.image, {marginLeft: -20}]} />
            <Image source={require('./assets/add_circle.png')} style={{marginLeft:130, marginTop: -30 }}/>
           <View style={{height: 5}}/>
            <Text> 2IWN</Text>
    <Text style={{opacity: 0.5}}>reversible angora cardigan</Text>
    <Text style={{color:'#FF5B61'}}>$120</Text> 
            </View>
            <View>
            <Image source={require('./assets/dress6.png')} style={[styles.image, {marginLeft: -20}]} />
            <Image source={require('./assets/add_circle.png')} style={{marginLeft:130, marginTop: -30 }}/>
           <View style={{height: 5}}/>
            <Text> Lopo</Text>
    <Text style={{opacity: 0.5}}>reversible angora cardigan</Text>
    <Text style={{color:'#FF5B61'}}>$120</Text> 
          </View>
          </View>
          <View style={styles.row}>
          <View>
            <Image source={require('./assets/dress7.png')} style={[styles.image, {marginLeft: -20}]} />
            <Image source={require('./assets/add_circle.png')} style={{marginLeft:130, marginTop: -30 }}/>
           <View style={{height: 5}}/>
            <Text> 2IWN</Text>
    <Text style={{opacity: 0.5}}>reversible angora cardigan</Text>
    <Text style={{color:'#FF5B61'}}>$120</Text> 
            </View>
            <View>
            <Image source={require('./assets/dress3.png')} style={[styles.image, {marginLeft: -20}]} />
            <Image source={require('./assets/add_circle.png')} style={{marginLeft:130, marginTop: -30 }}/>
           <View style={{height: 5}}/>
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