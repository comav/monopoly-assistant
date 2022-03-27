import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function EmptyBankCard(props) {

  // const globalVar = useContext(AppContext);

  // const createData = async () => {
  //   try {
  //     const response = fetch(`https://${globalVar.ip}:5502/newcard?owner=${globalVar.userName}`, {
  //       method: 'GET'
  //     })
  //   } catch (error) {
  //     console.log('THERES A PROBLEM W/ NEW CARD FETCH')
  //     throw error;
  //   }
  // }

  if (props.createCard) {
    return (
      <TouchableOpacity onPress={() => {createData()}} style={styles.cardWrapper}>
        <Text style={styles.text}>Theres no card, click to make one</Text>
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
  }
})