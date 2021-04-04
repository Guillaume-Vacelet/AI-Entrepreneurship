import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { useSelector } from "react-redux";

export default function BottomNavBar(props) {
  const BottomNavBar = createBottomTabNavigator();
  const themeColor = useSelector(state => state.theme.themeColor);

  return (
    <BottomNavBar.Navigator initialRouteName="Home"
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
            activeTintColor: themeColor,
            inactiveTintColor: 'gray',
            showLabel: false
          }}
        >
          <BottomNavBar.Screen name="Home" component={props.homeScreen} />
          <BottomNavBar.Screen name="Search" component={props.searchScreen} />
          <BottomNavBar.Screen name="Settings" component={props.settingsScreen} />
        </BottomNavBar.Navigator>
  )
}