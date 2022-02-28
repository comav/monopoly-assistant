import React, {useState} from 'react';
import { TextPropTypes } from 'react-native';
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import AppContext from '../components/AppContext';

import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {updateCardData} from "./redux/actions/cardDataAction";
import {changeUsername} from "./redux/actions/usernameAction";
import {changeIP} from "./redux/actions/ipAction";

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
  }, 
  {
    image: require('../assets/card_zebra.png')
  },
  {
    image: require('../assets/card_shapes.png')
  },
  {
    image: require('../assets/card_icecream.png')
  },
  {
    image: require('../assets/card_waves.png')
  }
]

function BankCard(props) {
  //setTimeout(() => console.log("NANI?????", props.cardData), 500)
  return (
    <View style={styles.wrapper}>
      <ImageBackground source={cardDesign[props.cardData.design].image} style={styles.card} imageStyle={{ borderRadius: 15 }} resizeMode="stretch">
        <Text style={styles.number}>{props.cardNumber}</Text>
        <View style={styles.cardBottomWrapper}>
          <Text style={styles.balance}>{props.balance + ' ₴'}</Text>
          <View style={styles.networkWrapper}>
            <Image source={props.network == "ProCard" ? props.cardData.design == 2 ? procard_white : procard : shiza} resizeMode='contain' style={styles.network} />
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: '96%',
    height: 250,
  },
  card: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  number: {
    color: 'white',
    fontSize: 24,
  },
  cardBottomWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    margin: 10,
  },
  network: {
    height: 75,
    width: 175,
  },
  networkWrapper: {
    flexGrow: 1,
  },
  balance: {
    color: 'white',
    fontSize: 24,
    width: '20%',
    marginLeft: 10,
    flexGrow: 6,
    textAlign: 'center',
  },
})

const mapStateToProps = (state) => {
  return {
    cardData: state.cardData,
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    updateCardData,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(BankCard);