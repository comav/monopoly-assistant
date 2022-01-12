import React, {useCallback, useContext, useEffect, useMemo, useRef, useState} from 'react';
import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import BottomSheet from '@gorhom/bottom-sheet';

import BankCard from '../components/bankCard';
import EmptyCard from '../components/emptyBankCard';
import ActionBubble from '../components/actionBubble';
import ActionWrapper from '../components/actionWrapper';
import SendModal from "./modals/sendModal";

import AppContext from '../components/AppContext';

import updateData from '../components/functions/updateData';

export default function BankScreen() {

  const globalVar = useContext(AppContext);

  const [cardData, setCardData] = useState({});
  const [propOwnageData, setPropOwnageData] = useState({});
  const [sendModal, setSendModalOpen] = useState(false);
  const [buyModal, setBuyModalOpen] = useState(false);
  const [tradeModal, setTradeModalOpen] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['12%', '68%'], []);
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

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
        .then(res => globalVar.setUserlist(res));
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
      <StatusBar translucent backgroundColor="transparent"/>

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
      {/*<Modal animationType='slide' visible={tradeModal}>*/}
      {/*  <Button*/}
      {/*    title="close"*/}
      {/*    type='solid'*/}
      {/*    onPress={() => {*/}
      {/*      setTradeModalOpen(false);*/}
      {/*    }}*/}
      {/*  />*/}
      {/*  <TradeModal userlist={userlist} ownageData={propOwnageData} username={globalVar.username} />*/}
      {/*</Modal>*/}
      <ScrollView refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }>

        <View style={styles.cardWrapper}>
          {cardData.status == 200 ? <BankCard
              cardNumber={cardData.number}
              network={cardData.network}
              design={cardData.design}
              balance={cardData.balance}/>
            :
            <EmptyCard
              createCard={true}
              onPress={() => {
                fetchData();
              }}/>
          }
        </View>

        <ActionWrapper>

          <ActionBubble title={'Update'} actionIcon={'arrow-up-bold-circle'} colors={['#004F2D', '#0A8754']}/>
          {/* <ActionBubble title={'Buy'} actionIcon={'home-plus'} colors={['#FF00AA', '#FF00AA']} action={() => {
            setBuyModalOpen(true);
            fetchData();
          }} /> */}
          <ActionBubble title={'Trade'} actionIcon={'sync'} colors={['#ffaa00', '#FF00AA']} action={() => {
            setTradeModalOpen(true);
            fetchData();
          }}/>
        </ActionWrapper>

      </ScrollView>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <Text style={{fontSize: 29, marginLeft: 10, fontWeight: '100'}}>Send money</Text>
        <SendModal cardNumber={cardData.number} />
      </BottomSheet>
    </View>
  )
}

const styles = StyleSheet.create({
  cardWrapper: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    zIndex: 1,
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
    height: '99%',
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
  bottomWrapper: {
    backgroundColor: 'black',
  }
})