import React, { useContext, useState } from "react";
import { View, Text, Button, ScrollView } from "react-native";

import Card from '../../components/card';

import AppContext from "../../components/AppContext";

export default function BuyProperty(props) {

  const globalVar = useContext(AppContext);

  const [selectedCard, setSelectedCard] = useState('');

  return (
    <ScrollView>
      <Text>Buy property!</Text>
      <View>
        {props.propData.map((x) => {
          if (x.owner !== '') {
            return (
              <Card
                color={'#000'}
                title={x.name}
                homes={'home-remove'}
                price={x.price}
              />
            )
          } else {
            return (
                <Card
                  color={'#000'}
                  title={x.name}
                  homes={'home-remove'}
                  price={'None'}
                />
            )
          }
        })}
      </View>
    </ScrollView>
  )
} 