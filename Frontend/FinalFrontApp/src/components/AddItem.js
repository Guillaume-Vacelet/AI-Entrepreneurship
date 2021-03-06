import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon, Overlay, Input, Button } from 'react-native-elements';
import { useDispatch } from "react-redux";
import { addItem } from "../redux/actions/itemActions";
import { useSelector } from "react-redux";

export default function AddItem(props) {
  const [overlayVisibility, setOverlayVisibility] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const themeColor = useSelector(state => state.theme.themeColor);
  const dispatch = useDispatch();

  const toggleOverlay = () => {
    setOverlayVisibility(!overlayVisibility);
  };

  function handleNewItem() {
    dispatch(addItem(inputValue, props.parentID, null))
    toggleOverlay()
  }

  return (
    <View style={styles.addItemButton}>
      <Icon
        raised
        name='plus'
        type='font-awesome'
        color={themeColor}
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
          disabled={!inputValue}
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