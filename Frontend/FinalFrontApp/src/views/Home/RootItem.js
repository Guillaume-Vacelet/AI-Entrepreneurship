import React from 'react';
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/actions/itemActions";
import { View, StyleSheet, Pressable, ImageBackground, Text } from 'react-native';
import { Icon } from 'react-native-elements';

export default function RootItem(props) {
  const dispatch = useDispatch();

  function handleRemoveItem() {
    
    dispatch(removeItem(props.item))
  }
   
  // let itemImage = require('../../../assets/items_images/' + props.item.image);

  return (
    <Pressable 
      onLongPress={props.onLongPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? '#686868'
            : 'white'
        },
        styles.wrapperCustom
      ]}
    >
      <View style={styles.itemContainer}>
        {props.deleteVisible
          ? <Icon 
              name='times' 
              type='font-awesome' 
              color='red' 
              onPress={handleRemoveItem} 
              iconStyle={{alignSelf: 'flex-end', marginBottom: 'auto'}}
            />
          : null
        }
        <ImageBackground 
          style={styles.itemImage} 
          imageStyle={{ borderRadius: 10, opacity: 0.8}} 
          source={props.item.image}
        >
          
          <Text style={styles.itemTitle}>{props.item.title}</Text>
        </ImageBackground>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: 150,
    maxHeight: 150,
  },
  itemImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    padding: 10,
  },
  itemTitle: {
    fontSize: 25,
    color: 'black',
    fontWeight: '600',
  },
  wrapperCustom: {
    borderRadius: 10,
  },
});