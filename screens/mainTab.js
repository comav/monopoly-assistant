import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, Modal, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SuggestionCard from '../components/suggestionCard';
import WelcomeText from '../components/welcomeText';
// import PropertyCard from '../components/card';

import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_CARD_DATA, UPDATE_USERLIST } from '../redux/consts';

export default function HomeScreen() {

  const username = useSelector((state) => state.username);
  const ip = useSelector((state) => state.ip);
  const cardData = useSelector((state) => state.cardData);
  const userlist = useSelector(state => state.userlist);

  const state = useSelector(state => state)

  const dispatch = useDispatch();

  //TODO replace these wonky functions with thunks

  async function changeCardDesign(designNum) {
    try {
      await fetch(`http://${ip}:5502/changedesign?user=${username}&design=${designNum}`, {
        method: 'GET'
      })
        .then(fetchData());
    } catch (error) {
      throw error;
    }
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

  async function updateUserlist() {
    try {
      await fetch(`http://${ip}:5502/getuserlist`, {
        method: 'GET'
      }
      )
        .then((response) => response.json())
        .then(res => dispatch({type: UPDATE_USERLIST, payload: res}))
        .then(console.log(userlist));
    } catch (error) {
      console.log('THERES A PROBLEM W/ GET CARD FETCH')
      throw error;
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.mainWrapper}>
      <StatusBar translucent />
      <WelcomeText username={username} />
      { //TODO Implement property managing system
      /* <SuggestionCard suggestion={'Review your property'}>
        <ScrollView horizontal={true} style={styles.scrollView} showsHorizontalScrollIndicator={false}>
          <PropertyCard homes={'home-remove'} color={'red'}/>
          <PropertyCard homes={'home-floor-1'} color={'green'}/>
          <PropertyCard homes={'home-floor-2'} color={'#ffda00'}/>
          <PropertyCard homes={'home-floor-3'} color={'blue'}/>
          <PropertyCard homes={'home-floor-l'} color={'#00dbff'}/>
        </ScrollView>
      </SuggestionCard> */}
      <SuggestionCard suggestion={'Змініть дизайн вашої карти'}>
        <ScrollView horizontal={true} style={styles.scrollCardView} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity onPress={() => changeCardDesign(0)}>
            <Image style={styles.cardSuggestionImage} resizeMethod='scale' source={require('../assets/card_hamburger.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeCardDesign(4)}>
            <Image style={styles.cardSuggestionImage} resizeMethod='scale' source={require('../assets/card_crimson.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeCardDesign(1)}>
            <Image style={styles.cardSuggestionImage} resizeMethod='scale' source={require('../assets/card_abstraction.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeCardDesign(3)}>
            <Image style={styles.cardSuggestionImage} resizeMethod='scale' source={require('../assets/card_hex.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeCardDesign(2)}>
            <Image style={styles.cardSuggestionImage} resizeMethod='scale' source={require('../assets/card_terminal.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeCardDesign(5)}>
            <Image style={styles.cardSuggestionImage} resizeMethod='scale' source={require('../assets/card_triangles.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeCardDesign(6)}>
            <Image style={styles.cardSuggestionImage} resizeMethod='scale' source={require('../assets/card_zebra.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeCardDesign(7)}>
            <Image style={styles.cardSuggestionImage} resizeMethod='scale' source={require('../assets/card_shapes.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeCardDesign(8)}>
            <Image style={styles.cardSuggestionImage} resizeMethod='scale' source={require('../assets/card_icecream.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeCardDesign(9)}>
            <Image style={styles.cardSuggestionImage} resizeMethod='scale' source={require('../assets/card_waves.png')} />
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => changeCardDesign(10)}>
            <Image style={styles.cardSuggestionImage} resizeMethod='scale' source={require('../assets/card_city_animated.gif')} />
          </TouchableOpacity> */}
        </ScrollView>
      </SuggestionCard>
      {/* <SuggestionCard suggestion={'Debug panel'}>
        <Button
          onPress={() => updateUserlist()}
          mode={'contained'}
        >
          Update userlist
        </Button>
        <Button
          onPress={() => fetchOwnershipData()}
          mode={'contained'}
        >
          Update ownership data
        </Button>
        <Button
          onPress={() => fetchData()}
          mode={'contained'}
        >
          Update card data
        </Button>
        <Button
          onPress={() => console.log(state)}
          mode={'contained'}
        >
          Console log state
        </Button>
        <Text>Username: {username}</Text>
        <Text>IP: {ip}</Text>
      </SuggestionCard> */}
      <Text>Далі - більше!</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainWrapper: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
  },
  cardSuggestionImage: {
    height: 150,
    width: 240,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
  },
  scrollCardView: {
    marginBottom: 5
  }
})