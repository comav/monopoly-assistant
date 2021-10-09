import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Modal, TextInput, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import ContentCard from '../components/contentCard';
import WelcomeText from '../components/welcomeText';
import BankCard from '../components/bankCard';
import AppContext from '../components/AppContext';

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
  button: {
    
  }
})

