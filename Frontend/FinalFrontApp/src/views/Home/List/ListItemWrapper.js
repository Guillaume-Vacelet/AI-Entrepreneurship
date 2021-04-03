import React from 'react';
import { StyleSheet, Pressable, Image, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import ListItemWrapperEditMode from './ListItemWrapperEditMode'

export default function ListItemWrapper(props) {
  function handleOnPress() {
    if (!props.item.price) {
      props.navigation.push('List', props.item)
    }
  }

  return (
    <Pressable 
      onPress={handleOnPress} 
      onLongPress={props.onLongPress}
      style={(pressed) => [
        { backgroundColor: pressed ? '#686868' : 'white' }, 
        styles.wrapperCustom
      ]}
    >
      {props.editMode
        ? <ListItemWrapperEditMode item={props.item} />
        : <ListItem bottomDivider>
            <View style={styles.itemImageContainer}>
              {props.item.image
                ? <Image style={styles.itemImage} source={props.item.image} />
                : <Image style={styles.itemImage} source={require('../../../../assets/items_images/no_image.png')} />
              }
            </View>
            <ListItem.Content>
              <ListItem.Title style={styles.itemTitle}>{props.item.title}</ListItem.Title>
            </ListItem.Content>
            {props.item.price
              ? <Text style={styles.itemTitle}>{props.item.price}€</Text>
              : <ListItem.Chevron />
            }
          </ListItem>
      }
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
  },
  itemImageContainer: {
    width: 70,
    height: 55,
    justifyContent: 'center'
  },
  itemImage: {
    width: 70,
    height: 55,
  },
  itemTitle: {
    fontSize: 18,
    color: 'black',
    fontWeight: '400',
  },
});