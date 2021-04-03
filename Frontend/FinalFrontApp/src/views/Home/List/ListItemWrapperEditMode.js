import React from 'react';
import { ListItem, Icon, Input } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from "react-redux";
import { editItemTitle, editItemPrice, removeItem } from "../../../redux/actions/itemActions"

export default function ListItemWrapperEditMode(props) {
  const [itemTitle, setItemTitle] = React.useState(props.item.title);
  const [itemPrice, setItemPrice] = React.useState(props.item.price);
  React.useEffect(() => setItemTitle(props.item.title));
  React.useEffect(() => setItemPrice(props.item.price));

  const dispatch = useDispatch();

  function handleRenameItem(input) {
    setItemTitle(input);
    dispatch(editItemTitle(props.item.id, input));
  }
  function handleRepriceItem(input) {
    setItemPrice(input);
    dispatch(editItemPrice(props.item.id, input));
  }
  function handleRemoveItem() {
    dispatch(removeItem(props.item.id));
  }

  return (
    <ListItem bottomDivider>
      <View style={styles.itemImageContainer}>
        <Icon 
          name='times-circle' 
          type='font-awesome' 
          color='red' 
          onPress={handleRemoveItem} 
        />
      </View>
      <ListItem.Content>
        <Input 
          value={itemTitle} 
          onChangeText={(input) => handleRenameItem(input)}
          leftIcon={
            <Icon 
              name='pen' 
              type='font-awesome-5' 
              color='black' 
              size={12} 
              iconStyle={{marginRight: 10}}
            />
          }
          containerStyle={{width: 150}}
        />
      </ListItem.Content>
      <Input
        value={itemPrice ? itemPrice.toString() : ""} 
        onChangeText={(input) => handleRepriceItem(input)}
        leftIcon={
          <Icon 
            name='pen' 
            type='font-awesome-5' 
            color='black' 
            size={12} 
            iconStyle={{marginRight: 10}}
          />
        }
        containerStyle={{width: 80}}
      />
    </ListItem>
  );
}

const styles = StyleSheet.create({
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
  wrapperCustom: {
    justifyContent: 'center'
  },
  editMode: {
    height: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  }
});