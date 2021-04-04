import React from 'react';
import { Icon, Input } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from "react-redux";
import { editItemTitle, editItemPrice, removeItem, editItemImage } from "../../../redux/actions/itemActions";
import ImagePickerButton from '../../../components/ImagePickerButton';

export default function GridItemEditMode(props) {
  const dispatch = useDispatch();

  function handleRenameItem(input) {
    props.setItemTitle(input);
    dispatch(editItemTitle(props.itemID, input));
  }
  function handleRepriceItem(input) {
    props.setItemPrice(input);
    dispatch(editItemPrice(props.itemID, input));
  }
  function handleRemoveItem() {
    dispatch(removeItem(props.itemID));
  }

  return (
    <View style={styles.editMode}>
      <View style={styles.buttons}>
        <ImagePickerButton itemID={props.itemID} />
        <Icon 
          name='times-circle' 
          type='font-awesome' 
          color='red' 
          onPress={handleRemoveItem}
        />
      </View>
      <View style={styles.inputs}>
        <Input 
          value={props.itemTitle} 
          onChangeText={(input) => handleRenameItem(input)}
          leftIcon={
            <Icon 
              name='pen' 
              type='font-awesome-5' 
              color='black' 
              size={12} 
              iconStyle={{marginRight: 5}}
            />
          }
          containerStyle={{flex: 2}}
        />
        <Input 
          value={props.itemPrice ? props.itemPrice.toString() : ""} 
          onChangeText={(input) => handleRepriceItem(input)}
          leftIcon={
            <Icon 
              name='euro-sign' 
              type='font-awesome-5' 
              color='black' 
              size={12} 
              iconStyle={{marginRight: 5}}
            />
          }
          containerStyle={{flex: 1}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  editMode: {
    height: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  buttons: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  inputs: {
    display: 'flex',
    flexDirection: 'row',
  }
});