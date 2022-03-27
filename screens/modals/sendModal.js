import React, {useContext, useState} from 'react';
import {StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View} from "react-native";
import {Picker} from "@react-native-picker/picker";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_CARD_DATA } from '../../redux/consts';

export default function SendModal(props) {

  const username = useSelector((state) => state.username);
  const ip = useSelector((state) => state.ip);
  const cardData = useSelector((state) => state.cardData);
  const userlist = useSelector(state => state.userlist);

  const dispatch = useDispatch();

  const [selectedUser, setSelectedUser] = useState('0000 0000 0000 0000');
  const [moneyAmount, onChangeMoneyAmount] = useState(null);

  async function sendPaymentRequest() {
    try {
      await fetch(`http://${ip}:5502/transaction?sender=${cardData.number}&receiver=${selectedUser}&amount=${moneyAmount}`, {
        method: 'GET'
      })
        .then(() => updateData())
    } catch (e) {
      throw e;
    }
  }

  async function updateData() {
    if (selectedUser === "do_nothing") {
      return;
    }
    try {
        await fetch(`http://${ip}:5502/getcardinfo?owner=${username}`, {
          method: 'GET'
        }
      )
        .then((response) => response.json())
        .then(res => dispatch({type: UPDATE_CARD_DATA, payload: res}))
        .then(res =>console.log('res', res))
        .then(() => console.log('SUS', cardData))
    } catch (error) {
      console.log('THERES A PROBLEM W/ GET CARD FETCH')
      throw error;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.pickerWrapper}>
        <Text style={{fontSize: 16}}>Отримувач:</Text>
        <Picker
          selectedValue={selectedUser}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedUser(itemValue);
          }}
          style={styles.picker}
        >
          {userlist?.map((item) => {
            if (item.label === username) {
              return (
                <Picker.Item label={"Виберіть..."} value={"do_nothing"} key={"Current_user"}/>
              )
            } else {
              return (
                <Picker.Item label={item.label} value={item.value} key={item.value}/>
              )
            }
          })}
        </Picker>
      </View>
      <View style={styles.pickerWrapper}>
        <Text style={{fontSize: 16}}>Сума:</Text>
        <TextInput
          keyboardType={'numeric'}
          placeholder={'Введіть...'}
          style={styles.textInput}
          onChangeText={(amount) => onChangeMoneyAmount(amount)}
          value={moneyAmount}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button} onPress={() => sendPaymentRequest()}>
          <Text style={{fontSize: 24}}>ГО</Text>
          <MaterialCommunityIcons name={'send'} style={{fontSize: 24, marginLeft: 5}}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    width: '100%',
  },
  picker: {
    height: 50,
    width: '50%',
    padding: 5,
    borderRadius: 1,
    borderColor: 'black',
    borderWidth: 1,
  },
  pickerWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    padding: 5,
    fontSize: 16,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    height: 50,
    width: '33%',
    justifyContent: "center",
  },
  buttonWrapper: {
    display: "flex",
    width: '100%',
    height: '75%',
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
})