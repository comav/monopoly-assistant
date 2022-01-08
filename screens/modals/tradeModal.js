import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';

import { Card } from '../../components/card'

export default function TradeModal(props) {

  const [selectedUser, setSelectedUser] = useState('');

  console.warn(props.ownageData);

  return (
    <View>
      <View>
        <Text>Choose a player</Text>
        <Text>Selected user: {selectedUser}</Text>
        <Picker style={{ height: 50, borderColor: 'black', borderRadius: 1}}
         selectedValue={selectedUser}
         onValueChange={(itemValue, itemIndex) => {
          setSelectedUser(itemValue)
        }}>
          {props?.userlist?.map(x => {
            return (
              <Picker.Item label={x.label} value={x.label} key={x.value} />
            )
          })}
        </Picker>
        <Text>Choose this players property</Text>
        <View>
          {props?.ownageData?.map(x => {
            if (selectedUser === x?.owner) {
              return (
                <Text>OWNED</Text>
              )
            } else {
              return (<Text>NOT OWNED</Text>)
            }
          })}
          <Text>sadasddsa</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

})