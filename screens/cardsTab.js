import 'react-native-gesture-handler';
import React, { useState, useContext } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Card from '../components/card';

import AppContext from '../components/AppContext';

const cardData = require('../assets/cards.json');

const Stack = createStackNavigator();

export default function CardsScreen() {
  const globalVar = useContext(AppContext);

  return (
    <NavigationContainer independent={true}>
      <ScrollView contentContainerStyle={styles.cardView}>
        {cardData.cards.map(x => {
          console.log(x);
          return (
            <Card
              key={x.key}
              color={x.color}
              title={x.name}
              price={x.price + '₴'}
              style={styles.card}
              homes={'home-remove'}
            />
          )
        })}
      </ScrollView>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  cardView: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    alignSelf: 'center',
  }
})