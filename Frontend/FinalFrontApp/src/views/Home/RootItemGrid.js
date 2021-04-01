import React from 'react';
import { SafeAreaView, StatusBar, View, StyleSheet, Text } from 'react-native';
import { useSelector } from "react-redux";
import { FlatGrid } from 'react-native-super-grid';

import RootItem from './RootItem'
import AddItem from '../../components/AddItem'
import HelpTips from '../../components/HelpTips';

export default function RootItemGrid() {
  const [deleteVisible, setDeleteVisible] = React.useState(false);
  const state = useSelector(state => state.items);

  function onLongPressItem() {
    setDeleteVisible(!deleteVisible);
  }

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <HelpTips />
      </View>
      <View style={styles.bodyContainer}>
        {state.items
          ? (<FlatGrid 
              itemDimension={130} 
              data={Object.values(state.items)} 
              style={styles.gridView} 
              spacing={10}
              renderItem={({ item }) => (
                <RootItem item={item} 
                  deleteVisible={deleteVisible} 
                  onLongPress={onLongPressItem} 
                />
              )}
            />)
          : <Text style={styles.placeholder}>{"No items yet."}</Text>
        }
      </View>
      <View style={styles.footerContainer}>
        <AddItem />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: StatusBar.currentHeight,
  },
  headerContainer: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyContainer: {
    width: '100%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
  },
  gridView: {
  },
  placeholder: {
    fontSize: 25,
    color: 'black',
    fontWeight: '600',
  }
});