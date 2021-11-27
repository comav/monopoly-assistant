import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { LinearGradient } from "expo-linear-gradient";

export default function ActionBubble(props) {


  return (
    <TouchableOpacity onPress={props.action} style={styles.wrapper}>
      <LinearGradient colors={props.colors} style={styles.bubble}>
        <MaterialCommunityIcons name={props.actionIcon} style={styles.icon}/>
      </LinearGradient>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: 80,
    width: 80,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  bubble: {
    height: 60,
    width: 60,
    borderRadius: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  icon: {
    fontSize: 44,
  }
})