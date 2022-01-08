import React, { useState, useEffect, useLayoutEffect, useContext, useCallback } from 'react';
import { Touchable } from 'react-native';
import { View, Text, Image, StyleSheet, ScrollView, Modal, Button, RefreshControl } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import BankCard from '../components/bankCard';
import Delayed from '../components/delayed';
import SendModal from '../screens/modals/sendModal';
import BuyModal from '../screens/modals/buyPropertyModal';
import TradeModal from './modals/tradeModal';
import EmptyCard from '../components/emptyBankCard';
import ActionBubble from '../components/actionBubble';
import ActionWrapper from '../components/actionWrapper';

import AppContext from '../components/AppContext';

export default function BankScreen() {

  const globalVar = useContext(AppContext);

  const [cardData, setCardData] = useState({});
  const [userlist, setUserlist] = useState({});
  const [propOwnageData, setPropOwnageData] = useState({});
  const [sendModal, setSendModalOpen] = useState(false);
  const [buyModal, setBuyModalOpen] = useState(false);
  const [tradeModal, setTradeModalOpen] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
    fetchCardOwnageData();
    wait(1000).then(() => setRefreshing(false));
    console.table(globalVar.cardOwnageData);
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
      const response = await fetch(`http://${globalVar.ip}:5502/getuserlist`, {
        method: 'GET'
      })
        .then((response) => response.json())
        .then(res => setUserlist(res));
    } catch (error) {
      console.log('THERES A PROBLEM W/ GET USERLISTS FETCH')
      throw error;
    }
  }

  async function fetchCardOwnageData() {
    try {
      const response = await fetch(`http://${globalVar.ip}:5502/getpropertyownagedata`, {
        method: 'GET'
      })
        .then((response) => response.json())
        .then((res) => setPropOwnageData(res))
        .then((res) => console.log(res))
    } catch (error) {
      console.log('Theres a problem with fetchCardOwnageData function');
      throw error;
    }
  }

  useEffect(() => {
    fetchData();
    fetchCardOwnageData();
    fetchLists(); 
  }, [])

  // console.log(cardData);

  console.log(propOwnageData);

  return (
    <View style={styles.wrapper}>
      <StatusBar translucent backgroundColor="transparent" />
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
      {/* <Modal animationType='slide' visible={buyModal}>
        <Button
          title="close"
          type='solid'
          onPress={() => {
            setBuyModalOpen(false);
          }}
        />
        <BuyModal propData={propOwnageData} />
      </Modal> */}
      <Modal animationType='slide' visible={tradeModal}>
        <Button
          title="close"
          type='solid'
          onPress={() => {
            setTradeModalOpen(false);
          }}
        />
        <Delayed waitBeforeShow={100}>
        <TradeModal userlist={userlist} ownageData={propOwnageData} username={globalVar.username} />
      </Delayed>
      </Modal>
      <ScrollView refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }>
        <View style={styles.cardWrapper}>
          <Delayed waitBeforeShow={0} style={styles.cardWrapper}>
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
        <ActionWrapper>
          <ActionBubble title={'Send'} actionIcon={'circle-multiple'} colors={['#8360c3', '#2ebf91']} action={() => {
            setSendModalOpen(true);
            fetchData();
          }} />
          <ActionBubble title={'Update'} actionIcon={'arrow-up-bold-circle'} colors={['#004F2D', '#0A8754']} />
          {/* <ActionBubble title={'Buy'} actionIcon={'home-plus'} colors={['#FF00AA', '#FF00AA']} action={() => {
            setBuyModalOpen(true);
            fetchData();
          }} /> */}
          <ActionBubble title={'Trade'} actionIcon={'sync'} colors={['#FFAA00', '#FF00AA']} action={() => {
            setTradeModalOpen(true);
            fetchData();
          }} />
        </ActionWrapper>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  cardWrapper: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  wrapper: {
    marginTop: 35,
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
})