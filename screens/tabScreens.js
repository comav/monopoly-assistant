import React from "react";

import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import HomeScreen from './mainTab';
import BankScreen from "./bankScreen";
import CardsScreen from "./cardsTab";

const Tab = createMaterialBottomTabNavigator();

export default function TabScreens() {
  return (
    <Tab.Navigator inactiveColor="#5f5f5f" activeColor="#000" barStyle={{ backgroundColor: '#fff' }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        tabPress={() => {
          updateData()
        }}
        options={{
          tabBarLabel: "Головна",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
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
  )
}