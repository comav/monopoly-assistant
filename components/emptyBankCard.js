import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';

export default function EmptyBankCard(props) {

  const ip = useSelector(state => state.ip);
  const username = useSelector(state => state.username);

  async function createData() {
    try {
      fetch(`https://${ip}:5502/newcard?owner=${username}`, {
        method: 'GET'
      })
      .then((res) => console.log(res.status))
    } catch (error) {
      console.log('THERES A PROBLEM W/ NEW CARD FETCH')
      throw error;
    }
  }

  if (props.createCard) {
    return (
      <TouchableOpacity onPress={() => {createData()}} style={styles.cardWrapper}>
        <Text style={styles.text}>Карти немає, натисніть щоб створити</Text>
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