import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, Alert, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = () => {
  const [cart, setCart] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const fetchCart = async () => {
      try {
        let cart = await AsyncStorage.getItem('cart');
        if (isMounted) {
          cart = cart ? JSON.parse(cart) : [];
          setCart(cart);
          calculateTotalCost(cart);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCart();

    return () => {
      isMounted = false;
    };
  }, []);

  const calculateTotalCost = (cart) => {
    const total = cart.reduce((sum, item) => sum + parseFloat(item.price.slice(1)), 0);
    setTotalCost(total);
  };

  const removeFromCart = async (productId) => {
    try {
      let cart = await AsyncStorage.getItem('cart');
      cart = cart ? JSON.parse(cart) : [];
      cart = cart.filter((item) => item.id !== productId);
      await AsyncStorage.setItem('cart', JSON.stringify(cart));
      setCart(cart);
      calculateTotalCost(cart);
      Alert.alert("Success", "Product removed from cart!");
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.productContainer} key={item.id}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name.toUpperCase()}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
      <TouchableOpacity onPress={() => removeFromCart(item.id)} style={styles.removeButton}>
        <Image source={require('../assets/images/remove.png')} style={styles.remove}/>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../assets/images/Logo.png')} style={styles.logo} />
          <Image source={require('../assets/images/Search.png')} style={styles.search} />
        </View>
        <Text style={styles.headText}>CHECK OUT</Text>
        <View style={styles.underline}>
              <View style={styles.diamond} />
              </View>
        <FlatList
          data={cart}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          renderItem={renderItem}
          contentContainerStyle={styles.flatListContainer}
          ListFooterComponent={() => (
            <View style={styles.cost}>
              <View style={styles.totalCostContainer}>
                <Text style={styles.totalCostLabel}>EST TOTAL</Text>
                <Text style={styles.totalCostAmount}>${totalCost.toFixed(2)}</Text>
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.footer}>
        <Image source={require('../assets/images/shoppingBag.png')} style={styles.shop} />
        <Text style={styles.shopText}>CHECKOUT</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  logo: {
    width: 100,
    height: 40,
    left: 120,
  },
  search: {
    width: 30,
    height: 30,
    left: 200,
  },
  headText: {
    left: 100,
    fontSize: 30,
    fontWeight: 'bold',
  },
  underline: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    marginBottom: 10,
    width: '60%',
    alignSelf: 'center',
  },
  flatListContainer: {
    paddingBottom: 100,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 16,
  },
  productImage: {
    width: 100,
    height: 150,
  },
  productDetails: {
    flex: 1,
    marginLeft: 16,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 14,
    color: '#AFB0B6',
  },
  productPrice: {
    fontSize: 20,
    color: 'orange',
  },
  remove: {
    width: 30,
    height: 30,
    top: 35,
  },
  removeButton: {
    borderRadius: 50,
    padding: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cost: {
    paddingVertical: 20,
  },
  totalCostContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  totalCostLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    right: 10,
    top: 100,
  },
  totalCostAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'orange',
    right: 20,
    top: 100,
  },
  
  diamond: {
    width: 15,
    height: 15,
    backgroundColor: '#fff',
    transform: [{ rotate: '45deg' }],
    position: 'absolute',
    bottom: -8,
    borderWidth: 1,
    borderColor: 'rgba(0, 0,0,0.1)',
},
  footer: {
    position: 'absolute',
    bottom: 0, 
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shop: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
  shopText: {
    fontSize: 24,
    left: 10,
    color: '#fff',
  },
});

export default CartScreen;
