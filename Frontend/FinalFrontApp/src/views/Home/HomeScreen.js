import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ItemsGrid from './Grid/ItemsGrid'
import ItemsList from './List/ItemsList'

export default function HomeScreen() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Grid" >
      <Stack.Screen name="Grid" component={ItemsGrid} options={{headerShown: false}} />
      <Stack.Screen name="List" component={ItemsList} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}