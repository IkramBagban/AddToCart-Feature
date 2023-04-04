import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../constants/colors'
import Button from './Button'
import { useDispatch } from 'react-redux';
import { addMyProduct } from '../myStore/myProductSlice';

const { width } = Dimensions.get('window');
const ITEM_IMAGE_SIZE = width * 0.15;

export default function Cart({ item }) {

  const [count, setCount] = useState(0);

  function countHandler(mode) {
    if (mode === 'increase') {
      setCount(count + 1);

    } else if (count > 0) {
      setCount(count - 1);
    }
  }

  useEffect(() => {
    console.log('count', count)
  }, [count])
  function addToCartHandler(){
    console.log('add to cart working' + item.productId)
    // dispatch(addMyProduct(item))
  }

  const dispatch = useDispatch()
  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Image style={styles.itemImage} source={{ uri: item.img }} />
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>

          <View style={styles.buttonContainer}>
            <Button text='+' onPress={countHandler.bind(this, 'increase')} />
            <Text style={styles.countText}>{count}</Text>
            <Button text='-' onPress={countHandler.bind(this, 'dec')} />
          </View>

        </View>
        <Button text='Add to Cart' style={styles.addToCartButton} onPress={addToCartHandler}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: '100%',
    padding: 16,
  },
  container: {
    backgroundColor: Colors.primary700,
    borderRadius: 8,
    elevation: 2,
  },
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.secondary300,
  },
  itemImage: {
    width: ITEM_IMAGE_SIZE,
    height: ITEM_IMAGE_SIZE,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'space-between',
    alignItems:'center'
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 4,
    color: Colors.tertiary300,
  },
  itemPrice: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countText: {
    fontSize: 20,
    marginHorizontal: 10,
    color: 'white',
  },
  addToCartButton: {
    marginTop: 16,
    backgroundColor: Colors.secondary500,
    borderRadius: 8,
    paddingVertical: 12,
  },
})
