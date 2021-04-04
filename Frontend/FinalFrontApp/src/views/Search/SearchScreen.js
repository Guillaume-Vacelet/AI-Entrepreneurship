import React from 'react';
import { View, StatusBar, StyleSheet, Text, Image } from 'react-native';
import { SearchBar, ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { getItemsFromTitle } from '../../redux/selectors/itemSelectors';
import noImage from '../../../assets/items_images/no_image.png';
import AppHeader from '../../components/AppHeader';

export default function SearchScreen() {
  const [search, setSearch] = React.useState('');
  const searchResults = useSelector(state => getItemsFromTitle(state.items, search));

  return (
    <View style={styles.rootContainer}>
      <AppHeader 
        pageTitle={"Recherche"} 
        canGoBack={false} 
        helpTips={false} 
      />
      <View style={styles.bodyContainer}>
        <SearchBar
          placeholder="Cherchez des produits ici..."
          onChangeText={setSearch}
          value={search}
          containerStyle={{width: '100%', backgroundColor: 'white'}}
          inputContainerStyle={{backgroundColor: 'white'}}
          inputStyle={{backgroundColor: 'white'}}
        />
        {searchResults.map((searchResult) => (
          <ListItem bottomDivider key={searchResult.id} style={styles.itemContainer}>
            <View style={styles.itemImageContainer}>
              {searchResult.image
                ? <Image style={styles.itemImage} source={{uri: searchResult.image}} />
                : <Image style={styles.itemImage} source={{uri: Image.resolveAssetSource(noImage).uri}} />
              }
            </View>
            <ListItem.Content>
              <ListItem.Title style={styles.itemTitle}>{searchResult.title}</ListItem.Title>
            </ListItem.Content>
            {searchResult.price
              ? <Text style={styles.itemTitle}>{searchResult.price}€</Text>
              : <ListItem.Chevron />
            }
          </ListItem>
        ))}
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
    alignItems: 'center',
  },
  itemContainer: {
    width: "100%"
  },
  itemImageContainer: {
    width: 70,
    height: 65,
    justifyContent: 'center'
  },
  itemImage: {
    width: 70,
    height: 65,
  },
  itemTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: '400',
  },
});