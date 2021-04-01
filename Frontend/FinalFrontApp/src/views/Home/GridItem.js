import React from 'react';
import { useDispatch } from "react-redux";
import { editItemTitle, removeItem } from "../../redux/actions/itemActions";
import { StyleSheet, Pressable, ImageBackground, Text } from 'react-native';
import GridItemEditMode from './GridItemEditMode';

export default function GridItem(props) {
  const [itemTitle, setItemTitle] = React.useState(props.item.title);
  React.useEffect(() => {
    setItemTitle(props.item.title);
  });

  const dispatch = useDispatch();

  function handleRenameItem(input) {
    setItemTitle(input);
    dispatch(editItemTitle(props.item.id, input));
  }
  function handleRemoveItem() {
    dispatch(removeItem(props.item));
  }
   
  return (
    <Pressable 
      onLongPress={props.onLongPress}
      style={({ pressed }) => [
        {backgroundColor: pressed ? '#686868' : 'white' },
        styles.itemContainer
      ]}
    >
      {props.deleteVisible
        ? <GridItemEditMode 
            handleRemoveItem={handleRemoveItem} 
            handleRenameItem={handleRenameItem}
            itemTitle={itemTitle}
          />
        : <ImageBackground 
            style={styles.itemImage} 
            imageStyle={{ borderRadius: 10, opacity: 0.8}} 
            source={props.item.image}
          >
            <Text style={styles.itemTitle}>{props.item.title}</Text>
          </ImageBackground>
      }
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: 10,
    height: 150,
    maxHeight: 150,
  },
  itemImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  itemTitle: {
    fontSize: 25,
    color: 'black',
    fontWeight: '600',
    margin: 10,
  }
});