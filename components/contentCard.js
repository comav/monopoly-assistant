import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Image, Button } from 'react-native';

export default function ContentCard(props) {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.header}>{props.header}</Text>
            <View style={styles.divider} />
            <View style={styles.content}>
                <Text>{props.text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        borderWidth: 1,
        height: 100,
        width: '98%',
        borderRadius: 5,
        borderColor: 'rgba(94, 94, 94, 0.61)',
        marginBottom: 5,
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        fontSize: 30,
        textAlign: 'center',
    },
    content: {
        alignItems: 'center',
    },
    divider: {
        alignSelf: 'center',
        width: '95%',
        borderWidth: 0.5,
        borderColor: 'rgba(94, 94, 94, 0.61)',
        marginTop: 5,
        marginBottom: 5,
    },
})