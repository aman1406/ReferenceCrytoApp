import React, { useState } from 'react';
import { CryptoDetail, Transaction } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
  'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  'roboto-italic': require('./assets/fonts/Roboto-Italic.ttf'),
  'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf')
  });
  };

const App = () => {
  const [dataLoaded,setDataLoaded]= useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={'Home'}
      >
        <Stack.Screen
          name="Home"
          component={Tabs}
        />
        <Stack.Screen
          name="CryptoDetail"
          component={CryptoDetail}
        />
        <Stack.Screen
          name="Transaction"
          component={Transaction}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;