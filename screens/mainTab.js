import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

import ContentCard from '../components/contentCard';
import WelcomeText from '../components/welcomeText';
import BankCard from '../components/bankCard';

export default function HomeScreen () {
    return (
        <ScrollView contentContainerStyle={styles.mainWrapper}>
            <WelcomeText userName={"Vitaliy"}></WelcomeText>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainWrapper: {
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
    }
})