import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import { HomeStackNavigator, SettingStackNavigator, FormStackNavigator, InfoStackNavigator } from './StackNavigator'
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator 
      initialRouteName={INITIAL_ROUTE_NAME}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-sharp';
          } else if (route.name === 'Form') {
            iconName = 'reader-sharp';
          } else if (route.name === 'Info'){
            iconName = 'list-sharp';
          } else if (route.name === 'Settings'){
            iconName = 'settings-sharp'
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#3FBFBF',
        inactiveTintColor: 'gray',
      }}
    >
    
      <BottomTab.Screen 
        name="Home" 
        component={HomeStackNavigator}
        options={{
          title: 'Home',
        }}
      />
      <BottomTab.Screen 
        name="Form" 
        component={FormStackNavigator}
        options={{
          title: 'Form',
        }}
      />
      <BottomTab.Screen 
        name="Settings" 
        component={SettingStackNavigator} 
        options={{
          title: 'Settings',
        }}
      />
    </BottomTab.Navigator>
  )
}

export default BottomTabNavigator;
