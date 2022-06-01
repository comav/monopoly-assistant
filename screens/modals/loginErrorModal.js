import React from "react";
import { Text } from 'react-native';
import { ModalContent } from "react-native-modals";

export default function ErrorModal(props) {
  return (
    <ModalContent>
      <Text style={{textAlign: 'center'}}>Введено неправильні дані.{"\n"}Будь ласка перевірте правильність{"\n"}даних та спробуйте ще раз</Text>
    </ModalContent>
  )
}