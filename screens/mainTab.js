import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Modal, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

import ContentCard from '../components/contentCard';
import SuggestionCard from '../components/suggestionCard';
import WelcomeText from '../components/welcomeText';
import BankCard from '../components/bankCard';
import AppContext from '../components/AppContext';
import PropertyCard from '../components/card';

export default function HomeScreen() {

  const globalVar = useContext(AppContext);

  const [modalOpen, setModalOpen] = useState(true);

  const createData = async () => {
    try {
      const response = fetch(`http://${globalVar.ip}:5502/newcard?owner=${globalVar.userName}`, {
        method: 'GET'
      })
    } catch (error) {
      console.log('THERES A PROBLEM W/ GET CARD FETCH')
      throw error;
    }
  }

  async function changeCardDesign(designNum) {
    try {
      response = fetch(`http://${globalVar.ip}:5502/changedesign?user=${globalVar.userName}&design=${designNum}`, {
        method: 'GET'
      })
    } catch (error) {
      throw error;
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.mainWrapper}>

      <Modal animationType={'slide'} visible={modalOpen}>
        <View style={styles.modal}>
          <Text style={styles.modalText}>Будь ласка, введіть ваш нік</Text>
          <SafeAreaView style={styles.safeareaview}>
            <TextInput
              style={styles.input}
              keyboardType={'default'}
              placeholder={'Твій нік...'}
              defaultValue={globalVar.userName}
              onChangeText={globalVar.setUserName}
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
            }}
          />
        </View>
      </Modal>

      <WelcomeText userName={globalVar.userName} onPress={() => setModalOpen(true)}></WelcomeText>
      <SuggestionCard suggestion={'Review your property'}>
        <ScrollView horizontal={true} style={styles.scrollView} showsHorizontalScrollIndicator={false}>
          <PropertyCard homes={'home-remove'} color={'red'}></PropertyCard>
          <PropertyCard homes={'home-floor-1'} color={'green'}></PropertyCard>
          <PropertyCard homes={'home-floor-2'} color={'#ffda00'}></PropertyCard>
          <PropertyCard homes={'home-floor-3'} color={'blue'}></PropertyCard>
          <PropertyCard homes={'home-floor-l'} color={'#00dbff'}></PropertyCard>
        </ScrollView>
      </SuggestionCard>
      <SuggestionCard suggestion={'Change your card design'}>
        <ScrollView horizontal={true} style={styles.scrollView} showsHorizontalScrollIndicator={false}>
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
        </ScrollView>
      </SuggestionCard>
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
  }
})

