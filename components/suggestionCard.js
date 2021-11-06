import React from 'react';
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';
import PropertyCard from '../components/card';

export default function SuggestionCard(props) {


  return (
    <View style={styles.wrapper}>
      <Text style={styles.suggText}>{props.suggestion}</Text>
      <ScrollView horizontal={true} style={styles.scrollView} showsHorizontalScrollIndicator={false}>
        <PropertyCard homes={'home-remove'}></PropertyCard>
        <PropertyCard homes={'home-floor-1'}></PropertyCard>
        <PropertyCard homes={'home-floor-2'}></PropertyCard>
        <PropertyCard homes={'home-floor-3'}></PropertyCard>
        <PropertyCard homes={'home-floor-l'}></PropertyCard>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#e8e8e8',
    width: '96%',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    overflow: 'visible',
    marginBottom: 10,
  },
  suggText: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 5,
  },
  scrollView: {
    margin: 5,
  }
})