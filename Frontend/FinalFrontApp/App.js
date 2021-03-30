import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/views/Home/HomeScreen';
import SearchScreen from './src/views/Search/SearchScreen';


export default function App() {
  const BottomNavBar = createBottomTabNavigator();

  return (
      <NavigationContainer>
        <BottomNavBar.Navigator initialRouteName="Home"
        tabStyle={styles.bottomNavBar}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'gray',
        }}
        >
          <BottomNavBar.Screen name="Home" component={HomeScreen} />
          <BottomNavBar.Screen name="Search" component={SearchScreen} />
        </BottomNavBar.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bottomNavBar: {
  }
});