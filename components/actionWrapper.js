import React from "react";
import { flushSync } from "react-dom";
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ActionBubble from "./actionBubble";

export default function ActionWrapper(props) {

  return (
    <View style={styles.wrapper}>
      <View style={styles.itemsWrapper}>
        <View style={styles.items}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {props.children}
          </ScrollView>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    display: "flex",
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 10,
  },
  itemsWrapper: {
    width: '96%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  items: {
  }
})