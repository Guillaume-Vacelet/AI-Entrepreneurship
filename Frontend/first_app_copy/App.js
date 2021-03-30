import 'react-native-gesture-handler';
import React from 'react';
import { LogBox, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SearchScreen from './src/views/Search/SearchScreen';
import FavoritesScreen from './src/views/Favorites/FavoritesScreen';
import SettingsScreen from './src/views/Settings/SettingsScreen';


LogBox.ignoreLogs(['Remote debugger']);

export default function App() {
  const BottomNavBar = createBottomTabNavigator();

  return (
      <NavigationContainer>
        <BottomNavBar.Navigator initialRouteName="Search"
        tabStyle={styles.bottomNavBar}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'gray',
        }}
        >
          <BottomNavBar.Screen name="Search" component={SearchScreen} />
          <BottomNavBar.Screen name="Favorites" component={FavoritesScreen} />
          <BottomNavBar.Screen name="Settings" component={SettingsScreen} />
        </BottomNavBar.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bottomNavBar: {
  }
});