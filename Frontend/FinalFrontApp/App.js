import 'react-native-gesture-handler';
import React from 'react';
// redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import {store, persistedStore} from "./src/redux/store";
// react-navigation
import { NavigationContainer } from '@react-navigation/native';
// components
import HomeScreen from './src/views/Home/HomeScreen';
import SearchScreen from './src/views/Search/SearchScreen';
import SettingsScreen from './src/views/Settings/SettingsScreen';
import BottomNavBar from './src/components/BottomNavBar';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <NavigationContainer>
          <BottomNavBar 
            homeScreen={HomeScreen}
            searchScreen={SearchScreen}
            settingsScreen={SettingsScreen}
          />
        </NavigationContainer>
        </PersistGate>
    </Provider>
  );
}