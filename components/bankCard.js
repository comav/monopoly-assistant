import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { updateCardData } from "../redux/actions/cardDataAction";

let shiza = require('../assets/card-networks/shiza_logo.png');
let procard = require('../assets/card-networks/procard_logo.png');
let procard_white = require('../assets/card-networks/procard_logo_white.png');

let cardDesign = [
  {
    image: require('../assets/cards/card_hamburger.png')
  },
  {
    image: require('../assets/cards/card_abstraction.png')
  },
  {
    image: require('../assets/cards/card_terminal.png')
  },
  {
    image: require('../assets/cards/card_hex.png')
  },
  {
    image: require('../assets/cards/card_crimson.png')
  },
  {
    image: require('../assets/cards/card_triangles.png')
  },
  {
    image: require('../assets/cards/card_zebra.png')
  },
  {
    image: require('../assets/cards/card_shapes.png')
  },
  {
    image: require('../assets/cards/card_icecream.png')
  },
  {
    image: require('../assets/cards/card_waves.png')
  },
  {
    image: require('../assets/cards/card_city_animated.gif')
  }
]

function BankCard(props) {
  return (
    <View style={styles.wrapper}>
      <ImageBackground source={cardDesign[props.design].image} style={styles.card} imageStyle={{ borderRadius: 15 }} resizeMode="stretch">
        <Text style={styles.number}>{props.cardNumber}</Text>
        <View style={styles.cardBottomWrapper}>
          <Text style={styles.balance}>{props.balance + ' ₴'}</Text>
          <View style={styles.networkWrapper}>
            <Image source={props.network == 'ProCard' ? procard : props.network == 'ШИZA' ? shiza : loadingNet} resizeMode='contain' style={styles.network} />
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
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
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