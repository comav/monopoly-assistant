import React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import WelcomeText from '../components/welcomeText';
import DebugMenu from '../components/debugMenu';

import { useSelector } from 'react-redux';
import CardThemeSuggestion from '../components/cardThemeSuggestion';

export default function HomeScreen() {

  const username = useSelector((state) => state.username);
  const debugShown = useSelector((state) => state.debug);

  return (
    <ScrollView contentContainerStyle={styles.mainWrapper}>
      <StatusBar translucent />
      <WelcomeText username={username} />
      <CardThemeSuggestion />
      {debugShown ? <DebugMenu /> : null}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  mainWrapper: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
  },
  cardSuggestionImage: {
    height: 150,
    width: 240,
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 10,
  },
  scrollCardView: {
    marginBottom: 5
  }
})