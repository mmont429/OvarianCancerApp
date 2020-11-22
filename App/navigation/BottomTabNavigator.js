import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import { HomeStackNavigator, SettingStackNavigator, FormStackNavigator, InfoStackNavigator } from './StackNavigator'
import TabBarIcon from '../components/TabBarIcon';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen 
        name="Home" 
        component={HomeStackNavigator}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
      <BottomTab.Screen 
        name="Form" 
        component={FormStackNavigator}
        options={{
          title: 'Pantry',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
      <BottomTab.Screen 
        name="Info" 
        component={InfoStackNavigator} 
        options={{
          title: 'Shopping List',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-list" />,
        }}
      />
      <BottomTab.Screen 
        name="Settings" 
        component={SettingStackNavigator} 
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-settings" />,
        }}
      />
    </BottomTab.Navigator>
  )
}

export default BottomTabNavigator;

