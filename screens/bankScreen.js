import React, { useState, useEffect, useLayoutEffect, useContext } from 'react';
import { Touchable } from 'react-native';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import BankCard from '../components/bankCard';
import Delayed from '../components/delayed';

import AppContext from '../components/AppContext';

export default function BankScreen() {

    const globalVar = useContext(AppContext);

    const [state, setState] = useState([])

    useEffect(() => {
        try {
            const response = fetch('http://192.168.0.104:5502/getcardinfo', {
                method: 'POST',
                body: {
                    "owner": globalVar.userName
                }
            }
            )
                .then((response) => response.json())
                .then(res => setState(res));
        } catch (error) {
            console.log('THERES A PROBLEM W/ GET CARD FETCH')
            throw error;
        }
    }, [])

    return (
        <View style={styles.wrapper}>
            <Delayed waitBeforeShow={500}>
                <BankCard style={styles.card} cardNumber={state.number} network={state.network} />
            </Delayed>
            <View style={styles.cardopWrapper}>
                {}
            </View>
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