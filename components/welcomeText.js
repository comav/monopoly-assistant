import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WelcomeText(props) {
    return (
        <Text style={styles.text}>Welcome back, {props.userName}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        marginBottom: 10,
        marginTop: 10,
        fontSize: 30,
        textAlign: 'center',
    }
})