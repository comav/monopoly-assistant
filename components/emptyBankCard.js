import React, {useState} from 'react';
import { TouchableOpacity, Text, StyleSheet, ImageBackground } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import wait from './wait';

import { useSelector } from 'react-redux';

let bgImage = require('../assets/cards/card_error.png');

export default function EmptyBankCard(props) {

  const ip = useSelector(state => state.ip);
  const username = useSelector(state => state.username);

  const [showSpinner, setShowSpinner] = useState(false)

  async function createData() {
    setShowSpinner(true)
    try {
      await fetch(`http://${ip}:5502/newcard?owner=${username}`, {
        method: 'GET'
      })
      .then((res) => console.log(res.status))
      .then(wait(500))
      .then(() => setShowSpinner(false))
    } catch (error) {
      console.log('THERES A PROBLEM W/ NEW CARD FETCH')
      throw error;
    }
  }

  if (props.createCard) {
    return (
      <TouchableOpacity onPress={() => {createData()}} style={styles.cardWrapper}>
        <ImageBackground source={bgImage} style={styles.bg} imageStyle={{borderRadius: 15}}>
          {showSpinner ? <ActivityIndicator animating={showSpinner} size={'large'}/> : <Text>Сталася помилка. Натисніть щоб спробувати знову</Text>}
        </ImageBackground>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  cardWrapper: {
    width: '96%',
    height: 250,
    backgroundColor: '#83888c',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
  },
  bg: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
})