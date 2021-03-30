import React from 'react';
import { View, Button, Text, FlatList, StyleSheet } from 'react-native';

import SearchResult from './SearchResult';

export default function SearchResultsList(props) {
  return (
    <View>

      {props.data.results
        ? (<View style={styles.searchResultsHeader}>
            <Text style={styles.resultsNumber}>{props.data.total_results} results for "{props.search}"</Text>
            {/* <Button style={styles.clearButton} title="Clear" color="black" onPress={props.clear} /> */}
          </View>)
        : (null)
      }
      
      <FlatList style={styles.searchResultList}
        data={props.data.results}
        renderItem={({item}) => (<SearchResult data={item} />)}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchResultsHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  resultsNumber: {
    marginLeft: 5,
    marginVertical: 20,
    fontWeight: 'bold',
  },
  clearButton: {
  }
});