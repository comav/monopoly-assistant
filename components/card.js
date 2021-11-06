import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

export default function Card(props) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.textWrapper}>
        <Text style={styles.itemName}>lolkek</Text>
      </View>
      <View style={styles.cardBody}>
        <MaterialCommunityIcons style={'homeIcon'} name={props.homes} size={78} />
        <Text style={styles.fee}>Fee: 25₴</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: 130,
    height: 175,
    borderRadius: 10,
    backgroundColor: '#fff',
    margin: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textWrapper: {
    backgroundColor: 'red',
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  cardBody: {
    display: 'flex',
  },
  fee: {
    fontSize: 18,
    flexGrow: 20,
    alignSelf: 'baseline',
  },
  homeIcon: {
    alignSelf: 'flex-end',
    width: 1,
  },
})