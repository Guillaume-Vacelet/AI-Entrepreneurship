import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function NoSearchPlaceholder() {
    return (
      <View style={styles.noSearchPlaceholder}>
        <Text style={styles.noSearchPlaceholderText}>Search movies on </Text>
        <Image style={styles.tmdbLogo} source={require('../../assets/tmdb_logo.png')} />
      </View>
    );
}

const styles = StyleSheet.create({
  noSearchPlaceholder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noSearchPlaceholderText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  tmdbLogo: {
    width: 50,
    height: 50,
    margin: 5
  }
});

