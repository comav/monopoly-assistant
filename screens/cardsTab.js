import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Card from '../components/card';

const cardData = require('../assets/cards.json');

const Stack = createStackNavigator();

export default function CardsScreen() {
  const [key, setKey] = useState(0);
    return(
        <NavigationContainer independent={true}>
            <ScrollView contentContainerStyle={styles.cardView}>
                {cardData.cards.map(x => {
                    console.log(x);
                    setKey(key + 1);
                    return (
                        <Card 
                            key={key}
                            color={x.color} 
                            title={x.name} 
                            price={x.price + '₴'}
                            style={styles.card} 
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
        marginTop: 10,
        alignSelf: 'center',
 },
 card: {
     marginLeft: 5,
     marginRight: 5,
 }
})