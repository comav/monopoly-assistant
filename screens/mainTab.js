import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, Modal, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {changeUsername} from "../components/redux/actions/usernameAction";

import {updateCardData} from "../components/redux/actions/cardDataAction";

import {changeIP} from "../components/redux/actions/ipAction";
import {updateUserlist} from "../components/redux/actions/userlistAction";
import {updateOwnershipData} from "../components/redux/actions/ownershipDataAction";

import SuggestionCard from '../components/suggestionCard';
import WelcomeText from '../components/welcomeText';
import AppContext from '../components/AppContext';
// import PropertyCard from '../components/card';

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import { StatusBar } from 'expo-status-bar';

function HomeScreen(props) {

  const globalVar = useContext(AppContext);

  const [modalOpen, setModalOpen] = useState(true);

  async function changeCardDesign(designNum) {
    try {
      const response = fetch(`http://${globalVar.ip}:5502/changedesign?user=${globalVar.userName}&design=${designNum}`, {
        method: 'GET'
      })
        .then(console.log(globalVar.userName))
        .then(fetchData());
    } catch (error) {
      throw error;
    }
  }

  async function updateUserlist() {
    try {
      const response = fetch(`http://${globalVar.ip}:5502/getuserlist`, {
        method: 'GET'
      })
        .then(response => response.json())
        .then(res => props.updateUserlist(res))
    } catch (error) {
      throw error;
    }
  }

  async function fetchData() {
    try {
      const response = await fetch(`http://${globalVar.ip}:5502/getcardinfo?owner=${globalVar.userName}`, {
          method: 'GET'
        }
      )
        .then((response) => response.json())
        .then(res => props.updateCardData(res))
    } catch (error) {
      console.log('THERES A PROBLEM W/ GET CARD FETCH')
      throw error;
    }
  }

  async function fetchOwnershipData() {
    try {
      const response = await fetch(`http://${globalVar.ip}:5502/getpropertyownagedata`, {
        method: 'GET'
      })
        .then((res) => res.json())
        .then((res) => props.updateOwnershipData(res))
        .then(console.log(props))
    } catch (e) {
      console.log(e)
    }
  }

  async function setConnectionData() {
    try {
      await AsyncStorage.setItem('username', globalVar.userName);
      await AsyncStorage.setItem('ip', globalVar.ip);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.mainWrapper}>
      <StatusBar translucent />
      <Modal animationType={'slide'} visible={modalOpen}>
        <View style={styles.modal}>
          <Text style={styles.modalText}>Будь ласка, введіть ваш нік</Text>
          <SafeAreaView style={styles.safeareaview}>
            <TextInput
              style={styles.input}
              keyboardType={'default'}
              placeholder={'Твій нік...'}
              defaultValue={globalVar.userName}
              onChangeText={(username) => {
                globalVar.setUserName(username)
                props.changeUsername(username)
              }}
            />
          </SafeAreaView>
          <Text style={styles.modalTextSecond}>Будь ласка, введіть IP</Text>
          <SafeAreaView style={styles.safeareaview}>
            <TextInput
              style={styles.input}
              keyboardType={'number-pad'}
              placeholder={'IP...'}
              defaultValue={globalVar.ip}
              onChangeText={globalVar.setIp}
            />
          </SafeAreaView>
          <Button
            title="OK"
            type="solid"
            style={styles.button}
            onPress={() => {
              setModalOpen(false);
              setConnectionData();
              fetchData();
              updateUserlist();
              fetchOwnershipData();
            }}
          />
        </View>
      </Modal>

      <WelcomeText userName={globalVar.userName} onPress={() => setModalOpen(true)} />
      {/* <SuggestionCard suggestion={'Review your property'}>
        <ScrollView horizontal={true} style={styles.scrollView} showsHorizontalScrollIndicator={false}>
          <PropertyCard homes={'home-remove'} color={'red'}/>
          <PropertyCard homes={'home-floor-1'} color={'green'}/>
          <PropertyCard homes={'home-floor-2'} color={'#ffda00'}/>
          <PropertyCard homes={'home-floor-3'} color={'blue'}/>
          <PropertyCard homes={'home-floor-l'} color={'#00dbff'}/>
        </ScrollView>
      </SuggestionCard> */}
      <SuggestionCard suggestion={'Change your card design'}>
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
        title={'Update userlist'}
        /><Button
        onPress={() => fetchOwnershipData()}
        title={'Update ownership data'}
      />
      </SuggestionCard> */}
      <Text>More to come!</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainWrapper: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    fontSize: 20,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 10,
    padding: 10,
  },
  modalText: {
    marginTop: '40%',
    fontSize: 25,
  },
  modalTextSecond: {
    marginTop: 10,
    fontSize: 25,
  },
  safeareaview: {
    width: 300,
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

const mapStateToProps = (state) => {
  return {
    cardData: state.cardData,
    username: state.username,
    ip: state.ip,
    userlist: state.userlist,
    ownershipData: state.ownershipData,
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    changeUsername,
    updateCardData,
    changeIP,
    updateUserlist,
    updateOwnershipData,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);