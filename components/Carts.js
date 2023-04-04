
import React from 'react';
import { View,Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import Cart from './Cart';
import Button from './Button';
import { useNavigation } from '@react-navigation/native';
import { cartData } from '../data'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addMyProduct } from '../myStore/myProductSlice';
import { Colors } from '../constants/colors';

const Carts = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()

  // adding card data item to redux
  useEffect(() => {
    cartData.map((item) => {
      dispatch(addMyProduct(item))
    })
  }, [])
  const myProduct = useSelector((state) => state.product);
  const myCart = useSelector((state) => state.Cart);
  console.log('myProduct', myProduct)
  console.log('myCart', myCart)
  // console.log('cartData', cartData)
  const handleTotalPress = () => {
    // console.log(myProduct[0])
    // dispatch(addMyProduct(item))
    navigation.navigate('TotalScreen');
  };

  return (
    <View>
      <FlatList
        data={myProduct}
        renderItem={({ item }) => (
          <Cart item={item} />
        )}
        keyExtractor={(item) => item.productId}
      />
      <Button text='Total' onPress={handleTotalPress} />
      <Text style={styles.total}>TotalItem </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  total:{
    borderWidth:1,
    borderColor:Colors.primary500,
    padding:5,
    justifyContent:'center',
    alignContent:'center'
  }
});

export default Carts;
