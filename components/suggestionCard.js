import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function SuggestionCard(props) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.suggText}>{props.suggestion}</Text>
      <View style={styles.childrenWrapper}>
        {props.children}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    width: '96%',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    overflow: 'visible',
    marginBottom: 10,
  },
  suggText: {
    fontWeight: '100',
    fontSize: 24,
    margin: 10,
  },
  childrenWrapper: {
    margin: 5,
  }
})