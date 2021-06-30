import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
// import { Card, ListItem, Button, Icon } from 'react-native-elements';
import Card from '../components/card'

const cardData = require('../assets/cards.json');

export default function CardsScreen() {
    return(
        <ScrollView style={styles.cardView}>
            <Card title={cardData.cards[0].name} color={cardData.cards[0].color}></Card>
            <Card title={cardData.cards[1].name} color={cardData.cards[1].color}></Card>
            <Card title="HELLO WORLD"></Card>
            <Card title="HELLO WORLD"></Card>
            <Card title="HELLO WORLD"></Card>
            <Card title="HELLO WORLD"></Card>
            <Card title="HELLO WORLD"></Card>
            <Card title="HELLO WORLD"></Card>
            <Card title="HELLO WORLD"></Card>
            <Card title="HELLO WORLD"></Card>
            <Card title="HELLO WORLD"></Card>
        </ScrollView>       
    )
}

const styles = StyleSheet.create({
 cardView: {
        display: 'flex',
 },
})