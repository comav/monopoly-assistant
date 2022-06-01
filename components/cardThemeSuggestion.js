import React from "react";
import { ScrollView, Image, StyleSheet } from "react-native";
import { TouchableRipple as TouchableOpacity } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_CARD_DATA } from "../redux/consts";

import SuggestionCard from "./suggestionCard";

export default function CardThemeSuggestion() {

  const username = useSelector((state) => state.username.username);
  const ip = useSelector((state) => state.ip.ip);
  const dispatch = useDispatch();

  async function changeCardDesign(designNum) {
    try {
      await fetch(`http://${ip}:5502/changedesign?user=${username}&design=${designNum}`, {
        method: 'GET'
      })
        .then(fetchData());
    } catch (error) {
      throw error;
    }
  }

  async function fetchData() {
    try {
      await fetch(`http://${ip}:5502/getcardinfo?owner=${username}`, {
        method: 'GET'
      }
      )
        .then((response) => response.json())
        .then(res => dispatch({type: UPDATE_CARD_DATA, payload: res}))
        .then(console.log(cardData));
    } catch (error) {
      console.log('THERES A PROBLEM W/ GET CARD FETCH')
      throw error;
    }
  }
  
  return (
    <SuggestionCard suggestion={'Змініть дизайн вашої карти'}>
        <ScrollView horizontal={true} style={{marginBottom: 5}} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity onPress={() => changeCardDesign(0)}>
            <Image style={styles.cardSuggestionImage} resizeMethod='scale' source={require('../assets/cards/card_hamburger.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeCardDesign(4)}>
            <Image style={styles.cardSuggestionImage} resizeMethod='scale' source={require('../assets/cards/card_crimson.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeCardDesign(1)}>
            <Image style={styles.cardSuggestionImage} resizeMethod='scale' source={require('../assets/cards/card_abstraction.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeCardDesign(3)}>
            <Image style={styles.cardSuggestionImage} resizeMethod='scale' source={require('../assets/cards/card_hex.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeCardDesign(2)}>
            <Image style={styles.cardSuggestionImage} resizeMethod='scale' source={require('../assets/cards/card_terminal.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeCardDesign(5)}>
            <Image style={styles.cardSuggestionImage} resizeMethod='scale' source={require('../assets/cards/card_triangles.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeCardDesign(6)}>
            <Image style={styles.cardSuggestionImage} resizeMethod='scale' source={require('../assets/cards/card_zebra.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeCardDesign(7)}>
            <Image style={styles.cardSuggestionImage} resizeMethod='scale' source={require('../assets/cards/card_shapes.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeCardDesign(8)}>
            <Image style={styles.cardSuggestionImage} resizeMethod='scale' source={require('../assets/cards/card_icecream.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeCardDesign(9)}>
            <Image style={styles.cardSuggestionImage} resizeMethod='scale' source={require('../assets/cards/card_waves.png')} />
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => changeCardDesign(10)}>
            <Image style={styles.cardSuggestionImage} resizeMethod='scale' source={require('../assets/card_city_animated.gif')} />
          </TouchableOpacity> */}
        </ScrollView>
      </SuggestionCard>
  )
}

const styles = StyleSheet.create({
  cardSuggestionImage: {
    height: 150,
    width: 240,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
  }
})