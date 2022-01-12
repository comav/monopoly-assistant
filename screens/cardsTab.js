import 'react-native-gesture-handler';
import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, Modal, TouchableOpacity } from 'react-native';
import CardFlip from 'react-native-card-flip';
import Card from '../components/card';

import AppContext from '../components/AppContext';

const cardData = require('../assets/cards.json');

export default function CardsScreen() {
  const globalVar = useContext(AppContext);
  const [modalVisible, setModalVisible] = useState(true);
  return (
      <View>
      <Modal visible={modalVisible}>
        <CardFlip style={styles.cardContainer} ref={(cardDetails) => this.cardDetails = cardDetails} >
          <TouchableOpacity style={styles.cardDetails} onPress={() => this.cardDetails.flip()} >
            <View style={styles.header}>
              <Text style={styles.headerText}>HEADER</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardDetails} onPress={() => this.cardDetails.flip()} ><Text>CD</Text></TouchableOpacity>
        </CardFlip>
      </Modal>
      <ScrollView contentContainerStyle={styles.cardView}>
        {cardData.cards.map(x => {
          console.log(x);
          return (
            <Card
              key={x.key}
              color={x.color}
              title={x.name}
              price={x.price + '₴'}
              style={styles.card}
              homes={'home-remove'}
            />
          )
        })}
      </ScrollView>
      </View>
  )
}

const styles = StyleSheet.create({
  cardView: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    alignSelf: 'center',
  },
  cardDetails: {
    display: 'flex',
    height: '70%',
    width: '95%',
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  cardContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 50,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'red',
  },
  headerText: {
    fontSize: 28,
    color: 'white',
  }
})