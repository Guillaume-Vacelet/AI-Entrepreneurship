import React from 'react';
import { View, StatusBar, StyleSheet, Text } from 'react-native';
import AppHeader from '../../components/AppHeader';

export default function SearchScreen() {
  return (
    <View style={styles.rootContainer}>
      <AppHeader 
        pageTitle={"Recherche"} 
        canGoBack={false} 
        helpTips={false} 
      />
      <View style={styles.bodyContainer}>
        <Text>Recherche</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: StatusBar.currentHeight,
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  bodyContainer: {
    width: '100%',
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  }
});