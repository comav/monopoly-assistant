import React, {useState, useEffect} from 'react';
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import AppContext from './components/AppContext';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from "redux";
import rootReducer from "./components/redux/reducers/rootReducer";
import thunk from 'redux-thunk'

import HomeScreen from './screens/mainTab';
import CardsScreen from './screens/cardsTab';
import BankScreen from './screens/bankScreen';

import {ModalPortal} from 'react-native-modals';

import * as Font from 'expo-font';

const customFont = {
  'Roboto-Light': require('./assets/Roboto-Light.ttf')
}

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  //global const goes here
  const [userName, setUserName] = useState('Player');
  const [ip, setIp] = useState('192.168.0.');

  //global object
  const globalVar = {
    userName: userName,
    setUserName,
    ip: ip,
    setIp,
  }

  Font.loadAsync(customFont);

  const updateData = () => {
    try {
      const response = fetch(`https://${globalVar.ip}:5502/getcardinfo?owner=${globalVar.userName}`, {
          method: 'GET'
        }
      )
        .then((response) => response.json())
        .then(res => props.updateCardData(res))
        .then(console.log(cardData));
    } catch (error) {
      console.log('THERES A PROBLEM W/ GET CARD FETCH')
      throw error;
    }
  }

  return (
    <Provider store={store}>
      <AppContext.Provider value={globalVar}>
        <NavigationContainer>
          <Tab.Navigator inactiveColor="#5f5f5f" activeColor="#000" barStyle={{backgroundColor: '#fff'}}>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              tabPress={() => {
                updateData()
              }}
              options={{
                tabBarLabel: "Головна",
                tabBarIcon: ({color}) => (
                  <MaterialCommunityIcons name="home" color={color} size={26}/>
                )
              }}
            />
            <Tab.Screen
              name="Bank"
              component={BankScreen}
              tabPress={() => {
                updateData()
              }}
              options={{
                tabBarLabel: "Банк",
                tabBarIcon: ({color}) => (
                  <MaterialCommunityIcons name="credit-card" color={color} size={26}/>
                ),
              }}
            />
            <Tab.Screen
              name="Cards"
              component={CardsScreen}
              options={{
                tabBarLabel: 'Карти',
                tabBarIcon: ({color}) => (
                  <MaterialCommunityIcons name="cards" color={color} size={26}/>
                )
              }}/>
          </Tab.Navigator>
        </NavigationContainer>
      </AppContext.Provider>
      <ModalPortal/>
    </Provider>
  );
}

