import React, {useContext, useState} from 'react';
import {StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View} from "react-native";
import AppContext from "../../components/AppContext";
import {Picker} from "@react-native-picker/picker";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import {updateCardData} from "../../components/redux/actions/cardDataAction";
import {updateUserlist} from "../../components/redux/actions/userlistAction";
import {changeUsername} from "../../components/redux/actions/usernameAction";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

function SendModal(props) {

  const globalVar = useContext(AppContext);

  const [selectedUser, setSelectedUser] = useState('0000 0000 0000 0000');
  const [moneyAmount, onChangeMoneyAmount] = useState(null);

  async function sendPaymentRequest() {
    try {
      const response = fetch(`http://${globalVar.ip}:5502/transaction?sender=${props.cardData.number}&receiver=${selectedUser}&amount=${moneyAmount}`, {
        method: 'GET'
      })
        .then(() => {
            if (moneyAmount === null) {
              ToastAndroid.show(`Nothing has been done`, 1000)
            } else {
              ToastAndroid.show(`Sent ${moneyAmount} UAH`, 1000)
            }
          }
        )
        .then(() => {
          onChangeMoneyAmount(null)
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
      const response = await fetch(`http://${globalVar.ip}:5502/getcardinfo?owner=${globalVar.userName}`, {
          method: 'GET'
        }
      )
        .then((response) => response.json())
        .then(res => props.updateCardData(res))
        .then(() => console.log('SUS', props))
    } catch (error) {
      console.log('THERES A PROBLEM W/ GET CARD FETCH')
      throw error;
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.pickerWrapper}>
        <Text style={{fontSize: 16}}>Send to:</Text>
        <Picker
          selectedValue={selectedUser}
          onValueChange={(itemValue, itemIndex) => {
            setSelectedUser(itemValue);
          }}
          style={styles.picker}
        >
          {props.userlist?.map((item) => {
            if (item.label === globalVar.userName) {
              return (
                <Picker.Item label={"Choose one..."} value={"do_nothing"} key={"Current_user"}/>
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
        <Text style={{fontSize: 16}}>Money amount:</Text>
        <TextInput
          keyboardType={'numeric'}
          placeholder={'Amount...'}
          style={styles.textInput}
          onChangeText={(amount) => onChangeMoneyAmount(amount)}
          value={moneyAmount}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button} onPress={() => sendPaymentRequest()}>
          <Text style={{fontSize: 24}}>SEND</Text>
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

const mapStateToProps = (state) => {
  return {
    cardData: state.cardData,
    userlist: state.userlist,
    username: state.username,
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    updateCardData,
    updateUserlist,
    changeUsername,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SendModal);