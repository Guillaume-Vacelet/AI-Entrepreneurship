import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function RoundedTextInput(props) {
    return (
      <TextInput 
        style={styles.textInput}
        onChangeText={props.onChangeText}
        value={props.text}
        placeholder={props.placeholder}
      />
    );
}

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 25,
    width: '70%',
    height: 35,
    marginStart: 20,
    marginEnd: 10,
    borderWidth: 0.3,
    textAlign: 'center'
  }
});