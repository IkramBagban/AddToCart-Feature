import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function LogoutScreen() {
    const [isLoggedIn, setIsLoggedIn] = useState()
    function logoutHandler(){
        console.log('logout')
        AsyncStorage.setItem('isLoggedIn',false )

    }
  return (
    <View>
      <Text>LogoutScreen</Text>
      <Button title={Logout} onPress={logoutHandler} />
    </View>
  )
}