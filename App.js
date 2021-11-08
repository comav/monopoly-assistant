import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import AppContext from './components/AppContext';

import HomeScreen from './screens/mainTab';
import CardsScreen from './screens/cardsTab';
import BankScreen from './screens/bankScreen';
import DisplayCardScreen from './screens/displayCardScreen';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

export default function App() {

  //global const goes here
  const [userName, setUserName] = useState('Player');
  const [cardData, setCardData] = useState([]);
  const [ip, setIp] = useState('192.168.0.125');

  //global object
  const globalVar = {
    userName: userName,
    setUserName,
    cardData: cardData,
    setCardData,
    ip: ip,
    setIp,
  }

  const updateData = () => {
    try {
      const response = fetch(`http://192.168.0.102:5502/getcardinfo?owner=${globalVar.userName}`, {
        method: 'GET'
      }
      )
        .then((response) => response.json())
        .then(res => setCardData(res))
        .then(console.log(cardData));
    } catch (error) {
      console.log('THERES A PROBLEM W/ GET CARD FETCH')
      throw error;
    }
  }

  return (
    <AppContext.Provider value={globalVar}>
      <NavigationContainer>
        <Tab.Navigator inactiveColor="#003066">
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: "Головна",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Bank"
            component={BankScreen}
            onPress={() => {
              updateData()
            }}
            options={{
              tabBarLabel: "Банк",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="credit-card" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Cards"
            component={CardsScreen}
            options={{
              tabBarLabel: 'Карти',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="cards" color={color} size={26} />
              )
            }} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
