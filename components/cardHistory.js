import React, {useState} from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import HistoryItem from "./historyItem";

export default function CardHistory(props) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.headerText}>Історія витрат</Text>
      <ScrollView contentContainerStyle={styles.itemsWrapper} nestedScrollEnabled={true}>
        <HistoryItem expence={true} label={'sus'} amount={100} />
        <HistoryItem expence={true} label={'sus'} amount={100} />
        <HistoryItem expence={true} label={'sus'} amount={100} />
        <HistoryItem expence={true} label={'sus'} amount={100} />
        <HistoryItem expence={true} label={'sus'} amount={100} />
        <HistoryItem expence={true} label={'sus'} amount={100} />
        <HistoryItem expence={true} label={'sus'} amount={100} />
        <HistoryItem expence={true} label={'sus'} amount={100} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    height: 330,
  },
  headerText: {
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 24,
  },
  itemsWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: 280,
  }
})