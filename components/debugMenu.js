import React from "react";
import SuggestionCard from './suggestionCard';

import { Text } from 'react-native';

import { Button } from "react-native-paper";

import { useSelector, useDispatch } from "react-redux";

export default function DebugMenu() {

  const username = useSelector((state) => state.username);
  const ip = useSelector((state) => state.ip);
  const cardData = useSelector((state) => state.cardData);
  const userlist = useSelector(state => state.userlist);
  const debugShown = useSelector((state) => state.debug);

  const state = useSelector(state => state)

  const dispatch = useDispatch();

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

  async function updateUserlist() {
    try {
      await fetch(`http://${ip}:5502/getuserlist`, {
        method: 'GET'
      }
      )
        .then((response) => response.json())
        .then(res => dispatch({type: UPDATE_USERLIST, payload: res}))
        .then(console.log(userlist));
    } catch (error) {
      console.log('THERES A PROBLEM W/ GET CARD FETCH')
      throw error;
    }
  }
  return (
    <SuggestionCard suggestion={'Debug panel'}>
        <Button
          onPress={() => updateUserlist()}
          mode={'contained'}
        >
          Update userlist
        </Button>
        <Button
          onPress={() => fetchOwnershipData()}
          mode={'contained'}
        >
          Update ownership data
        </Button>
        <Button
          onPress={() => fetchData()}
          mode={'contained'}
        >
          Update card data
        </Button>
        <Button
          onPress={() => console.log(state)}
          mode={'contained'}
        >
          Console log state
        </Button>
        <Text>Username: {username}</Text>
        <Text>IP: {ip}</Text>
      </SuggestionCard>
  )
}