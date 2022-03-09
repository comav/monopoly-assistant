import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {MaterialCommunityIcons} from "react-native-vector-icons";

export default function HistoryItem(props) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.iconWrapper}>
        <MaterialCommunityIcons color={'white'} size={25} name={props.expence ? 'archive-arrow-down' : 'archive-arrow-up'} />
      </View>
      <Text style={styles.label}>{props.label}</Text>
      <Text style={styles.amount}>{props.amount}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 70,
    width: '98%',
    backgroundColor: '#e8e8e8',
    borderRadius: 5,
    marginTop: 2,
    marginBottom: 2,
    justifyContent: 'space-between'
  },
  amount: {
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 10,
    paddingRight: 10,
    borderLeftWidth: 2,
    borderLeftColor: '#000',
    textAlign: 'justify',
  },
  iconWrapper: {
    padding: 15,
    marginLeft: 5,
    borderRadius: 7,
    backgroundColor: "black"
  },
  label: {
    marginLeft: 10,
    marginRight: 10,
  }
})
