import React from 'react';
import { TextPropTypes } from 'react-native';
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native';

let cardImage = require('../assets/card_hamburger.png');
let cardLogo;
let shiza = require('../assets/shiza_logo.png');
let procard = require('../assets/procard_logo.png');

export default function BankCard(props) {

    if (props.network = 'ProCard') {
        cardLogo = procard;
    } if (props.network = 'ШИZA') {
        cardLogo = shiza;
    }

    return(
        <View style={styles.wrapper}>
            <ImageBackground source={cardImage} style={styles.card} imageStyle={{borderRadius:10}} resizeMode="stretch">
                <Text style={styles.number}>{props.cardNumber}</Text>
                <Image resizeMethod={'resize'} source={cardLogo} style={styles.network}></Image>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
    },
    card: {
        resizeMode: 'stretch',
        width: '98%',
        height: 220,
        display: 'flex',
        justifyContent: 'flex-end',
    },
    number: {
        fontSize: 20,
        backgroundColor: '#fff',
        width: '46%',
        marginBottom: 20,
        marginLeft: '30%'
    },
    network: {
        width: 140,
        height: 40,
        marginBottom: 20,
        marginRight: 20,
        marginLeft: '50%'
    }
})