import React from 'react';
import { StyleSheet, SafeAreaView, View, Button, StatusBar, ActivityIndicator, Keyboard } from 'react-native';

import RoundedTextInput from '../../components/RoundedTextInput';
import SearchResult from './SearchResult';
import List from '../../components/List';

// import SearchResultsList from './SearchResultsList';
// import NoSearchPlaceholder from './NoSearchPlaceholder';

import TmdbAPI from '../../api/TmdbAPI';

export default function SearchScreen() {
  const [input, setInput] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const tmdbAPI = new TmdbAPI();

  function getSearchResults() {
    Keyboard.dismiss();
    
    if (!input) {
      return;
    }
    setIsLoading(true);
    setSearch(input);

    return new Promise((resolve) => {
        setTimeout(() => {
          tmdbAPI.getMovieFromAPI(search).then((data) => {
            setSearchResults(data);
            setIsLoading(false);
            resolve();
          }).catch();
        }, 100);
    });
  };

  function clearSearchResults() {
    setSearch("");
    // setSearchResults([]);
  }

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <RoundedTextInput text={input} onChangeText={setInput} placeholder="Search movies..." />
        <Button title="Search" color="black" onPress={getSearchResults} />
      </View>

      <View style={styles.bodyContainer}>
        <StatusBar hidden={ false } backgroundColor="#FFFFFF" barStyle="dark-content" translucent={ true } />
        
        {isLoading
          ? (<ActivityIndicator size="large" color="blue" />)
          : (<List data={searchResults.results} elementComponent={<SearchResult />} numColumns={'3'}/>)
        }
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