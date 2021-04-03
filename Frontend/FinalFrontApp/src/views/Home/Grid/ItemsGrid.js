import React from 'react';
import { useSelector } from "react-redux";
import { getChildrenFromParentID } from "../../../redux/selectors/itemSelectors"
import { SafeAreaView, StatusBar, View, StyleSheet, Text } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

import HomeHeader from '../Header/HomeHeader';
import GridItem from './GridItem';
import HomeFooter from '../Footer/HomeFooter';

export default function ItemsGrid({navigation}) {
  const [editMode, setEditMode] = React.useState(false);
  const items = useSelector(state => getChildrenFromParentID(state.items, 0));

  function onLongPressItem() {
    setEditMode(!editMode);
  }

  return (
    <SafeAreaView style={styles.rootContainer}>
      <HomeHeader 
        pageTitle={"Accueil"} 
        canGoBack={false} 
        helpTips={true} 
      />

      <View style={styles.bodyContainer}>
        {items
          ? (<FlatGrid 
              itemDimension={130} 
              data={items} 
              spacing={10}
              renderItem={({ item }) => (
                <GridItem item={item} 
                  navigation={navigation}
                  editMode={editMode} 
                  onLongPress={onLongPressItem} 
                />
              )}
              style={styles.gridView}
            />)
          : <Text style={styles.placeholder}>{"Aucun article."}</Text>
        }
      </View>
      <HomeFooter parentID={0} se />
    </SafeAreaView>
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
  },
  placeholder: {
    fontSize: 25,
    color: 'black',
    fontWeight: '600',
  },
  gridView: {
    width: '100%',
  },
});