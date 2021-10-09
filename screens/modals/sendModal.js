import React, { useState }  from "react";
import { View, Text, Image, StyleSheet, Button, TextInput, SafeAreaView, ToastAndroid, TouchableOpacity } from 'react-native';
import { RadioButton } from "react-native-paper";

export default function SendModal(props) {

  const [checked, setChecked] = useState('');
  const [sendMoneyAmount, setSendMoneyAmount] = useState(0);

  function showToast(moneyAmount) {
    ToastAndroid.show(`Sent ${moneyAmount}₴`, ToastAndroid.SHORT);
  }

  async function sendMoney(receiver, amount) {
    console.log(receiver);
    console.log(amount);
    const response = await fetch(`http://192.168.0.102:5502/transaction?sender=${props.cardNumber}&receiver=${receiver}&amount=${amount}`, {
      method: 'GET'
    })
      .then((resp) => console.log(resp));
  }

  return (
    <View>
      <Text style={styles.header}>Send money</Text>
      <Text style={styles.secondaryText}>Choose a person</Text>
      <View>
        {props.userlist.map(x => {
          return (
            <TouchableOpacity style={styles.radioWrapper} key={x.value} onPress={() => {setChecked(x.value)}}>
              <View>
                <RadioButton
                  value={x.value}
                  status={checked === x.value ? 'checked' : 'unchecked'}
                />
              </View>
              <View style={styles.radioButtonTextWrapper}>
                <Text>{x.label}</Text>
              </View>
            </TouchableOpacity>
          )
        })}
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
          sendMoney(checked, sendMoneyAmount);
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