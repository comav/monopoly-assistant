import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

export default function Card(props) {

  return (
    <View style={styles.wrapper}>
      <View style={[styles.textWrapper ,{
        backgroundColor: props.color,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
      }]}>
        <Text style={styles.itemName}>{props.title}</Text>
      </View>
      <View style={styles.cardBody}>
        <MaterialCommunityIcons style={styles.homeIcon} name={props.homes} size={78} />
        <View style={styles.feeWrapper}>
          {props.isOwned ? <Text style={styles.fee}>Рента: {props.fee}₴</Text> : <Text style={styles.fee}>Ціна: {props.price}</Text>}
        </View>
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
    margin: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
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
  },
  feeWrapper: {
    display: 'flex',
    justifyContent: 'center',
    height: 50,
    marginLeft: 10,
  },
  homeIcon: {
    alignSelf: 'center',
  },
})