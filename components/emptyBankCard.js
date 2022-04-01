import React, {useState} from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import wait from './wait';

import { useSelector } from 'react-redux';

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
        {showSpinner ? <ActivityIndicator animating={showSpinner} size={'large'}/> : <Text>Сталася помилка. Натисніть щоб спробувати знову</Text>}
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
  }
})