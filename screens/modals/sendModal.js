import React, { useState }  from "react";
import { View, Text, Image, StyleSheet, Button, TextInput, SafeAreaView } from 'react-native';
import { RadioButton } from "react-native-paper";

export default function SendModal(props) {

  const [checked, setChecked] = useState('');
  const [sendMoneyAmount, setSendMoneyAmount] = useState(0);

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
            <View style={styles.radioWrapper} key={x.value}>
              <View>
                <Text>{x.label}</Text>
              </View>
              <View>
                <RadioButton
                  value={x.value}
                  status={checked === x.value ? 'checked' : 'unchecked'}
                  onPress={() => {setChecked(x.value)}}
                />
              </View>
            </View>
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
              onChangeText={(money) => {setSendMoneyAmount(money)}}
            />
          </SafeAreaView>
      </View>
      <Button
        title='SEND'
        onPress={() => {
          sendMoney(checked, sendMoneyAmount);
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
  },  
  input: {
    height: 50,
    fontSize: 20,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
  },
})