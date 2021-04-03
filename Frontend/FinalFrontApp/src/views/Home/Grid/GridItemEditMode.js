import React from 'react';
import { Icon, Input } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from "react-redux";
import { editItemTitle, removeItem } from "../../../redux/actions/itemActions";


export default function GridItemEditMode(props) {
  const [itemTitle, setItemTitle] = React.useState(props.item.title);
  React.useEffect(() => setItemTitle(props.item.title));

  const dispatch = useDispatch();

  function handleRenameItem(input) {
    setItemTitle(input);
    dispatch(editItemTitle(props.item.id, input));
  }
  function handleRemoveItem() {
    dispatch(removeItem(props.item));
  }

  return (
    <View style={styles.editMode}>
      <Icon 
        name='times-circle' 
        type='font-awesome' 
        color='red' 
        onPress={handleRemoveItem} 
      />
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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  editMode: {
    height: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  }
});