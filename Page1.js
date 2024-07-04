
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');
const imageSize = width / 2;

export default function Page1({ navigation }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    loadCartItems();
  }, []);

  const loadCartItems = async () => {
    try {
      const savedItems = await AsyncStorage.getItem('cartItems');
      if (savedItems !== null) {
        setCartItems(JSON.parse(savedItems));
      }
    } catch (error) {
      console.error('Error loading cart items:', error);
    }
  };

  const addToCart = async (item) => {
    try {
      const newCartItems = [...cartItems, item];
      setCartItems(newCartItems);
      await AsyncStorage.setItem('cartItems', JSON.stringify(newCartItems));
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.first_view}>
        <Image source={require('./assets/Menu.png')} />
        <Image source={require('./assets/Logo.png')} />
        <View style={{flexDirection: 'row', gap: 15}}>
          <Image source={require('./assets/Search.png')} />
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Image source={require('./assets/shoppingBag.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{height: 15}}/>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20 }}>
        <Text style={{letterSpacing: 3, fontSize: 22, fontStyle: 'italic'}}>OUR STORY</Text>
        <View style={{flexDirection: 'row',gap: 20, paddingRight: 20}}>
          <Image source={require('./assets/Listview.png')} />
          <Image source={require('./assets/Filter.png')} />
        </View>
      </View>

      <View style={{ height: 20 }} />
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <View style={styles.row}>
            <View>
              <Image source={require('./assets/dress1.png')} style={[styles.image, {marginLeft: -20}]}  />
              <TouchableOpacity onPress={() => addToCart('dress1')}>
                <Image source={require('./assets/add_circle.png')} style={{marginLeft:130, marginTop: -30 }}/>
              </TouchableOpacity>
              <View style={{height: 5}}/>
              <View>
                <Text>Office Wear</Text>
                <Text style={{opacity: 0.5}}>reversible angora cardigan</Text>
                <Text style={{color:'#FF5B61'}}>$120</Text> 
              </View>
            </View>
            <View>
              <Image source={require('./assets/dress2.png')} style={[styles.image,{marginLeft: -20} ]}/>
              <TouchableOpacity onPress={() => addToCart('dress2')}>
                <Image source={require('./assets/add_circle.png')} style={{marginLeft:130, marginTop: -30 }}/>
              </TouchableOpacity>
              <View style={{height: 5}}/>
              <Text>Black</Text>
              <Text style={{opacity: 0.5}}>reversible angora cardigan</Text>
              <Text style={{color:'#FF5B61'}}>$120</Text> 
            </View>
          </View>
          <View style={styles.row}>
            <View>
              <Image source={require('./assets/dress3.png')} style={[styles.image, {marginLeft: -20}]} />
              <TouchableOpacity onPress={() => addToCart('dress3')}>
                <Image source={require('./assets/add_circle.png')} style={{marginLeft:130, marginTop: -30 }}/>
              </TouchableOpacity>
              <View style={{height: 5}}/>
              <Text>Church Wear</Text>
              <Text style={{opacity: 0.5}}>reversible angora cardigan</Text>
              <Text style={{color:'#FF5B61'}}>$120</Text> 
            </View>
            <View>
              <Image source={require('./assets/dress4.png')} style={[styles.image, {marginLeft: -20}]} />
              <TouchableOpacity onPress={() => addToCart('dress4')}>
                <Image source={require('./assets/add_circle.png')} style={{marginLeft:130, marginTop: -30 }}/>
              </TouchableOpacity>
              <View style={{height: 5}}/>
              <Text>Lamerei</Text>
              <Text style={{opacity: 0.5}}>reversible angora cardigan</Text>
              <Text style={{color:'#FF5B61'}}>$120</Text> 
            </View>
          </View>
          <View style={styles.row}>
            <View>
              <Image source={require('./assets/dress5.png')} style={[styles.image, {marginLeft: -20}]} />
              <TouchableOpacity onPress={() => addToCart('dress5')}>
                <Image source={require('./assets/add_circle.png')} style={{marginLeft:130, marginTop: -30 }}/>
              </TouchableOpacity>
              <View style={{height: 5}}/>
              <Text>2IWN</Text>
              <Text style={{opacity: 0.5}}>reversible angora cardigan</Text>
              <Text style={{color:'#FF5B61'}}>$120</Text> 
            </View>
            <View>
              <Image source={require('./assets/dress6.png')} style={[styles.image, {marginLeft: -20}]} />
              <TouchableOpacity onPress={() => addToCart('dress6')}>
                <Image source={require('./assets/add_circle.png')} style={{marginLeft:130, marginTop: -30 }}/>
              </TouchableOpacity>
              <View style={{height: 5}}/>
              <Text>Lopo</Text>
              <Text style={{opacity: 0.5}}>reversible angora cardigan</Text>
              <Text style={{color:'#FF5B61'}}>$120</Text> 
            </View>
          </View>
          <View style={styles.row}>
            <View>
              <Image source={require('./assets/dress7.png')} style={[styles.image, {marginLeft: -20}]} />
              <TouchableOpacity onPress={() => addToCart('dress7')}>
                <Image source={require('./assets/add_circle.png')} style={{marginLeft:130, marginTop: -30 }}/>
              </TouchableOpacity>
              <View style={{height: 5}}/>
              <Text>2IWN</Text>
              <Text style={{opacity: 0.5}}>reversible angora cardigan</Text>
              <Text style={{color:'#FF5B61'}}>$120</Text> 
            </View>
            <View>
              <Image source={require('./assets/dress3.png')} style={[styles.image, {marginLeft: -20}]} />
              <TouchableOpacity onPress={() => addToCart('dress7')}>
                <Image source={require('./assets/add_circle.png')} style={{marginLeft:130, marginTop: -30 }}/>
              </TouchableOpacity>
              <View style={{height: 5}}/>
              <Text>2IWN</Text>
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
    marginTop: 20,
  },
  first_view: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  imageContainer: {
    flexDirection: 'column',
    gap: 15,
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