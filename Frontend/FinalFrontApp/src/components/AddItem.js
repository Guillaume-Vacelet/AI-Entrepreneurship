import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon, Overlay, Input, Button } from 'react-native-elements';
import { useDispatch } from "react-redux";
import { addItem } from "../redux/actions/itemActions";

export default function AddItem() {
  const [overlayVisibility, setOverlayVisibility] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const dispatch = useDispatch();

  const toggleOverlay = () => {
    setOverlayVisibility(!overlayVisibility);
  };

  function handleNewItem() {
    dispatch(addItem(inputValue, '', ''))
    toggleOverlay()
  }

  return (
    <View style={styles.addItemButton}>
      <Icon
        raised
        name='plus'
        type='font-awesome'
        color='#fb8500'
        onPress={() => toggleOverlay()}
      />

      <Overlay isVisible={overlayVisibility} onBackdropPress={toggleOverlay} overlayStyle={{width: 300, padding: 20}}>
        <Text style={styles.modalTitle}>Nouvelle catégorie</Text>
        <Input 
          placeholder='Titre' 
          onChangeText={(value) => setInputValue(value)}
          inputStyle={{margin: 10}}
        />
        <Button 
          title="valider" 
          onPress={handleNewItem}
          buttonStyle={{width: 100, alignSelf: 'center'}} 
        />
      </Overlay>

    </View>
  );
}

const styles = StyleSheet.create({
  addItemButton: {
    alignSelf: 'center',
  },
  modalTitle: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
    alignSelf: 'center',
    marginBottom: 20
  }
});