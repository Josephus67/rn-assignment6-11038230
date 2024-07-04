
import React, { useState, useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, Image, View, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get('window');
const imageSize = width / 2;

export default function Page2({ navigation }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      loadCartItems();
    });

    return unsubscribe;
  }, [navigation]);

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

  const removeFromCart = async (item) => {
    try {
      const newCartItems = cartItems.filter(cartItem => cartItem !== item);
      setCartItems(newCartItems);
      await AsyncStorage.setItem('cartItems', JSON.stringify(newCartItems));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const renderItem = ({ item, index }) => (
    <View style={[styles.cartItem, index % 2 === 0 ? styles.leftItem : styles.rightItem]}>
      <Image source={getImageSource(item)} style={styles.image} />
      <TouchableOpacity onPress={() => removeFromCart(item)}>
        <Image source={require('./assets/remove.png')} style={styles.removeIcon} />
      </TouchableOpacity>
      <View style={{height: 5}}/>
      <View>
        <Text>{getDressName(item)}</Text>
        <Text style={{opacity: 0.5}}>reversible angora cardigan</Text>
        <Text style={{color:'#FF5B61'}}>$120</Text> 
      </View>
    </View>
  );

  const getImageSource = (item) => {
    switch (item) {
      case 'dress1':
        return require('./assets/dress1.png');
      case 'dress2':
        return require('./assets/dress2.png');
      case 'dress3':
        return require('./assets/dress3.png');
      case 'dress4':
        return require('./assets/dress4.png');
      case 'dress5':
        return require('./assets/dress5.png');
      case 'dress6':
        return require('./assets/dress6.png');
      case 'dress7':
        return require('./assets/dress7.png');
      default:
        return null;
    }
  };

  const getDressName = (item) => {
    switch (item) {
      case 'dress1':
        return 'Office Wear';
      case 'dress2':
        return 'Black';
      case 'dress3':
        return 'Church Wear';
      case 'dress4':
        return 'Lamerei';
      case 'dress5':
        return '2IWN';
      case 'dress6':
        return 'Lopo';
      case 'dress7':
        return '2IWN';
      default:
        return '';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchbar_row}>
        <Image source={require('./assets/Logo.png')} style={{marginLeft: 120}}/>
        <Image source={require('./assets/Search.png')} style={styles.searchIcon} />
      </View>
      <View style={{ height: 5 }} />
      <Text style={styles.checkout}>Checkout</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginLeft: 120},
  searchbar_row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 0
  },
  checkout: {
    letterSpacing: 3,
    fontSize: 25,
    opacity: 0.5,
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  cartItem: {
    width: imageSize - 20,
    marginBottom: 20,
  },
  leftItem: {
    marginRight: 10,
  },
  rightItem: {
    marginLeft: 10,
  },
  image: {
    width: imageSize - 20,
    height: imageSize - 20,
    resizeMode: 'contain',
  },
  removeIcon: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 40,
    bottom: 10,
    
  },
});
