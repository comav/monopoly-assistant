import React from 'react';
import { TextPropTypes } from 'react-native';
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import AppContext from '../components/AppContext';

let shiza = require('../assets/shiza_logo.png');
let procard = require('../assets/procard_logo.png');
let procard_white = require('../assets/procard_logo_white.png');

let cardDesign = [
  {
    image: require('../assets/card_hamburger.png')
  },
  {
    image: require('../assets/card_abstraction.png')
  },
  {
    image: require('../assets/card_terminal.png')
  },
  {
    image: require('../assets/card_hex.png')
  },
  {
    image: require('../assets/card_crimson.png')
  },
  {
    image: require('../assets/card_triangles.png')
  }
]

export default function BankCard(props) {

  // console.warn(props);

  return (
    <View style={styles.wrapper}>
      <ImageBackground source={cardDesign[props.design].image} style={styles.card} imageStyle={{ borderRadius: 10 }} resizeMode="contain">
        <View style={styles.cardWrapper}>
          <Text style={styles.number}>{props.cardNumber}</Text>
          <View style={styles.cardBottomWrapper}>
            <Text style={styles.balance}>{props.balance + '₴'}</Text>
            <Image resizeMethod={'scale'} source={props.network == "ProCard" ? props.design == 2 ? procard_white : procard : shiza} style={styles.network}></Image>
          </View>
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
    resizeMode: 'cover',
    width: '100%',
  },
  cardWrapper: {
    width: '100%',
    height: 220,
    display: 'flex',
    justifyContent: 'flex-end',
    borderColor: 'green',
    borderWidth: 2,
  },
  number: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 10,
  },
  network: {
    width: 100,
    height: 40,
    marginBottom: 20,
    marginRight: 20,
    flexGrow: 3,
  },
  balance: {
    color: "#fff",
    fontSize: 20,
    height: '50%',
    flexGrow: 3,
    width: 20,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  cardBottomWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  }
})