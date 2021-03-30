import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Button } from 'react-native-elements';


export default function ButtonMakeFavorite() {
  return (
    <Button 
      type="clear"
      icon={<Icon style={styles.icon} name="favorite" size={25} color="black" />}
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
  }
});