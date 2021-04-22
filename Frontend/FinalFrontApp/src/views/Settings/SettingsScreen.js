import React from 'react';
import { View, StatusBar, StyleSheet, Text, Switch } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';
import {changeThemeColor } from '../../redux/actions/themeActions';
import AppHeader from '../../components/AppHeader';
import { resetStore } from '../../redux/actions/storeActions';

export default function SettingsScreen() {
  const [classicTheme, setClassicTheme] = React.useState(true);
  const dispatch = useDispatch();

  function switchTheme() {
    let color = "";

    if (!classicTheme) {
      color = "#fb8500";
    } else {
      color = "#1f89dc"
    }
    setClassicTheme(!classicTheme);
    dispatch(changeThemeColor(color));
  }

  return (
    <View style={styles.rootContainer}>
      <AppHeader 
        pageTitle={"Paramètres"} 
        canGoBack={false} 
        helpTips={false} 
      />

      <View style={styles.bodyContainer}>
        <View style={styles.parameter}>
          <Text style={{fontSize: 20, fontWeight: '500', margin: 20}}>Theme :</Text>
          <Switch 
            trackColor={{ true: "#fb8500", false: "#1f89dc" }}
            thumbColor={classicTheme ? "white" : "white"}
            ios_backgroundColor="#1f89dc"
            onValueChange={switchTheme}
            value={classicTheme}
          />
        </View>
        <View style={styles.parameter}>
          <Button title={"Reset application state"} 
            buttonStyle={{ backgroundColor:'red' }} 
            icon={
              <Icon 
                type="font-awesome-5" 
                name="exclamation-triangle" 
                iconStyle={{ paddingLeft: 5, paddingRight: 10 }} 
              />
            }
            onPress={() => dispatch(resetStore())}
          />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginTop: StatusBar.currentHeight,
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  bodyContainer: {
    width: '100%',
    flex: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  parameter: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});