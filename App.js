import React from 'react';

import { Provider } from 'react-redux';
import store from './redux/store';

import TabScreens from './screens/tabScreens';
import LoginScreen from './screens/loginScreen';

import { ModalPortal } from 'react-native-modals';

import * as Font from 'expo-font';

const customFont = {
  'Roboto-Light': require('./assets/Roboto-Light.ttf')
}

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {

  Font.loadAsync(customFont);

  return (
    <Provider store={store()}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Login-nested'
            component={LoginScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='Tabs-nested'
            component={TabScreens}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <ModalPortal />
    </Provider>
  );
}
