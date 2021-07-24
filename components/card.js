import React from 'react';
import { View, Text, Image, StyleSheet, Pressable} from 'react-native';

export default function Card (props) {
    return (
        <Pressable>
            <View style={[styles.cardWrapper, {backgroundColor: props.color}]} >
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.price}>{props.price}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    cardWrapper: {
        backgroundColor: 'green',
        display: 'flex',
        alignSelf: 'center',
        borderRadius: 7,
        borderColor: 'rgba(94, 94, 94, 0.61)',
        width: '100%',
        height: 250,
        marginTop: 25,
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 0.5,
    },
    title: {
        fontSize: 35,
    },
    price: {
        fontSize: 40,
        textAlign: 'right',
        marginTop: '100%',
        marginRight: 10,
    }
})