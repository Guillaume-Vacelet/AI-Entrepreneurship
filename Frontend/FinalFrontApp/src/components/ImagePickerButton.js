import React from 'react';
import { Image, View, Platform, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import { editItemImage } from '../redux/actions/itemActions';
import { useDispatch } from 'react-redux';

export default function ImagePickerButton(props) {
  const [image, setImage] = React.useState(null);
  const dispatch = useDispatch();

  React.useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      dispatch(editItemImage(props.itemID, result.uri));
    }
  };

  return (
    <Icon
      name="camera"
      type="font-awesome-5"
      onPress={pickImage}
    />
  );
}