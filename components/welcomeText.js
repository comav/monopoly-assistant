import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default React.memo(function WelcomeText(props) {
  return (
    <Text style={styles.text}>Привіт, {props.username}</Text>
  )
})

const styles = StyleSheet.create({
  text: {
    marginBottom: 10,
    marginTop: 15,
    fontSize: 45,
    width: '100%',
    marginLeft: '10%',
    fontFamily: 'Roboto-Light'
  }
})