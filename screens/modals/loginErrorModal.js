import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { ModalTitle } from "react-native-modals";
import { ModalContent } from "react-native-modals";
import { Button } from "react-native-paper";

export default function ErrorModal(props) {
  return (
    <ModalContent>
      <Text style={{textAlign: 'center'}}>Введено неправильні дані.{"\n"}Будь ласка перевірте правильність{"\n"}даних та спробуйте ще раз</Text>
    </ModalContent>
  )
}