import React, { useState } from "react";
import { View, StyleSheet, Button, Text, TextInput, SafeAreaView } from "react-native";

import { useSelector, useDispatch } from "react-redux";

import { CHANGE_IP, CHANGE_USERNAME } from "../redux/consts";

export default function LoginContents({navigation}) {

  const username = useSelector((state) => state.username);
  const ip = useSelector((state) => state.ip);
  const cardData = useSelector((state) => state.cardData);

  const dispatch = useDispatch();

  const [usernameEditable, setUsernameEditable] = useState('Player');
  const [ipEditable, setIpEditable] = useState('192.168.0.100');

  function submitCreds() {
    dispatch({ type: CHANGE_USERNAME, payload: usernameEditable});
    dispatch({ type: CHANGE_IP, payload: ipEditable});
    fetchData();
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

  return (
    <View style={styles.modal}>
          <Text style={styles.modalText}>Будь ласка, введіть ваш нік</Text>
          <SafeAreaView style={styles.safeareaview}>
            <TextInput
              style={styles.input}
              keyboardType={'default'}
              placeholder={'Твій нік...'}
              defaultValue={username.username}
              onChangeText={(username) => setUsernameEditable(username)}
            />
          </SafeAreaView>
          <Text style={styles.modalTextSecond}>Будь ласка, введіть IP</Text>
          <SafeAreaView style={styles.safeareaview}>
            <TextInput
              style={styles.input}
              keyboardType={'number-pad'}
              placeholder={'IP...'}
              defaultValue={ip.ip}
              onChangeText={(ip) => setIpEditable(ip)}
            />
          </SafeAreaView>
          <Button
            title="OK"
            type="solid"
            style={styles.button}
            onPress={() => {
              submitCreds();
              navigation.navigate('Tabs-nested');
            }}
          />
        </View>
  )
}

const styles = StyleSheet.create({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
  input: {
    height: 50,
    fontSize: 20,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 10,
    padding: 10,
  },
})