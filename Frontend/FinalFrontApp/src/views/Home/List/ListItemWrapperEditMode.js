import React from 'react';
import { ListItem, Icon, Input } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from "react-redux";
import { editItemTitle, editItemPrice, removeItem } from "../../../redux/actions/itemActions"
import ImagePickerButton from '../../../components/ImagePickerButton';

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
      <View style={styles.buttons}>
        <Icon
          name='times-circle' 
          type='font-awesome' 
          color='red' 
          size={25} 
          onPress={handleRemoveItem} 
        />
        {/* <Icon
          name='times-circle' 
          type='font-awesome' 
          color='red' 
          size={20} 
          onPress={handleRemoveItem} 
        /> */}
        <ImagePickerButton 
          itemID={props.item.id} 
        />
      </View>
      <ListItem.Content style={styles.input}>
        <Input 
          value={itemTitle} 
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
          inputContainerStyle={{width: "100%"}}
          containerStyle={{width: 150}}
        />
        <Input
          value={itemPrice ? itemPrice.toString() : ""} 
          onChangeText={(input) => handleRepriceItem(input)}
          leftIcon={
            <Icon 
            name='pen' 
            type='font-awesome-5' 
            color='black' 
            size={12} 
            iconStyle={{marginRight: 5}}
            />
          }
          containerStyle={{width: 80}}
        />
      </ListItem.Content>
    </ListItem>
  );
}

const styles = StyleSheet.create({
  buttons: {
    display: 'flex',
    flex: 1,
    height: 65,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    display: 'flex',
    flex: 4,
    height: 65,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  editMode: {
    height: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  }
});