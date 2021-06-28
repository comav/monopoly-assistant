import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons} from 'react-native-vector-icons';

import HomeScreen from './screens/mainTab';
import CardsScreen from './screens/cardsTab';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen
       name="Home"
       component={HomeScreen}
       options={{
         tabBarLabel: "Home",
         tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
         ),
        }}
       />
      <Tab.Screen
       name="Cards"
       component={CardsScreen}
       options={{
         tabBarLabel: 'Cards',
         tabBarIcon: ({color}) => (
           <MaterialCommunityIcons name="cards" color={color} size={26} />
         )
       }} />
    </Tab.Navigator>
    </NavigationContainer>
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
