import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

export default function Card (props) {
    return (
        <View style={[styles.cardWrapper, {backgroundColor: props.color}]} >
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardWrapper: {
        backgroundColor: 'green',
        display: 'flex',
        alignSelf: 'center',
        borderRadius: 7,
        width: '43%',
        height: 250,
        marginTop: 25,
        marginLeft: 5,
        marginRight: 5,
        borderWidth: 0.5,
    },
    text: {
        fontSize: 50,
    }
})