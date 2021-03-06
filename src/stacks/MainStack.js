import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Notice from '../screens/Notice'

const Stack = createNativeStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Notice" component={Notice} />
  </Stack.Navigator>
);