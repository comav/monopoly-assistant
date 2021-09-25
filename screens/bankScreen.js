import React, { useState, useEffect, useLayoutEffect, useContext } from 'react';
import { Touchable } from 'react-native';
import { View, Text, Image, StyleSheet, ScrollView, Modal, Button } from 'react-native';

import BankCard from '../components/bankCard';
import Delayed from '../components/delayed';
import SendModal from '../screens/modals/sendModal';

import AppContext from '../components/AppContext';

export default function BankScreen() {

  const globalVar = useContext(AppContext);

  const [cardData, setCardData] = useState({});
  const [userlist, setUserlist] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  // console.warn(cardData);

  useEffect(() => {
    async function fetchData() {
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
    }
    fetchData();
  }, [])

  useEffect(() => {
    async function fetchLists() {
      try {
        const response = await fetch(`http://192.168.0.102:5502/getuserlist`, {
          method: 'GET'
        })
          .then((response) => response.json())
          .then(res => setUserlist(res));
      } catch (error) {
        console.log('THERES A PROBLEM W/ GET USERLISTS FETCH')
        throw error;
      }
    }
    fetchLists();
  }, [])

  // console.log(cardData);

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
        <SendModal 
          userlist={userlist}
          cardNumber={cardData.number}
         />
      </Modal>
      <Delayed waitBeforeShow={500} style={styles.cardWrapper}>
        <BankCard
          cardNumber={cardData.number}
          network={cardData.network}
          design={cardData.design}
          balance={cardData.balance} />
      </Delayed>
      <View style={styles.sendWrapper}>
        <Button
          title={'Send money'}
          type={'solid'}
          style={styles.sendButton}
          onPress={() => {
            setModalOpen(true)
          }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
  sendButton: {
    height: 100,
    marginTop: 100,
  },
  sendWrapper: {
    borderColor: '#000',
    borderWidth: 1,
    marginTop: 20,
  }
})