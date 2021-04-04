import React from 'react';
import { StyleSheet, Pressable, View, ImageBackground, Text } from 'react-native';
import GridItemEditMode from './GridItemEditMode';

export default function GridItem(props) {
  const [itemTitle, setItemTitle] = React.useState(props.item.title);
  const [itemPrice, setItemPrice] = React.useState(props.item.price);
  React.useEffect(() => setItemTitle(props.item.title));
  React.useEffect(() => setItemPrice(props.item.price));

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
        ? <GridItemEditMode 
            itemID={props.item.id}
            itemTitle={itemTitle}
            itemPrice={itemPrice}
            setItemTitle={setItemTitle}
            setItemPrice={setItemPrice}
          />
        : <ImageBackground 
            style={styles.itemImage} 
            imageStyle={{ borderRadius: 10, opacity: 0.8}} 
            source={{uri: props.item.image}}
          >
            <View style={styles.itemInfos}>
              <Text style={styles.itemTitle}>{itemTitle}</Text>
              {props.item.price
                ? <Text style={styles.itemPrice}>€{itemPrice}</Text>
                : null
              }
            </View>
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
  itemInfos: {
    // backgroundColor: 'black',
    // opacity: 0.2
    margin: 10,
    flexDirection: 'row'
  },
  itemTitle: {
    fontSize: 25,
    color: 'black',
    fontWeight: '600',
    flex: 1
  },
  itemPrice: {
    color: 'black',
    fontSize: 25,
    fontWeight: '600',
    alignSelf: 'flex-end'
  }
});