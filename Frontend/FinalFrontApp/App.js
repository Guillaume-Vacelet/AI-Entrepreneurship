import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
// redux
import { Provider } from "react-redux";
import store from "./src/redux/store";
// react-navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// components
import HomeScreen from './src/views/Home/HomeScreen';
import SearchScreen from './src/views/Search/SearchScreen';
import SettingsScreen from './src/views/Settings/SettingsScreen';

export default function App() {
  const BottomNavBar = createBottomTabNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomNavBar.Navigator initialRouteName="Home"
          tabStyle={styles.bottomNavBar}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                  iconName = 'home';
              } else if (route.name === 'Search') {
                  iconName = 'search';
              } else if (route.name === 'Settings') {
                  iconName = 'cog';
              } else {
                  iconName = 'question'
              }
              return <Icon name={iconName} size={size} color={color} type={"font-awesome-5"}/>;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#fb8500',
            inactiveTintColor: 'gray',
            showLabel: false
          }}
        >
          <BottomNavBar.Screen name="Home" component={HomeScreen} />
          <BottomNavBar.Screen name="Search" component={SearchScreen} />
          <BottomNavBar.Screen name="Settings" component={SettingsScreen} />
        </BottomNavBar.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  bottomNavBar: {
  }
});