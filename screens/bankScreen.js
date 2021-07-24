import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import BankCard from '../components/bankCard';

export default function BankScreen() {
    return (
        <View style={styles.wrapper}>
            <BankCard style={styles.card}></BankCard>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        marginRight: '1%',
    },
    wrapper: {
        marginTop: 25,
        width: '100%',
    }
})