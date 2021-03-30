import React from 'react';
import { View, Image, ImageBackground, Text, StyleSheet } from 'react-native';

import ButtonMakeFavorite from '../../components/ButtonMakeFavorite'

export default function SearchResult(props) {
  let poster_url = 'https://image.tmdb.org/t/p/w500';

  if (props.data.poster_path == null) {
    poster_url = null;
  } else {
    poster_url += props.data.poster_path;
  }

  return (
    <View style={styles.searchResult}>
      {poster_url === null
        ? (<Text style={styles.title}>{ props.data.title }</Text>)
        : (<Image style={styles.poster} source={{uri: poster_url}} />)
      }
      <ButtonMakeFavorite />
      {/* <Text style={styles.title}>{ props.data.title }</Text> */}
      {/* <View style={styles.informations}> */}
        {/* <Text style={styles.information}>Release date: { props.data.release_date }</Text> */}
        {/* <Text style={styles.information}>Original language: { props.data.original_language.toUpperCase() }</Text> */}
        {/* <Text style={styles.information}>Rating: { props.data.vote_average }/10</Text> */}
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  searchResult: {
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 175,
    width: 120
  },
  poster: {
    height: 175,
    width: 120,
  },
  // informations: {
  //   flexDirection: 'column',
  //   padding: 10,
  //   flexShrink: 2,
  // },
  title: {
    fontSize: 15,
    paddingBottom: 10,
  },
  // information: {
  //   fontSize: 11,
  //   paddingBottom: 5,
  // }
});