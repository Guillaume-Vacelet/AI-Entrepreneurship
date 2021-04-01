import React from 'react';
import { Icon, Input } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';

export default function GridItemEditMode(props) {
  return (
    <View style={styles.editMode}>
      <Icon 
        name='times-circle' 
        type='font-awesome' 
        color='red' 
        onPress={props.handleRemoveItem} 
      />
      <Input 
        value={props.itemTitle} 
        onChangeText={(input) => props.handleRenameItem(input)}
        leftIcon={
          <Icon 
            name='pen' 
            type='font-awesome-5' 
            color='black' 
            size={12} 
            iconStyle={{marginRight: 10}}
          />
        }
        // style={{backgroundColor:'#EEEEEE'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  editMode: {
    height: '100%',
    display: 'flex',
    // flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  }
});