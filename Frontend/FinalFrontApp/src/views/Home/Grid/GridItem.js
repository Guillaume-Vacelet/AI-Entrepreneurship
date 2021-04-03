import React from 'react';
import { StyleSheet, Pressable, ImageBackground, Text } from 'react-native';
import GridItemEditMode from './GridItemEditMode';

export default function GridItem(props) {
  function handleOnPress() {
    if (!props.item.price) {
      props.navigation.push('List', props.item)
    }
  }
   
  return (
    <Pressable 
      onPress={handleOnPress}
      onLongPress={props.onLongPress}
      style={({ pressed }) => [
        {backgroundColor: pressed ? '#686868' : 'white' },
        styles.itemContainer
      ]}
    >
      {props.editMode
        ? <GridItemEditMode item={props.item} />
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