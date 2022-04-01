import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default React.memo(function WelcomeText(props) {
  return (
    <Text style={styles.text}>Привіт, {props.username}</Text>
  )
})

const styles = StyleSheet.create({
  text: {
    width: '100%',
    marginTop: '15%',
    marginLeft: 45,
    fontSize: 45,
    marginBottom: 20,
    fontFamily: 'Roboto-Light',
  }
})