import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '../constants/colors';

export default function Button({ onPress, text,style }) {
  return (
    <TouchableOpacity style={[styles.button,style]} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary500,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin:10
    // width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
