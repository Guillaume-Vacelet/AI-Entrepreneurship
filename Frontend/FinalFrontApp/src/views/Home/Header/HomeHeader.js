import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import HelpTips from '../../../components/HelpTips';

export default function HomeHeader(props) {
  return (
    <Header 
      statusBarProps={{translucent: true}} 
      backgroundColor={"#fb8500"}
      leftComponent={props.canGoBack
        ? <Icon
            raised 
            name='arrow-left' 
            type='font-awesome' 
            color='#fb8500' 
            onPress={props.goBack} 
            
          />
        : null
      }
      centerComponent={
        <Text style={styles.headerTitle}>{props.pageTitle}</Text>
      }
      rightComponent={props.helpTips ? <HelpTips /> : null}
      rightContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
      centerContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
      leftContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
      containerStyle={styles.headerContainer}
    />
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    maxHeight: '15%',
    minHeight: '10%',
    flex: 1
  },
  headerTitle: {
    fontSize: 25,
    color: 'white',
    fontWeight: '600',
  },
});