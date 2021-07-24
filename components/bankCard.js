import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native';

let cardImage = require('../assets/card_hamburger.png');

export default function BankCard(props) {
    return(
        <View style={styles.wrapper}>
            <ImageBackground source={cardImage} style={styles.card} imageStyle={{borderRadius:10}} resizeMode="stretch">
                <Text>{props.cardNumber}</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        resizeMode: 'stretch',
        width: '98%',
        height: 220,
    }
})