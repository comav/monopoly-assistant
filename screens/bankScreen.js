import React, { useState, useEffect, useLayoutEffect, useContext } from 'react';
import { Touchable } from 'react-native';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import BankCard from '../components/bankCard';
import Delayed from '../components/delayed';

import AppContext from '../components/AppContext';
import { Modal } from 'react-native-paper';
import { Button } from 'react-native-elements/dist/buttons/Button';

export default function BankScreen() {

  const globalVar = useContext(AppContext);

  const [cardData, setCardData] = useState({});

  const [modalOpen, setModalOpen] = useState(false);

  console.warn(cardData);

  useEffect( async () => {
    try {
      const response = await fetch(`http://192.168.0.102:5502/getcardinfo?owner=${globalVar.userName}`, {
        method: 'GET'
      }
      )
        .then((response) => response.json())
        .then(res => setCardData(res));
    } catch (error) {
      console.log('THERES A PROBLEM W/ GET CARD FETCH')
      throw error;
    }
  }, [])

  console.log(cardData);

  return (
    <View style={styles.wrapper}>
      <Modal animationType='slide' visible={modalOpen} style={styles.modal}>
        <Button
          title={'close'}
          type={'solid'}
          onPress={() => {
            setModalOpen(false)
          }}
        />
        <Text>Hello</Text>
      </Modal>
      <Delayed waitBeforeShow={500}>
        <BankCard
          style={styles.card}
          cardNumber={cardData.number}
          network={cardData.network}
          design={cardData.design}
          balance={cardData.balance} />
      </Delayed>
      <View style={styles.cardopWrapper}>
      <Button
          title={'send mone'}
          type={'outline'}
          onPress={() => {
            setModalOpen(true)
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    marginRight: '1%',
  },
  wrapper: {
    marginTop: 25,
    width: '100%',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})