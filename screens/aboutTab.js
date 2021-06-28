import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function AboutScreen() {
    return (
        <View>
            <Header
            centerComponent={{text: 'ABOUT', style: {color: "#006e0f"} }}
            />
        </View>
    );
  }  