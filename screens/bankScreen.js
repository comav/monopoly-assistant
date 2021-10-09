import React, { useState, useEffect, useLayoutEffect, useContext, useCallback } from 'react';
import { Touchable } from 'react-native';
import { View, Text, Image, StyleSheet, ScrollView, Modal, Button, RefreshControl } from 'react-native';

import BankCard from '../components/bankCard';
import Delayed from '../components/delayed';
import SendModal from '../screens/modals/sendModal';
import EmptyCard from '../components/emptyBankCard';

import AppContext from '../components/AppContext';

export default function BankScreen() {

  const globalVar = useContext(AppContext);

  const [cardData, setCardData] = useState({});
  const [userlist, setUserlist] = useState({});
  const [sendModal, setSendModalOpen] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    console.log('jkggkjvkgvgjlv');
    fetchData();
    wait(1000).then(() => setRefreshing(false));
  }, [])

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  async function fetchData() {
    try {
      const response = await fetch(`http://${globalVar.ip}:5502/getcardinfo?owner=${globalVar.userName}`, {
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

  useEffect(() => {
    fetchData();
  }, [])

  useEffect(() => {
    fetchLists();
  }, [])

  // console.log(cardData);

  return (
    <View style={styles.wrapper}>
      <Modal animationType='slide' visible={sendModal} style={styles.modal}>
        <Button
          title={'close'}
          type={'solid'}
          onPress={() => {
            setSendModalOpen(false);
            fetchData();
          }}
        />
        <SendModal
          userlist={userlist}
          cardNumber={cardData.number}
        />
      </Modal>
      <ScrollView refreshControl={
        <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
      }>
        <View style={styles.cardWrapper}>
          <Delayed waitBeforeShow={100} style={styles.cardWrapper}>
            {cardData.status == 200 ? <BankCard
                cardNumber={cardData.number}
                network={cardData.network}
                design={cardData.design}
                balance={cardData.balance} /> 
                : 
                <EmptyCard
                createCard={true}
                onPress={() => {
                  fetchData();
                }} />
            }
          </Delayed>
        </View>
        <View style={styles.sendWrapper}>
        <Button
            title={'Send money'}
            type={'solid'}
            style={styles.sendButton}
            onPress={() => {
              setSendModalOpen(true)
            }} />
        </View>
      </ScrollView>
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
  sendWrapper: {
    width: '100%',
    marginTop: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  sendButton: {
  }
})