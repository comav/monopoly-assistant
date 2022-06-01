import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native';
import Card from '../components/card';
import {BottomModal, ModalContent, SlideAnimation} from 'react-native-modals';
import {MaterialCommunityIcons} from 'react-native-vector-icons';

const cardData = require('../assets/json/cards.json');

export default function CardsScreen(props) {

  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({
    name: 'Loading...',
    rent: 0,
    color: '#000',
    price: 0,
    mortgage: 0,
    upgradePrice: 0,
    upgradeRent: [
      0,
      0,
      0,
      0,
      0
    ],
    key: 0,
    homes: 0,
  });
  console.log(props)
  return (
    <View>
      <BottomModal
        visible={modalOpen}
        onTouchOutside={() => setModalOpen(false)}
        modalAnimation={new SlideAnimation({
          slideFrom: 'bottom',
        })}
        swipeDirection={'down'}
        swipeThreshold={200}
        onSwipeOut={() => {
          setModalOpen(false)
          console.log(modalData)
        }}
      >
        <ModalContent>
          <View style={{display: 'flex', alignItems: 'center'}}>
            <View style={{width: 50, height: 5, backgroundColor: '#a1a1a1', borderRadius: 5}}></View>
          </View>
          <Text style={styles.modalHeaderText}>{modalData.name}</Text>
          <View style={{marginTop: 10, marginLeft: 27, fontSize: 25,}}>
            <Image source={<MaterialCommunityIcons name={'home-city'} />} style={{height: 300, width: 300, marginBottom: 10}} />
            <Text style={styles.modalText}>Ціна: {modalData.price}$</Text>
            <Text style={styles.modalText}>Застава: {modalData.mortgage}$</Text>
            <Text style={styles.modalText}>Ціна оновлення: {modalData.upgradePrice}</Text>
            <Text style={styles.modalText}>Ціна при оновленні: {modalData.upgradeRent[0]}, {modalData.upgradeRent[1]}, {modalData.upgradeRent[2]}, {modalData.upgradeRent[3]}, {modalData.upgradeRent[4]}</Text>
          </View>
        </ModalContent>
      </BottomModal>
      <ScrollView>
        <Text style={styles.headerText}>Усі карти</Text>
        <View style={styles.cardView}>
          {cardData.cards.map(x => {
            return (
              <TouchableOpacity onPress={() => {
                setModalData(x);
                setModalOpen(true);
              }} key={x.key}>
                <Card
                  key={x.key}
                  color={x.color}
                  title={x.name}
                  price={x.price + '₴'}
                  style={styles.card}
                  homes={'home-remove'}
                />
              </TouchableOpacity>
            )
          })}
        </View>
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
    marginTop: 10,
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
  headerText: {
    fontSize: 45,
    color: 'black',
    marginLeft: 25,
    marginTop: '20%',
    fontFamily: 'Roboto-Light'
  },
  modalHeaderText: {
    fontSize: 40,
    color: 'black',
    marginLeft: 25,
    marginTop: 10,
    fontFamily: 'Roboto-Light'
  },
  modalText: {
    fontSize: 15,
  }
})