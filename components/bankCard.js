import React from 'react';
import { TextPropTypes } from 'react-native';
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native';

let cardImage = require('../assets/card_hamburger.png');
let shiza = require('../assets/shiza_logo.png');
let procard = require('../assets/procard_logo.png');

export default function BankCard(props) {

    return(
        <View style={styles.wrapper}>
            <ImageBackground source={cardImage} style={styles.card} imageStyle={{borderRadius:10}} resizeMode="stretch">
                <Text style={styles.number}>{props.cardNumber}</Text>
                <View>
                  <Text style={styles.balance}>{props.balance}</Text>
                  <Image resizeMethod={'scale'} source={props.network == "ProCard" ? procard : shiza} style={styles.network}></Image>
                </View>
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
        width: '460%',
        marginBottom: 20,
        marginLeft: '30%'
    },
    network: {
        width: 140,
        height: 40,
        marginBottom: 20,
        marginRight: 20,
        marginLeft: '50%'
    },
    balance: {
      backgroundColor: "#fff"
    }
})