import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {MaterialCommunityIcons} from "react-native-vector-icons";

export default function HistoryItem(props) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.iconWrapper}>
        <MaterialCommunityIcons color={'white'} size={25} name={props.expence ? 'archive-arrow-up' : 'archive-arrow-down'} />
      </View>
      <Text style={styles.icon}>{props.label}</Text>
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
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginTop: 2,
    marginBottom: 2,
  },
  amount: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: "45%",
    paddingLeft: 10,
    borderLeftWidth: 2,
    borderLeftColor: '#000',
  },
  iconWrapper: {
    padding: 15,
    marginLeft: 5,
    borderRadius: 5,
    backgroundColor: "black"
  }
})
