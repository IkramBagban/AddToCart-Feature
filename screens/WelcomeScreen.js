import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { Colors } from '../constants/colors';
import Button from '../components/Button';
import Carts from '../components/Carts';

// import store from '../store/redux';
// import { Provider } from 'react-redux';
const WelcomeScreen = ({ onLogout }) => {
  const handleLogout = () => {
    onLogout();
  };

  const { width, height } = Dimensions.get('window');
  const isPortrait = height > width;

  return (
    // <Provider store={store}>

    <View style={styles.container}>
      <View style={isPortrait ? styles.portraitContent : styles.landscapeContent}>
        <Carts />

      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={handleLogout} text='Logout' style={styles.button} />
      </View>
    </View>
    // </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.secondary500,
  },
  portraitContent: {
    flex: 1,
    width: '80%',
    maxWidth: 500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  landscapeContent: {
    flex: 1,
    width: '60%',
    maxWidth: 500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: Colors.primary500,
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 40,
    elevation: 5,
  },
});

export default WelcomeScreen;
