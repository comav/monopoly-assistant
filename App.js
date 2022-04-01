import React, { useState } from 'react';

import { Provider } from 'react-redux';
import store from './redux/store';

import TabScreens from './screens/tabScreens';
import LoginScreen from './screens/loginScreen';

import { ModalPortal } from 'react-native-modals';

import { Provider as PaperProvider } from 'react-native-paper';

import * as Font from 'expo-font';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import AppLoading from 'expo-app-loading';

import wait from './components/wait'

const Stack = createStackNavigator();

export default function App() {

  const [isReady, setReady] = useState(false);

  const _cacheResourcesAsync = async () => {

    const customFont = {
      'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
      'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    }

    let fonts = await Font.loadAsync(customFont);
    return Promise.all(fonts);
  }

  return (
    isReady ? (
      <Provider store={store()}>
      <PaperProvider>
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
      </PaperProvider>
    </Provider>
    ) : (
      <AppLoading 
        startAsync={_cacheResourcesAsync}
        onFinish={() => setReady(true)}
        onError={console.warn}
      />
    ) 
  );
}
