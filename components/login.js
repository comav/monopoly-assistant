import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";

import { Modal, ModalTitle } from "react-native-modals";

import { useSelector, useDispatch } from "react-redux";

import { CHANGE_IP, CHANGE_USERNAME } from "../redux/consts";

import ErrorModal from "../screens/modals/loginErrorModal";
import { ModalFooter } from "react-native-modals";
import { ModalButton } from "react-native-modals";

export default function LoginContents({ navigation }) {

  const username = useSelector((state) => state.username);
  const ip = useSelector((state) => state.ip);
  const cardData = useSelector((state) => state.cardData);

  const dispatch = useDispatch();

  const [usernameEditable, setUsernameEditable] = useState('');
  const [ipEditable, setIpEditable] = useState('');

  const [errorVisible, setErrorVisible] = useState(false);

  const ipRegex = /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b/;

  function submitCreds() {
    if (ipRegex.test(ipEditable) === true && usernameEditable !== '') {
      dispatch({ type: CHANGE_USERNAME, payload: usernameEditable });
      dispatch({ type: CHANGE_IP, payload: ipEditable });
      fetchData();
      navigation.navigate('Tabs-nested')
    } else {
      setErrorVisible(true);
    }
  }

  async function fetchData() {
    try {
      await fetch(`http://${ip}:5502/getcardinfo?owner=${username}`, {
        method: 'GET'
      }
      )
        .then((response) => response.json())
        .then(res => dispatch({ type: UPDATE_CARD_DATA, payload: res }))
        .then(console.log(cardData));
    } catch (error) {
      console.log('THERES A PROBLEM W/ GET CARD FETCH')
      throw error;
    }
  }

  return (
    <View style={styles.wrapper}>
      <Modal
        visible={errorVisible}
        modalTitle={<ModalTitle title={'Warning!'} />}
        swipeDirection={['up', 'down']}
        swipeThreshold={200}
        onSwipeOut={() => setErrorVisible(false)}
        footer={
          <ModalFooter>
            <ModalButton
              text="OK"
              onPress={() => setErrorVisible(false)}
            />
          </ModalFooter>
        }
      >
      <ErrorModal />
    </Modal>
    <Text style={styles.textSecond}>Введіть дані</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          mode={'outlined'}
          label={'Username'}
          onChangeText={text => setUsernameEditable(text)}
          left={<TextInput.Icon name="at" />}
        />
        <TextInput
          mode={'outlined'}
          label={'IP'}
          keyboardType={'number-pad'}
          onChangeText={text => setIpEditable(text)}
          left={<TextInput.Icon name="server" />}
        />
      </View>
      <Button
        mode={'contained'}
        style={styles.button}
        onPress={() => {
          submitCreds();
        }}
      >
      OK 
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSecond: {
    width: '100%',
    marginTop: '20%',
    marginLeft: 45,
    fontSize: 45,
    marginBottom: 20,
    fontFamily: 'Roboto-Light',
  },
  inputWrapper: {
    width: 300,
    marginTop: '70%'
  },
  input: {
    fontSize: 20,
  },
  button: {
    marginTop: 20,
  }
})