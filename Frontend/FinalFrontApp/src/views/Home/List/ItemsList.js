import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
//redux
import { useSelector } from "react-redux";
import { getChildrenFromParentID } from "../../../redux/selectors/itemSelectors"
//components
import AppHeader from '../../../components/AppHeader';
import ListItemWrapper from './ListItemWrapper';
import HomeFooter from '../Footer/HomeFooter';

export default function ItemsList({route, navigation}) {
  const [editMode, setEditMode] = React.useState(false);
  const parentItem = route.params;
  const items = useSelector(state => getChildrenFromParentID(state.items, parentItem.id));
  

  function onLongPressItem() {
    setEditMode(!editMode);
  }

  return (
    <View style={styles.rootContainer}>
      <AppHeader 
        pageTitle={parentItem.title} 
        canGoBack={true} 
        goBack={() => navigation.goBack()} 
        helpTips={true} 
      />

      <View style={styles.bodyContainer}>
        {items.map((child) => (
          <ListItemWrapper 
            navigation={navigation}
            item={child} 
            key={child.id}
            editMode={editMode} 
            onLongPress={onLongPressItem} 
          />
        ))}
      </View>
      <HomeFooter parentID={parentItem.id} />
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
    height: '80%',
    paddingBottom: 50,
    justifyContent: 'flex-start',
    flex: 5,
  }
});