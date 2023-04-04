

// ========/===================================================================================================================================.

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainLogicScreen from './screens/MainLogicScreen';
import TotalScreen from './screens/TotalScreen';

// redux
import { Provider } from 'react-redux';
import { myStore } from './myStore/myStore';
// import store from './store/redux';




const Stack = createStackNavigator()

const App = () => {
 
      return(
        <Provider store={myStore}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name='Main' component={MainLogicScreen}/>
              <Stack.Screen name='TotalScreen' component={TotalScreen}/>
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
     
    
  )
};

export default App;

