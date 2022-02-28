import React, {useState} from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import SuggestionCard from "./suggestionCard";
import HistoryItem from "./historyItem";

export default function CardHistory(props) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.headerText}>Your history</Text>
      <ScrollView contentContainerStyle={styles.itemsWrapper} >
        <HistoryItem label={"ar;gaerugaergfagf"} amount={20} expence={true} />
        <HistoryItem label={"ar;gaerugaessssssssssssrgfagf"} amount={20} expence={true} />
        <HistoryItem label={"ar;gaerugaergfagf"} amount={20} expence={true} />
        <HistoryItem label={"ar;gaerugaergfagf"} amount={20} expence={true} />
        <HistoryItem label={"ar;gaerugaergfagf"} amount={20} expence={true} />
        <HistoryItem label={"ar;gaerugaergfagf"} amount={20} expence={true} />
        <HistoryItem label={"ar;gaerugaergfagf"} amount={20} expence={true} />
        <HistoryItem label={"ar;gaerugaergfagf"} amount={20} expence={true} />
        <HistoryItem label={"ar;gaerugaergfagf"} amount={20} expence={true} />
        <HistoryItem label={"ar;gaerugaergfagf"} amount={20} expence={true} />
        <HistoryItem label={"ar;gaerugaergfagf"} amount={20} expence={true} />
        <HistoryItem label={"ar;gaerugaergfagf"} amount={20} expence={true} />
        <HistoryItem label={"ar;gaerugaergfagf"} amount={20} expence={true} />
        <HistoryItem label={"ar;gaerugaergfagf"} amount={20} expence={true} />
        <HistoryItem label={"ar;gaerugaergfagf"} amount={20} expence={true} />
        <HistoryItem label={"ar;gaerugaergfagf"} amount={20} expence={true} />
        <HistoryItem label={"ar;gaerugaergfagf"} amount={20} expence={true} />
        <HistoryItem label={"ar;gaerugaergfagf"} amount={20} expence={true} />
        <HistoryItem label={"ar;gaerugaergfagf"} amount={20} expence={true} />
        <HistoryItem label={"ar;gaerugaergfagf"} amount={20} expence={true} />
        <HistoryItem label={"ar;gaerugaergfagf"} amount={20} expence={true} />
        <HistoryItem label={"ar;gaerugaergfagf"} amount={20} expence={true} />
        <HistoryItem label={"ar;gaerugaergfagf"} amount={20} expence={true} />
        <HistoryItem label={"ar;gaerugaergfagf"} amount={20} expence={true} />
        <HistoryItem label={"ar;gaerugaergfagf"} amount={20} expence={true} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    margin: 5,
    backgroundColor: '#00ffee',
    borderRadius: 10,
    height: 330
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