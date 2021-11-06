import React from 'react';
import { Touchable } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

export default React.memo(function WelcomeText(props) {
    return (
        <Text style={styles.text} onPress={props.onPress}>Welcome back, {props.userName}</Text>
    )
})

const styles = StyleSheet.create({
    text: {
        marginBottom: 10,
        marginTop: 10,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})