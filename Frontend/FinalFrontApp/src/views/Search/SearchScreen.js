import React from 'react';
import { SafeAreaView, View, StatusBar, StyleSheet } from 'react-native';

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.rootContainer}>

      <View style={styles.headerContainer}>
      </View>

      <View style={styles.bodyContainer}>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  bodyContainer: {
    width: '100%',
    height: '100%',
    paddingTop: 20,
    paddingBottom: 50,
    justifyContent: 'flex-start',
  }
});