import React, {useCallback, useContext, useEffect, useMemo, useRef, useState} from 'react';
import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import BottomSheet from '@gorhom/bottom-sheet';

import BankCard from '../components/bankCard';
import EmptyCard from '../components/emptyBankCard';
import SendModal from "./modals/sendModal";

import { useSelector, useDispatch } from 'react-redux';
import {UPDATE_CARD_DATA, UPDATE_OWNERSHIP_DATA, UPDATE_USERLIST} from '../redux/consts';

export default function BankScreen(props) {

  const username = useSelector((state) => state.username);
  const ip = useSelector((state) => state.ip);
  const cardData = useSelector((state) => state.cardData);
  const userlist = useSelector(state => state.userlist);

  const dispatch = useDispatch();

  const [refreshing, setRefreshing] = useState(false);

  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['12%', '68%'], []);
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchData();
    wait(1000).then(() => setRefreshing(false));
  }, [])

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  async function fetchData() {
    try {
      await fetch(`http://${ip}:5502/getcardinfo?owner=${username}`, {
        method: 'GET'
      }
      )
        .then((response) => response.json())
        .then(res => dispatch({type: UPDATE_CARD_DATA, payload: res}))
        .then(console.log(cardData));
    } catch (error) {
      console.log('THERES A PROBLEM W/ GET CARD FETCH')
      throw error;
    }
  }

  async function fetchLists() {
    try {
      const response = await fetch(`http://${ip}:5502/getuserlist`, {
        method: 'GET'
      })
        .then((response) => response.json())
        .then(res => dispatch({ type: UPDATE_USERLIST, payload: res }));
    } catch (error) {
      console.log('THERES A PROBLEM W/ GET USERLISTS FETCH')
      throw error;
    }
  }

  async function fetchCardOwnageData() {
    try {
      const response = await fetch(`http://${ip}:5502/getpropertyownagedata`, {
        method: 'GET'
      })
        .then((response) => response.json())
        .then((res) => dispatch({type: UPDATE_OWNERSHIP_DATA, payload: res}))
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

  //console.log(propOwnageData);

  return (
    <View style={styles.wrapper}>
      <StatusBar translucent backgroundColor="transparent"/>
      <ScrollView nestedScrollEnabled={true} refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }>
        <View style={styles.cardWrapper}>
          {cardData.number == '0000 0000 0000 0000' ? 
            <EmptyCard
              createCard={true}
              onPress={() => {
                fetchData();
              }}
            />
            :
            <BankCard
              cardNumber={cardData.number}
              network={cardData.network}
              design={cardData.design}
              balance={cardData.balance}
            />
          }
        </View>
        {/* <CardHistory /> */}
        <Text style={{marginTop: 100, textAlign: 'center'}}>Тут щось буде :3</Text>
      </ScrollView>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <Text style={{fontSize: 30, marginLeft: 10, fontWeight: '100', fontFamily: 'Roboto-Light'}}>Надіслати гроші</Text>
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