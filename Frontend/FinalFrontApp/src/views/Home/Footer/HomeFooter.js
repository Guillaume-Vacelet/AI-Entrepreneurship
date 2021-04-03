import React from 'react';
import { View, StyleSheet } from 'react-native';
import AddItem from '../../../components/AddItem'

export default function Footer(props) {
  return (
    <View style={styles.footerContainer}>
      <AddItem parentID={props.parentID} />
    </View>
  )
}

const styles = StyleSheet.create({
  footerContainer: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    flex: 1,
  }
});