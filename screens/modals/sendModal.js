import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, SafeAreaView, ToastAndroid, TouchableOpacity } from 'react-native';
import { RadioButton } from "react-native-paper";
import { Picker } from '@react-native-picker/picker';

import AppContext from '../../components/AppContext';

export default function SendModal(props) {
  const globalVar = useContext(AppContext);
  const [selectedUser, setSelectedUser] = useState('Player');
  const [sendMoneyAmount, setSendMoneyAmount] = useState(0);

  function showToast(moneyAmount) {
    ToastAndroid.show(`Sent ${moneyAmount}₴`, ToastAndroid.SHORT);
  }

  async function sendMoney(receiver, amount) {
    console.log(receiver);
    console.log(amount);
    const response = await fetch(`http://${globalVar.ip}:5502/transaction?sender=${props.cardNumber}&receiver=${receiver}&amount=${amount}`, {
      method: 'GET'
    })
      .then((resp) => console.log(resp));
  }

  return (
    <View>
      <Text style={styles.header}>Send money</Text>
      <Text style={styles.secondaryText}>Choose a person</Text>
      <View style={{ height: 50, borderColor: 'black', borderRadius: 1}}>
        <Picker style={{ height: 50, borderColor: 'black', borderRadius: 1}}
          selectedValue={selectedUser}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedUser(itemValue)
          }}>
          {props.userlist.map(x => {
            return (
              <Picker.Item label={x.label} value={x.value} key={x.value} />
            )
          })}
        </Picker>
      </View>
      <View>
        <Text style={styles.secondaryText}>Input the amount of money</Text>
        <SafeAreaView style={styles.safeareaview}>
          <TextInput
            style={styles.input}
            keyboardType={'number-pad'}
            placeholder={'Money amount...'}
            defaultValue={'0'}
            onChangeText={(money) => {
              setSendMoneyAmount(money);
            }}
          />
        </SafeAreaView>
      </View>
      <Button
        title='SEND'
        onPress={() => {
          sendMoney(selectedUser, sendMoneyAmount);
          showToast(sendMoneyAmount);
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 45,
    marginTop: 10,
    marginLeft: 10,
  },
  secondaryText: {
    marginLeft: 10,
    fontSize: 20,
  },
  radioWrapper: {
    display: "flex",
    flexDirection: 'row',
    borderColor: '#000',
    borderWidth: 0.5,
  },
  input: {
    height: 50,
    fontSize: 20,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
  },
  radioButtonTextWrapper: {
    textAlignVertical: 'center',
  }
})