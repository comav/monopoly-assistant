import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native"; 
import { Switch, TouchableRipple } from "react-native-paper";

import { useSelector, useDispatch } from "react-redux";
import { DEBUG_MENU_VISIBLE } from "../redux/consts";

export default function SettingsScreen() {
  const dispatch = useDispatch();

  const [isDedugVisible, setDebugVisible] = useState(false)

  const onDebugVisible = () => {
    if (!isDedugVisible) {
      setDebugVisible(true)
      dispatch({ type: DEBUG_MENU_VISIBLE, payload: true})
    } else {
      setDebugVisible(false)
      dispatch({ type: DEBUG_MENU_VISIBLE, payload: false})
    }
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.headerText}>Опції</Text>
      <View style={styles.optionsWrapper}>
        <TouchableRipple onPress={onDebugVisible}>
        <View style={styles.itemWrapper}>
          <Text>Показати дебаг-меню</Text>
          <Switch value={isDedugVisible} onValueChange={onDebugVisible}/>
        </View>
        </TouchableRipple>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    alignItems: 'center',
  },
  headerText: {
    width: '100%',
    marginTop: '20%',
    marginLeft: 45,
    fontSize: 45,
    marginBottom: 20,
    fontFamily: 'Roboto-Light',
  },
  optionsWrapper: {
    display: 'flex',
    flexDirection: "column",
    marginTop: '30%',
  },
  itemWrapper: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    width: '100%',
  }
})