import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import UserContextProvider from './src/contexts/UserContext';
import MainStack from './src/stacks/MainStack';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['RCTBridge required dispatch_sync to load RNGestureHandlerModule. This may lead to deadlocks']);

export default () => {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </UserContextProvider>
  )
}
